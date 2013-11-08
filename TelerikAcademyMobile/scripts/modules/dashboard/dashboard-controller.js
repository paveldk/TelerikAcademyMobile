define(function (require) {
    var newsServices = require("modules/news/news-services");
	
	var NewsModule = kendo.Class.extend({
        
        loadNewsList: function() {
            newsServices.getAllNews()
                .done(function(data) {
                    var templateContent = $("#newsTemplate").html();
                
                    $("#newsList").kendoMobileListView({
                        dataSource: data,
                        template: templateContent
                    });
                })
                .fail(function(error) {
                   
                });
        }
	});
	
	var newsModule = new NewsModule();
	return newsModule;
});