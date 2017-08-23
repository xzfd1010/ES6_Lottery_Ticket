// function test(){
//     let a = 1;
//     for(let i = 1;i<3;i++){
//         console.log(i);
//     }
// }
//
// function last(){
//     const PI = 3.14;
//     const k = {
//         a: 1
//     };
//     k.b = 3;
//     console.log(PI,k);
//
// }
//
// test();
// last();

// var a=[];
//
// for(var i=0;i<10;i++){
//     a[i]=function(i){
//         return function(){
//             console.log(i);
//         }
//     }(i);
// }
// a[6]();//6

if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError

    let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}