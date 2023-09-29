const random = (min = 500, max = 2000): number => {
    return Math.round(Math.random() * (max - min) + min)
}

const energy = 2000

type Cb = (err: string, data?: number) => void

const msg = (msg: string, en: number): void => {
    console.log(msg);
    console.log(`в мене залишилось ${en} енергії`);
    console.log('--------------------------------------------------');
}

// const wakeUp = (en: number, cb: Cb): void => {
//     setTimeout(() => {
//         en -= random()
//
//         if (en <= 0) {
//             cb('Вмер так і не прокинувшись')
//         } else {
//             msg('прокинувся', en)
//             cb(null, en)
//         }
//     }, random())
// }
//
// const eat = (en: number, cb: Cb): void => {
//     setTimeout(() => {
//         en += random()
//         msg('поїв', en)
//         cb(null, en)
//     }, random())
// }
//
// const goToWork = (en: number, cb: Cb): void => {
//     setTimeout(() => {
//         en -= random()
//
//         if (en <= 0) {
//             cb('Вмер так і не дійшовши до роботи')
//         } else {
//             msg('дошкандибав до роботи', en)
//             cb(null, en)
//         }
//     }, random())
// }
//
// const working = (en: number, cb: Cb): void => {
//     setTimeout(() => {
//         en -= random()
//
//         if (en <= 0) {
//             cb('вмер на роботі')
//         } else {
//             msg('попрацював', en)
//             cb(null, en)
//         }
//     }, random())
// }
//
// const dinner = (en: number, cb: Cb): void => {
//     setTimeout(() => {
//         en += random()
//
//         msg('пообідав', en)
//         cb(null, en)
//     }, random())
// }
//
// const goToHome = (en: number, cb: Cb): void => {
//     setTimeout(() => {
//         en -= random()
//
//         if (en <= 0) {
//             cb('Вмер так і не дійшовши до дому')
//         } else {
//             msg('добрався до дому', en)
//             cb(null, en)
//         }
//     }, random())
// }


// wakeUp(energy,(err, data) => {})
// eat(energy, (err, data) => {})
//
// goToWork(energy, (err, data) => {})
// working(energy, (err, data) => {})
// dinner(energy, (err, data) => {})
// working(energy, (err, data) => {})
// goToHome(energy, (err, data) => {})

// wakeUp(energy, (myError, myData) => {
//     if (myError) {
//         console.log(myData);
//         return
//     }
//
//     eat(myData, (err1, data1) => {
//         goToWork(data1, (err2, data2) => {
//             if (err2) {
//                 console.log(err2);
//                 return
//             }
//
//             working(data2, (err3, data3) => {
//                 if (err3) {
//                     console.log(err3);
//                     return
//                 }
//                 dinner(data3, (err4, data4) => {
//                     working(data4, (err5, data5) => {
//                         goToHome(data5, err => {
//                             if (err) {
//                                 console.log(err);
//                             }
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


// ###########################################################################################################

// const wakeUp = (en: number, cb: Cb): void => {
//     setTimeout(() => {
//         en -= random()
//
//         if (en <= 0) {
//             cb('Вмер так і не прокинувшись')
//         } else {
//             msg('прокинувся', en)
//             cb(null, en)
//         }
//     }, random())
// }

const wakeUp = (en: number): Promise<number> => new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        en -= random()

        if (en <= 0) {
            reject('Вмер так і не прокинувшись')
            return
        }

        msg('прокинувся', en)
        resolve(en)
    }, random())
})
// const eat = (en: number, cb: Cb): void => {
//     setTimeout(() => {
//         en += random()
//         msg('поїв', en)
//         cb(null, en)
//     }, random())
// }
const eat = (en: number): Promise<number> => new Promise<number>(resolve => {
    setTimeout(() => {
        en += random()
        msg('поїв', en)
        resolve(en)
    }, random())
})

// const goToWork = (en: number, cb: Cb): void => {
//     setTimeout(() => {
//         en -= random()
//
//         if (en <= 0) {
//             cb('Вмер так і не дійшовши до роботи')
//         } else {
//             msg('дошкандибав до роботи', en)
//             cb(null, en)
//         }
//     }, random())
// }

const goToWork = (en: number): Promise<number> => new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        en -= random()

        if (en <= 0) {
            reject('Вмер так і не дійшовши до роботи')
            return
        }

        msg('дошкандибав до роботи', en)
        resolve(en)
    }, random())
})
// const working = (en: number, cb: Cb): void => {
//     setTimeout(() => {
//         en -= random()
//
//         if (en <= 0) {
//             cb('вмер на роботі')
//         } else {
//             msg('попрацював', en)
//             cb(null, en)
//         }
//     }, random())
// }

const working = (en: number): Promise<number> => new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        en -= random()

        if (en <= 0) {
            reject('вмер на роботі')
            return
        }

        msg('попрацював', en)
        resolve(en)
    }, random())
})
// const dinner = (en: number, cb: Cb): void => {
//     setTimeout(() => {
//         en += random()
//
//         msg('пообідав', en)
//         cb(null, en)
//     }, random())
// }
const dinner = (en: number): Promise<number> => new Promise<number>(resolve => {
    setTimeout(() => {
        en += random()
        msg('пообідав', en)
        resolve(en)
    }, random())
})
// const goToHome = (en: number, cb: Cb): void => {
//     setTimeout(() => {
//         en -= random()
//
//         if (en <= 0) {
//             cb('Вмер так і не дійшовши до дому')
//         } else {
//             msg('добрався до дому', en)
//             cb(null, en)
//         }
//     }, random())
// }

const goToHome = (en: number): Promise<number> => new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        en -= random()

        if (en <= 0) {
            reject('Вмер так і не дійшовши до дому')
            return
        }

        msg('добрався до дому', en)
        resolve(en)
    }, random())
})


// wakeUp(energy)
//     .then(en => eat(en))
//     .then(en => goToWork(en))
//     .then(en => working(en))
//     .then(en => dinner(en))
//     .then(en => working(en))
//     .then(en => goToHome(en))
//     .catch(err => console.log(err))
//
// const start = async (): Promise<void> => {
//     try {
//         let en = await wakeUp(energy);
//         en = await eat(en)
//         en = await goToWork(en)
//         en = await working(en)
//         en = await dinner(en)
//         en = await working(en)
//         await goToHome(en)
//     } catch (e) {
//         console.log(e);
//     }
//
// }
//
// start()
