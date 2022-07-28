import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { store } from '../redux/appStore';

const Layout = ({ children }: any) => {
  return (
    <div className="font-poppins h-screen w-screen overflow-x-hidden bg-gray-200">
      <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Header />
        {children}
        <Footer />
      </LocalizationProvider>
      </Provider>
    </div>
  )
}

export default Layout;