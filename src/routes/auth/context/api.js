export async function loginVerif (user,pass,navigate){

    const response = await fetch(`${import.meta.env.VITE_MAINAPI}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify({
            'username':user,
            'password':pass
        })
    })

    const data = await response.json()

    if(response.status == 200) {
        localStorage.setItem('accesToken',data.token)
        return true
        
    }

    if(response.status == 401 ){
        //navigate('/auth')
        alert('Usuario/Contrasenia incorrecta')
        return false
    }
}