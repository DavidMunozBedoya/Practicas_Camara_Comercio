import { Route, Router } from 'wouter'
import { PokemonsPage } from '../pages/PokemonsPage'
import Header from '../components/Header'

export const AppRouter = () => {

   return (
      <Router>
         <Header>
            <Route path="/" children={<PokemonsPage />} />
            <Route path="/pokemon" children={<PokemonsPage />} />
            <Route path="/futbol" children={<h1>Futbol</h1>} />
         </Header>
      </Router>
   )
}