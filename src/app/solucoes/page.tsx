'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Menu, X, Home, Car, Building2, Users, CheckCircle, Calculator, Clock, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function SolucoesPage() {
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
              <Link href="/solucoes" className="text-[#FFD700] font-bold">Soluções</Link>
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
                <Link href="/solucoes" className="text-[#FFD700] font-bold">Soluções</Link>
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
            <span className="text-[#002244] font-semibold">Soluções</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002244] via-[#003366] to-[#001122] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nossas <span className="text-transparent bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text">Soluções</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Produtos financeiros completos para todas as suas necessidades. Do sonho da casa própria ao crescimento do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Soluções Principais */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Crédito Imobiliário */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg">
                  <Home className="w-10 h-10 text-[#002244]" />
                </div>
                <h2 className="text-4xl font-bold text-[#002244] mb-6">Crédito Imobiliário</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Realize o sonho da casa própria com as melhores condições do mercado. 
                  Financiamento para imóveis residenciais e comerciais com taxas competitivas.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Taxa a partir de 8,5% a.a.</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Financiamento até 90%</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Prazo até 35 anos</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Imóveis novos e usados</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Aprovação em 48h</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Sem taxa de abertura</span>
                    </div>
                  </div>
                </div>
                <Link href="/simulacao" className="bg-gradient-to-r from-[#002244] to-[#001122] text-white px-8 py-4 rounded-lg font-bold hover:from-[#FFD700] hover:to-[#FF8C00] hover:text-[#002244] transition-all inline-flex items-center shadow-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Simular Agora
                </Link>
              </div>
              <div className="bg-gradient-to-br from-[#002244] to-[#001122] rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Modalidades Disponíveis</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-bold mb-2">Sistema SAC</h4>
                    <p className="text-sm text-gray-200">Parcelas decrescentes, amortização constante</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-bold mb-2">Sistema PRICE</h4>
                    <p className="text-sm text-gray-200">Parcelas fixas durante todo o financiamento</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-bold mb-2">Sistema SACRE</h4>
                    <p className="text-sm text-gray-200">Híbrido entre SAC e PRICE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Financiamento Veicular */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-[#002244] to-[#001122] rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Tipos de Veículos</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                    <div className="text-2xl mb-2">🚗</div>
                    <p className="font-semibold">Carros</p>
                    <p className="text-xs text-gray-200">Novos e usados</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                    <div className="text-2xl mb-2">🏍️</div>
                    <p className="font-semibold">Motos</p>
                    <p className="text-xs text-gray-200">Todas as cilindradas</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                    <div className="text-2xl mb-2">🚚</div>
                    <p className="font-semibold">Caminhões</p>
                    <p className="text-xs text-gray-200">Leves e pesados</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                    <div className="text-2xl mb-2">🚐</div>
                    <p className="font-semibold">Utilitários</p>
                    <p className="text-xs text-gray-200">Vans e pick-ups</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg">
                  <Car className="w-10 h-10 text-[#002244]" />
                </div>
                <h2 className="text-4xl font-bold text-[#002244] mb-6">Financiamento Veicular</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Conquiste seu veículo com facilidade. Financiamento para carros, motos, 
                  caminhões e utilitários com as melhores condições.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Taxa a partir de 1,2% a.m.</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Financiamento até 100%</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Prazo até 60 meses</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Sem entrada</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Aprovação em 24h</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Proteção veicular inclusa</span>
                    </div>
                  </div>
                </div>
                <Link href="/simulacao" className="bg-gradient-to-r from-[#002244] to-[#001122] text-white px-8 py-4 rounded-lg font-bold hover:from-[#FFD700] hover:to-[#FF8C00] hover:text-[#002244] transition-all inline-flex items-center shadow-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Simular Agora
                </Link>
              </div>
            </div>

            {/* Crédito Empresarial */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg">
                  <Building2 className="w-10 h-10 text-[#002244]" />
                </div>
                <h2 className="text-4xl font-bold text-[#002244] mb-6">Crédito Empresarial</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Capital de giro para fazer seu negócio crescer. Soluções de crédito 
                  personalizadas para empresas de todos os portes.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Até R$ 2 milhões</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Taxa a partir de 2,5% a.m.</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Prazo até 48 meses</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Análise personalizada</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Liberação em 72h</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Sem garantia real</span>
                    </div>
                  </div>
                </div>
                <Link href="/simulacao" className="bg-gradient-to-r from-[#002244] to-[#001122] text-white px-8 py-4 rounded-lg font-bold hover:from-[#FFD700] hover:to-[#FF8C00] hover:text-[#002244] transition-all inline-flex items-center shadow-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Simular Agora
                </Link>
              </div>
              <div className="bg-gradient-to-br from-[#002244] to-[#001122] rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Segmentos Atendidos</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-bold mb-2">Comércio</h4>
                    <p className="text-sm text-gray-200">Lojas, restaurantes, farmácias</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-bold mb-2">Indústria</h4>
                    <p className="text-sm text-gray-200">Manufatura, produção, transformação</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-bold mb-2">Serviços</h4>
                    <p className="text-sm text-gray-200">Consultoria, tecnologia, saúde</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-bold mb-2">Agronegócio</h4>
                    <p className="text-sm text-gray-200">Agricultura, pecuária, cooperativas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consórcio */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-[#002244] to-[#001122] rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Vantagens do Consórcio</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-[#FFD700] mr-3" />
                    <span>Sem juros, apenas taxa de administração</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-[#FFD700] mr-3" />
                    <span>Parcelas que cabem no seu bolso</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-[#FFD700] mr-3" />
                    <span>Contemplação por sorteio ou lance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-[#FFD700] mr-3" />
                    <span>Garantia de contemplação</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg">
                  <Users className="w-10 h-10 text-[#002244]" />
                </div>
                <h2 className="text-4xl font-bold text-[#002244] mb-6">Consórcio</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Uma forma inteligente e econômica de adquirir bens. 
                  Consórcios para imóveis, veículos e serviços.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Sem juros</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Várias modalidades</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Contemplação garantida</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Parcelas flexíveis</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Pode usar FGTS</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                      <span className="text-gray-700">Transferência permitida</span>
                    </div>
                  </div>
                </div>
                <Link href="/simulacao" className="bg-gradient-to-r from-[#002244] to-[#001122] text-white px-8 py-4 rounded-lg font-bold hover:from-[#FFD700] hover:to-[#FF8C00] hover:text-[#002244] transition-all inline-flex items-center shadow-lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Simular Agora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002244] mb-4">Compare Nossas Soluções</h2>
            <p className="text-xl text-gray-600">Encontre a opção ideal para seu perfil</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-[#002244] to-[#001122] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Características</th>
                  <th className="px-6 py-4 text-center">Crédito Imobiliário</th>
                  <th className="px-6 py-4 text-center">Financiamento Veicular</th>
                  <th className="px-6 py-4 text-center">Crédito Empresarial</th>
                  <th className="px-6 py-4 text-center">Consórcio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#002244]">Taxa de Juros</td>
                  <td className="px-6 py-4 text-center">A partir de 8,5% a.a.</td>
                  <td className="px-6 py-4 text-center">A partir de 1,2% a.m.</td>
                  <td className="px-6 py-4 text-center">A partir de 2,5% a.m.</td>
                  <td className="px-6 py-4 text-center">Sem juros</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#002244]">Prazo Máximo</td>
                  <td className="px-6 py-4 text-center">35 anos</td>
                  <td className="px-6 py-4 text-center">60 meses</td>
                  <td className="px-6 py-4 text-center">48 meses</td>
                  <td className="px-6 py-4 text-center">Variável</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#002244]">Valor Máximo</td>
                  <td className="px-6 py-4 text-center">90% do imóvel</td>
                  <td className="px-6 py-4 text-center">100% do veículo</td>
                  <td className="px-6 py-4 text-center">R$ 2 milhões</td>
                  <td className="px-6 py-4 text-center">Conforme grupo</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#002244]">Aprovação</td>
                  <td className="px-6 py-4 text-center">48 horas</td>
                  <td className="px-6 py-4 text-center">24 horas</td>
                  <td className="px-6 py-4 text-center">72 horas</td>
                  <td className="px-6 py-4 text-center">Imediata</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#002244] to-[#001122] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Qual solução é ideal para você?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Nossa equipe especializada está pronta para encontrar a melhor opção para seu perfil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/simulacao" className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-[#002244] px-8 py-4 rounded-lg font-bold text-lg hover:from-white hover:to-gray-100 transition-all shadow-lg">
              Simular Agora
            </Link>
            <a href="https://wa.me/5511915583458" className="border-2 border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700] hover:text-[#002244] transition-all">
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