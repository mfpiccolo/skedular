var CalendarView = Ember.View.extend({
  renderCalendar: function() {
    var self = this;
    Ember.run.scheduleOnce('afterRender', this, function(){
          var source = new Array();
          var viewable_calendars = $('input:checkbox:checked.visable_calendars').map(function () {
            return this.value;
            }).get().join(',');
          var calendar_url = '/payment_instances.json?calendar_ids=' + viewable_calendars;
          var new_payment_link = "#{new_payment_path}"
          $('#calendar').once('calendar').fullCalendar({
            dayClick: function(date, allDay, jsEvent, view) {
              // transition to schedule payment page
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
        });
  }.on('didInsertElement'),

  removeCalendar: function() {
    // Detach any calendar events
    this.calendar = null;
    delete this.calendar;
  }.on('willDestroyElement')

});

export default CalendarView;
