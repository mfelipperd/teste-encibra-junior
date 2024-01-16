import { UserProvider } from "@/context/user/user.context"

export const Providers = ({ children }: {children: React.ReactNode}) => {
    return (
        <>
        <UserProvider>
            {children}
        </UserProvider>
        </>
    )
}