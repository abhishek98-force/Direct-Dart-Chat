import { ThemeProvider } from 'next-themes'

const AuthLayout = ({children} : {children : React.ReactNode }) => {
    return (
        <div className="flex h-full justify-center items-center">
            <ThemeProvider>
             {children}
            </ThemeProvider>
        </div>
    )
}

export default  AuthLayout ;
