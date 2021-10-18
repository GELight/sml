module.exports = {
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    verbose: false,
    testEnvironment: "node",
    testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx|js)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    modulePathIgnorePatterns: [
        "<rootDir>/dist/",
        "<rootDir>/node_modules/"
    ],
};
