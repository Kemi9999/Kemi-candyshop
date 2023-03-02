let une;
function CandyShop(){
    if(document.getElementById("type").value == 'Snickers'){
         une = 2500;
    }
    if(document.getElementById("type").value == 'Twixx'){
         une = 2800;
    }
    if(document.getElementById("type").value == 'Mars'){
         une = 2000;
    }
    if(document.getElementById("type").value == 'Milkyway'){
         une = 2250;
    }
    document.getElementById("price").innerHTML = une * (document.getElementById("amount").value)
}