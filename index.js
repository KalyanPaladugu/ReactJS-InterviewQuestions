// 1. Convert first character to Upper cases in given string

// const str='welcome world';
// // const result= str.charAt(0).toUpperCase() + str.slice(1)
// let result =str.charAt(0).toUpperCase();

// for(let i=1;i<str.length;i++){
//     result += str[i]
// }
// console.log(result)

//2. How to create private varibles with out class:using closure

// function createUser(name){
//   let secret = "MyPassword";
//    // Private
//   return {
//         getName(){
//             return secret;
//         }
        
//     }

// }
// const re=createUser();
// console.log(re.getName());

// 3. count frequect of element in array

// step:1
// let str="asdfsa";
// let arr=[...str.split('')]
// let arr=['a','a','v','c','v'];

// let res= arr.reduce((acc,value) =>{
  
//   acc[value] = (acc[value] || 0)+1;
//     console.log(acc[value])
//   return acc;
// },{});

// console.log(res);

// Step:2
// let freq={};

// for(let i of arr){
//     if(freq[i]){
//         freq[i]++
//     }
//     else{
//         freq[i]=1
//     }
// }
// console.log(freq)

// 4. sum of array elements 
// let arr=[10,23,1,12];
// let sum=0;
// step:1
// for(let i of arr){
//     sum +=i
// }
// console.log(sum);

// let sumValue= arr.reduce((sum,value) =>{
// // console.log(value);
// return sum+value
// },0)
// console.log(sumValue)

// 5. check given array elements are sorted or not 

// let arr=[10,23,1,12];
// let arr=[19,2,93,4,2323]

// step:1
// let isSorted= true;
// for(let i=1;i<arr.length;i++){
//     if(arr[i]<arr[i-1]){
//         isSorted=false;
//         break;
//     }
   
// }

// stp:2
// let isSorted=arr.every((v,i) => {
//     console.log(i,v)
//     return i===0 || v> arr[i-1]
// })
// console.log(isSorted)

// 6. sort the given array elements
// let arr=[19,2,93,4,2323];

// step1:
// let re=arr.sort((a,b) => a-b);
// // a-b for ascending , b-a for descending
// console.log(re);

// step:2 bubble sort 
// for(let i=0 ; i<arr.length;i++){
//     for(let j=0;j<arr.length-i-1;j++){
//         if(arr[j] > arr[j+1]){
//         let temp=arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] =temp;
//         }
//     }
// }
// console.log(arr)

// 7. input : Welcome to the js programs; output:programs js the to Welcome

// let string1= "Welcome to the js programs"
// let re= string1.split(" ").reverse().join(" ");
// console.log(re)

// 8. separate event numbers from the given array 
// let arr=[1,2,3,4,5,6,7];
// step1:
// let re= arr.filter(n => n%2===0);
// console.log(re);

// step2:
// let newArray=[];
// for(let i of arr){
//     if(i % 2 === 0){
//         newArray.push(i)
//     }
// }
// console.log(newArray)

// 9. input: [2,32,4,5]; let  output: 36
// let arr=[2,32,4,5];
// let target=36;

// let map={};
// for(let i=0;i<arr.length;i++){

//     let diff= target - arr[i];
//     console.log("Diff",map[diff])
//     if(map[diff] !== undefined){
//         console.log("Indexes are ",[map[diff],i])
//     }
//    map[arr[i]]=i
// }
// console.log("map",map)

// 10. Find missing numbers in given array 


// let arr=[1,2,25];

// function missingNumbers(arr){
//     const set= new Set(arr);
//     console.log(typeof(set))
//     const missing=[];
//     let max=Math.max(...arr)
//     for(let i=1;i<max;i++){
//         if(!set.has(i)){
//             missing.push(i)
//         }
//     }
//     return missing

// }
// console.log(missingNumbers(arr))

// 11. Flatening array 

// let arr= [1,[2,3],[4,[5,6]]]
// step1:
// console.log(arr.flat(Infinity));

// step:2
// function flattenArray(arr){
// let newArray=[];

// for(let i of arr){
//     if(Array.isArray(i)){
//        newArray.push(...flattenArray(i))
//     }
//     else {
//         newArray.push(i)
//     }
// }
// return newArray

// }
// console.log(flattenArray(arr))


// 12. Remove duplicate elements in given array 
// let arr=[1,2,3,4,2,1,6];
// step1:
// let newArray=[...new Set(arr)];

// step:2
// function removeDuplicate(arr){
// let newArray=[];

// for(let i of arr){
//     if(!newArray.includes(i)){
//        newArray.push(i)
//     }
  
// }
// return newArray
// }
// console.log(removeDuplicate(arr))

// 13. Find Max element in the array 
// let arr= [12,21,21,122,-3]
// step:1
// console.time()
// const result= Math.max(...arr)
// console.log(result)
// console.timeEnd()
// step2: \
// console.time()
// let max=arr[0]
// for(let i=1;i<arr.length;i++){
//  if(arr[i]> max){
//     max= arr[i];
//  }
 
// }
// console.log(max);
// console.timeEnd()

// freeze
// let obj= Object.freeze({user:{name:"A"}});
// obj.user.name="B";
// console.log(obj)
// freeze method to shallow copy nexted object properties may change 

//Palindrome without methods
// let str="madam";

// function strPalindrom(str){
//     for(let i=0;i<str.length/2;i++){
//         if(str[i] !== str[str.length-1-i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(strPalindrom(str))


