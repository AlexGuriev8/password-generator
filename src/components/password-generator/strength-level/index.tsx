import { levels, colors } from './config';
import { StyledStrengthLevel, StyledLevel } from './styles';
import { LevelProps, Colors } from './types';

function StrengthLevel({ level = 1 }: LevelProps) {
  const newLevels = levels.map((lev) => ({
    ...lev,
    color: level > lev.id ? colors[level] : Colors.WHITE,
  }));

  return (
    <StyledStrengthLevel>
      {newLevels.map(({ id, color }) => (
        <StyledLevel key={id} color={color} />
      ))}
    </StyledStrengthLevel>
  );
}

export default StrengthLevel;
