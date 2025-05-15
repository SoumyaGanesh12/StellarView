import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import Main from "./components/Main"
import { useState, useEffect } from "react"

function App() {
  // State to store API response data
  const [data, setData] = useState(null)
  // const [loading, setLoading] = useState(false)
  // State to control whether the sidebar/modal is visible
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  // useEffect is used to fetch data from API
  // Blank dependency array the callback fn will run when the page is loaded or component mounts
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' +
      `?api_key=${NASA_KEY}`

      // Caching the nasa api data
      const today = (new Date()).toString()
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }

      localStorage.clear()

      try{
        const res = await fetch(url)
        const apiData = await res.json()

        // Store fetched data in localStorage to cache for the day
        localStorage.setItem(localKey, JSON.stringify(
          apiData
        ))

        setData(apiData)
        console.log('Fetched from api today')
        console.log('DATA\n', apiData)
      } catch(err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
    {/* If data is available, show the Main image component, else show a loading state */}
      {data ? (<Main data={data}/>) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {/* Conditional rendering of sidebar */}
      {/* Renders the siderbar only if showModal is set true */}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal}/>
      )}
      { data && (
        <Footer data={data} handleToggleModal={handleToggleModal} />
      )}
    </>
  )
}

export default App
