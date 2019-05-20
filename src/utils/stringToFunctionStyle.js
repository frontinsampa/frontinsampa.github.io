const stringToFunctionStyle = (content) => {
  content = content
    .toLowerCase()
    .split(/\s/)
    .reduce((content, str) => content + str.charAt(0).toUpperCase() + str.slice(1));

  return `${content}()`;
};

export default stringToFunctionStyle;
