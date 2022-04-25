import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import TextField from '@material-ui/core/TextField';

function InputField(props) {
  const { field, form, helperText, disabled, ...rest } = props;
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);

  return (
    <TextField
      id={field.name}
      error={!!(touched && error)}
      helperText={(touched && error) || helperText}
      disabled={form.isSubmitting || disabled}
      InputLabelProps={{
        shrink: true
      }}
      {...field}
      {...rest}
    />
  );
}

InputField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  disabled: PropTypes.bool,
  helperText: PropTypes.string
};

export default InputField;
