import { useEffect, useState } from 'react';
type NullableItem<T> = T | string| boolean| number | undefined |null

export const useForm =<T extends object>(initialForm: NullableItem<T>) => {
  const [formState, setFormState] = useState(initialForm);

  useEffect(() => {
    if (initialForm !== null) {
      setFormState(initialForm);
    }
  }, [initialForm]);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (initialForm === null || typeof formState !== 'object') return;
    const { name, value } = target;
    setFormState((prevFormState) => ({
      ...(prevFormState as T),
      [name]: value,
    }));
  };

  const onSelectChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    if (initialForm === null || typeof formState !== 'object') return;

    const { name, value } = target;
    const booleanValue = value === 'true';
    setFormState((prevFormState) => ({
      ...(prevFormState as T),
      [name]: name === 'disabled' ? booleanValue : value
    }));
  };

  const onResetForm = () => {
    if (initialForm === null) return; // Add a check for null here

    setFormState(initialForm);
  };

  return {
    ...formState as T,
    formState,
    onInputChange,
    onResetForm,
    onSelectChange,
  };
};
