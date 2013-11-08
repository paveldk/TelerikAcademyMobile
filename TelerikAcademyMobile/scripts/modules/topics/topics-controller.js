define(function (require) {
    var topicsService = require("modules/topics/topics-services");
	
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
                template: templateContent,
                click: $.proxy(that.onTopicSelected,that)
            });
            appController.app.hideLoading();
        },       
        
        refreshTopicsList: function(data) {
            var that = this;
            
            that.$topicsList.data("kendoMobileListView").dataSource.data(data);
            appController.app.hideLoading();
        },
        
        onTopicSelected:function(e){
            var that = this,
                item = e.sender.dataSource.getByUid(e.item.data("uid"));
            
            require(["modules/topics/topic-controller"], function(topicController) {
                appController.app.navigate("scripts/modules/topics/topic-view.html");
                topicController.loadTopicView(item.Id);
                
            })
        }
	});
	
	var topicsModule = new TopicsModule();
	return topicsModule;
});