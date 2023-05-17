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

//export function viewResult() {
//    var submit = document.getElementById("submit");
//    var numSubnets = document.getElementById("n-subnets").value;

//    var div = document.getElementById("div-table2");
//    var table2 = document.createElement("table");
//    var tbody = document.createElement("tbody");

//    table2.setAttribute("table2");

//    var availableHosts = DotNet.invokeMethodSync();

//    for (var i = 0; i < numSubnets + 1; i++) {
//        var tr = document.createElement("tr");
//        if (i == 0) {
//            for (var j = 0; j < 7; j++) {
//                var td = document.createElement("td");

//                switch (j) {
//                    case 0:
//                        td.innerHTML = "Nombre Subred";
//                        break;
//                    case 1:
//                        td.innerHTML = "Hosts necesarios";
//                        break;
//                    case 2:
//                        td.innerHTML = "Hosts disponibles";
//                        break;
//                    case 3:
//                        td.innerHTML = "Dirección IP";
//                        break;
//                    case 4:
//                        td.innerHTML = "Máscara";
//                        break;
//                    case 5:
//                        td.innerHTML = "Rango de IPs asignables";
//                        break;
//                    case 6:
//                        td.innerHTML = "Broadcast";
//                        break;
//                }
//            }
//        }
//        else {
//            var td = document.createElement("td");

//            for (var j = 0; j < 7; j++) {
//                var td = document.createElement("td");

//                switch (j) {
//                    case 0:
//                        td.innerHTML = document.getElementById("name").value;
//                        break;
//                    case 1:
//                        td.innerHTML = document.getElementById("hosts").value;
//                        break;
//                    case 2:
//                        td.innerHTML = "Hosts disponibles";
//                        break;
//                    case 3:
//                        td.innerHTML = "Dirección IP";
//                        break;
//                    case 4:
//                        td.innerHTML = "Máscara";
//                        break;
//                    case 5:
//                        td.innerHTML = "Rango de IPs asignables";
//                        break;
//                    case 6:
//                        td.innerHTML = "Broadcast";
//                        break;
//                }
//            }
//        }
//    }

//    /*submit.addEventListener('click', () => {

//    });*/
//}

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
    return document.getElementById("n-subnets").value;
}

export function getSubnetsName() {
    return document.getElementById("name").value;
}

export function getHostsRequired() {
    return document.getElementById("hosts").value;
}