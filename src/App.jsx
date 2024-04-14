/* eslint-disable no-useless-escape */
import { useEffect, useState } from 'react';
import CopyIcon from './assets/copy-icon.svg?react';
import './App.css';
const regConst = [
  /}\s+[A-Za-z0-9А-Яа-я]/,
  /target="blank"/,
  />\s*\n\s*[A-Za-z0-9А-Яа-я]/,
  /^\s*$/gm,
  /[A-Za-z0-9А-Яа-я]\s+\s+\s*[A-Za-z0-9А-Яа-я]/,
  /(\s+&nbsp;)|&nbsp;\s+/,
  /alt=""|alt=''/,
  /style='/,
];
const description = [
  'пробел\\перенос после знака }',
  'неправильная ссылка',
  'перенос после тэга(не факт что открывающего)',
  'лишний перенос',
  'больше 1 пробела',
  'пробел рядом с неразрывным',
  'пустой alt',
  'кавычки тэга style',
];

function App() {
  const [text, setText] = useState('');

  const [reg] = useState(regConst);

  const [regObjs, setRegObjs] = useState({});

  useEffect(() => {
    setRegObjs({});
    const emty = '';
    const check = reg.reduce((acc, el) => {
      let cur = emty.match(el);

      acc[el] = cur?.length || 0;
      return acc;
    }, {});
    setRegObjs(check);
  }, [reg]);
  const handleClick = () => {
    setRegObjs({});
    const check = reg.reduce((acc, el) => {
      let cur = text.match(el);
      acc[el] = cur?.length || 0;
      return acc;
    }, {});
    setRegObjs(check);
  };
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <textarea
          style={{ width: '600px', height: '800px', display: 'block' }}
          onChange={(e) => setText(e.target.value)}
          type='text'
        />
        <button style={{ width: '100%' }} onClick={handleClick}>
          Анализ
        </button>
      </div>

      <div>
        {Object.keys(regObjs).map((el, i) => (
          <div
            style={{
              cursor: 'pointer',
              padding: '10px',
              border: '1px solid',
              background: regObjs[el] > 0 ? '#fc8989bf' : '#89fc8dbf',
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
            }}
            onClick={() => {
              navigator.clipboard.writeText(el.slice(1, -1));
            }}
            key={el}
          >
            {el.split('/')[1] + ':' + regObjs[el]}
            <CopyIcon width='20px' />
            <div className='quest' title={description[i]}>
              ?
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
