<template>
    <div>
        <h1>USER</h1>
        <el-tree :data="menu" show-checkbox node-key="id" :props="defaultProps">
        </el-tree>

    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: null,
            defaultProps: {
                children: 'children',
                label: 'name'
            }
        };
    },
    created() {
        this.menu=[...this.$router.options.routes]
console.log(this.$router.options.routes);
    }
}
</script>

<style>

</style>