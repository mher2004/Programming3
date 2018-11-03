class Mard extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 25;
        this.index = 5;
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

        var datarkvandakner = this.yntrelVandak(2);
        var xotovvandakner = this.yntrelVandak(4);
        var norVandak = random(datarkvandakner);
        var norVandakxotov = random(xotovvandakner);
        if (norVandakxotov) {
            for (var i in vagrArr) {
                if (this.x == vagrArr[i].x && this.y == vagrArr[i].y) {
                    vagrArr.splice(i, 1);
                    break;
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
                    break;
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
                    break;
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
                    matrix[this.y][this.x] = 0;
                    mardArr.splice(i, 1);
                    break;
                }
            }
        }
    }

}