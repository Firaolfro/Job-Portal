import "./globals.css";
import Sidebar from "./sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Sidebar />

      {/* maybe include sidebar or header */}
      {/* {children} */}
    </section>
  );
}
