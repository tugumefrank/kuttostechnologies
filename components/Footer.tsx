const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-k-silver">
        <p>&copy; {new Date().getFullYear()} Kuttos Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
