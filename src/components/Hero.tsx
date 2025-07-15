import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Floating animation background */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Avatar */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-white shadow-elegant overflow-hidden">
              <img 
                src={profilePhoto} 
                alt="Raushan Kumar" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-4xl font-bold text-white">RK</span>';
                }}
              />
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-primary/20 animate-ping"></div>
          </div>
          
          {/* Main content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Raushan Kumar
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Software Engineer | Full Stack | .NET | AI/ML Enthusiast
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionate developer with expertise in building scalable web applications and exploring cutting-edge technologies. 
              Always eager to learn and solve complex problems.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="hero-gradient text-white hover:opacity-90 transition-smooth shadow-elegant"
              >
                <Download className="mr-2 h-5 w-5" />
                Resume PDF
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-lift"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <Card className="p-3 hover-lift cursor-pointer group">
                <Github className="h-6 w-6 group-hover:text-primary transition-smooth" />
              </Card>
              
              <Card className="p-3 hover-lift cursor-pointer group">
                <Linkedin className="h-6 w-6 group-hover:text-primary transition-smooth" />
              </Card>
              
              <Card className="p-3 hover-lift cursor-pointer group">
                <ExternalLink className="h-6 w-6 group-hover:text-primary transition-smooth" />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}