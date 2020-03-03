import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantList from './ParticipantList';
import renderer from 'react-test-renderer';

describe('ParticipantList Component Tests', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantList participants={[
      {
          id: 1,
          name: 'Koren Templeton',
          avatar:
              'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
          inSession: true,
          onStage: true
      },
      {
          id: 2,
          name: 'Caty Flucker',
          avatar:
              'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
          inSession: true,
          onStage: false
      }]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the list with info', () => {
    const tree = renderer
    .create(<ParticipantList participants={[
      {
          id: 1,
          name: 'Koren Templeton',
          avatar:
              'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
          inSession: true,
          onStage: true
      },
      {
          id: 2,
          name: 'Caty Flucker',
          avatar:
              'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
          inSession: true,
          onStage: false
      }]} />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  })

});
