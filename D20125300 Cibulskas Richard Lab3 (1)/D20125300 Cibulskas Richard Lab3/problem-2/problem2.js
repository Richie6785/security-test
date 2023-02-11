let clockr;

//Retrieve the button and then create the observe so it can check if the buttons has been pressed.
let startbutton = document.getElementById('start');
Rx.Observable.fromEvent(startbutton, 'click').subscribe((value) => start());

//Below just grabs the users seconds,minute and hours input 
let element_seconds = document.getElementById("S2");
let element_minute = document.getElementById("M2");
let element_hour = document.getElementById("H2");

//We grab the placehodlers asigned from the html and then spit it into the if statements in function start, which calculates the minutes, seconds and hours
var secz = document.getElementById('S1');
var minz = document.getElementById('M1');
var hourz = document.getElementById('H1');

var Waitclock = (100, 1000); //we assigned the timer a 100, 1000 because it associates to firstdelayvalue and the intervalbetween values.

function start() {	

	if(clockr==null | clockr==false){ clockr=true;
	let calcHour =  document.getElementById('H1').value; //Assign name and Grabs the value of ID H1
	let Minute =  document.getElementById('M1').value; //Assign name and  Grabs the value of ID M1
    let Seconds =  document.getElementById('S1').value; //Assign name and Grabs the value of ID S1
    Seconds = parseInt(Seconds); //Covert argument and return as int
    Minute = parseInt(Minute); //Covert argument and return as int
	if(secz.value ==""){  //grabs the placeholders value if equality is "" and then assigns 0 to Seconds
		Seconds=0;
    }
    if(minz.value ==""){ //grabs the placeholders value if equality is "" and then assigns 0 to Minute
		Minute=0;
    }
    if(hourz.value ==""){ //grabs the placeholders value if equality is "" and then assigns 0 to Hour
		Hour=0;
    }

	calc1 = Minute+(60*calcHour); //calculates minutes + 60 multiplied by calchours which is then
    Minute=(calc1); //assigning the into Minute
	calc2 = Seconds+(Minute*60); //calculates Secondss + Minute by 60 which is then
    Seconds=(calc2); //assigning the into seconds
   
     let start= Seconds-1; //This is done  before the display it will do an interval
    Rx.Observable.interval(Waitclock).map(i => start - i).take(start + 1).subscribe(i => display(i));  // rx is an observable that you can subscribe or unsubsribe whenenever you have a list of operators. fromevent Grabs the first argument and then we we are assigning the button for this method
  	}
}

function display(clock) {
  caclhr = Math.floor(clock / 3600); //convert to hours
  let hours = (caclhr); //assigning the into hours
  
  clockcalc = clock - hours * 3600; //convert the time
  var clock = clockcalc; //assigning the into clock
  
  calcmin = Math.floor(clock / 60); //converting to minutes
  let minutes = (calcmin); //assigning the into hours
  
  calcsec = clock - minutes * 60; //Converting to seconds
  let seconds = (calcsec) ; //assigning the into seconds
	element_seconds.innerHTML = seconds+"Seconds";
 	element_minute.innerHTML = minutes+"Minutes";
 	element_hour.innerHTML = hours+"Hours";
  if(
	hours==0,
	minutes==0,
	seconds==0){
	clockr=false; //if statement for when the 3 variables are equality to zero clock then returns false
  }
}

