import { useEffect, useState } from 'react';
import { UrlType } from '../helpers/types';
type NullableItem<T> = T | null
type FormData = NullableItem<UrlType>
export const useForm = <T extends FormData>(initialForm: T) => {
  const [formState, setFormState] = useState(initialForm || null);

  useEffect(() => {
    if (initialForm !== null) {
      setFormState(initialForm);
    }
  }, [initialForm]);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (initialForm === null) return; // Add a check for null here

    const { name, value } = target;
    setFormState((prevFormState) => ({
      ...(prevFormState as T),
      [name]: value,
    }));
  };

  const onSelectChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    if (initialForm === null) return; // Add a check for null here

    const { name, value } = target;
    setFormState((prevFormState) => ({
      ...(prevFormState as T),
      [name]: value,
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
