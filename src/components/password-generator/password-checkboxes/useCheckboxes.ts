import { useState, useMemo, useCallback } from "react";

const useCheckboxes = () => {
  const [checkboxes, setCheckboxes] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const { uppercase, lowercase, numbers, symbols } = checkboxes;

  const handleCheckboxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = e.target;
      setCheckboxes({ ...checkboxes, [name]: checked });
    },
    [checkboxes]
  );

  const labels = useMemo(
    () => [
      {
        id: "0",
        labelText: "Include Uppercase Letters",
        checked: uppercase,
        name: "uppercase",
      },
      {
        id: "1",
        labelText: "Include Lowercase Letters",
        checked: lowercase,
        name: "lowercase",
      },
      {
        id: "2",
        labelText: "Include Numbers",
        checked: numbers,
        name: "numbers",
      },
      {
        id: "3",
        labelText: "Include Symbols",
        checked: symbols,
        name: "symbols",
      },
    ],
    [uppercase, lowercase, numbers, symbols]
  );

  return {
    checkboxes,
    labels,
    handleCheckboxChange,
  };
};

export default useCheckboxes;
