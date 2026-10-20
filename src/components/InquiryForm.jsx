import React from 'react';
import { ArrowRight, UserRound, CarFront, BadgeCheck } from 'lucide-react';

export default function InquiryForm({
  modal,
  setModal,
  selected,
  sent,
  setSent,
  setUser,
}) {

  return (<><>
                <div className="modal-icon">
                  {modal === "login" ? <UserRound /> : <CarFront />}
                </div>
                <h2>
                  {modal === "sell"
                    ? "Uma nova história para seu veículo."
                    : modal === "login"
                      ? "Bem-vindo à sua próxima história."
                      : selected?.inquiryType === 'insurance'
                        ? `Saiba mais: ${selected.model}`
                        : `Gostou do ${selected?.model}?`}
                </h2>
                <p>
                  {modal === "sell"
                    ? "Prepare seu anúncio de demonstração."
                    : modal === "login"
                      ? "Personalize sua experiência neste dispositivo."
                      : "Registre seu interesse nesta demonstração."}
                </p>
                {sent ? (
                  <div className="success">
                    <BadgeCheck size={45} />
                    <h3>
                      {modal === "login"
                        ? "Tudo pronto!"
                        : "Dados registrados na demonstração."}
                    </h3>
                    <p>
                      {modal === "login"
                        ? "Sua experiência está personalizada."
                        : "Nenhuma informação foi enviada a vendedores ou serviços externos."}
                    </p>
                    <button className="primary" onClick={() => setModal(null)}>
                      Continuar explorando
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const data = new FormData(e.currentTarget);
                      if (modal === "login") {
                        const name = data.get("name");
                        setUser(name);
                        
                      }
                      setSent(true);
                    }}
                  >
                    <label>
                      Seu nome
                      <input
                        name="name"
                        autoComplete="given-name"
                        required
                        placeholder="Como podemos chamar você?"
                      />
                    </label>
                    {modal !== "login" && (
                      <label>
                        E-mail
                        <input
                          type="email"
                          required
                          placeholder="voce@exemplo.com"
                        />
                      </label>
                    )}
                    {modal === "sell" && (
                      <>
                        <label>
                          Marca e modelo
                          <input required placeholder="Ex.: BMW 320i" />
                        </label>
                        <div className="form-row">
                          <label>
                            Ano
                            <input
                              required
                              type="number"
                              min="1900"
                              max="2027"
                              placeholder="2024"
                            />
                          </label>
                          <label>
                            Preço desejado
                            <input
                              required
                              type="number"
                              min="1"
                              placeholder="150000"
                            />
                          </label>
                        </div>
                      </>
                    )}
                    <button className="primary full">
                      {modal === "login"
                        ? "Continuar"
                        : modal === "sell"
                          ? "Preparar anúncio"
                          : "Registrar interesse"}
                      <ArrowRight size={17} />
                    </button>
                    <small>
                      Versão demonstrativa. Não cria conta em servidor e não
                      envia dados.
                    </small>
                  </form>
                )}
              </></>);
}
