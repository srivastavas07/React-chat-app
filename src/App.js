import React from 'react'
import SignIn from './components/SignIn'
import Chat from './components/Chat';
import { auth } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
function App() {
    const [user] = useAuthState(auth)
    return (
        <div className="w-full">
            {user ? <Chat /> : <SignIn />}

        </div>
    )
}

export default App;
