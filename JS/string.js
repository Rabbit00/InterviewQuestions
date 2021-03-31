// 实现一个函数计算字符串 “20000” + “30000” = “50000”
function stringToSum (str) {
    console.log(eval(str))
    let exprF = expr.replace(/\$\{([^}]+)\}/g, '${this[\'$1\'] || \'\'}')
    const fn = new Function(`return \`${exprF}\``).bind(info || {})
    
    console.log(eval(fn))
}
stringToSum('"2000" + "3000" = "5000"')

// var merge = function(nums1, m, nums2, n) {
//     let res = []

//     let n1 = nums1.slice(0, m)
//     let n2 = nums2.slice(0, n)
//     console.log(n1, n2)
//     res = n1.concat(n2)
//     console.log(res.sort())
//     return res.sort()
// };

// merge([1,2,3,0,0,0],3,[2,5,6],3)