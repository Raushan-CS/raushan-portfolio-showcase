import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Users, Award } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expert in both frontend and backend technologies"
    },
    {
      icon: Zap,
      title: "AI/ML Enthusiast",
      description: "Exploring machine learning and artificial intelligence"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Experience in leading and mentoring teams"
    },
    {
      icon: Award,
      title: "Problem Solver",
      description: "Passionate about solving complex technical challenges"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Passionate about creating innovative solutions and continuous learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Bio */}
            <div className="space-y-6">
              <Card className="p-6 shadow-card">
                <CardContent className="p-0">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I'm a dedicated software engineer with a strong foundation in full-stack development 
                    and a passion for emerging technologies. Currently based in Delhi, India, I specialize 
                    in building scalable web applications using modern frameworks and cloud technologies.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 shadow-card">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-3">Current Focus</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">.NET Development</Badge>
                    <Badge variant="secondary">React/Angular</Badge>
                    <Badge variant="secondary">Cloud Architecture</Badge>
                    <Badge variant="secondary">AI/ML Integration</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right side - Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover-lift cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{highlight.title}</h4>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}