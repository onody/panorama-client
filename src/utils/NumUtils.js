import numeral from 'numeral'

let NumUtils = {

  cur: function(num) {
         return "¥" + numeral(num).format('0,0');
       }
}

export default NumUtils
