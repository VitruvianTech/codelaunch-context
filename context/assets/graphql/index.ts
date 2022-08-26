import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver, StorageAdapter as GraphCacheStorageAdapter } from '@urql/exchange-graphcache';
import { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
import { gql } from '@urql/vue';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']>>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Character = {
  __typename?: 'Character';
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>;
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

/** All input for the create `Task` mutation. */
export type CreateTaskInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Task` to be created by this mutation. */
  task: TaskInput;
};

/** The output of our create `Task` mutation. */
export type CreateTaskPayload = {
  __typename?: 'CreateTaskPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Task` that was created by this mutation. */
  task?: Maybe<Task>;
  /** An edge for our `Task`. May be used by Relay 1. */
  taskEdge?: Maybe<TasksEdge>;
};


/** The output of our create `Task` mutation. */
export type CreateTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `currentEnvApi` mutation. */
export type CurrentEnvApiInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our `currentEnvApi` mutation. */
export type CurrentEnvApiPayload = {
  __typename?: 'CurrentEnvApiPayload';
  boolean?: Maybe<Scalars['Boolean']>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `currentEnvGet` mutation. */
export type CurrentEnvGetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

/** The output of our `currentEnvGet` mutation. */
export type CurrentEnvGetPayload = {
  __typename?: 'CurrentEnvGetPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  string?: Maybe<Scalars['String']>;
};

/** All input for the `currentEnv` mutation. */
export type CurrentEnvInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** All input for the `currentEnvIs` mutation. */
export type CurrentEnvIsInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  env?: InputMaybe<Scalars['String']>;
};

/** The output of our `currentEnvIs` mutation. */
export type CurrentEnvIsPayload = {
  __typename?: 'CurrentEnvIsPayload';
  boolean?: Maybe<Scalars['Boolean']>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our `currentEnv` mutation. */
export type CurrentEnvPayload = {
  __typename?: 'CurrentEnvPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  string?: Maybe<Scalars['String']>;
};

/** All input for the `currentUserCan` mutation. */
export type CurrentUserCanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  perm?: InputMaybe<Scalars['String']>;
};

/** The output of our `currentUserCan` mutation. */
export type CurrentUserCanPayload = {
  __typename?: 'CurrentUserCanPayload';
  boolean?: Maybe<Scalars['Boolean']>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `currentUserEmail` mutation. */
export type CurrentUserEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our `currentUserEmail` mutation. */
export type CurrentUserEmailPayload = {
  __typename?: 'CurrentUserEmailPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  string?: Maybe<Scalars['String']>;
};

/** All input for the `currentUserGet` mutation. */
export type CurrentUserGetInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

/** The output of our `currentUserGet` mutation. */
export type CurrentUserGetPayload = {
  __typename?: 'CurrentUserGetPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  string?: Maybe<Scalars['String']>;
};

/** All input for the `currentUserId` mutation. */
export type CurrentUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our `currentUserId` mutation. */
export type CurrentUserIdPayload = {
  __typename?: 'CurrentUserIdPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  string?: Maybe<Scalars['String']>;
};

/** All input for the `currentUserIs` mutation. */
export type CurrentUserIsInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** The output of our `currentUserIs` mutation. */
export type CurrentUserIsPayload = {
  __typename?: 'CurrentUserIsPayload';
  boolean?: Maybe<Scalars['Boolean']>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `currentUserToken` mutation. */
export type CurrentUserTokenInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our `currentUserToken` mutation. */
export type CurrentUserTokenPayload = {
  __typename?: 'CurrentUserTokenPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  string?: Maybe<Scalars['String']>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']>>;
};

/** All input for the `deleteTaskById` mutation. */
export type DeleteTaskByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};

/** All input for the `deleteTaskByName` mutation. */
export type DeleteTaskByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** All input for the `deleteTask` mutation. */
export type DeleteTaskInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Task` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Task` mutation. */
export type DeleteTaskPayload = {
  __typename?: 'DeleteTaskPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedTaskId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Task` that was deleted by this mutation. */
  task?: Maybe<Task>;
  /** An edge for our `Task`. May be used by Relay 1. */
  taskEdge?: Maybe<TasksEdge>;
};


/** The output of our delete `Task` mutation. */
export type DeleteTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUserId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']>;
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type ListenPayload = {
  __typename?: 'ListenPayload';
  /** Our root query field type. Allows us to run any query from our subscription payload. */
  query?: Maybe<Query>;
  relatedNode?: Maybe<Node>;
  relatedNodeId?: Maybe<Scalars['ID']>;
};

export type Location = {
  __typename?: 'Location';
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']>;
  /** The id of the location. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  channel?: Maybe<Scalars['String']>;
  contract?: Maybe<Scalars['String']>;
  /** Creates a single `Task`. */
  createTask?: Maybe<CreateTaskPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  currentEnv?: Maybe<CurrentEnvPayload>;
  currentEnvApi?: Maybe<CurrentEnvApiPayload>;
  currentEnvGet?: Maybe<CurrentEnvGetPayload>;
  currentEnvIs?: Maybe<CurrentEnvIsPayload>;
  currentUserCan?: Maybe<CurrentUserCanPayload>;
  currentUserEmail?: Maybe<CurrentUserEmailPayload>;
  currentUserGet?: Maybe<CurrentUserGetPayload>;
  currentUserId?: Maybe<CurrentUserIdPayload>;
  currentUserIs?: Maybe<CurrentUserIsPayload>;
  currentUserToken?: Maybe<CurrentUserTokenPayload>;
  /** Deletes a single `Task` using its globally unique id. */
  deleteTask?: Maybe<DeleteTaskPayload>;
  /** Deletes a single `Task` using a unique key. */
  deleteTaskById?: Maybe<DeleteTaskPayload>;
  /** Deletes a single `Task` using a unique key. */
  deleteTaskByName?: Maybe<DeleteTaskPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserById?: Maybe<DeleteUserPayload>;
  /** Updates a single `Task` using its globally unique id and a patch. */
  updateTask?: Maybe<UpdateTaskPayload>;
  /** Updates a single `Task` using a unique key and a patch. */
  updateTaskById?: Maybe<UpdateTaskPayload>;
  /** Updates a single `Task` using a unique key and a patch. */
  updateTaskByName?: Maybe<UpdateTaskPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>;
  /** Upserts a single `Task`. */
  upsertTask?: Maybe<UpsertTaskPayload>;
  /** Upserts a single `User`. */
  upsertUser?: Maybe<UpsertUserPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationChannelArgs = {
  name?: InputMaybe<Scalars['String']>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationContractArgs = {
  name?: InputMaybe<Scalars['String']>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCurrentEnvArgs = {
  input: CurrentEnvInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCurrentEnvApiArgs = {
  input: CurrentEnvApiInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCurrentEnvGetArgs = {
  input: CurrentEnvGetInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCurrentEnvIsArgs = {
  input: CurrentEnvIsInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCurrentUserCanArgs = {
  input: CurrentUserCanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCurrentUserEmailArgs = {
  input: CurrentUserEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCurrentUserGetArgs = {
  input: CurrentUserGetInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCurrentUserIdArgs = {
  input: CurrentUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCurrentUserIsArgs = {
  input: CurrentUserIsInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCurrentUserTokenArgs = {
  input: CurrentUserTokenInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTaskByIdArgs = {
  input: DeleteTaskByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTaskByNameArgs = {
  input: DeleteTaskByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTaskByIdArgs = {
  input: UpdateTaskByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTaskByNameArgs = {
  input: UpdateTaskByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertTaskArgs = {
  input: UpsertTaskInput;
  where: UpsertTaskWhere;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertUserArgs = {
  input: UpsertUserInput;
  where: UpsertUserWhere;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Task`. */
  allTasks?: Maybe<TasksConnection>;
  /** Reads a set of `Task`. */
  allTasksList?: Maybe<Array<Task>>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  /** Reads a set of `User`. */
  allUsersList?: Maybe<Array<User>>;
  channel?: Maybe<Scalars['String']>;
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  contract?: Maybe<Scalars['String']>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Task` using its globally unique `ID`. */
  task?: Maybe<Task>;
  taskById?: Maybe<Task>;
  taskByName?: Maybe<Task>;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  userById?: Maybe<User>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTasksArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<TaskCondition>;
  filter?: InputMaybe<TaskFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTasksListArgs = {
  condition?: InputMaybe<TaskCondition>;
  filter?: InputMaybe<TaskFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersListArgs = {
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryChannelArgs = {
  name?: InputMaybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars['Int']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryContractArgs = {
  name?: InputMaybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars['Int']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLocationArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars['Int']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTaskArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTaskByIdArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTaskByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['Int'];
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']>;
};

/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type Subscription = {
  __typename?: 'Subscription';
  channel?: Maybe<Scalars['String']>;
  contract?: Maybe<Scalars['String']>;
  listen: ListenPayload;
};


/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type SubscriptionChannelArgs = {
  name?: InputMaybe<Scalars['String']>;
};


/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type SubscriptionContractArgs = {
  name?: InputMaybe<Scalars['String']>;
};


/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type SubscriptionListenArgs = {
  topic: Scalars['String'];
};

export type Task = Node & {
  __typename?: 'Task';
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  revisions?: Maybe<Array<Maybe<Task>>>;
  seq: Scalars['Int'];
  updated: Scalars['Datetime'];
};

/** A condition to be used against `Task` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TaskCondition = {
  /** Checks for equality with the object’s `deleted` field. */
  deleted?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `seq` field. */
  seq?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updated` field. */
  updated?: InputMaybe<Scalars['Datetime']>;
};

/** A filter to be used against `Task` object types. All fields are combined with a logical ‘and.’ */
export type TaskFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TaskFilter>>;
  /** Filter by the object’s `deleted` field. */
  deleted?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TaskFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TaskFilter>>;
  /** Filter by the object’s `seq` field. */
  seq?: InputMaybe<IntFilter>;
  /** Filter by the object’s `updated` field. */
  updated?: InputMaybe<DatetimeFilter>;
};

/** An input for mutations affecting `Task` */
export type TaskInput = {
  deleted?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  seq?: InputMaybe<Scalars['Int']>;
  updated?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `Task`. Fields that are set will be updated. */
export type TaskPatch = {
  deleted?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  seq?: InputMaybe<Scalars['Int']>;
  updated?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `Task` values. */
export type TasksConnection = {
  __typename?: 'TasksConnection';
  /** A list of edges which contains the `Task` and cursor to aid in pagination. */
  edges: Array<TasksEdge>;
  /** A list of `Task` objects. */
  nodes: Array<Maybe<Task>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Task` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Task` edge in the connection. */
export type TasksEdge = {
  __typename?: 'TasksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Task` at the end of the edge. */
  node?: Maybe<Task>;
};

/** Methods to use when ordering `Task`. */
export enum TasksOrderBy {
  DeletedAsc = 'DELETED_ASC',
  DeletedDesc = 'DELETED_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SeqAsc = 'SEQ_ASC',
  SeqDesc = 'SEQ_DESC',
  UpdatedAsc = 'UPDATED_ASC',
  UpdatedDesc = 'UPDATED_DESC'
}

/** All input for the `updateTaskById` mutation. */
export type UpdateTaskByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  /** An object where the defined keys will be set on the `Task` being updated. */
  taskPatch: TaskPatch;
};

/** All input for the `updateTaskByName` mutation. */
export type UpdateTaskByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `Task` being updated. */
  taskPatch: TaskPatch;
};

/** All input for the `updateTask` mutation. */
export type UpdateTaskInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Task` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Task` being updated. */
  taskPatch: TaskPatch;
};

/** The output of our update `Task` mutation. */
export type UpdateTaskPayload = {
  __typename?: 'UpdateTaskPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Task` that was updated by this mutation. */
  task?: Maybe<Task>;
  /** An edge for our `Task`. May be used by Relay 1. */
  taskEdge?: Maybe<TasksEdge>;
};


/** The output of our update `Task` mutation. */
export type UpdateTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the upsert `Task` mutation. */
export type UpsertTaskInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Task` to be upserted by this mutation. */
  task: TaskInput;
};

/** The output of our upsert `Task` mutation. */
export type UpsertTaskPayload = {
  __typename?: 'UpsertTaskPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Task` that was upserted by this mutation. */
  task?: Maybe<Task>;
  /** An edge for our `Task`. May be used by Relay 1. */
  taskEdge?: Maybe<TasksEdge>;
};


/** The output of our upsert `Task` mutation. */
export type UpsertTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};

/** Where conditions for the upsert `Task` mutation. */
export type UpsertTaskWhere = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** All input for the upsert `User` mutation. */
export type UpsertUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `User` to be upserted by this mutation. */
  user: UserInput;
};

/** The output of our upsert `User` mutation. */
export type UpsertUserPayload = {
  __typename?: 'UpsertUserPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was upserted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our upsert `User` mutation. */
export type UpsertUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** Where conditions for the upsert `User` mutation. */
export type UpsertUserWhere = {
  id?: InputMaybe<Scalars['Int']>;
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  sub?: Maybe<Scalars['String']>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sub` field. */
  sub?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `sub` field. */
  sub?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  id?: InputMaybe<Scalars['Int']>;
  sub?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  id?: InputMaybe<Scalars['Int']>;
  sub?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SubAsc = 'SUB_ASC',
  SubDesc = 'SUB_DESC'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BooleanFilter: BooleanFilter;
  CacheControlScope: CacheControlScope;
  Character: ResolverTypeWrapper<Character>;
  Characters: ResolverTypeWrapper<Characters>;
  CreateTaskInput: CreateTaskInput;
  CreateTaskPayload: ResolverTypeWrapper<CreateTaskPayload>;
  CreateUserInput: CreateUserInput;
  CreateUserPayload: ResolverTypeWrapper<CreateUserPayload>;
  CurrentEnvApiInput: CurrentEnvApiInput;
  CurrentEnvApiPayload: ResolverTypeWrapper<CurrentEnvApiPayload>;
  CurrentEnvGetInput: CurrentEnvGetInput;
  CurrentEnvGetPayload: ResolverTypeWrapper<CurrentEnvGetPayload>;
  CurrentEnvInput: CurrentEnvInput;
  CurrentEnvIsInput: CurrentEnvIsInput;
  CurrentEnvIsPayload: ResolverTypeWrapper<CurrentEnvIsPayload>;
  CurrentEnvPayload: ResolverTypeWrapper<CurrentEnvPayload>;
  CurrentUserCanInput: CurrentUserCanInput;
  CurrentUserCanPayload: ResolverTypeWrapper<CurrentUserCanPayload>;
  CurrentUserEmailInput: CurrentUserEmailInput;
  CurrentUserEmailPayload: ResolverTypeWrapper<CurrentUserEmailPayload>;
  CurrentUserGetInput: CurrentUserGetInput;
  CurrentUserGetPayload: ResolverTypeWrapper<CurrentUserGetPayload>;
  CurrentUserIdInput: CurrentUserIdInput;
  CurrentUserIdPayload: ResolverTypeWrapper<CurrentUserIdPayload>;
  CurrentUserIsInput: CurrentUserIsInput;
  CurrentUserIsPayload: ResolverTypeWrapper<CurrentUserIsPayload>;
  CurrentUserTokenInput: CurrentUserTokenInput;
  CurrentUserTokenPayload: ResolverTypeWrapper<CurrentUserTokenPayload>;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>;
  DatetimeFilter: DatetimeFilter;
  DeleteTaskByIdInput: DeleteTaskByIdInput;
  DeleteTaskByNameInput: DeleteTaskByNameInput;
  DeleteTaskInput: DeleteTaskInput;
  DeleteTaskPayload: ResolverTypeWrapper<DeleteTaskPayload>;
  DeleteUserByIdInput: DeleteUserByIdInput;
  DeleteUserInput: DeleteUserInput;
  DeleteUserPayload: ResolverTypeWrapper<DeleteUserPayload>;
  Episode: ResolverTypeWrapper<Episode>;
  Episodes: ResolverTypeWrapper<Episodes>;
  FilterCharacter: FilterCharacter;
  FilterEpisode: FilterEpisode;
  FilterLocation: FilterLocation;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Info: ResolverTypeWrapper<Info>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntFilter: IntFilter;
  ListenPayload: ResolverTypeWrapper<ListenPayload>;
  Location: ResolverTypeWrapper<Location>;
  Locations: ResolverTypeWrapper<Locations>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Query'] | ResolversTypes['Task'] | ResolversTypes['User'];
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFilter: StringFilter;
  Subscription: ResolverTypeWrapper<{}>;
  Task: ResolverTypeWrapper<Task>;
  TaskCondition: TaskCondition;
  TaskFilter: TaskFilter;
  TaskInput: TaskInput;
  TaskPatch: TaskPatch;
  TasksConnection: ResolverTypeWrapper<TasksConnection>;
  TasksEdge: ResolverTypeWrapper<TasksEdge>;
  TasksOrderBy: TasksOrderBy;
  UpdateTaskByIdInput: UpdateTaskByIdInput;
  UpdateTaskByNameInput: UpdateTaskByNameInput;
  UpdateTaskInput: UpdateTaskInput;
  UpdateTaskPayload: ResolverTypeWrapper<UpdateTaskPayload>;
  UpdateUserByIdInput: UpdateUserByIdInput;
  UpdateUserInput: UpdateUserInput;
  UpdateUserPayload: ResolverTypeWrapper<UpdateUserPayload>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  UpsertTaskInput: UpsertTaskInput;
  UpsertTaskPayload: ResolverTypeWrapper<UpsertTaskPayload>;
  UpsertTaskWhere: UpsertTaskWhere;
  UpsertUserInput: UpsertUserInput;
  UpsertUserPayload: ResolverTypeWrapper<UpsertUserPayload>;
  UpsertUserWhere: UpsertUserWhere;
  User: ResolverTypeWrapper<User>;
  UserCondition: UserCondition;
  UserFilter: UserFilter;
  UserInput: UserInput;
  UserPatch: UserPatch;
  UsersConnection: ResolverTypeWrapper<UsersConnection>;
  UsersEdge: ResolverTypeWrapper<UsersEdge>;
  UsersOrderBy: UsersOrderBy;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  BooleanFilter: BooleanFilter;
  Character: Character;
  Characters: Characters;
  CreateTaskInput: CreateTaskInput;
  CreateTaskPayload: CreateTaskPayload;
  CreateUserInput: CreateUserInput;
  CreateUserPayload: CreateUserPayload;
  CurrentEnvApiInput: CurrentEnvApiInput;
  CurrentEnvApiPayload: CurrentEnvApiPayload;
  CurrentEnvGetInput: CurrentEnvGetInput;
  CurrentEnvGetPayload: CurrentEnvGetPayload;
  CurrentEnvInput: CurrentEnvInput;
  CurrentEnvIsInput: CurrentEnvIsInput;
  CurrentEnvIsPayload: CurrentEnvIsPayload;
  CurrentEnvPayload: CurrentEnvPayload;
  CurrentUserCanInput: CurrentUserCanInput;
  CurrentUserCanPayload: CurrentUserCanPayload;
  CurrentUserEmailInput: CurrentUserEmailInput;
  CurrentUserEmailPayload: CurrentUserEmailPayload;
  CurrentUserGetInput: CurrentUserGetInput;
  CurrentUserGetPayload: CurrentUserGetPayload;
  CurrentUserIdInput: CurrentUserIdInput;
  CurrentUserIdPayload: CurrentUserIdPayload;
  CurrentUserIsInput: CurrentUserIsInput;
  CurrentUserIsPayload: CurrentUserIsPayload;
  CurrentUserTokenInput: CurrentUserTokenInput;
  CurrentUserTokenPayload: CurrentUserTokenPayload;
  Cursor: Scalars['Cursor'];
  Datetime: Scalars['Datetime'];
  DatetimeFilter: DatetimeFilter;
  DeleteTaskByIdInput: DeleteTaskByIdInput;
  DeleteTaskByNameInput: DeleteTaskByNameInput;
  DeleteTaskInput: DeleteTaskInput;
  DeleteTaskPayload: DeleteTaskPayload;
  DeleteUserByIdInput: DeleteUserByIdInput;
  DeleteUserInput: DeleteUserInput;
  DeleteUserPayload: DeleteUserPayload;
  Episode: Episode;
  Episodes: Episodes;
  FilterCharacter: FilterCharacter;
  FilterEpisode: FilterEpisode;
  FilterLocation: FilterLocation;
  ID: Scalars['ID'];
  Info: Info;
  Int: Scalars['Int'];
  IntFilter: IntFilter;
  ListenPayload: ListenPayload;
  Location: Location;
  Locations: Locations;
  Mutation: {};
  Node: ResolversParentTypes['Query'] | ResolversParentTypes['Task'] | ResolversParentTypes['User'];
  PageInfo: PageInfo;
  Query: {};
  String: Scalars['String'];
  StringFilter: StringFilter;
  Subscription: {};
  Task: Task;
  TaskCondition: TaskCondition;
  TaskFilter: TaskFilter;
  TaskInput: TaskInput;
  TaskPatch: TaskPatch;
  TasksConnection: TasksConnection;
  TasksEdge: TasksEdge;
  UpdateTaskByIdInput: UpdateTaskByIdInput;
  UpdateTaskByNameInput: UpdateTaskByNameInput;
  UpdateTaskInput: UpdateTaskInput;
  UpdateTaskPayload: UpdateTaskPayload;
  UpdateUserByIdInput: UpdateUserByIdInput;
  UpdateUserInput: UpdateUserInput;
  UpdateUserPayload: UpdateUserPayload;
  Upload: Scalars['Upload'];
  UpsertTaskInput: UpsertTaskInput;
  UpsertTaskPayload: UpsertTaskPayload;
  UpsertTaskWhere: UpsertTaskWhere;
  UpsertUserInput: UpsertUserInput;
  UpsertUserPayload: UpsertUserPayload;
  UpsertUserWhere: UpsertUserWhere;
  User: User;
  UserCondition: UserCondition;
  UserFilter: UserFilter;
  UserInput: UserInput;
  UserPatch: UserPatch;
  UsersConnection: UsersConnection;
  UsersEdge: UsersEdge;
};

export type CacheControlDirectiveArgs = {
  maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = {
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episode?: Resolver<Array<Maybe<ResolversTypes['Episode']>>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  origin?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  species?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CharactersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Characters'] = ResolversParentTypes['Characters']> = {
  info?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTaskPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTaskPayload'] = ResolversParentTypes['CreateTaskPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType>;
  taskEdge?: Resolver<Maybe<ResolversTypes['TasksEdge']>, ParentType, ContextType, RequireFields<CreateTaskPayloadTaskEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserPayload'] = ResolversParentTypes['CreateUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<CreateUserPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentEnvApiPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentEnvApiPayload'] = ResolversParentTypes['CurrentEnvApiPayload']> = {
  boolean?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentEnvGetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentEnvGetPayload'] = ResolversParentTypes['CurrentEnvGetPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentEnvIsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentEnvIsPayload'] = ResolversParentTypes['CurrentEnvIsPayload']> = {
  boolean?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentEnvPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentEnvPayload'] = ResolversParentTypes['CurrentEnvPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentUserCanPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentUserCanPayload'] = ResolversParentTypes['CurrentUserCanPayload']> = {
  boolean?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentUserEmailPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentUserEmailPayload'] = ResolversParentTypes['CurrentUserEmailPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentUserGetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentUserGetPayload'] = ResolversParentTypes['CurrentUserGetPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentUserIdPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentUserIdPayload'] = ResolversParentTypes['CurrentUserIdPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentUserIsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentUserIsPayload'] = ResolversParentTypes['CurrentUserIsPayload']> = {
  boolean?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentUserTokenPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentUserTokenPayload'] = ResolversParentTypes['CurrentUserTokenPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export type DeleteTaskPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTaskPayload'] = ResolversParentTypes['DeleteTaskPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedTaskId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType>;
  taskEdge?: Resolver<Maybe<ResolversTypes['TasksEdge']>, ParentType, ContextType, RequireFields<DeleteTaskPayloadTaskEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserPayload'] = ResolversParentTypes['DeleteUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedUserId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<DeleteUserPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EpisodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Episode'] = ResolversParentTypes['Episode']> = {
  air_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  characters?: Resolver<Array<Maybe<ResolversTypes['Character']>>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EpisodesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Episodes'] = ResolversParentTypes['Episodes']> = {
  info?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Episode']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Info'] = ResolversParentTypes['Info']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prev?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListenPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListenPayload'] = ResolversParentTypes['ListenPayload']> = {
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  relatedNode?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  relatedNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  residents?: Resolver<Array<Maybe<ResolversTypes['Character']>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Locations'] = ResolversParentTypes['Locations']> = {
  info?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  channel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationChannelArgs>>;
  contract?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationContractArgs>>;
  createTask?: Resolver<Maybe<ResolversTypes['CreateTaskPayload']>, ParentType, ContextType, RequireFields<MutationCreateTaskArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  currentEnv?: Resolver<Maybe<ResolversTypes['CurrentEnvPayload']>, ParentType, ContextType, RequireFields<MutationCurrentEnvArgs, 'input'>>;
  currentEnvApi?: Resolver<Maybe<ResolversTypes['CurrentEnvApiPayload']>, ParentType, ContextType, RequireFields<MutationCurrentEnvApiArgs, 'input'>>;
  currentEnvGet?: Resolver<Maybe<ResolversTypes['CurrentEnvGetPayload']>, ParentType, ContextType, RequireFields<MutationCurrentEnvGetArgs, 'input'>>;
  currentEnvIs?: Resolver<Maybe<ResolversTypes['CurrentEnvIsPayload']>, ParentType, ContextType, RequireFields<MutationCurrentEnvIsArgs, 'input'>>;
  currentUserCan?: Resolver<Maybe<ResolversTypes['CurrentUserCanPayload']>, ParentType, ContextType, RequireFields<MutationCurrentUserCanArgs, 'input'>>;
  currentUserEmail?: Resolver<Maybe<ResolversTypes['CurrentUserEmailPayload']>, ParentType, ContextType, RequireFields<MutationCurrentUserEmailArgs, 'input'>>;
  currentUserGet?: Resolver<Maybe<ResolversTypes['CurrentUserGetPayload']>, ParentType, ContextType, RequireFields<MutationCurrentUserGetArgs, 'input'>>;
  currentUserId?: Resolver<Maybe<ResolversTypes['CurrentUserIdPayload']>, ParentType, ContextType, RequireFields<MutationCurrentUserIdArgs, 'input'>>;
  currentUserIs?: Resolver<Maybe<ResolversTypes['CurrentUserIsPayload']>, ParentType, ContextType, RequireFields<MutationCurrentUserIsArgs, 'input'>>;
  currentUserToken?: Resolver<Maybe<ResolversTypes['CurrentUserTokenPayload']>, ParentType, ContextType, RequireFields<MutationCurrentUserTokenArgs, 'input'>>;
  deleteTask?: Resolver<Maybe<ResolversTypes['DeleteTaskPayload']>, ParentType, ContextType, RequireFields<MutationDeleteTaskArgs, 'input'>>;
  deleteTaskById?: Resolver<Maybe<ResolversTypes['DeleteTaskPayload']>, ParentType, ContextType, RequireFields<MutationDeleteTaskByIdArgs, 'input'>>;
  deleteTaskByName?: Resolver<Maybe<ResolversTypes['DeleteTaskPayload']>, ParentType, ContextType, RequireFields<MutationDeleteTaskByNameArgs, 'input'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'input'>>;
  deleteUserById?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserByIdArgs, 'input'>>;
  updateTask?: Resolver<Maybe<ResolversTypes['UpdateTaskPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTaskArgs, 'input'>>;
  updateTaskById?: Resolver<Maybe<ResolversTypes['UpdateTaskPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTaskByIdArgs, 'input'>>;
  updateTaskByName?: Resolver<Maybe<ResolversTypes['UpdateTaskPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTaskByNameArgs, 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
  updateUserById?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserByIdArgs, 'input'>>;
  upsertTask?: Resolver<Maybe<ResolversTypes['UpsertTaskPayload']>, ParentType, ContextType, RequireFields<MutationUpsertTaskArgs, 'input' | 'where'>>;
  upsertUser?: Resolver<Maybe<ResolversTypes['UpsertUserPayload']>, ParentType, ContextType, RequireFields<MutationUpsertUserArgs, 'input' | 'where'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Query' | 'Task' | 'User', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allTasks?: Resolver<Maybe<ResolversTypes['TasksConnection']>, ParentType, ContextType, RequireFields<QueryAllTasksArgs, 'orderBy'>>;
  allTasksList?: Resolver<Maybe<Array<ResolversTypes['Task']>>, ParentType, ContextType, Partial<QueryAllTasksListArgs>>;
  allUsers?: Resolver<Maybe<ResolversTypes['UsersConnection']>, ParentType, ContextType, RequireFields<QueryAllUsersArgs, 'orderBy'>>;
  allUsersList?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, Partial<QueryAllUsersListArgs>>;
  channel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<QueryChannelArgs>>;
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<QueryCharacterArgs, 'id'>>;
  characters?: Resolver<Maybe<ResolversTypes['Characters']>, ParentType, ContextType, Partial<QueryCharactersArgs>>;
  charactersByIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType, RequireFields<QueryCharactersByIdsArgs, 'ids'>>;
  contract?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<QueryContractArgs>>;
  episode?: Resolver<Maybe<ResolversTypes['Episode']>, ParentType, ContextType, RequireFields<QueryEpisodeArgs, 'id'>>;
  episodes?: Resolver<Maybe<ResolversTypes['Episodes']>, ParentType, ContextType, Partial<QueryEpisodesArgs>>;
  episodesByIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Episode']>>>, ParentType, ContextType, RequireFields<QueryEpisodesByIdsArgs, 'ids'>>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<QueryLocationArgs, 'id'>>;
  locations?: Resolver<Maybe<ResolversTypes['Locations']>, ParentType, ContextType, Partial<QueryLocationsArgs>>;
  locationsByIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType, RequireFields<QueryLocationsByIdsArgs, 'ids'>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>;
  task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<QueryTaskArgs, 'nodeId'>>;
  taskById?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<QueryTaskByIdArgs, 'id'>>;
  taskByName?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<QueryTaskByNameArgs, 'name'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'nodeId'>>;
  userById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByIdArgs, 'id'>>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  channel?: SubscriptionResolver<Maybe<ResolversTypes['String']>, "channel", ParentType, ContextType, Partial<SubscriptionChannelArgs>>;
  contract?: SubscriptionResolver<Maybe<ResolversTypes['String']>, "contract", ParentType, ContextType, Partial<SubscriptionContractArgs>>;
  listen?: SubscriptionResolver<ResolversTypes['ListenPayload'], "listen", ParentType, ContextType, RequireFields<SubscriptionListenArgs, 'topic'>>;
};

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  revisions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Task']>>>, ParentType, ContextType>;
  seq?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TasksConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TasksConnection'] = ResolversParentTypes['TasksConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TasksEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Task']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TasksEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TasksEdge'] = ResolversParentTypes['TasksEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTaskPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTaskPayload'] = ResolversParentTypes['UpdateTaskPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType>;
  taskEdge?: Resolver<Maybe<ResolversTypes['TasksEdge']>, ParentType, ContextType, RequireFields<UpdateTaskPayloadTaskEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserPayload'] = ResolversParentTypes['UpdateUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<UpdateUserPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UpsertTaskPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpsertTaskPayload'] = ResolversParentTypes['UpsertTaskPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType>;
  taskEdge?: Resolver<Maybe<ResolversTypes['TasksEdge']>, ParentType, ContextType, RequireFields<UpsertTaskPayloadTaskEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpsertUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpsertUserPayload'] = ResolversParentTypes['UpsertUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<UpsertUserPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sub?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersConnection'] = ResolversParentTypes['UsersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UsersEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersEdge'] = ResolversParentTypes['UsersEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Character?: CharacterResolvers<ContextType>;
  Characters?: CharactersResolvers<ContextType>;
  CreateTaskPayload?: CreateTaskPayloadResolvers<ContextType>;
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>;
  CurrentEnvApiPayload?: CurrentEnvApiPayloadResolvers<ContextType>;
  CurrentEnvGetPayload?: CurrentEnvGetPayloadResolvers<ContextType>;
  CurrentEnvIsPayload?: CurrentEnvIsPayloadResolvers<ContextType>;
  CurrentEnvPayload?: CurrentEnvPayloadResolvers<ContextType>;
  CurrentUserCanPayload?: CurrentUserCanPayloadResolvers<ContextType>;
  CurrentUserEmailPayload?: CurrentUserEmailPayloadResolvers<ContextType>;
  CurrentUserGetPayload?: CurrentUserGetPayloadResolvers<ContextType>;
  CurrentUserIdPayload?: CurrentUserIdPayloadResolvers<ContextType>;
  CurrentUserIsPayload?: CurrentUserIsPayloadResolvers<ContextType>;
  CurrentUserTokenPayload?: CurrentUserTokenPayloadResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  Datetime?: GraphQLScalarType;
  DeleteTaskPayload?: DeleteTaskPayloadResolvers<ContextType>;
  DeleteUserPayload?: DeleteUserPayloadResolvers<ContextType>;
  Episode?: EpisodeResolvers<ContextType>;
  Episodes?: EpisodesResolvers<ContextType>;
  Info?: InfoResolvers<ContextType>;
  ListenPayload?: ListenPayloadResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Locations?: LocationsResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  TasksConnection?: TasksConnectionResolvers<ContextType>;
  TasksEdge?: TasksEdgeResolvers<ContextType>;
  UpdateTaskPayload?: UpdateTaskPayloadResolvers<ContextType>;
  UpdateUserPayload?: UpdateUserPayloadResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  UpsertTaskPayload?: UpsertTaskPayloadResolvers<ContextType>;
  UpsertUserPayload?: UpsertUserPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UsersConnection?: UsersConnectionResolvers<ContextType>;
  UsersEdge?: UsersEdgeResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};

export const namedOperations = {
  Query: {
    RickAndMortyCharacters: 'RickAndMortyCharacters',
    DetailTask: 'DetailTask',
    ListTasks: 'ListTasks',
    AllUsers: 'AllUsers',
    CodeLaunch: 'CodeLaunch'
  },
  Mutation: {
    CreateTask: 'CreateTask',
    DeleteTask: 'DeleteTask',
    UpdateTask: 'UpdateTask',
    CreateUser: 'CreateUser'
  }
}
export type RickAndMortyCharactersQueryVariables = Exact<{ [key: string]: never; }>;


export type RickAndMortyCharactersQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', info?: { __typename?: 'Info', count?: number | null } | null, results?: Array<{ __typename?: 'Character', name?: string | null } | null> | null } | null, location?: { __typename?: 'Location', id?: string | null } | null, episodesByIds?: Array<{ __typename?: 'Episode', id?: string | null } | null> | null };

export type CreateTaskMutationVariables = Exact<{
  data: TaskInput;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask?: { __typename?: 'CreateTaskPayload', task?: { __typename?: 'Task', id: string, name: string, seq: number, deleted: boolean, updated: any } | null } | null };

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTaskById?: { __typename?: 'DeleteTaskPayload', task?: { __typename?: 'Task', id: string, name: string } | null } | null };

export type DetailTaskQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type DetailTaskQuery = { __typename?: 'Query', taskById?: { __typename?: 'Task', id: string, name: string, seq: number, deleted: boolean, updated: any } | null };

export type ListTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTasksQuery = { __typename?: 'Query', allTasksList?: Array<{ __typename?: 'Task', id: string, name: string, seq: number, deleted: boolean, updated: any }> | null };

export type UpdateTaskMutationVariables = Exact<{
  id: Scalars['String'];
  data: TaskPatch;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTaskById?: { __typename?: 'UpdateTaskPayload', task?: { __typename?: 'Task', id: string, name: string, seq: number, deleted: boolean, updated: any } | null } | null };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', allUsersList?: Array<{ __typename?: 'User', id: number, sub?: string | null }> | null };

export type CreateUserMutationVariables = Exact<{
  user: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserPayload', user?: { __typename?: 'User', id: number, sub?: string | null } | null } | null };

export type CodeLaunchQueryVariables = Exact<{ [key: string]: never; }>;


export type CodeLaunchQuery = { __typename: 'Query' };


export const RickAndMortyCharactersDocument = gql`
    query RickAndMortyCharacters {
  characters(page: 2, filter: {name: "rick"}) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
    `;

export function useRickAndMortyCharactersQuery(options: Omit<Urql.UseQueryArgs<never, RickAndMortyCharactersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<RickAndMortyCharactersQuery>({ query: RickAndMortyCharactersDocument, ...options });
};
export const CreateTaskDocument = gql`
    mutation CreateTask($data: TaskInput!) {
  createTask(input: {task: $data}) {
    task {
      id
      name
      seq
      deleted
      updated
    }
  }
}
    `;

export function useCreateTaskMutation() {
  return Urql.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument);
};
export const DeleteTaskDocument = gql`
    mutation DeleteTask($id: String!) {
  deleteTaskById(input: {id: $id}) {
    task {
      id
      name
    }
  }
}
    `;

export function useDeleteTaskMutation() {
  return Urql.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument);
};
export const DetailTaskDocument = gql`
    query DetailTask($id: String!) {
  taskById(id: $id) {
    id
    name
    seq
    deleted
    updated
  }
}
    `;

export function useDetailTaskQuery(options: Omit<Urql.UseQueryArgs<never, DetailTaskQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<DetailTaskQuery>({ query: DetailTaskDocument, ...options });
};
export const ListTasksDocument = gql`
    query ListTasks {
  allTasksList(filter: {deleted: {equalTo: false}}, orderBy: NAME_ASC) {
    id
    name
    seq
    deleted
    updated
  }
}
    `;

export function useListTasksQuery(options: Omit<Urql.UseQueryArgs<never, ListTasksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ListTasksQuery>({ query: ListTasksDocument, ...options });
};
export const UpdateTaskDocument = gql`
    mutation UpdateTask($id: String!, $data: TaskPatch!) {
  updateTaskById(input: {taskPatch: $data, id: $id}) {
    task {
      id
      name
      seq
      deleted
      updated
    }
  }
}
    `;

export function useUpdateTaskMutation() {
  return Urql.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument);
};
export const AllUsersDocument = gql`
    query AllUsers {
  allUsersList(orderBy: ID_DESC, first: 10, offset: 0) {
    id
    sub
  }
}
    `;

export function useAllUsersQuery(options: Omit<Urql.UseQueryArgs<never, AllUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllUsersQuery>({ query: AllUsersDocument, ...options });
};
export const CreateUserDocument = gql`
    mutation CreateUser($user: UserInput!) {
  createUser(input: {user: $user}) {
    user {
      id
      sub
    }
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const CodeLaunchDocument = gql`
    query CodeLaunch {
  __typename
}
    `;

export function useCodeLaunchQuery(options: Omit<Urql.UseQueryArgs<never, CodeLaunchQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CodeLaunchQuery>({ query: CodeLaunchDocument, ...options });
};
export type WithTypename<T extends { __typename?: any }> = T & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Character?: (data: WithTypename<Character>) => null | string,
  Characters?: (data: WithTypename<Characters>) => null | string,
  CreateTaskPayload?: (data: WithTypename<CreateTaskPayload>) => null | string,
  CreateUserPayload?: (data: WithTypename<CreateUserPayload>) => null | string,
  CurrentEnvApiPayload?: (data: WithTypename<CurrentEnvApiPayload>) => null | string,
  CurrentEnvGetPayload?: (data: WithTypename<CurrentEnvGetPayload>) => null | string,
  CurrentEnvIsPayload?: (data: WithTypename<CurrentEnvIsPayload>) => null | string,
  CurrentEnvPayload?: (data: WithTypename<CurrentEnvPayload>) => null | string,
  CurrentUserCanPayload?: (data: WithTypename<CurrentUserCanPayload>) => null | string,
  CurrentUserEmailPayload?: (data: WithTypename<CurrentUserEmailPayload>) => null | string,
  CurrentUserGetPayload?: (data: WithTypename<CurrentUserGetPayload>) => null | string,
  CurrentUserIdPayload?: (data: WithTypename<CurrentUserIdPayload>) => null | string,
  CurrentUserIsPayload?: (data: WithTypename<CurrentUserIsPayload>) => null | string,
  CurrentUserTokenPayload?: (data: WithTypename<CurrentUserTokenPayload>) => null | string,
  DeleteTaskPayload?: (data: WithTypename<DeleteTaskPayload>) => null | string,
  DeleteUserPayload?: (data: WithTypename<DeleteUserPayload>) => null | string,
  Episode?: (data: WithTypename<Episode>) => null | string,
  Episodes?: (data: WithTypename<Episodes>) => null | string,
  Info?: (data: WithTypename<Info>) => null | string,
  ListenPayload?: (data: WithTypename<ListenPayload>) => null | string,
  Location?: (data: WithTypename<Location>) => null | string,
  Locations?: (data: WithTypename<Locations>) => null | string,
  PageInfo?: (data: WithTypename<PageInfo>) => null | string,
  Task?: (data: WithTypename<Task>) => null | string,
  TasksConnection?: (data: WithTypename<TasksConnection>) => null | string,
  TasksEdge?: (data: WithTypename<TasksEdge>) => null | string,
  UpdateTaskPayload?: (data: WithTypename<UpdateTaskPayload>) => null | string,
  UpdateUserPayload?: (data: WithTypename<UpdateUserPayload>) => null | string,
  UpsertTaskPayload?: (data: WithTypename<UpsertTaskPayload>) => null | string,
  UpsertUserPayload?: (data: WithTypename<UpsertUserPayload>) => null | string,
  User?: (data: WithTypename<User>) => null | string,
  UsersConnection?: (data: WithTypename<UsersConnection>) => null | string,
  UsersEdge?: (data: WithTypename<UsersEdge>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    allTasks?: GraphCacheResolver<WithTypename<Query>, QueryAllTasksArgs, WithTypename<TasksConnection> | string>,
    allTasksList?: GraphCacheResolver<WithTypename<Query>, QueryAllTasksListArgs, Array<WithTypename<Task> | string>>,
    allUsers?: GraphCacheResolver<WithTypename<Query>, QueryAllUsersArgs, WithTypename<UsersConnection> | string>,
    allUsersList?: GraphCacheResolver<WithTypename<Query>, QueryAllUsersListArgs, Array<WithTypename<User> | string>>,
    channel?: GraphCacheResolver<WithTypename<Query>, QueryChannelArgs, Scalars['String'] | string>,
    character?: GraphCacheResolver<WithTypename<Query>, QueryCharacterArgs, WithTypename<Character> | string>,
    characters?: GraphCacheResolver<WithTypename<Query>, QueryCharactersArgs, WithTypename<Characters> | string>,
    charactersByIds?: GraphCacheResolver<WithTypename<Query>, QueryCharactersByIdsArgs, Array<WithTypename<Character> | string>>,
    contract?: GraphCacheResolver<WithTypename<Query>, QueryContractArgs, Scalars['String'] | string>,
    episode?: GraphCacheResolver<WithTypename<Query>, QueryEpisodeArgs, WithTypename<Episode> | string>,
    episodes?: GraphCacheResolver<WithTypename<Query>, QueryEpisodesArgs, WithTypename<Episodes> | string>,
    episodesByIds?: GraphCacheResolver<WithTypename<Query>, QueryEpisodesByIdsArgs, Array<WithTypename<Episode> | string>>,
    location?: GraphCacheResolver<WithTypename<Query>, QueryLocationArgs, WithTypename<Location> | string>,
    locations?: GraphCacheResolver<WithTypename<Query>, QueryLocationsArgs, WithTypename<Locations> | string>,
    locationsByIds?: GraphCacheResolver<WithTypename<Query>, QueryLocationsByIdsArgs, Array<WithTypename<Location> | string>>,
    node?: GraphCacheResolver<WithTypename<Query>, QueryNodeArgs, WithTypename<Query> | WithTypename<Task> | WithTypename<User> | string>,
    nodeId?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Scalars['ID'] | string>,
    query?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, WithTypename<Query> | string>,
    task?: GraphCacheResolver<WithTypename<Query>, QueryTaskArgs, WithTypename<Task> | string>,
    taskById?: GraphCacheResolver<WithTypename<Query>, QueryTaskByIdArgs, WithTypename<Task> | string>,
    taskByName?: GraphCacheResolver<WithTypename<Query>, QueryTaskByNameArgs, WithTypename<Task> | string>,
    user?: GraphCacheResolver<WithTypename<Query>, QueryUserArgs, WithTypename<User> | string>,
    userById?: GraphCacheResolver<WithTypename<Query>, QueryUserByIdArgs, WithTypename<User> | string>
  },
  Character?: {
    created?: GraphCacheResolver<WithTypename<Character>, Record<string, never>, Scalars['String'] | string>,
    episode?: GraphCacheResolver<WithTypename<Character>, Record<string, never>, Array<WithTypename<Episode> | string>>,
    gender?: GraphCacheResolver<WithTypename<Character>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<Character>, Record<string, never>, Scalars['ID'] | string>,
    image?: GraphCacheResolver<WithTypename<Character>, Record<string, never>, Scalars['String'] | string>,
    location?: GraphCacheResolver<WithTypename<Character>, Record<string, never>, WithTypename<Location> | string>,
    name?: GraphCacheResolver<WithTypename<Character>, Record<string, never>, Scalars['String'] | string>,
    origin?: GraphCacheResolver<WithTypename<Character>, Record<string, never>, WithTypename<Location> | string>,
    species?: GraphCacheResolver<WithTypename<Character>, Record<string, never>, Scalars['String'] | string>,
    status?: GraphCacheResolver<WithTypename<Character>, Record<string, never>, Scalars['String'] | string>,
    type?: GraphCacheResolver<WithTypename<Character>, Record<string, never>, Scalars['String'] | string>
  },
  Characters?: {
    info?: GraphCacheResolver<WithTypename<Characters>, Record<string, never>, WithTypename<Info> | string>,
    results?: GraphCacheResolver<WithTypename<Characters>, Record<string, never>, Array<WithTypename<Character> | string>>
  },
  CreateTaskPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<CreateTaskPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<CreateTaskPayload>, Record<string, never>, WithTypename<Query> | string>,
    task?: GraphCacheResolver<WithTypename<CreateTaskPayload>, Record<string, never>, WithTypename<Task> | string>,
    taskEdge?: GraphCacheResolver<WithTypename<CreateTaskPayload>, CreateTaskPayloadTaskEdgeArgs, WithTypename<TasksEdge> | string>
  },
  CreateUserPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<CreateUserPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<CreateUserPayload>, Record<string, never>, WithTypename<Query> | string>,
    user?: GraphCacheResolver<WithTypename<CreateUserPayload>, Record<string, never>, WithTypename<User> | string>,
    userEdge?: GraphCacheResolver<WithTypename<CreateUserPayload>, CreateUserPayloadUserEdgeArgs, WithTypename<UsersEdge> | string>
  },
  CurrentEnvApiPayload?: {
    boolean?: GraphCacheResolver<WithTypename<CurrentEnvApiPayload>, Record<string, never>, Scalars['Boolean'] | string>,
    clientMutationId?: GraphCacheResolver<WithTypename<CurrentEnvApiPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<CurrentEnvApiPayload>, Record<string, never>, WithTypename<Query> | string>
  },
  CurrentEnvGetPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<CurrentEnvGetPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<CurrentEnvGetPayload>, Record<string, never>, WithTypename<Query> | string>,
    string?: GraphCacheResolver<WithTypename<CurrentEnvGetPayload>, Record<string, never>, Scalars['String'] | string>
  },
  CurrentEnvIsPayload?: {
    boolean?: GraphCacheResolver<WithTypename<CurrentEnvIsPayload>, Record<string, never>, Scalars['Boolean'] | string>,
    clientMutationId?: GraphCacheResolver<WithTypename<CurrentEnvIsPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<CurrentEnvIsPayload>, Record<string, never>, WithTypename<Query> | string>
  },
  CurrentEnvPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<CurrentEnvPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<CurrentEnvPayload>, Record<string, never>, WithTypename<Query> | string>,
    string?: GraphCacheResolver<WithTypename<CurrentEnvPayload>, Record<string, never>, Scalars['String'] | string>
  },
  CurrentUserCanPayload?: {
    boolean?: GraphCacheResolver<WithTypename<CurrentUserCanPayload>, Record<string, never>, Scalars['Boolean'] | string>,
    clientMutationId?: GraphCacheResolver<WithTypename<CurrentUserCanPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<CurrentUserCanPayload>, Record<string, never>, WithTypename<Query> | string>
  },
  CurrentUserEmailPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<CurrentUserEmailPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<CurrentUserEmailPayload>, Record<string, never>, WithTypename<Query> | string>,
    string?: GraphCacheResolver<WithTypename<CurrentUserEmailPayload>, Record<string, never>, Scalars['String'] | string>
  },
  CurrentUserGetPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<CurrentUserGetPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<CurrentUserGetPayload>, Record<string, never>, WithTypename<Query> | string>,
    string?: GraphCacheResolver<WithTypename<CurrentUserGetPayload>, Record<string, never>, Scalars['String'] | string>
  },
  CurrentUserIdPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<CurrentUserIdPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<CurrentUserIdPayload>, Record<string, never>, WithTypename<Query> | string>,
    string?: GraphCacheResolver<WithTypename<CurrentUserIdPayload>, Record<string, never>, Scalars['String'] | string>
  },
  CurrentUserIsPayload?: {
    boolean?: GraphCacheResolver<WithTypename<CurrentUserIsPayload>, Record<string, never>, Scalars['Boolean'] | string>,
    clientMutationId?: GraphCacheResolver<WithTypename<CurrentUserIsPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<CurrentUserIsPayload>, Record<string, never>, WithTypename<Query> | string>
  },
  CurrentUserTokenPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<CurrentUserTokenPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<CurrentUserTokenPayload>, Record<string, never>, WithTypename<Query> | string>,
    string?: GraphCacheResolver<WithTypename<CurrentUserTokenPayload>, Record<string, never>, Scalars['String'] | string>
  },
  DeleteTaskPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<DeleteTaskPayload>, Record<string, never>, Scalars['String'] | string>,
    deletedTaskId?: GraphCacheResolver<WithTypename<DeleteTaskPayload>, Record<string, never>, Scalars['ID'] | string>,
    query?: GraphCacheResolver<WithTypename<DeleteTaskPayload>, Record<string, never>, WithTypename<Query> | string>,
    task?: GraphCacheResolver<WithTypename<DeleteTaskPayload>, Record<string, never>, WithTypename<Task> | string>,
    taskEdge?: GraphCacheResolver<WithTypename<DeleteTaskPayload>, DeleteTaskPayloadTaskEdgeArgs, WithTypename<TasksEdge> | string>
  },
  DeleteUserPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<DeleteUserPayload>, Record<string, never>, Scalars['String'] | string>,
    deletedUserId?: GraphCacheResolver<WithTypename<DeleteUserPayload>, Record<string, never>, Scalars['ID'] | string>,
    query?: GraphCacheResolver<WithTypename<DeleteUserPayload>, Record<string, never>, WithTypename<Query> | string>,
    user?: GraphCacheResolver<WithTypename<DeleteUserPayload>, Record<string, never>, WithTypename<User> | string>,
    userEdge?: GraphCacheResolver<WithTypename<DeleteUserPayload>, DeleteUserPayloadUserEdgeArgs, WithTypename<UsersEdge> | string>
  },
  Episode?: {
    air_date?: GraphCacheResolver<WithTypename<Episode>, Record<string, never>, Scalars['String'] | string>,
    characters?: GraphCacheResolver<WithTypename<Episode>, Record<string, never>, Array<WithTypename<Character> | string>>,
    created?: GraphCacheResolver<WithTypename<Episode>, Record<string, never>, Scalars['String'] | string>,
    episode?: GraphCacheResolver<WithTypename<Episode>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<Episode>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<Episode>, Record<string, never>, Scalars['String'] | string>
  },
  Episodes?: {
    info?: GraphCacheResolver<WithTypename<Episodes>, Record<string, never>, WithTypename<Info> | string>,
    results?: GraphCacheResolver<WithTypename<Episodes>, Record<string, never>, Array<WithTypename<Episode> | string>>
  },
  Info?: {
    count?: GraphCacheResolver<WithTypename<Info>, Record<string, never>, Scalars['Int'] | string>,
    next?: GraphCacheResolver<WithTypename<Info>, Record<string, never>, Scalars['Int'] | string>,
    pages?: GraphCacheResolver<WithTypename<Info>, Record<string, never>, Scalars['Int'] | string>,
    prev?: GraphCacheResolver<WithTypename<Info>, Record<string, never>, Scalars['Int'] | string>
  },
  ListenPayload?: {
    query?: GraphCacheResolver<WithTypename<ListenPayload>, Record<string, never>, WithTypename<Query> | string>,
    relatedNode?: GraphCacheResolver<WithTypename<ListenPayload>, Record<string, never>, WithTypename<Query> | WithTypename<Task> | WithTypename<User> | string>,
    relatedNodeId?: GraphCacheResolver<WithTypename<ListenPayload>, Record<string, never>, Scalars['ID'] | string>
  },
  Location?: {
    created?: GraphCacheResolver<WithTypename<Location>, Record<string, never>, Scalars['String'] | string>,
    dimension?: GraphCacheResolver<WithTypename<Location>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<Location>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<Location>, Record<string, never>, Scalars['String'] | string>,
    residents?: GraphCacheResolver<WithTypename<Location>, Record<string, never>, Array<WithTypename<Character> | string>>,
    type?: GraphCacheResolver<WithTypename<Location>, Record<string, never>, Scalars['String'] | string>
  },
  Locations?: {
    info?: GraphCacheResolver<WithTypename<Locations>, Record<string, never>, WithTypename<Info> | string>,
    results?: GraphCacheResolver<WithTypename<Locations>, Record<string, never>, Array<WithTypename<Location> | string>>
  },
  PageInfo?: {
    endCursor?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['Cursor'] | string>,
    hasNextPage?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['Boolean'] | string>,
    hasPreviousPage?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['Boolean'] | string>,
    startCursor?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['Cursor'] | string>
  },
  Task?: {
    deleted?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['Boolean'] | string>,
    description?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>,
    name?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>,
    nodeId?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['ID'] | string>,
    revisions?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Array<WithTypename<Task> | string>>,
    seq?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['Int'] | string>,
    updated?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['Datetime'] | string>
  },
  TasksConnection?: {
    edges?: GraphCacheResolver<WithTypename<TasksConnection>, Record<string, never>, Array<WithTypename<TasksEdge> | string>>,
    nodes?: GraphCacheResolver<WithTypename<TasksConnection>, Record<string, never>, Array<WithTypename<Task> | string>>,
    pageInfo?: GraphCacheResolver<WithTypename<TasksConnection>, Record<string, never>, WithTypename<PageInfo> | string>,
    totalCount?: GraphCacheResolver<WithTypename<TasksConnection>, Record<string, never>, Scalars['Int'] | string>
  },
  TasksEdge?: {
    cursor?: GraphCacheResolver<WithTypename<TasksEdge>, Record<string, never>, Scalars['Cursor'] | string>,
    node?: GraphCacheResolver<WithTypename<TasksEdge>, Record<string, never>, WithTypename<Task> | string>
  },
  UpdateTaskPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<UpdateTaskPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<UpdateTaskPayload>, Record<string, never>, WithTypename<Query> | string>,
    task?: GraphCacheResolver<WithTypename<UpdateTaskPayload>, Record<string, never>, WithTypename<Task> | string>,
    taskEdge?: GraphCacheResolver<WithTypename<UpdateTaskPayload>, UpdateTaskPayloadTaskEdgeArgs, WithTypename<TasksEdge> | string>
  },
  UpdateUserPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<UpdateUserPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<UpdateUserPayload>, Record<string, never>, WithTypename<Query> | string>,
    user?: GraphCacheResolver<WithTypename<UpdateUserPayload>, Record<string, never>, WithTypename<User> | string>,
    userEdge?: GraphCacheResolver<WithTypename<UpdateUserPayload>, UpdateUserPayloadUserEdgeArgs, WithTypename<UsersEdge> | string>
  },
  UpsertTaskPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<UpsertTaskPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<UpsertTaskPayload>, Record<string, never>, WithTypename<Query> | string>,
    task?: GraphCacheResolver<WithTypename<UpsertTaskPayload>, Record<string, never>, WithTypename<Task> | string>,
    taskEdge?: GraphCacheResolver<WithTypename<UpsertTaskPayload>, UpsertTaskPayloadTaskEdgeArgs, WithTypename<TasksEdge> | string>
  },
  UpsertUserPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<UpsertUserPayload>, Record<string, never>, Scalars['String'] | string>,
    query?: GraphCacheResolver<WithTypename<UpsertUserPayload>, Record<string, never>, WithTypename<Query> | string>,
    user?: GraphCacheResolver<WithTypename<UpsertUserPayload>, Record<string, never>, WithTypename<User> | string>,
    userEdge?: GraphCacheResolver<WithTypename<UpsertUserPayload>, UpsertUserPayloadUserEdgeArgs, WithTypename<UsersEdge> | string>
  },
  User?: {
    id?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['Int'] | string>,
    nodeId?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['ID'] | string>,
    sub?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>
  },
  UsersConnection?: {
    edges?: GraphCacheResolver<WithTypename<UsersConnection>, Record<string, never>, Array<WithTypename<UsersEdge> | string>>,
    nodes?: GraphCacheResolver<WithTypename<UsersConnection>, Record<string, never>, Array<WithTypename<User> | string>>,
    pageInfo?: GraphCacheResolver<WithTypename<UsersConnection>, Record<string, never>, WithTypename<PageInfo> | string>,
    totalCount?: GraphCacheResolver<WithTypename<UsersConnection>, Record<string, never>, Scalars['Int'] | string>
  },
  UsersEdge?: {
    cursor?: GraphCacheResolver<WithTypename<UsersEdge>, Record<string, never>, Scalars['Cursor'] | string>,
    node?: GraphCacheResolver<WithTypename<UsersEdge>, Record<string, never>, WithTypename<User> | string>
  }
};

export type GraphCacheOptimisticUpdaters = {
  channel?: GraphCacheOptimisticMutationResolver<MutationChannelArgs, Maybe<Scalars['String']>>,
  contract?: GraphCacheOptimisticMutationResolver<MutationContractArgs, Maybe<Scalars['String']>>,
  createTask?: GraphCacheOptimisticMutationResolver<MutationCreateTaskArgs, Maybe<WithTypename<CreateTaskPayload>>>,
  createUser?: GraphCacheOptimisticMutationResolver<MutationCreateUserArgs, Maybe<WithTypename<CreateUserPayload>>>,
  currentEnv?: GraphCacheOptimisticMutationResolver<MutationCurrentEnvArgs, Maybe<WithTypename<CurrentEnvPayload>>>,
  currentEnvApi?: GraphCacheOptimisticMutationResolver<MutationCurrentEnvApiArgs, Maybe<WithTypename<CurrentEnvApiPayload>>>,
  currentEnvGet?: GraphCacheOptimisticMutationResolver<MutationCurrentEnvGetArgs, Maybe<WithTypename<CurrentEnvGetPayload>>>,
  currentEnvIs?: GraphCacheOptimisticMutationResolver<MutationCurrentEnvIsArgs, Maybe<WithTypename<CurrentEnvIsPayload>>>,
  currentUserCan?: GraphCacheOptimisticMutationResolver<MutationCurrentUserCanArgs, Maybe<WithTypename<CurrentUserCanPayload>>>,
  currentUserEmail?: GraphCacheOptimisticMutationResolver<MutationCurrentUserEmailArgs, Maybe<WithTypename<CurrentUserEmailPayload>>>,
  currentUserGet?: GraphCacheOptimisticMutationResolver<MutationCurrentUserGetArgs, Maybe<WithTypename<CurrentUserGetPayload>>>,
  currentUserId?: GraphCacheOptimisticMutationResolver<MutationCurrentUserIdArgs, Maybe<WithTypename<CurrentUserIdPayload>>>,
  currentUserIs?: GraphCacheOptimisticMutationResolver<MutationCurrentUserIsArgs, Maybe<WithTypename<CurrentUserIsPayload>>>,
  currentUserToken?: GraphCacheOptimisticMutationResolver<MutationCurrentUserTokenArgs, Maybe<WithTypename<CurrentUserTokenPayload>>>,
  deleteTask?: GraphCacheOptimisticMutationResolver<MutationDeleteTaskArgs, Maybe<WithTypename<DeleteTaskPayload>>>,
  deleteTaskById?: GraphCacheOptimisticMutationResolver<MutationDeleteTaskByIdArgs, Maybe<WithTypename<DeleteTaskPayload>>>,
  deleteTaskByName?: GraphCacheOptimisticMutationResolver<MutationDeleteTaskByNameArgs, Maybe<WithTypename<DeleteTaskPayload>>>,
  deleteUser?: GraphCacheOptimisticMutationResolver<MutationDeleteUserArgs, Maybe<WithTypename<DeleteUserPayload>>>,
  deleteUserById?: GraphCacheOptimisticMutationResolver<MutationDeleteUserByIdArgs, Maybe<WithTypename<DeleteUserPayload>>>,
  updateTask?: GraphCacheOptimisticMutationResolver<MutationUpdateTaskArgs, Maybe<WithTypename<UpdateTaskPayload>>>,
  updateTaskById?: GraphCacheOptimisticMutationResolver<MutationUpdateTaskByIdArgs, Maybe<WithTypename<UpdateTaskPayload>>>,
  updateTaskByName?: GraphCacheOptimisticMutationResolver<MutationUpdateTaskByNameArgs, Maybe<WithTypename<UpdateTaskPayload>>>,
  updateUser?: GraphCacheOptimisticMutationResolver<MutationUpdateUserArgs, Maybe<WithTypename<UpdateUserPayload>>>,
  updateUserById?: GraphCacheOptimisticMutationResolver<MutationUpdateUserByIdArgs, Maybe<WithTypename<UpdateUserPayload>>>,
  upsertTask?: GraphCacheOptimisticMutationResolver<MutationUpsertTaskArgs, Maybe<WithTypename<UpsertTaskPayload>>>,
  upsertUser?: GraphCacheOptimisticMutationResolver<MutationUpsertUserArgs, Maybe<WithTypename<UpsertUserPayload>>>
};

export type GraphCacheUpdaters = {
  Mutation?: {
    channel?: GraphCacheUpdateResolver<{ channel: Maybe<Scalars['String']> }, MutationChannelArgs>,
    contract?: GraphCacheUpdateResolver<{ contract: Maybe<Scalars['String']> }, MutationContractArgs>,
    createTask?: GraphCacheUpdateResolver<{ createTask: Maybe<WithTypename<CreateTaskPayload>> }, MutationCreateTaskArgs>,
    createUser?: GraphCacheUpdateResolver<{ createUser: Maybe<WithTypename<CreateUserPayload>> }, MutationCreateUserArgs>,
    currentEnv?: GraphCacheUpdateResolver<{ currentEnv: Maybe<WithTypename<CurrentEnvPayload>> }, MutationCurrentEnvArgs>,
    currentEnvApi?: GraphCacheUpdateResolver<{ currentEnvApi: Maybe<WithTypename<CurrentEnvApiPayload>> }, MutationCurrentEnvApiArgs>,
    currentEnvGet?: GraphCacheUpdateResolver<{ currentEnvGet: Maybe<WithTypename<CurrentEnvGetPayload>> }, MutationCurrentEnvGetArgs>,
    currentEnvIs?: GraphCacheUpdateResolver<{ currentEnvIs: Maybe<WithTypename<CurrentEnvIsPayload>> }, MutationCurrentEnvIsArgs>,
    currentUserCan?: GraphCacheUpdateResolver<{ currentUserCan: Maybe<WithTypename<CurrentUserCanPayload>> }, MutationCurrentUserCanArgs>,
    currentUserEmail?: GraphCacheUpdateResolver<{ currentUserEmail: Maybe<WithTypename<CurrentUserEmailPayload>> }, MutationCurrentUserEmailArgs>,
    currentUserGet?: GraphCacheUpdateResolver<{ currentUserGet: Maybe<WithTypename<CurrentUserGetPayload>> }, MutationCurrentUserGetArgs>,
    currentUserId?: GraphCacheUpdateResolver<{ currentUserId: Maybe<WithTypename<CurrentUserIdPayload>> }, MutationCurrentUserIdArgs>,
    currentUserIs?: GraphCacheUpdateResolver<{ currentUserIs: Maybe<WithTypename<CurrentUserIsPayload>> }, MutationCurrentUserIsArgs>,
    currentUserToken?: GraphCacheUpdateResolver<{ currentUserToken: Maybe<WithTypename<CurrentUserTokenPayload>> }, MutationCurrentUserTokenArgs>,
    deleteTask?: GraphCacheUpdateResolver<{ deleteTask: Maybe<WithTypename<DeleteTaskPayload>> }, MutationDeleteTaskArgs>,
    deleteTaskById?: GraphCacheUpdateResolver<{ deleteTaskById: Maybe<WithTypename<DeleteTaskPayload>> }, MutationDeleteTaskByIdArgs>,
    deleteTaskByName?: GraphCacheUpdateResolver<{ deleteTaskByName: Maybe<WithTypename<DeleteTaskPayload>> }, MutationDeleteTaskByNameArgs>,
    deleteUser?: GraphCacheUpdateResolver<{ deleteUser: Maybe<WithTypename<DeleteUserPayload>> }, MutationDeleteUserArgs>,
    deleteUserById?: GraphCacheUpdateResolver<{ deleteUserById: Maybe<WithTypename<DeleteUserPayload>> }, MutationDeleteUserByIdArgs>,
    updateTask?: GraphCacheUpdateResolver<{ updateTask: Maybe<WithTypename<UpdateTaskPayload>> }, MutationUpdateTaskArgs>,
    updateTaskById?: GraphCacheUpdateResolver<{ updateTaskById: Maybe<WithTypename<UpdateTaskPayload>> }, MutationUpdateTaskByIdArgs>,
    updateTaskByName?: GraphCacheUpdateResolver<{ updateTaskByName: Maybe<WithTypename<UpdateTaskPayload>> }, MutationUpdateTaskByNameArgs>,
    updateUser?: GraphCacheUpdateResolver<{ updateUser: Maybe<WithTypename<UpdateUserPayload>> }, MutationUpdateUserArgs>,
    updateUserById?: GraphCacheUpdateResolver<{ updateUserById: Maybe<WithTypename<UpdateUserPayload>> }, MutationUpdateUserByIdArgs>,
    upsertTask?: GraphCacheUpdateResolver<{ upsertTask: Maybe<WithTypename<UpsertTaskPayload>> }, MutationUpsertTaskArgs>,
    upsertUser?: GraphCacheUpdateResolver<{ upsertUser: Maybe<WithTypename<UpsertUserPayload>> }, MutationUpsertUserArgs>
  },
  Subscription?: {
    channel?: GraphCacheUpdateResolver<{ channel: Maybe<Scalars['String']> }, SubscriptionChannelArgs>,
    contract?: GraphCacheUpdateResolver<{ contract: Maybe<Scalars['String']> }, SubscriptionContractArgs>,
    listen?: GraphCacheUpdateResolver<{ listen: WithTypename<ListenPayload> }, SubscriptionListenArgs>
  },
};

export type GraphCacheConfig = {
  schema?: IntrospectionData,
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
  storage?: GraphCacheStorageAdapter
};

export const RickAndMortyCharacters = gql`
    query RickAndMortyCharacters {
  characters(page: 2, filter: {name: "rick"}) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
    `;
export const CreateTask = gql`
    mutation CreateTask($data: TaskInput!) {
  createTask(input: {task: $data}) {
    task {
      id
      name
      seq
      deleted
      updated
    }
  }
}
    `;
export const DeleteTask = gql`
    mutation DeleteTask($id: String!) {
  deleteTaskById(input: {id: $id}) {
    task {
      id
      name
    }
  }
}
    `;
export const DetailTask = gql`
    query DetailTask($id: String!) {
  taskById(id: $id) {
    id
    name
    seq
    deleted
    updated
  }
}
    `;
export const ListTasks = gql`
    query ListTasks {
  allTasksList(filter: {deleted: {equalTo: false}}, orderBy: NAME_ASC) {
    id
    name
    seq
    deleted
    updated
  }
}
    `;
export const UpdateTask = gql`
    mutation UpdateTask($id: String!, $data: TaskPatch!) {
  updateTaskById(input: {taskPatch: $data, id: $id}) {
    task {
      id
      name
      seq
      deleted
      updated
    }
  }
}
    `;
export const AllUsers = gql`
    query AllUsers {
  allUsersList(orderBy: ID_DESC, first: 10, offset: 0) {
    id
    sub
  }
}
    `;
export const CreateUser = gql`
    mutation CreateUser($user: UserInput!) {
  createUser(input: {user: $user}) {
    user {
      id
      sub
    }
  }
}
    `;
export const CodeLaunch = gql`
    query CodeLaunch {
  __typename
}
    `;