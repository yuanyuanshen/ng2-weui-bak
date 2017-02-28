"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require("gulp-tslint");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task("clean", () => {
  return del(["build", "dist"]);
});

gulp.task("tslint", () => {
  return gulp.src("src/app/**/*.ts")
    .pipe(tslint({
      formatter: "prose"
    }))
    .pipe(tslint.report({
      emitError: false
    }));
});

gulp.task("libs", () => {
  return gulp.src([
    "node_modules/core-js/client/shim.min.js",
    "node_modules/core-js/client/shim.min.js.map",
    "node_modules/zone.js/dist/zone.min.js",
    "node_modules/reflect-metadata/Reflect.js",
    "node_modules/reflect-metadata/Reflect.js.map",
    "node_modules/systemjs/dist/system.js",
    "node_modules/systemjs/dist/system.js.map",
    "node_modules/rxjs*/**/*.js",
    "node_modules/rxjs*/**/*.js.map",
    "node_modules/@angular*/*/bundles/*.umd.min.js",
    "node_modules/@angular*/*/bundles/*-testing.umd.js",
    "node_modules/weui/dist/style/weui.min.css"
  ]).pipe(gulp.dest("build/lib"));
});

gulp.task("resources", () => {
  return gulp.src(["src/**/*", "!**/*.ts"])
    .pipe(gulp.dest("build"))
});

gulp.task("compile", ["tslint"], () => {
  return gulp.src(["src/app/**/*.ts"])
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .js
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/app"));
});

gulp.task("definitions", ["compile"], () => {
  return gulp.src(["src/app/**/*.ts"])
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .dts
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/app"));
});

gulp.task("build", ["clean"], () => {
  return gulp.start("libs", "resources", "compile", "definitions");
});

gulp.task("watch", ["build"], () => {
  gulp.watch(["src/app/**/*.ts"], ["compile", "definitions"]);
  gulp.watch(["src/**/*", "!**/*.ts"], ["resources"]);
});

// gulp.task("dist:compile", ["tslint"], () => {
//   return gulp.src(["src/app/component/**/*.ts"])
//     .pipe(tsProject())
//     .js
//     .pipe(concat("ng2-weui.umd.js"))
//     .pipe(gulp.dest("dist"));
// });
//
// gulp.task("dist:definitions", ["tslint"], () => {
//   return gulp.src(["src/app/component/**/*.ts"])
//     .pipe(tsProject())
//     .dts
//     .pipe(concat("ng2-weui.umd.js"))
//     .pipe(gulp.dest("dist"));
// });
//
// gulp.task("dist:min", ["dist"], () => {
//   return gulp.src(["dist/ng2-weui.umd.js"])
//     .pipe(concat("ng2-weui.umd.min.js"))
//     .pipe(sourcemaps.init())
//     .pipe(uglify())
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest("dist"));
// });

gulp.task("default", () => {
  return gulp.start("build");
});
