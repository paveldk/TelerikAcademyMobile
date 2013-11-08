define(function (require) {
	
	var AppController = kendo.Class.extend({
        
		init: function() {
			var that = this;
            
			that.app = new kendo.mobile.Application(document.body, { skin: "flat", layout: "main-layout", useNativeScrolling: true });
		},
        
        sampleModuleLoad: function() {
            
            require(["modules/samplemodule/samplemodule-controller"], function(sampleController) {
				sampleController.loadModule();
			});
        },
        
        dashboardLoad: function() {
            
        },
        
        newsModuleLoad: function() {
            var that = this;
            
            appController.app.showLoading();
            require(["modules/news/news-controller"], function(newsController) {
                newsController.loadNewsList();
			});
        },
        
        trainersModuleLoad: function() {
            var that = this;
            
            appController.app.showLoading();
            require(["modules/trainers/trainers-controller"], function(trainersController) {
                trainersController.loadTrainersList();
			});
        }
	});
	
	var appController = new AppController();
    window.appController = appController;
});