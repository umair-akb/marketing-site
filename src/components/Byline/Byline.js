import React from 'react';
import format from 'date-fns/format';
import formatDistance from 'date-fns/formatDistance';
import has from 'lodash/has';

const Byline = ({
  frontmatter,
  relative = false,
  showLastValidated = false,
  dateKey = 'date',
}) => {
  const FORMAT_TOKEN = 'MMMM do, yyyy';
  if (!has(frontmatter, dateKey)) return null;
  const date = frontmatter[dateKey];
  const dateTimestamp = Date.parse(date);
  const lastValidatedTimestamp = Date.parse(frontmatter.lastValidated);

  let text = '';
  let formattedDate = formatDistance(dateTimestamp, new Date());

  if (relative) {
    text = `Published ${formattedDate} ago`;
  } else {
    formattedDate = format(dateTimestamp, FORMAT_TOKEN);
    text = `Published on ${formattedDate}`;
  }

  if (showLastValidated && lastValidatedTimestamp && lastValidatedTimestamp !== dateTimestamp) {
    if (relative) {
      const formattedLastvalidated = formatDistance(lastValidatedTimestamp, new Date());
      text = `Last validated ${formattedLastvalidated} ago • Originally published ${formattedDate} ago`;
    } else {
      const formattedLastvalidated = format(lastValidatedTimestamp, FORMAT_TOKEN);
      text = `Last validated on ${formattedLastvalidated} • Originally published on ${formattedDate}`;
    }
  }

  if (frontmatter.author && frontmatter.author.name) {
    text += ` by ${frontmatter.author.name}`;
  }

  return <span className="text-gray-400">{text}</span>;
};

export default Byline;
