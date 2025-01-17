import { ObjectId } from "mongodb";
import { idauditable} from "../idauditable";

export enum EUserState{
  "ACT" = "Active",
  "INA" = "Inactive",
  "BLQ" = "Blocked"
}
export interface IUser extends idauditable{
  _id?: string| ObjectId;
  email: string;
  password: string;
  state: EUserState;
  roles: string[];
  pswdExpires: Date;
  lastLogin?: Date;
  avatar?: string;
 }

 export const DefaultUser: IUser = {
   email: "",
   password: "",
   state: EUserState.ACT,
   roles: ["public"],
   createdAt: new Date(),
   updatedAt: new Date(),
   pswdExpires: new Date()
 };
