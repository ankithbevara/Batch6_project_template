/**
 * AppHeader component serves as the header for the Logistics Control Tower dashboard.
 * It displays the title of the dashboard and a mock user name on the right side.
 * The header is styled using Ant Design's Space and Typography components to ensure a clean and professional look.
 * The title is prominently displayed with a larger font size and bold weight, while the subtitle provides additional context in a smaller, lighter font.
 * The mock user name is displayed on the right side in a secondary text style to indicate that it's not the main focus of the header.
 */
import { Space, Typography } from "antd";

export default function AppHeader() {
  return (
    <Space style={{ width: "100%", justifyContent: "space-between" }}>
      <div>
        <Typography.Text style={{ fontSize: 16, fontWeight: 800, color: "#0b1b2b" }}>
          Logistics Control Tower
        </Typography.Text>
        <div style={{ fontSize: 12, color: "rgba(0,0,0,0.45)" }}>
          Operations & Visibility Dashboard
        </div>
      </div>

      <Typography.Text type="secondary">Mock User</Typography.Text>
    </Space>
  );
}