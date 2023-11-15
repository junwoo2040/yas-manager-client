import { FC } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useGetEventByPathQuery } from "@src/graphql/generated";
import graphQLRequestClient from "@utils/clients/graphQLRequestClient";

const EventInfo: FC = () => {
  const navigate = useNavigate();
  const { eventPath } = useParams();

  if (!eventPath) {
    navigate("/404");
    return <></>;
  }

  const { status, data, error, isError, isFetching } = useGetEventByPathQuery(
    graphQLRequestClient,
    {
      path: eventPath,
    },
    {
      retry: 1,
    },
  );

  if (isError) {
    navigate("/404");
    return <></>;
  }

  return (
    <>
      {isFetching ? (
        <p>Loading</p>
      ) : (
        <div>
          <h1>{data?.event?.name}</h1>
          <p>
            <b>Date:</b> {new Date(data?.event?.start).toDateString()}
          </p>
          <p>
            <b>Start:</b> {new Date(data?.event?.start).toTimeString()}
          </p>
          <p>
            <b>End:</b> {new Date(data?.event?.end).toTimeString()}
          </p>
        </div>
      )}
    </>
  );
};

export default EventInfo;
