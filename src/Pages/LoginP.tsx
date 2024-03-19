import { useState } from "react"

const LoginP = ({setX}:any) => {
    let [val,setVal]=useState<{name:string,email:string}>({name:'',email:''})
    let func=()=>{
        if(val.email!=="" && val.name!==''){
            setX(true)
        }
    }
  return (
    <div className="w-full h-dvh flex items-center justify-center">
        <div>
        <input value={val.name} onChange={(e)=>setVal({name:e.target.value,email:val.email})} type="text" className=" outline-none bg-slate-200 text-black w-[400px] h-[56px] rounded-xl border-none " placeholder="# Username" />
            <input value={val.email} onChange={(e)=>setVal({name:val.name,email:e.target.value})} type="text" className=" outline-none bg-slate-200 text-black w-[400px] h-[56px] rounded-xl border-none " placeholder="# Useremali" />
            <button className="w-[400px] h-[56px] rounded-xl bg-amber-200" onClick={()=>func()}>Regster</button>
        </div>
    </div>
  )
}

export default LoginP
