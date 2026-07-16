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
  "en": "Fixed Income is heavily weighted and very learnable: master bond pricing mechanics, yield measures, and — the exam favorites — duration and convexity. The logic of \"price and yield move inversely\" underlies almost every question. Securitization (MBS/ABS) and credit analysis round out the topic.",
  "vi": "Fixed Income có trọng số cao và rất \"học được\": nắm chắc cơ chế định giá trái phiếu, các thước đo lợi suất, và — hai chủ đề đề thi ưa thích — duration và convexity. Logic \"giá và lợi suất ngược chiều\" là nền của gần như mọi câu hỏi. Chứng khoán hóa (MBS/ABS) và phân tích tín dụng hoàn thiện chủ đề này."
 },
 "modules": [
  {
   "title": "Bond Features & Pricing",
   "sections": [
    {
     "h": "Instrument features",
     "en": "<ul><li>Key terms: <strong>par (face) value</strong>, <strong>coupon rate</strong> (fixed, floating = reference rate + spread, zero-coupon), <strong>maturity</strong>, currency, and the <strong>indenture</strong> (the legal contract) with covenants — <em>affirmative</em> (things the issuer must do) and <em>negative</em> (restrictions such as limits on additional debt).</li><li>Seniority: secured (backed by collateral) ranks above unsecured (debentures); within unsecured, senior above subordinated.</li><li>Contingency provisions: <strong>callable</strong> (issuer may redeem early — bad for investors, higher yield), <strong>putable</strong> (investor may sell back — good for investors, lower yield), <strong>convertible</strong> (exchangeable into shares).</li></ul>",
     "vi": "<ul><li>Thuật ngữ chính: <strong>mệnh giá</strong>, <strong>lãi suất coupon</strong> (cố định, thả nổi = lãi suất tham chiếu + spread, zero-coupon), <strong>kỳ hạn</strong>, đồng tiền, và <strong>indenture</strong> (hợp đồng pháp lý) với các cam kết — <em>affirmative</em> (việc phải làm) và <em>negative</em> (hạn chế, VD giới hạn vay thêm).</li><li>Thứ tự ưu tiên: có bảo đảm đứng trên không bảo đảm; trong nhóm không bảo đảm, senior đứng trên subordinated.</li><li>Điều khoản kèm theo: <strong>callable</strong> (tổ chức phát hành được mua lại sớm — bất lợi cho nhà đầu tư, lợi suất cao hơn), <strong>putable</strong> (nhà đầu tư được bán lại — có lợi, lợi suất thấp hơn), <strong>convertible</strong> (chuyển đổi thành cổ phiếu).</li></ul>"
    },
    {
     "h": "Pricing and the price–yield relationship",
     "en": "<p>A bond’s price is the present value of its coupons and face value, discounted at the market discount rate (YTM). Core relationships:</p><ul><li>Coupon rate &lt; YTM → <strong>discount</strong>; coupon = YTM → par; coupon &gt; YTM → <strong>premium</strong>.</li><li>Price and yield are <strong>inversely related</strong>, and the relationship is <strong>convex</strong>: a 1% fall in yield raises price <em>more</em> than a 1% rise lowers it.</li><li><strong>Pull to par:</strong> as maturity approaches, price converges to face value (\"constant-yield price trajectory\").</li><li>Longer maturity and <em>lower</em> coupon → greater price sensitivity to yield changes.</li><li>Between coupon dates: full (dirty) price = flat (clean) price + accrued interest. Quoted prices are clean.</li></ul>",
     "vi": "<p>Giá trái phiếu là hiện giá của các coupon và mệnh giá, chiết khấu tại lãi suất thị trường (YTM). Quan hệ cốt lõi:</p><ul><li>Coupon &lt; YTM → giao dịch <strong>dưới mệnh giá</strong>; coupon = YTM → bằng mệnh giá; coupon &gt; YTM → <strong>trên mệnh giá</strong>.</li><li>Giá và lợi suất <strong>ngược chiều</strong>, và quan hệ này <strong>lồi (convex)</strong>: lợi suất giảm 1% làm giá tăng <em>nhiều hơn</em> mức giá giảm khi lợi suất tăng 1%.</li><li><strong>Pull to par:</strong> càng gần đáo hạn, giá càng hội tụ về mệnh giá.</li><li>Kỳ hạn dài hơn và coupon <em>thấp hơn</em> → giá nhạy hơn với thay đổi lợi suất.</li><li>Giữa hai kỳ coupon: giá đầy đủ (dirty) = giá niêm yết (clean) + lãi dồn tích.</li></ul>"
    },
    {
     "h": "Yield measures and the yield curve",
     "en": "<ul><li><strong>YTM</strong> assumes the bond is held to maturity, all payments received on time, and coupons <em>reinvested at the YTM</em>.</li><li><strong>Current yield</strong> = annual coupon / price (ignores time value and capital gain/loss).</li><li>Callable bonds: yield-to-call for each call date; <strong>yield-to-worst</strong> is the lowest of all.</li><li>Money market instruments use discount rates or add-on rates on 360- or 365-day conventions — convert to a common basis to compare.</li><li><strong>Spot rates</strong> are yields on zero-coupon bonds; the no-arbitrage price discounts each cash flow at its own spot rate. <strong>Forward rates</strong> are implied future rates. A normal yield curve slopes upward; inversion (short &gt; long yields) has historically preceded recessions.</li><li>Spreads: <strong>G-spread</strong> (over government yields), <strong>I-spread</strong> (over swaps), <strong>Z-spread</strong> (constant spread over the whole spot curve), <strong>OAS</strong> (Z-spread minus option cost — used for callable bonds).</li></ul>",
     "vi": "<ul><li><strong>YTM</strong> giả định giữ đến đáo hạn, nhận đủ mọi khoản đúng hạn, và coupon <em>tái đầu tư tại chính YTM</em>.</li><li><strong>Current yield</strong> = coupon năm / giá (bỏ qua giá trị thời gian và lãi/lỗ vốn).</li><li>Trái phiếu callable: tính yield-to-call cho từng ngày call; <strong>yield-to-worst</strong> là mức thấp nhất.</li><li>Công cụ thị trường tiền tệ dùng lãi suất chiết khấu hoặc add-on trên cơ sở 360/365 ngày — phải quy về cùng cơ sở để so sánh.</li><li><strong>Lãi suất spot</strong> là lợi suất trái phiếu zero-coupon; giá không-arbitrage chiết khấu từng dòng tiền theo spot tương ứng. <strong>Lãi suất forward</strong> là lãi suất tương lai hàm ý. Đường cong lợi suất thường dốc lên; đảo ngược (ngắn hạn &gt; dài hạn) trong lịch sử thường báo trước suy thoái.</li><li>Spread: <strong>G-spread</strong> (so với TPCP), <strong>I-spread</strong> (so với swap), <strong>Z-spread</strong> (spread không đổi trên toàn đường spot), <strong>OAS</strong> (Z-spread trừ giá trị quyền chọn — dùng cho trái phiếu callable).</li></ul>"
    }
   ]
  },
  {
   "title": "Duration, Convexity & Credit Risk",
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
     "h": "Credit risk and securitization",
     "en": "<ul><li><strong>Credit risk</strong> = expected loss = probability of default × loss given default (LGD = 1 − recovery rate). Spreads widen when default risk or risk aversion rises — spread risk hurts even without default.</li><li>Ratings: investment grade (BBB−/Baa3 and above) vs high yield. Beware: ratings lag markets.</li><li>Analysis frameworks: the <strong>4 Cs</strong> — Capacity, Collateral, Covenants, Character. Key ratios: leverage (debt/EBITDA) and coverage (EBIT/interest).</li><li><strong>Securitization:</strong> a sponsor sells assets (mortgages, auto loans, receivables) to a bankruptcy-remote <strong>SPE</strong>, which issues tranched bonds. Benefits: lower funding costs, liquidity, risk transfer. <strong>Tranching</strong> creates a waterfall: senior tranches are paid first; subordinated tranches absorb first losses (credit tranching). MBS carry <strong>prepayment risk</strong>: contraction risk (rates fall → faster prepayment) and extension risk (rates rise → slower prepayment).</li></ul>",
     "vi": "<ul><li><strong>Rủi ro tín dụng</strong> = tổn thất kỳ vọng = xác suất vỡ nợ × tổn thất khi vỡ nợ (LGD = 1 − tỷ lệ thu hồi). Spread giãn khi rủi ro vỡ nợ hoặc mức e ngại rủi ro tăng — rủi ro spread gây thiệt hại kể cả khi không vỡ nợ.</li><li>Xếp hạng: investment grade (từ BBB−/Baa3 trở lên) vs high yield. Lưu ý: xếp hạng thường đi sau thị trường.</li><li>Khung phân tích: <strong>4 chữ C</strong> — Capacity (năng lực trả nợ), Collateral (tài sản bảo đảm), Covenants (cam kết), Character (uy tín). Chỉ số chính: đòn bẩy (nợ/EBITDA) và khả năng chi trả (EBIT/lãi vay).</li><li><strong>Chứng khoán hóa:</strong> bên khởi tạo bán tài sản (khoản vay mua nhà, vay ô tô, phải thu) cho <strong>SPE</strong> tách biệt phá sản, SPE phát hành trái phiếu chia tầng. Lợi ích: chi phí vốn thấp hơn, thanh khoản, chuyển giao rủi ro. <strong>Tranching</strong> tạo \"thác nước\": tầng senior nhận tiền trước; tầng subordinated chịu lỗ đầu tiên. MBS có <strong>rủi ro trả nợ trước hạn</strong>: contraction risk (lãi giảm → trả trước nhanh) và extension risk (lãi tăng → trả trước chậm).</li></ul>"
    }
   ],
   "formulas": [
    [
     "Bond price",
     "P = Σ C/(1+y)^t + F/(1+y)^n",
     ""
    ],
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
     "Expected loss",
     "EL = PD × LGD",
     "LGD = 1 − recovery rate"
    ],
    [
     "Current yield",
     "Annual coupon / Price",
     ""
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
    "q": "Holding a bond’s benchmark yield constant, a widening of its credit spread will:",
    "opts": [
     "Raise its price",
     "Lower its price",
     "Leave the price unchanged"
    ],
    "ans": 1,
    "en": "Spread widening means the market demands more compensation for credit risk — the bond’s all-in yield rises, so its price falls.",
    "vi": "Spread tín dụng nới rộng = thị trường đòi bù rủi ro cao hơn → lợi suất tổng tăng → giá trái phiếu giảm."
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
   }
  ]
 ]
};
