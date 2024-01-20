/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';




export const useForm = <T extends { [key: string]: string | boolean | undefined | number }>( initialForm:T) => {
  
    const [ formState, setFormState ] = useState( initialForm );


    useEffect(() => {
        setFormState( initialForm );
    }, [ initialForm ])
    
    



    const onInputChange = ({ target }:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }
    const onSelectChange = ({target}:React.ChangeEvent<HTMLSelectElement>)=>{
        const{name,value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }
    const onResetForm = () => {
        setFormState( initialForm );
    }

  



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onSelectChange,
    }
}