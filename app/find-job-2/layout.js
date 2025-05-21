// app/find-job-2/layout.jsx
import Header from "../components/layouts/Header";

export default function FindJobLayout({ children }) {
  console.log(">>> FindJobLayout rendered");
  return (
    <>
      <Header menuKey="jobSeeker" />
      {children}
    </>
  );
}
