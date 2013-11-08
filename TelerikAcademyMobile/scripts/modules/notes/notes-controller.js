define(function (require) {
    var notesServices = require("modules/notes/notes-services");
	require("text!modules/notes/notes-css.css")
	
	var NotesModule = kendo.Class.extend({
        
        loadNotesList: function() {
            var that = this;
            
            notesServices.getAllNotes()
            .done(function(data) {
                if(!that.$newsList)
                {
                    that.createNotesList(data);
                }
                else {
                    that.refreshNotesList(data);
                }
                
            })
            .fail(function(error) {
               
            });
        },
        
        refreshNotesList: function(data) {
            var that = this;
            
            that.$newsList.data("kendoMobileListView").dataSource.data(data);
            appController.app.hideLoading();
        },
        
        createNotesList: function(data) {
            var that = this,
                templateContent = $("#notesTemplate").html();
                    
            that.$newsList = $("#notesList").kendoMobileListView({
                dataSource: data,
                template: templateContent
            });
            appController.app.hideLoading();
        }
	});
	
	var notesModule = new NotesModule();
	return notesModule;
});