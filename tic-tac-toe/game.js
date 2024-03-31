let boxes =document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg =document.querySelector("#msg");
let container=document.querySelector(".msg-container");

let count=0;


let turn0=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame =()=>{
    let turn0=true;
    enable();
    container.classList.add("hide");
    count=0;
}
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
      if(turn0){
     box.innerHTML="X";
      
       box.classList.add("forX")
        turn0=false;
      }
      else{
        box.innerHTML="O";
        box.classList.add("forO");
        turn0=true;
      }
      count++;
      box.disabled=true;
      if(count===9 && !checkWinner() ){
       showDraw();
      }


      checkWinner();
    });
});
const enable=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
      }
}
const showDraw=()=>{
    msg.innerText = "It's a Draw!";
    container.classList.remove("hide");
 for (let box of boxes){
    box.disabled=true;
  }
}

const showWinner=(winner)=>{
  msg.innerText=`Congratulations! Winner is ${winner}`;
  container.classList.remove("hide");
  for (let box of boxes){
    box.disabled=true;
  }
 
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
     let val1=boxes[pattern[0]].innerText;
     let val2=boxes[pattern[1]].innerText;
     let val3=boxes[pattern[2]].innerText;
    
   if(val1!=""&& val2!=""&& val3!=""){
        if(val1===val2 && val2===val3){

          showWinner(val1);
          return true;
        }
   }

    }
    return false;
}

reset.addEventListener("click", resetGame);