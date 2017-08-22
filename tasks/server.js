import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('server', (cb) => {
    if(!args.watch) return cb();

    let server = liveserver.new(['--harmony','server/bin/www']); //创建服务器
    server.start();

    // 实现自动刷新，需要监听的路径
    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function (file) {
        server.notify.apply(server, [file]);// 通知服务器进行相应处理
    });

    // 需要重启服务的文件，路由、入口等
    gulp.watch(['server/routes/**/*.js', 'server/app.js'], function () {
        server.start.bind(server)();
    });
});
