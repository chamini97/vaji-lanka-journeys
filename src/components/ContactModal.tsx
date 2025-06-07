
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '../lib/supabaseClient';


interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using your Formspree endpoint
      const response = await fetch('https://formspree.io/f/xnnvnjgj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New inquiry from ${formData.name} - VajiSriLankaTours`
        }),
      });

      if (response.ok) {
        // ✅ NEW: Save to Supabase
      const { error } = await supabase.from('contacts').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        }
      ]);

      if (error) {
        console.error("Supabase insert error:", error.message);
      }
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        onClose();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Fallback to mailto if form service fails
      const subject = `Inquiry from ${formData.name} - VajiSriLankaTours`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:vajisrilankatours1984@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: "Opening Email Client",
        description: "Please send the email from your email client, or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
            Contact VajiSriLankaTours
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                    <Phone className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600 text-sm">+971 55 319 6525</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                    <Mail className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 text-sm break-all">vajisrilankatours1984@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                    <MessageCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-gray-600 text-sm">+971 55 319 6525</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                    <MapPin className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600 text-sm">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Why Contact Us?</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Custom tour planning</li>
                <li>• Competitive pricing</li>
                <li>• 24/7 customer support</li>
                <li>• Local expertise</li>
                <li>• Flexible itineraries</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1"
                placeholder="+94 77 123 4567"
              />
            </div>
            
            <div>
              <Label htmlFor="service">Service Interested In</Label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select a service</option>
                <option value="airport-transfer">Airport Transfer</option>
                <option value="tour-package">Tour Package</option>
                <option value="vehicle-rental">Vehicle Rental</option>
                <option value="custom-tour">Custom Tour</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1"
                rows={4}
                placeholder="Tell us about your travel plans, dates, number of people, etc."
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
            
            <p className="text-xs text-gray-500 text-center">
              Your message will be sent directly to our team. We respond within 24 hours.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
