import { useEffect, useState } from 'react';

export const useRegContent = ({ text = '' }) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const regex = /utm_content%3D([^%&]+)/g;
    const regex2 = /utm_content=([^?&]+)/g;

    let matches = text.match(regex) || [];
    let matches2 = text.match(regex2) || [];
    console.log(matches);
    // Extract the captured group (the utm_content value) from each match
    let utmContentValues = matches.map((match) => {
      let matchWithoutPrefix = match.replace('utm_content%3D', '');
      return decodeURIComponent(matchWithoutPrefix);
    });
    let utmContentValues2 = matches2.map((match) => {
      let matchWithoutPrefix = match.replace('utm_content=', '');
      return decodeURIComponent(matchWithoutPrefix);
    });
    setMatches([...new Set([...utmContentValues, ...utmContentValues2])]);
  }, [text]);

  return matches;
};
export const useRegCampaign = ({ text = '' }) => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    const regex = /utm_campaign%3D([^%&]+)/g;
    const regex2 = /utm_campaign=([^?&]+)/g;
    // Find matches
    let matches = text.match(regex) || [];
    let matches2 = text.match(regex2) || [];

    // Extract the captured group (the utm_content value) from each match
    let utmContentValues = matches.map((match) => {
      let matchWithoutPrefix = match.replace('utm_campaign%3D', '');
      return decodeURIComponent(matchWithoutPrefix);
    });
    let utmContentValues2 = matches2.map((match) => {
      let matchWithoutPrefix = match.replace('utm_campaign=', '');
      return decodeURIComponent(matchWithoutPrefix);
    });

    setMatches([...new Set([...utmContentValues, ...utmContentValues2])]);
  }, [text]);
  return matches;
};
export const useRegRedir = ({ text = '' }) => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    const regex = /redirect_url=(.*?)%3Futm/gm;
    // Find matches
    let matches = text.match(regex) || [];

    // Extract the captured group (the utm_content value) from each match
    let utmContentValues = matches.map((match) => {
      let matchWithoutPrefix2 = match.replace('%3Futm', '');

      return decodeURIComponent(matchWithoutPrefix2);
    });

    setMatches([...new Set(utmContentValues)]);
  }, [text]);
  return matches;
};
