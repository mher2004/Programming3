var socket = io.connect('http://localhost:4444');
var statistics = {
    "timestamp": "",
    "Խոտ": 0,
    "Խոտակեր": 0,
    "էքԽոտակեր": 0,
    "Վագր": 0,
    "ԷքՎագր": 0,
    "Մարդ": 0,
    "ԷքՄարդ": 0,
    "Շինարար": 0,
    "Քանդող": 0,
    "Տեսլա": 0,
}
var matrixf = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
// var matrix = [
//     [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
//     [1, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [1, 1, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 8, 0, 0, 0, 0, 0, 2, 0],
//     [1, 0, 0, 0, 1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 3, 6, 0, 0, 0, 0, 8, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
//     [1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 1, 0],
//     [1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [1, 1, 8, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
//     [1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [1, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 1, 0, 0, 0, 0, 0],
//     [1, 5, 4, 3, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0],
//     [4, 0, 0, 3, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
// ];
var matrix = [
];
// var matrix = [
//     [0, 1, 0,],
//     [2, 8, 5,],
//     [5, 5, 5,],
// ];
var aaa = false;
var side = 20;
var grassArr = [];
var xotakerArr = [];
var eqxotakerArr = [];
var vagrArr = [];
var eqvagrArr = [];
var mardArr = [];
var eqmardArr = [];
var shinarar = [];
var qandoxarr = [];
var kaytsakarr = [];
var ab = 20;
var final = 0;
function setup() {
    for (var y = 0; y < ab; y++) {
        matrix.push([])
        for (var x = 0; x < ab; x++) {
            matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 4, 4, 4, 4, 4.5, 4.5, 4.5, 4.5, 4.5, 5, 5, 5, 5.5, 6, 7, 8])
        }
    }
    createCanvas(matrixf[0].length * side, matrixf.length * side);
    background('white');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var abc = new Xotaker(x, y);
                xotakerArr.push(abc);
            }
            else if (matrix[y][x] == 2.5) {
                var abb = new EqXotaker(x, y);
                eqxotakerArr.push(abb);
            }
            else if (matrix[y][x] == 4) {
                var abd = new Vagr(x, y);
                vagrArr.push(abd);
            }
            else if (matrix[y][x] == 4.5) {
                var abdd = new EqVagr(x, y);
                eqvagrArr.push(abdd);
            }
            else if (matrix[y][x] == 8) {
                var ka = new Kaytsak(x, y);
                kaytsakarr.push(ka);
            }
            else if (matrix[y][x] == 5) {
                var mmm = new Mard(x, y);
                mardArr.push(mmm);
            }
            else if (matrix[y][x] == 5.5) {
                var mm = new EqMard(x, y);
                eqmardArr.push(mm);
            }
            else if (matrix[y][x] == 6) {
                var sh = new Shinarar(x, y);
                shinarar.push(sh);
            }
            else if (matrix[y][x] == 7) {
                var qan = new Qandox(x, y);
                qandoxarr.push(qan);
            }
        }
    }
}
function draw() {
    if (final <= 600) {
        final++;
    }
    frameRate(5);
  //  if (frameCount % 90 == 50 || frameCount % 90 == 100) {
       // statistics.timestamp = (new Date()).toString();
        statistics.timestamp = final;
        socket.emit("send data", statistics);
   // }
    for (var i in grassArr) {
        statistics.Խոտ = grassArr.length;
        changeView(statistics);
    }
    for (var i in xotakerArr) {
        statistics.Խոտակեր = xotakerArr.length;
        changeView(statistics);
    }
    for (var i in vagrArr) {
        statistics.Վագր = vagrArr.length;
        changeView(statistics);
    }
    for (var i in eqxotakerArr) {
        statistics.էքԽոտակեր = eqxotakerArr.length;
        changeView(statistics);
    }
    for (var i in eqvagrArr) {
        statistics.ԷքՎագր = eqvagrArr.length;
        changeView(statistics);
    }
    for (var i in mardArr) {
        statistics.Մարդ = mardArr.length;
        changeView(statistics);
    }
    for (var i in eqmardArr) {
        statistics.ԷքՄարդ = eqmardArr.length;
        changeView(statistics);
    }
    for (var i in shinarar) {
        statistics.Շինարար = shinarar.length;
        changeView(statistics);
    }
    for (var i in qandoxarr) {
        statistics.Քանդող = qandoxarr.length;
        changeView(statistics);
    }
    for (var i in kaytsakarr) {
        statistics.Տեսլա = kaytsakarr.length;
        changeView(statistics);
    }
    function changeView(stat) {
        var tt = document.getElementById("time");
        var grr = document.getElementById("Խոտ1");
        var xt = document.getElementById("Խոտակեր1");
        var ext = document.getElementById("ԷքԽոտակեր1");
        var vg = document.getElementById("Վագր1");
        var evg = document.getElementById("ԷքՎագր1");
        var md = document.getElementById("Մարդ1");
        var emd = document.getElementById("ԷքՄարդ1");
        var shh = document.getElementById("Շինարար1");
        var qa = document.getElementById("Քանդող1");
        var tesla = document.getElementById("Տեսլա1");
        tt.innerHTML = stat.timestamp;
        grr.innerHTML = stat.Խոտ;
        xt.innerHTML = stat.Խոտակեր;
        ext.innerHTML = stat.ԷքԽոտակեր;
        vg.innerHTML = stat.Վագր;
        evg.innerHTML = stat.ԷքՎագր;
        md.innerHTML = stat.Մարդ;
        emd.innerHTML = stat.ԷքՄարդ;
        shh.innerHTML = stat.Շինարար;
        qa.innerHTML = stat.Քանդող;
        tesla.innerHTML = stat.Տեսլա;
        if (grassArr.length == 0) {
            stat.Խոտ = 0;
        }
        if (xotakerArr.length == 0) {
            stat.Խոտակեր = 0;
        }
        if (eqxotakerArr.length == 0) {
            stat.ԷքԽոտակեր = 0;
        }
        if (vagrArr.length == 0) {
            stat.Վագր = 0;
        }
        if (eqvagrArr.length == 0) {
            stat.ԷքՎագր = 0;
        }
        if (mardArr.length == 0) {
            stat.Մարդ = 0;
        }
        if (eqmardArr.length == 0) {
            stat.ԷքՄարդ = 0;
        }
        if (shinarar.length == 0) {
            stat.Շինարար = 0;
        }
        if (qandoxarr.length == 0) {
            stat.Քանդող = 0;
        }
        if (kaytsakarr.length == 0) {
            stat.Տեսլա = 0;
        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("gold");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2.5) {
                fill("#ff8c00");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("grey");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4.5) {
                fill("#542323");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#7f345a");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5.5) {
                fill("pink");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("indigo");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 8) {
                fill("#00fff2");
                rect(x * side, y * side, side, side);
            }
        }
    }
    if (final >= 600) {
        var p = document.getElementById("p");
        p.innerText = "The End";
        for (var i = 0; i < matrixf.length; i++) {
            for (var j = 0; j < matrixf[i].length; j++) {
                if (matrixf[i][j] == 0) {
                    fill("black");
                    rect(j * side, i * side, side, side);
                } else if (matrixf[i][j] == 1) {
                    fill("white");
                    rect(j * side, i * side, side, side);
                }
            }
        }
        for (var i in grassArr) {
            grassArr.splice(i, 1);
            break;
        }
        for (var i in xotakerArr) {
            xotakerArr.splice(i, 1);
            break;
        }
        for (var i in eqxotakerArr) {
            eqxotakerArr.splice(i, 1);
            break;
        }
        for (var i in vagrArr) {
            vagrArr.splice(i, 1);
            break;
        }
        for (var i in eqvagrArr) {
            eqvagrArr.splice(i, 1);
            break;
        }
        for (var i in mardArr) {
            mardArr.splice(i, 1);
            break;
        }
        for (var i in eqmardArr) {
            eqmardArr.splice(i, 1);
            break;
        }
        for (var i in shinarar) {
            shinarar.splice(i, 1);
            break;
        }
        for (var i in qandoxarr) {
            qandoxarr.splice(i, 1);
            break;
        }
        for (var i in kaytsakarr) {
            kaytsakarr.splice(i, 1);
            break;
        }
    }
    else {
        var p = document.getElementById("p");
        if (frameCount % 90 >= 0 && frameCount % 90 < 25) {
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("yellowgreen");
                        rect(j * side, i * side, side, side);
                    }
                }
            }
            p.innerText = "Գարուն";
        }
        else if (frameCount % 90 >= 25 && frameCount % 90 < 50) {
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill('green');
                        rect(j * side, i * side, side, side);
                    }
                }
            }
            p.innerText = "Ամառ";
        }
        else if (frameCount % 90 >= 50 && frameCount % 90 < 75) {
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("olive");
                        rect(j * side, i * side, side, side);
                    }
                }
            }
            p.innerText = "Աշուն";
        }
        else if (frameCount % 90 >= 75 && frameCount % 90 <= 100) {
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("white");
                        rect(j * side, i * side, side, side);
                    }
                }
            }
            p.innerText = "Ձմեռ";
        }
        if (p.innerText == "Ձմեռ") {
            for (var i in xotakerArr) {
                xotakerArr[i].utel();
            }
            for (var i in eqxotakerArr) {
                eqxotakerArr[i].utel();
            }
            for (var i in vagrArr) {
                vagrArr[i].utel();
                vagrArr[i].sharjvel();
                vagrArr[i].mahanal();
            }
            for (var i in eqvagrArr) {
                eqvagrArr[i].utel();
                eqvagrArr[i].sharjvel();
                eqvagrArr[i].mahanal();
            }
            for (var i in mardArr) {
                mardArr[i].utel();
                mardArr[i].sharjvel();
                mardArr[i].mahanal();
            }
            for (var i in eqmardArr) {
                eqmardArr[i].utel();
                eqmardArr[i].sharjvel();
                eqmardArr[i].mahanal();
            }
            for (var i in shinarar) {
                shinarar[i].sharel();
                shinarar[i].mahanal();
            }
            for (var i in qandoxarr) {
                qandoxarr[i].qandel();
                qandoxarr[i].mahanal();
            }
            for (var i in kaytsakarr) {
                kaytsakarr[i].kaytsaknaharel();
                kaytsakarr[i].mahanal();
            }
        }
        else {
            for (var i in grassArr) {
                grassArr[i].bazmanal();
            }
            for (var i in xotakerArr) {
                xotakerArr[i].utel();
            }
            for (var i in eqxotakerArr) {
                eqxotakerArr[i].utel();
                eqxotakerArr[i].bazmanal();
                eqxotakerArr[i].sharjvel();
                eqxotakerArr[i].mahanal();
            }
            for (var i in vagrArr) {
                vagrArr[i].utel();
                vagrArr[i].sharjvel();
                vagrArr[i].mahanal();
            }
            for (var i in eqvagrArr) {
                eqvagrArr[i].utel();
                eqvagrArr[i].sharjvel();
                eqvagrArr[i].bazmanal();
                eqvagrArr[i].mahanal();
            }
            for (var i in mardArr) {
                mardArr[i].utel();
                mardArr[i].sharjvel();
                mardArr[i].mahanal();
            }
            for (var i in eqmardArr) {
                eqmardArr[i].utel();
                eqmardArr[i].sharjvel();
                eqmardArr[i].bazmanal();
                eqmardArr[i].mahanal();
            }
            for (var i in shinarar) {
                shinarar[i].sharel();
                shinarar[i].mahanal();
            }
            for (var i in qandoxarr) {
                qandoxarr[i].qandel();
                qandoxarr[i].mahanal();
            }
            for (var i in kaytsakarr) {
                kaytsakarr[i].kaytsaknaharel();
                kaytsakarr[i].mahanal();
            }
        }
    }
}