export function calculateFinancing(value, entry, months, monthlyRate = 0.0199) {
 const safeValue = Math.max(0, Number(value) || 0);
 const safeEntry = Math.min(safeValue, Math.max(0, Number(entry) || 0));
 const principal = safeValue - safeEntry;
 const period = Math.max(1, Math.trunc(Number(months) || 1));
 const installment = monthlyRate === 0 ? principal / period : principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -period));
 return { principal, entry: safeEntry, installment, total: installment * period + safeEntry };
}
