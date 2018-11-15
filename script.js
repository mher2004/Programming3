
// var matrix = [
//     [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
//     [1, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0],
//     [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 3, 6, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
//     [1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
//     [1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [1, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [1, 5, 4, 3, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0],
//     [4, 0, 0, 3, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
// ];



var matrix = [

];



// var matrix = [
//     [1, 1, 0, ],
//     [1, 2, 0, ],
//     [1, 1, 0, ],
//     [1, 1, 0, ],
//     [1, 0, 4, ],
//     [2, 1, 0, ],
//     [1, 2, 0, ],
//     [1, 2, 0, ],
//     [1, 1, 0, ],
//     [0, 0, 0, ],
//     [0,0, 0, ],
// ];



var aaa = false;
var side = 20;
var grassArr = [];
var xotakerArr = [];
var vagrArr = [];
var mardArr = [];
var shinarar = [];
var qandoxarr = [];
var ab = 30;
function setup() {

    for (var y = 0; y < ab; y++) {
        matrix.push([])
        for (var x = 0; x < ab; x++) {
            matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 5, 6, 7])
        }
    }



    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

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
            else if (matrix[y][x] == 4) {
                var abd = new Vagr(x, y);
                vagrArr.push(abd);
            }
            else if (matrix[y][x] == 5) {
                var mmm = new Mard(x, y);
                mardArr.push(mmm);
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

    frameRate(100);
    // for (var y = 0; y < matrix.length; y++) {
    //     for (var x = 0; x < matrix[y].length; x++) {

    //         if (matrix[y][x] == 1) {
    //             fill("darkgreen");
    //            rect(x * side, y * side, side, side);
    //         }
    //         else if (matrix[y][x] == 0) {
    //             fill("#acacac");
    //             rect(x * side, y * side, side, side);
    //         }
    //         else if (matrix[y][x] == 2) {
    //             fill("gold");
    //             rect(x * side, y * side, side, side);
    //         }
    //         else if (matrix[y][x] == 3) {
    //             fill("grey");
    //             rect(x * side, y * side, side, side);
    //         }
    //         else if (matrix[y][x] == 4) {
    //             fill("red");
    //             rect(x * side, y * side, side, side);
    //         }
    //         else if (matrix[y][x] == 5) {
    //             fill("lightpink");
    //             rect(x * side, y * side, side, side);
    //         }
    //         else if (matrix[y][x] == 6) {
    //             fill("indigo");
    //             rect(x * side, y * side, side, side);
    //         }
    //         else if (matrix[y][x] == 7) {
    //             fill("black");
    //             rect(x * side, y * side, side, side);
    //         }
    //     }
    // }

    function exanak() {
        var p = document.getElementById("p");
        if (frameCount % 90 >= 0 && frameCount % 90 < 25) {
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("yellowgreen");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill("orange");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 3) {
                        fill('#6600FF');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 4) {
                        fill('red');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 5) {
                        fill('pink');
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 6) {
                        fill('#00FFDE');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#E0E0E0');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 7) {
                        fill('black');
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
                    } else if (matrix[i][j] == 2) {
                        fill('lightsalmon');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 3) {
                        fill('#6600FF');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 4) {
                        fill('crimson');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 5) {
                        fill('coral');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 6) {
                        fill('#00FFDE');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#E0E0E0');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 7) {
                        fill('black');
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
                    } else if (matrix[i][j] == 2) {
                        fill('#D29B2C');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 3) {
                        fill('#6600FF');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 4) {
                        fill('darkred');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 5) {
                        fill('salmon');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 6) {
                        fill('#00FFDE');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#E0E0E0');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 7) {
                        fill('black');
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
                    } else if (matrix[i][j] == 2) {
                        fill("#DEC695");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 3) {
                        fill('#6600FF');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 4) {
                        fill('firebrick');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 5) {
                        fill('lightsalmon');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 6) {
                        fill('#00FFDE');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#E0E0E0');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 7) {
                        fill('black');
                        rect(j * side, i * side, side, side);
                    }
                }
            }
            p.innerText = "Ձմեռ";
        }
        if(p.innerText=="Ձմեռ"){
           for (var i in xotakerArr) {
               xotakerArr[i].utel();
       
           }
           for (var i in vagrArr) {
               vagrArr[i].utel();
               vagrArr[i].sharjvel();
               vagrArr[i].bazmanal();
               vagrArr[i].mahanal();
       
       
           }
           for (var i in mardArr) {
               mardArr[i].utel();
               mardArr[i].sharjvel();
               mardArr[i].bazmanal();
               mardArr[i].mahanal();
       
           }
           for (var i in shinarar) {
               shinarar[i].sharel();
               shinarar[i].mahanal();
       
           }
           for (var i in qandoxarr) {
               qandoxarr[i].qandel();
               qandoxarr[i].mahanal();
       
           }
       }
        else{
            for (var i in grassArr) {
                     grassArr[i].bazmanal();
            
                 }
            for (var i in xotakerArr) {
                xotakerArr[i].utel();
        
            }
            for (var i in vagrArr) {
                vagrArr[i].utel();
                vagrArr[i].sharjvel();
                vagrArr[i].mahanal();
        
        
            }
            for (var i in mardArr) {
                mardArr[i].utel();
                mardArr[i].sharjvel();
                mardArr[i].bazmanal();
                mardArr[i].mahanal();
        
            }
            for (var i in shinarar) {
                shinarar[i].sharel();
                shinarar[i].mahanal();
        
            }
            for (var i in qandoxarr) {
                qandoxarr[i].qandel();
                qandoxarr[i].mahanal();
        
            }
        }
        
    }



    exanak();


    // for (var i in grassArr) {
    //     grassArr[i].bazmanal();

    // }
    // for (var i in xotakerArr) {
    //     xotakerArr[i].utel();

    // }
    // for (var i in vagrArr) {
    //     vagrArr[i].utel();
    //     vagrArr[i].sharjvel();
    //     vagrArr[i].bazmanal();
    //     vagrArr[i].mahanal();


    // }
    // for (var i in mardArr) {
    //     mardArr[i].utel();
    //     mardArr[i].sharjvel();
    //     mardArr[i].bazmanal();
    //     mardArr[i].mahanal();

    // }
    // for (var i in shinarar) {
    //     shinarar[i].sharel();
    //     shinarar[i].mahanal();

    // }
    // for (var i in qandoxarr) {
    //     qandoxarr[i].qandel();
    //     qandoxarr[i].mahanal();

    // }
}