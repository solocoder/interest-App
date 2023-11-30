
import './App.css';
import {TextField,Button,Stack} from '@mui/material';
import { useState } from 'react';


function App() {
  const [total,setTotal]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [time,setTime]=useState(0)

  const [validPrinciple,setValidPrinciple]=useState(true)
  const [validRate,setValidRate]=useState(true)
  const [validTime,setValidTime]=useState(true)


  const handleSumbit=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !time){
      alert("Enter valid Value")
    }
    else{
      let a=principle*rate/100*time
      setTotal(a)
    }
  }
  function handleReset(){
    setPrinciple(0)
    setRate(0)
    setTime(0)
    setTotal(0)
    setValidPrinciple(true)
    setValidRate(true)
    setValidTime(true)
  }

  const validateInput=(e)=>{
    const {name,value}=e.target
    // console.log(typeof value)
    console.log(!!value.match(/^[0-9]{1,}$/))
    if(!!value.match(/^[0-9]{1,}$/)){
      if(name=='principle'){
        setPrinciple(value)
        setValidPrinciple(true)
      }
      if(name=='rate'){
        setRate(value)
        setValidRate(true)
      }
      if(name=='time'){
        setTime(value)
        setValidTime(true)
      }
    }
    else{
      if(name=='principle'){
        setPrinciple(value)
        setValidPrinciple(false)
      }
      else if(name=='rate'){
        setRate(value)
        setValidRate(false)
      }
      else{
        setTime(value)
        setValidTime(false)
      }
    }
  }
  // console.log(principle,rate,time)

  return (
    <div style={{height:'100vh'}} className="w-100 d-flex justify-content-center align-items-center bg-dark ">
      <div className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>caluculate your simple interest easily</p>
        <div style={{backgroundColor:'#edde09'}} className='text-center rounded mt-4'>
          <h4 className='pt-3'>₹{' '}{total}</h4>
          <p className='pb-3'>Your Total Amount</p>
        </div>
        <form onSubmit={(event)=>handleSumbit(event)} autoComplete='off'>
          <div className='d-flex flex-column'>
            <div>
              <TextField id="outlined-basic-1" label="₹ Principle Amount "  variant="outlined" className='mt-3 w-100' value={principle || ''} name='principle' onChange={(event)=>validateInput(event)}/>
              {
                !validPrinciple &&
                <div className='text-danger'>
                  invalid principle amount value
                </div>
              }
            </div>
            <div>
              <TextField id="outlined-basic-2" label="Rate of Interest (p.a)%" variant="outlined"  className='mt-3 w-100' value={rate || ''} name='rate' onChange={(event)=>validateInput(event)}/>
              {
                !validRate &&
                <div className='text-danger'>
                  invalid rate amount value
                </div>
              }
            </div>
            <div>
              <TextField id="outlined-basic-3" label="Time Period (Yr)" variant="outlined" className='mt-3 w-100' value={time || ''} name='time' onChange={(event)=>validateInput(event)}/>
              {
                !validTime &&
                <div className='text-danger'>
                  invalid time amount value
                </div>
              }
            </div>
          </div>
        <Stack direction={'row'} spacing={2} className='mt-4'>
          <Button type='submit' className='bg-dark  py-2 px-5 w-50' variant="contained" disabled={validPrinciple && validRate && validTime ? false:true}>calculate</Button>  
          <Button onClick={handleReset} className='text-dark border-dark  py-2 px-5 w-50' variant="outlined">reset</Button>
        </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
