import styled from 'styled-components';
import { Field, useField, ErrorMessage } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

 export const Title = styled.h2`
  font-weight: 700;
  color: #2a2a2a;
  margin: 0;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 500;
  color: #2a2a2a;
  margin-top: 16px;
  
`;
 export const Input = styled(Field)` 
  border: 1px solid #2a2a2a;
  font: inherit;
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  width: 360px;
  outline: 0;
  margin-top: 4px;
  /* :focus {
    border: 2px solid #b55b2d;
} */
`;
export const Button = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px;
  margin:0 auto ;
  margin-top: 16px;
  display: block;
  color: #fff;
  background: #b55b2d;
  border: none;
  border-radius: 4px;
  transition-property: box-shadow;
  font-weight: 700;
  font-size: 16px;
  box-shadow: 4px 4px 10px 0 rgb(37 38 50 / 70%);
 :hover {
    box-shadow: none;
 }
`;

export const ErrorText = styled(ErrorMessage)`
  margin: 0px;
  color: red;
  width: 400px; 
`;

export const InputPhone = ({ ...props }) => {
  const [field, meta,helpers ] = useField(props.name);

  return (
    <>
      <PhoneInput
        {...props}
        {...field}
        value={field.value}
        id="number"
        name="number"
        defaultCountry="ua"
        preferredCountries={['ua']}
        autoFormat={true}
        placeholder=''
        onChange={value => {
          helpers.setValue(value);
        }}
        containerStyle={{
          marginTop: '4px',
        }}
        inputStyle={{
          border: '1px solid #2a2a2a',
          borderRadius: '4px',
          backgroundColor: '#fff',
          color: '#2a2a2a',
          width: '378px',
          padding: '8px',
          paddingLeft: '40px',
          fontSize: '16px',
        }}
        buttonStyle={{
          backgroundColor: '#fff',
          border: '1px solid #2a2a2a',
        }}
        dropdownStyle={{
          backgroundColor: '#fff',
        }}
       
      />
      {meta.error && meta.touched && <ErrorText>{meta.error}</ErrorText>}
    </>
  );
};
