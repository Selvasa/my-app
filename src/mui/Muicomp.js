import React from 'react'
import { Typography, Stack, Button, IconButton, TextField } from '@mui/material';
import SendSharpIcon from '@mui/icons-material/SendSharp';

const Muicomp = () => {
    var [val, setVal] = React.useState('');
    return (
        // <Stack spacing={5}>
        //     <Stack direction='row' spacing={2}>
        //         <Button variant='outlined'>outlined</Button>
        //         <Button variant='contained'>Text</Button>
        //         <Button variant='text'>contained</Button>
        //         <Typography variant={'body2'} component={'span'} gutterBottom='true'>Typo content</Typography>
        //         <Typography variant={'body'} component={'span'} gutterBottom='true'>Another Typo content</Typography>
        //     </Stack>

        //     <Stack direction={'row'} spacing={2}>
        //         <Button variant='outlined' color='primary'>Button 1</Button>
        //         <Button variant='outlined' color='secondary'>Button 2</Button>
        //         <Button variant='outlined' color='info'>Button 3</Button>
        //         <Button variant='outlined' color='success'>Button 4</Button>
        //         <Button variant='outlined' color='error' startIcon={<SendSharpIcon />}>Button 5</Button>
        //         <Button variant='outlined' color='warning' endIcon={<SendSharpIcon />}>Button 6</Button>
        //     </Stack>
        //     <Stack direction={'row'}>
        //         <IconButton color='success' onClick={() => { alert('hiii') }}>
        //             <SendSharpIcon />
        //         </IconButton>
        //     </Stack>

        // </Stack>
        <Stack spacing={3}>
            <Stack spacing={2}>
                <Typography variant='h5' color='info' component='p'>hii</Typography>
                <Typography>hi</Typography>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>contained</Button>
                <Button variant='outlined' startIcon={<SendSharpIcon />}>outlined</Button>
                <IconButton color='success'><SendSharpIcon /></IconButton>
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <TextField label='small text field' variant='outlined' size='small' />
                <TextField label='password' variant='filled' type='password' size='larger' />
                <TextField label='User Name' variant='standard' />
            </Stack>
            <Stack direction={'row'} spacing='2'>
                <TextField label='EnterName' color='secondary' 
                value={val} error={val} required size='small'
                helperText={!val ? 'Require':'Thanks'}
                onChange={(e)=>setVal(e.target.value)}  />

            </Stack>
        </Stack>
    )
}

export default Muicomp
