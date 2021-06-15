import {GlobalProvider} from './context/GlobalState';
import Customer from './Customer'

const Home = () => {
  return <GlobalProvider><Customer/></GlobalProvider>
};
export default Home;