class Qandox extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 500;
        this.index = 7;
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
                    break;
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


    mahanal() {
        for (var i in qandoxarr) {
            if (this.energy <= 0) {
                if (this.x == qandoxarr[i].x && this.y == qandoxarr[i].y) {
                    qandoxarr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }
}