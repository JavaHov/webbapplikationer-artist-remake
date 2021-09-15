
const element = document.querySelector("#stored_person");

window.addEventListener('load', function (event) {

        console.log("Page loaded...");
        console.log(localStorage.getItem("name"));
        element.textContent = "Välkommen " + localStorage.getItem("name");
        event.preventDefault(); // Vet inte riktigt om den här kodraden har någon funktion...
    }
);