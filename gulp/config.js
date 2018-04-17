// Get arguments passed as '--name value'
const arg = (argList => {
  let arg = {}, a, opt, thisOpt, curOpt;
  for (a = 0; a < argList.length; a++) {

    thisOpt = argList[a].trim();
    opt = thisOpt.replace(/^\-+/, '');

    if (opt === thisOpt) {
      // Argument value
      if (curOpt) arg[curOpt] = opt;
      curOpt = null;

    }
    else {
      // Argument name
      curOpt = opt;
      arg[curOpt] = true;
    }
  }

  return arg;
})(process.argv);

module.exports = {
  versionNumber: arg.versionNumber,
};
