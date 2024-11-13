document.addEventListener("DOMContentLoaded", function () {
    updateTable();
});

function updateTable() {
    let valueElement = document.getElementById("value").value;

    let value;

    if (valueElement != "") {
        value = parseInt(valueElement);
    } else {
        value = 0;
    }

    let elements = document.querySelectorAll(".number");

    for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = value;
        if (i != 0) {
            elements[i].parentElement.querySelector(".result").innerHTML =
                value * i;
        }
    }
}
