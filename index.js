class Random {
    /**
     * Returns a random number between min and max parameters.
     * @param {Number} min 
     * @param {Number} max 
     */
    static int(min, max) {
        if (!max) {
            let rnum = Math.floor(Math.random() * min);
            return rnum;
        } else {
            let rnum = Math.floor(Math.random() * max);
            if (rnum < min) {
                let c = min - rnum;
                rnum += c;
            }
            return rnum;
        }
    }

    /**
     * Return a random element of an array.
     * @param {Array} list 
     */

    static choice(list) {
        return !list[0] ? null : list[this.int(list.length)];
    }

    /**
     * Returns a shuffled array provided in the function param.
     * @param {Array} list
     */

    static shuffle(list) {
        let ar = [],
        b = list.length;

        for (let a = 0; a < b;) {
            let r = Math.floor(Math.random() * list.length);
            ar.push(list[r]); list.splice(r, 1);
            b = list.length;
        }

        return ar;
    }
}

module.exports = Random;