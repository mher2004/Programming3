class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 10;
        this.index = 4;
    }

    yntrelVandak(ch) {
  return  super.yntrelVandak(ch);
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

}