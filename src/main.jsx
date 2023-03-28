import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

//thirdWeb modules 
import { ChainId , ThirdwebProvider } from '@thirdweb-dev/react'

import { StateContextProvider } from './context'
import App from './App'
import { logo } from './assets'

import './index.css'

const Applicaton = () =>{
    const [loading, setLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => {
            setLoading(false);
            }, 3000);

            return () => clearTimeout(timer);
        }, []);


        return (
            <div>
                {loading ? (
                    <div id="loading-wrapper">\
                        <div id="loading-text">
                            <img src={logo} alt="LOGO" height='50px' width='50px' />
                        </div>
                        <div id="loading-content"></div>
                    </div>
                ): (
                    <React.StrictMode>
                        <ThirdwebProvider desiredChainId={ChainId.Goerli}>
                            <Router>
                                <StateContextProvider>
                                    <App/>
                                </StateContextProvider>
                            </Router>
                        </ThirdwebProvider>
                    </React.StrictMode>
                )}
            </div>
            )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Applicaton/>)
         
