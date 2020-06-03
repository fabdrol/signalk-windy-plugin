import { Reducer, Action, ActionCreator } from 'redux'
import { IUIDuckState } from '../../types'

export const initialState: IUIDuckState = {
  loading: false,
  error: null,
  notification: null,
  countries: [
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AX', name: 'Åland' },
    { code: 'AL', name: 'Albanië' },
    { code: 'DZ', name: 'Algerije' },
    { code: 'VI', name: 'Amerikaanse Maagdeneilanden' },
    { code: 'AS', name: 'Amerikaans-Samoa' },
    { code: 'AD', name: 'Andorra' },
    { code: 'AO', name: 'Angola' },
    { code: 'AI', name: 'Anguilla' },
    { code: 'AQ', name: 'Antarctica' },
    { code: 'AG', name: 'Antigua en Barbuda' },
    { code: 'AR', name: 'Argentinië' },
    { code: 'AM', name: 'Armenië' },
    { code: 'AW', name: 'Aruba' },
    { code: 'AU', name: 'Australië' },
    { code: 'AZ', name: 'Azerbeidzjan' },
    { code: 'BS', name: 'Bahama\'s' },
    { code: 'BH', name: 'Bahrein' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BE', name: 'België' },
    { code: 'BZ', name: 'Belize' },
    { code: 'BJ', name: 'Benin' },
    { code: 'BM', name: 'Bermuda' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'BO', name: 'Bolivia' },
    { code: 'BQ', name: 'Bonaire }, Sint Eustatius en Saba' },
    { code: 'BA', name: 'Bosnië en Herzegovina' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BV', name: 'Bouveteiland' },
    { code: 'BR', name: 'Brazilië' },
    { code: 'VG', name: 'Britse Maagdeneilanden' },
    { code: 'IO', name: 'Brits Indische Oceaanterritorium' },
    { code: 'BN', name: 'Brunei' },
    { code: 'BG', name: 'Bulgarije' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BI', name: 'Burundi' },
    { code: 'KH', name: 'Cambodja' },
    { code: 'CA', name: 'Canada' },
    { code: 'CF', name: 'Centraal-Afrikaanse Republiek' },
    { code: 'CL', name: 'Chili' },
    { code: 'CN', name: 'China' },
    { code: 'CX', name: 'Christmaseiland' },
    { code: 'CC', name: 'Cocoseilanden' },
    { code: 'CO', name: 'Colombia' },
    { code: 'KM', name: 'Comoren' },
    { code: 'CG', name: 'Congo-Brazzaville' },
    { code: 'CD', name: 'Congo-Kinshasa' },
    { code: 'CK', name: 'Cookeilanden' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'CU', name: 'Cuba' },
    { code: 'CW', name: 'Curaçao' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'DK', name: 'Denemarken' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'DM', name: 'Dominica' },
    { code: 'DO', name: 'Dominicaanse Republiek' },
    { code: 'DE', name: 'Duitsland' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EG', name: 'Egypte' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'GQ', name: 'Equatoriaal-Guinea' },
    { code: 'ER', name: 'Eritrea' },
    { code: 'EE', name: 'Estland' },
    { code: 'ET', name: 'Ethiopië' },
    { code: 'FO', name: 'Faeröer' },
    { code: 'FK', name: 'Falklandeilanden' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'PH', name: 'Filipijnen' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'Frankrijk' },
    { code: 'TF', name: 'Franse Zuidelijke en Antarctische Gebieden' },
    { code: 'GF', name: 'Frans-Guyana' },
    { code: 'PF', name: 'Frans-Polynesië' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GM', name: 'Gambia' },
    { code: 'GE', name: 'Georgië' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GI', name: 'Gibraltar' },
    { code: 'GD', name: 'Grenada' },
    { code: 'GR', name: 'Griekenland' },
    { code: 'GL', name: 'Groenland' },
    { code: 'GP', name: 'Guadeloupe' },
    { code: 'GU', name: 'Guam' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'GG', name: 'Guernsey' },
    { code: 'GN', name: 'Guinee' },
    { code: 'GW', name: 'Guinee-Bissau' },
    { code: 'GY', name: 'Guyana' },
    { code: 'HT', name: 'Haïti' },
    { code: 'HM', name: 'Heard en McDonaldeilanden' },
    { code: 'HN', name: 'Honduras' },
    { code: 'HU', name: 'Hongarije' },
    { code: 'HK', name: 'Hongkong' },
    { code: 'IE', name: 'Ierland' },
    { code: 'IS', name: 'IJsland' },
    { code: 'IN', name: 'India' },
    { code: 'ID', name: 'Indonesië' },
    { code: 'IQ', name: 'Irak' },
    { code: 'IR', name: 'Iran' },
    { code: 'IL', name: 'Israël' },
    { code: 'IT', name: 'Italië' },
    { code: 'CI', name: 'Ivoorkust' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JP', name: 'Japan' },
    { code: 'YE', name: 'Jemen' },
    { code: 'JE', name: 'Jersey' },
    { code: 'JO', name: 'Jordanië' },
    { code: 'KY', name: 'Kaaimaneilanden' },
    { code: 'CV', name: 'Kaapverdië' },
    { code: 'CM', name: 'Kameroen' },
    { code: 'KZ', name: 'Kazachstan' },
    { code: 'KE', name: 'Kenia' },
    { code: 'KG', name: 'Kirgizië' },
    { code: 'KI', name: 'Kiribati' },
    { code: 'UM', name: 'Kleine Pacifische eilanden van de V.S.' },
    { code: 'KW', name: 'Koeweit' },
    { code: 'HR', name: 'Kroatië' },
    { code: 'LA', name: 'Laos' },
    { code: 'LS', name: 'Lesotho' },
    { code: 'LV', name: 'Letland' },
    { code: 'LB', name: 'Libanon' },
    { code: 'LR', name: 'Liberia' },
    { code: 'LY', name: 'Libië' },
    { code: 'LI', name: 'Liechtenstein' },
    { code: 'LT', name: 'Litouwen' },
    { code: 'LU', name: 'Luxemburg' },
    { code: 'MO', name: 'Macau' },
    { code: 'MK', name: 'Macedonië' },
    { code: 'MG', name: 'Madagaskar' },
    { code: 'MW', name: 'Malawi' },
    { code: 'MV', name: 'Maldiven' },
    { code: 'MY', name: 'Maleisië' },
    { code: 'ML', name: 'Mali' },
    { code: 'MT', name: 'Malta' },
    { code: 'IM', name: 'Man' },
    { code: 'MA', name: 'Marokko' },
    { code: 'MH', name: 'Marshalleilanden' },
    { code: 'MQ', name: 'Martinique' },
    { code: 'MR', name: 'Mauritanië' },
    { code: 'MU', name: 'Mauritius' },
    { code: 'YT', name: 'Mayotte' },
    { code: 'MX', name: 'Mexico' },
    { code: 'FM', name: 'Micronesia' },
    { code: 'MD', name: 'Moldavië' },
    { code: 'MC', name: 'Monaco' },
    { code: 'MN', name: 'Mongolië' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'MS', name: 'Montserrat' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'NA', name: 'Namibië' },
    { code: 'NR', name: 'Nauru' },
    { code: 'NL', name: 'Nederland' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NI', name: 'Nicaragua' },
    { code: 'NC', name: 'Nieuw-Caledonië' },
    { code: 'NZ', name: 'Nieuw-Zeeland' },
    { code: 'NE', name: 'Niger' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'NU', name: 'Niue' },
    { code: 'MP', name: 'Noordelijke Marianen' },
    { code: 'KP', name: 'Noord-Korea' },
    { code: 'NO', name: 'Noorwegen' },
    { code: 'NF', name: 'Norfolk' },
    { code: 'UG', name: 'Oeganda' },
    { code: 'UA', name: 'Oekraïne' },
    { code: 'UZ', name: 'Oezbekistan' },
    { code: 'OM', name: 'Oman' },
    { code: 'AT', name: 'Oostenrijk' },
    { code: 'TL', name: 'Oost-Timor' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'PW', name: 'Palau' },
    { code: 'PS', name: 'Palestina' },
    { code: 'PA', name: 'Panama' },
    { code: 'PG', name: 'Papoea-Nieuw-Guinea' },
    { code: 'PY', name: 'Paraguay' },
    { code: 'PE', name: 'Peru' },
    { code: 'PN', name: 'Pitcairneilanden' },
    { code: 'PL', name: 'Polen' },
    { code: 'PT', name: 'Portugal' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'QA', name: 'Qatar' },
    { code: 'RE', name: 'Réunion' },
    { code: 'RO', name: 'Roemenië' },
    { code: 'RU', name: 'Rusland' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'BL', name: 'Saint-Barthélemy' },
    { code: 'KN', name: 'Saint Kitts en Nevis' },
    { code: 'LC', name: 'Saint Lucia' },
    { code: 'PM', name: 'Saint-Pierre en Miquelon' },
    { code: 'VC', name: 'Saint Vincent en de Grenadines' },
    { code: 'SB', name: 'Salomonseilanden' },
    { code: 'WS', name: 'Samoa' },
    { code: 'SM', name: 'San Marino' },
    { code: 'SA', name: 'Saoedi-Arabië' },
    { code: 'ST', name: 'Sao Tomé en Principe' },
    { code: 'SN', name: 'Senegal' },
    { code: 'RS', name: 'Servië' },
    { code: 'SC', name: 'Seychellen' },
    { code: 'SL', name: 'Sierra Leone' },
    { code: 'SG', name: 'Singapore' },
    { code: 'SH', name: 'Sint-Helena }, Ascension en Tristan da Cunha' },
    { code: 'MF', name: 'Sint-Maarten' },
    { code: 'SX', name: 'Sint Maarten' },
    { code: 'SI', name: 'Slovenië' },
    { code: 'SK', name: 'Slowakije' },
    { code: 'SD', name: 'Soedan' },
    { code: 'SO', name: 'Somalië' },
    { code: 'ES', name: 'Spanje' },
    { code: 'SJ', name: 'Spitsbergen en Jan Mayen' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'SR', name: 'Suriname' },
    { code: 'SZ', name: 'Swaziland' },
    { code: 'SY', name: 'Syrië' },
    { code: 'TJ', name: 'Tadzjikistan' },
    { code: 'TW', name: 'Taiwan' },
    { code: 'TZ', name: 'Tanzania' },
    { code: 'TH', name: 'Thailand' },
    { code: 'TG', name: 'Togo' },
    { code: 'TK', name: 'Tokelau' },
    { code: 'TO', name: 'Tonga' },
    { code: 'TT', name: 'Trinidad en Tobago' },
    { code: 'TD', name: 'Tsjaad' },
    { code: 'CZ', name: 'Tsjechië' },
    { code: 'TN', name: 'Tunesië' },
    { code: 'TR', name: 'Turkije' },
    { code: 'TM', name: 'Turkmenistan' },
    { code: 'TC', name: 'Turks- en Caicoseilanden' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'UY', name: 'Uruguay' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'VA', name: 'Vaticaanstad' },
    { code: 'VE', name: 'Venezuela' },
    { code: 'AE', name: 'Verenigde Arabische Emiraten' },
    { code: 'US', name: 'Verenigde Staten' },
    { code: 'GB', name: 'Verenigd Koninkrijk' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'WF', name: 'Wallis en Futuna' },
    { code: 'EH', name: 'Westelijke Sahara' },
    { code: 'BY', name: 'Wit-Rusland' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'ZW', name: 'Zimbabwe' },
    { code: 'ZA', name: 'Zuid-Afrika' },
    { code: 'GS', name: 'Zuid-Georgia en de Zuidelijke Sandwicheilanden' },
    { code: 'KR', name: 'Zuid-Korea' },
    { code: 'SS', name: 'Zuid-Soedan' },
    { code: 'SE', name: 'Zweden' },
    { code: 'CH', name: 'Zwitserland' }
  ]
}

export const enum ActionTypes {
  SET_LOADING = '@@ui/SET_LOADING',
  SET_NOTIFICATION = '@@ui/SET_NOTIFICATION',
  SET_ERROR = '@@ui/SET_ERROR',
  RESET = '@@app/RESET',
}

export const UIReducer: Reducer<IUIDuckState> = (state = initialState, action) => {
  const {
    type,
    payload
  } = action

  switch (type) {
    case ActionTypes.RESET:
      return {
        ...initialState
      }
      
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: payload
      }

    case ActionTypes.SET_NOTIFICATION:
      return {
        ...state,
        notification: payload
      }

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: payload
      }

    default:
      return {
        ...state
      }
  }
}

export const setLoadingAction: ActionCreator<Action> = () => {
  return {
    type: ActionTypes.SET_LOADING,
    payload: true
  }
}

export const clearLoadingAction: ActionCreator<Action> = () => {
  return {
    type: ActionTypes.SET_LOADING,
    payload: false
  }
}

export const setErrorAction: ActionCreator<Action> = (payload:string) => {
  return {
    type: ActionTypes.SET_ERROR,
    payload
  }
}

export const clearErrorAction: ActionCreator<Action> = () => {
  return {
    type: ActionTypes.SET_ERROR,
    payload: null
  }
}

export const setNotificationAction: ActionCreator<Action> = (payload:string) => {
  return {
    type: ActionTypes.SET_NOTIFICATION,
    payload
  }
}

export const clearNotificationAction: ActionCreator<Action> = () => {
  return {
    type: ActionTypes.SET_NOTIFICATION,
    payload: null
  }
}
