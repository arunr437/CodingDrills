window.onload = function () {

    var form = document.getElementById('form');
    form.onsubmit = submit;


}

function submit(e) {

    var s = document.getElementById("small").value;
    var m = document.getElementById("medium").value;
    var l = document.getElementById("large").value;
    dogTreats(s, m, l);

    return false;
}

function dogTreats(S, M, L) {
    var result = (S * 1) + (2 * M) + (3 * L);

    if (result >= 10)
        document.getElementById("output").innerHTML = "happy";
    else
        document.getElementById("output").innerHTML = "sad";

}
