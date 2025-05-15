export default function HoerprobenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {children}
    </section>
  );
}
