import { graphql } from "@src/gql/gql";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { FC } from "react";
import { Link, useParams } from "react-router-dom";

const Event: FC = () => {
    const { eventId } = useParams();

    const getEventDocument = graphql(`
        query getEvent($id: ID!) {
            event(id: $id) {
                name
                start
                end
                location
                description
            }
        }
    `);

    const { data } = useQuery({
        queryKey: ["event", "detail", eventId],
        queryFn: async () =>
            request("http://localhost:8000/graphql", getEventDocument, {
                id: eventId ? eventId : "",
            }),
    });

    return (
        <>
            {data?.event && (
                <>
                    <h1>{data?.event.name}</h1>
                    <p>
                        {new Date(data?.event.start).toDateString()}~
                        {new Date(data?.event.end).toDateString()}
                    </p>
                    <p>{data?.event.location}</p>
                    <p>{data?.event.description}</p>
                </>
            )}

            <ul>
                <li>
                    <Link to={"./tasks"}>Tasks</Link>
                </li>
                <li>
                    <Link to={"./shifts"}>Shifts</Link>
                </li>
                <li>
                    <Link to={"./finance"}>Finance</Link>
                </li>
                <li>
                    <Link to={"./statistics"}>Statistics</Link>
                </li>
            </ul>
        </>
    );
};

export default Event;
