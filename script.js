function myFunction() {
    var x = document.getElementsByClassName("bill");
    var text = "";
    var i, res = 0;
    for (i = 0; i < x.length; i++) {
        text += x[i].value + "<br>";
        res += parseInt(x[i].value);
    }
    console.log(res);
    document.getElementById("demo").innerHTML = `Net amount is ${res}`;

}