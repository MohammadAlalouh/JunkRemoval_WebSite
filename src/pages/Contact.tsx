import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CalendarIcon, MessageCircle, Mail, Facebook } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  serviceDate: z.date({
    required_error: "Service date is required",
  }),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().trim().min(1, "Please tell us how we can help").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append("name", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("serviceDate", format(data.serviceDate, "PPP"));
      formData.append("serviceType", data.serviceType);
      formData.append("message", data.message);
      formData.append("_cc", data.email); // Send copy to user
      formData.append("_subject", `Service Request from ${data.fullName}`);
      formData.append("_template", "table"); // Nice table format
      formData.append("_captcha", "false"); // Disable captcha

      const response = await fetch("https://formsubmit.co/premierjunkremovalsolutions@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Request submitted successfully!", {
          description: "We'll get back to you soon. A copy has been sent to your email.",
        });
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error("Failed to submit request", {
        description: "Please try again or contact us directly via WhatsApp or email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = "19024012683";
  const whatsappMessage = encodeURIComponent("I am interested in your services");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen py-12 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch for a free, no-obligation quote!
          </p>
        </header>

        <div className="bg-card border rounded-lg p-6 md:p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Get In Touch</h2>
          <div className="grid gap-4 mb-6">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-accent hover:bg-accent/80 rounded-lg transition-colors group"
            >
              <MessageCircle className="h-6 w-6 text-accent-foreground" />
              <div>
                <div className="font-semibold text-accent-foreground">WhatsApp</div>
                <div className="text-sm text-accent-foreground/80">Message us directly</div>
              </div>
            </a>
            
            <a 
              href="mailto:premierjunkremovalsolutions@gmail.com"
              className="flex items-center gap-3 p-4 bg-accent hover:bg-accent/80 rounded-lg transition-colors group"
            >
              <Mail className="h-6 w-6 text-accent-foreground" />
              <div>
                <div className="font-semibold text-accent-foreground">Email</div>
                <div className="text-sm text-accent-foreground/80">premierjunkremovalsolutions@gmail.com</div>
              </div>
            </a>
            
            <a 
              href="https://www.facebook.com/PremierJunkRemovalSolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-accent hover:bg-accent/80 rounded-lg transition-colors group"
            >
              <Facebook className="h-6 w-6 text-accent-foreground" />
              <div>
                <div className="font-semibold text-accent-foreground">Facebook</div>
                <div className="text-sm text-accent-foreground/80">Follow us on Facebook</div>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-card border rounded-lg p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Request a Quote</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(902) 401-2683" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="serviceDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Required Date for Service *</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-popover" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Service *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-popover">
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="appliance">Appliance Removal</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Please let us know how we may help you! *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about the items you need removed, approximate quantity, and any other details..."
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
