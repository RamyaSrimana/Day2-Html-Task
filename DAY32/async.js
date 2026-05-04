function welcome(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Welcome to Hello World");
        },2000);
    });
}

function thank(){
    return new Promise((reject)=>{
        setTimeout(()=>{
            reject("Something Went Wrong");
        },3000);
    });
}

async function getData(){
    try{
        let res1= await welcome();
        console.log(res1);
        let res2=await thank();
        console.log(res2);
    }
    catch(error){
        console.log(error);
    }
}
getData();