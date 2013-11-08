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
 '                <h1>Introduction to programming</h1>' + 
 '                <div class="subH1">Creating and Running Your First C# Program' + 
 '                </div>' + 
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
 '                    <li>What is Computer Programming?</li>' + 
 '                    <li>Your First C# Program</li>' + 
 '                    <li>What is .NET Framework?</li>' + 
 '                    <li>What is Visual Studio?</li>' + 
 '                    <li>What is MSDN Library?</li>' + 
 '                </ul>' + 
 '            </section>' + 
 '            <section>' + 
 '                <h2>Define: Computer programming</h2>' + 
 '                <p>Computer programming: creating a sequence of instructions<br/> to enable the computer to do something</p>' + 
 '                <p style="text-align: right; width: 80%;font-size: 80%;font-style: italic;">Definition by Google</p>' + 
 '            </section>' + 
 '            <section>' + 
 '                <h2>Visual Studio</h2>' + 
 '                <ul>' + 
 '                    <li>IDE - Integrated Development Environment</li>' + 
 '                    <li>' + 
 '                        Development tool that help us:' + 
 '                        <ul>' + 
 '                            <li>Write code</li>' + 
 '                            <li>Design user interface</li>' + 
 '                            <li>Compile code</li>' + 
 '                            <li>Execute / test / debug applications</li>' + 
 '                            <li>Browse the help</li>' + 
 '                            <li>Manage project\'s files</li>' + 
 '                        </ul>' + 
 '                    </li>' + 
 '                </ul>' + 
 '            </section>' + 
 '            <section>' + 
 '                <h2>Debugging the code</h2>' + 
 '                <ul>' + 
 '                    <li>' + 
 '                        The process of debugging applications includes:' + 
 '                        <ul>' + 
 '                            <li>Spotting an error</li>' + 
 '                            <li>Finding the lines of code that cause the error</li>' + 
 '                            <li>Fixing the code</li>' + 
 '                            <li>Testing all is good</li>' + 
 '                        </ul>' + 
 '                    </li>' + 
 '                    <li>Iterative and continuous process</li>' + 
 '                </ul>' + 
 '            </section>' + 
 '        </div>';
        },
        getJSAPIPresentation: function() {
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