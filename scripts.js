
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User registered:', user);
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  };
  
const loginUser = (email, password) => 
{
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User logged in:', user);
      })
      .catch((error) => {
        console.error('Error logging in user:', error);
      });
};
  
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const db = getFirestore(app);

const saveProgress = async (userId, progressData) => {
    try {
      await setDoc(doc(db, "userProgress", userId), progressData);
      console.log('Progress saved');
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };
  
const getProgress = async (userId) => {
    try {
      const docRef = doc(db, "userProgress", userId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log("User progress:", docSnap.data());
        return docSnap.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error('Error getting progress:', error);
    }
  };

const checkProgressAndRenderContent = async (userId) => {
    const progress = await getProgress(userId);
    if (progress && progress.completedLessons.includes('Lesson1')) {
      // Render next lesson
    } else {
      // Redirect to previous lesson or show an error
    }
  };
  


// Subpage scripts

document.addEventListener('DOMContentLoaded', function () {
    const userName = document.querySelector('.user-name');
    const userDropdown = document.querySelector('.user-dropdown');

    userName.addEventListener('click', function () {
        userDropdown.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
        if (!userName.contains(e.target) && !userDropdown.contains(e.target)) {
            userDropdown.classList.remove('show');
        }
    });
});