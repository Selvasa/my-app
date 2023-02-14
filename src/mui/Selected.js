
import { Grid, InputLabel, Box ,Button } from "@mui/material";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { useState } from "react";

export default function Apps() {
    const [countrysel, setcountrysel] = useState(null);
    const [statesel, setstatesel] = useState(null);
    const [citysel, setcitysel] = useState(null);

    return (
        <Grid display={'flex'} justifyContent={'center'}>
            <Box sx={{ width: '100%', maxWidth: 400}}><br />
                <Grid item md={4} sx={6} xs={12}  >
                    <InputLabel id="demo-simple-select-label"> Select Your Country</InputLabel><br />
                    <Select
                        options={Country.getAllCountries()}
                        getOptionLabel={(options) => {
                            return options["name"];
                        }}
                        value={countrysel}
                        onChange={(item) => {
                            setcountrysel(item);
                        }}
                    />
                </Grid><br></br>
                <Grid item md={4} sx={6} xs={12}>
                    <InputLabel id="demo-simple-select-label"> Select Your State</InputLabel><br />
                    <Select
                        options={State?.getStatesOfCountry(countrysel?.isoCode)}
                        getOptionLabel={(options) => {
                            return options["name"];
                        }}
                        value={statesel}
                        onChange={(item) => {
                            setstatesel(item);
                        }}
                    /> </Grid><br></br>
                <Grid item md={4} sx={6} xs={12}>
                    <InputLabel id="demo-simple-select-label"> Select Your City</InputLabel><br />
                    <Select
                        options={City.getCitiesOfState(
                            statesel?.countryCode,
                            statesel?.isoCode
                        )}
                        getOptionLabel={(options) => {
                            return options["name"];
                        }}
                        value={citysel}
                        onChange={(item) => {
                            setcitysel(item);
                        }}
                    />
                </Grid><br/><br/>
                {/* <Grid item md={4} display='flex' justifyContent={'start'}>
                    <Button variant='outlined' color='success' size='small'> Submit </Button>
                </Grid> */}
            </Box>
        </Grid>
    );
}
