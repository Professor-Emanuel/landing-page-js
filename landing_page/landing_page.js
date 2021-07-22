// Select DOM Elements
const time = document.getElementById('time');
const greetings = document.getElementById('greetings');
const namePerson = document.getElementById('name');
const plans = document.getElementById('plans');
const facts = document.getElementById('facts');

// Show AM or PM
const showAmPm = true;

// Function to show the right TIME --> call showTime() in itself to see updated time second by second
function showTime(){
    let today = new Date(); /*returns: "Thu Jul 22 2021 10:56:46 GMT+0300 (Eastern European Summer Time)" */
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // Set AM or PM
    const amPm = hours >= 12 ? 'PM':'AM';

    //Do a 12h FORMAT
    hours = hours % 12 || 12;

    //Display Time
    time.innerHTML = `${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} ${showAmPm ? amPm: ''}`;

    setTimeout(showTime, 1000); // once called, call it every 1000ms = 1s
}

// Add Zeros
function addZero(number){
    return (parseInt(number, 10) < 10 ? '0':'') + number;
}


//SET background and greetings
function setBackgroundGreetings(){
    let today = new Date();
    let hours = today.getHours();

    if(hours < 12){
        document.body.style.backgroundImage = "url('../images/brain.jpg')";
        greetings.textContent = 'Good Morning';
        document.body.style.color = "black";
    } else if(hours < 18){
        document.body.style.backgroundImage = "url('../images/neuron.jpg')";
        greetings.innerHTML = 'Good Afternoon';
    } else if(hours < 19){
        document.body.style.backgroundImage = "url('../images/neurons.jpg')";
        greetings.textContent = 'Good Evening';
    } else if(hours < 20){
        document.body.style.backgroundImage = "url('../images/neurons2.jpg')";
        greetings.textContent = 'Good Night';
    }
}

//SET fact of the hour (I will just put a few)
function setFacts(){
    let today = new Date();
    let hours = today.getHours();

    if(hours == 1){
        facts.textContent = "Average number of neurons in the human brain = 100 billion";
    }else if(hours == 2){
        facts.textContent = "Average number of neurons in the octopus brain = 300 million";
    }else if(hours == 3){
        facts.textContent = "Rate of neuron growth during fetal development in utero = 250,000 neurons/minute";
    }else if(hours == 4){
        facts.textContent = "Diameter of a neuron = 4 to 100 microns";
    }else if(hours == 5){
        facts.textContent = "Length of giraffe primary afferent axon (from neck to toe) = 15 feet";
    }else if(hours == 6){
        facts.textContent = "Velocity of signal transmitted through a neuron = 1.2 to 250 miles/hour";
    }else{
        facts.textContent = "There are as many neurons in the human brain as stars in the Milky Way";
    }
}

// Get Name
function getName(){
    if(localStorage.getItem('namePerson') === null){
        namePerson.textContent = '[Enter Name]';
    }else{
        namePerson.textContent = localStorage.getItem('namePerson');
    }
}

//Set Name
function setName(e){
    if(e.type === 'keypress'){
        // Verify ENTER is pressed, 13 = enter key
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('namePerson', e.target.innerText);
            //when pressing enter don't create a new line, focus out
            namePerson.blur();
        }
    }else{
        localStorage.setItem('namePerson', e.target.innerText);
    }
}

// Get Plans
function getPlans(){
    if(localStorage.getItem('plans') === null){
        plans.textContent = '[Enter Plan]';
    }else{
        plans.textContent = localStorage.getItem('plans');
    }
}

//Set Plans
function setPlans(e){
    if(e.type === "keypress"){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('plans', e.target.innerHTML);
            plans.blur();
        }
    }else{
        localStorage.setItem('plans', e.target.innerHTML);
    }
}

namePerson.addEventListener('keypress', setName);
namePerson.addEventListener('blur', setName);
plans.addEventListener('keypress', setPlans);
plans.addEventListener('blur', setPlans);

getName();
getPlans();
setBackgroundGreetings();
setFacts();
showTime();