import React from "react";
import { Header } from "../../components/admin/Header";
import { Footer } from "../../components/admin/Footer";
import { Main } from "../../components/admin/Main";

export const AdminMainPage = () => {
  return (
    <div id="admin-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
