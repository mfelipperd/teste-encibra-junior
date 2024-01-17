import { TaskProvider } from "@/context/task/task.context"
import { UserProvider } from "@/context/user/user.context"

export const Providers = ({ children }: {children: React.ReactNode}) => {
    return (
        <>
        <TaskProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </TaskProvider>
        </>
    )
}