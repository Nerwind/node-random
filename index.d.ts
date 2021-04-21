declare module 'random-node-module' {
    class Random {
        /**
         * Returns a random number between min and max parameters.
         * @param {Number} min
         * @param {Number} max
        */
        public int(min: number, max: number): number;

        /**
         * Return a random element of an array.
        */
        public choice(list: Array<any> | string): any;

        /**
         * Returns a shuffled array provided in the function param.
         * @param {Array} list
        */
        public shuffle(list: Array<any>): any;

        /**
         * Returns a random boolean value.
        */
        public bool(): boolean;

        /**
         * Returns a randomly generated string from charset.
         * @param {Number} length
         * @param {String} charset
        */
        public string(length: number, charset: string): string;

        /**
         * Returns a random char in a string.
         * @param {String} string
        */
        public rCharFromString(string: string): string;

        /**
         * Returns a random timestamp as Date object.
        */
        public timestamp(): Date;

        /**
         * Returns an array of random numbers
         * @param {Number} min
         * @param {Number} max
         * @param {Number} length
        */
        public intArray(min: number, max: number, length: number): number[];

        /**
         * Returns an array of randomly generated strings.
         * @param {Number} length
         * @param {String} charset
         * @param {Number} arrayLength
        */
        public stringArray(length: number, charset: string, arrayLength: number): string[];
    }

    export = Random;
}