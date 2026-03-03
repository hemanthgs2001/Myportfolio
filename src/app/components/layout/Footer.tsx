import Link from "next/link";
import SocialLinks from "../shared/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Hemanth Kumar GS</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer creating amazing web experiences
            </p>
            <SocialLinks />
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: hemanthgs2001@gmail.com</li>
              <li>Phone Number: +91 9108430148</li>
              <li>Location: Banglore, Karnataka, India.</li>
              <li>Open to work</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Hemanth Kuamr GS. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
