import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Network, Server, Cloud, Lock, Zap, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      icon: Shield,
      title: "Segurança da Informação",
      description: "Proteção completa para seus dados e sistemas",
      color: "from-blue-500 to-cyan-500",
      benefits: [
        "Redução de 95% em incidentes de segurança",
        "Conformidade com LGPD e ISO 27001",
        "Monitoramento 24/7 de ameaças",
        "Resposta rápida a incidentes"
      ],
      services: [
        "Firewall e IPS/IDS",
        "Antivírus corporativo",
        "Backup e recuperação de desastres",
        "Políticas de segurança",
        "Testes de penetração",
        "Consultoria em LGPD"
      ]
    },
    {
      icon: Network,
      title: "Infraestrutura de Redes",
      description: "Redes corporativas de alta performance e confiabilidade",
      color: "from-purple-500 to-blue-500",
      benefits: [
        "Aumento de 80% na velocidade de transferência",
        "99.9% de disponibilidade garantida",
        "Redução de custos operacionais",
        "Escalabilidade sob demanda"
      ],
      services: [
        "Cabeamento estruturado",
        "Switches e roteadores",
        "Wi-Fi corporativo",
        "VPN e acesso remoto",
        "Balanceamento de carga",
        "Monitoramento de rede"
      ]
    },
    {
      icon: Server,
      title: "Infraestrutura de TI",
      description: "Servidores, storage e virtualização para seu datacenter",
      color: "from-cyan-500 to-teal-500",
      benefits: [
        "Redução de 60% em custos com hardware",
        "Maior eficiência energética",
        "Recuperação rápida de falhas",
        "Gestão centralizada de recursos"
      ],
      services: [
        "Servidores físicos e virtuais",
        "Storage e SAN",
        "Virtualização (VMware, Hyper-V)",
        "Backup corporativo",
        "Alta disponibilidade",
        "Gestão de datacenter"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Migração e gestão de ambientes em nuvem",
      color: "from-indigo-500 to-purple-500",
      benefits: [
        "Redução de até 70% em CAPEX",
        "Elasticidade e escalabilidade",
        "Acesso de qualquer lugar",
        "Atualizações automáticas"
      ],
      services: [
        "AWS, Azure, Google Cloud",
        "Migração para nuvem",
        "Nuvem híbrida",
        "Cloud backup",
        "DevOps e CI/CD",
        "Otimização de custos"
      ]
    },
    {
      icon: Lock,
      title: "Compliance e Governança",
      description: "Adequação às normas e melhores práticas de TI",
      color: "from-orange-500 to-red-500",
      benefits: [
        "Conformidade regulatória garantida",
        "Redução de riscos legais",
        "Processos padronizados",
        "Auditorias facilitadas"
      ],
      services: [
        "LGPD compliance",
        "ISO 27001",
        "ITIL e COBIT",
        "Políticas e procedimentos",
        "Auditorias de TI",
        "Gestão de riscos"
      ]
    },
    {
      icon: Zap,
      title: "Otimização e Performance",
      description: "Melhoria contínua da infraestrutura de TI",
      color: "from-yellow-500 to-orange-500",
      benefits: [
        "Aumento de 50% em performance",
        "Identificação proativa de gargalos",
        "Redução de custos operacionais",
        "Melhor experiência do usuário"
      ],
      services: [
        "Análise de performance",
        "Otimização de recursos",
        "Monitoramento proativo",
        "Ajuste fino de sistemas",
        "Planejamento de capacidade",
        "Consultoria especializada"
      ]
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossos Projetos</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Soluções completas em tecnologia que transformam negócios e geram resultados reais
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
                <div className="grid md:grid-cols-2">
                  {/* Left Side - Info */}
                  <div className="p-8 md:p-12 bg-white">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="text-lg text-gray-600 mb-8">{project.description}</p>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        Benefícios Principais
                      </h3>
                      <ul className="space-y-3">
                        {project.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 mt-2" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Side - Services */}
                  <div className={`p-8 md:p-12 bg-gradient-to-br ${project.color} text-white`}>
                    <h3 className="text-2xl font-bold mb-6">Serviços Inclusos</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {project.services.map((service, i) => (
                        <Badge
                          key={i}
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30 py-2 px-4 justify-start text-base"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                      <p className="text-sm font-medium">
                        💡 Solicite uma avaliação gratuita e descubra como podemos ajudar sua empresa.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}