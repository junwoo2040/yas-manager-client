import { useGetAllEventsQuery } from "@src/graphql/generated";
import graphQLRequestClient from "@utils/clients/graphQLRequestClient";

export default () => {
  const { status, data, error, isFetching } = useGetAllEventsQuery(
    graphQLRequestClient,
    {},
  );

  return data;
};
