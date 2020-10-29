import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';

export const LINE_HEIGHT = 2;

const useStyles = createUseStyles(() => ({
  img: {
    width: '150px',
    marginTop: '-1em',
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.link}>
      <img className={classes.img} src="logo/roadie-spot-mono.png" alt="Roadie" />
    </Link>
  );
};

export default Logo;
