import "./FormStyle.css";
export function Model({isVisable,errorMsg=null}){
    if(isVisable){
        return(
            <div id="model">
                <div id="model-content">
                    <h1 style={{color:errorMsg?"red":"green"}}>
                         {errorMsg!=null?errorMsg:"The Form Has Been Submited Successfilly"} </h1>
                </div>
            </div>
        )  
    }
    else{
     return(<></>)
    }
}