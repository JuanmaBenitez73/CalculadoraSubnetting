export function myFunction() {
    var hosts = document.getElementByClassName("hosts-required");
    var nSubnets = document.getElementById("n-subnets").getAttribute("@bind");

    console.log(hosts);
    console.log(nSubnets);
}

export function incorrectRange() {
    alert("Alguno de los n�meros est� fuera del rango disponible");
}