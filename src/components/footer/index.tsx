/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-12 23:38:27
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-05-08 01:46:34
 */

import { defineComponent } from 'vue';
import logo from './static/LOGO-2-160x186px.png';
import style from './index.module.less';

export default defineComponent({
  name: 'Footer',
  setup() {
    return () => (
      <div class={style.footer}>
        <div>
          <img src={logo} alt="" />
          <div>
            <h2>Coself是什么？</h2>
            <p>
              美妆妖精（别名“美妆精灵宇宙“）跨界潮玩品牌正式成立于2021年，由主理人&设计师吴子珺BUZHI打造，品牌以IP+美妆作为设计理念进行web3.0打造的虚实共生跨界IP潮牌。
              美妆妖精，是基于web3.0打造的虚实共生跨界IP潮牌，目前正在积极拓展搭建元宇宙概念内容和社群搭建，通过虚拟场景，传达对未来时尚生活方式和态度的表达，围绕IP打造，例如虚拟美妆 虚拟潮玩 虚拟潮牌
              等。作为跨界融合的探索者，美妆妖精致力于打造聚焦跨界创新，具有Z时代属性，集结新生力量的元宇宙跨界潮玩厂牌及矩阵。
            </p>
          </div>
        </div>
      </div>
    );
  },
});
