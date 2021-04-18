class Random {
    /**
     * Returns a random number between min and max parameters.
     * @param {Number} min 
     * @param {Number} max 
     */
    int(min, max) {
        if (!min) {
            throw new ReferenceError('Minimal output value must be provided.');
        }
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
     * @param {Array|String} list
     */

    choice(list) {
        if (!list[0] && list instanceof Array || !list) {
            throw new ReferenceError('A list must be provided.');
        }
        if (list instanceof Array) {
            return list[this.int(list.length)];
        } else {
            let retArr = [];
            for (let i of arguments) {
                retArr.push(i);
            }
            return this.choice(retArr);
        }
    }

    /**
     * Returns a shuffled array provided in the function param.
     * @param {Array} list
     */

    shuffle(list) {
        if (!list[0] && list instanceof Array || !list) {
            throw new ReferenceError('A list must be provided.');
        }
        if (list instanceof Array) {
            let ar = [],
            b = list.length;

            for (let a = 0; a < b;) {
                let r = Math.floor(Math.random() * list.length);
                ar.push(list[r]); list.splice(r, 1);
                b = list.length;
            }

            return ar;
        } else {
            let retArr = [];
            for (let i of arguments) {
                retArr.push(i);
            }
            return this.shuffle(retArr);
        }
    }

    /**
     * Returns a random boolean value.
     */

    bool() {
        return this.int(2) == 1 ? true : false;
    }

    /**
     * Returns a randomly generated string from charset.
     * @param {Number} length
     * @param {String} charset
     */

    string(length, charset) {
        let retStr = '';
        if (!charset) {
            throw new ReferenceError('A charset must be provided.');
        } else if (!length) {
            throw new ReferenceError('Length must be provided.');
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

    rCharFromString(string) {
        if (!string) {
            throw new ReferenceError('A string must be provided.');
        }
        return string[this.int(string.length)];
    }

    /**
     * Returns a random timestamp as Date object.
     */

    timestamp() {
        return new Date(this.int(Date.now()));
    }

    /**
     * Returns an array of random numbers.
     * @param {Number} min
     * @param {Number} max
     * @param {Number} length
     */

    intArray(min, max, length) {
        if (!length) {
            throw new ReferenceError('Array length must be provided.');
        }

        let retArr = [];
        for (let i = 0; i < length; i++) {
            retArr.push(this.int(min, max));
        }

        return retArr;
    }

    /**
     * Returns an array of randomly generated strings.
     * @param {Number} length 
     * @param {String} charset 
     * @param {Number} arrayLength 
     */

    stringArray(length, charset, arrayLength) {
        if (!arrayLength) {
            throw new ReferenceError('Array length must be provided.');
        }
        
        let retArr = [];
        for (let i = 0; i < arrayLength; i++) {
            retArr.push(this.string(length, charset));
        }

        return retArr;
    }
}

module.exports = new Random();