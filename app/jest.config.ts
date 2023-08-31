export default {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/fileMock.ts',
        '\\.(css|scss)$': '<rootDir>/fileMock.ts',
    },
    setupFilesAfterEnv: ['./jest.setup.ts'],
};
