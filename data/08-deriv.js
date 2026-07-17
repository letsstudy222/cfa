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
  "en": "Derivatives is compact but dense. The curriculum’s ten learning modules are grouped here into six clusters: instruments and markets (ETD vs OTC, clearing); forward commitments and contingent claims; benefits, risks, and uses; arbitrage, cost of carry, and forward/futures pricing; swaps; and option valuation with put–call parity and the one-period binomial model. Master three ideas — no-arbitrage replication, price-vs-value, and risk-neutral weighting — and every formula falls into place.",
  "vi": "Derivatives ngắn nhưng đặc. Mười learning modules của curriculum được gộp thành sáu cụm: công cụ và thị trường (ETD vs OTC, bù trừ); forward commitments và contingent claims; lợi ích, rủi ro, công dụng; arbitrage, cost of carry và định giá forward/futures; swaps; và định giá quyền chọn với put–call parity cùng mô hình nhị thức một kỳ. Nắm chắc ba ý — sao chép không-arbitrage, giá vs giá trị, và trọng số trung lập rủi ro — thì mọi công thức tự khớp vào chỗ."
 },
 "modules": [
  {
   "title": "Derivative Instruments & Market Features",
   "sections": [
    {
     "h": "What derivatives are — and where they trade",
     "en": "<ul><li><strong>Definition:</strong> a derivative is a contract whose value <em>derives</em> from the performance of an underlying — equities, fixed income and interest rates, currencies, commodities, credit, even other derivatives and indexes. It transfers risk and return between two parties at a defined price over a defined period, usually with little or no cash changing hands at inception.</li><li><strong>Exchange-traded derivatives (ETD)</strong> — futures and listed options: standardized terms, transparent prices, and a <strong>central counterparty (CCP)</strong> that steps between buyer and seller through <em>novation</em>, backed by initial and variation <em>margin</em> and daily settlement — counterparty risk nearly disappears, but so does customization.</li><li><strong>Over-the-counter (OTC)</strong> derivatives — forwards, swaps, exotic options: bilaterally negotiated and fully customizable (size, dates, underlying), historically bearing counterparty risk. Post-crisis reform pushed standardized OTC contracts into <em>central clearing</em> and added reporting/collateral rules, narrowing the gap with ETD.</li><li><strong>Participants:</strong> hedgers (transfer unwanted risk), speculators (accept risk for expected return, adding liquidity), arbitrageurs (enforce the law of one price), and dealers/market makers who intermediate.</li></ul>",
     "vi": "<ul><li><strong>Định nghĩa:</strong> phái sinh là hợp đồng có giá trị <em>bắt nguồn</em> từ diễn biến của tài sản cơ sở — cổ phiếu, trái phiếu và lãi suất, tiền tệ, hàng hóa, tín dụng, thậm chí phái sinh khác và chỉ số. Nó chuyển giao rủi ro và lợi nhuận giữa hai bên theo mức giá và kỳ hạn xác định, thường không cần trao tiền lúc khởi tạo.</li><li><strong>Phái sinh niêm yết (ETD)</strong> — futures và quyền chọn niêm yết: điều khoản chuẩn hóa, giá minh bạch, và <strong>đối tác bù trừ trung tâm (CCP)</strong> chen giữa người mua–bán qua cơ chế <em>novation</em>, được chống lưng bằng ký quỹ ban đầu, ký quỹ biến đổi và thanh toán hằng ngày — rủi ro đối tác gần như biến mất, nhưng khả năng \"may đo\" cũng vậy.</li><li><strong>Phái sinh OTC</strong> — forwards, swaps, quyền chọn ngoại lai: đàm phán song phương, tùy biến hoàn toàn (quy mô, ngày, tài sản cơ sở), truyền thống mang rủi ro đối tác. Cải cách hậu khủng hoảng đẩy các hợp đồng OTC chuẩn hóa vào <em>bù trừ tập trung</em> kèm quy định báo cáo/tài sản bảo đảm, thu hẹp khoảng cách với ETD.</li><li><strong>Người tham gia:</strong> hedger (chuyển rủi ro không mong muốn), nhà đầu cơ (nhận rủi ro đổi lợi nhuận kỳ vọng, tạo thanh khoản), arbitrageur (thực thi luật một giá), và dealer/nhà tạo lập trung gian.</li></ul>"
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
    }
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
  ]
 ]
};
