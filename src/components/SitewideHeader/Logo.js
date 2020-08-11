import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';

export const LINE_HEIGHT = 2;

const useStyles = createUseStyles((theme) => ({
  h2: {
    display: 'none',
  },

  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',

    '& a:visited': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  },

  root: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: 'url(/roadie-logo-black-solid.png)',
    width: 165,
    height: 27,
    backgroundSize: 'contain',
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.link}>
      <div className={classes.root} />
      <h2 className={classes.h2}>Roadie</h2>
    </Link>
  );
};

export default Logo;
