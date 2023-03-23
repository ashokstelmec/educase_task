
function FormInput(props) {
  return (
    <div>
      <input 
        type={props.type} 
        placeholder={props.placeholder} 
        className='form-input' 
      />
    </div>
  )
}

export default FormInput