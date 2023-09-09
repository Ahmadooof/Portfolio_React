import React, { useEffect } from 'react';
import '../../../App.css';
import YearSection from './yearsSection/YearSection';
import MapChart from './videosection/MapChart';
import { useHeaders } from '../../../utilities/headercontext';
import axios from 'axios';


function Home() {
    const { headers, setHeaders } = useHeaders();

    // useEffect(() => {
    //   // const localhost = "localhost:4000"
    //   const domain = "https://backend.ahmadhome.com"
    //   fetch(`${domain}/ip`)
    //     .then(response => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return response.json();
    //     })
    //     .then(data => {
    //       // const ip = data.ip;
    //       // console.log('IP Address:', ip);
    //       // setHeaders({ ...headers, ipAddress: ip });
    //     })
    //     .catch(error => {
    //       // console.error('Error getting IP address:', error);
    //     });
    // }, []);

    return (
        <>
            <MapChart />
            <YearSection></YearSection>
        </>
    )
}

export default Home;