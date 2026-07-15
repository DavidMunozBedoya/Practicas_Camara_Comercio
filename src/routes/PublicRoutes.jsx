import { Redirect } from "wouter"

export const PublicRoutes = ({ auth, children }) => {
   return !auth ? children : <Redirect to="/home/pokemon" replace />
}