define(function (require) {
	var appServices = require("modules/app/app-services");
	
	var PresentationServices = kendo.Class.extend({
		_type: "Vibes",
		
		init: function() {
		
		},
		
		getPresentation: function() {
			var that = this,
				db = appServices.everlive,
                d = $.Deferred();
				
			var data = that.getPresentationData();
            
            d.resolve(data);
            return d.promise();
		},
        getPresentationData: function() {
            return '<div class="slides">' + 
  '            <section>' + 
  '                <h1>JavaScript APIs</h1>' + 
 '                <div class="subH1">Canvas, Workers, Web Storage and all the cool stuff</div>' + 
 '                <div class="vcard">' + 
 '                    <div class="name">Doncho Minkov</div>' + 
 '                    <div class="title">Technical Trainer</div>' + 
 '                    <div><a href="http://academy.telerik.com">http://academy.telerik.com</a></div>' + 
 '                    <div class="company">Telerik Software Academy</div>' + 
 '                </div>' + 
 '            </section>' + 
 '            <section>' + 
 '                <h2>Contents</h2>' + 
 '                <ul>' + 
 '                    <li>Canvas</li>' + 
 '                    <li>WebWorkers</li>' + 
 '                    <li>Drag and Drop</li>' + 
 '                    <li>WebStorage</li>' + 
 '                </ul>' + 
 '            </section>' + 
 '            <section>' + 
 '                <h2>Canvas API</h2>' + 
 '                <ul>' + 
 '                    <li>&lt;canvas&gt; is kind of &lt;img&gt; drawn with JS</li>' + 
 '                    <li>Canvas has only 2 own properties - width and height</li>' + 
 '                </ul>' + 
 '                <pre><code data-trim contenteditable>' + 
 '&lt;canvas id="the-canvas" width="200" height="200"&gt;' + 
 '    This text is displayed if your browser does not support' + 
 '    HTML5 Canvas.' + 
 '&lt;/canvas&gt;' + 
 '                </code></pre>' + 
 '            </section>' + 
 '            <section>' + 
 '                <h2>WebWorkers</h2>' + 
 '                <ul>' + 
 '                    <li>Dedicated Web Workers is API for running scripts in the background</li>' + 
 '                    <li>' + 
 '                        Workers are expected to be long-lived' + 
 '                        <ul>' + 
 '                            <li>Have a high start-up performance cost and a high per-instance memory cost</li>' + 
 '                        </ul>' + 
 '                    </li>' + 
 '                </ul>' + 
 '            </section>' + 
 '            <section>' + 
 '                <h2>WebStorage</h2>' + 
 '                <ul>' + 
 '                    <li>' + 
 '                        Three common types of Web Storage' + 
 '                        <ul>' + 
 '                            <li>Cookies - <span class="definition">Accessible only from a single document</span></li>' + 
 '                            <li>LocalStorage - <span class="definition">Accessible only from a single document</span></li>' + 
 '                            <li>SessionStorage - <span class="definition">Accessible only while the document is opened</span></li>' + 
 '                        </ul>' + 
 '                    </li>' + 
 '                </ul>' + 
 '            </section>' + 
 '        </div>';
        }
	});
	
	var service = new PresentationServices();
	return service;
});