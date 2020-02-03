function findMinAndRemove(array){
    let min = array[0]
    let minIndex = 0

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i]
        if (currentElement < min) {
            min = currentElement
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return min
}

function insertionSort(array){
    let newMin
    let sorted = []

    while (array.length != 0) {
        newMin = findMinAndRemove(array)
        sorted.push(newMin)
    }
    return sorted
}



// let array1 = [2,3,4,5,6,7]
// let array2 = [ 3, 2, 4, 5, 6, 7 ]

// findMinAndRemove(array1)