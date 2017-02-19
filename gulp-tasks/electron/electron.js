var release_windows = require('./build.windows');
var os = require('os');

module.exports = function(gulp) {
	gulp.task('build-electron', function () {
	    switch (os.platform()) {
	        case 'darwin':
	            // execute build.osx.js 
	            break;
	        case 'linux':
	            //execute build.linux.js
	            break;
	        case 'win32':
	        console.log('sdf')
	            return release_windows.build();
	    }
	});
};
