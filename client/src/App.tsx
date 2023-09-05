import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login-page/LoginPage";
import { MainPage } from "./pages/main-page/MainPage";
import { RegisterPage } from "./pages/register-page/RegisterPage";

function App() {
  const queryClient = new QueryClient();
  return (
   <BrowserRouter>
     <QueryClientProvider client={queryClient}>
       <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/register" element={<RegisterPage />} />

         <Route path="*" element={<Navigate to="/" />} />
       </Routes>
     </QueryClientProvider>
   </BrowserRouter>
  );
}

export default App;