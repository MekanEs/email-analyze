export const RegErrors = [
  /"\s*\}\}\s+[A-Za-z0-9А-Яа-я]/gm,
  /target="blank"/gm,
  /<\w[^>]*>\s+\n*[A-Za-z0-9А-Яа-я]/gm,
  /\s+<\/\w[^>]*>[A-Za-z0-9А-Яа-я]/gm,
  /^\s*$/gm,
  /[A-Za-z0-9А-Яа-я]\s+\s+\s*[A-Za-z0-9А-Яа-я]/gm,
  /(\s+&nbsp;)|&nbsp;\s+/gm,
  /alt=""|alt=''/gm,
  /style='/gm,
];
export const RegErrorDesc = [
  'пробел\\перенос после знака }',
  'неправильная ссылка',
  'перенос после тэга',
  'перенос/пробел перед закр тэгом',
  'лишний перенос',
  'больше 1 пробела',
  'пробел рядом с неразрывным',
  'пустой alt',
  'кавычки тэга style',
];
export const RegLangs = [
  /lang%3Dru|lang=ru/gm,
  /lang%3Den|lang=en/gm,
  /lang%3Des|lang=es/gm,
  /lang%3Dpt|lang=pt/gm,
  /lang%3Dde|lang=de/gm,
  /lang%3Dua|lang=ua/gm,
  /lang%3Dfi|lang=fi/gm,
  /lang%3Dtr|lang=tr/gm,
  /lang%3Dfr|lang=fr/gm,
  /lang%3Dpl|lang=pl/gm,
  /lang%3Dkz|lang=kz/gm,
];

export const RegRedirect = [/redirect_url=\/([^%3Futm]+)/gm];

export const RegQueries = [/utm_campaign%3D([^%]+)/gm, /utm_ontent%3D([^%]+)/gm];
