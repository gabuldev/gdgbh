import admin from "firebase-admin";
import { applicationDefault } from 'firebase-admin/app';
interface Database extends admin.firestore.Firestore {
}

let db: Database;
if (!admin.apps.length) {



    admin.initializeApp({
        credential: applicationDefault(),
    });

    db = admin.firestore();

    db.settings({ ignoreUndefinedProperties: true });

}
else {
    db = admin.firestore();
}


export default db;