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
  "en": "Fixed Income carries one of the heaviest exam weights. The curriculum’s nineteen learning modules are grouped here into eight clusters: instrument features and cash flows; issuance, trading, and markets (including repo); bond valuation; yield and spread measures; the term structure (spot, par, forward); interest rate risk (duration and convexity); credit risk and analysis; and securitization (ABS/MBS). Expect calculations — prices, yields, forwards, duration estimates — alongside precise definitions of market plumbing.",
  "vi": "Fixed Income mang một trong những trọng số thi nặng nhất. Mười chín learning modules của curriculum được gộp thành tám cụm: đặc điểm công cụ và dòng tiền; phát hành, giao dịch và thị trường (gồm repo); định giá trái phiếu; các thước đo yield và spread; cấu trúc kỳ hạn (spot, par, forward); rủi ro lãi suất (duration, convexity); rủi ro và phân tích tín dụng; và chứng khoán hóa (ABS/MBS). Đề sẽ có cả tính toán — giá, yield, forward, ước tính duration — lẫn các định nghĩa chính xác về \"hệ ống nước\" của thị trường."
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
    }
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
    }
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
    }
   ],
   "formulas": [
    [
     "Forward from spots",
     "(1+z₂)² = (1+z₁)(1+f₁,₁)",
     "Generalizes across the curve"
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
    }
   ],
   "formulas": [
    [
     "Expected loss",
     "EL = PD × LGD",
     "LGD = 1 − recovery rate"
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
    }
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
  ]
 ]
};
