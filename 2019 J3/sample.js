window.onload = function () {
    var form = document.getElementById('form');
    form.onsubmit = submit;
}

//This function will get called when the form is submitted
function submit(e) {
    var number = document.getElementById("number").value;
    if (!document.getElementById("line1")) {
        lineRender(number);
    } else {
        coldCompress(number);
    }
    return false;
}

//This function will add new text boxes based on the input given by the user
function lineRender(number) {
    document.getElementById("input").innerHTML = "";
    for (var i = 0; i < number; i++) {
        document.getElementById("input").innerHTML += "<label for='text'>Line" + (i + 1) + ": </label>";
        document.getElementById("input").innerHTML += "<input type='text' id='line" + (i + 1) + "'><br>";
    }
}

//Main logic for 2019 J3 problem
function coldCompress(number) {
    document.getElementById("output").innerHTML = "";
    for (var i = 0; i < number; i++) {
        document.getElementById("output").innerHTML += "<br>";
        var string = document.getElementById("line" + (i + 1)).value;
        var count = 1;
        for (var x = 0; x < string.length; x++) {
            if (x == string.length - 1) {
                alert("Reached end");
                document.getElementById("output").innerHTML += count;
                document.getElementById("output").innerHTML += " ";
                document.getElementById("output").innerHTML += string[x];
                document.getElementById("output").innerHTML += " ";
                count = 1;
            } else {
                if (string[x] == string[x + 1]) {
                    alert(string[x] + " equal to " + string[x + 1]);
                    count++;
                } else {
                    alert(string[x] + " not equal to " + string[x + 1]);
                    document.getElementById("output").innerHTML += count;
                    document.getElementById("output").innerHTML += " ";
                    document.getElementById("output").innerHTML += string[x];
                    document.getElementById("output").innerHTML += " ";
                    count = 1;
                }
            }
        }
    }


}
