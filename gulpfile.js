const path = require(`path`);
const gulp = require(`gulp`);
const plumber = require(`gulp-plumber`);
const sourcemap = require(`gulp-sourcemaps`);
const sass = require(`gulp-sass`);
const postcss = require(`gulp-postcss`);
const autoprefixer = require(`autoprefixer`);
const server = require(`browser-sync`).create();
const csso = require(`gulp-csso`);
const rename = require(`gulp-rename`);
const imagemin = require(`gulp-imagemin`);
const webp = require(`gulp-webp`);
const svgstore = require(`gulp-svgstore`);
const posthtml = require(`gulp-posthtml`);
const include = require(`posthtml-include`);
const del = require(`del`);
const uglify = require(`gulp-uglify`);
const webpackStream = require(`webpack-stream`);
const cache = require('gulp-cache');
const imageminPngquant = require('imagemin-pngquant');
const imageminZopfli = require('imagemin-zopfli');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminGiflossy = require('imagemin-giflossy');

const setContext = () => {
  const context = path.resolve(__dirname, `source`);
  return context;
};

const setOutput = () => {
  const output = {
    filename: `[name].js`,
    path: path.join(__dirname, `build/js`),
  };
  return output;
};

const setRules = () => {
  const rules = [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: {
      loader: `babel-loader`,
      options: {
        presets: [`@babel/preset-env`],
      },
    },
  }, ];
  return rules;
};

const mainWebpackConfig = {
  context: setContext(),
  mode: `development`,
  entry: {
    main: `./js/modules/index.js`
  },
  output: setOutput(),
  module: {
    rules: setRules(),
  }
};

const vendorWebpackConfig = {
  context: setContext(),
  mode: `development`,
  entry: {
    vendor: `./js/vendor/index.js`,
  },
  output: setOutput(),
  module: {
    rules: setRules(),
  }
};

gulp.task(`main`, function() {
  return gulp.src(`source/js/modules/index.js`)
    .pipe(webpackStream(mainWebpackConfig))
    .pipe(gulp.dest(`build/js`))
    .pipe(uglify())
    .pipe(rename(`main.min.js`))
    .pipe(gulp.dest(`build/js`));
});

gulp.task(`vendor`, function() {
  return gulp.src(`source/js/vendor/index.js`)
    .pipe(webpackStream(vendorWebpackConfig))
    .pipe(gulp.dest(`build/js`))
    .pipe(uglify())
    .pipe(rename(`vendor.min.js`))
    .pipe(gulp.dest(`build/js`));
});

gulp.task(`css`, function() {
  return gulp.src(`source/sass/style.scss`)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename(`style.min.css`))
    .pipe(sourcemap.write(`.`))
    .pipe(gulp.dest(`build/css`))
    .pipe(server.stream());
});

gulp.task(`server`, function() {
  server.init({
    server: `build/`,
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch(`source/sass/**/*.{scss,sass}`, gulp.series(`css`));
  gulp.watch(`source/img/**/*.svg`, gulp.series(`copysvg`, `sprite`, `html`, `refresh`));
  gulp.watch(`source/img/**/*.{png,jpg}`, gulp.series(`copypngjpg`, `html`, `refresh`));
  gulp.watch(`source/*.html`, gulp.series(`html`, `refresh`));
  gulp.watch(`source/js/**/*.js`, gulp.series(`main`, `vendor`, `refresh`));
});

gulp.task(`refresh`, function(done) {
  server.reload();
  done();
});

gulp.task(`copysvg`, function() {
  return gulp.src(`source/img/**/*.svg`, { base: `source` })
    .pipe(gulp.dest(`build`));
});

gulp.task(`copypngjpg`, function() {
  return gulp.src(`source/img/**/*.{png,jpg}`, { base: `source` })
    .pipe(gulp.dest(`build`));
});

gulp.task(`images`, function() {
  return gulp.src(`source/img/**/*.{png,jpg,svg}`)
    .pipe(cache(imagemin([
      imageminPngquant({
        speed: 1,
        quality: [0.95, 1]
      }),
      imageminZopfli({
        more: true
        // iterations: 50 // very slow but more effective
      }),
      //gif
      // imagemin.gifsicle({
      //     interlaced: true,
      //     optimizationLevel: 3
      // }),
      imageminGiflossy({
        optimizationLevel: 3,
        optimize: 3,
        lossy: 2
      }),
      imagemin.svgo({
        plugins: [{
          removeViewBox: false
        }]
      }),
      imagemin.jpegtran({
        progressive: true
      }),

      imageminMozjpeg({
        quality: 90
      })
    ])))
    .pipe(gulp.dest(`source/img`));

});

gulp.task(`webp`, function() {
  return gulp.src(`source/img/**/*.{png,jpg}`)
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest(`source/img`));
});

gulp.task(`sprite`, function() {
  return gulp.src(`source/img/sprite/*.svg`)
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename(`sprite.svg`))
    .pipe(gulp.dest(`build/img`));
});

gulp.task(`html`, function() {
  return gulp.src(`source/*.html`)
    .pipe(posthtml([
      include(),
    ]))
    .pipe(gulp.dest(`build`));
});

gulp.task(`copy`, function() {
  return gulp.src([
      `source/fonts/**/*.{woff,woff2}`,
      `source/img/**`,
      `source//*.ico`,
    ], {
      base: `source`,
    })
    .pipe(gulp.dest(`build`));
});

gulp.task(`clean`, function() {
  return del(`build`);
});

gulp.task(`build`, gulp.series(`clean`,
  `images`,
  `copy`,
  `css`,
  `sprite`,
  `main`,
  `vendor`,
  `html`
));

gulp.task(`start`, gulp.series(`build`, `server`));
