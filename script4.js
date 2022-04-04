let Productname="Apple AirPods Pro";
let reviews="4.8 out of 5";
let price="$174.00";
let brand="Apple";
let placecol="White";
let connect="Wireless";
let model="Airpods Pro"; 
let fit= "universal";
let Batterylife= "Up to 6 hours of listening time";
let charginglocation="Front of Case";
let Bluetooth="yes";
let H1chip="yes";
let heysiri="Always on"
let weight=".19 ounce";
let releasedate="10/18/2021";
let soundqual="4.5";
let comfort="4.5"
let noisecancel="4.4"
let shipsfrom="amazon.com"
let soldby="amazon.com"

document.write(`
<div class=top>
        <p><h1> ${Productname}</h1></p>
      <div class=top1><p> ${reviews} </p>
        <p> ${price} </p>
        <br></div>
      <div><p><b>Brand:</b> ${brand}</p>
        <p><b>Placement Color:</b> ${placecol}</p>
        <p><b>Connectivity Technology:</b> ${connect}</div>
</div>
<br>
<h3> Technical Details </h3>
<div class=middle>
      
        <div>
        <p><b>Model:</b> ${model}</p>
        <p><b>Fit:</b> ${fit}</p>
        <p><b>Battery life:</b> ${Batterylife}</p>
        <p><b>LED Charging Light Location:</b> ${charginglocation}</p>
        <p><b>Bluetooth:</b> ${Bluetooth}</p>
        </div>

        <div>
        <p><b>H1 Chip:</b> ${H1chip}</p>
        <p><b>Hey Siri:</b> ${heysiri}</p>
        <p><b>Weight:</b> ${weight}</p>
        <p><b>Release Date:</b> ${releasedate}
        </div>
</div>
<br>
<h3> Ratings by feature</h3>
<div class=ratings>
        <div>
        <p><b>Sound quality</b> ${soundqual}</p>
        <p><b>Comofort:</b> ${comfort}</p>
        <p><b>Noise cancellation:</b> ${noisecancel}</p>
        </div>  

<div>
        <p><b>Ships from</b> ${shipsfrom}</p>
        <p><b>Soldy by</b> ${soldby}</p>
        </div>
 </div>       
`)

