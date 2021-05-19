import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';


// Creates a fake API that you send a request to and you create your own JSON data to send back
const server = setupServer(
  rest.get('http://fake.com', (req, res, ctx) => {
    // Return fake results that are similar to your API results.
    // This output should match exactly how youre APP function handles data
    let data = {
      headers: 'This is a test Header',
      data: {
        results: 'This is a test Results',
      }
    }
    return res(ctx.json( data ))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders title of the page', () => {
  render(<App />);
  const title = screen.getByText('RESTy');
  expect(title).toBeInTheDocument();
});

test('renders footer component', () => {
  render(<App />);
  screen.getByTestId('footerTest')
});

test('able to fetch data', async () => {
  render(<App />);
  // Find the form
  const form = screen.getByTestId('formTest')
  // Find the field
  const urlField = screen.getByTestId('urlTest')
  // Find the  radio button
  const radio = screen.getByTestId('radioTest')

  // Fire fake events
  // Changes 'urlField'
  fireEvent.change(urlField, { target: { name: 'urlInput', value: 'http://fake.com'} })
  // Changes on 'radio'
  fireEvent.click(radio, { target: { name: 'method', value: 'get' } })
  // Submit 'form'
  fireEvent.submit(form)

  // This example works for the code demo because <li> tags are utilized to display pokemon names within the demo.
  // In my app, this does not work because <li> tags are not being utilized and instead, JSON objects are being returned as a whole which are being passed through a different component to be styled.

  await waitFor(() => {
    //   // After submission above, it creates <li> for each object per our code
    //   // Similar to select query all where selects all the items on the dom and puts them into an array 
    //   const items = screen.getAllByRole('listItem');
    //   expect(items.length.toBe(2))
    // })
    const headings = screen.getAllByLabelText('testHeader');
    console.log('THIS IS HEADINGS', headings)
    expect(headings.length).toBe(2)
  })
})