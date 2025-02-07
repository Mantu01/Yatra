import { getAuth,createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./app.ts";

export class AuthService{
   auth;

   constructor(){
      this.auth = getAuth(app);
   }

   //sign up

   async createAccount({ email, password,displayName}:{ email: string, password: string,displayName: string}){
     try {
        const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
        await updateProfile(userCredential.user,{displayName: displayName})
        console.log(userCredential);
        
        return userCredential.user;
     } catch (error) {
        console.error("Error creating user:", error);
     }
   };

   async login({email,password}:{email: string, password: string}){
      try {
         const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
         console.log(userCredential);
         return userCredential.user;
      } catch (error) {
         console.error("Error logging in:", error);
      }
   }

   // async updateProfile(){
   //    try {
   //       await updateProfile(this.auth.currentUser, {displayName: 'New Name'});
   //       console.log('Profile updated successfully');
   //    } catch (error) {
   //       console.error('Error updating profile:', error);
   //    }
   // }
};

const authService=new AuthService();

export default authService;