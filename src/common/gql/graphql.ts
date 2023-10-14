/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type BaseRecord = {
  __typename?: 'BaseRecord';
  author: User;
  check: Scalars['Float']['output'];
  date: Scalars['Date']['output'];
  event?: Maybe<Event>;
  id: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type DonationRecord = {
  __typename?: 'DonationRecord';
  base: BaseRecord;
  donor?: Maybe<Scalars['String']['output']>;
};

export type Event = {
  __typename?: 'Event';
  description?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  members?: Maybe<Array<Maybe<User>>>;
  name: Scalars['String']['output'];
  records?: Maybe<Array<Maybe<Record>>>;
  shifts?: Maybe<Array<Maybe<Shift>>>;
  start?: Maybe<Scalars['Date']['output']>;
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addDonationRecord?: Maybe<DonationRecord>;
  addEvent?: Maybe<Event>;
  addPaymentRecord?: Maybe<PaymentRecord>;
  addProduct?: Maybe<Product>;
  addSaleRecord?: Maybe<SaleRecord>;
  addShift?: Maybe<Shift>;
  addTask?: Maybe<Task>;
  addUser?: Maybe<User>;
};


export type MutationAddDonationRecordArgs = {
  authorId: Scalars['ID']['input'];
  check: Scalars['Float']['input'];
  date: Scalars['Date']['input'];
  donor: Scalars['String']['input'];
  eventId?: InputMaybe<Scalars['ID']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


export type MutationAddEventArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  end: Scalars['Date']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  start: Scalars['Date']['input'];
};


export type MutationAddPaymentRecordArgs = {
  authorId: Scalars['ID']['input'];
  check: Scalars['Float']['input'];
  date: Scalars['Date']['input'];
  description: Scalars['String']['input'];
  eventId?: InputMaybe<Scalars['ID']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


export type MutationAddProductArgs = {
  currency: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  stock: Scalars['Int']['input'];
};


export type MutationAddSaleRecordArgs = {
  authorId: Scalars['ID']['input'];
  buyer: Scalars['String']['input'];
  check: Scalars['Float']['input'];
  date: Scalars['Date']['input'];
  eventId?: InputMaybe<Scalars['ID']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  type: Scalars['String']['input'];
};


export type MutationAddShiftArgs = {
  end: Scalars['Date']['input'];
  parentEvent: Scalars['ID']['input'];
  start: Scalars['Date']['input'];
};


export type MutationAddTaskArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


export type MutationAddUserArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type PaymentRecord = {
  __typename?: 'PaymentRecord';
  base: BaseRecord;
  description: Scalars['String']['output'];
};

export type Product = {
  __typename?: 'Product';
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  stock: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  event?: Maybe<Event>;
  events?: Maybe<Array<Maybe<Event>>>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  record?: Maybe<Record>;
  records?: Maybe<Array<Maybe<Record>>>;
  shift?: Maybe<Shift>;
  shifts?: Maybe<Array<Maybe<Shift>>>;
  task?: Maybe<Task>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryEventArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRecordArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShiftArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type Record = DonationRecord | PaymentRecord | SaleRecord;

export type SaleRecord = {
  __typename?: 'SaleRecord';
  base: BaseRecord;
  buyer?: Maybe<Scalars['String']['output']>;
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type Shift = {
  __typename?: 'Shift';
  end: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  parentEvent: Event;
  start: Scalars['Date']['output'];
};

export type Task = {
  __typename?: 'Task';
  description?: Maybe<Scalars['String']['output']>;
  eventId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  role: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type GetAllEventDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEventDetailsQuery = { __typename?: 'Query', events?: Array<{ __typename?: 'Event', id: string, name: string, start?: any | null, end?: any | null, location?: string | null, description?: string | null } | null> | null };

export type GetAllEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEventsQuery = { __typename?: 'Query', events?: Array<{ __typename?: 'Event', id: string, name: string } | null> | null };

export type GetEventQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetEventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', name: string, start?: any | null, end?: any | null, location?: string | null, description?: string | null } | null };


export const GetAllEventDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllEventDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetAllEventDetailsQuery, GetAllEventDetailsQueryVariables>;
export const GetAllEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllEventsQuery, GetAllEventsQueryVariables>;
export const GetEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetEventQuery, GetEventQueryVariables>;