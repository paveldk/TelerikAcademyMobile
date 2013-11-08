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
                date: new Date("2013/6/13"),
                startTime: new Date("2013/6/13 07:00 AM"),
                height: 600,
                editable: false,
                views: [
                    { type: "month", selected: true },
                    "agenda"
                ],
                timezone: "Etc/UTC"
            });
            appController.app.hideLoading();
        }
    });
	
    var calendarModule = new CalendarModule();
    return calendarModule;
});