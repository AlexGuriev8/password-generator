type Label = {
  id: string;
  labelText: string;
  checked: boolean;
  name: string;
};

export interface PasswordCheckboxesProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labels: Label[];
}
