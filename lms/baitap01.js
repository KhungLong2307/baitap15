let confirmAnswer = confirm("Shall we play a game?");
const revAnswer = (confirmAnswer) =>{
    let result = "";
    if(confirmAnswer){
        result = "yes,we will play a game!!";
    }
    else{
        result = "maybe later!!";
    }
    return result;
}
let revResult = revAnswer(confirmAnswer);
alert(revResult);