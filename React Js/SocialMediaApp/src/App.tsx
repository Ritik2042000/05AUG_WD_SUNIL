import { Route, Routes } from "react-router-dom";
import "./globals.css";
import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <main className="flex h-screen bg-background text-foreground">
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>
          <Route element={<RootLayout />}>
            <Route index path="/" element={<Home />} />
          </Route>
        </Routes>
        <Toaster/>
      </main>
    </>
  );
}

export default App;
