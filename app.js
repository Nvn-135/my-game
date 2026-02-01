let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rst-bttn");
let NewBtn  = document.querySelector("#new-bttn");
let msgcontainetr = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () =>
{
    turnO = true;
    enableBoxes();
    msgcontainetr.classList.add("hide");
};

boxes.forEach((box) =>
{
    box.addEventListener("click",() =>{
        console.log("Box was clicked"); 
        if (turnO)
        {
            box.innerHTML = "O";
            turnO = false;
        }
        else{
            box.innerHTML = "X"; 
            turnO = true
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () =>{
    for (let box of boxes)
    {
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for (let box of boxes)
    {
        box.disabled = false;
        box.innerHTML = "";
    }
};

const ShowWinner = (winner) =>
{
  msg.innerHTML = `Congratulation , winner is ${winner}`;
  msgcontainetr.classList.remove("hide");
  disableBoxes();
};

const checkWinner  = () =>
{
  for (let pattern of winPatterns)
  {
    let pos1val = boxes[pattern[0]].innerHTML;
    let pos2val = boxes[pattern[1]].innerHTML;
    let pos3val = boxes[pattern[2]].innerHTML;

    if (pos1val != "" && pos2val != "" && pos3val !="")
    {
        if (pos1val === pos2val && pos2val === pos3val)
        {
            console.log("Winner",pos1val);
            ShowWinner(pos1val);
        }
    }
  }   
};

NewBtn.addEventListener("click",resetgame)
resetBtn.addEventListener("click",resetgame);