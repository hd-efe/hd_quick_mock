<template>
  <div class="card">
    <p class="name">{{name}}</p>
    <p class="url">项目id:{{projectID}}</p>
    <p class="url">访问url:{{baseUrl}}</p>
    <div class="operation">
      <div title="编辑" @click="toEdit">
        <a-icon type="edit" />
      </div>
      <div title="收藏">
        <a-icon type="heart" />
      </div>
      <div title="删除">
        <a-icon type="delete" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./project.ts"></script>
<style lang="less">
.card {
  color: #40a9ff;
  width: 280px;
  float: left;
  border-radius: 6px;
  padding: 12px;
  margin: 12px 10px;
  background: white;
  p.name {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: #0d1a26;
    margin-bottom: 10px;
  }
  p.url {
    background: white;
    color: rgba(0, 0, 0, 0.85);
    margin: 0;
    font-size: 14px;
    padding: 10px 8px;
    border-radius: 5px;
    // margin-bottom: 10px;
  }
  .operation {
    display: flex;
    border: 1px solid #40a9ff;
    padding: 6px 0;
    border-radius: 6px;
    div {
      flex: 1;
      cursor: pointer;
      text-align: center;
    }
  }
}
</style>