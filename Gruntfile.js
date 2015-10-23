module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-parallel');

  grunt.registerTask('dev', ['parallel:dev']);
  grunt.registerTask('prod', ['browserify:prod', 'uglify']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dev: {
        src: 'index.dev.js',
        dest: 'build/bundle.js',
        options: {
          transform: [['babelify', { optional: ['es7.decorators'] }]],
          watch: true,
          keepAlive: true,
        },
      },
      prod: {
        src: 'index.js',
        dest: 'build/bundle.js',
        options: {
          transform: [
            ['babelify', { optional: ['es7.decorators'] }],
            ['envify', { global: true }],
            ['uglifyify', { global: true }],
          ],
        },
      },
    },
    uglify: {
      build: {
        src: 'build/bundle.js',
        dest: 'build/bundle.js',
      },
      options: {
        mangle: true,
        compress: true,
      },
    },
    execute: {
        dev: {
            src: ['server.js'],
        },
    },
    parallel: {
      dev: {
        options: {
          grunt: true,
          stream: true,
        },
        tasks: ['execute:dev', 'browserify:dev'],
      },
    },
  });
};
