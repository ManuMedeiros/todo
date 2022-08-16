import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FinancialSystem from './pages/financialSystem';
import Login from './pages/login'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
            </Routes>
            <Routes>
                <Route path='/sistemaFinanceiro' element={<FinancialSystem/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;