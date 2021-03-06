//define Projects collection
Projects = new Mongo.Collection('projects');

//rules for who is allowed to insert in projects function.  Only allowed if this is true(i.e. if userId exists)
Projects.allow({
  insert: function(userId, doc) {
    return !!userId;
    console.log(userId)
  },
  //allows you to make updates
  update: function(userId, doc) {
    return !!userId;
  }
});

Task = new SimpleSchema({
  description: {
    type: String
  },
  employeeLead: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      return new Date()//returns current date to the createdAt field
    },
    autoform: {
      type: 'hidden'
    }
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  completed: {
    type: Boolean,
  },
  overDue: {
    type: Boolean,
  }
});

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
    label: "Has Project Been Completed?",
    autoform: {
      type: 'boolean-radios',
      trueLabel: 'Project is Complete',
      falseLabel: 'Project Is Not Complete',
      value: false
    }
  },
  overDue: {
    type: Boolean,
    label: "Is This Project Still Within Your Deadline?",
    autoform: {
      type: 'boolean-radios',
      trueLabel: 'Project Is Past Deadline',
      falseLabel: 'Project Is Still Within The Deadline',
      value: false
    }
  },
  //putting it in an array allows a field that automatically has incrementing boxes. Can add more than one. Funciton of the autoform package.
  tasks: {
    type: [Task]
  },
  //whenever we add a new item it is not automatically added to the Gantt by itself.
  inGantt: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: 'hidden'
    }
  }
});

Meteor.methods({
  //
  toggleGanttTask: function(id, currentState) {
    Projects.update(id, {
      //makes the inGantt value opposite of what it's currentState is
      $set: {
        inGantt: !currentState
      }
    });
  },
  deleteProject: function(id) {
    Projects.remove(id);
  }
});

//attach the schema to our Collection
Projects.attachSchema(ProjectSchema);

//Tried to add this in and it seemed to just add an employee lead input box at the end of the New Project form
// Projects.attachSchema(Task);
