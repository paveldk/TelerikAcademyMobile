define(function (require) {
	var appServices = require("modules/app/app-services");
	
	var CourseSerice = kendo.Class.extend({
		_type: "Courses",
		
		init: function() {
		
		},
		
		getAllDates:function(){
            return new $.Deferred();
        }
	});
	
	var courseService = new CourseSerice();
	return courseService;
});