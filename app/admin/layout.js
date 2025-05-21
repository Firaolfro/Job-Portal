// import AdminLayout from "/components/layouts/AdminLayout";
import AdminLayout from "../components/layouts/AdminLayout";

export default function Layout({ children }) {
  return <AdminLayout>{children}</AdminLayout>;
}

// export default function AdminLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="flex">
//         <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
//           <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
//           <nav className="space-y-2">
//             <a href="/admin" className="block hover:text-blue-300">
//               Dashboard
//             </a>
//             <a href="/admin/users" className="block hover:text-blue-300">
//               Users
//             </a>
//           </nav>
//         </aside>
//         <main className="flex-1 p-6 bg-gray-100">{children}</main>
//       </body>
//     </html>
//   );
// }
