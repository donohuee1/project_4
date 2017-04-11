Meteor.publish('projects', function() {
  //only current users project will be available to them
  return Projects.find({projectLead: this.userId});
});
