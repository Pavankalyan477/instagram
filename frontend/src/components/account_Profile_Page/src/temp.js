let arr = [1, 5, 9, 0, 5, 0, 5];
var k = 0;

function see(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[k];
            arr[k] = temp;
            k++
        }
    }
    return console.log(arr)
};
see(arr)