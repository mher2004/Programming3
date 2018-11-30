function rand() {
    var a = Math.floor(Math.random() * 2)
    return a;
}
class EqMard extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 20;
        this.index = 5.5;
    }
    yntrelVandak(ch) {
        return super.yntrelVandak(ch);
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
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
            matrix[norVandakxotov[1]][norVandakxotov[0]] = 5.5;
            this.x = norVandakxotov[0];
            this.y = norVandakxotov[1];
        }
        else if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5.5;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var xotakervand = this.yntrelVandak(2);
        var vagrvand = this.yntrelVandak(4);
        var eqxotakervand = this.yntrelVandak(2.5);
        var eqvagrvand = this.yntrelVandak(4.5);
        var norVandak = random(xotakervand);
        var norVandakvagrov = random(vagrvand);
        var vndakeqxotakerov = random(eqxotakervand);
        var vandakeqvagrov = random(eqvagrvand);
        if (norVandakvagrov) {
            for (var i in vagrArr) {
                if (this.x == vagrArr[i].x && this.y == vagrArr[i].y) {
                    vagrArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
            matrix[norVandakvagrov[1]][norVandakvagrov[0]] = 5.5;
            this.x = norVandakvagrov[0];
            this.y = norVandakvagrov[1];
            this.energy += 4;
        }
        else if (norVandak) {
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5.5;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy += 2;
        }
        else if (vndakeqxotakerov) {
            for (var i in eqxotakerArr) {
                if (this.x == eqxotakerArr[i].x && this.y == eqxotakerArr[i].y) {
                    eqxotakerArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
            matrix[vndakeqxotakerov[1]][vndakeqxotakerov[0]] = 5.5;
            this.x = vndakeqxotakerov[0];
            this.y = vndakeqxotakerov[1];
            this.energy += 2;
        }

        else if (vandakeqvagrov) {
            for (var i in eqvagrArr) {
                if (this.x == eqvagrArr[i].x && this.y == eqvagrArr[i].y) {
                    eqvagrArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
            matrix[vandakeqvagrov[1]][vandakeqvagrov[0]] = 5.5;
            this.x = vandakeqvagrov[0];
            this.y = vandakeqvagrov[1];
            this.energy += 2;
        }
    }

    bazmanal() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        var xotovvandakner = this.yntrelVandak(5);
        var norVandakxotov = random(xotovvandakner);
        var xotvandakner = this.yntrelVandak(1);
        var norVandakxot = random(xotvandakner);
        if (this.energy >= 30)
            if (norVandak) {
                if (norVandakxotov) {
                    if (rand() == 0) {
                        var norMard = new Mard(norVandak[0], norVandak[1]);
                        mardArr.push(norMard);
                        matrix[norVandak[1]][norVandak[0]] = 5.5;
                        this.energy -= 5;
                    }
                    else if (rand() == 1) {
                        var norEqMard = new EqMard(norVandak[0], norVandak[1]);
                        eqmardArr.push(norEqMard);
                        matrix[norVandak[1]][norVandak[0]] = 5.5;
                        this.energy -= 5;
                    }
                }
            }
       else if (norVandakxot) {
            if (norVandakxotov) {
                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                if (rand() == 0) {
                    var norMard = new Mard(norVandak[0], norVandak[1]);
                    mardArr.push(norMard);
                    matrix[norVandak[1]][norVandak[0]] = 5.5;
                    this.energy -= 5;
                }
                else if (rand() == 1) {
                    var norEqMard = new EqMard(norVandak[0], norVandak[1]);
                    eqmardArr.push(norEqMard);
                    matrix[norVandak[1]][norVandak[0]] = 5.5;
                    this.energy -= 5;
                }
            }
        }
    }


    mahanal() {
        for (var i in eqmardArr) {
            if (this.energy <= 0) {
                if (this.x == eqmardArr[i].x && this.y == eqmardArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    eqmardArr.splice(i, 1);
                    break;
                }
            }
        }
    }

}