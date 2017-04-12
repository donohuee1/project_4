Meteor.publish('projects', function() {
  //only current users project will be available to them
  return Projects.find({projectLead: this.userId});
});

Meteor.publish('singleProject', function(id) {
  //make sure the value passed in is a string via the check package
  check(id, String);
  //if you're on a project show page, don't need to have all of the projects, can subscribe to one single project by passng in the id.
  //return only projects using that id, which should only be one.
  return Projects.find({_id: id});
});
