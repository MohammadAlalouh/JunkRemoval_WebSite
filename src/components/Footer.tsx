import { MessageCircle, Phone, Facebook } from "lucide-react";

export const Footer = () => {
  const whatsappNumber = "19024012683";
  const whatsappMessage = encodeURIComponent("I am interested in your services");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg mb-2">Premier Junk Removal Solutions</h3>
            <p className="text-sm opacity-90">Professional junk removal services you can trust</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Location & Hours</h4>
            <p className="text-sm opacity-90">Servicing Halifax NS and surrounding areas</p>
            <p className="text-sm opacity-90 mt-1">Mon-Sun 8am-10pm</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Get In Touch</h4>
            <div className="space-y-2">
              <a 
                href="tel:+19024012683"
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                (902) 401-2683
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md transition-colors text-sm font-medium"
              >
                <MessageCircle className="h-5 w-5" />
                Message on WhatsApp
              </a>
              <a 
                href="https://www.facebook.com/PremierJunkRemovalSolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity mt-2"
              >
                <Facebook className="h-4 w-4" />
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-6 pt-4 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Premier Junk Removal Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
