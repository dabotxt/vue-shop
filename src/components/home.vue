<template>
    <el-container class="container_top">
        <el-header>
            <div>
                <img src="../assets/1111.jpg" alt="">
                <span>电商管理系统后台</span>
            </div>
            <el-button @click="logout" type="info">退出</el-button>
        </el-header>
        <el-container>
            <el-aside :width="iscoll ? '64px' : '200px'">
                <div class="toggle-button" @click="toggle">|||</div>
                <el-menu :collapse="iscoll"
                 :unique-opened="true" 
                background-color="#333744"
                 text-color="#fff" 
                active-text-color="#409EFF"
                :collapse-transition="false"
                :router="true"
                :default-active="activePath"
                >
                    <el-submenu index="1" v-for="item in menulist" :index="item.id + ''" :key="item.id">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item @click="savenav('/' + subitem.path)" :index="subitem.path" v-for="subitem in item.children" :key="subitem.id">
                            <i class="el-icon-menu"></i>
                            <span>{{subitem.names}}</span>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <!-- //路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                activePath: '',//被激活的链接地址
                iscoll: false,
                menulist: [
                    {
                        name: '用户管理',
                        id: 1,
                        children: [
                            {
                                id: '11',
                                names: '用户列表',
                                path: 'users'
                            }
                        ]


                    },
                    {
                        name: '权限管理',
                        id: 2,
                        children: [
                            {
                                id: '21',
                                names: '角色列表',
                                path: 'users2'
                            },
                            {
                                id: '22',
                                names: '权限列表',
                                path: 'users3'
                            }
                        ]
                    },
                    {
                        name: '商品管理',
                        id: 3,
                        children: [
                            {
                                id: '31',
                                names: '商品列表',
                                path: 'users4'
                            },
                            {
                                id: '32',
                                names: '分类参数',
                                path: 'users5'
                            },
                            {
                                id: '33',
                                names: '商品分类',
                                path: 'users6'
                            }
                        ]
                    }, {
                        name: '订单管理',
                        id: 4,
                        children: [
                            {
                                id: '41',
                                names: 'test1',
                                path: 'users7'
                            }
                        ]
                    }
                    , {
                        name: '数据统计',
                        id: 5,
                        children: [
                            {
                                id: '51',
                                names: 'test1',
                                path: 'users8'
                            }
                        ]
                    }
                ]
            }
        },
        created() {
            this.activePath = window.sessionStorage.getItem('path')
        },
        methods: {
            logout() {
                window.sessionStorage.clear();
                this.$router.push("/login");
            },
            toggle() {
                //点击切换菜单折叠展开
                this.iscoll = ! this.iscoll
                console.log(this.iscoll)
            },
            savenav(path) {
               
                window.sessionStorage.setItem('path', path)
                this.activePath = path
                console.log(this.activePath)
            }
        },
    };
</script>

<style lang="less" scope>
    .container_top {
        height: 100%;
    }

    .el-header {
        background-color: #373d41;
        display: flex;
        justify-content: space-between;
        padding-left: 0%;
        align-items: center;
        color: #fff;
        font-size: 20px;
    }

    .el-header div {
        display: flex;
        align-items: center;
    }

    .el-header img {
        width: 6%;
    }

    .el-header span {
        margin-left: 15px;
    }

    .el-aside {
        background-color: #333744;
    }

    .el-aside .el-menu {
        border-right: none;
    }

    .el-main {
        background-color: #eaedf1;
    }

    .toggle-button {
        background-color: #4A5064;
        color: #fff;
        text-align: center;
        font-size: 10px;
        line-height: 24px;
        letter-spacing: 0.2em;
        cursor: pointer;
    }
</style>