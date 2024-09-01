const {parentPort, workerData} = require('worker_threads');

function getRes({count}) {
    const res = [];

    for(let i = 0; i<count; i++) {
        res.push(i+i)
    }

    return res
}



parentPort.postMessage(getRes(workerData));
