/**
 * App component serves as the main entry point for the Logistics Control Tower dashboard.
 * It sets up the overall layout of the application using Ant Design's Layout components, including a sidebar for navigation and a header for the dashboard title.
 * The content area is managed using React Router's Routes and Route components to render different pages based on the URL path.
 * The user's role is mocked for demonstration purposes, which can be used to conditionally render different menu items in the sidebar and control access to certain pages.
 * The layout is designed to be responsive and visually appealing, with a consistent color scheme and spacing throughout the application.
 */
// import React from "react";
import { Layout } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";
import AppSidebar from "./layout/AppSidebar";
import AppHeader from "./layout/AppHeader";

import DashboardHome from "./pages/DashboardHome";
import OperationsView from "./pages/OperationsView";
import VendorManagement from "./pages/VendorManagement";
import Documents from "./pages/Documents";
import Analytics from "./pages/Analytics";

const { Sider, Header, Content } = Layout;

// mocking a role (later: from existing auth) until we add login page and auth flow - change this value to test different roles and access levels in the app
const role = "ADMIN"; // e.g. "ADMIN" | "OPS" | "VENDOR_MGR" | "ANALYST"

// Define the main App component which sets up the layout and routing for the dashboard application
export default function App() {
  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f7fa" }}>
      <Sider
        width={280}
        theme="dark"
        collapsible={false}
        trigger={null}
        style={{ background: "#0f1115" }}
      >
        <AppSidebar role={role} />
      </Sider>

      <Layout style={{ background: "#f5f7fa" }}>
        <Header
          style={{
            background: "#fff",
            padding: "12px 20px",
            height: "auto",
            lineHeight: "normal",
            borderBottom: "1px solid #e9edf3",
          }}
        >
          <AppHeader />
        </Header>

        <Content style={{ padding: 20, background: "#f5f7fa"}}>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/operations" element={<OperationsView />} />
            <Route path="/vendors" element={<VendorManagement />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}
