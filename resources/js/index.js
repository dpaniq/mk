import React from 'react'
import ReactDOM from 'react-dom'

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { App } from '@app/App'
import { AppProvider } from '@contexts/AppContext'
import { DashboardRoute } from '@routes/DashboardRoute'

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// console.log('@scss')
// console.log('@app/App')

// import '@scss/vendors/fontawesome.scss'
// import '../scss/vendors/fontawesome/fontawesome.scss'

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <DashboardRoute>
                <App />
            </DashboardRoute>
        </AppProvider>
    </React.StrictMode>, 
    document.querySelector('#root')
)
