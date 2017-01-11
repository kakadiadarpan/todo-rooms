import * as firebase from 'firebase';
import { saveTodos, saveTodoRooms } from '../utilities/storageUtility';
import { browserHistory } from 'react-router';

/* initialize firebase */
const config = {
  apiKey: "AIzaSyAFYNAvULoK1Df8rEZdBowdjX7TfEPf0G8",
  authDomain: "todo-rooms.firebaseapp.com",
  databaseURL: "https://todo-rooms.firebaseio.com",
  storageBucket: "todo-rooms.appspot.com",
  messagingSenderId: "709791003881"
};

/* unique identifier */
let todoRoomsRef;
let todosRef;
let usersRef;
let userId;

export const firebaseConfig = firebase.initializeApp(config);

/*watch on auth*/
if(localStorage.getItem('uId')){
  userId = localStorage.getItem('uId');
  browserHistory.push('/rooms');
} else {
  firebaseConfig.auth().onAuthStateChanged(user => {
    if (user) {
      userId = user.uid
      browserHistory.push('/rooms');
    } else {
      browserHistory.push('/');
    }
  });
}


/*save user*/
export const saveUser = (user, uId) => {
  usersRef = firebaseConfig.database().ref(`${uId}/users`);
  usersRef.set(user);
  localStorage.setItem('uId',uId);
  browserHistory.push('/rooms');
}

/*authenticate user*/
export const authenticateUser = () => {
  if (userId) {
    browserHistory.push('/rooms');
  } else {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseConfig.auth().signInWithPopup(provider)
      .then((data) => {
        let user = {
          "name": data.user.displayName,
          "email": data.user.email
        }
        saveUser(user, data.user.uid);
      })
  }
}

/*check if user is already authenticated*/
export const checkAuthentication = () => {
  if (userId) {
    return true;
  } else {
    return false;
  }
}

/*save parent todo*/
export const saveTodoRoomsDB = (todoRooms) => {
  if (userId) {
    todoRoomsRef = firebaseConfig.database().ref(`${userId}/todorooms`);
    todoRoomsRef.set(todoRooms);
  }
}

/*save todo with todolistid*/
export const saveTodosDB = (todos) => {
  if (userId) {
    todosRef = firebaseConfig.database().ref(`${userId}/todos`);
    todosRef.set(todos);
  }
}

/*get todorooms*/
export const getTodoRoomsDB = () => {
  todoRoomsRef = firebaseConfig.database().ref(`${userId}/todorooms`);
  return todoRoomsRef.once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        //save to cache
        saveTodoRooms(snapshot.val());
        return true;
      } else {
        return false;
      }
    });
}

/*get todos*/
export const getTodosDB = () => {
  todosRef = firebaseConfig.database().ref(`${userId}/todos`);
  return todosRef.once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        //save to cache
        saveTodos(snapshot.val());
        return true;
      } else {
        return false;
      }
    });
}
