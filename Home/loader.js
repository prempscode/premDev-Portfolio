// ── premDev Page Loader ──
// Shows a loading screen on every page load/reload/navigation

(function () {
    var LOADER_STYLES = `
        #prem-loader {
            position: fixed;
            inset: 0;
            z-index: 99999;
            background: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 18px;
            transition: opacity 0.5s ease;
        }
        #prem-loader.fade-out { opacity: 0; pointer-events: none; }
        .prem-loader-name { font-family: 'Segoe UI', sans-serif; font-size: 1.4rem; font-weight: 600; letter-spacing: 0.08em; color: #111; }
        .prem-loader-bar-wrap { width: 180px; height: 3px; background: #e0e0e0; border-radius: 99px; overflow: hidden; }
        .prem-loader-bar { height: 100%; width: 0%; background: linear-gradient(90deg, #6c63ff, #ff6584); border-radius: 99px; animation: premLoadBar 1.4s ease forwards; }
        @keyframes premLoadBar { 0%{width:0%} 60%{width:75%} 100%{width:100%} }
        .prem-loader-sub { font-family: 'Segoe UI', sans-serif; font-size: 0.78rem; color: #aaa; letter-spacing: 0.05em; }
    `;

    function createLoader() {
        var style = document.createElement('style');
        style.textContent = LOADER_STYLES;
        document.head.appendChild(style);

        var el = document.createElement('div');
        el.id = 'prem-loader';
        el.innerHTML =
            '<div class="prem-loader-name">premDev</div>' +
            '<div class="prem-loader-bar-wrap"><div class="prem-loader-bar"></div></div>' +
            '<div class="prem-loader-sub">Loading…</div>';
        document.body.insertBefore(el, document.body.firstChild);
        return el;
    }

    function dismissLoader(loader) {
        loader.classList.add('fade-out');
        setTimeout(function () { if (loader.parentNode) loader.remove(); }, 550);
    }

    // Show loader again whenever we leave (reload, btn click, back/forward)
    window.addEventListener('beforeunload', function () {
        var existing = document.getElementById('prem-loader');
        if (existing) {
            existing.style.transition = 'none';
            existing.style.opacity = '1';
            existing.classList.remove('fade-out');
            // reset the bar animation
            var bar = existing.querySelector('.prem-loader-bar');
            if (bar) { bar.style.animation = 'none'; bar.offsetHeight; bar.style.animation = ''; }
        } else {
            createLoader();
        }
    });

    // On DOMContentLoaded, inject loader and decide when to hide it
    document.addEventListener('DOMContentLoaded', function () {
        var loader = createLoader();
        var isHome = !!document.getElementById('canvas'); // only index has WebGL canvas

        if (isHome) {
            // Wait for WebGL to fully warm up (~30 frames ≈ 0.5s)
            var frameCount = 0;
            var MIN_FRAMES = 30;
            function waitForGL() {
                frameCount++;
                if (frameCount >= MIN_FRAMES) {
                    dismissLoader(loader);
                } else {
                    requestAnimationFrame(waitForGL);
                }
            }
            requestAnimationFrame(waitForGL);
        } else {
            // Subpages have no WebGL — hide after window fully loads
            window.addEventListener('load', function () {
                setTimeout(function () { dismissLoader(loader); }, 300);
            });
        }
    });
})();
