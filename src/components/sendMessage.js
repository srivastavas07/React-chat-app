import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { UilMessage } from '@iconscout/react-unicons'

function SendMessage() {
  const [msg, setMsg] = useState('');

  async function sendMessage(e) {
    e.preventDefault();
    
    if (msg.trim() === '') {
        return; // Do not proceed if msg is empty or contains only whitespace
      }

    const { uid, photoURL,displayName } = auth.currentUser;
    await addDoc(collection(db, 'message'), {
      text: msg,
      photoURL,
      uid,
      createAt: serverTimestamp(),
      displayName
      
  
    });

    setMsg('');
  }

  return (
    <div className='bg-gray-600 py-5 w-full fixed bottom-0 left-0 shadow-lg'>
      <form className="containerWrap flex" onSubmit={sendMessage}>
        <input
          className='input w-full Focus:outline-none input-bordered rounded-r-none'
          placeholder="Send Message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="w-auto rounded-r-lg text-white bg-gray-900 px-3.5 ml-1" type="submit"><UilMessage/></button>
      </form>
    </div>
  );
}

export default SendMessage;
