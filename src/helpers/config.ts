
export type systemValue = 'gdg' | 'iwd' | 'devfest-cerrado' | 'devfest-triangulo' | string;

export interface ConfigValues {
  name: string,
  eventDate: Date,
  eventLinkRegistrationUrl: string,
  place: string,
  placeCity: string,
  formattedDate: string,
  email: 'gdgbhz@gmail.com',
  organizedBy: systemValue
  midiaKit?: string
  socialMedia?: {
    instagram: string;
  }
}


const configValues = {
  name: 'Devfest BH 2023',
  eventDate: '2023-11-18T08:00:00',
  eventLinkRegistrationUrl: 'https://www.sympla.com.br/evento/devfest-bh/2159215?referrer=www.google.com',
  place: '',
  placeCity: 'Belo Horizonte - MG',
  formattedDate: '18 Novembro',
  email: 'gdgbhz@gmail.com',
  organizedBy: 'gdg', // options
  midiaKit: 'https://docs.google.com/presentation/d/1gPKzG7xZibF3wAbEA050irl2ijhsAMRKXMispSaFrys/edit#slide=id.g223b3f84614_0_31',
  socialMedia: {
    instagram: 'https://www.instagram.com/gdg_bh'
  }
}

const resolveURL = () => {
  let finalUrl = '';
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    finalUrl = process.env.NEXT_PUBLIC_SITE_URL;
  } else if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    finalUrl += `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  } else {
    finalUrl += `https://devfesttriangulo.com.br`
  }


  return finalUrl;

}


export const server = resolveURL();

export default configValues;
