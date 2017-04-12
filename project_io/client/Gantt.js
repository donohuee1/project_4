// Meteor.subscribe('projects');

//subscribe to projects at the template level. So if we want to reuse the projeccts temmplate anywhere else, it's not tied to the routes, just tied to the template itself.
Template.Gantt.onCreated(function() {
  var self = this;
  //unsubscribe us from any old subscriptions. When we go a different project, we're not still subscribed to the old one.
  self.autorun(function() {
    self.subscribe('projects');
  });
});

Template.Gantt.helpers({
  projects: ()=> {
    return Projects.find({inGantt: true});
  }
});
