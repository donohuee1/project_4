//define Projects collection
Projects = new Meteor.Collection('projects');

//Create new Schema
ProjectSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'Title'
  },
  description: {
    type: String,
    label: 'Description'
  },
  projectLead: {
    type: String,
    label: "Project Lead",
    //default value. Make a check to make sure user is logged in before they can add a new project
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: 'hidden'
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date()//returns current date to the createdAt field
    },
    autoform: {
      type: 'hidden'
    }
  },
  startDate: {
    type: Date,
    label: "Start Date"
  },
  endDate: {
    type: Date,
    label: "End Date"
  },
  completed: {
    type: Boolean,
    label: "Completed"
  },
  overDue: {
    type: Boolean,
    label: "Overdue"
  }
});

//attach the schema to our Collection
Projects.attachSchema(ProjectSchema);
