class Xotaker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 9;
        this.index = 2;
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
                matrix[norVandak[1]][norVandak[0]] = 2;
                this.x = norVandak[0];
                this.y = norVandak[1];
                console.log("tsurta");
                this.multiply = 0;
            }
        }
        else {
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
    }
    utel() {
        this.stanalNorKordinatner();
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
                    break;
                }
            }
        }
        else {
            this.sharjvel();
            this.mahanal();
        }

    }
    mahanal() {
        for (var i in xotakerArr) {
            if (this.energy <= 0) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
           else if (this.energy >= 40) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}