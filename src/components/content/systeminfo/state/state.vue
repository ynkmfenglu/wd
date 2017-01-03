<style>
</style>

<template>
    <!--右侧内容-->
    <div class="app-main-border-box app-container">
        <!--面包屑部分-->
        <div class="app-breadcrumb">
            <ul class="uk-clearfix">
                <li class="uk-float-left">系统信息&nbsp;››&nbsp;</li>
                <li class="uk-float-left">状态&nbsp;››&nbsp;</li>
                <li class="uk-float-left app-breadcrumb-this">
                    <a href="#">虚拟服务状态</a>
                </li>
            </ul>
        </div>
        <!--tab标签部分-->
        <div class="app-tab">
            <ul class="uk-clearfix">
                <li class="uk-float-left uk-position-relative app-breadcrumb-list">
                    <a class="active" href="#">
                        虚拟服务状态
                    </a>
                </li>
                <li class="uk-float-left uk-position-relative app-breadcrumb-list">
                    <a href="#">
                        虚拟链路状态
                    </a>
                </li>
                <li class="uk-float-left uk-position-relative app-breadcrumb-list">
                    <a href="#">
                        全局负载均衡状态
                    </a>
                </li>
                <li class="uk-float-left uk-position-relative app-breadcrumb-list">
                    <a href="#">
                        接口状态
                    </a>
                </li>
            </ul>
        </div>
        <!--标题-->
        <h6 class="uk-clearfix uk-margin-small-top uk-margin-small-bottom app-content-title">
            <!--每一条目-->
            <a class="uk-margin-right" href="#">类型</a>
            <!--select部分-->
            <div class="uk-button uk-form-select app-container-tit-select" data-uk-form-select="">
                <span class="uk-text-left">虚拟服务</span>
                <i class="app-container-icon"></i>
                <select>
                    <option value="">虚拟服务</option>
                    <option value="">00:00</option>
                    <option value="">00:00</option>
                    <option value="">00:00</option>
                </select>
            </div>
        </h6>
        <!--标题-->
        <h6 class="uk-clearfix uk-margin-small-top uk-margin-small-bottom app-content-title">
            <!--每一条目-->
            <a class="uk-margin-right" href="#">自动刷新</a>
            <!--select部分-->
            <div class="uk-button uk-form-select app-container-tit-select" data-uk-form-select="">
                <span class="uk-text-left">00:00</span>
                <i class="app-container-icon"></i>
                <select>
                    <option value="">00:00</option>
                    <option value="">00:00</option>
                    <option value="">00:00</option>
                    <option value="">00:00</option>
                </select>
            </div>
            <!--每一条目-->
            <a class="uk-button app-container-h6-btn" href="#">停止</a>
            <!--每一条目-->
            <a class="uk-button app-container-h6-btn" href="#">刷新</a>
            <!--每一条目-->
            <div class="uk-float-right">
                <a class="app-container-icon app-container-tit-icon"></a>
            </div>
        </h6>
        <!--table部分-->
        <table class="uk-table uk-table-hover uk-text-center app-table" width="100%" cellpadding="0" border="0">
            <thead>
            <tr>
                <th class="uk-table-middle uk-text-center">状态</th>
                <th class="uk-table-middle uk-text-center">名称</th>
                <th class="uk-table-middle uk-text-center">总连连数</th>
                <th class="uk-table-middle uk-text-center">最大连接数</th>
                <th class="uk-table-middle uk-text-center">新建连接数/秒</th>
                <th class="uk-table-middle uk-text-center">接收速率/秒</th>
                <th class="uk-table-middle uk-text-center">发送速率/秒</th>
                <th class="uk-table-middle uk-text-center">HTTP/秒</th>
                <th class="uk-table-middle uk-text-center">SSL/秒(客户端)</th>
                <th class="uk-table-middle uk-text-center">SSL/秒(服务端)</th>
            </tr>
            </thead>
            <tbody>
            <!--每一个tr-->
            <tr>
                <td class="uk-table-middle"></td>
                <td class="uk-table-middle"></td>
                <td class="uk-table-middle"></td>
                <td class="uk-table-middle"></td>
                <td class="uk-table-middle"></td>
                <td class="uk-table-middle"></td>
                <td class="uk-table-middle"></td>
                <td class="uk-table-middle"></td>
                <td class="uk-table-middle"></td>
                <td class="uk-table-middle"></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'systeminfo-state',
        data: function () {
            return {}
        }
    }
</script>
