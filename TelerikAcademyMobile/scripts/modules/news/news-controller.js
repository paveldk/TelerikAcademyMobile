define(function (require) {
    var newsServices = require("modules/news/news-services");
	require("text!modules/samplemodule/samplemodule-css.css")
	
	var NewsModule = kendo.Class.extend({
        
        loadNewsList: function() {
            var that = this;
            
            newsServices.getAllNews()
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
                templateContent = $("#newsTemplate").html();
                    
            that.$newsList = $("#newsList").kendoMobileListView({
                dataSource: data,
                template: templateContent
            });
            appController.app.hideLoading();
        }
	});
	
	var newsModule = new NewsModule();
	return newsModule;
});