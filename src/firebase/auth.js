import {
    db
} from './firestore'

export default class Auth {


    user = {
        Loggedin: false,
        UserName: '',
        UserEmail: ''
    }


    constructor(){
        console.log('constructor auth is running')
        this.LoggIn=this.LoggIn.bind(this);
    }


    LoggIn =({email, passw}) => {
        console.log('login button pressed');
        console.log(db)
    //    return db.auth().Auth().signInWithEmailAndPassword(email, passw).then(res => {
    //             console.log('user attempted to logg in');
    //             console.log(res);
    //         },
    //         err => {
    //             console.log('user has error');
    //             console.log(err);
    //         })
    }

}