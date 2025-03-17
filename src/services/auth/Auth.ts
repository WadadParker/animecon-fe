const apiUrl  = import.meta.env.VITE_API_URL

export type UserDetails = {
    name: String;
    email: String;
    password: String
}

export type LoginUserDetails = Pick<UserDetails,'email'|'password'>

export const signup = async( userDetails:UserDetails ) => {
    try {
    const response = await fetch(`${apiUrl}/users/signup`,{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(userDetails)
    }
    )

    const data = await response.json();

    if(response.status == 200)
        localStorage.setItem("JWT",data.jwt)

    return {...data , status:response.status }
}
    catch(error) {
        console.log(error)
    }
}

export const login = async( userDetails:LoginUserDetails ) => {
    try {
    const response = await fetch(`${apiUrl}/users/login`,{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(userDetails)
    }
    )

    const data = await response.json();

    if(response.status == 200)
        localStorage.setItem("JWT",data.jwt)

    return {...data , status:response.status }
}
    catch(error) {
        console.log(error)
    }
}