//using FlowRouter package: once you hit this route path, render this template
FlowRouter.route('/', {
  //render specific template
  name: 'home',
  //what happens when you hit this route:
  action() {
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
