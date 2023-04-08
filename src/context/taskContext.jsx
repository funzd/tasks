"use client"

import {createContext, useContext} from 'react'

export const taskContext = createContext()

export const useTasks = () => {
  const context = useContext(taskContext)

  if(!context) throw new Error("there's not a context!")

   return context
}

export const TaskProvider = ({children}) =>{
  const tasks = []

  return <taskContext.Provider value={tasks}>
            {children}
         </taskContext.Provider>
}
