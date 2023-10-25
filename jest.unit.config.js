module.exports = {
    ...require('./jest.base.config'),
    displayName: 'unit',
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/*-test.tsx'],
    testEnvironmentOptions: {url: 'http://test.tuenti.com'},
    setupFilesAfterEnv: [require.resolve('./setup-test-env.tsx'), '@testing-library/jest-dom/extend-expect'],
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
