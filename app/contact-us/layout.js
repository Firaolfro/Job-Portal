import Header from "../components/layouts/Header";

export default function ContactUsLayout({ children }) {
  return (
    <>
      <Header menuKey="home" />
      {children}
    </>
  );
}
