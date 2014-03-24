var CalendarView = Ember.View.extend({
  didInsertElement: function() {
    var source = new Array();
    var viewable_calendars = $('input:checkbox:checked.visable_calendars').map(function () {
      return this.value;
      }).get().join(',');
    var calendar_url = '/payment_instances.json?calendar_ids=' + viewable_calendars;
    var new_payment_link = "#{new_payment_path}"
    $('#calendar').fullCalendar({
      dayClick: function(date, allDay, jsEvent, view) {
        // document.location.href=new_payment_link + "?start_date=" + date;
        // $.UIGoToArticle('#split-payment');
        // $("#modal2").show()
        alert(date);
      },
        header: {
            left: 'prev,today,next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        selectable: true,
        selectHelper: true,
        editable: false,
        ignoreTimezone: false,
        select: this.select,
        eventClick: this.eventClick,
        eventDrop: this.eventDropOrResize,
        eventSources: [
          {
              url: calendar_url,
              data: {
                  custom_param1: 'something',
                  custom_param2: 'somethingelse'
              },
              error: function() {
                  alert('there was an error while fetching payments!');
              }
          }
        ],
        eventResize: this.eventDropOrResize,
        timeFormat: 'h:mmtt{ - h:mmtt} '
    });
  }
});

export default CalendarView;
