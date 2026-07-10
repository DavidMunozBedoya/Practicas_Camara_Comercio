import { Route, Router } from 'wouter'
import { PokemonsPage } from '../pages/PokemonsPage'
import Header from '../components/Header'
import FootbolPage from '../pages/FootbolPage'
import LoginPage from '../pages/LoginPage'

export const AppRouter = () => {

   return (
      <Router>
         <Header>
            <Route path="/" children={<LoginPage />} />
            <Route path="/pokemon" children={<PokemonsPage />} />
            <Route path="/futbol" children={<FootbolPage />} />
         </Header>
      </Router>
   )
}