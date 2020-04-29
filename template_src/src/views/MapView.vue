<template>
  <div id='mapContainer'></div>
</template>

<script>
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

export default {
  name: 'MapView',
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const viewerOption = {
        homeButton: false, // 默认相机位置控件
        timeline: false, // 时间滚动条控件
        navigationHelpButton: false, // 默认的相机控制提示控件
        fullscreenButton: false, // 全屏控件
        infoBox: false, // 双击实体entity时，不显示右上角的实体信息组件
        selectionIndicator: false, // 双击实体entity时，不显示实体提示框组件
        scene3DOnly: true, // 每个几何实例仅以3D渲染以节省GPU内存
        animation: false, // 控制场景动画的播放速度控件
        // 下面几个设置是离线模式下的配置，见 https://github.com/AnalyticalGraphicsInc/cesium/wiki/Offline-Guide
        imageryProvider: new Cesium.TileMapServiceImageryProvider({
          url: Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII') // 离线模式的图层
        }),
        baseLayerPicker: false, // 底图切换控件
        geocoder: false // 地理位置查询定位控件

      }
      const viewer = new Cesium.Viewer(this.$el, viewerOption)
      viewer._cesiumWidget._creditContainer.style.display = 'none' // 隐藏版权
    }
  }
}
</script>

<style scoped>
#mapContainer {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>
