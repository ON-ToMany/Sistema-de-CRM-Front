import './Certificado.css'
import { useState } from 'react'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import logoGreenTech from '../../assets/logo GreenTech.png'

type Props = {
  oportunidade: {
    cliente: {
      nome: string
    }
    co2Economizado: number
    equipamento: string
  }
}

export default function CertificadoVerde({
  oportunidade,
}: Props) {

  function gerarHash() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let h = ''

    for (let i = 0; i < 8; i++) {
      h += chars[Math.floor(Math.random() * chars.length)]
    }

    return 'GTC-2025-' + h
  }

  const [hash, setHash] = useState(gerarHash())

  function novoHash() {
    setHash(gerarHash())
  }

  const dataAtual = new Date().toLocaleDateString('pt-BR')

  async function gerarPDF() {
    const cert = document.getElementById('cert')

    if (!cert) return

    const canvas = await html2canvas(cert, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    })

    const img = canvas.toDataURL('image/png')

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4',
    })

    const largura = pdf.internal.pageSize.getWidth()

    const altura =
      (canvas.height * largura) / canvas.width

    pdf.addImage(
      img,
      'PNG',
      0,
      (pdf.internal.pageSize.getHeight() - altura) / 2,
      largura,
      altura
    )

    pdf.save('certificado-greentech.pdf')
  }

  return (
    <div className="page-cert">

      <div className="controls">

        <button
          className="btn btn-primary"
          onClick={gerarPDF}
        >
          Baixar PDF
        </button>

        <button
          className="btn btn-secondary"
          onClick={novoHash}
        >
          Gerar Novo Hash
        </button>

      </div>

      <div id="cert">

        <div className="border-outer"></div>
        <div className="border-inner"></div>

        <div className="cert-header">

          <div className="logo-wrap">

           <img
  src={logoGreenTech}
  alt="Logo GreenTech"
  className="logo-greentech"
/>
            <div>
              <div className="logo-name">
                GreenTech CRM
              </div>

              <div className="logo-tagline">
                Tecnologia que transforma relações!
              </div>
            </div>

          </div>

          <div className="seal">

            <div className="seal-outer"></div>

            <div className="seal-inner">

              <div className="seal-esg">
                ESG
              </div>

              <div className="seal-year">
                2026
              </div>

            </div>

          </div>

        </div>

        <div className="cert-body">

          <div className="cert-title">
            CERTIFICADO
          </div>

          <div className="cert-subtitle">
            PARCERIA E SUSTENTABILIDADE
          </div>

          <div className="divider-gold"></div>

          <div className="cert-intro">
            A GreenTech CRM certifica que
          </div>

         <div className="cert-name">
                  IonGuard Seguros E-bike
                 </div>

          <div className="cert-desc">
            É um Parceiro Sustentável,
            reconhecido por práticas exemplares
            na destinação correta de equipamentos
            eletrônicos e redução de impacto ambiental.
          </div>

          <div className="impact-bar">

            <div className="impact-item">

              <div className="impact-val">
                {oportunidade.co2Economizado}kg
              </div>

              <div className="impact-unit">
                KG de CO₂ evitado
              </div>

            </div>

            <div className="impact-sep"></div>

            <div className="impact-item">

              <div className="impact-val">
                59
              </div>

              <div className="impact-unit">
                Equipamentos Gerenciados
              </div>

            </div>

            <div className="impact-sep"></div>

            <div className="impact-item">

              <div className="impact-val">
                12
              </div>

              <div className="impact-unit">
                Impactos Positivos 
              </div>

            </div>

          </div>

          <div className="pillars">

            <div className="pillar">

              <div className="pillar-icon">
                ♻
              </div>

              <div className="pillar-label">
                Sustentabilidade
    
              </div>

            </div>

            <div className="pillar">

              <div className="pillar-icon">
                🤝
              </div>

              <div className="pillar-label">
                Parceria
              </div>

            </div>

            <div className="pillar">

              <div className="pillar-icon">
                ⚡
              </div>

              <div className="pillar-label">
                Inovação
              </div>

            </div>

          </div>

        </div>

       <div className="cert-footer">
  <div className="cert-meta">
    <div>
      <strong>Empresa:</strong> IonGuard Seguros E-bike
    </div>

            <div>
              <strong>Emitido em:</strong>{' '}
              {dataAtual}
            </div>

          </div>

          <div className="hash-block">

            <div className="hash-label">
              Código Hash GreenTech
            </div>

            <div className="hash-code">
              {hash}
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}