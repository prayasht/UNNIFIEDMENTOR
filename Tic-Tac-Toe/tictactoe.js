
let turn=0;
let result = [
    [null, null, null],
    [null, null, null],  
    [null, null, null]
];
let p1interval = null;
let p2interval= null;
function mark(n){
    if(result[Math.floor(n / 3)][n%3]=== null){ //make sure does not over ride the symbol
    if(turn%2===0){
    document.getElementById(n).innerHTML=document.getElementById("tic").innerHTML; 
    result[Math.floor(n / 3)][n%3]= 1;//stores player 1 mark(tic).
    player2Turn();
    }
    else{
    document.getElementById(n).innerHTML=document.getElementById("tac").innerHTML;
    result[Math.floor(n / 3)][n%3]=2 ;//stores player 2 mark(tac).
     player1Turn();
    }
    turn++;
    const winner = checkWinner(result);
    if (winner) { //found winner
        let winstr="p"+winner+"name";
        document.getElementById("textway").innerText="HOORAY!!..." +document.getElementById(winstr).innerText+ " wins!";
    } 
    else if(turn>8){ //draw condition.
        document.getElementById("textway").innerText="Its a Tie...!!";
        setTimeout(function(){clearBoard();},2000);
    }
    }
}
function checkWinner(result) {
for (let i = 0; i < 3; i++) {
    // Check rows
    if (result[i][0] && result[i][0] === result[i][1] && result[i][1] === result[i][2]) {
        blinkRow(i);
        return result[i][0]; // Winner found

    }
    // Check columns
    if (result[0][i] && result[0][i] === result[1][i] && result[1][i] === result[2][i]) {
        blinkColumn(i);
        return result[0][i]; // Winner found
    }
}
// Check diagonals
if (result[0][0] && result[0][0] === result[1][1] && result[1][1] === result[2][2]) {
    binkmainDiagonal();
    return result[0][0]; // Winner found (main diagonal)

}
if (result[0][2] && result[0][2] === result[1][1] && result[1][1] === result[2][0]) {
    blinkantiDiagonal();
    return result[0][2]; // Winner found (anti-diagonal)
}
return null; // No winner
}
function blinkRow(i) { //make wining row blink(if any)
    const elements = [
        document.getElementById(i * 3),
        document.getElementById(i * 3 + 1),
        document.getElementById(i * 3 + 2)
    ];

    let blinkCount = 0;
    const blinkInterval = setInterval(() => {
        elements.forEach((element) => {
            element.style.visibility = (element.style.visibility === 'hidden') ? 'visible' : 'hidden';
            blinkCount++;
            if (blinkCount >= 12) {
                clearInterval(blinkInterval);
                setTimeout(function(){clearBoard();},500);
            }
        });
    }, 200); //blink after 200milisecond
}
function blinkColumn(i) { //make wining column blink (if any)
    const elements = [
        document.getElementById(i),
        document.getElementById(i + 3),
        document.getElementById(i + 6)
    ];

    let blinkCount = 0;
    const blinkInterval = setInterval(() => {
        elements.forEach((element) => {
            element.style.visibility = (element.style.visibility === 'hidden') ? 'visible' : 'hidden';
            blinkCount++;
            if (blinkCount >= 12) {
                clearInterval(blinkInterval);
                setTimeout(function(){clearBoard();},1000);
            }
        });
    }, 200); //blink after 200milisecond
}
function binkmainDiagonal() { //make make diagonal blink (if win by  main diagonal)
    const elements = [
        document.getElementById("0"),
        document.getElementById("4"),
        document.getElementById("8")
    ];

    let blinkCount = 0;
    const blinkInterval = setInterval(() => {
        elements.forEach((element) => {
            element.style.visibility = (element.style.visibility === 'hidden') ? 'visible' : 'hidden';
            blinkCount++;
            if (blinkCount >= 16) {
                clearInterval(blinkInterval);
                setTimeout(function(){clearBoard();},1000);
            }
        });
    }, 200);//blink after 200milisecond
}
function blinkantiDiagonal() { //make antidiagonal blink (if win by anti diagonal)
    const elements = [
        document.getElementById("2"),
        document.getElementById("4"),
        document.getElementById("6")
    ];

    let blinkCount = 0;
    const blinkInterval = setInterval(() => {
        elements.forEach((element) => {
            element.style.visibility = (element.style.visibility === 'hidden') ? 'visible' : 'hidden';
            blinkCount++;
            if (blinkCount >= 12) {
                clearInterval(blinkInterval);
                setTimeout(function(){clearBoard();},1000);
            }
        });
    }, 200); //blink after 200milisecond
}
function clearBoard(){ //clear the board,result field, takes all condition to innitial state
    for(let k=0;k<9;k++){
        document.getElementById(k).innerText='';
        result = [
            [null, null, null],
            [null, null, null],  
            [null, null, null]
        ];
        turn=0;
    document.getElementById("textway").innerText="";
     p1NoTurn();
     p2NoTurn();   
    }
}
function player2Turn(){ //display player 2 turn
    if(p1interval!=null)
        p1NoTurn();
    document.getElementById("textway").innerText=document.getElementById("p2name").innerText+"'s Turn.";
     p2interval=setInterval(() =>{document.getElementById("p2").style.border=(document.getElementById("p2").style.border==='3px solid rgb(233, 233, 253)') ? '6px solid #00ff51' : '3px solid rgb(233, 233, 253)' ;
    document.getElementById("p2").style.width=(document.getElementById("p2").style.width==='380px') ? '400px' : '380px';
    },350);

}
function player1Turn(){ //display player 1 turn
    if(p2interval!=null)
       p2NoTurn();
    document.getElementById("textway").innerText= document.getElementById("p1name").innerText+"'s Turn.";
     p1interval=setInterval(() =>{document.getElementById("p1").style.border=(document.getElementById("p1").style.border==='3px solid rgb(233, 233, 253)') ? '6px solid #00ff51' : '3px solid rgb(233, 233, 253)' ;
    document.getElementById("p1").style.width=(document.getElementById("p1").style.width==='380px') ? '400px' : '380px';
    },350);

}
function p1NoTurn(){ //stop display player 1 turn
    clearInterval(p1interval);
    document.getElementById("p1").style.width='380px';
    document.getElementById("p1").style.border='3px solid rgb(233, 233, 253)';
}
function p2NoTurn(){ //stops display player 2 turn
    clearInterval(p2interval);
    document.getElementById("p2").style.width='380px';
    document.getElementById("p2").style.border='3px solid rgb(233, 233, 253)';
}
function newGame(){ //make the board ready foor a new game
   let newgame= confirm("About to Start a new game...");
   if(newgame){
    clearBoard();
    player1Turn();
   }
}
function clearGame(){ //clears the game
    let cleargame=confirm("Are you sure you want to end the game?");
    if(cleargame)
        clearBoard();
}
function changename(name) {
    const newName = prompt("Enter Player Name:");
    console.log(newName);
    console.log(name);

    if (newName !== null && newName.trim() !== "") {
        name.innerText=newName;
    } else {

        console.log("Invalid input or canceled.");
    }
}





