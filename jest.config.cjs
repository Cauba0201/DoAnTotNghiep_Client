module.exports = {
    preset: 'ts-jest', // Sử dụng ts-jest cho TypeScript
    testEnvironment: 'jsdom', // Giả lập DOM cho React
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Xử lý import CSS
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest', // Chuyển đổi file TypeScript
    },
};
