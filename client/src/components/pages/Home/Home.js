import React from 'react';
import '../../../App.css';
import YearSection from './yearsSection/YearSection';
import MapChart from './videosection/MapChart';

function Home() {
    return (
        <>
            <MapChart />
            <YearSection></YearSection>
        </>
    )
}

export default Home;