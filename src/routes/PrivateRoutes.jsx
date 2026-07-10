import { Redirect } from "wouter"

export const PrivateRoutes = ({ auth, children }) => {
   console.log('auth Private: ', auth)
   return auth ? children : <Redirect to="~/" replace />
}