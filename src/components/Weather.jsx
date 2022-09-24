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
<div className="box">
<div className="inputfield">
<form onSubmit={handleForm}>

    <input type="search"  onChange={(e)=>{
        setCity(e.target.value)
    }} className="inp" value={city} placeholder="Enter City"/>
</form>
</div>


{error === false ? (

<section className='data'>

<div className="clouds">

</div>
<i className="fa-solid fa-clouds"></i>

   <h1>{weatherInfo.main.temp}</h1>

</section>
 ) : (
         <p>not found</p>
)}
</div>

    </React.Fragment>
  )
}

export default Weather;
