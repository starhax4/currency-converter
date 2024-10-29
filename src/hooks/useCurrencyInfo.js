import { useState,useEffect } from "react";

export default function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        let url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{setData(res[currency])})
        .catch(fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`))
        .then((res)=>res.json())
        .then((res)=>{setData(res[currency])})
    },[currency])

    return data
}
