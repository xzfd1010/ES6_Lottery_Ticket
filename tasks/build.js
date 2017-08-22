import gulp from 'gulp';
// 处理顺序的gulp包
import gulpSequence from 'gulp-sequence';
// server最后执行
gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'server']));