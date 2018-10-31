function load() {
fetch('input.txt')
  .then(response => response.text())
   .then(text => parse(text))
}

function parse(t) {
	var arr = t.split("\n");
	var i = 2;
	console.log(arr.length);
	while(i < arr.length){
		add_Row(arr[i-2], arr[i-1], arr[i]);
		i = i + 4;
		console.log(i);
	}
}

function add_Row(cl, ass, date) {
	var table = document.getElementById("data");
	var len = (table.rows.length);
	var row = table.insertRow(len).outerHTML="<tr><td>"+cl+"</td><td>"+ass+"</td><td>"+date+"</td></tr>";
}