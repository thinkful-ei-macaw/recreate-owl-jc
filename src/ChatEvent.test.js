import React from 'react';
import ReactDOM from 'react-dom';
import ChatEvent from './ChatEvent';
import renderer from 'react-test-renderer';

describe('Chat event Component tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatEvent />, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders message chats appropriately', () => {
      const tree = renderer
      .create(<ChatEvent 
        key={3}
        name='Bob'
        type='message'
        message='Hello world'
        time={1548852646559}
        timestamp={1548852484247}
        />)
      .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders event messages appropriately', () => {
      const tree = renderer
      .create(<ChatEvent 
        key={5}
        name='Cindy'
        type='raise-hand'
        timestamp={1548852544247}
        />)
      .toJSON();
      expect(tree).toMatchSnapshot();
    });

})
