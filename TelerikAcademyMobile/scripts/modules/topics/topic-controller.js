define(function (require) {
    var topicsService = require("modules/topics/topics-services");
	
	var TopicsModule = kendo.Class.extend({
        
        loadTopicView: function(topicId) {
            var that = this,
                url,
                video = document.getElementById("media");
            
            topicsService.getTopic(topicId)
            .done(function(data) {
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