
export function useCreateUser() {

   const createUser = ((data) => {
      try {
         console.log("USUARIO CREADO..., 201", data);
      } catch (error) {
         console.error(error);
      }
   });

   return { createUser };
}