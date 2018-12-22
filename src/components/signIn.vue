<template>
  <div>
    <h2><i class="el-icon-edit"></i> 客从何处来</h2>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-form ref="form" :model="form" label-width="40px">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="form.gender" placeholder="请选择">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="生日">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
          </el-form-item>
          <el-form-item label="地区">
            <el-input v-model="form.region"></el-input>
          </el-form-item>
          <el-form-item label="职位">
            <el-input v-model="form.job"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="简介">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="form.introduction">
            </el-input>
          </el-form-item>
          <el-button><router-link to="/info">登录</router-link></el-button>
        </el-form>
      </el-col>
    </el-row>

  </div>
</template>
<script>

export default {
    name: 'foo',
    computed:{
      form:{
        get () {
          return this.$store.state.form
        },
        set (value) {
          this.$store.commit('updateMessage',value)
        }
      }
    }
}
</script> 

<style scoped>
  .el-form{
    /*border:1px solid silver;*/
    border-radius:12px;
    padding-top:35px;
    padding-bottom:35px;
    padding-left:120px;
    padding-right:120px;
  }
  h2{
    color:#bbcdc5;
    margin-top:100px;
    margin-bottom:18px;
    text-align:center;
    font-size:1.2em;
    font-family:"Microsoft YaHei", 微软雅黑;
    font-weight:normal;
  }
  a{
    text-decoration: none;
    color:white;
  }
  button{
    width:100%;
    border-radius:6px;
    background-color:#88ada6;
    /*width:500px;*/
  }
  button:hover{
    border-color:#75878a;
    background-color:#88ada6;
  }
</style>
