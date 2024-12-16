//#region imports
//#region firebase
import { initializeApp } from 'firebase/app';
//#endregion
//#region firestore
import { getFirestore } from 'firebase/firestore';
//#endregion
//#endregion
//#region main
//#region globals
//#region envVar
//#region firebaseMetadata
const apiKey = process.env.REACT_APP_FBAPIKEY;
const authDomain = process.env.REACT_APP_FBAUTHDOMAIN;
const projectId = process.env.REACT_APP_FBPROJID;
const storageBucket = process.env.REACT_APP_FBBUCKET;
const messagingSenderId = process.env.REACT_APP_FBMSGSENDID;
const appId = process.env.REACT_APP_FBAPPID;
const measurementId = process.env.REACT_APP_FBMEASUREID;
//#endregion
//#endregion
//#endregion
//#region firebaseConfig
const firebaseConfig = {
	apiKey: apiKey,
	authDomain: authDomain,
	projectId: projectId,
	storageBucket: storageBucket,
	messagingSenderId: messagingSenderId,
	appId: appId,
	measurementId: measurementId,
};
//#endregion
//#region connectProject
const app = initializeApp(firebaseConfig);
//#endregion
//#endregion

//#region exports
export const db = getFirestore(app);
//#endregion

// -- old --
//#region prevIterations
//#region imports
//#region firebase
//#endregion
//#region firestore
//#endregion
//#endregion
//#region main
//#region firebaseConfig
//#endregion
//#region connectProject
//#endregion
//#endregion
//#region exports
//#endregion
//#endregion
