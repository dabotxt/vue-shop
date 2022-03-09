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
          <el-input v-model="input" type="string" placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search" @click="subMit">
            </el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="addDialog = true" type="primary"
            >添加用户</el-button
          >
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
            <el-switch @change="status" v-model="scope.row.state"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-tooltip
              :enterable="false"
              effect="dark"
              content="修改角色"
              placement="top"
            >
              <el-button
                size="mini"
                type="primary"
                icon="el-icon-edit"
                @click="addDialog22(scope.row.id)"
              ></el-button>
            </el-tooltip>
            <el-tooltip
              :enterable="false"
              effect="dark"
              content="删除角色"
              placement="top"
            >
              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
              ></el-button>
            </el-tooltip>
            <el-tooltip
              :enterable="false"
              effect="dark"
              content="分配角色"
              placement="top"
            >
              <el-button
                size="mini"
                type="warning"
                icon="el-icon-setting"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 添加用户对话框 -->
    </el-card>
    <el-dialog
      title="添加用户"
      :visible.sync="addDialog"
      width="50%"
      @close="addDialogClose"
    >
      <el-form
        :model="addForm"
        :rules="addFormRules"
        ref="addFormRef"
        label-width="70px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passworld">
          <el-input v-model="addForm.passworld"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model="addForm.phone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改用户信息-------------------------------------------------------------------- -->
    <el-dialog title="提示" :visible.sync="addDialog2" width="50%">
      <el-form ref="editFormRef" :model="editForm" label-width="70px" :rules="addFormRules">
        <el-form-item label="用户名">
          <el-input v-model="editForm.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="editForm.phone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialog2 = false">取 消</el-button>
        <el-button type="primary" @click="addDialog2 = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var checkEmail = (rule, value, cb) => {
      //验证邮箱的正则表达式
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if (regEmail.test(value)) {
        return cb();
      }
      cb(new Error("请输入合法的邮箱"));
    };
    var checkPhone = (rule, value, cb) => {
      //验证手机号的正则表达式
      const regPhone =
        /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (regPhone.test(value)) {
        return cb();
      }
      cb(new Error("请输入合法的手机号"));
    };
    return {
      input: '',
      userlist: [
        {
          name: "张三",
          id: 1,
          mail: "1095450045@qq.com",
          phone: 18833123152,
          state: true,
        },
        {
          name: "李四",
          id: 2,
          mail: "1995450045@qq.com",
          phone: 19933123152,
          state: false,
        },
      ],
      addDialog: false, //用户对话框的显示隐藏
      addFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "用户名的长度在3~10个字符之间",
            trigger: "blur",
          },
        ],
        passworld: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 8,
            max: 15,
            message: "密码的长度在8~15个字符之间",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
        ],
        phone: [
          { required: true, message: "请输入电话", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" },
        ],
      },
      addForm: {
        username: "",
        passworld: "",
        email: "",
        phone: "",
      },
      addDialog2: false,
      editForm:{
        username:''
      }
    };
  },
  methods: {
    subMit() {
      let formData = {
        value: ''
      }
      formData.value = this.input
      this.$axios.post('asdasd/asdasd/asd', formData).then((res) => {
        console.log(res)
        if (res === 0) {
          this.$message.success('请求成功')
        } else {
          this.$message.error('请求失败')
        }
      })
    },
    status() {
      this.$message.success("用户状态更新");
    },
    addDialogClose() {
      this.$refs.addFormRef.resetFields();
    },
    addUser() {
      this.$refs.addFormRef.validate((valid) => {
        if (!valid) return;
        this.$message.success("添加成功");
        const addForm2 = {
          name: this.addForm.username,
          id: this.userlist.length + 1,
          mail: this.addForm.email,
          phone: this.addForm.phone,
          state: true,
        };
        this.userlist.push(addForm2);
        this.addDialog = false;
      });
    },
    addDialog22(id) {
      this.addDialog2 = true;
      console.log(id);
      this.editForm = {
        username:'666',
        email: '99',
        phone: '132'
      }
    },
  },
};
</script>

<style>
</style>
