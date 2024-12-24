import HomePages from './pages/HomePage'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import JobsPage from './pages/JobsPage'
function App(){
  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
           <Route index element={<HomePages/>}/>
           <Route path='/jobs' element={<JobsPage/>}></Route>
         </Route>
        
    )
  )
return(
  <RouterProvider router={router}/>
  
  
  )
}
export default App;