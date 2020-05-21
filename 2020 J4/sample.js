window.onload = function () {
    var form = document.getElementById('form');
    form.onsubmit = submit;


}

function submit(e) {

    var t = document.getElementById("text").value;
    var s = document.getElementById("string").value;

    cyclic(t, s);

    return false;
}

function cyclic(t, s) {
    var t = t.toString();
    var s = s.toString();

    for (var i = 0; i < s.length; i++) {
        var A = [];

        for (var j = 0; j < s.length; j++) {
            if (j == s.length - 1) {
                A.push(s[0]);
            } else {
                A.push(s[j + 1]);
            }
        }
        var s = A.join("");
        if (t.includes(s)) {
            document.getElementById("output").innerHTML = "yes";
            return;
        }
    }
    document.getElementById("output").innerHTML = "no";

}
