import { FormLink, WhatsappNumber } from "@/Constants";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">KCL Public School</h3>
          <p className="text-gray-400">Est. 2025</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 flex flex-col">
            {/* {["Admissions", "Calendar", "Careers", "Directory"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))} */}

            <button
              className="text-start"
              onClick={() => window.open(`https://wa.me/${WhatsappNumber}`)}
            >
              Whatsapp
            </button>
            <a href="mailto:kclpublicschoolayodhya@gmail.com">Email</a>
            <a href={FormLink}>Admission Form</a>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-gray-400">
            Sirhir Narsinghpur, Ayodhya, Uttar Pradesh, 224001
          </p>
          <p className="text-gray-400">kclpublicschoolayodhya@gmail.com</p>
          <p className="text-gray-400">{WhatsappNumber}</p>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-gray-800">
        <p className="text-gray-400">
          &copy; 2025 KCL Public School. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
