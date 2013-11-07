define(function (require) {
	
	var AppController = kendo.Class.extend({
		
		init: function() {
			var that = this;
			
			that.app = new kendo.mobile.Application(document.body);
            
            this.sampleModuleLoad();
		},
        
        sampleModuleLoad: function() {
            
            require(["modules/samplemodule/samplemodule-controller"], function(sampleController) {
				sampleController.sampleFunction();
			});
        }
	});
	
	var appController = new AppController();
    window.app = appController;
});