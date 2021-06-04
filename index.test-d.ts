import {expectType} from 'tsd';
import stringLength from './index.js';

expectType<number>(stringLength('🐴'));
expectType<number>(stringLength('\u001B[1municorn\u001B[22m'));
expectType<number>(stringLength('\u001B[1municorn\u001B[22m', {countAnsiEscapeCodes: true}));
