import { graphql } from "@gql/gql";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";

export const eventKeys = {
  all: ["events"] as const,
  lists: () => [...eventKeys.all, "list"] as const,
  list: (filters: string) => [...eventKeys.lists(), { filters }] as const,
  details: () => [...eventKeys.all, "details"] as const,
  detail: (id: string) => [...eventKeys.details(), id] as const,
};

export default (getAllEventDetailsDocument: graphql) => {
  const { data } = useQuery({
    queryKey: eventKeys.details(),
    queryFn: async () =>
      request("http://localhost:8000/graphql", getAllEventDetailsDocument),
  });

  const [tableData, setTableData] = useState<Event[]>([]);

  useEffect(() => {
    const procData: Event[] = data?.events
      ? data?.events?.map((data) => {
          if (!data)
            return {
              id: "",
              name: "",
              start: new Date().toDateString(),
              end: new Date().toDateString(),
              location: "",
              description: "",
            };

          return {
            id: data.id,
            name: data.name,
            start: new Date(data.start).toDateString(),
            end: new Date(data.end).toDateString(),
            location: data.location,
            description: data.description,
          };
        })
      : [];

    setTableData(procData);
  }, [data]);

  return { tableData };
};
