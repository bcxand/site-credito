'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Menu, X, Mail, MapPin, Clock, User, Building } from 'lucide-react'
import Link from 'next/link'

export default function ContatoPage() {
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
              <Link href="/sobre" className="text-[#002244] hover:text-[#FFD700] transition-colors font-semibold">Sobre</Link>
              <Link href="/solucoes" className="text-[#002244] hover:text-[#FFD700] transition-colors font-semibold">Soluções</Link>
              <Link href="/simulacao" className="text-[#002244] hover:text-[#FFD700] transition-colors font-semibold">Simulação</Link>
              <Link href="/contato" className="text-[#FFD700] font-bold">Contato</Link>
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
                <Link href="/contato" className="text-[#FFD700] font-bold">Contato</Link>
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
            <span className="text-[#002244] font-semibold">Contato</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002244] via-[#003366] to-[#001122] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Entre em <span className="text-transparent bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text">Contato</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Estamos aqui para ajudar você a realizar seus sonhos. Fale conosco e descubra as melhores soluções financeiras.
            </p>
          </div>
        </div>
      </section>

      {/* Contato Principal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-[#002244] mb-8">Fale Conosco</h2>
              
              <div className="space-y-8">
                {/* Contatos Diretos */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-[#002244] mb-6">Contatos Diretos</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <Phone className="w-6 h-6 text-[#002244]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#002244]">Telefone</p>
                        <a href="tel:+5511915583458" className="text-gray-600 hover:text-[#002244]">(11) 91558-3458</a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <MessageCircle className="w-6 h-6 text-[#002244]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#002244]">WhatsApp</p>
                        <a href="https://wa.me/5511915583458" className="text-gray-600 hover:text-[#002244]">(11) 91558-3458</a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <Mail className="w-6 h-6 text-[#002244]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#002244]">E-mail</p>
                        <a href="mailto:contato@gruponexts.com.br" className="text-gray-600 hover:text-[#002244]">contato@gruponexts.com.br</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Horário de Atendimento */}
                <div className="bg-gradient-to-br from-[#002244] to-[#001122] rounded-2xl p-8 text-white shadow-lg">
                  <h3 className="text-xl font-bold mb-6">Horário de Atendimento</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-[#FFD700] mr-3" />
                      <span>Segunda a Sexta: 8h às 18h</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-[#FFD700] mr-3" />
                      <span>Sábado: 8h às 14h</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-[#FFD700] mr-3" />
                      <span>Domingo: Fechado</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-sm text-gray-200">
                      <strong>Atendimento de Emergência:</strong><br />
                      WhatsApp 24h para clientes
                    </p>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-[#002244] mb-6">Siga-nos</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gradient-to-br from-[#002244] to-[#001122] text-white p-3 rounded-full hover:from-[#FFD700] hover:to-[#FF8C00] hover:text-[#002244] transition-all shadow-lg">
                      <span className="sr-only">Facebook</span>
                      📘
                    </a>
                    <a href="#" className="bg-gradient-to-br from-[#002244] to-[#001122] text-white p-3 rounded-full hover:from-[#FFD700] hover:to-[#FF8C00] hover:text-[#002244] transition-all shadow-lg">
                      <span className="sr-only">Instagram</span>
                      📷
                    </a>
                    <a href="#" className="bg-gradient-to-br from-[#002244] to-[#001122] text-white p-3 rounded-full hover:from-[#FFD700] hover:to-[#FF8C00] hover:text-[#002244] transition-all shadow-lg">
                      <span className="sr-only">LinkedIn</span>
                      💼
                    </a>
                    <a href="#" className="bg-gradient-to-br from-[#002244] to-[#001122] text-white p-3 rounded-full hover:from-[#FFD700] hover:to-[#FF8C00] hover:text-[#002244] transition-all shadow-lg">
                      <span className="sr-only">YouTube</span>
                      📺
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div>
              <h2 className="text-3xl font-bold text-[#002244] mb-8">Como Podemos Ajudar?</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#002244] to-[#001122] rounded-2xl p-8 text-white shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Fale Conosco Agora</h3>
                  <p className="text-gray-200 mb-6">
                    Nossa equipe está pronta para encontrar a melhor solução financeira para você.
                  </p>
                  <div className="flex flex-col gap-4">
                    <a href="https://wa.me/5511915583458" className="w-full bg-[#25D366] text-white py-3 rounded-lg font-bold hover:bg-[#128C7E] transition-all flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                    <a href="tel:+5511915583458" className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-[#002244] py-3 rounded-lg font-bold hover:from-white hover:to-gray-100 transition-all flex items-center justify-center shadow-lg">
                      <Phone className="w-5 h-5 mr-2" />
                      Ligar Agora
                    </a>
                    <Link href="/simulacao" className="w-full border-2 border-[#FFD700] text-[#FFD700] py-3 rounded-lg font-bold hover:bg-[#FFD700] hover:text-[#002244] transition-all text-center">
                      Simular Crédito
                    </Link>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-[#002244] mb-6">Nossos Serviços</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] rounded-full mr-3"></div>
                      Crédito Imobiliário
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] rounded-full mr-3"></div>
                      Financiamento Veicular
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] rounded-full mr-3"></div>
                      Crédito Empresarial
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] rounded-full mr-3"></div>
                      Consórcio
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Localização */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002244] mb-4">Nossa Localização</h2>
            <p className="text-xl text-gray-600">Visite-nos em nosso escritório</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <MapPin className="w-6 h-6 text-[#002244]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#002244]">📍 Local: Rua Artur de Azevedo, 289 – Próx. Metrô Oscar Freire</h3>
                  <div className="flex items-center text-gray-600 mt-2">
                    <Clock className="w-4 h-4 mr-2" />
                    Seg-Sex: 8h às 18h | Sáb: 8h às 14h
                  </div>
                </div>
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

      {/* FAQ Rápido */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002244] mb-4">Dúvidas Frequentes</h2>
            <p className="text-xl text-gray-600">Respostas rápidas para as perguntas mais comuns</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Qual o prazo para aprovação do crédito?",
                answer: "O prazo varia conforme o produto: Crédito Imobiliário (48h), Financiamento Veicular (24h), Crédito Empresarial (72h)."
              },
              {
                question: "Preciso ter conta no banco para solicitar o crédito?",
                answer: "Não é necessário. Trabalhamos com diversos bancos parceiros e encontramos a melhor opção para seu perfil."
              },
              {
                question: "Quais documentos são necessários?",
                answer: "Documentos pessoais (RG, CPF, comprovante de renda e residência). Para empresas, também são necessários documentos da empresa."
              },
              {
                question: "Há cobrança de taxa para simulação?",
                answer: "Não! A simulação e consultoria são totalmente gratuitas. Você só paga taxas após a aprovação e liberação do crédito."
              },
              {
                question: "Atendem todo o Brasil?",
                answer: "Sim! Atendemos clientes de todo o país através de nossos canais digitais e parcerias com correspondentes bancários."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-[#002244] mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Não encontrou sua resposta?</p>
            <a href="https://wa.me/5511915583458" className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-[#002244] px-8 py-4 rounded-lg font-bold hover:from-[#002244] hover:to-[#001122] hover:text-white transition-all shadow-lg">
              Falar no WhatsApp
            </a>
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