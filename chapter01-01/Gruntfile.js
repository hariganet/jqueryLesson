'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  
    // grunt-contrib-connectの設定(Webサーバの設定)
    connect: {
      livereload: {
        options: {
          port: 8000
        }
      }
//      site: { // オプション未設定の為、空オブジェクト
//      }
    },

    jade:{
      compile: {
        files:{
          'index.html': 'index.jade' 
        }
      }
    },

    // grunt-contrib-watchの設定(ウォッチ対象の設定)
    watch: {
      static_files: {
        files: ['**/*.html', '**/*.css'],  // ウォッチ対象として、ディレクトリ配下の*.htmlを指定
        tasks: []
      },
      jade_files:{
        files: '**/*.jade',
        tasks: ['jade']
      },
       scripts:{
        files: '**/*.js',
        tasks: []
      },
      options: {
        livereload: true // 変更があればリロードするよ
      }
    }
  });
  
  // Load tasks(grunt実行時に読み込むプラグイン)
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
 


  // Default tasks(grunt実行時に実行するタスク)
  grunt.registerTask('default', ['connect', 'jade', 'watch']);

};
