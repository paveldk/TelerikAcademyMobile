define(function (require) {
    var newsServices = require("modules/news/news-services");
	require("text!modules/samplemodule/samplemodule-css.css")
	
	var NewsModule = kendo.Class.extend({
        
        loadNews: function() {
            newsServices.getAllNews();     
        }
	});
	
	var newsModule = new NewsModule();
	return newsModule;
});