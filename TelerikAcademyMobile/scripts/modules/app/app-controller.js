define(function (require) {
	
	var AppController = kendo.Class.extend({
		
		init: function() {
			var that = this;
			
			that.app = new kendo.mobile.Application(document.body);
		},
	});
	
	var appController = new AppController();
    window.app = appController;
});