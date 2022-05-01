const submitbtn = document.getElementById("submitBtn");
const cityname = document.getElementById("cityName");
const showMassage = document.getElementById("city_name1");
const tempShowReal= document.getElementById("temp_real");

const weatherIcon = document.getElementById("Temp_status");
const datahide = document.querySelector(".middle_layer");

const getinfo = async(Event)=>{
    Event.preventDefault();
    // jo data likha vo empty to nai hai in input search for that
  let cityVal = cityname.value;

   if(cityVal === ""){
    showMassage.innerHTML = "Plz filled The text Properly";
    datahide.classList.add("data_hide");
   }else{

    try{
        let url  = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4cd6e65c93931133bb70a0a36b4828c0`
        const responce = await fetch(url);
      // it will convert it into in object

        const data = await responce.json();
        //  it will turn into arrofanobject;
         const arrofanObject = [data];
         showMassage.innerText = `${arrofanObject[0].name} ${arrofanObject[0].sys.country} `
         tempShowReal.innerText = arrofanObject[0].main.temp;
        //  showTempStatus = arrofanObject[0].weather.main

         const tempMood1 = arrofanObject[0].weather[0].main;
         
         if (tempMood1 == "Clear") {
            weatherIcon.innerHTML = "<i class='fas fa-sun fa-2x' style='color: #eccc68'></i>";
          } else if (tempMood1 == "Clouds") {
            weatherIcon.innerHTML =
            "<i class='fas  fa-cloud fa-1x' style='color: blue;'></i>";
          } else if (tempMood1 == "Rainy") {
            weatherIcon.innerHTML =
            "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
          } else {
            weatherIcon.innerHTML = "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
          }

          datahide.classList.remove("data_hide");

    }catch{
        showMassage.innerHTML = "Check your spelling while writing"
        datahide.classList.add("data_hide");
    }
    
   }
}
submitbtn.addEventListener("click", getinfo)



