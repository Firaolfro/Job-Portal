import Header from "./header";

export default function SettingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6">
      <Header />
      {children}
    </div>
  );
}