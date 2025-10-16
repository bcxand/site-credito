'use client'

import { Phone, MessageCircle, MapPin, Clock, Users, Shield, Award, Target } from 'lucide-react'
import Link from 'next/link'

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src="https://i.imgur.com/0vW5vV8.png" 
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
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="text-[#002244] hover:text-[#D0A556] transition-colors font-semibold">Início</Link>
              <Link href="/sobre" className="text-[#D0A556] font-semibold">Sobre</Link>
              <Link href="/solucoes" className="text-[#002244] hover:text-[#D0A556] transition-colors font-semibold">Soluções</Link>
              <Link href="/simulacao" className="text-[#002244] hover:text-[#D0A556] transition-colors font-semibold">Simulação</Link>
              <Link href="/contato" className="text-[#002244] hover:text-[#D0A556] transition-colors font-semibold">Contato</Link>
            </nav>

            {/* CTAs Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/simulacao" className="bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] px-4 py-2 rounded-lg font-bold hover:from-[#002244] hover:to-[#001122] hover:text-white transition-all shadow-lg">
                Simular Crédito
              </Link>
              <a href="tel:+5511915583458" className="flex items-center text-[#002244] hover:text-[#D0A556] font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                (11) 91558-3458
              </a>
              <a href="https://wa.me/5511915583458" className="bg-[#25D366] text-white p-2 rounded-full hover:bg-[#128C7E] transition-colors shadow-lg">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002244] via-[#003366] to-[#001122] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sobre o 
              <span className="text-transparent bg-gradient-to-r from-[#F7D995] to-[#D0A556] bg-clip-text"> Grupo Nexts</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Mais de 15 anos transformando sonhos em realidade através de soluções financeiras personalizadas e inovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#002244] mb-6">Nossa História</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fundado em 2009, o Grupo Nexts nasceu com o propósito de democratizar o acesso ao crédito no Brasil. 
                Começamos como uma pequena empresa de consultoria financeira e hoje somos uma das principais 
                referências em soluções de crédito imobiliário, veicular e empresarial.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nossa jornada é marcada pela inovação constante e pelo compromisso inabalável com a satisfação 
                dos nossos clientes. Cada conquista dos nossos clientes é também nossa conquista.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#F7D995] to-[#D0A556] bg-clip-text">50K+</div>
                  <div className="text-gray-600">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#F7D995] to-[#D0A556] bg-clip-text">R$ 2B+</div>
                  <div className="text-gray-600">Volume de Crédito</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-[#002244] mb-6">Nossos Valores</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-[#002244] mr-3" />
                  <span className="text-[#002244] font-semibold">Transparência em todas as operações</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-[#002244] mr-3" />
                  <span className="text-[#002244] font-semibold">Atendimento humanizado</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-[#002244] mr-3" />
                  <span className="text-[#002244] font-semibold">Excelência em resultados</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-[#002244] mr-3" />
                  <span className="text-[#002244] font-semibold">Foco no cliente</span>
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
            <h2 className="text-4xl font-bold text-[#002244] mb-4">Nosso Propósito</h2>
            <p className="text-xl text-gray-600">Os pilares que guiam nossa atuação no mercado</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-8 h-8 text-[#002244]" />
              </div>
              <h3 className="text-2xl font-bold text-[#002244] mb-4">Missão</h3>
              <p className="text-gray-600">
                Facilitar o acesso ao crédito através de soluções financeiras personalizadas, 
                contribuindo para a realização dos sonhos dos nossos clientes.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-8 h-8 text-[#002244]" />
              </div>
              <h3 className="text-2xl font-bold text-[#002244] mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser a principal referência em soluções de crédito no Brasil, 
                reconhecida pela excelência no atendimento e inovação.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-[#002244]" />
              </div>
              <h3 className="text-2xl font-bold text-[#002244] mb-4">Valores</h3>
              <p className="text-gray-600">
                Transparência, ética, compromisso com resultados e 
                relacionamento duradouro com nossos clientes e parceiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#002244] to-[#001122] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para realizar seus 
            <span className="text-transparent bg-gradient-to-r from-[#F7D995] to-[#D0A556] bg-clip-text"> sonhos?</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Entre em contato conosco e descubra como podemos ajudar você a conquistar seus objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5511915583458" className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#128C7E] transition-all flex items-center justify-center shadow-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
            <Link href="/simulacao" className="bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] px-8 py-4 rounded-lg font-bold hover:from-white hover:to-gray-100 transition-all shadow-lg">
              Simular Crédito
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
                  src="https://i.imgur.com/0vW5vV8.png" 
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
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Soluções</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/solucoes" className="hover:text-[#D0A556] transition-colors">Crédito Imobiliário</Link></li>
                <li><Link href="/solucoes" className="hover:text-[#D0A556] transition-colors">Financiamento Veicular</Link></li>
                <li><Link href="/solucoes" className="hover:text-[#D0A556] transition-colors">Crédito Empresarial</Link></li>
                <li><Link href="/solucoes" className="hover:text-[#D0A556] transition-colors">Consórcio</Link></li>
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