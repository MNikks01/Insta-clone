import React from 'react'
import styles from '../../styles/Feed.module.css'
import AllPosts from './AllPosts'

function FeedComp() {
    return (
        <div className={styles.feed}>
            <div className={styles.feedImg}>
                <img
                    src="https://images.unsplash.com/photo-1719727033346-00f93d18d7e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <img
                    src="https://images.unsplash.com/photo-1719727033346-00f93d18d7e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <img
                    src="https://images.unsplash.com/photo-1719727033346-00f93d18d7e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <img
                    src="https://images.unsplash.com/photo-1719727033346-00f93d18d7e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <img
                    src="https://images.unsplash.com/photo-1719727033346-00f93d18d7e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <img
                    src="https://images.unsplash.com/photo-1719727033346-00f93d18d7e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <img
                    src="https://images.unsplash.com/photo-1719727033346-00f93d18d7e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />

            </div>
            <div className={styles.allPosts}>
                <AllPosts />
            </div>
        </div>
    )
}

export default FeedComp