import List from '../List/List'
import { Navigate, Route, Routes } from 'react-router-dom'
import Page404 from '../Pages/Page404'
import Country from '../Country/Country'

const Router = ({ data }) => {
    return (
        <Routes>
            <Route path='/' element={ <List data={data} /> }/>
            <Route path='/country/:name' element={ <Country data={data}/> }/>
            
            <Route path='/404' element={ <Page404/> }/>
            <Route path='*' element={ <Navigate to={"/404"} />} />
        </Routes>
    )
}

export default Router
