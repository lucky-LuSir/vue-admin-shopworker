<template>
    <div>
        <el-dropdown @command="handleSetLang" trigger="click">
            <div class="lang-active">
                <div v-for="(lang, i) in langs" :key="`LangActive${i}`" v-show="lang.key === activeLang">
                    {{ lang.value }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(lang, i) in langs" :key="`Lang${i}`" :command="lang.key">
                    <span class="text">{{ lang.value }}</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <div>
            {{ $t('login.username') }}
            <h1>{{ $t('main.name') }}</h1>
            <h2>{{ $t('main.age') }}</h2>
        </div>
    </div>
</template>

<script>
import {
    mapGetters,
    mapMutations
} from 'vuex';

export default {
    name: 'Lang',
    components: {},
    data () {
        return {
            form: {
                username: ''
            },
            langs: [{
                key: 'zh-CN',
                value: '中文'
            },
            {
                key: 'en-US',
                value: 'EngLish'
            },
            ],
        }
    },
    computed: {
        ...mapGetters({
            activeLang: 'language'
        })
    },
    created () { },
    mounted () { },
    methods: {
        ...mapMutations(['setLanguage']),
        handleSetLang (lang) {
            // 设置i18n.locale 组件库会按照上面的配置使用对应的文案文件
            this.$i18n.locale = lang
            // 提交mutations 
            this.setLanguage(lang)
        }
    }
}
</script>