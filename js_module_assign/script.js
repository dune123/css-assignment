// dictionary having all the adress of the image 
const handOptions = {
    "rock": "/design/rock.png",
    "paper": "/design/paper.png",
    "scissor": "/design/scissor.png"
}

let HUMANSCORE=0;
let COMPUTERSCORE=0;

const pickuserhand=(hand)=>{

    // hide teh current the page
    let hands=document.querySelector('.hands')
    hands.style.display='none';
    
    //show the next page with what you picked
    let contest=document.querySelector('.contest');
    contest.style.display="flex";

    //set user image
    document.getElementById("userPickImage").src=handOptions[hand];

    pickComputerHand(hand);
}

const pickComputerHand=(hand)=>{
    let hands=["rock","paper","scissor"];
    let cpHand=hands[Math.floor(Math.random()*hands.length)];

    //set computer image
    document.getElementById("computerPickImage").src=handOptions[cpHand];

    refree(hand,cpHand)
}

const refree=(userHand,cpHand)=>{
    if (userHand=="paper" && cpHand=="scissor"){
        setDecision("YOU LOSE!");
        setComputerScore(COMPUTERSCORE+1);
    }
    if (userHand=="scissor" && cpHand=="rock"){
        setDecision("YOU LOSE!");
        setComputerScore(COMPUTERSCORE+1);
    }
    if(userHand=="rock" && cpHand=="paper"){
        setDecision("YOU LOSE!");
        setComputerScore(COMPUTERSCORE+1);
    }
    if(userHand=="scissor" && cpHand=="paper"){
        setDecision("YOU WIN!");
        setHumanScore(HUMANSCORE+1);
    }
    if(userHand=="paper" && cpHand=="rock"){
        setDecision("YOU WIN!");
        setHumanScore(HUMANSCORE+1);
    }
    if(userHand=="paper" && cpHand=="rock"){
        setDecision("YOU WIN!")
        setHumanScore(HUMANSCORE+1);
    }
};

const restartGame=()=>{
    let contest=document.querySelector(".contest");
    contest.style.display="none";

    let hands=document.querySelector(".hands");
    hands.style.display="flex";
}

const setComputerScore=(newscore)=>{
    COMPUTERSCORE=newscore;
    document.querySelector(".score-computer h1").innerText=COMPUTERSCORE;
};

const setHumanScore=(newscore)=>{
    HUMANSCORE=newscore;
    document.querySelector(".score-human h1").innerText=HUMANSCORE;
};

const setDecision=(desicion)=>{
    document.querySelector(".desicion h1").innerText=desicion;
};