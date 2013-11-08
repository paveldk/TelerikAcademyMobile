define(function (require) {
	
	var AppController = kendo.Class.extend({
        
		init: function() {
			var that = this;
            
			that.app = new kendo.mobile.Application(document.body, { layout: "main-layout", useNativeScrolling: true });
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
        
        coursesModuleLoad: function(){
            var that = this;
            
            appController.app.showLoading();
            require(["modules/courses/courses-controller"], function(coursesController) {
                coursesController.loadCoursesList();
			});
        }
	});
	
	var appController = new AppController();
    window.appController = appController;
});