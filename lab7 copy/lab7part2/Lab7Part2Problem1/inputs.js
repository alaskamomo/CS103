alert("Would you like to learn some fun facts about CHINCHILLA? If yes, put 'yes'. If no, put 'no'.");
let input2 = String(prompt("If yes, put 'Y'. Otherwise, put 'N'."));

if (input2 == "Y"){
	document.getElementById("box1").style.display = "block"	
}else{
	document.getElementById("funfacts").remove();
}


/* 
var n = 3;
for (let x = 1; x < n; x++){
	let input = String(prompt("Are you? If yes, put 'Y'. Otherwise, put 'N'."));
	
	if (input != null){
		} if (input == "y" || input == "n"){
			alert("oh no! you've put in a lowercase answer!");
			input = String(prompt("Are you? If yes, put 'Y'. Otherwise, put 'N'."));
			}else{
				if (input == "Y"){
					alert("Would you like to learn some fun facts about CHINCHILLA? If yes, put 'yes'. If no, put 'no'.");
					let input2 = String(prompt("If yes, put 'Y'. Otherwise, put 'N'."));
						if (input2 == "N"){
							alert("You answered" + input2+ ". It seems you know all the funfacts about them! Please let us know too!!!");
							document.getElementById("#environment").style.display = "block"
							document.getElementById("#food").style.display = "block"
						} else {
							alert("You answered" + input2+ ". It seems you know all the funfacts about them! Please let us know too!!!");
							document.getElementById("box1").style.display = "block"
						}
				}else{
					document.getElementById("#environment").style.display = "block"
					document.getElementById("#food").style.display = "block"
				}
				break;
			}	
		} else {
	alert("You cannot access our Website!");
	document.getElementById("box1").innerHTML = "<h1 style = 'text-align:center;color:red;'>You can't see the content of this page :( </h1>."
	}
}

 */
