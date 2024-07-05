<template>
    <div>
        <div class="end">
            <ul>
                <li><a href=""><HomeFilled style="width: 15px;height: 15px;padding-top: 5px;" /> 上海不加班网络科技有限公司 (私有部署版本)</a></li>
                <li>|</li>
                <li><a href=""><List style="width: 15px;height: 15px;padding-top: 5px;" /> 沪ICP备15039333号</a></li>
                <li>|</li>
                <li><a href=""><InfoFilled style="width: 15px;height: 15px;padding-top: 5px;" /> 20230412.1</a></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import { InfoFilled, HomeFilled, List } from "@element-plus/icons-vue";
</script>
<style scoped>
    a {
        text-decoration: none;
        color: black;
    }

    .end ul li {
        margin: 0px 5px;
        display: flex;
        align-items: center;
    }

    .end ul li a:hover {
        color: #409EFF;
    }

    .end ul {
        display: flex;
        text-decoration: none;
        list-style: none;
    }

    .end {
        width: 800px;
        margin-top: 12px;
        margin-left: 1000px;
    }
</style>