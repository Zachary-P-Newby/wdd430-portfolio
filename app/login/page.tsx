// app/login/page.tsx
import LoginForm from "../components/LoginForm";

export default function LoginPage() {

    return (
    <main className="mx-auto px-30 py-12 bg-blue-200 w-full min-h-screen m-0">
        <h1 className="text-cyan-900 font-bold text-3xl text-center">Sign In</h1>
        <div className="bg-sky-800 p-4 rounded-lg shadow-md">
            <LoginForm />
        </div>
        
        
    </main>
    );
};
