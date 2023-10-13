import TimeTrackerCard from "components/molecules/expert/Timetrackercard";
import{Grid} from '@mui/material';
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { dispatch } from "store";
const TimeTracker = ()=>{
    // const location = useLocation();
    // const id=location.state.id;
    // useEffect(()=>{
    //     dispatch(getTimeTracker(id));
    // })
    return(
        <Grid container spacing={5}>
            <Grid item xs={12}></Grid>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={9}>
                <TimeTrackerCard />
            </Grid>
        </Grid>
    )
}
export default TimeTracker;