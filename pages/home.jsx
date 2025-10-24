import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Network, Server, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: "Segurança da Informação",
      description: "Proteção completa dos seus dados e sistemas contra ameaças cibernéticas.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Network,
      title: "Infraestrutura de Redes",
      description: "Projetos e implementação de redes corporativas de alta performance.",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Server,
      title: "Infraestrutura de TI",
      description: "Soluções completas em servidores, storage e virtualização.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Consultoria Tecnológica",
      description: "Assessoria especializada para otimização e modernização de TI.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { value: "500+", label: "Projetos Entregues" },
    { value: "15+", label: "Anos de Experiência" },
    { value: "98%", label: "Satisfação dos Clientes" },
    { value: "24/7", label: "Suporte Técnico" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-transparent" />
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  🚀 Soluções em Tecnologia
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transforme sua
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Infraestrutura
                </span>
                de TI
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                A VAZTI Soluções é sua parceira estratégica em projetos de tecnologia, 
                infraestrutura de redes e segurança da informação.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl("Contact")}>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-xl">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl("Projects")}>
                  <Button size="lg" variant="outline" className="border-2">
                    Ver Projetos
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                  alt="Technology Infrastructure"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nossas <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Soluções</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços em tecnologia para impulsionar seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none bg-white/80 backdrop-blur-sm"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar sua TI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares de eficiência tecnológica.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl">
              Fale com Nossos Especialistas
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}