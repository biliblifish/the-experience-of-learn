<template>
  <div>
    <el-card style="background: #f2f3ff;">
      <div slot="header">PC Source Manage</div>
      <div class="normalSourceWrapper">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="测试" name="test">
            <el-row :gutter="10">
              <el-col :span="8">
                <div class="main-container">
                  <div class="left-item">
                    <img src="../../assets/img/windows.png" height="100px" width="100px" alt="" srcset="">
                  </div>
                  <div class="right-item">
                    <h2 class="item-title">Win 2012</h2>
                    <el-select clear="select" size="mini" v-model="config" placeholder="请选择" clearable>
									    <el-option value="1" label="20G固态 8G内存 显卡2080" ></el-option>
                      <el-option value="2" label="200G机械 16G内存 显卡3060ti" ></el-option>
                      <el-option value="3" label="100G固态 12G内存 显卡2080" ></el-option>
								    </el-select>
                  </div>
                </div>
              </el-col>
              
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="开发" name="develop">开发配置</el-tab-pane>
          <el-tab-pane label="生产" name="produ">生产配置</el-tab-pane>
          <el-tab-pane label="备用" name="spare">以防万一</el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'test',
      config: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>
.main-container{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  height: 120px;
  min-width: 350pxn;
}
.item-title{
  padding: 10px;
  line-height: 50px;
}
</style>