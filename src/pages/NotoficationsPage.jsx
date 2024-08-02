import React from 'react'
import LeftSidebar from '../components/leftSidebar/LeftSidebar'

function NotoficationsPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* left sidebar */}
            <LeftSidebar />

            <div className='homeRight'>
                <h1>This is notifications page</h1>
            </div>
        </div>
    )
}

export default NotoficationsPage