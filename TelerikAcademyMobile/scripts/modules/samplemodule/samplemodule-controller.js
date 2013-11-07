define(function (require) {
	var sampleModuleServices = require("modules/samplemodule/samplemodule-services");
	require("noamd/kendo/js/kendo.core.min")
	
	var SampleModule = kendo.Class.extend({
		prop: null,
		_prop: null,
		
		events: {
			sampleEvent: "sampleEvent"
		},
		
		init: function() {
		
		},
		
		sampleFunction: function() {
			alert("gosho");
		}
	});
	
	var sampleModule = new SampleModule();
	return sampleModule;
});