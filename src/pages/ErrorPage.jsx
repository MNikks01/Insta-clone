import React from 'react'

function ErrorPage() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <h1>404 - Page Not Found</h1>
            <p
                onClick={() => window.history.back()}
                style={{
                    color: 'blue',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                }}
            >go back</p>
        </div>
    )
}

export default ErrorPage