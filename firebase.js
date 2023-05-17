// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc,
    getDocs,
    deleteDoc,
    onSnapshot,
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyChmvCwcPYI8Oku8A8XdUyTBcI53OkOTSY",
authDomain: "fir-javascript-crud-test.firebaseapp.com",
projectId: "fir-javascript-crud-test",
storageBucket: "fir-javascript-crud-test.appspot.com",
messagingSenderId: "1046148037816",
appId: "1:1046148037816:web:5edef9901a95dee5fdc84d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) => {
    addDoc(collection(db, 'tasks'), {title, description});
}

export const getTasks = () =>{
    getDocs(collection(db, 'tasks'));

    return getDocs(collection(db, 'tasks'));
}

export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback);

export const deleteTask = id => deleteDoc(doc(db, 'tasks',id));

export const getTask = id => getDoc(doc(db, 'tasks', id));

export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id),newFields);