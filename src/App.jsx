import React from 'react'
import { useState } from 'react'

const App = () => {
  let api={
    apikey:"76424ed4e980622698f817b54a7f1895",
    url:`https://api.openweathermap.org/data/2.5/weather`
  }
//   https://openweathermap.org/find?utf8=%E2%9C%93&q=bali
  let[search,setSearch]=useState("")
  let[data,setData]=useState({})
  let[error,setError]=useState("")
  function searching(){
    fetch(`${api.url}?q=${search}&appid=${api.apikey}&units=metric`).then(res=>res.json()).then(x=>{
        // console.log(x);
        setError(x.message);
        setData(x);}
    ).catch(()=>alert("Api Failed"));
    setError("loading.....");}
    
  let enterkey=(e)=>{
        // setSearch(e.target.value);
        if(e.key==="Enter"){
            searching();
        }
      }
return (
    <div id="weatherdiv">
      <h1 id="heading">WeatherInfo</h1>
        <div id="wsdiv">
        <input id="winput" 
        onChange={(e)=>setSearch(e.target.value) } 
        onKeyUp={enterkey} />
        <button id="wbutt" onClick={searching}>search</button></div>
        <div id="wdata">
            {(data.main != undefined)?
            (<div id="wdiv">
            <h1 className="name">{data.name}</h1>
            <h2 className="data">Temperature: <b>{data.main.temp} &deg;c</b></h2>
            <h2 className="data">Pressure: <b>{data.main.pressure} hpa</b></h2>
            <h2 className="data">Wind Speed: <b>{data.wind.speed} m/s</b> </h2>
            </div>)
            :(<h1 id="">{error}</h1>)}
        </div>
      
    </div>
  )
}

export default App
