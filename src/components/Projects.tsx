import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Shield, Users, Bot } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      icon: Zap,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for scalability.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      icon: Shield,
      title: "Identity Management System",
      description: "Secure authentication and authorization system with multi-factor authentication, role-based access control, and audit logging.",
      technologies: [".NET Core", "SQL Server", "JWT", "Azure AD", "React"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      icon: Users,
      title: "Project Management Tool",
      description: "Collaborative project management platform with real-time updates, task tracking, and team communication features.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "WebSocket", "Docker"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      icon: Bot,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing capabilities, integrating with various APIs for enhanced functionality.",
      technologies: ["Python", "TensorFlow", "FastAPI", "OpenAI", "React"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Some of my notable work and side projects
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="hover-lift group shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span>{project.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="tech-badge"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="hover-lift">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="hover-lift">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="hover-lift group"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span>{project.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2 pt-1">
                    <Button variant="outline" size="sm" className="text-xs h-8">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs h-8">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
