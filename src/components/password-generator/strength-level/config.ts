import { Colors } from './types';

const strengthLevels = {
  1: 'VERY WEAK!',
  2: 'WEAK',
  3: 'MEDIUM',
  4: 'STRONG',
};

const levels = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

const colors: Record<number, string> = {
  1: Colors.TO_WEAK,
  2: Colors.WEAK,
  3: Colors.MEDIUM,
  4: Colors.STRONG,
};

export { levels, colors, strengthLevels };
