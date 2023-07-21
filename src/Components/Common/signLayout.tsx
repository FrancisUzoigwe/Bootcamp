import FirstHeader from './FirstHeader'
import { Outlet } from 'react-router-dom'

const SignLayout = () => {
  return (
    <div>
      <FirstHeader/>
      <Outlet/>
    </div>
  )
}

export default SignLayout
