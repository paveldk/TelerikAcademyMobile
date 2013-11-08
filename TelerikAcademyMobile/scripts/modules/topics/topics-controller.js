define(function (require) {
    var topicsService = require("modules/topics/topics-services");
	require("text!modules/samplemodule/samplemodule-css.css")
	
	var TopicsModule = kendo.Class.extend({
        
        loadTopicsList: function(topicsIdList) {
            var that = this;
            
            topicsService.getTopics(topicsIdList)
            .done(function(data) {
                if(!that.$topicsList)
                {
                    that.createTopicsList(data);
                }
                else {
                    that.refreshTopicsList(data);
                }
                
            })
            .fail(function(error) {
               
            });
        },
        
        createTopicsList: function(data) {
            var that = this,
                templateContent = $("#topicsTemplate").html();
                    
            that.$topicsList = $("#topicsList").kendoMobileListView({
                dataSource: data,
                template: templateContent
            });
            appController.app.hideLoading();
        },       
        
        refreshTopicsList: function(data) {
            var that = this;
            
            that.$topicsList.data("kendoMobileListView").dataSource.data(data);
            appController.app.hideLoading();
        },
	});
	
	var topicsModule = new TopicsModule();
	return topicsModule;
});