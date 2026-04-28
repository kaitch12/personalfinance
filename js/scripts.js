 // < !--Javascript - Get Current Year for the Footer-- >
    window.onload = function () {
        var d = new Date();
        document.getElementById("copyright").innerHTML = d.getFullYear();
    }