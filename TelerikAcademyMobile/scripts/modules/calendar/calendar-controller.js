define(function (require) {
    var calendarServices = require("modules/calendar/calendar-services");
	
    var CalendarModule = kendo.Class.extend({
        
        loadCalendar: function() {
            calendarServices.getAllDates()
            .done(function(data) {
                var templateContent = $("#newsTemplate").html();
                
                $("#newsList").kendoMobileListView({
                    dataSource: data,
                    template: templateContent
                });
            })
            .fail(function(error) {
            });
            
            $("#scheduler").kendoScheduler({
                date: new Date(),
                startTime: new Date(),
                editable: false,
                views: [
                    { type: "month", selected: true },
                    "agenda"
                ],
                timezone: "Etc/UTC",
                dataSource: [
                    {
                      id: 1, 
                      start: new Date("2013/11/10 00:00"), 
                      end: new Date("2013/11/10 00:00"), 
                      title: "Deadline - Into C# homework" 
                    }, {
                      id: 2, 
                      start: new Date("2013/11/11 20:00"), 
                      end: new Date("2013/11/11 23:00"), 
                      title: "Javascript - Start" 
                    }, {
                      id: 3, 
                      start: new Date("2013/11/12 20:00"), 
                      end: new Date("2013/11/12 23:00"), 
                      title: "SQL - End" 
                    }, {
                      id: 4, 
                      start: new Date("2013/11/12 16:00"), 
                      end: new Date("2013/11/12 20:00"), 
                      title: "Test - HTML" 
                    }
                  ]
            });
            appController.app.hideLoading();
        }
    });
	
    var calendarModule = new CalendarModule();
    return calendarModule;
});