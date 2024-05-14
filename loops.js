
//for loop
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
for(var i=0;i<arr.length;i++){
    if(i==2){
        // break;
        continue;
    }
    console.log(arr[i])
}


//forEach Loop
arr.forEach(function(element){
    console.log(element);
})
const ac = 0;
ac++;
ac = ac +1;
let j = 0;

//while loop
while(j<arr.length){
    console.log(arr[j]);
    j ++;
}

//do-while loop
do{
    console.log(arr[j]);
    j++;
} while (j < arr.length);