import { CreateTestPage } from "pages/create-test-page/CreateTestPage";
import { EditTestPage } from "pages/edit-test-page/EditTestPage";
import { TestPage } from "pages/test-page/TestPage";
import { UserTestsPage } from "pages/user-tests-page/UserTestsPage";
import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "pages/login-page/LoginPage";
import { MainPage } from "pages/main-page/MainPage";
import { RegisterPage } from "pages/register-page/RegisterPage";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/user-tests" element={<UserTestsPage />} />
         <Route path="/tests/create" element={<CreateTestPage />} />
         <Route path="/tests/edit/:testId" element={<EditTestPage />} />
         <Route path="/test/:testId" element={<TestPage />} />

         <Route path="*" element={<Navigate to="/" />} />
       </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
