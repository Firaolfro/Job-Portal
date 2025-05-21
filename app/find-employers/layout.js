import Header from "../components/layouts/Header";

export default function FindEmployerLayout({ children }) {
  return (
    <>
      <Header menuKey="jobSeeker" />

      {children}
    </>
  );
}
