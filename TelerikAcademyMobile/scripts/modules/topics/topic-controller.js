define(function (require) {
    var topicsService = require("modules/topics/topics-services");
	
	var TopicsModule = kendo.Class.extend({
        
        loadTopicView: function(topicId) {
            var that = this,
                presentationBtn = $("#viewPresentation");
            
            presentationBtn.on("click", function() {
                appController.app.navigate("scripts/modules/presentation/presentation-view.html");
            });
            
            $("#play").on("click", $.proxy(that.setVideoUrl,that));
            
            topicsService.getTopic(topicId)
            .done(function(data) {
                var templateHtml = $("#topicDetailsTemplate").html();
                var template = kendo.template(templateHtml);
                $("#topicDetails").html(template(data[0]));
                that.url = "https://api.everlive.com/v1/6NF0HIgRaSAoFCd2/Files/" + data[0].Video + "/Download";
                
            })
            .fail(function(error) {
              
            });
        },
        
        setVideoUrl: function(item){
            var that = this;
            
            appController.url = that.url;
            appController.app.navigate("scripts/modules/topics/topic-view.html");
            
        }
	});
	
	var topicsModule = new TopicsModule();
	return topicsModule;
});