import './App.css';
import Analyze from './pages/analyze/Analyze';
// const regConst = [
//   /}\s+[A-Za-z0-9А-Яа-я]/,
//   /target="blank"/,
//   />\s*\n\s*[A-Za-z0-9А-Яа-я]/,
//   /^\s*$/gm,
//   /[A-Za-z0-9А-Яа-я]\s+\s+\s*[A-Za-z0-9А-Яа-я]/,
//   /(\s+&nbsp;)|&nbsp;\s+/,
//   /alt=""|alt=''/,
//   /style='/,
// ];
// const description = [
//   'пробел\\перенос после знака }',
//   'неправильная ссылка',
//   'перенос после тэга(не факт что открывающего)',
//   'лишний перенос',
//   'больше 1 пробела',
//   'пробел рядом с неразрывным',
//   'пустой alt',
//   'кавычки тэга style',
// ];

function App() {
  return <Analyze />;
}

export default App;
