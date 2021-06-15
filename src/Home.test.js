import React from 'react'

import {  cache } from 'swr';
import { server, rest } from './testServer';

import { renderWithRouter } from './testUtils/renderWithRouter';
import Home from './Home';

afterEach(()=> cache.clear());

it('renders Home', async ()=>{
    // const {findByText} = render (<SWRConfig value={{dedupingInterval:0}}><Router  initialEntries={["/1"]}><App/></Router></SWRConfig>);
    const {findByText} = await renderWithRouter(<Home/>, '/1');
    const element = await findByText(/John Doe/i);
    expect(element).toBeInTheDocument();
});
it('handles Home errors', async ()=>{
    server.use(rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(ctx.status(404));
  }));
 

    // const {findByText} = render (<SWRConfig value={{dedupingInterval:0}}><Router  initialEntries={["/1"]}><App/></Router></SWRConfig>);
    const {findByText} = await renderWithRouter(<Home/>, '/1');
    const element = await findByText(/Error/i);
    expect(element).toBeInTheDocument();
})