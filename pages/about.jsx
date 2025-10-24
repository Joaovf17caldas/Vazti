import React from "react";
import { Card } from "@/components/ui/card";
import { Award, Users, Target, TrendingUp } from "lucide-react";

export default function About() {
  const timeline = [
    {
      year: "2009",
      title: "Fundação",
      description: "A VAZTI Soluções nasceu com o objetivo de democratizar soluções tecnológicas de alta qualidade para empresas de todos os portes."
    },
    {
      year: "2012",
      title: "Expansão Regional",
      description: "Abertura de novos escritórios e consolidação como referência em infraestrutura de TI no mercado nacional."
    },
    {
      year: "2016",
      title: "Certificações Internacionais",
      description: "Obtenção de certificações ISO 27001 e parcerias estratégicas com gigantes da tecnologia mundial."
    },
    {
      year: "2020",
      title: "Transformação Digital",
      description: "Liderança em projetos de cloud computing e segurança cibernética durante a pandemia."
    },
    {
      year: "2024",
      title: "Inovação Contínua",
      description: "Mais de 500 projetos entregues e reconhecimento como uma das empresas mais inovadoras do setor."
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com a qualidade em cada projeto e atendimento."
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Trabalhamos lado a lado com nossos clientes para garantir o sucesso."
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Soluções práticas que geram impacto real nos negócios."
    },
    {
      icon: TrendingUp,
      title: "Inovação",
      description: "Sempre à frente, aplicando as tecnologias mais modernas."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossa História</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Mais de 15 anos transformando a infraestrutura tecnológica de empresas em todo o Brasil
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Nossa <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Missão</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Capacitar empresas através de soluções tecnológicas inovadoras, seguras e escaláveis, 
                que impulsionem a transformação digital e gerem vantagem competitiva sustentável.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acreditamos que a tecnologia deve ser um facilitador, não uma barreira. Por isso, 
                trabalhamos incansavelmente para tornar soluções complexas acessíveis e eficientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossa Trajetória</h2>
            <p className="text-xl text-gray-600">15 anos de história, inovação e crescimento</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-cyan-500 hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                    <Card className="p-6 hover:shadow-xl transition-shadow bg-white">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold mb-4">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </Card>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600">Os princípios que guiam cada decisão e projeto</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-white">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}