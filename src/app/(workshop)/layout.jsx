import { Header } from "@/components/workshop/header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
