import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import ContentHome from '../ContentHome'
import Posts from '../Posts'
import AdicionarLivro from '../AdicionarLivro'
import Books from '../Books'
import NavBar from '../NavBar'
import Donations from '../Donations'
import Perfil from '../Perfil'

const Routes = ()=> (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact={true}  component={ContentHome} />
      <Route path='/posts' component={Posts} />
      <Route path='/adicionarLivro' component={AdicionarLivro} /> 
      <Route path='/books' component={Books} />
      <Route path='/donations' component={Donations} />
      <Route path='/perfil' component={Perfil} /> 
    </Switch>
  </BrowserRouter>
)

export default Routes;