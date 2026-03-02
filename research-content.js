/* ============================================
   研究 内容管理

   发布新研究：在数组头部加一条
   tag 可选：'gender' | 'politics' | 'history' | 'ecology'
   body 支持 Markdown：## 标题  > 引用  **粗体**  *斜体*
   ============================================ */

const RESEARCH_TAG_LABELS = {
  gender:   { zh: '性别理论', ja: 'ジェンダー理論', en: 'Gender' },
  politics: { zh: '政治', ja: '政治思想',       en: 'Political Thought' },
  history:  { zh: '思想史',   ja: '思想史',         en: 'Intellectual History' },
  ecology:  { zh: '生态', ja: 'エコ政治',       en: 'Ecology' },
};

const RESEARCH_ARTICLES = [

  {
    id: 'trump-theatre-politics-spectacle',
    date: '2026.03',
    tag: 'politics',
    zh: {
      title: '特朗普剧场——论政治的手段化与民主的危机',
      body: `特朗普大统领自再当选以来，便以「特朗普剧场」的模式运营着政治。

我依稀记得，少年时代的我住在上海，几乎每天都在自宅隔壁的苏州汤面屋吃午餐。这家店只有这样几道菜——红汤面、清汤面、鱼汤面、炸猪排、炸年糕。不过至今都记得蘸着伍斯特酱油的炸猪排的那份令人感动的美味。

后来在这家店对面开了另一家饭店，店主是一个奇怪的男人，那人每三天就会推出一道新菜，使用小时候的我从未听说过的新食材，还雇佣了在那时候的上海并不多见的印度移民和非洲移民，请他们以「国际友人」的身份为饭店背书——只不过每次去那家饭店就餐，都没有尝到什么值得称道的食物。

特朗普氏，正是如此运营着美国。正如同面屋应该把「做出美味的面条」作为最高的理想，政治家也应该把「为国民带来幸福、安心和安全」作为自己的目标，宣传、名声、财富、权力，都是实现那个目的的工具罢了。而特朗普氏却如同当年的小泉纯一郎元总理大臣那样，反而把政治视作为自己博取声名和利润的手段。正因为内在是已经生蛆的腐肉，所以才需要用大量的香料来掩盖腐臭——用空洞的宣传和煽动，借助媒体的共犯，把复杂的政治·政策问题简化为「作为救世主的特朗普大统领陛下 vs. 践踏我辈之美利坚合众国的历史和荣光的敌人」的华丽决斗。倒不如说这已经不是民主政治了，而是那种烂在手里赔钱卖又卖不掉的庸俗骑士小说，国民不是基于「如果我是政治家，该如何保护国民的利益」「如何基于现在受害的立场，对社会进行改善」的立场进行认真的思考，而是在欣赏骑士用华丽的剑技击败用舞台机械制作的恶龙，最终拯救美丽的公主的戏剧。然而，纵使国民能够以戏中的公主的视角得到一时的安心，或是因绚烂的表演而心潮澎湃、献上花束，都必须意识到，戏剧终有落幕之时，曲终人散之时，便什么也不会剩下。正如小泉纯一郎氏喊着「打倒自民党」「市场自由化」「派遣法放宽」等口号，最终带来的却是一个非正规雇佣暴增、贫富差距拉大、地方经济空洞化，然而自民党更加保守右倾独断，大资本也因此大发横财的日本。

现在的美国也正是如此。受侵害的边缘群体和处于苦难中的中流·本流民众被强行划分成了「两种不同的国民」，却忽略了不同的身份和不同的苦难不意味着「不是同一国的国民」。特朗普氏正是利用这一状况，煽动着受压迫的国民的情绪，引导它们以仇恨和狂热的形式展现，借此维持着「特朗普剧场」的上演，可以说特朗普政权的燃料就是愤怒、怨仇和道德判断。对于当代的我们，对于基于左翼的立场和科学社会主义的方法论的我们，对于把国民的幸福、安心和安全作为目标的我们，绝不能再坐等「国民主权的再构建」和「民主主义的再确立」从天上掉下来——财阀、权门、阴谋家和无良媒体的眼中只有利益，对他们而言，国民只是用于消耗的燃料、性幻想的对象、或者待处理的社会问题，因此绝不能抱着「可以期待他们良心发现，主动恢复和保护国民的人权」的想法。

因此，正因为必须以连带战胜分断，必须以宽容战胜对立，才必须自己亲自去做、去行动、去努力。国民主权和民主主义原本就不是源于上流阶级的施舍，而是前人通过行动自己夺还的权利。如果不去做、不去行动、不去努力，不能团结起来互相援助并与社会中弥漫的恶意勇敢的对峙，就不可能真正实现理性、包容和多样的社会。`
    },
    ja: {
      title: 'トランプ劇場――政治の手段化と民主主義の危機',
      body: `トランプ大統領は再選以来、「トランプ劇場」の様式で政治を運営し続けている。

幼い頃、上海に住んでいた私は、自宅の隣にある蘇州麺屋でほぼ毎日昼食をとっていた。その店のメニューはごく限られていた――紅湯麺、清湯麺、魚湯麺、炸猪排、炸年糕。しかし今も忘れられないのは、ウスターソースをつけて食べる炸猪排の、感動的に美味しかったあの味だ。

やがてその店の向かいに、別の飲食店が開店した。店主は変人で、三日ごとに新しい料理を打ち出し、幼い私が聞いたこともない食材を使い、当時の上海ではまだ珍しかったインド系・アフリカ系の移民を「国際的な友人」として雇い、店の看板に据えた。しかしその店で食事をするたびに、特筆すべき味には一度も出会えなかった。

トランプ氏は、まさにそのようにしてアメリカを運営している。麺屋が「美味しい麺を作ること」を最高の理想とすべきであるように、政治家もまた「国民に幸福・安心・安全をもたらすこと」を自らの目標とすべきである。宣伝も、名声も、富も、権力も、その目的を実現するための道具にすぎない。しかしトランプ氏はかつての小泉純一郎元総理大臣と同様に、政治をむしろ自らの名声と利益を得るための手段と見なしている。内側がすでに腐り果てているからこそ、大量の香辛料でその腐臭を覆い隠さなければならない――空虚な宣伝と煽動によって、メディアを共犯者として巻き込みながら、複雑な政治・政策の問題を「救世主たるトランプ大統領陛下 vs. 我らが合衆国の歴史と栄光を踏みにじる敵」という華麗な決闘へと単純化する。これはもはや民主政治ではなく、手元で腐りながら売るに売れない通俗騎士小説だ。国民は「もし自分が政治家であれば、どのように国民の利益を守るか」「現在被害を受けている立場から、いかに社会を改善するか」を真剣に考えるのではなく、騎士が華麗な剣技で舞台装置の悪竜を倒し、美しい姫を救い出す芝居を鑑賞している。たとえ国民が劇中の姫の視点から一時の安心を得たり、絢爛たる演技に心を躍らせて花束を捧げたりしても、芝居にはいつか幕が下りることを、曲が終われば何も残らないことを、忘れてはならない。小泉純一郎氏が「自民党をぶっ壊す」「市場自由化」「派遣法緩和」を叫んだ末にもたらしたものは、非正規雇用の激増・貧富格差の拡大・地方経済の空洞化、そして一層保守化・右傾化・独断化した自民党と、大資本の肥大化という現実の日本だった。

今のアメリカもまさにそうだ。侵害を受けたマイノリティと苦難の中にある中間層・主流層は「二種類の異なる国民」として強引に分断されているが、異なるアイデンティティと異なる苦難は「同じ国民ではない」ことを意味しない。トランプ氏はこの状況を利用し、抑圧された国民の感情を煽り、それを憎悪と狂熱という形で噴出させることで「トランプ劇場」の上演を維持している。トランプ政権の燃料とは、怒り・怨恨・道徳的断罪に他ならない。左翼の立場と科学的社会主義の方法論に基づく私たちにとって、国民の幸福・安心・安全を目標とする私たちにとって、「国民主権の再構築」や「民主主義の再確立」が天から降ってくるのをただ待つことは、もはや許されない――財閥・権門・陰謀家・良心なきメディアの眼中にあるのは利益だけであり、彼らにとって国民とは消費される燃料であり、性的幻想の対象であり、処理すべき社会問題にすぎない。彼らが良心に目覚め、自ら進んで国民の人権を回復・保護することを期待してはならない。

だからこそ、分断よりも連帯、対立よりも寛容で勝たなければならない。自ら動き、行動し、努力しなければならない。国民主権と民主主義はもともと上流階級からの施しではなく、先人たちが行動によって自ら奪い還した権利だ。動かず、行動せず、努力せず、団結して互いに助け合い、社会に蔓延する悪意と勇敢に対峙することなくしては、理性的で寛容な多様な社会を真に実現することはできない。`
    },
    en: {
      title: 'The Trump Theatre — On the Instrumentalisation of Politics and the Crisis of Democracy',
      body: `Since winning re-election, Trump has been running America like a theatre production—and he's the star of every show.

When I was a kid living in Shanghai, I ate lunch almost every day at the Suzhou noodle place next door to our apartment. The menu never changed—red broth noodles, clear broth noodles, fish broth noodles, fried pork cutlet, fried rice cake. I still think about that pork cutlet sometimes. Dipped in Worcestershire sauce. Nothing fancy, but it was genuinely good.

At some point a new restaurant opened across the street. The owner was an odd one—every few days he'd roll out some new dish with ingredients nobody around there had ever heard of, and he hired Indian and African immigrants, which was still pretty unusual in Shanghai back then, to stand around as "international friends" giving the place an exotic stamp of approval. I ate there a few times. Never had anything worth going back for.

That's Trump's America.

A noodle shop should care about making good noodles. A politician should care about making people's lives safer and more secure. Fame, money, power—those are supposed to be tools, not the point. But Trump, like Koizumi in Japan back in the day, flipped that around completely. Politics became the means to personal glory. And when the actual substance is rotting, you pile on the seasoning—endless spectacle, media hype, everything boiled down to one simple story: Trump the hero versus the enemies destroying America. It's not really democracy anymore. It's a cheap adventure novel where the knight slays a cardboard dragon and saves the princess, and the audience cheers without ever asking whether any of it was real. People aren't thinking "what would actually fix this?" They're watching the show.

Koizumi did the same thing. "Destroy the LDP." "Free the markets." "Deregulate labour." What actually happened? Irregular employment exploded. The wealth gap widened. Regional economies hollowed out. The LDP came back more conservative and more authoritarian than before, and big business made a killing.

America is heading the same direction.

What Trump figured out is that there are a lot of people who are genuinely hurting—marginalised groups being stepped on, middle-class people watching their lives get harder—and instead of addressing any of that, he turned them against each other. Different problems, different faces, but he sold them the idea that they're enemies. And then he runs on the anger that produces. That's the fuel: resentment, grievance, the satisfaction of having someone to blame.

For those of us coming from a left perspective—people who actually want things to get better for ordinary people—waiting for democracy to fix itself isn't an option. The people running things right now don't see citizens as citizens. They see fuel. They see consumers. They see problems to manage. They're not going to have a change of heart.

So we have to do it ourselves. Solidarity over division. Tolerance over antagonism. Not as slogans—as actual practice, in the actual world. Popular sovereignty was never handed down from above. It was taken. And if we want it, we're going to have to take it again.`
    }
  },

  /* ── 在此之上添加新文章 ── */

];
