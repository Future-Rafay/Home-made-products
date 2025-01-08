export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Homemade Products. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="#"
              className="text-emerald-500 hover:text-emerald-600 transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-emerald-500 hover:text-emerald-600 transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  }
  