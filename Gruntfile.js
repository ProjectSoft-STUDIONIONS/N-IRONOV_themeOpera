module.exports = function (grunt) {
	var pkg = grunt.file.readJSON('package.json'),
		path = require('path');
	grunt.initConfig({
		pkg: pkg,
		zip: {
			ziping: {
				router: function (filepath) {
					var filename = path.basename(filepath);
					return filename;
				},
				src: [
					'src/persona.ini',
					'src/converted.png',
					'build/converted.webm'
				],
				dest: 'build/nicolay-ironov.zip'
			}
		},
		exec: {
			ffmpeg: {
				cmd: 'start "" /wait ffmpeg -i src/converted.mp4 -threads 2 -b:v 40000K -an -y -hide_banner build/converted.webm'
			}
		}
	});
	grunt.loadNpmTasks('grunt-zip');
	grunt.loadNpmTasks('grunt-exec');
	grunt.registerTask('default', ['exec', 'zip']);
};