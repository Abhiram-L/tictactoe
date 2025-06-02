//winning cases / possibilities
let win_cases=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
 ];


//adding listeners for buttons
let boxes=document.querySelectorAll(".box");
let curr="X";
boxes.forEach(function (obj)
{
obj.addEventListener("click",
function() 
{
if(curr=="X")
{
  curr="O";
  obj.innerText="X";
}
else{
  curr="X";
  obj.innerText="O";
}
obj.disabled="true";
check_winner(boxes,win_cases);
}
);
});


//reset button 
let reset=document.getElementById("reset");
reset.addEventListener("click",function()
{
location.reload();
});


//check for winner function
function check_winner()
{
win_cases.forEach(function(i)
{
let a1=boxes[i[0]].innerText;
let a2=boxes[i[1]].innerText;
let a3=boxes[i[2]].innerText;
if(a1!=""&&a2!=""&&a3!="")
{
  if(a1==a2&&a2==a3)
  {
  show_winner(a1);
  block_after_win();
  change_color(i);
  }
}
});
}


//winner display
let win=document.createElement("h2");
win.style.textAlign="center";
function show_winner(val)
{
dw.innerText=`kudos! player ${val} won`;
dw.classList.remove("display");
}



//block gameplay after win
function block_after_win()
{
  for(i of boxes)
  {
   i.disabled="true";
  }
}
let dw=document.getElementById("win_display");


//change box color for win
function change_color(i)
{
for(j of i)
{
  boxes[j].style.backgroundColor="green";
}
}
