import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Package, Armchair, TreeDeciduous, HardHat } from "lucide-react";

const services = [
  {
    title: "Residential Junk Removal",
    icon: Home,
    description: "Clear out unwanted items from your home quickly and efficiently. Perfect for decluttering, moving, or estate cleanouts."
  },
  {
    title: "Commercial Junk Removal",
    icon: Building2,
    description: "Professional waste removal services for businesses, offices, and retail spaces. Minimize downtime with our efficient service."
  },
  {
    title: "Appliance Removal",
    icon: Package,
    description: "Safe removal and disposal of old appliances including refrigerators, washers, dryers, and more."
  },
  {
    title: "Furniture Removal",
    icon: Armchair,
    description: "We handle furniture of all sizes, from single pieces to entire room sets. Eco-friendly disposal and donation options available."
  },
  {
    title: "Yard Waste Removal",
    icon: TreeDeciduous,
    description: "Clear away branches, leaves, grass clippings, and other yard debris. Keep your outdoor space looking pristine."
  },
  {
    title: "Construction Debris Removal",
    icon: HardHat,
    description: "Efficient removal of construction materials, renovation waste, and demolition debris for contractors and homeowners."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen py-12 px-4 bg-background">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive junk removal solutions for residential and commercial needs. 
            No job is too big or too small!
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-secondary">
                <CardHeader>
                  <Icon className="h-12 w-12 text-secondary mb-3" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Don't See What You Need?</h2>
          <p className="text-lg text-muted-foreground mb-4">
            We handle many other types of junk removal. Contact us to discuss your specific needs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
