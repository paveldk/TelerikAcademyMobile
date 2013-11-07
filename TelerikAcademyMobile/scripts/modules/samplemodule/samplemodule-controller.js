define(function (require) {
	require("text!modules/samplemodule/samplemodule-css.css")
	
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