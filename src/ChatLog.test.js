import React from 'react';
import ReactDOM from 'react-dom';
import ChatLog from './ChatLog';
import renderer from 'react-test-renderer';

describe('ChatLog Component tests', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
      ReactDOM.render(<ChatLog chatEvents={[{
        participantId: 3,
        type: 'message',
        message: 'Hello world',
        time: 1548852646559,
        timestamp: 1548852484247
      },
      {
        participantId: 2,
        type: 'thumbs-up',
        timestamp: 1548852484247
      },
      {
        participantId: 4,
        type: 'thumbs-down',
        timestamp: 1548852484247
      }]} />, div);
      ReactDOM.unmountComponentAtNode(div);
    
    
    });

    it('renders the expected events in log', () => {
      const tree = renderer
      .create(<ChatLog chatEvents={[{
        participantId: 3,
        type: 'message',
        message: 'Hello world',
        time: 1548852646559,
        timestamp: 1548852484247
      },
      {
        participantId: 2,
        type: 'thumbs-up',
        timestamp: 1548852484247
      },
      {
        participantId: 4,
        type: 'thumbs-down',
        timestamp: 1548852484247
      }]} />)
      .toJSON();
      expect(tree).toMatchSnapshot();
    });

});

