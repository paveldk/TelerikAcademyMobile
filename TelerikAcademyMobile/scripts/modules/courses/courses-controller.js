define(function (require) {
    var courseService = require("modules/courses/courses-services");
	
	var CoursesModule = kendo.Class.extend({
        
        loadCoursesList: function() {
            var that = this;
            
            courseService.getAllCourses()
            .done(function(data) {
                if(!that.$coursesList)
                {
                    that.createCoursesList(data);
                }
                else {
                    that.refreshCoursesList(data);
                }
                
            })
            .fail(function(error) {
               
            });
        },
        
        createCoursesList: function(data) {
            var that = this,
                templateContent = $("#courseTemplate").html();
                    
            that.$coursesList = $("#coursesList").kendoMobileListView({
                dataSource: data,
                template: templateContent,
                click: $.proxy(that.initTopics,that)
            });
            appController.app.hideLoading();
        },
        
        
        refreshCoursesList: function(data) {
            var that = this;
            
            that.$coursesList.data("kendoMobileListView").dataSource.data(data);
            appController.app.hideLoading();
        },
        
        initTopics:function(e){
            var that = this,
                item = e.sender.dataSource.getByUid(e.item.data("uid"));
             appController.app.navigate("scripts/modules/courses/course-detail-view.html");
            require(["modules/topics/topics-controller"], function(topicsController) {
                topicsController.loadTopicsList(item.Topics);
                var templateHtml = $("#detailsTemplate").html();
                var template = kendo.template(templateHtml);
                $("#details").html(template(item));
			});
        }
	});
	
	var coursesModule = new CoursesModule();
	return coursesModule;
});