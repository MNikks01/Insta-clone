import React from 'react'
import styles from '../../styles/LeftSidebar.module.css'

import { IoMdHome } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaHome, FaRegCompass } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { LuPlusSquare } from "react-icons/lu";
import { FaThreads } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5";

function LeftSidebar() {

    const allOptions = [
        { icon: IoMdHome, title: 'Home' },
        { icon: IoSearchOutline, title: 'Search' },
        { icon: FaRegCompass, title: 'Explore' },
        { icon: IoMdHome, title: 'Reels' },
        { icon: RiMessengerLine, title: 'Messages' },
        { icon: FaRegHeart, title: 'Notifications' },
        { icon: LuPlusSquare, title: 'Create' },
    ]

    return (
        <div className={styles.leftSidebar}>
            <div className={styles.leftSidebarTop}>
                <img src="Images/logo2.png" alt="" />

                <div className={styles.alloptions}>
                    {
                        allOptions.map((option, i) => (
                            <div key={i} className={styles.oneOption}>
                                <option.icon style={{
                                    fontSize: '22px'
                                }} />
                                <h1>{option.title}</h1>
                            </div>
                        ))
                    }
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
                </div>
            </div>

            <div className={styles.leftSidebarBottom}>
                <div className={styles.oneOption}>
                    <FaThreads style={{
                        fontSize: '22px'
                    }} />
                    <h1>Threads</h1>
                </div>
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