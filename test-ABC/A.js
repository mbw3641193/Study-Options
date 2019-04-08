let sum = (...args) => {
    let result = 0;
    args.map((item)=>{
        result += item;
    })
    return result;
}

module.exports.sum = sum;