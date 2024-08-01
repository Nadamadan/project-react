
import "./FormStyle.css";
import { Model } from "./model";
import { useState } from "react";

export function LoanForm() {
  const [ErrorMsg,seterror]=useState(null) // to show or hide the error msg
  const [showmodel,setmodel]=useState(false) // state to show and hide the correct msg
    const [LoanInputs,setLoanInputs]=useState({
  name:"",
  phoneNumber:"",
  age:"",
  isEmploy:false,
  salary:"",
    });

    // when click submit call this function
    function HandleSubmit(event){
        event.preventDefault();
       seterror(null);
        if(LoanInputs.age<18 || LoanInputs.age>100){
          seterror("The age is not allawed");
        }else if((LoanInputs.phoneNumber.length)<10 || (LoanInputs.phoneNumber.length)>12){
          seterror("The phone number format is not correct");
        }
        setmodel(true);

    }
     // function to hide the msg
    function HandleDivClick(){
    if(showmodel){
      setmodel(false);
     }
    }

const btnDisable = (LoanInputs.name===""
  ||LoanInputs.age ===""||LoanInputs.phoneNumber==="");

let btnClass="";
if(btnDisable){
  btnClass="disabled"
}else{
  btnClass=""
}

  return(
  <div  onClick={HandleDivClick}
  className='flex'style={{flexDirection:"column"}}>
    <form id="loan-form" className='flex' style={{flexDirection:"column"}}>
       <h1>Requesting a Loan</h1>
      
       <label><h3>Name :</h3> </label>
       <input 
       value={LoanInputs.name}
       onChange={(event)=>{
        setLoanInputs({...LoanInputs,name:event.target.value});
       }}/>

       <label><h3>Phone Number :</h3> </label>
       <input  
       value={LoanInputs.phoneNumber}
       onChange={(event)=>{
        setLoanInputs({...LoanInputs,phoneNumber:event.target.value});
       }}/>
       <label><h3>Age :</h3> </label>
       <input 
       value={LoanInputs.age}
       onChange={(event)=>{
        setLoanInputs({...LoanInputs,age:event.target.value});
       }}/>
        
       <label style={{marginTop:"30px"}}> <h3>Are you an employee ?</h3> </label>
       <input 
        checked={LoanInputs.isEmploy}
       onChange={(event)=>{
        setLoanInputs({...LoanInputs,isEmploy:event.target.checked});
       }} type='checkbox'/>

       <label><h3>Salary :</h3> </label>
       <select  value={LoanInputs.salary}
       onChange={(event)=>{
        setLoanInputs({...LoanInputs,salary:event.target.value});
       }}>
          <option>Less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
       </select>
       <button
        onClick={HandleSubmit}
        disabled={btnDisable} // to make the button clicked or not
        className={btnClass} // to change the color of button from disable to able to clicked
         >
        Submitn</button>
    </form>
    <Model errorMsg={ErrorMsg} isVisable={showmodel}/> {/* errorMsg and isVisible is props */}

  </div>
  )

  }







