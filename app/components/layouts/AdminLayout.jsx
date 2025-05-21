import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-lg font-bold">Admin Panel</h2>
        <nav className="flex flex-col gap-2">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/users">Users</Link>
          <Link href="/admin/settings">Settings</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}

// export default function AdminLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="flex min-h-screen bg-gray-100">
//         <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
//           <h2 className="text-lg font-bold">Admin Panel</h2>
//           <nav className="space-y-2">
//             <a href="/admin" className="block hover:text-blue-400">
//               Dashboard
//             </a>
//             <a href="/admin/users" className="block hover:text-blue-400">
//               Users
//             </a>
//             <a href="/admin/settings" className="block hover:text-blue-400">
//               Settings
//             </a>
//           </nav>
//         </aside>
//         <main className="flex-1 p-8">{children}</main>
//       </body>
//     </html>
//   );
// }
