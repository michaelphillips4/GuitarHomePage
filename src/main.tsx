import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Nav } from './components/Nav.tsx'
import './site.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> 
      <Nav />
      <header>
        <h1>Michael Phillips</h1>
      </header>
      <main>
         <App />
      </main>
     
    </BrowserRouter>

  </StrictMode>,
)
