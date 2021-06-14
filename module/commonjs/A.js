const sum = function sum(...params) {
    let len = params.length;
    if (len === 0) return 0;
    if (len === 1) return params[0];
    return params.reduce((result, item) => {
        return result + item;
    });
};

// CommonJS 模块导出规范
module.exports = {
    sum
};