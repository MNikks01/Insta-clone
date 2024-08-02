import React from 'react'
import OnePost from './OnePost'
import { allPosts } from '../../constants/allposts'

function AllPosts() {

    return (
        <>
            {
                allPosts.map((post, i) => (
                    <OnePost
                        key={i}
                        postImage={post.postImage}
                        userHandleId={post.userHandleId}
                        postTimestamp={post.postTimestamp}
                        postLocation={post.postLocation}
                        userAvatar={post.userAvatar}
                        likesCount={post.likesCount}
                        postCaption={post.postCaption}
                        commentCount={post.commentCount}
                    />
                ))
            }

        </>
    )
}

export default AllPosts