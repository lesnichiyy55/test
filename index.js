const {Worker} = require('worker_threads')

function getRes(count) {

    return new Promise ((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                count
            }
        });

        worker.on('message', (msg) => {
            console.log(`ID треда: ${worker.threadId}`);
            resolve(msg);
        });

        worker.on('error', (err) => {
            console.log(err);
        });

        worker.on('exit', () => {
            console.log('Завершил работу и вышел из треда')
        });
    });
}

async function runWorker () {
   const result = await Promise.all ([
    getRes(100000000), getRes(20000000), getRes(30000000)
   ])

   console.log(result);
}

setTimeout(() => {console.log('Поток не заблокирован!')}, 1000);
setTimeout(() => {console.log('Я в ахуе! Поток реально не заблокирован!')}, 1500);
setTimeout(() => {console.log('Нахуй GAS!')}, 2000);

runWorker()

