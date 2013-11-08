define(function (require) {
	var appServices = require("modules/app/app-services");
	
	var TrainersServices = kendo.Class.extend({
		_type: "Trainers",
		
		init: function() {
		
		},
		
		getAllTrainers: function() {
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
	
	var trainersServices = new TrainersServices();
	return trainersServices;
});