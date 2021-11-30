import { alpha } from '@mui/material/styles';
import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import {
  OutlinedInputProps, styled, TextField as MuiTextField, TextFieldProps,
} from '@mui/material';
import { BaseTextFieldProps } from '@mui/material/TextField/TextField';

type Props = { name: string } & BaseTextFieldProps & UseControllerProps & typeof defaultProps;
const defaultProps = {
};

const RedditTextField = styled((props : TextFieldProps & BaseTextFieldProps) => (
  <MuiTextField variant="filled" InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>} {...props} />
))(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: theme.palette.text.primary,
    textTransform: 'uppercase',
    fontWeight: 400,
    letterSpacing: 1,
    '&.Mui-focused': {
      fontWeight: 600,
    },
  },
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#2b2b2b',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.grey['900'], 1)} 0 0 0 0.5px`,
      borderColor: theme.palette.grey['900'],
    },
  },
}));

const TextField = ({ control, name, ...props }: Props) => {
  const {
    field: {
      onChange, onBlur, name: fieldName, value, ref,
    },
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: '',
  });

  return (
    <RedditTextField
      {...props}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={fieldName}
      inputRef={ref}
    />
  );
};

export default TextField;
