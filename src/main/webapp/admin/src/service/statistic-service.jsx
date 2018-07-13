import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Statistic {
    // 首页数据统计
    getCartCount() {
        return _mm.request({
            url: '/manage/statistic/base_count.do'
        })
    }
}

export default Statistic;