import BottomNavigation from "@/components/navigation/BottomNavigation";
import TopNavigation from "@/components/navigation/TopNavigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopNavigation />
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
