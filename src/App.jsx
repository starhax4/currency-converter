import { useState,useEffect, useCallback,useRef } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo"


function App() {

  const [amount,setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [converted, setConverted] = useState(0)

  const data = useCurrencyInfo(from)
  const currOptions = Object.keys(data)
  
  const convert = useCallback(()=>{
    setConverted(amount * data[to])
  },[amount,from,to,setFrom,setTo])

  useEffect(()=>{
    convert()
  },[amount,from,to,setFrom,setTo])
  

  const swap = ()=>{
    setTo(from)
    setFrom(to)
    setAmount(converted)
    setConverted(amount)
  }

  return (
    <>
    <div className="bg-neutral-900 flex"> 
      <div><img className="w-[40vw] h-[100vh] object-cover" src="src/assets/bg.jpg"  />
        <div className="flex w-[40vw] justify-center text-center text-blue-400 text-8xl font-bold font-['Inter'] absolute top-[30vh]">Currency<br/> Converter</div>
      </div>
      <div className="flex w-[60vw] h-[100vh] justify-center items-center">
        <div className="flex flex-col bg-neutral-600 w-[600px] h-72 rounded-2xl">
          <div className="mx-auto ml-7 mt-5">
            <InputBox
              label="From"
              amount={amount}
              selectCurrency={from}
              currencyOptions={currOptions}
              onAmountChange={(am)=>{setAmount(am)}}
              onCurrencyChange={(currency)=>{setFrom(currency)}}
            />
           
           <div className="flex w-[544px] h-3 justify-center">
              <button className="w-24 h-8 bg-blue-400 hover:bg-blue-500 cursor-pointer rounded-2xl font-bold text-white z-10 relative top-[-0.75rem]" onClick={swap}>Swap <img className="inline" src="src/assets/swap.svg" alt="swap" /> </button>
           </div>
            
            <InputBox
              label="To"
              selectCurrency={to}
              disabled
              amount={converted}
              currencyOptions={currOptions}
              onCurrencyChange={(curre)=>{setTo(curre)}}

            />

          </div>

        </div>
      </div>

    </div>


    </>
  );
}

export default App;
