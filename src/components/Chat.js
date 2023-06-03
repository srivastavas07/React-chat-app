import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import SendMessage from './sendMessage';

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'message'), orderBy('createAt'), limit(50));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setMessages(data);
    });

    return () => {
      unsubscribe(); // Unsubscribe from the snapshot listener when component unmounts
    };
  }, []);


  const CurrentUser = auth.currentUser
  return (
    <div className="bg-transparent pb-44 pt-20 containerWrap px-5">
      <div className="navbar pt-3 pb-3  flex justify-around fixed top-0 left-0 bg-gray-600">
        <p className="btn btn-ghost normal-case text-xl text-white">kChat07</p>
        <button className="btn btn-black text-white" onClick={() => auth.signOut()}>Sign Out</button>
      </div>
      {messages.map(({ id, text, photoURL, displayName, createAt, uid }) => (

        <div key={id}>
          <div className={`chat mb-5 ${uid === CurrentUser.uid ? "chat-end" : "chat-start"}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={photoURL} alt="user" />
              </div>
            </div>
            <div className={`chat-header mb-1`}>
              {displayName}
            </div>
            <div className={`chat-bubble mb-1 text-white ${uid === CurrentUser.uid ? "bg-blue-500" : "bg-gray-600"}`}>{text}</div>
            <time className="text-xs opacity-50"></time>
            {/* <div className="chat-footer opacity-50">
              Delivered
            </div> */}
          </div>
        </div>
      ))}
      <SendMessage />
    </div>
  );
}

export default Chat;
