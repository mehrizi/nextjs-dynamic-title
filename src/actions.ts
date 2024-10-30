'use server'
export async function getData(id:number){
    const res = await fetch(`https://6721ffa82108960b9cc27aeb.mockapi.io/page/1`)
    return await res.json()
}