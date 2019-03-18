import {expectType} from 'tsd-check';
import stringLength from '.';

expectType<number>(stringLength('🐴'));
expectType<number>(stringLength('\u001B[1municorn\u001B[22m'));
