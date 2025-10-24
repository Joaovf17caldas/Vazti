import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      client: "Banco Regional XYZ",
      industry: "Financeiro",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
      challenge: "Necessidade de modernizar toda infraestrutura de segurança para atender regulamentações do Banco Central e proteger dados de milhões de clientes.",
      solution: "Implementação de firewall de nova geração, sistema de prevenção de intrusão, criptografia end-to-end e monitoramento 24/7 com SOC dedicado.",
      results: [
        { icon: TrendingUp, label: "95% de redução em incidentes", value: "-95%" },
        { icon: Clock, label: "Tempo de resposta", value: "< 5min" },
        { icon: Award, label: "Certificação", value: "ISO 27001" },
        { icon: Users, label: "Usuários protegidos", value: "2M+" }
      ],
      testimonial: "A VAZTI transformou nossa segurança da informação. Hoje temos tranquilidade para focar no nosso negócio.",
      author: "Carlos Silva, CTO"
    },
    {
      client: "Indústria Metalúrgica ABC",
      industry: "Industrial",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      challenge: "Rede corporativa lenta e instável afetando produtividade. Necessidade de conectar 5 unidades fabris em tempo real.",
      solution: "Redesign completo da infraestrutura de rede com fibra óptica, switches de alta performance, SD-WAN e redundância total.",
      results: [
        { icon: TrendingUp, label: "Aumento de velocidade", value: "+350%" },
        { icon: Clock, label: "Disponibilidade", value: "99.9%" },
        { icon: Users, label: "Funcionários conectados", value: "1.200" },
        { icon: Award, label: "Tempo de projeto", value: "90 dias" }
      ],
      testimonial: "A nova rede revolucionou nossa operação. Conseguimos integrar todas as unidades sem problemas.",
      author: "Ana Paula Rodrigues, Diretora de TI"
    },
    {
      client: "Hospital São Lucas",
      industry: "Saúde",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
      challenge: "Sistema de prontuários eletrônicos lento e risco de perda de dados críticos de pacientes. Necessidade de alta disponibilidade.",
      solution: "Migração para cloud híbrida com Azure, implementação de backup em tempo real, redundância geográfica e sistema de alta disponibilidade.",
      results: [
        { icon: TrendingUp, label: "Redução de custos", value: "-60%" },
        { icon: Clock, label: "Uptime", value: "100%" },
        { icon: Users, label: "Pacientes atendidos/mês", value: "15K" },
        { icon: Award, label: "Tempo de recuperação", value: "< 1h" }
      ],
      testimonial: "Nunca mais tivemos problemas com nosso sistema. A confiabilidade é total e os custos caíram significativamente.",
      author: "Dr. Roberto Mendes, Diretor Médico"
    },
    {
      client: "Varejista Nacional DEF",
      industry: "Varejo",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
      challenge: "Expansão rápida com abertura de 50 novas lojas. Necessidade de padronização e centralização da infraestrutura de TI.",
      solution: "Projeto de infraestrutura padronizada para todas as lojas, SD-WAN para conectividade, gestão centralizada e suporte remoto.",
      results: [
        { icon: TrendingUp, label: "Lojas conectadas", value: "120" },
        { icon: Clock, label: "Tempo de implementação/loja", value: "2 dias" },
        { icon: Users, label: "Colaboradores", value: "3.500" },
        { icon: Award, label: "Economia anual", value: "R$ 2M" }
      ],
      testimonial: "A VAZTI nos deu a estrutura necessária para nossa expansão acelerada. Hoje abrimos novas lojas com confiança.",
      author: "Marcos Oliveira, VP de Tecnologia"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cases de Sucesso</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Resultados reais de empresas que transformaram sua infraestrutura de TI com a VAZTI
            </p>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((caseStudy, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.client}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <Badge className="bg-white text-gray-900 mb-2">
                        {caseStudy.industry}
                      </Badge>
                      <h3 className="text-3xl font-bold text-white">
                        {caseStudy.client}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 bg-white">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Desafio</h4>
                        <p className="text-gray-600">{caseStudy.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Solução</h4>
                        <p className="text-gray-600">{caseStudy.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Resultados</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {caseStudy.results.map((result, i) => (
                            <div key={i} className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                              <result.icon className="w-6 h-6 text-blue-600 mb-2" />
                              <div className="text-2xl font-bold text-blue-600 mb-1">
                                {result.value}
                              </div>
                              <div className="text-sm text-gray-600">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <p className="text-gray-700 italic mb-2">"{caseStudy.testimonial}"</p>
                        <p className="text-sm text-gray-500 font-medium">{caseStudy.author}</p>
                      </div>
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