define(function (require) {
	var appServices = require("modules/app/app-services");
	
	var SampleServices = kendo.Class.extend({
		_type: "News",
		
		init: function() {
		
		},
		
		getAllNews: function() {
			var that = this,
				allNews = appServices.everlive.data(that._type);
				
			allNews.get()
				.then(function(data){
					alert(JSON.stringify(data));
				},
				function(error){
					alert(JSON.stringify(error));
				});
		}
	});
	
	var sampleServices = new SampleServices();
	return sampleServices;
});