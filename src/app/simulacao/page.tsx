'use client'

import React, { useState } from 'react'
import { Phone, MessageCircle, Calculator, DollarSign, Home, Car, Building2, Users, CheckCircle, Send, User, Mail, FileText } from 'lucide-react'
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

    const whatsappUrl = `https://wa.me/5511915583458?text=${encodeURIComponent(mensagem)}`
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

export default function SimulacaoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoCredito: '',
    valorDesejado: '',
    renda: '',
    finalidade: ''
  })

  const [step, setStep] = useState(1)
  const [resultado, setResultado] = useState<any>(null)
  const [showForm, setShowForm] = useState(false)
  const [formType, setFormType] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulação de cálculo
    const valor = parseFloat(formData.valorDesejado.replace(/[^\d]/g, ''))
    const renda = parseFloat(formData.renda.replace(/[^\d]/g, ''))
    
    let taxa = 0.085 // 8.5% ao ano
    let prazo = 360 // 30 anos
    
    if (formData.tipoCredito === 'consorcio') {
      taxa = 0
      prazo = 180 // 15 anos
    } else if (formData.tipoCredito === 'empresarial') {
      taxa = 0.12
      prazo = 60 // 5 anos
    }
    
    const taxaMensal = taxa / 12
    const parcela = taxa > 0 
      ? (valor * taxaMensal * Math.pow(1 + taxaMensal, prazo)) / (Math.pow(1 + taxaMensal, prazo) - 1)
      : valor / prazo
    
    setResultado({
      valorSolicitado: valor,
      parcela: parcela,
      prazo: prazo,
      taxa: taxa * 100,
      tipoCredito: formData.tipoCredito,
      aprovado: parcela <= (renda * 0.3) // 30% da renda
    })
    
    setStep(3)
  }

  const formatCurrency = (value: string) => {
    const number = value.replace(/[^\d]/g, '')
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(parseInt(number) / 100)
  }

  const openForm = (solutionTitle: string) => {
    setFormType(solutionTitle)
    setShowForm(true)
  }

  const creditTypes = [
    { 
      value: 'imobiliario', 
      label: 'Nexts Financiamentos', 
      icon: Home,
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
      value: 'consorcio', 
      label: 'Nexts Consórcios Imobiliários', 
      icon: Users,
      simulationLink: "https://simularmeuconsorcio.com/nextsconsorcios/default.php"
    },
    { 
      value: 'empresarial', 
      label: 'Nexts Empréstimos', 
      icon: Building2,
      hasForm: true
    },
    { 
      value: 'fgts', 
      label: 'Nexts Saque FGTS', 
      icon: Calculator,
      hasForm: true
    },
    { 
      value: 'limpa-nome', 
      label: 'Nexts Limpa Nome', 
      icon: CheckCircle,
      hasForm: true
    }
  ]

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
              <Link href="/simulacao" className="text-[#D0A556] font-semibold">Simulação</Link>
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002244] via-[#003366] to-[#001122] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Simulação de 
              <span className="text-transparent bg-gradient-to-r from-[#F7D995] to-[#D0A556] bg-clip-text"> Crédito</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Descubra as melhores condições para seu financiamento em poucos minutos. Simulação gratuita e sem compromisso.
            </p>
          </div>
        </div>
      </section>

      {/* Simulador */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {step === 1 && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#002244] mb-4">Escolha o Tipo de Crédito</h2>
                <p className="text-gray-600">Selecione a modalidade que melhor atende suas necessidades</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {creditTypes.map((type) => (
                  <div key={type.value} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <type.icon className="w-6 h-6 text-[#002244]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#002244]">
                        {type.label}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {/* Consórcio - Link direto */}
                      {type.simulationLink && (
                        <a 
                          href={type.simulationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] py-2 rounded-lg font-semibold hover:from-[#002244] hover:to-[#001122] hover:text-white transition-all text-center block shadow-lg text-sm"
                        >
                          Simular Consórcio
                        </a>
                      )}

                      {/* Financiamentos - Múltiplas opções */}
                      {type.hasMultipleSimulations && (
                        <div className="space-y-2">
                          {type.simulations?.map((sim, idx) => (
                            <a 
                              key={idx}
                              href={sim.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-gradient-to-r from-[#002244] to-[#001122] text-white py-2 px-3 rounded-lg font-semibold hover:from-[#F7D995] hover:to-[#D0A556] hover:text-[#002244] transition-all flex items-center justify-center shadow-lg text-sm"
                            >
                              <img src={sim.logo} alt={sim.name} className="w-4 h-4 mr-2 rounded" />
                              {sim.name}
                            </a>
                          ))}
                        </div>
                      )}

                      {/* Formulários - Para Empréstimo, Saque FGTS, Limpa Nome */}
                      {type.hasForm && (
                        <button 
                          onClick={() => openForm(type.label)}
                          className="w-full bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] py-2 rounded-lg font-semibold hover:from-[#002244] hover:to-[#001122] hover:text-white transition-all text-center shadow-lg text-sm"
                        >
                          Solicitar Agora
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#002244] mb-4">Dados para Simulação</h2>
                <p className="text-gray-600">Preencha os campos abaixo para calcular suas condições</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#002244] mb-2">Nome Completo</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#D0A556] focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#002244] mb-2">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#D0A556] focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#002244] mb-2">Telefone</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#D0A556] focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#002244] mb-2">Valor Desejado</label>
                    <input
                      type="text"
                      name="valorDesejado"
                      value={formData.valorDesejado}
                      onChange={(e) => {
                        const formatted = formatCurrency(e.target.value)
                        setFormData({ ...formData, valorDesejado: formatted })
                      }}
                      placeholder="R$ 0,00"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#D0A556] focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#002244] mb-2">Renda Mensal</label>
                    <input
                      type="text"
                      name="renda"
                      value={formData.renda}
                      onChange={(e) => {
                        const formatted = formatCurrency(e.target.value)
                        setFormData({ ...formData, renda: formatted })
                      }}
                      placeholder="R$ 0,00"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#D0A556] focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#002244] mb-2">Finalidade</label>
                    <select
                      name="finalidade"
                      value={formData.finalidade}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#D0A556] focus:outline-none"
                      required
                    >
                      <option value="">Selecione...</option>
                      <option value="casa-propria">Casa Própria</option>
                      <option value="investimento">Investimento</option>
                      <option value="reforma">Reforma</option>
                      <option value="capital-giro">Capital de Giro</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-200 text-[#002244] py-3 rounded-lg font-bold hover:bg-gray-300 transition-all"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#F7D995] to-[#D0A556] text-[#002244] py-3 rounded-lg font-bold hover:from-[#002244] hover:to-[#001122] hover:text-white transition-all shadow-lg"
                  >
                    Simular
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && resultado && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#002244] mb-4">Resultado da Simulação</h2>
                <p className="text-gray-600">Confira as condições calculadas para seu perfil</p>
              </div>
              
              <div className={`p-6 rounded-xl mb-8 ${resultado.aprovado ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className={`w-12 h-12 ${resultado.aprovado ? 'text-green-500' : 'text-red-500'}`} />
                </div>
                <h3 className={`text-2xl font-bold text-center mb-2 ${resultado.aprovado ? 'text-green-700' : 'text-red-700'}`}>
                  {resultado.aprovado ? 'Pré-Aprovado!' : 'Necessário Ajuste'}
                </h3>
                <p className={`text-center ${resultado.aprovado ? 'text-green-600' : 'text-red-600'}`}>
                  {resultado.aprovado 
                    ? 'Suas condições estão dentro dos parâmetros aprovados'
                    : 'A parcela excede 30% da sua renda. Vamos encontrar uma solução!'
                  }
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-[#002244] mb-4">Detalhes da Simulação</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Valor Solicitado:</span>
                      <span className="font-semibold text-[#002244]">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resultado.valorSolicitado)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Parcela Mensal:</span>
                      <span className="font-semibold text-[#002244]">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resultado.parcela)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Prazo:</span>
                      <span className="font-semibold text-[#002244]">{Math.floor(resultado.prazo / 12)} anos</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxa:</span>
                      <span className="font-semibold text-[#002244]">
                        {resultado.taxa === 0 ? 'Sem juros' : `${resultado.taxa.toFixed(2)}% a.a.`}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#F7D995] to-[#D0A556] p-6 rounded-xl text-[#002244]">
                  <h4 className="font-bold mb-4">Próximos Passos</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Análise detalhada do seu perfil
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Documentação necessária
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Aprovação final em até 48h
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Assinatura e liberação
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setStep(1)
                    setResultado(null)
                    setFormData({
                      nome: '',
                      email: '',
                      telefone: '',
                      tipoCredito: '',
                      valorDesejado: '',
                      renda: '',
                      finalidade: ''
                    })
                  }}
                  className="flex-1 bg-gray-200 text-[#002244] py-3 rounded-lg font-bold hover:bg-gray-300 transition-all"
                >
                  Nova Simulação
                </button>
                <a 
                  href="https://wa.me/5511915583458" 
                  className="flex-1 bg-[#25D366] text-white py-3 rounded-lg font-bold hover:bg-[#128C7E] transition-all text-center flex items-center justify-center shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modal do Formulário */}
      <FormModal isOpen={showForm} onClose={() => setShowForm(false)} type={formType} />

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
