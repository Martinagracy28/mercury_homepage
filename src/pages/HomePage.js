import React, { useState } from 'react';
import Header from '../component/Header';
import HeroSec from '../component/HeroSec';
import MercuryFeaturesSec from '../component/MercuryFeaturesSec';
import ComparisonTBS from '../component/ComparisonTBS';
import LiabilityCentricSec from '../component/LiabilityCentricSec';
import TimeboundSec from '../component/TimeboundSec';

import AllStablecoinSec from '../component/AllStablecoinSec';
import MercuryFinanceSec from '../component/MercuryFinanceSec';
import JoinCommunity from '../component/JoinCommunity';
import Footer from '../component/Footer';
import { Sidebar } from '../component/sidebar/sidebar';


const HomePage = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div id="app-container"> {/* Container for app layout */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> {/* Sidebar component */}

        {/* Main content area */}
        <div className={`main-content ${isOpen ? "shifted" : "full"}`}>
            <Header isOpen={isOpen}/>
            <HeroSec />
            <TimeboundSec />
            <ComparisonTBS />
            <MercuryFeaturesSec />
            <LiabilityCentricSec />
            <AllStablecoinSec />
            <MercuryFinanceSec />
            <JoinCommunity />
            <Footer />
        </div>
    </div>
    )
}

export default HomePage;