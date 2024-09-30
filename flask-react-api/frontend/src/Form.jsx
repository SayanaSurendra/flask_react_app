import React,{ useState } from 'react'

function Form() {
  const [inputStr, setInputStr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault()

    const url = "http://127.0.0.1:5000/inputData"
    const options = {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({inputStr: inputStr})
    }

    const response = await fetch(url, options);
    const data = await response.json();
    alert(data.message);
    setInputStr("");
  }
  return (
    <form onSubmit={onSubmit}> 
    <div>
      <h2>Insert a record</h2>
        <input 
          type="text"
          id="inputStr"
          value={inputStr} 
          onChange={(e) => setInputStr(e.target.value)} 
          placeholder="Enter your string"/>
        <br></br>
        <button type="submit">Submit</button>
    </div>
    </form> 
  )
}

export default Form