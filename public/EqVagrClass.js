function rand() {
    var a = Math.floor(Math.random() * 2)
    return a;
}
class EqVagr extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 20;
        this.index = 4.5;
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
            matrix[this.y][this.x] = 0;
            matrix[norVandakxotov[1]][norVandakxotov[0]] = 4.5;
            this.x = norVandakxotov[0];
            this.y = norVandakxotov[1];
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4.5;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(2);
        var norVandak = random(datarkvandakner);
        var eqovvandak = this.yntrelVandak(2.5);
        var norVandakeqov = random(eqovvandak);
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 4.5;
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy += 2;
            for (var i in xotakerArr) {
                if (norVandak[0] == xotakerArr[i].x && norVandak[1] == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (norVandakeqov) {
            matrix[norVandakeqov[1]][norVandakeqov[0]] = 4.5;
            matrix[this.y][this.x] = 0;
            this.x = norVandakeqov[0];
            this.y = norVandakeqov[1];
            this.energy += 2;
            for (var i in eqxotakerArr) {
                if (norVandakeqov[0] == eqxotakerArr[i].x && norVandakeqov[1] == eqxotakerArr[i].y) {
                    eqxotakerArr.splice(i, 1);
                    break;
                }
            }
        }
    }
    bazmanal() {
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        var vagrovvandak = this.yntrelVandak(4);
        var Vandakvagrov = random(vagrovvandak);
        if (norVandak) {
            if (Vandakvagrov) {
                if (this.energy >= 10) {
                    if (rand() == 0) {
                        var norVagr = new Vagr(norVandak[0], norVandak[1]);
                        vagrArr.push(norVagr);
                        matrix[norVandak[1]][norVandak[0]] = 4;
                        this.energy -= 3;
                    }
                    else if (rand() == 1) {
                        var norEqVagr = new EqVagr(norVandak[0], norVandak[1]);
                        eqvagrArr.push(norEqVagr);
                        matrix[norVandak[1]][norVandak[0]] = 4.5;
                        this.energy -= 3;
                    }
                }
            }
        }
    }
    mahanal() {
        for (var i in eqvagrArr) {
            if (this.energy <= 0) {
                if (this.x == eqvagrArr[i].x && this.y == eqvagrArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    eqvagrArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}