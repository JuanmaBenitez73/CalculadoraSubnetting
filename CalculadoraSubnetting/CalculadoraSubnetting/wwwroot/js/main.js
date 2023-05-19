export function verifyNumberOfSubnets() {
    var inputSubnets = document.getElementById("n-subnets");
    var numSubnets = inputSubnets.value;
    var two = document.getElementById("two");
    var subnets = document.getElementById("subnets");

    if (!(numSubnets > 0)) {
        inputSubnets.value = 1;
        numSubnets = 1;
    }

    var value = parseInt(numSubnets) + 1;
    subnets.setAttribute("rowspan", value);

    var tonysito = document.getElementsByClassName("tony");

    if (tonysito.length != 0) {
        for (var i = 0; i < tonysito.length; i++) {
            tonysito[i].remove();
            i--;
        }
    }

    for (var i = 0; i < numSubnets; i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

        tr.classList.add("tony");
        td1.setAttribute("colspan", "2");
        td1.setAttribute("id", "name");
        td1.classList.add("right-border");
        td2.setAttribute("colspan", "2");
        td2.setAttribute("id", "hosts");

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

export function incorrectRange() {
    alert("Alguno de los numeros esta fuera del rango disponible");
}

export function incorrectFormat() {
    alert("La direccion IP esta en un formato incorrecto");
}

export function incorrectNumberOfHosts() {
    alert("Alguna cantidad de Hosts es mas grande de lo posible");
}

export function getSubnetsNumber() {
    var inputSubnets = document.getElementById("n-subnets");
    var numSubnets = parseInt(inputSubnets.value);
    return numSubnets;
}

export function getSubnetsName() {
    var inputName = document.getElementById("name");
    var nameSubnet = inputName.value;
    return nameSubnet;
}

export function getHostsRequired() {
    var inputHosts = document.getElementsByClassName("hosts-required");
    var hostsRequired = [];

    for (var i = 0; i < inputHosts.length; i++) {
        hostsRequired[i] = parseInt(inputHosts[i].value);
    }

    return hostsRequired;
}