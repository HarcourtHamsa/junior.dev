import React, { useRef, useEffect, useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import { Link, useHistory } from 'react-router-dom'
import { auth, firestore } from '../firebase'

function Signup() {
    const history = useHistory()

    const myRef = useRef(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    // componentDidMount
    useEffect(() => {
        myRef.current.focus()
    }, [])

    async function addDataToDB() {
        let result = await new Promise((resolve, reject) => {
            resolve(
                firestore.collection('users').add({
                    displayName: username,
                    email,
                    password
                })
            )
        })

        return result
    }

    function updateEmail(e) {
        setEmail(e.target.value)
    }

    function updatePassword(e) {
        setPassword(e.target.value)
    }

    function updateUsername(e) {
        setUsername(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()  // prevent page reload

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => addDataToDB())
            .then(() => history.push("/login"))
            .catch(err => setErrorMessage(err.message))

    }

    return (
        <div className="bg-lavenda">
            <NavigationBar />
            <div className="container">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Create A Free <span className="shadow">A</span>ccount</h1>

                        {errorMessage ?
                            <div className="error-message">{errorMessage}</div>
                            : null}

                        <div className="mb-1">
                            <label htmlFor="username">Username</label>
                            <input
                                ref={myRef}
                                type="text"
                                name="username"
                                value={username}
                                onChange={updateUsername}
                                id="username" />
                        </div>

                        <div className="mb-1">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                id="email"
                                onChange={updateEmail} />
                        </div>

                        <div className="mb-1">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                id="password"
                                onChange={updatePassword} />
                        </div>

                        <button>Create Account</button>
                        <a href="/">Fogort password?</a>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Signup
