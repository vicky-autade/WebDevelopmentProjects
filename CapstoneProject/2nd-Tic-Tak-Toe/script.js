let boxes=document.querySelectorAll('.box');
let reset_button=document.querySelector('.reset-btn');
let winner_heading=document.querySelector('.heading_main');
let new_game_button=document.querySelector('.button_main');
let winner_tag=document.querySelector('.New_game');

let turnO=true;
let count=0;

const winnerPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];




// clicking each button


boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("box was clicked");
        if(turnO===true)
        {
            box.innerText='O';
            // box.disabled=true;
            turnO=false;
        }
        else
        {
            box.innerText='X';
            // box.disabled=true;
            turnO=true;
        }
        console.log("hhhhhh");
        box.disabled=true;
        count++;
        checkwinner();
    });
});



//reset button login

reset_button.addEventListener('click',()=>{
    console.log("inside reste");
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
    count=0;
});



// Checking the winner

const checkwinner=()=>{
    for(let pattern of winnerPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
       if(pos1 != "" && pos2 != "" && pos3 != "")
       {
            if( pos1 === pos2 && pos2 === pos3  ){
                console.log("Congrts you won");
                winner(pos1[0]);
            }
            else if(count===9)
            {
                console.log("soory bala laglas tu");
                tie();

            }
       }
    }
};



//if match is winned bt any one of the member

const winner=(win)=>{
    console.log("in winner");
    winner_tag.style.display='block';
    winner_heading.innerText=`Congratulations,Winner is ${win}`;
    reset_button.disabled=true;
};

//If mathch is Tied

const tie=()=>{
    winner_tag.style.display='block';
    winner_heading.innerText=`It's a Tie`;
    reset_button.disabled=true;
}



//clicking new button

new_game_button.addEventListener('click',()=>{
    winner_tag.style.display='none';
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        reset_button.disabled=false;
        
    });
    count=0;
});







