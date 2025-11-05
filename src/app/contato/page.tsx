'use client'

import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react'
import Link from 'next/link'

export default function ContatoPage() {
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
              <Link href="/sobre" className="text-[#002244] hover:text-[#D0A556] transition-colors font-semibold">Sobre</Link>
              <Link href="/solucoes" className="text-[#002244] hover:text-[#D0A556] transition-colors font-semibold">Soluções</Link>
              <Link href="/simulacao" className="text-[#002244] hover:text-[#D0A556] transition-colors font-semibold">Simulação</Link>
              <Link href="/contato" className="text-[#D0A556] font-semibold">Contato</Link>
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
              <a href="https://wa.me/5511967878622" className="bg-[#25D366] text-white p-2 rounded-full hover:bg-[#128C7E] transition-colors shadow-lg">
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
              Entre em 
              <span className="text-transparent bg-gradient-to-r from-[#F7D995] to-[#D0A556] bg-clip-text"> Contato</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Nossa equipe está pronta para atender você. Entre em contato e descubra como podemos ajudar a realizar seus sonhos.
            </p>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-[#002244] mb-8 text-center">Fale Conosco</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Phone className="w-6 h-6 text-[#002244]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#002244]">Telefone</h3>
                    <p className="text-gray-600">(11) 3256-7623</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <MessageCircle className="w-6 h-6 text-[#002244]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#002244]">WhatsApp</h3>
                    <p className="text-gray-600">(11) 91558-3458</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Mail className="w-6 h-6 text-[#002244]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#002244]">E-mail</h3>
                    <p className="text-gray-600">contato@gruponexts.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <MapPin className="w-6 h-6 text-[#002244]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#002244]">Endereço</h3>
                    <p className="text-gray-600">Rua Artur de Azevedo, 289<br />Próx. Metrô Oscar Freire</p>
                  </div>
                </div>
                
                <div className="flex items-center md:col-span-2">
                  <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Clock className="w-6 h-6 text-[#002244]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#002244]">Horário de Funcionamento</h3>
                    <p className="text-gray-600">Seg-Sex: 8h às 18h | Sáb: 8h às 14h</p>
                  </div>
                </div>
              </div>
              
              {/* Botões de Ação Rápida */}
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <a 
                  href="https://wa.me/5511967878622" 
                  className="w-full bg-[#25D366] text-white py-4 rounded-lg font-bold hover:bg-[#128C7E] transition-all flex items-center justify-center shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </a>
                <Link 
                  href="/simulacao" 
                  className="w-full bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] py-4 rounded-lg font-bold hover:from-[#002244] hover:to-[#001122] hover:text-white transition-all text-center shadow-lg block"
                >
                  Simular Crédito
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#002244] mb-4">Nossa Localização</h2>
            <p className="text-xl text-gray-600">Visite-nos em nosso escritório</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-full h-96 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
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
            
            <div className="text-center">
              <a
                href="https://maps.google.com/?q=Rua Artur de Azevedo, 289, Pinheiros, São Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#002244] to-[#001122] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#F7D995] hover:to-[#D0A556] hover:text-[#002244] transition-all shadow-lg"
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
