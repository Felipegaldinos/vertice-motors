import React from 'react';
import { CircleDollarSign } from 'lucide-react';
import { money } from '../utils/formatters';
import { useState } from 'react';
import { calculateFinancing } from '../utils/financing';

export default function FinanceSimulator({
  loan,
  setLoan,
}) {
const [entry, setEntry] = useState(() => Math.round(loan / 3));
const [months, setMonths] = useState(48);
const { installment } = calculateFinancing(loan, entry, months);
  return (<><>
                <div className="modal-icon">
                  <CircleDollarSign />
                </div>
                <h2>Seu próximo carro, nos seus planos.</h2>
                <p>Explore uma simulação de financiamento.</p>
                <label>
                  Valor do veículo
                  <input
                    type="number"
                    min="0"
                    value={loan}
                    onChange={(e) => setLoan(Number(e.target.value))}
                  />
                </label>
                <label>
                  Entrada: {money(entry)}
                  <input
                    type="range"
                    min="0"
                    max={loan}
                    step="1000"
                    value={Math.min(entry, loan)}
                    onChange={(e) => setEntry(Number(e.target.value))}
                  />
                </label>
                <label>
                  Prazo
                  <select
                    value={months}
                    onChange={(e) => setMonths(Number(e.target.value))}
                  >
                    {[12, 24, 36, 48, 60].map((n) => (
                      <option key={n} value={n}>
                        {n} meses
                      </option>
                    ))}
                  </select>
                </label>
                <div className="finance-result">
                  <span>{months} parcelas estimadas de</span>
                  <strong>{money(installment || 0)}</strong>
                  <span>
                    Total com entrada:{" "}
                    {money((installment || 0) * months + Math.min(entry, loan))}
                  </span>
                </div>
                <small>
                  Simulação ilustrativa com juros de 1,99% ao mês. Não constitui
                  oferta de crédito. CET, tarifas e aprovação dependem de uma
                  instituição financeira.
                </small>
              </></>);
}
