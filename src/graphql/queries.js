/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      manager_name
      team_name
      member_count
      createdAt
      updatedAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        manager_name
        team_name
        member_count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
