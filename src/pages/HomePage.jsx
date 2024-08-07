import React from 'react'
import LeftSidebar from '../components/leftSidebar/LeftSidebar'
import FeedComp from '../components/feed/FeedComp'
import RightSidebar from '../components/rightSidebar/RightSidebar'
import '../styles/HomePage.css'
import { auth } from '../firebase'
import SignIn from './SignIn'

function HomePage() {

    const userId = auth?.currentUser?.uid

    if (userId) {
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
    } else {
        return (
            <SignIn />
        )
    }


}

export default HomePage