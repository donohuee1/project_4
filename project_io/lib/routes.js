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
    //When you head to this page that's going to register as a page view in GA
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/project-book', {
  //render specific template
  name: 'project-book',
  //what happens when you hit this route:
  action() {
    //When you head to this page that's going to register as a page view in GA
    GAnalytics.pageview();
    //in MainLayout we made a dynamic template with the name 'main'. The string we pass it('Test') is the name of the template we want to render in the 'main' area of the MainLayout.
    BlazeLayout.render('MainLayout', {main: 'Projects'});
  }
});

FlowRouter.route('/project/:id', {
  //render specific template
  name: 'project',
  //what happens when you hit this route:
  action() {
    //When you head to this page that's going to register as a page view in GA
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'ProjectSingle'});
  }
});
