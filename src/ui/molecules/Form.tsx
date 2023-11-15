import {
  UseQueryOptions,
  UseQueryResult,
  useQueryClient,
} from "@tanstack/react-query";
import graphQLRequestClient from "@utils/clients/graphQLRequestClient";
import { GraphQLClient } from "graphql-request";
import { FC, useState } from "react";

interface Props {
  mutationFunction: (client: GraphQLClient) => any;
  queryFunction: <TData = unknown, TError = unknown>(
    client: GraphQLClient,
    variables?: any,
    options?: UseQueryOptions<any, TError, any>,
    headers?: RequestInit["headers"],
  ) => UseQueryResult<TData, TError>;
}

const Form: FC<Props> = ({ mutationFunction, queryFunction }) => {
  const [value, setValue] = useState<FormValue>({
    name: "",
    start: "",
    end: "",
  });

  const queryClient = useQueryClient();

  const { isLoading, mutate, data } = mutationFunction(graphQLRequestClient, {
    onSuccess: () => {
      setValue({ name: "", start: "", end: "" });

      queryClient.invalidateQueries({
        queryKey: queryFunction.getKey(),
      });
    },
  });

  return <></>;
};

export default Form;
