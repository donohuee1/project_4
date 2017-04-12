// Use Reactive var package
Template.Project.onCreated(function() {
  //When template is created, set a new reactive variable to false
  this.editMode = new ReactiveVar(false);
});

Template.Project.helpers({
  updateProjectId: function() {
    return this._id;
  },
  editMode: function() {
    //only return this specific templates editMode reactive variable.
    return Template.instance().editMode.get();
  }
});

Template.Project.events({
  'click .toggle-gantt': function() {
    Meteor.call('toggleGanttTask', this._id, this.inGantt);
  },
  'click .fa-trash': function() {
    Meteor.call('deleteProject', this._id);
  },
  //need access to this specific template and need to acccess this.editMode reactive var.  Modify this.editMode:
  'click .fa-pencil': function(event, template) {
    //When fa-pencil is clicked, it will reset editMode to the opposite of false: true
    template.editMode.set(!template.editMode.get());
    // edit mode = to opposite of what session.get of what editMode is
    // Session.set('editMode', !Session.get('editMode'));
  }
});
