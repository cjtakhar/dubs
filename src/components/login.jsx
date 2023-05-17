import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await res.json()
            if (data.error) {
                setError(data.error)
            } else {
                localStorage.setItem('token', 'my_token')
                window.location.href = '/dubs'
            }
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="login-container">
            <div className="login">
                <form className="login-form" action="" onSubmit={handleSubmit}>
                    <h2 className="login-title">Enter</h2>
                    <input className="input" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <div className="button-container">
                    <button className="button" type="submit">Login</button>
                    <button className="button" type="button">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;