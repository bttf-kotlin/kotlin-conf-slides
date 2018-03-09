/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	var root = grunt.option('root') || '.';

	if (!Array.isArray(root)) root = [root];

	// Project configuration
	grunt.initConfig({
		sass: {
			core: {
				src: 'node_modules/reveal.js/css/reveal.scss',
				dest: 'node_modules/reveal.js/css/reveal.css'
			},
			themes: {
				expand: true,
				cwd: 'css/theme/source',
				src: ['*.sass', '*.scss'],
				dest: 'css/theme',
				ext: '.css'
			}
		},
	
		watch: {
			theme: {
				files: [
					'css/theme/source/*.sass',
					'css/theme/source/*.scss'
				],
				tasks: 'css-themes'
			}
		}
	});

	// Dependencies
    grunt.loadNpmTasks( 'grunt-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
	
	// Default task
	grunt.registerTask( 'default', [ 'css-themes', 'watch'] );

	// Theme CSS
    grunt.registerTask( 'css-themes', [ 'sass:themes' ] );
};
