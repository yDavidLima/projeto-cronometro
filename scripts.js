// function play(){
//     cronMiliseg =  setInterval(function(){
//         numberMiliseg++
//         miliseg.innerHTML =  numberMiliseg
//         if(numberMiliseg >= limitSeg){
//             numberMiliseg = 0 - 1
            
//         }
        
//     }, 10);

//    cron =  setInterval(function(){
       
//        number++
//        seconds.innerHTML =  number
//        if(number >= limitSeg){
        
//         number = 0 - 1

    
//     }
//     }, 1000,)

//    setInterval(function(){
//    min.innerHTML = numberMin++
    
//     }, 10000);
  
    
// }



// function reset(){
//     clearInterval(cron)
//     clearInterval(cronMiliseg)
// }


// let numberMin = 0 
// let limitSeg = 59
// let cronMiliseg 
// let cron 
// let seconds = document.querySelector(".seg")
// let number = 0
// let numberMiliseg = 0
// const miliseg = document.querySelector(".mls")
// const min = document.querySelector(".min")


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CÓDIGO JAVASCRIPT 
let numberMin = 0;
let number = 0;
let numberMiliseg = 0;
let cronMiliseg;
let cron;
let seconds = document.querySelector(".seg");
const miliseg = document.querySelector(".mls");
const min = document.querySelector(".min");

function play() {
    clearInterval(cron);
    clearInterval(cronMiliseg);
    number = 0;
    numberMiliseg = 0;
    numberMin = 0;

    cronMiliseg = setInterval(function () {
        numberMiliseg++;
        if (numberMiliseg > 99) {
            numberMiliseg = 0;
        }
        miliseg.innerHTML = numberMiliseg.toString().padStart(2, "0");
    }, 10);

    cron = setInterval(function () {
        number++;
        if (number > 59) {
            number = 0;
            numberMin++;
            min.innerHTML = numberMin.toString().padStart(2, "0");
        }
        seconds.innerHTML = number.toString().padStart(2, "0");
    }, 1000);
}

function reset() {
    clearInterval(cron);
    clearInterval(cronMiliseg);
    seconds.innerHTML = "00";
    miliseg.innerHTML = "00";
    min.innerHTML = "00";
}


