import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant';


describe('Participant Component Tests', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant name="Koren Templeton" avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'} inSession={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the Participant with correct info', () => {
    const tree = renderer
    .create(<Participant name="Koren Templeton" avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'} inSession={true} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
