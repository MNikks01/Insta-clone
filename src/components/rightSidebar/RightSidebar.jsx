import React from 'react'
import styles from '../../styles/RightSidebar.module.css'
import { redirect, useNavigate } from 'react-router-dom'

function RightSidebar() {

    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate('/messages')
    }

    return (
        <div className={styles.rightSidebar}>

            {/* top */}
            <div className={styles.top}>
                <img
                    src="https://images.unsplash.com/photo-1718899904984-bd1fc08416e4?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                    }} />

                <div className={styles.username}>
                    {/* username */}
                    <h2>_the_tech_nik</h2>
                    {/* usser handle id */}
                    <p>Nikhil Something</p>
                </div>


                {/* switch button */}
                <button onClick={handleRedirect}>Switch</button>
            </div>

            {/* mid */}
            <div>

            </div>

            {/* bottom */}
            <div>

            </div>

        </div>
    )
}

export default RightSidebar