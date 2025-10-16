'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle, Calculator, Home, Car, Building2, Users, MapPin, Clock, Shield, Star, ChevronRight, Menu, X, CheckCircle, ChevronLeft, Quote } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const testimonials = [
    {
      image: "https://i.imgur.com/O2dtM3p.jpg",
      text: "Conseguimos o financiamento imobiliário dos nossos sonhos! O processo foi rápido e transparente, e hoje nossa família tem o lar que sempre desejamos."
    },
    {
      image: "https://i.imgur.com/nyD5Kat.jpg", 
      text: "O consórcio imobiliário foi a solução perfeita para nós. Sem juros abusivos e com parcelas que cabem no nosso orçamento. Estamos muito satisfeitos!"
    },
    {
      image: "https://i.imgur.com/tmyPBXI.jpg",
      text: "Depois de anos economizando, finalmente conseguimos nosso financiamento imobiliário. A equipe nos orientou desde o início e tornou nosso sonho realidade."
    },
    {
      image: "https://i.imgur.com/3cg4qED.jpg",
      text: "O consórcio foi a melhor escolha que fizemos. Planejamos nossa compra sem pressa e fomos contemplados rapidamente. Recomendamos para todos!"
    },
    {
      image: "https://i.imgur.com/e8amxQS.jpg",
      text: "Nosso financiamento imobiliário foi aprovado com condições excelentes. Taxas justas e atendimento personalizado fizeram toda a diferença."
    },
    {
      image: "https://i.imgur.com/m1uNmeV.jpg",
      text: "O financiamento do nosso apartamento foi aprovado rapidamente. A equipe é muito profissional e nos deu total suporte durante todo o processo."
    },
    {
      image: "https://i.imgur.com/AIJanhL.jpg",
      text: "Realizamos o sonho da casa própria através do consórcio imobiliário. Condições que cabem no nosso bolso e atendimento excepcional do início ao fim."
    },
    {
      image: "https://i.imgur.com/El7hjVN.jpg",
      text: "O financiamento imobiliário nos permitiu sair do aluguel. Hoje pagamos nossa própria casa com parcelas menores que o aluguel que pagávamos."
    },
    {
      image: "https://i.imgur.com/yuw9rSh.jpg",
      text: "Optamos pelo consórcio e foi a melhor decisão. Sem juros, parcelas fixas e a garantia de ser contemplado. Nossa casa própria finalmente saiu do papel!"
    },
    {
      image: "https://i.imgur.com/hJSG3bB.jpg",
      text: "O financiamento imobiliário nos ajudou a conquistar nossa independência. Taxas competitivas e aprovação rápida. Muito obrigado pela ajuda!"
    },
    {
      image: "https://i.imgur.com/hw9uUFD.jpg",
      text: "Nossa primeira casa através do financiamento! As condições foram excelentes e a equipe nos acompanhou em cada detalhe do processo."
    },
    {
      image: "https://i.imgur.com/3HhgJrQ.jpg",
      text: "O consórcio nos permitiu planejar a compra do imóvel sem pressa. Fomos contemplados e hoje temos nossa casa dos sonhos sem pagar juros."
    },
    {
      image: "https://i.imgur.com/3XkMoix.jpg",
      text: "Conseguimos financiar nosso apartamento com uma taxa incrível. O processo foi transparente e sem surpresas desagradáveis."
    },
    {
      image: "https://i.imgur.com/690wPV0.jpg",
      text: "O financiamento imobiliário nos deu a oportunidade de sair do aluguel. Hoje pagamos nossa própria casa com parcelas que cabem no orçamento."
    },
    {
      image: "https://i.imgur.com/hYUz9VP.jpg",
      text: "Escolhemos o consórcio imobiliário e não nos arrependemos. Sem juros, parcelas fixas e a segurança de ter nossa casa própria garantida."
    },
    {
      image: "https://i.imgur.com/xa3iFIp.jpg",
      text: "O financiamento do nosso imóvel foi fundamental para realizar nosso sonho. Processo ágil, condições justas e atendimento excepcional."
    },
    {
      image: "https://i.imgur.com/tpDNVTO.jpg",
      text: "Optamos pelo consórcio e foi a melhor escolha. Planejamento a longo prazo, sem juros e com a garantia de contemplação. Muito satisfeitos!"
    },
    {
      image: "https://i.imgur.com/Fi1d1Co.jpg",
      text: "O financiamento imobiliário nos deu as melhores condições do mercado. Conseguimos realizar o sonho da casa própria com parcelas acessíveis."
    },
    {
      image: "https://i.imgur.com/2oRNm7W.jpg",
      text: "Nossa casa própria através do consórcio finalmente saiu do papel! Sem juros, parcelas fixas e o sonho realizado. Recomendamos para todos!"
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src="https://imgur.com/6JWUdFu.png" 
                alt="Grupo Nexts Investimentos Imobiliários" 
                className="h-12 w-auto"
                onError={(e) => {
                  // Fallback se a imagem não carregar
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.style.display = 'flex';
                }}
              />
              <div className="w-12 h-12 bg-gradient-to-br from-[#F7D995] to-[#D0A556] rounded-lg items-center justify-center hidden shadow-lg">
                <span className="text-[#002244] font-bold text-xl">N</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="text-[#D0A556] font-semibold">Início</Link>
              <Link href="/sobre" className="text-[#002244] hover:text-[#D0A556] transition-colors font-semibold">Sobre</Link>
              <Link href="/solucoes" className="text-[#002244] hover:text-[#D0A556] transition-colors font-semibold">Soluções</Link>
              <Link href="/simulacao" className="text-[#002244] hover:text-[#D0A556] transition-colors font-semibold">Simulação</Link>
              <Link href="/contato" className="text-[#002244] hover:text-[#D0A556] transition-colors font-semibold">Contato</Link>
            </nav>

            {/* CTAs Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/simulacao" className="bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] px-4 py-2 rounded-lg font-bold hover:from-[#002244] hover:to-[#001122] hover:text-white transition-all shadow-lg">
                Simular Crédito
              </Link>
              <a href="tel:+551132567623" className="flex items-center text-[#002244] hover:text-[#D0A556] font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                (11) 3256-7623
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
                <Link href="/" className="text-[#D0A556] font-semibold text-left" onClick={() => setIsMenuOpen(false)}>Início</Link>
                <Link href="/sobre" className="text-[#002244] hover:text-[#D0A556] font-semibold text-left" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
                <Link href="/solucoes" className="text-[#002244] hover:text-[#D0A556] font-semibold text-left" onClick={() => setIsMenuOpen(false)}>Soluções</Link>
                <Link href="/simulacao" className="text-[#002244] hover:text-[#D0A556] font-semibold text-left" onClick={() => setIsMenuOpen(false)}>Simulação</Link>
                <Link href="/contato" className="text-[#002244] hover:text-[#D0A556] font-semibold text-left" onClick={() => setIsMenuOpen(false)}>Contato</Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Link href="/simulacao" className="bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] px-4 py-2 rounded-lg font-bold text-center shadow-lg" onClick={() => setIsMenuOpen(false)}>
                    Simular Crédito
                  </Link>
                  <a href="tel:+551132567623" className="flex items-center text-[#002244] font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    (11) 3256-7623
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
                <span className="text-transparent bg-gradient-to-r from-[#F7D995] to-[#D0A556] bg-clip-text"> crédito ideal</span>
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
                  <Link href="/simulacao" className="w-full bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] py-3 rounded-lg font-bold hover:from-white hover:to-gray-100 transition-all text-center shadow-lg">
                    Simular Crédito
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-20 bg-gradient-to-br from-[#002244] via-[#003366] to-[#001122] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Faça parte dos nossos clientes que 
              <span className="text-transparent bg-gradient-to-r from-[#F7D995] to-[#D0A556] bg-clip-text"> conquistaram seus sonhos</span>
            </h2>
            <p className="text-xl text-gray-200">Histórias reais de quem realizou seus objetivos conosco</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Carrossel */}
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
                      {/* Imagem */}
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={`Cliente satisfeito ${index + 1}`}
                          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                      </div>
                      
                      {/* Depoimento */}
                      <div className="space-y-6">
                        <Quote className="w-12 h-12 text-[#F7D995] opacity-50" />
                        <p className="text-lg md:text-xl text-gray-100 leading-relaxed italic">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-[#F7D995] fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controles do Carrossel */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-[#F7D995] to-[#D0A556] scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
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
            {/* Consórcio */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 text-[#002244]" />
              </div>
              <h3 className="text-xl font-bold text-[#002244] mb-4">Nexts Consórcios Imobiliários</h3>
              <p className="text-gray-600 mb-6">Uma forma inteligente de adquirir seu imóvel</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Sem juros
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Várias modalidades
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Contemplação garantida
                </li>
              </ul>
              <Link 
                href="/solucoes"
                className="w-full bg-gradient-to-r from-[#002244] to-[#001122] text-white py-3 rounded-lg font-semibold hover:from-[#F7D995] hover:to-[#D0A556] hover:text-[#002244] transition-all block text-center shadow-lg"
              >
                Saiba mais
              </Link>
            </div>

            {/* Financiamentos */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Home className="w-8 h-8 text-[#002244]" />
              </div>
              <h3 className="text-xl font-bold text-[#002244] mb-4">Nexts Financiamentos</h3>
              <p className="text-gray-600 mb-6">Financie seu imóvel com as melhores condições do mercado</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Até 35 anos para pagar
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Taxa a partir de 8,5% a.a.
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Financiamento até 90%
                </li>
              </ul>
              <Link 
                href="/solucoes"
                className="w-full bg-gradient-to-r from-[#002244] to-[#001122] text-white py-3 rounded-lg font-semibold hover:from-[#F7D995] hover:to-[#D0A556] hover:text-[#002244] transition-all block text-center shadow-lg"
              >
                Saiba mais
              </Link>
            </div>

            {/* Empréstimos */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Building2 className="w-8 h-8 text-[#002244]" />
              </div>
              <h3 className="text-xl font-bold text-[#002244] mb-4">Nexts Empréstimos</h3>
              <p className="text-gray-600 mb-6">Capital de giro para fazer seu negócio crescer</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Até R$ 2 milhões
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Juros competitivos
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Análise personalizada
                </li>
              </ul>
              <Link 
                href="/solucoes"
                className="w-full bg-gradient-to-r from-[#002244] to-[#001122] text-white py-3 rounded-lg font-semibold hover:from-[#F7D995] hover:to-[#D0A556] hover:text-[#002244] transition-all block text-center shadow-lg"
              >
                Saiba mais
              </Link>
            </div>

            {/* Saque FGTS */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Calculator className="w-8 h-8 text-[#002244]" />
              </div>
              <h3 className="text-xl font-bold text-[#002244] mb-4">Nexts Saque FGTS</h3>
              <p className="text-gray-600 mb-6">Saque seu FGTS de forma rápida e segura</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Processo simplificado
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Aprovação rápida
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Sem burocracia
                </li>
              </ul>
              <Link 
                href="/solucoes"
                className="w-full bg-gradient-to-r from-[#002244] to-[#001122] text-white py-3 rounded-lg font-semibold hover:from-[#F7D995] hover:to-[#D0A556] hover:text-[#002244] transition-all block text-center shadow-lg"
              >
                Saiba mais
              </Link>
            </div>

            {/* Limpa Nome */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-[#002244]" />
              </div>
              <h3 className="text-xl font-bold text-[#002244] mb-4">Nexts Limpa Nome</h3>
              <p className="text-gray-600 mb-6">Limpe seu nome e volte ao mercado de crédito</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Negociação facilitada
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Condições especiais
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Suporte completo
                </li>
              </ul>
              <Link 
                href="/solucoes"
                className="w-full bg-gradient-to-r from-[#002244] to-[#001122] text-white py-3 rounded-lg font-semibold hover:from-[#F7D995] hover:to-[#D0A556] hover:text-[#002244] transition-all block text-center shadow-lg"
              >
                Saiba mais
              </Link>
            </div>
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
                  <ChevronRight className="w-8 h-8 text-[#D0A556] mx-auto mt-6 hidden md:block" />
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
                <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-[#F7D995] to-[#D0A556] bg-clip-text mb-2">{stat.number}</div>
                <div className="text-xl text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localizações */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002244] mb-4">Nossa Localização</h2>
            <p className="text-xl text-gray-600">Visite-nos em nosso escritório</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-[#D0A556] mr-2" />
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
                className="w-full bg-gradient-to-r from-[#002244] to-[#001122] text-white py-3 rounded-lg font-semibold hover:from-[#F7D995] hover:to-[#D0A556] hover:text-[#002244] transition-all block text-center shadow-lg"
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
                  src="https://imgur.com/6JWUdFu.png" 
                  alt="Grupo Nexts Investimentos Imobiliários" 
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'flex';
                  }}
                />
                <div className="w-12 h-12 bg-gradient-to-br from-[#F7D995] to-[#D0A556] rounded-lg items-center justify-center hidden shadow-lg">
                  <span className="text-[#002244] font-bold text-xl">N</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Soluções financeiras personalizadas para realizar seus sonhos.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/gruponexts?igsh=MTM2MnUzMzcxMTA3Yw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#D0A556] transition-colors">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-[#D0A556] transition-colors">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-[#D0A556] transition-colors">LinkedIn</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Soluções</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/solucoes" className="hover:text-[#D0A556] transition-colors">Nexts Consórcios Imobiliários</Link></li>
                <li><Link href="/solucoes" className="hover:text-[#D0A556] transition-colors">Nexts Financiamentos</Link></li>
                <li><Link href="/solucoes" className="hover:text-[#D0A556] transition-colors">Nexts Empréstimos</Link></li>
                <li><Link href="/solucoes" className="hover:text-[#D0A556] transition-colors">Nexts Saque FGTS</Link></li>
                <li><Link href="/solucoes" className="hover:text-[#D0A556] transition-colors">Nexts Limpa Nome</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/sobre" className="hover:text-[#D0A556] transition-colors">Sobre Nós</Link></li>
                <li><Link href="/contato" className="hover:text-[#D0A556] transition-colors">Carreiras</Link></li>
                <li><Link href="/contato" className="hover:text-[#D0A556] transition-colors">Imprensa</Link></li>
                <li><Link href="/contato" className="hover:text-[#D0A556] transition-colors">Parceiros</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (11) 3256-7623
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
                <Link href="/contato" className="hover:text-[#D0A556] transition-colors">Termos de Uso</Link>
                <Link href="/contato" className="hover:text-[#D0A556] transition-colors">Política de Privacidade</Link>
                <Link href="/contato" className="hover:text-[#D0A556] transition-colors">Contato</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
