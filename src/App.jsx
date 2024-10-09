import logo from './logo.svg';
// import './App.css';
// import MyComponent from './image'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import SignUp from '../src/component/signup';
import Signin from './component/signin';

function App() {
return (
  <BrowserRouter>
  <div>
    <Routes>
      {/* hello */}
    {/* <MyComponent/> */}
    <Route path='/' element={<SignUp/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<Signin/>}/>
    
    </Routes>
    {/* <SignUp/> */}
    {/* <Signin/> */}
  </div>
  </BrowserRouter>
)
}

export default App;