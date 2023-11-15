import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type CreateEventInput = {
  end: Scalars['String']['input'];
  name: Scalars['String']['input'];
  start: Scalars['String']['input'];
};

export type Event = {
  __typename?: 'Event';
  end?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  shifts?: Maybe<Array<Shift>>;
  start?: Maybe<Scalars['Date']['output']>;
  users?: Maybe<Array<User>>;
};

export type EventSearchInput = {
  path: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEvent?: Maybe<Event>;
  createRecord?: Maybe<Record>;
  createShift?: Maybe<Shift>;
  createUser?: Maybe<User>;
  deleteEvent?: Maybe<Event>;
  deleteRecord?: Maybe<Record>;
  deleteShift?: Maybe<Shift>;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
};


export type MutationCreateEventArgs = {
  input: CreateEventInput;
};


export type MutationCreateRecordArgs = {
  amount: Scalars['Float']['input'];
  authorId: Scalars['String']['input'];
};


export type MutationCreateShiftArgs = {
  eventId: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationDeleteEventArgs = {
  eventId: Scalars['String']['input'];
};


export type MutationDeleteRecordArgs = {
  recordId: Scalars['String']['input'];
};


export type MutationDeleteShiftArgs = {
  shiftId: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  input: UserMutationInput;
};

export type Query = {
  __typename?: 'Query';
  event?: Maybe<Event>;
  events?: Maybe<Array<Event>>;
  record?: Maybe<Record>;
  records?: Maybe<Array<Record>>;
  shift?: Maybe<Shift>;
  shifts?: Maybe<Array<Shift>>;
  task?: Maybe<Task>;
  tasks?: Maybe<Array<Task>>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryEventArgs = {
  input: EventSearchInput;
};


export type QueryRecordArgs = {
  userId: Scalars['String']['input'];
};


export type QueryShiftArgs = {
  userId: Scalars['String']['input'];
};


export type QueryTaskArgs = {
  taskId: Scalars['String']['input'];
};


export type QueryUserArgs = {
  userId: Scalars['String']['input'];
};

export type Record = {
  __typename?: 'Record';
  amount?: Maybe<Scalars['Float']['output']>;
  author?: Maybe<User>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type Shift = {
  __typename?: 'Shift';
  end?: Maybe<Scalars['Date']['output']>;
  event?: Maybe<Event>;
  id?: Maybe<Scalars['ID']['output']>;
  start?: Maybe<Scalars['Date']['output']>;
  volunteers?: Maybe<Array<User>>;
};

export type Task = {
  __typename?: 'Task';
  assignees?: Maybe<Array<User>>;
  childTasks?: Maybe<Array<Task>>;
  description?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  parentTask?: Maybe<Task>;
  start?: Maybe<Scalars['Date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Event>>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  records?: Maybe<Array<Record>>;
  shifts?: Maybe<Array<Shift>>;
  tasks?: Maybe<Array<Task>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserMutationInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateEventMutationVariables = Exact<{
  name: Scalars['String']['input'];
  start: Scalars['String']['input'];
  end: Scalars['String']['input'];
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent?: { __typename?: 'Event', id?: string | null, name?: string | null, path?: string | null, start?: any | null, end?: any | null } | null };

export type GetAllEventHeadersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEventHeadersQuery = { __typename?: 'Query', events?: Array<{ __typename?: 'Event', id?: string | null, name?: string | null, path?: string | null }> | null };

export type GetAllEventDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEventDetailsQuery = { __typename?: 'Query', events?: Array<{ __typename?: 'Event', id?: string | null, name?: string | null, path?: string | null, start?: any | null, end?: any | null }> | null };

export type GetEventByPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type GetEventByPathQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id?: string | null, name?: string | null, start?: any | null, end?: any | null } | null };



export const CreateEventDocument = `
    mutation createEvent($name: String!, $start: String!, $end: String!) {
  createEvent(input: {name: $name, start: $start, end: $end}) {
    id
    name
    path
    start
    end
  }
}
    `;

export const useCreateEventMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateEventMutation, TError, CreateEventMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<CreateEventMutation, TError, CreateEventMutationVariables, TContext>(
      ['createEvent'],
      (variables?: CreateEventMutationVariables) => fetcher<CreateEventMutation, CreateEventMutationVariables>(client, CreateEventDocument, variables, headers)(),
      options
    )};

export const GetAllEventHeadersDocument = `
    query getAllEventHeaders {
  events {
    id
    name
    path
  }
}
    `;

export const useGetAllEventHeadersQuery = <
      TData = GetAllEventHeadersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllEventHeadersQueryVariables,
      options?: UseQueryOptions<GetAllEventHeadersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetAllEventHeadersQuery, TError, TData>(
      variables === undefined ? ['getAllEventHeaders'] : ['getAllEventHeaders', variables],
      fetcher<GetAllEventHeadersQuery, GetAllEventHeadersQueryVariables>(client, GetAllEventHeadersDocument, variables, headers),
      options
    )};

useGetAllEventHeadersQuery.getKey = (variables?: GetAllEventHeadersQueryVariables) => variables === undefined ? ['getAllEventHeaders'] : ['getAllEventHeaders', variables];

export const GetAllEventDetailsDocument = `
    query getAllEventDetails {
  events {
    id
    name
    path
    start
    end
  }
}
    `;

export const useGetAllEventDetailsQuery = <
      TData = GetAllEventDetailsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllEventDetailsQueryVariables,
      options?: UseQueryOptions<GetAllEventDetailsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetAllEventDetailsQuery, TError, TData>(
      variables === undefined ? ['getAllEventDetails'] : ['getAllEventDetails', variables],
      fetcher<GetAllEventDetailsQuery, GetAllEventDetailsQueryVariables>(client, GetAllEventDetailsDocument, variables, headers),
      options
    )};

useGetAllEventDetailsQuery.getKey = (variables?: GetAllEventDetailsQueryVariables) => variables === undefined ? ['getAllEventDetails'] : ['getAllEventDetails', variables];

export const GetEventByPathDocument = `
    query getEventByPath($path: String!) {
  event(input: {path: $path}) {
    id
    name
    start
    end
  }
}
    `;

export const useGetEventByPathQuery = <
      TData = GetEventByPathQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetEventByPathQueryVariables,
      options?: UseQueryOptions<GetEventByPathQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetEventByPathQuery, TError, TData>(
      ['getEventByPath', variables],
      fetcher<GetEventByPathQuery, GetEventByPathQueryVariables>(client, GetEventByPathDocument, variables, headers),
      options
    )};

useGetEventByPathQuery.getKey = (variables: GetEventByPathQueryVariables) => ['getEventByPath', variables];
