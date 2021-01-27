const Submitbtn = document.getElementById('Submitbtn');
const cityname = document.getElementById('city_name');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const day = document.getElementById('day');
const date = document.getElementById('today_date');
var d = new Date();
var x = d.getDay();
var srt = 'Day'
if(x==1){
    str = 'Monday';
}else if(x==2){
    str = 'Tuesday'
}else if(x==3){
    str = 'Wednesday';
}else if(x==4){
    str = 'Thursday';
}else if(x==5){
    str = 'Friday';
}else if(x==6){
    str = 'Saturday';
}else if(x==7){
    str = 'Sunday';
}
day.innerText = str;
date.innerText = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`

const getInfo = async(event)=> {
    event.preventDefault();
    let cityVal = city.value;
    if(cityVal === ""){
        cityname.innerText = `Please write city name`;
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=02f6382ca02ba4fad032b03efdfa7435`
            const response = await fetch(url);
            const data = await response.json();
            const arr  = [data];
            console.log(arr);
            temp.innerText = arr[0].main.temp;
            temp_status.innerText = arr[0].weather[0].main;
            cityname.innerText = `${arr[0].name}||${arr[0].sys.country}`;
        
            //images 
            if(temp_status == 'Clear') {
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }else if(temp_status=="Clouds"){
                temp_status.innerHTML =
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(temp_status=="Rain"){
                temp_status.innerHTML =
                "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }else{
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
        
        
        }catch{
            alert("Please enter the city name properly");
        }    
    }
}
Submitbtn.addEventListener('click',getInfo);




// http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=02f6382ca02ba4fad032b03efdfa7435