import { Route } from "react-router-dom";
import "./App.css";
import SignInForm from "./_auth/forms/SignInForm";
import Home from "./_root/pages/Home";

function App() {
  return (
    <>
      <main className="flex h-screen">
        <Route path="/sign-in" element={<SignInForm />} />
        <Route index element={<Home/>}/>
      </main>
    </>
  );
}

export default App;
