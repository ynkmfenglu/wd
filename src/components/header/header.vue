<style>

</style>

<template>
    <!--头部-->
    <div class="app-header">
        <!--头部上部分-->
        <div class="uk-clearfix app-main-border-box app-header-t">
            <!--头部上部分左侧-->
            <div class="uk-float-left">
                <div class="uk-float-left app-hearder-info-l">
                    <span>Hostname:wending.com</span>
                    <span>IP Address:192.168.11.245</span>
                </div>
                <div class="uk-float-left app-hearder-info-l">
                    <span>Date: Jan 13,2016</span>
                    <span>Time: 2:59 pm（cst）</span>
                </div>
                <div class="uk-float-left app-hearder-info-l">
                    <span>User: admin</span>
                    <span>Role:Administrator</span>
                </div>
            </div>
            <!--头部上部分右侧-->
            <div class="uk-float-right">
                <!--头部选择表单部分-->
                <div class="uk-float-left app-hearder-info-r">
                    <label class="uk-float-left">Partition：</label>
                    <div class="uk-button uk-form-select uk-active app-header-select" data-uk-form-select>
                        <span>Common</span>
                        <i class="app-container-icon"></i>
                        <select>
                            <option value="">Common</option>
                            <option value="">option01</option>
                            <option value="">option02</option>
                            <option value="">option03</option>
                        </select>
                    </div>
                </div>
                <!--头部选择表单右侧-->
                <div class="uk-float-left app-hearder-info-r">
                    <a class="app-hearder-a" href=""></a>
                </div>
            </div>
        </div>
        <!--头部logo和菜单栏部分-->
        <div class="uk-clearfix uk-position-relative app-header-b">
            <!--左侧logo部分-->
            <div class="uk-float-left">
                <div class="uk-float-left app-header-logo">
                    <img src="/dist/assets/images/logo.png">
                </div>
                <div class="uk-float-left app-header-logo-right">
                    <p class="uk-position-relative">ONLINE(ACTIVE)</p>
                    <p class="uk-position-relative">Standalone</p>
                </div>
            </div>
            <!--右侧菜单部分-->
            <ul class="uk-float-right app-header-navbar">
                <li class="uk-float-left uk-position-relative">
                    <a class="uk-text-center app-main-border-box app-header-navbar-a active" href="">
                        <i class="app-header-icon"></i>
                        向导
                    </a>
                    <!--子菜单部分(已隐藏)-->
                    <ul class=" app-header-subnav" style="display:none">
                        <li>
                            <a href="#">
                                <i class="app-header-guide-icon app-header-guide-icon1"></i>
                                网络配置向导
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="app-header-guide-icon app-header-guide-icon2"></i>
                                服务器负载
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="app-header-guide-icon app-header-guide-icon3"></i>
                                链路负载
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="uk-float-left uk-position-relative">
                    <a class="uk-text-center app-main-border-box app-header-navbar-a" href="">
                        <i class="app-header-icon app-header-icon2"></i>
                        存盘
                    </a>
                </li>
                <li class="uk-float-left uk-position-relative">
                    <a class="uk-text-center app-main-border-box app-header-navbar-a" href="">
                        <i class="app-header-icon app-header-icon3"></i>
                        帮助
                    </a>
                </li>
                <li class="uk-float-left uk-position-relative">
                    <a class="uk-text-center app-main-border-box app-header-navbar-a" href="">
                        <i class="app-header-icon app-header-icon4"></i>
                        修改密码
                    </a>
                </li>
                <li class="uk-float-left uk-position-relative">
                    <a class="uk-text-center app-main-border-box app-header-navbar-a" href="">
                        <i class="app-header-icon app-header-icon5"></i>
                        注销
                    </a>
                </li>
            </ul>
            <!--loading部分-->
            <div class="app-header-loading">
                <img src="/dist/assets/images/loading.gif">
                <span class="uk-vertical-align-middle">信息加载中，请稍后.....</span>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'app-header',
        data: function() {
            return {}
        }
    }
</script>
