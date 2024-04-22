/* eslint-disable react/prop-types */
/* eslint-disable no-useless-escape */
import { useState } from 'react';
import RegList from '../../components/regList/regList';
import useRegMatcher from '../../utils/regMatcher';
import { RegErrorDesc, RegErrors, RegLangs } from '../../constants/regexps';
import { useRegCampaign, useRegContent, useRegRedir } from '../../utils/regCounter';
import UtmList from '../../components/utmList/utmList';

const Analyze = () => {
  let [text, setText] = useState('');
  const regMatches = useRegMatcher({ text, regs: RegErrors });
  const regMatchesLang = useRegMatcher({ text, regs: RegLangs });
  const regMatchesredir = useRegRedir({ text });
  const content = useRegContent({ text });
  const campaign = useRegCampaign({ text });
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ width: '600px' }}>
        <textarea
          style={{ width: '600px', height: '800px', display: 'block' }}
          onChange={(e) => setText(e.target.value)}
          type='text'
        />
      </div>
      <div style={{ minWidth: '500px' }}>
        <RegList
          name={'Errors'}
          regs={RegErrors}
          regMatches={regMatches}
          descriptions={RegErrorDesc}
        />
        <RegList name={'Languages'} regs={RegLangs} regMatches={regMatchesLang} descriptions={[]} />

        <UtmList list={regMatchesredir} name={'redirect'} />

        <UtmList list={campaign} name={'utm_campaign'} />
        <UtmList list={content} name={'utm_content'} />
      </div>
    </div>
  );
};

export default Analyze;
