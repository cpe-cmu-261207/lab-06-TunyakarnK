import axios from 'axios'
import {useState,useEffect} from 'react'

type TaskType ={
    time : {
        updated:string
        updatedISO:string
        updateluk:string
    }

    bpi : 
    {THB:{
        code:string
        rate:string
        desscipttion:string
        rate_float:number
    }
}
}

const Current = () =>{
    const [task,setTask] = useState<TaskType | null>(null)
    const [load, setLoading] = useState(false)

    const fecthApi = async () =>{
        try{
            setLoading(true)
            const resp = await axios.get<TaskType>('https://api.coindesk.com/v1/bpi/currentprice/thb.json')
            setLoading(false)
            setTask(resp.data)
        }
        catch(err){
            setLoading(false)
        }
    }

    const render = () =>{
        if(load) return <p className='text-2xl'>Loading ...</p>
        else {
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl'>{task?.bpi.THB.rate_float.toLocaleString()} THB</p>
                    <p> (Last updated {task?.time.updated}) </p>
                </div>
            )
        }
    }

    useEffect(()=>{ fecthApi() },[])

    return(
        <div className='text-center space-y-3'>
        <p className='text-2xl font-semibold'>Current price</p>
            {render()}
        </div>
    )
}

export default Current