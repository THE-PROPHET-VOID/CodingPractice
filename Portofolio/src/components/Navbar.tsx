import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.screenY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300
                 ${
                   isScrolled
                     ? "py-3 bg-background/80 backdrop-blur shadow"
                     : "py-5"
                 }`}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center "
          href="#hero"
        >
          <span className="relative z-10 ">
            <span className="text-glow text-foreground">Adonyas's</span>{" "}
            Portofolio
          </span>
        </a>
        {/* desktop nav */}

        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              href={item.href}
              key={key}
              className="text-foreground/80 hover:text-primary transition-color duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile nav */}
        <button
          onClick={() => setOpenNavbar((prev) => !prev)}
          className="md:hidden p-2 text-forground z-50"
          aria-label={openNavbar ? "Close Menu" : "Open Menu"}
        >
          {openNavbar ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center
                     transitioin-all duration-300 md:hidden ${
                       openNavbar
                         ? "opacity-100 pointer-events-auto"
                         : "opacity-0 pointer-events-none"
                     }`}
        >
          <div className="flex flex-col  space-y-8">
            {navItems.map((item, key) => (
              <a
                href={item.href}
                key={key}
                onClick={() => setOpenNavbar(false)}
                className="text-foreground/80 hover:text-primary transition-color duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
