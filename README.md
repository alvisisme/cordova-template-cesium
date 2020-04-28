# cordova-template-cesium

[![Build Status](https://img.shields.io/travis/com/alvisisme/cordova-template-cesium?style=flat-square)](https://travis-ci.com/alvisisme/cordova-template-cesium)

cordova配合vue和cesium的工程模板。

## 如何使用

```bash
cordova create myapp --template git+https://github.com/alvisisme/cordova-template-cesium.git
cd myapp
yarn install
yarn build
cordova platform add android
cordova prepare android
cordova build android
cordova run android
```

## 参考引用

* [Cordova Template Guide](https://cordova.apache.org/docs/en/latest/guide/cli/template.html)
* [Cordova hello world app](https://github.com/apache/cordova-app-hello-world)