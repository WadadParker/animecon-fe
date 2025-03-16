import { useRef } from "react";
import type { Route } from "./+types/Signup";
import { isRouteErrorResponse, Link,  useFetcher , data } from "react-router";
import { formDataCoversion } from "../Utils/Functions";
import { signup, UserDetails } from "../services/auth/Signup";

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
          {status==403 && <Link to={"/login"} className="text-violet-500 hover:underline inline-block">Go to Login</Link>}
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
    return <h1>Unknown Error</h1>;
  }
}

export async function clientAction({request}: Route.ClientActionArgs) {
  throw data("Account already exists, please login",403)
  let formData = await request.formData();

  const data1:UserDetails = formDataCoversion(formData)
  const response = await signup(data1)

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