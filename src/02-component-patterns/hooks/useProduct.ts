import {useState} from 'react'


interface useProduct{
    counter: number;
    increaseBy: (value:number)=>void;
}

export const useProduct = ():useProduct=>{
    const [counter, setCounter] = useState(0);

    const increaseBy = (value:number):void=>{
        setCounter(prev => Math.max(prev + value,0))
    }

    return {
        counter,
        increaseBy
    }
}



