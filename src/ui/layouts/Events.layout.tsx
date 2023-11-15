import { useState } from "react";

import EventsTable from "@organisms/EventsTable";
import FormInput from "@atoms/FormInput";

import graphQLRequestClient from "@utils/clients/graphQLRequestClient";
import {
  useCreateEventMutation,
  useGetAllEventDetailsQuery,
} from "@src/graphql/generated";
import { useQueryClient } from "@tanstack/react-query";

interface FormValue {
  name: string;
  start: string;
  end: string;
}

const EventsLayout = () => {
  const [value, setValue] = useState<FormValue>({
    name: "",
    start: "",
    end: "",
  });

  const queryClient = useQueryClient();

  const { isLoading, mutate, data } = useCreateEventMutation(
    graphQLRequestClient,
    {
      onSuccess: () => {
        setValue({ name: "", start: "", end: "" });

        queryClient.invalidateQueries({
          queryKey: useGetAllEventDetailsQuery.getKey(),
        });
      },
    },
  );

  return (
    <>
      <h1>Events</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          mutate(value);

          console.log(useGetAllEventDetailsQuery.getKey());
        }}
      >
        <FormInput
          label="Name"
          type="text"
          value={value.name}
          handleChange={(event) => {
            setValue({ ...value, name: event.target.value });
          }}
        />
        <FormInput
          label="Start"
          type="date"
          value={value.start}
          handleChange={(event) => {
            setValue({ ...value, start: event.target.value });
          }}
        />
        <FormInput
          label="End"
          type="date"
          value={value.end}
          handleChange={(event) => {
            setValue({ ...value, end: event.target.value });
          }}
        />
        <button type="submit" disabled={isLoading}>
          Create
        </button>
      </form>
      <EventsTable />
    </>
  );
};

export default EventsLayout;
