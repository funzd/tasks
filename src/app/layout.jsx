import './globals.css'
import Header from '../components/Header/index.jsx'

const RootLayout = ({ children }) =>{
  return <html lang="en">
    <head/>
    <body>
      <Header/>
      {/* <Nav/> */}
      <section>
        <main>
          {/* here the tasks registered! */}
          {/* <TaskProvider> */}
          {children}
          {/* </TaskProvider> */}
        </main>
      </section>
       {/* google advertising or any. */}
      {/* <Advertising/> */}
    </body>
  </html>
}

export default RootLayout
