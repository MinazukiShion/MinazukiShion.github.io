/* ============================================
   虚构·OC 内容管理
   
   发布新作品：在 FICTION_ARTICLES 数组头部加一条
   每条需要：id, date, tag, zh/ja/en 的 title + body（支持 Markdown）
   ============================================ */

const FICTION_TAG_LABELS = {
  original: { zh: '原创', ja: 'オリジナル', en: 'Original' },
  oc:       { zh: 'OC',  ja: 'OC',         en: 'OC'       },
  world:    { zh: '世界观', ja: '世界観',   en: 'Worldbuilding' },
  prose:    { zh: '散文', ja: '散文',       en: 'Prose'    },
};

const FICTION_ARTICLES = [
  /* ── 示例条目，替换为真实内容 ── */
  {
    id: 'untitled-001',
    date: '2025.12',
    tag: 'prose',
    zh: {
      title: '无题',
      body: `有时候会想，如果世界是另一个形状，我们会不会用不同的词语来称呼彼此。

不是名字，而是某种更古老的东西——像雨落在不同地面上的声音。

> 一切命名都是一种暴力，也是一种爱。

我不确定这是谁说的。也许是我自己说的，在某个我已经忘记的夜晚。`
    },
    ja: {
      title: '無題',
      body: `もし世界が別の形をしていたら、私たちはお互いを違う言葉で呼んでいただろうか、とふと思うことがある。

名前ではなく、もっと古いもの——雨が異なる地面に落ちる音のような何か。

> あらゆる命名は、ある種の暴力であり、同時に愛でもある。

誰が言ったのかは分からない。もしかしたら、もう忘れてしまったある夜に、自分が言ったのかもしれない。`
    },
    en: {
      title: 'Untitled',
      body: `Sometimes I wonder: if the world were a different shape, would we call each other by different words?

Not names—something older. Like the sound of rain falling on different ground.

> All naming is a kind of violence, and also a kind of love.

I don't know who said that. Maybe I said it myself, on a night I've already forgotten.`
    },
  },
];

window.FICTION_ARTICLES = FICTION_ARTICLES;
window.FICTION_TAG_LABELS = FICTION_TAG_LABELS;
