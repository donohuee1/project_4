Template.ProjectSingle.onCreated(function() {
  var self = this;
  //unsubscribe us from any old subscriptions. When we go a different project, we're not still subscribed to the old one.
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    //when we subscribe, we're passing in the single id, and the id is coming into our publish statement. 
    self.subscribe('singleProject', id);
  });
});

Template.ProjectSingle.helpers({
  project: ()=> {
    // grab id from the url route
    var id = FlowRouter.getParam('id');
    // use id value to grab the correct project
    return Projects.findOne({_id: id});
  }
});
