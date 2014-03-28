var CalendarView = Ember.View.extend({
  renderCalendar: function() {
    var self = this;
    Ember.run.scheduleOnce('afterRender', this, function(){
      var calendar_url = '/api/v1/payments';
      $('#calendar').once('calendar').fullCalendar({
        dayClick: function(date, allDay, jsEvent, view) {
          self.get("controller").send("open")
          Ember.run.debounce(this, function() {
            $(".payment").attr("value", "")
            $(".payment-payment_at").attr('value', (moment(date).format("YYYY-MM-DD hh:mm:ss") + " -0700"));
            $(".payment-payment_at").focus();
            $(".payment-payment_at").blur();
            $(".payment-payment_at").attr("readonly","readonly");
          }, 0);
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
          alert('Event id: ' + calEvent.id);
          alert('Event: ' + calEvent.title);
          alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
          alert('View: ' + view.name);
          console.log(view);

          // change the border color just for fun
          $(this).css('border-color', 'red');
        },
        eventDrop: this.eventDropOrResize,
        eventSources: [
          {
            url: calendar_url,
            error: function() {
                alert('there was an error while fetching payments!');
            }
          }
        ],
        eventRender: function(event, element) {
          var dollar_amount = "$" + (event.amount_cents/100).toFixed( 2 );
          element.find(".fc-event-inner ").after($("<span class=\"fc-event-icons\"></span>").html(dollar_amount));
        },
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
