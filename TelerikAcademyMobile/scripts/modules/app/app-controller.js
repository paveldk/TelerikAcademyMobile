define(function (require) {
	
	var AppController = kendo.Class.extend({
        
		init: function() {
			var that = this;
            
			that.app = new kendo.mobile.Application(document.body, { skin: "flat", layout: "main-layout" });
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
        },
        
        notesModuleLoad: function() {
            var that = this;
            
            appController.app.showLoading();
            require(["modules/notes/notes-controller"], function(trainersController) {
                trainersController.loadNotesList();
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