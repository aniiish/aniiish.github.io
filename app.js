// Defining variables
let arrlist = ["rock" , "paper", "scissor"];
let play = true;
let random_no=0,click;
const org_html = document.getElementById('change').outerHTML;
let computer_score=0, user_score=0;


function clickedrock(){
  click=0;
  compare(click);
}


function clickedpaper(){
    click=1;
    compare(click);
}


function clickedscissor(){
    click=2
    compare(click)
}
function play_again(){
    document.getElementById('main-changes').outerHTML= org_html;

}


function compare(user_click){

    // Math.random() * (highestNumber - lowestNumber) + lowestNumber
    random_no= Math.floor(Math.random()*(3-0)+0);
  if(arrlist[user_click]===arrlist[random_no]){tie()}

  else if((arrlist[user_click]==="rock") && (arrlist[random_no]==="paper")){computer_won();}
  else if((arrlist[user_click]==="rock") && (arrlist[random_no]==="scissor")){user_won();}
  else if((arrlist[user_click]==="paper") && (arrlist[random_no]==="rock")){user_won();}
  else if((arrlist[user_click]==="paper") && (arrlist[random_no]==="scissor")){computer_won();}
  else if((arrlist[user_click]==="scissor") && (arrlist[random_no]==="rock")){computer_won();}
  else {user_won()}

}

function user_won(){
    document.getElementById('change').outerHTML= "<div id=\"main-changes\"><h1 id=\"changes\" class=\"new\"> You Won!</h1> <div class=\"new-btn\"><button id=\"play-button\" type=\"button\" onclick=\"play_again()\" >Play Again</button> </div> </div> ";
    user_score++;
    change_score_usr(user_score);

}


function computer_won(){
    document.getElementById('change').outerHTML= "<div id=\"main-changes\"><h1 id=\"changes\" class=\"new\"> Computer Won!</h1> <div class=\"new-btn\"><button id=\"play-button\" type=\"button\" onclick=\"play_again()\" >Play Again</button> </div> </div> ";
    computer_score++;
    change_score_com(computer_score);

}


function tie(){
    document.getElementById('change').outerHTML= "<div id=\"main-changes\"><h1 id=\"changes\" class=\"new\"> It's a Tie!!</h1> <div class=\"new-btn\"><button id=\"play-button\" type=\"button\" onclick=\"play_again()\" >Play Again</button> </div> </div> ";
}


function change_score_com(newscore){
    document.getElementById('computer-score').innerHTML="Computer : "+newscore;  
}


function change_score_usr(newscore){
    document.getElementById('player-score').innerHTML="PLayer : "+newscore;  
}

