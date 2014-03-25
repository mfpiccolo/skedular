var CalendarView = Ember.View.extend({
  renderCalendar: function() {
    var self = this;
    Ember.run.scheduleOnce('afterRender', this, function(){
      var calendar_url = '/api/v1/payments';
      $('#calendar').once('calendar').fullCalendar({
        dayClick: function(date, allDay, jsEvent, view) {
          // transition to schedule payment page
          self.get("controller").send("open")
        },
        header: {
            left: 'prev,today,next',
            center: 'title',
            right: 'month'
        },
        selectable: true,
        selectHelper: true,
        editable: false,
        ignoreTimezone: false,
        select: this.select,
        eventClick: function(calEvent, jsEvent, view) {
          alert('Event: ' + calEvent.title);
          alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
          alert('View: ' + view.name);

          // change the border color just for fun
          $(this).css('border-color', 'red');

        },
        eventDrop: this.eventDropOrResize,
        eventSources: [
          {
            url: calendar_url,
            // data: {
            //     custom_param1: 'something',
            //     custom_param2: 'somethingelse'
            // },
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
