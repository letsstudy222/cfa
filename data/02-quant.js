/* =====================================================================
   Topic 02 — Quantitative Methods
   ---------------------------------------------------------------------
   CẤU TRÚC DỮ LIỆU / DATA STRUCTURE
   - topic.modules[]   : các learning module; mỗi module có sections[]
                         {h: tiêu đề, en: HTML tiếng Anh, vi: HTML tiếng Việt}
                         và formulas[] tùy chọn: [tên, công thức, ghi chú]
   - topic.vocab[]     : [term, định nghĩa EN, nghĩa VI]
   - topic.quiz[]      : Practice Set A — {q, opts[3], ans(0-2), en, vi}
   - extra.checks[]    : mảng theo TỪNG module — câu "Quick check" sau lý thuyết
   - extra.sets[]      : Practice Set B, C… — Sets H–K là Question Bank 78 câu
                         từ PDF, chia theo nhóm module, mỗi câu prefix [M#]
   Sửa nội dung trực tiếp trong file này; giữ đúng cú pháp JSON.
   ===================================================================== */
window.CFA = window.CFA || { topics: [], extra: {}, mocktests: [] };
window.CFA.topics.push({
 "id": "quant",
 "num": "02",
 "name": "Quantitative Methods",
 "vi": "Phương pháp định lượng",
 "w": [
  6,
  9
 ],
 "blurb": "Time value of money, statistics, probability, distributions, hypothesis testing and simple regression — the toolkit used by every other topic.",
 "intro": {
  "en": "Quantitative Methods spans eleven learning modules, from rates, returns, and the time value of money through statistics, probability, portfolio mathematics, simulation, sampling and inference, hypothesis testing, simple linear regression, and big data techniques. It is the exam's calculation engine. Every module below pairs the theory with diagrams, fully worked numeric examples, and the exact formulas tested; then drill the Quick checks and Practice Sets B–G — pure computation practice covering every formula the topic asks.",
  "vi": "Quantitative Methods gồm mười một learning modules: lãi suất, lợi suất và giá trị thời gian của tiền; thống kê, xác suất, toán danh mục, mô phỏng; chọn mẫu và suy luận; kiểm định giả thuyết; hồi quy tuyến tính đơn; và kỹ thuật big data. Đây là \"cỗ máy tính toán\" của kỳ thi. Mỗi module bên dưới kết hợp lý thuyết với đồ thị minh họa, ví dụ số giải chi tiết và đúng các công thức được hỏi; sau đó luyện Quick checks và Practice Sets B–G — các bộ đề thuần tính toán phủ mọi công thức của topic."
 },
 "modules": [
  {
   "title": "Rates and Returns",
   "sections": [
    {
     "h": "Interest rates and the TVM framework",
     "en": "<p>An interest rate can be viewed as a <strong>required rate of return</strong>, a <strong>discount rate</strong>, or an <strong>opportunity cost</strong>. It decomposes as:</p><p><em>Required rate = real risk-free rate + inflation premium + default risk premium + liquidity premium + maturity premium.</em></p><p>Core mechanics: money grows at compound interest. A single cash flow: FV = PV × (1 + r)<sup>n</sup>. More frequent compounding raises the effective rate: the <strong>effective annual rate (EAR)</strong> converts a stated annual rate compounded m times per year into a true annual growth rate. With continuous compounding, FV = PV × e<sup>rn</sup>.</p><p><strong>Annuities:</strong> an ordinary annuity pays at the <em>end</em> of each period; an annuity due pays at the <em>beginning</em> (worth one extra period of interest: multiply by (1+r)). A <strong>perpetuity</strong> pays forever: PV = PMT / r.</p>",
     "vi": "<p>Lãi suất có thể hiểu là <strong>tỷ suất sinh lời yêu cầu</strong>, <strong>tỷ suất chiết khấu</strong>, hoặc <strong>chi phí cơ hội</strong>. Phân rã: <em>lãi suất yêu cầu = lãi suất phi rủi ro thực + bù đắp lạm phát + bù đắp rủi ro vỡ nợ + bù đắp thanh khoản + bù đắp kỳ hạn</em>.</p><p>Cơ chế lõi: tiền tăng trưởng theo lãi kép. Dòng tiền đơn: FV = PV × (1 + r)<sup>n</sup>. Ghép lãi càng nhiều lần thì lãi suất hiệu dụng càng cao: <strong>EAR</strong> quy đổi lãi suất công bố ghép m lần/năm về tốc độ tăng trưởng thực trong 1 năm. Ghép lãi liên tục: FV = PV × e<sup>rn</sup>.</p><p><strong>Niên kim (annuity):</strong> ordinary annuity trả cuối kỳ; annuity due trả đầu kỳ (giá trị cao hơn 1 kỳ lãi: nhân với (1+r)). <strong>Perpetuity</strong> trả vĩnh viễn: PV = PMT / r.</p>"
    },
    {
     "h": "Rates of return used in the curriculum",
     "en": "<ul><li><strong>Holding period return (HPR):</strong> total return over the period, including income: (P<sub>1</sub> − P<sub>0</sub> + D) / P<sub>0</sub>.</li><li><strong>Arithmetic mean return:</strong> simple average — best for forecasting <em>next period’s</em> expected return.</li><li><strong>Geometric mean return:</strong> compound growth rate — best for measuring <em>past multi-period performance</em>. Geometric ≤ arithmetic; the gap widens with volatility.</li><li><strong>Money-weighted return (MWR / IRR):</strong> accounts for the timing and size of cash flows — measures the <em>investor’s</em> experience.</li><li><strong>Time-weighted return (TWR):</strong> removes the effect of cash flows — the standard for judging the <em>manager</em>.</li><li>Also know: gross vs net return, pre-tax vs after-tax, real vs nominal (1 + nominal = (1 + real)(1 + inflation)), and leveraged return.</li></ul><p><strong>Computing TWR step by step:</strong> (1) break the evaluation period into sub-periods at every external cash flow; (2) compute the HPR for each sub-period using the value <em>just before</em> the flow; (3) <strong>chain-link</strong>: TWR = (1+R₁)(1+R₂)…(1+Rₙ) − 1, annualizing with the geometric mean if over multiple years. The MWR is simply the IRR of the account: the rate that equates PV(contributions) with PV(withdrawals + ending value). MWR &gt; TWR when the investor happens to add money before strong sub-periods; the difference is <em>timing luck</em>, which is why manager evaluation uses TWR.</p><p><strong>The return flavors defined:</strong> <em>gross return</em> — before deducting management and administrative fees (measures the manager’s raw skill); <em>net return</em> — after all fees: what the investor actually keeps; <em>pre-tax vs after-tax</em> — returns are quoted pre-tax by default, and taxes on income vs capital gains differ; <em>real return</em> — nominal stripped of inflation: (1+real) = (1+nominal)/(1+inflation); <strong>leveraged return</strong> — the return on the investor’s own cash when part of the position is borrowed: R_lev = [R_asset × Assets − borrowing cost × Debt] / Equity. Leverage scales both directions: a 10% asset gain on 2:1 leverage at 3% borrowing gives 10%×2 − 3%×1 = 17% on equity, but a 10% loss gives −23%.</p>",
     "vi": "<ul><li><strong>HPR:</strong> tổng lợi suất trong kỳ, gồm cả thu nhập: (P<sub>1</sub> − P<sub>0</sub> + D) / P<sub>0</sub>.</li><li><strong>Trung bình cộng:</strong> phù hợp để dự báo lợi suất kỳ vọng <em>kỳ tới</em>.</li><li><strong>Trung bình nhân:</strong> tốc độ tăng trưởng kép — phù hợp đo <em>hiệu quả nhiều kỳ trong quá khứ</em>. Geometric ≤ arithmetic; chênh lệch càng lớn khi biến động càng cao.</li><li><strong>MWR (IRR):</strong> tính đến thời điểm và quy mô dòng tiền — đo trải nghiệm của <em>nhà đầu tư</em>.</li><li><strong>TWR:</strong> loại bỏ ảnh hưởng của dòng tiền — chuẩn mực đánh giá <em>nhà quản lý quỹ</em>.</li><li>Cần biết thêm: gross vs net, trước thuế vs sau thuế, thực vs danh nghĩa ((1 + danh nghĩa) = (1 + thực)(1 + lạm phát)), lợi suất có đòn bẩy.</li></ul><p><strong>Tính TWR từng bước:</strong> (1) cắt kỳ đánh giá thành các kỳ con tại mỗi dòng tiền ra/vào; (2) tính HPR mỗi kỳ con theo giá trị <em>ngay trước</em> dòng tiền; (3) <strong>nối chuỗi</strong>: TWR = (1+R₁)(1+R₂)…(1+Rₙ) − 1, nếu nhiều năm thì năm hóa bằng trung bình nhân. MWR đơn giản là IRR của tài khoản: mức lãi suất cân bằng PV(tiền nạp) với PV(tiền rút + giá trị cuối). MWR &gt; TWR khi nhà đầu tư tình cờ nạp tiền trước các kỳ tăng mạnh; phần chênh là <em>may mắn về thời điểm</em>, vì vậy đánh giá manager phải dùng TWR.</p><p><strong>Định nghĩa các loại lợi suất:</strong> <em>gross return</em> — trước khi trừ phí quản lý, hành chính (đo kỹ năng thô của manager); <em>net return</em> — sau toàn bộ phí: thứ nhà đầu tư thực nhận; <em>trước thuế vs sau thuế</em> — mặc định lợi suất công bố là trước thuế, và thuế trên thu nhập khác thuế trên lãi vốn; <em>lợi suất thực</em> — lợi suất danh nghĩa bóc lạm phát: (1+thực) = (1+danh nghĩa)/(1+lạm phát); <strong>lợi suất có đòn bẩy</strong> — lợi suất trên vốn tự có khi một phần vị thế là tiền vay: R_lev = [R_tài sản × Tổng tài sản − chi phí vay × Nợ] / Vốn tự có. Đòn bẩy khuếch đại cả hai chiều: tài sản tăng 10% với đòn bẩy 2:1, lãi vay 3% → 10%×2 − 3%×1 = 17% trên vốn; nhưng giảm 10% → −23%.</p>"
    },
    {
     "h": "Seeing compounding — and TWR vs MWR worked side by side",
     "en": "<p>Two pictures organize most of this module. First, <strong>compounding</strong>: simple interest grows in a straight line, compound interest bends upward because each period's interest itself earns interest. The gap is trivial in year 2 and enormous in year 20 — which is why the exam loves long-horizon FV questions.</p><svg viewBox=\"0 0 720 320\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Simple vs compound interest growth\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#1B2438\">Growth of $100 at 8% — simple vs compound interest</text>\n<line x1=\"70\" y1=\"270\" x2=\"680\" y2=\"270\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"270\" x2=\"70\" y2=\"45\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"375\" y=\"302\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Years</text>\n<text x=\"30\" y=\"160\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#5B6577\" transform=\"rotate(-90 30 160)\">Value ($)</text>\n<g font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#5B6577\">\n<text x=\"70\" y=\"286\" text-anchor=\"middle\">0</text><text x=\"222\" y=\"286\" text-anchor=\"middle\">5</text><text x=\"375\" y=\"286\" text-anchor=\"middle\">10</text><text x=\"527\" y=\"286\" text-anchor=\"middle\">15</text><text x=\"680\" y=\"286\" text-anchor=\"middle\">20</text>\n<text x=\"62\" y=\"274\" text-anchor=\"end\">100</text><text x=\"62\" y=\"196\" text-anchor=\"end\">200</text><text x=\"62\" y=\"118\" text-anchor=\"end\">300</text><text x=\"62\" y=\"52\" text-anchor=\"end\">400+</text>\n</g>\n<line x1=\"70\" y1=\"196\" x2=\"680\" y2=\"196\" stroke=\"#E5E9F2\" stroke-width=\"1\"/>\n<line x1=\"70\" y1=\"118\" x2=\"680\" y2=\"118\" stroke=\"#E5E9F2\" stroke-width=\"1\"/>\n<!-- simple interest: linear 100 -> 260 over 20y : y=270-(v-100)*0.78 -->\n<polyline points=\"70,270 680,145\" fill=\"none\" stroke=\"#B45309\" stroke-width=\"2.5\" stroke-dasharray=\"7 5\"/>\n<!-- annual compounding: v=100*1.08^t -->\n<path d=\"M70,270 L131,258 L192,244 L253,228 L314,208 L375,185 L436,157 L497,125 L558,87 L619,42 L650,17\" fill=\"none\" stroke=\"#5457E0\" stroke-width=\"3\"/>\n<text x=\"560\" y=\"150\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" font-weight=\"600\" fill=\"#B45309\">Simple: 100 + 8·t</text>\n<text x=\"480\" y=\"70\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" font-weight=\"600\" fill=\"#5457E0\">Compound: 100 × 1.08ᵗ</text>\n<text x=\"200\" y=\"90\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">Gap = interest-on-interest.</text>\n<text x=\"200\" y=\"106\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">Small early, huge later — the curve bends up.</text>\n</svg><p><strong>Compounding frequency:</strong> a stated 8% compounded quarterly is really (1 + 0.08/4)⁴ − 1 = <strong>8.243%</strong> per year (EAR); monthly gives 8.300%; continuous gives e⁰·⁰⁸ − 1 = 8.329%. More frequent compounding ⇒ higher EAR, but the effect plateaus quickly toward the continuous limit.</p><p>Second, the <strong>TWR vs MWR</strong> distinction — the single most-tested idea in this module. Start with $100; it grows to $120 in period 1 (+20%). You then deposit $100, so $220 is invested, and it falls to $198 in period 2 (−10%).</p><svg viewBox=\"0 0 720 250\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"TWR sub-periods timeline\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#1B2438\">TWR: cut the period at every external cash flow, then chain-link</text>\n<line x1=\"60\" y1=\"130\" x2=\"660\" y2=\"130\" stroke=\"#1B2438\" stroke-width=\"2\"/>\n<g stroke=\"#1B2438\" stroke-width=\"2\"><line x1=\"60\" y1=\"120\" x2=\"60\" y2=\"140\"/><line x1=\"360\" y1=\"120\" x2=\"360\" y2=\"140\"/><line x1=\"660\" y1=\"120\" x2=\"660\" y2=\"140\"/></g>\n<g font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#1B2438\" text-anchor=\"middle\">\n<text x=\"60\" y=\"160\">t = 0</text><text x=\"360\" y=\"160\">t = 1 (deposit)</text><text x=\"660\" y=\"160\">t = 2</text>\n<text x=\"60\" y=\"112\" font-weight=\"600\">$100</text><text x=\"360\" y=\"112\" font-weight=\"600\">$120 → +$100</text><text x=\"660\" y=\"112\" font-weight=\"600\">$198</text>\n</g>\n<rect x=\"90\" y=\"180\" width=\"240\" height=\"34\" rx=\"9\" fill=\"#E6F6F0\" stroke=\"#BEE5D8\"/>\n<text x=\"210\" y=\"202\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"12.5\" fill=\"#0F9573\">R₁ = 120/100 − 1 = +20%</text>\n<rect x=\"390\" y=\"180\" width=\"240\" height=\"34\" rx=\"9\" fill=\"#FDECEC\" stroke=\"#F5C8C8\"/>\n<text x=\"510\" y=\"202\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"12.5\" fill=\"#DC4848\">R₂ = 198/220 − 1 = −10%</text>\n<path d=\"M360,132 v 40\" stroke=\"#8B5CF6\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/>\n<text x=\"360\" y=\"238\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" font-weight=\"600\" fill=\"#4338CA\">TWR = (1.20)(0.90) − 1 = +8.0% — the deposit's timing does not matter</text>\n</svg><ul><li><strong>TWR</strong> chains the sub-period returns: (1.20)(0.90) − 1 = <strong>+8.0%</strong> over two periods (≈ +3.92%/yr geometric). It ignores the deposit — this is the <em>manager's</em> return.</li><li><strong>MWR</strong> is the IRR of the account's cash flows: −100 at t=0, −100 at t=1, +198 at t=2 → solves to ≈ <strong>−0.7%</strong> per period. It is dragged down because the investor added money right before the bad period — the <em>investor's</em> experience, timing included.</li></ul><p><strong>Exam rule:</strong> MWR &lt; TWR when money is added before weak periods (or withdrawn before strong ones); MWR &gt; TWR in the reverse case. Judge the <em>manager</em> with TWR; measure the <em>investor's</em> outcome with MWR.</p>",
     "vi": "<p>Hai hình vẽ tóm gọn phần lớn module này. Thứ nhất, <strong>lãi kép</strong>: lãi đơn tăng theo đường thẳng, lãi kép cong lên vì lãi của mỗi kỳ lại tự sinh lãi. Chênh lệch không đáng kể ở năm 2 nhưng khổng lồ ở năm 20 — vì vậy đề thi rất thích câu hỏi FV kỳ hạn dài.</p><p><strong>Tần suất ghép lãi:</strong> lãi suất công bố 8% ghép quý thực chất là (1 + 0,08/4)⁴ − 1 = <strong>8,243%</strong>/năm (EAR); ghép tháng cho 8,300%; ghép liên tục cho e⁰·⁰⁸ − 1 = 8,329%. Ghép càng dày ⇒ EAR càng cao, nhưng hiệu ứng nhanh chóng chạm trần ở giới hạn liên tục.</p><p>Thứ hai, phân biệt <strong>TWR vs MWR</strong> — ý được hỏi nhiều nhất module. Bắt đầu $100; kỳ 1 tăng lên $120 (+20%). Bạn nạp thêm $100, vậy $220 được đầu tư, và kỳ 2 giảm còn $198 (−10%).</p><ul><li><strong>TWR</strong> nối chuỗi lợi suất kỳ con: (1,20)(0,90) − 1 = <strong>+8,0%</strong> cho hai kỳ. Nó bỏ qua khoản nạp — đây là lợi suất của <em>nhà quản lý</em>.</li><li><strong>MWR</strong> là IRR của dòng tiền tài khoản: −100 tại t=0, −100 tại t=1, +198 tại t=2 → ≈ <strong>−0,7%</strong>/kỳ. Bị kéo xuống vì nhà đầu tư nạp tiền ngay trước kỳ xấu — trải nghiệm của <em>nhà đầu tư</em>, gồm cả yếu tố thời điểm.</li></ul><p><strong>Quy tắc thi:</strong> MWR &lt; TWR khi nạp tiền trước kỳ yếu (hoặc rút trước kỳ mạnh); ngược lại thì MWR &gt; TWR. Đánh giá <em>manager</em> bằng TWR; đo kết quả của <em>nhà đầu tư</em> bằng MWR.</p>"
    }
   ],
   "formulas": [
    [
     "HPR",
     "HPR = (P1 − P0 + D) / P0",
     ""
    ],
    [
     "Geometric mean",
     "Rg = [(1+R1)(1+R2)…(1+Rn)]^(1/n) − 1",
     ""
    ],
    [
     "Harmonic mean",
     "HM = n / Σ(1/xi)",
     "Average cost per share under cost averaging"
    ],
    [
     "EAR",
     "EAR = (1 + r/m)^m − 1",
     "m = compounding periods per year; continuous: EAR = e^r − 1"
    ],
    [
     "Continuous return",
     "r = ln(1 + HPR)",
     "Additive across periods; FV = PV·e^(rn)"
    ],
    [
     "Real vs nominal",
     "(1 + nominal) = (1 + real) × (1 + inflation)",
     ""
    ],
    [
     "TWR (chain-linked)",
     "TWR = (1+R₁)(1+R₂)…(1+Rₙ) − 1",
     "Sub-periods cut at each external cash flow"
    ],
    [
     "Leveraged return",
     "R_lev = (R_a×Assets − r_b×Debt) / Equity",
     "Magnifies gains and losses symmetrically"
    ],
    [
     "MWR (money-weighted)",
     "0 = Σ CFt / (1 + MWR)^t",
     "The IRR of the account's cash flows; measures the investor"
    ],
    [
     "Annualized return",
     "R_ann = (1 + R_period)^(periods per year) − 1",
     "e.g. weekly 0.2%: 1.002^52 − 1 ≈ 10.95%"
    ]
   ]
  },
  {
   "title": "Time Value of Money in Finance",
   "sections": [
    {
     "h": "TVM in finance — implied returns and implied growth",
     "en": "<p>The same PV/FV machinery prices every asset class; Level 1 expects you to <em>solve the equation in any direction</em>:</p><ul><li><strong>Zero-coupon / discount instruments:</strong> PV = FV / (1 + r)<sup>n</sup>. Given price and face value, the implied return is r = (FV/PV)<sup>1/n</sup> − 1.</li><li><strong>Coupon bonds:</strong> price = PV of coupons (an annuity) + PV of face value. The discount rate that equates price to those cash flows is the yield-to-maturity — an IRR.</li><li><strong>Preferred stock (perpetuity):</strong> P = D / r, so the implied return is r = D / P.</li><li><strong>Common equity (constant growth):</strong> P₀ = D₁ / (r − g). Rearranged: implied return r = D₁/P₀ + g (dividend yield plus growth), and implied growth g = r − D₁/P₀. These rearrangements are heavily tested.</li><li><strong>Implied growth from earnings:</strong> the sustainable growth rate g = retention ratio × ROE links this module to Equity and Corporate Issuers.</li></ul>",
     "vi": "<p>Cùng một bộ máy PV/FV định giá mọi loại tài sản; Level 1 yêu cầu bạn <em>giải phương trình theo mọi chiều</em>:</p><ul><li><strong>Công cụ chiết khấu / zero-coupon:</strong> PV = FV / (1 + r)<sup>n</sup>. Biết giá và mệnh giá, lợi suất hàm ý r = (FV/PV)<sup>1/n</sup> − 1.</li><li><strong>Trái phiếu coupon:</strong> giá = PV các coupon (một annuity) + PV mệnh giá. Suất chiết khấu cân bằng giá với dòng tiền chính là YTM — một dạng IRR.</li><li><strong>Cổ phiếu ưu đãi (perpetuity):</strong> P = D / r → lợi suất hàm ý r = D / P.</li><li><strong>Cổ phiếu thường (tăng trưởng đều):</strong> P₀ = D₁ / (r − g). Biến đổi: lợi suất hàm ý r = D₁/P₀ + g (tỷ suất cổ tức + tăng trưởng), tăng trưởng hàm ý g = r − D₁/P₀. Các biến đổi này thi rất nhiều.</li><li><strong>Tăng trưởng hàm ý từ lợi nhuận:</strong> g bền vững = tỷ lệ giữ lại × ROE — cầu nối sang Equity và Corporate Issuers.</li></ul>"
    },
    {
     "h": "Annuities, amortization & solving for the unknown",
     "en": "<ul><li><strong>Annuity flavors:</strong> an <em>ordinary annuity</em> pays at period-end; an <strong>annuity due</strong> pays at period-start, so each cash flow earns one extra period: <em>value(due) = value(ordinary) × (1 + r)</em> — for both PV and FV. On the calculator this is the BGN/END mode trap. A <em>deferred annuity</em> starts later: discount the annuity value back the extra periods.</li><li><strong>Loan amortization</strong> is an annuity solved for the payment: PMT such that PV(payments) = principal. Each payment splits into interest (rate × remaining balance) and principal repayment; early payments are <em>mostly interest</em>, late payments mostly principal, and the split shifts continuously — the classic mortgage question. The outstanding balance at any date equals the PV of the <em>remaining</em> payments.</li><li><strong>Solving for any missing piece:</strong> the TVM equation links PV, FV, PMT, r, and N — given any four, solve the fifth: implied growth of savings goals (solve r), time to reach a target (solve N — the Rule of 72 approximates doubling time as 72/r%), required contributions (solve PMT). <em>Cash flow additivity</em> underwrites it all: values at the same date can be added, so any stream can be decomposed into annuities and lump sums — the same principle that powers no-arbitrage pricing, forward rates, and currency parity relationships.</li></ul>",
     "vi": "<ul><li><strong>Các biến thể annuity:</strong> <em>annuity thường</em> trả cuối kỳ; <strong>annuity due</strong> trả đầu kỳ nên mỗi dòng tiền hưởng thêm một kỳ lãi: <em>giá trị(due) = giá trị(thường) × (1 + r)</em> — đúng cho cả PV lẫn FV. Trên máy tính đây là bẫy chế độ BGN/END. <em>Annuity trả chậm</em> bắt đầu muộn hơn: chiết khấu giá trị annuity về thêm số kỳ chờ.</li><li><strong>Trả góp khoản vay</strong> là bài annuity giải tìm khoản trả: PMT sao cho PV(các khoản trả) = gốc vay. Mỗi khoản trả tách thành lãi (lãi suất × dư nợ còn lại) và trả gốc; các kỳ đầu <em>chủ yếu là lãi</em>, các kỳ cuối chủ yếu là gốc, tỷ lệ dịch chuyển liên tục — dạng câu hỏi mortgage kinh điển. Dư nợ tại bất kỳ thời điểm nào bằng PV của các khoản trả <em>còn lại</em>.</li><li><strong>Giải mọi ẩn số:</strong> phương trình TVM nối PV, FV, PMT, r, N — biết bốn thì giải được cái thứ năm: tăng trưởng hàm ý của mục tiêu tiết kiệm (giải r), thời gian đạt mục tiêu (giải N — Quy tắc 72 xấp xỉ thời gian gấp đôi bằng 72/r%), khoản đóng góp cần thiết (giải PMT). <em>Tính cộng được của dòng tiền</em> là nền của tất cả: các giá trị cùng thời điểm cộng được với nhau, nên mọi dòng tiền đều tách được thành annuity và khoản đơn — cùng nguyên lý đứng sau định giá không-arbitrage, lãi suất forward và các quan hệ ngang giá tiền tệ.</li></ul>"
    },
    {
     "h": "Timelines, annuities due, and a worked amortization schedule",
     "en": "<p><strong>Draw the timeline first.</strong> Nearly every TVM error on the exam is a timeline error: a payment placed at the wrong end of a period, or a deferred stream discounted the wrong number of periods.</p><svg viewBox=\"0 0 720 260\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Annuity timelines\">\n<text x=\"360\" y=\"24\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#1B2438\">Ordinary annuity vs annuity due — where the payments sit</text>\n<g font-family=\"Inter,sans-serif\" font-size=\"12\">\n<text x=\"20\" y=\"76\" fill=\"#5457E0\" font-weight=\"700\">Ordinary</text>\n<line x1=\"110\" y1=\"90\" x2=\"680\" y2=\"90\" stroke=\"#1B2438\" stroke-width=\"1.5\"/>\n<g stroke=\"#1B2438\" stroke-width=\"1.5\"><line x1=\"110\" y1=\"82\" x2=\"110\" y2=\"98\"/><line x1=\"252\" y1=\"82\" x2=\"252\" y2=\"98\"/><line x1=\"394\" y1=\"82\" x2=\"394\" y2=\"98\"/><line x1=\"536\" y1=\"82\" x2=\"536\" y2=\"98\"/><line x1=\"678\" y1=\"82\" x2=\"678\" y2=\"98\"/></g>\n<g fill=\"#5B6577\" text-anchor=\"middle\"><text x=\"110\" y=\"114\">0</text><text x=\"252\" y=\"114\">1</text><text x=\"394\" y=\"114\">2</text><text x=\"536\" y=\"114\">3</text><text x=\"678\" y=\"114\">4</text></g>\n<g fill=\"#5457E0\" font-weight=\"700\" text-anchor=\"middle\"><text x=\"252\" y=\"70\">PMT</text><text x=\"394\" y=\"70\">PMT</text><text x=\"536\" y=\"70\">PMT</text><text x=\"678\" y=\"70\">PMT</text></g>\n<text x=\"20\" y=\"176\" fill=\"#8B5CF6\" font-weight=\"700\">Due</text>\n<line x1=\"110\" y1=\"190\" x2=\"680\" y2=\"190\" stroke=\"#1B2438\" stroke-width=\"1.5\"/>\n<g stroke=\"#1B2438\" stroke-width=\"1.5\"><line x1=\"110\" y1=\"182\" x2=\"110\" y2=\"198\"/><line x1=\"252\" y1=\"182\" x2=\"252\" y2=\"198\"/><line x1=\"394\" y1=\"182\" x2=\"394\" y2=\"198\"/><line x1=\"536\" y1=\"182\" x2=\"536\" y2=\"198\"/><line x1=\"678\" y1=\"182\" x2=\"678\" y2=\"198\"/></g>\n<g fill=\"#5B6577\" text-anchor=\"middle\"><text x=\"110\" y=\"214\">0</text><text x=\"252\" y=\"214\">1</text><text x=\"394\" y=\"214\">2</text><text x=\"536\" y=\"214\">3</text><text x=\"678\" y=\"214\">4</text></g>\n<g fill=\"#8B5CF6\" font-weight=\"700\" text-anchor=\"middle\"><text x=\"110\" y=\"170\">PMT</text><text x=\"252\" y=\"170\">PMT</text><text x=\"394\" y=\"170\">PMT</text><text x=\"536\" y=\"170\">PMT</text></g>\n<text x=\"360\" y=\"244\" text-anchor=\"middle\" fill=\"#4338CA\" font-weight=\"600\" font-size=\"12.5\">Each cash flow shifts one period earlier ⇒ Value(due) = Value(ordinary) × (1 + r)</text>\n</g>\n</svg><p><strong>Worked loan example:</strong> borrow $100,000 for 5 years at 6% with annual payments. Solve PMT: 100,000 = PMT × [1 − 1.06⁻⁵]/0.06 → PMT = <strong>$23,739.64</strong>. The first year's interest is 6% × 100,000 = $6,000, so principal repaid is 23,739.64 − 6,000 = $17,739.64 and the new balance is $82,260.36. Repeat and the interest share falls every year:</p><table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Year</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Opening balance</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Payment</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Interest (6%)</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Principal</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Closing balance</th></tr><tr><td style=\"padding:6px;border:1px solid #E5E9F2\">1</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">100,000.00</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">23,739.64</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">6,000.00</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">17,739.64</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">82,260.36</td></tr><tr><td style=\"padding:6px;border:1px solid #E5E9F2\">2</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">82,260.36</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">23,739.64</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">4,935.62</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">18,804.02</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">63,456.34</td></tr><tr><td style=\"padding:6px;border:1px solid #E5E9F2\">3</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">63,456.34</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">23,739.64</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">3,807.38</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">19,932.26</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">43,524.08</td></tr><tr><td style=\"padding:6px;border:1px solid #E5E9F2\">4</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">43,524.08</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">23,739.64</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">2,611.44</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">21,128.20</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">22,395.88</td></tr><tr><td style=\"padding:6px;border:1px solid #E5E9F2\">5</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">22,395.88</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">23,739.64</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">1,343.75</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">22,395.89</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:right\">≈ 0</td></tr></table><svg viewBox=\"0 0 720 300\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Amortization interest vs principal\">\n<text x=\"360\" y=\"24\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#1B2438\">Fixed payment, shifting split: interest shrinks, principal grows</text>\n<g font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#5B6577\">\n<!-- 30y mortgage schematic: 6 bars, payment height constant 180 -->\n</g>\n<g>\n<!-- bar: x, interest fraction from ~0.83 to ~0.08 -->\n<g transform=\"translate(90,60)\">\n<rect x=\"0\" y=\"0\" width=\"60\" height=\"150\" fill=\"#F3E3C4\"/><rect x=\"0\" y=\"0\" width=\"60\" height=\"125\" fill=\"#B45309\" opacity=\"0.85\"/>\n<rect x=\"100\" y=\"0\" width=\"60\" height=\"150\" fill=\"#F3E3C4\"/><rect x=\"100\" y=\"0\" width=\"60\" height=\"106\" fill=\"#B45309\" opacity=\"0.85\"/>\n<rect x=\"200\" y=\"0\" width=\"60\" height=\"150\" fill=\"#F3E3C4\"/><rect x=\"200\" y=\"0\" width=\"60\" height=\"84\" fill=\"#B45309\" opacity=\"0.85\"/>\n<rect x=\"300\" y=\"0\" width=\"60\" height=\"150\" fill=\"#F3E3C4\"/><rect x=\"300\" y=\"0\" width=\"60\" height=\"60\" fill=\"#B45309\" opacity=\"0.85\"/>\n<rect x=\"400\" y=\"0\" width=\"60\" height=\"150\" fill=\"#F3E3C4\"/><rect x=\"400\" y=\"0\" width=\"60\" height=\"34\" fill=\"#B45309\" opacity=\"0.85\"/>\n<rect x=\"500\" y=\"0\" width=\"60\" height=\"150\" fill=\"#F3E3C4\"/><rect x=\"500\" y=\"0\" width=\"60\" height=\"12\" fill=\"#B45309\" opacity=\"0.85\"/>\n</g>\n</g>\n<g font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\" text-anchor=\"middle\">\n<text x=\"120\" y=\"228\">yr 1</text><text x=\"220\" y=\"228\">yr 6</text><text x=\"320\" y=\"228\">yr 12</text><text x=\"420\" y=\"228\">yr 18</text><text x=\"520\" y=\"228\">yr 24</text><text x=\"620\" y=\"228\">yr 30</text>\n</g>\n<rect x=\"180\" y=\"252\" width=\"14\" height=\"14\" fill=\"#B45309\" opacity=\"0.85\"/><text x=\"202\" y=\"264\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" fill=\"#1B2438\">Interest = rate × remaining balance</text>\n<rect x=\"430\" y=\"252\" width=\"14\" height=\"14\" fill=\"#F3E3C4\"/><text x=\"452\" y=\"264\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" fill=\"#1B2438\">Principal repayment</text>\n</svg><p><strong>Two shortcuts the exam pays for:</strong> (1) the balance at any date = PV of the <em>remaining</em> payments at the loan rate — no need to build the table; (2) a <em>retirement problem</em> is two annuities glued at the retirement date: FV of the savings annuity must equal PV of the withdrawal annuity, both valued at that same date.</p>",
     "vi": "<p><strong>Vẽ timeline trước tiên.</strong> Hầu hết lỗi TVM trong phòng thi là lỗi timeline: đặt khoản trả nhầm đầu/cuối kỳ, hoặc chiết khấu dòng tiền trả chậm sai số kỳ.</p><p><strong>Ví dụ khoản vay:</strong> vay $100.000 kỳ hạn 5 năm, lãi 6%, trả đều hằng năm. Giải PMT: 100.000 = PMT × [1 − 1,06⁻⁵]/0,06 → PMT = <strong>$23.739,64</strong>. Lãi năm 1 = 6% × 100.000 = $6.000, nên gốc trả được = 23.739,64 − 6.000 = $17.739,64, dư nợ mới $82.260,36. Lặp lại và phần lãi giảm dần mỗi năm (xem bảng ở phần tiếng Anh).</p><p><strong>Hai lối tắt ăn điểm:</strong> (1) dư nợ tại bất kỳ thời điểm nào = PV của các khoản trả <em>còn lại</em> theo lãi suất vay — không cần lập bảng; (2) bài toán <em>hưu trí</em> là hai annuity dán với nhau tại mốc nghỉ hưu: FV của annuity tiết kiệm phải bằng PV của annuity rút tiền, cả hai quy về cùng thời điểm đó.</p>"
    }
   ],
   "formulas": [
    [
     "Future value",
     "FV = PV × (1 + r)^n",
     ""
    ],
    [
     "Perpetuity",
     "PV = PMT / r",
     ""
    ],
    [
     "Ordinary annuity PV",
     "PV = PMT × [1 − (1+r)^−n] / r",
     "Annuity due: multiply by (1 + r)"
    ],
    [
     "Implied return (Gordon)",
     "r = D1/P0 + g",
     "Implied growth: g = r − D1/P0"
    ],
    [
     "Annuity due",
     "PV(due) = PV(ordinary) × (1+r)",
     "Same adjustment for FV; BGN mode on calculator"
    ],
    [
     "Rule of 72",
     "Doubling time ≈ 72 / r(%)",
     "Quick mental check for compound growth"
    ],
    [
     "Ordinary annuity FV",
     "FV = PMT × [(1+r)^n − 1] / r",
     "Annuity due: multiply by (1 + r)"
    ],
    [
     "Loan balance shortcut",
     "Balance_t = PV of remaining payments",
     "Discount at the loan rate — no schedule needed"
    ]
   ]
  },
  {
   "title": "Statistical Measures of Asset Returns",
   "sections": [
    {
     "h": "Central tendency, dispersion, and shape",
     "en": "<ul><li><strong>Mean / median / mode:</strong> the median is robust to outliers; the mode is the most frequent value. Trimmed and winsorized means reduce outlier impact.</li><li><strong>Dispersion:</strong> range, mean absolute deviation, <strong>variance</strong> (average squared deviation; sample variance divides by n − 1) and <strong>standard deviation</strong>. Downside risk: <strong>target semideviation</strong> considers only deviations below a target.</li><li><strong>Coefficient of variation:</strong> CV = s / mean — risk per unit of return; enables comparison across assets with different scales.</li><li><strong>Skewness:</strong> positive (right) skew → long right tail, mean &gt; median &gt; mode. Negative (left) skew → long left tail, mean &lt; median &lt; mode; investors dislike negative skew (frequent small gains, occasional large losses).</li><li><strong>Kurtosis:</strong> leptokurtic (kurtosis &gt; 3, excess &gt; 0) means fatter tails → more extreme outcomes than the normal distribution predicts.</li><li><strong>Correlation:</strong> measures linear association, from −1 to +1. Correlation ≠ causation; beware spurious correlation and outliers.</li></ul>",
     "vi": "<ul><li><strong>Mean / median / mode:</strong> median ít bị ảnh hưởng bởi giá trị ngoại lai; mode là giá trị xuất hiện nhiều nhất. Trimmed/winsorized mean giảm tác động outlier.</li><li><strong>Độ phân tán:</strong> khoảng biến thiên, độ lệch tuyệt đối trung bình, <strong>phương sai</strong> (phương sai mẫu chia n − 1) và <strong>độ lệch chuẩn</strong>. Rủi ro phía dưới: <strong>target semideviation</strong> chỉ tính các sai lệch dưới mức mục tiêu.</li><li><strong>Hệ số biến thiên:</strong> CV = s / mean — rủi ro trên mỗi đơn vị lợi suất, dùng so sánh tài sản khác quy mô.</li><li><strong>Độ xiên (skewness):</strong> xiên phải → đuôi phải dài, mean &gt; median &gt; mode. Xiên trái → đuôi trái dài, mean &lt; median &lt; mode; nhà đầu tư không thích xiên trái (lãi nhỏ thường xuyên, thua lỗ lớn thi thoảng).</li><li><strong>Độ nhọn (kurtosis):</strong> leptokurtic (kurtosis &gt; 3) nghĩa là đuôi dày → xác suất kết cục cực đoan cao hơn phân phối chuẩn.</li><li><strong>Tương quan:</strong> đo quan hệ tuyến tính, từ −1 đến +1. Tương quan ≠ nhân quả; cẩn thận tương quan giả và outlier.</li></ul>"
    },
    {
     "h": "Quantiles — and which mean to use when",
     "en": "<p><strong>Quantiles</strong> divide sorted data into equal-count pieces: quartiles (4), quintiles (5), deciles (10), percentiles (100). The location of the y-th percentile in n observations: L<sub>y</sub> = (n + 1) × y/100, interpolating between neighbors when L is not an integer. The <strong>interquartile range</strong> (Q3 − Q1) and box plots summarize dispersion robustly. Quantiles are the machinery behind performance rankings (\"top-quartile manager\") and factor portfolios (deciles).</p><p><strong>Choosing among the means:</strong></p><ul><li><strong>Arithmetic mean</strong> — best forecast of a <em>single next-period</em> return.</li><li><strong>Geometric mean</strong> — the compound rate actually earned over <em>multiple past periods</em>. AM ≥ GM always, with the gap growing with volatility (GM ≈ AM − σ²/2).</li><li><strong>Harmonic mean</strong> — average price when investing <em>equal dollar amounts</em> at different prices (cost averaging). For positive, non-identical values: AM &gt; GM &gt; HM.</li><li><strong>Trimmed / winsorized means</strong> — discard or cap extreme observations to tame outliers.</li></ul>",
     "vi": "<p><strong>Quantiles (phân vị)</strong> chia dữ liệu đã sắp xếp thành các phần bằng nhau: tứ phân vị (4), ngũ phân vị (5), thập phân vị (10), bách phân vị (100). Vị trí bách phân vị thứ y trong n quan sát: L<sub>y</sub> = (n + 1) × y/100, nội suy giữa hai quan sát khi L không nguyên. <strong>Khoảng tứ phân vị</strong> (Q3 − Q1) và box plot tóm tắt độ phân tán một cách bền vững với outlier. Quantile là nền tảng của xếp hạng hiệu quả (\"manager top-quartile\") và danh mục nhân tố (chia decile).</p><p><strong>Chọn loại trung bình:</strong></p><ul><li><strong>Trung bình cộng</strong> — dự báo tốt nhất cho lợi suất <em>một kỳ tới</em>.</li><li><strong>Trung bình nhân</strong> — tốc độ kép thực sự đạt được qua <em>nhiều kỳ quá khứ</em>. AM ≥ GM luôn đúng, chênh lệch tăng theo biến động (GM ≈ AM − σ²/2).</li><li><strong>Trung bình điều hòa</strong> — giá bình quân khi đầu tư <em>số tiền bằng nhau</em> ở các mức giá khác nhau. Với dữ liệu dương không giống hệt nhau: AM &gt; GM &gt; HM.</li><li><strong>Trimmed / winsorized mean</strong> — bỏ hoặc chặn các quan sát cực đoan để giảm ảnh hưởng outlier.</li></ul>"
    },
    {
     "h": "Seeing shape: skewness, kurtosis, and the box plot",
     "en": "<p>Return distributions are rarely symmetric, and the exam tests whether you can read shape from a picture or infer it from summary statistics.</p><svg viewBox=\"0 0 720 290\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Skewness shapes\">\n<text x=\"360\" y=\"24\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#1B2438\">Skewness: where the long tail points — and how mean, median, mode line up</text>\n<!-- negative skew -->\n<path d=\"M30,220 C110,215 150,190 175,120 C190,80 205,80 215,120 C222,160 228,200 235,220 Z\" fill=\"#FDECEC\" stroke=\"#DC4848\" stroke-width=\"2\"/>\n<g stroke-width=\"1.6\" stroke-dasharray=\"4 3\"><line x1=\"150\" y1=\"222\" x2=\"150\" y2=\"150\" stroke=\"#DC4848\"/><line x1=\"175\" y1=\"222\" x2=\"175\" y2=\"120\" stroke=\"#5B6577\"/><line x1=\"196\" y1=\"222\" x2=\"196\" y2=\"92\" stroke=\"#1B2438\"/></g>\n<g font-family=\"Inter,sans-serif\" font-size=\"10.5\" text-anchor=\"middle\"><text x=\"147\" y=\"238\" fill=\"#DC4848\">mean</text><text x=\"177\" y=\"252\" fill=\"#5B6577\">median</text><text x=\"199\" y=\"238\" fill=\"#1B2438\">mode</text></g>\n<text x=\"135\" y=\"52\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#DC4848\">Negative (left) skew</text>\n<text x=\"135\" y=\"68\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#5B6577\">mean &lt; median &lt; mode</text>\n<!-- symmetric -->\n<path d=\"M270,220 C300,218 320,200 335,140 C348,90 362,90 375,140 C390,200 410,218 440,220 Z\" fill=\"#EEF0FE\" stroke=\"#5457E0\" stroke-width=\"2\"/>\n<line x1=\"355\" y1=\"222\" x2=\"355\" y2=\"100\" stroke=\"#5457E0\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\"/>\n<text x=\"355\" y=\"238\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"10.5\" fill=\"#5457E0\">mean = median = mode</text>\n<text x=\"355\" y=\"52\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#5457E0\">Symmetric</text>\n<text x=\"355\" y=\"68\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#5B6577\">skewness = 0</text>\n<!-- positive skew -->\n<path d=\"M480,220 C487,200 493,160 500,120 C510,80 525,80 540,120 C565,190 610,215 690,220 Z\" fill=\"#E6F6F0\" stroke=\"#0F9573\" stroke-width=\"2\"/>\n<g stroke-width=\"1.6\" stroke-dasharray=\"4 3\"><line x1=\"519\" y1=\"222\" x2=\"519\" y2=\"92\" stroke=\"#1B2438\"/><line x1=\"542\" y1=\"222\" x2=\"542\" y2=\"122\" stroke=\"#5B6577\"/><line x1=\"568\" y1=\"222\" x2=\"568\" y2=\"160\" stroke=\"#0F9573\"/></g>\n<g font-family=\"Inter,sans-serif\" font-size=\"10.5\" text-anchor=\"middle\"><text x=\"514\" y=\"238\" fill=\"#1B2438\">mode</text><text x=\"542\" y=\"252\" fill=\"#5B6577\">median</text><text x=\"572\" y=\"238\" fill=\"#0F9573\">mean</text></g>\n<text x=\"585\" y=\"52\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F9573\">Positive (right) skew</text>\n<text x=\"585\" y=\"68\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#5B6577\">mode &lt; median &lt; mean</text>\n<text x=\"360\" y=\"280\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#4338CA\" font-weight=\"600\">Memory hook: the mean is dragged toward the long tail; the mode stays at the peak.</text>\n</svg><p><strong>Why investors care:</strong> a strategy with <em>negative skew</em> (selling options, carry trades) delivers frequent small gains and occasional catastrophic losses — its mean and standard deviation understate the danger. <em>Positive skew</em> (lottery-like payoffs, venture bets) means frequent small losses, rare huge wins. <strong>Kurtosis</strong> adds the tail dimension: excess kurtosis &gt; 0 (leptokurtic) means both tails are fatter than the normal — extreme events happen more often than the bell curve predicts, which is exactly what equity return data show.</p><svg viewBox=\"0 0 720 210\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Box plot anatomy\">\n<text x=\"360\" y=\"24\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#1B2438\">Box plot anatomy — quantiles at a glance</text>\n<line x1=\"80\" y1=\"110\" x2=\"200\" y2=\"110\" stroke=\"#1B2438\" stroke-width=\"2\"/>\n<line x1=\"80\" y1=\"96\" x2=\"80\" y2=\"124\" stroke=\"#1B2438\" stroke-width=\"2\"/>\n<rect x=\"200\" y=\"80\" width=\"240\" height=\"60\" rx=\"6\" fill=\"#EEF0FE\" stroke=\"#5457E0\" stroke-width=\"2\"/>\n<line x1=\"300\" y1=\"80\" x2=\"300\" y2=\"140\" stroke=\"#4338CA\" stroke-width=\"3\"/>\n<line x1=\"440\" y1=\"110\" x2=\"590\" y2=\"110\" stroke=\"#1B2438\" stroke-width=\"2\"/>\n<line x1=\"590\" y1=\"96\" x2=\"590\" y2=\"124\" stroke=\"#1B2438\" stroke-width=\"2\"/>\n<circle cx=\"640\" cy=\"110\" r=\"5\" fill=\"#DC4848\"/><circle cx=\"668\" cy=\"110\" r=\"5\" fill=\"#DC4848\"/>\n<g font-family=\"Inter,sans-serif\" font-size=\"11.5\" text-anchor=\"middle\" fill=\"#1B2438\">\n<text x=\"80\" y=\"158\">Min (in fence)</text><text x=\"200\" y=\"66\" font-weight=\"700\">Q1</text><text x=\"300\" y=\"66\" font-weight=\"700\">Median (Q2)</text><text x=\"440\" y=\"66\" font-weight=\"700\">Q3</text><text x=\"590\" y=\"158\">Max (in fence)</text><text x=\"654\" y=\"140\" fill=\"#DC4848\">outliers</text>\n</g>\n<path d=\"M200,168 h240\" stroke=\"#8B5CF6\" stroke-width=\"2\"/><path d=\"M200,163 v10 M440,163 v10\" stroke=\"#8B5CF6\" stroke-width=\"2\"/>\n<text x=\"320\" y=\"190\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" fill=\"#8B5CF6\" font-weight=\"600\">IQR = Q3 − Q1 (middle 50% of the data)</text>\n</svg><p><strong>Worked mini-set</strong> — returns: 2%, 4%, 6%, 8%, 30%. Mean = 10%; median = 6% (mean &gt; median → right skew from the 30% outlier). Sample variance = [(2−10)² + (4−10)² + (6−10)² + (8−10)² + (30−10)²]/(5−1) = (64+36+16+4+400)/4 = 130 → s = 11.4%. CV = 11.4/10 = 1.14. With a 5% target, <strong>target semideviation</strong> uses only the observations below 5% — here 2% and 4%: √[((2−5)² + (4−5)²)/(5−1)] = √(10/4) = 1.58% — a downside-only risk lens.</p>",
     "vi": "<p>Phân phối lợi suất hiếm khi đối xứng, và đề thi kiểm tra khả năng đọc hình dạng từ đồ thị hoặc suy ra từ thống kê tóm tắt.</p><p><strong>Vì sao nhà đầu tư quan tâm:</strong> chiến lược có <em>xiên trái</em> (bán quyền chọn, carry trade) cho lãi nhỏ thường xuyên và thua lỗ thảm họa thi thoảng — mean và độ lệch chuẩn che giấu mức nguy hiểm. <em>Xiên phải</em> (kiểu vé số, đầu tư mạo hiểm) nghĩa là lỗ nhỏ thường xuyên, thắng lớn hiếm hoi. <strong>Kurtosis</strong> thêm chiều đuôi: excess kurtosis &gt; 0 (leptokurtic) nghĩa là hai đuôi dày hơn phân phối chuẩn — sự kiện cực đoan xảy ra thường xuyên hơn đường chuông dự đoán, đúng như dữ liệu cổ phiếu thực tế.</p><p><strong>Bài tập nhỏ</strong> — lợi suất: 2%, 4%, 6%, 8%, 30%. Mean = 10%; median = 6% (mean &gt; median → xiên phải do outlier 30%). Phương sai mẫu = (64+36+16+4+400)/4 = 130 → s = 11,4%. CV = 1,14. Với mục tiêu 5%, <strong>target semideviation</strong> chỉ dùng các quan sát dưới 5% — là 2% và 4%: √(10/4) = 1,58% — thước đo rủi ro chỉ phía giảm.</p>"
    }
   ],
   "formulas": [
    [
     "Sample variance",
     "s² = Σ(xi − x̄)² / (n − 1)",
     ""
    ],
    [
     "Coefficient of variation",
     "CV = s / x̄",
     "Lower is better (less risk per unit of return)"
    ],
    [
     "Sharpe ratio",
     "(Rp − Rf) / σp",
     "Excess return per unit of total risk"
    ],
    [
     "Mean absolute deviation",
     "MAD = Σ|xi − x̄| / n",
     ""
    ],
    [
     "Target semideviation",
     "sT = √[ Σ_{xi<B} (xi − B)² / (n − 1) ]",
     "Only observations below target B enter the sum"
    ],
    [
     "Percentile location",
     "Ly = (n + 1) × y / 100",
     "Interpolate when L is not an integer"
    ]
   ]
  },
  {
   "title": "Probability Trees and Conditional Expectations",
   "sections": [
    {
     "h": "Probability essentials",
     "en": "<ul><li><strong>Types:</strong> empirical (from data), a priori (from logic), subjective (from judgment).</li><li><strong>Rules:</strong> Addition: P(A or B) = P(A) + P(B) − P(AB). Multiplication: P(AB) = P(A|B) × P(B). Independence: P(A|B) = P(A).</li><li><strong>Total probability:</strong> P(A) = Σ P(A|S<sub>i</sub>)P(S<sub>i</sub>) across mutually exclusive, exhaustive scenarios.</li><li><strong>Bayes’ formula</strong> updates a prior probability after new information: P(Event|Info) = P(Info|Event) × P(Event) / P(Info).</li><li><strong>Expected value and variance</strong> of a random variable use probability weights. Portfolio expected return is the weighted average of asset returns; portfolio variance depends on weights, variances, and <em>covariances</em> — this is the mathematical basis of diversification.</li></ul><p><strong>The compact rulebook:</strong> <em>odds for</em> E = P(E)/(1−P(E)) (probability 0.2 → odds 1-to-4); multiplication rule P(AB) = P(A|B)P(B); addition rule P(A or B) = P(A) + P(B) − P(AB); total probability P(A) = ΣP(A|Sᵢ)P(Sᵢ) across mutually exclusive, exhaustive scenarios. <strong>Independence test:</strong> A and B are independent if and only if P(AB) = P(A)P(B) — equivalently P(A|B) = P(A). Exam questions love handing you numbers that just fail (or just pass) this test.</p>",
     "vi": "<ul><li><strong>Ba loại xác suất:</strong> thực nghiệm (từ dữ liệu), tiên nghiệm (từ suy luận), chủ quan (từ phán đoán).</li><li><strong>Quy tắc:</strong> Cộng: P(A hoặc B) = P(A) + P(B) − P(AB). Nhân: P(AB) = P(A|B) × P(B). Độc lập: P(A|B) = P(A).</li><li><strong>Xác suất toàn phần:</strong> P(A) = Σ P(A|S<sub>i</sub>)P(S<sub>i</sub>) trên các kịch bản loại trừ lẫn nhau và bao trùm.</li><li><strong>Công thức Bayes</strong> cập nhật xác suất tiên nghiệm khi có thông tin mới.</li><li><strong>Kỳ vọng và phương sai</strong> của biến ngẫu nhiên dùng trọng số xác suất. Lợi suất kỳ vọng danh mục = bình quân gia quyền lợi suất tài sản; phương sai danh mục phụ thuộc trọng số, phương sai và <em>hiệp phương sai</em> — nền tảng toán học của đa dạng hóa.</li></ul><p><strong>Bộ quy tắc gọn:</strong> <em>odds ủng hộ</em> E = P(E)/(1−P(E)) (xác suất 0,2 → odds 1-ăn-4); quy tắc nhân P(AB) = P(A|B)P(B); quy tắc cộng P(A hoặc B) = P(A) + P(B) − P(AB); xác suất toàn phần P(A) = ΣP(A|Sᵢ)P(Sᵢ) trên các kịch bản loại trừ nhau và bao trùm. <strong>Kiểm tra độc lập:</strong> A và B độc lập khi và chỉ khi P(AB) = P(A)P(B) — tương đương P(A|B) = P(A). Đề rất thích đưa các con số vừa khéo trượt (hoặc vừa khéo đạt) phép thử này.</p>"
    },
    {
     "h": "Expected values, probability trees & conditional expectations",
     "en": "<p>The <strong>expected value</strong> of a random variable is its probability-weighted average: E(X) = ΣP(x<sub>i</sub>)x<sub>i</sub>; variance is the probability-weighted average of squared deviations from E(X). A <strong>probability tree</strong> lays out scenarios (e.g., economy booms with P = 0.6, EPS = $3; recession with P = 0.4, EPS = $1 → E(EPS) = 0.6×3 + 0.4×1 = $2.20).</p><p><strong>Conditional expectation</strong> E(X | scenario) is the expected value using probabilities updated for known information; the <strong>total probability rule for expected value</strong> stitches them back together: E(X) = Σ E(X|S<sub>i</sub>)P(S<sub>i</sub>). Analysts use exactly this structure when they update forecasts after events — and <strong>Bayes’ formula</strong> is the engine for updating the probabilities themselves.</p><p>From joint probabilities you can also compute <strong>covariance</strong> between two returns: Cov(X,Y) = ΣP<sub>i</sub>[X<sub>i</sub> − E(X)][Y<sub>i</sub> − E(Y)], and standardize it into correlation ρ = Cov/(σ<sub>X</sub>σ<sub>Y</sub>).</p>",
     "vi": "<p><strong>Kỳ vọng</strong> của biến ngẫu nhiên là trung bình có trọng số xác suất: E(X) = ΣP(x<sub>i</sub>)x<sub>i</sub>; phương sai là trung bình có trọng số của bình phương độ lệch quanh E(X). <strong>Cây xác suất</strong> trải các kịch bản (ví dụ: kinh tế tốt P = 0.6, EPS = $3; suy thoái P = 0.4, EPS = $1 → E(EPS) = $2.20).</p><p><strong>Kỳ vọng có điều kiện</strong> E(X | kịch bản) dùng xác suất đã cập nhật theo thông tin đã biết; <strong>quy tắc kỳ vọng toàn phần</strong> ghép lại: E(X) = Σ E(X|S<sub>i</sub>)P(S<sub>i</sub>). Đây đúng là cấu trúc analyst dùng khi cập nhật dự báo sau sự kiện — và <strong>công thức Bayes</strong> là cỗ máy cập nhật chính các xác suất đó.</p><p>Từ xác suất đồng thời còn tính được <strong>hiệp phương sai</strong> giữa hai lợi suất: Cov(X,Y) = ΣP<sub>i</sub>[X<sub>i</sub> − E(X)][Y<sub>i</sub> − E(Y)], rồi chuẩn hóa thành tương quan ρ = Cov/(σ<sub>X</sub>σ<sub>Y</sub>).</p>"
    },
    {
     "h": "The probability tree worked — and Bayes step by step",
     "en": "<p>A <strong>probability tree</strong> turns a messy word problem into arithmetic: multiply probabilities <em>along</em> a branch to get each joint outcome, then add <em>across</em> outcomes.</p><svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Probability tree\">\n<text x=\"360\" y=\"24\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#1B2438\">Probability tree: multiply along branches, add across outcomes</text>\n<circle cx=\"90\" cy=\"175\" r=\"7\" fill=\"#5457E0\"/>\n<text x=\"90\" y=\"205\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#5B6577\">E(R) = ?</text>\n<line x1=\"97\" y1=\"170\" x2=\"290\" y2=\"95\" stroke=\"#0F9573\" stroke-width=\"2\"/>\n<line x1=\"97\" y1=\"180\" x2=\"290\" y2=\"255\" stroke=\"#DC4848\" stroke-width=\"2\"/>\n<text x=\"180\" y=\"112\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#0F9573\" font-weight=\"600\">Expansion 0.7</text>\n<text x=\"180\" y=\"243\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#DC4848\" font-weight=\"600\">Recession 0.3</text>\n<circle cx=\"296\" cy=\"93\" r=\"6\" fill=\"#0F9573\"/><circle cx=\"296\" cy=\"257\" r=\"6\" fill=\"#DC4848\"/>\n<line x1=\"302\" y1=\"89\" x2=\"490\" y2=\"55\" stroke=\"#0F9573\" stroke-width=\"1.8\"/>\n<line x1=\"302\" y1=\"97\" x2=\"490\" y2=\"130\" stroke=\"#0F9573\" stroke-width=\"1.8\"/>\n<line x1=\"302\" y1=\"253\" x2=\"490\" y2=\"215\" stroke=\"#DC4848\" stroke-width=\"1.8\"/>\n<line x1=\"302\" y1=\"261\" x2=\"490\" y2=\"295\" stroke=\"#DC4848\" stroke-width=\"1.8\"/>\n<g font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">\n<text x=\"380\" y=\"58\">good market 0.6 → R = +20%</text>\n<text x=\"380\" y=\"128\">weak market 0.4 → R = +5%</text>\n<text x=\"380\" y=\"220\">mild 0.5 → R = −5%</text>\n<text x=\"380\" y=\"292\">severe 0.5 → R = −15%</text>\n</g>\n<g font-family=\"JetBrains Mono,monospace\" font-size=\"11.5\" fill=\"#4338CA\">\n<text x=\"500\" y=\"75\">0.7×0.6 = 0.42</text>\n<text x=\"500\" y=\"147\">0.7×0.4 = 0.28</text>\n<text x=\"500\" y=\"237\">0.3×0.5 = 0.15</text>\n<text x=\"500\" y=\"312\">0.3×0.5 = 0.15</text>\n</g>\n<text x=\"360\" y=\"325\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#4338CA\">E(R) = .42(20) + .28(5) + .15(−5) + .15(−15) = 8.4 + 1.4 − 0.75 − 2.25 = +6.8%</text>\n</svg><p><strong>Bayes' formula in three steps</strong> — updating a prior with new evidence. Suppose 20% of funds are \"skilled\". A skilled fund beats its benchmark with probability 0.8; an unskilled one with probability 0.4. You observe a fund that just beat. What is P(skilled | beat)?</p><ol><li><strong>Joint paths to the evidence:</strong> P(skilled and beat) = 0.2 × 0.8 = 0.16; P(unskilled and beat) = 0.8 × 0.4 = 0.32.</li><li><strong>Total probability of the evidence:</strong> P(beat) = 0.16 + 0.32 = 0.48.</li><li><strong>Flip the conditioning:</strong> P(skilled | beat) = 0.16 / 0.48 = <strong>1/3</strong>.</li></ol><p>One good year moves the odds from 20% to only 33% — evidence updates beliefs, it doesn't replace them. Every Bayes exam question is this same three-line pattern; the tree above <em>is</em> the total probability rule drawn out.</p><p><strong>Also from this module:</strong> for a random variable, Var(X) = E[X²] − [E(X)]² = Σp(x)·[x − E(X)]²; linear transformations obey E(aX + b) = aE(X) + b and Var(aX + b) = a²Var(X) — the constant b shifts the mean but adds no risk. <strong>Counting rules:</strong> nCr = n!/[(n−r)!r!] when order doesn't matter (choose 4 stocks from 10 → 210 ways); nPr = n!/(n−r)! when it does (rank them → 5,040 ways).</p>",
     "vi": "<p><strong>Cây xác suất</strong> biến bài toán chữ rối rắm thành phép tính: nhân xác suất <em>dọc theo</em> nhánh để có từng kết cục đồng thời, rồi cộng <em>ngang qua</em> các kết cục.</p><p><strong>Công thức Bayes ba bước</strong> — cập nhật niềm tin ban đầu bằng bằng chứng mới. Giả sử 20% quỹ là \"có kỹ năng\". Quỹ có kỹ năng thắng benchmark với xác suất 0,8; quỹ không kỹ năng: 0,4. Bạn quan sát một quỹ vừa thắng. P(có kỹ năng | thắng)?</p><ol><li><strong>Các đường dẫn tới bằng chứng:</strong> P(kỹ năng và thắng) = 0,2 × 0,8 = 0,16; P(không kỹ năng và thắng) = 0,8 × 0,4 = 0,32.</li><li><strong>Xác suất toàn phần của bằng chứng:</strong> P(thắng) = 0,48.</li><li><strong>Đảo chiều điều kiện:</strong> P(kỹ năng | thắng) = 0,16/0,48 = <strong>1/3</strong>.</li></ol><p>Một năm thắng chỉ nâng xác suất từ 20% lên 33% — bằng chứng cập nhật niềm tin chứ không thay thế nó. Mọi câu Bayes trong đề đều theo đúng khuôn ba dòng này; cây phía trên chính là quy tắc xác suất toàn phần được vẽ ra.</p><p><strong>Cũng trong module này:</strong> với biến ngẫu nhiên, Var(X) = E[X²] − [E(X)]²; phép biến đổi tuyến tính: E(aX + b) = aE(X) + b và Var(aX + b) = a²Var(X) — hằng số b dịch chuyển mean nhưng không thêm rủi ro. <strong>Quy tắc đếm:</strong> nCr khi không quan tâm thứ tự (chọn 4 cổ phiếu từ 10 → 210 cách); nPr khi có thứ tự (xếp hạng chúng → 5.040 cách).</p>"
    }
   ],
   "formulas": [
    [
     "Bayes",
     "P(E|I) = P(I|E)·P(E) / P(I)",
     ""
    ],
    [
     "Expected value",
     "E(X) = Σ P(xi)·xi",
     "Total probability: E(X) = Σ E(X|Si)P(Si)"
    ],
    [
     "Conditional probability",
     "P(A|B) = P(AB) / P(B)",
     ""
    ],
    [
     "Total probability rule",
     "P(A) = Σ P(A|Si) × P(Si)",
     "Si = mutually exclusive, exhaustive scenarios"
    ],
    [
     "Variance of a random variable",
     "Var(X) = Σ p(x)·[x − E(X)]² = E(X²) − [E(X)]²",
     "Var(aX+b) = a²Var(X)"
    ],
    [
     "Combinations / permutations",
     "nCr = n! / [(n−r)! r!] ; nPr = n! / (n−r)!",
     "Order irrelevant → C; order matters → P"
    ]
   ]
  },
  {
   "title": "Portfolio Mathematics",
   "sections": [
    {
     "h": "Portfolio mathematics & Roy’s safety-first criterion",
     "en": "<p>For a portfolio of assets with weights w<sub>i</sub>:</p><ul><li><strong>Expected return</strong> is always the weighted average: E(R<sub>p</sub>) = Σw<sub>i</sub>E(R<sub>i</sub>).</li><li><strong>Variance is not</strong> — it depends on covariances. Two assets: σ<sub>p</sub>² = w<sub>A</sub>²σ<sub>A</sub>² + w<sub>B</sub>²σ<sub>B</sub>² + 2w<sub>A</sub>w<sub>B</sub>Cov(A,B). Because Cov = ρσ<sub>A</sub>σ<sub>B</sub>, any correlation below +1 pulls portfolio risk below the weighted average of risks — the mathematics of diversification that Portfolio Management builds on.</li></ul><p><strong>Shortfall risk</strong> is the probability that a portfolio return falls below a minimum threshold R<sub>L</sub> (e.g., the level that triggers an insurer’s insolvency). <strong>Roy’s safety-first ratio</strong> ranks portfolios by how many standard deviations the expected return sits above the threshold:</p><p style=\"text-align:center\"><strong>SFRatio = [E(R<sub>p</sub>) − R<sub>L</sub>] / σ<sub>p</sub></strong></p><p>Choose the portfolio with the <em>highest</em> SFRatio — it has the lowest probability of breaching the threshold (assuming normality). Note the family resemblance: with R<sub>L</sub> = the risk-free rate, the SFRatio becomes the Sharpe ratio.</p><p><strong>Reading correlation carefully:</strong> ρ ranges from −1 to +1 and measures only <em>linear</em> association — a perfect curve can show ρ ≈ 0. Correlation is not causation (spurious correlation from chance, or from a shared third variable), it is unstable over time (rising toward 1 in crises, exactly when diversification is needed most), and it is distorted by outliers. Diversification benefits exist whenever ρ &lt; +1 and grow as ρ falls — the engine behind every two-asset frontier exhibit.</p>",
     "vi": "<p>Với danh mục có trọng số w<sub>i</sub>:</p><ul><li><strong>Lợi suất kỳ vọng</strong> luôn là bình quân gia quyền: E(R<sub>p</sub>) = Σw<sub>i</sub>E(R<sub>i</sub>).</li><li><strong>Phương sai thì không</strong> — nó phụ thuộc hiệp phương sai. Hai tài sản: σ<sub>p</sub>² = w<sub>A</sub>²σ<sub>A</sub>² + w<sub>B</sub>²σ<sub>B</sub>² + 2w<sub>A</sub>w<sub>B</sub>Cov(A,B). Vì Cov = ρσ<sub>A</sub>σ<sub>B</sub>, chỉ cần tương quan dưới +1 là rủi ro danh mục thấp hơn bình quân gia quyền các rủi ro — nền toán học của đa dạng hóa mà môn Portfolio Management xây tiếp.</li></ul><p><strong>Rủi ro hụt chuẩn (shortfall risk)</strong> là xác suất lợi suất danh mục rơi xuống dưới ngưỡng tối thiểu R<sub>L</sub>. <strong>Tỷ số an toàn trước hết của Roy</strong> xếp hạng danh mục theo số độ lệch chuẩn mà kỳ vọng vượt trên ngưỡng:</p><p style=\"text-align:center\"><strong>SFRatio = [E(R<sub>p</sub>) − R<sub>L</sub>] / σ<sub>p</sub></strong></p><p>Chọn danh mục có SFRatio <em>cao nhất</em> — xác suất thủng ngưỡng thấp nhất (giả định phân phối chuẩn). Liên hệ: nếu R<sub>L</sub> = lãi suất phi rủi ro, SFRatio chính là Sharpe ratio.</p><p><strong>Đọc tương quan cho kỹ:</strong> ρ chạy từ −1 đến +1 và chỉ đo quan hệ <em>tuyến tính</em> — một đường cong hoàn hảo vẫn có thể cho ρ ≈ 0. Tương quan không phải nhân quả (tương quan giả do ngẫu nhiên hoặc do biến thứ ba chung), không ổn định theo thời gian (tăng về 1 trong khủng hoảng, đúng lúc cần đa dạng hóa nhất), và bị bóp méo bởi giá trị ngoại lai. Lợi ích đa dạng hóa tồn tại khi ρ &lt; +1 và lớn dần khi ρ giảm — động cơ đứng sau mọi đồ thị đường biên hai tài sản.</p>"
    },
    {
     "h": "Diversification in one picture — full two-asset worked example",
     "en": "<p>The entire logic of diversification lives in one chart: as long as two assets are not perfectly positively correlated, mixing them produces a portfolio standard deviation <em>below</em> the weighted average of their individual risks.</p><svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Diversification and correlation\">\n<text x=\"360\" y=\"24\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#1B2438\">Two-asset portfolio risk as weights shift — correlation does the work</text>\n<line x1=\"80\" y1=\"280\" x2=\"670\" y2=\"280\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"80\" y1=\"280\" x2=\"80\" y2=\"50\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"375\" y=\"312\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Weight in Asset B: 0% → 100%</text>\n<text x=\"34\" y=\"165\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#5B6577\" transform=\"rotate(-90 34 165)\">Portfolio σ</text>\n<!-- A at left (sigma 12 -> y=220), B at right (sigma 20 -> y=120) -->\n<circle cx=\"80\" cy=\"220\" r=\"6\" fill=\"#1B2438\"/><text x=\"96\" y=\"216\" font-family=\"Inter,sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1B2438\">Asset A (σ=12%)</text>\n<circle cx=\"670\" cy=\"120\" r=\"6\" fill=\"#1B2438\"/><text x=\"560\" y=\"108\" font-family=\"Inter,sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1B2438\">Asset B (σ=20%)</text>\n<!-- rho=+1 straight line -->\n<line x1=\"80\" y1=\"220\" x2=\"670\" y2=\"120\" stroke=\"#DC4848\" stroke-width=\"2.5\" stroke-dasharray=\"8 5\"/>\n<text x=\"330\" y=\"158\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" font-weight=\"600\" fill=\"#DC4848\">ρ = +1 — no diversification</text>\n<!-- rho=0 bowed curve -->\n<path d=\"M80,220 C240,238 330,225 460,185 C560,155 630,135 670,120\" fill=\"none\" stroke=\"#5457E0\" stroke-width=\"2.5\"/>\n<text x=\"205\" y=\"260\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" font-weight=\"600\" fill=\"#5457E0\">ρ = 0 — risk dips below both</text>\n<!-- rho=-1 kinked to zero -->\n<path d=\"M80,220 L448,278 L670,120\" fill=\"none\" stroke=\"#0F9573\" stroke-width=\"2.5\"/>\n<circle cx=\"448\" cy=\"278\" r=\"5\" fill=\"#0F9573\"/>\n<text x=\"452\" y=\"300\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" font-weight=\"600\" fill=\"#0F9573\">ρ = −1 — σ can reach 0</text>\n<text x=\"360\" y=\"46\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#4338CA\">The lower the correlation, the more the risk curve bows down for the same expected return mix.</text>\n</svg><p><strong>Worked example.</strong> Asset A: E(R) = 8%, σ = 12%. Asset B: E(R) = 14%, σ = 20%. Correlation ρ = 0.30, weights 60/40.</p><ul><li><strong>Expected return</strong> is always the weighted average: E(Rp) = 0.6(8) + 0.4(14) = <strong>10.4%</strong> — correlation plays no role here.</li><li><strong>Covariance:</strong> Cov = ρ·σA·σB = 0.30 × 12 × 20 = 72 (%²).</li><li><strong>Variance:</strong> σp² = 0.6²(144) + 0.4²(400) + 2(0.6)(0.4)(72) = 51.84 + 64 + 34.56 = 150.4 → σp = <strong>12.26%</strong>.</li></ul><p>The weighted-average risk would be 0.6(12) + 0.4(20) = 15.2%; the portfolio's actual 12.26% is lower — that ~3% saving is the diversification benefit, and it grows as ρ falls. At ρ = +1 the saving is exactly zero (σp = 15.2%); at ρ = −1 some weight mix drives σp to zero.</p><p><strong>Roy's safety-first, applied.</strong> With a 2% minimum acceptable (threshold) return R_L, compare portfolios by SFRatio = [E(Rp) − R_L]/σp — it counts how many standard deviations the expected return sits above the disaster level. Our portfolio: (10.4 − 2)/12.26 = 0.685. A rival with E(R) = 9%, σ = 9%: (9 − 2)/9 = 0.778 → the rival wins despite the lower expected return, because shortfall risk is what safety-first minimizes. If returns are normal, P(shortfall) = N(−SFRatio) — the higher the ratio, the smaller the left-tail probability.</p>",
     "vi": "<p>Toàn bộ logic của đa dạng hóa nằm trong một đồ thị: chừng nào hai tài sản chưa tương quan dương hoàn hảo, việc trộn chúng tạo ra độ lệch chuẩn danh mục <em>thấp hơn</em> bình quân gia quyền rủi ro riêng lẻ.</p><p><strong>Ví dụ đầy đủ.</strong> Tài sản A: E(R) = 8%, σ = 12%. Tài sản B: E(R) = 14%, σ = 20%. ρ = 0,30, tỷ trọng 60/40.</p><ul><li><strong>Lợi suất kỳ vọng</strong> luôn là bình quân gia quyền: E(Rp) = 0,6(8) + 0,4(14) = <strong>10,4%</strong> — tương quan không có vai trò ở đây.</li><li><strong>Hiệp phương sai:</strong> Cov = ρ·σA·σB = 0,30 × 12 × 20 = 72 (%²).</li><li><strong>Phương sai:</strong> σp² = 0,36(144) + 0,16(400) + 2(0,6)(0,4)(72) = 150,4 → σp = <strong>12,26%</strong>.</li></ul><p>Rủi ro bình quân gia quyền lẽ ra là 15,2%; danh mục thực tế chỉ 12,26% — khoản \"tiết kiệm\" ~3% chính là lợi ích đa dạng hóa, tăng dần khi ρ giảm. Tại ρ = +1 lợi ích bằng 0; tại ρ = −1 tồn tại tỷ trọng đưa σp về 0.</p><p><strong>Áp dụng Roy's safety-first.</strong> Với ngưỡng tối thiểu chấp nhận R_L = 2%, so sánh các danh mục bằng SFRatio = [E(Rp) − R_L]/σp — đếm xem lợi suất kỳ vọng nằm trên \"mức thảm họa\" bao nhiêu độ lệch chuẩn. Danh mục của ta: (10,4 − 2)/12,26 = 0,685. Đối thủ E(R) = 9%, σ = 9%: 0,778 → đối thủ thắng dù lợi suất kỳ vọng thấp hơn, vì safety-first tối thiểu hóa rủi ro hụt ngưỡng. Nếu lợi suất chuẩn, P(hụt ngưỡng) = N(−SFRatio).</p>"
    }
   ],
   "formulas": [
    [
     "Covariance (2 assets)",
     "Cov = ρ × σA × σB",
     ""
    ],
    [
     "Portfolio variance (2 assets)",
     "σp² = wA²σA² + wB²σB² + 2wAwBCov(A,B)",
     ""
    ],
    [
     "Safety-first ratio",
     "SFR = [E(Rp) − RL] / σp",
     "Pick the highest; = Sharpe when RL = Rf"
    ],
    [
     "Portfolio expected return",
     "E(Rp) = Σ wi × E(Ri)",
     "Always the weighted average — correlation irrelevant"
    ],
    [
     "Correlation",
     "ρ = Cov(A,B) / (σA × σB)",
     "Bounded in [−1, +1]"
    ],
    [
     "Shortfall probability (normal)",
     "P(Rp < RL) = N(−SFRatio)",
     "Higher safety-first ratio → smaller left tail"
    ]
   ]
  },
  {
   "title": "Simulation Methods (& Key Distributions)",
   "sections": [
    {
     "h": "Key distributions",
     "en": "<ul><li><strong>Normal:</strong> symmetric, fully described by mean and variance. Confidence intervals: ~68% of outcomes within ±1σ, <strong>90% within ±1.65σ, 95% within ±1.96σ, 99% within ±2.58σ</strong>. A <strong>standard normal (z)</strong> variable: z = (x − μ)/σ.</li><li><strong>Lognormal:</strong> bounded below by zero, right-skewed — used to model asset <em>prices</em> (while continuously compounded <em>returns</em> are modeled as normal).</li><li><strong>Binomial:</strong> number of successes in n independent trials (used in binomial option pricing trees).</li><li><strong>Student’s t:</strong> like the normal but with fatter tails; used for small samples with unknown population variance; converges to normal as degrees of freedom rise.</li><li><strong>Chi-square and F:</strong> used to test variances.</li></ul><p><strong>The two uniforms:</strong> a <em>discrete uniform</em> assigns equal probability 1/n to each of n outcomes (a fair die: each face 1/6); a <em>continuous uniform</em> over [a, b] spreads probability evenly, so P(x₁ ≤ X ≤ x₂) = (x₂ − x₁)/(b − a) — probability is just the share of the interval’s width. The <strong>binomial setup</strong> requires n independent Bernoulli trials with the <em>same</em> success probability p each trial: P(x successes) = ₙCₓ pˣ(1−p)ⁿ⁻ˣ, mean np, variance np(1−p).</p><p><strong>The three test distributions in one view:</strong> <em>Student’s t</em> — symmetric, fatter tails than normal, indexed by degrees of freedom (df = n−1 for one mean); use it whenever the population variance is unknown; as df grows it converges to z. <em>Chi-square</em> — asymmetric, non-negative, df = n−1; the distribution of scaled sample variances, hence the test for a <strong>single variance</strong> (and for independence in contingency tables). <em>F</em> — the ratio of two chi-squares, indexed by two df values; tests the <strong>equality of two variances</strong> and overall regression significance. Memory hook: one mean → t; one variance → chi-square; two variances → F.</p>",
     "vi": "<ul><li><strong>Phân phối chuẩn:</strong> đối xứng, xác định hoàn toàn bởi mean và variance. Khoảng tin cậy: ~68% trong ±1σ, <strong>90% trong ±1.65σ, 95% trong ±1.96σ, 99% trong ±2.58σ</strong>. Biến chuẩn hóa: z = (x − μ)/σ.</li><li><strong>Lognormal:</strong> không âm, xiên phải — dùng mô hình hóa <em>giá</em> tài sản (còn <em>lợi suất</em> ghép liên tục được coi là chuẩn).</li><li><strong>Nhị thức:</strong> số lần thành công trong n phép thử độc lập (dùng trong cây định giá quyền chọn nhị thức).</li><li><strong>Student’s t:</strong> giống chuẩn nhưng đuôi dày hơn; dùng cho mẫu nhỏ, phương sai tổng thể chưa biết; hội tụ về chuẩn khi bậc tự do tăng.</li><li><strong>Chi bình phương và F:</strong> dùng kiểm định phương sai.</li></ul><p><strong>Hai loại phân phối đều:</strong> <em>đều rời rạc</em> gán xác suất bằng nhau 1/n cho n kết cục (xúc xắc cân: mỗi mặt 1/6); <em>đều liên tục</em> trên [a, b] rải đều xác suất, nên P(x₁ ≤ X ≤ x₂) = (x₂ − x₁)/(b − a) — xác suất chính là tỷ phần độ rộng của khoảng. <strong>Điều kiện binomial</strong>: n phép thử Bernoulli độc lập với xác suất thành công p <em>không đổi</em>: P(x thành công) = ₙCₓ pˣ(1−p)ⁿ⁻ˣ, trung bình np, phương sai np(1−p).</p><p><strong>Ba phân phối kiểm định trong một khung nhìn:</strong> <em>Student’s t</em> — đối xứng, đuôi dày hơn chuẩn, theo bậc tự do (df = n−1 với một trung bình); dùng khi chưa biết phương sai tổng thể; df tăng thì hội tụ về z. <em>Chi-square</em> — bất đối xứng, không âm, df = n−1; là phân phối của phương sai mẫu đã chuẩn hóa, nên dùng kiểm định <strong>một phương sai</strong> (và tính độc lập trong bảng chéo). <em>F</em> — tỷ số hai chi-square, theo hai bậc tự do; kiểm định <strong>hai phương sai bằng nhau</strong> và ý nghĩa tổng thể của hồi quy. Mẹo nhớ: một trung bình → t; một phương sai → chi-square; hai phương sai → F.</p>"
    },
    {
     "h": "Simulation: lognormal prices, Monte Carlo & bootstrapping",
     "en": "<ul><li><strong>Why lognormal for prices:</strong> if continuously compounded returns r = ln(1 + HPR) are normally distributed, then the price level e<sup>r</sup> follows a lognormal distribution — bounded below by zero and right-skewed, exactly the properties prices need (they cannot go negative). Continuously compounded returns are also <em>additive</em> across time, which makes multi-period modeling clean.</li><li><strong>Monte Carlo simulation:</strong> (1) specify the model and the probability distributions of the risk factors; (2) generate thousands of random draws; (3) compute the value/outcome for each trial; (4) analyze the resulting distribution (mean, percentiles, VaR). Uses: valuing complex/path-dependent instruments, retirement planning, stress testing. Limitations: results are only as good as the assumed model and input distributions (it provides no analytic insight, and garbage in → garbage out).</li><li><strong>Bootstrapping (resampling):</strong> instead of assuming a distribution, draw repeatedly <em>with replacement from the observed historical data</em> to build the sampling distribution empirically. Monte Carlo is parametric (you choose the distribution); bootstrap is non-parametric (the data are the distribution).</li></ul>",
     "vi": "<ul><li><strong>Vì sao giá theo lognormal:</strong> nếu lợi suất ghép liên tục r = ln(1 + HPR) có phân phối chuẩn thì mức giá e<sup>r</sup> theo phân phối lognormal — chặn dưới tại 0 và xiên phải, đúng tính chất của giá (không thể âm). Lợi suất ghép liên tục còn <em>cộng được</em> qua các kỳ, giúp mô hình hóa nhiều kỳ gọn gàng.</li><li><strong>Mô phỏng Monte Carlo:</strong> (1) xác định mô hình và phân phối xác suất của các yếu tố rủi ro; (2) tạo hàng nghìn lần rút ngẫu nhiên; (3) tính giá trị/kết quả mỗi lần; (4) phân tích phân phối kết quả (trung bình, phân vị, VaR). Ứng dụng: định giá công cụ phức tạp/phụ thuộc lộ trình, kế hoạch hưu trí, stress test. Hạn chế: kết quả chỉ tốt bằng mô hình và phân phối đầu vào giả định (không cho lời giải giải tích; đầu vào rác → đầu ra rác).</li><li><strong>Bootstrapping (tái chọn mẫu):</strong> thay vì giả định phân phối, rút lặp lại <em>có hoàn lại từ chính dữ liệu lịch sử quan sát được</em> để dựng phân phối mẫu theo lối thực nghiệm. Monte Carlo là tham số (bạn chọn phân phối); bootstrap là phi tham số (dữ liệu chính là phân phối).</li></ul>"
    },
    {
     "h": "The normal family in pictures — z-scores, bands, and lognormal prices",
     "en": "<p>The normal distribution is fully described by mean and variance, is symmetric (skew 0, kurtosis 3), and obeys the band rule below — memorize the picture, because half the distribution questions on the exam are just reading it.</p><svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Normal distribution bands\">\n<text x=\"360\" y=\"24\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#1B2438\">The normal distribution — 68 / 95 / 99.7 rule</text>\n<!-- bell path centered 360, base y=260, top y=60; sigma step=90px -->\n<defs>\n<clipPath id=\"c1\"><rect x=\"270\" y=\"40\" width=\"180\" height=\"230\"/></clipPath>\n<clipPath id=\"c2\"><rect x=\"180\" y=\"40\" width=\"360\" height=\"230\"/></clipPath>\n</defs>\n<path d=\"M60,260 C170,258 230,240 270,190 C310,135 320,62 360,62 C400,62 410,135 450,190 C490,240 550,258 660,260 Z\" fill=\"#F4F6FB\" stroke=\"none\"/>\n<path d=\"M60,260 C170,258 230,240 270,190 C310,135 320,62 360,62 C400,62 410,135 450,190 C490,240 550,258 660,260 Z\" fill=\"#DDE9FD\" clip-path=\"url(#c2)\"/>\n<path d=\"M60,260 C170,258 230,240 270,190 C310,135 320,62 360,62 C400,62 410,135 450,190 C490,240 550,258 660,260 Z\" fill=\"#B9C5FB\" clip-path=\"url(#c1)\"/>\n<path d=\"M60,260 C170,258 230,240 270,190 C310,135 320,62 360,62 C400,62 410,135 450,190 C490,240 550,258 660,260 Z\" fill=\"none\" stroke=\"#5457E0\" stroke-width=\"2.5\"/>\n<line x1=\"60\" y1=\"260\" x2=\"660\" y2=\"260\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<g stroke=\"#5B6577\" stroke-width=\"1\" stroke-dasharray=\"3 3\">\n<line x1=\"270\" y1=\"260\" x2=\"270\" y2=\"185\"/><line x1=\"450\" y1=\"260\" x2=\"450\" y2=\"185\"/>\n<line x1=\"180\" y1=\"260\" x2=\"180\" y2=\"235\"/><line x1=\"540\" y1=\"260\" x2=\"540\" y2=\"235\"/>\n<line x1=\"360\" y1=\"260\" x2=\"360\" y2=\"62\"/>\n</g>\n<g font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\" text-anchor=\"middle\">\n<text x=\"90\" y=\"278\">μ−3σ</text><text x=\"180\" y=\"278\">μ−2σ</text><text x=\"270\" y=\"278\">μ−1σ</text><text x=\"360\" y=\"278\">μ</text><text x=\"450\" y=\"278\">μ+1σ</text><text x=\"540\" y=\"278\">μ+2σ</text><text x=\"630\" y=\"278\">μ+3σ</text>\n</g>\n<text x=\"360\" y=\"150\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#4338CA\">≈ 68%</text>\n<text x=\"360\" y=\"228\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#4338CA\">≈ 95% within ±2σ · ≈ 99.7% within ±3σ</text>\n<g font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#1B2438\">\n<text x=\"70\" y=\"308\">Exam z-values: 90% CI → ±1.65 · 95% CI → ±1.96 · 99% CI → ±2.58 · one-tailed 5% → 1.645 · one-tailed 1% → 2.33</text>\n</g>\n</svg><p><strong>Standardizing:</strong> any normal X converts to the standard normal via z = (x − μ)/σ. Example: returns ~ N(10%, σ = 20%). P(return &lt; −10%)? z = (−10 − 10)/20 = −1 → P = 1 − 0.8413 = <strong>15.87%</strong>. A <em>90% confidence interval</em> for one year's return is 10% ± 1.65(20%) = −23% to +43% — wide, which is the honest message of equity volatility.</p><svg viewBox=\"0 0 720 270\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Normal vs lognormal\">\n<text x=\"360\" y=\"24\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#1B2438\">Returns ~ normal, prices ~ lognormal</text>\n<path d=\"M60,230 C120,228 150,205 175,160 C195,120 210,80 235,80 C260,80 275,120 295,160 C320,205 350,228 410,230\" fill=\"#EEF0FE\" stroke=\"#5457E0\" stroke-width=\"2.5\" opacity=\"0.9\"/>\n<line x1=\"40\" y1=\"230\" x2=\"420\" y2=\"230\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"235\" y1=\"230\" x2=\"235\" y2=\"72\" stroke=\"#5B6577\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n<text x=\"235\" y=\"248\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">0</text>\n<text x=\"150\" y=\"52\" font-family=\"Inter,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#5457E0\">Continuously compounded return</text>\n<text x=\"150\" y=\"68\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">symmetric — can be negative</text>\n<path d=\"M455,230 C460,220 466,180 474,130 C484,84 498,80 512,102 C535,140 570,195 700,228\" fill=\"#E6F6F0\" stroke=\"#0F9573\" stroke-width=\"2.5\" opacity=\"0.95\"/>\n<line x1=\"440\" y1=\"230\" x2=\"705\" y2=\"230\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"455\" y=\"248\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">0</text>\n<text x=\"520\" y=\"52\" font-family=\"Inter,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F9573\">Price level S_T = S₀·e^r</text>\n<text x=\"520\" y=\"68\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">bounded below at 0, right-skewed</text>\n</svg><p><strong>Why lognormal for prices:</strong> if the continuously compounded return r = ln(S_T/S₀) is normal, then the price S_T = S₀·e^r is <strong>lognormal</strong> — bounded below by zero and right-skewed. This matches reality (limited liability: a stock cannot trade below zero, but its upside is unbounded) and is the distribution under the Black–Scholes model. Continuously compounded returns are also <em>additive across time</em>: the 2-year return is just r₁ + r₂, which is why simulation and option models work in logs.</p><p><strong>The testing distributions, previewed:</strong> Student's <em>t</em> looks like the normal with fatter tails, governed by degrees of freedom (df = n − 1); as df grows it converges to z. <em>Chi-square</em> (sums of squared normals, right-skewed, positive only) tests a single variance; <em>F</em> (ratio of two chi-squares) compares two variances and drives regression's overall test. You will use all three in Modules 7–10.</p>",
     "vi": "<p>Phân phối chuẩn được mô tả trọn vẹn bởi mean và phương sai, đối xứng (skew 0, kurtosis 3), và tuân theo quy tắc dải băng trong hình — hãy thuộc lòng bức tranh, vì nửa số câu hỏi phân phối chỉ là đọc nó.</p><p><strong>Chuẩn hóa:</strong> mọi biến chuẩn X quy về chuẩn tắc qua z = (x − μ)/σ. Ví dụ: lợi suất ~ N(10%, σ = 20%). P(lợi suất &lt; −10%)? z = −1 → P = <strong>15,87%</strong>. <em>Khoảng tin cậy 90%</em> cho lợi suất một năm: 10% ± 1,65(20%) = −23% đến +43% — rất rộng, đó là thông điệp trung thực về biến động cổ phiếu.</p><p><strong>Vì sao giá theo lognormal:</strong> nếu lợi suất ghép liên tục r = ln(S_T/S₀) là chuẩn, thì giá S_T = S₀·e^r theo <strong>lognormal</strong> — chặn dưới tại 0 và xiên phải. Khớp thực tế (trách nhiệm hữu hạn: cổ phiếu không thể âm, nhưng chiều tăng không giới hạn) và là phân phối trong mô hình Black–Scholes. Lợi suất ghép liên tục còn <em>cộng được theo thời gian</em>: lợi suất 2 năm = r₁ + r₂ — lý do mô phỏng và mô hình quyền chọn làm việc trên log.</p><p><strong>Các phân phối kiểm định, xem trước:</strong> Student's <em>t</em> giống chuẩn nhưng đuôi dày hơn, phụ thuộc bậc tự do (df = n − 1); df lớn thì hội tụ về z. <em>Chi-square</em> (tổng bình phương biến chuẩn, xiên phải, chỉ dương) kiểm định một phương sai; <em>F</em> (tỷ số hai chi-square) so sánh hai phương sai và là kiểm định tổng thể của hồi quy. Cả ba sẽ dùng ở Modules 7–10.</p>"
    }
   ],
   "formulas": [
    [
     "Binomial mean & variance",
     "E(X) = np; Var(X) = np(1 − p)",
     "n trials, success probability p"
    ],
    [
     "Lognormal link",
     "Price = e^r is lognormal if r ~ normal",
     "Prices bounded below by zero"
    ],
    [
     "Continuous uniform",
     "P(x₁≤X≤x₂) = (x₂−x₁)/(b−a)",
     "Probability = share of interval width"
    ],
    [
     "Binomial probability",
     "P(x) = nCx · pˣ(1−p)ⁿ⁻ˣ",
     "n independent trials, constant p"
    ],
    [
     "z-score (standardizing)",
     "z = (x − μ) / σ",
     "Number of standard deviations from the mean"
    ],
    [
     "Confidence multipliers",
     "90% → ±1.65 · 95% → ±1.96 · 99% → ±2.58",
     "One-tailed 5% → 1.645; 1% → 2.33"
    ],
    [
     "Price under lognormal",
     "S_T = S₀ × e^(r·T)",
     "r = continuously compounded return, normally distributed"
    ]
   ]
  },
  {
   "title": "Estimation and Inference",
   "sections": [
    {
     "h": "Sampling and the Central Limit Theorem",
     "en": "<p>The <strong>Central Limit Theorem</strong>: for a sample size n ≥ 30, the distribution of the sample mean is approximately normal with mean μ and variance σ²/n — <em>regardless</em> of the population’s distribution. The <strong>standard error</strong> of the mean is σ/√n. Sampling methods: simple random, stratified (guarantees subgroup representation, lower sampling error), cluster, convenience, judgmental. Key biases: <strong>survivorship bias</strong> (dead funds excluded → performance overstated), <strong>look-ahead bias</strong> (using data not available at the time), <strong>data snooping</strong>, and time-period bias.</p><p><strong>What makes a good estimator</strong> (three properties the exam names): <em>unbiased</em> — its expected value equals the true parameter (the sample mean is unbiased for μ; dividing sample variance by n−1 instead of n is exactly what makes it unbiased); <em>efficient</em> — among unbiased estimators, it has the smallest variance; <em>consistent</em> — as n grows, the estimate converges on the true value (the probability of a large error shrinks toward zero). The sample mean scores on all three — which is why it anchors inference.</p>",
     "vi": "<p><strong>Định lý giới hạn trung tâm</strong>: với n ≥ 30, phân phối của trung bình mẫu xấp xỉ chuẩn với mean μ và phương sai σ²/n — <em>bất kể</em> phân phối tổng thể. <strong>Sai số chuẩn</strong> của trung bình mẫu là σ/√n. Phương pháp chọn mẫu: ngẫu nhiên đơn giản, phân tầng (bảo đảm đại diện từng nhóm, sai số thấp hơn), theo cụm, thuận tiện, phán đoán. Các thiên lệch: <strong>survivorship bias</strong> (loại quỹ đã chết → thổi phồng hiệu quả), <strong>look-ahead bias</strong> (dùng dữ liệu chưa có tại thời điểm đó), <strong>data snooping</strong>, thiên lệch giai đoạn thời gian.</p><p><strong>Điều gì làm nên một ước lượng tốt</strong> (ba thuộc tính đề thi gọi tên): <em>không chệch</em> — giá trị kỳ vọng bằng đúng tham số thật (trung bình mẫu không chệch với μ; chia phương sai mẫu cho n−1 thay vì n chính là để không chệch); <em>hiệu quả</em> — trong các ước lượng không chệch, nó có phương sai nhỏ nhất; <em>vững</em> — n càng lớn, ước lượng càng hội tụ về giá trị thật (xác suất sai số lớn tiến về 0). Trung bình mẫu đạt cả ba — vì vậy nó là trụ cột của suy luận thống kê.</p>"
    },
    {
     "h": "Sampling methods, biases & resampling",
     "en": "<ul><li><strong>Probability sampling</strong> — every member has a known chance: <em>simple random</em> (each equally likely), <em>systematic</em> (every k-th item), <em>stratified random</em> (split the population into strata — e.g., bond sectors and ratings — and sample randomly within each: guarantees representation, lowers sampling error, the standard for bond-index replication), and <em>cluster</em> (sample whole subgroups — cheaper, less precise). <strong>Non-probability sampling</strong>: <em>convenience</em> (whatever data is at hand) and <em>judgmental</em> (expert-selected) — fast but bias-prone.</li><li><strong>The bias catalogue</strong> that invalidates research: <em>sample selection</em> bias (data availability drives inclusion), its famous case <strong>survivorship bias</strong> (backtesting only funds alive today overstates returns); <em>look-ahead bias</em> (using information not yet available at the decision date, e.g., full-year book values in March); <em>time-period bias</em> (results specific to the window studied); and <strong>data snooping</strong> — torturing one dataset with many tests until something \"significant\" appears, then reporting only the winner. Out-of-sample testing is the antidote.</li><li><strong>Resampling</strong> squeezes more inference from one sample: the <em>bootstrap</em> redraws full-size samples <strong>with replacement</strong> to build an empirical distribution of the statistic (standard errors, confidence intervals without normality); the <em>jackknife</em> recomputes the statistic leaving out one observation at a time.</li></ul>",
     "vi": "<ul><li><strong>Chọn mẫu xác suất</strong> — mọi phần tử có xác suất được chọn xác định: <em>ngẫu nhiên đơn</em> (đều khả năng), <em>hệ thống</em> (mỗi phần tử thứ k), <em>phân tầng</em> (chia tổng thể thành các tầng — ví dụ ngành và xếp hạng trái phiếu — rồi chọn ngẫu nhiên trong từng tầng: bảo đảm tính đại diện, giảm sai số mẫu, chuẩn mực khi sao chép chỉ số trái phiếu), và <em>theo cụm</em> (chọn nguyên các nhóm con — rẻ hơn, kém chính xác hơn). <strong>Chọn mẫu phi xác suất</strong>: <em>thuận tiện</em> (có dữ liệu gì dùng nấy) và <em>phán đoán</em> (chuyên gia chọn) — nhanh nhưng dễ thiên lệch.</li><li><strong>Danh mục thiên lệch</strong> làm hỏng nghiên cứu: thiên lệch <em>chọn mẫu</em> (dữ liệu sẵn có quyết định ai được vào mẫu), trường hợp nổi tiếng là <strong>survivorship bias</strong> (backtest chỉ trên các quỹ còn sống hôm nay thổi phồng lợi suất); <em>look-ahead bias</em> (dùng thông tin chưa tồn tại tại thời điểm ra quyết định, ví dụ số liệu cả năm khi mới tháng Ba); <em>time-period bias</em> (kết quả chỉ đúng cho khung thời gian nghiên cứu); và <strong>data snooping</strong> — \"tra tấn\" một bộ dữ liệu bằng nhiều phép thử tới khi lòi ra thứ \"có ý nghĩa\", rồi chỉ báo cáo kẻ thắng. Kiểm định ngoài mẫu là thuốc giải.</li><li><strong>Tái chọn mẫu</strong> vắt thêm suy luận từ một mẫu: <em>bootstrap</em> rút lại các mẫu đủ cỡ <strong>có hoàn lại</strong> để dựng phân phối thực nghiệm của thống kê (sai số chuẩn, khoảng tin cậy không cần giả định chuẩn); <em>jackknife</em> tính lại thống kê khi lần lượt bỏ ra từng quan sát.</li></ul>"
    },
    {
     "h": "The CLT and confidence intervals — visually and worked",
     "en": "<p>The <strong>Central Limit Theorem</strong> is the license for almost everything in inference: for samples of n ≥ 30, the distribution of the sample mean is approximately normal <em>regardless of the population's shape</em>, with mean μ and variance σ²/n.</p><svg viewBox=\"0 0 720 300\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Central limit theorem\">\n<text x=\"360\" y=\"24\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#1B2438\">Central Limit Theorem: whatever the population looks like…</text>\n<path d=\"M50,240 C55,230 60,190 68,140 C78,94 92,90 106,112 C129,150 164,205 260,238\" fill=\"#FFF8EC\" stroke=\"#B45309\" stroke-width=\"2.5\"/>\n<line x1=\"40\" y1=\"240\" x2=\"270\" y2=\"240\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"150\" y=\"270\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" font-weight=\"600\" fill=\"#B45309\">Population: any shape</text>\n<text x=\"150\" y=\"287\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">mean μ, variance σ²</text>\n<path d=\"M300,150 h70 m-12,-9 l12,9 l-12,9\" stroke=\"#5457E0\" stroke-width=\"3\" fill=\"none\"/>\n<text x=\"335\" y=\"132\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#4338CA\">sample means, n ≥ 30</text>\n<path d=\"M410,240 C460,238 480,220 500,175 C516,138 528,105 545,105 C562,105 574,138 590,175 C610,220 630,238 680,240\" fill=\"#EEF0FE\" stroke=\"#5457E0\" stroke-width=\"2.5\"/>\n<line x1=\"400\" y1=\"240\" x2=\"690\" y2=\"240\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"545\" y1=\"240\" x2=\"545\" y2=\"100\" stroke=\"#5B6577\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n<text x=\"545\" y=\"270\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" font-weight=\"600\" fill=\"#4338CA\">Distribution of x̄: ≈ normal</text>\n<text x=\"545\" y=\"287\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">mean μ, variance σ²/n → narrower as n grows</text>\n</svg><p><strong>Standard error worked:</strong> monthly fund returns have σ = 6%. For n = 36 months, the standard error of the mean is 6/√36 = <strong>1%</strong> — quadruple the sample to 144 and the SE only halves to 0.5%: precision improves with the <em>square root</em> of n, which is why \"just collect more data\" is slow medicine.</p><p><strong>Confidence interval worked:</strong> sample mean 1.2% per month, s = 6%, n = 36. A 95% CI with the t-distribution (df = 35, t ≈ 2.03): 1.2 ± 2.03 × 1% = <strong>−0.83% to +3.23%</strong>. The interval straddles zero — with three years of data you cannot even rule out that the true mean return is zero. Correct reading: \"95% of intervals built this way capture μ\" — <em>not</em> \"μ has a 95% probability of being in this interval\".</p><p><strong>Which statistic?</strong></p><table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Population</th><th style=\"padding:7px;border:1px solid #D6DAFB\">σ known</th><th style=\"padding:7px;border:1px solid #D6DAFB\">σ unknown</th></tr><tr><td style=\"padding:6px;border:1px solid #E5E9F2\">Normal, any n</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">z</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">t</td></tr><tr><td style=\"padding:6px;border:1px solid #E5E9F2\">Non-normal, n ≥ 30</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">z</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">t (z acceptable)</td></tr><tr><td style=\"padding:6px;border:1px solid #E5E9F2\">Non-normal, n &lt; 30</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\" colspan=\"2\">no parametric test available</td></tr></table><p>When in doubt with σ unknown, <strong>t is always the safer (more conservative) choice</strong> — its fatter tails widen the interval.</p>",
     "vi": "<p><strong>Định lý giới hạn trung tâm (CLT)</strong> là \"giấy phép\" cho gần như toàn bộ suy luận thống kê: với n ≥ 30, phân phối của trung bình mẫu xấp xỉ chuẩn <em>bất kể hình dạng tổng thể</em>, với mean μ và phương sai σ²/n.</p><p><strong>Sai số chuẩn (SE):</strong> lợi suất tháng có σ = 6%. Với n = 36 tháng, SE của trung bình = 6/√36 = <strong>1%</strong> — tăng mẫu gấp 4 lên 144 thì SE chỉ giảm một nửa còn 0,5%: độ chính xác cải thiện theo <em>căn bậc hai</em> của n.</p><p><strong>Khoảng tin cậy:</strong> trung bình mẫu 1,2%/tháng, s = 6%, n = 36. CI 95% với phân phối t (df = 35, t ≈ 2,03): 1,2 ± 2,03 × 1% = <strong>−0,83% đến +3,23%</strong>. Khoảng vắt qua 0 — ba năm dữ liệu vẫn chưa loại trừ được khả năng lợi suất thực bằng 0. Cách đọc đúng: \"95% các khoảng dựng theo cách này chứa μ\" — <em>không phải</em> \"xác suất μ nằm trong khoảng này là 95%\".</p><p><strong>Chọn thống kê nào?</strong> Tổng thể chuẩn: σ biết → z, σ không biết → t. Không chuẩn nhưng n ≥ 30: σ biết → z, không biết → t (z chấp nhận được). Không chuẩn và n &lt; 30: không có kiểm định tham số. Khi phân vân với σ không biết, <strong>t luôn là lựa chọn an toàn (thận trọng) hơn</strong> — đuôi dày làm khoảng rộng ra.</p>"
    }
   ],
   "formulas": [
    [
     "Standard error of mean",
     "SE = σ / √n",
     ""
    ],
    [
     "Confidence interval",
     "x̄ ± z(α/2) × SE",
     "z = 1.65 (90%), 1.96 (95%), 2.58 (99%)"
    ],
    [
     "CI with t (σ unknown)",
     "x̄ ± t(α/2, n−1) × s/√n",
     "t has fatter tails → wider, more conservative interval"
    ]
   ]
  },
  {
   "title": "Hypothesis Testing",
   "sections": [
    {
     "h": "Hypothesis testing — the 6 steps",
     "en": "<ol><li>State the hypotheses: the <strong>null (H₀)</strong> always contains the equality (\"=\", \"≤\", \"≥\"); the <strong>alternative (Hₐ)</strong> is what you hope to show.</li><li>Choose the test statistic (z, t, chi-square, F).</li><li>Set the significance level α (probability of a <strong>Type I error</strong> — rejecting a true null). A <strong>Type II error</strong> is failing to reject a false null; <strong>power</strong> = 1 − P(Type II).</li><li>State the decision rule (critical values; two-tailed for \"≠\", one-tailed for \"&gt;\" or \"&lt;\").</li><li>Compute the statistic from the sample.</li><li>Decide: reject H₀ if the statistic exceeds the critical value, or if the <strong>p-value</strong> &lt; α. The p-value is the smallest α at which H₀ can be rejected.</li></ol><p><em>Statistically significant ≠ economically meaningful</em> — transaction costs, taxes, and risk can erase a \"significant\" anomaly.</p>",
     "vi": "<ol><li>Phát biểu giả thuyết: <strong>H₀ (null)</strong> luôn chứa dấu bằng (\"=\", \"≤\", \"≥\"); <strong>Hₐ</strong> là điều bạn muốn chứng minh.</li><li>Chọn thống kê kiểm định (z, t, chi bình phương, F).</li><li>Chọn mức ý nghĩa α (xác suất <strong>sai lầm loại I</strong> — bác bỏ H₀ đúng). <strong>Sai lầm loại II</strong>: không bác bỏ H₀ sai; <strong>power</strong> = 1 − P(loại II).</li><li>Xác định quy tắc quyết định (giá trị tới hạn; hai đuôi cho \"≠\", một đuôi cho \"&gt;\" hoặc \"&lt;\").</li><li>Tính thống kê từ mẫu.</li><li>Kết luận: bác bỏ H₀ nếu thống kê vượt giá trị tới hạn, hoặc <strong>p-value</strong> &lt; α. P-value là mức α nhỏ nhất mà tại đó H₀ bị bác bỏ.</li></ol><p><em>Có ý nghĩa thống kê ≠ có ý nghĩa kinh tế</em> — chi phí giao dịch, thuế, rủi ro có thể xóa sạch một \"anomaly\" có ý nghĩa thống kê.</p>"
    },
    {
     "h": "Type I vs Type II errors, power & reading the p-value",
     "en": "<ul><li><strong>Two ways to be wrong:</strong> a <em>Type I error</em> rejects a true null (a false alarm) — its probability is the significance level <strong>α</strong> you choose; a <em>Type II error</em> fails to reject a false null (a miss) — probability β. <strong>Power = 1 − β</strong>, the chance of catching a real effect. The trade-off: shrinking α (fewer false alarms) raises β (more misses) for a given sample; only <em>more data</em> improves both.</li><li><strong>The p-value</strong> is the smallest significance level at which the null would be rejected given the data — equivalently, the probability of a result at least this extreme if the null were true. Decision rule: <em>p &lt; α → reject</em>. A p-value is NOT the probability the null is true, and \"statistically significant\" is not \"economically meaningful\" — with huge samples, trivial effects turn significant; after costs, they may be worthless.</li><li><strong>Test-statistic menu:</strong> one mean → t (z if variance known/large n); difference of two means → t; mean of differences (paired) → t; one variance → <strong>chi-square</strong>; equality of two variances → <strong>F</strong>; correlation → t. One-tailed tests put all of α in one tail (larger rejection region on that side); two-tailed split α/2 per tail — read the wording (\"greater than\" vs \"different from\") to choose.</li></ul>",
     "vi": "<ul><li><strong>Hai cách để sai:</strong> <em>sai lầm loại I</em> là bác bỏ null đúng (báo động giả) — xác suất bằng mức ý nghĩa <strong>α</strong> bạn chọn; <em>sai lầm loại II</em> là không bác bỏ null sai (bỏ lọt) — xác suất β. <strong>Power = 1 − β</strong>, khả năng bắt được hiệu ứng thật. Đánh đổi: giảm α (ít báo động giả) làm tăng β (bỏ lọt nhiều hơn) với cùng cỡ mẫu; chỉ <em>thêm dữ liệu</em> mới cải thiện cả hai.</li><li><strong>P-value</strong> là mức ý nghĩa nhỏ nhất mà tại đó null bị bác bỏ với dữ liệu đã có — tương đương, xác suất thu được kết quả cực đoan ít nhất như vậy nếu null đúng. Quy tắc: <em>p &lt; α → bác bỏ</em>. P-value KHÔNG phải xác suất null đúng, và \"có ý nghĩa thống kê\" không đồng nghĩa \"có ý nghĩa kinh tế\" — mẫu khổng lồ khiến hiệu ứng vặt cũng thành significant; sau chi phí có thể vô giá trị.</li><li><strong>Thực đơn thống kê kiểm định:</strong> một trung bình → t (z nếu biết phương sai/mẫu lớn); hiệu hai trung bình → t; trung bình của các cặp chênh lệch → t; một phương sai → <strong>chi-square</strong>; bằng nhau của hai phương sai → <strong>F</strong>; hệ số tương quan → t. Kiểm định một đuôi dồn cả α vào một phía (vùng bác bỏ phía đó rộng hơn); hai đuôi chia α/2 mỗi phía — đọc kỹ câu chữ (\"lớn hơn\" vs \"khác\") để chọn.</li></ul>"
    },
    {
     "h": "Rejection regions, the error matrix, and a full worked test",
     "en": "<p>Where the rejection region sits is decided entirely by the <em>alternative</em> hypothesis:</p><svg viewBox=\"0 0 720 320\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Rejection regions\">\n<text x=\"360\" y=\"24\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#1B2438\">Rejection regions at α = 5%</text>\n<!-- two-tailed left figure -->\n<defs>\n<clipPath id=\"lt\"><rect x=\"40\" y=\"40\" width=\"52\" height=\"180\"/></clipPath>\n<clipPath id=\"rt\"><rect x=\"248\" y=\"40\" width=\"60\" height=\"180\"/></clipPath>\n<clipPath id=\"rt2\"><rect x=\"600\" y=\"40\" width=\"80\" height=\"180\"/></clipPath>\n</defs>\n<path id=\"bell1\" d=\"M40,215 C85,213 105,198 122,162 C136,130 146,102 170,102 C194,102 204,130 218,162 C235,198 255,213 300,215 Z\" fill=\"#EEF0FE\" stroke=\"#5457E0\" stroke-width=\"2\"/>\n<path d=\"M40,215 C85,213 105,198 122,162 C136,130 146,102 170,102 C194,102 204,130 218,162 C235,198 255,213 300,215 Z\" fill=\"#DC4848\" opacity=\"0.55\" clip-path=\"url(#lt)\"/>\n<path d=\"M40,215 C85,213 105,198 122,162 C136,130 146,102 170,102 C194,102 204,130 218,162 C235,198 255,213 300,215 Z\" fill=\"#DC4848\" opacity=\"0.55\" clip-path=\"url(#rt)\"/>\n<line x1=\"30\" y1=\"215\" x2=\"310\" y2=\"215\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<g font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#5B6577\" text-anchor=\"middle\">\n<text x=\"92\" y=\"232\">−1.96</text><text x=\"248\" y=\"232\">+1.96</text><text x=\"170\" y=\"232\">0</text>\n</g>\n<text x=\"170\" y=\"258\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1B2438\">Two-tailed: H₀: μ = μ₀</text>\n<text x=\"170\" y=\"276\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#DC4848\">2.5% in each tail — reject if |z| &gt; 1.96</text>\n<!-- one-tailed right figure -->\n<path d=\"M420,215 C465,213 485,198 502,162 C516,130 526,102 550,102 C574,102 584,130 598,162 C615,198 635,213 680,215 Z\" fill=\"#EEF0FE\" stroke=\"#5457E0\" stroke-width=\"2\"/>\n<path d=\"M420,215 C465,213 485,198 502,162 C516,130 526,102 550,102 C574,102 584,130 598,162 C615,198 635,213 680,215 Z\" fill=\"#DC4848\" opacity=\"0.55\" clip-path=\"url(#rt2)\"/>\n<line x1=\"410\" y1=\"215\" x2=\"690\" y2=\"215\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<g font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#5B6577\" text-anchor=\"middle\">\n<text x=\"550\" y=\"232\">0</text><text x=\"602\" y=\"232\">+1.645</text>\n</g>\n<text x=\"550\" y=\"258\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1B2438\">One-tailed: H₀: μ ≤ μ₀ vs Hₐ: μ &gt; μ₀</text>\n<text x=\"550\" y=\"276\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#DC4848\">all 5% in one tail — reject if z &gt; 1.645</text>\n<text x=\"360\" y=\"306\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#4338CA\" font-weight=\"600\">The alternative hypothesis Hₐ tells you where the rejection region goes.</text>\n</svg><p><strong>Worked test, all six steps.</strong> A manager claims her mean monthly alpha is positive. Sample: n = 36, mean alpha = 0.5%, s = 1.8%.</p><ol><li><strong>Hypotheses:</strong> H₀: μ ≤ 0 vs Hₐ: μ &gt; 0 (her claim is the alternative — the burden of proof).</li><li><strong>Statistic:</strong> t = (x̄ − μ₀)/(s/√n), df = 35.</li><li><strong>Significance:</strong> α = 5%, one-tailed.</li><li><strong>Decision rule:</strong> reject H₀ if t &gt; 1.69.</li><li><strong>Compute:</strong> t = 0.5/(1.8/6) = 0.5/0.30 = <strong>1.67</strong>.</li><li><strong>Decide:</strong> 1.67 &lt; 1.69 → <em>fail to reject</em> H₀. The evidence is suggestive but not statistically significant at 5%; the p-value is just above 0.05.</li></ol><p><strong>The error matrix:</strong></p><table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB\"></th><th style=\"padding:7px;border:1px solid #D6DAFB\">H₀ is true</th><th style=\"padding:7px;border:1px solid #D6DAFB\">H₀ is false</th></tr><tr><td style=\"padding:6px;border:1px solid #E5E9F2;font-weight:600\">Fail to reject H₀</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center;color:#0F9573\">Correct (1 − α)</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center;color:#DC4848\">Type II error (β)</td></tr><tr><td style=\"padding:6px;border:1px solid #E5E9F2;font-weight:600\">Reject H₀</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center;color:#DC4848\">Type I error (α)</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center;color:#0F9573\">Correct — Power (1 − β)</td></tr></table><p>Lowering α (demanding stronger evidence) mechanically <em>raises</em> β — the only free lunch is a bigger sample, which shrinks both. The <strong>p-value</strong> is the smallest α at which you would reject H₀: p = 0.03 means \"reject at 5%, fail to reject at 1%.\" It is <em>not</em> the probability that H₀ is true.</p><p><strong>Other test statistics to recognize:</strong> a single variance → chi-square: χ² = (n−1)s²/σ₀²; equality of two variances → F = s₁²/s₂² (larger on top); two independent means → t with pooled variance; paired observations (same subjects before/after) → t on the mean of differences.</p>",
     "vi": "<p>Vùng bác bỏ nằm ở đâu hoàn toàn do giả thuyết <em>đối</em> quyết định (xem hình).</p><p><strong>Bài kiểm định đầy đủ 6 bước.</strong> Một manager tuyên bố alpha tháng trung bình của cô ấy dương. Mẫu: n = 36, alpha trung bình = 0,5%, s = 1,8%.</p><ol><li><strong>Giả thuyết:</strong> H₀: μ ≤ 0 vs Hₐ: μ &gt; 0 (tuyên bố của cô ấy là giả thuyết đối — nghĩa vụ chứng minh).</li><li><strong>Thống kê:</strong> t = (x̄ − μ₀)/(s/√n), df = 35.</li><li><strong>Mức ý nghĩa:</strong> α = 5%, một đuôi.</li><li><strong>Quy tắc:</strong> bác bỏ H₀ nếu t &gt; 1,69.</li><li><strong>Tính:</strong> t = 0,5/0,30 = <strong>1,67</strong>.</li><li><strong>Kết luận:</strong> 1,67 &lt; 1,69 → <em>không bác bỏ</em> H₀. Bằng chứng gợi ý nhưng chưa đủ ý nghĩa thống kê ở mức 5%; p-value hơi trên 0,05.</li></ol><p><strong>Ma trận sai lầm:</strong> bác bỏ H₀ khi nó đúng = sai lầm loại I (α); không bác bỏ khi nó sai = sai lầm loại II (β); Power = 1 − β. Giảm α (đòi hỏi bằng chứng mạnh hơn) tự động <em>tăng</em> β — bữa trưa miễn phí duy nhất là mẫu lớn hơn, giúp giảm cả hai. <strong>p-value</strong> là mức α nhỏ nhất mà tại đó bạn bác bỏ H₀: p = 0,03 nghĩa là \"bác bỏ ở 5%, không bác bỏ ở 1%\" — <em>không phải</em> xác suất H₀ đúng.</p><p><strong>Các thống kê khác cần nhận diện:</strong> một phương sai → chi-square: χ² = (n−1)s²/σ₀²; hai phương sai → F = s₁²/s₂² (số lớn ở trên); hai trung bình độc lập → t với phương sai gộp; quan sát bắt cặp (trước/sau trên cùng đối tượng) → t trên trung bình của các hiệu.</p>"
    }
   ],
   "formulas": [
    [
     "z-statistic",
     "z = (x̄ − μ0) / (σ/√n)",
     "Use t with s instead of σ when population variance unknown"
    ],
    [
     "Power of a test",
     "Power = 1 − β = 1 − P(Type II error)",
     "α = P(Type I error)"
    ],
    [
     "t-statistic (one mean)",
     "t = (x̄ − μ₀) / (s/√n)",
     "df = n − 1"
    ],
    [
     "Chi-square (one variance)",
     "χ² = (n − 1)s² / σ₀²",
     "df = n − 1; right-skewed, positive only"
    ],
    [
     "F (two variances)",
     "F = s₁² / s₂²",
     "Put the larger variance on top; df = (n₁−1, n₂−1)"
    ]
   ]
  },
  {
   "title": "Parametric and Non-Parametric Tests of Independence",
   "sections": [
    {
     "h": "Choosing the right test — and testing independence",
     "en": "<table class=\"simple\"><tr><th>What you are testing</th><th>Statistic</th></tr><tr><td>One mean, normal population, <em>known</em> variance</td><td>z</td></tr><tr><td>One mean, variance <em>unknown</em> (the realistic case)</td><td>t, df = n − 1</td></tr><tr><td>Two independent means (equal assumed variances)</td><td>t with pooled variance</td></tr><tr><td>Mean of <em>differences</em>, paired observations (before/after)</td><td>Paired-comparisons t</td></tr><tr><td>One variance vs a hypothesized value</td><td>Chi-square, df = n − 1</td></tr><tr><td>Equality of two variances</td><td>F = s₁²/s₂² (larger on top)</td></tr><tr><td>A correlation = 0</td><td>t = r√(n−2) / √(1−r²), df = n − 2</td></tr><tr><td>Independence of two categorical variables</td><td>Chi-square on a contingency table</td></tr></table><p><strong>Contingency-table test:</strong> expected cell frequency = (row total × column total) / grand total; the statistic sums (observed − expected)²/expected across cells. <strong>Parametric</strong> tests rely on distributional assumptions about the population; <strong>nonparametric</strong> tests (often rank-based, e.g., Spearman rank correlation) are used when data are ranks/ordinal, when outliers dominate, or when distributional assumptions clearly fail.</p>",
     "vi": "<p>Chọn kiểm định: một trung bình với phương sai tổng thể <em>đã biết</em> → z; phương sai <em>chưa biết</em> (trường hợp thực tế) → t với df = n − 1; hai trung bình độc lập (giả định phương sai bằng nhau) → t gộp phương sai; trung bình của <em>chênh lệch</em> theo cặp (trước/sau) → paired t; một phương sai so với giá trị giả định → chi bình phương, df = n − 1; so sánh hai phương sai → F = s₁²/s₂² (phương sai lớn ở tử số); kiểm định tương quan bằng 0 → t = r√(n−2)/√(1−r²), df = n − 2; tính độc lập của hai biến định tính → chi bình phương trên bảng chéo (contingency table).</p><p><strong>Bảng chéo:</strong> tần suất kỳ vọng mỗi ô = (tổng hàng × tổng cột) / tổng chung; thống kê là tổng (quan sát − kỳ vọng)²/kỳ vọng. Kiểm định <strong>tham số</strong> dựa trên giả định phân phối của tổng thể; kiểm định <strong>phi tham số</strong> (thường dựa trên thứ hạng, ví dụ tương quan hạng Spearman) dùng khi dữ liệu là thứ hạng/thứ bậc, khi outlier chi phối, hoặc khi giả định phân phối rõ ràng không thỏa.</p>"
    },
    {
     "h": "Chi-square test of independence — a worked contingency table",
     "en": "<p>Are two <em>categorical</em> classifications related? Example: is fund style (Growth/Value) independent of size (Large/Small)? Observed counts for 200 funds:</p><table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Observed</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Growth</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Value</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Total</th></tr><tr><td style=\"padding:6px;border:1px solid #E5E9F2;font-weight:600\">Large-cap</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">70</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">50</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">120</td></tr><tr><td style=\"padding:6px;border:1px solid #E5E9F2;font-weight:600\">Small-cap</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">30</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">50</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">80</td></tr><tr style=\"background:#F4F6FB\"><td style=\"padding:6px;border:1px solid #E5E9F2;font-weight:600\">Total</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">100</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">100</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">200</td></tr></table><p><strong>Step 1 — expected counts under independence:</strong> E = (row total × column total)/grand total. E(Large, Growth) = 120 × 100/200 = 60; similarly 60, 40, 40.</p><p><strong>Step 2 — the statistic:</strong> χ² = Σ (O − E)²/E = (70−60)²/60 + (50−60)²/60 + (30−40)²/40 + (50−40)²/40 = 1.67 + 1.67 + 2.5 + 2.5 = <strong>8.33</strong>.</p><p><strong>Step 3 — decide:</strong> df = (rows − 1)(cols − 1) = 1; the 5% critical value is 3.84. Since 8.33 &gt; 3.84, <strong>reject independence</strong> — style and size are related (large funds tilt Growth in this sample). The standardized residual (O − E)/√E shows <em>which cells</em> drive the result.</p><p><strong>Parametric vs non-parametric:</strong> parametric tests (t, z, F) assume a distribution and test its parameters. Non-parametric tests step in when data are ranked/ordinal, the sample is small and non-normal, or outliers would wreck a mean-based test. The flagship pairing: Pearson correlation (parametric, tested with t = r√(n−2)/√(1−r²)) vs <strong>Spearman rank correlation</strong> — computed on the <em>ranks</em>, robust to outliers and to any monotonic non-linearity.</p>",
     "vi": "<p>Hai cách phân loại <em>định tính</em> có liên hệ không? Ví dụ: phong cách quỹ (Growth/Value) có độc lập với quy mô (Large/Small)? Quan sát 200 quỹ như bảng trên.</p><p><strong>Bước 1 — tần suất kỳ vọng khi độc lập:</strong> E = (tổng hàng × tổng cột)/tổng chung. E(Large, Growth) = 120 × 100/200 = 60; tương tự 60, 40, 40.</p><p><strong>Bước 2 — thống kê:</strong> χ² = Σ(O − E)²/E = 1,67 + 1,67 + 2,5 + 2,5 = <strong>8,33</strong>.</p><p><strong>Bước 3 — kết luận:</strong> df = (số hàng − 1)(số cột − 1) = 1; giá trị tới hạn 5% là 3,84. Vì 8,33 &gt; 3,84, <strong>bác bỏ tính độc lập</strong> — phong cách và quy mô có liên hệ (quỹ lớn thiên về Growth trong mẫu này). Phần dư chuẩn hóa (O − E)/√E chỉ ra <em>ô nào</em> tạo ra kết quả.</p><p><strong>Tham số vs phi tham số:</strong> kiểm định tham số (t, z, F) giả định một phân phối và kiểm định tham số của nó. Kiểm định phi tham số dùng khi dữ liệu dạng hạng/thứ bậc, mẫu nhỏ không chuẩn, hoặc outlier phá hỏng kiểm định dựa trên mean. Cặp đôi tiêu biểu: tương quan Pearson (tham số, kiểm định bằng t = r√(n−2)/√(1−r²)) vs <strong>tương quan hạng Spearman</strong> — tính trên <em>thứ hạng</em>, bền vững với outlier và mọi quan hệ đơn điệu phi tuyến.</p>"
    }
   ],
   "formulas": [
    [
     "t-test of correlation",
     "t = r√(n−2) / √(1−r²)",
     "df = n − 2"
    ],
    [
     "Chi-square independence",
     "χ² = ΣΣ (Oij − Eij)² / Eij",
     "df = (r − 1)(c − 1)"
    ],
    [
     "Expected cell frequency",
     "Eij = (row total × column total) / grand total",
     ""
    ],
    [
     "Standardized residual",
     "(Oij − Eij) / √Eij",
     "Shows which cells drive the rejection"
    ]
   ]
  },
  {
   "title": "Simple Linear Regression",
   "sections": [
    {
     "h": "The simple linear regression model",
     "en": "<p>Simple linear regression explains a <strong>dependent variable Y</strong> with one <strong>independent variable X</strong>:</p><p style=\"text-align:center\"><strong>Y<sub>i</sub> = b₀ + b₁X<sub>i</sub> + ε<sub>i</sub></strong></p><p>Estimation by <strong>least squares</strong> minimizes the sum of squared residuals. The estimated slope and intercept:</p><p style=\"text-align:center\"><strong>b̂₁ = Cov(X,Y) / Var(X)</strong>&nbsp;&nbsp;&nbsp;&nbsp;<strong>b̂₀ = Ȳ − b̂₁X̄</strong></p><p>The regression line always passes through the point (X̄, Ȳ). Interpretation: b₁ = expected change in Y per one-unit change in X; b₀ = expected Y when X = 0 (often economically meaningless — do not over-interpret).</p><p><strong>Four assumptions</strong> (exam favorite): (1) <em>linearity</em> — the true relationship between Y and X is linear; (2) <em>homoskedasticity</em> — the variance of ε is constant for all observations (violations = heteroskedasticity); (3) <em>independence</em> — the errors are uncorrelated across observations; (4) <em>normality</em> — the errors are normally distributed. Residual plots are the standard diagnostic: funnel shapes signal heteroskedasticity; patterns over time signal dependence; curvature signals non-linearity.</p><p><strong>Functional forms</strong> handle non-linear data: log-lin (ln Y on X: slope ≈ relative change in Y per unit X), lin-log (Y on ln X), and log-log (ln Y on ln X: slope = elasticity, the % change in Y for a 1% change in X).</p>",
     "vi": "<p>Hồi quy tuyến tính đơn giải thích <strong>biến phụ thuộc Y</strong> bằng một <strong>biến độc lập X</strong>: Y<sub>i</sub> = b₀ + b₁X<sub>i</sub> + ε<sub>i</sub>. Ước lượng bằng <strong>bình phương nhỏ nhất</strong> — tối thiểu tổng bình phương phần dư. Hệ số ước lượng:</p><p style=\"text-align:center\"><strong>b̂₁ = Cov(X,Y) / Var(X)</strong>&nbsp;&nbsp;&nbsp;&nbsp;<strong>b̂₀ = Ȳ − b̂₁X̄</strong></p><p>Đường hồi quy luôn đi qua điểm (X̄, Ȳ). Diễn giải: b₁ = mức thay đổi kỳ vọng của Y khi X tăng 1 đơn vị; b₀ = Y kỳ vọng khi X = 0 (thường không có ý nghĩa kinh tế — đừng diễn giải quá đà).</p><p><strong>Bốn giả định</strong> (rất hay thi): (1) <em>tuyến tính</em>; (2) <em>phương sai sai số không đổi</em> (vi phạm = heteroskedasticity); (3) <em>sai số độc lập</em> giữa các quan sát; (4) <em>sai số phân phối chuẩn</em>. Đồ thị phần dư là công cụ chẩn đoán chuẩn: hình phễu → heteroskedasticity; mẫu hình theo thời gian → sai số phụ thuộc; độ cong → phi tuyến.</p><p><strong>Các dạng hàm</strong> xử lý dữ liệu phi tuyến: log-lin (ln Y theo X), lin-log (Y theo ln X), log-log (ln Y theo ln X: hệ số góc là độ co giãn — % thay đổi của Y khi X thay đổi 1%).</p>"
    },
    {
     "h": "Goodness of fit, inference & prediction",
     "en": "<p><strong>Decomposing variation:</strong> SST (total, Σ(Y−Ȳ)²) = SSR (explained by the regression) + SSE (residual). From these:</p><ul><li><strong>Coefficient of determination R² = SSR/SST</strong> — the share of Y’s variation the model explains. In <em>simple</em> regression, R² = r², the squared correlation between X and Y.</li><li><strong>Standard error of estimate (SEE)</strong> = √[SSE/(n−2)] = √MSE — the typical size of a residual; smaller = better fit.</li><li><strong>ANOVA F-test:</strong> F = MSR/MSE with 1 and n−2 degrees of freedom tests whether the slope is zero. In simple regression, F = t², so the F-test and the slope t-test always agree.</li></ul><p><strong>Inference on the slope:</strong> t = (b̂₁ − hypothesized b₁)/s<sub>b̂₁</sub> with n − 2 degrees of freedom; a confidence interval is b̂₁ ± t<sub>crit</sub> × s<sub>b̂₁</sub>. <strong>Prediction:</strong> Ŷ = b̂₀ + b̂₁X<sub>f</sub>. The <em>prediction interval</em> for an individual observation is wider than the confidence interval for the mean of Y, and both widen as X<sub>f</sub> moves away from X̄. Extrapolating far outside the sample range of X is unreliable.</p>",
     "vi": "<p><strong>Phân rã biến thiên:</strong> SST (tổng, Σ(Y−Ȳ)²) = SSR (phần hồi quy giải thích) + SSE (phần dư). Từ đó:</p><ul><li><strong>Hệ số xác định R² = SSR/SST</strong> — tỷ lệ biến thiên của Y mà mô hình giải thích. Trong hồi quy <em>đơn</em>, R² = r² — bình phương hệ số tương quan giữa X và Y.</li><li><strong>Sai số chuẩn của ước lượng (SEE)</strong> = √[SSE/(n−2)] = √MSE — độ lớn điển hình của phần dư; càng nhỏ mô hình khớp càng tốt.</li><li><strong>Kiểm định F (ANOVA):</strong> F = MSR/MSE với bậc tự do 1 và n−2, kiểm định hệ số góc bằng 0. Trong hồi quy đơn, F = t² nên kiểm định F và kiểm định t trên hệ số góc luôn cho cùng kết luận.</li></ul><p><strong>Suy diễn về hệ số góc:</strong> t = (b̂₁ − b₁ giả định)/s<sub>b̂₁</sub> với df = n − 2; khoảng tin cậy: b̂₁ ± t<sub>tới hạn</sub> × s<sub>b̂₁</sub>. <strong>Dự báo:</strong> Ŷ = b̂₀ + b̂₁X<sub>f</sub>. <em>Khoảng dự báo</em> cho một quan sát riêng lẻ rộng hơn khoảng tin cậy cho trung bình của Y; cả hai càng rộng khi X<sub>f</sub> càng xa X̄. Ngoại suy xa ngoài khoảng dữ liệu mẫu là không đáng tin.</p>"
    },
    {
     "h": "The regression picture, the ANOVA table, and the assumptions",
     "en": "<p>One scatter plot carries the whole module:</p><svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Simple linear regression\">\n<text x=\"360\" y=\"24\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#1B2438\">Simple linear regression: fitted line, residuals, and what R² decomposes</text>\n<line x1=\"70\" y1=\"270\" x2=\"440\" y2=\"270\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"270\" x2=\"70\" y2=\"50\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"255\" y=\"298\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#5B6577\">X (independent)</text>\n<text x=\"34\" y=\"160\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#5B6577\" transform=\"rotate(-90 34 160)\">Y (dependent)</text>\n<line x1=\"80\" y1=\"248\" x2=\"430\" y2=\"80\" stroke=\"#5457E0\" stroke-width=\"2.5\"/>\n<text x=\"330\" y=\"82\" font-family=\"JetBrains Mono,monospace\" font-size=\"12\" fill=\"#4338CA\">Ŷ = b₀ + b₁X</text>\n<g fill=\"#8B5CF6\">\n<circle cx=\"110\" cy=\"225\" r=\"5\"/><circle cx=\"150\" cy=\"240\" r=\"5\"/><circle cx=\"185\" cy=\"195\" r=\"5\"/><circle cx=\"220\" cy=\"210\" r=\"5\"/><circle cx=\"250\" cy=\"160\" r=\"5\"/><circle cx=\"285\" cy=\"185\" r=\"5\"/><circle cx=\"315\" cy=\"130\" r=\"5\"/><circle cx=\"350\" cy=\"150\" r=\"5\"/><circle cx=\"385\" cy=\"95\" r=\"5\"/><circle cx=\"405\" cy=\"120\" r=\"5\"/>\n</g>\n<line x1=\"285\" y1=\"185\" x2=\"285\" y2=\"150\" stroke=\"#DC4848\" stroke-width=\"2\"/>\n<text x=\"292\" y=\"174\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#DC4848\" font-weight=\"600\">residual e = Y − Ŷ</text>\n<line x1=\"70\" y1=\"168\" x2=\"440\" y2=\"168\" stroke=\"#0F9573\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/>\n<text x=\"78\" y=\"162\" font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#0F9573\">Ȳ</text>\n<!-- SST decomposition bar -->\n<text x=\"580\" y=\"90\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1B2438\">SST = SSR + SSE</text>\n<rect x=\"490\" y=\"110\" width=\"180\" height=\"34\" rx=\"7\" fill=\"#5457E0\"/>\n<text x=\"580\" y=\"132\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#fff\" font-weight=\"600\">Total variation (SST)</text>\n<rect x=\"490\" y=\"162\" width=\"122\" height=\"34\" rx=\"7\" fill=\"#0F9573\"/>\n<text x=\"551\" y=\"184\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#fff\" font-weight=\"600\">Explained (SSR)</text>\n<rect x=\"616\" y=\"162\" width=\"54\" height=\"34\" rx=\"7\" fill=\"#DC4848\"/>\n<text x=\"643\" y=\"184\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#fff\" font-weight=\"600\">SSE</text>\n<text x=\"580\" y=\"222\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"12.5\" fill=\"#4338CA\">R² = SSR / SST</text>\n<text x=\"580\" y=\"244\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">here ≈ 68% of Y's variation</text>\n<text x=\"580\" y=\"260\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">is explained by X</text>\n<text x=\"360\" y=\"328\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#4338CA\" font-weight=\"600\">OLS chooses b₀ and b₁ to minimize the sum of squared residuals (SSE).</text>\n</svg><p><strong>The ANOVA table</strong> organizes the decomposition (example: n = 36 monthly observations, regressing a fund's excess return on the market's):</p><table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Source</th><th style=\"padding:7px;border:1px solid #D6DAFB\">df</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Sum of squares</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Mean square</th><th style=\"padding:7px;border:1px solid #D6DAFB\">F</th></tr><tr><td style=\"padding:6px;border:1px solid #E5E9F2\">Regression</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">1</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">SSR = 680</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">MSR = 680</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\" rowspan=\"2\"><strong>F = 680/10 = 68</strong></td></tr><tr><td style=\"padding:6px;border:1px solid #E5E9F2\">Error</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">n − 2 = 34</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">SSE = 340</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">MSE = 10</td></tr><tr style=\"background:#F4F6FB\"><td style=\"padding:6px;border:1px solid #E5E9F2\">Total</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">n − 1 = 35</td><td style=\"padding:6px;border:1px solid #E5E9F2;text-align:center\">SST = 1,020</td><td style=\"padding:6px;border:1px solid #E5E9F2\" colspan=\"2\"></td></tr></table><p>From the table: R² = 680/1,020 = <strong>0.667</strong>; the standard error of estimate SEE = √MSE = √10 = 3.16 (the typical residual size); F = 68 far exceeds the 5% critical value (~4.13), so the regression is significant. In <em>simple</em> regression F duplicates the slope's t-test exactly: F = t², so t = √68 ≈ 8.25. In simple regression, R² is also just the squared correlation between X and Y: R² = r².</p><p><strong>The four assumptions</strong> — and what their violation looks like on a residual plot: (1) <em>linearity</em> — a curved residual pattern means the true relation isn't linear; (2) <em>homoskedasticity</em> — a funnel/megaphone shape (residual spread growing with X) is heteroskedasticity; (3) <em>independence of errors</em> — residuals that trend or oscillate signal serial correlation, common in time series; (4) <em>normality of errors</em> — needed for valid small-sample t and F inference. Diagnose all four by <em>plotting residuals</em>, not by staring at R².</p><p><strong>Functional forms:</strong> when the relation is curved, transform: log-lin (ln Y on X — slope = % change in Y per unit of X), lin-log (Y on ln X), and log-log (ln Y on ln X — the slope is an <em>elasticity</em>). Choose the form with residuals that look random, not the highest R² across different Y definitions (those R²s are not comparable).</p>",
     "vi": "<p>Một đồ thị phân tán chứa trọn module (xem hình).</p><p><strong>Bảng ANOVA</strong> tổ chức phép phân rã (ví dụ n = 36 quan sát tháng, hồi quy lợi suất vượt trội của quỹ theo thị trường): SSR = 680 (df = 1), SSE = 340 (df = 34), SST = 1.020 (df = 35). Suy ra: R² = 680/1.020 = <strong>0,667</strong>; SEE = √MSE = √10 = 3,16 (cỡ phần dư điển hình); F = MSR/MSE = 68 vượt xa giá trị tới hạn 5% (~4,13) → hồi quy có ý nghĩa. Trong hồi quy <em>đơn</em>, F trùng đúng kiểm định t của hệ số góc: F = t², nên t = √68 ≈ 8,25; và R² = r² (bình phương hệ số tương quan X, Y).</p><p><strong>Bốn giả định</strong> — và dấu hiệu vi phạm trên đồ thị phần dư: (1) <em>tuyến tính</em> — phần dư cong nghĩa là quan hệ thật không tuyến tính; (2) <em>phương sai thuần nhất</em> — hình phễu/loa (độ phân tán phần dư tăng theo X) là heteroskedasticity; (3) <em>sai số độc lập</em> — phần dư có xu hướng hoặc dao động tuần hoàn báo hiệu tự tương quan, phổ biến với chuỗi thời gian; (4) <em>sai số chuẩn</em> — cần cho suy luận t, F mẫu nhỏ. Chẩn đoán cả bốn bằng <em>đồ thị phần dư</em>, không phải bằng cách nhìn R².</p><p><strong>Dạng hàm:</strong> khi quan hệ cong, biến đổi: log-lin (ln Y theo X — hệ số góc = % thay đổi của Y trên mỗi đơn vị X), lin-log (Y theo ln X), log-log (ln Y theo ln X — hệ số góc là <em>độ co giãn</em>). Chọn dạng có phần dư trông ngẫu nhiên, không phải dạng có R² cao nhất giữa các định nghĩa Y khác nhau (các R² đó không so sánh được).</p>"
    }
   ],
   "formulas": [
    [
     "Slope",
     "b1 = Cov(X,Y) / Var(X)",
     "Intercept: b0 = Ȳ − b1·X̄"
    ],
    [
     "R-squared",
     "R² = SSR / SST",
     "Simple regression: R² = r²"
    ],
    [
     "SEE",
     "SEE = √(SSE / (n − 2))",
     "= √MSE; smaller = tighter fit"
    ],
    [
     "F-statistic",
     "F = MSR / MSE",
     "df 1 and n−2; F = t² in simple regression"
    ],
    [
     "t-test of slope",
     "t = (b̂1 − b1) / s(b̂1)",
     "df = n − 2"
    ],
    [
     "Intercept",
     "b₀ = Ȳ − b₁X̄",
     "The fitted line always passes through (X̄, Ȳ)"
    ],
    [
     "ANOVA identity",
     "SST = SSR + SSE",
     "R² = SSR/SST; in simple regression F = t² and R² = r²"
    ],
    [
     "Prediction",
     "Ŷ = b₀ + b₁ × X_f",
     "Interval: Ŷ ± t × s_f (s_f > SEE — adds estimation error)"
    ]
   ]
  },
  {
   "title": "Introduction to Big Data Techniques",
   "sections": [
    {
     "h": "Big data, fintech & machine learning — the vocabulary",
     "en": "<ul><li><strong>Big data</strong> is characterized by the 3 Vs — <em>volume</em> (size), <em>velocity</em> (speed, real-time), <em>variety</em> (structured tables to text, images, sensor feeds) — plus <em>veracity</em> (reliability) as the practical fourth. Sources: traditional market/financial data, plus <strong>alternative data</strong> generated by individuals (social media, reviews), businesses (transactions, exhaust data), and sensors (satellite images, IoT, geolocation). Ethical caution: alternative data can shade into material nonpublic or personal information.</li><li><strong>Machine learning</strong> learns patterns from data without explicit programming. <strong>Supervised learning</strong> trains on <em>labeled</em> data to predict an output — regression (continuous target) or classification (categories, e.g., default / no default). <strong>Unsupervised learning</strong> finds structure in <em>unlabeled</em> data — clustering, dimension reduction. <strong>Deep learning</strong> uses multi-layer neural networks for complex tasks (image, speech, NLP).</li><li><strong>Overfitting</strong> — a model that memorizes noise in training data and fails on new data — is the central ML risk; it is managed by splitting data into training, validation, and test sets and by penalizing complexity.</li><li><strong>Natural language processing (NLP)</strong> turns text/speech into data — e.g., scoring sentiment of earnings calls or news flow.</li><li>The <strong>data-science workflow:</strong> capture → curation (cleaning) → storage → search → transfer; visualization and exploration precede modeling. In finance these tools power algorithmic trading, robo-advising, credit scoring, fraud detection, and risk analysis.</li></ul>",
     "vi": "<ul><li><strong>Big data</strong> đặc trưng bởi 3 chữ V — <em>volume</em> (khối lượng), <em>velocity</em> (tốc độ, thời gian thực), <em>variety</em> (từ bảng có cấu trúc đến văn bản, hình ảnh, cảm biến) — cộng thêm <em>veracity</em> (độ tin cậy). Nguồn: dữ liệu thị trường/tài chính truyền thống, cộng <strong>dữ liệu thay thế</strong> từ cá nhân (mạng xã hội, đánh giá), doanh nghiệp (giao dịch, dữ liệu \"khí thải\" hoạt động), và cảm biến (ảnh vệ tinh, IoT, định vị). Lưu ý đạo đức: dữ liệu thay thế có thể chạm vào thông tin trọng yếu chưa công bố hoặc thông tin cá nhân.</li><li><strong>Machine learning</strong> học mẫu hình từ dữ liệu mà không cần lập trình tường minh. <strong>Học có giám sát</strong> huấn luyện trên dữ liệu <em>có nhãn</em> để dự đoán đầu ra — hồi quy (biến liên tục) hoặc phân loại (nhóm, ví dụ vỡ nợ / không vỡ nợ). <strong>Học không giám sát</strong> tìm cấu trúc trong dữ liệu <em>không nhãn</em> — phân cụm, giảm chiều. <strong>Deep learning</strong> dùng mạng nơ-ron nhiều lớp cho nhiệm vụ phức tạp (hình ảnh, giọng nói, NLP).</li><li><strong>Overfitting</strong> — mô hình \"học vẹt\" nhiễu trong dữ liệu huấn luyện và thất bại trên dữ liệu mới — là rủi ro trung tâm của ML; kiểm soát bằng cách chia dữ liệu train/validation/test và phạt độ phức tạp.</li><li><strong>NLP</strong> biến văn bản/giọng nói thành dữ liệu — ví dụ chấm điểm cảm xúc của earnings call hay dòng tin tức.</li><li><strong>Quy trình khoa học dữ liệu:</strong> thu thập → làm sạch → lưu trữ → truy vấn → truyền tải; trực quan hóa và khám phá đi trước mô hình hóa. Trong tài chính, các công cụ này vận hành giao dịch thuật toán, robo-advisor, chấm điểm tín dụng, phát hiện gian lận, phân tích rủi ro.</li></ul>"
    },
    {
     "h": "The ML map and the data-science workflow",
     "en": "<p>Level 1 tests <em>vocabulary and mapping</em>, not algorithms. Learn the tree:</p><svg viewBox=\"0 0 720 300\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Machine learning map\">\n<text x=\"360\" y=\"24\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"15\" font-weight=\"700\" fill=\"#1B2438\">The machine-learning map for Level 1</text>\n<rect x=\"280\" y=\"44\" width=\"160\" height=\"40\" rx=\"10\" fill=\"#5457E0\"/>\n<text x=\"360\" y=\"69\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"13.5\" fill=\"#fff\" font-weight=\"700\">Machine Learning</text>\n<g stroke=\"#5B6577\" stroke-width=\"1.8\"><line x1=\"360\" y1=\"84\" x2=\"140\" y2=\"122\"/><line x1=\"360\" y1=\"84\" x2=\"360\" y2=\"122\"/><line x1=\"360\" y1=\"84\" x2=\"580\" y2=\"122\"/></g>\n<rect x=\"45\" y=\"124\" width=\"190\" height=\"42\" rx=\"10\" fill=\"#E6F6F0\" stroke=\"#0F9573\" stroke-width=\"1.5\"/>\n<text x=\"140\" y=\"143\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0F9573\">Supervised</text>\n<text x=\"140\" y=\"159\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#5B6577\">labeled target known</text>\n<rect x=\"265\" y=\"124\" width=\"190\" height=\"42\" rx=\"10\" fill=\"#EEF0FE\" stroke=\"#5457E0\" stroke-width=\"1.5\"/>\n<text x=\"360\" y=\"143\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4338CA\">Unsupervised</text>\n<text x=\"360\" y=\"159\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#5B6577\">no labels — find structure</text>\n<rect x=\"485\" y=\"124\" width=\"190\" height=\"42\" rx=\"10\" fill=\"#FFF8EC\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n<text x=\"580\" y=\"143\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#B45309\">Deep learning</text>\n<text x=\"580\" y=\"159\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#5B6577\">neural nets · RL agents</text>\n<g font-family=\"Inter,sans-serif\" font-size=\"11.5\" fill=\"#1B2438\">\n<rect x=\"45\" y=\"182\" width=\"190\" height=\"52\" rx=\"9\" fill=\"#fff\" stroke=\"#BEE5D8\"/>\n<text x=\"140\" y=\"203\" text-anchor=\"middle\">• Regression (continuous Y)</text>\n<text x=\"140\" y=\"221\" text-anchor=\"middle\">• Classification (categories)</text>\n<rect x=\"265\" y=\"182\" width=\"190\" height=\"52\" rx=\"9\" fill=\"#fff\" stroke=\"#D6DAFB\"/>\n<text x=\"360\" y=\"203\" text-anchor=\"middle\">• Clustering (group similars)</text>\n<text x=\"360\" y=\"221\" text-anchor=\"middle\">• Dimension reduction</text>\n<rect x=\"485\" y=\"182\" width=\"190\" height=\"52\" rx=\"9\" fill=\"#fff\" stroke=\"#F3E3C4\"/>\n<text x=\"580\" y=\"203\" text-anchor=\"middle\">• Image/speech, NLP</text>\n<text x=\"580\" y=\"221\" text-anchor=\"middle\">• Complex non-linear tasks</text>\n</g>\n<text x=\"360\" y=\"270\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#4338CA\" font-weight=\"600\">Overfitting = learning noise: fix with simpler models, penalties (regularization), and out-of-sample testing.</text>\n</svg><p><strong>Matching problems to methods</strong> (the exam's favorite format): predict next quarter's default <em>probability</em> from labeled history → supervised <em>classification</em>; forecast a continuous credit spread → supervised <em>regression</em>; group thousands of stocks into \"similar\" baskets with no labels → <em>clustering</em>; compress 50 correlated indicators into 3 factors → <em>dimension reduction</em> (e.g., PCA); train an agent that learns trade execution by reward and penalty → <em>reinforcement learning</em>.</p><p><strong>Big data is defined by the 3 Vs:</strong> Volume (size), Velocity (speed — real-time feeds), Variety (structured tables vs unstructured text, images, audio). Sources: traditional (filings, market data) plus <em>alternative data</em> — generated by individuals (social media, reviews), business processes (credit-card transactions), and sensors (satellite images, GPS, IoT). Alternative data raises a flag the exam likes: scraping personal information creates <em>privacy and legal risk</em>.</p><p><strong>The data-science workflow:</strong> capture → curate (clean, ensure quality) → store → search → transfer → analyze. For text specifically, natural language processing runs: collect raw text → cleanse (remove html, punctuation) → tokenize and normalize (lowercase, stem/lemmatize, remove stop words) → convert to structured features (word counts, sentiment scores) → feed a model. Typical finance uses: sentiment from earnings calls, news-flow signals, compliance monitoring — all turning unstructured text into model-ready inputs.</p>",
     "vi": "<p>Level 1 kiểm tra <em>từ vựng và khả năng ánh xạ</em>, không phải thuật toán. Hãy thuộc cây phân loại (hình trên).</p><p><strong>Ghép bài toán với phương pháp</strong> (dạng câu hỏi ưa thích của đề): dự đoán <em>xác suất</em> vỡ nợ quý tới từ lịch sử có nhãn → supervised <em>classification</em>; dự báo spread tín dụng liên tục → supervised <em>regression</em>; gom hàng nghìn cổ phiếu thành các rổ \"tương đồng\" không nhãn → <em>clustering</em>; nén 50 chỉ báo tương quan thành 3 nhân tố → <em>dimension reduction</em> (PCA); huấn luyện agent học cách khớp lệnh qua thưởng–phạt → <em>reinforcement learning</em>.</p><p><strong>Big data định nghĩa bằng 3 chữ V:</strong> Volume (khối lượng), Velocity (tốc độ — dữ liệu thời gian thực), Variety (bảng có cấu trúc vs văn bản, ảnh, âm thanh phi cấu trúc). Nguồn: truyền thống (báo cáo, dữ liệu thị trường) cộng <em>dữ liệu thay thế</em> — từ cá nhân (mạng xã hội, review), từ quy trình kinh doanh (giao dịch thẻ), từ cảm biến (ảnh vệ tinh, GPS, IoT). Dữ liệu thay thế kèm cờ đỏ đề hay hỏi: thu thập thông tin cá nhân tạo <em>rủi ro quyền riêng tư và pháp lý</em>.</p><p><strong>Quy trình khoa học dữ liệu:</strong> capture → curate (làm sạch, bảo đảm chất lượng) → store → search → transfer → analyze. Riêng với văn bản, NLP chạy: thu thập văn bản thô → cleanse (bỏ html, dấu câu) → tokenize và chuẩn hóa (viết thường, stem/lemmatize, bỏ stop words) → chuyển thành đặc trưng có cấu trúc (đếm từ, điểm cảm xúc) → đưa vào mô hình. Ứng dụng tài chính điển hình: cảm xúc từ earnings call, tín hiệu dòng tin tức, giám sát tuân thủ.</p>"
    }
   ]
  }
 ],
 "vocab": [
  [
   "discount rate",
   "The rate used to convert future cash flows into present value.",
   "tỷ suất chiết khấu"
  ],
  [
   "annuity",
   "A finite series of equal payments at regular intervals.",
   "niên kim — chuỗi thanh toán đều"
  ],
  [
   "perpetuity",
   "A never-ending stream of equal payments.",
   "niên kim vĩnh viễn"
  ],
  [
   "standard deviation",
   "Square root of variance; measures total dispersion of returns.",
   "độ lệch chuẩn"
  ],
  [
   "skewness",
   "Asymmetry of a distribution.",
   "độ xiên / độ bất đối xứng"
  ],
  [
   "kurtosis",
   "The degree of tail fatness of a distribution.",
   "độ nhọn (đuôi dày/mỏng)"
  ],
  [
   "covariance",
   "How two variables move together (unbounded scale).",
   "hiệp phương sai"
  ],
  [
   "p-value",
   "Smallest significance level at which the null can be rejected.",
   "giá trị p"
  ],
  [
   "Type I error",
   "Rejecting a true null hypothesis (probability = α).",
   "sai lầm loại I"
  ],
  [
   "survivorship bias",
   "Bias from excluding failed entities from a data sample.",
   "thiên lệch kẻ sống sót"
  ],
  [
   "standard error",
   "Standard deviation of a sample statistic (e.g., of the sample mean).",
   "sai số chuẩn"
  ],
  [
   "degrees of freedom",
   "Number of independent values used to compute a statistic.",
   "bậc tự do"
  ],
  [
   "harmonic mean",
   "Average price paid when equal dollar amounts are invested at different prices; AM &gt; GM &gt; HM",
   "Trung bình điều hòa — giá vốn bình quân khi mua đều tay; luôn AM &gt; GM &gt; HM"
  ],
  [
   "shortfall risk",
   "Probability that portfolio return falls below a minimum acceptable level",
   "Rủi ro hụt chuẩn — xác suất lợi suất rơi dưới mức tối thiểu chấp nhận được"
  ],
  [
   "safety-first ratio (Roy)",
   "[E(Rp) − RL]/σp; choose the portfolio with the highest value",
   "Tỷ số an toàn trước hết: [E(Rp) − RL]/σp; chọn danh mục có giá trị cao nhất"
  ],
  [
   "Monte Carlo simulation",
   "Generating thousands of random scenarios from assumed distributions to study an outcome’s distribution",
   "Mô phỏng hàng nghìn kịch bản ngẫu nhiên từ phân phối giả định để nghiên cứu phân phối kết quả"
  ],
  [
   "bootstrapping",
   "Building a sampling distribution by resampling observed data with replacement",
   "Dựng phân phối mẫu bằng cách tái chọn mẫu có hoàn lại từ dữ liệu quan sát"
  ],
  [
   "residual",
   "The difference between an observed Y and the regression’s fitted value",
   "Phần dư — chênh lệch giữa Y quan sát và giá trị ước lượng của hồi quy"
  ],
  [
   "coefficient of determination (R²)",
   "Share of the dependent variable’s variation explained by the regression; R² = r² in simple regression",
   "Hệ số xác định — tỷ lệ biến thiên của Y được mô hình giải thích; bằng r² trong hồi quy đơn"
  ],
  [
   "standard error of estimate (SEE)",
   "√(SSE/(n−2)); the typical size of a regression residual",
   "Sai số chuẩn của ước lượng — độ lớn điển hình của phần dư"
  ],
  [
   "heteroskedasticity",
   "Non-constant variance of regression errors; funnel-shaped residual plots",
   "Phương sai sai số thay đổi — đồ thị phần dư hình phễu"
  ],
  [
   "overfitting",
   "A model that memorizes training noise and fails on new data",
   "Mô hình học vẹt nhiễu của dữ liệu huấn luyện, thất bại trên dữ liệu mới"
  ],
  [
   "supervised learning",
   "Machine learning trained on labeled data to predict outputs",
   "Học máy có giám sát — huấn luyện trên dữ liệu có nhãn để dự đoán đầu ra"
  ],
  [
   "contingency table",
   "A grid of observed counts for two categorical variables, tested with chi-square",
   "Bảng chéo tần suất của hai biến định tính, kiểm định bằng chi bình phương"
  ],
  [
   "annuity due",
   "Payments at period start; worth ordinary annuity × (1+r)",
   "Annuity trả đầu kỳ; giá trị = annuity thường × (1+r)"
  ],
  [
   "amortization schedule",
   "Payment split into interest on the balance and principal repayment",
   "Lịch trả góp: tách lãi trên dư nợ và phần trả gốc"
  ],
  [
   "Rule of 72",
   "Doubling time ≈ 72 / interest rate in percent",
   "Thời gian gấp đôi ≈ 72 / lãi suất (%)"
  ],
  [
   "odds for an event",
   "P(E) / (1 − P(E))",
   "Tỷ lệ cược ủng hộ = P(E)/(1−P(E))"
  ],
  [
   "stratified random sampling",
   "Random draws within population subgroups; guarantees representation",
   "Chọn ngẫu nhiên trong từng tầng; bảo đảm tính đại diện"
  ],
  [
   "survivorship / look-ahead bias",
   "Testing only surviving funds; using data not yet available at decision time",
   "Chỉ test quỹ còn sống; dùng dữ liệu chưa có tại thời điểm quyết định"
  ],
  [
   "data snooping",
   "Repeated testing of one dataset until spurious significance appears",
   "Thử đi thử lại một bộ dữ liệu tới khi ra ý nghĩa giả"
  ],
  [
   "bootstrap vs jackknife",
   "Resampling with replacement vs leave-one-out recomputation",
   "Tái chọn mẫu có hoàn lại vs bỏ-một-quan-sát"
  ],
  [
   "Type I vs Type II error",
   "Rejecting a true null (α) vs failing to reject a false null (β)",
   "Bác bỏ null đúng (α) vs không bác bỏ null sai (β)"
  ],
  [
   "power of a test",
   "1 − β: probability of detecting a real effect",
   "1 − β: khả năng phát hiện hiệu ứng thật"
  ],
  [
   "p-value",
   "Smallest α at which the null is rejected; p < α → reject",
   "Mức α nhỏ nhất để bác bỏ null; p < α → bác bỏ"
  ],
  [
   "one- vs two-tailed test",
   "All of α in one tail vs split α/2 per tail",
   "Toàn bộ α một phía vs chia α/2 mỗi phía"
  ]
 ],
 "quiz": [
  {
   "q": "An investment offers a stated annual rate of 8% compounded quarterly. The effective annual rate (EAR) is closest to:",
   "opts": [
    "8.00%",
    "8.24%",
    "8.30%"
   ],
   "ans": 1,
   "en": "B is correct. EAR = (1 + 0.08/4)^4 − 1 = (1.02)^4 − 1 = 1.08243 − 1 = 8.24%. More frequent compounding always raises the effective rate above the stated rate.",
   "vi": "Đáp án B. EAR = (1 + 0.08/4)^4 − 1 = (1.02)^4 − 1 = 8.24%. Ghép lãi càng nhiều lần thì lãi suất hiệu dụng càng cao hơn lãi suất công bố."
  },
  {
   "q": "A fund returns +50% in year 1 and −50% in year 2. Its geometric mean annual return is closest to:",
   "opts": [
    "0.0%",
    "−13.4%",
    "−25.0%"
   ],
   "ans": 1,
   "en": "B is correct. Geometric mean = [(1.50)(0.50)]^(1/2) − 1 = (0.75)^0.5 − 1 = 0.866 − 1 = −13.4%. The arithmetic mean would be 0%, illustrating why geometric mean is the right measure of multi-period compound performance.",
   "vi": "Đáp án B. Trung bình nhân = [(1.50)(0.50)]^(1/2) − 1 = √0.75 − 1 = −13.4%. Trung bình cộng là 0%, cho thấy vì sao trung bình nhân mới đo đúng hiệu quả kép nhiều kỳ."
  },
  {
   "q": "Which measure is most appropriate for evaluating the skill of a portfolio manager who does not control the timing of client deposits and withdrawals?",
   "opts": [
    "Money-weighted rate of return",
    "Time-weighted rate of return",
    "Holding period return"
   ],
   "ans": 1,
   "en": "B is correct. The time-weighted return removes the distorting effect of external cash flows, which the manager does not control. The money-weighted (IRR) return reflects the investor’s experience because it is sensitive to the size and timing of cash flows.",
   "vi": "Đáp án B. TWR loại bỏ ảnh hưởng của dòng tiền ra/vào — thứ nhà quản lý không kiểm soát. MWR (IRR) phản ánh trải nghiệm của nhà đầu tư vì nhạy cảm với quy mô và thời điểm dòng tiền."
  },
  {
   "q": "A distribution of returns has a mean less than its median. The distribution is most likely:",
   "opts": [
    "negatively skewed.",
    "positively skewed.",
    "leptokurtic."
   ],
   "ans": 0,
   "en": "A is correct. With negative (left) skew, extreme losses pull the mean below the median: mean < median < mode. Positive skew is the opposite. Kurtosis describes tail fatness, not asymmetry.",
   "vi": "Đáp án A. Với xiên trái (negative skew), các khoản lỗ cực đoan kéo mean xuống dưới median: mean < median < mode. Xiên phải thì ngược lại. Kurtosis mô tả độ dày đuôi, không phải độ bất đối xứng."
  },
  {
   "q": "A researcher tests H₀: μ ≤ 0 versus Hₐ: μ > 0 at a 5% significance level and obtains a p-value of 0.03. The most appropriate conclusion is to:",
   "opts": [
    "fail to reject the null hypothesis.",
    "reject the null hypothesis.",
    "accept the alternative hypothesis as proven."
   ],
   "ans": 1,
   "en": "B is correct. Since the p-value (0.03) is less than α (0.05), the null is rejected. Note that hypothesis testing never \"proves\" the alternative — it only provides evidence against the null (C overstates the conclusion).",
   "vi": "Đáp án B. Vì p-value (0.03) nhỏ hơn α (0.05) nên bác bỏ H₀. Lưu ý kiểm định không bao giờ \"chứng minh\" Hₐ — chỉ cung cấp bằng chứng chống lại H₀ (đáp án C nói quá)."
  }
 ]
});
window.CFA.extra["quant"] = {
 "checks": [
  [
   {
    "q": "A deposit pays 8% annual interest, compounded quarterly. The effective annual rate (EAR) is closest to:",
    "opts": [
     "8.00%",
     "8.24%",
     "8.33%"
    ],
    "ans": 1,
    "en": "EAR = (1 + 0.08/4)⁴ − 1 = 1.02⁴ − 1 ≈ 8.24%.",
    "vi": "EAR = (1 + 0.08/4)⁴ − 1 ≈ 8,24%. Ghép lãi càng nhiều kỳ trong năm, EAR càng cao hơn lãi suất danh nghĩa."
   },
   {
    "q": "To forecast the expected return for next year (a single period), the most appropriate average of historical annual returns is the:",
    "opts": [
     "Geometric mean",
     "Arithmetic mean",
     "Harmonic mean"
    ],
    "ans": 1,
    "en": "The arithmetic mean is the best estimator of a single next-period return; the geometric mean measures realized multi-period compound performance.",
    "vi": "Trung bình cộng là ước lượng tốt nhất cho lợi suất một kỳ tới; trung bình nhân đo hiệu quả kép đã thực hiện qua nhiều kỳ."
   },
   {
    "q": "An investor deposits money into an account right before its worst sub-period. Compared with the TWR, the MWR will most likely be:",
    "opts": [
     "Higher",
     "Lower",
     "Identical"
    ],
    "ans": 1,
    "en": "MWR weights sub-periods by the money invested. Adding funds before a bad period overweights that period, dragging MWR below TWR.",
    "vi": "MWR gán trọng số theo số tiền đầu tư. Nạp tiền trước kỳ xấu làm kỳ đó chiếm tỷ trọng lớn, kéo MWR xuống dưới TWR."
   },
   {
    "q": "A stated annual rate of 12% compounded monthly implies an EAR closest to:",
    "opts": [
     "12.00%",
     "12.36%",
     "12.68%"
    ],
    "ans": 2,
    "en": "EAR = (1 + 0.12/12)¹² − 1 = 1.01¹² − 1 ≈ 12.68%.",
    "vi": "EAR = (1 + 0,12/12)¹² − 1 = 1,01¹² − 1 ≈ 12,68%."
   }
  ],
  [
   {
    "q": "Compared with an ordinary annuity of the same payments and rate, an annuity due has a present value that is:",
    "opts": [
     "Higher by a factor of (1 + r)",
     "Lower by a factor of (1 + r)",
     "Identical"
    ],
    "ans": 0,
    "en": "Annuity-due payments arrive one period earlier, so PV(due) = PV(ordinary) × (1 + r).",
    "vi": "Annuity due trả tiền đầu kỳ (sớm hơn 1 kỳ) nên PV lớn hơn: PV(due) = PV(ordinary) × (1 + r)."
   },
   {
    "q": "A preferred stock pays a fixed $4 annual dividend and trades at $50. Its implied required return is:",
    "opts": [
     "8.0%",
     "12.5%",
     "4.0%"
    ],
    "ans": 0,
    "en": "A perpetuity: r = D/P = 4/50 = 8%. Solving the pricing equation backward for r is the \"implied return\" skill this module tests.",
    "vi": "Perpetuity: r = D/P = 4/50 = 8%. Giải ngược phương trình định giá để tìm r chính là kỹ năng \"implied return\" của module này."
   },
   {
    "q": "A 5-year, 6% annual-pay loan of $100,000 has a payment of $23,739.64. Interest in year 2 is closest to:",
    "opts": [
     "$6,000",
     "$4,936",
     "$4,500"
    ],
    "ans": 1,
    "en": "Year-1 principal repaid = 23,739.64 − 6,000 = 17,739.64, so the year-2 opening balance is 82,260.36. Interest = 6% × 82,260.36 ≈ $4,936.",
    "vi": "Gốc trả năm 1 = 23.739,64 − 6.000 = 17.739,64, dư nợ đầu năm 2 là 82.260,36. Lãi = 6% × 82.260,36 ≈ 4.936 USD."
   },
   {
    "q": "An annuity due differs from an otherwise identical ordinary annuity in that its present value is:",
    "opts": [
     "Lower by a factor of (1 + r)",
     "Higher by a factor of (1 + r)",
     "The same"
    ],
    "ans": 1,
    "en": "Each payment arrives one period earlier, so every cash flow is discounted one period less: PV(due) = PV(ordinary) × (1 + r).",
    "vi": "Mỗi khoản trả đến sớm một kỳ nên được chiết khấu ít hơn một kỳ: PV(due) = PV(thường) × (1 + r)."
   }
  ],
  [
   {
    "q": "For a return distribution with positive (right) skew, the most likely ordering is:",
    "opts": [
     "Mean &gt; median &gt; mode",
     "Mode &gt; median &gt; mean",
     "Median &gt; mean &gt; mode"
    ],
    "ans": 0,
    "en": "A long right tail pulls the mean above the median, which sits above the mode: mean &gt; median &gt; mode.",
    "vi": "Đuôi phải dài kéo mean lên cao nhất: mean &gt; median &gt; mode. (Lệch trái thì ngược lại.)"
   },
   {
    "q": "A distribution with excess kurtosis greater than zero (leptokurtic) has:",
    "opts": [
     "Thinner tails than a normal distribution",
     "Fatter tails — extreme outcomes more likely than normal",
     "No tails"
    ],
    "ans": 1,
    "en": "Positive excess kurtosis means fatter tails and a more peaked center: extreme returns occur more often than the normal distribution predicts — a key risk warning.",
    "vi": "Excess kurtosis dương = đuôi dày hơn phân phối chuẩn → các cú sốc lớn xảy ra thường xuyên hơn mô hình chuẩn dự đoán. Rất quan trọng khi đánh giá rủi ro."
   },
   {
    "q": "A hedge fund strategy produces frequent small gains and occasional very large losses. Its return distribution most likely exhibits:",
    "opts": [
     "Positive skewness",
     "Negative skewness",
     "No skewness but low kurtosis"
    ],
    "ans": 1,
    "en": "Frequent small gains with a long left tail of large losses is the signature of negative (left) skew — typical of option-selling and carry strategies.",
    "vi": "Lãi nhỏ thường xuyên kèm đuôi trái dài của các khoản lỗ lớn là dấu hiệu xiên trái — điển hình của chiến lược bán quyền chọn và carry."
   },
   {
    "q": "For a positively skewed distribution, the most likely ordering is:",
    "opts": [
     "Mean < median < mode",
     "Mode < median < mean",
     "Median < mode < mean"
    ],
    "ans": 1,
    "en": "The mean is pulled toward the long right tail, the mode stays at the peak: mode < median < mean.",
    "vi": "Mean bị kéo về phía đuôi phải dài, mode ở đỉnh: mode < median < mean."
   }
  ],
  [
   {
    "q": "P(recession) = 0.3 with E(return | recession) = −5%; P(no recession) = 0.7 with E(return | no recession) = 10%. The unconditional expected return is:",
    "opts": [
     "5.5%",
     "2.5%",
     "7.0%"
    ],
    "ans": 0,
    "en": "Total probability rule for expected value: E(R) = 0.3 × (−5%) + 0.7 × 10% = −1.5% + 7% = 5.5%.",
    "vi": "Quy tắc kỳ vọng toàn phần: E(R) = 0,3 × (−5%) + 0,7 × 10% = 5,5%."
   },
   {
    "q": "Events A and B are independent, with P(A) = 0.5 and P(B) = 0.4. P(A and B) equals:",
    "opts": [
     "0.90",
     "0.20",
     "0.10"
    ],
    "ans": 1,
    "en": "For independent events the multiplication rule simplifies: P(AB) = P(A) × P(B) = 0.5 × 0.4 = 0.20.",
    "vi": "Với hai biến cố độc lập: P(AB) = P(A) × P(B) = 0,5 × 0,4 = 0,20."
   },
   {
    "q": "P(skilled) = 0.2; P(beat | skilled) = 0.8; P(beat | unskilled) = 0.4. Given a fund beat its benchmark, P(skilled | beat) is closest to:",
    "opts": [
     "0.16",
     "0.33",
     "0.48"
    ],
    "ans": 1,
    "en": "P(beat) = 0.2(0.8) + 0.8(0.4) = 0.48. Bayes: P(skilled|beat) = 0.16/0.48 = 1/3 ≈ 0.33.",
    "vi": "P(thắng) = 0,48. Bayes: 0,16/0,48 = 1/3 ≈ 0,33."
   },
   {
    "q": "An analyst must select 3 stocks from a list of 8 for equal weighting (order irrelevant). The number of possible portfolios is:",
    "opts": [
     "336",
     "56",
     "24"
    ],
    "ans": 1,
    "en": "Order doesn't matter → combinations: 8C3 = 8!/(5!3!) = 56. (336 = 8P3 would count ordered selections.)",
    "vi": "Không quan tâm thứ tự → tổ hợp: 8C3 = 56. (336 = 8P3 là chỉnh hợp có thứ tự.)"
   }
  ],
  [
   {
    "q": "Portfolio X: E(R) = 12%, σ = 14%. Portfolio Y: E(R) = 9%, σ = 8%. The minimum acceptable return is 5%. Using Roy’s safety-first criterion, an investor should choose:",
    "opts": [
     "Portfolio X (SFRatio = 0.50)",
     "Portfolio Y (SFRatio = 0.50)",
     "Either — both have the same SFRatio"
    ],
    "ans": 2,
    "en": "SFRatio(X) = (12 − 5)/14 = 0.50; SFRatio(Y) = (9 − 5)/8 = 0.50. Identical ratios mean the same (normal-distribution) probability of breaching the 5% threshold.",
    "vi": "SFRatio(X) = (12 − 5)/14 = 0,50; SFRatio(Y) = (9 − 5)/8 = 0,50. Hai tỷ số bằng nhau → xác suất thủng ngưỡng 5% như nhau (giả định phân phối chuẩn)."
   },
   {
    "q": "Two assets each have σ = 20%. They are combined 50/50 with correlation ρ = 0. The portfolio standard deviation is closest to:",
    "opts": [
     "20.0%",
     "14.1%",
     "10.0%"
    ],
    "ans": 1,
    "en": "σp² = 0.5²(400) + 0.5²(400) + 0 = 200 → σp = √200 ≈ 14.1%. Zero correlation cuts risk well below the 20% weighted average — diversification in numbers.",
    "vi": "σp² = 0,25×400 + 0,25×400 = 200 → σp ≈ 14,1%. Tương quan bằng 0 kéo rủi ro xuống hẳn dưới mức bình quân 20% — đa dạng hóa bằng con số."
   },
   {
    "q": "Two assets have σA = 12%, σB = 20%. Diversification benefit from combining them is greatest when their correlation equals:",
    "opts": [
     "+1.0",
     "0.0",
     "−1.0"
    ],
    "ans": 2,
    "en": "The lower the correlation, the greater the risk reduction; at ρ = −1 a weight mix exists that drives portfolio risk to zero.",
    "vi": "Tương quan càng thấp, giảm rủi ro càng lớn; tại ρ = −1 tồn tại tỷ trọng đưa rủi ro danh mục về 0."
   },
   {
    "q": "Portfolio X: E(R) = 10.4%, σ = 12.26%. Portfolio Y: E(R) = 9%, σ = 9%. With a threshold return of 2%, Roy's safety-first prefers:",
    "opts": [
     "X — higher expected return",
     "Y — higher safety-first ratio",
     "Either — the ratios are equal"
    ],
    "ans": 1,
    "en": "SFR(X) = 8.4/12.26 = 0.685; SFR(Y) = 7/9 = 0.778. Y has more standard deviations of cushion above the threshold, so it minimizes shortfall probability.",
    "vi": "SFR(X) = 0,685; SFR(Y) = 0,778. Y có nhiều 'đệm' hơn tính theo độ lệch chuẩn trên ngưỡng, nên tối thiểu hóa xác suất hụt ngưỡng."
   }
  ],
  [
   {
    "q": "Asset prices are often modeled with a lognormal distribution primarily because the lognormal is:",
    "opts": [
     "Symmetric around the mean",
     "Bounded below by zero and skewed right",
     "Defined by a single parameter"
    ],
    "ans": 1,
    "en": "Prices cannot be negative. If continuously compounded returns are normal, the price level is lognormal — non-negative and right-skewed, matching reality.",
    "vi": "Giá không thể âm. Nếu lợi suất ghép liên tục phân phối chuẩn thì mức giá theo lognormal — không âm và xiên phải, đúng thực tế."
   },
   {
    "q": "A researcher builds a sampling distribution by repeatedly drawing, with replacement, from her observed historical return data. This technique is:",
    "opts": [
     "Monte Carlo simulation",
     "Bootstrapping",
     "Stratified sampling"
    ],
    "ans": 1,
    "en": "Bootstrapping resamples the observed data with replacement — non-parametric. Monte Carlo instead draws from an assumed (parametric) distribution chosen by the modeler.",
    "vi": "Bootstrap tái chọn mẫu có hoàn lại từ chính dữ liệu quan sát — phi tham số. Monte Carlo rút từ phân phối giả định do người mô hình chọn (tham số)."
   },
   {
    "q": "Returns are normal with mean 10% and σ = 20%. The probability of a return below −10% is closest to:",
    "opts": [
     "5%",
     "16%",
     "32%"
    ],
    "ans": 1,
    "en": "z = (−10 − 10)/20 = −1. P(z < −1) = 1 − 0.8413 ≈ 15.9%.",
    "vi": "z = −1. P(z < −1) ≈ 15,9% (quy tắc 68%: 32% nằm ngoài ±1σ, một nửa là 16% ở đuôi trái)."
   },
   {
    "q": "If the continuously compounded return on a stock is normally distributed, the stock's future price is:",
    "opts": [
     "Normally distributed",
     "Lognormally distributed",
     "Uniformly distributed"
    ],
    "ans": 1,
    "en": "S_T = S₀·e^r with r normal makes S_T lognormal: bounded below at zero and right-skewed.",
    "vi": "S_T = S₀·e^r với r chuẩn ⇒ S_T lognormal: chặn dưới tại 0 và xiên phải."
   }
  ],
  [
   {
    "q": "By the central limit theorem, the sampling distribution of the sample mean is approximately normal when:",
    "opts": [
     "The population is normal, regardless of sample size",
     "The sample size is large (commonly n ≥ 30), regardless of the population’s shape",
     "The population variance is unknown"
    ],
    "ans": 1,
    "en": "CLT: for large samples (n ≥ 30 as a rule of thumb), the distribution of the sample mean approaches normal with variance σ²/n — whatever the population distribution.",
    "vi": "Định lý giới hạn trung tâm: mẫu đủ lớn (thường n ≥ 30) thì trung bình mẫu xấp xỉ phân phối chuẩn với phương sai σ²/n, bất kể phân phối gốc."
   },
   {
    "q": "A population has σ = 20%. For a sample of n = 25 observations, the standard error of the sample mean is:",
    "opts": [
     "0.8%",
     "4.0%",
     "20.0%"
    ],
    "ans": 1,
    "en": "SE = σ/√n = 20%/5 = 4%. Larger samples shrink the standard error with the square root of n.",
    "vi": "SE = σ/√n = 20%/5 = 4%. Mẫu càng lớn, sai số chuẩn giảm theo căn bậc hai của n."
   },
   {
    "q": "Monthly σ = 6%. Increasing the sample from 36 to 144 observations changes the standard error of the mean from:",
    "opts": [
     "1.0% to 0.25%",
     "1.0% to 0.5%",
     "6.0% to 3.0%"
    ],
    "ans": 1,
    "en": "SE = σ/√n: 6/√36 = 1%; 6/√144 = 0.5%. Quadrupling n only halves the SE — precision scales with √n.",
    "vi": "SE = σ/√n: 6/√36 = 1%; 6/√144 = 0,5%. Tăng n gấp 4 chỉ giảm SE một nửa."
   },
   {
    "q": "With σ unknown and a sample of 20 from an approximately normal population, the appropriate test statistic is:",
    "opts": [
     "z",
     "t",
     "chi-square"
    ],
    "ans": 1,
    "en": "Normal population, σ unknown → t-statistic with df = 19. t is also the conservative default whenever σ is unknown.",
    "vi": "Tổng thể chuẩn, σ chưa biết → thống kê t với df = 19; t luôn là lựa chọn thận trọng khi σ chưa biết."
   }
  ],
  [
   {
    "q": "Rejecting a true null hypothesis is:",
    "opts": [
     "A Type II error",
     "A Type I error, with probability equal to the significance level α",
     "A power failure"
    ],
    "ans": 1,
    "en": "Type I error = rejecting H₀ when it is true; its probability is the significance level α. Type II = failing to reject a false H₀.",
    "vi": "Sai lầm loại I = bác bỏ H₀ khi H₀ đúng, xác suất bằng mức ý nghĩa α. Sai lầm loại II = không bác bỏ H₀ khi H₀ sai."
   },
   {
    "q": "The power of a hypothesis test is best defined as:",
    "opts": [
     "The probability of a Type I error",
     "1 minus the probability of a Type II error",
     "The significance level α"
    ],
    "ans": 1,
    "en": "Power = P(rejecting H₀ when it is false) = 1 − β. Increasing sample size raises power; α is the Type I error probability, a different quantity.",
    "vi": "Power = xác suất bác bỏ H₀ khi H₀ sai = 1 − β. Tăng cỡ mẫu làm tăng power; α là xác suất sai lầm loại I — đại lượng khác."
   },
   {
    "q": "n = 36, sample mean alpha = 0.5%, s = 1.8%. Testing H₀: μ ≤ 0 at 5% (critical t = 1.69), the correct conclusion is:",
    "opts": [
     "Reject H₀ — alpha is significantly positive",
     "Fail to reject H₀ — t = 1.67 falls short",
     "Reject H₀ because the sample mean is positive"
    ],
    "ans": 1,
    "en": "t = 0.5/(1.8/√36) = 1.67 < 1.69: the evidence is not significant at 5%. A positive sample mean alone never settles a hypothesis test.",
    "vi": "t = 1,67 < 1,69: chưa đủ ý nghĩa ở mức 5%. Trung bình mẫu dương không tự quyết định kết quả kiểm định."
   },
   {
    "q": "Holding sample size constant, reducing the significance level from 5% to 1% will:",
    "opts": [
     "Reduce both Type I and Type II error",
     "Reduce Type I error but increase Type II error",
     "Increase the power of the test"
    ],
    "ans": 1,
    "en": "A stricter α makes rejection harder: fewer false alarms (Type I ↓) but more missed detections (Type II ↑, power ↓). Only a larger sample improves both.",
    "vi": "α chặt hơn khiến việc bác bỏ khó hơn: ít báo động giả (loại I ↓) nhưng bỏ sót nhiều hơn (loại II ↑, power ↓). Chỉ mẫu lớn hơn mới cải thiện cả hai."
   }
  ],
  [
   {
    "q": "An analyst tests whether the correlation between two return series (n = 20 pairs) differs from zero. The test statistic follows a t-distribution with degrees of freedom equal to:",
    "opts": [
     "19",
     "18",
     "20"
    ],
    "ans": 1,
    "en": "The correlation t-test uses t = r√(n−2)/√(1−r²) with df = n − 2 = 18.",
    "vi": "Kiểm định tương quan dùng t = r√(n−2)/√(1−r²) với bậc tự do n − 2 = 18."
   },
   {
    "q": "A dataset consists of analyst rankings (1st, 2nd, 3rd…) rather than measured values. To test association between two sets of rankings, the most appropriate approach is:",
    "opts": [
     "A pooled-variance t-test",
     "A nonparametric test such as the Spearman rank correlation",
     "A z-test"
    ],
    "ans": 1,
    "en": "Ordinal/rank data violate the assumptions of parametric tests; rank-based nonparametric methods (Spearman) are designed exactly for this.",
    "vi": "Dữ liệu thứ hạng không thỏa giả định của kiểm định tham số; các phương pháp phi tham số dựa trên hạng (Spearman) sinh ra đúng cho trường hợp này."
   },
   {
    "q": "A 2×2 contingency table yields χ² = 8.33 with a 5% critical value of 3.84. The appropriate conclusion is:",
    "opts": [
     "Fail to reject independence",
     "Reject independence — the classifications are related",
     "The test is inconclusive without the p-value"
    ],
    "ans": 1,
    "en": "8.33 > 3.84, so reject H₀ of independence: the two categorical classifications are related.",
    "vi": "8,33 > 3,84 → bác bỏ H₀ độc lập: hai cách phân loại có liên hệ."
   },
   {
    "q": "A data set contains several extreme outliers and the analyst wants a correlation measure robust to them. The best choice is:",
    "opts": [
     "Pearson correlation",
     "Spearman rank correlation",
     "Covariance"
    ],
    "ans": 1,
    "en": "Spearman works on ranks, so outliers and monotonic non-linearity barely move it; Pearson is distorted by extreme values.",
    "vi": "Spearman tính trên thứ hạng nên gần như miễn nhiễm outlier và phi tuyến đơn điệu; Pearson bị giá trị cực đoan bóp méo."
   }
  ],
  [
   {
    "q": "In a simple linear regression, the correlation between X and Y is 0.80. The coefficient of determination (R²) is:",
    "opts": [
     "0.80",
     "0.64",
     "0.89"
    ],
    "ans": 1,
    "en": "In simple regression R² = r² = 0.80² = 0.64: the model explains 64% of the variation in Y.",
    "vi": "Trong hồi quy đơn, R² = r² = 0,8² = 0,64: mô hình giải thích 64% biến thiên của Y."
   },
   {
    "q": "The residuals of a time-series regression are positively correlated with their own previous values. Which regression assumption is violated?",
    "opts": [
     "Linearity",
     "Independence of the errors",
     "Normality of the errors"
    ],
    "ans": 1,
    "en": "Correlated (autocorrelated) errors violate the independence assumption — common in time series, and it invalidates the usual standard errors.",
    "vi": "Sai số tương quan với chính nó (tự tương quan) vi phạm giả định độc lập của sai số — rất phổ biến trong chuỗi thời gian, làm sai lệch các sai số chuẩn."
   },
   {
    "q": "A simple regression on 36 observations reports SSR = 680 and SSE = 340. R² is closest to:",
    "opts": [
     "0.50",
     "0.67",
     "2.00"
    ],
    "ans": 1,
    "en": "SST = 680 + 340 = 1,020; R² = SSR/SST = 680/1,020 ≈ 0.667.",
    "vi": "SST = 1.020; R² = 680/1.020 ≈ 0,667."
   },
   {
    "q": "A residual plot shows the spread of residuals widening steadily as X increases. This violates the assumption of:",
    "opts": [
     "Linearity",
     "Homoskedasticity",
     "Normality of errors"
    ],
    "ans": 1,
    "en": "A funnel-shaped residual pattern — variance growing with X — is heteroskedasticity, violating the constant-variance assumption.",
    "vi": "Hình phễu — phương sai phần dư tăng theo X — là heteroskedasticity, vi phạm giả định phương sai không đổi."
   }
  ],
  [
   {
    "q": "An analyst trains a model on historical data labeled \"defaulted\" or \"did not default\" to predict future defaults. This is an example of:",
    "opts": [
     "Unsupervised learning",
     "Supervised learning (classification)",
     "Dimension reduction"
    ],
    "ans": 1,
    "en": "Labeled training data with a categorical target = supervised classification. Unsupervised learning finds structure in unlabeled data (e.g., clustering).",
    "vi": "Dữ liệu huấn luyện có nhãn với biến mục tiêu dạng nhóm = học có giám sát, bài toán phân loại. Học không giám sát tìm cấu trúc trong dữ liệu không nhãn (như phân cụm)."
   },
   {
    "q": "A machine-learning model achieves 99% accuracy on its training data but only 60% on new test data. The model most likely suffers from:",
    "opts": [
     "Underfitting",
     "Overfitting",
     "Data snooping-free generalization"
    ],
    "ans": 1,
    "en": "A large train–test performance gap is the signature of overfitting: the model memorized training noise instead of learning generalizable patterns.",
    "vi": "Khoảng cách lớn giữa kết quả train và test là dấu hiệu overfitting: mô hình học vẹt nhiễu thay vì học mẫu hình tổng quát."
   },
   {
    "q": "An analyst wants to compress 50 correlated economic indicators into a handful of uncorrelated factors. The appropriate technique is:",
    "opts": [
     "Classification",
     "Dimension reduction",
     "Reinforcement learning"
    ],
    "ans": 1,
    "en": "Reducing many correlated variables to a few composite factors with no target label is dimension reduction (e.g., principal component analysis).",
    "vi": "Nén nhiều biến tương quan thành vài nhân tố tổng hợp, không có nhãn mục tiêu → dimension reduction (ví dụ PCA)."
   },
   {
    "q": "In an NLP pipeline, converting words to lowercase, removing stop words, and stemming occur during:",
    "opts": [
     "Data capture",
     "Tokenization and normalization",
     "Model training"
    ],
    "ans": 1,
    "en": "These cleaning steps normalize tokens before text is converted into structured features for a model.",
    "vi": "Các bước làm sạch này chuẩn hóa token trước khi văn bản được chuyển thành đặc trưng có cấu trúc cho mô hình."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "$1,000 invested for 3 years at 8% compounded annually grows to an amount closest to:",
    "opts": [
     "$1,240.00",
     "$1,259.71",
     "$1,280.00"
    ],
    "ans": 1,
    "en": "FV = 1,000 × 1.08³ = 1,000 × 1.259712 ≈ $1,259.71.",
    "vi": "FV = 1.000 × 1,08³ ≈ 1.259,71 USD. Lãi kép, không phải lãi đơn (1.240)."
   },
   {
    "q": "A portfolio returns +10% in year 1 and −10% in year 2. The geometric mean annual return is closest to:",
    "opts": [
     "0.0%",
     "−0.5%",
     "+0.5%"
    ],
    "ans": 1,
    "en": "Geometric mean = √(1.10 × 0.90) − 1 = √0.99 − 1 ≈ −0.50%. Volatility drags the geometric mean below the arithmetic mean (0%).",
    "vi": "Trung bình nhân = √(1,10 × 0,90) − 1 ≈ −0,50%. Biến động khiến trung bình nhân luôn ≤ trung bình cộng (ở đây là 0%)."
   },
   {
    "q": "To evaluate a fund manager who does not control the timing of client deposits and withdrawals, the preferred return measure is:",
    "opts": [
     "Money-weighted rate of return",
     "Time-weighted rate of return",
     "Holding period return"
    ],
    "ans": 1,
    "en": "TWR removes the distorting effect of external cash-flow timing, which the manager does not control; MWR is appropriate when the investor controls the flows.",
    "vi": "TWR loại bỏ ảnh hưởng thời điểm nộp/rút tiền (do khách hàng quyết định), nên phù hợp để đánh giá năng lực manager. MWR phù hợp khi nhà đầu tư tự kiểm soát dòng tiền."
   },
   {
    "q": "P(A) = 0.4, P(B) = 0.3, P(A and B) = 0.12. P(A or B) is closest to:",
    "opts": [
     "0.70",
     "0.58",
     "0.42"
    ],
    "ans": 1,
    "en": "Addition rule: P(A or B) = 0.4 + 0.3 − 0.12 = 0.58.",
    "vi": "Quy tắc cộng: P(A hoặc B) = P(A) + P(B) − P(A và B) = 0,58. Nhớ trừ phần giao để không đếm trùng."
   },
   {
    "q": "For a standard normal variable, the probability of an outcome within ±1.96 standard deviations of the mean is closest to:",
    "opts": [
     "90%",
     "95%",
     "99%"
    ],
    "ans": 1,
    "en": "±1.96σ covers ≈ 95% of a normal distribution (±1.65σ ≈ 90%, ±2.58σ ≈ 99%).",
    "vi": "Khoảng ±1,96σ chứa khoảng 95% xác suất. Ghi nhớ bộ ba: 1,65 → 90%; 1,96 → 95%; 2,58 → 99%."
   },
   {
    "q": "A researcher tests a mean using a sample of n = 15 from an approximately normal population with unknown variance. The appropriate test statistic is:",
    "opts": [
     "z-statistic",
     "t-statistic with 14 degrees of freedom",
     "Chi-square statistic"
    ],
    "ans": 1,
    "en": "Small sample + unknown population variance + normal population → t-test with n − 1 = 14 degrees of freedom.",
    "vi": "Mẫu nhỏ, phương sai tổng thể chưa biết, tổng thể xấp xỉ chuẩn → dùng t-test với bậc tự do n − 1 = 14."
   },
   {
    "q": "For a sample of stock and index returns, Cov(X,Y) = 8 and Var(X) = 16, with X̄ = 4% and Ȳ = 6%. The estimated slope and intercept of the regression of Y on X are closest to:",
    "opts": [
     "b₁ = 0.5; b₀ = 4.0%",
     "b₁ = 2.0; b₀ = −2.0%",
     "b₁ = 0.5; b₀ = 6.0%"
    ],
    "ans": 0,
    "en": "b̂₁ = Cov/Var(X) = 8/16 = 0.5; b̂₀ = Ȳ − b̂₁X̄ = 6 − 0.5 × 4 = 4.0%. The line passes through (X̄, Ȳ).",
    "vi": "b̂₁ = Cov/Var(X) = 8/16 = 0,5; b̂₀ = Ȳ − b̂₁X̄ = 6 − 0,5 × 4 = 4,0%. Đường hồi quy luôn đi qua điểm (X̄, Ȳ)."
   },
   {
    "q": "A residual plot from a simple regression shows the residuals fanning out — small at low values of X and progressively larger at high values of X. This pattern most likely indicates:",
    "opts": [
     "Non-normal errors",
     "Heteroskedasticity — non-constant error variance",
     "A perfect fit"
    ],
    "ans": 1,
    "en": "A funnel-shaped residual plot is the classic signature of heteroskedasticity, violating the constant-variance assumption and invalidating standard errors.",
    "vi": "Đồ thị phần dư hình phễu là dấu hiệu kinh điển của heteroskedasticity — vi phạm giả định phương sai sai số không đổi, làm sai lệch các sai số chuẩn."
   }
  ],
  [
   {
    "q": "The present value of a perpetuity paying $100 per year, with the first payment in one year and a discount rate of 5%, is:",
    "opts": [
     "$2,000",
     "$1,905",
     "$2,100"
    ],
    "ans": 0,
    "en": "PV = PMT / r = 100 / 0.05 = $2,000 (valued one period before the first payment).",
    "vi": "PV perpetuity = PMT / r = 100 / 0,05 = 2.000 USD, định giá tại thời điểm 1 kỳ trước khoản chi trả đầu tiên."
   },
   {
    "q": "An investor buys $1,000 of the same fund each month at varying prices. The average cost per share is best measured by the:",
    "opts": [
     "Arithmetic mean of prices",
     "Harmonic mean of prices",
     "Geometric mean of prices"
    ],
    "ans": 1,
    "en": "With equal dollar amounts at different prices (cost averaging), average cost per share = harmonic mean of the purchase prices.",
    "vi": "Mua đều đặn cùng số tiền ở các mức giá khác nhau → giá vốn bình quân mỗi cổ phiếu là trung bình điều hòa (harmonic mean) của các mức giá."
   },
   {
    "q": "P(A and B) = 0.2 and P(B) = 0.4. The conditional probability P(A | B) is:",
    "opts": [
     "0.08",
     "0.50",
     "0.60"
    ],
    "ans": 1,
    "en": "P(A | B) = P(A and B) / P(B) = 0.2 / 0.4 = 0.5.",
    "vi": "Xác suất có điều kiện: P(A | B) = P(A∩B)/P(B) = 0,2/0,4 = 0,5."
   },
   {
    "q": "A strategy produces frequent small gains and occasional very large losses. Its return distribution most likely exhibits:",
    "opts": [
     "Positive skewness",
     "Negative skewness",
     "Zero skewness"
    ],
    "ans": 1,
    "en": "Rare but severe losses create a long left tail → negative skew. Many option-selling strategies look like this.",
    "vi": "Thua lỗ hiếm nhưng rất lớn tạo đuôi trái dài → lệch âm (negative skew). Điển hình ở chiến lược bán option."
   },
   {
    "q": "A hypothesis test yields a p-value of 0.03. At a 5% significance level, the analyst should:",
    "opts": [
     "Fail to reject the null hypothesis",
     "Reject the null hypothesis",
     "Increase the sample size before deciding"
    ],
    "ans": 1,
    "en": "p-value (0.03) &lt; α (0.05) → reject H₀. The p-value is the smallest α at which H₀ can be rejected.",
    "vi": "p-value 0,03 &lt; α 0,05 → bác bỏ H₀. p-value là mức ý nghĩa nhỏ nhất mà tại đó có thể bác bỏ H₀."
   },
   {
    "q": "A 6% stated annual rate with continuous compounding gives an effective annual rate closest to:",
    "opts": [
     "6.00%",
     "6.18%",
     "6.09%"
    ],
    "ans": 1,
    "en": "EAR = e^0.06 − 1 ≈ 6.18% — continuous compounding gives the highest EAR for a given stated rate.",
    "vi": "EAR = e^0,06 − 1 ≈ 6,18%. Ghép lãi liên tục cho EAR cao nhất với cùng lãi suất danh nghĩa."
   },
   {
    "q": "The main limitation of Monte Carlo simulation is that it:",
    "opts": [
     "Cannot handle path-dependent payoffs",
     "Provides answers only as good as the assumed model and input distributions",
     "Cannot generate more than 100 trials"
    ],
    "ans": 1,
    "en": "Monte Carlo excels at complex and path-dependent problems, but it is a numerical tool with no analytic insight: misspecified models or input distributions produce systematically wrong answers.",
    "vi": "Monte Carlo rất mạnh với bài toán phức tạp/phụ thuộc lộ trình, nhưng chỉ là công cụ số: mô hình hoặc phân phối đầu vào sai thì kết quả sai một cách hệ thống."
   },
   {
    "q": "An analyst wants to test whether fund style (growth/value) is independent of fund size category (small/mid/large) using observed counts in a 2×3 table. The appropriate test statistic is:",
    "opts": [
     "A paired-comparisons t-statistic",
     "A chi-square statistic with expected frequencies of (row total × column total)/grand total",
     "An F-statistic on two variances"
    ],
    "ans": 1,
    "en": "Independence of two categorical variables is tested with a chi-square statistic on the contingency table; each expected frequency = row total × column total / grand total.",
    "vi": "Tính độc lập của hai biến định tính được kiểm định bằng chi bình phương trên bảng chéo; tần suất kỳ vọng mỗi ô = (tổng hàng × tổng cột)/tổng chung."
   }
  ],
  {
   "name": "Set D — Rates, Returns & TVM drills",
   "qs": [
    {
     "q": "A stock is bought at $40, pays a $1 dividend, and is sold one year later at $43. The holding period return is:",
     "opts": [
      "10.0%",
      "7.5%",
      "12.5%"
     ],
     "ans": 0,
     "en": "HPR = (43 + 1 − 40)/40 = 10%. Income plus price change, over the starting price.",
     "vi": "HPR = (43 + 1 − 40)/40 = 10%. Thu nhập cộng thay đổi giá, chia giá ban đầu."
    },
    {
     "q": "Returns are +20% in year 1 and −10% in year 2. The geometric mean annual return is closest to:",
     "opts": [
      "5.0%",
      "3.9%",
      "4.5%"
     ],
     "ans": 1,
     "en": "√(1.20 × 0.90) − 1 = √1.08 − 1 ≈ 3.92% — below the 5% arithmetic mean, as always with volatility.",
     "vi": "√(1,20 × 0,90) − 1 ≈ 3,92% — thấp hơn trung bình cộng 5%, luôn vậy khi có biến động."
    },
    {
     "q": "An investor spends $1,000 each month buying a fund at prices of $10, then $12.50. The average purchase price per unit is closest to:",
     "opts": [
      "$11.25",
      "$11.11",
      "$10.50"
     ],
     "ans": 1,
     "en": "Cost averaging → harmonic mean: 2/(1/10 + 1/12.5) = $11.11, below the arithmetic $11.25.",
     "vi": "Mua bình quân giá → trung bình điều hòa: 2/(1/10 + 1/12,5) = 11,11 USD, thấp hơn trung bình cộng 11,25."
    },
    {
     "q": "A deposit pays a stated 8% annual rate compounded quarterly. The effective annual rate is closest to:",
     "opts": [
      "8.00%",
      "8.24%",
      "8.16%"
     ],
     "ans": 1,
     "en": "EAR = (1 + 0.08/4)⁴ − 1 = 1.02⁴ − 1 ≈ 8.243%. More frequent compounding → higher EAR.",
     "vi": "EAR = (1,02)⁴ − 1 ≈ 8,243%. Ghép lãi càng dày, EAR càng cao."
    },
    {
     "q": "A stock returns 10% over one year. The equivalent continuously compounded return is closest to:",
     "opts": [
      "9.53%",
      "10.00%",
      "10.52%"
     ],
     "ans": 0,
     "en": "r_cc = ln(1.10) ≈ 9.53% — continuous rates are always below the equivalent HPR for gains.",
     "vi": "r_cc = ln(1,10) ≈ 9,53% — lãi suất liên tục luôn thấp hơn HPR tương đương khi có lãi."
    },
    {
     "q": "The nominal return is 7% and inflation is 3%. The exact real return is closest to:",
     "opts": [
      "4.00%",
      "3.88%",
      "2.33%"
     ],
     "ans": 1,
     "en": "(1.07/1.03) − 1 ≈ 3.88%. The 4% subtraction is only the approximation.",
     "vi": "(1,07/1,03) − 1 ≈ 3,88%. Phép trừ ra 4% chỉ là công thức xấp xỉ."
    },
    {
     "q": "The present value of a 3-year ordinary annuity of $100 per year at 10% is closest to:",
     "opts": [
      "$248.69",
      "$273.55",
      "$300.00"
     ],
     "ans": 0,
     "en": "PV = 100 × [1 − 1.10⁻³]/0.10 = $248.69.",
     "vi": "PV = 100 × [1 − 1,10⁻³]/0,10 = 248,69 USD."
    },
    {
     "q": "Holding all inputs equal, an annuity due is worth:",
     "opts": [
      "The same as an ordinary annuity",
      "More — each payment arrives one period earlier: multiply by (1 + r)",
      "Less, because payments start immediately"
     ],
     "ans": 1,
     "en": "Value(due) = value(ordinary) × (1+r) for both PV and FV — earlier cash is worth more.",
     "vi": "Giá trị(due) = giá trị(thường) × (1+r) cho cả PV lẫn FV — tiền về sớm hơn thì đáng giá hơn."
    },
    {
     "q": "A perpetuity pays $50 per year forever; the required return is 4%. Its value is:",
     "opts": [
      "$1,250",
      "$2,000",
      "$800"
     ],
     "ans": 0,
     "en": "PV = PMT/r = 50/0.04 = $1,250.",
     "vi": "PV = PMT/r = 50/0,04 = 1.250 USD."
    },
    {
     "q": "A stock trades at $40 and will pay a $2 dividend next year, growing 4% forever. The implied required return is:",
     "opts": [
      "9.0%",
      "5.0%",
      "8.0%"
     ],
     "ans": 0,
     "en": "Gordon rearranged: r = D₁/P + g = 2/40 + 4% = 9%.",
     "vi": "Đảo công thức Gordon: r = D₁/P + g = 2/40 + 4% = 9%."
    },
    {
     "q": "A stock trades at $50, next year’s dividend is $3, and the required return is 10%. The implied growth rate is:",
     "opts": [
      "4.0%",
      "6.0%",
      "5.0%"
     ],
     "ans": 0,
     "en": "g = r − D₁/P = 10% − 3/50 = 4%.",
     "vi": "g = r − D₁/P = 10% − 6% = 4%."
    },
    {
     "q": "In the early years of a fixed-payment amortizing mortgage, each payment consists:",
     "opts": [
      "Mostly of principal repayment",
      "Mostly of interest, with the split shifting toward principal over time",
      "Of equal parts interest and principal throughout"
     ],
     "ans": 1,
     "en": "Interest = rate × outstanding balance, which is largest at the start; the principal share grows each period.",
     "vi": "Lãi = lãi suất × dư nợ, lớn nhất lúc đầu; phần trả gốc tăng dần theo từng kỳ."
    },
    {
     "q": "To evaluate a portfolio manager who cannot control client deposits and withdrawals, the preferred return measure is:",
     "opts": [
      "The money-weighted return (IRR)",
      "The time-weighted return",
      "The arithmetic mean of monthly returns"
     ],
     "ans": 1,
     "en": "TWR is unaffected by the timing and size of external cash flows — exactly what the manager does not control.",
     "vi": "TWR không bị ảnh hưởng bởi thời điểm và quy mô dòng tiền ra vào — đúng thứ manager không kiểm soát được."
    },
    {
     "q": "At an annual return of about 7.2%, an investment doubles in approximately:",
     "opts": [
      "7 years",
      "10 years",
      "14 years"
     ],
     "ans": 1,
     "en": "Rule of 72: 72/7.2 = 10 years — the standard mental shortcut.",
     "vi": "Quy tắc 72: 72/7,2 = 10 năm — mẹo nhẩm tiêu chuẩn."
    }
   ]
  },
  {
   "name": "Set E — Statistics, Probability & Portfolio Math drills",
   "qs": [
    {
     "q": "A return distribution is positively (right) skewed. The most likely ordering is:",
     "opts": [
      "Mean > median > mode",
      "Mode > median > mean",
      "Median > mean > mode"
     ],
     "ans": 0,
     "en": "The long right tail drags the mean above the median, which sits above the mode.",
     "vi": "Đuôi phải dài kéo trung bình vượt trung vị, trung vị nằm trên mode."
    },
    {
     "q": "A fund has a mean return of 4% and standard deviation of 8%. Its coefficient of variation is:",
     "opts": [
      "0.5",
      "2.0",
      "4.0"
     ],
     "ans": 1,
     "en": "CV = σ/mean = 8/4 = 2.0 — risk per unit of return; lower is better.",
     "vi": "CV = σ/trung bình = 8/4 = 2,0 — rủi ro trên mỗi đơn vị lợi nhuận; càng thấp càng tốt."
    },
    {
     "q": "Portfolio return 10%, risk-free rate 2%, standard deviation 16%. The Sharpe ratio is:",
     "opts": [
      "0.50",
      "0.63",
      "0.80"
     ],
     "ans": 0,
     "en": "Sharpe = (10 − 2)/16 = 0.50 — excess return per unit of total risk.",
     "vi": "Sharpe = (10 − 2)/16 = 0,50 — lợi nhuận vượt trội trên mỗi đơn vị rủi ro tổng."
    },
    {
     "q": "Target semideviation (target downside deviation) differs from standard deviation because it uses only:",
     "opts": [
      "Returns above the mean",
      "Observations below the stated target return",
      "The largest losses in the sample"
     ],
     "ans": 1,
     "en": "It measures dispersion of returns falling short of the target — risk as investors actually feel it.",
     "vi": "Nó đo độ phân tán của các kỳ lợi suất thấp hơn mục tiêu — rủi ro theo đúng cách nhà đầu tư cảm nhận."
    },
    {
     "q": "A distribution has excess kurtosis of +1.5. Relative to a normal distribution it is:",
     "opts": [
      "Leptokurtic — fatter tails and more extreme outcomes",
      "Platykurtic — thinner tails",
      "Identical in tail risk"
     ],
     "ans": 0,
     "en": "Positive excess kurtosis = leptokurtic: more mass in the tails than the normal — bigger surprise risk.",
     "vi": "Excess kurtosis dương = leptokurtic: đuôi dày hơn phân phối chuẩn — rủi ro bất ngờ lớn hơn."
    },
    {
     "q": "With 19 ranked observations, the location of the third quartile (75th percentile) is at observation:",
     "opts": [
      "14",
      "15",
      "16"
     ],
     "ans": 1,
     "en": "L = (n+1) × 75/100 = 20 × 0.75 = 15 — the 15th ranked observation.",
     "vi": "L = (n+1) × 75/100 = 20 × 0,75 = 15 — quan sát xếp hạng thứ 15."
    },
    {
     "q": "P(A) = 0.4, P(B) = 0.3, P(AB) = 0.12. P(A or B) equals — and A and B are:",
     "opts": [
      "0.58; independent, since 0.12 = 0.4 × 0.3",
      "0.70; dependent",
      "0.58; dependent"
     ],
     "ans": 0,
     "en": "Addition rule: 0.4 + 0.3 − 0.12 = 0.58; and P(AB) = P(A)P(B) confirms independence.",
     "vi": "Quy tắc cộng: 0,4 + 0,3 − 0,12 = 0,58; và P(AB) = P(A)P(B) xác nhận độc lập."
    },
    {
     "q": "P(AB) = 0.20 and P(B) = 0.50. The conditional probability P(A|B) is:",
     "opts": [
      "0.10",
      "0.40",
      "0.70"
     ],
     "ans": 1,
     "en": "P(A|B) = P(AB)/P(B) = 0.20/0.50 = 0.40.",
     "vi": "P(A|B) = P(AB)/P(B) = 0,20/0,50 = 0,40."
    },
    {
     "q": "P(pass | good economy) = 0.8 with P(good) = 0.6; P(pass | bad economy) = 0.3 with P(bad) = 0.4. The unconditional P(pass) is:",
     "opts": [
      "0.55",
      "0.60",
      "0.66"
     ],
     "ans": 1,
     "en": "Total probability: 0.8×0.6 + 0.3×0.4 = 0.48 + 0.12 = 0.60.",
     "vi": "Xác suất toàn phần: 0,8×0,6 + 0,3×0,4 = 0,60."
    },
    {
     "q": "Using the previous data, if the company passes, the updated probability the economy is good — P(good | pass) — is:",
     "opts": [
      "0.80",
      "0.48",
      "0.60"
     ],
     "ans": 0,
     "en": "Bayes: P(good|pass) = 0.48/0.60 = 0.80 — the pass raises the good-economy probability from 0.6 to 0.8.",
     "vi": "Bayes: P(good|pass) = 0,48/0,60 = 0,80 — kết quả \"pass\" nâng xác suất kinh tế tốt từ 0,6 lên 0,8."
    },
    {
     "q": "A stock returns +10% with probability 0.6 and −5% with probability 0.4. Its expected return is:",
     "opts": [
      "+4.0%",
      "+2.5%",
      "+5.0%"
     ],
     "ans": 0,
     "en": "E(R) = 0.6×10 + 0.4×(−5) = 6 − 2 = 4%.",
     "vi": "E(R) = 0,6×10 + 0,4×(−5) = 4%."
    },
    {
     "q": "Correlation between two assets is 0.5, with standard deviations 20% and 30%. Their covariance is:",
     "opts": [
      "0.030",
      "0.060",
      "0.003"
     ],
     "ans": 0,
     "en": "Cov = ρσ₁σ₂ = 0.5 × 0.20 × 0.30 = 0.03.",
     "vi": "Cov = ρσ₁σ₂ = 0,5 × 0,20 × 0,30 = 0,03."
    },
    {
     "q": "A portfolio holds 70% in asset A (E(R) = 8%) and 30% in asset B (E(R) = 12%). Its expected return is:",
     "opts": [
      "9.2%",
      "10.0%",
      "8.8%"
     ],
     "ans": 0,
     "en": "E(Rp) = 0.7×8 + 0.3×12 = 5.6 + 3.6 = 9.2% — expected return is always the weighted average.",
     "vi": "E(Rp) = 0,7×8 + 0,3×12 = 9,2% — lợi nhuận kỳ vọng luôn là bình quân gia quyền."
    },
    {
     "q": "A portfolio has E(R) = 9%, σ = 12%, and the investor’s threshold return is 3%. Roy’s safety-first ratio is:",
     "opts": [
      "0.75",
      "0.50",
      "0.25"
     ],
     "ans": 1,
     "en": "SFR = (9 − 3)/12 = 0.50; among candidate portfolios, choose the highest SFR to minimize the shortfall probability.",
     "vi": "SFR = (9 − 3)/12 = 0,50; giữa các danh mục, chọn SFR cao nhất để tối thiểu xác suất hụt ngưỡng."
    }
   ]
  },
  {
   "name": "Set F — Distributions, Testing & Regression drills",
   "qs": [
    {
     "q": "A binomial variable has n = 10 trials with success probability p = 0.4. Its mean and variance are:",
     "opts": [
      "Mean 4.0; variance 2.4",
      "Mean 4.0; variance 1.55",
      "Mean 6.0; variance 2.4"
     ],
     "ans": 0,
     "en": "Mean = np = 4; variance = np(1−p) = 10 × 0.4 × 0.6 = 2.4.",
     "vi": "Trung bình = np = 4; phương sai = np(1−p) = 2,4."
    },
    {
     "q": "Returns are normal with mean 6% and standard deviation 10%. An approximate 95% interval for one year’s return is:",
     "opts": [
      "−4% to 16%",
      "−13.6% to 25.6%",
      "−10.5% to 22.5%"
     ],
     "ans": 1,
     "en": "95% ≈ mean ± 1.96σ = 6 ± 19.6 → −13.6% to 25.6%. (±1σ covers 68%, ±1.65σ covers 90%.)",
     "vi": "95% ≈ trung bình ± 1,96σ = 6 ± 19,6 → −13,6% đến 25,6%. (±1σ phủ 68%, ±1,65σ phủ 90%.)"
    },
    {
     "q": "Asset prices are commonly modeled as lognormal because the lognormal distribution:",
     "opts": [
      "Is symmetric around the mean",
      "Is bounded below by zero and right-skewed",
      "Has thinner tails than the normal"
     ],
     "ans": 1,
     "en": "Prices cannot go below zero; if continuously compounded returns are normal, the price level is lognormal.",
     "vi": "Giá không thể âm; nếu lợi suất ghép lãi liên tục là chuẩn thì mức giá tuân theo lognormal."
    },
    {
     "q": "Resampling that repeatedly draws full-size samples WITH replacement from the observed data is:",
     "opts": [
      "Monte Carlo simulation",
      "Bootstrapping",
      "The jackknife"
     ],
     "ans": 1,
     "en": "Bootstrap builds the statistic’s empirical distribution from the data itself; Monte Carlo draws from an assumed model; jackknife leaves one observation out at a time.",
     "vi": "Bootstrap dựng phân phối thực nghiệm từ chính dữ liệu; Monte Carlo rút từ mô hình giả định; jackknife lần lượt bỏ từng quan sát."
    },
    {
     "q": "Population standard deviation is 20% and the sample size is 25. The standard error of the sample mean is:",
     "opts": [
      "4.0%",
      "0.8%",
      "5.0%"
     ],
     "ans": 0,
     "en": "SE = σ/√n = 20/5 = 4% — quadrupling n halves the standard error.",
     "vi": "SE = σ/√n = 20/5 = 4% — tăng n gấp bốn thì sai số chuẩn giảm một nửa."
    },
    {
     "q": "Sample mean 8%, standard error 2%. The 90% confidence interval for the population mean is closest to:",
     "opts": [
      "4.71% to 11.29%",
      "4.08% to 11.92%",
      "6.00% to 10.00%"
     ],
     "ans": 0,
     "en": "90% uses z = 1.645: 8 ± 1.645 × 2 → 4.71% to 11.29%.",
     "vi": "90% dùng z = 1,645: 8 ± 1,645 × 2 → 4,71% đến 11,29%."
    },
    {
     "q": "For a small sample from an approximately normal population with UNKNOWN variance, the correct test statistic for the mean is:",
     "opts": [
      "The z-statistic",
      "The t-statistic",
      "The chi-square statistic"
     ],
     "ans": 1,
     "en": "Unknown variance → t-distribution (fatter tails, df = n − 1); z applies when variance is known or n is large.",
     "vi": "Chưa biết phương sai → phân phối t (đuôi dày hơn, df = n − 1); z dùng khi biết phương sai hoặc mẫu lớn."
    },
    {
     "q": "A strategy is backtested only on mutual funds that exist today. The resulting performance estimate suffers most directly from:",
     "opts": [
      "Look-ahead bias",
      "Survivorship bias",
      "Time-period bias"
     ],
     "ans": 1,
     "en": "Dead funds — typically poor performers — are missing, so measured returns overstate what an investor would have earned.",
     "vi": "Các quỹ đã chết — thường là quỹ kém — bị loại khỏi mẫu, nên lợi suất đo được cao hơn thực tế nhà đầu tư nhận."
    },
    {
     "q": "Rejecting a null hypothesis that is actually true is:",
     "opts": [
      "A Type I error, with probability equal to the significance level α",
      "A Type II error, with probability β",
      "A correct decision"
     ],
     "ans": 0,
     "en": "Type I = false alarm; α is set by the researcher. Type II (β) is failing to reject a false null.",
     "vi": "Loại I = báo động giả; α do người nghiên cứu chọn. Loại II (β) là không bác bỏ null sai."
    },
    {
     "q": "A test produces a p-value of 0.03 at a significance level of 5%. The correct conclusion is to:",
     "opts": [
      "Fail to reject the null",
      "Reject the null, since p < α",
      "Accept the null as true"
     ],
     "ans": 1,
     "en": "p (0.03) < α (0.05) → reject. The p-value is the smallest α at which rejection occurs — not the probability the null is true.",
     "vi": "p (0,03) < α (0,05) → bác bỏ. P-value là mức α nhỏ nhất để bác bỏ — không phải xác suất null đúng."
    },
    {
     "q": "The power of a hypothesis test equals:",
     "opts": [
      "α",
      "1 − β — the probability of rejecting a false null",
      "1 − α"
     ],
     "ans": 1,
     "en": "Power measures the ability to detect a real effect; it rises with sample size and with larger true effects.",
     "vi": "Power đo khả năng phát hiện hiệu ứng thật; tăng theo cỡ mẫu và độ lớn hiệu ứng."
    },
    {
     "q": "To test whether a single population variance equals a hypothesized value, the appropriate statistic is:",
     "opts": [
      "The F-statistic",
      "The chi-square statistic",
      "The t-statistic"
     ],
     "ans": 1,
     "en": "One variance → chi-square with n − 1 df; comparing TWO variances uses the F-statistic.",
     "vi": "Một phương sai → chi-square với n − 1 bậc tự do; so sánh HAI phương sai dùng F."
    },
    {
     "q": "When return data are clearly non-normal with outliers, the correlation test that ranks the data before testing is:",
     "opts": [
      "The parametric t-test of Pearson correlation",
      "The Spearman rank correlation test",
      "The F-test"
     ],
     "ans": 1,
     "en": "Spearman is the non-parametric alternative: it converts values to ranks, sacrificing some power for robustness.",
     "vi": "Spearman là lựa chọn phi tham số: chuyển giá trị thành thứ hạng, đổi chút sức mạnh lấy độ bền vững."
    },
    {
     "q": "A 3-row × 4-column contingency table is tested for independence with a chi-square statistic. The degrees of freedom are:",
     "opts": [
      "12",
      "6",
      "7"
     ],
     "ans": 1,
     "en": "df = (r − 1)(c − 1) = 2 × 3 = 6.",
     "vi": "df = (r − 1)(c − 1) = 2 × 3 = 6."
    },
    {
     "q": "In a simple linear regression, the correlation between X and Y is 0.6. The R² is:",
     "opts": [
      "0.60",
      "0.36",
      "0.78"
     ],
     "ans": 1,
     "en": "In SLR, R² = r² = 0.36 — the regression explains 36% of the variation in Y.",
     "vi": "Trong hồi quy đơn, R² = r² = 0,36 — mô hình giải thích 36% biến thiên của Y."
    },
    {
     "q": "Estimates are b₀ = 2 and b₁ = 1.5. The predicted Y when X = 4 is:",
     "opts": [
      "8.0",
      "6.0",
      "7.5"
     ],
     "ans": 0,
     "en": "Ŷ = 2 + 1.5 × 4 = 8.0.",
     "vi": "Ŷ = 2 + 1,5 × 4 = 8,0."
    },
    {
     "q": "The slope coefficient b₁ in a simple linear regression is best interpreted as:",
     "opts": [
      "The value of Y when X is zero",
      "The expected change in Y for a one-unit change in X",
      "The proportion of Y’s variation explained by X"
     ],
     "ans": 1,
     "en": "The slope is the sensitivity of Y to X; the intercept is Y at X = 0, and R² is the explained proportion.",
     "vi": "Hệ số góc là độ nhạy của Y theo X; hệ số chặn là Y khi X = 0, còn R² là tỷ lệ được giải thích."
    },
    {
     "q": "A smaller standard error of estimate (SEE) most directly indicates:",
     "opts": [
      "A steeper regression slope",
      "Data points clustered more tightly around the regression line",
      "A larger sample size"
     ],
     "ans": 1,
     "en": "SEE is the standard deviation of the residuals — small SEE means small typical prediction errors.",
     "vi": "SEE là độ lệch chuẩn của phần dư — SEE nhỏ nghĩa là sai số dự báo điển hình nhỏ."
    },
    {
     "q": "A machine learning model trained on labeled outcomes (inputs paired with known targets) is using:",
     "opts": [
      "Unsupervised learning",
      "Supervised learning",
      "Reinforcement-free clustering"
     ],
     "ans": 1,
     "en": "Supervised learning maps inputs to known targets (regression, classification); unsupervised finds structure without labels (clustering).",
     "vi": "Học có giám sát ánh xạ đầu vào tới mục tiêu đã biết (hồi quy, phân loại); học không giám sát tìm cấu trúc khi không có nhãn (phân cụm)."
    },
    {
     "q": "A model fits the training data almost perfectly but performs poorly on new data. The problem is:",
     "opts": [
      "Underfitting",
      "Overfitting — the model learned noise instead of signal",
      "Insufficient model complexity"
     ],
     "ans": 1,
     "en": "Overfitting memorizes sample noise; the cures are simpler models, regularization, and out-of-sample validation.",
     "vi": "Overfitting \"học thuộc\" nhiễu của mẫu; thuốc chữa là mô hình đơn giản hơn, regularization và kiểm định ngoài mẫu."
    }
   ]
  },
  {
   "name": "Set G — Mixed exam-style review",
   "qs": [
    {
     "q": "An investment of $5,000 grows to $8,000 in 6 years. The compound annual growth rate is closest to:",
     "opts": [
      "8.15%",
      "10.00%",
      "7.20%"
     ],
     "ans": 0,
     "en": "r = (8,000/5,000)^(1/6) − 1 = 1.6^0.1667 − 1 ≈ 8.15%.",
     "vi": "r = 1,6^(1/6) − 1 ≈ 8,15%."
    },
    {
     "q": "A perpetual preferred stock pays a $5 annual dividend and trades at $62.50. Its implied return is:",
     "opts": [
      "8.0%",
      "12.5%",
      "6.25%"
     ],
     "ans": 0,
     "en": "Perpetuity: r = D/P = 5/62.50 = 8%.",
     "vi": "Perpetuity: r = D/P = 5/62,50 = 8%."
    },
    {
     "q": "An investor buys equal dollar amounts of a stock at $20, $25, and $50. The average cost per share is closest to:",
     "opts": [
      "$31.67",
      "$27.27",
      "$28.85"
     ],
     "ans": 1,
     "en": "Equal dollar amounts → harmonic mean: 3/(1/20 + 1/25 + 1/50) = 3/0.11 ≈ $27.27, below the arithmetic mean of $31.67.",
     "vi": "Mua số tiền bằng nhau → trung bình điều hòa: 3/(1/20 + 1/25 + 1/50) ≈ 27,27 USD, thấp hơn trung bình cộng 31,67."
    },
    {
     "q": "P(A) = 0.4, P(B) = 0.5, P(A and B) = 0.2. P(A or B) equals:",
     "opts": [
      "0.90",
      "0.70",
      "0.10"
     ],
     "ans": 1,
     "en": "Addition rule: P(A or B) = 0.4 + 0.5 − 0.2 = 0.7. (Note P(AB) = P(A)P(B) here, so A and B are independent but not mutually exclusive.)",
     "vi": "Quy tắc cộng: 0,4 + 0,5 − 0,2 = 0,7. (P(AB) = P(A)P(B) nên A, B độc lập nhưng không xung khắc.)"
    },
    {
     "q": "A two-asset portfolio is 50/50 in assets with σ = 10% and σ = 10%, ρ = 0. Portfolio standard deviation is closest to:",
     "opts": [
      "10.0%",
      "7.07%",
      "5.0%"
     ],
     "ans": 1,
     "en": "σp² = 0.25(100) + 0.25(100) + 0 = 50 → σp = √50 ≈ 7.07%. Zero correlation cuts risk well below 10%.",
     "vi": "σp² = 25 + 25 = 50 → σp ≈ 7,07%. Tương quan bằng 0 kéo rủi ro xuống hẳn dưới 10%."
    },
    {
     "q": "A binomial variable has n = 10 trials with p = 0.6. Its expected value and variance are:",
     "opts": [
      "6 and 2.4",
      "6 and 4.0",
      "4 and 2.4"
     ],
     "ans": 0,
     "en": "E = np = 6; Var = np(1−p) = 10 × 0.6 × 0.4 = 2.4.",
     "vi": "E = np = 6; Var = np(1−p) = 2,4."
    },
    {
     "q": "A 95% confidence interval for a mean return is −0.8% to +3.2%. At the 5% level, a two-tailed test of H₀: μ = 0 would:",
     "opts": [
      "Reject H₀",
      "Fail to reject H₀",
      "Depend on the sample size"
     ],
     "ans": 1,
     "en": "Zero lies inside the 95% CI, so the two-tailed 5% test cannot reject μ = 0 — CI and test are two views of the same computation.",
     "vi": "Số 0 nằm trong CI 95%, nên kiểm định hai đuôi 5% không thể bác bỏ μ = 0 — CI và kiểm định là hai góc nhìn của cùng một phép tính."
    },
    {
     "q": "The p-value of a test is 0.03. The correct interpretation is:",
     "opts": [
      "There is a 3% probability H₀ is true",
      "Reject H₀ at α = 5% but not at α = 1%",
      "Reject H₀ at α = 1% but not at α = 5%"
     ],
     "ans": 1,
     "en": "The p-value is the smallest α at which H₀ can be rejected: 0.03 < 0.05 (reject) but 0.03 > 0.01 (fail to reject). It is not the probability H₀ is true.",
     "vi": "p-value là mức α nhỏ nhất để bác bỏ H₀: 0,03 < 0,05 (bác bỏ) nhưng 0,03 > 0,01 (không). Không phải xác suất H₀ đúng."
    },
    {
     "q": "A simple regression of Y on X reports r = 0.80 between the variables. R² equals:",
     "opts": [
      "0.80",
      "0.64",
      "0.89"
     ],
     "ans": 1,
     "en": "In simple linear regression R² = r² = 0.64: X explains 64% of the variation in Y.",
     "vi": "Trong hồi quy đơn R² = r² = 0,64: X giải thích 64% biến thiên của Y."
    },
    {
     "q": "In a simple regression, the slope's t-statistic is 3.0. The regression's F-statistic equals:",
     "opts": [
      "3.0",
      "9.0",
      "1.73"
     ],
     "ans": 1,
     "en": "With one independent variable, F = t² = 9. The overall test and the slope test are the same test.",
     "vi": "Với một biến độc lập, F = t² = 9. Kiểm định tổng thể và kiểm định hệ số góc là một."
    },
    {
     "q": "Monte Carlo simulation differs from historical (bootstrap) simulation in that Monte Carlo:",
     "opts": [
      "Draws only from observed past returns",
      "Requires the analyst to specify the distributions",
      "Cannot model path-dependent payoffs"
     ],
     "ans": 1,
     "en": "Monte Carlo generates draws from distributions the analyst specifies (model risk); bootstrapping resamples the observed data and cannot produce outcomes outside history.",
     "vi": "Monte Carlo rút mẫu từ phân phối do analyst chỉ định (rủi ro mô hình); bootstrap lấy lại mẫu từ dữ liệu quan sát nên không tạo ra kết cục ngoài lịch sử."
    },
    {
     "q": "Which sampling method divides the population into subgroups and samples proportionally from each?",
     "opts": [
      "Simple random sampling",
      "Stratified random sampling",
      "Convenience sampling"
     ],
     "ans": 1,
     "en": "Stratified sampling guarantees each subgroup is represented in proportion, lowering sampling error versus simple random sampling — it underlies bond-index replication.",
     "vi": "Chọn mẫu phân tầng bảo đảm mỗi nhóm con có mặt đúng tỷ lệ, giảm sai số chọn mẫu so với ngẫu nhiên đơn — nền tảng của mô phỏng chỉ số trái phiếu."
    }
   ]
  },
  {
   "name": "Set H — Question Bank: Rates, Returns & TVM (M1–M2)",
   "qs": [
    {
     "q": "[M1] An individual can invest $19,000 today and receive $20,000 in one year's time. If her required rate of return is 5%, the rate of return on the investment is:",
     "opts": [
      "Less than the required rate of return",
      "Equal to the required rate of return",
      "Greater than the required rate of return"
     ],
     "ans": 2,
     "en": "Return = 20,000/19,000 − 1 = 5.26% > 5% required. The investment clears the hurdle.",
     "vi": "Lợi suất = 20.000/19.000 − 1 = 5,26% > mức yêu cầu 5%. Khoản đầu tư vượt ngưỡng."
    },
    {
     "q": "[M1] Ten yearly returns: 2.2, 6.2, 8.9, 9.3, 10.5, 11.7, 12.3, 14.1, 15.3, 18.4 (%). The geometric mean return is closest to:",
     "opts": [
      "9.62%",
      "10.80%",
      "10.89%"
     ],
     "ans": 1,
     "en": "Multiply all (1 + r): 1.022 × 1.062 × … × 1.184 = 2.7893; take the 10th root: 2.7893^(1/10) = 1.1080 → 10.80%. The arithmetic mean (10.89%) is always ≥ the geometric mean.",
     "vi": "Nhân tất cả (1 + r): 1,022 × 1,062 × … × 1,184 = 2,7893; lấy căn bậc 10: 1,1080 → 10,80%. Trung bình cộng (10,89%) luôn ≥ trung bình nhân."
    },
    {
     "q": "[M1] Over 16 months an investor earned 12%. The annualized return is closest to:",
     "opts": [
      "8.87%",
      "9.00%",
      "9.38%"
     ],
     "ans": 0,
     "en": "Annualized = (1.12)^(12/16) − 1 = 1.12^0.75 − 1 = 8.87%. Compound over the fraction of a year, don't scale linearly.",
     "vi": "Năm hóa = (1,12)^(12/16) − 1 = 1,12^0,75 − 1 = 8,87%. Lũy kế theo phần năm, không nhân chia tuyến tính."
    },
    {
     "q": "[M1] Hedge fund: Year 1 begins $30m, returns 10%. Year 2 begins $40m, returns −5%. Year 3 begins $30m, returns −5%. The money-weighted return is closest to:",
     "opts": [
      "−1.523%",
      "−0.749%",
      "−0.524%"
     ],
     "ans": 2,
     "en": "Rebuild the cash flows: end of Y1 the fund is worth 33 but Y2 begins at 40 → investor added 7. End of Y2 it is 38 but Y3 begins at 30 → investor withdrew 8. End of Y3: 30 × 0.95 = 28.5. Solve IRR of {t0: −30, t1: −7, t2: +8, t3: +28.5} → r ≈ −0.524% per year.",
     "vi": "Dựng lại dòng tiền: cuối N1 quỹ đáng 33 nhưng N2 mở đầu 40 → nhà đầu tư nộp thêm 7. Cuối N2 là 38 nhưng N3 mở đầu 30 → rút 8. Cuối N3: 30 × 0,95 = 28,5. Giải IRR của {t0: −30, t1: −7, t2: +8, t3: +28,5} → r ≈ −0,524%/năm."
    },
    {
     "q": "[M1] A pension fund must pay $10,000,000 in 15 years. If it earns 5% per year compounded semi-annually, the amount needed today is closest to:",
     "opts": [
      "$4,767,427",
      "$4,810,171",
      "$4,892,771"
     ],
     "ans": 0,
     "en": "Semi-annual rate 2.5% over 30 periods: PV = 10,000,000/1.025³⁰ = 10,000,000/2.0976 = $4,767,427.",
     "vi": "Lãi bán niên 2,5% qua 30 kỳ: PV = 10.000.000/1,025³⁰ = 10.000.000/2,0976 = $4.767.427."
    },
    {
     "q": "[M1] Revenue will be 50% higher in four years. The compound annual growth rate is closest to:",
     "opts": [
      "10.7%",
      "11.8%",
      "12.5%"
     ],
     "ans": 0,
     "en": "CAGR = 1.50^(1/4) − 1 = 10.67%. Dividing 50%/4 = 12.5% ignores compounding.",
     "vi": "CAGR = 1,50^(1/4) − 1 = 10,67%. Chia 50%/4 = 12,5% là bỏ quên lũy kế."
    },
    {
     "q": "[M1] CDs with equal maturity and risk yield 2.2%, 3.3%, and 4.4%. The opportunity cost of investing in CD 1 is closest to:",
     "opts": [
      "0.0%",
      "1.1%",
      "2.2%"
     ],
     "ans": 2,
     "en": "Opportunity cost = the return given up by not choosing the best alternative: 4.4% − 2.2% = 2.2% forgone by picking CD 1 over CD 3.",
     "vi": "Chi phí cơ hội = phần lợi suất từ bỏ khi không chọn phương án tốt nhất: 4,4% − 2,2% = 2,2% bị bỏ lỡ khi chọn CD 1 thay vì CD 3."
    },
    {
     "q": "[M1] A savings account pays a stated 3% in year 1 and 5% in year 2, compounded quarterly. €90,000 deposited at the start grows by the end of year 2 to closest to:",
     "opts": [
      "€97,200",
      "€97,335",
      "€97,455"
     ],
     "ans": 2,
     "en": "Year 1: ×(1 + 0.03/4)⁴ = ×1.03034 → €92,730. Year 2: ×(1 + 0.05/4)⁴ = ×1.05095 → €97,455. Quarterly compounding beats the simple 3%-then-5%.",
     "vi": "Năm 1: ×(1 + 0,03/4)⁴ = ×1,03034 → €92.730. Năm 2: ×(1 + 0,05/4)⁴ = ×1,05095 → €97.455. Ghép lãi theo quý cao hơn mức 3% rồi 5% đơn thuần."
    },
    {
     "q": "[M1] Term Deposit 1: 4% stated annual rate, quarterly compounding. The continuously compounded stated rate for Term Deposit 2 that makes the investor indifferent is closest to:",
     "opts": [
      "3.92%",
      "3.98%",
      "4.06%"
     ],
     "ans": 1,
     "en": "Match effective annual returns: e^r = (1.01)⁴ = 1.04060 → r = ln(1.04060) = 3.98%. Continuous compounding needs a LOWER stated rate to deliver the same effective return.",
     "vi": "Cân bằng lợi suất hiệu dụng năm: e^r = (1,01)⁴ = 1,04060 → r = ln(1,04060) = 3,98%. Ghép lãi liên tục cần lãi suất danh nghĩa THẤP hơn để cho cùng lợi suất hiệu dụng."
    },
    {
     "q": "[M1] Equity/Fixed-income returns: Y1: 7.20%/2.10%; Y2: 9.60%/−4.60%; Y3: −14.20%/4.70%. With 70/30 weights rebalanced annually, the portfolio's annual geometric mean return is closest to:",
     "opts": [
      "0.60%",
      "0.83%",
      "1.82%"
     ],
     "ans": 0,
     "en": "Yearly portfolio returns: Y1 = 0.7(7.2) + 0.3(2.1) = 5.67%; Y2 = 0.7(9.6) + 0.3(−4.6) = 5.34%; Y3 = 0.7(−14.2) + 0.3(4.7) = −8.53%. Geometric mean = (1.0567 × 1.0534 × 0.9147)^(1/3) − 1 = 0.60%.",
     "vi": "Lợi suất danh mục từng năm: N1 = 0,7(7,2) + 0,3(2,1) = 5,67%; N2 = 0,7(9,6) + 0,3(−4,6) = 5,34%; N3 = 0,7(−14,2) + 0,3(4,7) = −8,53%. Trung bình nhân = (1,0567 × 1,0534 × 0,9147)^(1/3) − 1 = 0,60%."
    },
    {
     "q": "[M1] A stock bought for $450 is sold right after a $2 dividend. If the holding period return is −10.2%, the sale price is closest to:",
     "opts": [
      "$402",
      "$404",
      "$406"
     ],
     "ans": 0,
     "en": "HPR = (P₁ + D − P₀)/P₀ → P₁ = 450 × (1 − 0.102) − 2 = 404.10 − 2 = $402.10.",
     "vi": "HPR = (P₁ + D − P₀)/P₀ → P₁ = 450 × (1 − 0,102) − 2 = 404,10 − 2 = $402,10."
    },
    {
     "q": "[M1] Buy at $100, receive a $7 dividend, sell at $107. The holding period return is closest to:",
     "opts": [
      "0%",
      "7%",
      "14%"
     ],
     "ans": 2,
     "en": "HPR = (107 + 7 − 100)/100 = 14%. Both the price gain and the dividend count.",
     "vi": "HPR = (107 + 7 − 100)/100 = 14%. Cả lãi giá lẫn cổ tức đều được tính."
    },
    {
     "q": "[M1] Which statement about the money-weighted return is most accurate?",
     "opts": [
      "It ignores cash withdrawals and additional investments",
      "It measures what the investor actually earned on the funds invested",
      "It should be used to compare different investment managers"
     ],
     "ans": 1,
     "en": "MWR is an IRR on the investor's own cash flows — it captures what those funds actually earned. Because deposit/withdrawal timing distorts it, manager comparisons use the time-weighted return instead.",
     "vi": "MWR là IRR trên dòng tiền của chính nhà đầu tư — đo đúng số tiền đó thực sự sinh lời bao nhiêu. Vì thời điểm nộp/rút bóp méo kết quả, so sánh nhà quản lý phải dùng time-weighted return."
    },
    {
     "q": "[M1] Which risk premium compensates for the risk of loss relative to fair value if the investment must be converted to cash quickly?",
     "opts": [
      "Liquidity premium",
      "Inflation premium",
      "Maturity premium"
     ],
     "ans": 0,
     "en": "That is the definition of the liquidity premium — compensation for potentially selling below fair value in a thin market.",
     "vi": "Đó chính là định nghĩa của liquidity premium — phần bù cho khả năng phải bán dưới giá hợp lý trong thị trường mỏng."
    },
    {
     "q": "[M1] With respect to portfolio return measures, which statement is most accurate?",
     "opts": [
      "The time-weighted return is sensitive to additions and withdrawals of funds",
      "The money-weighted return and IRR calculations are similar",
      "The money-weighted return is preferred for evaluating portfolio managers"
     ],
     "ans": 1,
     "en": "The MWR IS an IRR applied to portfolio cash flows. TWR is designed to be immune to flows, which is exactly why it — not MWR — evaluates managers.",
     "vi": "MWR CHÍNH LÀ IRR áp lên dòng tiền danh mục. TWR được thiết kế miễn nhiễm với dòng nộp/rút — vì thế nó, chứ không phải MWR, dùng đánh giá nhà quản lý."
    },
    {
     "q": "[M2] Option 1: $136,000 today. Option 2: 30 annual payments of $12,000 starting in one year. Option 3: 20 annual payments of $13,000 starting today. At 8%, the highest-PV option is:",
     "opts": [
      "Option 1",
      "Option 2",
      "Option 3"
     ],
     "ans": 2,
     "en": "Option 2 (ordinary annuity): 12,000 × [1 − 1.08⁻³⁰]/0.08 = $135,093. Option 3 (annuity due): 13,000 × [1 − 1.08⁻²⁰]/0.08 × 1.08 = $137,847. Option 3 > Option 1 ($136,000) > Option 2.",
     "vi": "Phương án 2 (niên kim thường): 12.000 × [1 − 1,08⁻³⁰]/0,08 = $135.093. Phương án 3 (niên kim đầu kỳ): 13.000 × [1 − 1,08⁻²⁰]/0,08 × 1,08 = $137.847. PA3 > PA1 ($136.000) > PA2."
    },
    {
     "q": "[M2] Four annual tuition fees of $50,000, payable at the beginning of each year, starting 10 years from today. At 3%, the amount required today is closest to:",
     "opts": [
      "$138,294",
      "$142,442",
      "$146,716"
     ],
     "ans": 1,
     "en": "Payments at t = 10, 11, 12, 13. Value at t = 9 as an ordinary annuity: 50,000 × [1 − 1.03⁻⁴]/0.03 = 185,855. Discount 9 years: 185,855/1.03⁹ = $142,442.",
     "vi": "Các khoản chi tại t = 10, 11, 12, 13. Giá trị tại t = 9 theo niên kim thường: 50.000 × [1 − 1,03⁻⁴]/0,03 = 185.855. Chiết khấu 9 năm: 185.855/1,03⁹ = $142.442."
    },
    {
     "q": "[M2] An investment needs 10 equal annual payments starting today and pays $500,000 fifteen years from today. At 4%, the required annual payment is closest to:",
     "opts": [
      "$32,913",
      "$34,230",
      "$40,044"
     ],
     "ans": 0,
     "en": "PV of the payout: 500,000/1.04¹⁵ = 277,632. Set equal to an annuity due: X × [1 − 1.04⁻¹⁰]/0.04 × 1.04 = X × 8.4353 → X = 277,632/8.4353 = $32,913.",
     "vi": "PV của khoản nhận: 500.000/1,04¹⁵ = 277.632. Cho bằng niên kim đầu kỳ: X × [1 − 1,04⁻¹⁰]/0,04 × 1,04 = X × 8,4353 → X = 277.632/8,4353 = $32.913."
    },
    {
     "q": "[M2] $1,000 annually for five years, first payment three years from today. At 6%, the present value today is closest to:",
     "opts": [
      "$3,537",
      "$3,749",
      "$4,212"
     ],
     "ans": 1,
     "en": "An ordinary annuity with the first payment at t = 3 is valued one period earlier, at t = 2: 1,000 × [1 − 1.06⁻⁵]/0.06 = 4,212.36. Discount two more years: 4,212.36/1.06² = $3,749.",
     "vi": "Niên kim thường với khoản đầu tại t = 3 được định giá lùi một kỳ, tại t = 2: 1.000 × [1 − 1,06⁻⁵]/0,06 = 4.212,36. Chiết khấu thêm hai năm: 4.212,36/1,06² = $3.749."
    }
   ]
  },
  {
   "name": "Set I — Question Bank: Statistics, Probability & Portfolio Math (M3–M5)",
   "qs": [
    {
     "q": "[M3] A continuous distribution's left tail is longer than its right tail. The distribution has:",
     "opts": [
      "Leptokurtosis",
      "Positive skewness",
      "Negative skewness"
     ],
     "ans": 2,
     "en": "A longer LEFT tail = negative (left) skew: extreme losses stretch the distribution leftward. Kurtosis is about tail thickness, not asymmetry.",
     "vi": "Đuôi TRÁI dài hơn = lệch âm (lệch trái): các khoản lỗ cực đoan kéo phân phối về bên trái. Kurtosis nói về độ dày đuôi, không phải độ bất đối xứng."
    },
    {
     "q": "[M3] Sample returns: −2%, −1%, 1%, 2%. The mean absolute deviation is:",
     "opts": [
      "Less than the sample standard deviation",
      "Equal to the sample standard deviation",
      "Greater than the sample standard deviation"
     ],
     "ans": 0,
     "en": "Mean = 0. MAD = (2 + 1 + 1 + 2)/4 = 1.5%. Sample s = √[(4 + 1 + 1 + 4)/3] = √3.33 = 1.83%. MAD ≤ s in general — squaring weights large deviations more heavily.",
     "vi": "Trung bình = 0. MAD = (2 + 1 + 1 + 2)/4 = 1,5%. Độ lệch chuẩn mẫu = √[(4 + 1 + 1 + 4)/3] = 1,83%. MAD ≤ s nói chung — bình phương đánh trọng số nặng hơn cho các sai lệch lớn."
    },
    {
     "q": "[M3] Seven fund returns: 12%, 7%, 5%, 4%, 8%, 3%, 3%. The second quartile return is:",
     "opts": [
      "4%",
      "5%",
      "6%"
     ],
     "ans": 1,
     "en": "Q2 = the median. Sorted: 3, 3, 4, 5, 7, 8, 12 → the 4th of 7 values = 5%.",
     "vi": "Q2 = trung vị. Sắp xếp: 3, 3, 4, 5, 7, 8, 12 → giá trị thứ 4 trong 7 = 5%."
    },
    {
     "q": "[M3] EPS of four companies: −£0.50, £0.50, £2.50, £5.50. The 50th percentile is closest to:",
     "opts": [
      "£1.50",
      "£2.00",
      "£2.50"
     ],
     "ans": 0,
     "en": "With an even count, the median is the average of the two middle values: (0.50 + 2.50)/2 = £1.50.",
     "vi": "Với số quan sát chẵn, trung vị là trung bình của hai giá trị giữa: (0,50 + 2,50)/2 = £1,50."
    },
    {
     "q": "[M3] Q1 = 11, Q2 = 62, Q3 = 93, Q4 = 359. The interquartile range equals:",
     "opts": [
      "31",
      "82",
      "348"
     ],
     "ans": 1,
     "en": "IQR = Q3 − Q1 = 93 − 11 = 82 — the span of the middle 50% of the data.",
     "vi": "IQR = Q3 − Q1 = 93 − 11 = 82 — độ trải của 50% dữ liệu ở giữa."
    },
    {
     "q": "[M3] Which measure best quantifies risk per unit of mean return?",
     "opts": [
      "Sharpe ratio",
      "Standard deviation",
      "Coefficient of variation"
     ],
     "ans": 2,
     "en": "CV = σ/mean: risk PER unit of return. The Sharpe ratio is the inverse concept — excess return per unit of risk.",
     "vi": "CV = σ/trung bình: rủi ro TRÊN mỗi đơn vị lợi suất. Sharpe là khái niệm ngược — lợi suất vượt trội trên mỗi đơn vị rủi ro."
    },
    {
     "q": "[M3] Discarding the lowest and highest 2.5% of values and averaging the remaining 95% produces a:",
     "opts": [
      "Trimmed mean",
      "Harmonic mean",
      "Winsorized mean"
     ],
     "ans": 0,
     "en": "Trimming DELETES the tails. Winsorizing would instead REPLACE tail values with the cutoff values and keep all observations.",
     "vi": "Trimmed là XÓA phần đuôi. Winsorized thì THAY các giá trị đuôi bằng giá trị ngưỡng và giữ đủ số quan sát."
    },
    {
     "q": "[M3] Ranked ascending, the 19th observation in a sample of 75 lies in the second:",
     "opts": [
      "Decile",
      "Quintile",
      "Quartile"
     ],
     "ans": 1,
     "en": "Location of the 25th percentile: L = (75 + 1) × 0.25 = 19 — so observation 19 marks the TOP of the first quartile. Quintile boundaries sit at L = 15.2 and 30.4, so #19 falls inside the second quintile (20%–40% band). Second decile ends at L = 15.2, so it's not that either.",
     "vi": "Vị trí phân vị 25: L = (75 + 1) × 0,25 = 19 — quan sát 19 nằm ĐÚNG ranh giới trên của tứ phân vị thứ nhất. Ranh giới ngũ phân vị tại L = 15,2 và 30,4, nên #19 nằm trong ngũ phân vị thứ hai (dải 20%–40%). Thập phân vị thứ hai kết thúc tại L = 15,2 nên cũng không phải."
    },
    {
     "q": "[M3] In a negatively skewed unimodal distribution, the highest value belongs to the:",
     "opts": [
      "Mean",
      "Mode",
      "Median"
     ],
     "ans": 1,
     "en": "Negative skew ordering: mean < median < mode. The long left tail drags the mean down the most; the mode stays at the peak.",
     "vi": "Thứ tự khi lệch âm: mean < median < mode. Đuôi trái dài kéo mean xuống mạnh nhất; mode đứng ở đỉnh."
    },
    {
     "q": "[M3] For a continuous positively skewed unimodal distribution:",
     "opts": [
      "Both the mode and the median are less than the mean",
      "Both the mode and the median are greater than the mean",
      "The mode is less than the mean and the median is greater than the mean"
     ],
     "ans": 0,
     "en": "Positive skew: mode < median < mean — the long right tail pulls the mean upward past both.",
     "vi": "Lệch dương: mode < median < mean — đuôi phải dài kéo mean vượt lên trên cả hai."
    },
    {
     "q": "[M3] Mean return 1.0%, standard deviation 2.7%, minimum target return 1.0%. The sample target semideviation is:",
     "opts": [
      "Less than 2.7%",
      "Equal to 2.7%",
      "Greater than 2.7%"
     ],
     "ans": 0,
     "en": "Target semideviation sums squared shortfalls ONLY for observations below the target, yet divides by the same n − 1. Dropping the above-target terms makes the sum smaller → semideviation < full standard deviation.",
     "vi": "Target semideviation chỉ cộng bình phương phần hụt của các quan sát DƯỚI mục tiêu, nhưng vẫn chia cho cùng n − 1. Bỏ các số hạng trên mục tiêu làm tổng nhỏ đi → semideviation < độ lệch chuẩn đầy đủ."
    },
    {
     "q": "[M3] Correlation between two variables measures:",
     "opts": [
      "Only their linear relationship",
      "Only their non-linear relationship",
      "Both linear and non-linear relationships"
     ],
     "ans": 0,
     "en": "Correlation captures LINEAR association only — a perfect curve (e.g. y = x²) can show near-zero correlation. Always plot the data.",
     "vi": "Tương quan chỉ bắt quan hệ TUYẾN TÍNH — một đường cong hoàn hảo (như y = x²) có thể cho tương quan gần 0. Luôn vẽ dữ liệu ra xem."
    },
    {
     "q": "[M3] Five annual returns: −23%, 20%, 3%, 13%, −1%. With a 6% target, the target downside deviation is closest to:",
     "opts": [
      "12%",
      "13%",
      "15%"
     ],
     "ans": 2,
     "en": "Below-target years: −23 (shortfall 29), 3 (shortfall 3), −1 (shortfall 7). Sum of squares = 841 + 9 + 49 = 899. Divide by n − 1 = 4 → 224.75; √224.75 = 14.99% ≈ 15%.",
     "vi": "Các năm dưới mục tiêu: −23 (hụt 29), 3 (hụt 3), −1 (hụt 7). Tổng bình phương = 841 + 9 + 49 = 899. Chia n − 1 = 4 → 224,75; √224,75 = 14,99% ≈ 15%."
    },
    {
     "q": "[M3] The coefficient of variation of monthly returns is the ratio of the:",
     "opts": [
      "Standard deviation of returns to the mean return",
      "Mean excess return to the standard deviation",
      "Standard deviation of returns to the mean excess return"
     ],
     "ans": 0,
     "en": "CV = σ/mean — plain mean, no risk-free adjustment. Option B describes the Sharpe ratio.",
     "vi": "CV = σ/trung bình — trung bình thường, không trừ lãi phi rủi ro. Phương án B mô tả Sharpe ratio."
    },
    {
     "q": "[M4] X takes 35, 50, 80 with probabilities 0.20, 0.30, 0.50. The standard deviation of X is closest to:",
     "opts": [
      "18.73",
      "20.00",
      "22.91"
     ],
     "ans": 0,
     "en": "E(X) = 0.2(35) + 0.3(50) + 0.5(80) = 62. Var = 0.2(35−62)² + 0.3(50−62)² + 0.5(80−62)² = 145.8 + 43.2 + 162 = 351 → σ = √351 = 18.73.",
     "vi": "E(X) = 0,2(35) + 0,3(50) + 0,5(80) = 62. Var = 0,2(35−62)² + 0,3(50−62)² + 0,5(80−62)² = 145,8 + 43,2 + 162 = 351 → σ = √351 = 18,73."
    },
    {
     "q": "[M4] Future EPS is $2.00, $2.20, or $2.40, equally likely. The variance (in $²) is closest to:",
     "opts": [
      "0.03",
      "0.16",
      "0.20"
     ],
     "ans": 0,
     "en": "Mean = 2.20. Var = [(−0.20)² + 0² + (0.20)²]/3 = 0.08/3 = 0.0267 ≈ 0.03. Probability-weighted — divide by 3, not 2, since these are probabilities, not a sample.",
     "vi": "Trung bình = 2,20. Var = [(−0,20)² + 0² + (0,20)²]/3 = 0,08/3 = 0,0267 ≈ 0,03. Trọng số theo xác suất — chia 3 chứ không phải 2, vì đây là phân phối xác suất, không phải mẫu."
    },
    {
     "q": "[M4] Favorable scenario (p = 0.60): dividend $2.00 with 0.80, $1.50 with 0.20. The expected dividend GIVEN the favorable scenario is closest to:",
     "opts": [
      "$1.14",
      "$1.37",
      "$1.90"
     ],
     "ans": 2,
     "en": "Conditional expectation uses only that branch: 0.80(2.00) + 0.20(1.50) = 1.60 + 0.30 = $1.90. The 0.60 scenario probability would only enter an UNCONDITIONAL expectation.",
     "vi": "Kỳ vọng có điều kiện chỉ dùng nhánh đó: 0,80(2,00) + 0,20(1,50) = 1,60 + 0,30 = $1,90. Xác suất kịch bản 0,60 chỉ xuất hiện khi tính kỳ vọng KHÔNG điều kiện."
    },
    {
     "q": "[M4] To calculate the expected portfolio return IN a bearish scenario, the most appropriate tool is:",
     "opts": [
      "The multiplication rule",
      "Conditional expected values",
      "The total probability rule for expected value"
     ],
     "ans": 1,
     "en": "“Expected return given the bearish scenario” is by definition a conditional expectation. The total probability rule would combine ALL scenarios into the unconditional mean.",
     "vi": "“Lợi suất kỳ vọng trong kịch bản giảm giá” theo định nghĩa là kỳ vọng có điều kiện. Quy tắc xác suất toàn phần dùng để gộp MỌI kịch bản thành kỳ vọng không điều kiện."
    },
    {
     "q": "[M5] Joint probabilities: (R_C = −15%, R_P = −10%) = 0.6; (R_C = 30%, R_P = 25%) = 0.4. The covariance between portfolio and currency returns is closest to:",
     "opts": [
      "294",
      "378",
      "819"
     ],
     "ans": 1,
     "en": "E(R_C) = 0.6(−15) + 0.4(30) = 3; E(R_P) = 0.6(−10) + 0.4(25) = 4. Cov = 0.6(−15−3)(−10−4) + 0.4(30−3)(25−4) = 0.6(252) + 0.4(567) = 151.2 + 226.8 = 378 %².",
     "vi": "E(R_C) = 0,6(−15) + 0,4(30) = 3; E(R_P) = 0,6(−10) + 0,4(25) = 4. Cov = 0,6(−18)(−14) + 0,4(27)(21) = 151,2 + 226,8 = 378 %²."
    },
    {
     "q": "[M5] A portfolio's safety-first ratio and coefficient of variation both equal 1.2. The return threshold R_L is:",
     "opts": [
      "Negative",
      "Zero",
      "Positive"
     ],
     "ans": 0,
     "en": "CV = σ/E(R) = 1.2 → σ = 1.2E(R). SFRatio = [E(R) − R_L]/σ = 1.2 → E(R) − R_L = 1.2σ = 1.44E(R) → R_L = −0.44E(R) < 0 for a positive expected return.",
     "vi": "CV = σ/E(R) = 1,2 → σ = 1,2E(R). SFRatio = [E(R) − R_L]/σ = 1,2 → E(R) − R_L = 1,2σ = 1,44E(R) → R_L = −0,44E(R) < 0 khi lợi suất kỳ vọng dương."
    },
    {
     "q": "[M5] Two securities have correlation 0.5 and each has a return standard deviation of 9%. Their covariance (in %²) is closest to:",
     "opts": [
      "20.3",
      "40.5",
      "61.7"
     ],
     "ans": 1,
     "en": "Cov = ρ × σ₁ × σ₂ = 0.5 × 9 × 9 = 40.5 %².",
     "vi": "Cov = ρ × σ₁ × σ₂ = 0,5 × 9 × 9 = 40,5 %²."
    },
    {
     "q": "[M5] If two assets' returns exhibit perfect positive correlation, the two-asset portfolio's standard deviation is:",
     "opts": [
      "Less than the weighted average standard deviation",
      "Equal to the weighted average standard deviation",
      "Greater than the weighted average standard deviation"
     ],
     "ans": 1,
     "en": "With ρ = +1 there is zero diversification benefit: σp collapses to exactly w₁σ₁ + w₂σ₂. Any ρ < 1 pulls σp below the weighted average.",
     "vi": "Với ρ = +1 không có lợi ích đa dạng hóa: σp thu về đúng w₁σ₁ + w₂σ₂. Bất kỳ ρ < 1 nào cũng kéo σp xuống dưới bình quân gia quyền."
    }
   ]
  },
  {
   "name": "Set J — Question Bank: Simulation, Sampling & Hypothesis Testing (M6–M8)",
   "qs": [
    {
     "q": "[M6] Bootstrap resampling:",
     "opts": [
      "Repeatedly draws samples without replacement",
      "Can be used to estimate the standard error of a population median",
      "Relies on an analytical formula to estimate the distribution of estimators"
     ],
     "ans": 1,
     "en": "Bootstrap draws WITH replacement and builds the estimator's distribution empirically — no formula needed. Its strength is exactly statistics with no analytical standard error, like the median.",
     "vi": "Bootstrap rút mẫu CÓ hoàn lại và dựng phân phối của ước lượng bằng thực nghiệm — không cần công thức. Sức mạnh của nó chính là các thống kê không có công thức sai số chuẩn giải tích, như trung vị."
    },
    {
     "q": "[M6] Y = exp(X) is lognormally distributed, where X is normal. The distribution of Y:",
     "opts": [
      "Is skewed to the left",
      "Is often used to model stock prices",
      "Has a mean equal to exp(μ), where μ is the mean of X"
     ],
     "ans": 1,
     "en": "Lognormal is right-skewed and bounded below by zero — perfect for prices, which can't go negative. Its mean is exp(μ + σ²/2), not exp(μ).",
     "vi": "Lognormal lệch phải và bị chặn dưới tại 0 — hợp để mô hình hóa giá cổ phiếu vốn không thể âm. Trung bình của nó là exp(μ + σ²/2), không phải exp(μ)."
    },
    {
     "q": "[M6] The lognormal distribution is:",
     "opts": [
      "Negatively skewed",
      "Bounded below by zero",
      "Widely used for modeling the probability distribution of asset returns"
     ],
     "ans": 1,
     "en": "Lognormal values are always positive (bounded below by zero) and positively skewed. Convention: lognormal for PRICES, normal for (log) RETURNS — returns can be negative.",
     "vi": "Giá trị lognormal luôn dương (chặn dưới tại 0) và lệch dương. Quy ước: lognormal cho GIÁ, normal cho LỢI SUẤT (log) — vì lợi suất có thể âm."
    },
    {
     "q": "[M6] Both the normal and the lognormal distribution:",
     "opts": [
      "Are symmetrical",
      "Are completely described by two parameters",
      "Have outcomes spanning all real numbers from −∞ to +∞"
     ],
     "ans": 1,
     "en": "Both are pinned down by μ and σ (the lognormal by the parameters of its underlying normal). Only the normal is symmetric and spans the whole real line.",
     "vi": "Cả hai được xác định trọn vẹn bởi μ và σ (lognormal theo tham số của phân phối normal nền). Chỉ normal mới đối xứng và trải khắp trục số thực."
    },
    {
     "q": "[M7] Interviewing a simple random sample of ten consumers from three randomly selected cities exemplifies:",
     "opts": [
      "Cluster sampling",
      "Systematic sampling",
      "Stratified random sampling"
     ],
     "ans": 0,
     "en": "Cities are randomly chosen clusters, then units are sampled within them — two-stage cluster sampling. Stratified sampling would draw from EVERY city (stratum), not just three.",
     "vi": "Các thành phố là cụm được chọn ngẫu nhiên, rồi lấy mẫu bên trong — cluster sampling hai giai đoạn. Stratified phải rút từ MỌI thành phố (tầng), không phải chỉ ba."
    },
    {
     "q": "[M7] The central limit theorem states the sampling distribution of the sample mean is approximately normal for large samples:",
     "opts": [
      "If the population distribution is normal",
      "If the population distribution is symmetrical",
      "For populations described by any probability distribution"
     ],
     "ans": 2,
     "en": "The power of the CLT is precisely that it needs NO distributional assumption about the population (finite variance suffices) — normality of the mean emerges for large n regardless.",
     "vi": "Sức mạnh của CLT nằm đúng ở chỗ KHÔNG cần giả định gì về phân phối tổng thể (chỉ cần phương sai hữu hạn) — tính chuẩn của trung bình mẫu tự xuất hiện khi n lớn."
    },
    {
     "q": "[M7] Population: mean net income $2.4m, standard deviation $3.2m. For a sample of 36 companies, the standard error of the sample mean is closest to:",
     "opts": [
      "$88,889",
      "$400,000",
      "$533,333"
     ],
     "ans": 2,
     "en": "SE = σ/√n = 3,200,000/√36 = 3,200,000/6 = $533,333. The population mean is irrelevant to the SE.",
     "vi": "SE = σ/√n = 3.200.000/√36 = $533.333. Trung bình tổng thể không liên quan đến SE."
    },
    {
     "q": "[M7] Using only the 12 mutual funds in a standard internal database is best described as:",
     "opts": [
      "Cluster sampling",
      "Judgmental sampling",
      "Convenience sampling"
     ],
     "ans": 2,
     "en": "Data chosen because they are easily accessible = convenience sampling. Judgmental sampling would select funds deliberately using expert criteria.",
     "vi": "Dữ liệu được chọn vì dễ với tới = convenience sampling. Judgmental là chủ động chọn theo tiêu chí chuyên môn."
    },
    {
     "q": "[M7] A sampling distribution of a statistic must be constructed from samples that are:",
     "opts": [
      "Large",
      "Of the same size",
      "From the same stratum"
     ],
     "ans": 1,
     "en": "A sampling distribution is the distribution of a statistic across all possible samples of a FIXED size n — equal size is the defining requirement.",
     "vi": "Phân phối mẫu là phân phối của một thống kê trên mọi mẫu khả dĩ có CÙNG cỡ n — cỡ mẫu bằng nhau là yêu cầu định nghĩa."
    },
    {
     "q": "[M7] A lognormal population has σ = 50. Samples of size 100 are drawn. The sampling distribution of the sample mean is most likely:",
     "opts": [
      "Skewed right with a standard deviation of 50",
      "Approximately symmetric with a standard deviation of 5",
      "Approximately symmetric with a standard deviation of 0.5"
     ],
     "ans": 1,
     "en": "CLT: with n = 100 the mean's distribution is approximately normal despite the skewed population, and SE = 50/√100 = 5.",
     "vi": "CLT: với n = 100, phân phối của trung bình mẫu xấp xỉ chuẩn dù tổng thể lệch, và SE = 50/√100 = 5."
    },
    {
     "q": "[M8] The power of a test is best described as the:",
     "opts": [
      "Same as the level of significance",
      "Probability of rejecting a true null hypothesis",
      "Probability of correctly rejecting the null hypothesis"
     ],
     "ans": 2,
     "en": "Power = 1 − P(Type II error) = the probability of rejecting the null when it is FALSE. Rejecting a TRUE null is the Type I error (= significance level α).",
     "vi": "Power = 1 − P(sai lầm loại II) = xác suất bác bỏ H₀ khi nó SAI. Bác bỏ H₀ ĐÚNG là sai lầm loại I (= mức ý nghĩa α)."
    },
    {
     "q": "[M8] A nonparametric test is most appropriate when:",
     "opts": [
      "Comparing differences between means",
      "Data are given in ranks",
      "Data meet distributional assumptions"
     ],
     "ans": 1,
     "en": "Ranks carry order but not magnitude — parametric machinery doesn't apply. When distributional assumptions DO hold, parametric tests are preferred (more powerful).",
     "vi": "Thứ hạng mang thông tin thứ tự nhưng không mang độ lớn — công cụ tham số không dùng được. Khi giả định phân phối ĐƯỢC thỏa, ưu tiên kiểm định tham số (mạnh hơn)."
    },
    {
     "q": "[M8] Testing the mean difference between two normally distributed populations using DEPENDENT samples with unknown variances calls for a:",
     "opts": [
      "Chi-square test",
      "Paired comparisons t-test",
      "t-test with a pooled estimator of the common variance"
     ],
     "ans": 1,
     "en": "Dependent (matched) samples → work with the paired differences: a paired t-test. The pooled-variance t-test requires INDEPENDENT samples.",
     "vi": "Mẫu phụ thuộc (bắt cặp) → làm việc trên chênh lệch từng cặp: paired t-test. Kiểm định t gộp phương sai đòi hỏi mẫu ĐỘC LẬP."
    },
    {
     "q": "[M8] The test statistic for the variance of a single normally distributed population is the:",
     "opts": [
      "z-statistic",
      "F-statistic",
      "Chi-square statistic"
     ],
     "ans": 2,
     "en": "One variance → chi-square: (n − 1)s²/σ₀². The F-statistic compares TWO variances.",
     "vi": "Một phương sai → chi-square: (n − 1)s²/σ₀². Thống kê F dùng để so HAI phương sai."
    },
    {
     "q": "[M8] All else equal, specifying a smaller significance level makes the probability of a Type II error:",
     "opts": [
      "Decrease",
      "Remain the same",
      "Increase"
     ],
     "ans": 2,
     "en": "Shrinking α makes rejecting harder — you accept the null more often, including when it is false. The two error probabilities trade off; only a larger sample cuts both.",
     "vi": "Thu nhỏ α làm việc bác bỏ khó hơn — bạn chấp nhận H₀ thường xuyên hơn, kể cả khi nó sai. Hai loại sai lầm đánh đổi nhau; chỉ tăng cỡ mẫu mới giảm được cả hai."
    },
    {
     "q": "[M8] Sample: n = 64, mean $32,000, s = $12,000. Testing whether the population mean exceeds $11,000, the test statistic is closest to:",
     "opts": [
      "1.8",
      "14.0",
      "21.3"
     ],
     "ans": 1,
     "en": "t = (x̄ − μ₀)/(s/√n) = (32,000 − 11,000)/(12,000/8) = 21,000/1,500 = 14.0.",
     "vi": "t = (x̄ − μ₀)/(s/√n) = (32.000 − 11.000)/(12.000/8) = 21.000/1.500 = 14,0."
    }
   ]
  },
  {
   "name": "Set K — Question Bank: Correlation, Regression & Big Data (M9–M11)",
   "qs": [
    {
     "q": "[M9] Which is best described as a nonparametric hypothesis test concerning correlation? A test using the:",
     "opts": [
      "Pearson correlation coefficient",
      "Bivariate correlation coefficient",
      "Spearman rank correlation coefficient"
     ],
     "ans": 2,
     "en": "Spearman works on RANKS, so it needs no distributional assumptions — the nonparametric counterpart of the Pearson (parametric) correlation test.",
     "vi": "Spearman làm việc trên THỨ HẠNG nên không cần giả định phân phối — bản nonparametric của kiểm định tương quan Pearson (parametric)."
    },
    {
     "q": "[M9] Ranks of four paired observations — X: 1, 2, 3, 4; Y: 2, 3, 4, 1. The Spearman rank correlation is closest to:",
     "opts": [
      "−0.2",
      "0.8",
      "1.0"
     ],
     "ans": 0,
     "en": "Differences d = −1, −1, −1, +3 → Σd² = 1 + 1 + 1 + 9 = 12. r_s = 1 − 6Σd²/[n(n² − 1)] = 1 − 72/(4 × 15) = 1 − 1.2 = −0.2.",
     "vi": "Chênh lệch d = −1, −1, −1, +3 → Σd² = 12. r_s = 1 − 6Σd²/[n(n² − 1)] = 1 − 72/60 = −0,2."
    },
    {
     "q": "[M9] A contingency table classifies stocks by market cap (small/medium/large) and beta (high/medium/low). The degrees of freedom for the chi-square test of independence are:",
     "opts": [
      "4",
      "6",
      "9"
     ],
     "ans": 0,
     "en": "df = (rows − 1)(columns − 1) = (3 − 1)(3 − 1) = 4.",
     "vi": "df = (số hàng − 1)(số cột − 1) = (3 − 1)(3 − 1) = 4."
    },
    {
     "q": "[M9] For a hypothesis test of the correlation between two normally distributed variables with sample size n, the degrees of freedom are:",
     "opts": [
      "n − 2",
      "n − 1",
      "2n − 2"
     ],
     "ans": 0,
     "en": "Two means are estimated on the way to r, so df = n − 2 — the same df as the slope test in simple regression, which is no accident.",
     "vi": "Hai trung bình được ước lượng trên đường tính r, nên df = n − 2 — trùng với df của kiểm định hệ số góc trong hồi quy đơn, không hề ngẫu nhiên."
    },
    {
     "q": "[M9] With n = 51 and sample correlation 0.6, the t-statistic for the correlation test is closest to:",
     "opts": [
      "0.07",
      "5.25",
      "6.64"
     ],
     "ans": 1,
     "en": "t = r√(n − 2)/√(1 − r²) = 0.6 × √49/√(1 − 0.36) = 0.6 × 7/0.8 = 5.25.",
     "vi": "t = r√(n − 2)/√(1 − r²) = 0,6 × 7/0,8 = 5,25."
    },
    {
     "q": "[M10] An underlying assumption of the simple linear regression model is that the residuals:",
     "opts": [
      "Are normally distributed",
      "Have high correlations across observations",
      "Have different variances across observations"
     ],
     "ans": 0,
     "en": "The assumptions: linearity, normally distributed residuals, homoskedasticity (SAME variance), and independence (NO correlation across observations). Options B and C state the violations.",
     "vi": "Bộ giả định: tuyến tính, phần dư phân phối chuẩn, phương sai đồng nhất (CÙNG phương sai), và độc lập (KHÔNG tương quan giữa các quan sát). Phương án B và C là các vi phạm."
    },
    {
     "q": "[M10] Regressing the supply of wheat on the demand for corn: the supply of wheat is the:",
     "opts": [
      "Indicator variable",
      "Explained variable",
      "Independent variable"
     ],
     "ans": 1,
     "en": "The variable being explained (the Y, dependent variable) is the supply of wheat; corn demand is the explanatory X.",
     "vi": "Biến được giải thích (Y, biến phụ thuộc) là cung lúa mì; cầu ngô là biến giải thích X."
    },
    {
     "q": "[M10] All else equal, a wider prediction interval for the dependent variable results from an increase in the:",
     "opts": [
      "Sample size",
      "Level of significance",
      "Standard error of the estimate"
     ],
     "ans": 2,
     "en": "A larger SEE means more scatter around the line → wider intervals. Bigger samples and a HIGHER significance level (smaller critical t) both NARROW the interval.",
     "vi": "SEE lớn hơn nghĩa là dữ liệu phân tán quanh đường hồi quy nhiều hơn → khoảng rộng hơn. Mẫu lớn hơn và mức ý nghĩa CAO hơn (t tới hạn nhỏ hơn) đều làm khoảng HẸP lại."
    },
    {
     "q": "[M10] Slope 1.0, intercept 1.2%, standard error of the forecast 1.4%, critical t = ±2.032. With a forecast index return of 3.5%, the 95% prediction interval for the stock's return is closest to:",
     "opts": [
      "0.7% to 6.3%",
      "1.9% to 7.5%",
      "3.3% to 6.1%"
     ],
     "ans": 1,
     "en": "Point forecast: ŷ = 1.2 + 1.0 × 3.5 = 4.7%. Interval: 4.7 ± 2.032 × 1.4 = 4.7 ± 2.84 → 1.9% to 7.5%.",
     "vi": "Dự báo điểm: ŷ = 1,2 + 1,0 × 3,5 = 4,7%. Khoảng: 4,7 ± 2,032 × 1,4 = 4,7 ± 2,84 → 1,9% đến 7,5%."
    },
    {
     "q": "[M10] In simple linear regression, the total sum of squares best describes:",
     "opts": [
      "A scatter plot",
      "The variation of the dependent variable",
      "A paired observation between variables"
     ],
     "ans": 1,
     "en": "TSS = Σ(y − ȳ)² — the dependent variable's total variation, later split into explained (RSS) and unexplained (SSE) parts.",
     "vi": "TSS = Σ(y − ȳ)² — tổng biến thiên của biến phụ thuộc, sau đó được tách thành phần giải thích được (RSS) và phần dư (SSE)."
    },
    {
     "q": "[M10] A model where only the independent variable is in logarithmic form is the:",
     "opts": [
      "Log-lin model",
      "Lin-log model",
      "Log-log model"
     ],
     "ans": 1,
     "en": "Name order = (form of Y)-(form of X). Y linear, X logged → LIN-LOG. Log-lin logs Y only; log-log logs both.",
     "vi": "Thứ tự tên = (dạng của Y)-(dạng của X). Y tuyến tính, X lấy log → LIN-LOG. Log-lin chỉ log Y; log-log log cả hai."
    },
    {
     "q": "[M10] The null hypothesis for the F-distributed test statistic in simple linear regression tests whether the:",
     "opts": [
      "Slope is equal to zero",
      "Intercept is equal to zero",
      "Slope is not equal to zero"
     ],
     "ans": 0,
     "en": "H₀: b₁ = 0 (no linear relationship). In simple regression F = t² for the slope — the two tests are equivalent.",
     "vi": "H₀: b₁ = 0 (không có quan hệ tuyến tính). Trong hồi quy đơn, F = t² của hệ số góc — hai kiểm định tương đương."
    },
    {
     "q": "[M10] A data transformation may be needed to use simple linear regression when the:",
     "opts": [
      "Dependent variable is non-normally distributed",
      "Pairs of variables are uncorrelated",
      "Relationship between the variables is non-linear"
     ],
     "ans": 2,
     "en": "Transformations (logs, squares, reciprocals) exist to LINEARIZE a curved relationship so the linear model applies.",
     "vi": "Các phép biến đổi (log, bình phương, nghịch đảo) sinh ra để TUYẾN TÍNH HÓA quan hệ cong, giúp mô hình tuyến tính áp dụng được."
    },
    {
     "q": "[M10] A residual is best described as the difference between the observed value of the dependent variable and:",
     "opts": [
      "Its mean",
      "Its estimated value from the fitted sample regression line",
      "Its expected value from the true population relationship"
     ],
     "ans": 1,
     "en": "Residual = observed − FITTED (sample) value. The gap versus the true population line is the (unobservable) error term.",
     "vi": "Phần dư = giá trị quan sát − giá trị ƯỚC LƯỢNG từ đường hồi quy mẫu. Khoảng cách so với đường tổng thể thật là sai số (không quan sát được)."
    },
    {
     "q": "[M10] SSE = 280, sum of squares regression = 25, n = 30 paired observations. The standard error of the estimate is closest to:",
     "opts": [
      "2.5",
      "3.2",
      "10.0"
     ],
     "ans": 1,
     "en": "SEE = √[SSE/(n − 2)] = √(280/28) = √10 = 3.16. The regression sum of squares is a distractor here.",
     "vi": "SEE = √[SSE/(n − 2)] = √(280/28) = √10 = 3,16. Tổng bình phương hồi quy chỉ là số gây nhiễu."
    },
    {
     "q": "[M10] The standard error of the estimate is best described as:",
     "opts": [
      "A relative measure of fit",
      "The percentage of the dependent variable's variation that is explained",
      "A measure of the distance between observed values and those predicted by the regression"
     ],
     "ans": 2,
     "en": "SEE is an ABSOLUTE measure of scatter around the fitted line (in the units of Y). The 'percentage explained' describes R², a relative measure.",
     "vi": "SEE là thước đo TUYỆT ĐỐI của độ phân tán quanh đường hồi quy (theo đơn vị của Y). 'Phần trăm được giải thích' là R², thước đo tương đối."
    },
    {
     "q": "[M11] Which is most likely used to detect sentiment shifts in an analyst's commentary?",
     "opts": [
      "Tokenization",
      "Data curation",
      "Natural language processing"
     ],
     "ans": 2,
     "en": "Interpreting tone/sentiment in text is an NLP task. Tokenization is only a preprocessing step inside the NLP pipeline; curation is data cleaning.",
     "vi": "Đọc sắc thái/cảm xúc trong văn bản là bài toán NLP. Tokenization chỉ là bước tiền xử lý trong pipeline NLP; curation là làm sạch dữ liệu."
    },
    {
     "q": "[M11] The failure of machine learning models to predict accurately can result from:",
     "opts": [
      "Overfitting, but not underfitting",
      "Underfitting, but not overfitting",
      "Either overfitting or underfitting"
     ],
     "ans": 2,
     "en": "Overfitting memorizes noise (fails out-of-sample); underfitting misses the real pattern (fails everywhere). Both destroy predictive power.",
     "vi": "Overfitting học thuộc cả nhiễu (hỏng ngoài mẫu); underfitting bỏ lỡ quy luật thật (hỏng ở mọi nơi). Cả hai đều phá sức dự báo."
    },
    {
     "q": "[M11] In its broadest sense, fintech is best described as:",
     "opts": [
      "The vast amount of data generated by financial services",
      "Executing strategies through computer-generated algorithms",
      "Technological innovation in the design and delivery of financial services and products"
     ],
     "ans": 2,
     "en": "Fintech = technology-driven innovation across financial services. Option A describes Big Data; B describes algorithmic trading — both are subsets.",
     "vi": "Fintech = đổi mới dựa trên công nghệ trong thiết kế và cung cấp dịch vụ tài chính. Phương án A mô tả Big Data; B mô tả giao dịch thuật toán — đều chỉ là tập con."
    },
    {
     "q": "[M11] With respect to Big Data, which is most likely classified as alternative data?",
     "opts": [
      "Email communication data",
      "Corporate regulatory filings",
      "Data from derivative markets"
     ],
     "ans": 0,
     "en": "Alternative data come from non-traditional sources (individuals' digital exhaust, sensors, business processes). Filings and market data are traditional financial data.",
     "vi": "Dữ liệu thay thế đến từ nguồn phi truyền thống (dấu vết số của cá nhân, cảm biến, quy trình kinh doanh). Hồ sơ công bố và dữ liệu thị trường là dữ liệu tài chính truyền thống."
    },
    {
     "q": "[M11] The most recent advancement in fintech is applications that can:",
     "opts": [
      "Process data",
      "Automate tasks",
      "Make decisions"
     ],
     "ans": 2,
     "en": "The progression runs: process data → automate tasks → and, most recently, AI systems that make decisions themselves.",
     "vi": "Chuỗi tiến hóa: xử lý dữ liệu → tự động hóa tác vụ → và mới nhất, hệ thống AI tự ra quyết định."
    }
   ]
  }
 ]
};
