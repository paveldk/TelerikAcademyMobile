define(function (require) {
	var appServices = require("modules/app/app-services");
	
	var TopicsSerice = kendo.Class.extend({
		_type: "Topics",
		
		init: function() {
		
		},
		
		getTopics: function(topicsIdList) {
			var that = this,
				allTopics = appServices.everlive.data(that._type),
                d = new $.Deferred();
				debugger
            var query = new Everlive.Query();
            query.where().isin('Id', topicsIdList);
            
			allTopics.get(query)
				.then(function(data){
                    debugger
                    d.resolve(data.result);
				},
				function(error){
					d.reject(error);
				});
            
            return d.promise();
		}
	});
	
	var topicsSerice = new TopicsSerice();
	return topicsSerice;
});