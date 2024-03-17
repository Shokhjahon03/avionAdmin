import axios from "axios";
import { create } from "zustand";
type plug=
{
    idsProduct:any,
    v:number,
    loading:boolean,
    allProducts:[],
    waites:boolean,
    setProducts:(prod:{name:string,price:string,image:string,description:string,category:string})=>void,
    getProducts:()=>void,
    DaleteProduct:(id:number)=>void,
    EdidProduct:(id:{image:string,name:string,price:number,category:string,description:string,id:number})=>void
    GetIdProduct:(id:number)=>any
}

const useStoreProducts = create<plug>((set) => ({
    idsProduct:{},
    v:0,
    loading:true,
    allProducts:[],
    waites:false,
    setProducts:async(prod:{name:string,price:string,image:string,description:string,category:string})=>{
        try {
            axios.post('https://65f258c5034bdbecc7649f36.mockapi.io/app/products',prod)
            set(()=>({
                waites:true 
            }))
        } catch (error) {
         console.log(error);
            
        }
    },
    getProducts:async()=>{
        try {
            let res = await axios.get('https://65f258c5034bdbecc7649f36.mockapi.io/app/products')
        let data=await res.data
        set(()=>({
            allProducts:data, 
            loading:false
        }))
        } catch (error) {
           console.log(error);
            
        }
    },
    DaleteProduct:(id)=>{
        axios.delete(`https://65f258c5034bdbecc7649f36.mockapi.io/app/products/${id}`)
        // set((state)=>({
        //      v:state.v+1
        // }))
    },
    EdidProduct:(id)=>{
            axios.put(`https://65f258c5034bdbecc7649f36.mockapi.io/app/products/${id.id}`,id)
    },
    GetIdProduct:async(id)=>{
           let res=await axios.get(`https://65f258c5034bdbecc7649f36.mockapi.io/app/products/${id}`)
           let data=await res.data
            set(()=>({
                idsProduct:data
            }))
    }

  }))
  export default useStoreProducts;