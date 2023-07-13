import {Route, Routes} from 'react-router-dom'
import LoginScreen from '../../Components/Login/LoginScreen'
import Registrar from '../../Components/Login/Registrar'

const Login = () => {
  return (
    <div>
        <Routes>
          <Route index element={<LoginScreen/>}/>
          <Route path='/registrar' element={<Registrar/>}/>
        </Routes>
    </div>
  )
}

export default Login