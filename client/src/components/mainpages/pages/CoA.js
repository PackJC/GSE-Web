import React from "react";
import PDF from "././CoA.pdf";


export default function CoA(){

  return(
      <div>
      <center>
        <embed src={PDF} alt="pdf"width="800vw" height="800vh"/>
        </center>
      </div>
  )
}
