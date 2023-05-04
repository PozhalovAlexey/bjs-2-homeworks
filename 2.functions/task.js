function getArrayParams(...arr) {

    //1-й способ
    // let min = Infinity;
    // let max = -Infinity;
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > max) {
    //         max = arr[i]
    //     }
    //   if (arr[i] < min) {
    //         min = arr[i]
    //     }
    //     sum += arr[i]
    // }
    // const average = Number((sum/arr.length).toFixed(2))

    //2-й способ
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const sum = arr.reduce((a, b) => a + b)
    const average = sum / arr.length

    return {min: min, max: max, avg: +average.toFixed(2)};
}

function summElementsWorker(...arr) {
    //1-й способ
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i]
    // }return sum
    //2-й способ
    return arr.reduce((a, b) => a + b, 0)
}

function differenceMaxMinWorker(...arr) {
//1-й способ
//   let max = -Infinity;
//   let min = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//      if (arr.length === 0) return 0
//   }
//   return max - min;
// }
    //2-й способ
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    if (arr.length === 0) return 0
    return max - min
}

function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i]
        } else sumOddElement += arr[i]
    }
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i]
            countEvenElement++
        }
    }
    if (arr.length === 0) return 0
    return sumEvenElement / countEvenElement
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
        const workerResult = func(...arrOfArr[i])
        if (workerResult > maxWorkerResult) {
            maxWorkerResult = workerResult
        }
    }
    return maxWorkerResult
}
