import React from 'react';
import { ChevronRight, ShieldCheck, Wrench } from 'lucide-react';

export default function InformationContent({
  modal,
  setSelected,
  open,
}) {

  return (<><>
                <div className="modal-icon">
                  <ShieldCheck />
                </div>
                <h2>
                  {
                    {
                      care: "Cuidado para continuar sua jornada.",
                      privacy: "Sua privacidade, em primeiro lugar.",
                      terms: "Uma experiência transparente.",
                      help: "Como podemos ajudar?",
                    }[modal]
                  }
                </h2>
                {modal === "care" ? (
                  <>
                    <p>Escolha um cuidado para seu próximo caminho.</p>
                    {[
                      "Revisão preventiva",
                      "Seguro automotivo",
                      "Vistoria veicular",
                      "Troca de óleo",
                    ].map((s) => (
                      <button
                        className="care-item"
                        key={s}
                        onClick={() => {
                          setSelected({ model: s });
                          open("contact", { model: s });
                        }}
                      >
                        <Wrench size={18} />
                        {s}
                        <ChevronRight size={18} />
                      </button>
                    ))}
                    <small>
                      Catálogo demonstrativo. Serviços e agendamentos dependem
                      de integração com parceiros.
                    </small>
                  </>
                ) : modal === "privacy" ? (
                  <p>
                    Esta demonstração salva apenas seus favoritos, nome de
                    exibição e preferência deste aviso no armazenamento do
                    navegador. Os formulários não enviam informações. Imagens
                    são carregadas do Unsplash. Você pode limpar os dados nas
                    configurações do navegador.
                  </p>
                ) : modal === "terms" ? (
                  <p>
                    Este site é um protótipo da Vertice Motors. Veículos, preços
                    e simulações são ilustrativos. Anúncios, pagamentos, crédito
                    e negociação não são processados nesta versão.
                  </p>
                ) : (
                  <p>
                    Use a busca para explorar veículos, toque no coração para
                    salvar seus favoritos e abra um anúncio para ver os
                    detalhes. Em “Financiar”, você pode calcular parcelas
                    estimadas. Este ambiente funciona como demonstração, sem
                    atendimento externo conectado.
                  </p>
                )}
              </></>);
}
