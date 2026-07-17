/* =====================================================================
   Topic 08 — Derivatives
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
 "id": "deriv",
 "num": "08",
 "name": "Derivatives",
 "vi": "Công cụ phái sinh",
 "w": [
  5,
  8
 ],
 "blurb": "Forwards, futures, swaps, and options: features, payoff profiles, arbitrage-based pricing, and put–call parity.",
 "intro": {
  "en": "Derivatives covers six learning modules: instruments and markets; forwards, futures, swaps, and options; uses and risks; cost-of-carry pricing; swap valuation; and option valuation with parity and the binomial model. The topic's weight is modest but its questions are formulaic and highly bankable. Every module below pairs theory with payoff diagrams and fully worked numbers — the 3-day margin account, cash-and-carry arbitrage, the par-swap rate, risk-neutral pricing with a replication check — then drill the Quick checks and Practice Sets B–D.",
  "vi": "Derivatives gồm sáu learning modules: công cụ và thị trường; forwards, futures, swaps và options; công dụng và rủi ro; định giá theo cost of carry; định giá swap; và định giá quyền chọn với parity và mô hình binomial. Trọng số topic không lớn nhưng câu hỏi rất công thức và dễ ăn điểm. Mỗi module bên dưới kết hợp lý thuyết với đồ thị payoff và con số giải trọn — tài khoản ký quỹ 3 ngày, arbitrage cash-and-carry, par-swap rate, định giá trung hòa rủi ro kèm kiểm tra sao chép — sau đó luyện Quick checks và Practice Sets B–D."
 },
 "modules": [
  {
   "title": "Derivative Instruments & Market Features",
   "sections": [
    {
     "h": "What derivatives are — and where they trade",
     "en": "<ul><li><strong>Definition:</strong> a derivative is a contract whose value <em>derives</em> from the performance of an underlying — equities, fixed income and interest rates, currencies, commodities, credit, even other derivatives and indexes. It transfers risk and return between two parties at a defined price over a defined period, usually with little or no cash changing hands at inception.</li><li><strong>Exchange-traded derivatives (ETD)</strong> — futures and listed options: standardized terms, transparent prices, and a <strong>central counterparty (CCP)</strong> that steps between buyer and seller through <em>novation</em>, backed by initial and variation <em>margin</em> and daily settlement — counterparty risk nearly disappears, but so does customization.</li><li><strong>Over-the-counter (OTC)</strong> derivatives — forwards, swaps, exotic options: bilaterally negotiated and fully customizable (size, dates, underlying), historically bearing counterparty risk. Post-crisis reform pushed standardized OTC contracts into <em>central clearing</em> and added reporting/collateral rules, narrowing the gap with ETD.</li><li><strong>Participants:</strong> hedgers (transfer unwanted risk), speculators (accept risk for expected return, adding liquidity), arbitrageurs (enforce the law of one price), and dealers/market makers who intermediate.</li></ul>",
     "vi": "<ul><li><strong>Định nghĩa:</strong> phái sinh là hợp đồng có giá trị <em>bắt nguồn</em> từ diễn biến của tài sản cơ sở — cổ phiếu, trái phiếu và lãi suất, tiền tệ, hàng hóa, tín dụng, thậm chí phái sinh khác và chỉ số. Nó chuyển giao rủi ro và lợi nhuận giữa hai bên theo mức giá và kỳ hạn xác định, thường không cần trao tiền lúc khởi tạo.</li><li><strong>Phái sinh niêm yết (ETD)</strong> — futures và quyền chọn niêm yết: điều khoản chuẩn hóa, giá minh bạch, và <strong>đối tác bù trừ trung tâm (CCP)</strong> chen giữa người mua–bán qua cơ chế <em>novation</em>, được chống lưng bằng ký quỹ ban đầu, ký quỹ biến đổi và thanh toán hằng ngày — rủi ro đối tác gần như biến mất, nhưng khả năng \"may đo\" cũng vậy.</li><li><strong>Phái sinh OTC</strong> — forwards, swaps, quyền chọn ngoại lai: đàm phán song phương, tùy biến hoàn toàn (quy mô, ngày, tài sản cơ sở), truyền thống mang rủi ro đối tác. Cải cách hậu khủng hoảng đẩy các hợp đồng OTC chuẩn hóa vào <em>bù trừ tập trung</em> kèm quy định báo cáo/tài sản bảo đảm, thu hẹp khoảng cách với ETD.</li><li><strong>Người tham gia:</strong> hedger (chuyển rủi ro không mong muốn), nhà đầu cơ (nhận rủi ro đổi lợi nhuận kỳ vọng, tạo thanh khoản), arbitrageur (thực thi luật một giá), và dealer/nhà tạo lập trung gian.</li></ul>"
    },
    {
     "h": "Map the market: ETD vs OTC, the clearing machine & the notional trap",
     "en": "<p><strong>A derivative derives its value from an underlying</strong> — equities and indexes, fixed income and interest rates (the largest segment by notional), currencies, commodities, and credit. One contract, two mirror positions: the long gains when the underlying rises (for forward commitments) while the short takes the other side — derivatives are a <em>zero-sum</em> transfer of risk, which is precisely what makes them useful for hedging.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Feature</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Exchange-traded (futures, listed options)</th><th style=\"padding:7px;border:1px solid #D6DAFB\">OTC (forwards, swaps, exotic options)</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Terms</td><td style=\"padding:7px;border:1px solid #E5E9F2\">standardized (size, dates, grades)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">fully customizable</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Counterparty risk</td><td style=\"padding:7px;border:1px solid #E5E9F2\">faced by the clearinghouse (CCP), which guarantees both sides</td><td style=\"padding:7px;border:1px solid #E5E9F2\">bilateral — you face the dealer (mitigated by collateral/CSAs and, post-crisis, mandatory clearing of standard swaps)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Margin</td><td style=\"padding:7px;border:1px solid #E5E9F2\">initial + daily variation margin (mark-to-market)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">negotiated collateral</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Transparency & liquidity</td><td style=\"padding:7px;border:1px solid #E5E9F2\">public prices, deep books</td><td style=\"padding:7px;border:1px solid #E5E9F2\">quote-driven, opaque</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Regulation</td><td style=\"padding:7px;border:1px solid #E5E9F2\">heavy, position limits</td><td style=\"padding:7px;border:1px solid #E5E9F2\">lighter historically; reporting now required</td></tr></table>\n<p><strong>The clearing machine.</strong> On an exchange, the CCP <em>novates</em> every trade — it becomes the buyer to every seller and the seller to every buyer — then protects itself with initial margin, daily settlement, and a default fund. Post-2008 reforms pushed standardized OTC interest-rate and credit swaps into central clearing and trade repositories, blurring the old ETD/OTC line: customization survives, but bilateral credit exposure has shrunk.</p>\n<p><strong>The notional trap.</strong> Notional principal measures the <em>scale</em> of exposure, not money at risk: a $100m interest-rate swap never exchanges the $100m — only net interest differences flow, so its market value is a tiny fraction of notional. Headlines summing \"hundreds of trillions of notional\" therefore wildly overstate the sums that could actually be lost. The right risk measures are market value, potential future exposure, and margin — a distinction the exam tests directly.</p>",
     "vi": "<p><strong>Phái sinh lấy giá trị từ một tài sản cơ sở</strong> — cổ phiếu và chỉ số, thu nhập cố định và lãi suất (mảng lớn nhất theo notional), tiền tệ, hàng hóa, và tín dụng. Một hợp đồng, hai vị thế gương: bên long hưởng lợi khi tài sản cơ sở tăng (với forward commitments) còn bên short cầm phía ngược lại — phái sinh là trò chơi <em>tổng bằng không</em> chuyển giao rủi ro, và chính điều đó khiến nó hữu dụng để phòng hộ.</p>\n<p><strong>ETD vs OTC (bảng):</strong> điều khoản — chuẩn hóa vs tùy biến hoàn toàn; rủi ro đối tác — đối mặt clearinghouse (CCP) bảo lãnh cả hai bên vs song phương với dealer (giảm nhẹ bằng tài sản đảm bảo/CSA và, sau khủng hoảng, thanh toán bù trừ bắt buộc cho swap chuẩn); ký quỹ — initial + variation margin hằng ngày (mark-to-market) vs tài sản đảm bảo thương lượng; minh bạch & thanh khoản — giá công khai, sổ lệnh sâu vs quote-driven, mờ đục; quản lý — chặt, có giới hạn vị thế vs nhẹ hơn trong lịch sử, nay bắt buộc báo cáo.</p>\n<p><strong>Bộ máy thanh toán bù trừ.</strong> Trên sàn, CCP <em>novate</em> mọi giao dịch — trở thành người mua của mọi người bán và người bán của mọi người mua — rồi tự bảo vệ bằng initial margin, thanh toán hằng ngày, và quỹ vỡ nợ. Cải cách sau 2008 đẩy swap lãi suất và tín dụng OTC chuẩn hóa vào thanh toán bù trừ tập trung và kho lưu trữ giao dịch, làm mờ ranh giới ETD/OTC cũ: sự tùy biến còn nguyên, nhưng phơi nhiễm tín dụng song phương đã co lại.</p>\n<p><strong>Bẫy notional.</strong> Notional đo <em>quy mô</em> phơi nhiễm, không phải tiền có thể mất: swap lãi suất $100tr không bao giờ trao đổi $100tr — chỉ phần chênh lãi ròng chảy qua, nên giá trị thị trường chỉ là phần nhỏ xíu của notional. Các tít báo cộng \"hàng trăm nghìn tỷ notional\" vì thế thổi phồng dữ dội số tiền thực sự có thể mất. Thước đo rủi ro đúng là giá trị thị trường, phơi nhiễm tương lai tiềm năng, và ký quỹ — phân biệt mà đề thi hỏi thẳng.</p>"
    }
   ]
  },
  {
   "title": "Forward Commitments & Contingent Claims",
   "sections": [
    {
     "h": "Forwards, futures, and swaps",
     "en": "<ul><li>A <strong>forward</strong> obligates both parties to trade an asset at a set price on a future date. OTC, customized, counterparty risk, no cash changes hands at initiation (value = 0 at start; the forward <em>price</em> is set so this holds).</li><li><strong>Futures</strong> are standardized, exchange-traded forwards with a clearinghouse guarantee, daily <strong>mark-to-market</strong> and margin. This removes most counterparty risk.</li><li>A <strong>swap</strong> is a series of forward-like exchanges. In a plain-vanilla interest rate swap, one side pays fixed and receives floating on a notional amount; only net payments are exchanged. The fixed rate is set so the swap has zero value at initiation. Pay-fixed = like being short bonds / hedging against rising rates.</li><li><strong>Pricing by no-arbitrage (cost of carry):</strong> F₀ = S₀ × (1 + r)<sup>T</sup> + FV(costs) − FV(benefits). Benefits (dividends, coupons, convenience yield) lower the forward price; carrying costs (storage, insurance) raise it. If the market forward deviates, cash-and-carry (or reverse) arbitrage forces it back.</li></ul>",
     "vi": "<ul><li><strong>Forward</strong> ràng buộc cả hai bên giao dịch tài sản tại mức giá xác định vào ngày tương lai. OTC, tùy chỉnh, có rủi ro đối tác, không trao tiền lúc khởi tạo (giá trị = 0 tại thời điểm đầu; <em>giá</em> forward được đặt để điều này đúng).</li><li><strong>Futures</strong> là forward chuẩn hóa, giao dịch trên sàn với trung tâm thanh toán bù trừ bảo lãnh, <strong>mark-to-market</strong> hằng ngày và ký quỹ → gần như loại bỏ rủi ro đối tác.</li><li><strong>Swap</strong> là chuỗi các trao đổi kiểu forward. Trong swap lãi suất chuẩn, một bên trả cố định – nhận thả nổi trên vốn danh nghĩa; chỉ trao đổi phần chênh lệch ròng. Lãi suất cố định được đặt để swap có giá trị 0 lúc khởi tạo. Trả cố định = giống bán khống trái phiếu / phòng hộ trước lãi suất tăng.</li><li><strong>Định giá theo không-arbitrage (cost of carry):</strong> F₀ = S₀ × (1 + r)<sup>T</sup> + FV(chi phí) − FV(lợi ích). Lợi ích (cổ tức, coupon, convenience yield) làm giảm giá forward; chi phí lưu giữ (kho bãi, bảo hiểm) làm tăng. Nếu giá thị trường lệch, arbitrage cash-and-carry (hoặc ngược lại) sẽ kéo về.</li></ul>"
    },
    {
     "h": "Option basics and moneyness",
     "en": "<ul><li>A <strong>call</strong> gives the buyer the <em>right</em> (not obligation) to buy at the strike X; a <strong>put</strong> the right to sell. The buyer pays a <strong>premium</strong>; the seller (writer) keeps the premium and bears the obligation.</li><li>Payoffs at expiry: call buyer = max(0, S − X); put buyer = max(0, X − S). Profits subtract/add the premium. Maximum loss for a buyer = premium; maximum loss for a call writer = unlimited; for a put writer = X − premium.</li><li><strong>Moneyness:</strong> a call is in-the-money when S &gt; X; a put when S &lt; X. Option value = <strong>intrinsic value + time value</strong>; time value erodes to zero at expiry (theta decay).</li><li>Value drivers: calls rise with the underlying price, volatility, time (usually), and rates; fall with strike and expected dividends. Puts are the mirror image (but higher rates <em>reduce</em> put values). <em>Higher volatility raises both call and put values</em> — payoffs are asymmetric.</li><li>European options can be exercised only at expiry; American any time (worth at least as much).</li></ul>",
     "vi": "<ul><li><strong>Call</strong> cho người mua <em>quyền</em> (không phải nghĩa vụ) mua tại giá thực hiện X; <strong>put</strong> là quyền bán. Người mua trả <strong>phí quyền chọn</strong>; người bán nhận phí và gánh nghĩa vụ.</li><li>Payoff khi đáo hạn: mua call = max(0, S − X); mua put = max(0, X − S). Lợi nhuận cộng/trừ phí. Lỗ tối đa của người mua = phí; lỗ tối đa của người bán call = vô hạn; người bán put = X − phí.</li><li><strong>Moneyness:</strong> call ITM khi S &gt; X; put ITM khi S &lt; X. Giá trị quyền chọn = <strong>giá trị nội tại + giá trị thời gian</strong>; giá trị thời gian mòn về 0 khi đáo hạn.</li><li>Yếu tố tác động: call tăng theo giá tài sản, độ biến động, thời gian (thường), lãi suất; giảm theo giá thực hiện và cổ tức kỳ vọng. Put ngược lại (nhưng lãi suất cao làm <em>giảm</em> giá put). <em>Biến động cao làm tăng giá cả call lẫn put</em> — vì payoff bất đối xứng.</li><li>Quyền chọn kiểu Âu chỉ thực hiện lúc đáo hạn; kiểu Mỹ bất kỳ lúc nào (giá trị ít nhất bằng kiểu Âu).</li></ul>"
    },
    {
     "h": "Payoff geometry + a three-day margin account, fully worked",
     "en": "<svg viewBox=\"0 0 720 400\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Option payoff diagrams\">\n<text x=\"360\" y=\"24\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">The four option payoffs at expiration (X = strike)</text>\n<g>\n<line x1=\"60\" y1=\"120\" x2=\"330\" y2=\"120\" stroke=\"#5B6577\" stroke-width=\"1.2\"/>\n<line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"180\" stroke=\"#5B6577\" stroke-width=\"1.2\"/>\n<polyline points=\"80,120 195,120 320,60\" fill=\"none\" stroke=\"#0F9573\" stroke-width=\"2.6\"/>\n<circle cx=\"195\" cy=\"120\" r=\"3.5\" fill=\"#0F9573\"/>\n<text x=\"195\" y=\"138\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">X</text>\n<text x=\"110\" y=\"52\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F9573\">Long call</text>\n<text x=\"110\" y=\"68\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">loss capped at premium · unlimited upside</text>\n</g>\n<g>\n<line x1=\"390\" y1=\"120\" x2=\"660\" y2=\"120\" stroke=\"#5B6577\" stroke-width=\"1.2\"/>\n<line x1=\"410\" y1=\"60\" x2=\"410\" y2=\"180\" stroke=\"#5B6577\" stroke-width=\"1.2\"/>\n<polyline points=\"410,120 525,120 650,180\" fill=\"none\" stroke=\"#DC4848\" stroke-width=\"2.6\"/>\n<circle cx=\"525\" cy=\"120\" r=\"3.5\" fill=\"#DC4848\"/>\n<text x=\"525\" y=\"138\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">X</text>\n<text x=\"440\" y=\"52\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#DC4848\">Short call</text>\n<text x=\"440\" y=\"68\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">gain capped at premium · unlimited loss</text>\n</g>\n<g>\n<line x1=\"60\" y1=\"310\" x2=\"330\" y2=\"310\" stroke=\"#5B6577\" stroke-width=\"1.2\"/>\n<line x1=\"80\" y1=\"250\" x2=\"80\" y2=\"370\" stroke=\"#5B6577\" stroke-width=\"1.2\"/>\n<polyline points=\"85,252 195,310 320,310\" fill=\"none\" stroke=\"#0F9573\" stroke-width=\"2.6\"/>\n<circle cx=\"195\" cy=\"310\" r=\"3.5\" fill=\"#0F9573\"/>\n<text x=\"195\" y=\"328\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">X</text>\n<text x=\"215\" y=\"264\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F9573\">Long put</text>\n<text x=\"215\" y=\"280\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">max gain X − premium (at S = 0)</text>\n</g>\n<g>\n<line x1=\"390\" y1=\"310\" x2=\"660\" y2=\"310\" stroke=\"#5B6577\" stroke-width=\"1.2\"/>\n<line x1=\"410\" y1=\"250\" x2=\"410\" y2=\"370\" stroke=\"#5B6577\" stroke-width=\"1.2\"/>\n<polyline points=\"415,368 525,310 650,310\" fill=\"none\" stroke=\"#DC4848\" stroke-width=\"2.6\"/>\n<circle cx=\"525\" cy=\"310\" r=\"3.5\" fill=\"#DC4848\"/>\n<text x=\"525\" y=\"298\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">X</text>\n<text x=\"545\" y=\"264\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#DC4848\">Short put</text>\n<text x=\"545\" y=\"280\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">max loss X − premium (at S = 0)</text>\n</g>\n<text x=\"360\" y=\"392\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#8B5CF6\" font-weight=\"600\">Add/subtract the premium to shift payoff into PROFIT: call breakeven = X + premium · put breakeven = X − premium.</text>\n</svg>\n<p><strong>Moneyness worked.</strong> S = 52. A 50-strike call is in the money (exercise value 2); the 50-strike put is out of the money (exercise value 0); at S = 50 both are at the money. Premiums: call = 3.10, put = 0.95. Breakevens: call needs S &gt; 50 + 3.10 = <strong>53.10</strong>; put needs S &lt; 50 − 0.95 = <strong>49.05</strong>.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Position</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Max gain</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Max loss</th><th style=\"padding:7px;border:1px solid #D6DAFB\">View expressed</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Long call</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">unlimited</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">premium</td><td style=\"padding:7px;border:1px solid #E5E9F2\">bullish, defined risk</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Short call</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">premium</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">unlimited</td><td style=\"padding:7px;border:1px solid #E5E9F2\">neutral/bearish, income</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Long put</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">X − premium</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">premium</td><td style=\"padding:7px;border:1px solid #E5E9F2\">bearish, defined risk</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Short put</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">premium</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">X − premium</td><td style=\"padding:7px;border:1px solid #E5E9F2\">neutral/bullish, income</td></tr></table>\n<p><strong>Futures = forwards + daily settlement.</strong> Work a 3-day margin account: long 1 contract at F = 1,000 (multiplier 1), initial margin 80, maintenance margin 60.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Day</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Settle price</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Daily gain/loss</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Balance</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Action</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">0</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">1,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">—</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">80</td><td style=\"padding:7px;border:1px solid #E5E9F2\">post initial margin</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">1</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">988</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">−12</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">68</td><td style=\"padding:7px;border:1px solid #E5E9F2\">above maintenance — nothing</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">2</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">975</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">−13</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">55</td><td style=\"padding:7px;border:1px solid #E5E9F2\">below 60 → margin call: top back up to INITIAL (add 25 → 80)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">3</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">990</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">+15</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">95</td><td style=\"padding:7px;border:1px solid #E5E9F2\">excess may be withdrawn</td></tr></table>\n<p>Key exam point: futures margin calls restore the <em>initial</em> margin (unlike the securities margin in Equity, which restores maintenance). Daily settlement means a futures position's value resets to zero every day — gains are banked (and can be reinvested) while forward gains wait until maturity; with volatile rates positively correlated to the underlying, this can make futures prices differ slightly from forwards. <strong>Swaps</strong> extend the forward idea to many dates: a firm paying fixed on a swap has, in effect, a strip of forward contracts on the floating rate (module 4 prices it).</p>",
     "vi": "<p><strong>Moneyness bằng ví dụ.</strong> S = 52. Call strike 50 đang in the money (giá trị thực hiện 2); put strike 50 đang out of the money (0); tại S = 50 cả hai at the money. Phí: call = 3,10, put = 0,95. Hòa vốn: call cần S &gt; 50 + 3,10 = <strong>53,10</strong>; put cần S &lt; 50 − 0,95 = <strong>49,05</strong>. Bảng vị thế: long call — lãi vô hạn, lỗ tối đa bằng phí, quan điểm tăng giá rủi ro xác định; short call — lãi tối đa bằng phí, lỗ vô hạn, trung tính/giảm, thu phí; long put — lãi tối đa X − phí, lỗ tối đa bằng phí, giảm giá rủi ro xác định; short put — lãi bằng phí, lỗ tối đa X − phí, trung tính/tăng, thu phí.</p>\n<p><strong>Futures = forwards + thanh toán hằng ngày.</strong> Chạy tài khoản ký quỹ 3 ngày: long 1 hợp đồng tại F = 1.000 (hệ số 1), initial margin 80, maintenance 60. Ngày 0: nộp 80. Ngày 1: giá 988, lỗ −12, số dư 68 — trên maintenance, không làm gì. Ngày 2: giá 975, lỗ −13, số dư 55 — dưới 60 → margin call: nộp lại về mức <strong>INITIAL</strong> (thêm 25 → 80). Ngày 3: giá 990, lãi +15, số dư 95 — phần dư được rút.</p>\n<p>Điểm đề hay hỏi: margin call của futures nộp về mức <em>initial</em> (khác ký quỹ chứng khoán ở Equity chỉ về maintenance). Thanh toán hằng ngày nghĩa là giá trị vị thế futures reset về 0 mỗi ngày — lãi được \"gửi ngân hàng\" (và tái đầu tư được) trong khi lãi của forward chờ đến đáo hạn; khi lãi suất biến động tương quan dương với tài sản cơ sở, điều này có thể làm giá futures lệch nhẹ so với forward. <strong>Swaps</strong> mở rộng ý tưởng forward ra nhiều thời điểm: công ty trả cố định trong swap thực chất nắm một chuỗi hợp đồng forward trên lãi suất thả nổi (module 4 định giá nó).</p>"
    }
   ],
   "formulas": [
    [
     "Call payoff",
     "max(0, S − X)",
     "Put payoff: max(0, X − S)"
    ],
    [
     "Intrinsic value (call)",
     "max(0, S − X)",
     "Option value = intrinsic + time value"
    ],
    [
     "Put payoff / profit",
     "payoff = max(X − S_T, 0) · profit = payoff − premium",
     "Long-put breakeven: S = X − premium."
    ],
    [
     "Breakevens",
     "call: X + premium · put: X − premium",
     "Shift the payoff line down by the premium to get profit."
    ]
   ]
  },
  {
   "title": "Benefits, Risks & Uses of Derivatives",
   "sections": [
    {
     "h": "Benefits, risks & how issuers and investors use derivatives",
     "en": "<ul><li><strong>Benefits:</strong> derivatives allocate risk to those best able to bear it; enable <em>price discovery</em> (futures reveal expectations; implied volatility reveals fear); reduce transaction costs and capital needs versus trading the underlying; and improve liquidity and market efficiency (arbitrage keeps prices tied to fundamentals). Operational advantages: easy short exposure, leverage, and access to hard-to-reach underlyings.</li><li><strong>Risks:</strong> leverage magnifies gains and losses (small margin controls large notional); <em>counterparty risk</em> on uncleared OTC positions; <em>liquidity and margin risk</em> — daily settlement can force cash calls at the worst time; <em>basis risk</em> — the hedge and the exposure don’t move one-for-one; systemic risk from interconnected positions; and complexity/model risk.</li><li><strong>Issuer uses:</strong> corporates hedge FX transaction and translation exposure, interest rate risk (swapping floating debt to fixed), and commodity input costs — with hedge accounting (cash flow, fair value, net investment hedges) aligning P&amp;L recognition.</li><li><strong>Investor uses:</strong> hedging portfolio risk, replicating cash positions (equitizing cash), gaining leveraged or short exposure, generating income (covered calls), and accessing asset classes efficiently.</li></ul>",
     "vi": "<ul><li><strong>Lợi ích:</strong> phái sinh phân bổ rủi ro cho bên chịu được tốt nhất; hỗ trợ <em>khám phá giá</em> (futures hé lộ kỳ vọng; volatility hàm ý hé lộ nỗi sợ); giảm chi phí giao dịch và vốn so với mua bán tài sản cơ sở; cải thiện thanh khoản và hiệu quả thị trường (arbitrage neo giá vào cơ bản). Lợi thế vận hành: dễ bán khống, dùng đòn bẩy, tiếp cận tài sản khó chạm tới.</li><li><strong>Rủi ro:</strong> đòn bẩy khuếch đại lãi lẫn lỗ (ký quỹ nhỏ điều khiển notional lớn); <em>rủi ro đối tác</em> với vị thế OTC chưa bù trừ; <em>rủi ro thanh khoản và ký quỹ</em> — thanh toán hằng ngày có thể đòi tiền đúng lúc tệ nhất; <em>rủi ro basis</em> — công cụ phòng hộ và khoản phơi nhiễm không chạy 1:1; rủi ro hệ thống từ các vị thế đan xen; và độ phức tạp/rủi ro mô hình.</li><li><strong>Tổ chức phát hành dùng để:</strong> phòng hộ tỷ giá (giao dịch và chuyển đổi báo cáo), rủi ro lãi suất (swap nợ thả nổi sang cố định), chi phí nguyên liệu — kèm kế toán phòng hộ (cash flow, fair value, net investment hedge) để đồng bộ ghi nhận lợi nhuận.</li><li><strong>Nhà đầu tư dùng để:</strong> phòng hộ danh mục, tái tạo vị thế tiền mặt (equitize cash), tạo đòn bẩy hoặc bán khống, tạo thu nhập (covered call), và tiếp cận lớp tài sản hiệu quả.</li></ul>"
    },
    {
     "h": "Four concrete trades: how each user actually deploys derivatives",
     "en": "<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">User</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Problem</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Trade</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Result</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Exporter</td><td style=\"padding:7px;border:1px solid #E5E9F2\">will receive €10m in 6 months; fears EUR falling</td><td style=\"padding:7px;border:1px solid #E5E9F2\">sell €10m forward at today's 6-month rate</td><td style=\"padding:7px;border:1px solid #E5E9F2\">USD proceeds locked; gives up upside if EUR rallies</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Corporate borrower</td><td style=\"padding:7px;border:1px solid #E5E9F2\">floating-rate loan; fears rates rising</td><td style=\"padding:7px;border:1px solid #E5E9F2\">pay-fixed interest-rate swap (or buy a cap)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">net cost fixed at swap rate; the cap keeps downside benefit for a premium</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Equity manager</td><td style=\"padding:7px;border:1px solid #E5E9F2\">wants beta 0.5 instead of 1.0 for a quarter</td><td style=\"padding:7px;border:1px solid #E5E9F2\">sell index futures against the portfolio</td><td style=\"padding:7px;border:1px solid #E5E9F2\">market exposure halved in one cheap trade — no stock sales, no tax events</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Income-seeking holder</td><td style=\"padding:7px;border:1px solid #E5E9F2\">long stock, mildly bullish</td><td style=\"padding:7px;border:1px solid #E5E9F2\">covered call (sell calls against the holding); or protective put if fearing a fall</td><td style=\"padding:7px;border:1px solid #E5E9F2\">premium income but upside capped; the put = insurance for a premium</td></tr></table>\n<p><strong>Why derivatives instead of trading the underlying:</strong> lower transaction costs, speed, no disturbance of cash holdings, access to short exposure, operational leverage (small margin controls large notional), and often better liquidity than the cash market. System-level benefits: <strong>price discovery</strong> (futures reveal consensus expectations; fed-funds futures literally price policy expectations) and <strong>risk allocation</strong> — moving risk from hedgers to willing speculators, who supply the liquidity hedgers need.</p>\n<p><strong>The risk side, with numbers where it bites.</strong> <em>Leverage:</em> the module-1 trader controlled 1,000 of notional with 80 of margin (12.5×); the 2.5% price fall over two days consumed 31% of the equity — the same mechanism that makes hedges cheap makes speculation fragile. <em>Basis risk:</em> a jet-fuel hedger using crude futures wins only if the fuel–crude spread behaves; the hedge swaps price risk for (smaller) basis risk, not for certainty. <em>Liquidity risk:</em> daily variation margin must be paid in cash <em>now</em>, even when the hedged exposure pays off only at maturity — profitable hedges can still cause funding crises. <em>Counterparty risk</em> (OTC, mitigated by clearing/collateral) and <em>systemic risk</em> (interconnected leverage — the 2008 lesson that motivated clearing mandates) complete the list. Balanced view for the exam: derivatives neither create nor destroy underlying risk; they reprice and reallocate it — dangerous exactly in proportion to the leverage and opacity of the user.</p>",
     "vi": "<p><strong>Bốn giao dịch cụ thể (bảng):</strong> nhà xuất khẩu — sẽ nhận €10tr sau 6 tháng, sợ EUR giảm → bán €10tr forward tại tỷ giá kỳ hạn hôm nay → khóa tiền USD, đổi lại mất phần lợi nếu EUR tăng; doanh nghiệp vay thả nổi — sợ lãi tăng → swap trả cố định (hoặc mua cap) → chi phí ròng cố định tại swap rate, cap giữ được lợi ích khi lãi giảm nhưng tốn phí; nhà quản lý cổ phiếu — muốn beta 0,5 thay vì 1,0 trong một quý → bán futures chỉ số → phơi nhiễm thị trường giảm nửa trong một giao dịch rẻ, không bán cổ phiếu, không sự kiện thuế; người nắm giữ tìm thu nhập — long cổ phiếu, hơi lạc quan → covered call (bán call trên số đang giữ); hoặc protective put nếu sợ giảm → thu phí nhưng trần hóa upside; put = bảo hiểm có phí.</p>\n<p><strong>Vì sao dùng phái sinh thay vì giao dịch tài sản gốc:</strong> chi phí thấp hơn, tốc độ, không xáo trộn danh mục tiền mặt, tiếp cận vị thế short, đòn bẩy vận hành (ký quỹ nhỏ điều khiển notional lớn), và thường thanh khoản tốt hơn thị trường cơ sở. Lợi ích hệ thống: <strong>khám phá giá</strong> (futures phơi bày kỳ vọng đồng thuận; fed-funds futures định giá đúng nghĩa kỳ vọng chính sách) và <strong>phân bổ rủi ro</strong> — chuyển rủi ro từ người phòng hộ sang nhà đầu cơ tự nguyện, những người cấp thanh khoản mà người phòng hộ cần.</p>\n<p><strong>Mặt rủi ro, với con số nơi nó cắn.</strong> <em>Đòn bẩy:</em> trader ở module 1 điều khiển 1.000 notional bằng 80 ký quỹ (12,5×); cú giảm giá 2,5% trong hai ngày nuốt 31% vốn — cơ chế làm phòng hộ rẻ cũng chính là cơ chế làm đầu cơ mong manh. <em>Basis risk:</em> người phòng hộ nhiên liệu bay bằng futures dầu thô chỉ thắng nếu chênh fuel–crude cư xử tử tế; phòng hộ đổi rủi ro giá lấy rủi ro basis (nhỏ hơn), không phải lấy sự chắc chắn. <em>Rủi ro thanh khoản:</em> variation margin phải trả bằng tiền <em>ngay</em>, dù phơi nhiễm được phòng hộ chỉ trả tiền lúc đáo hạn — phòng hộ có lãi vẫn có thể gây khủng hoảng thanh khoản. <em>Rủi ro đối tác</em> (OTC, giảm nhẹ bằng clearing/tài sản đảm bảo) và <em>rủi ro hệ thống</em> (đòn bẩy liên kết chằng chịt — bài học 2008 sinh ra lệnh thanh toán bù trừ bắt buộc) hoàn tất danh sách. Quan điểm cân bằng cho đề: phái sinh không tạo cũng không hủy rủi ro gốc; nó tái định giá và tái phân bổ rủi ro — nguy hiểm đúng theo tỷ lệ đòn bẩy và độ mờ đục của người dùng.</p>"
    }
   ]
  },
  {
   "title": "Arbitrage, Cost of Carry & Pricing Forwards and Futures",
   "sections": [
    {
     "h": "Arbitrage, replication & the cost of carry",
     "en": "<ul><li><strong>The pricing engine is replication:</strong> a derivative plus the risk-free asset can replicate the underlying, and vice versa — so arbitrage (riskless profit from mispricing) forces the <em>law of one price</em>. Derivative prices are <strong>no-arbitrage prices</strong>, not forecasts.</li><li><strong>Cost of carry:</strong> the forward price equals the spot price compounded at the risk-free rate, <em>plus</em> costs of ownership (storage, insurance) <em>minus</em> benefits (dividends, coupons, and the commodity <strong>convenience yield</strong>): <strong>F₀ = [S₀ − PV(benefits) + PV(costs)] × (1+r)ᵀ</strong>. Benefits &gt; costs → forward below spot (backwardation-flavored); costs &gt; benefits → forward above spot (contango-flavored).</li><li><strong>Price vs value:</strong> the forward <em>price</em> is fixed at inception so that the contract’s <em>value</em> is zero to both sides. As the underlying moves, value accrues: <strong>Vₜ(long) = Sₜ − PV(F₀)</strong> — what you hold minus the present value of what you promised to pay. At expiration, V = S_T − F₀.</li><li><strong>Futures nuance:</strong> daily mark-to-market resets value to zero every day and pays gains immediately; futures and forward prices are effectively equal unless interest rates are correlated with the underlying (positive correlation favors futures — gains are reinvested at higher rates).</li></ul>",
     "vi": "<ul><li><strong>Động cơ định giá là sao chép (replication):</strong> phái sinh cộng tài sản phi rủi ro có thể tái tạo tài sản cơ sở và ngược lại — nên arbitrage (lợi nhuận phi rủi ro từ định giá sai) cưỡng chế <em>luật một giá</em>. Giá phái sinh là <strong>giá không-arbitrage</strong>, không phải dự báo.</li><li><strong>Chi phí lưu giữ (cost of carry):</strong> giá forward bằng giá spot tích lũy theo lãi suất phi rủi ro, <em>cộng</em> chi phí nắm giữ (kho bãi, bảo hiểm) <em>trừ</em> lợi ích (cổ tức, coupon, và <strong>convenience yield</strong> của hàng hóa): <strong>F₀ = [S₀ − PV(lợi ích) + PV(chi phí)] × (1+r)ᵀ</strong>. Lợi ích &gt; chi phí → forward dưới spot; chi phí &gt; lợi ích → forward trên spot.</li><li><strong>Giá vs giá trị:</strong> <em>giá</em> forward được chốt lúc khởi tạo sao cho <em>giá trị</em> hợp đồng bằng 0 với cả hai bên. Khi tài sản cơ sở biến động, giá trị tích lũy: <strong>Vₜ(long) = Sₜ − PV(F₀)</strong> — thứ đang nắm trừ hiện giá của thứ đã cam kết trả. Tại đáo hạn, V = S_T − F₀.</li><li><strong>Điểm riêng của futures:</strong> mark-to-market hằng ngày đưa giá trị về 0 mỗi ngày và trả lãi ngay; giá futures và forward gần như bằng nhau trừ khi lãi suất tương quan với tài sản cơ sở (tương quan dương có lợi cho futures — lãi được tái đầu tư ở lãi suất cao hơn).</li></ul>"
    },
    {
     "h": "Cash-and-carry arbitrage step by step, then value the forward mid-life",
     "en": "<svg viewBox=\"0 0 720 320\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cost of carry and cash and carry arbitrage\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Cost of carry: what it costs to hold the spot until delivery</text>\n<rect x=\"60\" y=\"120\" width=\"150\" height=\"60\" rx=\"10\" fill=\"#5457E0\"/>\n<text x=\"135\" y=\"146\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#fff\">Spot today</text>\n<text x=\"135\" y=\"166\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#E5E9F2\">S₀ = 100</text>\n<rect x=\"510\" y=\"120\" width=\"150\" height=\"60\" rx=\"10\" fill=\"#0F9573\"/>\n<text x=\"585\" y=\"146\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#fff\">Forward F₀</text>\n<text x=\"585\" y=\"166\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#E7F6F0\">= 105 (fair)</text>\n<path d=\"M 212 150 L 506 150\" stroke=\"#5B6577\" stroke-width=\"2.2\" marker-end=\"url(#dcA)\"/>\n<text x=\"360\" y=\"112\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#B45309\">+ financing cost (r = 5%) + storage costs</text>\n<text x=\"360\" y=\"196\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0F9573\">− income (dividends, coupons) − convenience yield</text>\n<defs><marker id=\"dcA\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#5B6577\"/></marker></defs>\n<text x=\"360\" y=\"240\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#1B2438\" font-weight=\"600\">F₀ = [S₀ − PV(benefits) + PV(costs)] × (1 + r)ᵀ — no forecasting anywhere.</text>\n<text x=\"360\" y=\"272\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Market F = 108 &gt; 105? Cash-and-carry: borrow 100, buy spot, sell forward → lock in 3 riskless.</text>\n<text x=\"360\" y=\"292\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Market F = 102 &lt; 105? Reverse: short spot, invest 100, buy forward → lock in 3.</text>\n</svg>\n<p><strong>The forward price is arithmetic, not a forecast.</strong> S₀ = 100, r = 5%, 1 year, no income: fair F₀ = 100 × 1.05 = <strong>105</strong>. Prove it by breaking it both ways:</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Market F = 108 (too high)</th><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Market F = 102 (too low)</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Today: borrow 100 at 5%, buy spot, <strong>sell</strong> the forward at 108.</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Today: short the spot for 100, invest at 5%, <strong>buy</strong> the forward at 102.</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">At T: deliver the asset, receive 108, repay 105.</td><td style=\"padding:7px;border:1px solid #E5E9F2\">At T: collect 105, pay 102 for the asset, return it to the lender.</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Riskless profit = <strong>3</strong> — with zero net outlay.</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Riskless profit = <strong>3</strong>.</td></tr></table>\n<p>Arbitrageurs doing exactly this force F back to 105 — the <em>law of one price</em> enforced by replication. With benefits and costs: a stock index paying dividends with PV = 2 gives F₀ = (100 − 2) × 1.05 = <strong>102.9</strong>; a commodity with storage costs (PV = 1.5) and no income gives F₀ = 101.5 × 1.05 ≈ <strong>106.6</strong>. Commodities add the <strong>convenience yield</strong> — the value of physically holding scarce inventory — which enters as a benefit and can push forward curves into backwardation (F &lt; S) when inventories are tight; contango (F &gt; S) is the carry-dominated normal state.</p>\n<p><strong>Value during the life ≠ price.</strong> The forward <em>price</em> was fixed at 105; the contract's <em>value</em> started at zero and drifts with the market. Six months in, S = 104 and 6-month rates are still 5% (annual): V_long = S − F₀/(1+r)^(remaining) = 104 − 105/1.05^0.5 = 104 − 102.47 = <strong>+1.53</strong> — the long could sell out for 1.53 today. General rule: V_long(t) = Sₜ − PV of benefits remaining − F₀ discounted over the remaining term (add PV of remaining costs). At expiration this collapses to S_T − F₀, the payoff. Futures work the same way except daily settlement pays the value out each evening and resets it to zero — which is why \"futures value\" between settlements is just the unsettled day's move.</p>",
     "vi": "<p><strong>Giá forward là số học, không phải dự báo.</strong> S₀ = 100, r = 5%, 1 năm, không thu nhập: F₀ hợp lý = 100 × 1,05 = <strong>105</strong>. Chứng minh bằng cách \"bẻ gãy\" cả hai phía (bảng): nếu thị trường F = 108 (quá cao) — hôm nay vay 100 tại 5%, mua spot, <strong>bán</strong> forward 108; tại T giao tài sản, nhận 108, trả nợ 105 → lãi phi rủi ro <strong>3</strong> với vốn ròng bằng 0. Nếu F = 102 (quá thấp) — short spot lấy 100, đầu tư 5%, <strong>mua</strong> forward 102; tại T thu 105, trả 102 lấy tài sản, hoàn cho người cho mượn → lãi <strong>3</strong>.</p>\n<p>Nhà arbitrage làm đúng như vậy ép F về 105 — <em>luật một giá</em> được thực thi bằng sao chép (replication). Với lợi ích và chi phí: chỉ số cổ phiếu trả cổ tức PV = 2 cho F₀ = (100 − 2) × 1,05 = <strong>102,9</strong>; hàng hóa có chi phí lưu kho (PV = 1,5), không thu nhập cho F₀ = 101,5 × 1,05 ≈ <strong>106,6</strong>. Hàng hóa thêm <strong>convenience yield</strong> — giá trị của việc nắm giữ vật chất hàng khan hiếm — tính như một lợi ích và có thể đẩy đường forward vào backwardation (F &lt; S) khi tồn kho căng; contango (F &gt; S) là trạng thái bình thường do carry chi phối.</p>\n<p><strong>Giá trị giữa vòng đời ≠ giá.</strong> <em>Giá</em> forward chốt tại 105; <em>giá trị</em> hợp đồng khởi đầu bằng 0 và trôi theo thị trường. Sau 6 tháng, S = 104, lãi suất vẫn 5% (năm): V_long = S − F₀/(1+r)^(kỳ còn lại) = 104 − 105/1,05^0,5 = 104 − 102,47 = <strong>+1,53</strong> — bên long có thể bán lại vị thế với 1,53 hôm nay. Quy tắc chung: V_long(t) = Sₜ − PV lợi ích còn lại − F₀ chiết khấu theo kỳ còn lại (cộng PV chi phí còn lại). Tại đáo hạn nó sụp về S_T − F₀, chính là payoff. Futures y hệt trừ việc thanh toán hằng ngày trả giá trị ra mỗi tối và reset về 0 — vì thế \"giá trị futures\" giữa hai lần settle chỉ là biến động chưa thanh toán trong ngày.</p>"
    }
   ],
   "formulas": [
    [
     "Forward price",
     "F0 = S0(1+r)^T + FV(costs) − FV(benefits)",
     "Cost of carry model"
    ],
    [
     "Forward value (long, during life)",
     "Vₜ = Sₜ − PV(F₀)",
     "At expiration: V = S_T − F₀"
    ],
    [
     "Carry with benefits/costs",
     "F₀ = [S₀ − PV(benefits) + PV(costs)](1+r)ᵀ",
     "Dividends & convenience yield lower F"
    ],
    [
     "Forward value during life (long)",
     "V_t = S_t − PV(remaining benefits) − F0/(1+r)^(T−t)",
     "Price is fixed at inception; value drifts with the market."
    ],
    [
     "Contango / backwardation",
     "contango: F > S (carry dominates) · backwardation: F < S",
     "Tight inventories → convenience yield → backwardation."
    ]
   ]
  },
  {
   "title": "Pricing and Valuation of Swaps",
   "sections": [
    {
     "h": "Swaps: a portfolio of forwards priced off the curve",
     "en": "<ul><li><strong>Mechanics:</strong> in a plain-vanilla interest rate swap, one side pays a <em>fixed rate</em>, the other pays a <em>floating rate</em> (MRR) on a notional that is never exchanged; payments are netted each period. Economically, a swap is <strong>a series of forward contracts</strong> on the floating rate, one per settlement date.</li><li><strong>Pricing:</strong> the fixed rate is set so the swap’s value is <strong>zero at initiation</strong> — it equals the <em>par swap rate</em> implied by the spot/forward curve (the coupon making PV(fixed leg) = PV(expected floating leg)). No forecasting: the curve does the work.</li><li><strong>Valuation after inception:</strong> as rates move, the swap gains value to one side: rates <em>rise</em> → the fixed-rate <strong>payer</strong> gains (paying below-market fixed); rates <em>fall</em> → the fixed-rate <strong>receiver</strong> gains. Value = PV difference between the two legs at current rates.</li><li><strong>Uses:</strong> converting floating-rate debt to fixed (classic corporate hedge), adjusting portfolio duration cheaply (receive-fixed adds duration), currency swaps for funding abroad, and equity/total-return swaps for synthetic exposure.</li></ul>",
     "vi": "<ul><li><strong>Cơ chế:</strong> trong swap lãi suất vanilla, một bên trả <em>lãi cố định</em>, bên kia trả <em>lãi thả nổi</em> (MRR) trên notional không bao giờ trao đổi; mỗi kỳ chỉ thanh toán phần chênh (netting). Về bản chất, swap là <strong>một chuỗi hợp đồng forward</strong> trên lãi suất thả nổi, mỗi kỳ thanh toán một forward.</li><li><strong>Định giá:</strong> lãi suất cố định được đặt sao cho giá trị swap <strong>bằng 0 lúc khởi tạo</strong> — nó bằng <em>par swap rate</em> hàm ý từ đường spot/forward (mức coupon khiến PV(chân cố định) = PV(chân thả nổi kỳ vọng)). Không cần dự báo: đường cong tự làm việc đó.</li><li><strong>Định giá sau khởi tạo:</strong> lãi suất biến động làm swap có giá trị cho một bên: lãi <em>tăng</em> → bên <strong>trả cố định</strong> lãi (đang trả thấp hơn thị trường); lãi <em>giảm</em> → bên <strong>nhận cố định</strong> lãi. Giá trị = chênh lệch PV hai chân theo lãi suất hiện hành.</li><li><strong>Công dụng:</strong> đổi nợ thả nổi sang cố định (phòng hộ doanh nghiệp kinh điển), điều chỉnh duration danh mục với chi phí thấp (nhận cố định = thêm duration), currency swap để huy động vốn nước ngoài, equity/total-return swap cho vị thế tổng hợp.</li></ul>"
    },
    {
     "h": "Price the swap off the curve — every number shown",
     "en": "<svg viewBox=\"0 0 720 300\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Interest rate swap cash flows\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Plain-vanilla interest rate swap: fixed one way, floating the other</text>\n<rect x=\"80\" y=\"100\" width=\"180\" height=\"70\" rx=\"10\" fill=\"#5457E0\"/>\n<text x=\"170\" y=\"130\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#fff\">Fixed-rate payer</text>\n<text x=\"170\" y=\"150\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#E5E9F2\">(\"long\" the swap — gains if rates rise)</text>\n<rect x=\"460\" y=\"100\" width=\"180\" height=\"70\" rx=\"10\" fill=\"#0F9573\"/>\n<text x=\"550\" y=\"130\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#fff\">Floating-rate payer</text>\n<text x=\"550\" y=\"150\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#E7F6F0\">(receives fixed)</text>\n<path d=\"M 264 118 L 456 118\" stroke=\"#5457E0\" stroke-width=\"2.4\" marker-end=\"url(#swA)\"/>\n<text x=\"360\" y=\"108\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#5457E0\">pays FIXED (the swap rate, set at start)</text>\n<path d=\"M 456 154 L 264 154\" stroke=\"#0F9573\" stroke-width=\"2.4\" marker-end=\"url(#swB)\"/>\n<text x=\"360\" y=\"176\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F9573\">pays FLOATING (MRR, resets each period)</text>\n<defs>\n<marker id=\"swA\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#5457E0\"/></marker>\n<marker id=\"swB\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#0F9573\"/></marker>\n</defs>\n<text x=\"360\" y=\"216\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">Notional is never exchanged; only NET payments flow. No money changes hands at initiation — the fixed rate is set so V₀ = 0.</text>\n<text x=\"360\" y=\"248\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">A swap = a strip of forwards on the floating rate — some initially in your favor, some against, netting to zero.</text>\n<text x=\"360\" y=\"274\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">Classic use: a firm with a floating-rate loan pays fixed in a swap → net cost is locked at the swap rate.</text>\n</svg>\n<p><strong>Setup.</strong> A 2-year, annual-pay, plain-vanilla swap. Spot rates: z₁ = 3.00%, z₂ = 4.00%. Discount factors: df₁ = 1/1.03 = <strong>0.9709</strong>; df₂ = 1/1.04² = <strong>0.9246</strong>.</p>\n<p><strong>The par-swap rate.</strong> A swap's fixed rate is the coupon that prices a par bond off today's curve (the swap-rate formula is the par-rate formula from Fixed Income): s = (1 − df_N)/Σdf = (1 − 0.9246)/(0.9709 + 0.9246) = 0.0754/1.8955 = <strong>3.98%</strong>. Cross-check with forwards: the implied 1y1y rate is 1.04²/1.03 − 1 = 5.01%, and receiving floating means expecting 3.00% then 5.01%; paying a constant 3.98% has PV(fixed) = PV(expected floating) exactly. <strong>A swap is a strip of forwards</strong>: the first period's forward (3.00% vs 3.98% fixed) starts against the fixed payer, the second (5.01% vs 3.98%) in their favor — the pieces net to zero value at initiation, which is why no money changes hands.</p>\n<p><strong>Value after rates move.</strong> A year later, the swap has one exchange left and 1-year rates have jumped to 6%. The fixed payer pays 3.98% and receives the floating set at 6%: net receipt at year-end per 100 notional = 6.00 − 3.98 = 2.02, worth 2.02/1.06 = <strong>+1.91 to the fixed payer</strong>. General principle: rates up → pay-fixed side gains (they locked a cheap rate); rates down → receive-fixed side gains. Between reset dates the floating leg also accrues value, but at each reset it reprices to par — the floating leg is a par floater.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Concept</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Swap answer</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Price of the swap</td><td style=\"padding:7px;border:1px solid #E5E9F2\">the fixed (par-swap) rate — 3.98% here; set so V₀ = 0</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Value of the swap</td><td style=\"padding:7px;border:1px solid #E5E9F2\">starts at 0; = PV(receipts) − PV(payments) thereafter</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Who is \"long\"?</td><td style=\"padding:7px;border:1px solid #E5E9F2\">the fixed-rate payer — gains when rates rise</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Classic use</td><td style=\"padding:7px;border:1px solid #E5E9F2\">floating-rate borrower pays fixed → all-in cost locked at swap rate + loan spread</td></tr></table>",
     "vi": "<p><strong>Thiết lập.</strong> Swap plain-vanilla 2 năm, trả hằng năm. Lãi suất spot: z₁ = 3,00%, z₂ = 4,00%. Hệ số chiết khấu: df₁ = 1/1,03 = <strong>0,9709</strong>; df₂ = 1/1,04² = <strong>0,9246</strong>.</p>\n<p><strong>Par-swap rate.</strong> Lãi suất cố định của swap là mức coupon định giá một trái phiếu par theo đường cong hôm nay (công thức swap rate chính là công thức par rate bên Fixed Income): s = (1 − df_N)/Σdf = (1 − 0,9246)/(0,9709 + 0,9246) = <strong>3,98%</strong>. Đối chiếu bằng forward: lãi 1y1y hàm ý là 1,04²/1,03 − 1 = 5,01%; nhận thả nổi nghĩa là kỳ vọng 3,00% rồi 5,01%; trả cố định 3,98% có PV(cố định) = PV(thả nổi kỳ vọng) chính xác. <strong>Swap là chuỗi forward</strong>: forward kỳ đầu (3,00% vs cố định 3,98%) bất lợi cho bên trả cố định, kỳ hai (5,01% vs 3,98%) có lợi — các mảnh net về giá trị 0 tại khởi đầu, vì thế không ai trả tiền ai lúc ký.</p>\n<p><strong>Giá trị sau khi lãi suất dịch chuyển.</strong> Một năm sau, swap còn một lần trao đổi và lãi 1 năm vọt lên 6%. Bên trả cố định trả 3,98% và nhận thả nổi chốt 6%: khoản nhận ròng cuối năm trên 100 notional = 6,00 − 3,98 = 2,02, hiện giá 2,02/1,06 = <strong>+1,91 cho bên trả cố định</strong>. Nguyên tắc chung: lãi tăng → phía trả cố định lãi (họ đã khóa mức rẻ); lãi giảm → phía nhận cố định lãi. Giữa hai kỳ reset chân thả nổi cũng tích lũy giá trị, nhưng tại mỗi reset nó định giá lại về par — chân thả nổi là một par floater.</p>\n<p><strong>Bảng chốt:</strong> \"giá\" của swap = lãi suất cố định (par-swap rate) — 3,98% ở đây, đặt sao cho V₀ = 0; \"giá trị\" của swap = bắt đầu tại 0, sau đó = PV(khoản nhận) − PV(khoản trả); ai là \"long\"? — bên trả cố định, hưởng lợi khi lãi tăng; công dụng kinh điển — người vay thả nổi trả cố định → tổng chi phí khóa tại swap rate + spread khoản vay.</p>"
    }
   ],
   "formulas": [
    [
     "Par-swap rate",
     "s = (1 − df_N) / Σ df_i",
     "Identical to the par-rate formula — the fixed leg prices a par bond."
    ],
    [
     "Swap value to fixed payer",
     "V = PV(expected floating receipts) − PV(fixed payments)",
     "Rates up → pay-fixed gains; rates down → receive-fixed gains."
    ]
   ]
  },
  {
   "title": "Option Valuation: Parity & the Binomial Model",
   "sections": [
    {
     "h": "What an option is worth: exercise value, time value & the six drivers",
     "en": "<ul><li><strong>Option value = exercise value + time value.</strong> Exercise (intrinsic) value: call = max(0, S − X); put = max(0, X − S). Time value reflects the chance of ending deeper in the money before expiry — it is largest at-the-money and decays to zero at expiration (<em>theta</em> bleed), so option value converges to exercise value at expiry.</li><li><strong>The six drivers</strong> and their directions: underlying price (call +, put −); exercise price (call −, put +); time to expiration (call +; put usually + but deep-ITM European puts can lose value with more time — money received later); <em>risk-free rate</em> (call +, put −: carrying argument); <strong>volatility</strong> (both +: payoffs are asymmetric — options love uncertainty); expected dividends/benefits of the underlying (call −, put +: they drag the forward price down).</li><li><strong>Bounds:</strong> a call is never worth more than the underlying; a European put never more than PV(X); options never have negative value — the option holder has rights, not obligations, which is why buyers pay a premium and writers demand one.</li></ul>",
     "vi": "<ul><li><strong>Giá trị quyền chọn = giá trị thực hiện + giá trị thời gian.</strong> Giá trị thực hiện (nội tại): call = max(0, S − X); put = max(0, X − S). Giá trị thời gian phản ánh cơ hội lún sâu hơn vào vùng có lời trước đáo hạn — lớn nhất tại at-the-money và tan dần về 0 khi đáo hạn (hao <em>theta</em>), nên giá quyền chọn hội tụ về giá trị thực hiện lúc đáo hạn.</li><li><strong>Sáu yếu tố</strong> và chiều tác động: giá tài sản cơ sở (call +, put −); giá thực hiện (call −, put +); thời gian tới đáo hạn (call +; put thường + nhưng put châu Âu sâu trong tiền có thể giảm giá trị khi thời gian dài hơn — tiền nhận muộn hơn); <em>lãi suất phi rủi ro</em> (call +, put −: lập luận chi phí nắm giữ); <strong>độ biến động</strong> (cả hai +: payoff bất đối xứng — quyền chọn \"yêu\" sự bất định); cổ tức/lợi ích kỳ vọng của tài sản cơ sở (call −, put +: chúng kéo giá forward xuống).</li><li><strong>Chặn giá trị:</strong> call không bao giờ đắt hơn tài sản cơ sở; put châu Âu không quá PV(X); quyền chọn không bao giờ âm giá trị — người nắm có quyền, không có nghĩa vụ, vì vậy người mua trả premium còn người bán đòi premium.</li></ul>"
    },
    {
     "h": "Put–call parity",
     "en": "<p>For European options on the same underlying, strike, and expiry:</p><p><strong>c + X/(1+r)<sup>T</sup> = p + S₀</strong></p><p>Left side = <em>fiduciary call</em> (call + riskless bond paying X); right side = <em>protective put</em> (stock + put). Both give the same payoff — max(S<sub>T</sub>, X) — so they must cost the same, or arbitrage exists. Rearranged, parity lets you create <strong>synthetic</strong> positions: e.g., synthetic call = p + S₀ − X/(1+r)<sup>T</sup>. Put–call–forward parity replaces the stock with a forward: c + X/(1+r)<sup>T</sup> = p + F₀/(1+r)<sup>T</sup>.</p>",
     "vi": "<p>Với quyền chọn kiểu Âu cùng tài sản cơ sở, cùng giá thực hiện và ngày đáo hạn:</p><p><strong>c + X/(1+r)<sup>T</sup> = p + S₀</strong></p><p>Vế trái = <em>fiduciary call</em> (call + trái phiếu phi rủi ro trả X); vế phải = <em>protective put</em> (cổ phiếu + put). Cả hai cho cùng payoff — max(S<sub>T</sub>, X) — nên phải có cùng giá, nếu không sẽ có arbitrage. Biến đổi công thức cho phép tạo vị thế <strong>tổng hợp (synthetic)</strong>: VD call tổng hợp = p + S₀ − X/(1+r)<sup>T</sup>. Ngang giá put–call–forward thay cổ phiếu bằng forward.</p>"
    },
    {
     "h": "The one-period binomial model: risk-neutral pricing",
     "en": "<ul><li><strong>Setup:</strong> the underlying at S₀ moves to S₀u (up) or S₀d (down) in one period. A call is worth c⁺ = max(0, S₀u − X) or c⁻ = max(0, S₀d − X). Build a <em>hedged portfolio</em> — short the option, long <strong>h</strong> shares, with <strong>h = (c⁺ − c⁻)/(S₀u − S₀d)</strong> — and its payoff is identical in both states: riskless, so it must earn the risk-free rate.</li><li><strong>Risk-neutral probability:</strong> solving gives <strong>π = (1 + r − d)/(u − d)</strong>, and the option value is the discounted \"expected\" payoff: <strong>c₀ = [π·c⁺ + (1−π)·c⁻]/(1+r)</strong>. Crucially, π is <em>not</em> the real-world probability of an up-move and investors’ risk preferences never enter — the price comes from no-arbitrage replication alone.</li><li><strong>Intuition to keep:</strong> more volatility (wider u vs d) → higher option value; expected returns of the underlying are irrelevant; the same machinery scaled to many small periods becomes the standard option-pricing lattice.</li></ul>",
     "vi": "<ul><li><strong>Thiết lập:</strong> tài sản cơ sở từ S₀ lên S₀u (up) hoặc xuống S₀d (down) sau một kỳ. Call trị giá c⁺ = max(0, S₀u − X) hoặc c⁻ = max(0, S₀d − X). Dựng <em>danh mục phòng hộ</em> — bán quyền chọn, mua <strong>h</strong> cổ phiếu, với <strong>h = (c⁺ − c⁻)/(S₀u − S₀d)</strong> — payoff giống nhau ở cả hai trạng thái: phi rủi ro, nên phải sinh đúng lãi suất phi rủi ro.</li><li><strong>Xác suất trung lập rủi ro:</strong> giải ra <strong>π = (1 + r − d)/(u − d)</strong>, và giá quyền chọn là payoff \"kỳ vọng\" chiết khấu: <strong>c₀ = [π·c⁺ + (1−π)·c⁻]/(1+r)</strong>. Điểm mấu chốt: π <em>không phải</em> xác suất thực của nhịp tăng và khẩu vị rủi ro của nhà đầu tư không hề xuất hiện — giá đến thuần túy từ sao chép không-arbitrage.</li><li><strong>Trực giác cần giữ:</strong> biến động lớn hơn (u và d cách xa nhau) → quyền chọn đắt hơn; lợi suất kỳ vọng của tài sản cơ sở không liên quan; cùng bộ máy này chia thành nhiều kỳ nhỏ chính là lưới định giá quyền chọn tiêu chuẩn.</li></ul>"
    },
    {
     "h": "Binomial pricing with every number, replication check & parity arbitrage",
     "en": "<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"One period binomial option pricing\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">One-period binomial: S = 100, u = 1.25, d = 0.80, X = 100, r = 4%</text>\n<circle cx=\"160\" cy=\"180\" r=\"42\" fill=\"#5457E0\"/>\n<text x=\"160\" y=\"174\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#fff\">S = 100</text>\n<text x=\"160\" y=\"193\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#E5E9F2\">c = ?</text>\n<circle cx=\"520\" cy=\"90\" r=\"46\" fill=\"#0F9573\"/>\n<text x=\"520\" y=\"80\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#fff\">Su = 125</text>\n<text x=\"520\" y=\"99\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#E7F6F0\">cᵘ = max(125−100,0)</text>\n<text x=\"520\" y=\"115\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\">= 25</text>\n<circle cx=\"520\" cy=\"268\" r=\"46\" fill=\"#DC4848\"/>\n<text x=\"520\" y=\"258\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#fff\">Sd = 80</text>\n<text x=\"520\" y=\"277\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#FDECEC\">c_d = max(80−100,0)</text>\n<text x=\"520\" y=\"293\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\">= 0</text>\n<line x1=\"196\" y1=\"158\" x2=\"476\" y2=\"102\" stroke=\"#5B6577\" stroke-width=\"2\"/>\n<line x1=\"196\" y1=\"202\" x2=\"476\" y2=\"256\" stroke=\"#5B6577\" stroke-width=\"2\"/>\n<text x=\"330\" y=\"118\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0F9573\">π = (1.04 − 0.80)/(1.25 − 0.80) = 0.533</text>\n<text x=\"330\" y=\"252\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#DC4848\">1 − π = 0.467</text>\n<text x=\"360\" y=\"322\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#8B5CF6\" font-weight=\"600\">c = [0.533 × 25 + 0.467 × 0] / 1.04 = 12.82 — risk-neutral probabilities, NOT real-world forecasts.</text>\n</svg>\n<p><strong>Step by step.</strong> S = 100, u = 1.25, d = 0.80, X = 100, r = 4%, one period. (1) Terminal payoffs: cᵘ = 25, c_d = 0. (2) Risk-neutral probability π = (1 + r − d)/(u − d) = (1.04 − 0.80)/(1.25 − 0.80) = <strong>0.5333</strong>. (3) Discount the expected payoff: c = (0.5333 × 25 + 0.4667 × 0)/1.04 = <strong>12.82</strong>. Note what was <em>never</em> used: the real-world probability of an up move and any risk premium — π is the probability that makes the stock earn the risk-free rate, a bookkeeping device, not a forecast.</p>\n<p><strong>Replication check (why the answer must be right).</strong> Hedge ratio h = (cᵘ − c_d)/(Sᵘ − S_d) = 25/45 = <strong>0.5556</strong> shares per call. Portfolio: buy 0.5556 shares, borrow PV of (0.5556 × 80) = 44.44/1.04 = 42.74. Cost today = 55.56 − 42.74 = <strong>12.82</strong> ✓. Up state: 0.5556 × 125 − 44.44 = 25 ✓; down: 0.5556 × 80 − 44.44 = 0 ✓. The option <em>is</em> this portfolio; any other price is arbitrage.</p>\n<p><strong>Put–call parity ties everything together:</strong> S + p = c + X/(1 + r)ᵀ. Solve for the put: p = 12.82 + 100/1.04 − 100 = 12.82 + 96.15 − 100 = <strong>8.97</strong>. The identity says a <em>protective put</em> (stock + put) and a <em>fiduciary call</em> (call + risk-free bond paying X) have identical payoffs — min(S_T, X) plus upside — so they must cost the same. Arbitrage drill: if the put trades at 10.50 (&gt; 8.97), sell the put, short the stock, buy the call, invest X/(1+r); pocket 1.53 today with all future obligations covered. Rearranged, parity also manufactures synthetics: c − p = S − PV(X) means long call + short put = a synthetic forward at X.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Driver ↑</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Call value</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Put value</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Underlying price S</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">↑</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">↓</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Strike X</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">↓</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">↑</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Time to expiry</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">↑</td><td style=\"padding:7px;border:1px solid #E5E9F2\">↑ usually (exception: deep-ITM European puts — waiting delays receiving X)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Volatility</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">↑</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">↑ (both — payoffs are asymmetric)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Risk-free rate</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">↑</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">↓</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Dividends/benefits</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">↓</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">↑</td></tr></table>\n<p>Value = exercise value + time value; time value ≥ 0 and melts to zero at expiration. American options add early exercise: valuable for puts (collect X early) and for calls only just before dividends — otherwise an American call on a non-dividend stock is worth the same as the European.</p>",
     "vi": "<p><strong>Từng bước.</strong> S = 100, u = 1,25, d = 0,80, X = 100, r = 4%, một kỳ. (1) Payoff cuối: cᵘ = 25, c_d = 0. (2) Xác suất trung hòa rủi ro π = (1 + r − d)/(u − d) = (1,04 − 0,80)/(1,25 − 0,80) = <strong>0,5333</strong>. (3) Chiết khấu payoff kỳ vọng: c = (0,5333 × 25 + 0,4667 × 0)/1,04 = <strong>12,82</strong>. Chú ý những gì <em>không bao giờ</em> được dùng: xác suất thực của cú tăng giá và bất kỳ phần bù rủi ro nào — π là xác suất khiến cổ phiếu sinh lời đúng bằng lãi phi rủi ro, một công cụ sổ sách, không phải dự báo.</p>\n<p><strong>Kiểm tra bằng sao chép (vì sao đáp án buộc phải đúng).</strong> Hedge ratio h = (cᵘ − c_d)/(Sᵘ − S_d) = 25/45 = <strong>0,5556</strong> cổ phiếu mỗi call. Danh mục: mua 0,5556 cổ phiếu, vay PV của (0,5556 × 80) = 44,44/1,04 = 42,74. Chi phí hôm nay = 55,56 − 42,74 = <strong>12,82</strong> ✓. Trạng thái tăng: 0,5556 × 125 − 44,44 = 25 ✓; giảm: 0,5556 × 80 − 44,44 = 0 ✓. Quyền chọn <em>chính là</em> danh mục này; mọi giá khác đều là arbitrage.</p>\n<p><strong>Put–call parity buộc tất cả lại:</strong> S + p = c + X/(1 + r)ᵀ. Giải cho put: p = 12,82 + 100/1,04 − 100 = <strong>8,97</strong>. Đẳng thức nói <em>protective put</em> (cổ phiếu + put) và <em>fiduciary call</em> (call + trái phiếu phi rủi ro trả X) có payoff giống hệt — min(S_T, X) cộng upside — nên phải cùng giá. Drill arbitrage: nếu put giao dịch 10,50 (&gt; 8,97), bán put, short cổ phiếu, mua call, đầu tư X/(1+r); bỏ túi 1,53 hôm nay với mọi nghĩa vụ tương lai đã phủ kín. Sắp xếp lại, parity còn chế tạo sản phẩm tổng hợp: c − p = S − PV(X) nghĩa là long call + short put = một forward tổng hợp tại X.</p>\n<p><strong>Sáu động lực (bảng):</strong> S tăng → call tăng, put giảm; X cao hơn → call giảm, put tăng; thời gian dài hơn → call tăng, put thường tăng (ngoại lệ: put châu Âu deep-ITM — chờ đợi trì hoãn việc nhận X); biến động tăng → cả hai tăng (payoff bất đối xứng); lãi phi rủi ro tăng → call tăng, put giảm; cổ tức/lợi ích tăng → call giảm, put tăng.</p>\n<p>Giá trị = giá trị thực hiện + giá trị thời gian; giá trị thời gian ≥ 0 và tan chảy về 0 tại đáo hạn. Quyền chọn kiểu Mỹ thêm quyền thực hiện sớm: đáng giá với put (nhận X sớm) và với call chỉ ngay trước ngày chia cổ tức — ngoài ra call Mỹ trên cổ phiếu không cổ tức đáng giá đúng bằng call châu Âu.</p>"
    }
   ],
   "formulas": [
    [
     "Put–call parity",
     "c + X/(1+r)^T = p + S0",
     "European options only"
    ],
    [
     "Risk-neutral probability",
     "π = (1 + r − d) / (u − d)",
     "Value = discounted π-weighted payoff"
    ],
    [
     "Hedge ratio",
     "h = (c⁺ − c⁻) / (S₀u − S₀d)",
     "Shares per short option for a riskless portfolio"
    ],
    [
     "Binomial call value",
     "c = [π·c_up + (1−π)·c_down]/(1+r), π = (1+r−d)/(u−d)",
     "Risk-neutral π — real-world probabilities never appear."
    ],
    [
     "Synthetic forward",
     "c − p = S − X/(1+r)^T",
     "Long call + short put at the same X = forward at X."
    ],
    [
     "Protective put = fiduciary call",
     "S + p = c + X/(1+r)^T",
     "Two portfolios, identical payoffs → identical price (parity)."
    ]
   ]
  }
 ],
 "vocab": [
  [
   "notional amount",
   "Reference amount on which derivative payments are computed.",
   "giá trị danh nghĩa"
  ],
  [
   "mark-to-market",
   "Daily settlement of futures gains and losses.",
   "hạch toán theo giá thị trường hằng ngày"
  ],
  [
   "clearinghouse",
   "Entity that guarantees both sides of exchange-traded derivatives.",
   "trung tâm thanh toán bù trừ"
  ],
  [
   "strike (exercise) price",
   "Price at which an option can be exercised.",
   "giá thực hiện"
  ],
  [
   "premium",
   "Price paid by the option buyer to the writer.",
   "phí quyền chọn"
  ],
  [
   "in/at/out of the money",
   "Option with positive / zero / negative intrinsic value.",
   "trạng thái lời / hòa / lỗ của quyền chọn"
  ],
  [
   "time value",
   "Option value above intrinsic value; decays with time.",
   "giá trị thời gian"
  ],
  [
   "protective put",
   "Long stock + long put: downside insurance.",
   "chiến lược bảo hộ bằng quyền chọn bán"
  ],
  [
   "covered call",
   "Long stock + short call: income, capped upside.",
   "bán call có bảo đảm"
  ],
  [
   "contango / backwardation",
   "Futures price above / below the spot price.",
   "giá kỳ hạn cao hơn / thấp hơn giá giao ngay"
  ],
  [
   "CCP & novation",
   "Central counterparty substituted into both sides of a cleared trade",
   "Đối tác bù trừ trung tâm chen vào cả hai phía giao dịch đã bù trừ"
  ],
  [
   "initial / maintenance / variation margin",
   "Collateral posted up front, the floor, and daily settlement flows",
   "Ký quỹ ban đầu, mức duy trì, và dòng thanh toán hằng ngày"
  ],
  [
   "cost of carry",
   "Financing plus ownership costs minus benefits linking spot to forward prices",
   "Chi phí vốn + chi phí nắm giữ − lợi ích, nối giá spot với giá forward"
  ],
  [
   "convenience yield",
   "Non-cash benefit of holding a physical commodity (availability in shortages)",
   "Lợi ích phi tiền mặt khi nắm hàng hóa vật chất (sẵn hàng lúc khan hiếm)"
  ],
  [
   "basis risk",
   "Hedge instrument and exposure not moving one-for-one",
   "Công cụ phòng hộ và khoản phơi nhiễm không biến động 1:1"
  ],
  [
   "par swap rate",
   "Fixed rate making a new swap worth zero, implied by the curve",
   "Lãi suất cố định khiến swap mới có giá trị 0, hàm ý từ đường cong"
  ],
  [
   "notional principal",
   "Reference amount for computing payments; not exchanged in rate swaps",
   "Số tiền danh nghĩa để tính thanh toán; không trao đổi trong swap lãi suất"
  ],
  [
   "protective put / fiduciary call",
   "S + p and c + PV(X): the two equivalent insured-equity portfolios",
   "S + p và c + PV(X): hai danh mục \"cổ phiếu có bảo hiểm\" tương đương"
  ],
  [
   "risk-neutral probability",
   "No-arbitrage pricing weight π = (1+r−d)/(u−d); not a forecast",
   "Trọng số định giá không-arbitrage π = (1+r−d)/(u−d); không phải dự báo"
  ],
  [
   "hedge ratio",
   "Shares held per option written to create the riskless binomial portfolio",
   "Số cổ phiếu nắm trên mỗi quyền chọn bán ra để tạo danh mục phi rủi ro"
  ]
 ],
 "quiz": [
  {
   "q": "A stock trades at $100. The risk-free rate is 5% and the stock pays no dividends. The one-year forward price is closest to:",
   "opts": [
    "$95.24",
    "$100.00",
    "$105.00"
   ],
   "ans": 2,
   "en": "C is correct. F0 = S0(1+r)^T = 100 × 1.05 = $105. The forward price compensates the short for carrying the asset — it is an arbitrage relationship, not a forecast of the future spot price.",
   "vi": "Đáp án C. F0 = 100 × 1.05 = 105 USD. Giá forward bù đắp chi phí nắm giữ tài sản — đây là quan hệ arbitrage, không phải dự báo giá giao ngay tương lai."
  },
  {
   "q": "An investor buys a call with strike $50 for a premium of $4. At expiration the stock trades at $57. The investor’s profit is:",
   "opts": [
    "$3",
    "$7",
    "$11"
   ],
   "ans": 0,
   "en": "A is correct. Payoff = max(0, 57 − 50) = $7; profit = payoff − premium = 7 − 4 = $3.",
   "vi": "Đáp án A. Payoff = max(0, 57 − 50) = 7; lợi nhuận = 7 − 4 = 3 USD."
  },
  {
   "q": "According to put–call parity, a synthetic long call position can be created by:",
   "opts": [
    "long put + long stock + borrowing the PV of the strike.",
    "long put + long stock + lending the PV of the strike.",
    "short put + long risk-free bond."
   ],
   "ans": 0,
   "en": "A is correct. From c = p + S0 − X/(1+r)^T: buy the put, buy the stock, and borrow the present value of the strike (the negative bond term = borrowing).",
   "vi": "Đáp án A. Từ c = p + S0 − X/(1+r)^T: mua put, mua cổ phiếu, và vay khoản bằng hiện giá của giá thực hiện (dấu trừ của trái phiếu = đi vay)."
  },
  {
   "q": "Compared with forwards, futures contracts most likely have:",
   "opts": [
    "greater counterparty risk.",
    "greater customization of contract terms.",
    "daily settlement of gains and losses."
   ],
   "ans": 2,
   "en": "C is correct. Futures are marked to market daily through a clearinghouse with margin requirements, which nearly eliminates counterparty risk (A wrong) at the cost of standardization (B wrong).",
   "vi": "Đáp án C. Futures được hạch toán lãi/lỗ hằng ngày qua trung tâm thanh toán bù trừ với ký quỹ, gần như loại bỏ rủi ro đối tác (A sai) nhưng đổi lại là hợp đồng chuẩn hóa, không tùy chỉnh (B sai)."
  }
 ]
});
window.CFA.extra["deriv"] = {
 "checks": [
  [
   {
    "q": "The mechanism by which a clearinghouse becomes the buyer to every seller and the seller to every buyer is called:",
    "opts": [
     "Netting",
     "Novation",
     "Rehypothecation"
    ],
    "ans": 1,
    "en": "Novation substitutes the CCP into both sides of the trade, mutualizing and collateralizing counterparty risk.",
    "vi": "Novation đưa CCP vào cả hai phía giao dịch, tập trung hóa và bảo đảm hóa rủi ro đối tác."
   },
   {
    "q": "Compared with exchange-traded derivatives, OTC derivatives most notably offer:",
    "opts": [
     "Greater customization of contract terms",
     "Lower counterparty risk without collateral",
     "Daily settlement of gains and losses"
    ],
    "ans": 0,
    "en": "OTC contracts are bilaterally tailored (size, dates, underlying); the trade-off is counterparty exposure unless cleared or collateralized.",
    "vi": "Hợp đồng OTC được \"may đo\" song phương (quy mô, ngày, tài sản cơ sở); đánh đổi là rủi ro đối tác trừ khi được bù trừ hoặc có tài sản bảo đảm."
   },
   {
    "q": "The market value of a $200m notional interest-rate swap is most likely:",
    "opts": [
     "Close to $200m",
     "A small fraction of $200m",
     "Exactly zero at all times"
    ],
    "ans": 1,
    "en": "Only net interest differences flow; notional measures scale, not money at risk. Value is zero only at initiation.",
    "vi": "Chỉ phần chênh lãi ròng chảy qua; notional đo quy mô, không phải tiền có thể mất. Giá trị bằng 0 chỉ tại lúc khởi tạo."
   },
   {
    "q": "After novation by a clearinghouse, each trader's counterparty is:",
    "opts": [
     "The original trader on the other side",
     "The CCP itself",
     "The exchange's largest member"
    ],
    "ans": 1,
    "en": "The CCP becomes buyer to every seller and seller to every buyer, backed by margin and a default fund.",
    "vi": "CCP trở thành người mua của mọi người bán và người bán của mọi người mua, được chống lưng bởi ký quỹ và quỹ vỡ nợ."
   }
  ],
  [
   {
    "q": "Compared with a forward contract, a futures contract most notably features:",
    "opts": [
     "Customized terms and no collateral",
     "Exchange trading, daily mark-to-market, and a clearinghouse guarantee",
     "Higher counterparty risk"
    ],
    "ans": 1,
    "en": "Futures are standardized, exchange-traded, margined and marked to market daily — nearly eliminating counterparty risk that forwards carry.",
    "vi": "Futures chuẩn hóa, giao dịch trên sàn, ký quỹ và hạch toán lãi lỗ hằng ngày qua trung tâm thanh toán bù trừ — gần như loại bỏ rủi ro đối tác của forward."
   },
   {
    "q": "A call option with strike $50 on a stock trading at $57 is:",
    "opts": [
     "Out of the money",
     "In the money with intrinsic value $7",
     "At the money"
    ],
    "ans": 1,
    "en": "Call intrinsic value = max(S − X, 0) = 57 − 50 = $7 → in the money. (For puts it is max(X − S, 0).)",
    "vi": "Giá trị nội tại của call = max(S − X, 0) = 7 USD → đang có lời (ITM). Với put là max(X − S, 0)."
   },
   {
    "q": "S = 47. A put with X = 50 bought for 2.10 is exercised at expiration when S = 46. The PROFIT is:",
    "opts": [
     "4.00",
     "1.90",
     "−2.10"
    ],
    "ans": 1,
    "en": "Payoff = 50 − 46 = 4; profit = 4 − 2.10 = 1.90.",
    "vi": "Payoff = 50 − 46 = 4; lợi nhuận = 4 − 2,10 = 1,90."
   },
   {
    "q": "A futures trader's balance falls below MAINTENANCE margin. The deposit must restore the balance to:",
    "opts": [
     "The maintenance level",
     "The initial margin level",
     "Zero loss"
    ],
    "ans": 1,
    "en": "Futures margin calls restore INITIAL margin — unlike securities margin, which restores maintenance.",
    "vi": "Margin call của futures nộp về mức INITIAL — khác ký quỹ chứng khoán chỉ về maintenance."
   }
  ],
  [
   {
    "q": "Futures markets contribute to price discovery most directly because they:",
    "opts": [
     "Guarantee future spot prices",
     "Reveal the market’s consensus expectations for the underlying at low cost",
     "Eliminate volatility in the cash market"
    ],
    "ans": 1,
    "en": "Liquid derivative prices aggregate expectations (and implied volatility aggregates uncertainty) — information the cash market alone provides less cleanly.",
    "vi": "Giá phái sinh thanh khoản tổng hợp kỳ vọng thị trường (và volatility hàm ý tổng hợp mức bất định) — thông tin mà thị trường cơ sở một mình khó thể hiện rõ bằng."
   },
   {
    "q": "An investor posts 10% margin to control a futures position. A 5% adverse move in the underlying produces a loss on equity of about:",
    "opts": [
     "5%",
     "50%",
     "0.5%"
    ],
    "ans": 1,
    "en": "Leverage of 10× turns a 5% underlying move into a 50% equity move — the defining risk of margined derivatives.",
    "vi": "Đòn bẩy 10 lần biến 5% biến động tài sản cơ sở thành 50% trên vốn — rủi ro đặc trưng của phái sinh ký quỹ."
   },
   {
    "q": "An airline hedges jet fuel with crude-oil futures. The remaining risk is best described as:",
    "opts": [
     "Counterparty risk",
     "Basis risk",
     "Systemic risk"
    ],
    "ans": 1,
    "en": "Fuel and crude prices can diverge; the hedge swaps price risk for the (smaller) fuel–crude basis risk.",
    "vi": "Giá nhiên liệu và dầu thô có thể tách đường; phòng hộ đổi rủi ro giá lấy rủi ro basis fuel–crude (nhỏ hơn)."
   },
   {
    "q": "A perfectly hedged futures position can still trigger a cash crisis because:",
    "opts": [
     "The hedge eliminates all gains",
     "Daily variation margin must be paid now while the hedged gain arrives at maturity",
     "Clearinghouses charge penalty rates"
    ],
    "ans": 1,
    "en": "Timing mismatch: mark-to-market losses demand cash today even when the offsetting exposure pays later — a liquidity risk.",
    "vi": "Lệch thời điểm: lỗ mark-to-market đòi tiền hôm nay dù phơi nhiễm đối ứng trả tiền sau — rủi ro thanh khoản."
   }
  ],
  [
   {
    "q": "With spot price S₀ and risk-free rate r, the no-arbitrage forward price for delivery at time T (no carry costs or income) is:",
    "opts": [
     "The market’s expected future spot price",
     "S₀ × (1 + r)ᵀ",
     "S₀ discounted at r"
    ],
    "ans": 1,
    "en": "F₀ = S₀(1 + r)ᵀ comes from cash-and-carry arbitrage — it is a financing relationship, not a forecast of the future spot price.",
    "vi": "F₀ = S₀(1 + r)ᵀ suy ra từ arbitrage mua–nắm giữ; đây là quan hệ chi phí vốn, không phải dự báo giá giao ngay tương lai."
   },
   {
    "q": "At initiation, the value of a properly priced forward contract to both parties is:",
    "opts": [
     "Positive to the long",
     "Zero",
     "Equal to the spot price"
    ],
    "ans": 1,
    "en": "The forward price is set precisely so no money changes hands and the contract starts with zero value to each side.",
    "vi": "Giá forward được chốt sao cho không bên nào phải trả tiền lúc đầu — hợp đồng khởi tạo với giá trị 0 cho cả hai."
   },
   {
    "q": "S = 80, r = 5%, no income, 1 year. The one-year forward trades at 86. An arbitrageur should:",
    "opts": [
     "Buy the forward, short the spot",
     "Sell the forward, borrow and buy the spot",
     "Do nothing — 86 is fair"
    ],
    "ans": 1,
    "en": "Fair F = 84. Market is rich: cash-and-carry (borrow 80, buy spot, sell forward) locks in 86 − 84 = 2.",
    "vi": "F hợp lý = 84. Thị trường đắt: cash-and-carry (vay 80, mua spot, bán forward) khóa lãi 86 − 84 = 2."
   },
   {
    "q": "A commodity's forward price sits BELOW its spot price. This market is in:",
    "opts": [
     "Contango",
     "Backwardation",
     "Full carry"
    ],
    "ans": 1,
    "en": "Backwardation: convenience yield of holding scarce physical inventory outweighs financing and storage.",
    "vi": "Backwardation: convenience yield của việc giữ hàng vật chất khan hiếm vượt chi phí tài trợ và lưu kho."
   }
  ],
  [
   {
    "q": "A plain-vanilla interest rate swap is economically equivalent to:",
    "opts": [
     "A series of forward contracts on the floating rate",
     "A single long futures position",
     "A portfolio of purchased call options"
    ],
    "ans": 0,
    "en": "Each netted settlement replicates a forward on the reference rate — the swap bundles one forward per payment date.",
    "vi": "Mỗi kỳ thanh toán ròng tái tạo một forward trên lãi suất tham chiếu — swap là bó các forward, mỗi kỳ một cái."
   },
   {
    "q": "The fixed rate on a new at-market interest rate swap is set so that:",
    "opts": [
     "The fixed payer has an initial gain",
     "The swap’s value at initiation is zero",
     "It equals the current floating rate"
    ],
    "ans": 1,
    "en": "The par swap rate equates the PV of the two legs off the current curve — value starts at zero, as with forwards.",
    "vi": "Par swap rate cân bằng PV hai chân theo đường cong hiện hành — giá trị khởi điểm bằng 0, giống forward."
   },
   {
    "q": "df1 = 0.96, df2 = 0.90. The 2-year annual par-swap rate is closest to:",
    "opts": [
     "4.3%",
     "5.4%",
     "6.0%"
    ],
    "ans": 1,
    "en": "s = (1 − 0.90)/(0.96 + 0.90) = 0.10/1.86 ≈ 5.4%.",
    "vi": "s = (1 − 0,90)/(0,96 + 0,90) ≈ 5,4%."
   },
   {
    "q": "After initiation, market rates fall sharply. The party that GAINS value is:",
    "opts": [
     "The fixed-rate payer",
     "The fixed-rate receiver",
     "Neither — swaps have no value"
    ],
    "ans": 1,
    "en": "Receiving an above-market fixed rate is now valuable; the pay-fixed side is locked into an expensive rate.",
    "vi": "Nhận mức cố định trên thị trường giờ rất đáng giá; phía trả cố định bị khóa vào mức đắt."
   }
  ],
  [
   {
    "q": "Put–call parity for European options on a non-dividend stock states:",
    "opts": [
     "c + S = p + PV(X)",
     "c + PV(X) = p + S",
     "c − p = PV(X) − S"
    ],
    "ans": 1,
    "en": "c + PV(X) = p + S: a fiduciary call (call + risk-free bond) replicates a protective put (stock + put). Any violation is an arbitrage.",
    "vi": "c + PV(X) = p + S: “fiduciary call” (call + trái phiếu phi rủi ro) tương đương “protective put” (cổ phiếu + put). Lệch đẳng thức là có arbitrage."
   },
   {
    "q": "In the one-period binomial model, the risk-neutral probability π = (1 + r − d)/(u − d) represents:",
    "opts": [
     "The market’s actual probability of an up-move",
     "A pricing weight from no-arbitrage replication, independent of investor risk preferences",
     "The hedge ratio"
    ],
    "ans": 1,
    "en": "π is a synthetic weight that makes the replicating argument work — real-world probabilities and risk appetite never enter the price.",
    "vi": "π là trọng số nhân tạo giúp lập luận sao chép hoạt động — xác suất thực và khẩu vị rủi ro không hề tham gia vào giá."
   },
   {
    "q": "u = 1.30, d = 0.90, r = 6%. The risk-neutral probability of an up move is:",
    "opts": [
     "0.50",
     "0.40",
     "0.60"
    ],
    "ans": 1,
    "en": "π = (1.06 − 0.90)/(1.30 − 0.90) = 0.16/0.40 = 0.40.",
    "vi": "π = (1,06 − 0,90)/(1,30 − 0,90) = 0,40."
   },
   {
    "q": "S = 60, c = 7, X = 60, r = 5%, 1 year. By parity, the put is worth closest to:",
    "opts": [
     "7.00",
     "4.14",
     "9.86"
    ],
    "ans": 1,
    "en": "p = c + X/(1+r) − S = 7 + 57.14 − 60 = 4.14.",
    "vi": "p = c + X/(1+r) − S = 7 + 57,14 − 60 = 4,14."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "A stock trades at $100 and the annual risk-free rate is 5%. The no-arbitrage one-year forward price is:",
    "opts": [
     "$95.24",
     "$105.00",
     "$100.00"
    ],
    "ans": 1,
    "en": "F₀ = 100 × 1.05 = $105.",
    "vi": "F₀ = 100 × 1,05 = 105 USD theo nguyên tắc không arbitrage."
   },
   {
    "q": "The payoff at expiration to a long put with strike X on a stock priced Sᵀ is:",
    "opts": [
     "max(Sᵀ − X, 0)",
     "max(X − Sᵀ, 0)",
     "X − Sᵀ always"
    ],
    "ans": 1,
    "en": "A put pays max(X − Sᵀ, 0): value rises as the stock falls below strike; worthless above it.",
    "vi": "Put đáo hạn trả max(X − Sᵀ, 0): có giá trị khi giá cổ phiếu thấp hơn strike, bằng 0 nếu cao hơn."
   },
   {
    "q": "An interest rate swap can best be viewed as:",
    "opts": [
     "A single option contract",
     "A series of forward contracts on interest rates",
     "A portfolio of equities"
    ],
    "ans": 1,
    "en": "Each swap settlement is economically an FRA — the swap is a package of forward commitments priced so initial value is zero.",
    "vi": "Mỗi kỳ thanh toán của swap tương đương một hợp đồng kỳ hạn lãi suất (FRA) — swap là chuỗi forward, định giá sao cho giá trị ban đầu bằng 0."
   },
   {
    "q": "At expiration, an option’s time value equals:",
    "opts": [
     "Its intrinsic value",
     "Zero — the option is worth only intrinsic value",
     "The premium paid"
    ],
    "ans": 1,
    "en": "Time value decays to zero at expiry; the option finishes worth exactly max(intrinsic, 0).",
    "vi": "Giá trị thời gian hao mòn về 0 khi đáo hạn; option chỉ còn đúng giá trị nội tại."
   },
   {
    "q": "A protective put strategy consists of:",
    "opts": [
     "Long stock + long put, creating a floor on portfolio value",
     "Long stock + short call",
     "Short stock + long call"
    ],
    "ans": 0,
    "en": "Stock plus a long put guarantees a minimum exit price of X (less the premium) — insurance on the position.",
    "vi": "Cổ phiếu + mua put tạo mức sàn giá trị danh mục (strike trừ phí quyền) — như mua bảo hiểm cho vị thế."
   },
   {
    "q": "Derivative pricing models rely fundamentally on:",
    "opts": [
     "Investors’ risk preferences",
     "The law of one price and the absence of arbitrage",
     "Historical average returns"
    ],
    "ans": 1,
    "en": "No-arbitrage/replication logic prices derivatives independent of risk preferences — identical payoffs must have identical prices.",
    "vi": "Định giá phái sinh dựa trên nguyên tắc một giá và không arbitrage: hai dòng tiền giống hệt nhau phải có cùng một giá, bất kể khẩu vị rủi ro."
   },
   {
    "q": "A one-year forward was priced at F₀ = 105. At expiration the underlying trades at 110. The value of the long forward position at expiration is:",
    "opts": [
     "+5",
     "−5",
     "+110"
    ],
    "ans": 0,
    "en": "At expiry, V = S_T − F₀ = 110 − 105 = +5 to the long (the short loses 5).",
    "vi": "Tại đáo hạn, V = S_T − F₀ = 110 − 105 = +5 cho bên mua (bên bán lỗ 5)."
   },
   {
    "q": "S₀ = 100, u = 1.2, d = 0.8, one period, r = 0%. The value of a call with X = 100 is closest to:",
    "opts": [
     "10",
     "20",
     "5"
    ],
    "ans": 0,
    "en": "π = (1+0−0.8)/(1.2−0.8) = 0.5; payoffs 20 (up) and 0 (down); c₀ = 0.5×20/(1+0) = 10.",
    "vi": "π = (1+0−0,8)/(1,2−0,8) = 0,5; payoff 20 (up) và 0 (down); c₀ = 0,5×20 = 10."
   }
  ],
  [
   {
    "q": "European options: call price $6, PV of strike $95, stock price $98. By put–call parity, the put price is:",
    "opts": [
     "$3.00",
     "$9.00",
     "$1.00"
    ],
    "ans": 0,
    "en": "p = c + PV(X) − S = 6 + 95 − 98 = $3.",
    "vi": "p = c + PV(X) − S = 6 + 95 − 98 = 3 USD."
   },
   {
    "q": "Daily marking to market of futures primarily reduces:",
    "opts": [
     "Market risk",
     "Counterparty (default) risk",
     "Liquidity"
    ],
    "ans": 1,
    "en": "Settling gains and losses daily through margin accounts keeps unpaid exposures tiny, so a default costs little.",
    "vi": "Hạch toán lãi lỗ hằng ngày qua tài khoản ký quỹ giữ mức lỗ chưa thanh toán rất nhỏ → rủi ro đối tác gần như triệt tiêu."
   },
   {
    "q": "A covered call (long stock + short call) is best described as:",
    "opts": [
     "Unlimited upside with a floor",
     "Income today in exchange for giving up upside above the strike",
     "A riskless arbitrage"
    ],
    "ans": 1,
    "en": "The premium enhances income, but stock gains above the strike are surrendered to the call buyer; downside remains (cushioned by the premium).",
    "vi": "Covered call: nhận phí quyền ngay nhưng từ bỏ phần tăng giá vượt strike; rủi ro giảm giá vẫn còn, chỉ được đệm bằng khoản phí."
   },
   {
    "q": "An American option differs from a European option in that it:",
    "opts": [
     "Trades only in the US",
     "Can be exercised at any time up to expiration",
     "Always costs less"
    ],
    "ans": 1,
    "en": "American = exercisable any time (worth at least as much as the European equivalent); European = exercisable only at expiration.",
    "vi": "Option kiểu Mỹ được thực hiện bất cứ lúc nào trước đáo hạn (giá trị ≥ kiểu Âu tương đương); kiểu Âu chỉ tại đáo hạn."
   },
   {
    "q": "The maximum loss to the buyer of a call option is:",
    "opts": [
     "Unlimited",
     "The premium paid",
     "The strike price"
    ],
    "ans": 1,
    "en": "A long option can expire worthless at most — loss is capped at the premium. (The short call bears the unlimited risk.)",
    "vi": "Người mua call lỗ tối đa bằng phí quyền đã trả; rủi ro không giới hạn thuộc về người bán call."
   },
   {
    "q": "As a futures contract approaches expiration, its price:",
    "opts": [
     "Diverges from the spot price",
     "Converges to the spot price of the underlying",
     "Becomes constant"
    ],
    "ans": 1,
    "en": "At expiry the futures is the spot transaction, so any gap would be a riskless arbitrage — prices must converge.",
    "vi": "Đến đáo hạn, hợp đồng futures chính là giao dịch giao ngay — chênh lệch nào cũng là arbitrage phi rủi ro nên giá phải hội tụ về giá spot."
   },
   {
    "q": "Buying the underlying stock and buying a protective put creates a payoff profile equivalent to:",
    "opts": [
     "A covered call",
     "A fiduciary call (long call + risk-free bond paying X)",
     "A short forward"
    ],
    "ans": 1,
    "en": "Put–call parity in strategy form: S + p = c + PV(X) — the protective put and the fiduciary call are the same insurance bought two ways.",
    "vi": "Put–call parity ở dạng chiến lược: S + p = c + PV(X) — protective put và fiduciary call là cùng một \"bảo hiểm\" mua theo hai cách."
   },
   {
    "q": "Six months after entering a receive-fixed interest rate swap, market swap rates have fallen substantially. The value of the position to the fixed-rate receiver is most likely:",
    "opts": [
     "Negative",
     "Zero",
     "Positive"
    ],
    "ans": 2,
    "en": "She receives an above-market fixed rate now — receive-fixed gains when rates fall (it behaves like a long bond position, adding duration).",
    "vi": "Cô đang nhận lãi cố định cao hơn thị trường — bên nhận cố định lãi khi lãi suất giảm (hành xử như nắm trái phiếu dài, cộng thêm duration)."
   }
  ],
  {
   "name": "Set D — Mixed exam-style review",
   "qs": [
    {
     "q": "Which is a CONTINGENT claim rather than a forward commitment?",
     "opts": [
      "A futures contract",
      "An interest-rate swap",
      "A put option"
     ],
     "ans": 2,
     "en": "Options pay off only if exercise is favorable — contingent. Forwards, futures, and swaps obligate both sides.",
     "vi": "Quyền chọn chỉ trả tiền khi thực hiện có lợi — contingent. Forward, futures, swap ràng buộc cả hai bên."
    },
    {
     "q": "Compared with forwards, futures reduce counterparty risk primarily through:",
     "opts": [
      "Customized terms",
      "Daily settlement and CCP margining",
      "Higher notional values"
     ],
     "ans": 1,
     "en": "Marking to market realizes losses daily and the CCP guarantees performance with margin buffers.",
     "vi": "Mark-to-market hiện thực hóa lỗ hằng ngày và CCP bảo lãnh bằng các lớp đệm ký quỹ."
    },
    {
     "q": "A trader sells a 55-strike call for 2.40. At expiration S = 59. The trader's profit is:",
     "opts": [
      "−4.00",
      "−1.60",
      "+2.40"
     ],
     "ans": 1,
     "en": "Payoff owed = −(59 − 55) = −4; profit = −4 + 2.40 = −1.60.",
     "vi": "Payoff phải trả = −(59 − 55) = −4; lợi nhuận = −4 + 2,40 = −1,60."
    },
    {
     "q": "Long futures at 500, initial margin 50, maintenance 40. A margin call first occurs when the settle price reaches:",
     "opts": [
      "490",
      "489 or below (balance < 40)",
      "460"
     ],
     "ans": 1,
     "en": "Balance = 50 + (P − 500). It falls BELOW 40 when P < 490 — i.e., at 489 or lower (at exactly 490 the balance equals maintenance).",
     "vi": "Số dư = 50 + (P − 500). Nó xuống DƯỚI 40 khi P < 490 — tức 489 trở xuống (đúng 490 thì số dư bằng maintenance)."
    },
    {
     "q": "A portfolio manager fears a market fall over the next month but must remain invested. The cheapest broad solution is to:",
     "opts": [
      "Sell every holding",
      "Sell index futures against the portfolio",
      "Buy calls on the index"
     ],
     "ans": 1,
     "en": "Shorting futures cuts beta in one liquid trade with no cash-market sales or tax events.",
     "vi": "Bán futures chỉ số cắt beta trong một giao dịch thanh khoản, không phải bán cổ phiếu, không sự kiện thuế."
    },
    {
     "q": "S = 200 with dividends of PV 6 over the year; r = 4%. The 1-year equity forward price is closest to:",
     "opts": [
      "208.0",
      "201.8",
      "194.0"
     ],
     "ans": 1,
     "en": "F = (200 − 6) × 1.04 = 201.76 — benefits reduce the forward price.",
     "vi": "F = (200 − 6) × 1,04 = 201,76 — lợi ích làm giảm giá forward."
    },
    {
     "q": "Six months into a 1-year forward struck at 105, the spot is 101 and rates are 5%. The SHORT's position value is closest to:",
     "opts": [
      "−1.47",
      "+1.47",
      "+4.00"
     ],
     "ans": 1,
     "en": "V_long = 101 − 105/1.05^0.5 = 101 − 102.47 = −1.47 → the short holds +1.47.",
     "vi": "V_long = 101 − 105/1,05^0,5 = −1,47 → bên short nắm +1,47."
    },
    {
     "q": "A firm with a floating-rate loan enters a pay-fixed swap. Its net interest cost is now:",
     "opts": [
      "Floating minus the swap rate",
      "Locked at the swap rate (plus the loan's credit spread)",
      "Zero"
     ],
     "ans": 1,
     "en": "Floating paid on the loan is offset by floating received in the swap; what remains is the fixed swap rate plus the loan spread.",
     "vi": "Lãi thả nổi trả cho khoản vay được bù bằng lãi thả nổi nhận từ swap; phần còn lại là swap rate cố định cộng spread khoản vay."
    },
    {
     "q": "In the binomial model, raising the real-world probability of an up move (all else equal) changes the option value:",
     "opts": [
      "It rises",
      "It falls",
      "Not at all"
     ],
     "ans": 2,
     "en": "Valuation uses risk-neutral π derived from u, d, r — real-world probabilities never enter the formula.",
     "vi": "Định giá dùng π trung hòa rủi ro rút từ u, d, r — xác suất thực không bao giờ vào công thức."
    },
    {
     "q": "Volatility rises sharply. The values of a call and a put on the same stock:",
     "opts": [
      "Call up, put down",
      "Both up",
      "Both down"
     ],
     "ans": 1,
     "en": "Asymmetric payoffs mean more volatility raises both options' values — the single driver that moves calls and puts together upward.",
     "vi": "Payoff bất đối xứng khiến biến động cao nâng giá trị cả hai — động lực duy nhất đẩy call và put cùng đi lên."
    },
    {
     "q": "Early exercise of an American CALL on a non-dividend stock is:",
     "opts": [
      "Optimal when deep in the money",
      "Never optimal — the call is worth more alive",
      "Optimal just before expiration"
     ],
     "ans": 1,
     "en": "Exercising forfeits time value and pays X early; without dividends the American call equals the European in value.",
     "vi": "Thực hiện sớm vứt bỏ giá trị thời gian và trả X sớm; không cổ tức thì call Mỹ có giá trị đúng bằng call châu Âu."
    },
    {
     "q": "Using parity, a synthetic LONG forward position at strike X is constructed by:",
     "opts": [
      "Long call + long put",
      "Long call + short put (same X, T)",
      "Short call + long put"
     ],
     "ans": 1,
     "en": "c − p = S − PV(X): buying the call and writing the put replicates the forward's symmetric payoff at X.",
     "vi": "c − p = S − PV(X): mua call và bán put sao chép payoff đối xứng của forward tại X."
    }
   ]
  }
 ]
};
