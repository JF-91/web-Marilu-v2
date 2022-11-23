import { Box, Container, Grid, Paper, TextareaAutosize, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React, { FC } from 'react'
//yup
import * as yup from 'yup'

//formik

const formInitialValues = {
    name:'',
    lastName:'',
    message:''
}

const FormApp:FC<{}> = () =>{

    const formik = useFormik({
        initialValues: formInitialValues,
        onSubmit: (e)=>{console.log(e);
        },

    })
    return(
        <Container>
            <Grid container
                sx={{minHeight:"100vh"}}>
                    <Grid item>
                        <Paper sx={{padding:"1.2em", borderRadius:" 2.5em"}}>
                            <Typography sx={{mt:1, mb:1}} variant="h4">
                                Form
                            </Typography>
                            <Box component='form' onSubmit={formik.handleSubmit}>
                                <TextField 
                                    name='name'
                                    margin='normal'
                                    type='text'
                                    fullWidth
                                    label='name'
                                    sx={{mt:2, mb:1}}
                                    required
                                    />
                                    <TextField 
                                    name='email'
                                    margin='normal'
                                    type='email'
                                    fullWidth
                                    label='name'
                                    sx={{mt:2, mb:1}}
                                    required
                                    />
                                    <TextareaAutosize 
                                    name='message'
                                    aria-label='...'
                                    minRows={5}
                                    style={{width:'100%'}}
                                    
                                    />
                            </Box>
                        </Paper>
                    </Grid>
            </Grid>
        </Container>
    )
}

export default FormApp