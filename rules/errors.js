module.exports = {
    rules: {
        //颜色
        "color-no-invalid-hex": true,
        //字体
        "font-family-no-duplicate-names": true,
        "font-family-no-missing-generic-family-keyword": true,
        //函数
        "function-calc-no-invalid":true,
        "function-calc-no-unspaced-operator": true,
        "function-linear-gradient-no-nonstandard-direction":true,
        //字符
        "string-no-newline": true,
        //单位
        "unit-no-unknown":true,
        //属性
        "property-no-unknown": true,
        //动画
        "keyframe-declaration-no-important": true,
        //声明
        "declaration-block-no-duplicate-properties": [
          true,
          {
            ignore: ["consecutive-duplicates-with-different-values"]
          }
        ],
        "declaration-block-no-shorthand-property-overrides": true,
        "block-no-empty": true,
        //选器
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-element-no-unknown": true,
        "selector-type-no-unknown": true,
        //媒体
        "media-feature-name-no-unknown":true,
        //语句
        "at-rule-no-unknown": true,
        //注释
        "comment-no-empty": true,
        //通用
        "no-descending-specificity": true,
        "no-duplicate-at-import-rules": true,
        "no-duplicate-selectors": true,
        "no-empty-source": true,
        "no-extra-semicolons": true,
        "no-invalid-double-slash-comments": true,
    }
}