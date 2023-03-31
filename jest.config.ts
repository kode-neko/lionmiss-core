import type {Config} from '@jest/types'

const config: Config.InitialOptions = {
    testPathIgnorePatterns: ['node_modules', '<rootDir>/dist', "<rootDir>/build"],
    transform: {
        "\.(ts|tsx|jsx)$": "ts-jest"
    }
}

export default config