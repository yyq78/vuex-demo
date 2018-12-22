<template>
    <div>
        <h2><i class="el-icon-message"></i> About you</h2>
        <p><i class="el-icon-circle-check-outline"></i><span> 学号：</span>{{$store.state.form.id}}</p>
        <hr/>
        <p><i class="el-icon-circle-check-outline"></i><span> 姓名：</span>{{$store.state.form.name}}</p>
        <hr/>
        <p><i class="el-icon-circle-check-outline"></i><span> 性别：</span>{{$store.state.form.gender}}</p>
        <hr/>
        <p><i class="el-icon-circle-check-outline"></i><span> 专业：</span>{{$store.state.form.major}}</p>
        <hr/>
    </div>
    
</template>
<script>
export default {
    name: 'info'
}
</script> 

<style scoped>
div{
    width:45%;
    margin:0 auto;
    border:1px solid #409EFF;
    border-radius:6px;
    padding:20px;
    margin-top:100px;
}
hr{
    height:1px;
    border:none;
    background-color:#409EFF;
}
i{
    color:#409EFF;
}
p{
    font-size:0.8em;
}
h2{
    text-align:center;
    font-size:0.9em;
}
</style>
