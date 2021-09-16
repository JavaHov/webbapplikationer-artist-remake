'use strict';

const selectMenu = document.querySelector("#records");
const termsCheckbox = document.querySelector("#terms");
const submitButton = document.querySelector("#order");
const outputLabel = document.querySelector("#presentation");
const ul = document.querySelector("#recordlist");



function orderRecord(event) {

    if(termsCheckbox.checked) {

        outputLabel.textContent = "";
        let chosenRecord = selectMenu.value;
        printJSON(chosenRecord);
        outputLabel.innerHTML = "<h3> Grattis, du har beställt:</h3>";

    } else {

        ul.innerHTML = "";
        outputLabel.textContent = "";
        outputLabel.innerHTML = "<h4> Du måste godkänna köpvillkoren!</h4>";
    }


    event.preventDefault();
}

function printJSON(chosenRecord) {

    ul.innerHTML = "";

    const url = 'data/' + chosenRecord + '.json';

    fetch(url)
        .then((resp) => resp.json())
        .then(function(myJson) {
            console.log(myJson);

            let li = document.createElement('li');
            li.innerHTML = myJson.name + "<br>" + myJson.numsongs + "<br>" + myJson.date;
            ul.appendChild(li);
        })

        .catch(function(error) {
            console.log(error);
        });

}

function changeImage() {

    let selected = document.getElementById("records").value;
    console.log(selected);
    document.getElementById("record_images").src = "img/" + selected + ".jpg";
}

submitButton.addEventListener("click", orderRecord, false);