<template>
    <div>
        <h2><i class="el-icon-message"></i> About You</h2>
        <p><i class="el-icon-caret-right"></i><span> 姓名：</span>{{$store.state.form.name}}</p>
        <hr/>
        <p><i class="el-icon-caret-right"></i><span> 性别：</span>{{$store.state.form.gender}}</p>
        <hr/>
        <p><i class="el-icon-caret-right"></i><span> 生日：</span>{{$store.state.form.birthday}}</p>
        <hr/>
        <p><i class="el-icon-caret-right"></i><span> 地区：</span>{{$store.state.form.region}}</p>
        <hr/>
        <p><i class="el-icon-caret-right"></i><span> 职位：</span>{{$store.state.form.job}}</p>
        <hr/>
        <p><i class="el-icon-caret-right"></i><span> 邮箱：</span>{{$store.state.form.email}}</p>
        <hr/>
        <p><i class="el-icon-caret-right"></i><span> 简介：</span>{{$store.state.form.introduction}}</p>
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
    color:#50616d;
    width:45%;
    margin:0 auto;
    border:1px solid #50616d;
    border-radius:6px;
    padding:20px;
    margin-top:100px;
    padding-bottom:45px;
}
hr{
    height:1px;
    border:none;
    background-color:#789262;
}
i{
    color:#88ada6;
}
p{
    padding-top:30px;
   padding-bottom:8px;
    font-size:0.8em;
}
h2{
    text-align:center;
    font-size:0.9em;
}
</style>
