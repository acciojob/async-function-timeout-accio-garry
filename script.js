document.getElementById("btn").addEventListener("click", ()=>{

let userText = document.getElementById("text").value;
let userDelay = document.getElementById("delay").value;
	 
	setTimeout(()=>{
		document.getElementById("output").innerHTML= userText;
	},userDelay)
});


