import SettingsHeader from "./header";

export default function SettingLayout({ children }) {
  // Removed the type annotation here
  return (
    <div className="p-6">
      <SettingsHeader />
      {children}
    </div>
  );
}

// import React from "react";
// import SettingsHeader from "./header";

// export default function SettingLayout({
//   children,
// }: {
//   children: React.ReactNode,
// }) {
//   return (
//     <div className="p-6">
//       <SettingsHeader />
//       {children}
//     </div>
//   );
// }
