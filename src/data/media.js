// All photographs belong to the same fictional Vertice Motors showroom.
// Brand logos remain the official marks; they are not generated photographs.
const photo = name => `/images/dealership/${name}.jpg`;

export const dealershipImages = {
  hero: photo('hero'),
  showroom: photo('showroom'),
  insurance: photo('insurance'),
  bmw: photo('bmw'),
  mercedes: photo('mercedes'),
  porsche: photo('porsche'),
  audi: photo('audi'),
  jeep: photo('jeep'),
  moto: photo('moto'),
  sales: photo('team-sales'),
  documentation: photo('team-docs'),
  relationship: photo('team-care'),
  serviceFinance: photo('service-finance'),
  serviceSell: photo('service-sell'),
  serviceInsurance: photo('service-insurance'),
  categorySuv: photo('category-suv'),
  categorySport: photo('category-sport'),
  categorySedan: photo('category-sedan'),
  aboutStory: photo('about-story'),
  homeAbout: photo('home-about'),
  sellBanner: photo('sell-banner'),
};
