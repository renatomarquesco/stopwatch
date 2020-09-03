var hour = 0;
var minute = 0;
var second = 0;
var mili = 0;
var saveTime = document.getElementById("save-time");
var divToAdd = document.getElementById("div-to-add");
var divSaveTime = document.getElementById("row-save-time");


function stopwatch() {
    mili++;
    document.getElementById("milisec").innerHTML = mili;
    if (mili < 10) {
        document.getElementById("milisec").innerHTML = "0" + mili;
    }

    if (mili === 100) {
        second++
        mili = 0;
        document.getElementById("milisec").innerHTML = "00"
        if (second < 10) {
            document.getElementById("second").innerHTML = "0" + second;
        } else {
            document.getElementById("second").innerHTML = second;
        }
    }

    if (second === 60) {
        minute++
        second = 0;
        document.getElementById("second").innerHTML = "00"
        if (minute < 10) {
            document.getElementById("minute").innerHTML = "0" + minute
        } else {
            document.getElementById("minute").innerHTML = minute;
        }
    }

    if (minute === 60) {
        hour++;
        minute = 0;
        document.getElementById("minute").innerHTML = "00"

        if (hour < 10) {
            document.getElementById("hour").innerHTML = "0" + hour
        } else {
            document.getElementById("hour").innerHTML = "0" + hour
        }
    }

}


var interval = undefined;


document.getElementById("stop").onclick = function () {
    clearInterval(interval);
    document.getElementById("resume").disabled = false;
    saveTime.style.display = "inline";

}

document.getElementById("resume").onclick = function () {
    if (saveTime) {
        saveTime.style.display = "none";
    }
    interval = setInterval("stopwatch()", 10);
    this.disabled = true;
    this.innerHTML = "Continue"
    document.getElementById("restart").style.display = "inline";
}

document.getElementById("restart").onclick = function () {
    if (saveTime) {
        saveTime.style.display = "none";
    }
    document.getElementById("resume").disabled = true;
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
    document.getElementById("milisec").inner = "00";
    hour = 0;
    minute = 0;
    second = 0;
    mili = 0;
    interval = setInterval("stopwatch()", 10);
}


var save = function () {
    var input = document.createElement("input");
    input.setAttribute("placeholder", "Add a name to your time")
    var buttonAdd = document.createElement("img");
    buttonAdd.src = "plus-6-24.png"
    buttonAdd.setAttribute("class", " add-time")
    divSaveTime.append(input);
    divSaveTime.append(buttonAdd);

    buttonAdd.onclick = function add() {
        buttonAdd.style.display = "none";
        input.style.display = "none"
        var newrow = document.createElement("div");
        newrow.setAttribute("class", "row new-row justify-content-center");
        divToAdd.append(newrow);
        var divText = document.createElement("div");
        divText.setAttribute("class", "col-5 col-lg-2 div-text");
        divText.innerHTML = document.getElementById("hour").innerHTML + ":" + document.getElementById("minute").innerHTML + ":" + document.getElementById("second").innerHTML + ":" + document.getElementById("milisec").innerHTML;
        newrow.append(divText)
        var divValue = document.createElement("div");
        divValue.setAttribute("class", "col-5 col-lg-6 div-value");
        divValue.innerHTML = input.value;
        newrow.append(divValue);
        var divRemove = document.createElement("div");
        divRemove.setAttribute("class", "col-2 div-remove");
        var removeBtn = document.createElement("img");
        removeBtn.setAttribute("class", "remove-btn img-fluid")
        removeBtn.src = "x-mark-24.png"
        divRemove.append(removeBtn);
        newrow.append(divRemove);


        removeBtn.onclick = function () {
            this.parentElement.parentElement.remove();
        }

    }
}

saveTime.onclick = function () {
    save();
    this.style.display = "none";
}