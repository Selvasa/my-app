import React, { useState } from 'react';
import {
    Box, Grid, Link, AppBar, Toolbar, MenuItem,
    Menu, Button, Typography, List, ListItem, Divider, ListItemButton,
    ListItemText,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { tablestyle } from './table';
export default function Navbarsection() {
    const [single, setSingle] = useState(" ")
    const navitem = [
        { id: 1, page: 'About', route: '/about', lable: 'about' },
        {
            id: 2, page: 'Contact', lable: 'contact', child:
                [
                    { page: 'Contact 1', route: '/service' },
                    { page: 'Contact 2', route: '/service' },
                    { page: 'Contact 3', route: '/service' },
                ],
        },
        {
            id: 3, page: 'Home', lable: 'home', child:
                [
                    { page: 'Home 1', route: '/home' },
                    { page: 'Home 2', route: '/home' },
                    { page: 'Home 3', route: '/home' },
                ]
        },
        { id: 4, page: 'Project', route: '/project', lable: 'project' },
        { id: 5, page: 'Career', route: '/career', lable: 'carrer' },
        {
            id: 6, page: 'Service', lable: 'service',
            child:
                [
                    { page: 'Service 1', route: '/service' },
                    { page: 'Service 2', route: '/service' },
                    { page: 'Service 3', route: '/service' },
                ]
        }
    ];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const openEffect = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const navClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <AppBar position="static">
                <Grid container sx={{ display: 'flex', justifyContent: 'space-around', }} style={tablestyle.gridac}>
                    {navitem.map((data) => (
                        <Grid>
                            <Button onClick={(e) => { setSingle(data.lable); openEffect(e) }} id="basic-button" key={data.id}>
                                <Link sx={tablestyle.listpage} href={data.route} >
                                    {data.page}
                                </Link>
                            </Button>
                            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={navClose}>
                                {data.lable == single ?
                                    data.child.map((item) => {
                                        return (
                                            <Link key={item.id} href={item.route} sx={{ textDecoration: 'none' }}>
                                                <MenuItem onClick={navClose}>
                                                    {item.page}
                                                </MenuItem>
                                            </Link>
                                        )
                                    }) : null
                                }
                            </Menu>
                        </Grid>
                    ))
                    }
                    {/* <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={navClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
                        <MenuItem onClick={navClose}>Profile</MenuItem>
                        <MenuItem onClick={navClose}>My account</MenuItem>
                        <MenuItem onClick={navClose}>Logout</MenuItem>
                    </Menu> */}
                    {/* <Grid> <Button><Link sx={tablestyle.listpage} href='/Contact' >Contact</Link></Button></Grid>
                    <Grid> <Button><Link sx={tablestyle.listpage} href='/About'>About</Link></Button></Grid>
                    <Grid> <Button><Link sx={tablestyle.listpage} href='/Home'>Home</Link></Button></Grid>
                    <Grid> <Button><Link sx={tablestyle.listpage} href='/Project'>Project</Link></Button></Grid>
                    <Grid> <Button><Link sx={tablestyle.listpage} href='/career'>career</Link></Button></Grid>
                    <Grid> <Button onMouseOver={openEffect}><Link sx={tablestyle.listpage}>Service</Link></Button></Grid> */}
                </Grid >
            </AppBar >
        </Box >
    )
}
