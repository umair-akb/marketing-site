import React, { useRef, useEffect, createElement, Fragment } from 'react';
import { render } from 'react-dom';
import { navigate } from 'gatsby';
import { autocomplete, snippetHit, highlightHit } from '@algolia/autocomplete-js';
import { Link } from 'components';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  link: {
    textDecoration: 'none',
  },
}));

/*
 * CSS for these components is loaded in gatsby-browser.js
 */

export const SearchResult = ({ hit }) => {
  const classes = useStyles();
  return (
    <Link to={hit.slug} className={classes.link}>
      <div className="aa-ItemContent">
        <div className="aa-ItemContentTitle">
          {highlightHit({ hit, attribute: 'title', createElement })}
        </div>
        <div className="aa-ItemContentDescription">
          {snippetHit({ hit, attribute: 'excerpt', createElement })}
        </div>
      </div>
    </Link>
  );
};


const AlgoliaAutocomplete = (props) => {
  const searchBoxRef = useRef();

  useEffect(() => {
    if (!searchBoxRef.current) return undefined;

    const search = autocomplete({
      container: searchBoxRef.current,
      renderer: { createElement, Fragment },
      detachedMediaQuery: '',
      navigator: {
        navigate({ itemUrl }) {
          navigate(itemUrl);
        },
      },
      debug: process.env.NODE_ENV === 'development',
      render({ children }, root) {
        render(children, root);
      },
      ...props,
    }, [props]);

    return () => {
      search.destroy();
    };
  });

  return <div ref={searchBoxRef} />
};

export default AlgoliaAutocomplete;
