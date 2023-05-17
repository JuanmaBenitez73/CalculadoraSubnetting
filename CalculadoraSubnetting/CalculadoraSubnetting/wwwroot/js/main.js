export function myFunction() {
    var hosts = document.getElementByClassName("hosts-required");

    console.log(hosts);
    console.log(nSubnets);
}

export function incorrectRange() {
    alert("Alguno de los números está fuera del rango disponible");
}

export function verifyNumberOfSubnets() {
    var inputSubnets = document.getElementById("n-subnets");
    var numSubnets = inputSubnets.value;
    var two = document.getElementById("two");
    var subnets = document.getElementById("subnets");

    var value = parseInt(numSubnets) + 1;
    subnets.setAttribute("rowspan", value);

    var tonysito = document.getElementsByClassName("tony");

    if (tonysito.length != 0) {
        for (var i = 0; i < tonysito.length; i++) {
            tonysito[i].remove();
            i--;
        }
    }

    if (numSubnets <= 0) {
        numSubnets = 1;
    }
    else {
        for (var i = 0; i < numSubnets; i++) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");

            tr.classList.add("tony");
            td1.setAttribute("colspan", "2");
            td1.classList.add("right-border");
            td2.setAttribute("colspan", "2");

            var input1 = document.createElement("input");
            var input2 = document.createElement("input");

            input1.setAttribute("type", "text");
            input1.setAttribute("placeholder", "Subred");

            input2.setAttribute("type", "number");
            input2.classList.add("hosts-required");

            two.parentNode.insertBefore(tr, two.nextSibling);
            tr.appendChild(td1);
            tr.appendChild(td2);
            td1.appendChild(input1);
            td2.appendChild(input2);
        }
    }

    console.log(nSubnets);
}