import React, { useEffect } from 'react'
import { useState } from 'react'

function useData (url, method = "GET", data = "") {
  
  const [isLoaded, setIsLoaded] = useState(false)
  const [result, setResult] = useState([])
  const [isError, setIsError] = useState(false)
  const [headers, setHeaders] = useState("")
  
  async function loadData(url) {
    setIsLoaded(false)
    try {
        let response
        if (method == "POST")
        {
          response = await fetch(url, 
            {
              method: "POST",
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(data)
            }
          )
        }
        else
        {
          response = await fetch(url)
        }
        if (response.ok) {
          setResult(await response.json())
          setHeaders(response.headers)
        }
        else {
          setIsError(true);
        }
      }
      catch (error) {
        setIsError(true);
        console.error("Fetch error:", error);
      }
      finally {
        setIsLoaded(true);
      }
  }

  useEffect(() => {
    loadData(url)
    }, [url, data])
  return { result, isLoaded, isError, headers }
}

export default useData
