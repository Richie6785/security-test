function get_notes() {
    let notes = new Array;
    let notes_str = localStorage.getItem('notestuff');  //This function is what takes the input and display its with the add feature so you can edit it etc with change of color or delete etc ..
    if (notes_str !== null) {
        notes = JSON.parse(notes_str); 
    }
    return notes;
}
function add() {  //This is the function that allows you do actually add the note to display to the html page
    let task = document.getElementById('task').value;
    let notes = get_notes();
    let newTask = {	
	name:task, 
	id: "item" + notes.length,
	priority: {
		colorButton:"", 
		color:""
		}
		};
    notes.push(newTask);
    localStorage.setItem('notestuff', JSON.stringify(notes));

    show();

    return false;
}
function remove(value) { //This function allows you to delete what you added 
    let id = value; //To use the rxjs streams I required to change this so it takes in a value because the code before doesnt allow the getAttribute to work with rxjs streams
    let notes = get_notes();
    notes.splice(id, 1);
    localStorage.setItem('notestuff', JSON.stringify(notes));
    show();

    return false;
}
function Purple(value) {
  let id = value;//To use the rxjs streams I required to change this so it takes in a value because the code before doesnt allow the getAttribute to work with rxjs streams
  let notes = get_notes();
  
  for (let i=0;i<notes.length;i++) {
    let notestuff = notes[i];
    console.log(notestuff);
  	if (notestuff.id==id) {
      notestuff.priority.colorButton = "purple";
      notestuff.priority.color = "purple";
    }
  }
  localStorage.setItem('notestuff', JSON.stringify(notes));
  show();
  
  return false;
}
function Edit(value) { //The edit function gets value and then uses prompt to change the text to its edited text in this case I have it as noteedited. Note: The user can change it to whatever they want in the html page
  let id = value; //To use the rxjs streams I required to change this so it takes in a value because the code before doesnt allow the getAttribute to work with rxjs streams
  let notes = get_notes();
  let editedtext=prompt("Note:","NoteEdited"); 
  for (let i=0;i<notes.length;i++) {
    let notestuff = notes[i];
    console.log(notestuff);
  	if (notestuff.id==id) {
      notestuff.name = editedtext;
    }
  }
  localStorage.setItem('notestuff', JSON.stringify(notes));

  show();
  return false;
}
  
  function Blue(value) {
  let id = value;//To use the rxjs streams I required to change this so it takes in a value because the code before doesnt allow the getAttribute to work with rxjs streams
  let notes = get_notes();
  
  for (let i=0;i<notes.length;i++) {
    let notestuff = notes[i];
    console.log(notestuff);
  	if (notestuff.id==id) {
      notestuff.priority.colorButton = "blue";
      notestuff.priority.color = "blue";
    }
  }
  localStorage.setItem('notestuff', JSON.stringify(notes));
  show();
  return false;
}
  function White(value) {
  let id = value;//To use the rxjs streams I required to change this so it takes in a value because the code before doesnt allow the getAttribute to work with rxjs streams
  let notes = get_notes();
  for (let i=0;i<notes.length;i++) {
    let notestuff = notes[i];
    console.log(notestuff);
  	if (notestuff.id==id) {
      notestuff.priority.colorButton = "white";
      notestuff.priority.color = "white";
    }
  }
  localStorage.setItem('notestuff', JSON.stringify(notes));
  show();
  return false;
}
function show() { //This is what allows you to display the actual text you put into the text box
  let notes = get_notes();
  let html = '<p>';
  for (let i = 0; i < notes.length; i++) {
  let notestuff = notes[i];
   html += "<p id='item" + i + "' colorButton='" + notestuff.priority.colorButton + "'>" + notestuff["name"] +
	'<p>' + "<button class='remove'>Delete</button>" +
	" " + "<button class='Edit' value='item" + i + "'>Edit</button>" +
	" " + "<button class='Purple' value='item" + i + "'>Purple</button>"+ 
	" " + "<button class='Blue' value='item" + i + "'>Blue</button>"+ 
	" " + "<button class='White' value='item" + i + "'>White</button>" 
	;};
    document.getElementById('item').innerHTML = html; //below is asigning the buttons to its functions 
	let button1 = document.getElementsByClassName('remove');
		    for (let i=0; i < button1.length; i++) {
			Rx.Observable.fromEvent(button1[i], 'click').subscribe((value) => remove(button1[i].value)); //Create the observe so it can check the buttons are pressed that has been assigned
			};  // rx is an observable that you can subscribe or unsubsribe whenenever you have a list of operators.fromevent Grabs the first argument and then we we are assigning the button for this method
	let button2 = document.getElementsByClassName('Edit');
		    for (let i=0; i < button2.length; i++) {
			Rx.Observable.fromEvent(button2[i], 'click').subscribe((value) => Edit(button2[i].value)); //Create the observe so it can check the buttons are pressed that has been assigned
			}; // rx is an observable that you can subscribe or unsubsribe whenenever you have a list of operators. fromevent Grabs the first argument and then we we are assigning the button for this method
    let button3 = document.getElementsByClassName('Purple');
		    for (let i=0; i < button3.length; i++) {
			Rx.Observable.fromEvent(button3[i], 'click').subscribe((value) => Purple(button3[i].value)); //Create the observe so it can check the buttons are pressed that has been assigned
			}; // rx is an observable that you can subscribe or unsubsribe whenenever you have a list of operators. fromevent Grabs the first argument and then we we are assigning the button for this method
    let button4 = document.getElementsByClassName('Blue');
		    for (let i=0; i < button4.length; i++) {
			Rx.Observable.fromEvent(button4[i], 'click').subscribe((value) => Blue(button4[i].value)); //Create the observe so it can check the buttons are pressed that has been assigned
			}; // rx is an observable that you can subscribe or unsubsribe whenenever you have a list of operators. fromevent Grabs the first argument and then we we are assigning the button for this method
	let button5 = document.getElementsByClassName('White');
		    for (let i=0; i < button5.length; i++) {
			Rx.Observable.fromEvent(button5[i], 'click').subscribe((value) => White(button5[i].value)); //Create the observe so it can check the buttons are pressed that has been assigned
			}; // rx is an observable that you can subscribe or unsubsribe whenenever you have a list of operators. fromevent Grabs the first argument and then we we are assigning the button for this method
}
//add button functions working with rxjs streams
let addbutton = document.getElementById('add'); //Retrieve the button and then create the observe so it can check if the buttons has been pressed.
Rx.Observable.fromEvent(addbutton, 'click').subscribe((value) => add());
show();

