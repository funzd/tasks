"use client"
import {useTasks} from '../../../context/taskContext.jsx'
const Page = ({params}) => {
  const values = useTasks()
  console.log(values)
 return  <h1>Editando {params.id}</h1>
}
export default Page
