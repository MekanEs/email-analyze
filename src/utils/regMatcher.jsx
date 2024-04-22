import { useEffect, useState } from 'react';

const useRegMatcher = ({ regs, text = '' }) => {
  const [regMatches, setRegObjs] = useState({});
  useEffect(() => {
    setRegObjs({});
    const check = regs.reduce((acc, el) => {
      let cur = text.match(el);
      acc[el] = cur?.length || 0;
      return acc;
    }, {});
    setRegObjs(check);
  }, [text, regs]);

  return regMatches;
};
export default useRegMatcher;
