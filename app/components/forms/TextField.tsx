import { alpha } from '@mui/material/styles';
import React from 'react';
import { ControllerFieldState } from 'react-hook-form';
import {
  OutlinedInputProps, styled, TextField as MuiTextField, TextFieldProps,
} from '@mui/material';
import get from 'lodash/get';
import { BaseTextFieldProps } from '@mui/material/TextField/TextField';
import { ControllerRenderProps } from 'react-hook-form/dist/types/controller';
import { UseFormStateReturn } from 'react-hook-form/dist/types';
import { capitalize } from 'lodash';

type Props = {
  field: ControllerRenderProps<any, any>,
  fieldState: ControllerFieldState,
  formState: UseFormStateReturn<any>
} & BaseTextFieldProps & typeof defaultProps;

const defaultProps = {};

export const InputField = styled((props: TextFieldProps & BaseTextFieldProps) => (
  <MuiTextField variant="filled" InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>} {...props} />
))(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: theme.palette.text.primary,
    textTransform: 'uppercase',
    fontWeight: 400,
    letterSpacing: 1,
    '&.Mui-focused': {
      fontWeight: 600,
      color: theme.palette.text.primary,
    },
  },
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#2B2B2B',
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
    '&.Mui-error': {
      borderColor: theme.palette.error.main,
    },
  },
}));

const TextField = ({
  field, formState, fieldState, ...props
}: Props) => (
  <InputField
    {...props}
    {...field}
    error={fieldState.invalid}
    helperText={capitalize(get(fieldState, 'error.message', ''))}
  />
);
export default TextField;
