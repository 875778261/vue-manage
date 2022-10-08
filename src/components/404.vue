<template>
    <div class="notfound">
        <div class="wrapper">
            <div class="big">
                页面不见了！
            </div>
            <div>
                到首页去！，<router-link to="/">点击这里</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.notfound {
    width:auto;
    height: 100%;
    background: url('../assets/404.jpg') center no-repeat;
    background-position: right top;
    background-repeat: no-repeat;
}

.notfound.wrapper{
    position: absolute;
    top: 60%;
    right: 2%;
    width: 635px;
    padding: 20px;
    
}
.notfound .wrapper .big{
font-size: 60px;
font-weight: 700;
line-height: 100px;
margin-bottom: 48;
}
 .notfound .wrapper a{
    color: rgb(26, 237, 33);
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
} 
</style>