
Router.configure({
  layoutTemplate: 'layout',
  loadingTempalte: 'loading',
  notFoundTemplate: 'notFound',
});


Router.route('/', function () {
	this.render('home');

	this.render( 'homeHeader', { to: 'header' } );
//	this.render( 'homeFooter', { to: 'footer' } );
	this.render( 'footer', { to: 'footer' } );
});

Router.route('/files/:filename', function () {
	this.response.end("Loading file content\n");
}, { where: 'server' });

Router.route('/resume', function() {
	this.redirect('/work-with-me');
});

Router.route('/work-with-me', function () {
	this.render('resume');

	this.render( 'header', { to: 'header' } );
	this.render( 'footer', { to: 'footer' } );
});


//Router.route('/portfolio', function() {
//	this.render('portfolio');
//
//	this.render( 'header', { to: 'header' } );
//	this.render( 'footer', { to: 'footer' } );
//});
