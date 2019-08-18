module.exports = {
  extends: ["./stylelint.config.js"],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    //...
    // see more rules
    //https://github.com/kristerkari/stylelint-scss
    //https://github.com/palantir/stylelint-config-palantir
  }
};