import { Redirect, Route, Switch } from 'wouter'
import { PokemonsPage } from '../pages/PokemonsPage'
import Header from '../components/Header'
import FootbolPage from '../pages/FootbolPage'
import LoginPage from '../pages/LoginPage'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { NotFound } from '../components/NotFound'
import { useAuthStore } from '../stores/useAuthStore'
import NewUserForm from '../components/NewUserForm'

export const AppRouter = () => {
   const { isAuth } = useAuthStore();

   return (
      <Switch>
         <Route path="/" children={<PublicRoutes auth={isAuth}><LoginPage /></PublicRoutes>} />
         <Route path="/nuevo-usuario" children={<PublicRoutes auth={isAuth}><NewUserForm /></PublicRoutes>} />

         <Route path="/home" nest>
            <PrivateRoutes auth={isAuth}>
               <Header>
                  <Route path="pokemon" children={<PokemonsPage />} />
                  <Route path="futbol" children={<FootbolPage />} />
               </Header>
            </PrivateRoutes>
         </Route>
         <Route path="/404" children={<NotFound />} />
         <Redirect to="/404" replace />
      </Switch>
   )
}