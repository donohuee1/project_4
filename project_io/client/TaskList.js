Template.TaskList.onCreated(function() {
  var self = this;
  //unsubscribe us from any old subscriptions. When we go a different project, we're not still subscribed to the old one.
  self.autorun(function() {
    self.subscribe('projects');
  });
});

Template.TaskList.helpers({
  //taskList is the same as the tasks in the Gantt
  taskList: ()=> {
    return Projects.find({inGantt: true});
  }
});
