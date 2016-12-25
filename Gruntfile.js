module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webapp: {
            'path': __dirname
        },
        /* 合并svg https://github.com/FWeinb/grunt-svgstore */
        svgstore: {
            options: {
                includedemo: true
            },
            build: {
                src: [
                    '<%= webapp.path %>/src/component/**/*.svg',
                    '<%= webapp.path %>/src/assets/svg/source/**/*.svg'
                ],
                dest: '<%= webapp.path %>/src/assets/svg/all-icons.svg'
            }
        }
    });

    // 载入插件
    grunt.loadNpmTasks('grunt-svgstore');

    // 合并svg, 当新增修改svg后执行这个命令, 控制台执行: grunt svg
    grunt.registerTask('svg', ['svgstore']);
};
