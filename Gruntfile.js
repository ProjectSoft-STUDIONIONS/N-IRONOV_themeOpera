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
				cmd: 'start "" /wait ffmpeg -i src/converted.mp4 -acodec libvorbis -aq 5 -ac 2 -qmax 25 -threads 2 build/converted.webm'
			}
		}
	});
	grunt.loadNpmTasks('grunt-zip');
	grunt.loadNpmTasks('grunt-exec');
	grunt.registerTask('default', ['exec', 'zip']);
};