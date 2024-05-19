import Link from "next/link"
import Login from "./_components/Login"

export default function Home(){
  return (
    <div className="bg-gradient-to-r from-slate-600 via-slate-400 to-slate-900 pt-5 pb-32">
      <Login />
    </div>
  )
}