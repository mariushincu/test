import { get } from 'lodash';
import { getDataFromTree } from '@apollo/client/react/ssr';
import withApollo from '../../lib/withApollo';
import { useLocationQuery } from '../../generated';

const SingleLocationPage = ({ query }) => {
  const id = get(query, 'id');

  const { data } = useLocationQuery({
    variables: {
      id
    }
  });

  return <div>{JSON.stringify(data)}</div>;
};

export default withApollo(SingleLocationPage, { getDataFromTree });
