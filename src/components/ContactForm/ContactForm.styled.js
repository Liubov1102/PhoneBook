
import { useField, ErrorMessage } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

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
          width: '360px',
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
      {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
    </>
  );
};
