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
  theory:   { zh: '理论',     ja: '理論',           en: 'Theory' },

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

   
  {
    id: 'mamdani-trans-rights-democracy',
    date: '2026.03',
    tag: 'politics',
    zh: {
      title: '全世界都期待着马穆达尼君的回应',
      body: `全世界都期待着马穆达尼君的回应。

国家是国民的国家。事实上，国民心中所谓国家的概念，来源于文化·风土与国民的自发连带互助，来源于国民亲身生活其中的社群。因此政治家必须要做出选择——是站在国民的一边，还是国家机器的一边。如果站在国家机器的那一边，那么再好的国家机器，也必须压制国民实际生活其中的社群与共同体，才能以自己取代国民心目中的国家。因此，这样屈从国家机器的政治家，应该受到国民共同的批判。跨性别者作为国民存在着，所以可以说，跨性别者基于对身体主权的正当要求做出的反抗，正是对所有国家机器的专断统制的直接反抗——所谓多样性并不是国家恩赐的，而是国民和国土本身的属性。政治家若没有这样的认识，就会产生错误的期待，期待着财阀和权门醍醐灌顶、幡然悔悟，或是期待着某位英雄突然降临拯救国民。这种观念必然会对国民造成确实的危害，甚至破坏国民已经结成的共同体。因此，真正的民主政治，必须真正为国民提供均等的恩惠，这才是政治的根本。这当中自然也包括对先前被广泛歧视压迫的跨性别群体的支援。

美利坚的国民和全世界的民众，都对纽约市长马穆达尼君寄予厚望——他的竞选公约中，正是把这项政策列为最优先事务之一，坐在这些破旧立新的政策的核心位置。从这个角度来说，马穆达尼君，是一位全美国、乃至全世界都寄予厚望的人才。

然而，目前面对特朗普氏的政治压力，马穆达尼君未能尽到对策的责任。自当选以降，纽约的主要医疗设施，都被迫停止了对跨性别者的服务和关照。跨性别者作为国民的利益，被特朗普氏的政策公然剥夺了。何况，青年如果不能基于对人权的保护而安全自由的成长，便不可能拥有身心完整而成熟的国民。而这一政策致使跨性别青年成长所必须的医疗照护和身体主权被公然剥夺，是对国民主权和民主主义的公然否定。面对跨性别青年们确实面临着的荷尔蒙中断、心理崩溃、乃至自杀风险的急迫危机，说「我做不到」，绝不是一个政治家应该做的事情。

田中角荣先生曾这样说过：「政治是必须悬命工作的事业，必须以赌上性命的觉悟去改变，才能不辜负国民的信赖和期待。」正是因为国民自身若不团结起来便无力与财阀和权门的国家暴力对抗，才需要政治家为国民发声，为国民的利益坚决战斗，为国民的福祉努力工作。因此，面对国民的痛苦，政治家绝不能退转，必须尽力对一切结构性不公予以公然对峙。政治应该是国民中心的而不是国家中心的，国家是国民的国家，这是国民主权的基本原则。因此，政治家绝不能对这种国家暴力说yes。国民信赖着他的承诺，期待着他的行动——国民期待着他严肃遂行自己对跨性别者的承诺，国民希望以此为原点，真正得以战胜特朗普氏的剧场政治，恢复正当的政治伦理。然而，马穆达尼君却因为诸多原因不断退转，至今并未实现任何竞选承诺，也未能依据现有的法律和授权采取任何实质行动以减少相关危害，甚至产生了「马穆达尼君，已经不是国民的马穆达尼，而是国家的马穆达尼」这样的风闻，令人深感不安。

我依稀记得，小时候的我所了解的纽约，是一座「所有人都能得到尊严和成功的城市」，是「可以包容所有不同的人的国土」，是作为多元文化主义的表率而存在着的城市。请马穆达尼君务必要好好守护纽约市的这份骄傲，好好守护对马穆达尼君寄予了极大期待的纽约的市民、美利坚的国民、和全世界的人民。`
    },
    ja: {
      title: '全世界がマムダニ君の応答を待ち望んでいる',
      body: `全世界がマムダニ君の応答を待ち望んでいる。

国家は国民の国家である。事実、国民が心に抱く国家という概念は、文化・風土と国民の自発的な連帯と互助から生まれ、国民が実際に暮らすコミュニティから生まれるものだ。それゆえ政治家は選択をしなければならない——国民の側に立つのか、それとも国家機器の側に立つのか。国家機器の側に立つならば、いかに優れた国家機器であっても、国民が実際に暮らすコミュニティと共同体を抑圧することなしに、国民の心の中にある国家に成り代わることはできない。したがって、このように国家機器に屈従する政治家は、国民の共同の批判を受けるべきである。トランスジェンダーの人々は国民として存在している。それゆえ、トランスジェンダーの人々が身体的主権への正当な要求に基づいて行う抵抗は、あらゆる国家機器の専断的支配への直接の抵抗であると言える——多様性とは国家から恩賜されるものではなく、国民と国土そのものの属性なのだ。政治家にこのような認識がなければ、財閥や権門が改心・翻意することへの期待や、どこかの英雄が突然現れて国民を救ってくれるという誤った期待を抱くことになる。このような観念は必然的に国民に実質的な危害をもたらし、国民がすでに形成してきた共同体すら破壊しかねない。したがって、真の民主政治とは、真に国民に均等な恩恵をもたらすものでなければならない——それこそが政治の根本である。これにはもちろん、かつて広く差別・抑圧されてきたトランスジェンダーの人々への支援も含まれる。

アメリカの国民と世界中の人々は、ニューヨーク市長マムダニ君に大きな期待を寄せている——彼の選挙公約において、この政策こそが最優先事項のひとつとして掲げられていた。マムダニ君はまさにこれらの刷新的な政策の核心に座る人物として、全米、そして全世界が大きな期待を寄せる存在である。

しかし現在、トランプ氏の政治的圧力を前に、マムダニ君は対策を講じる責任を果たせていない。当選以来、ニューヨークの主要医療施設はトランスジェンダーの人々へのサービスと医療的配慮を停止せざるを得なくなった。国民としてのトランスジェンダーの人々の利益が、トランプ氏の政策によって公然と剥奪されているのだ。そもそも、人権の保護のもとで安全に自由に成長できなければ、心身ともに健全で成熟した国民は育たない。この政策はトランスジェンダーの青年たちが成長するために不可欠な医療ケアと身体的主権を公然と剥奪するものであり、国民主権と民主主義への公然たる否定である。ホルモン療法の中断、精神的崩壊、さらには自殺のリスクという切迫した危機に直面しているトランスジェンダーの青年たちを前に、「私にはできない」と言うことは、政治家として決してあってはならないことだ。

田中角栄先生はかつてこう語った。「政治は命懸けで取り組むべき事業であり、命を賭ける覚悟で変えてこそ、国民の信頼と期待に応えることができる。」国民自身が団結しなければ財閥や権門の国家暴力に対抗する力を持てないからこそ、政治家が国民のために声を上げ、国民の利益のために断固として戦い、国民の福祉のために力を尽くすことが求められるのだ。それゆえ、国民の苦しみを前にして政治家は決して退いてはならず、あらゆる構造的不公正に対して公然と立ち向かわなければならない。政治は国家中心ではなく国民中心であるべきだ——国家は国民の国家である、これが国民主権の基本原則だ。それゆえ政治家は、このような国家暴力にイエスと言ってはならない。国民は彼の公約を信頼し、行動を待ち望んでいる——国民はマムダニ君がトランスジェンダーの人々への公約を厳粛に遂行することを期待し、それを原点として、真にトランプ氏の劇場政治を打ち破り、正当な政治伦理を回復することを望んでいる。しかしマムダニ君はさまざまな理由から後退を続け、いまだいかなる選挙公約も実現せず、現行の法律と権限に基づいて関連する被害を軽減するための実質的な行動も取っていない。「マムダニ君はもはや国民のマムダニではなく、国家のマムダニになってしまった」という声すら生まれており、深く憂慮せざるを得ない。

幼い頃の私が知るニューヨークは、「誰もが尊厳と成功を手にできる都市」であり、「あらゆる異なる人々を包容できる国土」であり、多元文化主義の模範として存在してきた都市だった。マムダニ君には、ニューヨーク市のこの誇りをしっかりと守り、マムダニ君に多大な期待を寄せるニューヨーク市民、アメリカ国民、そして世界中の人々の信頼に応えていただきたい。`
    },
    en: {
      title: 'The World Is Waiting for Mamdani to Act',
      body: `The whole world is waiting for Mamdani to respond.

The state belongs to the people. The idea of the nation that people carry in their hearts comes from culture, from the land, from the bonds they form with each other—from the communities they actually live in. That's why every politician has to make a choice: are you on the side of the people, or on the side of the state machine? If you choose the state machine, then no matter how well-oiled that machine is, it has to crush the communities people actually live in to replace what they think of as their country. A politician who makes that choice deserves to be called out for it. Trans people are citizens. Their resistance—their demand for bodily sovereignty—is a direct challenge to the arbitrary control of any state machine. Diversity isn't something the state grants. It's a property of the people and the land itself. Without that understanding, politicians end up waiting for oligarchs and power brokers to have a change of heart, or for some hero to show up and save everyone. That kind of thinking causes real harm. It destroys the communities people have already built. Real democracy has to deliver equally for everyone—and that includes people who have been discriminated against and pushed down for a long time, including trans people.

People across America and around the world have put a lot of hope in New York City Mayor Mamdani—his campaign platform put these policies front and centre. He's been positioned as the person to deliver real change, and expectations are high, in the US and beyond.

But right now, facing pressure from Trump, Mamdani hasn't held the line. Since he took office, major medical facilities in New York have been forced to stop providing care for trans people. The interests of trans people as citizens are being stripped away openly by Trump's policies. Young people who can't grow up safely and freely, with their rights protected, don't become whole and healthy adults. These policies are ripping away the healthcare and bodily autonomy that trans youth need to grow up—and that's a flat-out rejection of popular sovereignty and democracy. Trans youth are facing real, urgent crises right now: interrupted hormone therapy, psychological collapse, suicide risk. Saying "I can't do anything" is not something a politician should ever say.

Tanaka Kakuei once said: "Politics is something you have to throw yourself into completely—you have to be willing to stake your life on changing things, or you'll never live up to what people are trusting you to do." People can't fight back against the state violence of oligarchs and entrenched power on their own. That's why we need politicians who speak up for people, who fight for their interests, who work for their welfare. A politician cannot flinch in the face of people's suffering. They have to stand up against structural injustice, openly and without backing down. Politics should centre the people, not the state—the state belongs to the people, that's the basic principle of popular sovereignty. No politician should ever say yes to state violence of this kind. People are trusting Mamdani's promises and waiting for him to act. They want him to follow through on what he committed to for trans people—and from there, to actually beat Trump's theatre politics and restore some basic political integrity. Instead, Mamdani has been retreating. No campaign promise has been kept. No meaningful action has been taken under existing law and authority to reduce the harm being done. People are starting to say that Mamdani is no longer the people's Mamdani—he's become the state's Mamdani. That's a deeply troubling thing to hear.

The New York I knew as a child was a city where anyone could find dignity and success, a place that could hold all kinds of different people, a city that stood for something when it came to pluralism and multiculturalism. Mamdani, please protect that. Don't let down the people of New York City, the people of America, and everyone around the world who believed in what you said you stood for.`
    }
  },
{
    id: 'multiculturalism-epistemic-sovereignty',
    date: '2026.03',
    tag: 'theory',
    zh: {
      title: '「You Westerners Should Deal with it」',
      body: `所谓多元文化主义，我认为，应该是尽力去理解和尊重每种文明自身的文化·风土。即使没有切身的体验，也至少应该认真的倾听和理解，尊重当事人的意见，基于当事人的立场，真正设身处地的去确实的思考问题。

这种尊重，我认为必须建立在确实的相信每一种文明本身的可能性，尊重每一种文明的内在，而非只承认这种文明的现象·话语，也就是文明的表象的基础上。如果只是承认「这种现象确实存在」「他的话语是有价值的」然后继续尝试强行将它纳入自己的范式，从其本质看来，可以将这样的行为理解为默认只有基于西方的历史·文化·风土才能产生现代性，于是基于「非西方的文明不能产生现代性」这种偏见，以「白人拯救世界的责任」式的傲慢，像当年的白人殖民者一样将当事人的话语纳入这个框架，作为其中的样本和对象，而非视为真正在呼吸在思考的人类。

当然，这样的观点，往往被指摘为「为陋习和压迫辩护」，然而，必须承认，每个文明都存在着上流阶级和被压迫阶级，存在着主流社会和边缘社群，因此也就存在着斗争的空气，也因此存在着产生独特的现代性途径和解放性思想的可能性，这种现代化途径和解放性思想，一定是基于当事人的真正的确实的切身的生命体验和再三思考的。真正的多元文化主义，应该尊重和理解的是文明内在的这种可能性。如果为此走向了为陋习和压迫辩护，将其视为「某文明的特色」，那么恰恰可以说，是因为并没有尊重当事人的意见，而是站在自己的立场上进行专断的思考，才导致了这样的偏见。就算不能真正体验那种生活方式，我认为，也至少要有设身处地的站在当事人立场思考的意识和常识，「如果将我平移到那个社会中和当事人一致的位置上，我会怎样成长，生活，工作，思考，审美？」必须有这种基本的换位思考的概念才行。

因此，我几乎不用英语写作，虽然我会说英语。我站在东亚人自己的立场上，用东亚人自己的语言写作，用东亚人的视角看待这个世界。

You Westerners Should Deal with it。`
    },
    ja: {
      title: '「You Westerners Should Deal with it」',
      body: `いわゆる多元文化主義とは、あらゆる文明がそれぞれ固有の文化・風土を持つことを理解し、尊重しようと真摯に努めることだと私は考える。直接の体験がないとしても、少なくとも当事者の声に真剣に耳を傾け、理解し、当事者の意見を尊重し、当事者の立場に基づいて、真に身を置いて考えることが求められる。

この尊重は、あらゆる文明それ自体の可能性を確かに信じ、その文明の内在を尊重することの上に成り立たなければならない——その文明の現象・言説、すなわち表象のみを承認するのではなく。「この現象は確かに存在する」「その言説には価値がある」と認めながらも、それを自らのパラダイムに強引に取り込もうとするならば、その本質において、それは「西洋の歴史・文化・風土に基づいてのみ近代性は生まれうる」という前提を黙認することに他ならない。「非西洋文明は近代性を生み出せない」という偏見のもと、「白人が世界を救う責任」式の傲慢さをもって、かつての白人植民者と同じように当事者の言葉をその枠組みの中に回収し、標本と対象として扱う——真に呼吸し、思考する人間としてではなく。

もちろん、このような観点はしばしば「悪習や抑圧を擁護するものだ」と批判される。しかし認めなければならない——あらゆる文明には支配階級と被抑圧階級が存在し、主流社会と周縁のコミュニティが存在し、それゆえに闘争の空気が存在し、独自の近代性への道筋と解放的思想が生まれる可能性が存在する。その近代化の道筋と解放的思想は、必ず当事者の真の、確かな、切実な生の経験と、幾度も重ねられた思考の上に成り立っている。真の多元文化主義が尊重し理解すべきは、文明の内側にあるこのような可能性である。もしそのことが悪習や抑圧の擁護へと向かうなら、それを「ある文明の特色」として片付けるなら、それはまさに当事者の意見を尊重せず、自らの立場から専断的に思考した結果だと言える。その生き方を真に体験できないとしても、少なくとも当事者の立場に身を置いて考える意識と常識は持たなければならない——「もし私がその社会の中で当事者と同じ位置に置かれたなら、どのように育ち、生き、働き、考え、何を美しいと感じるだろうか？」この基本的な想像力がなければならない。

それゆえ私はほとんど英語で書かない——英語を話せるにもかかわらず。私は東アジア人自身の立場から、東アジア人自身の言葉で書き、東アジア人の視点でこの世界を見る。

You Westerners Should Deal with it.`
    },
    en: {
      title: '"You Westerners Should Deal with it"',
      body: `Multiculturalism, as I understand it, means genuinely trying to understand and respect the culture and conditions of every civilisation on its own terms. Even without direct experience, the minimum requirement is to listen seriously, to understand, to respect the views of those involved, and to think from their position—not abstractly, but concretely, with real effort.

That respect has to be grounded in actually believing in the possibilities inherent to each civilisation, and respecting what lies within it—not merely acknowledging its surface phenomena and discourse, its appearances. To say "this phenomenon exists" and "this discourse has value" while continuing to force it into your own paradigm is, at its core, to tacitly accept that modernity can only be produced from Western history, culture, and conditions. It is to operate under the prejudice that non-Western civilisations cannot generate modernity on their own—and from that prejudice, with the arrogance of a "white saviour" complex, to absorb the words of those involved into your framework just as the old colonisers did, treating them as specimens and objects rather than as human beings who breathe and think.

This kind of position is often accused of defending harmful customs and oppression. But one has to acknowledge: every civilisation contains a ruling class and an oppressed class, a mainstream society and marginalised communities, and therefore an atmosphere of struggle—and therefore the possibility of producing its own distinct path toward modernity and its own emancipatory thought. That path, that thought, will always be grounded in the genuine, concrete, lived experience of those involved, and in thinking that has been done and redone many times over. What true multiculturalism should respect and seek to understand is precisely this internal possibility within civilisations. If that leads someone toward defending harmful customs and oppression, treating them as "the characteristics of a certain civilisation"—that is itself the result of not respecting the views of those involved, of thinking from one's own position with no regard for theirs. Even if you cannot truly live that way of life, you need at minimum the basic imaginative capacity to think from the position of those involved: "If I were placed in that society, in the same position as those people, how would I grow up, live, work, think, and find beauty in the world?" That basic capacity for perspective-taking is not optional.

This is why I almost never write in English, even though I speak it. I write from the position of East Asians ourselves, in the languages of East Asia, seeing the world through an East Asian lens.

You Westerners Should Deal with it.`
    }
  },
  /* ── 在此之上添加新文章 ── */

];
