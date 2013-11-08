define(function (require) {
	var appServices = require("modules/app/app-services");
	
	var NotesServices = kendo.Class.extend({
		_type: "Notes",
		
		init: function() {
		
		},
		
		getAllNotes: function() {
			var that = this,
				allNotes = appServices.everlive.data(that._type),
                d = new $.Deferred();
				
			allNotes.get()
				.then(function(data){
                    d.resolve(data.result);
				},
				function(error){
					d.reject(error);
				});
            
            return d.promise();
		}
	});
	
	var notesServices = new NotesServices();
	return notesServices;
});