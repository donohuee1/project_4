if (Meteor.isClient) {
  //use gwendall:auth-client-callbacks package to route the user to project book page when they login
  Accounts.onLogin(function() {
    FlowRouter.go('project-book');
  });

  //use gwendall:auth-client-callbacks package to route the user to home page when they logout
  Accounts.onLogout(function() {
    FlowRouter.go('home');
  });
}

FlowRouter.triggers.enter([function(context, redirect) {
  //if user id doesn't exist, go to the home page
  if(!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);

//using FlowRouter package: once you hit this route path, render this template
FlowRouter.route('/', {
  //render specific template
  name: 'home',
  //what happens when you hit this route:
  action() {
    //if user id exists, return true
    if(Meteor.userId()) {
      FlowRouter.go('project-book');
    }
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/project-book', {
  //render specific template
  name: 'project-book',
  //what happens when you hit this route:
  action() {
    //in MainLayout we made a dynamic template with the name 'main'. The string we pass it('Test') is the name of the template we want to render in the 'main' area of the MainLayout.
    BlazeLayout.render('MainLayout', {main: 'Projects'});
  }
});

FlowRouter.route('/project/:id', {
  //render specific template
  name: 'project',
  //what happens when you hit this route:
  action() {
    BlazeLayout.render('MainLayout', {main: 'ProjectSingle'});
  }
});

FlowRouter.route('/gantt', {
  name: 'gantt',
  action() {
    //inside the MainLayout, render Menu template
    BlazeLayout.render('MainLayout', {main: 'Gantt'})
  }
});

FlowRouter.route('/task-list', {
  name: 'task-list',
  action() {
    //inside the MainLayout, render TaskList template
    BlazeLayout.render('MainLayout', {main: 'TaskList'})
  }
})
