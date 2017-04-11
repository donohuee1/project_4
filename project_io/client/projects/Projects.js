Meteor.subscribe('projects');

Template.Projects.helpers({
  projects: ()=> {
    return Projects.find({});
  }
});
