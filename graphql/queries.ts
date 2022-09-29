import { gql } from '@apollo/client';

export const CHARACTERS_QUERY = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        image
        name
        gender
        species
        episode {
          id
          episode
          air_date
        }
        origin {
          dimension
          id
        }
      }
    }
  }
`;

export const CHARACTER_QUERY = gql`
  query character($id: ID!) {
    character(id: $id) {
      id
      image
      name
      gender
      species
      origin {
        dimension
        id
      }
    }
  }
`;

export const LOCATIONS_QUERY = gql`
  query locations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        next
        prev
        count
        pages
      }
      results {
        id
        name
        type
        dimension
        created
        residents {
          id
          name
          type
          image
          status
          gender
          species
          created
        }
      }
    }
  }
`;

export const LOCATION_QUERY = gql`
  query location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      created
      residents {
        id
        name
        type
        image
        status
        gender
        species
        created
      }
    }
  }
`;
