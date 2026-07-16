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
   - extra.sets[]      : Practice Set B, C… (mỗi phần tử là 1 bộ câu hỏi)
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
  "en": "Quant is the mathematical toolkit for the whole curriculum: rates of return and time value of money, statistical measures, probability and portfolio mathematics, distributions and simulation, sampling and hypothesis testing, simple linear regression, and an introduction to big data and machine learning. Master your financial calculator (TI BA II Plus or HP 12C) here — TVM keys, NPV/IRR, and statistics functions save enormous time on exam day.",
  "vi": "Quant là bộ công cụ toán cho toàn bộ chương trình: tỷ suất sinh lời và giá trị thời gian của tiền, thống kê mô tả, xác suất và toán danh mục, các phân phối và mô phỏng, chọn mẫu và kiểm định giả thuyết, hồi quy tuyến tính đơn, cùng phần nhập môn big data và machine learning. Hãy thành thạo máy tính tài chính (TI BA II Plus hoặc HP 12C) ngay từ môn này — các phím TVM, NPV/IRR và thống kê tiết kiệm rất nhiều thời gian khi thi."
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
     "en": "<ul><li><strong>Holding period return (HPR):</strong> total return over the period, including income: (P<sub>1</sub> − P<sub>0</sub> + D) / P<sub>0</sub>.</li><li><strong>Arithmetic mean return:</strong> simple average — best for forecasting <em>next period’s</em> expected return.</li><li><strong>Geometric mean return:</strong> compound growth rate — best for measuring <em>past multi-period performance</em>. Geometric ≤ arithmetic; the gap widens with volatility.</li><li><strong>Money-weighted return (MWR / IRR):</strong> accounts for the timing and size of cash flows — measures the <em>investor’s</em> experience.</li><li><strong>Time-weighted return (TWR):</strong> removes the effect of cash flows — the standard for judging the <em>manager</em>.</li><li>Also know: gross vs net return, pre-tax vs after-tax, real vs nominal (1 + nominal = (1 + real)(1 + inflation)), and leveraged return.</li></ul>",
     "vi": "<ul><li><strong>HPR:</strong> tổng lợi suất trong kỳ, gồm cả thu nhập: (P<sub>1</sub> − P<sub>0</sub> + D) / P<sub>0</sub>.</li><li><strong>Trung bình cộng:</strong> phù hợp để dự báo lợi suất kỳ vọng <em>kỳ tới</em>.</li><li><strong>Trung bình nhân:</strong> tốc độ tăng trưởng kép — phù hợp đo <em>hiệu quả nhiều kỳ trong quá khứ</em>. Geometric ≤ arithmetic; chênh lệch càng lớn khi biến động càng cao.</li><li><strong>MWR (IRR):</strong> tính đến thời điểm và quy mô dòng tiền — đo trải nghiệm của <em>nhà đầu tư</em>.</li><li><strong>TWR:</strong> loại bỏ ảnh hưởng của dòng tiền — chuẩn mực đánh giá <em>nhà quản lý quỹ</em>.</li><li>Cần biết thêm: gross vs net, trước thuế vs sau thuế, thực vs danh nghĩa ((1 + danh nghĩa) = (1 + thực)(1 + lạm phát)), lợi suất có đòn bẩy.</li></ul>"
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
    ]
   ]
  },
  {
   "title": "Probability Trees and Conditional Expectations",
   "sections": [
    {
     "h": "Probability essentials",
     "en": "<ul><li><strong>Types:</strong> empirical (from data), a priori (from logic), subjective (from judgment).</li><li><strong>Rules:</strong> Addition: P(A or B) = P(A) + P(B) − P(AB). Multiplication: P(AB) = P(A|B) × P(B). Independence: P(A|B) = P(A).</li><li><strong>Total probability:</strong> P(A) = Σ P(A|S<sub>i</sub>)P(S<sub>i</sub>) across mutually exclusive, exhaustive scenarios.</li><li><strong>Bayes’ formula</strong> updates a prior probability after new information: P(Event|Info) = P(Info|Event) × P(Event) / P(Info).</li><li><strong>Expected value and variance</strong> of a random variable use probability weights. Portfolio expected return is the weighted average of asset returns; portfolio variance depends on weights, variances, and <em>covariances</em> — this is the mathematical basis of diversification.</li></ul>",
     "vi": "<ul><li><strong>Ba loại xác suất:</strong> thực nghiệm (từ dữ liệu), tiên nghiệm (từ suy luận), chủ quan (từ phán đoán).</li><li><strong>Quy tắc:</strong> Cộng: P(A hoặc B) = P(A) + P(B) − P(AB). Nhân: P(AB) = P(A|B) × P(B). Độc lập: P(A|B) = P(A).</li><li><strong>Xác suất toàn phần:</strong> P(A) = Σ P(A|S<sub>i</sub>)P(S<sub>i</sub>) trên các kịch bản loại trừ lẫn nhau và bao trùm.</li><li><strong>Công thức Bayes</strong> cập nhật xác suất tiên nghiệm khi có thông tin mới.</li><li><strong>Kỳ vọng và phương sai</strong> của biến ngẫu nhiên dùng trọng số xác suất. Lợi suất kỳ vọng danh mục = bình quân gia quyền lợi suất tài sản; phương sai danh mục phụ thuộc trọng số, phương sai và <em>hiệp phương sai</em> — nền tảng toán học của đa dạng hóa.</li></ul>"
    },
    {
     "h": "Expected values, probability trees & conditional expectations",
     "en": "<p>The <strong>expected value</strong> of a random variable is its probability-weighted average: E(X) = ΣP(x<sub>i</sub>)x<sub>i</sub>; variance is the probability-weighted average of squared deviations from E(X). A <strong>probability tree</strong> lays out scenarios (e.g., economy booms with P = 0.6, EPS = $3; recession with P = 0.4, EPS = $1 → E(EPS) = 0.6×3 + 0.4×1 = $2.20).</p><p><strong>Conditional expectation</strong> E(X | scenario) is the expected value using probabilities updated for known information; the <strong>total probability rule for expected value</strong> stitches them back together: E(X) = Σ E(X|S<sub>i</sub>)P(S<sub>i</sub>). Analysts use exactly this structure when they update forecasts after events — and <strong>Bayes’ formula</strong> is the engine for updating the probabilities themselves.</p><p>From joint probabilities you can also compute <strong>covariance</strong> between two returns: Cov(X,Y) = ΣP<sub>i</sub>[X<sub>i</sub> − E(X)][Y<sub>i</sub> − E(Y)], and standardize it into correlation ρ = Cov/(σ<sub>X</sub>σ<sub>Y</sub>).</p>",
     "vi": "<p><strong>Kỳ vọng</strong> của biến ngẫu nhiên là trung bình có trọng số xác suất: E(X) = ΣP(x<sub>i</sub>)x<sub>i</sub>; phương sai là trung bình có trọng số của bình phương độ lệch quanh E(X). <strong>Cây xác suất</strong> trải các kịch bản (ví dụ: kinh tế tốt P = 0.6, EPS = $3; suy thoái P = 0.4, EPS = $1 → E(EPS) = $2.20).</p><p><strong>Kỳ vọng có điều kiện</strong> E(X | kịch bản) dùng xác suất đã cập nhật theo thông tin đã biết; <strong>quy tắc kỳ vọng toàn phần</strong> ghép lại: E(X) = Σ E(X|S<sub>i</sub>)P(S<sub>i</sub>). Đây đúng là cấu trúc analyst dùng khi cập nhật dự báo sau sự kiện — và <strong>công thức Bayes</strong> là cỗ máy cập nhật chính các xác suất đó.</p><p>Từ xác suất đồng thời còn tính được <strong>hiệp phương sai</strong> giữa hai lợi suất: Cov(X,Y) = ΣP<sub>i</sub>[X<sub>i</sub> − E(X)][Y<sub>i</sub> − E(Y)], rồi chuẩn hóa thành tương quan ρ = Cov/(σ<sub>X</sub>σ<sub>Y</sub>).</p>"
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
    ]
   ]
  },
  {
   "title": "Portfolio Mathematics",
   "sections": [
    {
     "h": "Portfolio mathematics & Roy’s safety-first criterion",
     "en": "<p>For a portfolio of assets with weights w<sub>i</sub>:</p><ul><li><strong>Expected return</strong> is always the weighted average: E(R<sub>p</sub>) = Σw<sub>i</sub>E(R<sub>i</sub>).</li><li><strong>Variance is not</strong> — it depends on covariances. Two assets: σ<sub>p</sub>² = w<sub>A</sub>²σ<sub>A</sub>² + w<sub>B</sub>²σ<sub>B</sub>² + 2w<sub>A</sub>w<sub>B</sub>Cov(A,B). Because Cov = ρσ<sub>A</sub>σ<sub>B</sub>, any correlation below +1 pulls portfolio risk below the weighted average of risks — the mathematics of diversification that Portfolio Management builds on.</li></ul><p><strong>Shortfall risk</strong> is the probability that a portfolio return falls below a minimum threshold R<sub>L</sub> (e.g., the level that triggers an insurer’s insolvency). <strong>Roy’s safety-first ratio</strong> ranks portfolios by how many standard deviations the expected return sits above the threshold:</p><p style=\"text-align:center\"><strong>SFRatio = [E(R<sub>p</sub>) − R<sub>L</sub>] / σ<sub>p</sub></strong></p><p>Choose the portfolio with the <em>highest</em> SFRatio — it has the lowest probability of breaching the threshold (assuming normality). Note the family resemblance: with R<sub>L</sub> = the risk-free rate, the SFRatio becomes the Sharpe ratio.</p>",
     "vi": "<p>Với danh mục có trọng số w<sub>i</sub>:</p><ul><li><strong>Lợi suất kỳ vọng</strong> luôn là bình quân gia quyền: E(R<sub>p</sub>) = Σw<sub>i</sub>E(R<sub>i</sub>).</li><li><strong>Phương sai thì không</strong> — nó phụ thuộc hiệp phương sai. Hai tài sản: σ<sub>p</sub>² = w<sub>A</sub>²σ<sub>A</sub>² + w<sub>B</sub>²σ<sub>B</sub>² + 2w<sub>A</sub>w<sub>B</sub>Cov(A,B). Vì Cov = ρσ<sub>A</sub>σ<sub>B</sub>, chỉ cần tương quan dưới +1 là rủi ro danh mục thấp hơn bình quân gia quyền các rủi ro — nền toán học của đa dạng hóa mà môn Portfolio Management xây tiếp.</li></ul><p><strong>Rủi ro hụt chuẩn (shortfall risk)</strong> là xác suất lợi suất danh mục rơi xuống dưới ngưỡng tối thiểu R<sub>L</sub>. <strong>Tỷ số an toàn trước hết của Roy</strong> xếp hạng danh mục theo số độ lệch chuẩn mà kỳ vọng vượt trên ngưỡng:</p><p style=\"text-align:center\"><strong>SFRatio = [E(R<sub>p</sub>) − R<sub>L</sub>] / σ<sub>p</sub></strong></p><p>Chọn danh mục có SFRatio <em>cao nhất</em> — xác suất thủng ngưỡng thấp nhất (giả định phân phối chuẩn). Liên hệ: nếu R<sub>L</sub> = lãi suất phi rủi ro, SFRatio chính là Sharpe ratio.</p>"
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
    ]
   ]
  },
  {
   "title": "Simulation Methods (& Key Distributions)",
   "sections": [
    {
     "h": "Key distributions",
     "en": "<ul><li><strong>Normal:</strong> symmetric, fully described by mean and variance. Confidence intervals: ~68% of outcomes within ±1σ, <strong>90% within ±1.65σ, 95% within ±1.96σ, 99% within ±2.58σ</strong>. A <strong>standard normal (z)</strong> variable: z = (x − μ)/σ.</li><li><strong>Lognormal:</strong> bounded below by zero, right-skewed — used to model asset <em>prices</em> (while continuously compounded <em>returns</em> are modeled as normal).</li><li><strong>Binomial:</strong> number of successes in n independent trials (used in binomial option pricing trees).</li><li><strong>Student’s t:</strong> like the normal but with fatter tails; used for small samples with unknown population variance; converges to normal as degrees of freedom rise.</li><li><strong>Chi-square and F:</strong> used to test variances.</li></ul>",
     "vi": "<ul><li><strong>Phân phối chuẩn:</strong> đối xứng, xác định hoàn toàn bởi mean và variance. Khoảng tin cậy: ~68% trong ±1σ, <strong>90% trong ±1.65σ, 95% trong ±1.96σ, 99% trong ±2.58σ</strong>. Biến chuẩn hóa: z = (x − μ)/σ.</li><li><strong>Lognormal:</strong> không âm, xiên phải — dùng mô hình hóa <em>giá</em> tài sản (còn <em>lợi suất</em> ghép liên tục được coi là chuẩn).</li><li><strong>Nhị thức:</strong> số lần thành công trong n phép thử độc lập (dùng trong cây định giá quyền chọn nhị thức).</li><li><strong>Student’s t:</strong> giống chuẩn nhưng đuôi dày hơn; dùng cho mẫu nhỏ, phương sai tổng thể chưa biết; hội tụ về chuẩn khi bậc tự do tăng.</li><li><strong>Chi bình phương và F:</strong> dùng kiểm định phương sai.</li></ul>"
    },
    {
     "h": "Simulation: lognormal prices, Monte Carlo & bootstrapping",
     "en": "<ul><li><strong>Why lognormal for prices:</strong> if continuously compounded returns r = ln(1 + HPR) are normally distributed, then the price level e<sup>r</sup> follows a lognormal distribution — bounded below by zero and right-skewed, exactly the properties prices need (they cannot go negative). Continuously compounded returns are also <em>additive</em> across time, which makes multi-period modeling clean.</li><li><strong>Monte Carlo simulation:</strong> (1) specify the model and the probability distributions of the risk factors; (2) generate thousands of random draws; (3) compute the value/outcome for each trial; (4) analyze the resulting distribution (mean, percentiles, VaR). Uses: valuing complex/path-dependent instruments, retirement planning, stress testing. Limitations: results are only as good as the assumed model and input distributions (it provides no analytic insight, and garbage in → garbage out).</li><li><strong>Bootstrapping (resampling):</strong> instead of assuming a distribution, draw repeatedly <em>with replacement from the observed historical data</em> to build the sampling distribution empirically. Monte Carlo is parametric (you choose the distribution); bootstrap is non-parametric (the data are the distribution).</li></ul>",
     "vi": "<ul><li><strong>Vì sao giá theo lognormal:</strong> nếu lợi suất ghép liên tục r = ln(1 + HPR) có phân phối chuẩn thì mức giá e<sup>r</sup> theo phân phối lognormal — chặn dưới tại 0 và xiên phải, đúng tính chất của giá (không thể âm). Lợi suất ghép liên tục còn <em>cộng được</em> qua các kỳ, giúp mô hình hóa nhiều kỳ gọn gàng.</li><li><strong>Mô phỏng Monte Carlo:</strong> (1) xác định mô hình và phân phối xác suất của các yếu tố rủi ro; (2) tạo hàng nghìn lần rút ngẫu nhiên; (3) tính giá trị/kết quả mỗi lần; (4) phân tích phân phối kết quả (trung bình, phân vị, VaR). Ứng dụng: định giá công cụ phức tạp/phụ thuộc lộ trình, kế hoạch hưu trí, stress test. Hạn chế: kết quả chỉ tốt bằng mô hình và phân phối đầu vào giả định (không cho lời giải giải tích; đầu vào rác → đầu ra rác).</li><li><strong>Bootstrapping (tái chọn mẫu):</strong> thay vì giả định phân phối, rút lặp lại <em>có hoàn lại từ chính dữ liệu lịch sử quan sát được</em> để dựng phân phối mẫu theo lối thực nghiệm. Monte Carlo là tham số (bạn chọn phân phối); bootstrap là phi tham số (dữ liệu chính là phân phối).</li></ul>"
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
    ]
   ]
  },
  {
   "title": "Estimation and Inference",
   "sections": [
    {
     "h": "Sampling and the Central Limit Theorem",
     "en": "<p>The <strong>Central Limit Theorem</strong>: for a sample size n ≥ 30, the distribution of the sample mean is approximately normal with mean μ and variance σ²/n — <em>regardless</em> of the population’s distribution. The <strong>standard error</strong> of the mean is σ/√n. Sampling methods: simple random, stratified (guarantees subgroup representation, lower sampling error), cluster, convenience, judgmental. Key biases: <strong>survivorship bias</strong> (dead funds excluded → performance overstated), <strong>look-ahead bias</strong> (using data not available at the time), <strong>data snooping</strong>, and time-period bias.</p>",
     "vi": "<p><strong>Định lý giới hạn trung tâm</strong>: với n ≥ 30, phân phối của trung bình mẫu xấp xỉ chuẩn với mean μ và phương sai σ²/n — <em>bất kể</em> phân phối tổng thể. <strong>Sai số chuẩn</strong> của trung bình mẫu là σ/√n. Phương pháp chọn mẫu: ngẫu nhiên đơn giản, phân tầng (bảo đảm đại diện từng nhóm, sai số thấp hơn), theo cụm, thuận tiện, phán đoán. Các thiên lệch: <strong>survivorship bias</strong> (loại quỹ đã chết → thổi phồng hiệu quả), <strong>look-ahead bias</strong> (dùng dữ liệu chưa có tại thời điểm đó), <strong>data snooping</strong>, thiên lệch giai đoạn thời gian.</p>"
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
    }
   ],
   "formulas": [
    [
     "z-statistic",
     "z = (x̄ − μ0) / (σ/√n)",
     "Use t with s instead of σ when population variance unknown"
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
    }
   ],
   "formulas": [
    [
     "t-test of correlation",
     "t = r√(n−2) / √(1−r²)",
     "df = n − 2"
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
  ]
 ]
};
