let noti = document.getElementById("noti")
let meg1 = document.getElementById("meg1")
let meg2 = document.getElementById("meg2")
let chance = 10;
let guessed_num = []
let answer = Math.floor(Math.random()*50)+1;
// console.log(answer)
meg1.textContent = "Number of chance to guess :" + chance

function start(){
    let guess_num = Number(document.getElementById("guess_num").value);
    // check number between 1 to 50
    if(guess_num<1 || guess_num > 50){
        alert("Please enter number between 1 to 50")
    }else{
        if(answer < guess_num){
            document.querySelector(".text-ctn").classList.add("wrong")
            noti.textContent="Guessed answer is higher than the correct number";
            noti.style.color ="red";
            // noti.style.fontSize="11px"
            chance -= 1;
            meg1.textContent = "Number of chance to guess :" + chance
            guessed_num.push(guess_num)
            meg2.textContent = "Guessed numbers are :" + guessed_num;
            document.getElementById("guess_num").value="";
        }else if(guess_num === answer){
            document.querySelector(".text-ctn").classList.add("true")
            noti.textContent = "Congratulation!! you won the game."
            noti.style.color = "green";
            // noti.style.fontSize="11px"
            document.getElementById("guess-btn").disabled = true
        }else{
            document.querySelector(".text-ctn").classList.add("wrong")
            noti.textContent= "Guessed answer is lower than the correct number";
            noti.style.color = "red";
            // noti.style.fontSize="11px"
            chance -= 1;
            meg1.textContent = "Number of chance to guess :" + chance
            guessed_num.push(guess_num)
            meg2.textContent = "Guessed numbers are :" + guessed_num;
            document.getElementById("guess_num").value="";
        }
    }
    if(chance<=0){
        document.getElementById("guess-btn").disabled = true
        alert("Your ticket has gone. Please restart the game.")
        // restart()
    }

}

function restart(){
    answer = Math.floor(Math.random()*50)+1;
    // console.log(answer)
    document.getElementById("guess-btn").disabled = false;
    document.getElementById("guess_num").value="";
    document.querySelector(".text-ctn").classList.remove("wrong")
    document.querySelector(".text-ctn").classList.remove("true")
    noti.textContent ="Your game has restarted successfully"
    noti.style.color = "white"
    chance = 10;
    meg1.textContent = "Number of chance to guess :" + chance
    guessed_num = []
    meg2.textContent = "Guessed numbers are :" + guessed_num;


}
function exit(){
    window.close()
}
