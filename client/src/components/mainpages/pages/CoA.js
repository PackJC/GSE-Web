import React from "react";
import PDF from "././CoA.pdf";


export default function CoA(){

  return(
      <div>
      <div>
      <center>
        <embed src={PDF} alt="pdf"width="500vw" height="500vh"/>
        </center>
      </div>
      </div>
  )
}
