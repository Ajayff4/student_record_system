import React from 'react';
import HomePage from './HomePage';
import { useCookies } from 'react-cookie';

const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    return (
        <>
            <HomePage cookies={cookies} setCookie={setCookie} removeCookie={removeCookie} />
        </>
    )
}

export default App;