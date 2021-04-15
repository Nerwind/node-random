class Random {
    /**
     * 
     * @param {Number} min 
     * @param {Number} max 
     */
    static int(min, max) {
        return !max ? Math.floor(Math.random() * min) : Math.floor(Math.random() * max) + min;
    }

    /**
     * @param {Array} list 
     */

    static choice(list) {
        return !list[0] ? null : list[this.int(list.length)];
    }

    /**
     * @param {Array} list
     * @description Returns a shuffled array provided in the function param.
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