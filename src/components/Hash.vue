<template>
  <el-row class="root">
    <el-container class="container">
      <el-main>
        <el-row>
          <el-col :span="3"><p></p></el-col>
          <el-col :span="18">
            <el-row>
              <h1>{{ title }}</h1>
            </el-row>
            <el-row>
              <el-input
                placeholder="Please input the text"
                v-model="text"
              ></el-input>
            </el-row>
            <el-row>
              <el-input placeholder="HMAC key" v-model="key"></el-input>
            </el-row>
            <br />
            <el-row>
              <el-col :span="4">
                <span class="input-label"></span>
              </el-col>
              <el-col :span="10">
                <span class="input-label">Hash</span>
              </el-col>
              <el-col :span="10">
                <span class="input-label">HMAC</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <span class="input-label">MD5</span>
              </el-col>
              <el-col :span="10">
                <el-input v-model="md5"></el-input>
              </el-col>
              <el-col :span="10">
                <el-input v-model="hmac_md5_hex"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <span class="input-label">SHA1</span>
              </el-col>
              <el-col :span="10">
                <el-input v-model="sha1"></el-input>
              </el-col>
              <el-col :span="10">
                <el-input v-model="hmac_sha1_hex"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <span class="input-label">SHA256</span>
              </el-col>
              <el-col :span="10">
                <el-input v-model="sha256"></el-input>
              </el-col>
              <el-col :span="10">
                <el-input v-model="hmac_sha256_hex"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <span class="input-label">SHA512</span>
              </el-col>
              <el-col :span="10">
                <el-input v-model="sha512"></el-input>
              </el-col>
              <el-col :span="10">
                <el-input v-model="hmac_sha512_hex"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <span class="input-label">RIPEMD-160</span>
              </el-col>
              <el-col :span="10">
                <el-input v-model="rmd160"></el-input>
              </el-col>
              <el-col :span="10">
                <el-input v-model="hmac_rmd160_hex"></el-input>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-main>

      <el-footer class="footer">
        <a :href="bgUrl" target="_blank">Photo</a> by
        <a :href="bgAuthorUrl" target="_blank">{{ bgAuthorName }}</a> on
        Unsplash
        <br />
        Built with love by <a :href="repoUrl" target="_blank">weaming</a>
        <br />
        Thanks to
        <a href="https://github.com/h2non/jshashes" target="_blank">jshashes</a>
      </el-footer>
    </el-container>
  </el-row>
</template>

<script>
var Hashes = require('jshashes')
// new MD5 instance
var md5 = new Hashes.MD5()
// new SHA1 instance
var sha1 = new Hashes.SHA1()
// new SHA256 instance
var sha256 = new Hashes.SHA256()
// new SHA512 instace
var sha512 = new Hashes.SHA512()
// new RIPEMD-160 instace
var rmd160 = new Hashes.RMD160()
var funcs = {
  md5,
  sha1,
  sha256,
  sha512,
  rmd160,
}

export default {
  name: 'Hash',
  props: {},
  data() {
    return {
      title: 'Hash functions',
      bgUrl: 'https://unsplash.com/photos/bIUmen13DwY',
      bgAuthorUrl: 'https://unsplash.com/@haakon',
      bgAuthorName: 'Håkon Sataøen',
      authorUrl: 'https://github.com/weaming',
      repoUrl: 'https://github.com/weaming/tool-hashes',
      tipsOn: false,
      text: '',
      key: '',
    }
  },
  methods: {
    hmac(method, type) {
      return funcs[method][`${type}_hmac`](this.key, this.text)
    },
  },
  computed: {
    md5() {
      return funcs['md5'].hex(this.text)
    },
    sha1() {
      return funcs['sha1'].hex(this.text)
    },
    sha256() {
      return funcs['sha256'].hex(this.text)
    },
    sha512() {
      return funcs['sha512'].hex(this.text)
    },
    rmd160() {
      return funcs['rmd160'].hex(this.text)
    },
    hmac_md5_hex() {
      return this.hmac('md5', 'hex')
    },
    hmac_sha1_hex() {
      return this.hmac('sha1', 'hex')
    },
    hmac_sha256_hex() {
      return this.hmac('sha256', 'hex')
    },
    hmac_sha512_hex() {
      return this.hmac('sha512', 'hex')
    },
    hmac_rmd160_hex() {
      return this.hmac('rmd160', 'hex')
    },
  },
}
</script>

<style scoped lang="stylus">
.root
  background: url('../assets/bg.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  color: #2a3b6b;

  .input-label
    font-size: 2.2rem;

  a, a:visited, a:hover
    color: #7842c8;

  a, a:visited
    text-decoration: none;

  a:hover
    text-decoration: underline;

  .logo
    height: 200px;

  .footer
    color: black;

    a
      color: grey;

  .container
    margin-bottom: 5rem;

  .footer
    position: absolute;
    bottom: 0;
    clear: both;
    text-align: center;
    width: 100%;
    margin: 2rem auto;

  .imgWrapper
    height: 100px;
    width: 100px;
    display: inline-block;

    .img
      width: 100%;
</style>
