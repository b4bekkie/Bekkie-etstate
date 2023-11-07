import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'; // Import 'signInWithPopup' for Google OAuth
import { app } from '../firbase.js'; // Ensure the correct path to your Firebase configuration
import { signInSuccess } from '../redux/user/userSlice.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      // Sign in with Google provider
       const result = await signInWithPopup(auth, provider);
       console.log(result)
       

       const res = await fetch('/api/auth/google', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           name: result.user.displayName,
           email: result.user.email,
           photo: result.user.photoURL,
         }),
       });
       const data = await res.json();
       dispatch(signInSuccess(data));
       navigate('/');
    } catch (error) {
      console.log("Could not sign in with Google:", error);
    }
  }

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white rounded-lg p-3 opacity-90 disabled:opacity-80 transform transition-transform duration-200 hover:scale-105"
    >
      CONTINUE WITH GOOGLE
    </button>
  );
}

export default OAuth;
