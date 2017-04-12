Template.Project.helpers({
  updateProjectId: function() {
    return this._id;
  }
});

Template.Project.events({
  'click .toggle-gantt': function() {
    Meteor.call('toggleGanttTask', this._id, this.inGantt);
  },
  'click .fa-trash': function() {
    Meteor.call('deleteProject', this._id);
  },
  'click .fa-pencil': function() {
    // edit mode = to opposite of what session.get of what editMode is
    Session.set('editMode', !Session.get('editMode'));
  }
});
