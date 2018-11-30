class Shinarar extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 500;
        this.index = 6;
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
                    break;
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
                    shinarar.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;

                }
            }
        }
    }

}



