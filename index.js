function maxMinSorting(arr, n)
{
    let temp = new Array(n);
 
    let small = 0, large = n - 1;
 
    let flag = true;
 
    for (let i = 0; i < n; i++) {
        if (flag)
            temp[i] = arr[large--];
        else
            temp[i] = arr[small++];
 
        flag = !flag;
    }
 
    for (let i = 0; i < n; i++)
        arr[i] = temp[i];
}

    let arr = [2, 4, 6, 8, 10 ];
    let n = arr.length;
 
    console.log("Original Array");
    console.log(arr);
    
    // Print the array using for loop
    // for (let i = 0; i < n; i++)
    //     console.log(arr[i]);
 
    maxMinSorting(arr, n);
 
    console.log("New Array with modification");
    console.log(arr);
    // Printing the new array using for loop
    // for (let i = 0; i < n; i++)
    //     console.log(arr[i]);
