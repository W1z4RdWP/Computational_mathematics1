let x, i, it, a, b, n, h;

function leftAction() {
    i = 0.0;
    n = 1000;
    a = 0;
    b = 1;
    it = Math.exp(b) - Math.exp(a);
    h = (b - a) / n

    for (let index = 0; index < n; index++) {
        x = a + i * h;
        i = i + Math.exp(x) * h;

    }
    let err = Math.abs((i - it) / i);
    document.getElementById("label1").innerText = i;
    document.getElementById("label2").innerText = err;
}


function midRectange() {
    a = 0;
    b = 1;
    n = 1000;
    i = 0.0;

    h = (b - a) / n;

    for (index = 0; index < n; index++) {
        x = a + i * h + (h / 2);
        i += Math.exp(x);
    }
    it = i * h;
    let exactIntegral = Math.exp(b) - Math.exp(a);
    let relativeErr = Math.abs((exactIntegral - it) / exactIntegral);

    document.getElementById("label3").innerText = it;
    document.getElementById("label4").innerText = relativeErr;

}

function trapezoid() {
    a = 0;
    b = 1;
    n = 1000;
    i = 0.0;
    i = (Math.exp(a) + Math.exp(b)) / 2 * h;
    it = Math.exp(b) - Math.exp(a);
    h = (b - a) / n;
    for (let index = 1; index < n; index++) {
        x = a + i * h;
        i += Math.exp(x) * h;
    }
    let error = Math.abs((i - it) / i);
    document.getElementById("label5").innerText = i;
    document.getElementById("label6").innerText = error;
}

function simpson() {
    a = 0;
    b = 1;
    n = 1000;
    i = 0.0;
    h = (b - a) / n;
    for (let index = 0; index < n; index += 2) {
        i = Math.exp(a + index * h);
    }
    for (let index = 1; index < n; index += 2) {
        i += 4 * Math.exp(a + index * h);
    }

    i = i / 3;
    i = i * h * (b - a);

    let exactIntegral = Math.exp(b) - Math.exp(a);
    let relativeErr = Math.abs((exactIntegral - i) / exactIntegral);
    document.getElementById("label7").innerText = i;
    document.getElementById("label8").innerText = relativeErr;

}