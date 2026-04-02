import './App.css'
import {useForm} from "react-hook-form"
function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors , isSubmitting},
  }=useForm();

  async function onSubmit(data){
    await new Promise((resolve)=> setTimeout(resolve , 5000));
    console.log("Form is submitted: " , data);
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
      <div>
        <label>First Name:</label>
        <input className={errors.firstName ? 'input errors': ""} 
        {...register('firstName' ,
        {
        required: true , 
        minLength:{value:3 , message : "Minimum Length is 3"},
        maxLength:{value:10 , message:"Max Length is 10"}
        })}/>
        {errors.firstName&&<p className='errors-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label>Middle Name:</label>
        <input {...register('middleName')}/>
      </div>
      <br />
      <div>
        <label>Last Name:</label>
        <input className={errors.firstName ? 'input errors': ""} 
        {...register('lastName' , {
          pattern:{
            value:/^[A-Za-z]+$/i,
            message:"Last name is not per rules"
          }
        })}/>
        {errors.lastName && <p className='errors-msg'>{errors.lastName.message}</p>}
      </div>
      <br />
      <input type='submit' id='submit-btn' disabled ={isSubmitting} 
      value = {isSubmitting? "Submitting" : "Submit"}
      />
    </form>
  )
}

export default App
