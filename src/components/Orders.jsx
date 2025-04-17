import React, { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import axios from "axios";
import { Button } from "@mui/material";
import useSWRMutation from "swr/mutation";

const fetchDetails = async (apiUrl) => {
  const response = await axios.get(apiUrl);
  console.log("Full Headers:", response.headers);  // Debugging
  const sessionId = response.headers["sessionid"] || response.headers["SessionId"] || response.headers["SESSIONID"];
  console.log("Extracted Session ID:", sessionId);
  return { data: response.data, sessionId };
};

const fetcher = (url, { arg }) => {
  console.log("Sending session ID:", arg.sessionId);
  
  return axios.post(url, arg.payload, {
    headers: {
      sessionid: arg.sessionId, // Match backend's expected key
    },
  }).then((res) => res.data);
};

const Orders = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:9100/eflyer-bookings/api/v1/viewAllPackageTarifs",
    fetchDetails,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
    }
  );

  const { trigger, data: mutationData, error: mutationError, isMutating } = useSWRMutation(
    "http://192.168.1.5:9100/eflyer-bookings/api/v1/packagePricing",
    fetcher
  );

  const [tariffIdList, setTariffIdList] = useState([]);
  const sessionIdRef = useRef(null);

  useEffect(() => {
    if (data?.sessionId && !sessionIdRef.current) {
      sessionIdRef.current = data.sessionId;  // Store session ID once
      setTariffIdList(data.data.map((tariff) => tariff.tarifId));
      console.log("Session ID stored in ref:", sessionIdRef.current);
    }
  }, [data]);

  const handleFetchTariffDetails = async () => {
    console.log("Session ID before POST:", sessionIdRef.current); // Debugging
  
    if (!sessionIdRef.current) {
      console.error("Session ID is missing! Retrying in 500ms...");
      setTimeout(handleFetchTariffDetails, 500); // Wait and retry
      return;
    }
  
    await trigger({
      payload: { tariff_idList: tariffIdList },
      sessionId: sessionIdRef.current,  // Use stored session ID
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  console.log(data.sessionId)
  console.log(mutationData)
  return (
    <div className="flex flex-col">
      <div className="flex">
        <h2 className="text-xl font-bold mb-4">Tariff IDs</h2>
        {tariffIdList.map((tariffId, id) => (
          <h1 key={id} className="text-lg font-semibold">{tariffId}</h1>
        ))}
      </div>
      <div className="flex flex-col">
        <Button variant="contained" onClick={handleFetchTariffDetails}>
          Fetch Tariff Details
        </Button>

       <div className="flex flex-col">
       {mutationData}
       <hr/>
       </div>
      </div>
    </div>
  );
};

export default Orders;
