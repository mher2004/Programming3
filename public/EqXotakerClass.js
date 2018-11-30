function rand() {
    var a = Math.floor(Math.random() * 2);
    return a;
}
class EqXotaker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 9;
        this.index = 2.5;
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
        this.stanalNorKordinatner()
        this.multiply++;
        if (p.innerText == "Ձմեռ" && this.multiply >= 3) {
            this.energy--;
            var datarkvandakner = this.yntrelVandak(0);
            var norVandak = random(datarkvandakner);
            if (norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2.5;
                this.x = norVandak[0];
                this.y = norVandak[1];
                this.multiply = 0;
            }
        }
        else {
            this.energy--;
            var datarkvandakner = this.yntrelVandak(0);
            var norVandak = random(datarkvandakner);
            if (norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2.5;
                this.x = norVandak[0];
                this.y = norVandak[1];
            }
        }
    }
    utel() {
        this.stanalNorKordinatner()
        var datarkvandakner = this.yntrelVandak(1);
        var norVandak = random(datarkvandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2.5;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;
            for (var i in grassArr) {
                if (norVandak[0] == grassArr[i].x && norVandak[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
    }
    bazmanal() {
        this.stanalNorKordinatner()
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        var xotakerpvvandak = this.yntrelVandak(2);
        var Vandakxotakerov = random(xotakerpvvandak);
        if (norVandak) {
            if (Vandakxotakerov) {
                if (this.energy >= 10) {
                    if (rand() == 0) {
                        var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                        xotakerArr.push(norXotaker);
                        matrix[norVandak[1]][norVandak[0]] = 2;
                        this.energy -= 3;
                    }
                       else if (rand() == 1) {
                            var norEqXotaker = new EqXotaker(norVandak[0], norVandak[1]);
                            eqxotakerArr.push(norEqXotaker);
                            matrix[norVandak[1]][norVandak[0]] = 2.5;
                            this.energy -= 3;
                        }
                    }
                }
            }
        }
    mahanal() {
        for (var i in eqxotakerArr) {
            if (this.energy <= 0) {
                if (this.x == eqxotakerArr[i].x && this.y == eqxotakerArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    eqxotakerArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}