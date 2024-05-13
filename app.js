// const temp = document.querySelector(".temp-info");
// const wind = document.querySelector(".wind-info");
// const humidity = document.querySelector(".humidety-info");
// const c_date = document.querySelector(".date");

// const date = new Date();
// date.getHours();
// c_date.innerHTML = date;
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kanpur';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '015040b46fmshadce88e81038a36p1504e6jsneb8d00cdcb50',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };
// const GetData = async () =>{
        

// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
//     temp.innerHTML = result.temp+"   "+ "°C";
//     wind.innerHTML = result.wind_speed+ "Km/H";
//     humidity.innerText = result.humidity+ "%";
   
// }
// GetData();



// app.js
window.onload = () => {
	const form1 = document.querySelector("#addForm");

	let items = document.getElementById("items");
	let submit = document.getElementById("submit");

	let editItem = null;

	form1.addEventListener("submit", addItem);
	items.addEventListener("click", removeItem);
};

function addItem(e) {
	e.preventDefault();

	if (submit.value != "Submit") {
		console.log("Hello");

		editItem.target.parentNode.childNodes[0].data
			= document.getElementById("item").value;

		submit.value = "Submit";
		document.getElementById("item").value = "";

		document.getElementById("lblsuccess").innerHTML
			= "Text edited successfully";

		document.getElementById("lblsuccess")
						.style.display = "block";

		setTimeout(function() {
			document.getElementById("lblsuccess")
							.style.display = "none";
		}, 3000);

		return false;
	}

	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null)
		return false;
	else
		document.getElementById("item").value = "";

	let li = document.createElement("li");
	li.className = "list-group-item";

	let deleteButton = document.createElement("button");

	deleteButton.className =
		"btn-danger btn btn-sm float-right delete";

	deleteButton.appendChild(document.createTextNode("Delete"));

	let editButton = document.createElement("button");

	editButton.className =
			"btn-success btn btn-sm float-right edit";

	editButton.appendChild(document.createTextNode("Edit"));

	li.appendChild(document.createTextNode(newItem));
	li.appendChild(deleteButton);
	li.appendChild(editButton);

	items.appendChild(li);
}

function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you Sure?")) {
			let li = e.target.parentNode;
			items.removeChild(li);
			document.getElementById("lblsuccess").innerHTML
				= "Text deleted successfully";

			document.getElementById("lblsuccess")
						.style.display = "block";

			setTimeout(function() {
				document.getElementById("lblsuccess")
						.style.display = "none";
			}, 3000);
		}
	}
	if (e.target.classList.contains("edit")) {
		document.getElementById("item").value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "EDIT";
		editItem = e;
	}
}

function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
}




