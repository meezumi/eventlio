import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <div className="flex h-screen flex-col">
      {/* h-screen -> maximum height 
          flex-col -> so the components stack in a column */}
      <Header />
      <main className="flex-1"> {children}</main>
      <Footer />

    </div>
  );
}
