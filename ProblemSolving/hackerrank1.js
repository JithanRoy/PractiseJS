a = [5, 6, 7];
b = [3, 6, 10];


let alis = 0; 
let bob = 0;
for(let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
        alis = alis + 1;
     } else if(b[i] > a[i]) {
         bob = bob + 1;
     } else{
         alis = alis + 0;
         bob = bob + 0;
     } 
}

console.log(alis, bob);

