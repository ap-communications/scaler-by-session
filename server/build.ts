import s from 'shelljs';

const distDir = './dist';

s.mkdir('-p', `${distDir}/assets`);
s.cp('-R', 'assets', `${distDir}`);
