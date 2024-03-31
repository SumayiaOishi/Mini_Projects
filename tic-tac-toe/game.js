let boxes =document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg =document.querySelector("#msg");
let container=document.querySelector(".msg-container");
let newGame=document.querySelector("#new-game");

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
}
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
      if(turn0){
        box.innerHTML="X";
        turn0=false;
      }
      else{
        box.innerHTML="O";
        turn0=true;
      }
      box.disabled=true;


      checkWinner();
    });
});
const enable=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
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
        }
   }

    }
}
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);