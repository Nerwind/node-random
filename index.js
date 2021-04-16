class Random {
    /**
     * Returns a random number between min and max parameters.
     * @param {Number} min 
     * @param {Number} max 
     */
    static int(min, max) {
        if (!min) return 0;
        if (!max) {
            let rnum = Math.floor(Math.random() * min);
            return rnum;
        } else {
            let rnum = Math.floor(Math.random() * max);
            if (rnum < min) {
                let c = (min - rnum) + Math.floor(Math.random() * (max - min));
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

    /**
     * Returns a random boolean value.
     */

    static bool() {
        return this.int(2) == 1 ? true : false;
    }

    /**
     * Returns a randomly generated string from charset.
     * @param {Number} length
     * @param {String} charset
     */

    static string(length, charset) {
        let retStr = '';
        if (!charset) return '';

        for (let i = 0; i < length; i++) {
            retStr += charset[this.int(charset.length)];
        }

        return retStr;
    }
}

module.exports = Random;