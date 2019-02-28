
var gulp = require('gulp');

// 拷贝任何需要的文件
gulp.task("copyfiles", function() {
    // dist/css 内的所有文件
    gulp.src("vendor/almasaeed2010/adminlte/dist/css/**")
        .pipe(gulp.dest("public/assets/css"));
    
    // dist/js 内的所有文件
    gulp.src("vendor/almasaeed2010/adminlte/dist/js/**")
        .pipe(gulp.dest("public/assets/js"));
    
    // dist/img 内的所有文件
    gulp.src("vendor/almasaeed2010/adminlte/dist/img/**")
        .pipe(gulp.dest("public/assets/img"));
    
    // bootstrap 内的所有文件
    gulp.src("vendor/almasaeed2010/adminlte/bootstrap/**")
        .pipe(gulp.dest("public/assets/bootstrap"));

    // plugins 内的所有文件
    gulp.src("vendor/almasaeed2010/adminlte/plugins/**")
        .pipe(gulp.dest("public/assets/plugins"));

    // bootstrap 内的所有文件
    gulp.src("vendor/almasaeed2010/adminlte/pages/**")
        .pipe(gulp.dest("public/assets/pages"));
    
    // 必须返回一个steam对象
    return gulp.src('package.json'); 
});

