define(function (require) {
    var trainersServices = require("modules/trainers/trainers-services");
	
	var TrainersModule = kendo.Class.extend({
        
        loadTrainersList: function() {
            var that = this;
            
            trainersServices.getAllTrainers()
            .done(function(data) {
                if(!that.$newsList)
                {
                    that.createNewsList(data);
                }
                else {
                    that.refreshNewsList(data);
                }
                
            })
            .fail(function(error) {
               
            });
        },
        
        refreshNewsList: function(data) {
            var that = this;
            
            that.$newsList.data("kendoMobileListView").dataSource.data(data);
            appController.app.hideLoading();
        },
        
        createNewsList: function(data) {
            var that = this,
                templateContent = $("#trainersTemplate").html();
                    
            that.$newsList = $("#trainersList").kendoMobileListView({
                dataSource: data,
                template: templateContent
            });
            appController.app.hideLoading();
        }
	});
	
	var trainersModule = new TrainersModule();
	return trainersModule;
});