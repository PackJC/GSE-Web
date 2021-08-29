import React from "react";
import PDF from "././CoA.pdf";


export default function CoA(){

  return(
      <div>

        <embed src={PDF} width="500vw" height="500vh" margin="auto" alt="pdf" />


        
      </div>
  )
}
