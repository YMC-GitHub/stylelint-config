### download as local module
```sh
npm install --save-dev stylelint stylelint-config-yemiancheng
```

### make a configurantion file
Add "extends": "stylelint-config-yemiancheng" to your stylelint.config.js
```sh
echo "module.exports = {extends: ['stylelint-config-yemiancheng']};" > stylelint.config.js
```

### for linting scss file
01.install lib `stylelint-scss`
02.Add "extends": "stylelint-config-yemiancheng/scss.js" to your stylelint.config.js
```sh
npm install --save-dev stylelint stylelint-scss stylelint-config-yemiancheng
echo "module.exports = {extends: ['stylelint-config-yemiancheng/scss.js']};" > stylelint.config.js
```