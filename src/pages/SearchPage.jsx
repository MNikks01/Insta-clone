import React from 'react'
import LeftSidebar from '../components/leftSidebar/LeftSidebar'

function SearchPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* left sidebar */}
            <LeftSidebar />

            <div className='homeRight'>
                <h1>This is search page</h1>
            </div>
        </div>
    )
}

export default SearchPage