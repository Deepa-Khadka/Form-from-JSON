import React from 'react';

//import PersonForm from './component/PersonForm';
//import AnimalForm from './component/AnimalForm';
//import VechicleForm from './component/VechicleForm';
import RenderJsonForm from './component/RenderJsonForm'

import Animaljson from './JsonFile/Animal.json'
import Personjson from './JsonFile/Person.json'
import Vechiclejson from './JsonFile/Person.json'


import  './App.css';

function App() {
  return(
    //<VechicleForm/>
    <div>
   <RenderJsonForm  formheading = "Animal Form" schema = {Animaljson}/>
   <RenderJsonForm  formheading = "Person Form"  schema = {Personjson}/>
   <RenderJsonForm  formheading = "Vechicle Form" schema = {Vechiclejson}/>
   
    
    
    </div>
 
  );
  
  
}

export default App;
