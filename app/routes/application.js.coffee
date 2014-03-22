Ember.Route.extend
  actions:
    validSignIn: ->
      @transitionTo "dashboard"

    didSignOut: ->
      @transitionTo "index"
