import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBNZ8LZvMDvQ-H1n-rIAsCse4LPe465pjc",
    authDomain: "piposaude-4966d.firebaseapp.com",
    databaseURL: "https://piposaude-4966d-default-rtdb.firebaseio.com",
    projectId: "piposaude-4966d",
    storageBucket: "piposaude-4966d.appspot.com",
    messagingSenderId: "854952994292",
    appId: "1:854952994292:web:fc8ee3eedd91b6456945a1",
    measurementId: "G-9VCZP2Q95Q"
  }

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.db = app.firestore()
    }
}

export default new Firebase()
