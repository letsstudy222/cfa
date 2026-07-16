/* =====================================================================
   Topic 09 — Alternative Investments
   ---------------------------------------------------------------------
   CẤU TRÚC DỮ LIỆU / DATA STRUCTURE
   - topic.modules[]   : các learning module; mỗi module có sections[]
                         {h: tiêu đề, en: HTML tiếng Anh, vi: HTML tiếng Việt}
                         và formulas[] tùy chọn: [tên, công thức, ghi chú]
   - topic.vocab[]     : [term, định nghĩa EN, nghĩa VI]
   - topic.quiz[]      : Practice Set A — {q, opts[3], ans(0-2), en, vi}
   - extra.checks[]    : mảng theo TỪNG module — câu "Quick check" sau lý thuyết
   - extra.sets[]      : Practice Set B, C… (mỗi phần tử là 1 bộ câu hỏi)
   Sửa nội dung trực tiếp trong file này; giữ đúng cú pháp JSON.
   ===================================================================== */
window.CFA = window.CFA || { topics: [], extra: {}, mocktests: [] };
window.CFA.topics.push({
 "id": "alts",
 "num": "09",
 "name": "Alternative Investments",
 "vi": "Đầu tư thay thế",
 "w": [
  7,
  10
 ],
 "blurb": "Private capital, real estate, infrastructure, natural resources, hedge funds and digital assets — structures, fees, performance and risk.",
 "intro": {
  "en": "Alternatives is a short, definition-heavy topic covering private equity/debt, real estate, infrastructure, natural resources (commodities, timber, farmland), hedge funds, and digital assets. The most testable calculations are hedge fund fees (\"2 and 20\", hurdle rates, high-water marks) and understanding why alternatives are hard to benchmark (illiquidity, appraisal-smoothed returns, survivorship bias).",
  "vi": "Alternatives là chủ đề ngắn, nặng về định nghĩa: private equity/private debt, bất động sản, hạ tầng, tài nguyên (hàng hóa, rừng, đất nông nghiệp), hedge fund và tài sản số. Phần tính toán dễ ra thi nhất là phí hedge fund (\"2 and 20\", hurdle rate, high-water mark) và lý do alternatives khó đo lường hiệu quả (kém thanh khoản, lợi suất bị \"làm mượt\" do định giá thẩm định, survivorship bias)."
 },
 "modules": [
  {
   "title": "Categories & Structures",
   "sections": [
    {
     "h": "The landscape",
     "en": "<ul><li><strong>Private capital:</strong> private equity (leveraged buyouts, venture capital, growth equity) and private debt (direct lending, mezzanine, distressed). VC stages: seed → early → later → exit via IPO or trade sale. PE funds are closed-end limited partnerships: the <strong>GP</strong> manages, <strong>LPs</strong> commit capital drawn down over time; the <strong>J-curve</strong> describes early negative returns before exits generate gains.</li><li><strong>Real estate:</strong> direct ownership, private funds, and <strong>REITs</strong> (liquid, exchange-traded, income distributing). Returns from income + appreciation; appraisal-based indices smooth volatility and understate risk.</li><li><strong>Infrastructure:</strong> long-lived assets (toll roads, airports, utilities) — greenfield (build) vs brownfield (existing); stable, often inflation-linked cash flows.</li><li><strong>Natural resources:</strong> commodities (via futures — return = collateral yield + roll yield + spot change; contango hurts long roll returns, backwardation helps), plus farmland and timberland.</li><li><strong>Hedge funds:</strong> lightly regulated pooled vehicles using leverage, shorting, derivatives. Strategy families: equity (long/short, market neutral), event-driven (merger arbitrage, distressed), relative value, macro/CTA. Often have lock-ups, gates, and redemption notice periods.</li><li><strong>Digital assets:</strong> cryptocurrencies and tokens on distributed ledgers; high volatility, evolving regulation and custody risk.</li></ul>",
     "vi": "<ul><li><strong>Vốn tư nhân:</strong> private equity (LBO, đầu tư mạo hiểm, growth equity) và private debt (cho vay trực tiếp, mezzanine, nợ khó khăn). Các vòng VC: seed → early → later → thoái vốn qua IPO hoặc bán cho đối tác. Quỹ PE là hợp danh hữu hạn đóng: <strong>GP</strong> quản lý, <strong>LP</strong> cam kết vốn được rút dần; <strong>đường cong chữ J</strong> mô tả lợi suất âm giai đoạn đầu trước khi các thương vụ thoái vốn tạo lãi.</li><li><strong>Bất động sản:</strong> sở hữu trực tiếp, quỹ tư nhân, và <strong>REITs</strong> (thanh khoản, niêm yết, chia thu nhập). Lợi nhuận = thu nhập + tăng giá; chỉ số theo định giá thẩm định làm mượt biến động, che giấu rủi ro.</li><li><strong>Hạ tầng:</strong> tài sản tuổi thọ dài (đường thu phí, sân bay, tiện ích) — greenfield (xây mới) vs brownfield (đang vận hành); dòng tiền ổn định, thường gắn lạm phát.</li><li><strong>Tài nguyên:</strong> hàng hóa (qua futures — lợi suất = lãi tài sản thế chấp + roll yield + thay đổi giá spot; contango bất lợi cho vị thế long khi đảo hợp đồng, backwardation có lợi), đất nông nghiệp, rừng.</li><li><strong>Hedge fund:</strong> quỹ ít bị quản lý, dùng đòn bẩy, bán khống, phái sinh. Nhóm chiến lược: cổ phiếu (long/short, trung lập thị trường), theo sự kiện (arbitrage sáp nhập, nợ khó khăn), giá trị tương đối, vĩ mô/CTA. Thường có lock-up, gate, thời hạn báo trước khi rút vốn.</li><li><strong>Tài sản số:</strong> tiền mã hóa và token trên sổ cái phân tán; biến động cao, quy định đang định hình, rủi ro lưu ký.</li></ul>"
    }
   ]
  },
  {
   "title": "Fees & Performance",
   "sections": [
    {
     "h": "Hedge fund fee mechanics",
     "en": "<p>Typical structure: a <strong>management fee</strong> (e.g., 2% of AUM) plus an <strong>incentive fee</strong> (e.g., 20% of profits). Variations that matter for calculations:</p><ul><li>Incentive fee on gross gains vs on gains <em>net of the management fee</em>.</li><li><strong>Hurdle rate:</strong> incentive fee applies only to returns above a threshold — <em>hard</em> hurdle (fee on excess over hurdle only) vs <em>soft</em> hurdle (fee on the whole gain once the hurdle is beaten).</li><li><strong>High-water mark:</strong> no incentive fee until the fund recovers past its previous peak NAV — prevents paying twice for the same gains.</li></ul><p>Performance measurement caveats: self-reported databases suffer <strong>survivorship and backfill bias</strong>; illiquid assets show <strong>smoothed returns</strong> → understated volatility and correlation → overstated Sharpe ratios. Alternatives are added to portfolios mainly for diversification and potentially higher returns from illiquidity premiums.</p>",
     "vi": "<p>Cấu trúc điển hình: <strong>phí quản lý</strong> (VD 2% AUM) + <strong>phí thưởng</strong> (VD 20% lợi nhuận). Các biến thể quan trọng khi tính toán:</p><ul><li>Phí thưởng tính trên lãi gộp hay lãi <em>sau khi trừ phí quản lý</em>.</li><li><strong>Hurdle rate:</strong> phí thưởng chỉ áp cho phần vượt ngưỡng — <em>hard</em> hurdle (chỉ tính trên phần vượt) vs <em>soft</em> hurdle (vượt ngưỡng thì tính trên toàn bộ lãi).</li><li><strong>High-water mark:</strong> không thu phí thưởng cho tới khi NAV vượt đỉnh cũ — tránh trả phí hai lần cho cùng một khoản lãi.</li></ul><p>Lưu ý đo lường: cơ sở dữ liệu tự khai báo bị <strong>survivorship bias và backfill bias</strong>; tài sản kém thanh khoản có <strong>lợi suất bị làm mượt</strong> → biến động và tương quan bị đánh giá thấp → Sharpe ratio bị thổi phồng. Alternatives được đưa vào danh mục chủ yếu để đa dạng hóa và hưởng phần bù kém thanh khoản.</p>"
    }
   ],
   "formulas": [
    [
     "Total HF fee (2&20, net)",
     "Fee = 2%×AUM + 20%×max(0, gain − mgmt fee − hurdle)",
     "Check the question wording carefully"
    ],
    [
     "Commodity futures return",
     "Collateral yield + roll yield + spot price change",
     "Roll yield > 0 in backwardation"
    ]
   ]
  }
 ],
 "vocab": [
  [
   "general partner (GP)",
   "Manager of a private fund with unlimited liability.",
   "thành viên hợp danh điều hành quỹ"
  ],
  [
   "limited partner (LP)",
   "Investor in a private fund with liability limited to committed capital.",
   "thành viên góp vốn hữu hạn"
  ],
  [
   "committed capital",
   "Total amount LPs agree to provide over the fund’s life.",
   "vốn cam kết"
  ],
  [
   "carried interest",
   "GP’s share of fund profits (the incentive fee in private capital).",
   "phần lợi nhuận chia cho GP"
  ],
  [
   "lock-up period",
   "Time during which investors cannot redeem.",
   "thời gian khóa vốn"
  ],
  [
   "high-water mark",
   "Highest previous NAV that must be exceeded before new incentive fees.",
   "mốc giá trị đỉnh cũ"
  ],
  [
   "hurdle rate",
   "Minimum return before incentive fees apply.",
   "ngưỡng lợi suất tối thiểu"
  ],
  [
   "J-curve",
   "Pattern of early losses then later gains in PE funds.",
   "đường cong chữ J"
  ],
  [
   "REIT",
   "Real estate investment trust — listed, income-distributing property vehicle.",
   "quỹ tín thác bất động sản"
  ],
  [
   "roll yield",
   "Gain/loss from replacing expiring futures with longer-dated ones.",
   "lợi suất đảo hợp đồng kỳ hạn"
  ]
 ],
 "quiz": [
  {
   "q": "A hedge fund with $100 million in assets charges \"2 and 20\" with the incentive fee calculated net of the management fee and no hurdle. Gross return for the year is 15%. Total fees are closest to:",
   "opts": [
    "$4.6 million",
    "$5.0 million",
    "$5.6 million"
   ],
   "ans": 0,
   "en": "A is correct. Management fee = 2% × 100 = $2.0m. Gross gain = $15m; gain net of management fee = 15 − 2 = $13m. Incentive = 20% × 13 = $2.6m. Total = 2.0 + 2.6 = $4.6m.",
   "vi": "Đáp án A. Phí quản lý = 2% × 100 = 2 triệu. Lãi gộp = 15 triệu; lãi sau phí quản lý = 13 triệu. Phí thưởng = 20% × 13 = 2.6 triệu. Tổng = 4.6 triệu USD."
  },
  {
   "q": "The primary purpose of a high-water mark provision is to:",
   "opts": [
    "guarantee investors a minimum return.",
    "prevent the manager from earning incentive fees twice on the same gains.",
    "reduce the management fee in loss years."
   ],
   "ans": 1,
   "en": "B is correct. After a drawdown, incentive fees resume only once NAV exceeds its previous peak, so investors do not pay again for merely recovering earlier losses.",
   "vi": "Đáp án B. Sau khi quỹ sụt giảm, phí thưởng chỉ được thu lại khi NAV vượt đỉnh cũ, nên nhà đầu tư không phải trả phí lần nữa chỉ vì quỹ phục hồi khoản lỗ trước đó."
  },
  {
   "q": "A long-only investor rolling commodity futures in a market in contango will most likely experience:",
   "opts": [
    "positive roll yield.",
    "negative roll yield.",
    "no roll yield."
   ],
   "ans": 1,
   "en": "B is correct. In contango, longer-dated futures cost more than expiring ones; selling the cheap expiring contract and buying the expensive deferred contract produces a negative roll yield.",
   "vi": "Đáp án B. Trong contango, hợp đồng kỳ hạn xa đắt hơn hợp đồng sắp đáo hạn; bán hợp đồng rẻ để mua hợp đồng đắt tạo ra roll yield âm."
  },
  {
   "q": "Appraisal-based valuation of private real estate most likely causes reported returns to exhibit:",
   "opts": [
    "overstated volatility.",
    "understated volatility and correlations with other assets.",
    "no systematic bias."
   ],
   "ans": 1,
   "en": "B is correct. Appraisals adjust slowly and smooth reported values, so measured volatility and correlations are biased downward — making the asset class look like a better diversifier (and its Sharpe ratio look better) than it truly is.",
   "vi": "Đáp án B. Định giá thẩm định điều chỉnh chậm và làm mượt giá trị, nên biến động và tương quan đo được bị thấp hơn thực tế — khiến lớp tài sản trông có vẻ đa dạng hóa tốt hơn (và Sharpe cao hơn) so với thực chất."
  }
 ]
});
window.CFA.extra["alts"] = {
 "checks": [
  [
   {
    "q": "Compared with mutual funds, hedge funds most likely feature:",
    "opts": [
     "Daily liquidity and full transparency",
     "Lockup periods, redemption notice requirements, and lighter regulation",
     "Guaranteed returns"
    ],
    "ans": 1,
    "en": "Hedge funds restrict withdrawals (lockups, gates, notice periods) so managers can hold illiquid or leveraged positions — with far less disclosure than mutual funds.",
    "vi": "Hedge fund giới hạn rút vốn (lockup, gate, thời gian báo trước) để manager giữ vị thế kém thanh khoản/đòn bẩy — và công bố thông tin ít hơn nhiều so với quỹ mở."
   },
   {
    "q": "In a limited partnership fund structure, the general partner (GP):",
    "opts": [
     "Provides most of the capital and bears limited liability",
     "Manages the fund and bears unlimited liability, while LPs are passive with liability limited to their investment",
     "Is always a bank"
    ],
    "ans": 1,
    "en": "The GP manages investments (earning management and incentive fees); limited partners commit capital passively, risking only what they invested.",
    "vi": "GP điều hành quỹ (nhận phí quản lý + phí thưởng) và chịu trách nhiệm vô hạn; LP góp vốn thụ động, chỉ chịu rủi ro trong phạm vi vốn góp."
   }
  ],
  [
   {
    "q": "A high-water mark provision means the manager earns incentive fees only on:",
    "opts": [
     "Gains above the fund’s previous peak value",
     "All gains each year",
     "Returns above the risk-free rate"
    ],
    "ans": 0,
    "en": "After a loss, the fund must first recover past its prior peak before incentive fees resume — protecting investors from paying twice for the same gains.",
    "vi": "Sau khi thua lỗ, quỹ phải vượt lại đỉnh giá trị cũ thì manager mới được tính phí thưởng — tránh nhà đầu tư trả phí hai lần cho cùng một khoản lợi nhuận."
   },
   {
    "q": "A “2 and 20” fee structure refers to:",
    "opts": [
     "2% incentive fee and 20% management fee",
     "2% management fee on assets and 20% incentive fee on profits",
     "2% hurdle and 20% lockup"
    ],
    "ans": 1,
    "en": "Classic hedge fund/PE pricing: 2% of AUM annually plus 20% of profits (often above a hurdle and subject to a high-water mark).",
    "vi": "Cấu trúc phí kinh điển: 2% giá trị tài sản quản lý mỗi năm + 20% lợi nhuận (thường tính trên phần vượt hurdle và tuân theo high-water mark)."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "A fund starts the year at $100m and ends at $120m before fees. Fees: 2% management on beginning assets, 20% incentive on gains above an 8% hurdle. Total fees are closest to:",
    "opts": [
     "$4.4m",
     "$6.0m",
     "$2.4m"
    ],
    "ans": 0,
    "en": "Management = 2% × 100 = $2m. Hurdle gain = 8; excess = 20 − 8 = 12; incentive = 20% × 12 = $2.4m. Total = $4.4m.",
    "vi": "Phí quản lý = 2% × 100 = 2 triệu. Lợi nhuận vượt hurdle = 20 − 8 = 12 → phí thưởng = 20% × 12 = 2,4 triệu. Tổng 4,4 triệu USD."
   },
   {
    "q": "A property generates NOI of $600,000 and sells for $8 million. Its cap rate is:",
    "opts": [
     "13.3%",
     "7.5%",
     "6.0%"
    ],
    "ans": 1,
    "en": "Cap rate = NOI / price = 0.6/8 = 7.5% — the income approach’s core metric.",
    "vi": "Cap rate = NOI / giá = 7,5% — thước đo cốt lõi của phương pháp thu nhập trong định giá bất động sản."
   },
   {
    "q": "A commodity futures market in contango has:",
    "opts": [
     "Futures prices below spot",
     "Futures prices above spot, typically producing negative roll yield for long positions",
     "No futures curve"
    ],
    "ans": 1,
    "en": "Contango: futures &gt; spot (storage/financing costs dominate). Rolling long positions buys high and converges lower — negative roll yield.",
    "vi": "Contango: giá futures cao hơn spot (chi phí lưu kho/vốn chiếm ưu thế). Vị thế mua khi roll hợp đồng chịu roll yield âm."
   },
   {
    "q": "Compared with direct property ownership, public REITs primarily offer investors:",
    "opts": [
     "Higher leverage limits",
     "Liquidity and diversification with small capital, at the cost of equity-market volatility",
     "Guaranteed income"
    ],
    "ans": 1,
    "en": "Exchange-traded REIT shares trade daily and pool many properties — but short-run prices correlate with equities more than private real estate does.",
    "vi": "REIT niêm yết mua bán hằng ngày, đa dạng hóa với vốn nhỏ — đổi lại giá ngắn hạn biến động theo thị trường cổ phiếu nhiều hơn bất động sản tư nhân."
   },
   {
    "q": "Hedge fund index returns are most likely overstated because of:",
    "opts": [
     "Survivorship and backfill bias",
     "Excess regulation",
     "Daily mark-to-market"
    ],
    "ans": 0,
    "en": "Failed funds drop out (survivorship) and successful funds add past results when joining (backfill) — both inflate reported index performance.",
    "vi": "Quỹ thất bại bị loại khỏi chỉ số (survivorship) còn quỹ thành công nộp bổ sung thành tích quá khứ (backfill) — cả hai thổi phồng lợi nhuận chỉ số."
   },
   {
    "q": "Core infrastructure investments (e.g., regulated utilities, toll roads) are valued mainly for their:",
    "opts": [
     "High turnover and trading gains",
     "Stable, long-term, often inflation-linked cash flows",
     "Zero risk"
    ],
    "ans": 1,
    "en": "Infrastructure assets provide essential services under long contracts or regulation — steady cash yields with some inflation linkage, though with leverage, political and regulatory risk.",
    "vi": "Hạ tầng thiết yếu có hợp đồng dài hạn/khung giá điều tiết → dòng tiền ổn định, thường gắn với lạm phát; rủi ro chính là đòn bẩy, chính trị và pháp lý."
   }
  ],
  [
   {
    "q": "A commodity futures curve in backwardation offers long futures investors:",
    "opts": [
     "Negative roll yield",
     "Positive roll yield as contracts converge upward to spot",
     "No convergence"
    ],
    "ans": 1,
    "en": "Backwardation: futures &lt; spot; rolling longs buy cheap contracts that appreciate toward spot — positive roll yield.",
    "vi": "Backwardation: futures thấp hơn spot → khi roll, vị thế mua hưởng roll yield dương do giá hợp đồng hội tụ lên giá spot."
   },
   {
    "q": "Common exit routes for a private equity buyout investment include:",
    "opts": [
     "IPO, trade sale to a strategic buyer, or secondary sale to another sponsor",
     "Coupon payments",
     "Daily redemption"
    ],
    "ans": 0,
    "en": "PE realizes value at exit: public listing, sale to a strategic acquirer, secondary sale, or (less happily) recapitalization/write-off.",
    "vi": "PE hiện thực hóa lợi nhuận khi thoái vốn: IPO, bán cho người mua chiến lược, bán lại cho quỹ khác (secondary), hoặc tái cấu trúc vốn."
   },
   {
    "q": "Venture capital differs from buyout private equity mainly in that VC:",
    "opts": [
     "Targets mature cash-flow-rich firms using heavy debt",
     "Takes minority stakes in early-stage companies with high failure rates and little or no debt",
     "Invests only in real assets"
    ],
    "ans": 1,
    "en": "VC backs young companies with equity, expecting many failures offset by a few huge wins; buyouts lever mature, stable-cash-flow businesses.",
    "vi": "VC rót vốn cổ phần vào công ty giai đoạn sớm, chấp nhận nhiều thất bại đổi lấy vài thương vụ thắng lớn; buyout dùng nợ cao mua công ty trưởng thành có dòng tiền ổn định."
   },
   {
    "q": "A fund of hedge funds offers diversification and access but suffers from:",
    "opts": [
     "A double layer of fees",
     "Zero due diligence",
     "Guaranteed underperformance"
    ],
    "ans": 0,
    "en": "Investors pay the underlying funds’ fees plus the fund-of-funds’ own management/incentive fees — a significant drag on net returns.",
    "vi": "Nhà đầu tư trả hai tầng phí: phí của các quỹ thành phần cộng phí của chính fund of funds — bào mòn đáng kể lợi nhuận ròng."
   },
   {
    "q": "The primary portfolio rationale for adding alternative investments is their:",
    "opts": [
     "Higher liquidity than stocks",
     "Historically low correlation with traditional assets, improving portfolio risk-adjusted returns",
     "Simpler valuation"
    ],
    "ans": 1,
    "en": "Less-than-perfect correlation with stocks and bonds can raise the portfolio’s Sharpe ratio — the diversification argument (with liquidity and fee caveats).",
    "vi": "Tương quan thấp với cổ phiếu/trái phiếu giúp cải thiện lợi nhuận điều chỉnh rủi ro của danh mục — đổi lại là thanh khoản kém và phí cao."
   },
   {
    "q": "Appraisal-based valuations of private real estate most likely cause reported volatility to be:",
    "opts": [
     "Overstated",
     "Understated due to smoothing",
     "Unaffected"
    ],
    "ans": 1,
    "en": "Infrequent appraisals smooth returns, understating true volatility and correlation with markets — a measurement artifact, not genuine safety.",
    "vi": "Định giá theo thẩm định giá không thường xuyên làm “mượt” chuỗi lợi nhuận → độ biến động và tương quan thực bị đánh giá thấp — chỉ là ảo giác đo lường, không phải an toàn thật."
   }
  ]
 ]
};
