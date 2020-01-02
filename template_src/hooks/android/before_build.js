const fs = require('fs')
const path = require('path')

/**
 * 替换maven仓库为阿里云镜像地址，加速国内构建过程
 */

let gradleFilePath
let gradleFileData
let newGradleFileData

gradleFilePath = path.join(process.cwd(), 'platforms', 'android', 'build.gradle')
gradleFileData = fs.readFileSync(gradleFilePath, 'utf-8')
newGradleFileData = gradleFileData.replace(/google\(\)/g, "maven { url 'https:\/\/maven.aliyun.com\/repository\/google' }")
newGradleFileData = newGradleFileData.replace(/jcenter\(\)/g, "maven { url 'https:\/\/maven.aliyun.com\/repository\/jcenter' }")
fs.writeFileSync(gradleFilePath, newGradleFileData)

gradleFilePath = path.join(process.cwd(), 'platforms', 'android', 'app', 'build.gradle')
gradleFileData = fs.readFileSync(gradleFilePath, 'utf-8')
newGradleFileData = gradleFileData.replace(/google\(\)/g, "maven { url 'https:\/\/maven.aliyun.com\/repository\/google' }")
newGradleFileData = newGradleFileData.replace(/jcenter\(\)/g, "maven { url 'https:\/\/maven.aliyun.com\/repository\/jcenter' }")
newGradleFileData = newGradleFileData.replace(/mavenCentral\(\)/g, "maven { url 'https:\/\/maven.aliyun.com\/repository\/central' }")
fs.writeFileSync(gradleFilePath, newGradleFileData)

gradleFilePath = path.join(process.cwd(), 'platforms', 'android', 'CordovaLib', 'build.gradle')
gradleFileData = fs.readFileSync(gradleFilePath, 'utf-8')
newGradleFileData = gradleFileData.replace(/google\(\)/g, "maven { url 'https:\/\/maven.aliyun.com\/repository\/google' }")
newGradleFileData = newGradleFileData.replace(/jcenter\(\)/g, "maven { url 'https:\/\/maven.aliyun.com\/repository\/jcenter' }")
fs.writeFileSync(gradleFilePath, newGradleFileData)
