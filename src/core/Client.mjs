import { resolve, dirname, join } from 'path';
import Client from 'discord.js/src/client/Client';
let main;
try {
    ({ main } = require(join(process.cwd(), 'package.json')));
    // eslint-disable-next-line no-empty
} catch (error) { }

export default class ECMAClient extends Client {
    constructor(options = {}) {
        super(options);

        this.userBaseDirectory = main ? resolve(process.cwd(), dirname(main)) : join(process.cwd(), 'src');
    }
}