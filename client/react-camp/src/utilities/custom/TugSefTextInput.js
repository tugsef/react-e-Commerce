import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react';

export default function TugSefTextInput({...props}) {
    //console.log(props);
    const [field ,meta] = useField(props) //formikte ilgigli imputelemanınızla ilgili bilgi toplayabilecek hook
 
  return (
    <div>
        <FormField className='field' error={meta.touched && !!meta.error}>
         
            <input {...field} {...props}/> 
            {meta.touched&&!!meta.error?(
            <Label pointing='right' basic color='red' content={meta.error}></Label>):null}
        </FormField>
    </div>
  )
}

