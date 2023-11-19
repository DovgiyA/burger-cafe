import { useState } from "react";
import { propsI } from "../interfaces/interfases";


export function useForm(inputValues: propsI): {values: propsI; handleChange: (arg: React.ChangeEvent<HTMLInputElement>) => void; setValues: (arg: propsI) => void}  {
    const [values, setValues] = useState(inputValues);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {value, name} = event.target;
      setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
  }