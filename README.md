# cordova-template-cesium

cordova配合vue和cesium的工程模板。

## 如何使用

```bash
cordova create myapp --template git+https://gitlab.alvisisme.com/cordova/cordova-template-cesium
cd myapp
yarn install
yarn build
cordova platform add android
cordova prepare android
cordova run android
```

## 参考引用

* [Cordova Template Guide](https://cordova.apache.org/docs/en/latest/guide/cli/template.html)
* [Cordova hello world app](https://github.com/apache/cordova-app-hello-world)