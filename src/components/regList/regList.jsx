import { useEffect, useState } from 'react';
import CopyIcon from '../../assets/copy-icon.svg?react';

const RegList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { regMatches = {}, descriptions, name } = props;
  const [hasErr, setHasErr] = useState(false);
  const [opened, setOpened] = useState(true);
  useEffect(() => {
    const errors = Object.keys(regMatches).some((el) => regMatches[el] > 0);
    if (errors) {
      setHasErr(true);
    } else {
      setHasErr(false);
    }
  }, [regMatches]);
  return (
    <ul
      style={{
        margin: '10px',
        border: 'solid 1px',
        borderColor: hasErr ? '#fc8989bf' : '#89fc8dbf',
        borderRadius: '10px',
        padding: '10px',
        height:  'fit-content',
        minWidth: '100%',
        transition: 'height 0.3s ease',
      }}
    >
      <h4
        onClick={() => {
          setOpened((prev) => !prev);
        }}
        style={{ cursor: 'pointer' }}
      >
        {name} <span style={{ color: opened ? 'red' : 'blue' }}>{opened ? 'close' : 'open'}</span>
      </h4>
      {Object.keys(regMatches).map((el, i) => (
        <li
          style={{
            cursor: 'pointer',
            padding: '10px',
            border: '1px solid',
            background: regMatches[el] > 0 ? '#fc8989bf' : '#89fc8dbf',
            gap: '20px',
            justifyContent: 'center',
            display: opened? 'flex':'none',
            
            
            height: '25px'
          }}
          onClick={() => {
            navigator.clipboard.writeText(el.split('/')[1]);
          }}
          key={el}
        >
          {el.split('/')[1] + ':' + regMatches[el]}
          <CopyIcon width='20px' />
          
            <div className='quest' title={descriptions[i]}>
              ?
            </div>
         
        </li>
      ))}
    </ul>
  );
};
export default RegList;
