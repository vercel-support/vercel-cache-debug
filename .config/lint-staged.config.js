module.exports = {
    '*.{js,ts,tsx}': ['yarn lint:fix'],
    '*.css': ['yarn lint:styles'],
    '*.{gql,json,md,yaml}': ['yarn lint:format'],
}
