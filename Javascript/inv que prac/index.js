for(var i =0 ; i<9;i++){
    setTimeout(()=> console.log(i)
    ,0)
}
/// 10 
/// 10 
/// 10 
/// 10 
/// 10 
/// 10 
/// 10 
/// 10   10 times because of using var it create global scope

for(let i =0 ; i<9;i++){
    setTimeout(()=> console.log(i)
    ,0)
}
// 0 
// 1
// 2 
// 3 
// 4 
// 5 to // 9 let is block scope variable 




