// let container=querySelector("container");
let card=document.querySelector("card");
let h1=document.querySelector("h1");
let p=document.querySelector("p");
let button=document.querySelector("button");



const getQuote=async()=>{
   let storedata= await fetch('https://quotable.io/random');
   let newdata= await storedata.json();
   // console.log(newdata);
   let quote=newdata.content
   let author=newdata.author


   h1.innerText=quote
   p.innerText=author

}
 button.addEventListener("click",getQuote);

