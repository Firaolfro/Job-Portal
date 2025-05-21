
import Header from "../components/layouts/Header";

export default function FindCandidateLayout({ children }) {
  return (
    <>
      <Header menuKey="employer" />
      {children}
    </>
  );
}
