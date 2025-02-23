import type { Route } from "./+types/Signup";
import { Link, useFetcher } from "react-router";

export async function clientAction() {

}

const Signup = (_: Route.ComponentProps) => {
  let fetcher = useFetcher();

  return (
    <div className="flex flex-col bg-black grow text-2xl justify-center items-center h-screen gap-y-8 font-ruddy">
        <h1 className="text-white text-6xl ">Signup </h1>
        <fetcher.Form action="/signup" method="post" 
        className="text-white border bg-transparent border-white rounded-xl w-1/4 overflow-clip flex flex-col gap-y-6 p-4">

          <label className="flex flex-col gap-y-2">
            Name
            <input className="border bg-transparent outline-none rounded-lg px-4 py-3" type="name" name="name" placeholder="Zoro" />
          </label>

          <label className="flex flex-col gap-y-2">
            Email
            <input className="border bg-transparent outline-none rounded-lg px-4 py-3" type="email" name="email" placeholder="zoro@gmail.com" />
          </label>          

          <label className="flex flex-col gap-y-2">
            Password
            <input className="border bg-transparent outline-none rounded-lg px-4 py-3" type="password" name="password" placeholder="where_is_konoha?" />
          </label>

          <label className="flex flex-col gap-y-2">
            Confirm Password
            <input className="border bg-transparent outline-none rounded-lg px-4 py-3" type="password" name="password" placeholder="where_is_konoha?" />
          </label>

          <button type="submit" className="border border-white rounded-xl text-center px-4 py-3 hover:text-green-500">Sign Up!</button>
        </fetcher.Form>
        <p className="text-white">Alredy created an Account? <Link to={"/login"} className="text-violet-400 hover:underline">Login</Link> </p>
    </div>
  )
}

export default Signup