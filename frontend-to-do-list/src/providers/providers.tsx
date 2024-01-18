'use client'
import { TaskProvider } from "@/context/task/task.context"
import { UserProvider } from "@/context/user/user.context"
import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }: {children: React.ReactNode}) => {
    return (
        <>
            <TaskProvider>
                <UserProvider>
                    <SessionProvider>
                    {children}
                    </SessionProvider>
                </UserProvider>
            </TaskProvider>
        </>
    )
}