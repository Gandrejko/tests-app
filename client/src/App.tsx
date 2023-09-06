import { CreateTestPage } from "pages/create-test-page/CreateTestPage";
import { UserTestsPage } from "pages/user-tests-page/UserTestsPage";
import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "pages/login-page/LoginPage";
import { MainPage } from "pages/main-page/MainPage";
import { RegisterPage } from "pages/register-page/RegisterPage";

const queryClient = new QueryClient();
function App() {
  return (
   <BrowserRouter>
     <QueryClientProvider client={queryClient}>
       <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/user-tests" element={<UserTestsPage />} />
         <Route path="/tests/create" element={<CreateTestPage />} />

         <Route path="*" element={<Navigate to="/" />} />
       </Routes>
     </QueryClientProvider>
   </BrowserRouter>
  );
}

export default App;
