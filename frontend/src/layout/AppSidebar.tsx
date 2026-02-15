/**
 * AppSidebar component renders a sidebar navigation menu for the Logistics Control Tower dashboard.
 * It displays different menu items based on the user's role, allowing for role-based access control.
 * The sidebar includes a header with the dashboard title and a footer with user information and role display.
 * The menu items are defined with icons and paths, and clicking on them navigates to the corresponding routes using React Router's useNavigate hook.
 * The selected menu item is highlighted based on the current URL path, providing visual feedback to the user about their current location in the app.
 */
import React, { useMemo } from "react";
import { Menu, Avatar, Typography, Space } from "antd";
import type { MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import {
    DashboardOutlined,
    DeploymentUnitOutlined,
    TeamOutlined,
    FileSearchOutlined,
    BarChartOutlined,
    UserOutlined,
} from "@ant-design/icons";


type Role = "ADMIN" | "OPS" | "VENDOR_MGR" | "ANALYST";
type Props = { role: Role | string };

type Item = { key: string; label: string; icon: React.ReactNode; path: string; roles: Role[] };

// Define the AppSidebar component which takes a user role as a prop and renders a sidebar with navigation items based on that role
export default function AppSidebar({ role }: Props) {
    const nav = useNavigate();
    const { pathname } = useLocation();

    const items: Item[] = useMemo(
        () => [
            { key: "home", label: "Dashboard", icon: <DashboardOutlined />, path: "/", roles: ["ADMIN","OPS","VENDOR_MGR","ANALYST"] },
            { key: "ops", label: "Operations", icon: <DeploymentUnitOutlined />, path: "/operations", roles: ["ADMIN","OPS"] },
            { key: "vendors", label: "Vendors", icon: <TeamOutlined />, path: "/vendors", roles: ["ADMIN","VENDOR_MGR"] },
            { key: "docs", label: "Documents", icon: <FileSearchOutlined />, path: "/documents", roles: ["ADMIN","OPS","VENDOR_MGR"] },
            { key: "analytics", label: "Analytics", icon: <BarChartOutlined />, path: "/analytics", roles: ["ADMIN","ANALYST"] },
        ],
        [] // static items, no dependencies needed
    );
    
    const filtered = items.filter((i) => i.roles.includes(role as Role));
    const menuItems: MenuProps["items"] = filtered.map((i) => ({
        key: i.path,
        icon: i.icon,
        label: i.label,
        onClick: () => nav(i.path),
    }));

    const selectedKey = filtered.some((i) => i.path === pathname) ? pathname : "/"; // default to home if current path isn't in menu
    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <Typography.Text style={{ 
                    color: "#ffffff", 
                    fontWeight: 600,
                    letterSpacing: 0.4,
                    fontSize: 16,}}>
                    Control Tower
                </Typography.Text>
            </div>

            <div style={{ flex: 1, padding: "8px 0" }}>
                <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]} items={menuItems} />
            </div>

            <div style={{ padding: 14, borderTop: "1px solid rgba(186, 29, 29, 0.08)" }}>
                <Space>
                    <Avatar icon={<UserOutlined />} />
                    <div style={{ lineHeight: 1.1 }}>
                        <Typography.Text style={{ color: "#ffffff", fontWeight: 600 }}>
                            Mock User
                        </Typography.Text>
                        <br />
                        <Typography.Text style={{ color: "rgba(255,255,255,0.55)", fontSize: 12 }}>
                            Role: {String(role)}
                        </Typography.Text>
                    </div>
                </Space>
            </div>
        </div>
    );
}