import React,{useContext,useEffect,useState} from "react";
import { useRouter } from 'next/router';
import { ResponsiveContainer } from "recharts";
import TempGauge from "../components/ui/LiveData/TempGauge";
import HumidityGauge from "../components/ui/LiveData/HumidityGauge";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Layout from "../Layout/Layout"
import { DataStore } from '../utils/DataStore';
import axios from 'axios'

export default function LiveData({}) {
  const router = useRouter();
  const { state} = useContext(DataStore);
  const { userInfo } = state;

  const[lastEntry79f9,setLastEntry79f9]=useState([])
  const[lastEntry79fd,setLastEntry79fd]=useState([])
  const[lastEntry7a0e,setLastEntry7a0e]=useState([])
  const[lastEntry7a01,setLastEntry7a01]=useState([])
  const[lastEntry79fe,setLastEntry79fe]=useState([])
  const[lastEntry7a0a,setLastEntry7a0a]=useState([])
  
  async function fetch() {
    const { data } = await axios.get(`/api/lastEntries`);
    await setLastEntry79f9(data.lastEntry79f9);
    await setLastEntry79fd(data.lastEntry79fd);
    await setLastEntry7a0e(data.lastEntry7a0e);
    await setLastEntry7a01(data.lastEntry7a01);
    await setLastEntry79fe(data.lastEntry79fe);
    await setLastEntry7a0a(data.lastEntry7a0a);
    console.log('Latest Entries Fetched')
}

  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
  fetch();
  }, [userInfo, router]);


  // const tempratureAlarmOff = () => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Grpc-Metadata-Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5X2lkIjoiNTUyNzc0ZWEtMjJlNS00YzY1LWFhMjAtN2Y4NzU0Y2E5NjFkIiwiYXVkIjoiYXMiLCJpc3MiOiJhcyIsIm5iZiI6MTYzNzY1MTgwNSwic3ViIjoiYXBpX2tleSJ9._2OFZ7tfw6GYSbYk94M5RM17BwUGQB3IoGRZdqoGd_4'
  //     },
  //     body: JSON.stringify({
  //       deviceQueueItem: {
  //         confirmed: true,
  //         data: '+gcMRE00PTNI',
  //         devEUI: `ff0006f201000001`,
  //         fCnt: 0,
  //         fPort: 7
  //       }
  //     }),
  //   };
  //   fetch(`https://chirpstack.igscsi4server.com/api/devices/ff0006f201000001/queue`, requestOptions)
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }
  
  //   const tempratureAlarmOn = () => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Grpc-Metadata-Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5X2lkIjoiNTUyNzc0ZWEtMjJlNS00YzY1LWFhMjAtN2Y4NzU0Y2E5NjFkIiwiYXVkIjoiYXMiLCJpc3MiOiJhcyIsIm5iZiI6MTYzNzY1MTgwNSwic3ViIjoiYXBpX2tleSJ9._2OFZ7tfw6GYSbYk94M5RM17BwUGQB3IoGRZdqoGd_4'
  //     },
  //     body: JSON.stringify({
  //       deviceQueueItem: {
  //         confirmed: true,
  //         data: '+gcMRE00PTRJ',
  //         devEUI: `ff0006f201000001`,
  //         fCnt: 0,
  //         fPort: 7
  //       }
  //     }),
  //   };
  //   fetch(`https://chirpstack.igscsi4server.com/api/devices/ff0006f201000001/queue`, requestOptions)
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }




  // const humidityAlarmOff= () => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Grpc-Metadata-Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5X2lkIjoiNTUyNzc0ZWEtMjJlNS00YzY1LWFhMjAtN2Y4NzU0Y2E5NjFkIiwiYXVkIjoiYXMiLCJpc3MiOiJhcyIsIm5iZiI6MTYzNzY1MTgwNSwic3ViIjoiYXBpX2tleSJ9._2OFZ7tfw6GYSbYk94M5RM17BwUGQB3IoGRZdqoGd_4'
  //     },
  //     body: JSON.stringify({
  //       deviceQueueItem: {
  //         confirmed: true,
  //         data: '+gcMRE01PTNJ',
  //         devEUI: `ff0006f201000001`,
  //         fCnt: 0,
  //         fPort: 7
  //       }
  //     }),
  //   };
  //   fetch(`https://chirpstack.igscsi4server.com/api/devices/ff0006f201000001/queue`, requestOptions)
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }
  
  //   const humidityAlarmOn = () => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Grpc-Metadata-Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5X2lkIjoiNTUyNzc0ZWEtMjJlNS00YzY1LWFhMjAtN2Y4NzU0Y2E5NjFkIiwiYXVkIjoiYXMiLCJpc3MiOiJhcyIsIm5iZiI6MTYzNzY1MTgwNSwic3ViIjoiYXBpX2tleSJ9._2OFZ7tfw6GYSbYk94M5RM17BwUGQB3IoGRZdqoGd_4'
  //     },
  //     body: JSON.stringify({
  //       deviceQueueItem: {
  //         confirmed: true,
  //         data: '+gcMRE01PTRK',
  //         devEUI: `ff0006f201000001`,
  //         fCnt: 0,
  //         fPort: 7
  //       }
  //     }),
  //   };
  //   fetch(`https://chirpstack.igscsi4server.com/api/devices/ff0006f201000001/queue`, requestOptions)
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }




  // // 79f9

  // if(lastEntry79f9.length>0){
  //   if(lastEntry79f9[0].temprature<20||lastEntry79f9[0].temprature>26){
  //     tempratureAlarmOn()
  //     setInterval(function(){ 
  //       tempratureAlarmOff()
  //   }, 60 * 1000);

  //   }
  // }
  // if(lastEntry79f9.length>0){
  //   if(lastEntry79f9[0].humidity<40||lastEntry79f9[0].humidity>60){
  //     humidityAlarmOn()
  //     setInterval(function(){ 
  //       humidityAlarmOff()
  //   }, 60 * 1000);
  //   }
  // }



  // // 79fd

  // if(lastEntry79fd.length>0){
  //   if(lastEntry79fd[0].temprature<20||lastEntry79fd[0].temprature>26){
  //     tempratureAlarmOn()
  //     setInterval(function(){ 
  //       tempratureAlarmOff()
  //   }, 60 * 1000);

  //   }
  // }
  // if(lastEntry79fd.length>0){
  //   if(lastEntry79fd[0].humidity<40||lastEntry79fd[0].humidity>60){
  //     humidityAlarmOn()
  //     setInterval(function(){ 
  //       humidityAlarmOff()
  //   }, 60 * 1000);
  //   }
  // }


  // // 7a0e

  // if(lastEntry7a0e.length>0){
  //   if(lastEntry7a0e[0].temprature<20||lastEntry7a0e[0].temprature>26){
  //     tempratureAlarmOn()
  //     setInterval(function(){ 
  //       tempratureAlarmOff()
  //   }, 60 * 1000);

  //   }
  // }
  // if(lastEntry7a0e.length>0){
  //   if(lastEntry7a0e[0].humidity<40||lastEntry7a0e[0].humidity>60){
  //     humidityAlarmOn()
  //     setInterval(function(){ 
  //       humidityAlarmOff()
  //   }, 60 * 1000);
  //   }
  // }


  // // 7a01

  // if(lastEntry7a01.length>0){
  //   if(lastEntry7a01[0].temprature<20||lastEntry7a01[0].temprature>26){
  //     tempratureAlarmOn()
  //     setInterval(function(){ 
  //       tempratureAlarmOff()
  //   }, 60 * 1000);

  //   }
  // }
  // if(lastEntry7a01.length>0){
  //   if(lastEntry7a01[0].humidity<40||lastEntry7a01[0].humidity>60){
  //     humidityAlarmOn()
  //     setInterval(function(){ 
  //       humidityAlarmOff()
  //   }, 60 * 1000);
  //   }
  // }


  // // 79fe

  // if(lastEntry79fe.length>0){
  //   if(lastEntry79fe[0].temprature<20||lastEntry79fe[0].temprature>26){
  //     tempratureAlarmOn()
  //     setInterval(function(){ 
  //       tempratureAlarmOff()
  //   }, 60 * 1000);

  //   }
  // }
  // if(lastEntry79fe.length>0){
  //   if(lastEntry79fe[0].humidity<40||lastEntry79fe[0].humidity>60){
  //     humidityAlarmOn()
  //     setInterval(function(){ 
  //       humidityAlarmOff()
  //   }, 60 * 1000);
  //   }
  // }


  // // 7a0a

  // if(lastEntry7a0a.length>0){
  //   if(lastEntry7a0a[0].temprature<20||lastEntry7a0a[0].temprature>26){
  //     tempratureAlarmOn()
  //     setInterval(function(){ 
  //       tempratureAlarmOff()
  //   }, 60 * 1000);

  //   }
  // }
  // if(lastEntry7a0a.length>0){
  //   if(lastEntry7a0a[0].humidity<40||lastEntry7a0a[0].humidity>60){
  //     humidityAlarmOn()
  //     setInterval(function(){ 
  //       humidityAlarmOff()
  //   }, 60 * 1000);
  //   }
  // }



  setInterval(function(){ 
    fetch()
  }, 300000);
  return (
    <Layout>
      <Grid container>
        {/* 79f9 */}
        <Grid
          component={Paper}
          style={{ border: "2px solid #9013FE", borderRadius: "1rem" }}
          className="p-0"
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
        >
          <ResponsiveContainer className="p-0" width="100%">
            <>
              <div
                className="p-1"
                style={{
                  backgroundColor: "#9013FE",
                  borderRadius: "1rem",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <h5>Zone 1</h5>
              </div>
              <Grid sx={{ p: 2 }} container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h6" align="center" >Temprature:</Typography>
                  {lastEntry79f9.length > 0 ? (
                    <>
                      <div style={{ position: 'relative', left: '-5.4rem' }}>
                        <TempGauge value={lastEntry79f9[0].temprature} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{lastEntry79f9[0].temprature} °C</Typography>
                    </>) : (<>
                      <div style={{ position: 'relative', left: '-5.4rem' }}>
                        <TempGauge value={18} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{`--`} °C</Typography>
                    </>)}


                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" align="center" >Humidity:</Typography>
                  {lastEntry79f9.length > 0 ? (
                    <>
                      <div style={{ position: 'relative', left: '-6rem' }}>
                        <HumidityGauge value={lastEntry79f9[0].humidity} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{lastEntry79f9[0].humidity} %</Typography>
                    </>) : (<>
                      <div style={{ position: 'relative', left: '-6rem' }}>
                        <HumidityGauge value={30} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{`0`} %</Typography>
                    </>)}



                </Grid>

              </Grid>
            </>
          </ResponsiveContainer>
        </Grid>

        {/* 79fd */}
        <Grid
          component={Paper}
          style={{ border: "2px solid #9013FE", borderRadius: "1rem" }}
          className="p-0"
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
        >
          <ResponsiveContainer className="p-0" width="100%">
            <>
              <div
                className="p-1"
                style={{
                  backgroundColor: "#9013FE",
                  borderRadius: "1rem",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <h5>Zone 2</h5>
              </div>
              <Grid sx={{ p: 2 }} container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h6" align="center" >Temprature:</Typography>

                  {lastEntry79fd.length > 0 ? (
                    <>
                      <div style={{ position: 'relative', left: '-5.4rem' }}>
                        <TempGauge value={lastEntry79fd[0].temprature} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{lastEntry79fd[0].temprature} °C</Typography>
                    </>) : (<>
                      <div style={{ position: 'relative', left: '-5.4rem' }}>
                        <TempGauge value={18} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{`--`} °C</Typography>
                    </>)}


                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" align="center" >Humidity:</Typography>
                  {lastEntry79fd.length > 0 ? (
                    <>
                      <div style={{ position: 'relative', left: '-6rem' }}>
                        <HumidityGauge value={lastEntry79fd[0].humidity} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{lastEntry79fd[0].humidity} %</Typography>
                    </>) : (<>
                      <div style={{ position: 'relative', left: '-6rem' }}>
                        <HumidityGauge value={30} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{`0`} %</Typography>
                    </>)}


                </Grid>

              </Grid>

            </>
          </ResponsiveContainer>
        </Grid>

        {/*   7a0e*/}
        <Grid
          component={Paper}
          style={{ border: "2px solid #9013FE", borderRadius: "1rem" }}
          className="p-0"
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
        >
          <ResponsiveContainer className="p-0" width="100%">
            <>
              <div
                className="p-1"
                style={{
                  backgroundColor: "#9013FE",
                  borderRadius: "1rem",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <h5>Zone 3</h5>
              </div>
              <Grid sx={{ p: 2 }} container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h6" align="center" >Temprature:</Typography>
                
                  {lastEntry7a0e.length > 0 ? (
                    <>
                      <div style={{ position: 'relative', left: '-5.4rem' }}>
                        <TempGauge value={lastEntry7a0e[0].temprature} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{lastEntry7a0e[0].temprature} °C</Typography>
                    </>) : (<>
                      <div style={{ position: 'relative', left: '-5.4rem' }}>
                        <TempGauge value={18} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{`--`} °C</Typography>
                    </>)}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" align="center" >Humidity:</Typography>

                  {lastEntry7a0e.length > 0 ? (
                    <>
                      <div style={{ position: 'relative', left: '-6rem' }}>
                        <HumidityGauge value={lastEntry7a0e[0].humidity} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{lastEntry7a0e[0].humidity} %</Typography>
                    </>) : (<>
                      <div style={{ position: 'relative', left: '-6rem' }}>
                        <HumidityGauge value={30} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{`0`} %</Typography>
                    </>)}

                </Grid>

              </Grid>

            </>
          </ResponsiveContainer>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          component={Paper}
          style={{ border: "2px solid #9013FE", borderRadius: "1rem" }}
          className="p-0"
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
        >
          <ResponsiveContainer className="p-0" width="100%">
            <>
              <div
                className="p-1"
                style={{
                  backgroundColor: "#9013FE",
                  borderRadius: "1rem",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <h5>Zone 4</h5>
              </div>
              <Grid sx={{ p: 2 }} container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h6" align="center" >Temprature:</Typography>
                
                  {lastEntry7a0a.length > 0 ? (
                    <>
                      <div style={{ position: 'relative', left: '-5.4rem' }}>
                        <TempGauge value={lastEntry7a0a[0].temprature} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{lastEntry7a0a[0].temprature} °C</Typography>
                    </>) : (<>
                      <div style={{ position: 'relative', left: '-5.4rem' }}>
                        <TempGauge value={18} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{`--`} °C</Typography>
                    </>)}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" align="center" >Humidity:</Typography>
                  {lastEntry7a0a.length > 0 ? (
                    <>
                      <div style={{ position: 'relative', left: '-6rem' }}>
                        <HumidityGauge value={lastEntry7a0a[0].humidity} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{lastEntry7a0a[0].humidity} %</Typography>
                    </>) : (<>
                      <div style={{ position: 'relative', left: '-6rem' }}>
                        <HumidityGauge value={30} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{`0`} %</Typography>
                    </>)}
                </Grid>

              </Grid>

            </>
          </ResponsiveContainer>
        </Grid>

        <Grid
          component={Paper}
          style={{ border: "2px solid #9013FE", borderRadius: "1rem" }}
          className="p-0"
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
        >
          <ResponsiveContainer className="p-0" width="100%">
            <>
              <div
                className="p-1"
                style={{
                  backgroundColor: "#9013FE",
                  borderRadius: "1rem",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <h5>Zone 5</h5>
              </div>
              <Grid sx={{ p: 2 }} container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h6" align="center" >Temprature:</Typography>
                 
                  {lastEntry79fe.length > 0 ? (
                    <>
                      <div style={{ position: 'relative', left: '-5.4rem' }}>
                        <TempGauge value={lastEntry79fe[0].temprature} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{lastEntry79fe[0].temprature} °C</Typography>
                    </>) : (<>
                      <div style={{ position: 'relative', left: '-5.4rem' }}>
                        <TempGauge value={18} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{`--`} °C</Typography>
                    </>)}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" align="center" >Humidity:</Typography>

                  {lastEntry79fe.length > 0 ? (
                    <>
                      <div style={{ position: 'relative', left: '-6rem' }}>
                        <HumidityGauge value={lastEntry79fe[0].humidity} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{lastEntry79fe[0].humidity} %</Typography>
                    </>) : (<>
                      <div style={{ position: 'relative', left: '-6rem' }}>
                        <HumidityGauge value={30} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{`0`} %</Typography>
                    </>)}

                </Grid>

              </Grid>

            </>
          </ResponsiveContainer>
        </Grid>


        <Grid
          component={Paper}
          style={{ border: "2px solid #9013FE", borderRadius: "1rem" }}
          className="p-0"
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
        >
          <ResponsiveContainer className="p-0" width="100%">
            <>
              <div
                className="p-1"
                style={{
                  backgroundColor: "#9013FE",
                  borderRadius: "1rem",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <h5>Zone 6</h5>
              </div>
              <Grid sx={{ p: 2 }} container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h6" align="center" >Temprature:</Typography>
                 
                  {lastEntry7a01.length > 0 ? (
                    <>
                      <div style={{ position: 'relative', left: '-5.4rem' }}>
                        <TempGauge value={lastEntry7a01[0].temprature} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{lastEntry7a01[0].temprature} °C</Typography>
                    </>) : (<>
                      <div style={{ position: 'relative', left: '-5.4rem' }}>
                        <TempGauge value={18} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{`--`} °C</Typography>
                    </>)}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" align="center" >Humidity:</Typography>

                  {lastEntry7a01.length > 0 ? (
                    <>
                      <div style={{ position: 'relative', left: '-6rem' }}>
                        <HumidityGauge value={lastEntry7a01[0].humidity} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{lastEntry7a01[0].humidity} %</Typography>
                    </>) : (<>
                      <div style={{ position: 'relative', left: '-6rem' }}>
                        <HumidityGauge value={30} />
                      </div>
                      <Typography fontWeight={800} variant="h5" align="center" >{`0`} %</Typography>
                    </>)}
                </Grid>

              </Grid>

            </>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </Layout>
  );
}

