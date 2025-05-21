import Header from "./Header";
import Footer from "./Footer";

export default function BaseLayout({ children, menuKey }) {
  return (
    <>
      <Header menuKey={menuKey} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
