export function checkToken(){
    const token = localStorage.getItem('accesToken')
    console.log(token)
    if(token) return {
        logged:true,
        username:'MattLeandri',
        id:'123'
    }
    else return{
        logged:false,
        username:'',
        id:''
    }
}
   