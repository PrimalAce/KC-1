import { useState } from 'react'
import Home from './Home'
import Page1 from './Application-process/Page-1.jsx'
import Page2 from './Application-process/Page-2.jsx'

function App() {
  const [activePage, setActivePage] = useState('home')

  return (
    <>
      {activePage === 'home' && <Home onSkipToReg={() => setActivePage('page1')} />}
      {activePage === 'page1' && <Page1 onNextPage={() => setActivePage('page2')} />}
      {activePage === 'page2' && <Page2 />}
    </>
  )
}

export default App
