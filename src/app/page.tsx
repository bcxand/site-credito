'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Calculator, Home, Car, Building2, Users, MapPin, Clock, Shield, Star, ChevronRight, Menu, X, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src="https://imgur.com/tWnWU1a.png" 
                alt="Grupo Nexts Investimentos Imobiliários" 
                className="h-12 w-auto"
                onError={(e) => {
                  // Fallback se a imagem não carregar
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.style.display = 'flex';
                }}
              />
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] rounded-lg items-center justify-center hidden shadow-lg">
                <span className="text-[#002244] font-bold text-xl">N</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="text-[#002244] hover:text-[#FFD700] transition-colors font-semibold">Início</Link>
              <Link href="/sobre" className="text-[#002244] hover:text-[#FFD700] transition-colors font-semibold">Sobre</Link>
              <Link href="/solucoes" className="text-[#002244] hover:text-[#FFD700] transition-colors font-semibold">Soluções</Link>
              <Link href="/simulacao" className="text-[#002244] hover:text-[#FFD700] transition-colors font-semibold">Simulação</Link>
              <Link href="/contato" className="text-[#002244] hover:text-[#FFD700] transition-colors font-semibold">Contato</Link>
            </nav>

            {/* CTAs Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/simulacao" className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-[#002244] px-4 py-2 rounded-lg font-bold hover:from-[#002244] hover:to-[#001122] hover:text-white transition-all shadow-lg">
                Simular Crédito
              </Link>
              <a href="tel:+5511915583458" className="flex items-center text-[#002244] hover:text-[#FFD700] font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                (11) 91558-3458
              </a>
              <a href="https://wa.me/5511915583458" className="bg-[#25D366] text-white p-2 rounded-full hover:bg-[#128C7E] transition-colors shadow-lg">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden text-[#002244]">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-[#002244] hover:text-[#FFD700] font-semibold">Início</Link>
                <Link href="/sobre" className="text-[#002244] hover:text-[#FFD700] font-semibold">Sobre</Link>
                <Link href="/solucoes" className="text-[#002244] hover:text-[#FFD700] font-semibold">Soluções</Link>
                <Link href="/simulacao" className="text-[#002244] hover:text-[#FFD700] font-semibold">Simulação</Link>
                <Link href="/contato" className="text-[#002244] hover:text-[#FFD700] font-semibold">Contato</Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Link href="/simulacao" className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-[#002244] px-4 py-2 rounded-lg font-bold text-center shadow-lg">
                    Simular Crédito
                  </Link>
                  <a href="tel:+5511915583458" className="flex items-center text-[#002244] font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    (11) 91558-3458
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-[#002244] via-[#003366] to-[#001122] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Realize seus sonhos com o 
                <span className="text-transparent bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text"> crédito ideal</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Soluções financeiras personalizadas para imóveis, veículos e empresas. 
                Taxas competitivas e aprovação rápida.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Entre em Contato</h3>
              <div className="space-y-6 text-center">
                <p className="text-gray-200">
                  Nossa equipe está pronta para encontrar a melhor solução financeira para você.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="https://wa.me/5511915583458" className="w-full bg-[#25D366] text-white py-3 rounded-lg font-bold hover:bg-[#128C7E] transition-all flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                  <Link href="/simulacao" className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-[#002244] py-3 rounded-lg font-bold hover:from-white hover:to-gray-100 transition-all text-center shadow-lg">
                    Simular Crédito
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções / Serviços */}
      <section id="solucoes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002244] mb-4">Nossas Soluções</h2>
            <p className="text-xl text-gray-600">Encontre o produto financeiro ideal para suas necessidades</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                icon: Users,
                title: "Consórcio Imobiliários",
                description: "Uma forma inteligente de adquirir seu imóvel",
                features: ["Sem juros", "Várias modalidades", "Contemplação garantida"]
              },
              {
                icon: Home,
                title: "Financiamento",
                description: "Financie seu imóvel com as melhores condições do mercado",
                features: ["Até 35 anos para pagar", "Taxa a partir de 8,5% a.a.", "Financiamento até 90%"]
              },
              {
                icon: Building2,
                title: "Empréstimo",
                description: "Capital de giro para fazer seu negócio crescer",
                features: ["Até R$ 2 milhões", "Juros competitivos", "Análise personalizada"]
              },
              {
                icon: Calculator,
                title: "Saque-fgts",
                description: "Saque seu FGTS de forma rápida e segura",
                features: ["Processo simplificado", "Aprovação rápida", "Sem burocracia"]
              },
              {
                icon: CheckCircle,
                title: "Limpa-Nome",
                description: "Limpe seu nome e volte ao mercado de crédito",
                features: ["Negociação facilitada", "Condições especiais", "Suporte completo"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="w-8 h-8 text-[#002244]" />
                </div>
                <h3 className="text-xl font-bold text-[#002244] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/solucoes" className="w-full bg-gradient-to-r from-[#002244] to-[#001122] text-white py-3 rounded-lg font-semibold hover:from-[#FFD700] hover:to-[#FF8C00] hover:text-[#002244] transition-all block text-center shadow-lg">
                  Saiba Mais
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002244] mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-600">Processo simples e rápido em apenas 4 etapas</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Simulação",
                description: "Preencha nosso formulário online com suas informações"
              },
              {
                step: "2", 
                title: "Análise",
                description: "Nossa equipe analisa seu perfil e encontra a melhor solução"
              },
              {
                step: "3",
                title: "Aprovação",
                description: "Aprovação rápida em até 24 horas úteis"
              },
              {
                step: "4",
                title: "Liberação",
                description: "Assinatura dos contratos e liberação do crédito"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-[#002244] to-[#001122] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#002244] mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <ChevronRight className="w-8 h-8 text-[#FFD700] mx-auto mt-6 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provas Sociais */}
      <section className="py-20 bg-gradient-to-br from-[#002244] to-[#001122] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Números que Inspiram Confiança</h2>
            <p className="text-xl text-gray-200">Mais de uma década transformando sonhos em realidade</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Anos de Experiência" },
              { number: "50K+", label: "Clientes Atendidos" },
              { number: "R$ 2B+", label: "Volume de Crédito" },
              { number: "98%", label: "Satisfação dos Clientes" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text mb-2">{stat.number}</div>
                <div className="text-xl text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localizações */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002244] mb-4">Nossa Localização</h2>
            <p className="text-xl text-gray-600">Visite-nos em nosso escritório</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-[#FFD700] mr-2" />
                <h3 className="text-xl font-bold text-[#002244]">📍 Local: Rua Artur de Azevedo, 289 – Próx. Metrô Oscar Freire</h3>
              </div>
              <div className="flex items-center text-gray-600 mb-6">
                <Clock className="w-4 h-4 mr-2" />
                Seg-Sex: 8h às 18h | Sáb: 8h às 14h
              </div>
              
              {/* Mapa */}
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1962!2d-46.6693!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sRua%20Artur%20de%20Azevedo%2C%20289%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              
              <a
                href="https://maps.google.com/?q=Rua Artur de Azevedo, 289, Pinheiros, São Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#002244] to-[#001122] text-white py-3 rounded-lg font-semibold hover:from-[#FFD700] hover:to-[#FF8C00] hover:text-[#002244] transition-all block text-center shadow-lg"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#002244] to-[#001122] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src="https://imgur.com/tWnWU1a.png" 
                  alt="Grupo Nexts Investimentos Imobiliários" 
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'flex';
                  }}
                />
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] rounded-lg items-center justify-center hidden shadow-lg">
                  <span className="text-[#002244] font-bold text-xl">N</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Soluções financeiras personalizadas para realizar seus sonhos.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors">LinkedIn</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Soluções</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/solucoes" className="hover:text-[#FFD700] transition-colors">Crédito Imobiliário</Link></li>
                <li><Link href="/solucoes" className="hover:text-[#FFD700] transition-colors">Financiamento Veicular</Link></li>
                <li><Link href="/solucoes" className="hover:text-[#FFD700] transition-colors">Crédito Empresarial</Link></li>
                <li><Link href="/solucoes" className="hover:text-[#FFD700] transition-colors">Consórcio</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/sobre" className="hover:text-[#FFD700] transition-colors">Sobre Nós</Link></li>
                <li><Link href="/contato" className="hover:text-[#FFD700] transition-colors">Carreiras</Link></li>
                <li><Link href="/contato" className="hover:text-[#FFD700] transition-colors">Imprensa</Link></li>
                <li><Link href="/contato" className="hover:text-[#FFD700] transition-colors">Parceiros</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (11) 91558-3458
                </li>
                <li className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </li>
                <li>contato@gruponexts.com.br</li>
                <li>📍 Rua Artur de Azevedo, 289 – Próx. Metrô Oscar Freire</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-300 text-sm mb-4 md:mb-0">
                <p>© 2024 Grupo Nexts Investimentos Imobiliários. Todos os direitos reservados.</p>
                <p>CNPJ: 12.345.678/0001-90</p>
              </div>
              <div className="flex space-x-6 text-sm text-gray-300">
                <Link href="/contato" className="hover:text-[#FFD700] transition-colors">Termos de Uso</Link>
                <Link href="/contato" className="hover:text-[#FFD700] transition-colors">Política de Privacidade</Link>
                <Link href="/contato" className="hover:text-[#FFD700] transition-colors">Contato</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}