import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { logo } from "@/Constants";

export function Header() {
  return (
    <header className="sticky top-0 bg-white  shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="header-logo flex text-center items-center justify-center space-x-2 ">
          <img
            src={logo}
            alt="Logo"
            className="object-cover w-full h-full max-w-[50px] md:max-w-[50px]"
          />
          <h1 className="text-xl font-bold">KCL Public School</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a  >About</a>
          <a  >Programs</a>
          <a  >Admissions</a>
          <a  >News</a>
          <a  href={"#contact"} >Contact</a>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col space-y-4 mt-8">
              {["About", "Programs", "Admissions", "News", "Contact"].map(
                (item) => (
                  <SheetClose asChild key={item}>
                    <a
                      href="#"
                      className="text-lg text-gray-700 hover:text-blue-600"
                    >
                      {item}
                    </a>
                  </SheetClose>
                )
              )}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
