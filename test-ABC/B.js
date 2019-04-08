let A = require('./A.js');

let avg = (...args) => {
    let len = args.length;
    return A.sum(...args)/len;
}

module.exports.avg = avg;