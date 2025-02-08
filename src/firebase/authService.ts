import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { app } from "./app";
import { userFormat } from "../utils/userFormat";


interface UserData {
   id?: string;
   name: string;
   email: string;
   password: string;
   phone?: string;
   imgUrl?: string;
   isVerified?: boolean;
 }

interface CreateAccountParams {
  email: string;
  password: string;
  name: string;
  imgUrl?: string;
  phone?: string;
}

interface LoginParams {
  email: string;
  password: string;
}

export class AuthService {
  private auth = getAuth(app);
  private provider = new GoogleAuthProvider();

  // ✅ Sign up
  async createAccount({ email, password, name, imgUrl }: CreateAccountParams): Promise<UserData | undefined> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: imgUrl,
      });
      return userFormat(userCredential.user); // ✅ Returns UserData
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  // ✅ Login
  async login({ email, password }: LoginParams): Promise<UserData | undefined> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userFormat(userCredential.user); // ✅ Returns UserData
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  // ✅ Google Sign-in
  async signInWithGoogle(): Promise<UserData | undefined> {
    try {
      const response = await signInWithPopup(this.auth, this.provider);
      return userFormat(response.user); // ✅ Returns UserData
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  }

  // ✅ Logout
  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }
}

const authService = new AuthService();
export default authService;
