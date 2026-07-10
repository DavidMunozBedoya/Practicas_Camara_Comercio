import { Redirect } from "wouter"

export const PublicRoutes = ({ auth, children }) => {
   console.log('auth public: ', auth)
   return !auth ? children : <Redirect to="/home/pokemon" replace />
}