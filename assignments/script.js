function load() {
document.getElementById("date").innerHTML = new Date();

fetch('input.txt')
  .then(response => response.text())
  .then(text => parseText(text))

fetch('manual.txt')
	.then(response => response.text())
	.then(text => parseText(text))
}

var assignments = [];

function parseText(t) {
	var arr = t.split("\n"); //split by lines
	var i = 2;
	console.log(arr.length);
  var count = 0;
	while(i < arr.length){
		var today = new Date();
		var date = new Date(arr[i]);
    var days = (date.getDate()-today.getDate())+(30*(date.getMonth()-today.getMonth()))+(365*(date.getYear()-today.getYear()));
    console.log(days);
		if (days >= 0){
			var assignment = {class: arr[i-2], description: arr[i-1], date: arr[i], days: days};
      assignments[count] = assignment;
	}
		i = i + 4;
    count = count + 1;
	}
  assignments.sort(function(a, b){return a.days-b.days});
  assignments.forEach(addAssignment);
}

function addAssignment(assignment) {
	var table = document.getElementById("data");
	var len = (table.rows.length);
	var row = table.insertRow(len).outerHTML="<tr><td>"+assignment.class+"</td><td>"+assignment.description+"</td><td>"+assignment.date+"</td><td>"+assignment.days+"</td></tr>";
}

function changeLogButton() {
var logText = document.getElementById("log");
var btnText = document.getElementById("change");
if (btnText.innerHTML === "Show Change Log") {
  btnText.innerHTML = "Hide Change Log";
  logText.style.display = "inline";
  var string = "";
  string += "<p><ul>"
  string += "<li>v0.1</li><ul><li>Bringing my idea to life in the least efficient way possible</li></ul>";
  string += "<li>v0.2</li><ul><li>Assignments wont show after they are due</li><li>Added Days until Due</li></ul>";
  string += "<li>v0.3</li><ul><li>incorporated years in rework, and this changelog button</li></ul>"
  string += "</ul></p>";
  logText.innerHTML = string;
} else {
  btnText.innerHTML = "Show Change Log";
  logText.style.display = "none";
  logText.innerHTML = "";
}
}
