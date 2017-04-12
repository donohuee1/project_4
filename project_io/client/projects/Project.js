Template.Project.helpers({
  updateProjectId: function() {
    return this._id;
  }
});

Template.Project.events({
  'click .toggle-gantt': function() {
    Meteor.call('toggleGanttTask', this._id, this.inGantt)
  }
});
