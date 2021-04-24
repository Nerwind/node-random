declare const _exports: Random;
export = _exports;
declare class Random {
    /**
     * Returns a random number between min and max parameters
     * @param {Number} min
     * @param {Number} max
     */
    int(min: number, max: number): number;
    /**
     * Return a random element of an array
     * @param {Array|String} list
     */
    choice(list: any[] | string, ...args: any[]): any;
    /**
     * Returns a shuffled array provided in the function param
     * @param {Array} list
     */
    shuffle(list: any[], ...args: any[]): any;
    /**
     * Returns a random boolean value
     */
    bool(): boolean;
    /**
     * Returns a randomly generated string from charset
     * @param {Number} length
     * @param {String} charset
     */
    string(length: number, charset: string): string;
    /**
     * Returns a random char in a string
     * @param {String} string
     */
    rCharFromString(string: string): string;
    /**
     * Returns a random timestamp as Date object
     */
    timestamp(): Date;
    /**
     * Returns an array of random numbers
     * @param {Number} min
     * @param {Number} max
     * @param {Number} length
     */
    intArray(min: number, max: number, length: number): number[];
    /**
     * Returns an array of randomly generated strings
     * @param {Number} length
     * @param {String} charset
     * @param {Number} arrayLength
     */
    stringArray(length: number, charset: string, arrayLength: number): string[];
}