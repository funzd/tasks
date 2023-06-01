import './globals.css'
import Header from '../components/Header/index.jsx'
import Nav from '../components/Nav/index.jsx'
import {TaskProvider} from '../context/taskContext.jsx'

const RootLayout = ({ children }) =>{
  return <html lang="en">
    <head/>
    <body className="border-solid border-2 content-center">
      <Header/>
      <Nav/>
      <section>
        {/* here the tasks registered! */}
        <TaskProvider>
          {children}
        </TaskProvider>
      </section>
       {/* google advertising or any. */}
      {/* <Advertising/> */}
    </body>
  </html>
}

export default RootLayout

