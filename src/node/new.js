var num=require('http');
var c=require('./new1');
num.createServer(function (a,b){
    b.writeHead(300,{'content-type':'text/html'});
    b.write('hi '+c.a.city);
    b.end('<h2>this is server responts</h2>');
}).listen(9090);

// var a=0
// var b=setInterval(fun,1000);

// function fun(){
//     a++;
//     if(a>5){
//         clearInterval(b);
//     }
//     else{
//         clearTimeout(d);
//         funa();
//     }
    
//     console.log(a);
// }

// var d=null;
// var funa =function (){
//     d=setTimeout(function (){console.log('hii')},2000);
   
// }
// funa();
// var x=2;

// var a=new Promise(function (res,rej){
//     return setTimeout(()=>{res('a promise '+x*10)},1000)
// }); 
// var b=new Promise(function (res,rej){
//     return setTimeout(()=>{res('b promise '+x*20)},500)
// });
// var c=new Promise(function (res,rej){
//     return setTimeout(()=>{rej('c promise '+x*30)},400)
// });


// Promise.allSettled([a,b,c])
// .then(a=>console.log('Then',a))
// .catch(a=>console.log('Catch',a));