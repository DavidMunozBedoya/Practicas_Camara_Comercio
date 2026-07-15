import { toast } from "react-hot-toast";

export const verifyPasswords = (password, confirmPassword) => {
   console.log("pass: ", password, "passConf: ", confirmPassword)
   
   if (password === confirmPassword) {
      console.log("validas");
      return toast.success("Claves iguales")
   } else {
      console.log("erroneas");
      return toast.error("Claves NO Coinciden");
   }

};