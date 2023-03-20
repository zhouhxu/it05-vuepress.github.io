/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a9989fbd76fc769db2990e04b1c0203e"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.73dc42e5.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.f90154aa.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.973b3142.js",
    "revision": "c40b5a1ae79ce713d091b83b378d4fdf"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.8de5ed19.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.fd6a517a.js",
    "revision": "9b90ef0f71190ca8f76b01c7fe6d870f"
  },
  {
    "url": "assets/js/16.8659b153.js",
    "revision": "d033044aaec6b34224e8ed3d4b86549a"
  },
  {
    "url": "assets/js/17.8faa0753.js",
    "revision": "f8bf5c88f9cd04152dd34f36961f89d7"
  },
  {
    "url": "assets/js/18.e73ba14d.js",
    "revision": "32a5f8ea1bf0cef421b33b6bffbb0016"
  },
  {
    "url": "assets/js/4.d94921b7.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.aafec39e.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.fcea16c6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.7fcc8b8f.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.8dfc7fd6.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.e8364819.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.c95ca274.js",
    "revision": "2fc1fc901b63bcccc4eca54addceb022"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "3d213f191efdcfd11fc6b64b5118f407"
  },
  {
    "url": "categories/java/index.html",
    "revision": "007c2028d9a50b31abd1495e986a3aeb"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bbb7732cb8848cfc8e95464127815e6c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "553137dc9ec245fb3717ecf86936f5e4"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e6ca17c0bdcee0777bd3b7f8ef474693"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a387084834090729d9962ea7c304b4bc"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "e3e494768246d94f399472f6a597eb31"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ecfdec75c1c525e1cd1dd2e7216e58e4"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "7833f18e6a5b10cacc1385c2cf0a3848"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "3b2675cf91132765463a9dbfbe30dfef"
  },
  {
    "url": "tags/js/index.html",
    "revision": "890664c85acf201fbda873e127d96bda"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "952811139127a158ec3b960888d5ac1e"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "4cb0348d6036ca0a5c60efc88d37ae9d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c8a0b0148fe90bddd33e5aa1e50a0fd6"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "70bb0c9badddc6e51230d351753c0b08"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "6972b829d7a69cd74399da514df85841"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "570c0aba9392130cc7cd6f2e15285116"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "e55df5d175bb6b728ce46aed69c23c51"
  },
  {
    "url": "timeline/index.html",
    "revision": "54254abe60a67fc45157ffba1a26725e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a9bae234904eae19e7682e9ae829c8e3"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "b33f9715cb748e8a22844057e66706f8"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c97dc6a777994a7f9a297ff5dcb8cc81"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f56bdf4f55fbe6d4c1d7d43f6cb94916"
  },
  {
    "url": "生活分享/life.html",
    "revision": "2227f64838b22e4e452abcfb9bd2cee6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
