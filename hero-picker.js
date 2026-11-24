(function () {
  if (window.eaHeroPicker) return;
  var PRESETS = ['./assets/img-step-5.webp', './assets/img-step-7.webp', './assets/04_1LD-SE-01-opt.webp', './assets/Process_Hero_AA_Phone_L_edit02-scaled.webp'];
  var F = "'Montserrat',system-ui,sans-serif";
  var st = document.createElement('style');
  st.textContent = '@keyframes eaHpUp{from{transform:translateY(100%)}to{transform:none}}@keyframes eaHpIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}@keyframes eaHpFade{from{opacity:0}to{opacity:1}}' +
    '.ea-hp-th{padding:0;border:2px solid transparent;border-radius:6px;overflow:hidden;cursor:pointer;background:#F3F3F3;aspect-ratio:4/3;display:block;transition:border-color 150ms}.ea-hp-th:hover{border-color:#D1D1D1}.ea-hp-th[data-on="1"]{border-color:#8E1B18}.ea-hp-th img{width:100%;height:100%;object-fit:cover;display:block}' +
    '.ea-hp-up{font:500 12px/1 ' + F + ';padding:9px 14px;border-radius:100px;border:0;background:#191919;color:#fff;cursor:pointer;transition:background 150ms}.ea-hp-up:hover{background:#8E1B18}' +
    '.ea-hp-rs{font:600 12px/1 ' + F + ';padding:9px 4px;border:0;background:none;color:#8E1B18;cursor:pointer}.ea-hp-rs:hover{text-decoration:underline}';
  document.head.appendChild(st);
  var root, slot, orig = new WeakMap();

  function close() { if (root) { root.remove(); root = null; document.removeEventListener('keydown', onKey, true); } }
  function onKey(e) { if (e.key === 'Escape') close(); }
  function cur() { var i = slot && slot.shadowRoot && slot.shadowRoot.querySelector('img'); return (i && i.getAttribute('src')) || (slot && slot.getAttribute('src')) || ''; }
  function norm(u) { try { return new URL(u, location.href).pathname; } catch (e) { return u; } }
  function pick(u) { slot.setAttribute('src', u); close(); }

  function open(sl, anchor) {
    if (!sl) return;
    close(); slot = sl;
    if (!orig.has(sl)) orig.set(sl, sl.getAttribute('src') || '');
    var mobile = window.matchMedia('(max-width:640px)').matches;
    var c = norm(cur());
    root = document.createElement('div');
    root.style.cssText = 'position:fixed;inset:0;z-index:2147483000;' + (mobile ? 'background:rgba(25,25,25,.5);animation:eaHpFade 200ms ease-out;' : '');
    root.addEventListener('mousedown', function (e) { if (e.target === root) close(); });
    var p = document.createElement('div');
    p.setAttribute('role', 'dialog'); p.setAttribute('aria-label', 'Hero image');
    var base = 'background:#fff;font-family:' + F + ';box-sizing:border-box;';
    if (mobile) p.style.cssText = base + 'position:absolute;left:5%;width:90%;bottom:0;border-radius:16px 16px 0 0;padding:10px 20px calc(20px + env(safe-area-inset-bottom));box-shadow:0 -8px 32px rgba(25,25,25,.25);animation:eaHpUp 280ms cubic-bezier(.2,.8,.2,1);max-height:90vh;overflow:auto;';
    else {
      var r = anchor ? anchor.getBoundingClientRect() : { right: innerWidth - 24, top: innerHeight - 24 };
      var w = 300, left = Math.max(12, Math.min(r.right - w, innerWidth - w - 12));
      p.style.cssText = base + 'position:absolute;width:' + w + 'px;left:' + left + 'px;bottom:' + Math.max(12, innerHeight - r.top + 10) + 'px;max-height:' + (innerHeight - Math.max(12, innerHeight - r.top + 10) - 12) + 'px;overflow:auto;border-radius:10px;padding:16px;box-shadow:0 12px 40px rgba(25,25,25,.22);border:1px solid #EAEAEA;animation:eaHpIn 180ms ease-out;';
    }
    var h = '';
    if (mobile) h += '<div style="width:36px;height:4px;border-radius:4px;background:#D1D1D1;margin:0 auto 14px;"></div>';
    h += '<div style="font-size:14px;font-weight:600;color:#191919;">Hero image</div><div style="font-size:12px;color:#6b6b6b;margin:3px 0 12px;">Pick a photo or upload your own.</div>';
    h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' + PRESETS.map(function (u) { return '<button type="button" class="ea-hp-th" data-u="' + u + '" data-on="' + (norm(u) === c ? 1 : 0) + '" aria-label="Use this photo"><img src="' + u + '" alt=""></button>'; }).join('') + '</div>';
    h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-top:14px;"><button type="button" class="ea-hp-up" data-a="up">\u2191 Upload image</button><button type="button" class="ea-hp-rs" data-a="rs">Reset to default</button></div>';
    p.innerHTML = h;
    p.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t) return;
      if (t.dataset.u) pick(t.dataset.u);
      else if (t.dataset.a === 'up') { var s = slot; close(); s.openFilePicker && s.openFilePicker(); }
      else if (t.dataset.a === 'rs') pick(orig.get(slot));
    });
    root.appendChild(p); document.body.appendChild(root);
    document.addEventListener('keydown', onKey, true);
  }
  window.eaHeroPicker = { open: open, close: close };
})();
