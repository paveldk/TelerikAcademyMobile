define(function (require) {
	var service = require("modules/presentation/presentation-services");
    
	var PresentationModule = kendo.Class.extend({
		loadPresentation: function() {
            var module = this,
                data = service.getPresentationData();
            
            module.showPresentation(data);
            //service.getPresentation().done($.proxy(module.showPresentation, this));
        },
        showPresentation: function(data) {
            var module = this,
                container = $(".reveal");
            
            container[0].innerHTML = data;
            
            module.initPresentationSurface();
            appController.app.hideLoading();
        },
        
        initPresentationSurface: function() {
            Reveal.initialize({
                progress: true,
                center: true,
                touch: true,
                history: false,
                
                minScale: 0.7,

                theme: "default", // available themes are in /css/theme
                transition: 'default' // default/cube/page/concave/zoom/linear/fade/none
            });
        },
        
        overrideViewportMeta: function() {
            var viewportMeta = $("meta[name=viewport]");
            
            viewportMeta.attr("content", "width=device-width, " + viewportMeta.attr("content"));
        }
	});
	
	var module = new PresentationModule();
	return module;
});