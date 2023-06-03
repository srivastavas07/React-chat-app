import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from "../firebase"
function SignIn() {
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there 👋🏻..</h1>
                        <p className="py-6 leading-9 tracking-wider">Welcome to my chat app. Created by K007. Be respectfull towards others, meet new people, make connections in one shared room..ENJOY 💬</p>
                        <button className="btn btn-primary" onClick={signInWithGoogle}>Google Sign In..</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;