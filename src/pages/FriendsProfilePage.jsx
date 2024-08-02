import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { allPosts } from '../constants/allposts'

function FriendsProfilePage() {

    const { userId } = useParams()

    const [userIndex, setuserIndex] = useState(null)
    useEffect(() => {
        allPosts.map((post, i) => {
            post.userHandleId === userId && setuserIndex(i)
        })
    }, [userId])


    return (
        <div>
            <h1>{allPosts[userIndex]?.userHandleId}</h1>
            <img src={allPosts[userIndex]?.userAvatar} alt="" />
            <h3>{allPosts[userIndex]?.postLocation}</h3>
        </div>
    )
}

export default FriendsProfilePage