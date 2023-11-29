module.exports = {
    ...require('./jest.base.config'),
    projects: [
        '<rootDir>/jest.unit.config.js',
        '<rootDir>/jest.ssr.config.js',
        '<rootDir>/jest.acceptance.config.js',
    ],
    moduleNameMapper: {
        '^@components/(.*)$': '<rootDir>./src/components/$1',
        '^@hooks/(.*)$': '<rootDir>./src/hooks/$1',
        '^@layout/(.*)$': '<rootDir>./src/layout/$1',
        '^@patterns/(.*)$': '<rootDir>./src/patterns/$1',
        '^@skins/(.*)$': '<rootDir>./src/skins/$1',
        '^@utils/(.*)$': '<rootDir>./src/utils/$1',
        '^@icons/(.*)$': '<rootDir>./src/icons/$1',
    },
};
