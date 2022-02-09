import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Paper from "@mui/material/Paper";
export default function GatewayInfo(props) {
  const [GatewayInfo, setGatewayInfo] = useState({
    name: null,
    description: null,
    id: null,
    discoveryEnabled: null,
    createdAt: null,
    updatedAt: null,
    lastSeenAt: null,
    firstSeenAt: null,
    location: null,
  });
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Grpc-Metadata-Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5X2lkIjoiNTUyNzc0ZWEtMjJlNS00YzY1LWFhMjAtN2Y4NzU0Y2E5NjFkIiwiYXVkIjoiYXMiLCJpc3MiOiJhcyIsIm5iZiI6MTYzNzY1MTgwNSwic3ViIjoiYXBpX2tleSJ9._2OFZ7tfw6GYSbYk94M5RM17BwUGQB3IoGRZdqoGd_4'
      },
    };
    fetch(`https://chirpstack.igscsi4server.com/api/gateways/${props.gatewayID}`, requestOptions)
      .then(response => response.json())
      .then(data => setGatewayInfo({
        name: data.gateway.name,
        id: data.gateway.id,
        location: data.gateway.location,
        discoveryEnabled: data.gateway.discoveryEnabled,
        description: data.gateway.description,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        firstSeenAt: data.firstSeenAt,
        lastSeenAt: data.lastSeenAt,
      })).catch(function (error) {
        alert('Please Check your internet connection. Either their is no internet connection or the signals are weak');
      });
  }, [props.gatewayID])

  var date = new Date(GatewayInfo.lastSeenAt);
  var formattted_last_seen = date.toLocaleString()

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
<Paper sx={{padding:3}}>
        <table className="table table-striped  table-hover">
          <thead >
            <tr>
              <th>Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gateway Name</td>
              <td>{GatewayInfo.name}</td>
            </tr>
            <tr>
              <td>Gateway ID</td>
              <td>{GatewayInfo.id}</td>
            </tr>
            <tr>
              <td>Last Seen</td>
              <td>{formattted_last_seen}</td>
            </tr>
            <tr>
              <td>Gateway Description</td>
              <td>{GatewayInfo.description}</td>
            </tr>
            <tr>
              <td>Discovery Enabled</td>
              <td>{GatewayInfo.discoveryEnabled}</td>
            </tr>

          
          </tbody>
        </table>
        </Paper>
      </Grid>
    </>
  );
}

