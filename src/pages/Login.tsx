import { login } from "../services/auth/Auth.ts";
import { formDataCoversion } from "../Utils/Functions.ts";
import type { Route } from "./+types/Login.tsx";
import { data, isRouteErrorResponse, Link, redirect, useFetcher } from "react-router";

export function ErrorBoundary({error}:Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    console.log(error)
    const status = error.data.init.status
    return (
      <div className="bg-black/55 fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center">
        <section className="bg-white p-4 border rounded-lg text-black space-y-4 text-3xl">
          <h1>
            Error! {status}
          </h1>
          <p>{error.data.data}</p>
          {status==422 && <Link to={"/signup"} className="text-violet-500 hover:underline inline-block">Signup</Link>}
        </section>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="bg-black/55 fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center">
        <section className="bg-white p-4 border rounded-lg text-black space-y-4">
          <h1>Error. Please contact admin on Instagram if issue persists</h1>
          <p>{error.message}</p>
          <p>The stack trace is:</p>
          <pre>{error.stack}</pre>
        </section>
      </div>
    );
  } else {
    return <h1>Unknown Error. Refresh again & if issue persists then Contact Admin on Instagram</h1>;
  }
}

export async function clientAction({request}: Route.ClientActionArgs) {
  let formData = await request.formData();

  const data1 = formDataCoversion(formData)
  const response = await login(data1)
  
  console.log(response)
  if (response.status != 200)
    throw data("Something went wrong. Please contact admin if issue persists",response.status)
  if(response?.paid)
    return redirect("/home");
  return redirect("/payment")
}

const Login = (_: Route.ComponentProps) => {
  let fetcher = useFetcher();
  return (
    <div className="flex flex-col bg-black grow text-2xl justify-center items-center h-screen gap-y-8 font-ruddy">
        <h1 className="text-white text-6xl ">Login </h1>
        <fetcher.Form method="post" 
        className="text-white border bg-transparent border-white rounded-xl w-1/4 overflow-clip flex flex-col gap-y-6 p-4">

          <label className="flex flex-col gap-y-2">
            Email
            <input className="border bg-transparent outline-none rounded-lg px-4 py-3" type="email" name="email" placeholder="zoro@gmail.com" />
          </label>          

          <label className="flex flex-col gap-y-2">
            Password
            <input className="border bg-transparent outline-none rounded-lg px-4 py-3" type="password" name="password" placeholder="where_is_konoha?" />
          </label>

          <button type="submit" className="border border-white rounded-xl text-center px-4 py-3 hover:text-green-500">Let's Gooo!</button>
        </fetcher.Form>
        <p className="text-white">Need to create an Account? <Link to={"/signup"} className="text-violet-400 hover:underline">Signup</Link> </p>
    </div>
  )
}

export default Login