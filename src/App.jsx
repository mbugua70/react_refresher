import Header from '../component/header'
import './App.css'
import Main from '../component/main'
import TabButton from './component/tabButton'
function App() {


  return (
    <>
     <Header/>
     <Main/>
      {/* The use of special children props */}
      {/*The content between the component is used as a value between the component */}
      <TabButton>John doe</TabButton>
    </>
  )
}

export default App
