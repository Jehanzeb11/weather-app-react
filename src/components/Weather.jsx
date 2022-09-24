import React, {useState,useEffect} from 'react'
import axios from "axios";


const Weather = () => {
    const [city , setCity] = useState("")
    const [error, setError] = useState(false);
    const [callApi, setCallApi] = useState(false);
    const [weatherInfo, setWeatherInfo] = useState({});



    useEffect(() => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city ? city : "karachi"}&appid=de701374ea08bcc8ae3ac329391fc0b2&units=metric}`
          )
          .then((res) => {
            setWeatherInfo(res.data);
            setError(false)
              
          })
          .catch((err) => {
            console.log(err)
            setError(true)
          });
      },[callApi , city]);
      
      console.log(weatherInfo)



      const handleForm = (e) => {
        e.preventDefault();
    
        if (!city) {
          alert("empty")
          return;
        }
          setCallApi(!callApi)

    }




  return (
    <React.Fragment>
<div className="box container mt-4">
<h1 className='text-center'>Weather App - Jehanzeb</h1>
<div className="inputfield">
<form onSubmit={handleForm}>

    <input type="search"  onChange={(e)=>{
        setCity(e.target.value)
    }} className="inp form-control mt-5" value={city} placeholder="Enter City"/>
</form>
</div>


{error === false ? (

<section className='data'>

<div className="clouds">

</div>



<h1 style={{textAlign : "center" , color:"blue"}} className="mt-5">{weatherInfo.main.temp} <sup>o</sup>C</h1>

</section>
 ) : (
         <h1 className='text-center mt-5' style={{color : "red"}}>not found</h1>
)}
</div>

    </React.Fragment>
  )
}

export default Weather;
