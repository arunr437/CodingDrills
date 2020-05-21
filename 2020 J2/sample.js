window.onload = function () {
    var form = document.getElementById('form');
    form.onsubmit = submit;
}

function submit(e) {

    var p = document.getElementById("p").value;
    var n = document.getElementById("n").value;
    var r = document.getElementById("r").value;

    disease(p, n, r);

    return false;
}

function disease(p, n, r) {
    var p = parseInt(p);
    var n = parseInt(n);
    var r = parseInt(r);
    var sum = n;
    var count = 0;
    for (var i = 1; sum <= p; i++) {
        count++;
        sum = sum + (Math.pow(r, i) * n);
    }
    document.getElementById("output").innerHTML = count;

}
