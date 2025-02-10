import { useState } from "react"

function App(params) {
const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0"></div>
      </div>
    </>
  )
}



export default App
