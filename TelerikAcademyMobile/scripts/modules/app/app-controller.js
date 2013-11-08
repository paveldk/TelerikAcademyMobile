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
        
        homeworkModuleLoad: function() {
            var that = this;
            
            appController.app.showLoading();
            require(["modules/homework/homework-controller"], function(homeworkController) {
                homeworkController.loadHomeworkList();
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
        },
        
        calendarLoad:function(){
             var that = this;
            
            appController.app.showLoading();
            require(["modules/calendar/calendar-controller"], function(calendarController) {
                calendarController.loadCalendar();
			});
		},
		
        presentationModuleLoad: function() {
            appController.app.showLoading();
            require(["modules/presentation/presentation-controller"], function(presentationController) {
                 presentationController.loadPresentation();
            });
        },

        showTopicView:function(){
            var that = this,
                video = document.getElementById("media");
            
            video.setAttribute("src", appController.url);
        }
	});
	
	var appController = new AppController();
    window.appController = appController;
});