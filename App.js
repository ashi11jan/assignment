
import './App.css';

function App() {
  return (
   <>


<div className="login">
  <h1>WOBOT.AI</h1>
  <h2>Its delight to have you</h2>
  <h3>Onboard </h3>
  <h4>Help us to know you better</h4>
  <h5>(This is how we optimize as per your business need )</h5>
  <div>
    <label className="label">Company Name </label>
    <input type="text" placeholder="e.g Example Inc"></input>
    </div>
  <div>
    <label >Industry</label>
    <select  placeholder="select"></select>
   

    </div>
  <div>
    <label>Company Size</label>
    <input type="radio" id="age1" name="age" value="30"></input>
  <label  classname="label1" for="age1">0 - 30</label><br></br>
  <input type="radio" id="age2" name="age" value="60"></input>
  <label for="age2">31 - 60</label> <br></br>
 
    


    </div>
    

    <button type="button" >Get Started</button>
    
</div>

<footer>
Terms of use| Policy
</footer>




  </>
 
  );
}

export default App;
