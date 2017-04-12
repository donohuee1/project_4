Template.Project.events({
  'click .toggle-gantt': function() {
    Meteor.call('toggleGanttTask', this._id, this.inGantt)
  }
});
