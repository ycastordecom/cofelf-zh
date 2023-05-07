/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-12 23:36:10
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-05-08 01:31:57
 */

import { defineComponent, ref } from 'vue';
//样式
import style from './index.module.less';
//图片
import logo from './static/LOGO-1-220x60px.png';
import menu from './static/menu-60x46px.png';
import router from '@/router';
export default defineComponent({
  name: 'Header',
  setup() {
    /**
     * @name: dekun lu
     * @msg:监听滚动事件,渐变隐藏header
     * @email: 1364978779@qq.com
     * @return {*}
     */
    const oldScrollTop = ref(0);
    const header = ref(null) as any;
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > oldScrollTop.value) {
        oldScrollTop.value = document.documentElement.scrollTop;
        document.styleSheets[0].insertRule(
          `@keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }`
        );
        header.value.style.animationPlayState = 'paused';
        header.value.style.animation = 'fadeOut 2s';
      }
      if (document.documentElement.scrollTop < oldScrollTop.value) {
        oldScrollTop.value = document.documentElement.scrollTop;
        document.styleSheets[0].insertRule(
          `@keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }`
        );
        header.value.style.animationPlayState = 'paused';
        header.value.style.animation = 'fadeIn 1s';
      }
    });
    const toUrl = (url: string) => {
      router.push(url);
    };
    const toPath = (path: string) => {
      window.location.href = path;
    };
    return () => (
      <div ref={header} class={style.header}>
        <img class={style.logo} src={logo} alt="" />
        <div>
          <div class={style.sing} onClick={() => toPath('/')}>
            英文
          </div>
          <div class={style.sing} onClick={() => toPath('https://coself123-m.rarefy.top/#/')}>
            集市
          </div>
          <div class={style.sing} onClick={() => toPath('https://coself123-m.rarefy.top/#/')}>
            登录
          </div>
          <div class={style.select}>
            <img class={style.menu} src={menu} alt="" />
            <div>
              <div onClick={() => toUrl('/index')}>首页</div>
              <div onClick={() => toUrl('/series')}>美妖宇宙</div>
              <div onClick={() => toUrl('/fashion')}>未来时尚</div>
              <div onClick={() => toUrl('/creator')}>认识吴不知</div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
