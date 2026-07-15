import { Redirect } from "wouter"

export const PrivateRoutes = ({ auth, children }) => {
   return auth ? children : <Redirect to="~/" replace />
}