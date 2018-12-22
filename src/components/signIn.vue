<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="6">
        
        <el-form ref="form" :model="form" label-width="80px" size="medium">
          <h2><i class="el-icon-edit"></i> 编辑你的信息</h2>
          <el-form-item label="学号">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio v-model="form.gender" label="男">男</el-radio>
            <el-radio v-model="form.gender" label="女">女</el-radio>
          </el-form-item>
          <el-form-item label="专业">
            <el-select v-model="form.major" placeholder="请选择专业">
              <el-option label="计算机" value="计算机"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"><router-link to="/info">提交</router-link></el-button>
            
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
        <!--<router-link to="/info">个人中心</router-link>-->
    </div>
</template>
<script>

export default {
    name: 'foo',
    // data () {
    //     return {
    //         form: {
    //             name: '',
    //             id: '',
    //             gender: '',
    //             major: ''
    //         }
    //     }
    // },
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
    border:1px solid silver;
    border-radius:6px;
    /*margin-top:100px;*/
    padding:20px;
  }
  h2{
      /*font-weight:normal;*/
      text-align:center;
      font-size:0.8em;
  }
  a{
    text-decoration: none;
    color:white;
  }
</style>
