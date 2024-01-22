import { useEffect, useState } from 'react';
import { UrlType } from '../helpers/types';


export const useForm = <T extends { [key: string]: string | boolean | undefined | number | null | UrlType }>(initialForm: T) => {
  const [formState, setFormState] = useState(initialForm);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const onSelectChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    onSelectChange,
  };
};
