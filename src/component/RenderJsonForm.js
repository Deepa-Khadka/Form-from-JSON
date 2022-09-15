import React  from 'react'



const RenderJsonForm = (props) => {
  const onSubmit = () =>{

  }
  var schema = props.schema
  return (
        <div className='container'> 
        
        <form className='form-outer' onSubmit={onSubmit}>
          {
           
                <div>
                    <h1 className='text-center'>{props.formheading} </h1>
            
                {
                  schema.map(inputData => {
                    console.log(inputData.input_type)
                    if (inputData.input_type == "textarea"){
                      var field = <textarea className='from-control col-6 my-2 p-1'  name={inputData.name}
                      required={inputData.required} datatype={inputData.data_type}>
                    </textarea>} else {
                       var field = <input className='from-control col-6 my-2 p-1'  type= {inputData.input_type} name={inputData.name}
                      required={inputData.required} datatype={inputData.data_type}/> 
                    }
                     return(
                        <div className='form-group row text-start' >
                          <label className='col-6'>{inputData.label}</label>
                          {field}
                        </div>
                     )
                        
                    })
                  }
                  
                
                </div>
              
            }
          
          <button className='btn btn-primary' type='onSubmit' >Submit</button>
        </form>
        
          
        </div>

       

    );

 }
export default RenderJsonForm;