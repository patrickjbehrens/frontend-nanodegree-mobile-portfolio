
module.exports = function(grunt) {

    // All configuration goes here
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),

        responsive_images: {
          myTask: {
            options: {
              engine: 'im',
              sizes: [{
                name: 'small',
                width: 100,
                quality: 40
              },{
                name: 'large',
                width: 900,
                quality: 40
              }]
            },
            files: [{
              expand: true,
              src: ['*.{gif,jpg,png}'],
              cwd: 'views/images/',
              dest: 'views/images/build/'
            }]
          }
        },

    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-responsive-images');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['responsive_images']);

};
