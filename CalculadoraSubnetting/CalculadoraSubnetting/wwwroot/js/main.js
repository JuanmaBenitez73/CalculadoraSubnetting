export function myFunction() {
    var hosts = document.getElementByClassName("hosts-required");

    console.log(hosts);
    console.log(nSubnets);
}

export function incorrectRange() {
    alert("Alguno de los números está fuera del rango disponible");
}

export function verifyNumberOfSubnets() {
    var inputSubnets = document.getElementById("n-subnets").value;
    var numSubnets = 0;
    var two = document.getElementById("two");

    for (int i = 0; i < nSubnets; i++)
    {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

        td1.setAttribute("colspan", "2");
        td1.classList.add("right-border");

        td2.setAttribute("colspan", "2");

        var input1 = document.createElement("input");
        var input2 = document.createElement("input");

        input1.setAttribute("type", "text");
        input1.setAttribute("placeholder", "Subred");

        input2.setAttribute("type", "number");
        input2.classList.add("hosts-required");

            //<td colspan="2" class="right-border"><input type="text" placeholder="Subred" /></td>
            //<td colspan="2"><input type="number" class="hosts-required" /></td>

        two.append(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        td1.appendChild(input1);
        td2.appendChild(input2);
    }

    console.log(nSubnets);
}