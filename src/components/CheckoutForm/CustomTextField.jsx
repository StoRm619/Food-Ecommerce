import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const FormInput = ({ name, label }) => {
    const { control } = useFormContext();


    return (
        <Grid item xs={12} sm={6}>
            <Controller
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
                        name={name}
                        control={control}
                        label={label}
                        fullWidth
                        required />
                )}


            />
        </Grid>
    );
}

export default FormInput;