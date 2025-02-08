import { getAuth, updateProfile, User } from "firebase/auth";
import { app } from "./app"; // Import your Firebase app instance
import { userFormat } from "../utils/userFormat";

interface UpdateProfileParams {
  name?: string;
  imgUrl?: string;
}

interface UserData {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  imgUrl?: string;
  isVerified?: boolean;
}

export class UserService {
  private auth = getAuth(app);

  async getUser(): Promise<UserData | null> {
    console.log(this.auth.currentUser);
    
    return userFormat(this.auth.currentUser);
  }

  async updateUserProfile(params: UpdateProfileParams): Promise<User | undefined> {
    const user = this.auth.currentUser;

    if (!user) {
      console.error("No user is currently signed in.");
      return undefined; // Or throw an error if you prefer
    }

    try {
      await updateProfile(user, {
        displayName: params.name,
        photoURL: params.imgUrl,
      });
      return user;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  }

  // async updateEmail(newEmail: string): Promise<User | undefined> {
  //   const user = this.auth.currentUser;
  //   if (!user) {
  //     console.error("No user is currently signed in.");
  //     return undefined;
  //   }

  //   try {
  //     await user.updateEmail(newEmail);
  //     console.log("Email updated successfully!");
  //     return user;
  //   } catch (error) {
  //     console.error("Error updating email:", error);
  //     throw error;
  //   }
  // }


  // async updatePassword(newPassword: string): Promise<void> {
  //   const user = this.auth.currentUser;
  //   if (!user) {
  //     throw new Error("No user is currently signed in.");
  //   }

  //   try {
  //     await user.updatePassword(newPassword);
  //     console.log("Password updated successfully!");
  //   } catch (error) {
  //     console.error("Error updating password:", error);
  //     throw error;
  //   }
  // }

  // Add more user-related operations as needed (e.g., delete account)
}


const userService = new UserService();
export default userService;