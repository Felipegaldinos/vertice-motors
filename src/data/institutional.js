export const values = [
  { title: 'Transparência em cada conversa', description: 'Informações claras sobre o veículo, as condições da negociação e cada etapa da compra.', icon: 'transparency' },
  { title: 'Respeito ao seu momento', description: 'Ouvir primeiro. Entender sua rotina e seu orçamento para ajudar você a escolher com tranquilidade.', icon: 'respect' },
  { title: 'Cuidado com cada detalhe', description: 'Atenção à apresentação dos veículos, à documentação e às dúvidas que fazem diferença na decisão.', icon: 'care' },
  { title: 'Relacionamentos que continuam', description: 'Um atendimento próximo que valoriza a confiança antes, durante e depois da entrega das chaves.', icon: 'relationship' },
];

// Substituir as áreas por perfis reais quando nomes e fotografias forem fornecidos.
export const team = [
  { title: 'Consultoria de veículos', subtitle: 'A escolha começa com uma boa conversa.', description: 'A área que ajuda a comparar modelos e entender o que faz sentido para a sua rotina.', image: '/images/about/consultoria.jpg' },
  { title: 'Negociação e documentação', subtitle: 'Clareza do primeiro ao último passo.', description: 'Acompanhamento das condições de compra e orientação sobre os documentos de cada etapa.', image: '/images/about/documentacao.jpg' },
  { title: 'Relacionamento com o cliente', subtitle: 'Proximidade para seguir em frente.', description: 'Um ponto de apoio para organizar dúvidas e acompanhar sua experiência com a concessionária.', image: '/images/about/relacionamento.jpg' },
];

// Marcas presentes no catálogo demonstrativo; não representa vínculo oficial.
export const brands = ['BMW', 'Mercedes-Benz', 'Porsche', 'Audi', 'Jeep'];

// Modalidades editoriais, sem atribuir produtos a seguradoras não confirmadas.
export const insuranceOptions = [
  { id: 'completo', name: 'Seguro compreensivo', label: 'PARA O SEU VEÍCULO', description: 'Uma opção para quem busca reunir diferentes proteções em uma mesma apólice.', items: ['Colisão e danos ao veículo', 'Roubo e furto', 'Incêndio e outros eventos previstos'], icon: 'car' },
  { id: 'terceiros', name: 'Responsabilidade civil', label: 'PARA COMPARTILHAR A ESTRADA', description: 'Proteção voltada aos danos que um imprevisto pode causar a outras pessoas.', items: ['Danos materiais a terceiros', 'Danos corporais a terceiros', 'Limites definidos na contratação'], icon: 'people' },
  { id: 'assistencia', name: 'Assistências e adicionais', label: 'PARA SEGUIR COM TRANQUILIDADE', description: 'Serviços que podem complementar a proteção conforme a sua necessidade.', items: ['Assistência e guincho', 'Proteção para vidros', 'Carro reserva, quando contratado'], icon: 'assistance' },
];

export const insuranceFaqs = [
  { question: 'Como escolher uma proteção para meu carro?', answer: 'Considere o uso do veículo, onde ele circula, quem dirige e quais situações você quer proteger. Compare coberturas, franquias, limites e exclusões antes de escolher.' },
  { question: 'As coberturas são iguais em todas as opções?', answer: 'Não. Coberturas, assistências, limites e franquias variam conforme o produto e as condições da proposta. Os itens desta página são exemplos de modalidades para consulta.' },
  { question: 'Posso contratar ou receber uma cotação por este site?', answer: 'Nesta versão, você pode conhecer as modalidades e registrar um interesse demonstrativo. A cotação, a contratação e o envio a parceiros ainda não estão conectados.' },
];
