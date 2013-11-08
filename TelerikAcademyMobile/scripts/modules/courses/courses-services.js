define(function (require) {
	var appServices = require("modules/app/app-services");
	
	var CourseSerice = kendo.Class.extend({
		_type: "Courses",
		
		init: function() {
		
		},
		
		getAllCourses: function() {
			var that = this,
				allCourses = appServices.everlive.data(that._type),
                d = new $.Deferred();
				
			allCourses.get()
				.then(function(data){
                    d.resolve(data.result);
				},
				function(error){
					d.reject(error);
				});
            
            return d.promise();
		}
	});
	
	var courseService = new CourseSerice();
	return courseService;
});