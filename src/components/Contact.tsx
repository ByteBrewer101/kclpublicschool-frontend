
import { mapUrl } from "@/Constants";

export function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions or want to schedule a visit? We're here to help!
          </p>
        </div>

        {/* Grid for Form and Map */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSerBSTgQZ3v8hzNjorzDbAhOEKwlwn_qx1p_GPs7IhMop1zWA/viewform?embedded=true"
              width="640"
              height="382"
           
            >
              Loading…
            </iframe>
          </div>

          {/* Map Section */}
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <iframe
                src={mapUrl}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
