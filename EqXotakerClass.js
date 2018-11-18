class EqXotaker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 8;
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
        this.multiply++;
        if(p.innerText=="Ձմեռ" && this.multiply>=3){
        this.stanalNorKordinatner()
        this.energy--;
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            console.log("tsurta");
            this.multiply=0;
        }
    }
    else{
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
                    break;
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
        if(p.innerText=="Ձմեռ"){
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        var xotakerpvvandak = this.yntrelVandak(2);
        var Vandakxotakerov = random(xotakerpvvandak);
        if (norVandak && Vandakxotakerov && this.energy >= 10 ) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotakerArr.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.energy -= 5;

        }
        
    }
    else{
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        var xotakerpvvandak = this.yntrelVandak(2);
        var Vandakxotakerov = random(xotakerpvvandak);
        if (norVandak && Vandakxotakerov && this.energy >= 10 ) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotakerArr.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.energy -= 3;

        }
    }
    }


    mahanal() {
        for (var i in eqxotakerArr) {
            if (this.energy <= 0) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}