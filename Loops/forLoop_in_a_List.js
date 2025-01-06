let list =[]
for(i=1; i<8; i++){
    list.push(2*i-1); //odd numbers
    console.log(i);    //counting numbes
}
console.log(list);
// turn a list [] to vertical array of items 
let number = ""           
for (const unlist of list){
   console.log(unlist);
    number = number + unlist + "\n";
}
    console.log(number);

