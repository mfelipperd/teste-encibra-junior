'use client'
import NavigationBar from "@/components/navbar";
import { useUserContext } from "@/context/user/user.context";

export default function Dashboard() {
    const { user } = useUserContext()
    console.log(user)
    return(
        <>
        <NavigationBar></NavigationBar>
        <div>
        Bem vindo {user.name}
            <div>
                Lista de Tarefas
            </div>
        </div>
        </>
    )
}