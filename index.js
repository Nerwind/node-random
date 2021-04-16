class Random {
    /**
     * Returns a random number between min and max parameters.
     * @param {Number} min 
     * @param {Number} max 
     */
    static int(min, max) {
        if (!min) {
            throw new ReferenceError('Minimal output value should be provided.');
        };
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
        if (!list[0]) {
            throw new ReferenceError('A list should be provided.');
        }
        return list[this.int(list.length)];
    }

    /**
     * Returns a shuffled array provided in the function param.
     * @param {Array} list
     */

    static shuffle(list) {
        if (!list[0]) {
            throw new ReferenceError('A list should be provided.');
        }
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
        if (!charset) {
            throw new ReferenceError('A charset should be provided.');
        } else if (!length) {
            throw new ReferenceError('Length should be provided.');
        }

        for (let i = 0; i < length; i++) {
            retStr += charset[this.int(charset.length)];
        }

        return retStr;
    }

    /**
     * Returns a random char in a string.
     * @param {String} string
     */

    static rCharFromString(string) {
        if (!string) {
            throw new ReferenceError('A string should be provided.');
        }
        return string[this.int(string.length)];
    }
}

module.exports = Random;