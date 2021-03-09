import React from 'react';
import { createUseStyles } from 'react-jss';
import Search, { SearchResult } from 'components/AlgoliaAutocomplete';
import algoliasearch from 'algoliasearch/lite';
import { getAlgoliaHits } from '@algolia/autocomplete-js';

import SidebarItem from './SidebarItem';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

const useStyles = createUseStyles((theme) => ({
  root: {},

  inner: {},

  section: {
    marginBottom: 32,
  },

  title: {
    marginBottom: 4,
  },

  ul: {
    listStyle: 'none',
    padding: 0,
  },

  spacer: {
    marginBottom: '1em',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    root: {
      minWidth: 250,
      borderRight: `1px solid ${theme.palette.grey[300]}`,
    },

    inner: {
      paddingTop: 40,
      position: 'sticky',
      top: 0,
    },
  },
}));

const getSearchSources = ({ query }) => {
  return [
    {
      sourceId: 'docs',
      getItemUrl({ item }) {
        return item.slug;
      },
      getItems() {
        return getAlgoliaHits({
          searchClient,
          queries: [{
            indexName: 'docs',
            query,
          }],
        });
      },
      templates: {
        item({ item }) {
          return <SearchResult hit={item} />;
        }
      }
    }
  ];
};

const DocSidebar = ({ location }) => {
  const classes = useStyles();

  return (
    <aside className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.section}>
          <div className={classes.title}>
            <strong>Documentation</strong>
          </div>
          <Search
            placeholder="Search"
            getSources={getSearchSources}
          />
        </div>

        <div className={classes.section}>
          <p>Getting started</p>

          <ul className={classes.ul}>
            <SidebarItem
              to="/docs/getting-started/getting-started-for-admins/"
              text="Configuring Roadie"
              location={location}
            />

            <SidebarItem
              to="/docs/getting-started/adding-components/"
              text="Adding components"
              location={location}
            />

            <SidebarItem
              to="/docs/getting-started/technical-documentation/"
              text="Using TechDocs"
              location={location}
            />

            <SidebarItem
              to="/docs/getting-started/openapi-specs/"
              text="Using OpenAPI specs"
              location={location}
            />
          </ul>
        </div>

        <div className={classes.section}>
          <p>Integrations</p>

          <ul className={classes.ul}>
            <SidebarItem
              to="/docs/integrations/github-token/"
              text="GitHub via Token"
              location={location}
            />
            <SidebarItem
              to="/docs/integrations/github-client/"
              text="GitHub via Oauth"
              location={location}
            />
            <SidebarItem
              to="/docs/integrations/github-org/"
              text="GitHub Teams"
              location={location}
            />
            <SidebarItem to="/docs/integrations/sentry/" text="Sentry" location={location} />
            <SidebarItem to="/docs/integrations/circleci/" text="CircleCI" location={location} />
            <SidebarItem to="/docs/integrations/jira/" text="Jira" location={location} />
            <SidebarItem
              to="/docs/integrations/gcp/"
              text="Google Cloud Platform"
              location={location}
            />
          </ul>
        </div>

        <div className={classes.section}>
          <p>Custom Plugins</p>

          <ul className={classes.ul}>
            <SidebarItem
              to="/docs/custom-plugins/"
              text="Installing Custom Plugins"
              location={location}
            />
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default DocSidebar;
