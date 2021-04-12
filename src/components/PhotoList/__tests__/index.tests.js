import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

const photo = { name: 'Grocery aisle', category: 'commercial', description: 'buildings, products, etc'}

afterEach(cleanup)

describe('Photo is rendering', () => {
  it('renders', () => {
    render(<PhotoList currentPhotos={photo} />)
  })
  it('matches snapshot', () => {
    const { asFragment } = render(<PhotoList currentPhotos={photo} />);
    expect(asFragment()).toMatchSnapshot()
  })
  // it('renders', () => {
  //   const { getByTestId } = render(<PhotoList currentPhotos={photo} />);
  //   expect(getByTestId('imgid')).getAttribute('alt').toEqual('true')
  // })
})