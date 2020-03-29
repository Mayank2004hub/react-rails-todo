import { Route, Switch } from 'react-router'
import Home from './Home'
import AllFilters from './filters/AllFilters'
import NewFilter from './filters/NewFilter'
import NotFound from './NotFound'
import React from 'react'
import AllStrategies from './strategies/AllStrategies'
import AppRoutes from '../helpers/AppRoutes'
import AllConfigurations from './configurations/AllConfigurations'

const Routes = () => <Switch>
  <Route
    path={AppRoutes.home}
    component={Home}
    exact={true}
  />
  <Route component={NotFound} />
</Switch>

export default Routes
