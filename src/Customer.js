import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { GlobalContext } from "./context/GlobalState";
import { user } from "./utils/user";

const Customer = () => {
  const { id } = useParams();
  const { data, error } = useSWR(id, user);
  const { customer, fetchCustomer } = useContext(GlobalContext);
  
  useEffect(() => {
    if (data) {
      fetchCustomer(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div>
      {error && <span>Error!{error.message}</span>}
      {!error && !data && <span>Loading!</span>}
      {data && (
        <span>
          Hello {data.name}
          {customer.name}
        </span>
      )}
    </div>
  );
};
export default Customer;
