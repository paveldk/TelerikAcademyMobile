define(function (require) {
    var service = require("modules/homework/homework-services");
	
	var HomeworkModule = kendo.Class.extend({
        
        loadHomeworkList: function() {
            var that = this;
            
            service.getAll()
            .done(function(data) {
                if(!that.$itemsList)
                {
                    that.createList(data);
                }
                else {
                    that.refreshList(data);
                }
                
            })
            .fail(function(error) {
               
            });
        },
        
        refreshList: function(data) {
            var that = this;
            
            that.$itemsList.data("kendoMobileListView").dataSource.data(data);
            appController.app.hideLoading();
        },
        
        createList: function(data) {
            var that = this,
                templateContent = $("#homeworkTemplate").html();
                    
            that.$newsList = $("#homeworkList").kendoMobileListView({
                dataSource: data,
                template: templateContent
            });
            appController.app.hideLoading();
        }
	});
	
	var module = new HomeworkModule();
	return module;
});