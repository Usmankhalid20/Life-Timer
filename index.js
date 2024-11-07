let isDOBOpen = false;
// this is use to save the  data in local storage
let dateofbirth ;
// setting icon
const settingCog = document.getElementById('settingsIcon');
// setting content 
const settingContent = document.getElementById('setting-Content');
// intitial and after click and change content 
const intiText = document.getElementById("intitail-Text");
const AfterDOB = document.getElementById("after-Text");
// date of brith button 
const dobButton = document.getElementById("dobbutton");
// input fleid
const dobInput = document.getElementById("dobinput");

// Time-container select all button in it
const Year = document.getElementById("year");
const Month = document.getElementById("month");
const Day = document.getElementById("day");
const Hour = document.getElementById("hour");
const Minute = document.getElementById("minute");
const Second = document.getElementById("second"); 

const makeTwoDigitalNumber = (number) => {
  return number > 9 ? number : `0${number}`;
}

// this is use to hide button  and input field

const toggleDateOfBrithSelector = () => {
    if(isDOBOpen) {
        settingContent.classList.add("hide");
    } else {
        settingContent.classList.remove("hide");
    };
    isDOBOpen = !isDOBOpen;
    console.log("Toggle", isDOBOpen);
};

// function
// const setDOBhandler = () => {
//     //  dateofbirth = dobInput.value;
//     const dateString = dobInput.value;
//     dateofbirth = dateString ? new Date(dateString) : null;  //explain why we use new date
//       //  console.log(dateofbirth);


//       const storedYear = localStorage.getItem("Year");
//       const storedMonth = localStorage.getItem("Month");
//       const storedDate = localStorage.getItem("date");
  
//       if (storedYear && storedMonth && storedDate) {
//           dateofbirth = new Date(Number(storedYear), Number(storedMonth), Number(storedDate));
//       }
      
//       if(dateofbirth) {
//         localStorage.setItem("Year", dateofbirth.getFullYear());
//         localStorage.setItem("Month", dateofbirth.getMonth());
//         localStorage.setItem("Date", dateofbirth.getDate());

//         intiText.classList.add("hide");
//         AfterDOB.classList.remove("hide");
//         // updateAge();  //updateAge  function is call here because every second we need to  update age
//         setInterval(() => updateAge(), 1000); // setInterval is use  to call function every second
//         // console.log(updateAge());
//       } else{
//         AfterDOB.classList.remove("hide");
//         intiText.classList.add("hide");
//       }
// };

// function to calculate the hole age 
const loadDOBFromStorage = () => {
  const storedYear = localStorage.getItem("Year");
  const storedMonth = localStorage.getItem("Month");
  const storedDate  = localStorage.getItem("Date");

  if(storedYear &&  storedMonth && storedDate) {
    dateofbirth = new Date(Number(storedYear), Number(storedMonth), Number(storedDate));
    intiText.classList.add("hide");
    AfterDOB.classList.remove("hide");
    setInterval(updateAge, 1000);
  }

};

const setDOBhandler = () => {
  const dateString = dobInput.value;
  dateofbirth = dateString ? new Date(dateString) : null;

  if(dateofbirth) {
    localStorage.setItem("Year", dateofbirth.getFullYear()); // explain  why we use setItem

    localStorage.setItem("Month", dateofbirth.getMonth());
    localStorage.setItem("Date",  dateofbirth.getDate());
    
    intiText.classList.add("hide");
    AfterDOB.classList.remove("hide");
    setInterval(updateAge, 1000);
  };
};



const updateAge = () => {
  if (!dateofbirth) return;

    const currentDate = new Date();
    console.log({currentDate})

    const dateDiff = currentDate - dateofbirth;
    console.log(dateDiff)

    const Years   =  Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365.25));
    const months  =  Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days    =  Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 30.44 )) / (1000 * 60 * 60 * 24));
    const hours   =  Math.floor((dateDiff % (1000 * 60 * 60  * 24 )) / (1000 * 60  * 60));
    const minutes =  Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds =  Math.floor((dateDiff % (1000 * 60)) / 1000);

    Year.innerHTML = makeTwoDigitalNumber(Years);
    Month.innerHTML = makeTwoDigitalNumber(months);
    Day.innerHTML = makeTwoDigitalNumber(days);
    Hour.innerHTML = makeTwoDigitalNumber(hours);
    Minute.innerHTML = makeTwoDigitalNumber(minutes);
    // Second.innerHTML = makeTwoDigitalNumber(seconds);
    Second.innerHTML = makeTwoDigitalNumber(seconds);
    // console.log({Years,
    //    months,
    //     days, 
    //     hours,
    //      minutes,
    //       seconds});
   
};
// updateAge()
loadDOBFromStorage()
// event function
settingCog.addEventListener("click", toggleDateOfBrithSelector);
dobButton.addEventListener("click", setDOBhandler);
