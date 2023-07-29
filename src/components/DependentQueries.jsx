import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchbyEmail = (email) =>
  axios.get(`http://localhost:4000/users/${email}`);

const fetchbyChannelId = (channelId) =>
  axios.get(`http://localhost:4000/channels/${channelId}`);

const DependentQueries = ({ email }) => {
  const { data: users } = useQuery(["users", email], () => fetchbyEmail(email));

  const channelId = users?.data.channelId;

  console.log({ channelId });

  useQuery(["channels", channelId], () => fetchbyChannelId(channelId), {
    enabled: !!channelId,
  });

  return <div>DependentQueries</div>;
};

export default DependentQueries;
