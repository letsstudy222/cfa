/* =====================================================================
   Topic 03 — Economics
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
 "id": "econ",
 "num": "03",
 "name": "Economics",
 "vi": "Kinh tế học",
 "w": [
  6,
  9
 ],
 "blurb": "Micro (demand, elasticity, market structures), macro (business cycles, money, fiscal & monetary policy) and currency exchange rates.",
 "intro": {
  "en": "Economics at Level 1 spans eight learning modules: firm economics and market structures, business cycles and inflation, fiscal policy, monetary policy, geopolitics, international trade, capital flows, and exchange-rate calculations. Focus on the logic and definitions — the calculations (multipliers, money creation, forward rates) are formulaic once the concepts are clear.",
  "vi": "Kinh tế học Level 1 trải trên tám learning modules: kinh tế học doanh nghiệp và cấu trúc thị trường, chu kỳ kinh tế và lạm phát, chính sách tài khóa, chính sách tiền tệ, địa chính trị, thương mại quốc tế, dòng vốn quốc tế, và tính toán tỷ giá. Tập trung vào logic và định nghĩa — phần tính toán (số nhân, tạo tiền, tỷ giá kỳ hạn) chỉ là áp công thức khi đã hiểu khái niệm."
 },
 "modules": [
  {
   "title": "The Firm and Market Structures",
   "sections": [
    {
     "h": "Breakeven and shutdown points",
     "en": "<p>In the <strong>short run</strong>, a firm should continue operating as long as price covers <strong>average variable cost (AVC)</strong> — fixed costs are sunk. It shuts down when P &lt; AVC. In the <strong>long run</strong>, price must cover <strong>average total cost (ATC)</strong>; otherwise the firm exits. Breakeven: P = ATC (zero economic profit — note that zero <em>economic</em> profit still includes a normal return on capital).</p>",
     "vi": "<p>Trong <strong>ngắn hạn</strong>, doanh nghiệp nên tiếp tục hoạt động khi giá còn bù được <strong>chi phí biến đổi bình quân (AVC)</strong> — chi phí cố định là chi phí chìm. Đóng cửa khi P &lt; AVC. Trong <strong>dài hạn</strong>, giá phải bù được <strong>tổng chi phí bình quân (ATC)</strong>; nếu không doanh nghiệp rời ngành. Hòa vốn: P = ATC (lợi nhuận kinh tế bằng 0 — lưu ý lợi nhuận kinh tế bằng 0 vẫn bao gồm mức sinh lời bình thường trên vốn).</p>"
    },
    {
     "h": "Profit maximization, economies of scale & supply",
     "en": "<ul><li><strong>The universal rule:</strong> every firm — from perfect competitor to monopolist — maximizes profit at the output where <strong>marginal revenue = marginal cost</strong>. Under perfect competition MR = price (the demand curve facing the firm is flat); with any pricing power, MR &lt; price because selling more requires cutting price on all units.</li><li><strong>Economic vs accounting profit:</strong> economic profit subtracts <em>all</em> opportunity costs, including a normal return on the owners’ capital. Zero economic profit (\"normal profit\") is the long-run resting point of competitive markets.</li><li><strong>Economies of scale:</strong> the long-run average cost (LRAC) curve falls as output grows when scale spreads fixed costs, enables specialization, and improves purchasing power; it eventually rises with <em>diseconomies</em> (bureaucracy, coordination costs). The output where LRAC first reaches its minimum is the <strong>minimum efficient scale</strong> — industries with a large MES relative to demand support only a few firms (a natural barrier to entry, and in the extreme a natural monopoly).</li><li><strong>Breakeven and shutdown recap in market context:</strong> in the long run, entry and exit push price toward minimum ATC in competitive markets — which is why economic profits are competed away.</li></ul>",
     "vi": "<ul><li><strong>Quy tắc phổ quát:</strong> mọi doanh nghiệp — từ cạnh tranh hoàn hảo đến độc quyền — tối đa hóa lợi nhuận tại sản lượng có <strong>doanh thu biên = chi phí biên</strong>. Trong cạnh tranh hoàn hảo MR = giá (đường cầu của doanh nghiệp nằm ngang); có sức mạnh định giá thì MR &lt; giá vì bán thêm buộc phải giảm giá trên mọi đơn vị.</li><li><strong>Lợi nhuận kinh tế vs kế toán:</strong> lợi nhuận kinh tế trừ <em>tất cả</em> chi phí cơ hội, gồm cả mức sinh lời bình thường trên vốn chủ. Lợi nhuận kinh tế bằng 0 (\"lợi nhuận bình thường\") là điểm cân bằng dài hạn của thị trường cạnh tranh.</li><li><strong>Lợi thế kinh tế theo quy mô:</strong> đường chi phí bình quân dài hạn (LRAC) giảm khi sản lượng tăng nhờ dàn trải chi phí cố định, chuyên môn hóa, sức mua đầu vào; cuối cùng tăng trở lại do <em>bất lợi quy mô</em> (bộ máy cồng kềnh, chi phí phối hợp). Sản lượng đầu tiên đạt LRAC tối thiểu là <strong>quy mô hiệu quả tối thiểu (MES)</strong> — ngành có MES lớn so với cầu chỉ chứa được ít doanh nghiệp (rào cản tự nhiên; cực đoan là độc quyền tự nhiên).</li><li><strong>Ôn lại hòa vốn/đóng cửa trong bối cảnh thị trường:</strong> dài hạn, việc gia nhập/rời ngành đẩy giá về ATC tối thiểu trong thị trường cạnh tranh — vì thế lợi nhuận kinh tế bị cạnh tranh bào mòn về 0.</li></ul>"
    },
    {
     "h": "The four market structures",
     "en": "<table class=\"simple\"><tr><th>Structure</th><th>Sellers</th><th>Product</th><th>Barriers</th><th>Pricing power</th></tr><tr><td><strong>Perfect competition</strong></td><td>Many</td><td>Homogeneous</td><td>Very low</td><td>None (price taker); demand is perfectly elastic; P = MR = MC in equilibrium</td></tr><tr><td><strong>Monopolistic competition</strong></td><td>Many</td><td>Differentiated</td><td>Low</td><td>Some; heavy advertising; zero economic profit in long run</td></tr><tr><td><strong>Oligopoly</strong></td><td>Few</td><td>Similar or differentiated</td><td>High</td><td>Significant; interdependent pricing (kinked demand, Cournot, game theory/collusion)</td></tr><tr><td><strong>Monopoly</strong></td><td>One</td><td>Unique</td><td>Very high</td><td>Full; produces where MR = MC, prices above MC; may face regulation</td></tr></table><p>Concentration measures: the N-firm concentration ratio and the <strong>Herfindahl–Hirschman Index (HHI)</strong> = Σ(market share²). Neither directly captures barriers to entry or contestability.</p>",
     "vi": "<p>Bốn cấu trúc: <strong>cạnh tranh hoàn hảo</strong> (nhiều người bán, sản phẩm đồng nhất, không có sức mạnh định giá, P = MR = MC); <strong>cạnh tranh độc quyền</strong> (nhiều người bán, sản phẩm khác biệt, quảng cáo mạnh, lợi nhuận kinh tế dài hạn bằng 0); <strong>độc quyền nhóm</strong> (ít người bán, định giá phụ thuộc lẫn nhau — đường cầu gãy, Cournot, lý thuyết trò chơi/thông đồng); <strong>độc quyền</strong> (một người bán, rào cản rất cao, sản xuất tại MR = MC và định giá trên MC, có thể bị quản lý giá).</p><p>Đo mức độ tập trung: tỷ lệ tập trung N công ty và chỉ số <strong>HHI</strong> = Σ(thị phần²). Cả hai đều không phản ánh trực tiếp rào cản gia nhập.</p>"
    }
   ],
   "formulas": [
    [
     "HHI",
     "HHI = Σ (market share_i)²",
     ""
    ],
    [
     "Own-price elasticity",
     "%ΔQd / %ΔP",
     "|E| > 1 elastic; revenue falls when price rises"
    ],
    [
     "Profit maximization",
     "Produce where MR = MC",
     "Perfect competition: P = MR"
    ],
    [
     "Breakeven / shutdown",
     "Long run: P = min ATC · Short run shutdown: P < min AVC",
     ""
    ]
   ]
  },
  {
   "title": "Understanding Business Cycles",
   "sections": [
    {
     "h": "The business cycle and indicators",
     "en": "<p>Phases: <strong>trough → expansion → peak → contraction</strong>. Typical patterns: early expansion — sales up, inventories deliberately rebuilt, hiring resumes; late cycle — inflation accelerates, central banks tighten. <strong>Unemployment</strong> is a lagging indicator (firms fire last and hire back last); the stock market and inventory-to-sales ratios are leading indicators. Credit cycles (lending standards, spreads) often amplify business cycles.</p><p><strong>Unemployment types:</strong> frictional (between jobs), structural (skills mismatch), cyclical (demand shortfall). The participation rate can distort the headline rate — discouraged workers leaving the labor force lowers unemployment without any hiring.</p>",
     "vi": "<p>Các pha: <strong>đáy → mở rộng → đỉnh → thu hẹp</strong>. Đặc trưng: đầu chu kỳ — doanh số tăng, chủ động tích lại tồn kho, tuyển dụng trở lại; cuối chu kỳ — lạm phát tăng tốc, NHTW thắt chặt. <strong>Thất nghiệp</strong> là chỉ báo trễ (doanh nghiệp sa thải sau cùng và tuyển lại sau cùng); thị trường chứng khoán và tỷ lệ tồn kho/doanh số là chỉ báo dẫn dắt. Chu kỳ tín dụng thường khuếch đại chu kỳ kinh tế.</p><p><strong>Các loại thất nghiệp:</strong> ma sát (đang chuyển việc), cơ cấu (lệch kỹ năng), chu kỳ (thiếu cầu). Tỷ lệ tham gia lao động có thể bóp méo con số thất nghiệp — người lao động nản lòng rời lực lượng lao động làm tỷ lệ thất nghiệp giảm dù không ai được tuyển.</p>"
    },
    {
     "h": "Measuring inflation — and reading the indicators",
     "en": "<ul><li><strong>Price indexes:</strong> the CPI tracks a consumption basket; the PPI (producer prices) often leads the CPI as input costs pass through; the GDP deflator covers everything produced. Most CPIs are <strong>Laspeyres indexes</strong> (fixed base-period basket), which <em>overstate</em> true cost-of-living inflation because of three biases: <strong>substitution</strong> (consumers shift toward relatively cheaper goods), <strong>quality improvement</strong> (price rises that buy better goods), and <strong>new goods</strong> (arrive late in the basket). Chained indexes mitigate substitution bias.</li><li><strong>Headline vs core:</strong> core inflation strips out volatile food and energy — central banks watch it to avoid reacting to noise.</li><li><strong>Inflation vocabulary:</strong> disinflation = inflation still positive but falling; deflation = prices actually falling (dangerous: raises real debt burdens and postpones spending); hyperinflation = extreme, self-reinforcing inflation. Cost-push (wages, energy) vs demand-pull (aggregate demand outrunning capacity); inflation <em>expectations</em> can make either self-sustaining.</li><li><strong>Indicator taxonomy:</strong> leading (stock prices, building permits, yield spreads, new orders, consumer expectations), coincident (industrial production, personal income, employees on payrolls), lagging (unemployment rate, CPI for services, average prime rate, inventories-to-sales). Diffusion indexes track how many components are rising.</li></ul>",
     "vi": "<ul><li><strong>Chỉ số giá:</strong> CPI theo rổ tiêu dùng; PPI (giá sản xuất) thường dẫn trước CPI khi chi phí đầu vào truyền dần vào giá bán lẻ; GDP deflator bao trùm mọi thứ được sản xuất. Đa số CPI là <strong>chỉ số Laspeyres</strong> (rổ cố định kỳ gốc) nên <em>thổi phồng</em> lạm phát chi phí sinh hoạt thật vì 3 thiên lệch: <strong>thay thế</strong> (người tiêu dùng chuyển sang hàng rẻ tương đối), <strong>cải thiện chất lượng</strong> (giá tăng nhưng hàng tốt hơn), <strong>hàng hóa mới</strong> (vào rổ muộn). Chỉ số xích (chained) giảm thiên lệch thay thế.</li><li><strong>Headline vs core:</strong> lạm phát lõi loại bỏ thực phẩm và năng lượng biến động mạnh — NHTW theo dõi core để tránh phản ứng với nhiễu.</li><li><strong>Từ vựng lạm phát:</strong> disinflation = lạm phát vẫn dương nhưng giảm dần; deflation = giá thực sự giảm (nguy hiểm: tăng gánh nợ thực, trì hoãn chi tiêu); hyperinflation = lạm phát cực đoan tự khuếch đại. Chi phí đẩy (lương, năng lượng) vs cầu kéo (tổng cầu vượt năng lực); <em>kỳ vọng</em> lạm phát có thể khiến cả hai tự duy trì.</li><li><strong>Phân loại chỉ báo:</strong> dẫn dắt (giá cổ phiếu, giấy phép xây dựng, chênh lệch lợi suất, đơn hàng mới, kỳ vọng người tiêu dùng), trùng (sản xuất công nghiệp, thu nhập cá nhân, số lao động có việc), trễ (tỷ lệ thất nghiệp, CPI dịch vụ, lãi suất cho vay cơ bản, tồn kho/doanh số). Chỉ số khuếch tán đo tỷ lệ cấu phần đang tăng.</li></ul>"
    }
   ],
   "formulas": [
    [
     "Unemployment rate",
     "Unemployed / labor force",
     "Discouraged workers leave the labor force"
    ],
    [
     "Inflation rate",
     "(CPI_t − CPI_t−1) / CPI_t−1",
     "Laspeyres basket overstates true inflation"
    ]
   ]
  },
  {
   "title": "Fiscal Policy",
   "sections": [
    {
     "h": "Fiscal tools, the multiplier & automatic stabilizers",
     "en": "<ul><li><strong>What fiscal policy is:</strong> the government’s use of spending and taxation to influence aggregate demand, redistribute income, and allocate resources. Expansionary = a larger deficit (or smaller surplus); contractionary = the reverse. Judge the <em>stance</em> by the change in the structural (cyclically adjusted) budget balance, not the raw deficit.</li><li><strong>Spending tools:</strong> transfer payments (redistribution — not part of GDP), current spending on goods/services, and capital expenditure (infrastructure — also boosts long-run capacity). <strong>Revenue tools:</strong> direct taxes (income, wealth) and indirect taxes (VAT, excise — quick to change, can target behavior). Desirable tax attributes: simplicity, efficiency (minimal distortion), fairness, sufficiency.</li><li><strong>The multiplier:</strong> one dollar of government spending becomes someone’s income, part of which is spent again. With marginal propensity to consume c and tax rate t, the <strong>fiscal multiplier = 1 / [1 − c(1 − t)]</strong>. Spending has a larger impact than tax cuts of equal size (part of a tax cut is saved); the <strong>balanced-budget multiplier</strong> is positive but small.</li><li><strong>Automatic stabilizers vs discretionary policy:</strong> progressive taxes and unemployment benefits expand deficits in downturns <em>automatically</em>, with no legislative delay — one reason economies are more stable than a century ago. Discretionary packages must clear the political process, which creates the lags discussed next.</li></ul>",
     "vi": "<ul><li><strong>Chính sách tài khóa là gì:</strong> việc chính phủ dùng chi tiêu và thuế để tác động tổng cầu, tái phân phối thu nhập, phân bổ nguồn lực. Mở rộng = thâm hụt lớn hơn; thắt chặt = ngược lại. Đánh giá <em>lập trường</em> chính sách qua thay đổi của cân đối ngân sách cơ cấu (đã điều chỉnh chu kỳ), không phải con số thâm hụt thô.</li><li><strong>Công cụ chi:</strong> chuyển giao (tái phân phối — không tính vào GDP), chi thường xuyên cho hàng hóa/dịch vụ, chi đầu tư (hạ tầng — còn nâng năng lực dài hạn). <strong>Công cụ thu:</strong> thuế trực thu (thu nhập, tài sản) và gián thu (VAT, tiêu thụ đặc biệt — thay đổi nhanh, định hướng được hành vi). Thuế tốt cần: đơn giản, hiệu quả (ít méo mó), công bằng, đủ nguồn thu.</li><li><strong>Số nhân tài khóa:</strong> một đồng chi tiêu công trở thành thu nhập của ai đó, một phần lại được chi tiếp. Với xu hướng tiêu dùng biên c và thuế suất t: <strong>số nhân = 1 / [1 − c(1 − t)]</strong>. Chi tiêu có tác động lớn hơn giảm thuế cùng quy mô (một phần tiền giảm thuế bị tiết kiệm); <strong>số nhân ngân sách cân bằng</strong> dương nhưng nhỏ.</li><li><strong>Cơ chế ổn định tự động vs chính sách tùy nghi:</strong> thuế lũy tiến và trợ cấp thất nghiệp tự động nới thâm hụt khi suy thoái, không cần chờ quốc hội — một lý do kinh tế ngày nay ổn định hơn thế kỷ trước. Gói tùy nghi phải qua quy trình chính trị, sinh ra các độ trễ bàn ở phần sau.</li></ul>"
    },
    {
     "h": "Deficits, debt & the limits of fiscal policy",
     "en": "<ul><li><strong>Should we worry about government debt?</strong> Arguments for concern: higher future taxes distort incentives; markets may lose confidence and demand higher yields; borrowing can <strong>crowd out</strong> private investment by raising rates. Arguments against: much debt is domestically owned (\"we owe it to ourselves\"); debt financing may fund productivity-raising capital; if <strong>Ricardian equivalence</strong> holds, households save in anticipation of future taxes and deficits change little — the evidence for full equivalence is weak. The key sustainability metric is the <em>debt-to-GDP trajectory</em>: real interest rate vs real growth.</li><li><strong>The three lags</strong> (heavily tested): <strong>recognition</strong> lag — time to realize the economy has turned; <strong>action</strong> lag — time for legislatures to pass measures; <strong>impact</strong> lag — time for spending/taxes to affect demand. Poorly timed stimulus can arrive pro-cyclically.</li><li><strong>Other limitations:</strong> forecasting error, supply-side (structural) problems that demand policy cannot fix, political incentives to overuse stimulus, and rising rates if debt is already high.</li></ul>",
     "vi": "<ul><li><strong>Có nên lo về nợ công?</strong> Lý do lo: thuế tương lai cao gây méo mó động lực; thị trường có thể mất niềm tin và đòi lợi suất cao hơn; vay nợ <strong>chèn lấn</strong> đầu tư tư nhân qua lãi suất. Lý do không quá lo: phần lớn nợ do người trong nước nắm (\"tự nợ chính mình\"); nợ có thể tài trợ vốn nâng năng suất; nếu <strong>Ricardian equivalence</strong> đúng, hộ gia đình tăng tiết kiệm để đón thuế tương lai nên tác động của thâm hụt nhỏ — bằng chứng cho equivalence đầy đủ khá yếu. Thước đo bền vững then chốt là <em>quỹ đạo nợ/GDP</em>: lãi suất thực so với tăng trưởng thực.</li><li><strong>Ba độ trễ</strong> (thi rất nhiều): <strong>nhận biết</strong> — thời gian nhận ra kinh tế đã đổi chiều; <strong>hành động</strong> — thời gian quốc hội thông qua; <strong>tác động</strong> — thời gian chính sách thấm vào tổng cầu. Kích thích sai thời điểm có thể thành thuận chu kỳ.</li><li><strong>Hạn chế khác:</strong> sai số dự báo, vấn đề cơ cấu (phía cung) mà chính sách tổng cầu không chữa được, động cơ chính trị lạm dụng kích thích, và lãi suất tăng khi nợ đã cao.</li></ul>"
    }
   ],
   "formulas": [
    [
     "Fiscal multiplier",
     "1 / [1 − c(1 − t)]",
     "c = MPC, t = tax rate"
    ]
   ]
  },
  {
   "title": "Monetary Policy",
   "sections": [
    {
     "h": "Money, central banks & the policy toolkit",
     "en": "<ul><li><strong>Money’s functions:</strong> medium of exchange, unit of account, store of value. Banks <em>create</em> money by lending out deposits: with a reserve requirement R, the maximum <strong>money multiplier = 1/R</strong> (new reserves of 100 with R = 10% can support up to 1,000 of deposits).</li><li><strong>The quantity theory:</strong> MV = PY. With stable velocity V and output Y set by real factors, sustained money growth ultimately drives prices — <em>money neutrality</em> in the long run, and the reason \"inflation is always and everywhere a monetary phenomenon\" in the long run.</li><li><strong>Central bank roles:</strong> sole issuer of currency, banker to government and banks, lender of last resort, supervisor of payments, holder of FX reserves, and conductor of monetary policy. Effectiveness rests on three qualities: <strong>independence</strong> (operational at minimum), <strong>credibility</strong> (expectations anchor to the target), <strong>transparency</strong> (published forecasts and reasoning).</li><li><strong>The toolkit:</strong> the <strong>policy rate</strong> (repo/refinancing/funds rate — the workhorse), <strong>reserve requirements</strong> (blunt, rarely moved in developed markets), and <strong>open market operations</strong> (buying securities injects reserves and eases; selling drains and tightens). Most developed central banks practice <strong>inflation targeting</strong>, commonly around 2%, adjusting the policy rate relative to the <strong>neutral rate</strong> ≈ trend real growth + inflation target: above neutral = contractionary, below = expansionary.</li></ul>",
     "vi": "<ul><li><strong>Chức năng của tiền:</strong> phương tiện trao đổi, đơn vị hạch toán, phương tiện cất trữ giá trị. Ngân hàng <em>tạo tiền</em> qua cho vay: với tỷ lệ dự trữ bắt buộc R, <strong>số nhân tiền tối đa = 1/R</strong> (100 dự trữ mới với R = 10% có thể tạo tới 1.000 tiền gửi).</li><li><strong>Thuyết số lượng tiền:</strong> MV = PY. Với vòng quay V ổn định và sản lượng Y do yếu tố thực quyết định, tăng trưởng tiền kéo dài rốt cuộc đẩy giá — <em>tính trung lập của tiền</em> trong dài hạn.</li><li><strong>Vai trò NHTW:</strong> độc quyền phát hành tiền, ngân hàng của chính phủ và các ngân hàng, người cho vay cuối cùng, giám sát thanh toán, quản lý dự trữ ngoại hối, điều hành chính sách tiền tệ. Hiệu quả dựa trên 3 phẩm chất: <strong>độc lập</strong> (tối thiểu là độc lập vận hành), <strong>đáng tin cậy</strong> (kỳ vọng neo vào mục tiêu), <strong>minh bạch</strong> (công bố dự báo và lập luận).</li><li><strong>Bộ công cụ:</strong> <strong>lãi suất điều hành</strong> (repo/tái cấp vốn — công cụ chủ lực), <strong>dự trữ bắt buộc</strong> (thô, ít dùng ở nước phát triển), <strong>nghiệp vụ thị trường mở</strong> (mua chứng khoán bơm dự trữ = nới lỏng; bán = hút về, thắt chặt). Hầu hết NHTW phát triển theo <strong>inflation targeting</strong>, thường quanh 2%, điều chỉnh lãi suất quanh <strong>lãi suất trung tính</strong> ≈ tăng trưởng thực xu hướng + mục tiêu lạm phát: trên trung tính = thắt chặt, dưới = nới lỏng.</li></ul>"
    },
    {
     "h": "Transmission, limitations & the fiscal–monetary mix",
     "en": "<ul><li><strong>Transmission channels</strong> — how a policy-rate change reaches inflation: (1) <em>bank lending rates</em> → consumption and investment; (2) <em>asset prices</em> (bonds, equities, housing) → wealth and collateral; (3) <em>expectations</em> about future policy and inflation; (4) the <em>exchange rate</em> → net exports and import prices. The full chain operates with long, variable lags (often 1–2 years).</li><li><strong>Limitations:</strong> at very low rates the economy can hit a <strong>liquidity trap</strong> — money demand becomes so elastic that extra liquidity is hoarded; the <strong>zero lower bound</strong> caps conventional easing, prompting <strong>quantitative easing</strong> (large-scale asset purchases). Central banks also cannot force banks to lend or fix supply-side problems. Deflation is especially hard to fight — real rates stay high even at zero nominal rates.</li><li><strong>Reading the mix</strong> (exam favorite): easy money + easy fiscal → strong nominal growth, expanding public and private sectors; tight money + tight fiscal → contraction; <strong>easy fiscal + tight money</strong> → high real interest rates and a larger government share; <strong>tight fiscal + easy money</strong> → low rates, investment-led private growth.</li></ul>",
     "vi": "<ul><li><strong>Kênh truyền dẫn</strong> — cách thay đổi lãi suất điều hành đi tới lạm phát: (1) <em>lãi suất cho vay của ngân hàng</em> → tiêu dùng và đầu tư; (2) <em>giá tài sản</em> (trái phiếu, cổ phiếu, nhà đất) → hiệu ứng của cải và tài sản thế chấp; (3) <em>kỳ vọng</em> về chính sách và lạm phát tương lai; (4) <em>tỷ giá</em> → xuất khẩu ròng và giá nhập khẩu. Cả chuỗi vận hành với độ trễ dài và biến động (thường 1–2 năm).</li><li><strong>Hạn chế:</strong> lãi suất rất thấp có thể rơi vào <strong>bẫy thanh khoản</strong> — cầu tiền co giãn đến mức thanh khoản bơm thêm bị găm giữ; <strong>cận dưới bằng 0</strong> chặn nới lỏng truyền thống, dẫn đến <strong>QE</strong> (mua tài sản quy mô lớn). NHTW cũng không thể ép ngân hàng cho vay hay sửa vấn đề phía cung. Giảm phát đặc biệt khó chống — lãi suất thực vẫn cao dù lãi suất danh nghĩa bằng 0.</li><li><strong>Đọc tổ hợp chính sách</strong> (rất hay thi): tiền tệ lỏng + tài khóa lỏng → tăng trưởng danh nghĩa mạnh, cả khu vực công lẫn tư mở rộng; cả hai chặt → thu hẹp; <strong>tài khóa lỏng + tiền tệ chặt</strong> → lãi suất thực cao, khu vực công phình to; <strong>tài khóa chặt + tiền tệ lỏng</strong> → lãi suất thấp, tăng trưởng tư nhân dẫn dắt bởi đầu tư.</li></ul>"
    }
   ],
   "formulas": [
    [
     "Money multiplier",
     "1 / reserve requirement",
     ""
    ],
    [
     "Quantity theory",
     "M × V = P × Y",
     "Growth form: %ΔM + %ΔV = %ΔP + %ΔY"
    ],
    [
     "Fisher relation",
     "(1 + nominal) = (1 + real)(1 + expected inflation)",
     "Approx: nominal ≈ real + inflation"
    ],
    [
     "Neutral rate",
     "Trend real growth + inflation target",
     "Policy above neutral = contractionary"
    ]
   ]
  },
  {
   "title": "Introduction to Geopolitics",
   "sections": [
    {
     "h": "Geopolitics: actors, cooperation & the tools of power",
     "en": "<ul><li><strong>What geopolitics studies:</strong> how geography, politics, and economics shape interactions among <em>state actors</em> (governments) and <em>non-state actors</em> (multinationals, NGOs, cartels). Countries balance two goals that pull in opposite directions: <strong>national security/sovereignty</strong> and the <strong>economic gains from cooperation</strong>.</li><li><strong>Classifying regimes on two axes:</strong> cooperation (does the country harmonize rules, trade, share information?) and globalization (how integrated are its markets and capital flows?). Combinations range from <em>autarky</em> (non-cooperative, closed — self-sufficiency, state control), through <em>hegemony</em> (globalized but on the dominant power’s terms), <em>bilateralism/regionalism</em>, to full <em>multilateralism</em> (open and cooperative). International organizations — IMF (currency/balance-of-payments stability and lending), World Bank (development finance), WTO (trade rules and dispute resolution) — are the infrastructure of cooperation.</li><li><strong>The tools of geopolitics:</strong> <em>national security tools</em> (armed conflict, espionage, alliances such as NATO); <em>economic tools</em> (free-trade agreements, common markets, nationalization, sanctions on goods); and <em>financial tools</em> (currency reserve status, access to capital markets and payment networks — e.g., excluding banks from international payment systems, freezing reserves). Tools can be used actively or as threats.</li></ul>",
     "vi": "<ul><li><strong>Địa chính trị nghiên cứu gì:</strong> cách địa lý, chính trị và kinh tế định hình tương tác giữa <em>chủ thể nhà nước</em> (chính phủ) và <em>phi nhà nước</em> (tập đoàn đa quốc gia, NGO, cartel). Các quốc gia phải cân bằng hai mục tiêu kéo ngược nhau: <strong>an ninh/chủ quyền quốc gia</strong> và <strong>lợi ích kinh tế từ hợp tác</strong>.</li><li><strong>Phân loại theo hai trục:</strong> mức độ hợp tác (hài hòa luật lệ, thương mại, chia sẻ thông tin?) và mức độ toàn cầu hóa (thị trường và dòng vốn hội nhập tới đâu?). Các tổ hợp trải từ <em>tự cung tự cấp (autarky)</em> — đóng cửa, nhà nước kiểm soát — qua <em>bá quyền (hegemony)</em> — toàn cầu hóa nhưng theo luật của cường quốc chi phối — <em>song phương/khu vực</em>, đến <em>đa phương</em> đầy đủ (mở và hợp tác). Các tổ chức quốc tế — IMF (ổn định tiền tệ/cán cân thanh toán và cho vay), World Bank (tài trợ phát triển), WTO (luật thương mại và giải quyết tranh chấp) — là hạ tầng của hợp tác.</li><li><strong>Công cụ địa chính trị:</strong> <em>công cụ an ninh</em> (xung đột vũ trang, tình báo, liên minh như NATO); <em>công cụ kinh tế</em> (hiệp định thương mại tự do, thị trường chung, quốc hữu hóa, trừng phạt hàng hóa); <em>công cụ tài chính</em> (vị thế đồng tiền dự trữ, quyền tiếp cận thị trường vốn và mạng thanh toán — ví dụ loại ngân hàng khỏi hệ thống thanh toán quốc tế, đóng băng dự trữ). Công cụ có thể dùng thật hoặc chỉ để đe dọa.</li></ul>"
    },
    {
     "h": "Geopolitical risk for investors",
     "en": "<ul><li><strong>Three risk types by horizon and predictability:</strong> <em>event risk</em> — tied to known calendars (elections, referendums, leadership transitions); <em>exogenous risk</em> — sudden shocks with little warning (invasions, coups, natural disasters triggering political crises); <em>thematic risk</em> — slow-burning forces that play out over years (climate change, cyber threats, migration, great-power rivalry).</li><li><strong>Assessing impact — three lenses:</strong> <em>likelihood</em>, <em>velocity</em> (how fast it hits portfolios: high-velocity shocks hit liquid risk assets first), and <em>size/scope</em> of impact (discrete sectors vs the global economy). High-likelihood/low-impact risks may deserve monitoring only; low-likelihood/high-impact risks call for hedges and scenario analysis.</li><li><strong>Portfolio responses:</strong> track early-warning signals, run scenario analysis and stress tests, diversify across regions and supply chains, and demand a higher risk premium for exposed assets. Geopolitics affects investments through volatility spikes, capital-flow reversals, sanctions cutting off markets, resource nationalism, and currency pressure — but overreacting to every headline is itself a documented investor error.</li></ul>",
     "vi": "<ul><li><strong>Ba loại rủi ro theo kỳ hạn và khả năng dự đoán:</strong> <em>rủi ro sự kiện</em> — gắn với lịch đã biết (bầu cử, trưng cầu dân ý, chuyển giao quyền lực); <em>rủi ro ngoại sinh</em> — cú sốc bất ngờ (xâm lược, đảo chính, thiên tai kích hoạt khủng hoảng chính trị); <em>rủi ro chủ đề</em> — các lực chậm rãi kéo dài nhiều năm (biến đổi khí hậu, an ninh mạng, di cư, cạnh tranh nước lớn).</li><li><strong>Đánh giá tác động — ba lăng kính:</strong> <em>xác suất</em>, <em>tốc độ</em> (đánh vào danh mục nhanh cỡ nào: cú sốc tốc độ cao đập vào tài sản rủi ro thanh khoản trước), và <em>quy mô/phạm vi</em> (vài ngành riêng lẻ hay cả kinh tế toàn cầu). Rủi ro xác suất cao/tác động thấp có thể chỉ cần theo dõi; xác suất thấp/tác động lớn đòi hỏi phòng hộ và phân tích kịch bản.</li><li><strong>Ứng xử của danh mục:</strong> theo dõi tín hiệu cảnh báo sớm, chạy phân tích kịch bản và stress test, đa dạng hóa theo khu vực và chuỗi cung ứng, đòi phần bù rủi ro cao hơn cho tài sản chịu rủi ro. Địa chính trị tác động qua biến động tăng vọt, dòng vốn đảo chiều, trừng phạt cắt đứt thị trường, chủ nghĩa dân tộc tài nguyên, áp lực tỷ giá — nhưng phản ứng thái quá với mọi tin tức cũng là lỗi đầu tư đã được ghi nhận.</li></ul>"
    }
   ]
  },
  {
   "title": "International Trade",
   "sections": [
    {
     "h": "Why nations trade: absolute vs comparative advantage",
     "en": "<p><strong>Absolute advantage</strong> = producing a good with fewer resources. <strong>Comparative advantage</strong> = producing it at a lower <em>opportunity cost</em> — and this, not absolute advantage, is what makes trade mutually beneficial. Even a country that is worse at producing <em>everything</em> gains by specializing where its opportunity-cost disadvantage is smallest.</p><p><em>Worked example:</em> Country A can make 10 cars <em>or</em> 20 computers; Country B can make 4 cars <em>or</em> 16 computers. A’s opportunity cost of a car = 2 computers; B’s = 4 computers. A has comparative advantage in cars, B in computers (¼ car vs ½ car per computer). Both gain by A exporting cars and B exporting computers at any exchange ratio between 2 and 4 computers per car.</p><p><strong>Gains and losses:</strong> trade raises total output and lowers consumer prices, but the gains are unevenly distributed — import-competing industries and their workers lose, which is why trade policy is politically contested. Benefits of trade: specialization, economies of scale, more variety, technology transfer, competitive discipline on domestic monopolies. Costs cited: adjustment/unemployment in displaced sectors and greater interdependence.</p>",
     "vi": "<p><strong>Lợi thế tuyệt đối</strong> = sản xuất một mặt hàng với ít nguồn lực hơn. <strong>Lợi thế so sánh</strong> = sản xuất với <em>chi phí cơ hội</em> thấp hơn — và chính điều này (không phải lợi thế tuyệt đối) khiến thương mại có lợi cho cả hai bên. Ngay cả nước kém hơn ở <em>mọi</em> mặt hàng vẫn hưởng lợi khi chuyên môn hóa vào nơi bất lợi chi phí cơ hội nhỏ nhất.</p><p><em>Ví dụ:</em> Nước A làm được 10 ô tô <em>hoặc</em> 20 máy tính; nước B làm 4 ô tô <em>hoặc</em> 16 máy tính. Chi phí cơ hội 1 ô tô của A = 2 máy tính; của B = 4 máy tính. A có lợi thế so sánh về ô tô, B về máy tính. Cả hai cùng lợi khi A xuất ô tô, B xuất máy tính với tỷ lệ trao đổi bất kỳ giữa 2 và 4 máy tính/ô tô.</p><p><strong>Được và mất:</strong> thương mại nâng tổng sản lượng và hạ giá tiêu dùng, nhưng lợi ích phân bổ không đều — ngành cạnh tranh với hàng nhập và người lao động trong đó chịu thiệt, nên chính sách thương mại luôn gây tranh cãi chính trị. Lợi ích: chuyên môn hóa, lợi thế quy mô, đa dạng hàng hóa, chuyển giao công nghệ, kỷ luật cạnh tranh với độc quyền nội địa. Chi phí: thất nghiệp/điều chỉnh ở ngành bị thay thế và sự phụ thuộc lẫn nhau tăng.</p>"
    },
    {
     "h": "Trade restrictions & trading blocs",
     "en": "<ul><li><strong>Tariff</strong> (tax on imports): domestic price rises → domestic producers gain (produce more), consumers lose (pay more, buy less), the <em>government collects revenue</em>, and a deadweight loss remains. <strong>Quota</strong> (quantity limit): similar price and welfare effects, but instead of tariff revenue, <em>quota rents</em> accrue to whoever holds the import licenses — often foreign exporters, making quotas worse for the importing country. <strong>Export subsidy</strong>: benefits domestic exporters at taxpayers’ expense and distorts trade. <strong>VER</strong> (voluntary export restraint): a quota administered by the exporting country. In the small-country case, all these reduce national welfare; only a <em>large</em> country can theoretically gain from a tariff via better terms of trade (before retaliation).</li><li><strong>Capital restrictions</strong> limit cross-border investment flows — sometimes defensible against hot-money surges, but they raise capital costs long-run.</li><li><strong>Trading blocs by depth of integration:</strong> <em>Free trade area</em> (no internal tariffs; members keep own external policy — needs rules of origin) → <em>customs union</em> (adds a common external tariff) → <em>common market</em> (adds free movement of labor and capital) → <em>economic union</em> (adds common institutions and policy) → <em>monetary union</em> (adds a single currency, e.g., the euro area). Deeper integration brings larger gains — and larger loss of policy autonomy.</li></ul>",
     "vi": "<ul><li><strong>Thuế quan</strong> (thuế hàng nhập): giá nội địa tăng → nhà sản xuất trong nước lợi (sản xuất nhiều hơn), người tiêu dùng thiệt (mua đắt, mua ít), <em>chính phủ thu được thuế</em>, và vẫn còn tổn thất vô ích. <strong>Hạn ngạch (quota)</strong>: tác động giá và phúc lợi tương tự, nhưng thay vì thuế thu về ngân sách, <em>đặc lợi quota</em> rơi vào tay người giữ giấy phép nhập khẩu — thường là nhà xuất khẩu nước ngoài, khiến quota tệ hơn cho nước nhập khẩu. <strong>Trợ cấp xuất khẩu</strong>: lợi cho nhà xuất khẩu nội địa bằng tiền thuế dân và bóp méo thương mại. <strong>VER</strong>: hạn ngạch do chính nước xuất khẩu quản lý. Với nước nhỏ, tất cả đều làm giảm phúc lợi quốc gia; chỉ nước <em>lớn</em> mới có thể lợi từ thuế quan nhờ cải thiện tỷ lệ trao đổi (trước khi bị trả đũa).</li><li><strong>Hạn chế dòng vốn</strong> giới hạn đầu tư xuyên biên giới — đôi khi hợp lý để chặn dòng tiền nóng, nhưng dài hạn làm tăng chi phí vốn.</li><li><strong>Khối thương mại theo độ sâu hội nhập:</strong> <em>khu vực mậu dịch tự do</em> (bỏ thuế nội khối; giữ chính sách đối ngoại riêng — cần quy tắc xuất xứ) → <em>liên minh thuế quan</em> (thêm thuế đối ngoại chung) → <em>thị trường chung</em> (thêm tự do di chuyển lao động, vốn) → <em>liên minh kinh tế</em> (thêm thể chế và chính sách chung) → <em>liên minh tiền tệ</em> (thêm đồng tiền chung, như khu vực euro). Hội nhập càng sâu, lợi ích càng lớn — và mất tự chủ chính sách càng nhiều.</li></ul>"
    }
   ]
  },
  {
   "title": "Capital Flows and the FX Market",
   "sections": [
    {
     "h": "The balance of payments & what drives capital flows",
     "en": "<ul><li><strong>Accounting that must balance:</strong> the <strong>current account</strong> (goods and services trade, primary income, transfers) plus the <strong>capital account</strong> and the <strong>financial account</strong> (cross-border purchases of real and financial assets, reserve changes) sum to zero. A current account <em>deficit</em> is necessarily financed by net capital <em>inflows</em> — foreigners accumulating claims on the country.</li><li><strong>The saving–investment lens:</strong> from national accounts, CA = private saving + government saving − domestic investment. A country that invests more than it saves (or runs large fiscal deficits without private saving to match — the \"twin deficits\" link) runs a current account deficit. This is why current accounts are ultimately macro phenomena, not just trade-policy outcomes.</li><li><strong>Why flows matter for markets:</strong> sustained inflows compress yields and support the currency; sudden stops and outflow reversals do the opposite — the classic emerging-market crisis dynamic. FX market participants: the sell side (dealing banks) and the buy side — corporations hedging, real-money and leveraged investors, governments and sovereign wealth funds, central banks, and retail. Central banks intervene in FX markets to manage regimes or smooth volatility.</li></ul>",
     "vi": "<ul><li><strong>Hạch toán bắt buộc cân bằng:</strong> <strong>cán cân vãng lai</strong> (thương mại hàng hóa – dịch vụ, thu nhập sơ cấp, chuyển giao) cộng <strong>tài khoản vốn</strong> và <strong>tài khoản tài chính</strong> (mua bán tài sản thực/tài chính xuyên biên giới, thay đổi dự trữ) bằng 0. <em>Thâm hụt</em> vãng lai tất yếu được tài trợ bởi dòng vốn <em>vào ròng</em> — người nước ngoài tích lũy quyền đòi nợ đối với quốc gia đó.</li><li><strong>Lăng kính tiết kiệm–đầu tư:</strong> từ hạch toán quốc gia, CA = tiết kiệm tư nhân + tiết kiệm chính phủ − đầu tư trong nước. Nước đầu tư nhiều hơn tiết kiệm (hoặc thâm hụt ngân sách lớn mà tiết kiệm tư nhân không bù nổi — liên hệ \"thâm hụt kép\") sẽ thâm hụt vãng lai. Vì vậy cán cân vãng lai về bản chất là hiện tượng vĩ mô, không chỉ là kết quả chính sách thương mại.</li><li><strong>Vì sao dòng vốn quan trọng với thị trường:</strong> dòng vào bền vững nén lợi suất và đỡ giá nội tệ; dừng đột ngột và đảo chiều dòng vốn gây tác động ngược — kịch bản khủng hoảng thị trường mới nổi kinh điển. Thành phần thị trường FX: bên bán (ngân hàng tạo lập) và bên mua — doanh nghiệp phòng hộ, quỹ đầu tư truyền thống và đòn bẩy, chính phủ và quỹ đầu tư quốc gia, NHTW, nhà đầu tư cá nhân. NHTW can thiệp để quản lý chế độ tỷ giá hoặc làm mượt biến động.</li></ul>"
    }
   ],
   "formulas": [
    [
     "BOP identity",
     "Current account + capital & financial accounts = 0",
     "CA deficit ⇔ net capital inflows"
    ],
    [
     "Saving–investment",
     "CA = S_private + S_government − I",
     "Invest > save ⇒ CA deficit"
    ]
   ]
  },
  {
   "title": "Exchange Rate Calculations",
   "sections": [
    {
     "h": "Quotes, real rates, and forward rates",
     "en": "<p>An exchange rate is stated as <strong>price currency / base currency</strong>: USD/EUR = 1.10 means 1 euro costs 1.10 dollars. If USD/EUR rises, the euro (base) <em>appreciates</em>. The <strong>real exchange rate</strong> adjusts the nominal rate for relative price levels and measures relative purchasing power. Cross rates chain two quotes together.</p><p><strong>Forward rates</strong> are set by covered interest rate parity — arbitrage, not forecasts: F/S = (1 + i<sub>price</sub>) / (1 + i<sub>base</sub>). The currency with the <em>higher</em> interest rate trades at a <strong>forward discount</strong>. Points: forward premium/discount quoted as (F − S), often in pips.</p><p>Regimes range from free float and managed float to pegs, currency boards, and dollarization. Capital restrictions and fixed regimes trade policy autonomy for stability (the \"impossible trinity\": free capital flow, fixed exchange rate, independent monetary policy — pick two).</p>",
     "vi": "<p>Tỷ giá được yết theo <strong>đồng tiền định giá / đồng tiền cơ sở</strong>: USD/EUR = 1.10 nghĩa là 1 euro giá 1.10 USD. USD/EUR tăng → euro (đồng cơ sở) <em>lên giá</em>. <strong>Tỷ giá thực</strong> điều chỉnh tỷ giá danh nghĩa theo mặt bằng giá tương đối, đo sức mua tương đối. Tỷ giá chéo ghép hai cặp tỷ giá.</p><p><strong>Tỷ giá kỳ hạn</strong> được xác định bởi ngang giá lãi suất có phòng hộ (covered interest rate parity) — là kết quả của arbitrage, không phải dự báo: F/S = (1 + i<sub>định giá</sub>) / (1 + i<sub>cơ sở</sub>). Đồng tiền có lãi suất <em>cao hơn</em> giao dịch với <strong>forward discount</strong>.</p><p>Cơ chế tỷ giá: thả nổi tự do, thả nổi có quản lý, neo tỷ giá, currency board, đô la hóa. \"Bộ ba bất khả thi\": tự do dòng vốn, tỷ giá cố định, chính sách tiền tệ độc lập — chỉ chọn được hai.</p>"
    },
    {
     "h": "Cross rates & forward points — worked calculations",
     "en": "<p><strong>Cross rates</strong> chain two quotes through a common currency. Given USD/EUR = 1.1000 and JPY/USD = 150.00: JPY/EUR = JPY/USD × USD/EUR = 150.00 × 1.1000 = 165.00. When the common currency appears on the same side of both quotes, <em>divide</em> instead — track the algebra of the labels, treating them literally as fractions.</p><p><strong>Forward points (pips):</strong> forwards are quoted as points to add to spot, scaled by 10,000 for most pairs (100 for JPY pairs). Spot USD/EUR = 1.2000 with forward points +238 → forward = 1.2000 + 238/10,000 = 1.2238. The <strong>forward premium/discount</strong> as a rate: (F − S)/S = 0.0238/1.2000 ≈ +1.98% — the base currency (EUR) trades at a forward premium, consistent with covered interest parity when the EUR interest rate is below the USD rate by about that margin.</p><p><strong>Parity recap and the arbitrage check:</strong> F = S × (1 + i<sub>price</sub>·T)/(1 + i<sub>base</sub>·T). If the quoted forward is above the parity value, borrow the price currency, buy the base spot, invest at the base rate, and sell forward — a riskless profit that forces prices back into line. Remember the direction rule: the <em>higher-interest-rate</em> currency always trades at a forward <em>discount</em>.</p>",
     "vi": "<p><strong>Tỷ giá chéo</strong> ghép hai cặp tỷ giá qua một đồng tiền chung. Cho USD/EUR = 1,1000 và JPY/USD = 150,00: JPY/EUR = JPY/USD × USD/EUR = 150,00 × 1,1000 = 165,00. Nếu đồng tiền chung nằm cùng phía ở cả hai cặp thì <em>chia</em> thay vì nhân — cứ xử lý nhãn tỷ giá như phân số đại số.</p><p><strong>Điểm kỳ hạn (pips):</strong> tỷ giá kỳ hạn được yết bằng số điểm cộng vào giá giao ngay, chia cho 10.000 với đa số cặp (10 0 với cặp JPY). Spot USD/EUR = 1,2000 với điểm kỳ hạn +238 → forward = 1,2000 + 238/10.000 = 1,2238. <strong>Forward premium/discount</strong> dạng tỷ lệ: (F − S)/S = 0,0238/1,2000 ≈ +1,98% — đồng cơ sở (EUR) có premium kỳ hạn, nhất quán với ngang giá lãi suất có phòng hộ khi lãi suất EUR thấp hơn USD khoảng chừng đó.</p><p><strong>Ôn parity và phép kiểm arbitrage:</strong> F = S × (1 + i<sub>định giá</sub>·T)/(1 + i<sub>cơ sở</sub>·T). Nếu forward niêm yết cao hơn giá trị parity: vay đồng định giá, mua đồng cơ sở giao ngay, gửi ở lãi suất đồng cơ sở, bán kỳ hạn — lợi nhuận phi rủi ro sẽ ép giá quay về cân bằng. Quy tắc chiều: đồng tiền <em>lãi suất cao hơn</em> luôn có forward <em>discount</em>.</p>"
    }
   ],
   "formulas": [
    [
     "Cross rate",
     "JPY/EUR = JPY/USD × USD/EUR",
     "Cancel the common currency like a fraction"
    ],
    [
     "Forward from points",
     "F = S + points/10,000",
     "JPY pairs: ÷100"
    ],
    [
     "Forward premium %",
     "(F − S) / S",
     "Higher-rate currency → forward discount"
    ],
    [
     "Covered interest parity",
     "F = S × (1 + i_price) / (1 + i_base)",
     "F, S quoted as price/base"
    ]
   ]
  }
 ],
 "vocab": [
  [
   "elasticity",
   "Sensitivity of quantity demanded to a change in price, income, or other prices.",
   "độ co giãn"
  ],
  [
   "substitute / complement",
   "Positive / negative cross-price elasticity goods.",
   "hàng thay thế / bổ sung"
  ],
  [
   "economies of scale",
   "Falling long-run average cost as output rises.",
   "lợi thế kinh tế theo quy mô"
  ],
  [
   "stagflation",
   "High inflation combined with stagnant growth and high unemployment.",
   "lạm phát đình trệ"
  ],
  [
   "hyperinflation",
   "Extremely rapid, out-of-control inflation.",
   "siêu lạm phát"
  ],
  [
   "neutral rate",
   "Policy rate consistent with trend growth and stable inflation.",
   "lãi suất trung tính"
  ],
  [
   "crowding out",
   "Government borrowing raising rates and displacing private investment.",
   "hiệu ứng chèn lấn"
  ],
  [
   "base currency",
   "The currency being priced in an exchange-rate quote (the denominator).",
   "đồng tiền cơ sở (mẫu số)"
  ],
  [
   "forward premium/discount",
   "Forward rate above/below the spot rate.",
   "điểm kỳ hạn cộng/trừ"
  ],
  [
   "currency peg",
   "Fixing a currency’s value to another currency.",
   "neo tỷ giá"
  ],
  [
   "fiscal multiplier",
   "1/[1 − c(1 − t)]: total demand created per dollar of government spending",
   "Số nhân tài khóa — tổng cầu tạo ra trên mỗi đồng chi tiêu công"
  ],
  [
   "Ricardian equivalence",
   "Households save tax cuts in anticipation of future taxes, muting fiscal stimulus",
   "Hộ gia đình tiết kiệm khoản giảm thuế vì đoán trước thuế tương lai, làm giảm tác dụng kích thích tài khóa"
  ],
  [
   "structural (cyclically adjusted) deficit",
   "The deficit that would occur at full employment — the true measure of fiscal stance",
   "Thâm hụt cơ cấu — thâm hụt tại mức toàn dụng, thước đo thật của lập trường tài khóa"
  ],
  [
   "money multiplier",
   "1/reserve requirement: maximum deposits supported per unit of new reserves",
   "Số nhân tiền = 1/tỷ lệ dự trữ bắt buộc"
  ],
  [
   "quantity theory of money",
   "MV = PY: sustained money growth drives prices in the long run",
   "Thuyết số lượng tiền: MV = PY"
  ],
  [
   "inflation targeting",
   "Policy framework anchoring expectations to a published inflation goal (~2%)",
   "Khung chính sách neo kỳ vọng vào mục tiêu lạm phát công bố (~2%)"
  ],
  [
   "core inflation",
   "Inflation excluding volatile food and energy prices",
   "Lạm phát lõi — loại trừ giá thực phẩm và năng lượng"
  ],
  [
   "substitution bias",
   "Fixed-basket (Laspeyres) indexes overstate inflation as consumers shift to cheaper goods",
   "Thiên lệch thay thế — chỉ số rổ cố định thổi phồng lạm phát"
  ],
  [
   "transmission mechanism",
   "Channels (lending rates, asset prices, expectations, exchange rate) linking policy rates to inflation",
   "Cơ chế truyền dẫn chính sách tiền tệ: lãi vay, giá tài sản, kỳ vọng, tỷ giá"
  ],
  [
   "zero lower bound",
   "The floor near 0% on nominal policy rates that motivates quantitative easing",
   "Cận dưới bằng 0 của lãi suất danh nghĩa — lý do ra đời QE"
  ],
  [
   "comparative advantage",
   "Producing at a lower opportunity cost — the true basis for gains from trade",
   "Lợi thế so sánh — chi phí cơ hội thấp hơn, nền tảng thật của lợi ích thương mại"
  ],
  [
   "quota rent",
   "Profit captured by holders of import licenses under a quota",
   "Đặc lợi quota — lợi nhuận rơi vào người giữ giấy phép nhập khẩu"
  ],
  [
   "trading bloc",
   "FTA → customs union → common market → economic union → monetary union",
   "Khối thương mại theo độ sâu hội nhập tăng dần"
  ],
  [
   "current account",
   "Trade in goods/services plus primary income and transfers",
   "Cán cân vãng lai"
  ],
  [
   "financial account",
   "Cross-border purchases of financial and real assets; mirrors the current account",
   "Tài khoản tài chính — dòng mua bán tài sản xuyên biên giới, đối ứng với vãng lai"
  ],
  [
   "twin deficits",
   "Fiscal deficits contributing to current account deficits via S − I",
   "Thâm hụt kép — thâm hụt ngân sách góp phần gây thâm hụt vãng lai qua S − I"
  ],
  [
   "event / exogenous / thematic risk",
   "Geopolitical risks classified by predictability and horizon",
   "Rủi ro địa chính trị: sự kiện / ngoại sinh / chủ đề"
  ],
  [
   "sanctions",
   "Economic or financial restrictions imposed on a state or entity",
   "Trừng phạt kinh tế/tài chính"
  ],
  [
   "impossible trinity",
   "Free capital flow, fixed exchange rate, independent monetary policy — pick two",
   "Bộ ba bất khả thi"
  ],
  [
   "forward points (pips)",
   "Quoted increments added to spot to obtain the forward rate (÷10,000 for most pairs)",
   "Điểm kỳ hạn cộng vào giá giao ngay (chia 10.000 với đa số cặp)"
  ]
 ],
 "quiz": [
  {
   "q": "In the short run, a perfectly competitive firm should shut down production when the market price falls below its:",
   "opts": [
    "average total cost.",
    "average variable cost.",
    "marginal cost."
   ],
   "ans": 1,
   "en": "B is correct. In the short run, fixed costs are sunk, so the firm operates as long as price covers average variable cost. Below AVC, every unit produced deepens the loss. P < ATC only forces exit in the long run.",
   "vi": "Đáp án B. Trong ngắn hạn chi phí cố định là chi phí chìm, nên doanh nghiệp còn hoạt động khi giá bù được AVC. Dưới AVC, càng sản xuất càng lỗ thêm. P < ATC chỉ buộc rời ngành trong dài hạn."
  },
  {
   "q": "Which unemployment indicator behaves as a lagging indicator of the business cycle?",
   "opts": [
    "The unemployment rate",
    "Stock market indices",
    "Average weekly hours worked in manufacturing"
   ],
   "ans": 0,
   "en": "A is correct. Firms are slow to fire in downturns and slow to rehire in recoveries, so the unemployment rate lags the cycle. Equity indices and average weekly hours are leading indicators.",
   "vi": "Đáp án A. Doanh nghiệp chậm sa thải khi suy thoái và chậm tuyển lại khi phục hồi, nên tỷ lệ thất nghiệp là chỉ báo trễ. Chỉ số chứng khoán và số giờ làm việc bình quân tuần là chỉ báo dẫn dắt."
  },
  {
   "q": "The spot rate is 1.2000 USD/EUR. One-year interest rates are 3% in the US and 1% in the eurozone. The one-year forward USD/EUR rate is closest to:",
   "opts": [
    "1.1767",
    "1.2000",
    "1.2238"
   ],
   "ans": 2,
   "en": "C is correct. F = S × (1 + i_USD)/(1 + i_EUR) = 1.2000 × 1.03/1.01 = 1.2238. The euro (lower-rate, base currency) trades at a forward premium; the higher-rate currency (USD) trades at a forward discount.",
   "vi": "Đáp án C. F = 1.2000 × 1.03/1.01 = 1.2238. Đồng euro (lãi suất thấp, đồng cơ sở) có forward premium; đồng lãi suất cao (USD) có forward discount."
  },
  {
   "q": "A central bank facing an economy in a liquidity trap will find that expansionary monetary policy is:",
   "opts": [
    "highly effective, because rates can fall further.",
    "largely ineffective, because demand for money is extremely elastic.",
    "effective only if combined with currency appreciation."
   ],
   "ans": 1,
   "en": "B is correct. In a liquidity trap, people hoard additional money at near-zero rates instead of spending or investing, so further monetary easing has little effect on demand — a key argument for fiscal stimulus in deep recessions.",
   "vi": "Đáp án B. Trong bẫy thanh khoản, người dân giữ tiền thay vì chi tiêu/đầu tư khi lãi suất gần 0, nên nới lỏng tiền tệ thêm gần như không kích thích được tổng cầu — lý do chính để dùng kích thích tài khóa trong suy thoái sâu."
  }
 ]
});
window.CFA.extra["econ"] = {
 "checks": [
  [
   {
    "q": "In the short run, a perfectly competitive firm should shut down when price falls below its minimum:",
    "opts": [
     "Average total cost",
     "Average variable cost",
     "Marginal cost"
    ],
    "ans": 1,
    "en": "Below minimum AVC, revenue does not even cover variable costs, so producing loses more than shutting down. Between AVC and ATC the firm operates at a loss but covers part of fixed costs.",
    "vi": "Khi giá &lt; AVC tối thiểu, doanh thu không đủ bù chi phí biến đổi → đóng cửa tạm thời sẽ lỗ ít hơn. Nếu giá nằm giữa AVC và ATC, vẫn nên sản xuất để bù một phần chi phí cố định."
   },
   {
    "q": "Many sellers, differentiated products, low barriers to entry, and some pricing power describe:",
    "opts": [
     "Perfect competition",
     "Monopolistic competition",
     "Oligopoly"
    ],
    "ans": 1,
    "en": "Monopolistic competition: differentiation gives each firm a downward-sloping demand curve, but easy entry drives long-run economic profit to zero.",
    "vi": "Cạnh tranh độc quyền: sản phẩm khác biệt tạo chút quyền định giá, nhưng rào cản gia nhập thấp khiến lợi nhuận kinh tế dài hạn về 0."
   }
  ],
  [
   {
    "q": "Discouraged workers who stop looking for jobs cause the official unemployment rate to:",
    "opts": [
     "Overstate labor market weakness",
     "Understate labor market weakness",
     "Be unaffected"
    ],
    "ans": 1,
    "en": "Discouraged workers leave the labor force, so they are not counted as unemployed — the rate falls even though slack remains, understating weakness.",
    "vi": "Người lao động nản chí rời khỏi lực lượng lao động nên không bị tính là thất nghiệp → tỷ lệ thất nghiệp giảm giả tạo, che bớt mức độ yếu của thị trường lao động."
   },
   {
    "q": "Because the CPI is computed from a fixed base-period basket (a Laspeyres index), measured inflation most likely:",
    "opts": [
     "Understates the true rise in the cost of living",
     "Overstates it, due to substitution, quality, and new-goods biases",
     "Equals it exactly"
    ],
    "ans": 1,
    "en": "A fixed basket ignores consumers substituting toward cheaper goods, quality improvements, and new products — all three push measured inflation above true cost-of-living inflation.",
    "vi": "Rổ cố định bỏ qua việc người tiêu dùng chuyển sang hàng rẻ hơn, chất lượng cải thiện và sản phẩm mới — cả ba khiến lạm phát đo được cao hơn lạm phát chi phí sinh hoạt thật."
   }
  ],
  [
   {
    "q": "The marginal propensity to consume is 0.8 and the tax rate is 25%. The fiscal multiplier is closest to:",
    "opts": [
     "1.25",
     "2.50",
     "5.00"
    ],
    "ans": 1,
    "en": "Multiplier = 1/[1 − c(1 − t)] = 1/[1 − 0.8 × 0.75] = 1/0.4 = 2.5: each dollar of new government spending ultimately raises demand by $2.50.",
    "vi": "Số nhân = 1/[1 − 0,8 × 0,75] = 1/0,4 = 2,5: mỗi đồng chi tiêu công mới cuối cùng làm tổng cầu tăng 2,5 đồng."
   },
   {
    "q": "Six months after a recession clearly began, the legislature is still debating a stimulus bill. This delay is best described as the:",
    "opts": [
     "Recognition lag",
     "Action lag",
     "Impact lag"
    ],
    "ans": 1,
    "en": "The downturn is already recognized; the delay in passing legislation is the action lag. The impact lag comes later, as the measures take time to affect demand.",
    "vi": "Suy thoái đã được nhận biết; sự chậm trễ trong thông qua luật là action lag (độ trễ hành động). Impact lag đến sau — khi chính sách cần thời gian để thấm vào tổng cầu."
   }
  ],
  [
   {
    "q": "A central bank fighting above-target inflation would most likely:",
    "opts": [
     "Raise its policy rate and sell securities in open-market operations",
     "Lower its policy rate and buy securities",
     "Cut reserve requirements"
    ],
    "ans": 0,
    "en": "Contractionary monetary policy: raise the policy rate and drain reserves (sell securities), lifting market rates and cooling demand.",
    "vi": "Chính sách tiền tệ thắt chặt: tăng lãi suất điều hành và bán chứng khoán (hút tiền về), đẩy mặt bằng lãi suất lên để hạ nhiệt tổng cầu."
   },
   {
    "q": "Banks receive $100 million of new reserves. With a 10% reserve requirement, the maximum amount of new money the banking system can create is:",
    "opts": [
     "$100 million",
     "$1,000 million",
     "$10 million"
    ],
    "ans": 1,
    "en": "Maximum money multiplier = 1/reserve requirement = 1/0.10 = 10, so up to 10 × 100 = $1,000 million of deposits can be supported.",
    "vi": "Số nhân tiền tối đa = 1/tỷ lệ dự trữ = 1/0,10 = 10 → hệ thống ngân hàng có thể tạo tối đa 1.000 triệu USD tiền gửi."
   }
  ],
  [
   {
    "q": "Excluding a country’s banks from an international payment network is best classified as which tool of geopolitics?",
    "opts": [
     "A national security tool",
     "An economic tool",
     "A financial tool"
    ],
    "ans": 2,
    "en": "Financial tools operate through capital-market and payment-system access (and currency reserve status). Economic tools work through trade (tariffs, agreements); national security tools are military/intelligence.",
    "vi": "Công cụ tài chính vận hành qua quyền tiếp cận thị trường vốn và hệ thống thanh toán (cùng vị thế đồng tiền dự trữ). Công cụ kinh tế đi qua thương mại; công cụ an ninh là quân sự/tình báo."
   },
   {
    "q": "Risk associated with a national election scheduled 10 months from now is best classified as:",
    "opts": [
     "Exogenous risk",
     "Event risk",
     "Thematic risk"
    ],
    "ans": 1,
    "en": "Event risk follows a known calendar (elections, transitions). Exogenous risk arrives without warning; thematic risk unfolds over years (climate, cyber).",
    "vi": "Rủi ro sự kiện gắn với lịch đã biết (bầu cử, chuyển giao). Rủi ro ngoại sinh đến không báo trước; rủi ro chủ đề diễn ra qua nhiều năm (khí hậu, an ninh mạng)."
   }
  ],
  [
   {
    "q": "Country A can produce 10 cars or 20 computers; Country B can produce 4 cars or 16 computers. Country A should export:",
    "opts": [
     "Computers, because it has an absolute advantage in both goods",
     "Cars, because its opportunity cost per car (2 computers) is lower than B’s (4 computers)",
     "Nothing — A gains nothing from trading with a less productive country"
    ],
    "ans": 1,
    "en": "Comparative advantage is about opportunity cost, not absolute productivity. A gives up only 2 computers per car versus B’s 4, so A exports cars, B exports computers — and both gain.",
    "vi": "Lợi thế so sánh dựa trên chi phí cơ hội, không phải năng suất tuyệt đối. A chỉ mất 2 máy tính cho mỗi ô tô so với 4 của B → A xuất ô tô, B xuất máy tính — cả hai cùng lợi."
   },
   {
    "q": "Compared with an equivalent tariff, an import quota most likely differs in that:",
    "opts": [
     "Consumers do not lose under a quota",
     "The government collects no tariff revenue — quota rents may go to foreign license holders",
     "Domestic producers do not benefit"
    ],
    "ans": 1,
    "en": "Price and welfare effects are similar, but a tariff generates government revenue while quota rents accrue to import-license holders — often foreign exporters — making quotas typically worse for the importing country.",
    "vi": "Tác động giá và phúc lợi tương tự, nhưng thuế quan tạo nguồn thu ngân sách còn đặc lợi quota rơi vào người giữ giấy phép — thường là nhà xuất khẩu nước ngoài — nên quota thường tệ hơn cho nước nhập khẩu."
   }
  ],
  [
   {
    "q": "Holding all else constant, a real appreciation of a country’s currency most likely makes its:",
    "opts": [
     "Exports cheaper abroad",
     "Exports more expensive abroad and imports cheaper at home",
     "Trade balance improve immediately"
    ],
    "ans": 1,
    "en": "Appreciation raises the foreign price of exports and lowers the domestic price of imports — typically pressuring the trade balance toward deficit.",
    "vi": "Nội tệ lên giá làm hàng xuất khẩu đắt hơn với người nước ngoài và hàng nhập khẩu rẻ hơn trong nước → thường gây áp lực xấu lên cán cân thương mại."
   },
   {
    "q": "A country runs a persistent current account deficit. Its balance of payments must show:",
    "opts": [
     "A matching deficit in the financial account",
     "Net capital inflows — foreigners accumulating claims on the country",
     "Falling imports"
    ],
    "ans": 1,
    "en": "The BOP sums to zero: a current account deficit is financed by net inflows recorded in the capital/financial account. This is an accounting identity, not a policy choice.",
    "vi": "Cán cân thanh toán phải bằng 0: thâm hụt vãng lai được tài trợ bởi dòng vốn vào ròng ghi ở tài khoản vốn/tài chính. Đây là đồng nhất thức kế toán, không phải lựa chọn chính sách."
   }
  ],
  [
   {
    "q": "A quote of USD/EUR = 1.10 (price/base) means:",
    "opts": [
     "1 US dollar buys 1.10 euros",
     "1 euro costs 1.10 US dollars",
     "The euro depreciated by 10%"
    ],
    "ans": 1,
    "en": "In price/base notation the base currency (EUR) is the one being priced: 1 EUR = 1.10 USD.",
    "vi": "Theo quy ước price/base, đồng cơ sở (EUR) là đồng được định giá: 1 EUR = 1,10 USD."
   },
   {
    "q": "USD/EUR = 1.1000 and JPY/USD = 150.00. The JPY/EUR cross rate is:",
    "opts": [
     "136.36",
     "165.00",
     "151.10"
    ],
    "ans": 1,
    "en": "JPY/EUR = JPY/USD × USD/EUR = 150 × 1.10 = 165.00 — the USD cancels like a fraction.",
    "vi": "JPY/EUR = JPY/USD × USD/EUR = 150 × 1,10 = 165,00 — đồng USD triệt tiêu như phân số."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "Four firms each hold 25% market share. The Herfindahl–Hirschman Index (HHI) is:",
    "opts": [
     "1,000",
     "2,500",
     "625"
    ],
    "ans": 1,
    "en": "HHI = 4 × 25² = 4 × 625 = 2,500 — a highly concentrated market by common regulatory thresholds.",
    "vi": "HHI = 4 × 25² = 2.500 → thị trường tập trung cao theo ngưỡng thông dụng của cơ quan quản lý."
   },
   {
    "q": "The defining feature of oligopoly pricing behavior is:",
    "opts": [
     "Firms are price takers",
     "Pricing decisions are interdependent — each firm must anticipate rivals’ reactions",
     "Prices always equal marginal cost"
    ],
    "ans": 1,
    "en": "With few large firms, each firm’s optimal price/output depends on competitors’ responses — the source of kinked-demand and game-theoretic models.",
    "vi": "Độc quyền nhóm: ít doanh nghiệp lớn nên quyết định giá phụ thuộc lẫn nhau — mỗi hãng phải dự đoán phản ứng của đối thủ (mô hình đường cầu gãy, lý thuyết trò chơi)."
   },
   {
    "q": "Accelerating inflation, rising short-term interest rates, and slowing (but still positive) growth are most typical of which business-cycle phase?",
    "opts": [
     "Early expansion (recovery)",
     "Late expansion (peak approaching)",
     "Trough"
    ],
    "ans": 1,
    "en": "Late-cycle: capacity tightens, inflation accelerates, and central banks tighten — growth decelerates toward the peak.",
    "vi": "Cuối chu kỳ mở rộng: công suất căng, lạm phát tăng tốc, NHTW thắt chặt, tăng trưởng chậm dần trước khi đạt đỉnh."
   },
   {
    "q": "Which is the best example of an automatic fiscal stabilizer?",
    "opts": [
     "An emergency stimulus bill passed during a recession",
     "Unemployment benefits that rise as job losses increase",
     "A central bank rate cut"
    ],
    "ans": 1,
    "en": "Automatic stabilizers (progressive taxes, unemployment insurance) respond without new legislation. Discretionary policy requires action; rate cuts are monetary, not fiscal.",
    "vi": "Cơ chế ổn định tự động (thuế lũy tiến, trợ cấp thất nghiệp) tự vận hành không cần luật mới. Gói kích thích là chính sách tùy nghi; cắt lãi suất là chính sách tiền tệ."
   },
   {
    "q": "Inflation caused primarily by rising wages and input costs is best described as:",
    "opts": [
     "Demand-pull inflation",
     "Cost-push inflation",
     "Hyperinflation"
    ],
    "ans": 1,
    "en": "Cost-push: supply-side cost increases push prices up, often with weakening output. Demand-pull comes from aggregate demand outrunning capacity.",
    "vi": "Lạm phát chi phí đẩy: chi phí đầu vào/tiền lương tăng đẩy giá lên, thường kèm sản lượng yếu. Lạm phát cầu kéo do tổng cầu vượt năng lực sản xuất."
   },
   {
    "q": "A market analyst wants a leading indicator of the business cycle. The best choice among these is:",
    "opts": [
     "The unemployment rate",
     "Broad stock market index levels",
     "Current industrial production"
    ],
    "ans": 1,
    "en": "Equity prices are a classic leading indicator (markets anticipate). Unemployment is lagging; industrial production is coincident.",
    "vi": "Giá cổ phiếu là chỉ báo dẫn dắt kinh điển (thị trường phản ánh kỳ vọng). Tỷ lệ thất nghiệp là chỉ báo trễ; sản xuất công nghiệp là chỉ báo trùng."
   },
   {
    "q": "Money velocity is stable and real GDP grows 2% per year. If the money supply grows 5% per year, the quantity theory of money predicts long-run inflation of approximately:",
    "opts": [
     "3%",
     "7%",
     "2%"
    ],
    "ans": 0,
    "en": "From MV = PY in growth rates: %ΔM + %ΔV = %ΔP + %ΔY → 5 + 0 = %ΔP + 2 → inflation ≈ 3%.",
    "vi": "Từ MV = PY theo tốc độ tăng: %ΔM + %ΔV = %ΔP + %ΔY → 5 + 0 = %ΔP + 2 → lạm phát ≈ 3%."
   },
   {
    "q": "A government cuts taxes, but households — expecting higher taxes in the future — save the entire tax cut. This behavior is predicted by:",
    "opts": [
     "The balanced-budget multiplier",
     "Ricardian equivalence",
     "Crowding out"
    ],
    "ans": 1,
    "en": "Ricardian equivalence: forward-looking households treat deficits as deferred taxes and raise saving, neutralizing fiscal stimulus. Empirical support for the full effect is weak, but the concept is tested.",
    "vi": "Ricardian equivalence: hộ gia đình nhìn xa coi thâm hụt là thuế hoãn lại nên tăng tiết kiệm, vô hiệu hóa kích thích tài khóa. Bằng chứng thực nghiệm cho hiệu ứng đầy đủ khá yếu, nhưng khái niệm này vẫn được hỏi thi."
   },
   {
    "q": "Spot USD/EUR is 1.2000 and the one-year forward is quoted at +240 points. The forward rate and the euro’s forward premium are closest to:",
    "opts": [
     "1.2240 and +2.0%",
     "1.4400 and +20%",
     "1.1760 and −2.0%"
    ],
    "ans": 0,
    "en": "Forward = 1.2000 + 240/10,000 = 1.2240; premium = (1.2240 − 1.2000)/1.2000 = 2.0%. The base currency (EUR) trades at a forward premium — its interest rate is the lower one.",
    "vi": "Forward = 1,2000 + 240/10.000 = 1,2240; premium = 0,0240/1,2000 = 2,0%. Đồng cơ sở (EUR) có premium kỳ hạn — tức lãi suất EUR thấp hơn."
   },
   {
    "q": "A small country imposes a new tariff on imported steel. Which group most likely benefits?",
    "opts": [
     "Domestic steel consumers",
     "Domestic steel producers (and the government via revenue)",
     "Foreign steel producers"
    ],
    "ans": 1,
    "en": "A tariff raises the domestic price: producers gain surplus and the government collects revenue, while consumers lose more than the sum of those gains — the difference is deadweight loss.",
    "vi": "Thuế quan đẩy giá nội địa lên: nhà sản xuất trong nước hưởng thặng dư và chính phủ thu thuế, còn người tiêu dùng mất nhiều hơn tổng hai khoản lợi đó — phần chênh là tổn thất vô ích."
   }
  ],
  [
   {
    "q": "In long-run equilibrium, a firm in perfect competition earns:",
    "opts": [
     "Positive economic profit",
     "Zero economic profit (normal profit only)",
     "Negative accounting profit"
    ],
    "ans": 1,
    "en": "Free entry erodes economic profit to zero in the long run; firms still earn a normal accounting return.",
    "vi": "Gia nhập tự do khiến lợi nhuận kinh tế dài hạn về 0 — doanh nghiệp vẫn có lợi nhuận kế toán “bình thường” đủ bù chi phí cơ hội."
   },
   {
    "q": "For a single-price monopolist maximizing profit, at the chosen output level:",
    "opts": [
     "Price equals marginal revenue",
     "Marginal revenue equals marginal cost, and price exceeds both",
     "Price equals marginal cost"
    ],
    "ans": 1,
    "en": "Profit max at MR = MC; because demand slopes down, P &gt; MR = MC — the source of deadweight loss.",
    "vi": "Tối đa hóa lợi nhuận tại MR = MC; do đường cầu dốc xuống nên P &gt; MR = MC → tạo tổn thất vô ích (deadweight loss)."
   },
   {
    "q": "“Money neutrality” implies that in the long run an increase in the money supply affects:",
    "opts": [
     "Real output permanently",
     "Only the price level, not real variables",
     "Real interest rates permanently"
    ],
    "ans": 1,
    "en": "Long-run neutrality: money growth ultimately changes nominal prices, leaving real output and employment determined by real factors.",
    "vi": "Tính trung lập của tiền: về dài hạn, tăng cung tiền chỉ làm tăng mặt bằng giá; sản lượng thực do các yếu tố thực quyết định."
   },
   {
    "q": "Under covered interest rate parity, the currency of the country with the lower interest rate should trade at a:",
    "opts": [
     "Forward discount",
     "Forward premium",
     "Spot premium"
    ],
    "ans": 1,
    "en": "The low-rate currency trades at a forward premium so that hedged returns are equal across currencies — otherwise arbitrage exists.",
    "vi": "Đồng tiền có lãi suất thấp hơn phải có forward premium để lợi suất đã phòng hộ ngang nhau giữa hai đồng tiền — nếu không sẽ có arbitrage."
   },
   {
    "q": "Large government deficits financed by borrowing may raise interest rates and reduce private investment. This is called:",
    "opts": [
     "Ricardian equivalence",
     "Crowding out",
     "Quantitative easing"
    ],
    "ans": 1,
    "en": "Crowding out: public borrowing competes for savings, pushing rates up and displacing private investment.",
    "vi": "Hiệu ứng lấn át (crowding out): chính phủ vay nhiều đẩy lãi suất lên, chèn ép đầu tư tư nhân."
   },
   {
    "q": "A country’s central bank buys its own currency in the FX market to support its fixed exchange rate. A likely side effect is:",
    "opts": [
     "An increase in domestic money supply",
     "A decrease in domestic money supply",
     "No monetary impact"
    ],
    "ans": 1,
    "en": "Buying domestic currency with FX reserves withdraws domestic currency from circulation — contracting the money supply unless sterilized.",
    "vi": "Mua nội tệ bằng dự trữ ngoại hối tức là hút nội tệ khỏi lưu thông → cung tiền giảm, trừ khi được trung hòa (sterilized)."
   },
   {
    "q": "A central bank unexpectedly raises its policy rate. Through the exchange-rate channel of monetary transmission, the FIRST-order effect is most likely:",
    "opts": [
     "Currency depreciation boosting exports",
     "Currency appreciation, curbing net exports and import prices",
     "No effect on the currency"
    ],
    "ans": 1,
    "en": "Higher rates attract capital inflows, appreciating the currency; exports become dearer and imports cheaper, dampening demand and imported inflation — one of the four transmission channels.",
    "vi": "Lãi suất cao hút dòng vốn vào làm nội tệ lên giá; xuất khẩu đắt hơn, nhập khẩu rẻ hơn, hạ nhiệt tổng cầu và lạm phát nhập khẩu — một trong bốn kênh truyền dẫn."
   },
   {
    "q": "Headline CPI jumps because of an oil-price spike while core CPI is stable. An inflation-targeting central bank most likely:",
    "opts": [
     "Tightens aggressively to reverse the oil shock",
     "Looks through the temporary shock, guided by core inflation and anchored expectations",
     "Abandons its inflation target"
    ],
    "ans": 1,
    "en": "Central banks focus on core measures and expectations to avoid reacting to volatile, self-reversing components — provided expectations stay anchored to the target.",
    "vi": "NHTW tập trung vào lạm phát lõi và kỳ vọng để không phản ứng với cấu phần biến động, tự đảo chiều — miễn là kỳ vọng vẫn neo vào mục tiêu."
   },
   {
    "q": "A country invests 26% of GDP while total national saving is 22% of GDP. Its current account balance is closest to:",
    "opts": [
     "A surplus of 4% of GDP",
     "A deficit of 4% of GDP",
     "Balanced"
    ],
    "ans": 1,
    "en": "CA = S − I = 22% − 26% = −4% of GDP. Investing beyond national saving requires importing foreign capital — the mirror image of a current account deficit.",
    "vi": "CA = S − I = 22% − 26% = −4% GDP. Đầu tư vượt tiết kiệm quốc gia buộc phải nhập khẩu vốn nước ngoài — hình ảnh phản chiếu của thâm hụt vãng lai."
   },
   {
    "q": "An investor holds assets exposed to a low-likelihood but high-impact geopolitical risk with high velocity. The most appropriate response is to:",
    "opts": [
     "Ignore it, since the probability is low",
     "Use scenario analysis and hedges, since impact and speed are large despite low probability",
     "Sell all foreign assets immediately"
    ],
    "ans": 1,
    "en": "Risk response weighs likelihood against velocity and impact: low-probability/high-impact/high-velocity risks justify hedging and stress testing, not neglect — and not panic liquidation either.",
    "vi": "Ứng xử rủi ro cân giữa xác suất với tốc độ và quy mô tác động: rủi ro xác suất thấp/tác động lớn/tốc độ cao cần phòng hộ và stress test — không phớt lờ, cũng không bán tháo hoảng loạn."
   }
  ]
 ]
};
