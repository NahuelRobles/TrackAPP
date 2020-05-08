import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export async function signIn (email, password) {
const result = await auth().signInWithEmailAndPassword(email,password).then(()  => {
    const userInfo = auth().currentUser
    return userInfo;
}).catch((error) => {
     return error.code
 });
 return result

};

export async function userData (uid) {
const userDocument = await firestore()
  .collection('users')
  .doc(`${uid}`)
  const firstName = await userDocument.get().then(snap => {
    return snap.data().firstName
  })
return firstName
};

export async function searchProject (uid) {
  console.log("search")

  const categoryDocRef = await firestore()
  .collection('projects')
  .where('usersId', 'array-contains', `${uid}`)
  .get().then(snap => {
    snap.docs.forEach(doc => {
      console.log(doc.id , doc.data().name) 
    })
  })



};