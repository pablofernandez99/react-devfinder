import Form from './components/Form'
import Header from './components/Header'
import UserData from './components/UserData'
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <ThemeProvider>
      <div className='min-h-screen bg-gray-200 p-3 text-gray-800 dark:text-white dark:bg-gray-800 transition-all ease-in'>
        <Header />
        <UserProvider>
          <Form />
          <UserData />
        </UserProvider>
      </div>
    </ThemeProvider>
  )
}

export default App