
class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    bazmanal() {

        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));

        if (this.multiply >= 5 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;

        }
    }


    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
}


class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = 2;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);

                }
            }
        }
        return found;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner()
        this.energy--;
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    utel() {
        var datarkvandakner = this.yntrelVandak(1);
        var norVandak = random(datarkvandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;
            for (var i in grassArr) {
                if (norVandak[0] == grassArr[i].x && norVandak[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }

            if (this.energy == 10) {
                this.bazmanal();
            }
            else if (this.energy >= 11) {
                this.energy -= 2;
            }
        }
        else {
            this.sharjvel();
            this.mahanal();
        }

    }
    bazmanal() {
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        if (norVandak && this.energy >= 10) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotakerArr.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.energy -= 4;

        }

    }


    mahanal() {
        for (var i in xotakerArr) {
            if (this.energy <= 0) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    xotakerArr.splice(i, 1);

                }
            }
        }
    }
}


class Mard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 25;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        this.index = 5;
    }
    yntrelVandak(ch, cb) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch || matrix[y][x] == cb) {
                    found.push(this.directions[i]);

                }
            }
        }
        return found;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    sharjvel() {
        this.energy -= 1;
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        var xotovvandakner = this.yntrelVandak(1);
        var norVandakxotov = random(xotovvandakner);
        if (norVandakxotov) {
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            matrix[this.y][this.x] = 0;
            matrix[norVandakxotov[1]][norVandakxotov[0]] = 5;
            this.x = norVandakxotov[0];
            this.y = norVandakxotov[1];


        }
        else if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }

    }
    utel() {
        // this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(2);
        var xotovvandakner = this.yntrelVandak(4);
        var norVandak = random(datarkvandakner);
        var norVandakxotov = random(xotovvandakner);
        if (norVandakxotov) {
            for (var i in vagrArr) {
                if (this.x == vagrArr[i].x && this.y == vagrArr[i].y) {
                    vagrArr.splice(i, 1);
                }
            }
            matrix[this.y][this.x] = 0;
            matrix[norVandakxotov[1]][norVandakxotov[0]] = 5;
            this.x = norVandakxotov[0];
            this.y = norVandakxotov[1];
            this.energy += 4;
        }
        if (norVandak) {
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                }
            }
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy += 2;

        }

    }

    bazmanal() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        var xotovvandakner = this.yntrelVandak(1);
        var norVandakxotov = random(xotovvandakner);
        if (norVandakxotov && this.energy == 30) {
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            var norMard = new Mard(norVandakxotov[0], norVandakxotov[1]);
            mardArr.push(norMard);
            matrix[norVandakxotov[1]][norVandakxotov[0]] = 5;
            this.energy -= 5;
        }
        if (norVandak && this.energy == 30) {

            var norMard = new Mard(norVandak[0], norVandak[1]);
            mardArr.push(norMard);
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.energy -= 5;
        }
    }

    mahanal() {
        for (var i in mardArr) {
            if (this.energy <= 0) {
                if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
                    matrix[this.y][this.x] = 0
                    mardArr.splice(i, 1)

                }
            }
        }
    }

}


class Vagr {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        this.index = 4;
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);

                }
            }
        }
        return found;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();
        this.energy -= 1;
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        var xotovvandakner = this.yntrelVandak(1);
        var norVandakxotov = random(xotovvandakner);
        if (norVandakxotov) {
            matrix[this.y][this.x] = 0;
            matrix[norVandakxotov[1]][norVandakxotov[0]] = 4;
            this.x = norVandakxotov[0];
            this.y = norVandakxotov[1];
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
        }
        else if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }


    }
    utel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(2);
        var norVandak = random(datarkvandakner);
        if (norVandak) {
            for (var i in xotakerArr) {
                if (norVandak[0] == xotakerArr[i].x && norVandak[1] == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);

                }
            }
            matrix[norVandak[1]][norVandak[0]] = 4;
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy += 2;

        }
    }

    bazmanal() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);  
        if (norVandak && this.energy == 15) {
            var norVagr = new Vagr(norVandak[0], norVandak[1]);
            vagrArr.push(norVagr);
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.energy -= 3;
        }

    }

    mahanal() {
        for (var i in vagrArr) {
            if (this.energy <= 0) {
                if (this.x == vagrArr[i].x && this.y == vagrArr[i].y) {
                    matrix[this.y][this.x] = 0
                    vagrArr.splice(i, 1);
                    console.log("meram ara");

                }
            }
        }
    }

}




class Qandox {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 7;
        this.energy = 500;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);

                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    qandel() {
        this.stanalNorKordinatner()
        this.energy -= 1;
        var datarkvandakner = this.yntrelVandak(0);
        var xotovvandakner = this.yntrelVandak(1);
        var patovvandak = this.yntrelVandak(3);
        var norVandakpatov = random(patovvandak);
        var norVandak = random(datarkvandakner);
        var norVandakxotov = random(xotovvandakner);
        if (norVandakpatov) {
            matrix[this.y][this.x] = 0;
            matrix[norVandakpatov[1]][norVandakpatov[0]] = 7;
            this.x = norVandakpatov[0];
            this.y = norVandakpatov[1];
        }
        else if (norVandakxotov) {
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            matrix[this.y][this.x] = 0;
            matrix[norVandakxotov[1]][norVandakxotov[0]] = 7;
            this.x = norVandakxotov[0];
            this.y = norVandakxotov[1];
        }
        else if (norVandak) {

            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 7;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    // sharjvel() {
    //     this.stanalNorKordinatner()
    //     this.energy -= 1;
    //     var datarkvandakner = this.yntrelVandak(0, 1);
    //     var norVandak = random(datarkvandakner);
    //     if (norVandak) {
    //         matrix[norVandak[1]][norVandak[0]] = 7;
    //         matrix[this.y][this.x] = 0;
    //         this.x = norVandak[0];
    //         this.y = norVandak[1];
    //     }

    // }

    mahanal() {
        for (var i in qandoxarr) {
            if (this.energy <= 0) {
                if (this.x == qandoxarr[i].x && this.y == qandoxarr[i].y) {
                    qandoxarr.splice(i, 1)
                    matrix[this.y][this.x] = 0

                }
            }
        }
    }
}



class Shinarar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 6;
        this.energy = 500;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);

                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharel() {
        this.energy -= 1;
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var xotovvandakner = this.yntrelVandak(1);
        var norVandak = random(datarkvandakner);
        var norVandakxotov = random(xotovvandakner);
        if (norVandakxotov) {
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            matrix[this.y][this.x] = 3;
            matrix[norVandakxotov[1]][norVandakxotov[0]] = 6;
            this.x = norVandakxotov[0];
            this.y = norVandakxotov[1];
        }
        if (norVandak) {

            matrix[this.y][this.x] = 3;
            matrix[norVandak[1]][norVandak[0]] = 6;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }

    }

    mahanal() {
        for (var i in shinarar) {
            if (this.energy <= 0) {
                if (this.x == shinarar[i].x && this.y == shinarar[i].y) {
                    shinarar.splice(i, 1)
                    matrix[this.y][this.x] = 0


                }
            }
        }
    }

}



