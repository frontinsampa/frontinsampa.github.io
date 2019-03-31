/**
 * @param {object} obj
 * @param {object} schema
 *
 * @return {object}
 */
const objectSchemaParse = (obj, schema) => Object.keys(obj).reduce((objParsed, prop) => {
  if (Object.prototype.hasOwnProperty.call(schema, prop)) {
    let objProp = {};

    if (typeof obj[prop] === 'object') {
      objProp = {
        [prop]: objectSchemaParse(obj[prop], schema[prop]),
      };
    }

    // eslint-disable-next-line valid-typeof
    if (typeof obj[prop] === schema[prop]) {
      objProp = {
        [prop]: obj[prop],
      };
    }

    return {
      ...objParsed,
      ...objProp,
    };
  }

  return objParsed;
}, {});

export { objectSchemaParse };

export default {
  parse: objectSchemaParse,
};
