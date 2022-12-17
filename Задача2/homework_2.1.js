const interval = setInterval(() => {
    console.log("ok")
},1000);

setTimeout(() => {
    clearInterval(interval)
},60000);