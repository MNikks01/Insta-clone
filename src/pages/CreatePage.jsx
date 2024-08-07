import React, { useState } from 'react'
import LeftSidebar from '../components/leftSidebar/LeftSidebar'
import '../styles/Createpage.css'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import dB, { auth, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function CreatePage() {

    const [postText, setpostText] = useState('')
    const [picture, setpicture] = useState(null)
    const [errorMessage, seterrorMessage] = useState('')
    const [progress, setprogress] = useState(0)
    const userId = auth.currentUser?.uid

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files[0]) {
            setpicture(e.target.files[0])
        }
    }


    const createPost = (e) => {
        e.preventDefault();

        if (picture || postText) {
            if (picture) {
                const metadata = {
                    contentType: 'image/jpeg'
                };

                const storageRef = ref(storage, `${userId}/` + picture.name);
                const uploadTask = uploadBytesResumable(storageRef, picture, metadata);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        // monitor the progress
                        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        setprogress(prog)
                    },
                    (err) => {
                        seterrorMessage(err.message)
                    },
                    () => {
                        // success
                        getDownloadURL(uploadTask.snapshot.ref)
                            .then((downloadURL) => {
                                addDoc(collection(dB, "USERS", userId, "POSTS"), {
                                    POST_TEXT: postText,
                                    POST_TIMESTAMP: serverTimestamp(),
                                    POST_IIMAGE: downloadURL
                                }).then(() => {
                                    setpostText("")
                                    setprogress(0)
                                }).catch((err) => {
                                    seterrorMessage(err.message)
                                })
                            }).catch((err) => {
                                seterrorMessage(err.message)
                            })
                    },
                )
            } else {
                addDoc(collection(dB, "USERS", userId, "POSTS"), {
                    POST_TEXT: postText,
                    POST_TIMESTAMP: serverTimestamp(),
                    POST_IMAGE: ''
                }).then(() => {
                    setpostText("")
                }).catch((err) => {
                    seterrorMessage(err.message)
                })
            }
        } else {
            seterrorMessage('please select image or type something')
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* left sidebar */}
            <LeftSidebar />

            <div className='homeRight'>
                <div className='postCreate'>
                    <textarea
                        type="text"
                        placeholder='Type here...'
                        rows={3}
                        cols={70}
                        value={postText}
                        onChange={(e) => setpostText(e.target.value)}
                    />
                    <div className='typeFile'>
                        <input
                            type="file"
                            onChange={handleChange}
                        />
                        <button onClick={createPost}>Post</button>
                    </div>
                    <h1 style={{ color: 'red' }}>{errorMessage}</h1>
                    <progress min={0} value={progress} />
                </div>
            </div>
        </div>
    )
}

export default CreatePage