class Kaytsak extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.index = 8;

    }
    yntrelVandak(ch) {
        return super.yntrelVandak(ch);
    }
    kaytsaknaharel() {
        var xotovvandakner = this.yntrelVandak(1);
        var xotvand = random(xotovvandakner);
        var xotakerovvandakner = this.yntrelVandak(2);
        var xotakervand = random(xotakerovvandakner);
        var eqxotakerovvandakner = this.yntrelVandak(2.5);
        var eqxotakervand = random(eqxotakerovvandakner);
        var vagrovvandakner = this.yntrelVandak(4);
        var vagrvand = random(vagrovvandakner);
        var eqvagrovvandakner = this.yntrelVandak(4.5);
        var eqvagrvand = random(eqvagrovvandakner);
        var mardovvandakner = this.yntrelVandak(5);
        var mardvand = random(mardovvandakner);
        var eqmardovvandakner = this.yntrelVandak(5.5);
        var eqmardvand = random(eqmardovvandakner);
        if (xotvand) {
            for (var i in grassArr) {
                if (xotvand[0] == grassArr[i].x && xotvand[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[xotvand[1]][xotvand[0]] = 8;
            setInterval(function () {
                matrix[xotvand[1]][xotvand[0]] = 0;
            }, 500);
        }
        if (xotakervand) {
            for (var i in xotakerArr) {
                if (xotakervand[0] == xotakerArr[i].x && xotakervand[1] == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            matrix[xotakervand[1]][xotakervand[0]] = 8;
            setInterval(function () {
                matrix[xotakervand[1]][xotakervand[0]] = 0;
            }, 500);
        }
        if (eqxotakervand) {
            for (var i in eqxotakerArr) {
                if (eqxotakervand[0] == eqxotakerArr[i].x && eqxotakervand[1] == eqxotakerArr[i].y) {
                    eqxotakerArr.splice(i, 1);
                    break;
                }
            }
            matrix[eqxotakervand[1]][eqxotakervand[0]] = 8;
            setInterval(function () {
                matrix[eqxotakervand[1]][eqxotakervand[0]] = 0;
            }, 500);

        }
        if (vagrvand) {
            for (var i in vagrArr) {
                if (vagrvand[0] == vagrArr[i].x && vagrvand[1] == vagrArr[i].y) {
                    vagrArr.splice(i, 1);
                    break;
                }
            }
            matrix[vagrvand[1]][vagrvand[0]] = 8;
            setInterval(function () {
                matrix[vagrvand[1]][vagrvand[0]] = 0;
            }, 500);

        }
        if (eqvagrvand) {
            for (var i in eqvagrArr) {
                if (eqvagrvand[0] == eqvagrArr[i].x && eqvagrvand[1] == eqvagrArr[i].y) {
                    eqvagrArr.splice(i, 1);
                    break;
                }
            }
            matrix[eqvagrvand[1]][eqvagrvand[0]] = 8;
            setInterval(function () {
                matrix[eqvagrvand[1]][eqvagrvand[0]] = 0;
            }, 500);


        }
        if (mardvand) {
            for (var i in mardArr) {
                if (mardvand[0] == mardArr[i].x && mardvand[1] == mardArr[i].y) {
                    mardArr.splice(i, 1);
                    break;
                }
            }
            matrix[mardvand[1]][mardvand[0]] = 8;
            setInterval(function () {
                matrix[mardvand[1]][mardvand[0]] = 0;
            }, 500);
        }
        if (eqmardvand) {
            for (var i in eqmardArr) {
                if (eqmardvand[0] == eqmardArr[i].x && eqmardvand[1] == eqmardArr[i].y) {
                    eqmardArr.splice(i, 1);
                    break;
                }
            }
            matrix[eqmardvand[1]][eqmardvand[0]] = 8;
            setInterval(function () {
                matrix[eqmardvand[1]][eqmardvand[0]] = 0;
            }, 500);
        }
    }
    mahanal() {
        if (final >= 550) {
            for (var i in kaytsakarr) {
                if (this.x == kaytsakarr[i].x && this.y == kaytsakarr[i].y) {
                    kaytsakarr.splice(i, 1);
                    matrix[this.x][this.y] = 0;
                    break;
                }
            }
        }
    }
}
