import React from "react";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CTO",
      company: "Banco Regional XYZ",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      rating: 5,
      text: "A VAZTI transformou completamente nossa infraestrutura de segurança. O nível de profissionalismo e expertise técnica da equipe é impressionante. Hoje dormimos tranquilos sabendo que nossos dados e dos nossos clientes estão protegidos."
    },
    {
      name: "Ana Paula Rodrigues",
      role: "Diretora de TI",
      company: "Indústria Metalúrgica ABC",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      rating: 5,
      text: "O projeto de rede foi executado com perfeição. A comunicação foi excelente durante todo o processo e o resultado superou nossas expectativas. Conseguimos conectar todas as nossas unidades com velocidade e estabilidade."
    },
    {
      name: "Dr. Roberto Mendes",
      role: "Diretor Médico",
      company: "Hospital São Lucas",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      rating: 5,
      text: "A migração para cloud foi um divisor de águas para o hospital. A VAZTI conduziu todo o processo de forma impecável, sem interrupções no atendimento. O suporte contínuo é excepcional e sempre que precisamos, a equipe está pronta para ajudar."
    },
    {
      name: "Marcos Oliveira",
      role: "VP de Tecnologia",
      company: "Varejista Nacional DEF",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      rating: 5,
      text: "Parceria de longa data que só cresce. A VAZTI nos ajudou a escalar nossa operação de forma sustentável. A padronização que implementaram nas lojas facilitou muito nossa gestão e reduziu drasticamente nossos custos operacionais."
    },
    {
      name: "Juliana Costa",
      role: "Gerente de TI",
      company: "Construtora Almeida",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      rating: 5,
      text: "O projeto de infraestrutura foi concluído antes do prazo e dentro do orçamento. A equipe da VAZTI demonstrou grande conhecimento técnico e sempre foi muito proativa em sugerir melhorias. Recomendo sem hesitação."
    },
    {
      name: "Fernando Alves",
      role: "CEO",
      company: "Startup TechInova",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      rating: 5,
      text: "Como startup em crescimento rápido, precisávamos de uma infraestrutura que pudesse escalar conosco. A VAZTI entregou exatamente isso. A solução em cloud que implementaram é perfeita para nossas necessidades e muito custo-efetiva."
    },
    {
      name: "Patricia Santos",
      role: "Diretora Administrativa",
      company: "Escritório de Advocacia Silva & Associados",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      rating: 5,
      text: "A segurança dos dados dos nossos clientes é fundamental. A VAZTI implementou uma solução completa de backup e segurança que nos dá total tranquilidade. O atendimento é sempre rápido e eficiente."
    },
    {
      name: "Ricardo Martins",
      role: "Gerente de Operações",
      company: "Logística ExpressLog",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      rating: 5,
      text: "A consultoria da VAZTI foi essencial para modernizarmos nossa operação. Eles não apenas implementaram a tecnologia, mas também nos ajudaram a otimizar nossos processos. O retorno sobre investimento foi muito rápido."
    },
    {
      name: "Camila Ferreira",
      role: "CIO",
      company: "Grupo Educacional Saber",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      rating: 5,
      text: "Temos várias unidades de ensino e a VAZTI conseguiu padronizar toda nossa infraestrutura de forma eficiente. A solução de Wi-Fi que implementaram melhorou muito a experiência dos nossos alunos e professores."
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Depoimentos</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              O que nossos clientes dizem sobre nossos serviços e resultados
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Clientes Atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Renovação de Contratos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none bg-white relative">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-blue-100" />
                
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed relative z-10">
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}