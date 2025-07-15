import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Settings, Smartphone, Palette } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["C#", "JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
    },
    {
      icon: Settings,
      title: "Frameworks & Libraries",
      skills: [".NET Core", "React", "Angular", "Node.js", "Express", "Spring Boot", "Entity Framework"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["SQL Server", "MongoDB", "PostgreSQL", "Redis", "MySQL"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["Azure", "AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Linux"]
    },
    {
      icon: Smartphone,
      title: "Mobile & Web",
      skills: ["React Native", "Flutter", "HTML5", "CSS3", "SASS", "Bootstrap", "Tailwind"]
    },
    {
      icon: Palette,
      title: "Tools & Technologies",
      skills: ["Visual Studio", "VS Code", "Postman", "Swagger", "Figma", "Jira", "Slack"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="tech-badge"
                      >
                        {skill}
                      </Badge>
                    ))}
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