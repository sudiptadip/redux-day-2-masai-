import React from 'react'
import TodosInput from './TodosInput'
import axios from "axios"
import { useEffect } from 'react'
import { useDispatch, useSelector,shallowEqual } from 'react-redux'
import { Falior, Start_Loading, Success } from './Functoin'

export default function Todos() {
 const dispatch = useDispatch()
 const dataa = useSelector((data)=> {
    return data
 },shallowEqual)

const {data, isload} = dataa

console.log(data,isload)
    
    let fetchData = () => {
        dispatch(Start_Loading())
        axios.get('http://localhost:8080/todos')
        .then((res)=> dispatch(Success(res.data)))
        .catch((e)=> dispatch(Falior()))
    }
    
useEffect(()=>{
    fetchData()
},[])

  return (
    <div>
        <h1>Todos</h1>
        <TodosInput/>
    </div>
  )
}
