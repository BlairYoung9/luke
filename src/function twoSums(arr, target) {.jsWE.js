function twoSums(arr, target) {
    let sol = []
    for(let i = 0; i  < arr.length; i++){
        console.log("this is i " + i)
        for(let j = i + 1; j  < arr.length; j++){
            if(arr[i] + arr[j] === target){
            sol.push(i, j)
            return sol; 
            } 
        }
    }
}

console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]