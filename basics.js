function hello(name) {
    console.log("hello " + name)
}


//typically window, but for node global
var message = '';

//prints undefined since message is only in the scope of basics.js
console.log(globalThis.message);