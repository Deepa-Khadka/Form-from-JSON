// import React  from 'react'

// import animalFormFields from '../JsonFile/Animal.json' ;

// const AnimalForm = () => {
//   const onSubmit = () =>{

//   }
//   return (
//         <div className='container'> 
//         <form className='form-outer' onSubmit={onSubmit}>
//           {
           
//                 <div>
//                     <h1 className='text-center'>Animal </h1>
            
//                 {
//                     animalFormFields.map(inputData => {
//                       console.log("inputData", inputData)
//                       return(
//                         <div className='form-group row text-start' >
//                           <label className='col-6'>{inputData.label}</label>
//                           <input className='from-control col-6 my-2 p-1'  type= {inputData.input_type} name={inputData.name}
//                            required={inputData.required} datatype={inputData.data_type}/>
//                         </div>

//                       )
//                     })
//                   }
//                 </div>
              
//             }
          
//           <button className='btn btn-primary' type='onSubmit' >Submit</button>
//         </form>
        
          
//         </div>

       

//     );

// }
// export default AnimalForm;