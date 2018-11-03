function load() {
fetch('input.txt')
  .then(response => response.text())
  .then(text => parseText(text))

fetch('manual.txt')
	.then(response => response.text())
	.then(text => parseText(text))
}

function parseText(t) {
	var arr = t.split("\n"); //split by lines
	var i = 2;
	console.log(arr.length);
	while(i < arr.length){
		var today = new Date();
		var date = new Date(arr[i]);
		if (date.getMonth() >= today.getMonth() && date.getDate() >= today.getDate()){
			var days = date.getDate()-today.getDate();
			var assignment = {class: arr[i-2], description: arr[i-1], date: arr[i], days: days};
			addAssignment(assignment);
	}
		i = i + 4;
	}
}

function addAssignment(assignment) {
	var table = document.getElementById("data");
	var len = (table.rows.length);
	var row = table.insertRow(len).outerHTML="<tr><td>"+assignment.class+"</td><td>"+assignment.description+"</td><td>"+assignment.date+"</td><td>"+assignment.days+"</td></tr>";
}