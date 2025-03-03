import { useRef } from "react";
import type { Route } from "./+types/Signup";
import { Link,  useFetcher } from "react-router";
import { formDataCoversion } from "../Utils/Functions";
import { signup, UserDetails } from "../services/auth/Signup";

export async function clientAction({request}: Route.ClientActionArgs) {
  console.log(request)
  let formData = await request.formData();

  const data:UserDetails = formDataCoversion(formData)
  const response = await signup(data)

  console.log(response)
  return response;
}

const Signup = (_: Route.ComponentProps) => {
  let fetcher = useFetcher();

  const passwordRef = useRef<HTMLInputElement>(null);

  const validatePasswords = (e: React.FormEvent<HTMLInputElement>) => {
    if (passwordRef.current && e.currentTarget.value !== passwordRef.current.value) {
      e.currentTarget.setCustomValidity("Passwords do not match");
    } else {
      e.currentTarget.setCustomValidity("");
    }
  };

  return (
    <div className="flex flex-col bg-black grow text-2xl justify-center items-center h-screen gap-y-8 font-ruddy">
        <h1 className="text-white text-6xl ">Signup </h1>
        <fetcher.Form method="post" 
        className="text-white border bg-transparent border-white rounded-xl w-1/4 overflow-clip flex flex-col gap-y-6 p-4">

          <label className="flex flex-col gap-y-2">
            <h2 className="flex gap-x-1">Name <span className="text-red-600 text-sm">*</span></h2>
            <input required className="border bg-transparent outline-none rounded-lg px-4 py-3" type="name" name="name" placeholder="Zoro" />
          </label>

          <label className="flex flex-col gap-y-2">
            <h2 className="flex gap-x-1">Email <span className="text-red-600 text-sm">*</span></h2>
            <input required className="border bg-transparent outline-none rounded-lg px-4 py-3" type="email" name="email" placeholder="zoro@gmail.com" />
          </label>          

          <label className="flex flex-col gap-y-2">
            <h2 className="flex gap-x-1">Password <span className="text-red-600 text-sm">*</span></h2>
            <input ref={passwordRef} required className="border bg-transparent outline-none rounded-lg px-4 py-3" type="password" name="password" placeholder="where_is_konoha?" />
          </label>

          <label className="flex flex-col gap-y-2">
            <h2 className="flex gap-x-1">Confirm Password <span className="text-red-600 text-sm">*</span></h2>
            <input required className="border bg-transparent outline-none rounded-lg px-4 py-3" type="password" name="confirmPassword" placeholder="where_is_konoha?" onInput={validatePasswords}/>
          </label>

          <button type="submit" name="intent" value="submit" className="border border-white rounded-xl text-center px-4 py-3 hover:text-green-500">Sign Up!</button>
        </fetcher.Form>
        <p className="text-white">Alredy created an Account? <Link to={"/login"} className="text-violet-400 hover:underline">Login</Link> </p>
    </div>
  )
}

export default Signup