import React from 'react';
import { X } from 'lucide-react';
import VehicleDetails from './VehicleDetails';
import FinanceSimulator from './FinanceSimulator';
import InquiryForm from './InquiryForm';
import InformationContent from './InformationContent';

export default function ModalRouter({
  modal,
  setModal,
  selected,
  setSelected,
  sent,
  setSent,
  setUser,
  loan,
  setLoan,
  open,
}) {

  return (<>{modal && (
        <div className="modal-backdrop" onClick={() => setModal(null)}>
          <section
            className={"modal " + (modal === "detail" ? "detail-modal" : "")}
            role="dialog"
            aria-modal="true"
            aria-label="Vertice Motors"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              aria-label="Fechar"
              onClick={() => setModal(null)}
            >
              <X />
            </button>
            {modal === "detail" && selected ? (
<VehicleDetails selected={selected} setLoan={setLoan} open={open} />
            ) : modal === "finance" ? (
<FinanceSimulator loan={loan} setLoan={setLoan} />
            ) : ["sell", "contact", "login"].includes(modal) ? (
<InquiryForm
        modal={modal}
        setModal={setModal}
        selected={selected}
        sent={sent}
        setSent={setSent}
        setUser={setUser}
      />

            ) : (<InformationContent modal={modal} setSelected={setSelected} open={open} />

            )}
          </section>
        </div>
      )}</>);
}
