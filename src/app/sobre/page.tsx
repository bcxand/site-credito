'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Menu, X, Users, Target, Award, TrendingUp, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function SobrePage() {
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
              <Link href="/sobre" className="text-[#FFD700] font-bold">Sobre</Link>
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
                <Link href="/sobre" className="text-[#FFD700] font-bold">Sobre</Link>
                <Link href="/solucoes" className="text-[#002244] hover:text-[#FFD700] font-semibold">Soluções</Link>
                <Link href="/simulacao" className="text-[#002244] hover:text-[#FFD700] font-semibold">Simulação</Link>
                <Link href="/contato" className="text-[#002244] hover:text-[#FFD700] font-semibold">Contato</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#002244]">Início</Link>
            <span>/</span>
            <span className="text-[#002244] font-semibold">Sobre</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002244] via-[#003366] to-[#001122] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sobre o <span className="text-transparent bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text">Grupo Nexts</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Há mais de 15 anos transformando sonhos em realidade através de soluções financeiras personalizadas e inovadoras
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#002244] mb-6">Nossa História</h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  O Grupo Nexts nasceu em 2009 com uma missão clara: democratizar o acesso ao crédito e tornar o sonho da casa própria, do carro novo e do crescimento empresarial uma realidade para milhares de brasileiros.
                </p>
                <p>
                  Fundado por especialistas do mercado financeiro, começamos como uma pequena consultoria em São Paulo e hoje somos uma das principais referências em intermediação de crédito no país, com mais de 50.000 clientes atendidos.
                </p>
                <p>
                  Nossa trajetória é marcada pela inovação, transparência e, principalmente, pelo compromisso genuíno com o sucesso financeiro de nossos clientes.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#002244] mb-2">15+</div>
                  <div className="text-[#002244] font-semibold">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#002244] mb-2">50K+</div>
                  <div className="text-[#002244] font-semibold">Clientes Atendidos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#002244] mb-2">R$ 2B+</div>
                  <div className="text-[#002244] font-semibold">Volume de Crédito</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#002244] mb-2">98%</div>
                  <div className="text-[#002244] font-semibold">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002244] mb-4">Nossos Pilares</h2>
            <p className="text-xl text-gray-600">Os valores que nos guiam todos os dias</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100">
              <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-8 h-8 text-[#002244]" />
              </div>
              <h3 className="text-2xl font-bold text-[#002244] mb-4">Missão</h3>
              <p className="text-gray-600">
                Facilitar o acesso ao crédito com soluções personalizadas, transparentes e eficientes, 
                contribuindo para a realização dos sonhos e objetivos financeiros de nossos clientes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100">
              <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-[#002244]" />
              </div>
              <h3 className="text-2xl font-bold text-[#002244] mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser a principal referência em intermediação de crédito no Brasil, reconhecida pela 
                excelência no atendimento e pela inovação em soluções financeiras.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100">
              <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-8 h-8 text-[#002244]" />
              </div>
              <h3 className="text-2xl font-bold text-[#002244] mb-4">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Transparência
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Inovação
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Excelência
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                  Compromisso
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002244] mb-4">Por que escolher o Grupo Nexts?</h2>
            <p className="text-xl text-gray-600">Nossos diferenciais fazem toda a diferença</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Experiência Comprovada",
                description: "Mais de 15 anos no mercado financeiro com histórico de sucesso",
                icon: "🏆"
              },
              {
                title: "Atendimento Personalizado",
                description: "Cada cliente é único e merece uma solução sob medida",
                icon: "👥"
              },
              {
                title: "Processo Ágil",
                description: "Aprovação em até 48 horas com documentação simplificada",
                icon: "⚡"
              },
              {
                title: "Melhores Taxas",
                description: "Negociamos as condições mais vantajosas do mercado",
                icon: "💰"
              },
              {
                title: "Transparência Total",
                description: "Sem taxas ocultas ou surpresas desagradáveis",
                icon: "🔍"
              },
              {
                title: "Suporte Completo",
                description: "Acompanhamento durante todo o processo de financiamento",
                icon: "🤝"
              },
              {
                title: "Tecnologia Avançada",
                description: "Plataforma digital moderna e segura para suas operações",
                icon: "💻"
              },
              {
                title: "Parcerias Sólidas",
                description: "Relacionamento com os principais bancos do país",
                icon: "🏦"
              }
            ].map((diferencial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all border border-gray-100">
                <div className="text-4xl mb-4">{diferencial.icon}</div>
                <h3 className="text-lg font-bold text-[#002244] mb-3">{diferencial.title}</h3>
                <p className="text-gray-600 text-sm">{diferencial.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 bg-gradient-to-br from-[#002244] to-[#001122] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-200">Profissionais especializados e comprometidos com seu sucesso</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Silva",
                position: "CEO & Fundador",
                experience: "20+ anos no mercado financeiro",
                description: "Especialista em crédito imobiliário e empresarial"
              },
              {
                name: "Ana Santos",
                position: "Diretora Comercial",
                experience: "15+ anos em vendas e relacionamento",
                description: "Focada em experiência do cliente e resultados"
              },
              {
                name: "Roberto Lima",
                position: "Diretor de Operações",
                experience: "18+ anos em operações financeiras",
                description: "Especialista em processos e compliance"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                <div className="w-24 h-24 bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Users className="w-12 h-12 text-[#002244]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#FFD700] font-semibold mb-2">{member.position}</p>
                <p className="text-gray-300 text-sm mb-3">{member.experience}</p>
                <p className="text-gray-200 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#002244] mb-6">
            Pronto para realizar seus sonhos?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se aos mais de 50.000 clientes que já confiaram no Grupo Nexts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/simulacao" className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-[#002244] px-8 py-4 rounded-lg font-bold text-lg hover:from-[#002244] hover:to-[#001122] hover:text-white transition-all shadow-lg">
              Simular Crédito
            </Link>
            <Link href="/contato" className="border-2 border-[#002244] text-[#002244] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#002244] hover:text-white transition-all">
              Falar Conosco
            </Link>
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