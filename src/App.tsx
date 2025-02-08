import { useDispatch } from 'react-redux';
import {Header, Footer} from './components/allComponents.ts';
import {Outlet} from 'react-router-dom';
import { getCurrentUser } from './features/userSlice.ts';
import { AppDispatch } from './store/store.ts';
function App() {

  const dispatch=useDispatch<AppDispatch>();
  dispatch(getCurrentUser());

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App;
