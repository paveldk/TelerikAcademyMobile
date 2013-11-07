define(function (require) {
    var newsServices = require("modules/news/news-services");
	require("text!modules/samplemodule/samplemodule-css.css")
	
	var NewsModule = kendo.data.ObservableObject.extend({
        init: function (){
            var that = this;
            
            
            that.dataSource = new kendo.data.DataSource({ data: [
                    { topic: "Jane Doe", details: 30 }
                ]});
            kendo.data.ObservableObject.fn.init.apply(that, arguments);
            
            that.dataSource.read();
        },
        
        getNews: function() {

            return [
                    { topic: "Jane Doe", details: 30 }
                ];
           // newsServices.getAllNews();     
        }
	});
	
	var newsModule = new NewsModule();
	return newsModule;
});