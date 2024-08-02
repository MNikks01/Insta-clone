import React from 'react'
import LeftSidebar from '../components/leftSidebar/LeftSidebar'

function ExplorePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* left sidebar */}
            <LeftSidebar />

            <div className='homeRight'>
                <h1>This is explore page</h1>
            </div>
        </div>
    )
}

export default ExplorePage