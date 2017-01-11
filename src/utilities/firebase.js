import * as firebase from 'firebase';
import { saveTodos, saveTodoRooms } from '../utilities/storageUtility'
import { browserHistory } from 'react-router';

/* initialize firebase */
const config = {
  apiKey: "AIzaSyBOqZiemlzJGAcLrZ-jiOJwM3zXFuP_9cM",
  authDomain: "todo-d8ac0.firebaseapp.com",
  databaseURL: "https://todo-d8ac0.firebaseio.com",
  storageBucket: "todo-d8ac0.appspot.com",
  messagingSenderId: "1081774369121"
};

/* unique identifier */
let todoRoomsRef;
let todosRef;
let usersRef;
let userId;

export const firebaseConfig = firebase.initializeApp(config);
/*watch on auth*/
firebaseConfig.auth().onAuthStateChanged(user => {
  if (user) {
    userId = user.uid
    browserHistory.push('/rooms');
  } else {
    browserHistory.push('/todo-rooms');
  }
});

//save user
export const saveUser = (user, uid) => {
  usersRef = firebaseConfig.database().ref(`${uid}/users`);
  usersRef.set(user);
  browserHistory.push('/rooms');
}

//authenticate user
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

//check if user is already authenticated
export const checkAuthentication = () => {
  if (userId) {
    return true;
  } else {
    return false;
  }
}

// save parent todo
export const saveTodoRoomsDB = (todoRooms) => {
  if (userId) {
    todoRoomsRef = firebaseConfig.database().ref(`${userId}/todorooms`);
    todoRoomsRef.set(todoRooms);
  }

}

//save todo with todolistid
export const saveTodosDB = (todos) => {
  if (userId) {
    todosRef = firebaseConfig.database().ref(`${userId}/todos`);
    todosRef.set(todos);
  }

}

//get todorooms
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

//get todos
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
