'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Calculator, Menu, X, CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SimulacaoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleBankSelection = (bank: string) => {
    if (bank === 'santander') {
      window.open('https://www.santander.com.br/financiamentos', '_blank')
    } else if (bank === 'caixa') {
      window.open('https://www.caixa.gov.br/voce/habitacao/financiamento-habitacional/Paginas/default.aspx', '_blank')
    }
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
              <Link href="/sobre" className="text-[#002244] hover:text-[#FFD700] transition-colors font-semibold">Sobre</Link>
              <Link href="/solucoes" className="text-[#002244] hover:text-[#FFD700] transition-colors font-semibold">Soluções</Link>
              <Link href="/simulacao" className="text-[#FFD700] font-bold">Simulação</Link>
              <Link href="/contato" className="text-[#002244] hover:text-[#FFD700] transition-colors font-semibold">Contato</Link>
            </nav>

            {/* CTAs Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
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
                <Link href="/simulacao" className="text-[#FFD700] font-bold">Simulação</Link>
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
            <span className="text-[#002244] font-semibold">Simulação</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002244] via-[#003366] to-[#001122] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Simulação de <span className="text-transparent bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text">Crédito</span>
            </h1>
            <p className="text-xl text-gray-200">
              Escolha seu banco preferido e simule seu financiamento com as melhores condições
            </p>
          </div>
        </div>
      </section>

      {/* Seleção de Bancos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002244] mb-4">Escolha seu Banco</h2>
            <p className="text-lg text-gray-600">Selecione a instituição financeira de sua preferência</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Santander */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-center">
                <a 
                  href="https://www.santander.com.br/financiamentos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-6"
                >
                  <img 
                    src="https://gkpb.com.br/wp-content/uploads/2018/03/novo-logo-santander-fundo-vermelho.jpg" 
                    alt="Santander" 
                    className="h-20 w-auto mx-auto rounded-lg cursor-pointer hover:scale-105 transition-transform"
                  />
                </a>
                <h3 className="text-2xl font-bold text-[#002244] mb-4">Banco Santander</h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#25D366] mr-2" />
                    Taxa a partir de 8,99% a.a.
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#25D366] mr-2" />
                    Financiamento até 90% do valor
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#25D366] mr-2" />
                    Prazo de até 35 anos
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#25D366] mr-2" />
                    Aprovação em até 48h
                  </li>
                </ul>
                <button 
                  onClick={() => handleBankSelection('santander')}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-all shadow-lg"
                >
                  Simular com Santander
                </button>
              </div>
            </div>

            {/* Caixa */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-center">
                <a 
                  href="https://www.caixa.gov.br/voce/habitacao/financiamento-habitacional/Paginas/default.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-6"
                >
                  <img 
                    src="https://i.pinimg.com/736x/e2/32/6c/e2326c6c37025c2ae63ad7d70aa7249e.jpg" 
                    alt="Caixa Econômica Federal" 
                    className="h-20 w-auto mx-auto rounded-lg cursor-pointer hover:scale-105 transition-transform"
                  />
                </a>
                <h3 className="text-2xl font-bold text-[#002244] mb-4">Caixa Econômica Federal</h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#25D366] mr-2" />
                    Taxa a partir de 8,16% a.a.
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#25D366] mr-2" />
                    Financiamento até 80% do valor
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#25D366] mr-2" />
                    Prazo de até 35 anos
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#25D366] mr-2" />
                    Programas habitacionais
                  </li>
                </ul>
                <button 
                  onClick={() => handleBankSelection('caixa')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg"
                >
                  Simular com Caixa
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002244] mb-4">Por que simular conosco?</h2>
            <p className="text-lg text-gray-600">Facilitamos sua jornada para conseguir o melhor crédito</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Comparação Inteligente",
                description: "Compare as melhores opções dos principais bancos do mercado",
                icon: "🔍"
              },
              {
                title: "Processo Simplificado",
                description: "Acesso direto aos sites oficiais dos bancos para simulação",
                icon: "⚡"
              },
              {
                title: "Suporte Especializado",
                description: "Nossa equipe te acompanha durante todo o processo",
                icon: "🤝"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#002244] mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
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