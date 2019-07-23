// window.onload=function(){
//     alert('The page is loaded');

//     let link = document.getElementById('google-link');
//     link.onclick=function(){
//         console.log('Clicked on link');
//     }
// }

// window.onload=function(){
//     console.log('Second Load');
// }


// let link = document.getElementById('google-link');

// link.addEventListener('mouseenter', function (event) {
//     console.log('Hover on link: ', event.target.text);
// });

// link.addEventListener('mouseenter',
//     function () {
//         console.log('Hover once');
//     },
//     { once: true }
// );

// function myFunction(event){
//     console.log('Hover on link: ', event.target.text);

// }

// function hello(){
//     console.log("hello");
// }

// link.addEventListener('mouseenter', myFunction, {passive:true});

// link.removeEventListener('mouseenter',myFunction,{passive:true}); Works

// link.removeEventListener('mouseenter',myFunction,{capture:false}); Works

// link.removeEventListener('mouseenter',myFunction,{capture:true}); Fails



// document.onfullscreenchange = function ( event ) { 
//     console.log("FULL SCREEN CHANGE")
//   }; 
//   document.getElementById('google-link').onclick = function () {
//     // requestFullscreen() must be in an event handler or it will fail
//     document.getElementById('google-link').requestFullscreen();
//   }

// let event = new Event('build');

// window.addEventListener('build',function(event){
//     console.log(event.type);
// },false);

// window.dispatchEvent(event);

// link.onclick = function(e){
//     console.log("hey");
// }


let container = document.getElementById('container');
let page = document.getElementById('page');

function eventHandler(event){
    console.log(event.type+" on "+event.currentTarget.id);
    event.stopPropagation();
}

// page.addEventListener('click',eventHandler,true);
page.addEventListener('click',eventHandler);

container.addEventListener('click',eventHandler);