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
        
        loadModule: function() {
            
        }
	});
	
	var sampleModule = new SampleModule();
	return sampleModule;
});