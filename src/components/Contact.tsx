import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "raushan.codes@outlook.com",
      link: "mailto:raushan.codes@outlook.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "(+91) 7667938687",
      link: "tel:+917667938687"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Delhi, India",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, title: "GitHub", link: "#" },
    { icon: Linkedin, title: "LinkedIn", link: "#" },
    { icon: ExternalLink, title: "Portfolio", link: "https://raushan.codes" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss opportunities and collaborations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <contact.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{contact.title}</h4>
                        <a 
                          href={contact.link}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              {/* Social Links */}
              <Card className="p-6 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-smooth group"
                        title={social.title}
                      >
                        <social.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-smooth" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="p-6 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" className="transition-smooth" />
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="transition-smooth" 
                    />
                  </div>
                  <Input 
                    placeholder="Subject" 
                    className="transition-smooth" 
                  />
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="transition-smooth resize-none"
                  />
                  <Button 
                    type="submit" 
                    className="w-full hero-gradient text-white hover:opacity-90 transition-smooth"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}