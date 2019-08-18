module.exports = {
    rules: {
        //颜色
        "color-hex-case": "lower",
        "color-hex-length": "short",
        //字体
        "font-family-name-quotes":null,
        "font-weight-notation":null,
        //函数
        "function-comma-newline-after": "always-multi-line",
        "function-comma-newline-before":null,
        "function-comma-space-after": "always-single-line",
        "function-comma-space-before": "never",
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never-single-line",
        "function-url-quotes":null,
        "function-whitespace-after": "always",
        //数值
        "number-leading-zero": "always",
        "number-no-trailing-zeros": true,
        //字符
        "string-quotes": "double",
        //长度
        "length-zero-no-unit": true,
        //单位
        "unit-case": "lower",
        //取值
        "value-keyword-case":null,
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-newline-before":null,
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never",
        "value-list-max-empty-lines":null,
        //属性
        "custom-property-empty-line-before": [ "always", {
          except: [
            "after-custom-property",
            "first-nested",
          ],
          ignore: [
            "after-comment",
            "inside-single-line-block",
          ],
        } ],
        "property-case": "lower",
        //声明
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        "declaration-empty-line-before": [ "always", {
          except: [
            "after-declaration",
            "first-nested",
          ],
          ignore: [
            "after-comment",
            "inside-single-line-block",
          ],
        } ],
        "declaration-block-semicolon-newline-after": "always-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": "always",
        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always-multi-line",
        "block-closing-brace-space-after": null,
        "block-closing-brace-space-before": "always-single-line",
        "block-opening-brace-newline-after": "always-multi-line",
        "block-opening-brace-newline-before":null,
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always",
        //选器
        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-attribute-quotes":null,
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-descendant-combinator-no-non-space": true,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "selector-type-case": "lower",
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-newline-before":null,
        "selector-list-comma-space-after": "never",
        "selector-list-comma-space-before": null,

        "selector-max-empty-lines": 0,
        //规则
        "rule-empty-line-before": [ "always-multi-line", {
          except: ["first-nested"],
          ignore: ["after-comment"],

        } ],
        //媒体
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-case": "lower",
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-newline-before": null,
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never",
        //语句
        "at-rule-empty-line-before": [ "always", {
          except: [
            "blockless-after-same-name-blockless",
            "first-nested",
          ],
          ignore: ["after-comment"],
        } ],
        "at-rule-name-case": "lower",
        "at-rule-name-newline-after":null,
        "at-rule-name-space-after": "always-single-line",
        "at-rule-semicolon-newline-before": null,
        "at-rule-semicolon-newline-after": "always",
        //注释
        "comment-empty-line-before": [ "always", {
          except: ["first-nested"],
          ignore: ["stylelint-commands"],
        } ],
        "comment-whitespace-inside": "always",
        //通用
        "indentation": 2,
        "linebreaks":null,
        "max-empty-lines": 1,
        "max-line-length":null,
        "no-eol-whitespace": true,
        "no-missing-end-of-source-newline": true,
        "no-empty-first-line":true,
    }
}