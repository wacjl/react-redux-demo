import { renderRoutes } from 'react-router-config'
import React from 'react'
import {Link} from 'react-router-dom'
const Child = ({ route }) => (
  <div>
    <h2>Child</h2>
    <Link to="/child/1/grand-child">child-1-grand-child</Link>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { someProp: 'these extra props are optional' })}
  </div>
)
export default Child