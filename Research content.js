/* ============================================
   研究 内容管理
   
   发布新研究：在 RESEARCH_ARTICLES 数组头部加一条
   每条需要：id, date, tag, zh/ja/en 的 title + body（支持 Markdown）
   ============================================ */

const RESEARCH_TAG_LABELS = {
  gender:   { zh: '性别', ja: 'ジェンダー', en: 'Gender'   },
  politics: { zh: '政治', ja: '政治',       en: 'Politics' },
  history:  { zh: '思想史', ja: '思想史',   en: 'Intellectual History' },
  ecology:  { zh: '生态', ja: 'エコロジー', en: 'Ecology'  },
};

const RESEARCH_ARTICLES = [
  /* ── 示例条目，替换为真实内容 ── */
  {
    id: 'marxism-gender-east-asia',
    date: '2026.01',
    tag: 'gender',
    zh: {
      title: '马克思主义与东亚性别理论的交汇',
      body: `## 问题的提出

东亚的性别研究长期处于两种范式的夹缝之中：一是西方女性主义理论的移植，二是本土儒家传统的回归。这两种路径都面临根本性的困境。

前者往往忽视东亚历史的特殊性；后者则有意无意地将父权制结构合法化。

## 马克思主义的介入

马克思主义为这一困境提供了第三条路：将性别压迫理解为历史性的、可变的生产关系，而非自然的或文化本质的。

> 压迫不是命运，而是结构。结构可以被改变。

这一洞见在东亚语境中尤为重要。殖民现代性对东亚性别秩序的重塑，既引入了新的压迫形式，也创造了新的抵抗空间。

## 结语

反殖民的性别理论必须同时是反资本主义的，也必须是本土的——不是复归前现代，而是从自身历史的内部生长出一种批判性的现代性。`
    },
    ja: {
      title: 'マルクス主義と東アジアのジェンダー理論の交差',
      body: `## 問題の所在

東アジアのジェンダー研究は長らく、二つのパラダイムの狭間に置かれてきた。一つは西洋フェミニズム理論の移植であり、もう一つは本土儒教的伝統への回帰である。この二つの路線はいずれも、根本的な困難に直面している。

前者は東アジア史の特殊性を無視しがちであり、後者は意図せず家父長制的構造を正当化することになる。

## マルクス主義の介入

マルクス主義はこの困難に対して第三の道を提供する。それはジェンダー抑圧を、自然的・文化的本質ではなく、歴史的・可変的な生産関係として理解することである。

> 抑圧は運命ではなく、構造である。構造は変えることができる。

この洞察は東アジアの文脈において特に重要である。植民地的近代性が東アジアのジェンダー秩序に与えた再編成は、新たな抑圧形態を持ち込むと同時に、新たな抵抗の空間をも生み出した。

## 結語

反植民地的ジェンダー理論は、同時に反資本主義的でなければならず、また本土的でなければならない——それは前近代への回帰ではなく、自らの歴史の内側から批判的な近代性を育てることである。`
    },
    en: {
      title: 'Marxism and Gender Theory in East Asia',
      body: `## The Problem

Gender studies in East Asia have long been caught between two paradigms: the transplantation of Western feminist theory, and the return to indigenous Confucian tradition. Both paths face fundamental difficulties.

The former tends to ignore the specificities of East Asian history; the latter, consciously or not, legitimizes patriarchal structures.

## The Marxist Intervention

Marxism offers a third way: understanding gender oppression as historical and mutable—a set of production relations—rather than natural or culturally essential.

> Oppression is not fate but structure. Structures can be changed.

This insight is particularly important in the East Asian context. Colonial modernity's reshaping of East Asian gender orders introduced new forms of oppression while simultaneously creating new spaces of resistance.

## Conclusion

An anti-colonial gender theory must also be anti-capitalist, and must be grounded locally—not as a return to the pre-modern, but as a critical modernity grown from within one's own history.`
    },
  },
];

window.RESEARCH_ARTICLES = RESEARCH_ARTICLES;
window.RESEARCH_TAG_LABELS = RESEARCH_TAG_LABELS;
