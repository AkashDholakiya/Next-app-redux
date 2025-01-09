"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '@/redux/store'

const page = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const handleIncr = () => {
    dispatch(actions.increment())
  }
  const handleDecr = () => {
    dispatch(actions.decrement())
  }
  const addby = (val) => {
    dispatch(actions.addBy(val))
  }

  return (
    <div className='flex flex-col w-full h-full justify-evenly items-center'>
      <h1 className='text-6xl text-red-600 bg-black p-5 px-10 rounded-full'>Hello is it a new Path?</h1>
      <div className='p-5 px-5 bg-gray-300 font-semibold text-3xl'>Count : {counter}</div>
      <button className='p-5 px-5 bg-slate-300 border-black border-x-2 rounded-full font-semibold text-3xl' onClick={handleIncr}>Increment</button>
      <button className='p-5 px-5 bg-slate-300 border-black border-x-2 rounded-full font-semibold text-3xl' onClick={handleDecr}>Decrement</button>
      <button className='p-5 px-5 bg-slate-300 border-black border-x-2 rounded-full font-semibold text-3xl' onClick={() => addby(10)}>Add by 10</button>
    </div>
  )
}

export default page
