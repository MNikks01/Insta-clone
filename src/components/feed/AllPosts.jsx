import React, { useEffect, useState } from 'react'
import OnePost from './OnePost'
// import { allPosts } from '../../constants/allposts'
import { collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import dB, { auth } from '../../firebase'

function AllPosts() {

    const userId = auth.currentUser.uid

    const [allPosts, setallPosts] = useState([])
    useEffect(() => {
        const collectionPath = collection(dB, 'USERS', userId, 'POSTS')
        const sorted = query(
            collectionPath,
            orderBy('POST_TIMESTAMP', 'desc'),
            limit(4),
        )
        const subscribe = onSnapshot(sorted, (querySnapshot) => {
            querySnapshot.forEach((oneDoc) =>
                setallPosts(prev => { return [...prev, oneDoc.data()] })
            )
        })
        return () => subscribe();
    }, [userId])

    return (
        <>
            {
                allPosts.map((post, i) => (
                    <OnePost
                        key={i}
                        postImage={post?.POST_IIMAGE}
                        userHandleId={'_the_tech_nik'}
                        postTimestamp={post?.POST_TIMESTAMP}
                        postLocation={'India'}
                        userAvatar={'https://images.unsplash.com/photo-1719727033346-00f93d18d7e8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                        likesCount={1278}
                        postCaption={post?.POST_TEXT}
                        commentCount={123}
                    />
                ))
            }

        </>
    )
}

export default AllPosts