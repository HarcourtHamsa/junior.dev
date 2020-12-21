import React, { useRef, useEffect, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AppContext } from '../context'
import NavigationBar from '../components/NavigationBar'
import { auth } from '../firebase'

function Login() {
    const history = useHistory()
    const { setAuthData } = useContext(AppContext)

    const myRef = useRef(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        myRef.current.focus()
    }, [])

    function updateEmail(e) {
        setEmail(e.target.value)
    }

    function updatePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()  // prevent page reload

        auth.signInWithEmailAndPassword(email, password)
            .then(() => history.push("/dashboard"))
            .then(() => setAuthData(auth.currentUser))
            .catch(err => setErrorMessage(err.message))
    }

    return (
        <div className="bg-lavenda">
            <NavigationBar />
            <div className="container">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Welcome <span className="shadow">B</span>ack</h1>

                        {errorMessage ?
                            <div className="error-message">{errorMessage}</div>
                            : null}

                        <div className="mb-1">
                            <label htmlFor="email">Email</label>
                            <input
                                ref={myRef}
                                name="email"
                                value={email}
                                type="email"
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

                        <button>Log in</button>
                        <a href="/">Fogort password?</a>
                        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login
