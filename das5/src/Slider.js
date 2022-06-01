import React,{useState,useRef,useEffect} from "react"
import { AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai';
import DataImg from "./Data"



function BraceletsSlide() {

    
 const useContener = useRef()
 const useSlide = useRef()
 const [width, setWidth] =useState(null)
 const [index , setIndex] = useState(0)
 const [bull, setBull] =useState(true)


 

useEffect(()=>{
    change() 
    window.addEventListener('resize', change);
   
},[])


useEffect(()=>{
slider()
},[index])
 
const change = () =>{
 
    setWidth(useSlide.current.offsetWidth)
   
 }
 
 
 
 
 const next=()=>{
    setIndex(
       index === DataImg.length - 1 ? 0 : index + 1)
  
    setBull(!bull)
}

const prev = () => {

    setIndex( index=== 0? DataImg.length - 1: index - 1)
    setBull(!bull)
}


const slider =()=>{
    useContener.current.style.transform = `translate(-${index * width}px)`
    useContener.current.style.width = `${width*DataImg.length}px`
    setBull(!bull)  
}



const Datacicrl = DataImg.map((el,i)=>{
    return<div className="index" key={i}  style={{background:i===index?"rgba(151, 208, 227, 0.5)":"pink"}}
    onClick ={()=>{
        setIndex(i)
    }}
    ></div>
})


    return( <div className="slider"  ref={useSlide} >
               
                <div ref={useContener} className="slider_contener">
                  {DataImg.map((el,i)=>{
                  return  <div  className="slide_img_cont" key={i}>
                           
                                 <img className="img" width={width} src={el} alt=""/>
                           
                          </div>
                                     })
                  }
                </div>
                <AiOutlineArrowRight className="btn_next" onClick={next}/>
                <AiOutlineArrowLeft className="btn_prev" onClick={prev}/>
            <div className="indexDiv">
                {Datacicrl }
           </div>
            </div>)
}

export default BraceletsSlide