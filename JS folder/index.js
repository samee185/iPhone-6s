const powerBtn = document.querySelector ('.powerbtn');
const screenDisplay = document.querySelector('#screen');
let date = new Date()
powerBtn.addEventListener("click", ()=>{
   powerOn()
})
 const powerOn = ()=>{
    screenDisplay.innerHTML = ''
    let timeHour = date.toLocaleTimeString();
    let timeMin = date.getMinutes();
    let timeDay = date.getDay();
    let timeMonth = date.getMonth();
    let timeYear = date.getFullYear();
    screenDisplay.innerHTML = `
    <div class="top"> 
    <div class="networkSide">
    <i class="bi bi-reception-4"></i>
    <span>MTN-Stay safe</span>
    </div>
    <div class="batterySide">
    <span>100%</span>
    <i class="bi bi-battery-full"></i>
    </div>
    </div>
    <div class="dateSide">
    <h1>${timeHour}</h1>
    </div>
    `
    screenDisplay.style.backgroundImage = 'linear-gradient(150deg, rgba(68,73,181,0.6)30%,rgba(187,154,143,0.6)70%)'
 }
 const homeScreen = ()=>{
   screenDisplay.style.backgroundImage = 'url(../images/walpaper.jpg)'
   screenDisplay.style.backgroundRepeat = 'no-repeat'
   screenDisplay.style.backgroundSize = 'cover'
   screenDisplay.innerHTML = ''
   let homeHour = date.getHours();
   let homeMin = date.getMinutes();
   screenDisplay.innerHTML = `
   <div class="top"> 
   <div class="networkSide">
   <i class="bi bi-reception-4"></i>
   <span>MTN-Stay safe</span>
   </div>
   <div class="batterySide">
   <span>100%</span>
   <i class="bi bi-battery-full"></i>
   </div>
   </div>
   <div class="homeScreenContainer">
   <div class="appsContainer">
   <div class="apps">
   <img src="../images/a.png" alt="App store">
   <span>App Store</span>
   </div>
   <div class="apps" onclick="Calendar()">
   <img src="../images/calendar.png" alt="calendar">
   <span>Calendar</span>
   </div>
   <div class="apps">
   <img src="../images/file.png" alt="files">
   <span>Files</span>
   </div>
   <div class="apps">
   <img src="../images/settings.png" alt="settings">
   <span>Settings</span>
   </div>
   <div class="apps">
   <img src="../images/weather.png" alt="weather"> 
   <span>Weather</span>
   </div>
   <div class="apps" onclick= "Calculator()">
   <img src="../images/Untitled-1.png" alt="Calculator">
   <span>Calculator</span>
   </div>
   <div class="apps">
   <img src="../images/what.png" alt="Whatsapp">
   <span>Whatsapp</span>
   </div>
   <div class="apps">
   <img src="../images/snap.png" alt="snapchat">
   <span>Snapchat</span>
   </div>
   <div class="apps">
   <img src="../images/safari.png" alt="safari">
   <span>Safari</span>
   </div>
   <div class="apps" onclick="buyCard()">
   <img src="../images/mtnapp.png" alt="safari">
   <span>myMTN-app</span>
   </div>
   </div>
   <div class="footContainer">
   <div class="apps">
   <img src="../images/phone.png" alt="Phone">
   </div>
   <div class="apps">
   <img src="../images/messages.png" alt="messages">
   </div>
   <div class="apps">
   <img src="../images/music.png" alt="music">
   </div>
   <div class="apps">
   <img src="../images/camera.png" alt="camera">
   </div>
   </div>
   </div>
   `
 }
const powerOff = ()=>{
   let top = document.querySelector('.top')
   let time = document.querySelector('.dateSide')
   screenDisplay.style.backgroundImage = 'none'
   screenDisplay.style.backgroundColor = 'black'
   top.style.display = 'none'
   time.style.display = 'none'
}
const buyCard = () =>{
   screenDisplay.innerHTML = ''
   screenDisplay.style.backgroundColor = 'rgba(192, 184, 47, 0.541)'
   screenDisplay.style.backgroundImage = 'none'
   screenDisplay.innerHTML = `
   <div class="top"> 
   <div class="networkSide">
   <i class="bi bi-reception-4"></i>
   <span class="netLine">MTN-Stay safe</span>
   </div>
   <div class="batterySide">
   <span class="batteryPercent">100%</span>
   <i class="bi bi-battery-full"></i>
   </div>
   </div>
       <div class="cardSide">
       <marquee behavior="" direction="">Buy Your Recharge Card Here !</marquee>
        <select name="cardNetworks" id="cardNetworks">dquee            <option value="selectNetwork">Choose Network</option>
            <option value="MTN">MTN</option>
            <option value="Glo">Glo</option>
            <option value="ETISALAT">9Mobile</option>
            <option value="Airtel">Airtel</option>
        </select>
        <p></p>
        <select name="cardAmount" id="cardAmount">
            <option value="selectAmount">Choose Amount</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
        </select>
        <p></p>
        <input type="text" placeholder="Card Pin..." class="pinDisplayer" disabled>
        <p></p>
        <button class="buyBtn" onclick="displayCard()">Buy</button>
         <button class="saveCardBtn" onclick="saveCard()">Save pin</button>
    </div>
   <div class="historySide">
   <h5>History</h5>
   <div class="savedCard"></div>
   </div>
   `
   let top = document.querySelector('.netLine');
   top.style.color = 'black'; 
   let network = document.querySelector('.bi-reception-4');
   network.style.color = 'black';
   let battery = document.querySelector('.bi-battery-full');
   battery.style.color = 'black';
   let percentage = document.querySelector('.batteryPercent');
   percentage.style.color= 'black';
   let buyButton = document.querySelector('.buyBtn');
   buyButton.style.backgroundColor = "rgba(68, 130, 181, 0.6)"
   buyButton.style.border = "none"
   let saveButton = document.querySelector('.saveCardBtn');
   saveButton.style.backgroundColor = "rgba(15, 206, 31, 0.7)"
   saveButton.style.border = "none"
}
const generatePin = () =>{
   let random = Math.floor(Math.random()* 6373677897987976);
   let pinDisplayer = document.querySelector('.pinDisplayer');
   pinDisplayer.value = random;
}
const displayCard = ()=>{
   let cardAmount = document.getElementById('cardAmount');
   let cardNetwork = document.getElementById('cardNetworks');
   if(cardNetwork.value && cardAmount.value) {
      generatePin()
  }
}

const saveCard = ()=>{
   let cardAmount = document.getElementById('cardAmount');
   let cardNetwork = document.getElementById('cardNetworks');
   let pinDisplayer = document.querySelector('.pinDisplayer');
   let cards =[];
   let codes ={
      MTN:'*555*',
      Glo: '*127*',
      Airtel: '*126*',
      Etisalat:'*123*'
   }
   let card = {
      amount: cardAmount.value,
      network: cardNetwork.value,
      pin: pinDisplayer.value,
      cardCode: `${codes[cardNetwork.value]}${pinDisplayer.value}#`
   }
   cards.push(card);
   let savedCards = document.querySelector('.savedCard');
   savedCards.innerHTML =''
   cards.forEach((elem,i) =>{
      savedCards.innerHTML =`
      <p>Amount: ${elem.amount}</p>
      <p>Network: ${elem.network}</p>
      <p>Pin: ${elem.pin}</p>
      <p>Code: ${elem.cardCode}</p>
      `
   })
}
const Calculator = ()=>{
   screenDisplay.innerHTML='';
   screenDisplay.style.backgroundColor = 'rgba(224, 247, 250, 0.5)'
   screenDisplay.style.backgroundImage = 'none'
   screenDisplay.innerHTML = `
   <div class="top"> 
   <div class="networkSide">
   <i class="bi bi-reception-4"></i>
   <span class="netLine">MTN-Stay safe</span>
   </div>
   <div class="batterySide">
   <span class="batteryPercent">100%</span>
   <i class="bi bi-battery-full"></i>
   </div>
   </div>
   <div class="calculatorSide">
    <h4>Calculator</h4>
    <input type="number" id="num1" placeholder="Enter number 1">
    <input type="number" id="num2" placeholder="Enter number 2">
    <br>
    <button onclick="Add()">Add</button>
    <button onclick="Subtract()">Subtract</button>
    <button onclick="Multiply()">Multiply</button>
    <button onclick="Divide()">Divide</button>
    <br>
    <h3>Result: <span id="result"></span></h3>
</div>
   `
   let top = document.querySelector('.netLine');
   top.style.color = 'black'; 
   let network = document.querySelector('.bi-reception-4');
   network.style.color = 'black';
   let battery = document.querySelector('.bi-battery-full');
   battery.style.color = 'black';
   let percentage = document.querySelector('.batteryPercent');
   percentage.style.color= 'black';
}
const Add = ()=>{
   let num1 = document.getElementById('num1').value;
   let num2 = document.getElementById('num2').value;
   let result = document.getElementById('result');
   result.innerHTML = num1 + num2;
}
const Subtract = ()=>{
   let num1 = document.getElementById('num1').value;
   let num2 = document.getElementById('num2');
   let result = document.getElementById('result');
   result.innerHTML = num1 - num2;
}
const Multiply = ()=>{
   let num1 = parseFloat(document.getElementById('num1').value);
   let num2 = parseFloat(document.getElementById('num2'));
   let result = document.getElementById('result');
   result.innerHTML = num1 * num2;
}
const Divide = ()=>{
   let num1 = parseFloat(document.getElementById('num1').value);
   let num2 = parseFloat(document.getElementById('num2'));
   let result = document.getElementById('result');
   result.innerHTML = num1 / num2;
}
const Calendar = () =>{
   screenDisplay.innerHTML = ''
   screenDisplay.style.backgroundColor = ''
   screenDisplay.style.backgroundColor = 'rgba(224, 247, 250, 0.5)'
   screenDisplay.style.backgroundImage = 'none'
   screenDisplay.innerHTML = `   
   <div class="top"> 
   <div class="networkSide">
   <i class="bi bi-reception-4"></i>
   <span class="netLine">MTN-Stay safe</span>
   </div>
   <div class="batterySide">
   <span class="batteryPercent">100%</span>
   <i class="bi bi-battery-full"></i>
   </div>
   <div class="calender" id="calender"></div>
   `
   let top = document.querySelector('.netLine');
   top.style.color = 'black'; 
   let network = document.querySelector('.bi-reception-4');
   network.style.color = 'black';
   let battery = document.querySelector('.bi-battery-full');
   battery.style.color = 'black';
   let percentage = document.querySelector('.batteryPercent');
   percentage.style.color= 'black';
}
// function volUp(){
//    let volume = document.getElementById('volumehigh')
//    let currentVolHeight = volume.clientHeight
//    console.log(currentVolHeight);
//    volume.style.height = currentVolHeight + 10 + 'px'
// }