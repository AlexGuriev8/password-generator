import { PasswordCheckboxesProps } from "./types";
import Checkboxes from "./styles";

function PasswordCheckBoxes({ onChange, labels }: PasswordCheckboxesProps) {
  return (
    <Checkboxes>
      <fieldset>
        {labels.map(({ id, labelText, checked, name }) => (
          <label key={id} htmlFor={id}>
            <input
              type="checkbox"
              id={id}
              checked={checked}
              onChange={onChange}
              name={name}
            />
            <span className="label-text"> {labelText}</span>
          </label>
        ))}
      </fieldset>
    </Checkboxes>
  );
}

export default PasswordCheckBoxes;
