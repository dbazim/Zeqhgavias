let file = [''];

function readTextFile(file) {
    var rowFile = new
        XMLHttpRequest();

    rowFile.open("GET", file, false);
    rowFile.send();

    return rowFile.responseText;
}

function chapterclick(chapt) {
    console.log(chapt);
    if (chapt == 1) {
        console.log("chapter1")

        let textchapter = document.querySelector(".text");
        textchapter.innerHTML = pepitr (readTextFile("text/1.txt"));

        let sectiontext = document.querySelector(".textheader");
        sectiontext.textContent = "Сердце, Глаза и Крылья Глава I";
        // <p class= "textchapter"> <br>  </p>
	
    }
	 if (chapt == 2) {
        console.log("chapter1")

        let textchapter = document.querySelector(".text");
        textchapter.innerHTML = pepitr (readTextFile("text/2.txt"));

        let sectiontext = document.querySelector(".textheader");
        sectiontext.textContent = " Закхшаауа Глава II";
        // <p class= "textchapter"> <br>  </p>
    }
	if (chapt == 3) {
        console.log("chapter1")

        let textchapter = document.querySelector(".text");
        textchapter.innerHTML = pepitr (readTextFile("text/3.txt"));

        let sectiontext = document.querySelector(".textheader");
        sectiontext.textContent = " Ситильфио Глава III";
        // <p class= "textchapter"> <br>  </p>
    }
	if (chapt == 4) {
        console.log("chapter1")

        let textchapter = document.querySelector(".text");
        textchapter.innerHTML = pepitr (readTextFile("text/4.txt"));

        let sectiontext = document.querySelector(".textheader");
        sectiontext.textContent = "Ксанаат Глава IV";
        // <p class= "textchapter"> <br>  </p>
	
    }
	if (chapt == 5) {
        console.log("chapter5")

        let textchapter = document.querySelector(".text");
        textchapter.innerHTML = pepitr (readTextFile("text/5.txt"));

        let sectiontext = document.querySelector(".textheader");
        sectiontext.textContent = "Иллахарит Глава V";
        // <p class= "textchapter"> <br>  </p>
	
    }
}
function pepitr (txt) {
	var result = "";
	var arr = txt.split('\n');
	for (let i = 0; i < arr.length; i++) { 
		console.log( arr[i] );
		result = result + "<p class= \"par\">" + arr[i] + "</p>";
	}; 
	return result;
}
