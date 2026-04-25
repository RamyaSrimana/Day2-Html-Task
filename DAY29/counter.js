//Print a counter every 1 second.
let counter = 0 ;
let stopinterval = setInterval(() => {
    counter++;
    if(counter === 10){
            clearInterval(stopinterval);
    }
    console.log(counter);
},1000);
