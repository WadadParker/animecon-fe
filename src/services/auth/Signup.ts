const apiUrl  = 'http://localhost:3000'

export type UserDetails = {
    name: String;
    email: String;
    password: String
}

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
    return data }
    catch(error) {
        console.log(error)
    }
}