function getRes(count) {
    const res = [];

    for(let i = 0; i<count; i++) {
        res.push(i+i)
    }

    return res;

}

function runWorker () {    
   const result = [getRes(100000000), getRes(100000000), getRes(100000000)];
   console.log(result);
}


runWorker();