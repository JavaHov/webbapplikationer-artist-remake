
const url = "data/validation.json";

var jPassword = "";
var jEmail = "";


// Hade först 'fetch' inuti 'validateForm()' men det kändes som om json-filen inte hann läsas in.
// När jag la 'fetch' utanför funkar det...
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {

        console.log(data.email);
        jEmail = data.email;
        jPassword = data.password;

    })
    .catch(function(error) {
        console.log(error);
    });



function validateForm() {


    const memberName = document.forms["olasForm"]["name"].value;
    const email = document.forms["olasForm"]["email"].value;
    const password = document.forms["olasForm"]["password"].value;

    console.log(jEmail + "borde komma här...");
    console.log(jPassword + "borde komma här...");

    if(email === jEmail && password === jPassword) {

        localStorage.setItem("name", memberName);
        window.open("welcome_member.html");
        return true;
    }
    else {

        alert("Fel e-post eller lösenord!");
        return false;
    }

}