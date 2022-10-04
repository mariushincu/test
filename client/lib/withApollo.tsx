/* eslint-disable react-hooks/rules-of-hooks */
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
  // createHttpLink
} from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
// import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import nextWithApollo from 'next-with-apollo';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

// const authLink = setContext((_, context) => {
//   return {
//     headers: {
//       ...context.headers,
//       Authorization: `Bearer ${
//         typeof window !== 'undefined' ? localStorage.getItem('accessToken') : ''
//       }`
//     }
//   };
// });

// const httpLink = createHttpLink({
//   uri: process.env.NEXT_PUBLIC_BACKEND_URL
// });

const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      ssrMode: typeof window === 'undefined',
      // link: authLink.concat(httpLink),
      link: new HttpLink({
        uri: 'https://rickandmortyapi.com/graphql'
      }),
      headers: {
        ...(headers as Record<string, string>)
      },
      cache: new InMemoryCache().restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      const router = useRouter();

      // Covert Page to NextPageWithLayout
      const PageWithLayout = Page as NextPageWithLayout;

      const getLayout = PageWithLayout.getLayout ?? ((page) => page);

      return getLayout(
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      );
    }
  }
);

export default withApollo;
