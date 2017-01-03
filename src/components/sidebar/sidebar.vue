<style>

</style>

<template>
    <!--侧边栏部分-->
    <div class="app-sidebar" v-on:click="activeMenu">
        <ul>
            <!-- 一级菜单 -->
            <li class="app-sidebar-list" v-for="(item1, index) in root.children" v-bind:key="item1.id">
                <a class="app-sidebar-a"
                    v-bind:class="item1.active ? 'active' : ''"
                    v-bind:data-menu-id="item1.id"
                    v-bind:data-menu-parentId="item1.parentId">
                    <i class="app-sidebar-icon" v-bind:class="'app-sidebar-icon'+(index+1)"></i>
                    {{ item1.name }}
                </a>
                <ul class="uk-clearfix app-sidebar-submenu" v-show="item1.expand">
                    <!-- 二级菜单 -->
                    <li class="uk-float-right uk-position-relative app-sidebar-hover-1"
                        v-for="(item2, index) in item1.children" v-bind:key="item2.id">
                        <a  v-bind:class="item2.active ? 'active' : ''"
                            v-bind:data-menu-id="item2.id"
                            v-bind:data-menu-path="item2.path">
                            {{ item2.name }}
                            <i v-if="item2.children" class="app-container-icon app-sidebar-icon-arrow"></i>
                        </a>
                        <ul v-if="item2.children" class="app-sidebar-submenu-2">
                            <!-- 三级菜单 -->
                            <li class="uk-position-relative app-sidebar-hover-2"
                                v-for="(item3, index) in item2.children" v-bind:key="item3.id">
                                <a href="javascript:;"
                                   v-bind:class="item3.active ? 'active' : ''"
                                   v-bind:data-menu-id="item3.id"
                                   v-bind:data-menu-path="item3.path">
                                    {{ item3.name }}
                                    <i v-if="item3.children" class="app-container-icon app-sidebar-icon-arrow"></i>
                                </a>
                                <ul v-if="item3.children" class=" app-sidebar-submenu-3">
                                    <!-- 四级菜单 -->
                                    <li class="uk-position-relative"
                                        v-for="(item4, index) in item3.children">
                                        <a class="app-sidebar-plus" href="javascript:;">
                                            {{ item4.name }}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>

    let root = {
        active: true,
        expand: true,
        children: [
            {
                name: '系统信息',
                expand: true,
                active: true,
                children:[
                    {
                        name: '概况',
                        active: true,
                        path: '/overview'
                    }, {
                        name: '状态',
                        path: '/state',
                        children:[
                            {
                                name: '虚拟服务状态',
                                path: '/state'
                            }, {
                                name: '虚拟链路状态',
                            }, {
                                name: '全局负载均衡状态',
                            }, {
                                name: '接口状态',
                            }
                        ]
                    }, {
                        name: '统计信息',
                        children:[
                            {
                                name: '虚拟服务统计',
                            }, {
                                name: '虚拟链路统计',
                            }, {
                                name: 'DNS统计',
                            }, {
                                name: '系统统计',
                            }, {
                                name: '缓存统计',
                            }, {
                                name: '压缩统计',
                            }
                        ]
                    }, {
                        name: '会话监控',
                        children:[
                            {
                                name: '会话统计',
                            }, {
                                name: '标准会话',
                            }, {
                                name: '代理会话',
                            }, {
                                name: '流量统计',
                            }
                        ]
                    }
                ]
            }, {
                name: '模板和对象',
                expand: false,
                children: [
                    {
                        name: '对象管理',
                        children:[
                            {
                                name: '时间对象',
                            }, {
                                name: '服务对象',
                            }, {
                                name: '地址对象',
                            }, {
                                name: '应用对象',
                            }, {
                                name: 'ISP地址库'
                            }
                        ]
                    }, {
                        name: '路由策略'
                    }, {
                        name: '会话保持'
                    }, {
                        name: '健康检查',
                        children:[
                            {
                                name: '健康检查列表',
                            }, {
                                name: '默认健康检查'
                            }
                        ]
                    }, {
                        name: 'tRules'
                    }
                ],
            }, {
                name: '服务器负载',
                expand: false,
                children: [
                    {
                        name: '虚拟服务',
                        children: [
                            {
                                name: '虚拟服务',
                            }, {
                                name: '虚拟地址',
                            }, {
                                name: '状态',
                            }
                        ]
                    }, {
                        name: '服务池',
                        children: [
                            {
                                name: '服务池',
                            }, {
                                name: '状态',
                            }
                        ]
                    }, {
                        name: '服务器节点',
                        children: [
                            {
                                name: '服务器节点',
                            }, {
                                name: '状态',
                            }
                        ]
                    }, {
                        name: '模板',
                        children: [
                            {
                                name: '服务',
                            }, {
                                name: '协议',
                            }, {
                                name: '内容交换'
                            }
                        ]
                    }, {
                        name: '应用加速',
                        children: [
                            {
                                name: 'TCP连接复用',
                            }, {
                                name: 'SSL',
                            }, {
                                name: 'HTTP压缩'
                            }, {
                                name: 'WEB缓存',
                            }, {
                                name: '智能终端加速',
                            }, {
                                name: 'SSL证书'
                            }
                        ]
                    }
                ]
            }, {
                name: '链路负载',
                expand: false,
                children: [
                    {
                        name: '虚拟链路'
                    }, {
                        name: '链路池'
                    }, {
                        name: '链路节点'
                    }, {
                        name: 'DNS代理'
                    }, {
                        name: '动态就近性'
                    }
                ]
            }, {
                name: '智能DNS',
                expand: false,
                children: [
                    {
                        name: 'DNS服务器',
                        children: [
                            {
                                name: '基础配置'
                            }, {
                                name: 'DNS转发'
                            }, {
                                name: 'DNS Zones'
                            }, {
                                name: '静态就近性策略'
                            }
                        ]
                    }, {
                        name: '本地负载',
                        children: [
                            {
                                name: '域名映射'
                            }, {
                                name: '静态就近性策略'
                            }
                        ]
                    }, {
                        name: '全局负载',
                        children: [
                            {
                                name: '数据中心'
                            }, {
                                name: 'DNS地址池'
                            }, {
                                name: '域名映射'
                            }, {
                                name: '静态就近性策略'
                            }
                        ]
                    }, {
                        name: '公共对象',
                        children: [
                            {
                                name: '用户区域'
                            }, {
                                name: '入站链路'
                            }
                        ]
                    }
                ]
            }, {
                name: '网络配置',
                expand: false,
                children: [
                    {
                        name: '接口',
                        children: [
                            {
                                name: '物理接口列表'
                            }, {
                                name: 'VLAN列表'
                            }, {
                                name: '链路聚合列表'
                            }, {
                                name: 'Loopback接口'
                            }, {
                                name: 'IPv4'
                            }
                        ]
                    }, {
                        name: '路由',
                        children: [
                            {
                                name: '静态路由'
                            }, {
                                name: '动态路由'
                            }, {
                                name: '路由表'
                            }, {
                                name: 'IPv6前缀公告'
                            }
                        ]
                    }, {
                        name: 'ARP',
                        children: [
                            {
                                name: '静态ARP'
                            }
                        ]
                    }, {
                        name: 'NAT',
                        children: [
                            {
                                name: 'NAT规则'
                            }, {
                                name: 'NAT地址池'
                            }, {
                                name: '端口管理'
                            }
                        ]
                    }, {
                        name: '协议管理'
                    }, {
                        name: '网络调试',
                        children: [
                            {
                                name: 'Web调试'
                            }, {
                                name: '路由跟踪'
                            }, {
                                name: 'DNS探测'
                            }, {
                                name: '链路探测'
                            }, {
                                name: '自定义抓包'
                            }
                        ]
                    }
                ]
            }, {
                name: '安全功能',
                expand: false,
                children: [
                    {
                        name: '防火墙',
                        children: [
                            {
                                name: '安全策略'
                            }, {
                                name: '安全防护表'
                            }, {
                                name: '策略配置'
                            }
                        ]
                    }, {
                        name: '防攻击'
                    }, {
                        name: 'HTTP防护',
                        children: [
                            {
                                name: 'HTTP防护表'
                            }, {
                                name: 'HTTP防护规则'
                            }, {
                                name: 'HTTP浪涌保护'
                            }, {
                                name: 'HTTP连接确认'
                            }, {
                                name: '配置'
                            }
                        ]
                    }
                ]
            }, {
                name: '系统管理',
                expand: false,
                children: [
                    {
                        name: '配置',
                        children: [
                            {
                                name: '设置'
                            }, {
                                name: '系统监控'
                            }, {
                                name: '时间配置'
                            } , {
                                name: 'DNS'
                            }, {
                                name: '备份恢复'
                            } , {
                                name: '告警邮件配置'
                            }, {
                                name: '问题反馈'
                            }, {
                                name: '设备重启'
                            }
                        ]
                    }, {
                        name: '管理员',
                        children: [
                            {
                                name: '管理员'
                            }, {
                                name: '管理员权限表'
                            }, {
                                name: '认证服务器'
                            }, {
                                name: '在线信息'
                            }
                        ]
                    }, {
                        name: '版本管理',
                        children: [
                            {
                                name: '固件版本'
                            }, {
                                name: '特征库版本'
                            }
                        ]
                    }, {
                        name: '许可管理'
                    }, {
                        name: '高可靠性',
                        children: [
                            {
                                name: '配置'
                            }, {
                                name: '配置同步'
                            }, {
                                name: '连接同步'
                            }, {
                                name: '故障检测'
                            }, {
                                name: '监控'
                            }
                        ]
                    }, {
                        name: 'VRRP'
                    }, {
                        name: 'SNMP'
                    }, {
                        name: '日志管理',
                        children: [
                            {
                                name: '系统事件'
                            }, {
                                name: '负载均衡'
                            }, {
                                name: '应用加速'
                            }, {
                                name: '安全'
                            }, {
                                name: '选项'
                            }
                        ]
                    }
                ]
            }, {
                name: '报表功能',
                expand: false,
                children: [
                    {
                        name: '报表配置',
                        children: [
                            {
                                name: '手动任务'
                            }, {
                                name: '自动任务'
                            }, {
                                name: '模板'
                            }, {
                                name: '定制'
                            }
                        ]
                    }, {
                        name: '报表查看',
                        children: [
                            {
                                name: '手动报表'
                            }, {
                                name: '自动报表'
                            }
                        ]
                    }
                ]
            }
        ],
    };

    eachNode(root, 0, -1);
    // 初始化赋初值
    function eachNode(node, id, parentId) {
        if (!node.id) {
            node.id = id + '';
            node.parentId = parentId
            node.active = !!node.active
        }
        if (node.children && node.children.length > 0) {
            node.children.forEach(function(v, i){
                // 递归
                eachNode(v, id + '_' + i, id + '');
            });
        }
    }

    // 设置选中
    function setActive(node, arr) {
        if (arr.indexOf(node.id) !== -1) {
            node.active = true;
        } else {
            node.active = false;
        }
        if (node.children && node.children.length > 0) {
            node.children.forEach(function(v, i) {
                // 递归
                setActive(v, arr);
            });
        }
    }

    // 设置展开收起
    function toggleMenu(node, id) {
        node.children.forEach(function(v, i) {
            if (v.id === id) {
                v.expand = !v.expand;
            } else {
                v.expand = false;
            }
        });
    }

    // 获取id数组
    function getIds(id) {
        var arr = [id];
        function cutId(id) {
            var idx = id.lastIndexOf('_');
            if (idx !== -1) {
                var subId = id.substr(0, idx);
                arr.unshift(subId);
                cutId(subId);
            }
        }
        cutId(id);
        return arr;
    }

    // !!! data作用域很麻烦啊, 容易绑定不上 computed补充了字段后就无法使用了

    export default {
        name: 'app-sidebar',
        data: function() {
            return {
                root: root
            }
        },
        methods: {
            activeMenu: function(event) {
                var target = event.target,
                    path = target.getAttribute('data-menu-path'),
                    id = target.getAttribute('data-menu-id'),
                    parentId = target.getAttribute('data-menu-parentId');
                // 展开收起二级菜单
                if (parentId == 0) {
                    toggleMenu(this.root, id);
                }
                // 设置选中
                else if (id) {
                    setActive(this.root, getIds(id));
                    // 切换路由
                    path && this.$router.push(path);
                }
            }
        }
    }
</script>
