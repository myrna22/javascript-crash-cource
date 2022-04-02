function myFunction() {
    var x = document.getElementById("myDate").value;
    document.getElementById("btn").innerHTML = x;
     }

const element = document.getElementById("myBtn");
    element.addEventListener("click", myFunction);

    function myFunction() {
    document.getElementById("demo").innerHTML = "It's Doen";
    }

const languages = ["Arabic", "English", "Duits", "France"];

    let text = "";
    for (let i = 0; i < languages.length; i++) {
    text += languages[i] + "<br>";
    document.getElementById("taal").innerHTML = text;
    }



