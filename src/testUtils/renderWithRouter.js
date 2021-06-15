import { MemoryRouter as Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import { SWRConfig } from 'swr';

export const renderWithRouter = (ui, { route = '/' } = {}) => {
    // window.history.pushState({}, 'Test page', route)
//   console.log(`<SWRConfig value={{dedupingInterval:0}}><Router  initialEntries={[${route}]}>${ui}</Router></SWRConfig>`)
// return render(ui, { wrapper: Router })

return render (<SWRConfig value={{dedupingInterval:0}}><Router  initialEntries={['/1']}>{ui}</Router></SWRConfig>)
  }