const gulp = require('gulp');
const rollup = require('rollup').rollup;
const fs = require('fs');


gulp.task('build', function() {
  const rollupOpts = {
    input: './src/length.js',
  };
  
  const bundleOpts = {
    format: 'umd',
    name: 'length'
  };

  return (
    rollup(rollupOpts)
    .then(bundle => bundle.generate(bundleOpts))
    .then(function (result) {
      // Generated code (as string)
      const code = result.code;

      fs.readFile('./templates/header.js', 'utf8', (err, data) => {
        if (err) throw err;
        // Replace first 5 lines with 'header.js' contents
        const fixed = data + code.split('\n').slice(5).join('\n');

        // Save fixed code
        fs.writeFile('./length.js', fixed, (err) => {
          if (err) throw err;
          console.log("\x1b[1m\x1b[32m", '\n    length.js generated correctly!\n');
        });
      });
    })
  );
});
