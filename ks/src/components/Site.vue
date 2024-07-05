<template>
  <el-row :gutter="10">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="2">
    </el-col>
    <el-col :xs="8" :sm="12" :md="16" :lg="18" :xl="20">
      <slot></slot>
    </el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="2">
    </el-col>
  </el-row>
</template>

<script setup>

</script>

<style scoped>
  .el-row {
    border-top: 1px solid  rgb(194, 188, 188);
    border-bottom: 1px solid  rgb(194, 188, 188);
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>