const searchbutton=document.getElementById('search-btn')
searchbutton.addEventListener('click',function(){
    const inputbutton=document.getElementById('input-btn').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputbutton+ '&appid=21f2bd44a4b1b7199c603b94301169a6')

    .then(response => response.json())
        
    .then(data =>{
      const cityname=data.name;
      const tem=data.main.temp;
      const temp=tem-273.15;
      const descr=data.weather[0].description;
 
      document.getElementById('city').innerText=cityname;
      document.getElementById('temp').innerText=temp.toFixed(2);
      document.getElementById('des').innerText=descr;




    })
    .catch(res => {
       alert("Please type correct City Name");
    })
     
  


})
