import { SignIdData } from "./SignIdData";
import { User } from "./User";

export type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
    signIn: (data: SignIdData) => Promise<void>
  }