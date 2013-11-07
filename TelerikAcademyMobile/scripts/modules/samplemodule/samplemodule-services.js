define(function (require) {
	var appServices = require("modules/app/app-services");
	require("noamd/kendo/js/kendo.core.min")
	
	var SampleServices = kendo.Class.extend({
		_type: "Vibes",
		
		init: function() {
		
		},
		
		getNearbyVibes: function() {
			var that = this,
				nearbyVibes = appServices.everlive.data(that._type);
				
			nearbyVibes.getById('${Id}')
				.then(function(data){
					alert(JSON.stringify(data));
				},
				function(error){
					alert(JSON.stringify(error));
				});
			
			debugger;
		}
	});
	
	var sampleServices = new SampleServices();
	return sampleServices;
});