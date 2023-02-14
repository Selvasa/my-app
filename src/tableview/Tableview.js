
import React, { useState,createContext,  } from "react";
import { Box, Checkbox, FormControlLabel, Typography, Grid, Button } from '@mui/material';
import { tablestyle } from './table';
import { sidebarlistitem } from './Export';

const myContext = createContext();
function Tableviewlist() {

    const [change, setChange] = useState(false);
    const [changes, setChanges] = useState(false);



    return (

        <Grid sx={tablestyle.root} item lg={12} md={12} sm={6}>
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
                <Button variant="contained">Deliver</Button>&emsp;
                <Button variant="contained" color="success">Pickup</Button>&emsp;
                <Button variant="contained" color="secondary">+ Add Table</Button>
            </Grid>
            <br></br><br></br>
            <Grid sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <Button variant="contained" > + Table Reservation</Button>
                <Button variant="contained" color="success"> + Contactless</Button>
                <Button variant="contained" color="secondary">Move Kot / Items</Button>
            </Grid>
            <br></br><br></br>
            <Grid sx={{ display: "flex", justifyContent: "end" }}>
                <FormControlLabel control={<Checkbox />} label="Blank Table" />
                <FormControlLabel control={<Checkbox />} label="Running Table" />
                <FormControlLabel control={<Checkbox />} label="Pointed Table" />
                <FormControlLabel control={<Checkbox />} label="Paid Table" />
                <FormControlLabel control={<Checkbox />} label="Running Kot Table" />
            </Grid>
            <br></br><br></br>
            <Grid item lg={12} md={12} sm={6} >
                <Typography>AC</Typography> <br></br>
                <Grid sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Grid sx={tablestyle.border} style={change ? tablestyle.gridacempty : tablestyle.gridac} onClick={() => setChange(!change)}>
                        <Typography>A1</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border} style={changes ? tablestyle.gridacempty : tablestyle.gridac} onClick={() => setChanges(!changes)}>
                        <Typography>A2</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border} style={tablestyle.gridacempty}>
                        <Typography>A3</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border} style={tablestyle.gridacempty}>
                        <Typography>A4</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border} style={tablestyle.gridac}>
                        <Typography>A5</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border} style={tablestyle.gridac}>
                        <Typography>A6</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <br></br><br></br>
            <Grid item lg={12} md={12} sm={6}  >
                <Typography>Non AC</Typography> <br></br>
                <Grid sx={{ display: "flex", justifyContent: "space-around" }} item lg={12} md={12} sm={6}>
                    <Grid sx={tablestyle.border} item lg={12} md={12} sm={6}>
                        <Typography>C1</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border} item lg={12} md={12} sm={6}>
                        <Typography>C2</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border} item lg={12} md={12} sm={6}>
                        <Typography>C3</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border} item lg={12} md={12} sm={6}>
                        <Typography>C4</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border} item lg={12} md={12} sm={6}>
                        <Typography>C5</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border} item lg={12} md={12} sm={6}>
                        <Typography>C6</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <br></br><br></br>
            <Grid item lg={12} md={12} sm={6}  >
                <Typography>Family</Typography> <br></br>
                <Grid sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Grid sx={tablestyle.border}>
                        <Typography>F1</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border}>
                        <Typography>F2</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border}>
                        <Typography>F3</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border}>
                        <Typography>F4</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border}>
                        <Typography>F5</Typography>
                    </Grid>
                    <Grid sx={tablestyle.border}>
                        <Typography>F6</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )


}

function Taskeffect() {
    const[obj,setObj]=useState({name:"yyyy",age:20,phone:7897899876})
    const [count, setCount] = useState(0);
    // let obj = { name: "xxxy", age: 20, phone: 789789986 }
    let value;
    if (obj.name == 'xxx') {
        value = obj.name;
    }
    else if (`${obj.phone}`.length == 10) {
        // return value=obj.phone;
        value = typeof `${obj.phone}`
    }
    else {
        value = obj.age;
    }

    return (
        <Box sx={tablestyle.tasteffect}>
            <Grid sx={tablestyle.gridallign}>
                <br></br>
                <Typography>{value}</Typography><br></br>
                <Typography>{count}</Typography><br></br>
                <Button onClick={() => setCount(count + 1)} variant="contained">Increment</Button>
                <br></br>
            </Grid>
        </Box>
    )
}

function Taskmap(props) {
    const [isshow, setIsshow] = useState(false)
    let { name, age } = props;

    // function Changestate(){
    //     console.log(isshow)
    //     setIsshow(!isshow);
    // }
    return (
        <Box>
            <Grid sx={[tablestyle.sidebar, tablestyle.tasteffect]}>
                <Typography>Mapping Sidebar List Item</Typography><br></br>
                {/* <Grid container >
                    <Grid item lg={1}>
                        Grid 1
                    </Grid>
                    <Grid item lg={1}>
                        Grid 2
                    </Grid>
                </Grid> */}
                <Grid>
                    <Grid container>
                        {sidebarlistitem.map((item, id) => {
                            return (
                                <>
                                    <Grid item lg={1} sx={{ cursor: 'pointer', paddingTop: 1, margin: 0, '&:hover': { color: 'red', borderTop: '2px solid red', fontSize:"17px" } }} >{item.dbname} </Grid><br></br> <br></br>
                                </>
                            )
                        })}
                    </Grid>
                    <Typography style={isshow ? { color: 'red' } : { color: 'green' }}>{name}  {age}</Typography>
                    <Button variant='outlined' onClick={() => { setIsshow(!isshow) }}>Shown</Button>
                </Grid>
                <Grid>
                </Grid>
            </Grid>
        </Box >
    )
}

function Tableview() {
    return (
        <Box sx={{ display: 'flex', }} >
            <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                <Box component="main" sx={{ padding: '30px', }}><br /><br />
                    {/* <Tableviewlist /><br /><br /><br /><br /> */}
                    {/* <Taskeffect /><br /><br /><br /><br />  */}
                    <Taskmap name='Muthu' age={20} /><br /><br /><br /><br />
                </Box>
            </Box>
        </Box>
    );
}
export default Tableview;