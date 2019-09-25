<template>
    <div class="editCart">
        <el-form class="form" ref="form" :rules="rules" :model="form" label-width="80px">
            <el-form-item label="宽度 :" class="line" prop="width">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="长度 :" class="line" prop="length">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="材质 :" prop="material">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
                <el-input-number style="margin-left: 30px; border: 0;" v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item label="窗扇类型 :" prop="Casement">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <!-- <el-button class="fileBtn" type="primary" size="small" icon="el-icon-upload">上传文件</el-button> -->
                    <el-upload style="display: inline-block; margin-left: 30px;" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="安装位置 :" prop="install">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="尺寸类型 :" prop="size">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="产品颜色 :" prop="color">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="框条类型 :" prop="Frame">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="框条边数 :" prop="edgeNum">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
                <el-input style="margin-left: 30px;" placeholder="输入数字" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="开启方式 :" prop="openType">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
                <el-input style="margin-left: 30px;" placeholder="输入打开方式" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="尺寸类型 :" prop="size">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="T柱类型 :" prop="size">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="叶片型号 :" prop="size">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="拉杆类型 :" prop="size">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="拉杆断开 :" prop="size">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="五金类型 :" prop="size">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="五金颜色 :" prop="size">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="T柱类型 :" prop="size">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="叶片状态 :" prop="size">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="下板状态 :" prop="size">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="订单数量 :">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                    <el-checkbox label="复选框" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item style="float: right;">
                <el-button type="primary" @click="onSubmit">Confirm</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                fileList: [],
                num: 1,
                rules: {
                    width: [{
                            required: true,
                            trigger: 'blur'
                        }
                    ],
                    length: [{
                            required: true,
                            trigger: 'blur'
                        }
                    ],
                    material: [{
                            required: true,
                            trigger: 'blur'
                        }
                    ],
                    Casement: [{
                            required: true,
                            trigger: 'blur'
                        }
                    ],
                    install: [{
                            required: true,
                            trigger: 'blur'
                        }
                    ],
                    size: [{
                            required: true,
                            trigger: 'blur'
                        }
                    ],
                    color: [{
                            required: true,
                            trigger: 'blur'
                        }
                    ],
                    Frame: [{
                            required: true,
                            trigger: 'blur'
                        }
                    ],
                    edgeNum: [{
                            required: true,
                            trigger: 'blur'
                        }
                    ],
                    openType: [{
                            required: true,
                            trigger: 'blur'
                        }
                    ],
                    width: [{
                            required: true,
                            trigger: 'blur'
                        }
                    ],
                    width: [{
                            required: true,
                            trigger: 'blur'
                        }
                    ],
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            handleChange(value) {
                console.log(value);
            }
        }
    }
</script>

<style scoped lang="less">
    .editCart {
        padding: 20px;
    }

    .form {
        width: 1000px !important;
        margin: 0 auto;

        .line {
            width: 50%;
            display: inline-block;
        }
        /deep/ .el-form-item__label {
            text-align: left;
        }
        /deep/ .el-form-item__content {
            text-align: left;
            padding-left: 20px;
        }

        /deep/ .el-checkbox-group {
            display: inline-block;
        }

        /deep/ .el-input {
            display: inline-block;
            width: 200px;
            // margin-left: 30px;
        }

        .fileBtn {
            margin-left: 20px;
        }
    }
</style>