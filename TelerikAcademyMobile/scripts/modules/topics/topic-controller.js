define(function (require) {
    var topicsService = require("modules/topics/topics-services");
	
	var TopicsModule = kendo.Class.extend({
        
        loadTopicView: function(topicId) {
            var that = this,
                url,
                video = document.getElementById("media"),
                presentationBtn = $("#viewPresentation");
            
            presentationBtn.on("click", function() {
                appController.app.navigate("scripts/modules/presentation/presentation-view.html");
            });
            
            topicsService.getTopic(topicId)
            .done(function(data) {
                var templateHtml = $("#topicDetailsTemplate").html();
                var template = kendo.template(templateHtml);
                $("#topicDetails").html(template(data[0]));
                url = "https://api.everlive.com/v1/6NF0HIgRaSAoFCd2/Files/" + data[0].Video + "/Download";
                video.setAttribute("src", url);
            })
            .fail(function(error) {
               
            });
        }
	});
	
	var topicsModule = new TopicsModule();
	return topicsModule;
});