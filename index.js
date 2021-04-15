class Random {
    /**
     * Returns a random number between min and max parameters.
     * @param {Number} min 
     * @param {Number} max 
     */
    static int(min, max) {
        let first = Math.floor(Math.random() * !max ? min : max);
        if (first < min && max) {
            let c = min - first;
            first += c;
            return first;
        } else {
            return first;
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