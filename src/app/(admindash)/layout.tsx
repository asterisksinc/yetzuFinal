"use client";

import React, { useState } from "react";
import AdminSidebar from "./components/AdminSideBar";
import AdminHeader from "./components/AdminHeader";

export default function AdminDashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AdminHeader />
      <AdminSidebar />
      <div>{children}</div>
    </div>
  );
}
