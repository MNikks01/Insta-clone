import React, { useState, useEffect } from 'react'
import styles from '../../styles/LeftSidebar.module.css'
import { FaThreads } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5";

import { allOptions } from '../../constants/allposts'
import { Link } from 'react-router-dom';

function LeftSidebar() {

    return (
        <div className={styles.leftSidebar}>
            <div className={styles.leftSidebarTop}>
                <img src="Images/logo2.png" alt="" />

                <div className={styles.alloptions}>
                    {
                        allOptions.map((option, i) => (
                            <Link to={option.redirectTo} key={i}>
                                <div className={styles.oneOption}>
                                    <option.icon style={{
                                        fontSize: '22px'
                                    }} />
                                    <h1>{option.title}</h1>
                                </div>
                            </Link>
                        ))
                    }
                    <Link to={'/profile'}>
                        <div className={styles.oneOption}>
                            <img
                                src="https://images.unsplash.com/photo-1718899904984-bd1fc08416e4?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                style={{
                                    width: '25px',
                                    height: '25px',
                                    borderRadius: '50%',
                                }} />
                            <h1>Profile</h1>
                        </div>
                    </Link>
                </div>
            </div>

            <div className={styles.leftSidebarBottom}>
                <Link to={'/threads'}>
                    <div className={styles.oneOption}>
                        <FaThreads style={{
                            fontSize: '22px'
                        }} />
                        <h1>Threads</h1>
                    </div>
                </Link>
                <div className={styles.oneOption}>
                    <IoMenuOutline style={{
                        fontSize: '22px'
                    }} />
                    <h1>More</h1>
                </div>
            </div>

        </div>
    )
}

export default LeftSidebar