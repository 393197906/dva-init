import dva from 'dva';
import './index.css';


(function (doc, win, undefined) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (clientWidth === undefined) return;
      docEl.style.fontSize = 20 * (clientWidth / 1440) + 'px';
    };
  if (doc.addEventListener === undefined) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);


// 1. Initialize
const app = dva({
  onError(e) {
    console.log(e.message);
  },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/index'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
