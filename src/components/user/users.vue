<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <el-table border :data="userlist" stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="mail" label="邮箱"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="name" label="角色"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.state"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作"> 
            <template>
                <el-tooltip :enterable="false" effect="dark" content="修改角色" placement="top">
                    <el-button size="mini" type="primary" icon="el-icon-edit"></el-button>
                </el-tooltip>
                <el-tooltip :enterable="false" effect="dark" content="删除角色" placement="top">
                    <el-button size="mini" type="danger" icon="el-icon-delete"></el-button>
                </el-tooltip>
                <el-tooltip :enterable="false" effect="dark" content="分配角色" placement="top">
                    <el-button size="mini" type="warning" icon="el-icon-setting"></el-button>
                </el-tooltip>
            </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userlist: [
        {
          name: "张三",
          id: 1,
          mail: "1095450045@qq.com",
          phone: 18833123152,
          state: true,
        },
        {
          name: "张三",
          id: 2,
          mail: "1095450045@qq.com",
          phone: 18833123152,
          state: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>