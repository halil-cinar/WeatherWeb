"use client"
import React, { useState } from "react";
import styles from "./styles.module.css";
import { FiDelete, FiSearch, FiX } from "react-icons/fi";
import { getSearchLocation } from "@/services/weather";
import Link from "next/link";
export default  function SearchBox({}) {
    const [results,setResults] = useState([])
    const [text,setText]=useState("")
    const removeText=()=>{
         setText("")
            setResults([])
    }
    const findResult=async(text)=>{
        let data=  getSearchLocation(text)
        return data;
    }
  return (
    <div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Enter city name" value={text}
        onChange={(event)=>{
          try {
             const {value}=event.target
            if(value==""){
                removeText()
            }
            else{
                setText(value)
                Promise.all([findResult(value)]).then((results)=>setResults([...results[0]])).catch((error)=>{console.log("network error")})
            }
          } catch (error) {
            console.log(error)
          }
           
        }}
        />
        <button onClick={()=>{
           removeText()
        }}>
          <FiX color="white" />
        </button>
      </div>
      <div className={styles.results}>
      {
       results.map((result,index)=>{
          
           return ( <div key={`result:${index}`} className={styles.result}>
            <p>{result.url}</p><Link onClick={()=>{
              removeText()
            }} href={"/?q="+result.name+" "+result.region}>Show</Link>
            </div>)
        })}
      </div>
    </div>
  );




}
