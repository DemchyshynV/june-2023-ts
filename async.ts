const random = (min = 500, max = 2000): number => {
    return Math.round(Math.random() * (max - min) + min)
}

// const worker = (msg: string, cb: (msg: string) => void): void => {
//     setTimeout(()=>{
//         cb(msg)
//     }, random())
// }

// worker('hello1', msg => console.log(msg))
// worker('hello2', msg => console.log(msg))
// worker('hello3', msg => console.log(msg))
// worker('hello4', msg => console.log(msg))
// worker('hello5', msg => console.log(msg))
// worker('hello6', msg => console.log(msg))

// worker('hello1', msg => {
//     console.log(msg);
//     worker('hello2', msg => {
//         console.log(msg);
//         worker('hello3', msg => {
//             console.log(msg);
//             worker('hello4', msg => {
//                 console.log(msg);
//                 worker('hello5', msg => {
//                     console.log(msg);
//                     worker('hello6', msg => {
//                         console.log(msg);
//                     })
//                 })
//             })
//         })
//     })
// })


const promiseWorker = (msg: string): Promise<string> => new Promise<string>(resolve => {
    setTimeout(() => {
        resolve(msg)
    }, random())
})

// promiseWorker('hello1').then(value => console.log(value))
// promiseWorker('hello2').then(value => console.log(value))
// promiseWorker('hello3').then(value => console.log(value))
// promiseWorker('hello4').then(value => console.log(value))
// promiseWorker('hello5').then(value => console.log(value))

promiseWorker('hello1')
    .then(value => {
        console.log(value);
        return promiseWorker('hello2')
    })
    .then(value => {
        console.log(value);
        return new Promise<string>(resolve => {
            setTimeout(() => {
                resolve('hello3')
            }, random())
        })
    })
    .then(value => {
        console.log(value);
        return promiseWorker('hello4')
    })
    .then(value => {
        console.log(value);
        return promiseWorker('hello5')
    })
    .then(value => {
        console.log(value);
        return promiseWorker('hello6')
    })
    .then(value => {
        console.log(value);
        return promiseWorker('hello7')
    })
    .then(value => {
        console.log(value);
        return promiseWorker('hello8')
    })