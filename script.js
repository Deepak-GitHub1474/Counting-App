// Entering Counting
let countEnterPeople = document.getElementById("count-enter");
let incrementBtn = document.getElementById("increment-btn");
let saveEntryBtn = document.getElementById("save-entry-btn");
let enterCount = document.getElementById("enter-count");
let countEnter = 0;

// increment button 
incrementBtn.onclick = () =>{
    countEnter = countEnter + 1;
    countEnterPeople.textContent = countEnter;
};
// save enter counting
saveEntryBtn.onclick = () =>{
    let counting = " " + countEnter + " - ";
    enterCount.textContent += counting;
    countEnterPeople.textContent = 0;
    countEnter = 0;
};

// Exit Counting
let countExitPeople = document.getElementById("count-exit");
let decrementBtn = document.getElementById("decrement-btn");
let saveExitBtn = document.getElementById("save-exit-btn");
let enterExit = document.getElementById("exit-count")
let countExit = 0;

// decrement button
decrementBtn.onclick = () => {
    countExit = countExit + 1;
    countExitPeople.textContent = countExit;
};

// save exit counting
saveExitBtn.onclick = () => {
    enterExit.textContent += " " + countExit + " - ";
    countExitPeople.textContent = 0;
    countExit = 0;
};

