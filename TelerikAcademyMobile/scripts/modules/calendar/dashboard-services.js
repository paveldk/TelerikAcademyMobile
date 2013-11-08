define(function (require) {
	var appServices = require("modules/app/app-services");
	
	var SampleServices = kendo.Class.extend({
		_type: "News",
		
		init: function() {
		
		},
		
		getAllNews: function() {
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
	
	var sampleServices = new SampleServices();
	return sampleServices;
});