import React from 'react'

const InputBox = (
    {
        label,
        disabled=false,
        amount,
        selectCurrency,
        currencyOptions = ["pkr","usd"],
        onAmountChange,
        onCurrencyChange,
    }
) => {
  return (
    <div className="w-[34rem] h-28 bg-gray-200 rounded-2xl">
        <div className='flex w-[34rem] justify-between gap-44'>
            <p className="text-neutral-600 text-base font-semibold pl-8 pt-4">{label}</p>
            <p className="text-neutral-600 text-base font-semibold pr-8 pt-4">Currency Type</p>
        </div>
        <div className='flex w-[34rem] justify-between gap-44'>
        <input className='font-bold bg-transparent ml-8 mt-8 outline-none' type="number" id='toInput' disabled={disabled} value={amount} onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}/>
        <select className='mr-8 rounded-lg px-3 mt-8 outline-none font-bold' name="currencySelect"  value={selectCurrency} onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}>
            {currencyOptions.map((currency)=>(
                <option id={currency} value={currency}>{currency.toUpperCase()}</option>
            ))}
        </select>
        </div>
    </div>
  )
}

export default InputBox