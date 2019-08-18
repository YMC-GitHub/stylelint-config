module.exports = {

  "plugins": [

    "stylelint-order",

    "stylelint-suitcss",

  ],

  "rules": {

    "at-rule-empty-line-before": [ "always", {

      except: ["blockless-after-blockless"],

    } ],

    "at-rule-no-vendor-prefix": true,

    "block-closing-brace-newline-after": "always",

    "block-closing-brace-newline-before": "always-multi-line",

    "block-closing-brace-space-before": "always-single-line",

    "block-no-empty": true,

    "block-opening-brace-newline-after": "always-multi-line",

    "block-opening-brace-space-after": "always-single-line",

    "block-opening-brace-space-before": "always",

    "color-hex-case": "lower",

    "color-hex-length": "short",

    "color-no-invalid-hex": true,

    "comment-empty-line-before": "always",

    "comment-whitespace-inside": "always",

    "declaration-bang-space-after": "never",

    "declaration-bang-space-before": "always",

    "declaration-block-no-shorthand-property-overrides": true,

    "declaration-block-semicolon-newline-after": "always-multi-line",

    "declaration-block-semicolon-space-after": "always-single-line",

    "declaration-block-semicolon-space-before": "never",

    "declaration-block-single-line-max-declarations": 1,

    "declaration-block-trailing-semicolon": "always",

    "declaration-colon-newline-after": "always-multi-line",

    "declaration-colon-space-after": "always-single-line",

    "declaration-colon-space-before": "never",

    "function-calc-no-unspaced-operator": true,

    "function-comma-newline-after": "always-multi-line",

    "function-comma-space-after": "always-single-line",

    "function-comma-space-before": "never",

    "function-linear-gradient-no-nonstandard-direction": true,

    "function-parentheses-newline-inside": "always-multi-line",

    "function-parentheses-space-inside": "never-single-line",

    "function-whitespace-after": "always",

    "function-url-quotes": "always",

    "indentation": 2,

    "max-empty-lines": 1,

    "max-line-length": [ 80, {

      ignore: "non-comments",

    } ],

    "media-feature-colon-space-after": "always",

    "media-feature-colon-space-before": "never",

    "media-feature-name-no-vendor-prefix": true,

    "media-feature-parentheses-space-inside": "never",

    "media-feature-range-operator-space-after": "always",

    "media-feature-range-operator-space-before": "always",

    "media-query-list-comma-newline-after": "always-multi-line",

    "media-query-list-comma-space-after": "always-single-line",

    "media-query-list-comma-space-before": "never",

    "no-eol-whitespace": true,

    "no-missing-end-of-source-newline": true,

    "number-leading-zero": "always",

    "number-no-trailing-zeros": true,

    "length-zero-no-unit": true,

    "order/properties-alphabetical-order": true,

    "property-no-vendor-prefix": true,

    "rule-empty-line-before": "always-multi-line",

    "selector-combinator-space-after": "always",

    "selector-combinator-space-before": "always",

    "selector-list-comma-newline-after": "always",

    "selector-list-comma-space-before": "never",

    "selector-no-vendor-prefix": true,

    "selector-pseudo-element-colon-notation": "double",

    "suitcss/custom-property-no-outside-root": true,

    "suitcss/root-no-standard-properties": true,

    "suitcss/selector-root-no-composition": true,

    "string-quotes": "double",

    "value-list-comma-newline-after": "always-multi-line",

    "value-list-comma-space-after": "always-single-line",

    "value-list-comma-space-before": "never",

    "value-no-vendor-prefix": true,

  },

}