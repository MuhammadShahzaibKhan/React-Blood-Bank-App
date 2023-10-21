import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { app } from "./firebaseconfig";

let auth = getAuth(app);
let db = getDatabase(app);

export let fbLogin = (body: any) => {
  return new Promise((resolve, reject) => {
    if (!body.email || !body.password) {
      reject("Email and Password is required");
    } else {
      signInWithEmailAndPassword(auth, body.email, body.password)
        .then((res) => {
          let id = res.user.uid;

          const reference = ref(db, `users/${id}`);

          onValue(reference, (data) => {
            if (data.exists()) {
              resolve(data.val());
            } else {
              reject("Data not found!");
            }
          });
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

export let fbSignUp = (body: any) => {
  return new Promise((resolve, reject) => {
    if (!body.email || !body.password) {
      reject("Email and Password is required!");
    } else {
      createUserWithEmailAndPassword(auth, body.email, body.password)
        .then((res) => {
          let id = res.user.uid;

          body.id = id;
          const reference = ref(db, `users/${id}`);

          set(reference, body)
            .then((res) => {
              resolve("User Created Successfully");
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

export let fbAuth = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        resolve(uid);
      } else {
        reject("No User is logged in");
        // User is signed out
        // ...
      }
    });
  });
};

export let fbAdd = (nodeName: string, body: any, id?: string) => {
  return new Promise((resolve, reject) => {
    const taskId = push(ref(db, `${nodeName}/`)).key;
    body.id = taskId;
    const reference = ref(db, `${nodeName}/${body.id}`);
    set(reference, body)
      .then((res) => {
        resolve("Data Sent Successfully!");
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export let fbGet = (nodeName: string, id?: any) => {
  return new Promise((resolve, reject) => {
    const reference = ref(db, `${nodeName}/${id ? id : ""}`);
    onValue(reference, (data) => {
      if (data.exists()) {
        resolve(Object.values(data.val()));
      } else {
        reject("No Data found :( ");
      }
    });
  });
};
export let fbDelete = () => {};
export let fbEdit = () => {};
export let fbGetById = () => {};
export let fbLogOut = () => {
  return signOut(auth)
    .then((res) => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
