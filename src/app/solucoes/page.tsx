'use client'

import React, { useState } from 'react'
import { Phone, MessageCircle, Home, Car, Building2, Users, CheckCircle, Calculator, Shield, Star, ChevronRight, Send, User, Mail, DollarSign, FileText } from 'lucide-react'
import Link from 'next/link'

// Modal de Formulário
function FormModal({ isOpen, onClose, type }: { isOpen: boolean; onClose: () => void; type: string }) {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    tipoSolucao: type,
    valorDesejado: '',
    renda: '',
    observacoes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validação básica
    if (!formData.nome || !formData.telefone || !formData.email) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    // Criar mensagem para WhatsApp
    const mensagem = `Olá! Gostaria de solicitar informações sobre *${formData.tipoSolucao}*.

*Dados do Cliente:*
• Nome: ${formData.nome}
• Telefone: ${formData.telefone}
• E-mail: ${formData.email}
• Valor desejado: ${formData.valorDesejado || 'Não informado'}
• Renda mensal: ${formData.renda || 'Não informado'}
• Observações: ${formData.observacoes || 'Nenhuma'}

Aguardo retorno para dar continuidade ao processo.`

    const whatsappUrl = `https://wa.me/5511967878622?text=${encodeURIComponent(mensagem)}`
    window.open(whatsappUrl, '_blank')
    
    onClose()
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      tipoSolucao: type,
      valorDesejado: '',
      renda: '',
      observacoes: ''
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-[#002244]">Solicitar {type}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
            <input
              type="text"
              required
              value={formData.nome}
              onChange={(e) => setFormData({...formData, nome: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0A556] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefone *</label>
            <input
              type="tel"
              required
              value={formData.telefone}
              onChange={(e) => setFormData({...formData, telefone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0A556] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0A556] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Valor Desejado</label>
            <input
              type="text"
              value={formData.valorDesejado}
              onChange={(e) => setFormData({...formData, valorDesejado: e.target.value})}
              placeholder="Ex: R$ 50.000"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0A556] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Renda Mensal</label>
            <input
              type="text"
              value={formData.renda}
              onChange={(e) => setFormData({...formData, renda: e.target.value})}
              placeholder="Ex: R$ 5.000"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0A556] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Observações</label>
            <textarea
              value={formData.observacoes}
              onChange={(e) => setFormData({...formData, observacoes: e.target.value})}
              rows={3}
              placeholder="Informações adicionais..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0A556] focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] py-3 rounded-lg font-bold hover:from-[#002244] hover:to-[#001122] hover:text-white transition-all shadow-lg"
          >
            Enviar via WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}

export default function SolucoesPage() {
  const [selectedSolution, setSelectedSolution] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [formType, setFormType] = useState('')
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    tipoSolucao: '',
    valorDesejado: '',
    renda: '',
    observacoes: ''
  })

  const solutions = [
    {
      icon: Users,
      title: "Nexts Consórcios Imobiliários",
      description: "Uma forma inteligente de adquirir seu imóvel sem juros",
      features: ["Sem juros", "Várias modalidades", "Contemplação garantida", "Parcelas fixas"],
      details: "O consórcio imobiliário é uma modalidade de financiamento coletivo que permite a aquisição de imóveis sem juros. Os participantes contribuem mensalmente para um fundo comum e são contemplados por sorteio ou lance.",
      benefits: ["Economia de até 40% em juros", "Flexibilidade de pagamento", "Possibilidade de antecipação", "Segurança jurídica"],
      hasForm: false,
      simulationLink: "https://simularmeuconsorcio.com/nextsconsorcios/default.php"
    },
    {
      icon: Home,
      title: "Nexts Financiamentos",
      description: "Financie seu imóvel com as melhores condições do mercado",
      features: ["Até 35 anos para pagar", "Taxa a partir de 8,5% a.a.", "Financiamento até 90%", "Aprovação rápida"],
      details: "Nosso financiamento imobiliário oferece as melhores condições do mercado para você realizar o sonho da casa própria. Com taxas competitivas e prazos estendidos.",
      benefits: ["Taxas competitivas", "Processo simplificado", "Aprovação em até 48h", "Acompanhamento personalizado"],
      hasForm: false,
      hasMultipleSimulations: true,
      simulations: [
        {
          name: "Santander",
          logo: "https://play-lh.googleusercontent.com/Lor5zYGL7SQYZfVnjH4D_dnBmF8Ms2-mRS6kMryjzftbcTZrwHM1fMxyKfHKPCQVJjI",
          link: "https://www.negociosimobiliarios.santander.com.br/negociosimobiliarios/#/dados-pessoais"
        },
        {
          name: "Caixa Econômica",
          logo: "https://i.pinimg.com/736x/e2/32/6c/e2326c6c37025c2ae63ad7d70aa7249e.jpg",
          link: "https://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso"
        }
      ]
    },
    {
      icon: Building2,
      title: "Nexts Empréstimos",
      description: "Capital de giro para fazer seu negócio crescer",
      features: ["Até R$ 2 milhões", "Juros competitivos", "Análise personalizada", "Liberação rápida"],
      details: "Oferecemos soluções de crédito empresarial para impulsionar seu negócio. Capital de giro, expansão, equipamentos e muito mais.",
      benefits: ["Análise diferenciada", "Condições especiais", "Relacionamento bancário", "Consultoria financeira"],
      hasForm: true
    },
    {
      icon: Calculator,
      title: "Nexts Saque FGTS",
      description: "Saque seu FGTS de forma rápida e segura",
      features: ["Processo simplificado", "Aprovação rápida", "Sem burocracia", "Atendimento especializado"],
      details: "Facilitamos o saque do seu FGTS com processo 100% digital e aprovação em minutos. Ideal para quem precisa de dinheiro rápido.",
      benefits: ["Processo 100% digital", "Aprovação em minutos", "Sem filas", "Segurança total"],
      hasForm: true
    },
    {
      icon: CheckCircle,
      title: "Nexts Limpa Nome",
      description: "Limpe seu nome e volte ao mercado de crédito",
      features: ["Negociação facilitada", "Condições especiais", "Suporte completo", "Renegociação de dívidas"],
      details: "Nossa equipe especializada ajuda você a limpar seu nome e voltar ao mercado de crédito com condições especiais de negociação.",
      benefits: ["Desconto de até 90%", "Parcelamento facilitado", "Suporte jurídico", "Acompanhamento pós-acordo"],
      hasForm: true
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const generateWhatsAppMessage = () => {
    const message = `*Solicitação de ${formData.tipoSolucao}*

*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
*Email:* ${formData.email}
*Tipo de Solução:* ${formData.tipoSolucao}
*Valor Desejado:* R$ ${formData.valorDesejado}
*Renda Mensal:* R$ ${formData.renda}
*Observações:* ${formData.observacoes || 'Nenhuma observação adicional'}

Gostaria de mais informações sobre esta solução financeira.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/5511967878622?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    generateWhatsAppMessage()
    setShowForm(false)
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      tipoSolucao: '',
      valorDesejado: '',
      renda: '',
      observacoes: ''
    })
  }

  const openForm = (solutionTitle: string) => {
    setFormType(solutionTitle)
    setFormData(prev => ({ ...prev, tipoSolucao: solutionTitle }))
    setShowForm(true)
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
              <Link href="/solucoes" className="text-[#D0A556] font-semibold">Soluções</Link>
              <Link href="/simulacao" className="text-[#002244] hover:text-[#D0A556] transition-colors font-semibold">Simulação</Link>
              <Link href="/contato" className="text-[#002244] hover:text-[#D0A556] transition-colors font-semibold">Contato</Link>
            </nav>

            {/* CTAs Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] px-4 py-2 rounded-lg font-bold hover:from-[#002244] hover:to-[#001122] hover:text-white transition-all shadow-lg"
              >
                Solicitar Crédito
              </button>
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
              Nossas 
              <span className="text-transparent bg-gradient-to-r from-[#F7D995] to-[#D0A556] bg-clip-text"> Soluções</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Encontre o produto financeiro ideal para suas necessidades. Soluções personalizadas com as melhores condições do mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Soluções Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lista de Soluções */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#002244] mb-6">Escolha sua Solução</h2>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSolution(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      selectedSolution === index
                        ? 'bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] shadow-lg'
                        : 'bg-white hover:bg-gray-50 text-[#002244] shadow-md'
                    }`}
                  >
                    <div className="flex items-center">
                      <solution.icon className={`w-6 h-6 mr-3 ${
                        selectedSolution === index ? 'text-[#002244]' : 'text-[#D0A556]'
                      }`} />
                      <span className="font-semibold">{solution.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Detalhes da Solução Selecionada */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-lg">
                    {React.createElement(solutions[selectedSolution].icon, { className: "w-8 h-8 text-[#002244]" })}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#002244]">{solutions[selectedSolution].title}</h3>
                    <p className="text-gray-600">{solutions[selectedSolution].description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-[#002244] mb-4">Características</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {solutions[selectedSolution].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-[#002244] mb-4">Detalhes</h4>
                  <p className="text-gray-600 leading-relaxed">{solutions[selectedSolution].details}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-[#002244] mb-4">Benefícios</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {solutions[selectedSolution].benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <Star className="w-5 h-5 text-[#F7D995] mr-3" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col gap-4">
                  {/* Consórcio - Link direto */}
                  {solutions[selectedSolution].simulationLink && (
                    <a 
                      href={solutions[selectedSolution].simulationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] py-3 rounded-lg font-bold hover:from-[#002244] hover:to-[#001122] hover:text-white transition-all text-center shadow-lg"
                    >
                      Simular Consórcio
                    </a>
                  )}

                  {/* Financiamentos - Múltiplas opções */}
                  {solutions[selectedSolution].hasMultipleSimulations && (
                    <div className="space-y-3">
                      {solutions[selectedSolution].simulations?.map((sim, idx) => (
                        <a 
                          key={idx}
                          href={sim.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-[#002244] to-[#001122] text-white py-3 px-4 rounded-lg font-semibold hover:from-[#F7D995] hover:to-[#D0A556] hover:text-[#002244] transition-all flex items-center justify-center shadow-lg"
                        >
                          <img src={sim.logo} alt={sim.name} className="w-6 h-6 mr-3 rounded" />
                          Simular com {sim.name}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Formulários - Para Empréstimo, Saque FGTS, Limpa Nome */}
                  {solutions[selectedSolution].hasForm && (
                    <button 
                      onClick={() => openForm(solutions[selectedSolution].title)}
                      className="w-full bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] py-3 rounded-lg font-bold hover:from-[#002244] hover:to-[#001122] hover:text-white transition-all text-center shadow-lg"
                    >
                      Solicitar Agora
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal do Formulário */}
      <FormModal isOpen={showForm} onClose={() => setShowForm(false)} type={formType} />

      {/* Modal do Formulário Completo */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#002244]">Solicitar Crédito</h2>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#002244] mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0A556] focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#002244] mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0A556] focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#002244] mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0A556] focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#002244] mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Tipo de Solução *
                </label>
                <select
                  name="tipoSolucao"
                  value={formData.tipoSolucao}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0A556] focus:border-transparent"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Nexts Empréstimos">Nexts Empréstimos</option>
                  <option value="Nexts Saque FGTS">Nexts Saque FGTS</option>
                  <option value="Nexts Limpa Nome">Nexts Limpa Nome</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#002244] mb-2">
                    <DollarSign className="w-4 h-4 inline mr-2" />
                    Valor Desejado *
                  </label>
                  <input
                    type="text"
                    name="valorDesejado"
                    value={formData.valorDesejado}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0A556] focus:border-transparent"
                    placeholder="Ex: 50.000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#002244] mb-2">
                    <DollarSign className="w-4 h-4 inline mr-2" />
                    Renda Mensal *
                  </label>
                  <input
                    type="text"
                    name="renda"
                    value={formData.renda}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0A556] focus:border-transparent"
                    placeholder="Ex: 5.000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#002244] mb-2">
                  Observações Adicionais
                </label>
                <textarea
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D0A556] focus:border-transparent"
                  placeholder="Informações adicionais que possam ajudar na análise..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] px-6 py-3 rounded-lg font-bold hover:from-[#002244] hover:to-[#001122] hover:text-white transition-all shadow-lg flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar para WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#002244] to-[#001122] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para começar sua 
            <span className="text-transparent bg-gradient-to-r from-[#F7D995] to-[#D0A556] bg-clip-text"> simulação?</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Nossa equipe está pronta para encontrar a melhor solução financeira para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] px-8 py-4 rounded-lg font-bold hover:from-white hover:to-gray-100 transition-all shadow-lg"
            >
              Solicitar Crédito
            </button>
            <a href="https://wa.me/5511967878622" className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#128C7E] transition-all flex items-center justify-center shadow-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
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
