export type themeType =
  | "Modern"
  | "Vintage"
  | "Minimalist"
  | "Professional"
  | "Tribal"
  | "Tropical"
  | "Industrial"
  | "Tribal"
  | "Neoclassic";

export type roomType =
  | "Living Room"
  | "Dining Room"
  | "Bedroom"
  | "Bathroom"
  | "Office"
  | "Kitchen"
  | "Arabic Majlis"
  | "RoofTop"
  | "Shop"
  | "Arabic Majlis"
  | "Store"
  | "Basement"
  | "Restaurant"
  | "Outdoor Patio"
  | "Gaming Room";

export const themes: themeType[] = [
  "Modern",
  "Minimalist",
  "Professional",
  "Tropical",
  "Tribal",
  "Vintage",
  "Industrial",
  "Neoclassic",
];
export const rooms: roomType[] = [
  "Living Room",
  "Dining Room",
  "Office",
  "Bedroom",
  "Arabic Majlis",
  "Bathroom",
  "Basement",
  "Arabic Majlis",
  "RoofTop",
  "Restaurant",
  "Shop",
  "Store",
  "Kitchen",
  "Gaming Room",
  "Outdoor Patio",
];

export type themeTypeFr =
  | "Moderne"
  | "Vintage"
  | "Minimaliste"
  | "Professionnel"
  | "Tribal"
  | "Tropical"
  | "Tribal"
  | "Industriel"
  | "Néoclassique";

export type roomTypeFr =
  | "Living Room"
  | "Salon"
  | "Salle à manger"
  | "Bureau"
  | "Chambre"
  | "Salle de bain"
  | "Sous-sol"
  | "RoofTop"
  | "Majlis Arabe"
  | "Restaurant"
  | "Majlis Arabe"
  | "Boutique"
  | "Magasin"
  | "Cuisine"
  | "Salle de jeux"
  | "Patio extérieur";

export const themesFr: themeTypeFr[] = [
  "Moderne",
  "Minimaliste",
  "Tribal",
  "Professionnel",
  "Tropical",
  "Tribal",
  "Vintage",
  "Industriel",
  "Néoclassique",
];
export const roomsFr: roomTypeFr[] = [
  "Salon",
  "Salle à manger",
  "Bureau",
  "Chambre",
  "Salle de bain",
  "Majlis Arabe",
  "Sous-sol",
  "RoofTop",
  "Restaurant",
  "Arabe"
  "Boutique",
  "Magasin",
  "Cuisine",
  "Salle de jeux",
  "Patio extérieur",
];



export function getRoomType(room: roomTypeFr): roomType {
  let response: roomType = "Office";
  switch (room) {
    case "Salon":
      response = "Living Room";
      break;
    case "Salle à manger":
      response = "Dining Room";
      break;
    case "Bureau":
      response = "Office";
      break;
    case "Chambre":
      response = "Bedroom";
      break;
    case "Majlis Arabe":
      response = "Arabic Majlis";
      break;
    case "Salle de bain":
      response = "Bathroom";
      break;
    case "Sous-sol":
      response = "Basement";
      break;
    case "RoofTop":
      response = "RoofTop";
      break;
    case "Restaurant":
      response = "Restaurant";
      break;
    case "Boutique":
      response = "Shop";
      break;
    case "Magasin":
      response = "Store";
      break;
    case "Cuisine":
      response = "Kitchen";
      break;
    case "Salle de jeux":
      response = "Gaming Room";
      break;
    case "Patio extérieur":
      response = "Outdoor Patio";
      break;

    default: 
      response = "Office";
      break;
  };
  return response;
}

export function getRoomTheme(theme: themeTypeFr): themeType {
  let response : themeType = "Modern";
  switch (theme) {
    case "Moderne":
      response = "Modern";
      break;
    case "Vintage":
      response = "Vintage";
      break;
    case "Tribal":
      response = "Tribal";
      break;
    case "Minimaliste":
      response = "Minimalist";
      break;
    case "Professionnel":
      response = "Professional";
      break;
    case "Tropical":
      response = "Tropical";
      break;
    case "Industriel":
      response = "Industrial";
      break;
    case "Néoclassique":
      response = "Neoclassic";
      break;
    default:
      response = "Modern";
      break;
  }
  return response;
}
