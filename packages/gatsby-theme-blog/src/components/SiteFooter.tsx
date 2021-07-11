export const SiteFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 mb-8">
      <section>&copy; {year} GIUEM</section>
    </footer>
  );
};
