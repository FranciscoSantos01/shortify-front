import { useEffect, useState } from 'react';
import { UrlType } from '../helpers/types';
type NullableItem<T> = T | string| boolean| number | undefined |null
type FormData = NullableItem<UrlType>
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
    setFormState((prevFormState:FormData|null) => ({
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
