import React    from 'react';
import ReactDOM from 'react-dom';
import Block    from './components/block/Block';
import data     from './data';

import 'normalize.css';
import './styles/basis.scss';

class App extends React.Component {
  render() {
    return (
      <div className="blocks">
        {data.map(data => (
          <Block
            {...data}
          />
        ))}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);