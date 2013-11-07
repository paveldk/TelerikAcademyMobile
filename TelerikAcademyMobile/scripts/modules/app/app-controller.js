define(function (require) {
	
	var AppController = kendo.Class.extend({
        
		init: function() {
			var that = this;
			
			that.app = new kendo.mobile.Application(document.body, { useNativeScrolling: true });
		},
        
        sampleModuleLoad: function() {
            
            require(["modules/samplemodule/samplemodule-controller"], function(sampleController) {
				sampleController.loadModule();
			});
        },
        
        newsModuleLoad: function(e) {
            var that = this;
            
            require(["modules/news/news-controller"], function(newsController) {
                appController.newsViewModel = newsController;
			});
        }
	});
	
	var appController = new AppController();
    window.appController = appController;
});