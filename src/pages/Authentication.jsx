import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

function Authentication() {

    const [showPage, setshowPage] = useState('signup')

    return (
        <div>
            {
                showPage === 'signin' ?
                    <SignIn
                        setshowPage={setshowPage}
                    /> :
                    <SignUp
                        setshowPage={setshowPage}
                    />
            }
        </div>
    )
}

export default Authentication