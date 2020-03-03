import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Tile from './Tile';

describe('Tile component tests', () => {
  // smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tile name="Koren Templeton" avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"/>, div)
    ReactDOM.unmountComponentAtNode(div);
  })
  // snapshot test
  it('renders Tile with correct data', () => {
    const tree = renderer
    .create(<Tile name="Koren Templeton" avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
})