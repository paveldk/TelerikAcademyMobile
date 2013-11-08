define(function (require) {
	var appServices = require("modules/app/app-services");
	
	var HomeworkServices = kendo.Class.extend({
		_type: "Homeworks",
		
		init: function() {
		
		},
		
		getAll: function() {
			var that = this,
				allNews = appServices.everlive.data(that._type),
                d = new $.Deferred();
				
			allNews.get()
				.then(function(data){
                    d.resolve(data.result);
				},
				function(error){
					d.reject(error);
				});
            
            return d.promise();
		}
	});
	
	var services = new HomeworkServices();
	return services;
});