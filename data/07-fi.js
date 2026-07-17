/* =====================================================================
   Topic 07 — Fixed Income
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
 "id": "fi",
 "num": "07",
 "name": "Fixed Income",
 "vi": "Thu nhập cố định (Trái phiếu)",
 "w": [
  11,
  14
 ],
 "blurb": "Bond features and markets, pricing and yield measures, the price–yield relationship, duration & convexity, credit risk, and securitization.",
 "intro": {
  "en": "Fixed Income spans eight learning modules: instrument features and cash flows; issuance and markets; bond pricing; yields and spreads; the term structure; duration and convexity; credit risk; and securitization. It shares the heaviest exam weight with FSA and Equity, and it is relentlessly quantitative. Every module below pairs theory with diagrams and fully worked numbers — repo haircuts, full vs flat prices, forwards from spots, the duration lab, expected loss, tranche waterfalls — then drill the Quick checks and Practice Sets B–D.",
  "vi": "Fixed Income gồm tám learning modules: đặc điểm công cụ và dòng tiền; phát hành và thị trường; định giá trái phiếu; lợi suất và spread; cấu trúc kỳ hạn; duration và convexity; rủi ro tín dụng; và securitization. Topic này chia trọng số nặng nhất cùng FSA và Equity, và thuần tính toán. Mỗi module bên dưới kết hợp lý thuyết với sơ đồ và con số giải trọn — haircut repo, full vs flat price, forward từ spot, phòng lab duration, expected loss, waterfall tranche — sau đó luyện Quick checks và Practice Sets B–D."
 },
 "modules": [
  {
   "title": "Fixed-Income Instrument Features & Cash Flow Types",
   "sections": [
    {
     "h": "Instrument features",
     "en": "<ul><li>Key terms: <strong>par (face) value</strong>, <strong>coupon rate</strong> (fixed, floating = reference rate + spread, zero-coupon), <strong>maturity</strong>, currency, and the <strong>indenture</strong> (the legal contract) with covenants — <em>affirmative</em> (things the issuer must do) and <em>negative</em> (restrictions such as limits on additional debt).</li><li>Seniority: secured (backed by collateral) ranks above unsecured (debentures); within unsecured, senior above subordinated.</li><li>Contingency provisions: <strong>callable</strong> (issuer may redeem early — bad for investors, higher yield), <strong>putable</strong> (investor may sell back — good for investors, lower yield), <strong>convertible</strong> (exchangeable into shares).</li></ul>",
     "vi": "<ul><li>Thuật ngữ chính: <strong>mệnh giá</strong>, <strong>lãi suất coupon</strong> (cố định, thả nổi = lãi suất tham chiếu + spread, zero-coupon), <strong>kỳ hạn</strong>, đồng tiền, và <strong>indenture</strong> (hợp đồng pháp lý) với các cam kết — <em>affirmative</em> (việc phải làm) và <em>negative</em> (hạn chế, VD giới hạn vay thêm).</li><li>Thứ tự ưu tiên: có bảo đảm đứng trên không bảo đảm; trong nhóm không bảo đảm, senior đứng trên subordinated.</li><li>Điều khoản kèm theo: <strong>callable</strong> (tổ chức phát hành được mua lại sớm — bất lợi cho nhà đầu tư, lợi suất cao hơn), <strong>putable</strong> (nhà đầu tư được bán lại — có lợi, lợi suất thấp hơn), <strong>convertible</strong> (chuyển đổi thành cổ phiếu).</li></ul>"
    },
    {
     "h": "Cash flow structures: bullets, amortizers, floaters & indexed bonds",
     "en": "<ul><li><strong>Principal repayment styles:</strong> a <em>bullet</em> bond pays coupons only, principal at maturity; a <em>fully amortizing</em> bond spreads principal across payments (like a mortgage); <em>partially amortizing</em> leaves a balloon at maturity; a <strong>sinking fund</strong> retires principal on a schedule — lowering credit risk but adding reinvestment risk (bonds may be called for the sinking fund at par when rates have fallen).</li><li><strong>Coupon variations:</strong> <em>floating-rate notes</em> pay <strong>MRR + quoted margin</strong>, resetting each period (near-zero interest rate risk, but credit-driven price moves); <em>step-up</em> coupons rise on schedule; <em>credit-linked</em> coupons ratchet with ratings; <em>payment-in-kind (PIK)</em> pays interest in more bonds — a leverage red flag; <em>deferred/zero</em> coupons accrue instead of paying (all return is price accretion).</li><li><strong>Index-linked bonds:</strong> the common <em>capital-indexed</em> design (e.g., TIPS) scales the <strong>principal</strong> by inflation, so the fixed real coupon rate produces rising nominal coupons and an inflation-protected redemption; interest-indexed designs adjust the coupon only.</li><li><strong>Contingency provisions</strong> (embedded options): <em>callable</em> — issuer may redeem early (investor is short the call: price capped, higher yield); <em>putable</em> — investor may sell back (price floor, lower yield); <em>convertible</em> — investor may exchange into issuer shares (equity upside, lower coupon). Yield ranking for the same issuer: putable &lt; straight &lt; callable.</li></ul>",
     "vi": "<ul><li><strong>Kiểu hoàn trả gốc:</strong> trái phiếu <em>bullet</em> chỉ trả coupon, gốc trả cuối kỳ; <em>trả dần toàn phần</em> rải gốc vào từng kỳ (như khoản vay mua nhà); <em>trả dần một phần</em> để lại cục balloon cuối kỳ; <strong>quỹ hoàn trái (sinking fund)</strong> mua lại gốc theo lịch — giảm rủi ro tín dụng nhưng thêm rủi ro tái đầu tư (trái phiếu có thể bị gọi theo mệnh giá đúng lúc lãi suất đã giảm).</li><li><strong>Biến thể coupon:</strong> <em>trái phiếu thả nổi (FRN)</em> trả <strong>MRR + quoted margin</strong>, reset mỗi kỳ (rủi ro lãi suất gần bằng không, nhưng giá vẫn dao động theo tín dụng); coupon <em>step-up</em> tăng theo lịch; coupon <em>gắn xếp hạng</em> tăng khi bị hạ bậc; <em>PIK</em> trả lãi bằng thêm trái phiếu — cờ đỏ về đòn bẩy; <em>zero/deferred</em> coupon dồn tích thay vì chi trả (toàn bộ lợi nhuận là tăng giá).</li><li><strong>Trái phiếu chỉ số hóa:</strong> thiết kế phổ biến <em>capital-indexed</em> (như TIPS) điều chỉnh <strong>gốc</strong> theo lạm phát, nên coupon thực cố định tạo coupon danh nghĩa tăng dần và gốc được bảo vệ lạm phát; loại interest-indexed chỉ chỉnh coupon.</li><li><strong>Điều khoản kèm quyền chọn:</strong> <em>callable</em> — issuer được mua lại sớm (nhà đầu tư bán quyền call: giá bị chặn trần, yield cao hơn); <em>putable</em> — nhà đầu tư được bán lại (giá có sàn, yield thấp hơn); <em>convertible</em> — được đổi sang cổ phiếu (tiềm năng tăng giá cổ phần, coupon thấp hơn). Xếp hạng yield cùng issuer: putable &lt; thường &lt; callable.</li></ul>"
    },
    {
     "h": "The cash-flow zoo: one loan, four structures, plus floaters & linkers worked",
     "en": "<p><strong>Same $1,000 borrowed for 4 years at 6% — four repayment shapes:</strong></p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Structure</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Yearly payments</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Principal at maturity</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Credit-risk profile</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Bullet</td><td style=\"padding:7px;border:1px solid #E5E9F2\">coupon only: 60, 60, 60, 60</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">1,000</td><td style=\"padding:7px;border:1px solid #E5E9F2\">largest exposure at the end (balloon = the whole principal)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Fully amortizing</td><td style=\"padding:7px;border:1px solid #E5E9F2\">level 288.59 (interest + principal)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">0</td><td style=\"padding:7px;border:1px solid #E5E9F2\">exposure declines every year</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Partially amortizing</td><td style=\"padding:7px;border:1px solid #E5E9F2\">level payments sized to leave a balloon</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">e.g. 400 balloon</td><td style=\"padding:7px;border:1px solid #E5E9F2\">between the two</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Zero-coupon</td><td style=\"padding:7px;border:1px solid #E5E9F2\">nothing until maturity</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">1,000 (sold at deep discount)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">all cash at the end; maximum rate sensitivity</td></tr></table>\n<p><strong>Floater coupon worked.</strong> Coupon = market reference rate (MRR) + quoted margin, reset each period. MRR = 3.0%, quoted margin = 150 bps → next coupon = <strong>4.5%</strong>. Because the coupon chases market rates, a floater's price stays near par at each reset — its interest-rate risk is roughly the time to the <em>next reset</em>, not to maturity. Variants: cap (protects the issuer by limiting coupon rises), floor (protects the investor), inverse floaters (coupon = K − L × MRR — soars when rates fall).</p>\n<p><strong>Other coupon structures the exam names:</strong> step-up coupons (rate rises on schedule — often paired with a call; if the issuer doesn't call when the rate steps up, that's a negative signal), payment-in-kind (PIK — pays with more bonds instead of cash; a leveraged-issuer stress feature), deferred/split coupons (nothing early, higher later — project finance), and credit-linked coupons (coupon steps up if the rating falls — protects investors but can accelerate an issuer's spiral).</p>\n<p><strong>Inflation-linked worked (capital-indexed, TIPS-style).</strong> Par 1,000, real coupon 2%, CPI rises 3% in year 1: principal is indexed to 1,030 and the coupon = 2% × 1,030 = <strong>$20.60</strong>. Both coupon and redemption ride inflation — delivering a <em>real</em> yield. Interest-indexed versions adjust only the coupon; leave the principal fixed. Add the plumbing vocabulary — indenture (the contract), covenants (affirmative = must do; negative = may not do), collateral and credit enhancements, and domicile/currency/tax status — and module 0 is complete.</p>",
     "vi": "<p><strong>Cùng vay $1.000 kỳ hạn 4 năm lãi 6% — bốn hình dạng trả nợ (bảng):</strong> bullet — chỉ trả coupon 60 mỗi năm, gốc 1.000 dồn cuối kỳ (phơi nhiễm tín dụng lớn nhất ở cuối); fully amortizing — trả đều 288,59 gồm lãi + gốc, cuối kỳ gốc bằng 0, phơi nhiễm giảm dần; partially amortizing — trả đều nhưng chừa balloon (ví dụ 400) ở cuối, nằm giữa hai loại; zero-coupon — không trả gì đến đáo hạn, bán chiết khấu sâu, toàn bộ tiền ở cuối nên nhạy lãi suất nhất.</p>\n<p><strong>Coupon của floater bằng ví dụ.</strong> Coupon = lãi suất tham chiếu (MRR) + quoted margin, reset mỗi kỳ. MRR = 3,0%, quoted margin = 150 bps → coupon kỳ tới = <strong>4,5%</strong>. Vì coupon đuổi theo lãi thị trường, giá floater bám gần par ở mỗi lần reset — rủi ro lãi suất của nó xấp xỉ thời gian đến <em>lần reset kế</em>, không phải đến đáo hạn. Biến thể: cap (bảo vệ công ty phát hành bằng trần coupon), floor (bảo vệ nhà đầu tư), inverse floater (coupon = K − L × MRR — vọt lên khi lãi suất giảm).</p>\n<p><strong>Các cấu trúc coupon khác đề nêu tên:</strong> step-up (lãi tăng theo lịch — thường kèm quyền call; công ty không call khi lãi bước lên là tín hiệu xấu), payment-in-kind (PIK — trả bằng thêm trái phiếu thay vì tiền; đặc trưng của công ty đòn bẩy cao gặp căng thẳng), deferred/split coupon (đầu không trả, sau trả cao hơn — tài trợ dự án), credit-linked coupon (coupon tăng nếu bị hạ xếp hạng — bảo vệ nhà đầu tư nhưng có thể đẩy nhanh vòng xoáy của công ty).</p>\n<p><strong>Trái phiếu chỉ số lạm phát bằng ví dụ (capital-indexed, kiểu TIPS).</strong> Mệnh giá 1.000, coupon thực 2%, CPI tăng 3% năm 1: gốc được chỉ số hóa lên 1.030 và coupon = 2% × 1.030 = <strong>$20,60</strong>. Cả coupon lẫn tiền hoàn gốc chạy theo lạm phát — mang lại lợi suất <em>thực</em>. Bản interest-indexed chỉ điều chỉnh coupon, giữ gốc cố định. Thêm bộ từ vựng \"đường ống\" — indenture (hợp đồng), covenants (affirmative = phải làm; negative = không được làm), tài sản đảm bảo và tăng cường tín dụng, cùng nơi phát hành/đồng tiền/thuế — là trọn module 0.</p>"
    }
   ],
   "formulas": [
    [
     "Floater coupon",
     "coupon = MRR + quoted margin",
     "Reset each period; rate risk ≈ time to next reset."
    ],
    [
     "Capital-indexed coupon",
     "coupon = real rate × inflation-adjusted principal",
     "TIPS-style: principal rides CPI, coupon rides the principal."
    ]
   ]
  },
  {
   "title": "Issuance, Trading & Fixed-Income Markets",
   "sections": [
    {
     "h": "Issuance, trading & repo",
     "en": "<ul><li><strong>Primary market:</strong> <em>underwritten</em> offerings (banks buy and re-sell, bearing price risk), <em>best-efforts</em>, <em>auctions</em> (the standard for government bonds), <em>private placements</em>, and <em>shelf registrations</em> allowing issuance in tranches over time.</li><li><strong>Secondary market:</strong> bonds trade mostly <strong>over the counter</strong> in a quote-driven dealer market; liquidity concentrates in recent large issues, and bid–offer spreads widen with credit risk and complexity. Settlement is typically T+1/T+2 (same-day for money market).</li><li><strong>Repurchase agreements (repo):</strong> sell a security today, agree to buy it back at a higher price — economically a <em>collateralized loan</em>; the price difference implies the <strong>repo rate</strong> (lower for safer collateral, shorter terms). The lender of cash takes a <strong>haircut / initial margin</strong> (collateral worth more than the loan) and variation margin as prices move. Repo is the funding backbone of dealer inventories and leveraged bond positions; risks: counterparty, collateral, margin-call liquidity.</li></ul>",
     "vi": "<ul><li><strong>Thị trường sơ cấp:</strong> phát hành <em>bảo lãnh chắc chắn</em> (ngân hàng mua rồi bán lại, chịu rủi ro giá), <em>best-efforts</em>, <em>đấu giá</em> (chuẩn mực với trái phiếu chính phủ), <em>phát hành riêng lẻ</em>, và <em>đăng ký shelf</em> cho phép phát hành từng đợt theo thời gian.</li><li><strong>Thị trường thứ cấp:</strong> trái phiếu giao dịch chủ yếu <strong>OTC</strong> trên thị trường báo giá qua dealer; thanh khoản dồn vào các đợt phát hành lớn, gần đây; chênh lệch mua–bán nới rộng theo rủi ro tín dụng và độ phức tạp. Thanh toán thường T+1/T+2 (tiền tệ: trong ngày).</li><li><strong>Hợp đồng mua lại (repo):</strong> bán chứng khoán hôm nay, cam kết mua lại giá cao hơn — bản chất là <em>khoản vay có tài sản bảo đảm</em>; chênh lệch giá hàm ý <strong>repo rate</strong> (thấp hơn với tài sản an toàn, kỳ hạn ngắn). Bên cho vay tiền áp <strong>haircut / ký quỹ ban đầu</strong> (tài sản bảo đảm lớn hơn khoản vay) và ký quỹ biến đổi khi giá thay đổi. Repo là xương sống tài trợ tồn kho dealer và các vị thế trái phiếu dùng đòn bẩy; rủi ro: đối tác, tài sản bảo đảm, thanh khoản khi bị gọi ký quỹ.</li></ul>"
    },
    {
     "h": "The funding menus of corporate and government issuers",
     "en": "<ul><li><strong>Corporate short-term:</strong> bilateral bank loans and <em>syndicated loans</em> (shared across lenders, often floating-rate); <strong>commercial paper</strong> — short-term unsecured notes of strong issuers, continuously <em>rolled</em>, with <em>backup lines of credit</em> as insurance against rollover failure; secured borrowing for weaker credits. Long-term: corporate bonds across the maturity/covenant/security spectrum and <em>medium-term notes</em> issued flexibly through dealers.</li><li><strong>Bond classification:</strong> by sector (government, corporate, structured), credit quality — <strong>investment grade (Baa3/BBB− and above)</strong> vs <strong>high yield</strong> — currency, and geography (developed vs emerging markets).</li><li><strong>Government issuers:</strong> sovereigns issue bills (discount), notes, and bonds through scheduled <em>auctions</em>; the newest issue is <strong>on-the-run</strong> — the benchmark and most liquid. Sovereign debt in local currency carries less default risk than foreign-currency debt (the printing press). Non-sovereign governments (municipalities), <em>agencies/quasi-government</em> entities, and <em>supranationals</em> (World Bank) round out the government sector.</li></ul>",
     "vi": "<ul><li><strong>Doanh nghiệp ngắn hạn:</strong> vay song phương và <em>vay hợp vốn</em> (chia cho nhiều bên, thường thả nổi); <strong>thương phiếu</strong> — nợ ngắn hạn không bảo đảm của issuer mạnh, <em>quay vòng</em> liên tục, kèm <em>hạn mức tín dụng dự phòng</em> đề phòng không quay vòng được; vay có bảo đảm cho tín nhiệm yếu. Dài hạn: trái phiếu doanh nghiệp đủ phổ kỳ hạn/covenant/bảo đảm và <em>medium-term notes</em> phát hành linh hoạt qua dealer.</li><li><strong>Phân loại trái phiếu:</strong> theo khu vực (chính phủ, doanh nghiệp, cấu trúc), chất lượng tín dụng — <strong>investment grade (từ Baa3/BBB− trở lên)</strong> vs <strong>high yield</strong> — đồng tiền, và địa lý (phát triển vs mới nổi).</li><li><strong>Tổ chức phát hành chính phủ:</strong> chính phủ phát hành tín phiếu (chiết khấu), notes và bonds qua <em>đấu giá</em> định kỳ; đợt mới nhất là <strong>on-the-run</strong> — chuẩn tham chiếu, thanh khoản nhất. Nợ chính phủ bằng nội tệ ít rủi ro vỡ nợ hơn ngoại tệ (vì có \"máy in tiền\"). Chính quyền địa phương, <em>cơ quan/bán chính phủ</em>, và <em>định chế siêu quốc gia</em> (World Bank) hoàn thiện khu vực này.</li></ul>"
    },
    {
     "h": "From auction to repo: issuance mechanics and the repo worked example",
     "en": "<p><strong>Primary market menu.</strong> Sovereigns sell by <strong>public auction</strong> (in a single-price auction all winners pay the same clearing yield — the design encourages aggressive bidding). Corporates use <strong>underwritten offerings</strong> (the bank buys the issue and resells — bank bears price risk), <strong>best-efforts</strong> (bank is only an agent), <strong>private placements</strong> (sold directly to qualified investors — no public disclosure, less liquidity, higher yield), and <strong>shelf registrations</strong> (register once, issue in slices when conditions suit).</p>\n<p><strong>Secondary market reality.</strong> Bonds trade <strong>over the counter</strong> through dealers, not on exchanges: dealers quote bid–ask and hold inventory; liquidity concentrates in recently issued \"on-the-run\" government bonds and fades with age, size, and credit quality. The bid–ask spread <em>is</em> the liquidity measure.</p>\n<p><strong>Repo, fully worked.</strong> A dealer needs overnight cash and holds $10m (market value) of government bonds. With a 2% <strong>haircut</strong> (initial margin), the counterparty lends 10m × 0.98 = <strong>$9.8m</strong> against the collateral. At a repo rate of 4% for 1 day: interest = 9.8m × 0.04 × 1/360 ≈ <strong>$1,089</strong>; the dealer repurchases for $9,801,089 tomorrow. Economically a collateralized loan: the seller (cash borrower) keeps the bond's coupon income and market risk. The <strong>reverse repo</strong> is the same trade seen from the cash lender's side. Haircuts and repo rates rise with collateral risk, term, and counterparty risk; a specific bond in high demand (\"on special\") commands a <em>lower</em> repo rate — lenders of cash accept less to obtain that collateral. Risks: default of the counterparty, collateral value falling faster than the haircut (margin calls follow), and rollover risk for anyone funding long-term assets with overnight repo.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Issuer</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Funding menu</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Sovereign</td><td style=\"padding:7px;border:1px solid #E5E9F2\">T-bills (discount, ≤1y), notes/bonds, inflation-linked; taxing power backs it — the domestic \"risk-free\" benchmark</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Non-sovereign govt / agencies / supranationals</td><td style=\"padding:7px;border:1px solid #E5E9F2\">bonds backed by taxes, project revenues, or member capital (World Bank-type)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Corporates</td><td style=\"padding:7px;border:1px solid #E5E9F2\">commercial paper (short, rolled — needs backup lines), medium-term notes, bonds across the curve, bank loans (bilateral/syndicated)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Financial institutions</td><td style=\"padding:7px;border:1px solid #E5E9F2\">deposits, interbank funding, repo, covered bonds — chronic maturity mismatch is their defining risk</td></tr></table>",
     "vi": "<p><strong>Thực đơn thị trường sơ cấp.</strong> Chính phủ bán qua <strong>đấu giá công khai</strong> (đấu giá đơn giá: mọi người thắng trả cùng một lợi suất khớp — thiết kế khuyến khích bỏ thầu mạnh tay). Doanh nghiệp dùng <strong>bảo lãnh phát hành</strong> (ngân hàng mua trọn rồi bán lại — ngân hàng chịu rủi ro giá), <strong>best-efforts</strong> (ngân hàng chỉ là đại lý), <strong>phát hành riêng lẻ</strong> (bán thẳng cho nhà đầu tư đủ điều kiện — không công bố đại chúng, kém thanh khoản, lợi suất cao hơn), và <strong>shelf registration</strong> (đăng ký một lần, phát hành từng đợt khi điều kiện thuận).</p>\n<p><strong>Thực tế thị trường thứ cấp.</strong> Trái phiếu giao dịch <strong>OTC</strong> qua dealer, không qua sàn: dealer yết bid–ask và ôm tồn kho; thanh khoản dồn vào trái phiếu chính phủ mới phát hành \"on-the-run\" và nhạt dần theo tuổi, quy mô, chất lượng tín dụng. Chênh bid–ask <em>chính là</em> thước đo thanh khoản.</p>\n<p><strong>Repo, giải trọn.</strong> Dealer cần tiền qua đêm, đang giữ $10tr (giá thị trường) trái phiếu chính phủ. Với <strong>haircut</strong> 2% (ký quỹ ban đầu), đối tác cho vay 10tr × 0,98 = <strong>$9,8tr</strong> nhận tài sản đảm bảo. Lãi suất repo 4% cho 1 ngày: lãi = 9,8tr × 0,04 × 1/360 ≈ <strong>$1.089</strong>; ngày mai dealer mua lại với $9.801.089. Bản chất là khoản vay có đảm bảo: bên bán (người vay tiền) vẫn hưởng coupon và chịu rủi ro giá của trái phiếu. <strong>Reverse repo</strong> là cùng giao dịch nhìn từ phía người cho vay tiền. Haircut và lãi repo tăng theo rủi ro tài sản đảm bảo, kỳ hạn, rủi ro đối tác; trái phiếu đang được săn lùng (\"on special\") hưởng lãi repo <em>thấp hơn</em> — người cho vay tiền chấp nhận ít hơn để có được đúng tài sản đó. Rủi ro: đối tác vỡ nợ, giá tài sản đảm bảo rơi nhanh hơn haircut (kéo theo margin call), và rủi ro đảo nợ với ai tài trợ tài sản dài hạn bằng repo qua đêm.</p>\n<p><strong>Thực đơn của từng loại tổ chức phát hành (bảng):</strong> chính phủ trung ương — T-bills (chiết khấu, ≤1 năm), notes/bonds, trái phiếu chỉ số lạm phát; quyền đánh thuế chống lưng — benchmark \"phi rủi ro\" nội địa; chính quyền địa phương/cơ quan/siêu quốc gia — trái phiếu dựa thuế, doanh thu dự án, hoặc vốn thành viên (kiểu World Bank); doanh nghiệp — thương phiếu (ngắn, đảo liên tục — cần hạn mức dự phòng), medium-term notes, trái phiếu mọi kỳ hạn, vay ngân hàng (song phương/hợp vốn); định chế tài chính — tiền gửi, liên ngân hàng, repo, covered bonds — lệch kỳ hạn kinh niên là rủi ro định danh của họ.</p>"
    }
   ],
   "formulas": [
    [
     "Repo interest",
     "principal × repo rate × days/360",
     "Principal = collateral value × (1 − haircut)."
    ],
    [
     "Amount lent in repo",
     "collateral market value × (1 − haircut)",
     "Haircut protects the cash lender against collateral moves."
    ]
   ]
  },
  {
   "title": "Bond Valuation: Prices and Yields",
   "sections": [
    {
     "h": "Pricing and the price–yield relationship",
     "en": "<p>A bond’s price is the present value of its coupons and face value, discounted at the market discount rate (YTM). Core relationships:</p><ul><li>Coupon rate &lt; YTM → <strong>discount</strong>; coupon = YTM → par; coupon &gt; YTM → <strong>premium</strong>.</li><li>Price and yield are <strong>inversely related</strong>, and the relationship is <strong>convex</strong>: a 1% fall in yield raises price <em>more</em> than a 1% rise lowers it.</li><li><strong>Pull to par:</strong> as maturity approaches, price converges to face value (\"constant-yield price trajectory\").</li><li>Longer maturity and <em>lower</em> coupon → greater price sensitivity to yield changes.</li><li>Between coupon dates: full (dirty) price = flat (clean) price + accrued interest. Quoted prices are clean.</li></ul>",
     "vi": "<p>Giá trái phiếu là hiện giá của các coupon và mệnh giá, chiết khấu tại lãi suất thị trường (YTM). Quan hệ cốt lõi:</p><ul><li>Coupon &lt; YTM → giao dịch <strong>dưới mệnh giá</strong>; coupon = YTM → bằng mệnh giá; coupon &gt; YTM → <strong>trên mệnh giá</strong>.</li><li>Giá và lợi suất <strong>ngược chiều</strong>, và quan hệ này <strong>lồi (convex)</strong>: lợi suất giảm 1% làm giá tăng <em>nhiều hơn</em> mức giá giảm khi lợi suất tăng 1%.</li><li><strong>Pull to par:</strong> càng gần đáo hạn, giá càng hội tụ về mệnh giá.</li><li>Kỳ hạn dài hơn và coupon <em>thấp hơn</em> → giá nhạy hơn với thay đổi lợi suất.</li><li>Giữa hai kỳ coupon: giá đầy đủ (dirty) = giá niêm yết (clean) + lãi dồn tích.</li></ul>"
    },
    {
     "h": "Full vs flat price, accrued interest & matrix pricing",
     "en": "<ul><li><strong>Between coupon dates</strong> the buyer compensates the seller for interest earned but not yet paid: <strong>full (dirty) price = flat (clean) price + accrued interest</strong>, with AI = coupon × (days since last payment / days in period). Bonds are <em>quoted</em> flat so prices don’t saw-tooth at each coupon, but <em>settle</em> at the full price.</li><li><strong>Matrix pricing</strong> values illiquid bonds by interpolating yields of comparable liquid bonds (same rating, sector, similar maturities) — the standard tool for stale quotes and for benchmarking new issues (estimating the required spread).</li><li><strong>Periodicity:</strong> a yield’s annual convention matters — semiannual bond basis (yield = 2 × semiannual rate) vs annual effective. Converting: hold the underlying return fixed, restate the compounding. More frequent compounding → lower stated annual yield for the same effective return.</li></ul>",
     "vi": "<ul><li><strong>Giữa hai kỳ coupon</strong>, người mua trả bù cho người bán phần lãi đã tích lũy nhưng chưa chi trả: <strong>giá đầy đủ (dirty) = giá niêm yết (clean) + lãi dồn tích</strong>, với AI = coupon × (số ngày từ kỳ trả trước / số ngày trong kỳ). Trái phiếu <em>niêm yết</em> giá clean để giá không \"răng cưa\" mỗi kỳ coupon, nhưng <em>thanh toán</em> theo giá dirty.</li><li><strong>Matrix pricing</strong> định giá trái phiếu kém thanh khoản bằng nội suy yield của các trái phiếu tương đồng thanh khoản (cùng xếp hạng, ngành, kỳ hạn gần nhau) — công cụ chuẩn khi thiếu giá giao dịch và khi ước tính spread cho đợt phát hành mới.</li><li><strong>Chu kỳ ghép lãi (periodicity):</strong> quy ước năm hóa của yield rất quan trọng — cơ sở bán niên (yield = 2 × lãi suất nửa năm) vs hiệu dụng năm. Chuyển đổi: giữ nguyên lợi suất gốc, đổi cách ghép lãi. Ghép lãi càng dày → yield danh nghĩa năm càng thấp cho cùng lợi suất hiệu dụng.</li></ul>"
    },
    {
     "h": "Between coupon dates: full price, accrued interest & matrix pricing worked",
     "en": "<p><strong>Base case first.</strong> A 3-year, 5% annual-coupon bond priced at a 6% market yield: P = 5/1.06 + 5/1.06² + 105/1.06³ = 4.717 + 4.450 + 88.161 = <strong>97.33</strong> (per 100) — below par because coupon &lt; yield. At a 4% yield the same bond prices at <strong>102.78</strong>: the inverse relationship, and note the asymmetry (a 2-point yield fall gains more than a 2-point rise loses — convexity, formalized in module 5).</p>\n<p><strong>Now move between coupon dates.</strong> 60 days into a 360-day coupon period (30/360 convention), same bond, yield still 6%:</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Step</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Computation</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Result</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Full (invoice/dirty) price</td><td style=\"padding:7px;border:1px solid #E5E9F2\">PV at last coupon date × (1 + y)^(t/T) = 97.33 × 1.06^(60/360)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>98.28</strong></td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Accrued interest</td><td style=\"padding:7px;border:1px solid #E5E9F2\">t/T × coupon = 60/360 × 5</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>0.833</strong></td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Flat (clean/quoted) price</td><td style=\"padding:7px;border:1px solid #E5E9F2\">full − accrued = 98.28 − 0.83</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>97.45</strong></td></tr></table>\n<p>The buyer <em>pays</em> the full price; screens <em>quote</em> the flat price. Why quote flat? Accrued interest grows mechanically day by day and drops to zero at each coupon — quoting flat strips out that sawtooth so price changes reflect market moves only. Day counts: government bonds typically use <strong>actual/actual</strong>; corporates and money markets often <strong>30/360</strong> — the exam expects you to apply whichever is stated.</p>\n<p><strong>Matrix pricing worked.</strong> An illiquid 4-year bond needs a value. Comparable same-credit bonds yield 5.20% at 3 years and 5.80% at 5 years. Linear interpolation: 4-year yield ≈ 5.20 + (4−3)/(5−3) × (5.80 − 5.20) = <strong>5.50%</strong> — discount the bond's cash flows at 5.50% for the estimated price. The same logic prices <em>new issues</em>: find secondary-market yields of comparable bonds, interpolate to the new maturity, and add a small new-issue concession. Matrix pricing is an estimate, not a market price — it assumes the comparables really are comparable in credit, liquidity, and optionality.</p>",
     "vi": "<p><strong>Trường hợp gốc trước.</strong> Trái phiếu 3 năm, coupon 5% trả hằng năm, định giá tại lợi suất thị trường 6%: P = 5/1,06 + 5/1,06² + 105/1,06³ = <strong>97,33</strong> (trên 100) — dưới par vì coupon &lt; lợi suất. Tại lợi suất 4%, cùng trái phiếu giá <strong>102,78</strong>: quan hệ nghịch, và chú ý sự bất đối xứng (lợi suất giảm 2 điểm được lợi nhiều hơn mức mất khi tăng 2 điểm — convexity, chính thức hóa ở module 5).</p>\n<p><strong>Giờ dịch chuyển giữa hai kỳ coupon.</strong> 60 ngày vào kỳ coupon 360 ngày (quy ước 30/360), cùng trái phiếu, lợi suất vẫn 6%: full (dirty) price = 97,33 × 1,06^(60/360) = <strong>98,28</strong>; lãi cộng dồn = 60/360 × 5 = <strong>0,833</strong>; flat (clean) price = 98,28 − 0,83 = <strong>97,45</strong>.</p>\n<p>Người mua <em>trả</em> full price; màn hình <em>yết</em> flat price. Vì sao yết flat? Lãi cộng dồn tăng máy móc từng ngày rồi rơi về 0 mỗi kỳ coupon — yết flat gỡ bỏ hình răng cưa đó để biến động giá chỉ phản ánh chuyển động thị trường. Quy ước đếm ngày: trái phiếu chính phủ thường dùng <strong>actual/actual</strong>; doanh nghiệp và thị trường tiền tệ hay dùng <strong>30/360</strong> — đề cho quy ước nào thì áp quy ước đó.</p>\n<p><strong>Matrix pricing bằng ví dụ.</strong> Một trái phiếu 4 năm kém thanh khoản cần định giá. Trái phiếu so sánh cùng hạng tín dụng có lợi suất 5,20% kỳ hạn 3 năm và 5,80% kỳ hạn 5 năm. Nội suy tuyến tính: lợi suất 4 năm ≈ 5,20 + (4−3)/(5−3) × (5,80 − 5,20) = <strong>5,50%</strong> — chiết khấu dòng tiền tại 5,50% để có giá ước tính. Cùng logic dùng định giá <em>phát hành mới</em>: lấy lợi suất thứ cấp của trái phiếu so sánh, nội suy về kỳ hạn mới, cộng thêm khoản nhượng bộ phát hành mới nho nhỏ. Matrix pricing là ước tính, không phải giá thị trường — nó giả định các trái phiếu so sánh thực sự tương đồng về tín dụng, thanh khoản và quyền chọn kèm theo.</p>"
    }
   ],
   "formulas": [
    [
     "Bond price",
     "P = Σ C/(1+y)^t + F/(1+y)^n",
     ""
    ],
    [
     "Full (dirty) price",
     "Flat price + accrued interest",
     "AI = coupon × days elapsed / days in period"
    ],
    [
     "Full price between coupons",
     "PV at last coupon × (1 + y)^(t/T)",
     "t = days elapsed, T = days in the period."
    ],
    [
     "Flat price",
     "flat = full − accrued interest; AI = (t/T) × coupon",
     "Screens quote flat; buyers pay full."
    ],
    [
     "Matrix pricing",
     "interpolate comparable yields to the target maturity",
     "Estimate, not a market price — comparability is assumed."
    ]
   ]
  },
  {
   "title": "Yield and Yield Spread Measures",
   "sections": [
    {
     "h": "Yield measures and the yield curve",
     "en": "<ul><li><strong>YTM</strong> assumes the bond is held to maturity, all payments received on time, and coupons <em>reinvested at the YTM</em>.</li><li><strong>Current yield</strong> = annual coupon / price (ignores time value and capital gain/loss).</li><li>Callable bonds: yield-to-call for each call date; <strong>yield-to-worst</strong> is the lowest of all.</li><li>Money market instruments use discount rates or add-on rates on 360- or 365-day conventions — convert to a common basis to compare.</li><li><strong>Spot rates</strong> are yields on zero-coupon bonds; the no-arbitrage price discounts each cash flow at its own spot rate. <strong>Forward rates</strong> are implied future rates. A normal yield curve slopes upward; inversion (short &gt; long yields) has historically preceded recessions.</li><li>Spreads: <strong>G-spread</strong> (over government yields), <strong>I-spread</strong> (over swaps), <strong>Z-spread</strong> (constant spread over the whole spot curve), <strong>OAS</strong> (Z-spread minus option cost — used for callable bonds).</li></ul>",
     "vi": "<ul><li><strong>YTM</strong> giả định giữ đến đáo hạn, nhận đủ mọi khoản đúng hạn, và coupon <em>tái đầu tư tại chính YTM</em>.</li><li><strong>Current yield</strong> = coupon năm / giá (bỏ qua giá trị thời gian và lãi/lỗ vốn).</li><li>Trái phiếu callable: tính yield-to-call cho từng ngày call; <strong>yield-to-worst</strong> là mức thấp nhất.</li><li>Công cụ thị trường tiền tệ dùng lãi suất chiết khấu hoặc add-on trên cơ sở 360/365 ngày — phải quy về cùng cơ sở để so sánh.</li><li><strong>Lãi suất spot</strong> là lợi suất trái phiếu zero-coupon; giá không-arbitrage chiết khấu từng dòng tiền theo spot tương ứng. <strong>Lãi suất forward</strong> là lãi suất tương lai hàm ý. Đường cong lợi suất thường dốc lên; đảo ngược (ngắn hạn &gt; dài hạn) trong lịch sử thường báo trước suy thoái.</li><li>Spread: <strong>G-spread</strong> (so với TPCP), <strong>I-spread</strong> (so với swap), <strong>Z-spread</strong> (spread không đổi trên toàn đường spot), <strong>OAS</strong> (Z-spread trừ giá trị quyền chọn — dùng cho trái phiếu callable).</li></ul>"
    },
    {
     "h": "Floating-rate yields and the spread family (G, I, Z, OAS)",
     "en": "<ul><li><strong>FRN pricing language:</strong> the <em>quoted margin</em> (QM) is the contractual spread over MRR; the <strong>discount margin</strong> (DM) is the spread the market currently requires. QM = DM → price ≈ par at reset; QM &gt; DM → premium (credit improved); QM &lt; DM → discount (credit deteriorated). Money-market instruments add their own conventions: <em>discount rates</em> (T-bills, quoted off face value) understate the true <em>add-on</em> return — always compare on a bond-equivalent basis.</li><li><strong>Spread measures for fixed-rate bonds:</strong> <em>G-spread</em> — over an interpolated government yield; <em>I-spread</em> — over the swap/MRR curve; <strong>Z-spread</strong> — the single spread added to <em>every point</em> of the spot curve that reprices the bond exactly (cleanest for steep curves); <strong>OAS</strong> = Z-spread − option cost, stripping out the value of embedded options so bonds with and without options can be compared. For a callable bond OAS &lt; Z-spread.</li><li><strong>Reading spreads:</strong> spread changes isolate credit and liquidity news from benchmark rate moves — the decomposition that drives relative-value analysis.</li></ul>",
     "vi": "<ul><li><strong>Ngôn ngữ định giá FRN:</strong> <em>quoted margin</em> (QM) là spread hợp đồng trên MRR; <strong>discount margin</strong> (DM) là spread thị trường đang đòi hỏi. QM = DM → giá ≈ mệnh giá tại kỳ reset; QM &gt; DM → premium (tín dụng cải thiện); QM &lt; DM → discount (tín dụng xấu đi). Công cụ tiền tệ có quy ước riêng: <em>lãi suất chiết khấu</em> (T-bill, tính trên mệnh giá) thấp hơn lợi suất <em>add-on</em> thực — luôn so sánh trên cùng cơ sở bond-equivalent.</li><li><strong>Họ spread cho trái phiếu coupon cố định:</strong> <em>G-spread</em> — trên yield chính phủ nội suy; <em>I-spread</em> — trên đường swap/MRR; <strong>Z-spread</strong> — một spread duy nhất cộng vào <em>mọi điểm</em> của đường spot sao cho định giá lại đúng bằng giá thị trường (chuẩn nhất khi đường cong dốc); <strong>OAS</strong> = Z-spread − chi phí quyền chọn, tách giá trị quyền chọn kèm theo để so sánh trái phiếu có và không có quyền chọn. Với callable: OAS &lt; Z-spread.</li><li><strong>Đọc spread:</strong> thay đổi spread cô lập tin tức tín dụng, thanh khoản khỏi biến động lãi suất chuẩn — phép phân rã nền tảng của phân tích giá trị tương đối.</li></ul>"
    },
    {
     "h": "The yield toolkit: conventions, callables, floaters & the spread family",
     "en": "<p><strong>Quote conventions matter before any comparison.</strong> A semiannual-pay bond's YTM is quoted as 2 × the semiannual IRR (\"semiannual bond basis\"). Converting worked: an annual-pay bond yields 6.09%; its semiannual-basis equivalent is 2 × (1.0609^0.5 − 1) = <strong>6.00%</strong> — compare like with like or you'll manufacture phantom spread. Related conversions: periodicity changes generally use (1 + APR_m/m)^m = (1 + APR_n/n)^n.</p>\n<p><strong>The measure ladder for an option-free bond:</strong> current yield = annual coupon/flat price (ignores time value and pull-to-par); YTM = the IRR of promised cash flows — realized only if held to maturity, no default, and coupons reinvested at the YTM. For <strong>callable bonds</strong>, compute yield-to-call for each call date (replace maturity with the call date and price with the call price) and take <strong>yield-to-worst = the minimum</strong> of YTM and all YTCs — the conservative promise. For <strong>floaters</strong>, yield is quoted as the <strong>discount margin</strong>: the spread over the MRR that equates PV of expected cash flows to price; DM &gt; quoted margin ⇔ the floater trades below par (market demands more spread than the coupon pays — credit has deteriorated since issuance).</p>\n<svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Yield spread family\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Where each spread measures from</text>\n<rect x=\"80\" y=\"60\" width=\"150\" height=\"220\" rx=\"10\" fill=\"#EEF0FE\" stroke=\"#5457E0\"/>\n<rect x=\"80\" y=\"170\" width=\"150\" height=\"110\" rx=\"10\" fill=\"#5457E0\"/>\n<text x=\"155\" y=\"230\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#fff\">Benchmark yield</text>\n<text x=\"155\" y=\"248\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#E5E9F2\">govt bond or swap rate</text>\n<text x=\"155\" y=\"120\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#4338CA\">Spread</text>\n<text x=\"155\" y=\"138\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#4338CA\">credit + liquidity</text>\n<text x=\"155\" y=\"52\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#1B2438\">Bond YTM</text>\n<rect x=\"290\" y=\"60\" width=\"396\" height=\"220\" rx=\"10\" fill=\"#F7F8FD\" stroke=\"#E5E9F2\"/>\n<text x=\"316\" y=\"92\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#5457E0\">G-spread</text>\n<text x=\"316\" y=\"109\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">vs interpolated GOVERNMENT yield</text>\n<text x=\"316\" y=\"136\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F9573\">I-spread</text>\n<text x=\"316\" y=\"153\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">vs the SWAP rate (MRR) curve</text>\n<text x=\"316\" y=\"180\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#B45309\">Z-spread</text>\n<text x=\"316\" y=\"197\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">one constant spread added to EVERY spot rate</text>\n<text x=\"316\" y=\"214\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">that reprices the bond exactly</text>\n<text x=\"316\" y=\"241\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#DC4848\">OAS = Z-spread − option cost</text>\n<text x=\"316\" y=\"258\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">compensation with the option effect stripped out:</text>\n<text x=\"316\" y=\"274\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">callable → OAS &lt; Z · putable → OAS &gt; Z</text>\n<text x=\"360\" y=\"312\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Compare bonds WITH embedded options only on OAS — Z-spreads mix credit with option effects.</text>\n</svg>\n<p><strong>Spread family worked.</strong> A callable corporate yields 7.10%; the interpolated government yield at its maturity is 5.00% → <strong>G-spread = 210 bps</strong>. Against the swap curve at 5.30% → <strong>I-spread = 180 bps</strong>. Solving for the single spread over every government <em>spot</em> rate that reprices the bond exactly gives <strong>Z-spread = 215 bps</strong>. An option model prices the issuer's call at 60 bps → <strong>OAS = 215 − 60 = 155 bps</strong>: the compensation for credit and liquidity alone. Rules to lock in: callable ⇒ OAS &lt; Z-spread (the option hurts the holder); putable ⇒ OAS &gt; Z-spread; option-free ⇒ OAS ≈ Z-spread. Only OAS makes bonds with different embedded options comparable.</p>\n<p><strong>Yield curve vocabulary to close:</strong> the curve plots yields of comparable bonds across maturity — upward-sloping normally (premia for time), flat or inverted around cycle turning points. Curves exist for YTMs (par-ish), spots, and forwards — module 4 links them mechanically.</p>",
     "vi": "<p><strong>Quy ước yết giá phải xử lý trước mọi phép so sánh.</strong> YTM của trái phiếu trả nửa năm được yết bằng 2 × IRR bán niên (\"semiannual bond basis\"). Quy đổi bằng ví dụ: trái phiếu trả hằng năm có lợi suất 6,09%; mức tương đương theo semiannual basis là 2 × (1,0609^0,5 − 1) = <strong>6,00%</strong> — so cùng hệ quy chiếu, nếu không bạn sẽ \"chế tạo\" spread ma. Quy đổi tổng quát theo chu kỳ: (1 + APR_m/m)^m = (1 + APR_n/n)^n.</p>\n<p><strong>Thang đo cho trái phiếu không kèm quyền chọn:</strong> current yield = coupon năm/flat price (bỏ qua giá trị thời gian và lực kéo về par); YTM = IRR của dòng tiền cam kết — chỉ hiện thực nếu giữ đến đáo hạn, không vỡ nợ, và coupon tái đầu tư đúng tại YTM. Với <strong>trái phiếu callable</strong>, tính yield-to-call cho từng ngày call (thay đáo hạn bằng ngày call, thay mệnh giá bằng giá call) và lấy <strong>yield-to-worst = giá trị nhỏ nhất</strong> của YTM và mọi YTC — lời hứa thận trọng nhất. Với <strong>floater</strong>, lợi suất yết bằng <strong>discount margin</strong>: phần chênh trên MRR làm PV dòng tiền kỳ vọng bằng giá; DM &gt; quoted margin ⇔ floater giao dịch dưới par (thị trường đòi spread cao hơn mức coupon trả — tín dụng đã xấu đi từ khi phát hành).</p>\n<p><strong>Gia đình spread bằng ví dụ.</strong> Trái phiếu doanh nghiệp callable lợi suất 7,10%; lợi suất chính phủ nội suy cùng kỳ hạn 5,00% → <strong>G-spread = 210 bps</strong>. So với đường swap 5,30% → <strong>I-spread = 180 bps</strong>. Giải phần chênh duy nhất cộng vào mọi lãi suất <em>spot</em> chính phủ để tái định giá đúng trái phiếu cho <strong>Z-spread = 215 bps</strong>. Mô hình quyền chọn định giá quyền call của công ty là 60 bps → <strong>OAS = 215 − 60 = 155 bps</strong>: phần bù thuần cho tín dụng và thanh khoản. Quy tắc khóa chặt: callable ⇒ OAS &lt; Z-spread (quyền chọn hại người nắm); putable ⇒ OAS &gt; Z-spread; không quyền chọn ⇒ OAS ≈ Z-spread. Chỉ OAS mới làm các trái phiếu kèm quyền chọn khác nhau so sánh được với nhau.</p>\n<p><strong>Từ vựng đường cong lợi suất để khép lại:</strong> đường cong vẽ lợi suất của các trái phiếu tương đồng theo kỳ hạn — dốc lên trong điều kiện bình thường (phần bù thời gian), phẳng hoặc đảo ngược quanh điểm ngoặt chu kỳ. Có đường cong cho YTM (gần par), spot, và forward — module 4 nối chúng bằng cơ học.</p>"
    }
   ],
   "formulas": [
    [
     "Current yield",
     "Annual coupon / Price",
     ""
    ],
    [
     "OAS",
     "Z-spread − option cost",
     "Callable: OAS < Z-spread"
    ],
    [
     "Yield-to-worst",
     "YTW = min(YTM, all YTCs)",
     "The conservative promised yield for a callable."
    ],
    [
     "Periodicity conversion",
     "(1 + APRm/m)^m = (1 + APRn/n)^n",
     "Convert before comparing yields quoted with different frequencies."
    ],
    [
     "OAS relationships",
     "callable: OAS < Z · putable: OAS > Z · option-free: OAS ≈ Z",
     "OAS = Z-spread − option cost."
    ]
   ]
  },
  {
   "title": "The Term Structure: Spot, Par & Forward Curves",
   "sections": [
    {
     "h": "Spot, par & forward curves",
     "en": "<ul><li><strong>Spot rates (z)</strong> are yields on zero-coupon bonds — the purest discount rates: value any bond by discounting <em>each cash flow at its own spot rate</em>; the YTM is then a complicated average. <strong>Bootstrapping</strong> extracts spot rates sequentially from coupon bond prices.</li><li><strong>The par curve</strong> shows, for each maturity, the coupon rate that prices a bond exactly at par given the spot curve — the natural language of new issuance. With an upward-sloping spot curve, par yields sit slightly <em>below</em> same-maturity spot rates.</li><li><strong>Forward rates (f)</strong> are rates agreed today for future periods, implied by no-arbitrage: <strong>(1+z₂)² = (1+z₁)(1+f₁,₁)</strong> — investing two years at the spot must equal one year plus the forward. An upward-sloping spot curve implies forwards above spots. Forwards are break-even future rates: rolling short-term bonds beats the long bond only if future rates exceed today’s forwards.</li><li><strong>Maturity structure:</strong> curves are usually upward-sloping (premia for duration risk); <em>inversion</em> — short rates above long — historically signals expected policy easing and recession risk.</li></ul>",
     "vi": "<ul><li><strong>Lãi suất spot (z)</strong> là yield của trái phiếu zero-coupon — suất chiết khấu thuần khiết nhất: định giá mọi trái phiếu bằng cách chiết khấu <em>từng dòng tiền theo đúng spot của kỳ đó</em>; YTM khi ấy chỉ là một trung bình phức tạp. <strong>Bootstrapping</strong> trích xuất spot lần lượt từ giá các trái phiếu coupon.</li><li><strong>Đường par</strong> cho biết, với mỗi kỳ hạn, mức coupon khiến trái phiếu định giá đúng bằng mệnh giá theo đường spot hiện tại — ngôn ngữ tự nhiên của phát hành mới. Khi đường spot dốc lên, par yield nằm hơi <em>thấp hơn</em> spot cùng kỳ hạn.</li><li><strong>Lãi suất forward (f)</strong> là lãi suất chốt hôm nay cho kỳ tương lai, suy từ không-kinh-doanh-chênh-lệch-giá: <strong>(1+z₂)² = (1+z₁)(1+f₁,₁)</strong> — đầu tư hai năm theo spot phải bằng một năm cộng forward. Đường spot dốc lên hàm ý forward cao hơn spot. Forward là lãi suất hòa vốn tương lai: cuộn trái phiếu ngắn hạn chỉ thắng trái phiếu dài nếu lãi suất tương lai vượt forward hôm nay.</li><li><strong>Cấu trúc kỳ hạn:</strong> đường cong thường dốc lên (phần bù rủi ro kỳ hạn); <em>đảo ngược</em> — lãi ngắn cao hơn dài — trong lịch sử là tín hiệu kỳ vọng nới lỏng chính sách và rủi ro suy thoái.</li></ul>"
    },
    {
     "h": "Extract the forward, price off every curve — one small dataset",
     "en": "<p><strong>Dataset:</strong> spot (zero) rates z₁ = 3.00%, z₂ = 4.00%, z₃ = 4.60%.</p>\n<p><strong>Forwards from spots.</strong> No-arbitrage: investing 2 years at z₂ must equal 1 year at z₁ rolled into the 1-year rate one year forward (1y1y): (1.04)² = (1.03)(1 + F) → F = 1.0816/1.03 − 1 = <strong>5.01%</strong>. Similarly 2y1y: (1.046)³/(1.04)² − 1 = <strong>5.81%</strong>. Notation \"2y1y\" = a 1-year rate starting 2 years from now. Forwards are <em>breakeven</em> rates: if future spot rates match today's forwards, rolling short bonds and holding long bonds earn identical returns — believing rates will rise <em>less</em> than forwards imply is a reason to extend maturity.</p>\n<svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Spot, par, and forward curves\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Upward-sloping world: forward &gt; spot &gt; par</text>\n<line x1=\"70\" y1=\"280\" x2=\"680\" y2=\"280\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"280\" x2=\"70\" y2=\"50\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"676\" y=\"298\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Maturity →</text>\n<text x=\"30\" y=\"62\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Rate</text>\n<path d=\"M 90 240 C 240 190 420 150 660 122\" fill=\"none\" stroke=\"#0F9573\" stroke-width=\"2.4\"/>\n<text x=\"620\" y=\"112\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F9573\">forward curve (1-period forwards)</text>\n<path d=\"M 90 244 C 240 208 420 178 660 158\" fill=\"none\" stroke=\"#5457E0\" stroke-width=\"2.6\"/>\n<text x=\"628\" y=\"176\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#5457E0\">spot (zero) curve</text>\n<path d=\"M 90 246 C 240 216 420 192 660 178\" fill=\"none\" stroke=\"#B45309\" stroke-width=\"2.2\" stroke-dasharray=\"6 4\"/>\n<text x=\"632\" y=\"198\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#B45309\">par curve</text>\n<text x=\"360\" y=\"248\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">spot = geometric average of forwards → sits below forwards when rising</text>\n<text x=\"360\" y=\"266\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">par = a blend weighted by coupons → sits below spots when rising</text>\n<text x=\"360\" y=\"314\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Inverted curve → the ordering flips: par &gt; spot &gt; forward. Flat curve → all three coincide.</text>\n</svg>\n<p><strong>Price the same bond three ways.</strong> A 3-year 4.5% annual bond: off spots, P = 4.5/1.03 + 4.5/1.04² + 104.5/1.046³ = 4.369 + 4.161 + 91.32 = <strong>99.85</strong>. The YTM is the single rate solving the same equation (≈ 4.55%) — a complicated average of the spots. Off forwards, discount each cash flow through the chain (1.03), (1.03×1.0501), (1.03×1.0501×1.0581) — identical price, by construction. <strong>Par rate:</strong> the coupon that makes price = 100: solve c(2.8286...) → c ≈ <strong>4.56%</strong>; the par curve is what new issues price at.</p>\n<p><strong>Orderings to memorize:</strong> upward-sloping spots ⇒ forward &gt; spot &gt; par at each maturity; inverted ⇒ reversed; flat ⇒ all equal. And the maturity trade-off: pricing off the spot curve is the arbitrage-free standard — any bond priced off its YTM alone can be checked against the sum of its parts (stripping/reconstitution keeps dealers honest).</p>",
     "vi": "<p><strong>Dữ liệu:</strong> lãi suất spot (zero) z₁ = 3,00%, z₂ = 4,00%, z₃ = 4,60%.</p>\n<p><strong>Rút forward từ spot.</strong> Không-arbitrage: đầu tư 2 năm tại z₂ phải bằng 1 năm tại z₁ rồi cuộn vào lãi suất 1 năm bắt đầu sau 1 năm (1y1y): (1,04)² = (1,03)(1 + F) → F = 1,0816/1,03 − 1 = <strong>5,01%</strong>. Tương tự 2y1y: (1,046)³/(1,04)² − 1 = <strong>5,81%</strong>. Ký hiệu \"2y1y\" = lãi suất 1 năm bắt đầu sau 2 năm. Forward là lãi suất <em>hòa vốn</em>: nếu spot tương lai đúng bằng forward hôm nay, cuộn trái phiếu ngắn và giữ trái phiếu dài sinh lời như nhau — tin rằng lãi suất sẽ tăng <em>ít hơn</em> forward hàm ý là lý do kéo dài kỳ hạn.</p>\n<p><strong>Định giá cùng một trái phiếu ba cách.</strong> Trái phiếu 3 năm coupon 4,5% hằng năm: theo spot, P = 4,5/1,03 + 4,5/1,04² + 104,5/1,046³ = <strong>99,85</strong>. YTM là mức lãi duy nhất giải cùng phương trình (≈ 4,55%) — một \"trung bình phức tạp\" của các spot. Theo forward, chiết khấu từng dòng tiền qua chuỗi (1,03), (1,03×1,0501), (1,03×1,0501×1,0581) — cùng giá, theo cách dựng. <strong>Par rate:</strong> mức coupon làm giá = 100: giải ra c ≈ <strong>4,56%</strong>; đường par là nơi trái phiếu phát hành mới được định giá.</p>\n<p><strong>Thứ tự cần thuộc:</strong> spot dốc lên ⇒ forward &gt; spot &gt; par tại mỗi kỳ hạn; đảo ngược ⇒ ngược lại; phẳng ⇒ bằng nhau. Và điểm chốt: định giá theo đường spot là chuẩn không-arbitrage — trái phiếu nào định giá lệch theo YTM đơn lẻ đều bị kiểm tra bằng tổng các mảnh của nó (stripping/reconstitution giữ dealer trung thực).</p>"
    }
   ],
   "formulas": [
    [
     "Forward from spots",
     "(1+z₂)² = (1+z₁)(1+f₁,₁)",
     "Generalizes across the curve"
    ],
    [
     "Forward from spots (general)",
     "(1 + z_B)^B = (1 + z_A)^A × (1 + F_{A,B-A})^{B−A}",
     "1y1y from z1, z2: F = (1+z2)²/(1+z1) − 1."
    ],
    [
     "Par rate",
     "coupon c solving: c × Σ df + 100 × df_N = 100",
     "df = discount factors from spot rates; new issues price at par rates."
    ]
   ]
  },
  {
   "title": "Interest Rate Risk: Duration & Convexity",
   "sections": [
    {
     "h": "Duration",
     "en": "<ul><li><strong>Macaulay duration:</strong> the weighted-average time to receive the bond’s cash flows (in years). Also the horizon at which price risk and reinvestment risk offset.</li><li><strong>Modified duration:</strong> ModDur = MacDur / (1 + YTM per period). It estimates the % price change: <strong>%ΔPrice ≈ −ModDur × Δyield</strong>.</li><li><strong>Effective duration</strong> uses the change in price for parallel shifts of the benchmark curve — required for bonds with embedded options (callable/putable, MBS) whose cash flows change with rates.</li><li>Duration rises with maturity, falls with coupon and with yield level. A zero-coupon bond’s Macaulay duration equals its maturity.</li><li><strong>Money duration</strong> = ModDur × full price; <strong>PVBP</strong> is the price change for a 1 bp yield move.</li></ul>",
     "vi": "<ul><li><strong>Macaulay duration:</strong> thời gian bình quân gia quyền nhận các dòng tiền (tính bằng năm). Cũng là kỳ hạn đầu tư mà tại đó rủi ro giá và rủi ro tái đầu tư triệt tiêu nhau.</li><li><strong>Modified duration:</strong> ModDur = MacDur / (1 + YTM mỗi kỳ). Ước lượng % thay đổi giá: <strong>%ΔGiá ≈ −ModDur × Δlợi suất</strong>.</li><li><strong>Effective duration</strong> dùng thay đổi giá khi đường cong chuẩn dịch song song — bắt buộc với trái phiếu có quyền chọn kèm (callable/putable, MBS) vì dòng tiền thay đổi theo lãi suất.</li><li>Duration tăng theo kỳ hạn, giảm khi coupon cao hơn và khi mặt bằng lợi suất cao hơn. Zero-coupon có Macaulay duration bằng đúng kỳ hạn.</li><li><strong>Money duration</strong> = ModDur × giá đầy đủ; <strong>PVBP</strong> là mức thay đổi giá khi lợi suất đổi 1 điểm cơ bản.</li></ul>"
    },
    {
     "h": "Convexity and combined estimates",
     "en": "<p>Duration is a straight-line estimate of a curved relationship, so it <em>understates</em> price rises and <em>overstates</em> price falls. Adding convexity fixes most of the error:</p><p><strong>%ΔPrice ≈ −ModDur × Δy + ½ × Convexity × (Δy)²</strong></p><p>Positive convexity is valuable: more upside, less downside for the same duration. Callable bonds exhibit <strong>negative convexity</strong> at low yields (price is capped near the call price); putable bonds have extra positive convexity at high yields.</p>",
     "vi": "<p>Duration là ước lượng đường thẳng cho một quan hệ cong, nên nó <em>ước lượng thấp</em> mức tăng giá và <em>ước lượng cao</em> mức giảm giá. Cộng thêm convexity sẽ sửa phần lớn sai số:</p><p><strong>%ΔGiá ≈ −ModDur × Δy + ½ × Convexity × (Δy)²</strong></p><p>Convexity dương rất giá trị: cùng một duration nhưng tăng nhiều hơn, giảm ít hơn. Trái phiếu callable có <strong>convexity âm</strong> khi lợi suất thấp (giá bị chặn gần giá call); trái phiếu putable có convexity dương lớn hơn khi lợi suất cao.</p>"
    },
    {
     "h": "Duration properties, portfolio duration & the duration gap",
     "en": "<ul><li><strong>The duration family:</strong> <em>Macaulay duration</em> — weighted-average time to receive cash flows (years); <em>modified duration</em> = MacDur/(1+r) — % price change per 1% yield change; <strong>money duration</strong> = MD × full price — the currency loss per 1% move; <strong>PVBP</strong> = money duration × 0.0001 — the value of one basis point. <em>Effective duration</em> replaces yield-based measures for bonds with embedded options (cash flows change with rates); <em>key rate durations</em> measure sensitivity to individual curve points; <em>empirical duration</em>, estimated from market data, runs below analytical duration for credit-risky bonds because spreads move opposite to benchmark yields.</li><li><strong>What drives duration:</strong> longer maturity → generally higher duration; higher coupon → lower duration (cash arrives sooner); higher yield → lower duration; a zero’s Macaulay duration equals its maturity. Portfolio duration ≈ market-value-weighted average of component durations (assumes parallel shifts).</li><li><strong>The duration gap</strong> connects risk to the horizon: interest-rate risk has two opposing channels — <em>price risk</em> (rates up, price down) and <em>reinvestment risk</em> (rates up, coupons reinvest higher). They offset exactly when the <strong>investment horizon = Macaulay duration</strong>. Horizon &lt; MacDur → price risk dominates (rate rises hurt); horizon &gt; MacDur → reinvestment dominates (rate rises help). Gap = MacDur − horizon.</li></ul>",
     "vi": "<ul><li><strong>Họ duration:</strong> <em>Macaulay duration</em> — thời gian bình quân gia quyền nhận dòng tiền (năm); <em>modified duration</em> = MacDur/(1+r) — % thay đổi giá cho 1% thay đổi yield; <strong>money duration</strong> = MD × giá đầy đủ — mức lỗ bằng tiền cho 1% biến động; <strong>PVBP</strong> = money duration × 0,0001 — giá trị một điểm cơ bản. <em>Effective duration</em> thay các thước đo theo yield khi trái phiếu có quyền chọn kèm (dòng tiền đổi theo lãi suất); <em>key rate duration</em> đo độ nhạy với từng điểm trên đường cong; <em>empirical duration</em> ước lượng từ dữ liệu thị trường, thấp hơn duration lý thuyết với trái phiếu rủi ro tín dụng vì spread thường chạy ngược với lãi suất chuẩn.</li><li><strong>Yếu tố quyết định duration:</strong> kỳ hạn dài hơn → duration thường cao hơn; coupon cao hơn → duration thấp hơn (tiền về sớm hơn); yield cao hơn → duration thấp hơn; zero-coupon có MacDur = kỳ hạn. Duration danh mục ≈ bình quân gia quyền theo giá trị thị trường (giả định dịch chuyển song song).</li><li><strong>Duration gap</strong> nối rủi ro với kỳ đầu tư: rủi ro lãi suất có hai kênh ngược nhau — <em>rủi ro giá</em> (lãi tăng, giá giảm) và <em>rủi ro tái đầu tư</em> (lãi tăng, coupon tái đầu tư lãi cao hơn). Chúng triệt tiêu đúng khi <strong>kỳ đầu tư = Macaulay duration</strong>. Kỳ đầu tư &lt; MacDur → rủi ro giá thắng (lãi tăng gây hại); kỳ đầu tư &gt; MacDur → tái đầu tư thắng (lãi tăng có lợi). Gap = MacDur − kỳ đầu tư.</li></ul>"
    },
    {
     "h": "Duration lab: measure it, correct it with convexity, manage the gap",
     "en": "<svg viewBox=\"0 0 720 300\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Macaulay duration as balance point of present values\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Macaulay duration = the balance point of the PV cash flows</text>\n<line x1=\"90\" y1=\"200\" x2=\"650\" y2=\"200\" stroke=\"#1B2438\" stroke-width=\"2.5\"/>\n<g fill=\"#5457E0\">\n<rect x=\"150\" y=\"160\" width=\"34\" height=\"40\" rx=\"3\" opacity=\"0.55\"/>\n<rect x=\"270\" y=\"164\" width=\"34\" height=\"36\" rx=\"3\" opacity=\"0.65\"/>\n<rect x=\"390\" y=\"168\" width=\"34\" height=\"32\" rx=\"3\" opacity=\"0.75\"/>\n<rect x=\"510\" y=\"60\" width=\"34\" height=\"140\" rx=\"3\"/>\n</g>\n<text x=\"167\" y=\"152\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5457E0\">PV(C₁)</text>\n<text x=\"287\" y=\"156\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5457E0\">PV(C₂)</text>\n<text x=\"407\" y=\"160\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5457E0\">PV(C₃)</text>\n<text x=\"527\" y=\"52\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#5457E0\">PV(C₄ + face)</text>\n<text x=\"167\" y=\"220\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">t=1</text>\n<text x=\"287\" y=\"220\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">t=2</text>\n<text x=\"407\" y=\"220\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">t=3</text>\n<text x=\"527\" y=\"220\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">t=4</text>\n<polygon points=\"447,202 427,238 467,238\" fill=\"#DC4848\"/>\n<text x=\"447\" y=\"258\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#DC4848\">MacDur ≈ 3.6 yrs</text>\n<text x=\"360\" y=\"288\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Bigger coupons pile weight on the left → duration falls. A zero has all weight at maturity → MacDur = maturity.</text>\n</svg>\n<p><strong>Approximate modified duration from three prices.</strong> A bond prices at P₀ = 97.33 (y = 6%). Shift yields ±50 bps: P₋ = 99.00, P₊ = 95.70. AnnModDur = (99.00 − 95.70)/(2 × 97.33 × 0.005) = 3.30/0.9733 = <strong>3.39</strong>. Interpretation: a 100 bp yield rise cuts price ≈ 3.39%. Approximate convexity = (P₋ + P₊ − 2P₀)/(P₀ × Δy²) = (99.00 + 95.70 − 194.66)/(97.33 × 0.000025) ≈ <strong>16.4</strong>.</p>\n<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Price yield relationship with duration line and convexity\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Price–yield: duration is the tangent, convexity is the curve</text>\n<line x1=\"70\" y1=\"290\" x2=\"680\" y2=\"290\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"290\" x2=\"70\" y2=\"50\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"676\" y=\"308\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Yield →</text>\n<text x=\"34\" y=\"62\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Price</text>\n<path d=\"M 100 70 C 220 120 320 165 400 190 C 480 215 570 235 660 248\" fill=\"none\" stroke=\"#5457E0\" stroke-width=\"2.8\"/>\n<text x=\"150\" y=\"92\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#5457E0\">actual price (convex)</text>\n<line x1=\"180\" y1=\"102 \" x2=\"620\" y2=\"278\" stroke=\"#DC4848\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n<text x=\"470\" y=\"266\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#DC4848\">duration estimate (straight line)</text>\n<circle cx=\"400\" cy=\"190\" r=\"5.5\" fill=\"#1B2438\"/>\n<text x=\"400\" y=\"176\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1B2438\">today</text>\n<path d=\"M 230 122 L 230 148\" stroke=\"#0F9573\" stroke-width=\"2.4\" marker-end=\"url(#fiA)\"/>\n<text x=\"242\" y=\"130\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#0F9573\" font-weight=\"600\">for a fall in yields, duration UNDER-estimates the gain</text>\n<path d=\"M 560 262 L 560 240\" stroke=\"#0F9573\" stroke-width=\"2.4\" marker-end=\"url(#fiA)\"/>\n<text x=\"552\" y=\"286\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#0F9573\" font-weight=\"600\">for a rise, duration OVER-estimates the loss</text>\n<defs><marker id=\"fiA\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#0F9573\"/></marker></defs>\n<text x=\"360\" y=\"326\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Positive convexity always works FOR the bondholder — the convexity term (+½C·Δy²) is added in both directions.</text>\n</svg>\n<p><strong>Combined estimate worked (bigger numbers to see the effect).</strong> Duration 7.0, convexity 80, Δy = +200 bps: %ΔP ≈ −7.0(0.02) + ½(80)(0.02)² = −14.0% + 1.6% = <strong>−12.4%</strong>. For Δy = −200 bps: +14.0% + 1.6% = <strong>+15.6%</strong>. The convexity term is added in <em>both</em> directions — losses smaller, gains bigger than duration alone predicts. <strong>Money duration</strong> = AnnModDur × full price: on a $2m position with duration 3.39, money duration ≈ $6.78m, and <strong>PVBP</strong> (price value of a basis point) ≈ 6.78m × 0.0001 = <strong>$678 per bp</strong>.</p>\n<p><strong>Properties, fast:</strong> longer maturity → higher duration (generally); higher coupon → lower duration (cash arrives sooner); higher yield level → lower duration; a zero's MacDur = its maturity; a floater's effective duration ≈ time to next reset. For option-embedded bonds use <strong>effective duration</strong> (shift the whole curve, let the option respond) — a callable's duration collapses as rates fall toward the call trigger. <strong>Portfolio duration</strong> = market-value-weighted average of component durations (the practical method; assumes parallel shifts).</p>\n<p><strong>The duration gap decides which risk you carry.</strong> Total return has two opposing engines: reinvestment income (helped by higher rates) and price (hurt by them). They balance at the <strong>Macaulay duration</strong> horizon. Gap = MacDur − investment horizon: horizon <em>shorter</em> than MacDur (positive gap) → price risk dominates → you fear rate <em>rises</em>; horizon <em>longer</em> (negative gap) → reinvestment risk dominates → you fear rate <em>falls</em>. Matching MacDur to the horizon immunizes against small parallel shifts — the seed of liability-driven investing.</p>",
     "vi": "<p><strong>Modified duration xấp xỉ từ ba mức giá.</strong> Trái phiếu giá P₀ = 97,33 (y = 6%). Dịch lợi suất ±50 bps: P₋ = 99,00, P₊ = 95,70. AnnModDur = (99,00 − 95,70)/(2 × 97,33 × 0,005) = <strong>3,39</strong>. Diễn giải: lợi suất tăng 100 bp làm giá giảm ≈ 3,39%. Convexity xấp xỉ = (P₋ + P₊ − 2P₀)/(P₀ × Δy²) ≈ <strong>16,4</strong>.</p>\n<p><strong>Ước tính kết hợp bằng ví dụ (số lớn hơn để thấy hiệu ứng).</strong> Duration 7,0, convexity 80, Δy = +200 bps: %ΔP ≈ −7,0(0,02) + ½(80)(0,02)² = −14,0% + 1,6% = <strong>−12,4%</strong>. Với Δy = −200 bps: +14,0% + 1,6% = <strong>+15,6%</strong>. Số hạng convexity được cộng ở <em>cả hai</em> chiều — lỗ nhỏ hơn, lãi lớn hơn mức duration đơn thuần dự đoán. <strong>Money duration</strong> = AnnModDur × full price: vị thế $2tr với duration 3,39 cho money duration ≈ $6,78tr, và <strong>PVBP</strong> ≈ 6,78tr × 0,0001 = <strong>$678 mỗi bp</strong>.</p>\n<p><strong>Tính chất, nhanh:</strong> kỳ hạn dài hơn → duration cao hơn (nói chung); coupon cao hơn → duration thấp hơn (tiền về sớm hơn); mặt bằng lợi suất cao hơn → duration thấp hơn; MacDur của zero = kỳ hạn; effective duration của floater ≈ thời gian đến lần reset kế. Với trái phiếu kèm quyền chọn dùng <strong>effective duration</strong> (dịch cả đường cong, để quyền chọn phản ứng) — duration của callable sụp xuống khi lãi suất rơi về vùng call. <strong>Duration danh mục</strong> = bình quân gia quyền theo giá trị thị trường của duration thành phần (phương pháp thực hành; giả định dịch song song).</p>\n<p><strong>Duration gap quyết định bạn gánh rủi ro nào.</strong> Tổng lợi suất có hai động cơ ngược chiều: thu nhập tái đầu tư (hưởng lợi khi lãi tăng) và giá (bị hại). Chúng cân bằng tại horizon = <strong>Macaulay duration</strong>. Gap = MacDur − kỳ đầu tư: kỳ đầu tư <em>ngắn hơn</em> MacDur (gap dương) → rủi ro giá thống trị → bạn sợ lãi suất <em>tăng</em>; kỳ đầu tư <em>dài hơn</em> (gap âm) → rủi ro tái đầu tư thống trị → bạn sợ lãi suất <em>giảm</em>. Khớp MacDur với kỳ đầu tư miễn nhiễm với các cú dịch song song nhỏ — hạt giống của liability-driven investing.</p>"
    }
   ],
   "formulas": [
    [
     "Modified duration",
     "ModDur = MacDur / (1 + y)",
     "y = yield per period"
    ],
    [
     "Duration estimate",
     "%ΔP ≈ −ModDur × Δy",
     ""
    ],
    [
     "With convexity",
     "%ΔP ≈ −ModDur·Δy + ½·Conv·(Δy)²",
     ""
    ],
    [
     "Money duration & PVBP",
     "MoneyDur = MD × full price; PVBP = MoneyDur × 0.0001",
     "Currency risk measures"
    ],
    [
     "Approx. modified duration",
     "(P− − P+) / (2 × P0 × Δy)",
     "From three prices; effective duration shifts the curve for option bonds."
    ],
    [
     "Approx. convexity",
     "(P− + P+ − 2P0) / (P0 × Δy²)",
     "Adjustment term = ½ × C × (Δy)² — added in both directions."
    ],
    [
     "Portfolio duration",
     "Σ (market-value weight × duration)",
     "Assumes parallel yield shifts."
    ],
    [
     "Duration gap",
     "gap = Macaulay duration − investment horizon",
     "Positive gap → fear rising rates; negative → fear falling rates."
    ]
   ]
  },
  {
   "title": "Credit Risk & Credit Analysis",
   "sections": [
    {
     "h": "Credit risk and securitization",
     "en": "<ul><li><strong>Credit risk</strong> = expected loss = probability of default × loss given default (LGD = 1 − recovery rate). Spreads widen when default risk or risk aversion rises — spread risk hurts even without default.</li><li>Ratings: investment grade (BBB−/Baa3 and above) vs high yield. Beware: ratings lag markets.</li><li>Analysis frameworks: the <strong>4 Cs</strong> — Capacity, Collateral, Covenants, Character. Key ratios: leverage (debt/EBITDA) and coverage (EBIT/interest).</li><li><strong>Securitization:</strong> a sponsor sells assets (mortgages, auto loans, receivables) to a bankruptcy-remote <strong>SPE</strong>, which issues tranched bonds. Benefits: lower funding costs, liquidity, risk transfer. <strong>Tranching</strong> creates a waterfall: senior tranches are paid first; subordinated tranches absorb first losses (credit tranching). MBS carry <strong>prepayment risk</strong>: contraction risk (rates fall → faster prepayment) and extension risk (rates rise → slower prepayment).</li></ul>",
     "vi": "<ul><li><strong>Rủi ro tín dụng</strong> = tổn thất kỳ vọng = xác suất vỡ nợ × tổn thất khi vỡ nợ (LGD = 1 − tỷ lệ thu hồi). Spread giãn khi rủi ro vỡ nợ hoặc mức e ngại rủi ro tăng — rủi ro spread gây thiệt hại kể cả khi không vỡ nợ.</li><li>Xếp hạng: investment grade (từ BBB−/Baa3 trở lên) vs high yield. Lưu ý: xếp hạng thường đi sau thị trường.</li><li>Khung phân tích: <strong>4 chữ C</strong> — Capacity (năng lực trả nợ), Collateral (tài sản bảo đảm), Covenants (cam kết), Character (uy tín). Chỉ số chính: đòn bẩy (nợ/EBITDA) và khả năng chi trả (EBIT/lãi vay).</li><li><strong>Chứng khoán hóa:</strong> bên khởi tạo bán tài sản (khoản vay mua nhà, vay ô tô, phải thu) cho <strong>SPE</strong> tách biệt phá sản, SPE phát hành trái phiếu chia tầng. Lợi ích: chi phí vốn thấp hơn, thanh khoản, chuyển giao rủi ro. <strong>Tranching</strong> tạo \"thác nước\": tầng senior nhận tiền trước; tầng subordinated chịu lỗ đầu tiên. MBS có <strong>rủi ro trả nợ trước hạn</strong>: contraction risk (lãi giảm → trả trước nhanh) và extension risk (lãi tăng → trả trước chậm).</li></ul>"
    },
    {
     "h": "Ratings, seniority & how credit analysis is done",
     "en": "<ul><li><strong>Ratings:</strong> agencies grade <em>issuers</em> (senior unsecured benchmark) and <em>issues</em> (notched up for security/seniority, down for subordination). Investment grade begins at Baa3/BBB−. Ratings lag markets, can be wrong, and issuer-pays creates conflicts — use them as inputs, not conclusions.</li><li><strong>Seniority ranking</strong> drives recovery: (senior) secured → senior unsecured → subordinated → equity; secured lenders claim specific collateral. Priority of claims guides <em>loss given default</em>, though bankruptcy outcomes can deviate.</li><li><strong>Corporate analysis — the Cs in practice:</strong> qualitative (business model, industry position, strategy, governance) plus quantitative: <em>profitability and cash flow</em> (EBITDA, FCF), <strong>leverage</strong> (Debt/EBITDA, Debt/Capital), and <strong>coverage</strong> (EBIT/Interest). High-yield analysis digs deeper: liquidity, debt structure and covenants, and equity-like sensitivity to the business cycle.</li><li><strong>Government analysis:</strong> sovereigns — institutions and policy flexibility, economic growth and diversity, external position and FX regime, fiscal and debt burden, monetary credibility (local-currency debt safest); non-sovereigns — tax base strength, budget flexibility, and whether debt is GO (general obligation) or revenue-backed.</li><li><strong>Spread behavior:</strong> spreads widen with cycles turning down, deteriorating fundamentals, and evaporating liquidity; lower-rated bonds move more (higher spread duration × bigger spread moves).</li></ul>",
     "vi": "<ul><li><strong>Xếp hạng:</strong> các agency chấm <em>issuer</em> (chuẩn là nợ senior không bảo đảm) và <em>từng issue</em> (nâng bậc nếu có bảo đảm/ưu tiên, hạ bậc nếu thứ cấp — notching). Investment grade bắt đầu từ Baa3/BBB−. Xếp hạng trễ hơn thị trường, có thể sai, và mô hình issuer trả phí sinh xung đột — dùng làm đầu vào, không phải kết luận.</li><li><strong>Thứ tự ưu tiên</strong> quyết định thu hồi: (senior) có bảo đảm → senior không bảo đảm → thứ cấp → cổ phần; chủ nợ có bảo đảm nắm tài sản cụ thể. Thứ tự này định hướng <em>loss given default</em>, dù kết quả phá sản thực tế có thể lệch.</li><li><strong>Phân tích doanh nghiệp:</strong> định tính (business model, vị thế ngành, chiến lược, quản trị) cộng định lượng: <em>khả năng sinh lời và dòng tiền</em> (EBITDA, FCF), <strong>đòn bẩy</strong> (Nợ/EBITDA, Nợ/Vốn), <strong>khả năng trả lãi</strong> (EBIT/Lãi vay). Phân tích high-yield đào sâu hơn: thanh khoản, cấu trúc nợ và covenant, độ nhạy chu kỳ gần với cổ phiếu.</li><li><strong>Phân tích chính phủ:</strong> sovereign — thể chế và độ linh hoạt chính sách, tăng trưởng và độ đa dạng kinh tế, vị thế đối ngoại và chế độ tỷ giá, gánh nặng ngân sách và nợ, uy tín tiền tệ (nợ nội tệ an toàn nhất); chính quyền địa phương — sức mạnh cơ sở thuế, độ linh hoạt ngân sách, và nợ thuộc loại nghĩa vụ chung (GO) hay gắn nguồn thu.</li><li><strong>Hành vi spread:</strong> spread nới khi chu kỳ đi xuống, nền tảng xấu đi, thanh khoản bốc hơi; trái phiếu hạng thấp biến động mạnh hơn (spread duration cao × biến động spread lớn).</li></ul>"
    },
    {
     "h": "Credit math: expected loss → spread, ratings mechanics & the ratio screen",
     "en": "<p><strong>Two numbers generate the whole subject.</strong> Expected loss = probability of default × loss given default, where LGD = exposure × (1 − recovery rate). Worked: PD = 1.5%, recovery = 40% on a $10m exposure → EL = 0.015 × 10m × 0.60 = <strong>$90,000</strong> (0.90% of exposure). To first order the <strong>credit spread ≈ PD × LGD%</strong>: this bond should trade roughly 90 bps over the risk-free curve before liquidity premia. Spreads widen when PD rises (cycle turns, leverage builds) or recoveries fall — and, importantly, when risk appetite and <em>liquidity</em> deteriorate even with fundamentals unchanged; high-yield spreads move much more than IG in risk-off episodes.</p>\n<svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Creditor seniority ranking\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">The seniority ladder: who gets paid first in default</text>\n<rect x=\"120\" y=\"50\" width=\"480\" height=\"40\" rx=\"8\" fill=\"#0F9573\"/>\n<text x=\"360\" y=\"75\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\">1. Secured debt (first lien → second lien) — claim on specific collateral</text>\n<rect x=\"150\" y=\"100\" width=\"420\" height=\"40\" rx=\"8\" fill=\"#5AB894\"/>\n<text x=\"360\" y=\"125\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\">2. Senior unsecured — the standard corporate bond</text>\n<rect x=\"180\" y=\"150\" width=\"360\" height=\"40\" rx=\"8\" fill=\"#B45309\"/>\n<text x=\"360\" y=\"175\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\">3. Subordinated / junior debt</text>\n<rect x=\"210\" y=\"200\" width=\"300\" height=\"40\" rx=\"8\" fill=\"#D97706\"/>\n<text x=\"360\" y=\"225\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\">4. Hybrids (preferred stock)</text>\n<rect x=\"240\" y=\"250\" width=\"240\" height=\"40\" rx=\"8\" fill=\"#DC4848\"/>\n<text x=\"360\" y=\"275\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\">5. Common equity — residual</text>\n<text x=\"360\" y=\"316\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Lower rungs → lower recovery → issue ratings notched DOWN from the issuer rating (and up for strong security).</text>\n</svg>\n<p><strong>Ratings mechanics.</strong> Investment grade: AAA/Aaa down to BBB−/Baa3; below is high yield. Agencies rate the <strong>issuer</strong> (senior unsecured benchmark) and <strong>notch</strong> individual issues up or down for security and seniority — a subordinated bond of a BB issuer might carry B+. Outlooks and watches signal direction. Limitations the exam wants verbatim: ratings lag markets, can be procyclical, miss event risk (LBOs, litigation), and agencies are paid by issuers. Spreads react before ratings do.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">C</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Question</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Typical evidence</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Capacity</td><td style=\"padding:7px;border:1px solid #E5E9F2\">can cash flows service the debt?</td><td style=\"padding:7px;border:1px solid #E5E9F2\">leverage: debt/EBITDA; coverage: EBIT/interest; FCF after capex & dividends</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Collateral</td><td style=\"padding:7px;border:1px solid #E5E9F2\">what backs the claim?</td><td style=\"padding:7px;border:1px solid #E5E9F2\">asset quality & saleability (watch intangibles-heavy balance sheets)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Covenants</td><td style=\"padding:7px;border:1px solid #E5E9F2\">what protects lenders?</td><td style=\"padding:7px;border:1px solid #E5E9F2\">negative pledges, leverage tests; loose \"cov-lite\" terms late in cycles</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Character</td><td style=\"padding:7px;border:1px solid #E5E9F2\">will management honor claims?</td><td style=\"padding:7px;border:1px solid #E5E9F2\">track record, accounting quality, past treatment of creditors</td></tr></table>\n<p><strong>Ratio screen worked.</strong> EBITDA 500, debt 1,750 → debt/EBITDA = <strong>3.5×</strong>; EBIT 400, interest 120 → coverage = <strong>3.3×</strong>. Against IG medians (roughly ≤3× leverage, ≥5× coverage) this issuer profiles as crossover/BB territory: expect wider spreads and covenant scrutiny. Seniority in practice: recovery rates rise up the ladder in the diagram, and priority of claims can be <em>renegotiated</em> in bankruptcy — absolute priority is a starting rule, not a guarantee.</p>",
     "vi": "<p><strong>Hai con số sinh ra cả môn học.</strong> Expected loss = xác suất vỡ nợ × tổn thất khi vỡ nợ, trong đó LGD = dư nợ × (1 − tỷ lệ thu hồi). Ví dụ: PD = 1,5%, thu hồi = 40% trên dư nợ $10tr → EL = 0,015 × 10tr × 0,60 = <strong>$90.000</strong> (0,90% dư nợ). Xấp xỉ bậc nhất, <strong>credit spread ≈ PD × LGD%</strong>: trái phiếu này nên giao dịch khoảng 90 bps trên đường phi rủi ro trước khi tính phần bù thanh khoản. Spread giãn khi PD tăng (chu kỳ xoay, đòn bẩy phình) hoặc thu hồi giảm — và quan trọng, khi khẩu vị rủi ro và <em>thanh khoản</em> xấu đi dù cơ bản không đổi; spread high-yield biến động mạnh hơn nhiều so với IG trong các pha risk-off.</p>\n<p><strong>Cơ học xếp hạng.</strong> Hạng đầu tư: AAA/Aaa xuống BBB−/Baa3; dưới đó là high yield. Hãng xếp hạng <strong>tổ chức phát hành</strong> (chuẩn senior unsecured) và <strong>notch</strong> từng lô trái phiếu lên/xuống theo tài sản đảm bảo và thứ tự — trái phiếu subordinated của công ty BB có thể mang B+. Outlook và credit watch báo hướng đi. Hạn chế mà đề muốn nguyên văn: xếp hạng đi sau thị trường, có thể thuận chu kỳ, bỏ sót rủi ro sự kiện (LBO, kiện tụng), và hãng được công ty phát hành trả tiền. Spread phản ứng trước khi xếp hạng đổi.</p>\n<p><strong>Bốn chữ C (bảng):</strong> Capacity — dòng tiền có nuôi nổi nợ? (đòn bẩy: debt/EBITDA; bao phủ: EBIT/lãi vay; FCF sau capex & cổ tức); Collateral — cái gì chống lưng quyền đòi? (chất lượng và tính bán được của tài sản — cảnh giác balance sheet nặng vô hình); Covenants — điều gì bảo vệ người cho vay? (negative pledge, ngưỡng đòn bẩy; điều khoản \"cov-lite\" lỏng lẻo cuối chu kỳ); Character — ban điều hành có tôn trọng quyền đòi? (thành tích, chất lượng kế toán, cách đối xử chủ nợ trong quá khứ).</p>\n<p><strong>Sàng lọc tỷ số bằng ví dụ.</strong> EBITDA 500, nợ 1.750 → debt/EBITDA = <strong>3,5×</strong>; EBIT 400, lãi vay 120 → coverage = <strong>3,3×</strong>. So với trung vị IG (đại khái ≤3× đòn bẩy, ≥5× bao phủ), công ty này thuộc vùng crossover/BB: chờ đón spread rộng hơn và soi covenants kỹ hơn. Thứ tự ưu tiên trong thực tế: tỷ lệ thu hồi tăng dần lên các bậc trong sơ đồ, và thứ tự quyền đòi có thể bị <em>đàm phán lại</em> trong phá sản — absolute priority là quy tắc khởi điểm, không phải bảo đảm.</p>"
    }
   ],
   "formulas": [
    [
     "Expected loss",
     "EL = PD × LGD",
     "LGD = 1 − recovery rate"
    ],
    [
     "Expected loss",
     "EL = PD × LGD = PD × exposure × (1 − recovery)",
     "First-order credit spread ≈ PD × LGD%."
    ],
    [
     "Credit ratio screen",
     "leverage = debt/EBITDA · coverage = EBIT/interest",
     "Lower leverage, higher coverage → stronger capacity."
    ]
   ]
  },
  {
   "title": "Securitization: ABS & MBS",
   "sections": [
    {
     "h": "Securitization: the machine and its safeguards",
     "en": "<ul><li><strong>The structure:</strong> a sponsor sells a pool of loans/receivables to a <strong>special purpose entity (SPE)</strong>, which issues bonds backed by the pool’s cash flows. The SPE is <em>bankruptcy remote</em> — a true sale separates the assets from the seller’s fate, so investors rely on the collateral, not the sponsor’s credit. Parties: seller/depositor, <em>servicer</em> (collects payments — servicer risk matters), trustee.</li><li><strong>Why securitize:</strong> banks recycle capital and transfer risk; borrowers gain lower funding costs; investors access tailored exposures with (usually) better liquidity than whole loans — but also layered complexity.</li><li><strong>Credit enhancement:</strong> <em>internal</em> — subordination/tranching (losses hit junior tranches first via the <strong>waterfall</strong>), overcollateralization, excess spread; <em>external</em> — guarantees, letters of credit. Time tranching separately re-allocates <em>prepayment</em> risk (sequential-pay classes).</li><li><strong>Covered bonds</strong> differ fundamentally: issued by the bank itself with <em>dual recourse</em> — to the cover pool AND the issuer — with the pool replenished dynamically; hence lower yields than comparable ABS.</li></ul>",
     "vi": "<ul><li><strong>Cấu trúc:</strong> bên khởi tạo bán một rổ khoản vay/phải thu cho <strong>pháp nhân chuyên biệt (SPE)</strong>, SPE phát hành trái phiếu bảo đảm bằng dòng tiền của rổ. SPE <em>cách ly phá sản</em> — giao dịch bán đứt tách tài sản khỏi số phận của bên bán, nên nhà đầu tư dựa vào tài sản bảo đảm, không phải tín nhiệm của sponsor. Các bên: người bán/ký gửi, <em>servicer</em> (thu hộ — rủi ro servicer đáng lưu ý), trustee.</li><li><strong>Vì sao chứng khoán hóa:</strong> ngân hàng quay vòng vốn và chuyển rủi ro; người vay hưởng chi phí vốn thấp hơn; nhà đầu tư tiếp cận các khẩu vị rủi ro \"may đo\" với thanh khoản (thường) tốt hơn khoản vay nguyên chiếc — đổi lại là độ phức tạp nhiều tầng.</li><li><strong>Tăng cường tín dụng:</strong> <em>nội bộ</em> — phân lớp/tranching (lỗ đánh vào lớp junior trước theo <strong>waterfall</strong>), thế chấp vượt mức, excess spread; <em>bên ngoài</em> — bảo lãnh, thư tín dụng. Phân lớp theo thời gian tái phân bổ riêng rủi ro <em>trả nợ trước hạn</em> (các lớp sequential-pay).</li><li><strong>Covered bonds</strong> khác về bản chất: do chính ngân hàng phát hành với <em>quyền truy đòi kép</em> — vào rổ tài sản VÀ vào issuer — rổ được bổ sung động; vì vậy yield thấp hơn ABS tương đương.</li></ul>"
    },
    {
     "h": "ABS & MBS: prepayment risk and the main instruments",
     "en": "<ul><li><strong>Non-mortgage ABS:</strong> auto-loan ABS (amortizing collateral, fast-paying, robust structures) and credit-card ABS (non-amortizing revolving pools with a <em>lockout period</em> during which principal collected is reinvested in new receivables).</li><li><strong>Residential MBS:</strong> <em>agency pass-throughs</em> forward pooled mortgage payments (net of fees) to holders; credit risk is guaranteed away, leaving <strong>prepayment risk</strong>, quoted via conditional prepayment rate (CPR) against the PSA benchmark. Two faces: <strong>contraction risk</strong> — rates fall, refinancing accelerates, principal returns early exactly when reinvestment rates are poor (negative convexity, like a callable); <strong>extension risk</strong> — rates rise, prepayments slow, duration stretches when you least want it.</li><li><strong>CMOs</strong> repackage pass-through cash flows into tranches: <em>sequential-pay</em> classes order principal receipt (early classes take contraction risk, later classes extension risk); <em>PAC</em> tranches get a protected schedule within collars, pushing volatility onto <em>support</em> tranches. Non-agency RMBS reintroduce credit risk and rely on the enhancement stack. <strong>CMBS</strong> (commercial) are non-recourse loans analyzed by DSCR and LTV, typically with <em>call protection</em> (lockouts, defeasance) that mutes prepayment risk but adds balloon/extension risk at maturity.</li><li><strong>CDOs</strong> resecuritize debt pools under an active manager — the arbitrage between collateral yield and tranche funding costs; 2008’s lesson: correlation and model risk concentrate in the senior tranches’ tails.</li></ul>",
     "vi": "<ul><li><strong>ABS ngoài thế chấp:</strong> ABS vay mua ô tô (tài sản trả dần, hoàn vốn nhanh, cấu trúc bền) và ABS thẻ tín dụng (rổ quay vòng không trả dần với <em>giai đoạn khóa (lockout)</em> — gốc thu được tái đầu tư vào phải thu mới).</li><li><strong>MBS nhà ở:</strong> <em>agency pass-through</em> chuyển tiếp dòng tiền của rổ thế chấp (trừ phí) cho trái chủ; rủi ro tín dụng được bảo lãnh, để lại <strong>rủi ro trả trước</strong>, đo bằng CPR so với chuẩn PSA. Hai mặt: <strong>rủi ro co ngắn (contraction)</strong> — lãi suất giảm, tái tài trợ tăng tốc, gốc về sớm đúng lúc lãi suất tái đầu tư kém (lồi âm, giống callable); <strong>rủi ro kéo dài (extension)</strong> — lãi suất tăng, trả trước chậm lại, duration giãn ra đúng lúc không mong muốn.</li><li><strong>CMO</strong> đóng gói lại dòng tiền pass-through thành các lớp: <em>sequential-pay</em> xếp thứ tự nhận gốc (lớp sớm gánh contraction, lớp muộn gánh extension); lớp <em>PAC</em> có lịch trả được bảo vệ trong biên độ, đẩy biến động sang lớp <em>support</em>. RMBS phi agency tái xuất hiện rủi ro tín dụng, dựa vào tầng tăng cường tín dụng. <strong>CMBS</strong> (thương mại) là khoản vay không truy đòi, phân tích bằng DSCR và LTV, thường có <em>bảo vệ chống trả trước</em> (khóa, defeasance) làm giảm rủi ro trả trước nhưng thêm rủi ro balloon/kéo dài khi đáo hạn.</li><li><strong>CDO</strong> tái chứng khoán hóa các rổ nợ dưới một nhà quản lý chủ động — kinh doanh chênh lệch giữa yield tài sản và chi phí vốn các lớp; bài học 2008: rủi ro tương quan và mô hình dồn vào phần đuôi của các lớp senior.</li></ul>"
    },
    {
     "h": "Tranching worked to the dollar + prepayment risk mechanics",
     "en": "<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Securitization tranche waterfall\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Tranching: cash flows down, losses climb up</text>\n<rect x=\"250\" y=\"52\" width=\"220\" height=\"70\" rx=\"10\" fill=\"#EEF0FE\" stroke=\"#5457E0\" stroke-width=\"1.5\"/>\n<text x=\"360\" y=\"80\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4338CA\">Senior tranche — 75</text>\n<text x=\"360\" y=\"99\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">paid first · loses last · AAA-ish, lowest yield</text>\n<rect x=\"250\" y=\"132\" width=\"220\" height=\"64\" rx=\"10\" fill=\"#FBF3E4\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n<text x=\"360\" y=\"158\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#B45309\">Mezzanine — 20</text>\n<text x=\"360\" y=\"176\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">paid second · absorbs losses after equity</text>\n<rect x=\"250\" y=\"206\" width=\"220\" height=\"58\" rx=\"10\" fill=\"#FDECEC\" stroke=\"#DC4848\" stroke-width=\"1.5\"/>\n<text x=\"360\" y=\"230\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#DC4848\">Equity / residual — 5</text>\n<text x=\"360\" y=\"248\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">first loss · highest promised return</text>\n<path d=\"M 210 70 L 210 240\" stroke=\"#0F9573\" stroke-width=\"2.5\" marker-end=\"url(#wfA)\"/>\n<text x=\"196\" y=\"150\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F9573\">cash flows</text>\n<text x=\"196\" y=\"166\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#0F9573\">top → down</text>\n<path d=\"M 510 240 L 510 70\" stroke=\"#DC4848\" stroke-width=\"2.5\" marker-end=\"url(#wfB)\"/>\n<text x=\"524\" y=\"150\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#DC4848\">losses</text>\n<text x=\"524\" y=\"166\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#DC4848\">bottom → up</text>\n<defs>\n<marker id=\"wfA\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#0F9573\"/></marker>\n<marker id=\"wfB\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#DC4848\"/></marker>\n</defs>\n<text x=\"360\" y=\"292\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Worked: pool losses of 8 → equity (5) wiped out, mezzanine takes 3 (now 17), senior untouched.</text>\n<text x=\"360\" y=\"312\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">Subordination + overcollateralization + excess spread = internal credit enhancement.</text>\n</svg>\n<p><strong>Run the waterfall with numbers.</strong> A $100m pool is carved into senior 75, mezzanine 20, equity 5. Collateral losses hit $8m: equity absorbs the first 5 and is wiped out; mezzanine absorbs the next 3 (now 17); the senior tranche is untouched. Losses of $28m would exhaust equity and mezzanine and bite 3 into the senior. This <strong>subordination</strong> is the core internal credit enhancement, joined by <strong>overcollateralization</strong> (pool assets exceed bonds issued) and <strong>excess spread</strong> (pool interest &gt; bond coupons + fees, trapped as a first cushion). The legal machine matters as much as the math: the originator makes a <em>true sale</em> of assets to a bankruptcy-remote <strong>SPE</strong>, so investors are exposed to the <em>pool</em>, not the originator — and the originator frees capital and funding. Alignment problem: originate-to-distribute weakens screening incentives (the 2008 lesson), mitigated by risk retention (\"skin in the game\") and representations/warranties.</p>\n<p><strong>Mortgage math: prepayment is the star risk.</strong> A level-payment mortgage amortizes like the FSA loan schedule, but the borrower holds a free option to prepay — refinance when rates fall, move, or default (in agency MBS, defaults arrive as prepayments to the investor because the agency guarantees principal).</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Risk</th><th style=\"padding:7px;border:1px solid #D6DAFB\">When</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Effect on the pass-through holder</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Contraction</td><td style=\"padding:7px;border:1px solid #E5E9F2\">rates FALL</td><td style=\"padding:7px;border:1px solid #E5E9F2\">prepayments surge → cash returns early, exactly when reinvestment rates are poor; price gains are capped (negative convexity)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Extension</td><td style=\"padding:7px;border:1px solid #E5E9F2\">rates RISE</td><td style=\"padding:7px;border:1px solid #E5E9F2\">prepayments dry up → duration lengthens exactly when you want cash back</td></tr></table>\n<p>Prepayment speed vocabulary: CPR (annualized prepay rate) quoted against the <strong>PSA</strong> benchmark (100 PSA = the standard ramp; 200 PSA = twice as fast). A <strong>CMO</strong> re-slices pass-through cash flows: sequential-pay tranches retire in order (tranche A takes early principal → shields later tranches from contraction; the last tranche and the Z-tranche absorb extension), PAC tranches offer stable schedules protected by support tranches that soak up prepayment variability — risk is <em>redistributed</em>, never destroyed.</p>\n<p><strong>The rest of the ABS shelf:</strong> auto-loan ABS (short, amortizing, robust structures), credit-card ABS (revolving pools with a <em>lockout period</em> during which principal collections buy new receivables, so investors receive interest only), and CDOs (pools of bonds/loans re-tranched — model risk compounds). <strong>Covered bonds</strong> are the contrast case: the cover pool stays on the bank's balance sheet and investors have <em>dual recourse</em> (bank + pool) with mandatory pool replenishment — hence lower yields than comparable ABS. Time-tranching (CMO) manages prepayment risk; credit-tranching (waterfall) manages default risk; many deals do both.</p>",
     "vi": "<p><strong>Chạy waterfall bằng số.</strong> Pool $100tr cắt thành senior 75, mezzanine 20, equity 5. Tổn thất tài sản $8tr: equity hấp thụ 5 đầu tiên và bị xóa sổ; mezzanine chịu 3 tiếp theo (còn 17); tranche senior nguyên vẹn. Tổn thất $28tr sẽ nuốt hết equity và mezzanine rồi cắn 3 vào senior. <strong>Subordination</strong> này là tăng cường tín dụng nội bộ cốt lõi, đi cùng <strong>overcollateralization</strong> (tài sản pool vượt trái phiếu phát hành) và <strong>excess spread</strong> (lãi pool &gt; coupon + phí, giữ lại làm đệm đầu tiên). Bộ máy pháp lý quan trọng ngang toán học: bên khởi tạo <em>bán đứt</em> tài sản cho <strong>SPE</strong> cách ly phá sản, nên nhà đầu tư phơi nhiễm với <em>pool</em>, không phải bên khởi tạo — còn bên khởi tạo giải phóng vốn và nguồn tài trợ. Vấn đề động cơ: originate-to-distribute làm yếu khâu sàng lọc (bài học 2008), giảm nhẹ bằng giữ lại rủi ro (\"skin in the game\") và các cam đoan/bảo đảm.</p>\n<p><strong>Toán mortgage: prepayment là rủi ro ngôi sao.</strong> Khoản vay trả đều amortize như lịch ở FSA, nhưng người vay nắm quyền chọn miễn phí trả trước — tái tài trợ khi lãi giảm, chuyển nhà, hoặc vỡ nợ (với agency MBS, vỡ nợ đến tay nhà đầu tư dưới dạng prepayment vì agency bảo lãnh gốc). Hai rủi ro (bảng): <strong>contraction</strong> — lãi GIẢM, prepay ào ạt → tiền về sớm đúng lúc lãi tái đầu tư tệ, giá bị chặn trần (negative convexity); <strong>extension</strong> — lãi TĂNG, prepay cạn → duration dài ra đúng lúc bạn muốn tiền về.</p>\n<p>Từ vựng tốc độ trả trước: CPR (tỷ lệ prepay năm hóa) yết so với chuẩn <strong>PSA</strong> (100 PSA = đường dốc chuẩn; 200 PSA = nhanh gấp đôi). <strong>CMO</strong> cắt lại dòng tiền pass-through: tranche sequential-pay nghỉ hưu theo thứ tự (tranche A nhận gốc sớm → che các tranche sau khỏi contraction; tranche cuối và Z-tranche gánh extension), tranche PAC cho lịch ổn định nhờ các support tranche hút biến động prepayment — rủi ro được <em>phân phối lại</em>, không bao giờ bị tiêu hủy.</p>\n<p><strong>Phần còn lại của kệ ABS:</strong> ABS vay mua ô tô (ngắn, amortizing, cấu trúc bền), ABS thẻ tín dụng (pool quay vòng với <em>lockout period</em> — thời gian gốc thu về được mua thêm khoản phải thu mới nên nhà đầu tư chỉ nhận lãi), và CDO (pool trái phiếu/khoản vay tái tranching — rủi ro mô hình chồng chất). <strong>Covered bonds</strong> là ca đối chiếu: cover pool ở lại trên balance sheet ngân hàng và nhà đầu tư có <em>dual recourse</em> (ngân hàng + pool) kèm bổ sung pool bắt buộc — vì thế lợi suất thấp hơn ABS tương đương. Time-tranching (CMO) quản rủi ro prepayment; credit-tranching (waterfall) quản rủi ro vỡ nợ; nhiều thương vụ làm cả hai.</p>"
    }
   ],
   "formulas": [
    [
     "Waterfall loss allocation",
     "losses: equity → mezzanine → senior",
     "Cash flows run the other way — top down."
    ],
    [
     "Prepayment risk pair",
     "rates ↓ → contraction · rates ↑ → extension",
     "Negative convexity caps MBS price gains when rates fall."
    ]
   ]
  }
 ],
 "vocab": [
  [
   "indenture",
   "The legal contract describing a bond issue.",
   "khế ước trái phiếu"
  ],
  [
   "covenant",
   "A promise (affirmative) or restriction (negative) binding the issuer.",
   "cam kết/điều khoản ràng buộc"
  ],
  [
   "callable bond",
   "Bond the issuer may redeem before maturity.",
   "trái phiếu có quyền mua lại"
  ],
  [
   "accrued interest",
   "Coupon earned but not yet paid, added to the clean price.",
   "lãi dồn tích"
  ],
  [
   "spot rate",
   "Yield on a zero-coupon bond for a given maturity.",
   "lãi suất giao ngay"
  ],
  [
   "yield to worst",
   "Lowest of YTM and all yields-to-call.",
   "lợi suất xấu nhất"
  ],
  [
   "credit spread",
   "Extra yield over a default-free benchmark.",
   "chênh lệch lợi suất tín dụng"
  ],
  [
   "tranche",
   "A slice of a securitization with a defined claim priority.",
   "tầng/lô chứng khoán hóa"
  ],
  [
   "prepayment risk",
   "Uncertainty about the timing of principal repayment in MBS.",
   "rủi ro trả nợ trước hạn"
  ],
  [
   "special purpose entity (SPE)",
   "Bankruptcy-remote entity issuing securitized bonds.",
   "pháp nhân chuyên biệt"
  ],
  [
   "floating-rate note (FRN)",
   "Bond whose coupon resets with a reference rate.",
   "trái phiếu lãi suất thả nổi"
  ],
  [
   "duration gap",
   "Difference between Macaulay duration and the investment horizon.",
   "khoảng chênh duration"
  ],
  [
   "repo & haircut",
   "Collateralized short-term loan via sale-and-repurchase; haircut = collateral cushion over cash lent",
   "Vay ngắn hạn có bảo đảm qua bán-và-mua-lại; haircut = phần đệm tài sản bảo đảm"
  ],
  [
   "on-the-run",
   "The most recently auctioned government issue — benchmark and most liquid",
   "Đợt trái phiếu chính phủ mới nhất — chuẩn tham chiếu, thanh khoản nhất"
  ],
  [
   "quoted vs discount margin",
   "Contractual FRN spread vs the spread the market currently requires",
   "Spread hợp đồng của FRN vs spread thị trường đang đòi hỏi"
  ],
  [
   "G / I / Z-spread & OAS",
   "Spread over govvies, over swaps, over the whole spot curve; OAS = Z − option cost",
   "Spread trên chính phủ, trên swap, trên toàn đường spot; OAS = Z − chi phí quyền chọn"
  ],
  [
   "spot, par & forward curves",
   "Zero-coupon yields; coupons pricing at par; future-period rates implied today",
   "Yield zero-coupon; coupon để giá bằng mệnh giá; lãi suất kỳ tương lai hàm ý hôm nay"
  ],
  [
   "bootstrapping",
   "Extracting spot rates sequentially from coupon-bond prices",
   "Trích xuất spot lần lượt từ giá trái phiếu coupon"
  ],
  [
   "money duration & PVBP",
   "Currency price sensitivity: MD × price; PVBP = that × 0.0001",
   "Độ nhạy giá bằng tiền: MD × giá; PVBP = nhân thêm 0,0001"
  ],
  [
   "duration gap",
   "Macaulay duration minus investment horizon; sign tells which rate risk dominates",
   "MacDur trừ kỳ đầu tư; dấu cho biết rủi ro giá hay tái đầu tư chiếm ưu thế"
  ],
  [
   "notching",
   "Adjusting an issue rating up/down from the issuer rating for seniority and security",
   "Điều chỉnh xếp hạng từng issue lên/xuống so với issuer theo ưu tiên và bảo đảm"
  ],
  [
   "subordination / waterfall",
   "Tranche loss ordering: juniors absorb losses first, seniors paid first",
   "Thứ tự chịu lỗ theo lớp: junior chịu trước, senior được trả trước"
  ],
  [
   "SPE (bankruptcy remote)",
   "Special purpose entity holding securitized assets beyond the seller’s bankruptcy",
   "Pháp nhân chuyên biệt giữ tài sản chứng khoán hóa, cách ly phá sản của bên bán"
  ],
  [
   "contraction / extension risk",
   "Prepayments speeding up as rates fall vs slowing as rates rise",
   "Trả trước tăng tốc khi lãi giảm vs chậm lại khi lãi tăng"
  ]
 ],
 "quiz": [
  {
   "q": "A bond has a modified duration of 7.0 and annual convexity of 90. If its yield falls by 100 bps, the estimated percentage price change is closest to:",
   "opts": [
    "+7.00%",
    "+7.45%",
    "+6.55%"
   ],
   "ans": 1,
   "en": "B is correct. %ΔP ≈ −7.0 × (−0.01) + 0.5 × 90 × (−0.01)² = +7.0% + 0.45% = +7.45%. Convexity adds to the gain when yields fall and cushions the loss when yields rise.",
   "vi": "Đáp án B. %ΔP ≈ −7.0 × (−0.01) + 0.5 × 90 × (0.01)² = +7.0% + 0.45% = +7.45%. Convexity cộng thêm khi lợi suất giảm và giảm bớt thiệt hại khi lợi suất tăng."
  },
  {
   "q": "A 10-year bond with a 4% annual coupon trades at a YTM of 5%. The bond most likely trades at:",
   "opts": [
    "a premium to par.",
    "par value.",
    "a discount to par."
   ],
   "ans": 2,
   "en": "C is correct. When the coupon rate (4%) is below the market discount rate (5%), the fixed coupons are insufficient at market rates, so the bond must price below par — a discount — to offer the market yield.",
   "vi": "Đáp án C. Khi coupon (4%) thấp hơn lãi suất thị trường (5%), các coupon cố định không đủ hấp dẫn, nên trái phiếu phải giao dịch dưới mệnh giá (discount) để đem lại lợi suất thị trường."
  },
  {
   "q": "Which bond has the greatest interest rate sensitivity (highest duration), all else equal?",
   "opts": [
    "High coupon, short maturity",
    "Zero coupon, long maturity",
    "High coupon, long maturity"
   ],
   "ans": 1,
   "en": "B is correct. Duration increases with maturity and decreases with coupon. A long-maturity zero-coupon bond pays everything at the end, so its Macaulay duration equals its (long) maturity — the maximum sensitivity.",
   "vi": "Đáp án B. Duration tăng theo kỳ hạn và giảm khi coupon cao. Zero-coupon kỳ hạn dài trả toàn bộ tiền vào cuối kỳ nên Macaulay duration bằng đúng kỳ hạn (dài) — độ nhạy tối đa."
  },
  {
   "q": "For a callable bond when interest rates fall well below the coupon rate, the bond most likely exhibits:",
   "opts": [
    "negative convexity.",
    "increased positive convexity.",
    "a price rising without limit."
   ],
   "ans": 0,
   "en": "A is correct. As rates fall, the call becomes more likely and the price is capped near the call price — the price-yield curve bends the \"wrong\" way, i.e., negative convexity. The investor’s upside is limited while downside remains.",
   "vi": "Đáp án A. Khi lãi suất giảm sâu, khả năng bị call tăng và giá bị chặn gần giá call — đường giá–lợi suất cong \"ngược\", tức convexity âm. Nhà đầu tư bị giới hạn phần tăng giá trong khi phần giảm vẫn nguyên."
  },
  {
   "q": "A bond has a 2% probability of default and an expected recovery rate of 60%. Its expected loss as a percentage of exposure is closest to:",
   "opts": [
    "0.8%",
    "1.2%",
    "2.0%"
   ],
   "ans": 0,
   "en": "A is correct. Expected loss = PD × LGD = 2% × (1 − 0.60) = 2% × 40% = 0.8%.",
   "vi": "Đáp án A. Tổn thất kỳ vọng = PD × LGD = 2% × (1 − 60%) = 0.8%."
  }
 ]
});
window.CFA.extra["fi"] = {
 "checks": [
  [
   {
    "q": "A floating-rate note’s coupon for each period is set equal to:",
    "opts": [
     "The market reference rate at issuance, fixed for the life",
     "The current market reference rate plus the quoted margin",
     "The discount margin minus the reference rate"
    ],
    "ans": 1,
    "en": "FRN coupons reset each period at MRR + quoted margin — resets keep interest rate risk near zero.",
    "vi": "Coupon FRN reset mỗi kỳ bằng MRR + quoted margin — cơ chế reset giữ rủi ro lãi suất gần bằng không."
   },
   {
    "q": "A bond provision that retires a portion of principal each year on a set schedule is a:",
    "opts": [
     "Sinking fund",
     "Put provision",
     "Term maturity structure"
    ],
    "ans": 0,
    "en": "Sinking funds amortize the issue on schedule — lowering default risk at maturity but exposing holders to reinvestment when bonds are retired at par in low-rate environments.",
    "vi": "Sinking fund hoàn trả gốc theo lịch — giảm rủi ro vỡ nợ cuối kỳ nhưng đẩy rủi ro tái đầu tư khi trái phiếu bị mua lại theo mệnh giá lúc lãi suất thấp."
   },
   {
    "q": "MRR is 2.4% and a floater's quoted margin is 125 bps. The next coupon is set at:",
    "opts": [
     "2.40%",
     "3.65%",
     "1.15%"
    ],
    "ans": 1,
    "en": "Coupon = MRR + QM = 2.40 + 1.25 = 3.65%.",
    "vi": "Coupon = MRR + QM = 2,40 + 1,25 = 3,65%."
   },
   {
    "q": "A bond pays coupons in additional bonds rather than cash. This is a:",
    "opts": [
     "Step-up bond",
     "PIK bond",
     "Credit-linked note"
    ],
    "ans": 1,
    "en": "Payment-in-kind — typical of highly leveraged issuers preserving cash; a stress signal when activated by choice.",
    "vi": "Payment-in-kind — điển hình của công ty đòn bẩy cao muốn giữ tiền mặt; là tín hiệu căng thẳng khi được chọn kích hoạt."
   }
  ],
  [
   {
    "q": "In a repurchase agreement, the \"haircut\" or initial margin refers to:",
    "opts": [
     "The fee paid to the repo dealer",
     "The excess of collateral value over the cash lent",
     "The difference between repo rate and policy rate"
    ],
    "ans": 1,
    "en": "The cash lender demands collateral worth more than the loan; the percentage cushion is the haircut, larger for riskier or less liquid collateral.",
    "vi": "Bên cho vay tiền đòi tài sản bảo đảm giá trị lớn hơn khoản vay; phần đệm phần trăm đó là haircut, lớn hơn với tài sản rủi ro/kém thanh khoản."
   },
   {
    "q": "The most recently issued government security of a given maturity is called:",
    "opts": [
     "A benchmark reopening",
     "On-the-run",
     "A tap issue"
    ],
    "ans": 1,
    "en": "On-the-run issues are the newest, most liquid, and serve as the pricing benchmark; older issues are off-the-run.",
    "vi": "On-the-run là đợt mới nhất, thanh khoản nhất, làm chuẩn định giá; các đợt cũ là off-the-run."
   },
   {
    "q": "In a repo, the cash borrower posts $50m of bonds with a 4% haircut. The amount lent is:",
    "opts": [
     "$50m",
     "$48m",
     "$52m"
    ],
    "ans": 1,
    "en": "50 × (1 − 0.04) = $48m — the haircut protects the cash lender.",
    "vi": "50 × (1 − 0,04) = $48tr — haircut bảo vệ người cho vay tiền."
   },
   {
    "q": "Compared with a public offering, a private placement typically offers investors:",
    "opts": [
     "More liquidity, lower yield",
     "Less liquidity, higher yield",
     "Identical terms"
    ],
    "ans": 1,
    "en": "No public disclosure and a narrow holder base cut liquidity; investors demand extra yield in return.",
    "vi": "Không công bố đại chúng và ít người nắm giữ làm giảm thanh khoản; đổi lại nhà đầu tư đòi lợi suất cao hơn."
   }
  ],
  [
   {
    "q": "A bond trades at a premium to par. Its coupon rate is most likely:",
    "opts": [
     "Below its yield-to-maturity",
     "Above its yield-to-maturity",
     "Equal to its yield-to-maturity"
    ],
    "ans": 1,
    "en": "Coupon &gt; YTM → investors pay above par; coupon &lt; YTM → discount; coupon = YTM → par. The price adjusts so the total return equals the market yield.",
    "vi": "Coupon &gt; YTM → giá cao hơn mệnh giá (premium); coupon &lt; YTM → discount; bằng nhau → giá bằng mệnh giá."
   },
   {
    "q": "The relationship between a standard bond’s price and its yield is best described as:",
    "opts": [
     "Linear and inverse",
     "Inverse and convex — price rises more when yields fall than it drops when yields rise equally",
     "Direct and convex"
    ],
    "ans": 1,
    "en": "Price and yield move inversely along a convex curve: equal yield moves produce a larger gain (yields down) than loss (yields up).",
    "vi": "Giá và lợi suất nghịch chiều theo đường cong lồi: lợi suất giảm 1% làm giá tăng nhiều hơn mức giá giảm khi lợi suất tăng 1%."
   },
   {
    "q": "A bond's full price is 101.40 and accrued interest is 1.15. The quoted (flat) price is:",
    "opts": [
     "102.55",
     "100.25",
     "101.40"
    ],
    "ans": 1,
    "en": "Flat = full − AI = 101.40 − 1.15 = 100.25.",
    "vi": "Flat = full − AI = 101,40 − 1,15 = 100,25."
   },
   {
    "q": "Comparable bonds yield 4.2% (2y) and 5.0% (4y). Matrix pricing estimates the 3-year yield at:",
    "opts": [
     "4.4%",
     "4.6%",
     "4.8%"
    ],
    "ans": 1,
    "en": "Linear interpolation: 4.2 + ½ × (5.0 − 4.2) = 4.6%.",
    "vi": "Nội suy tuyến tính: 4,2 + ½ × (5,0 − 4,2) = 4,6%."
   }
  ],
  [
   {
    "q": "Compared with the G-spread, the Z-spread differs because it is measured:",
    "opts": [
     "Over a single interpolated government yield",
     "As a constant spread added to every point of the spot curve",
     "Only for floating-rate instruments"
    ],
    "ans": 1,
    "en": "The Z-spread reprices the bond off the entire spot curve — more precise than the single-point G-spread when the curve is steep.",
    "vi": "Z-spread định giá lại trái phiếu trên toàn bộ đường spot — chính xác hơn G-spread một điểm khi đường cong dốc."
   },
   {
    "q": "A floating-rate note’s quoted margin is 80 bps while the market now requires a discount margin of 120 bps. At the next reset, the FRN will most likely trade at:",
    "opts": [
     "Par",
     "A discount to par",
     "A premium to par"
    ],
    "ans": 1,
    "en": "The contract pays less than the market demands (QM < DM) — the price must fall below par to compensate. Credit deterioration is the usual cause.",
    "vi": "Hợp đồng trả thấp hơn mức thị trường đòi hỏi (QM < DM) — giá phải xuống dưới mệnh giá để bù. Nguyên nhân thường là tín dụng xấu đi."
   },
   {
    "q": "A callable bond shows YTM 6.2%, YTC(1st call) 5.4%, YTC(2nd call) 5.9%. Yield-to-worst is:",
    "opts": [
     "6.2%",
     "5.4%",
     "5.9%"
    ],
    "ans": 1,
    "en": "YTW = the minimum of all yield measures = 5.4%.",
    "vi": "YTW = giá trị nhỏ nhất trong các thước đo = 5,4%."
   },
   {
    "q": "A putable bond's OAS relative to its Z-spread is:",
    "opts": [
     "Lower",
     "Higher",
     "Identical"
    ],
    "ans": 1,
    "en": "The put benefits the holder; option cost is negative, so OAS = Z − (negative) > Z.",
    "vi": "Quyền put có lợi cho người nắm; chi phí quyền chọn âm, nên OAS = Z − (số âm) > Z."
   }
  ],
  [
   {
    "q": "One-year spot rate is 2%, two-year spot rate is 3%. The implied one-year forward rate one year from now is closest to:",
    "opts": [
     "2.5%",
     "4.0%",
     "3.0%"
    ],
    "ans": 1,
    "en": "f = (1.03)²/(1.02) − 1 ≈ 4.01% — the break-even rate that equates rolling one-year bonds with holding the two-year.",
    "vi": "f = (1,03)²/(1,02) − 1 ≈ 4,01% — lãi suất hòa vốn khiến việc cuộn trái phiếu 1 năm ngang với nắm trái phiếu 2 năm."
   },
   {
    "q": "Valuing a coupon bond by discounting each cash flow at the corresponding zero-coupon yield uses:",
    "opts": [
     "The par curve",
     "Spot rates",
     "Forward rates only"
    ],
    "ans": 1,
    "en": "Spot (zero) rates are the correct discount rates for individual cash flows; YTM is just the single-rate summary of that valuation.",
    "vi": "Spot (zero) rate là suất chiết khấu đúng cho từng dòng tiền; YTM chỉ là bản tóm tắt một-lãi-suất của phép định giá đó."
   },
   {
    "q": "z1 = 2%, z2 = 3%. The 1y1y forward rate is closest to:",
    "opts": [
     "2.5%",
     "4.0%",
     "3.5%"
    ],
    "ans": 1,
    "en": "(1.03)²/(1.02) − 1 = 1.0609/1.02 − 1 ≈ 4.0%.",
    "vi": "(1,03)²/(1,02) − 1 ≈ 4,0%."
   },
   {
    "q": "On an upward-sloping spot curve, the par rate at a given maturity is:",
    "opts": [
     "Above the spot rate",
     "Below the spot rate",
     "Equal to the spot rate"
    ],
    "ans": 1,
    "en": "Par rates blend earlier (lower) spots via the coupons → par < spot when the curve rises.",
    "vi": "Par rate pha trộn các spot sớm hơn (thấp hơn) qua coupon → par < spot khi đường cong dốc lên."
   }
  ],
  [
   {
    "q": "A bond has modified duration of 5.0. If its yield rises 100 bps, the approximate price change is:",
    "opts": [
     "−5.0%",
     "+5.0%",
     "−0.5%"
    ],
    "ans": 0,
    "en": "%ΔP ≈ −ModDur × Δy = −5.0 × 1.00% = −5.0% (before the convexity adjustment).",
    "vi": "%Δgiá ≈ −ModDur × Δlợi suất = −5% (chưa gồm hiệu chỉnh convexity)."
   },
   {
    "q": "An investor’s horizon is longer than the bond’s Macaulay duration. A one-time rise in rates most likely:",
    "opts": [
     "Reduces the horizon return — price risk dominates",
     "Increases the horizon return — reinvestment dominates",
     "Leaves the horizon return unchanged"
    ],
    "ans": 1,
    "en": "Beyond the Macaulay duration point, higher reinvestment income outweighs the initial price loss — the duration gap (MacDur − horizon) is negative.",
    "vi": "Khi kỳ đầu tư vượt Macaulay duration, thu nhập tái đầu tư cao hơn lấn át khoản lỗ giá ban đầu — duration gap (MacDur − kỳ đầu tư) âm."
   },
   {
    "q": "P0 = 100, P− = 104.2, P+ = 96.2 for Δy = 50 bps. Approximate modified duration is:",
    "opts": [
     "4.0",
     "8.0",
     "6.0"
    ],
    "ans": 1,
    "en": "(104.2 − 96.2)/(2 × 100 × 0.005) = 8/1 = 8.0.",
    "vi": "(104,2 − 96,2)/(2 × 100 × 0,005) = 8,0."
   },
   {
    "q": "An investor's horizon is 4 years; the bond's Macaulay duration is 7. The dominant risk is:",
    "opts": [
     "Reinvestment risk — falling rates",
     "Price risk — rising rates",
     "Credit migration"
    ],
    "ans": 1,
    "en": "Positive duration gap (7 − 4): sale price at the horizon dominates → rising rates hurt.",
    "vi": "Duration gap dương (7 − 4): giá bán tại horizon chi phối → lãi suất tăng gây hại."
   }
  ],
  [
   {
    "q": "Holding a bond’s benchmark yield constant, a widening of its credit spread will:",
    "opts": [
     "Raise its price",
     "Lower its price",
     "Leave the price unchanged"
    ],
    "ans": 1,
    "en": "Spread widening means the market demands more compensation for credit risk — the bond’s all-in yield rises, so its price falls.",
    "vi": "Spread tín dụng nới rộng = thị trường đòi bù rủi ro cao hơn → lợi suất tổng tăng → giá trái phiếu giảm."
   },
   {
    "q": "A bond’s probability of default is 2% and its loss given default is 40% of exposure. The expected loss is:",
    "opts": [
     "0.8% of exposure",
     "2.4% of exposure",
     "42% of exposure"
    ],
    "ans": 0,
    "en": "Expected loss = PD × LGD = 2% × 40% = 0.8% — the credit-spread building block.",
    "vi": "Tổn thất kỳ vọng = PD × LGD = 2% × 40% = 0,8% — viên gạch nền của credit spread."
   },
   {
    "q": "PD = 2%, recovery = 30%. The first-order credit spread is closest to:",
    "opts": [
     "60 bps",
     "140 bps",
     "200 bps"
    ],
    "ans": 1,
    "en": "Spread ≈ PD × LGD = 2% × 70% = 1.4% = 140 bps.",
    "vi": "Spread ≈ PD × LGD = 2% × 70% = 1,4% = 140 bps."
   },
   {
    "q": "The lowest investment-grade rating is:",
    "opts": [
     "BB+",
     "BBB−",
     "A−"
    ],
    "ans": 1,
    "en": "BBB−/Baa3 is the IG floor; below it starts high yield (the 'fallen angel' boundary).",
    "vi": "BBB−/Baa3 là sàn hạng đầu tư; dưới đó là high yield (ranh giới 'fallen angel')."
   }
  ],
  [
   {
    "q": "The primary purpose of using a bankruptcy-remote SPE in securitization is to:",
    "opts": [
     "Reduce the servicer’s fees",
     "Separate the collateral pool’s credit from the seller’s credit",
     "Guarantee investors against prepayment"
    ],
    "ans": 1,
    "en": "The true sale to an SPE means investors look only to the asset pool — the sponsor’s bankruptcy cannot claw the assets back.",
    "vi": "Bán đứt cho SPE khiến nhà đầu tư chỉ dựa vào rổ tài sản — phá sản của sponsor không thể kéo tài sản trở lại."
   },
   {
    "q": "When market rates fall sharply, holders of mortgage pass-through securities most likely face:",
    "opts": [
     "Extension risk",
     "Contraction risk",
     "Higher credit losses"
    ],
    "ans": 1,
    "en": "Falling rates trigger refinancing: principal returns early at exactly the wrong time — contraction risk, the negative-convexity signature of MBS.",
    "vi": "Lãi suất giảm kích hoạt tái tài trợ: gốc về sớm đúng thời điểm bất lợi — rủi ro co ngắn, dấu hiệu lồi âm đặc trưng của MBS."
   },
   {
    "q": "A pool of 100 is tranched senior 80 / mezzanine 15 / equity 5. Losses of 12 leave the senior tranche with losses of:",
    "opts": [
     "0",
     "2",
     "12"
    ],
    "ans": 0,
    "en": "Equity absorbs 5, mezzanine absorbs 7 (of its 15); the senior is untouched until losses exceed 20.",
    "vi": "Equity chịu 5, mezzanine chịu 7 (trong 15 của nó); senior chưa hề hấn cho đến khi tổn thất vượt 20."
   },
   {
    "q": "Interest rates fall sharply. An MBS pass-through holder faces:",
    "opts": [
     "Extension risk",
     "Contraction risk",
     "Neither — the agency guarantees timing"
    ],
    "ans": 1,
    "en": "Refinancing surges: principal returns early at poor reinvestment rates and price upside is capped (negative convexity).",
    "vi": "Tái tài trợ ào ạt: gốc về sớm với lãi tái đầu tư kém và giá bị chặn trần (negative convexity)."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "Modified duration is 6.0 and the yield rises 50 bps. The approximate percentage price change is:",
    "opts": [
     "−3.0%",
     "−6.0%",
     "+3.0%"
    ],
    "ans": 0,
    "en": "%ΔP ≈ −6.0 × 0.50% = −3.0%.",
    "vi": "%Δgiá ≈ −6,0 × 0,5% = −3,0%."
   },
   {
    "q": "The Macaulay duration of a 10-year zero-coupon bond is:",
    "opts": [
     "Less than 10 years",
     "Exactly 10 years",
     "More than 10 years"
    ],
    "ans": 1,
    "en": "A zero has a single cash flow at maturity, so its Macaulay duration equals its maturity — the longest duration for a given maturity.",
    "vi": "Trái phiếu zero-coupon chỉ có một dòng tiền lúc đáo hạn → Macaulay duration đúng bằng kỳ hạn — cao nhất trong các trái phiếu cùng kỳ hạn."
   },
   {
    "q": "Realizing a return equal to the YTM at purchase requires, among other things, that the investor:",
    "opts": [
     "Sell before maturity",
     "Hold to maturity and reinvest all coupons at the YTM",
     "Avoid reinvesting coupons"
    ],
    "ans": 1,
    "en": "YTM is an internal rate of return: it is earned only if the bond is held to maturity, pays as promised, and coupons are reinvested at that same rate.",
    "vi": "YTM là IRR: chỉ đạt được nếu giữ đến đáo hạn, không vỡ nợ, và tái đầu tư toàn bộ coupon đúng bằng mức YTM đó."
   },
   {
    "q": "As yields fall well below a callable bond’s coupon rate, the bond exhibits:",
    "opts": [
     "Positive convexity and unlimited upside",
     "Negative convexity — price appreciation is capped near the call price",
     "Higher duration than an otherwise identical option-free bond"
    ],
    "ans": 1,
    "en": "The issuer’s call right caps upside: price compresses toward the call price, producing negative convexity at low yields.",
    "vi": "Quyền mua lại của tổ chức phát hành chặn đà tăng giá: giá bị nén về gần giá call → convexity âm khi lợi suất thấp."
   },
   {
    "q": "A key purpose of using a special purpose entity (SPE) in securitization is to:",
    "opts": [
     "Increase the originator’s leverage ratios",
     "Legally separate the securitized assets from the seller’s bankruptcy risk",
     "Avoid rating agencies"
    ],
    "ans": 1,
    "en": "The bankruptcy-remote SPE isolates the collateral pool, letting the securities be rated on the assets themselves — often reducing funding costs.",
    "vi": "SPE cách ly pháp lý tài sản khỏi rủi ro phá sản của bên bán, giúp chứng khoán được xếp hạng theo chính chất lượng tài sản → chi phí vốn thường rẻ hơn."
   },
   {
    "q": "In a corporate liquidation, the ranking from first to last claim is most likely:",
    "opts": [
     "Subordinated debt → senior unsecured → secured",
     "Secured debt → senior unsecured → subordinated debt → equity",
     "Equity → all debt equally"
    ],
    "ans": 1,
    "en": "Priority of claims: secured creditors first (up to collateral value), then senior unsecured, subordinated, and equity last.",
    "vi": "Thứ tự ưu tiên: nợ có bảo đảm (đến hết giá trị tài sản thế chấp) → nợ không bảo đảm cấp cao → nợ thứ cấp → cổ đông cuối cùng."
   },
   {
    "q": "The one-year spot rate is 4% and the one-year forward rate one year from now is 6%. The two-year spot rate is closest to:",
    "opts": [
     "5.0%",
     "6.0%",
     "4.5%"
    ],
    "ans": 0,
    "en": "(1+z₂)² = 1.04 × 1.06 = 1.1024 → z₂ ≈ 5.0% — forwards and spots chain by no-arbitrage.",
    "vi": "(1+z₂)² = 1,04 × 1,06 = 1,1024 → z₂ ≈ 5,0% — forward và spot nối nhau theo nguyên tắc không-arbitrage."
   },
   {
    "q": "A portfolio has a full price of $1,000,000 and modified duration of 6. Its PVBP (value of one basis point) is closest to:",
    "opts": [
     "$600",
     "$6,000",
     "$60"
    ],
    "ans": 0,
    "en": "Money duration = 6 × 1,000,000 = 6,000,000; PVBP = money duration × 0.0001 = $600.",
    "vi": "Money duration = 6 × 1.000.000 = 6.000.000; PVBP = money duration × 0,0001 = 600 USD."
   }
  ],
  [
   {
    "q": "A bond with an annual coupon of $60 trades at $960. Its current yield is closest to:",
    "opts": [
     "6.00%",
     "6.25%",
     "6.40%"
    ],
    "ans": 1,
    "en": "Current yield = 60/960 = 6.25% — it ignores principal gain/loss and reinvestment, unlike YTM.",
    "vi": "Current yield = 60/960 = 6,25% — chỉ đo thu nhập coupon trên giá, bỏ qua lãi/lỗ vốn và tái đầu tư."
   },
   {
    "q": "Holding maturity constant, duration is higher for bonds with:",
    "opts": [
     "Higher coupons and higher yields",
     "Lower coupons and lower yields",
     "Higher coupons and lower yields"
    ],
    "ans": 1,
    "en": "Lower coupons push cash-flow weight toward maturity, and lower yields raise the relative weight of distant flows — both lengthen duration.",
    "vi": "Coupon thấp và lợi suất thấp đều dồn tỷ trọng dòng tiền về cuối kỳ → duration dài hơn, giá nhạy hơn với lãi suất."
   },
   {
    "q": "A floating-rate note’s interest rate risk is low primarily because:",
    "opts": [
     "Its credit spread never changes",
     "Its coupon resets periodically to current market rates",
     "It has no coupon"
    ],
    "ans": 1,
    "en": "Coupon resets pull the price back toward par at each reset date, so effective duration is roughly the time to the next reset.",
    "vi": "Coupon của FRN được điều chỉnh định kỳ theo lãi suất thị trường nên giá luôn kéo về gần mệnh giá — duration hiệu dụng chỉ xấp xỉ thời gian đến kỳ reset kế tiếp."
   },
   {
    "q": "For large yield changes, adding a convexity adjustment to the duration estimate of price change:",
    "opts": [
     "Makes the estimate less accurate",
     "Improves accuracy because duration alone is a straight-line approximation",
     "Only matters for zero-coupon bonds"
    ],
    "ans": 1,
    "en": "Duration is the tangent line to the convex price-yield curve; the convexity term corrects the growing error for larger yield moves.",
    "vi": "Duration chỉ là đường tiếp tuyến của đường giá–lợi suất cong; số hạng convexity hiệu chỉnh sai số vốn tăng nhanh khi lợi suất biến động lớn."
   },
   {
    "q": "A bond has a probability of default of 2% and an expected loss severity (loss given default) of 60%. Its expected loss is:",
    "opts": [
     "0.6%",
     "1.2%",
     "3.0%"
    ],
    "ans": 1,
    "en": "Expected loss = POD × LGD = 2% × 60% = 1.2% — the anchor of credit-spread compensation.",
    "vi": "Tổn thất kỳ vọng = xác suất vỡ nợ × mức tổn thất khi vỡ nợ = 2% × 60% = 1,2% — nền tảng của spread tín dụng."
   },
   {
    "q": "An inverted government yield curve most commonly signals market expectations of:",
    "opts": [
     "Accelerating growth and inflation",
     "Future policy easing and slower growth — historically a recession warning",
     "Higher long-run productivity"
    ],
    "ans": 1,
    "en": "Short rates above long rates imply markets expect future rate cuts as growth and inflation weaken — inversions have preceded most recessions.",
    "vi": "Lãi suất ngắn hạn cao hơn dài hạn hàm ý kỳ vọng NHTW sẽ phải hạ lãi suất khi kinh tế yếu đi — đường cong đảo ngược thường báo trước suy thoái."
   },
   {
    "q": "For a callable corporate bond, the option-adjusted spread (OAS) relative to the Z-spread is:",
    "opts": [
     "Higher, because the call adds yield",
     "Lower, because the option cost is removed from the spread",
     "Identical"
    ],
    "ans": 1,
    "en": "OAS = Z-spread − option cost. Stripping the issuer’s call option out leaves pure credit/liquidity compensation, so OAS < Z-spread for callables.",
    "vi": "OAS = Z-spread − chi phí quyền chọn. Bóc quyền call của issuer ra chỉ còn phần bù tín dụng/thanh khoản, nên OAS < Z-spread với callable."
   },
   {
    "q": "Rates rise sharply and mortgage prepayments slow well below forecast. Holders of the long sequential-pay CMO tranches most likely experience:",
    "opts": [
     "Contraction risk",
     "Extension risk",
     "Elimination of prepayment risk"
    ],
    "ans": 1,
    "en": "Slower prepayments stretch the principal window: durations extend exactly when rates are high — extension risk, borne most by the later tranches.",
    "vi": "Trả trước chậm lại kéo giãn cửa sổ nhận gốc: duration dài ra đúng lúc lãi suất cao — rủi ro kéo dài, dồn nhiều nhất vào các lớp muộn."
   }
  ],
  {
   "name": "Set D — Mixed exam-style review",
   "qs": [
    {
     "q": "An inverse floater's coupon when the reference rate RISES:",
     "opts": [
      "Rises",
      "Falls",
      "Is unchanged"
     ],
     "ans": 1,
     "en": "Coupon = K − L × MRR: it moves opposite to rates — leveraged exposure to falling rates.",
     "vi": "Coupon = K − L × MRR: chạy ngược lãi suất — phơi nhiễm khuếch đại với lãi suất giảm."
    },
    {
     "q": "A capital-indexed linker with a 2.5% real coupon sees cumulative inflation of 10%. The coupon payment per 100 of original par is:",
     "opts": [
      "2.50",
      "2.75",
      "12.50"
     ],
     "ans": 1,
     "en": "Principal is indexed to 110; coupon = 2.5% × 110 = 2.75.",
     "vi": "Gốc chỉ số hóa lên 110; coupon = 2,5% × 110 = 2,75."
    },
    {
     "q": "A government bond in exceptional repo demand ('on special') is financed at a repo rate that is:",
     "opts": [
      "Above the general collateral rate",
      "Below the general collateral rate",
      "Equal to it"
     ],
     "ans": 1,
     "en": "Cash lenders accept a below-market rate specifically to obtain that bond as collateral.",
     "vi": "Người cho vay tiền chấp nhận lãi dưới thị trường chỉ để có được đúng trái phiếu đó làm tài sản đảm bảo."
    },
    {
     "q": "Holding maturity and yield constant, the bond with the LOWEST duration has:",
     "opts": [
      "A zero coupon",
      "A 3% coupon",
      "An 8% coupon"
     ],
     "ans": 2,
     "en": "Higher coupons pull cash flow weight forward → lower duration; the zero has the highest.",
     "vi": "Coupon cao kéo trọng lượng dòng tiền về sớm → duration thấp hơn; zero coupon có duration cao nhất."
    },
    {
     "q": "Duration 6.5, convexity 60, yields rise 150 bps. Estimated price change:",
     "opts": [
      "−9.75%",
      "−9.08%",
      "−10.43%"
     ],
     "ans": 1,
     "en": "−6.5(0.015) + 0.5(60)(0.015²) = −9.75% + 0.675% = −9.08%.",
     "vi": "−6,5(0,015) + 0,5(60)(0,015²) = −9,75% + 0,675% = −9,08%."
    },
    {
     "q": "A portfolio holds $6m at duration 2 and $4m at duration 7. Portfolio duration is:",
     "opts": [
      "4.5",
      "4.0",
      "5.0"
     ],
     "ans": 1,
     "en": "0.6(2) + 0.4(7) = 1.2 + 2.8 = 4.0.",
     "vi": "0,6(2) + 0,4(7) = 4,0."
    },
    {
     "q": "PVBP of a position is $520. A 25 bp adverse move costs approximately:",
     "opts": [
      "$520",
      "$2,080",
      "$13,000"
     ],
     "ans": 2,
     "en": "$520 per bp × 25 bps = $13,000.",
     "vi": "$520 mỗi bp × 25 bps = $13.000."
    },
    {
     "q": "As rates fall toward a callable bond's trigger, its effective duration:",
     "opts": [
      "Rises toward maturity duration",
      "Falls as the call caps price gains",
      "Is unaffected by the option"
     ],
     "ans": 1,
     "en": "The likely call truncates cash flows: price compresses toward the call price and duration collapses (negative convexity region).",
     "vi": "Khả năng bị call cắt cụt dòng tiền: giá nén về giá call và duration sụp xuống (vùng negative convexity)."
    },
    {
     "q": "A BB-rated issuer's subordinated notes would most likely be rated:",
     "opts": [
      "BB+",
      "BB",
      "B+"
     ],
     "ans": 2,
     "en": "Issue ratings are notched DOWN from the issuer rating for subordination (lower expected recovery).",
     "vi": "Xếp hạng lô trái phiếu bị notch XUỐNG so với hạng công ty vì tính subordinated (kỳ vọng thu hồi thấp hơn)."
    },
    {
     "q": "Spreads on high-yield bonds widen sharply with no change in issuer fundamentals. The most likely driver is:",
     "opts": [
      "Improved recoveries",
      "A market-wide flight from risk and liquidity",
      "Rating upgrades"
     ],
     "ans": 1,
     "en": "Risk appetite and liquidity premia move spreads independently of PD/LGD — HY reacts most in risk-off episodes.",
     "vi": "Khẩu vị rủi ro và phần bù thanh khoản dịch spread độc lập với PD/LGD — HY phản ứng mạnh nhất trong pha risk-off."
    },
    {
     "q": "Which feature distinguishes covered bonds from ABS?",
     "opts": [
      "A bankruptcy-remote SPE holds the assets",
      "Dual recourse to both the issuing bank and the cover pool",
      "Higher yields than comparable ABS"
     ],
     "ans": 1,
     "en": "The pool stays on the bank's balance sheet with replenishment obligations; investors claim against bank AND pool — hence lower yields.",
     "vi": "Pool ở lại balance sheet ngân hàng kèm nghĩa vụ bổ sung; nhà đầu tư đòi được cả ngân hàng LẪN pool — vì thế lợi suất thấp hơn."
    },
    {
     "q": "In a sequential-pay CMO, the FIRST tranche to receive principal offers investors:",
     "opts": [
      "The most extension protection but most contraction exposure",
      "The most contraction protection",
      "No prepayment risk at all"
     ],
     "ans": 0,
     "en": "Early principal retires tranche A fast when prepayments surge (contraction), while shielding later tranches; extension hits the back tranches hardest.",
     "vi": "Gốc về sớm khiến tranche A nghỉ hưu nhanh khi prepay tăng vọt (chịu contraction), đồng thời che chắn các tranche sau; extension đánh mạnh nhất vào tranche cuối."
    }
   ]
  }
 ]
};
