import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangeListener,
  createUserDocument,
  db,
} from "../utils/firebase/firebase.utils";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  userName: '',
  setUser: () => ''
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userName, setUsername] = useState('');

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocument(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  useEffect( () => {
   const getUser = async () =>{
      if(currentUser){
        const userDocRef = doc(db, "users", currentUser.uid);
        const userSnapshot = await getDoc(userDocRef);
        // console.log(userSnapshot.data().displayName)
        setUsername(userSnapshot.data().displayName)
      }
    
    }
    getUser()
  }, [currentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
