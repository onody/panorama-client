import moment from 'moment-timezone'
import 'moment/locale/ja'

let TimeUtils = {

  cnv: function(time) {
         return moment(time).tz('Asia/Tokyo').format('lll');
       }
}

export default TimeUtils
