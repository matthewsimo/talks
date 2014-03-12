
Router.configure({
  layoutTemplate: 'layout',
  loadingTempalte: 'loading',
  notFoundTemplate: 'notFound',
});

Router.map(function () {

  this.route('home', {
    path: '/',
  });

});



