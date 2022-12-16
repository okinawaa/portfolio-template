import { getDocs } from "firebase/firestore";
import {
  careerCollection,
  educationCollection,
  skillCollection
} from "~/firebase.config";

const fetchSkills = async () => {
  const querySnapshot = await getDocs(skillCollection);
  return querySnapshot.docs.map(doc => {
    return doc.data();
  })[0].names;
};
const fetchCareers = async () => {
  const querySnapshot = await getDocs(careerCollection);
  return querySnapshot.docs.map(doc => {
    return doc.data();
  })[0].names;
};
const fetchEducations = async () => {
  const querySnapshot = await getDocs(educationCollection);
  return querySnapshot.docs.map(doc => {
    return doc.data();
  })[0].names;
};

export { fetchSkills, fetchCareers, fetchEducations };
