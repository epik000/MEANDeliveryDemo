module.exports = function(grunt) {

  grunt.config.set('mochaTest', {
    default: {
      options: {
        reporter: 'spec'
      },
      src: ['tests/**/*.spec.js']
    },

    xunit: {
      options: {
        run: true,
        log: true,
        reporter: 'xunit'
      },
      src: ['tests/**/*.spec.js']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');
};
