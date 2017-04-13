Template.NewProject.events({
  'click .fa-close': function() {
    Session.set('newProject', false);
  }
});
