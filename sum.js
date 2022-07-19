function sum(a,b){
    return a+b;
}

function obj() 
{
   return {name :"salman"}
}
console.log(obj)




// Call Back function

function  fatchdata(back){
    return back("Hello Call back")
}

// Fatch Promise 

function fatchPromise(){
    return new Promise((resolve,reject)=>{
        resolve("Finally")
    })
}



module.exports = fatchPromise