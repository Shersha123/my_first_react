import { useState } from "react";
export function Counter(){
      let [like, setLike] = useState(0);
    
      let [disLike, setDisLike] = useState(0);
    
      const increamentLike = () => setLike(like + 1);
      const increamentDisLike =() => setDisLike(disLike + 1);
    
      return(
    <div> 
    
      <button  onClick = {increamentLike}>👍  {like}</button>
    
      <button onClick = {increamentDisLike}>👎  {disLike}</button>
    </div>
      );
    }