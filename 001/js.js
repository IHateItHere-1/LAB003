/*<script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.5.2/rxjs.umd.js"></script>*/


let notes = [];

function newNote() {
    const noteText = document.getElementById("text").value;
    /*got to love ===*/
    if (noteText === "") {
        alert("it's empty....");
        return;
    }
    const noteColor = document.getElementById("color").value;    

    notes.push({
        text: noteText,
        color: noteColor
    });

    showNotes();
    clearForm();
}





function ConfEditNote(item, index) {
	const editbox = item.getElementsByTagName("input")[0];
    console.log("sads => " + editbox.value);
    console.log(editbox);
    console.log(item);
	notes[index].text = editbox.value
	showNotes();
}

function CanEditNote(item) {
	var E1 = item.getElementsByTagName("button");
	console.log(E1);
	let arr=[];
	for(let e of E1)
	{
		 if(e.id.includes("edit"))
		 {
		 	console.log(e);
		 	arr.push(e)

		 } 
 	}
 	for(let e of arr)
 	{
 		e.remove();
 	}
 	item.getElementsByTagName("input")[0].remove(); 	
}

function removeNote(index) {
    notes.splice(index, 1);
    showNotes();
}

function clearForm() {
   document.getElementById("text").value = "";
}


