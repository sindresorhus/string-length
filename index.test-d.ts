import {expectType} from 'tsd';
import stringLength = require('.');

expectType<number>(stringLength('🐴'));
expectType<number>(stringLength('\u001B[1municorn\u001B[22m'));
