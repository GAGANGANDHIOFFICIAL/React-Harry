import React ,{useState} from 'react'



export default function TextForm(props) {
  const uppercase=(event)=>{
    // console.log("button was clicked ")
    // setText("YU HAVE CLICKE ON HANDLEUPCLICK")
    event.preventDefault();
  }
  const handleonchange=(events)=>{
    // console.log("on chnage ")
   setText( events.target.value);
  //  console.log(event.value)
    
  }
const [text, setText]=useState("")


  return (
    <>
    <form>
        <h1 className="mb-3">{props.heading}</h1>
    <div class="input-group">
  <span class="input-group-text"></span>
  <textarea class="form-control"  value={text} onChange= {handleonchange} aria-label="With textarea"></textarea>
</div>
<br></br>
  <button type="submit" onClick={uppercase} class="btn btn-primary">Submit</button>
</form>
    </>
  )
}
