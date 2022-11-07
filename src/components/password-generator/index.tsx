import { useState, useEffect, useMemo } from 'react';

import useCheckboxes from './password-checkboxes/useCheckboxes';
import { strengthLevels } from './strength-level/config';
import PasswordCheckBoxes from './password-checkboxes';
import StrengthLevel from './strength-level';
import CopyIcon from './icons/copy-icon';
import getStrength from './utils';
import {
  Header,
  StyledContainer,
  Password,
  BodyContent,
  PasswordStrength,
  GenerateWrapper,
} from './styles';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [range, setRange] = useState('0');

  const [copied, setCopied] = useState(false);

  const [, copy] = useCopyToClipboard();

  const strength = useMemo(() => getStrength(password), [password]);

  const { handleCheckboxChange, labels, checkboxes } = useCheckboxes();

  const generatePassword = () => {
    const defaultCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const characters = {
      uppercase: defaultCharacters.toUpperCase(),
      numbers: '0123456789',
      symbols: '~!@-#$',
    };

    const characterList = [
      defaultCharacters,
      ...(checkboxes.uppercase ? characters.uppercase : []),
      ...(checkboxes.numbers ? characters.numbers : []),
      ...(checkboxes.symbols ? characters.symbols : []),
    ].join('');

    const pass = Array.from({ length: +range }, () =>
      Math.floor(Math.random() * characterList.length)
    )
      .map((number) => characterList[number])
      .join('');

    setPassword(pass);
  };

  const onCopy = () => {
    if (!password) return;
    copy(password);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 1300);
      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [copied]);

  return (
    <StyledContainer>
      <Header>Password Generator</Header>
      <Password>
        {password ? (
          <span className="password-text">{password}</span>
        ) : (
          <span className="password-text opacity">P4$5W0rD!</span>
        )}
        <div className="copy">
          {copied && <span>Copied</span>}
          <button type="button" className="copy-button" onClick={onCopy}>
            <CopyIcon />
          </button>
        </div>
      </Password>
      <BodyContent>
        <div className="character-length">
          <span>Character Length</span>
          <span className="character-length-value">{range}</span>
        </div>
        <input
          className="range"
          type="range"
          value={range}
          min="0"
          max="20"
          onChange={(event) => setRange(event.target.value)}
        />
        <PasswordCheckBoxes onChange={handleCheckboxChange} labels={labels} />
        <PasswordStrength>
          <span>STRENGTH</span>
          <div className="strength-wrapper">
            <span>{strengthLevels[strength]}</span>
            <StrengthLevel level={strength} />
          </div>
        </PasswordStrength>
        <GenerateWrapper>
          <button
            type="button"
            className="generate-button"
            onClick={generatePassword}
            disabled={+range === 0}
          >
            Generate
          </button>
        </GenerateWrapper>
      </BodyContent>
    </StyledContainer>
  );
}

export default PasswordGenerator;
