import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

const contact = {
  name: 'Bob',
  email: 'email@email.com',
  message: 'this is a message from Bob'
}

afterEach(cleanup)

describe('Contact form is rendering', () => {
  it('renders', () => {
    render(<ContactForm />)
  })
})

it('matches snapshot DOM node structure', () => {
  const { asFragment } = render(<ContactForm/>);
  expect(asFragment()).toMatchSnapshot()
})

describe('button is visible', () => {
  it('inserts text into the button', () => {
    const { getByTestId } = render(<ContactForm/>);
    expect(getByTestId('submit')).toHaveTextContent('Submit')
  })
})

describe('H1 is visible', () => {
  it('inserts text into H1', () => {
    const { getByTestId } = render(<ContactForm/>);
    expect(getByTestId('contact-me')).toHaveTextContent('Contact Me')
  })
})