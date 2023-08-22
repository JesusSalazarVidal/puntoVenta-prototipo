export function Footer() {
  return (
    <footer className="bg-emerald-300 text-gray-700 font-bold p-4 mt-4 mb-2">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} insoelmexico.com</p>
      </div>
    </footer>
  );
}

export default Footer;
