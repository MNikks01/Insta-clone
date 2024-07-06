import React from 'react'
import LeftSidebar from '../components/leftSidebar/LeftSidebar'
import FeedComp from '../components/feed/FeedComp'
import RightSidebar from '../components/rightSidebar/RightSidebar'
import '../styles/HomePage.css'

function HomePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* left sidebar */}
            <LeftSidebar />

            <div className='homeRight'>
                {/* feed */}
                <FeedComp />

                {/* right sidebar */}
                <RightSidebar />
            </div>
        </div>
    )
}

export default HomePage