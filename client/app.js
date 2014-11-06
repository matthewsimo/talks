
Router.configure({
  layoutTemplate: 'layout',
  loadingTempalte: 'loading',
  notFoundTemplate: 'notFound',
	yieldRegions: {
		'header': { to: 'header' },
		'footer': { to: 'footer' }
	},
});


Router.route('/', function () {
	this.render('home');

	this.render( 'homeHeader', { to: 'header' } );
	this.render( 'homeFooter', { to: 'footer' } );
});

Router.route('/files/:filename', function () {
	this.response.end("Loading file content\n");
}, { where: 'server' });

Router.route('/work-with-me', function () {
	this.render('workWithMe');
});

