import gulp from 'gulp';
import gulpif from 'gulp-if';  // gulp中的if判断
import concat from 'gulp-concat';  // gulp中的文件拼接
import webpack from 'webpack';  // 打包过程
import gulpWebpack from 'webpack-stream';  // webpack stream
import named from 'vinyl-named';  // 文件重命名
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';  // 处理文件信息流
import rename from 'gulp-rename'; // 重命名
import uglify from 'gulp-uglify'; // 压缩js
import {log, colors} from 'gulp-util'; // 输入输出
import args from './util/args';

gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            // 处理错误，改变默认处理错误的机制
            errorHandle: function () {

            }
        }))
        .pipe(named())  // 文件重命名
        .pipe(gulpWebpack({  // 用babel重新编译js
            module: {
                // 代表用babel处理js
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader'
                }]
            }
        }), null, (err, status) => {
            // 此处用colors处理错误
            log(`Finished '${colors.cyan('scripts')}'`, status.toString({
                chunks: false
            }))
        })
        // 文件保存
        .pipe(gulp.dest('server/public/js'))
        // 文件重命名，开始处理压缩的部分
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        // uglify压缩js文件
        .pipe(uglify({
            compress: {properties: false},
            output: {'quote_keys': true}
        }))
        // 保存
        .pipe(gulp.dest('server/public/js'))
        // args是命令行参数，刷新
        .pipe(gulpif(args.watch, livereload()));
});

