import argv from 'argv';
import { isNumber } from 'util';

import { download } from './download'
import logger from './utils/logger';

const MAXIMUN_NUM_OF_DOWNLOAD = 10;
const parseMaxDownload = (n: number) => {
  if (!isNumber(n) || n < 1 || MAXIMUN_NUM_OF_DOWNLOAD < n) {
    return MAXIMUN_NUM_OF_DOWNLOAD;
  }
  return n;
}

const range = (start: number, end: number) => Array.from({length: (end - start+ 1)}, (v, k) => k + start);

argv.type('URL', v => new URL(v));
const args = argv.option([
  {
    name: 'num',
    short: 'n',
    type: 'int',
    description: 'How many times to download'
  },
  {
    name: 'url',
    short: 'u',
    type: 'URL',
    description: 'Download url'
  }
]).run();

const url = args.options['url'] || new URL('http://localhost:3000/apis/slow');
const numOfDownload: number = parseMaxDownload(args.options['num']);

const promises: Promise<any>[] = [];
range(1, numOfDownload).map(i => {
  promises.push(
    download(url).then(() => logger.info(`completed ${i}`))
  );
})
Promise.all(promises);
