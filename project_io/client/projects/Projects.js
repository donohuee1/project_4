// Meteor.subscribe('projects');

//subscribe to projects at the template level. So if we want to reuse the projeccts temmplate anywhere else, it's not tied to the routes, just tied to the template itself.
Template.Projects.onCreated(function() {
  var self = this;
  //unsubscribe us from any old subscriptions. When we go a different project, we're not still subscribed to the old one.
  self.autorun(function() {
    self.subscribe('projects');
  });
});
////////////////////////////

// Template.Projects.helpers({
//   projects: ()=> {
//     return Projects.find({});
//   }
// });
Template.Projects.helpers({
  projects: function() {
    return Projects.find({})
  }
});

//////////////////////////////

// 
// Template.Projects.events({
//   'click .new-project': () => {
//     //argument 1: name of the session --- arguement2: the data we want stored in the session
//     Session.set('newProject', true);
//     // //to retrieve the value of this session use Session.get...didn't work
//     // var newProject = Session.get('newProject';)
//     // console.log(newProject);
//   }
// });

Template.Projects.events({
  'click .new-project': function(){
    Session.set('newProject', true);
  }
});
