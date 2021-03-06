module.exports = {
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileMocks.js"
  },
  testEnvironment: 'jsdom',
};