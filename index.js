'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.compareVer = function (e, r) {
    const t = e.split('.'),
      s = r.split('.');
    let u = !1,
      o = !0;
    return (u = s.some((e, r) => (Number(t[r]) < Number(e) && (o = !1), Number(t[r]) > Number(e)))), u && o;
  });
