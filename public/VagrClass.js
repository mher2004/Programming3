class Vagr extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 20;
        this.index = 4;
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
            matrix[norVandakxotov[1]][norVandakxotov[0]] = 4;
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
                    break;
                }
            }
            matrix[norVandak[1]][norVandak[0]] = 4;
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy += 2;

        }
    }
    mahanal() {
        for (var i in vagrArr) {
            if (this.energy <= 0) {
                if (this.x == vagrArr[i].x && this.y == vagrArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    vagrArr.splice(i, 1);
                    break;
                }
            }
            else if (this.energy >= 40) {
                if (this.x == vagrArr[i].x && this.y == vagrArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    vagrArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}