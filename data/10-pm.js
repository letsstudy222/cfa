/* =====================================================================
   Topic 10 — Portfolio Management
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
 "id": "pm",
 "num": "10",
 "name": "Portfolio Management",
 "vi": "Quản lý danh mục đầu tư",
 "w": [
  8,
  12
 ],
 "blurb": "Risk & return, diversification, the CAL/CML, CAPM & the SML, portfolio planning (IPS), risk management and behavioral biases.",
 "intro": {
  "en": "Portfolio Management closes the curriculum with six learning modules: an overview of the portfolio approach and investor types; portfolio risk and return in two parts (diversification, efficient frontier, CAL/CML, then CAPM, beta, and performance measures); portfolio planning and construction (the IPS and asset allocation); the behavioral biases of individuals; and an introduction to risk management. It ties together threads from quant, equity, and economics — and its comparisons (investor types, cognitive vs emotional biases, risk-modification methods) are reliable exam points.",
  "vi": "Portfolio Management khép lại chương trình với sáu learning modules: tổng quan cách tiếp cận danh mục và các loại nhà đầu tư; rủi ro và lợi nhuận danh mục hai phần (đa dạng hóa, đường biên hiệu quả, CAL/CML, rồi CAPM, beta và các thước đo hiệu quả); lập kế hoạch và xây dựng danh mục (IPS và phân bổ tài sản); các thiên lệch hành vi của cá nhân; và nhập môn quản trị rủi ro. Topic này nối các sợi chỉ từ quant, equity, kinh tế học — và các dạng so sánh (loại nhà đầu tư, thiên lệch nhận thức vs cảm xúc, phương pháp điều chỉnh rủi ro) là điểm số đáng tin cậy trong đề."
 },
 "modules": [
  {
   "title": "Portfolio Management: An Overview",
   "sections": [
    {
     "h": "The portfolio approach, the process & the investor zoo",
     "en": "<ul><li><strong>Why portfolios:</strong> diversification cuts risk without an equal sacrifice of expected return — the one reliable \"free lunch.\" Evaluate every asset by its contribution to the <em>portfolio</em>, not in isolation.</li><li><strong>The three-step process:</strong> <em>Planning</em> — understand the client, write the IPS, form capital market expectations, set the strategic asset allocation; <em>Execution</em> — asset allocation, security analysis, construction and trading; <em>Feedback</em> — monitor, <strong>rebalance</strong>, and measure performance against the IPS benchmark. It is a loop, not a line.</li><li><strong>Investor types and what drives them:</strong> individuals (goals-based, taxes matter); <em>DB pension plans</em> — long horizon, predictable liabilities, moderate liquidity needs; <em>endowments &amp; foundations</em> — perpetual horizon, spending-rate driven, high risk capacity; <em>banks and insurers</em> — liability-driven, short horizons, high liquidity needs, conservative fixed-income-heavy portfolios; <em>sovereign wealth funds</em> — mandate-specific. The horizon/liquidity/risk triangle differs sharply across the zoo — a favorite exam comparison.</li><li><strong>Pooled vehicles:</strong> <em>open-end mutual funds</em> transact at end-of-day NAV and grow/shrink with flows; <em>closed-end funds</em> trade a fixed share count at premiums or discounts to NAV; <strong>ETFs</strong> trade intraday with <em>in-kind creation/redemption</em> keeping price near NAV and adding tax efficiency; separately managed accounts offer direct ownership and customization; hedge funds and private funds sit behind qualification and lockups.</li></ul>",
     "vi": "<ul><li><strong>Vì sao cần danh mục:</strong> đa dạng hóa cắt giảm rủi ro mà không phải hy sinh tương ứng lợi nhuận kỳ vọng — \"bữa trưa miễn phí\" đáng tin cậy duy nhất. Đánh giá mọi tài sản theo đóng góp vào <em>danh mục</em>, không phải đứng riêng.</li><li><strong>Quy trình ba bước:</strong> <em>Lập kế hoạch</em> — hiểu khách hàng, viết IPS, xây kỳ vọng thị trường vốn, đặt phân bổ tài sản chiến lược; <em>Thực thi</em> — phân bổ, phân tích chứng khoán, xây dựng và giao dịch; <em>Phản hồi</em> — giám sát, <strong>tái cân bằng</strong>, đo kết quả so với benchmark trong IPS. Đây là vòng lặp, không phải đường thẳng.</li><li><strong>Các loại nhà đầu tư và điều chi phối họ:</strong> cá nhân (theo mục tiêu, thuế quan trọng); <em>quỹ hưu trí phúc lợi xác định (DB)</em> — kỳ hạn dài, nghĩa vụ dự đoán được, nhu cầu thanh khoản vừa; <em>endowment &amp; foundation</em> — kỳ hạn vĩnh viễn, theo tỷ lệ chi tiêu, sức chịu rủi ro cao; <em>ngân hàng và bảo hiểm</em> — chạy theo nghĩa vụ nợ, kỳ hạn ngắn, thanh khoản cao, danh mục thiên trái phiếu thận trọng; <em>quỹ đầu tư quốc gia</em> — theo mandate. Tam giác kỳ hạn/thanh khoản/rủi ro khác nhau rõ rệt — dạng so sánh đề rất chuộng.</li><li><strong>Phương tiện đầu tư gộp:</strong> <em>quỹ mở</em> giao dịch theo NAV cuối ngày, phình/teo theo dòng tiền; <em>quỹ đóng</em> có số chứng chỉ cố định, giao dịch premium/discount so với NAV; <strong>ETF</strong> giao dịch trong phiên với cơ chế <em>tạo/hoàn chứng chỉ bằng hiện vật</em> giữ giá sát NAV và tăng hiệu quả thuế; tài khoản quản lý riêng (SMA) cho sở hữu trực tiếp và tùy biến; hedge fund và quỹ tư nhân nằm sau hàng rào điều kiện và lockup.</li></ul>"
    }
   ]
  },
  {
   "title": "Portfolio Risk and Return: Part I",
   "sections": [
    {
     "h": "Portfolio risk and the power of correlation",
     "en": "<p>Portfolio expected return is the weighted average of asset returns — but portfolio <em>risk is less than</em> the weighted average of standard deviations whenever correlation ρ &lt; 1. For two assets:</p><p><strong>σ<sub>p</sub>² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂</strong></p><p>The lower the correlation, the greater the diversification benefit; with ρ = −1, risk can be eliminated entirely. Diversification removes <strong>unsystematic (firm-specific) risk</strong>; <strong>systematic (market) risk</strong> remains. Because unsystematic risk can be diversified away for free, <em>markets only reward systematic risk</em> — the central message of the CAPM. Risk aversion shapes each investor’s optimal point: utility U = E(R) − ½Aσ² (A = risk aversion coefficient).</p>",
     "vi": "<p>Lợi suất kỳ vọng danh mục là bình quân gia quyền lợi suất tài sản — nhưng <em>rủi ro danh mục nhỏ hơn</em> bình quân gia quyền độ lệch chuẩn khi tương quan ρ &lt; 1. Với hai tài sản:</p><p><strong>σ<sub>p</sub>² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂</strong></p><p>Tương quan càng thấp, lợi ích đa dạng hóa càng lớn; ρ = −1 có thể triệt tiêu hoàn toàn rủi ro. Đa dạng hóa loại bỏ <strong>rủi ro phi hệ thống (đặc thù doanh nghiệp)</strong>; <strong>rủi ro hệ thống (thị trường)</strong> vẫn còn. Vì rủi ro phi hệ thống có thể loại bỏ miễn phí nên <em>thị trường chỉ trả công cho rủi ro hệ thống</em> — thông điệp trung tâm của CAPM. Mức e ngại rủi ro quyết định điểm tối ưu của mỗi nhà đầu tư: U = E(R) − ½Aσ².</p>"
    },
    {
     "h": "Efficient frontier, CAL and CML",
     "en": "<ul><li>The <strong>minimum-variance frontier</strong> plots the lowest-risk portfolio for each return level; the upper half is the <strong>efficient frontier</strong>.</li><li>Adding a risk-free asset creates the <strong>capital allocation line (CAL)</strong>; the best CAL is tangent to the efficient frontier at the <strong>optimal risky portfolio</strong>.</li><li>If all investors share the same expectations, that tangency portfolio is the <strong>market portfolio</strong> and the CAL becomes the <strong>capital market line (CML)</strong>: E(R<sub>p</sub>) = R<sub>f</sub> + σ<sub>p</sub> × [E(R<sub>m</sub>) − R<sub>f</sub>]/σ<sub>m</sub>. Points right of the market portfolio imply borrowing (leverage).</li><li><strong>CML vs SML:</strong> the CML uses <em>total risk (σ)</em> and holds only for efficient portfolios; the <strong>SML</strong> uses <em>systematic risk (β)</em> and applies to <em>every</em> asset and portfolio, fairly priced or not.</li></ul>",
     "vi": "<ul><li><strong>Đường biên phương sai tối thiểu</strong> vẽ danh mục rủi ro thấp nhất cho từng mức lợi suất; nửa trên là <strong>đường biên hiệu quả</strong>.</li><li>Thêm tài sản phi rủi ro tạo ra <strong>đường phân bổ vốn (CAL)</strong>; CAL tốt nhất tiếp xúc đường biên hiệu quả tại <strong>danh mục rủi ro tối ưu</strong>.</li><li>Nếu mọi nhà đầu tư có cùng kỳ vọng, danh mục tiếp điểm là <strong>danh mục thị trường</strong> và CAL trở thành <strong>CML</strong>: E(R<sub>p</sub>) = R<sub>f</sub> + σ<sub>p</sub> × [E(R<sub>m</sub>) − R<sub>f</sub>]/σ<sub>m</sub>. Các điểm bên phải danh mục thị trường hàm ý đi vay (đòn bẩy).</li><li><strong>CML vs SML:</strong> CML dùng <em>tổng rủi ro (σ)</em> và chỉ đúng cho danh mục hiệu quả; <strong>SML</strong> dùng <em>rủi ro hệ thống (β)</em> và áp dụng cho <em>mọi</em> tài sản/danh mục, dù được định giá đúng hay sai.</li></ul>"
    }
   ],
   "formulas": [
    [
     "2-asset portfolio risk",
     "σp² = w1²σ1² + w2²σ2² + 2w1w2ρσ1σ2",
     ""
    ],
    [
     "Utility",
     "U = E(R) − 0.5·A·σ²",
     "A = risk aversion coefficient"
    ],
    [
     "Sharpe",
     "(Rp − Rf)/σp",
     "Total risk"
    ]
   ]
  },
  {
   "title": "Portfolio Risk and Return: Part II",
   "sections": [
    {
     "h": "CAPM and the SML",
     "en": "<p><strong>E(R<sub>i</sub>) = R<sub>f</sub> + β<sub>i</sub>[E(R<sub>m</sub>) − R<sub>f</sub>]</strong>. Beta = Cov(R<sub>i</sub>,R<sub>m</sub>)/σ<sub>m</sub>² measures sensitivity to market moves. Interpretation: if a security’s <em>forecast</em> return lies <strong>above the SML</strong>, it offers more than required for its beta → <strong>undervalued</strong> (buy); below the SML → overvalued. CAPM assumptions (frictionless markets, homogeneous expectations, all investors mean-variance optimizers) are unrealistic but produce a powerful, testable benchmark.</p><p><strong>Performance ratios:</strong></p><ul><li><strong>Sharpe</strong> = (R<sub>p</sub> − R<sub>f</sub>)/σ<sub>p</sub> — total risk; use when the portfolio is the investor’s whole wealth.</li><li><strong>Treynor</strong> = (R<sub>p</sub> − R<sub>f</sub>)/β<sub>p</sub> — systematic risk; for well-diversified portfolios.</li><li><strong>Jensen’s alpha</strong> = R<sub>p</sub> − [R<sub>f</sub> + β(R<sub>m</sub> − R<sub>f</sub>)] — return above the CAPM requirement.</li><li><strong>M²</strong> — Sharpe re-expressed in percentage terms versus the market.</li></ul>",
     "vi": "<p><strong>E(R<sub>i</sub>) = R<sub>f</sub> + β<sub>i</sub>[E(R<sub>m</sub>) − R<sub>f</sub>]</strong>. Beta = Cov(R<sub>i</sub>,R<sub>m</sub>)/σ<sub>m</sub>² đo độ nhạy với biến động thị trường. Diễn giải: nếu lợi suất <em>dự báo</em> của chứng khoán nằm <strong>trên SML</strong> → được kỳ vọng cao hơn mức yêu cầu theo beta → <strong>đang bị định giá thấp</strong> (nên mua); dưới SML → định giá cao. Các giả định CAPM (thị trường không ma sát, kỳ vọng đồng nhất…) phi thực tế nhưng tạo ra chuẩn so sánh mạnh và kiểm định được.</p><p><strong>Chỉ số hiệu quả:</strong> Sharpe = (R<sub>p</sub> − R<sub>f</sub>)/σ<sub>p</sub> (tổng rủi ro — dùng khi danh mục là toàn bộ tài sản); Treynor = (R<sub>p</sub> − R<sub>f</sub>)/β<sub>p</sub> (rủi ro hệ thống — cho danh mục đã đa dạng hóa tốt); Jensen’s alpha = phần lợi suất vượt yêu cầu CAPM; M² = Sharpe quy về đơn vị %.</p>"
    }
   ],
   "formulas": [
    [
     "CAPM / SML",
     "E(Ri) = Rf + βi(E(Rm) − Rf)",
     ""
    ],
    [
     "Beta",
     "βi = Cov(Ri,Rm) / σm² = ρi,m σi/σm",
     ""
    ],
    [
     "Treynor",
     "(Rp − Rf)/βp",
     "Systematic risk"
    ],
    [
     "Jensen’s alpha",
     "Rp − [Rf + β(Rm − Rf)]",
     ""
    ]
   ]
  },
  {
   "title": "Basics of Portfolio Planning and Construction",
   "sections": [
    {
     "h": "The Investment Policy Statement and behavioral biases",
     "en": "<p>The <strong>IPS</strong> is the governing document of the client relationship. Objectives: <strong>risk</strong> (ability vs willingness to take risk — use the <em>lower</em> of the two) and <strong>return</strong>. Constraints — remember <strong>LLTTU</strong>: Liquidity, Legal/regulatory, Time horizon, Taxes, Unique circumstances. Strategic asset allocation implements the IPS; rebalancing keeps weights within corridors.</p><p><strong>Behavioral biases:</strong> cognitive <em>belief-perseverance</em> errors (conservatism, confirmation, representativeness, illusion of control, hindsight), <em>processing</em> errors (anchoring, mental accounting, framing, availability), and <strong>emotional biases</strong> (loss aversion, overconfidence, self-control, status quo, endowment, regret aversion). Cognitive errors are best corrected with information and education; emotional biases are usually <em>accommodated</em> rather than corrected. Market-wide effects: herding, bubbles, momentum.</p>",
     "vi": "<p><strong>IPS</strong> là văn bản \"hiến pháp\" của quan hệ khách hàng. Mục tiêu: <strong>rủi ro</strong> (khả năng vs mức sẵn lòng chấp nhận rủi ro — lấy mức <em>thấp hơn</em>) và <strong>lợi nhuận</strong>. Ràng buộc — nhớ <strong>LLTTU</strong>: Thanh khoản, Pháp lý, Thời gian đầu tư, Thuế, Hoàn cảnh đặc thù. Phân bổ tài sản chiến lược hiện thực hóa IPS; tái cân bằng giữ tỷ trọng trong biên độ.</p><p><strong>Thiên lệch hành vi:</strong> lỗi nhận thức dạng <em>bám giữ niềm tin</em> (bảo thủ, thiên kiến xác nhận, đại diện, ảo tưởng kiểm soát, hồi tưởng), lỗi <em>xử lý thông tin</em> (neo, kế toán tâm lý, đóng khung, sẵn có), và <strong>thiên lệch cảm xúc</strong> (sợ thua lỗ, quá tự tin, thiếu tự chủ, giữ nguyên hiện trạng, sở hữu, sợ hối tiếc). Lỗi nhận thức sửa được bằng thông tin và giáo dục; thiên lệch cảm xúc thường phải <em>thích nghi</em> thay vì sửa. Hiệu ứng toàn thị trường: bầy đàn, bong bóng, momentum.</p>"
    },
    {
     "h": "From IPS to portfolio: asset allocation & construction",
     "en": "<ul><li><strong>Capital market expectations</strong> (expected returns, volatilities, correlations by asset class) meet the IPS to produce the <strong>strategic asset allocation (SAA)</strong> — target weights for permissible asset classes. Evidence: the SAA explains the large majority of a diversified portfolio’s return <em>variability</em> over time — the big decision is made before any stock is picked.</li><li><strong>Around the SAA:</strong> <em>tactical asset allocation</em> takes deliberate short-term deviations to exploit views; <em>security selection</em> hunts alpha within classes; <em>risk budgeting</em> allocates the portfolio’s total risk across these activities so active bets are sized consciously. Core–satellite construction indexes the core and concentrates active risk in satellites.</li><li><strong>Rebalancing</strong> restores drifted weights (calendar or corridor triggers) — a discipline that enforces buy-low/sell-high and keeps the risk profile honest, traded off against costs and taxes.</li><li><strong>ESG in construction:</strong> negative/exclusionary screening, positive/best-in-class, ESG integration into analysis, thematic and impact investing, and active ownership — approaches differ in whether they restrict the universe or reshape the analysis.</li></ul>",
     "vi": "<ul><li><strong>Kỳ vọng thị trường vốn</strong> (lợi nhuận kỳ vọng, biến động, tương quan theo lớp tài sản) kết hợp với IPS tạo ra <strong>phân bổ tài sản chiến lược (SAA)</strong> — tỷ trọng mục tiêu cho các lớp tài sản được phép. Bằng chứng thực nghiệm: SAA giải thích phần lớn <em>độ biến thiên</em> lợi nhuận của danh mục đa dạng hóa theo thời gian — quyết định lớn nhất diễn ra trước khi chọn bất kỳ cổ phiếu nào.</li><li><strong>Xoay quanh SAA:</strong> <em>phân bổ chiến thuật (TAA)</em> chủ động lệch ngắn hạn để khai thác quan điểm; <em>chọn chứng khoán</em> săn alpha trong từng lớp; <em>risk budgeting</em> phân bổ tổng rủi ro của danh mục cho các hoạt động này để mỗi cược chủ động được đo lường có ý thức. Cấu trúc core–satellite: lõi đầu tư chỉ số, rủi ro chủ động dồn vào vệ tinh.</li><li><strong>Tái cân bằng</strong> khôi phục tỷ trọng bị trôi (theo lịch hoặc theo ngưỡng hành lang) — kỷ luật ép mua thấp/bán cao và giữ hồ sơ rủi ro trung thực, đánh đổi với chi phí và thuế.</li><li><strong>ESG trong xây dựng danh mục:</strong> sàng lọc loại trừ, chọn tốt nhất nhóm (best-in-class), tích hợp ESG vào phân tích, đầu tư chủ đề và tác động, cùng sở hữu chủ động — các cách tiếp cận khác nhau ở chỗ thu hẹp vũ trụ đầu tư hay tái định hình phân tích.</li></ul>"
    }
   ]
  },
  {
   "title": "The Behavioral Biases of Individuals",
   "sections": [
    {
     "h": "The behavioral biases of individuals",
     "en": "<ul><li><strong>Two families.</strong> <em>Cognitive errors</em> — faulty reasoning or memory; identifiable and <strong>correctable with education and process</strong>. <em>Emotional biases</em> — impulses and feelings; hard to correct, so advisers <strong>adapt</strong> to them (adjust the portfolio) rather than fight them.</li><li><strong>Cognitive — belief perseverance:</strong> <em>conservatism</em> (under-reacting to new evidence, clinging to priors); <em>confirmation</em> (seeking only supporting evidence); <em>representativeness</em> (judging by resemblance — extrapolating small samples, base-rate neglect); <em>illusion of control</em> (believing one can influence outcomes — overtrading, concentration); <em>hindsight</em> (\"I knew it all along\" — inflates confidence).</li><li><strong>Cognitive — processing errors:</strong> <em>anchoring</em> (stuck on an initial number, like purchase price); <em>mental accounting</em> (treating money in layers — dividends vs capital, \"house money\"); <em>framing</em> (answers flip with the wording of the question); <em>availability</em> (overweighting vivid, recent, easily recalled events).</li><li><strong>Emotional:</strong> <em>loss aversion</em> (losses hurt ~2× gains → holding losers, selling winners — the disposition effect); <em>overconfidence</em> (overtrading, underestimating risk); <em>self-control</em> (favoring today over the plan); <em>status quo</em> (inertia in allocations); <em>endowment</em> (owned assets feel worth more — inherited holdings); <em>regret aversion</em> (doing nothing, or herding, to avoid future regret).</li><li><strong>Market fingerprints:</strong> these biases underpin momentum and bubbles (herding, overconfidence), the value anomaly (representativeness), and under-diversified portfolios — the bridge to the market-efficiency module.</li></ul>",
     "vi": "<ul><li><strong>Hai họ thiên lệch.</strong> <em>Sai lệch nhận thức</em> — lỗi lập luận hoặc trí nhớ; nhận diện được và <strong>sửa được bằng giáo dục, quy trình</strong>. <em>Thiên lệch cảm xúc</em> — xung động và cảm giác; khó sửa, nên nhà tư vấn <strong>thích nghi</strong> (điều chỉnh danh mục) thay vì đối đầu.</li><li><strong>Nhận thức — bảo thủ niềm tin:</strong> <em>conservatism</em> (phản ứng yếu với bằng chứng mới, bám dự phóng cũ); <em>confirmation</em> (chỉ tìm bằng chứng ủng hộ); <em>representativeness</em> (xét đoán theo sự giống nhau — ngoại suy mẫu nhỏ, bỏ quên tỷ lệ cơ sở); <em>illusion of control</em> (tin mình chi phối được kết quả — giao dịch quá tay, tập trung vị thế); <em>hindsight</em> (\"tôi biết ngay mà\" — thổi phồng tự tin).</li><li><strong>Nhận thức — xử lý thông tin:</strong> <em>anchoring</em> (neo vào con số ban đầu, như giá mua); <em>mental accounting</em> (chia tiền thành ngăn — cổ tức vs vốn gốc, \"tiền nhà cái\"); <em>framing</em> (câu trả lời đổi theo cách đặt câu hỏi); <em>availability</em> (đặt nặng sự kiện sống động, gần đây, dễ nhớ).</li><li><strong>Cảm xúc:</strong> <em>loss aversion</em> (lỗ đau gấp ~2 lần lãi → giữ mã lỗ, bán mã lãi — hiệu ứng disposition); <em>overconfidence</em> (giao dịch quá mức, đánh giá thấp rủi ro); <em>self-control</em> (ưu tiên hôm nay hơn kế hoạch); <em>status quo</em> (ì với phân bổ hiện tại); <em>endowment</em> (tài sản đang sở hữu có cảm giác đáng giá hơn — cổ phiếu thừa kế); <em>regret aversion</em> (không làm gì, hoặc theo đám đông, để né hối tiếc tương lai).</li><li><strong>Dấu vân tay trên thị trường:</strong> các thiên lệch này đứng sau momentum và bong bóng (bầy đàn, quá tự tin), hiệu ứng giá trị (representativeness), và danh mục kém đa dạng hóa — cây cầu nối sang module hiệu quả thị trường.</li></ul>"
    }
   ]
  },
  {
   "title": "Introduction to Risk Management",
   "sections": [
    {
     "h": "Introduction to risk management",
     "en": "<ul><li><strong>Risk management is not risk minimization:</strong> it is deciding <em>which risks to take, in what size, to pursue the organization’s goals</em> — then measuring and adjusting continuously. The framework: risk governance (board-level, enterprise view), risk identification and measurement, infrastructure, policies and processes, monitoring, and strategic integration.</li><li><strong>Risk tolerance and budgeting:</strong> governance sets what the organization <em>can and will</em> absorb (tolerance); <strong>risk budgeting</strong> then allocates that capacity across activities — by asset class, factor exposure, or measures like beta, duration, and VaR — so risk, like capital, is spent deliberately.</li><li><strong>Taxonomy:</strong> <em>financial risks</em> — market (rates, FX, equity, commodity prices), credit (default of counterparties), liquidity (widened spreads and price impact when selling); <em>non-financial</em> — operational (people, systems, cyber), legal/compliance, model, settlement, solvency. Individuals add mortality and longevity risk.</li><li><strong>Measures:</strong> standard deviation and beta for equities; duration for bonds; delta/gamma/vega for derivatives; <strong>VaR</strong> — the minimum loss expected with a given probability over a horizon (e.g., 5% one-week VaR of $1m: in 5% of weeks, losses of at least $1m) — useful but silent about the tail beyond; scenario analysis and stress tests fill the gap.</li><li><strong>Modifying risk:</strong> <em>prevention and avoidance</em> (don’t take the exposure); <em>acceptance</em> (self-insure, diversify); <em>transfer</em> (insurance, for discrete insurable events); <em>shifting</em> (derivatives reshaping the distribution — forwards, options). Choose by comparing the cost of each method with the benefit, given the risk budget.</li></ul>",
     "vi": "<ul><li><strong>Quản trị rủi ro không phải tối thiểu hóa rủi ro:</strong> mà là quyết định <em>nhận rủi ro nào, quy mô bao nhiêu, để theo đuổi mục tiêu tổ chức</em> — rồi đo lường, điều chỉnh liên tục. Khung: quản trị rủi ro (cấp HĐQT, góc nhìn toàn doanh nghiệp), nhận diện và đo lường, hạ tầng, chính sách và quy trình, giám sát, tích hợp chiến lược.</li><li><strong>Khẩu vị và ngân sách rủi ro:</strong> quản trị xác định tổ chức <em>có thể và sẵn sàng</em> hấp thụ bao nhiêu (tolerance); <strong>risk budgeting</strong> phân bổ sức chứa đó cho các hoạt động — theo lớp tài sản, phơi nhiễm nhân tố, hoặc các thước đo như beta, duration, VaR — để rủi ro, giống như vốn, được \"chi tiêu\" có chủ đích.</li><li><strong>Phân loại:</strong> <em>rủi ro tài chính</em> — thị trường (lãi suất, tỷ giá, giá cổ phiếu, hàng hóa), tín dụng (đối tác vỡ nợ), thanh khoản (spread doãng và tác động giá khi phải bán); <em>phi tài chính</em> — vận hành (con người, hệ thống, an ninh mạng), pháp lý/tuân thủ, mô hình, thanh toán, khả năng thanh toán. Cá nhân thêm rủi ro tử vong và rủi ro sống thọ.</li><li><strong>Thước đo:</strong> độ lệch chuẩn và beta cho cổ phiếu; duration cho trái phiếu; delta/gamma/vega cho phái sinh; <strong>VaR</strong> — mức lỗ tối thiểu kỳ vọng với xác suất cho trước trong một kỳ hạn (VD: VaR 1 tuần 5% là 1 triệu USD: 5% số tuần sẽ lỗ ít nhất 1 triệu) — hữu ích nhưng im lặng về phần đuôi vượt ngưỡng; phân tích kịch bản và stress test lấp khoảng trống.</li><li><strong>Điều chỉnh rủi ro:</strong> <em>ngăn ngừa và né tránh</em> (không nhận phơi nhiễm); <em>chấp nhận</em> (tự bảo hiểm, đa dạng hóa); <em>chuyển giao</em> (bảo hiểm, cho các sự kiện rời rạc bảo hiểm được); <em>dịch chuyển</em> (phái sinh tái định hình phân phối — forward, option). Chọn phương án bằng cách so chi phí với lợi ích, trong khuôn khổ ngân sách rủi ro.</li></ul>"
    }
   ]
  }
 ],
 "vocab": [
  [
   "systematic risk",
   "Market-wide risk that diversification cannot remove.",
   "rủi ro hệ thống"
  ],
  [
   "unsystematic risk",
   "Firm-specific risk removable by diversification.",
   "rủi ro phi hệ thống"
  ],
  [
   "beta",
   "Sensitivity of an asset’s return to market returns.",
   "hệ số beta"
  ],
  [
   "efficient frontier",
   "Set of portfolios with maximum return per unit of risk.",
   "đường biên hiệu quả"
  ],
  [
   "capital market line",
   "CAL through the market portfolio; prices total risk of efficient portfolios.",
   "đường thị trường vốn"
  ],
  [
   "security market line",
   "CAPM relationship between beta and expected return for all assets.",
   "đường thị trường chứng khoán"
  ],
  [
   "risk budgeting",
   "Allocating a total risk limit across positions/strategies.",
   "phân bổ ngân sách rủi ro"
  ],
  [
   "drawdown",
   "Decline from a peak in portfolio value.",
   "mức sụt giảm từ đỉnh"
  ],
  [
   "loss aversion",
   "Feeling losses more strongly than equivalent gains.",
   "tâm lý sợ thua lỗ"
  ],
  [
   "herding",
   "Following the crowd’s trades regardless of one’s own analysis.",
   "tâm lý bầy đàn"
  ],
  [
   "strategic asset allocation",
   "Long-run target weights implementing the IPS.",
   "phân bổ tài sản chiến lược"
  ],
  [
   "rebalancing",
   "Restoring portfolio weights to targets.",
   "tái cân bằng danh mục"
  ],
  [
   "open-end vs closed-end fund",
   "NAV-based flows and daily dealing vs fixed shares trading at premiums/discounts",
   "Quỹ mở giao dịch theo NAV vs quỹ đóng số chứng chỉ cố định, giá lệch NAV"
  ],
  [
   "ETF in-kind creation/redemption",
   "Authorized participants arbitrage price to NAV, adding tax efficiency",
   "Cơ chế tạo/hoàn bằng hiện vật giữ giá sát NAV, tăng hiệu quả thuế"
  ],
  [
   "separately managed account (SMA)",
   "Direct ownership of securities managed to a client-specific mandate",
   "Tài khoản quản lý riêng — sở hữu trực tiếp, theo mandate riêng của khách"
  ],
  [
   "strategic vs tactical allocation",
   "Long-run policy weights vs deliberate short-term deviations",
   "Tỷ trọng chính sách dài hạn vs độ lệch ngắn hạn có chủ đích"
  ],
  [
   "risk budgeting",
   "Allocating total portfolio risk across asset classes and active bets",
   "Phân bổ tổng rủi ro danh mục cho các lớp tài sản và cược chủ động"
  ],
  [
   "rebalancing (calendar / corridor)",
   "Restoring drifted weights on a schedule or at threshold bands",
   "Khôi phục tỷ trọng bị trôi theo lịch hoặc theo ngưỡng hành lang"
  ],
  [
   "cognitive vs emotional bias",
   "Reasoning errors (educate/correct) vs feeling-driven biases (adapt to)",
   "Sai lệch lập luận (sửa bằng giáo dục) vs thiên lệch cảm xúc (phải thích nghi)"
  ],
  [
   "disposition effect",
   "Selling winners too early and holding losers too long — loss aversion at work",
   "Bán mã lãi quá sớm, ôm mã lỗ quá lâu — loss aversion vận hành"
  ],
  [
   "value at risk (VaR)",
   "Minimum loss expected with a stated probability over a horizon",
   "Mức lỗ tối thiểu kỳ vọng với xác suất nêu trước trong một kỳ hạn"
  ],
  [
   "risk transfer vs shifting",
   "Insurance for insurable events vs derivatives reshaping distributions",
   "Bảo hiểm cho sự kiện bảo hiểm được vs phái sinh tái định hình phân phối"
  ],
  [
   "drawdown",
   "Peak-to-trough decline experienced by a portfolio",
   "Mức sụt giảm từ đỉnh xuống đáy của danh mục"
  ]
 ],
 "quiz": [
  {
   "q": "The risk-free rate is 3%, the expected market return is 9%, and a stock’s beta is 1.5. According to the CAPM, the stock’s required return is closest to:",
   "opts": [
    "12.0%",
    "13.5%",
    "9.0%"
   ],
   "ans": 0,
   "en": "A is correct. E(R) = 3% + 1.5 × (9% − 3%) = 3% + 9% = 12%. A common error is multiplying beta by the market return (1.5 × 9% = 13.5%) instead of the market risk premium.",
   "vi": "Đáp án A. E(R) = 3% + 1.5 × (9% − 3%) = 12%. Lỗi phổ biến là nhân beta với lợi suất thị trường (13.5%) thay vì với phần bù rủi ro thị trường."
  },
  {
   "q": "An analyst forecasts a return of 14% for a stock whose CAPM required return is 12%. The stock plots:",
   "opts": [
    "on the SML and is fairly valued.",
    "above the SML and is undervalued.",
    "below the SML and is overvalued."
   ],
   "ans": 1,
   "en": "B is correct. A forecast return above the CAPM requirement means the stock offers more than compensation for its systematic risk — it plots above the SML and is undervalued (a buy).",
   "vi": "Đáp án B. Lợi suất dự báo cao hơn mức yêu cầu theo CAPM nghĩa là cổ phiếu đem lại nhiều hơn mức bù đắp cho rủi ro hệ thống — nằm trên SML và đang bị định giá thấp (nên mua)."
  },
  {
   "q": "Which risk measure is most appropriate for evaluating a portfolio that represents only a small, well-diversified part of an investor’s total wealth?",
   "opts": [
    "Sharpe ratio",
    "Treynor ratio",
    "Standard deviation"
   ],
   "ans": 1,
   "en": "B is correct. For a well-diversified component of wealth, only systematic risk matters, so the Treynor ratio (excess return per unit of beta) is appropriate. The Sharpe ratio, based on total risk, suits a portfolio that constitutes the investor’s entire wealth.",
   "vi": "Đáp án B. Với một phần nhỏ, đã đa dạng hóa tốt của tổng tài sản, chỉ rủi ro hệ thống mới quan trọng, nên dùng Treynor (lợi suất vượt trội trên mỗi đơn vị beta). Sharpe dựa trên tổng rủi ro, phù hợp khi danh mục là toàn bộ tài sản."
  },
  {
   "q": "A client has a high ability to take risk but a low willingness to take risk. The adviser should most appropriately:",
   "opts": [
    "base the IPS on the client’s ability to take risk.",
    "base the IPS on the lower of the two and seek to educate the client.",
    "average the two into a moderate risk tolerance."
   ],
   "ans": 1,
   "en": "B is correct. When ability and willingness conflict, the prudent approach is to adopt the lower level of risk in the IPS while educating the client — never simply override the client’s stated willingness.",
   "vi": "Đáp án B. Khi khả năng và mức sẵn lòng mâu thuẫn, cách thận trọng là lấy mức rủi ro thấp hơn khi lập IPS và giáo dục khách hàng — không được tự ý bỏ qua mức sẵn lòng khách hàng đã nêu."
  },
  {
   "q": "Two assets have a correlation of +1.0. Combining them in a portfolio most likely provides:",
   "opts": [
    "no diversification benefit.",
    "elimination of systematic risk.",
    "a portfolio standard deviation below the weighted average of the two."
   ],
   "ans": 0,
   "en": "A is correct. With perfect positive correlation, portfolio standard deviation equals exactly the weighted average of the assets’ standard deviations — no risk reduction. Diversification benefits appear only when ρ < 1.",
   "vi": "Đáp án A. Với tương quan hoàn hảo dương, độ lệch chuẩn danh mục đúng bằng bình quân gia quyền độ lệch chuẩn hai tài sản — không giảm được rủi ro. Lợi ích đa dạng hóa chỉ xuất hiện khi ρ < 1."
  }
 ]
});
window.CFA.extra["pm"] = {
 "checks": [
  [
   {
    "q": "Compared with a bank’s investment portfolio, a defined-benefit pension plan most likely has:",
    "opts": [
     "A shorter investment horizon and higher liquidity needs",
     "A longer horizon and greater ability to hold risky, less liquid assets",
     "Identical objectives, since both are institutions"
    ],
    "ans": 1,
    "en": "DB liabilities stretch decades and are fairly predictable — long horizons and modest liquidity needs; banks are liability-driven with short horizons and high liquidity demands.",
    "vi": "Nghĩa vụ của quỹ DB kéo dài hàng chục năm, khá dự đoán được — kỳ hạn dài, nhu cầu thanh khoản vừa; ngân hàng chạy theo nợ ngắn hạn, cần thanh khoản cao."
   },
   {
    "q": "The mechanism that keeps an ETF’s market price close to its NAV is:",
    "opts": [
     "End-of-day pricing at NAV",
     "In-kind creation and redemption by authorized participants",
     "A fixed share count"
    ],
    "ans": 1,
    "en": "Authorized participants arbitrage price–NAV gaps by creating or redeeming ETF shares in kind — which also drives the ETF’s tax efficiency.",
    "vi": "Authorized participants arbitrage khoảng cách giá–NAV bằng cách tạo/hoàn chứng chỉ ETF bằng hiện vật — cơ chế này cũng tạo hiệu quả thuế của ETF."
   }
  ],
  [
   {
    "q": "Combining two risky assets whose correlation is less than +1.0 produces a portfolio standard deviation that is:",
    "opts": [
     "Equal to the weighted average of the two standard deviations",
     "Less than the weighted average of the two standard deviations",
     "Always zero"
    ],
    "ans": 1,
    "en": "Diversification benefit exists whenever ρ &lt; 1: the portfolio’s risk falls below the weighted average, and the lower the correlation the larger the benefit.",
    "vi": "Chỉ cần tương quan &lt; 1 là có lợi ích đa dạng hóa: độ lệch chuẩn danh mục thấp hơn bình quân gia quyền; tương quan càng thấp lợi ích càng lớn."
   },
   {
    "q": "According to modern portfolio theory, investors should expect compensation for bearing:",
    "opts": [
     "Total risk",
     "Systematic (market) risk only, because unsystematic risk can be diversified away",
     "Company-specific risk"
    ],
    "ans": 1,
    "en": "Diversifiable risk is free to eliminate, so the market prices only systematic risk — the logic behind beta and the CAPM.",
    "vi": "Rủi ro phi hệ thống có thể loại bỏ miễn phí bằng đa dạng hóa, nên thị trường chỉ trả phần bù cho rủi ro hệ thống — nền tảng của beta và CAPM."
   }
  ],
  [
   {
    "q": "The security market line (SML) differs from the capital market line (CML) in that the SML:",
    "opts": [
     "Uses total risk (σ) and applies only to efficient portfolios",
     "Uses beta and applies to all assets and portfolios, efficient or not",
     "Applies only to the market portfolio"
    ],
    "ans": 1,
    "en": "CML: expected return vs total risk, efficient portfolios only. SML: expected return vs beta, prices every asset — mispriced assets plot off the SML.",
    "vi": "CML dùng tổng rủi ro (σ) và chỉ áp dụng cho danh mục hiệu quả; SML dùng beta và áp dụng cho mọi tài sản — tài sản định giá sai nằm lệch khỏi SML."
   },
   {
    "q": "A stock’s expected return plots above the security market line. The stock is most likely:",
    "opts": [
     "Overvalued",
     "Undervalued",
     "Correctly priced with higher beta"
    ],
    "ans": 1,
    "en": "Above the SML means the expected return exceeds the CAPM-required return for its beta — positive alpha, undervalued.",
    "vi": "Nằm trên SML nghĩa là lợi nhuận kỳ vọng vượt mức CAPM đòi hỏi theo beta — alpha dương, đang bị định giá thấp."
   }
  ],
  [
   {
    "q": "When a client’s ability to take risk is high but willingness is low, the adviser should generally:",
    "opts": [
     "Use the higher of the two",
     "Base the portfolio on the lower (more conservative) of the two and educate the client",
     "Ignore willingness"
    ],
    "ans": 1,
    "en": "The more constraining factor governs; resolving the mismatch through education is appropriate, but overriding stated willingness is not.",
    "vi": "Yếu tố hạn chế hơn quyết định mức rủi ro của IPS; nên tư vấn/giáo dục để thu hẹp khoảng cách, nhưng không được tự ý vượt qua mức sẵn lòng chịu rủi ro của khách."
   },
   {
    "q": "Empirically, the majority of a diversified portfolio’s return variability over time is explained by its:",
    "opts": [
     "Security selection",
     "Strategic asset allocation",
     "Market timing"
    ],
    "ans": 1,
    "en": "Asset-allocation policy dominates return variability — the reason the SAA is the central decision of the planning step.",
    "vi": "Chính sách phân bổ tài sản chi phối độ biến thiên lợi nhuận — lý do SAA là quyết định trung tâm của bước lập kế hoạch."
   }
  ],
  [
   {
    "q": "An investor refuses to sell a losing stock because \"it will come back,\" while quickly selling winners. This primarily reflects:",
    "opts": [
     "Loss aversion (an emotional bias)",
     "Availability (a cognitive error)",
     "Framing (a cognitive error)"
    ],
    "ans": 0,
    "en": "The disposition effect — clinging to losers, harvesting winners — flows from loss aversion, an emotional bias advisers adapt to rather than educate away.",
    "vi": "Hiệu ứng disposition — ôm mã lỗ, chốt mã lãi — bắt nguồn từ loss aversion, thiên lệch cảm xúc mà nhà tư vấn phải thích nghi thay vì \"dạy\" cho hết."
   },
   {
    "q": "An analyst values a stock by adjusting only slightly from its 52-week high, despite sharply deteriorating fundamentals. This is best described as:",
    "opts": [
     "Endowment bias",
     "Anchoring — a cognitive processing error",
     "Regret aversion"
    ],
    "ans": 1,
    "en": "Sticking to an initial reference number and under-adjusting is anchoring; being cognitive, it is correctable with process and fresh-look analysis.",
    "vi": "Bám vào con số tham chiếu ban đầu và điều chỉnh quá ít là anchoring; vì thuộc nhóm nhận thức, có thể sửa bằng quy trình và phân tích \"nhìn lại từ đầu\"."
   }
  ],
  [
   {
    "q": "A portfolio’s one-week VaR at 5% is $2 million. The correct interpretation is:",
    "opts": [
     "The maximum possible weekly loss is $2 million",
     "A loss of at least $2 million is expected in 5% of weeks",
     "Weekly losses will never exceed $2 million with 95% certainty of gains"
    ],
    "ans": 1,
    "en": "VaR is a minimum loss at a given probability — it says nothing about how bad the tail beyond $2m can get.",
    "vi": "VaR là mức lỗ tối thiểu ở một xác suất cho trước — nó không nói gì về phần đuôi tệ hơn 2 triệu."
   },
   {
    "q": "Hedging a commodity input cost with futures contracts is best classified as risk:",
    "opts": [
     "Transfer",
     "Shifting",
     "Avoidance"
    ],
    "ans": 1,
    "en": "Derivatives shift/reshape the risk distribution; insurance transfers discrete insurable risks to an insurer.",
    "vi": "Phái sinh dịch chuyển/tái định hình phân phối rủi ro; còn bảo hiểm là chuyển giao rủi ro rời rạc cho công ty bảo hiểm."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "Risk-free rate 2%, beta 0.8, market risk premium 6%. The CAPM expected return is:",
    "opts": [
     "6.8%",
     "8.0%",
     "4.8%"
    ],
    "ans": 0,
    "en": "E(R) = 2% + 0.8 × 6% = 6.8%.",
    "vi": "E(R) = 2% + 0,8 × 6% = 6,8%."
   },
   {
    "q": "A portfolio returned 10% with standard deviation 16%; the risk-free rate is 2%. The Sharpe ratio is:",
    "opts": [
     "0.63",
     "0.50",
     "0.80"
    ],
    "ans": 1,
    "en": "Sharpe = (10 − 2)/16 = 0.50 units of excess return per unit of total risk.",
    "vi": "Sharpe = (10 − 2)/16 = 0,50 — lợi nhuận vượt trội trên mỗi đơn vị tổng rủi ro."
   },
   {
    "q": "Every portfolio on the capital market line is a combination of:",
    "opts": [
     "Any two risky assets",
     "The risk-free asset and the market (tangency) portfolio",
     "Bonds only"
    ],
    "ans": 1,
    "en": "Two-fund separation: optimal portfolios mix the risk-free asset with the tangency (market) portfolio; position on the CML reflects risk preference.",
    "vi": "Định lý tách hai quỹ: mọi danh mục tối ưu là kết hợp giữa tài sản phi rủi ro và danh mục thị trường; vị trí trên CML phản ánh khẩu vị rủi ro."
   },
   {
    "q": "A portfolio holds 60% in a stock with beta 1.5 and 40% in a stock with beta 0.5. Portfolio beta is:",
    "opts": [
     "1.0",
     "1.1",
     "1.3"
    ],
    "ans": 1,
    "en": "βp = 0.6 × 1.5 + 0.4 × 0.5 = 0.9 + 0.2 = 1.1 — beta aggregates linearly by weights.",
    "vi": "Beta danh mục = 0,6 × 1,5 + 0,4 × 0,5 = 1,1 — beta cộng tuyến tính theo tỷ trọng."
   },
   {
    "q": "A stock’s forecast return plots below the SML. The stock is best described as:",
    "opts": [
     "Undervalued — buy",
     "Overvalued — its expected return is insufficient for its beta",
     "Fairly valued"
    ],
    "ans": 1,
    "en": "Below the SML means expected return &lt; CAPM-required return for that beta → price too high today → overvalued.",
    "vi": "Nằm dưới SML nghĩa là lợi nhuận kỳ vọng thấp hơn mức CAPM yêu cầu với beta đó → giá hiện tại quá cao → định giá đắt."
   },
   {
    "q": "Which factors primarily determine a client’s ABILITY (not willingness) to take risk?",
    "opts": [
     "Personality and past experiences",
     "Time horizon, wealth relative to needs, liquidity requirements, and income stability",
     "Media sentiment"
    ],
    "ans": 1,
    "en": "Ability is objective: long horizons, large asset bases relative to spending, low liquidity needs and stable income raise it. Willingness is psychological.",
    "vi": "Khả năng chịu rủi ro mang tính khách quan: kỳ hạn dài, tài sản lớn so với nhu cầu, ít nhu cầu thanh khoản, thu nhập ổn định. Mức sẵn lòng thuộc về tâm lý."
   },
   {
    "q": "The risk-free rate is 3%, the expected market return 8%, and a stock’s beta 1.2. Its CAPM-required return is:",
    "opts": [
     "9.0%",
     "9.6%",
     "6.0%"
    ],
    "ans": 0,
    "en": "E(R) = 3% + 1.2 × (8% − 3%) = 9.0%.",
    "vi": "E(R) = 3% + 1,2 × (8% − 3%) = 9,0%."
   },
   {
    "q": "A portfolio holds 60% in a fund with beta 1.5 and 40% in a fund with beta 0.5. The portfolio beta is:",
    "opts": [
     "1.0",
     "1.1",
     "1.3"
    ],
    "ans": 1,
    "en": "Portfolio beta is the weighted average: 0.6×1.5 + 0.4×0.5 = 1.1.",
    "vi": "Beta danh mục là bình quân gia quyền: 0,6×1,5 + 0,4×0,5 = 1,1."
   }
  ],
  [
   {
    "q": "A diversified portfolio returned 12% with beta 1.25; the risk-free rate is 2%. Its Treynor ratio is:",
    "opts": [
     "8.0",
     "10.0",
     "12.5"
    ],
    "ans": 0,
    "en": "Treynor = (12 − 2)/1.25 = 8.0 — excess return per unit of systematic risk; appropriate when comparing well-diversified portfolios.",
    "vi": "Treynor = (12 − 2)/1,25 = 8,0 — lợi nhuận vượt trội trên mỗi đơn vị rủi ro hệ thống; phù hợp khi so sánh các danh mục đã đa dạng hóa tốt."
   },
   {
    "q": "M-squared (M²) expresses risk-adjusted performance as:",
    "opts": [
     "A unitless ratio",
     "A percentage return directly comparable to the market’s return at the same total risk",
     "A beta"
    ],
    "ans": 1,
    "en": "M² levers or de-levers the portfolio to market volatility and states the result in %, making rankings identical to Sharpe but easier to interpret.",
    "vi": "M² điều chỉnh danh mục về cùng độ biến động với thị trường rồi biểu diễn bằng %, dễ diễn giải hơn Sharpe nhưng xếp hạng giống hệt."
   },
   {
    "q": "A portfolio lying below the efficient frontier is:",
    "opts": [
     "Unattainable",
     "Inefficient — another portfolio offers more return for the same risk",
     "Optimal for conservative investors"
    ],
    "ans": 1,
    "en": "Points below the frontier are dominated; points above are unattainable. Rational investors choose only frontier portfolios.",
    "vi": "Danh mục dưới đường biên hiệu quả bị “thống trị” — luôn có danh mục khác cùng rủi ro nhưng lợi nhuận cao hơn; điểm phía trên đường biên thì không thể đạt được."
   },
   {
    "q": "Two assets have a correlation of exactly +1.0. Portfolio standard deviation equals:",
    "opts": [
     "Zero",
     "The weighted average of the two standard deviations — no diversification benefit",
     "Less than either asset’s standard deviation"
    ],
    "ans": 1,
    "en": "Perfect positive correlation removes all diversification benefit: risk is simply the weighted average.",
    "vi": "Tương quan +1 tuyệt đối xóa mọi lợi ích đa dạng hóa: rủi ro danh mục đúng bằng bình quân gia quyền độ lệch chuẩn hai tài sản."
   },
   {
    "q": "An investor feels the pain of losses about twice as strongly as the pleasure of equal gains, leading her to hold losing stocks too long. This bias is:",
    "opts": [
     "Overconfidence",
     "Loss aversion",
     "Herding"
    ],
    "ans": 1,
    "en": "Loss aversion (prospect theory): losses loom larger than gains, producing the disposition effect — selling winners too early and riding losers too long.",
    "vi": "Ám ảnh thua lỗ (loss aversion): nỗi đau khi lỗ lớn hơn niềm vui khi lãi tương đương → hiệu ứng disposition: bán non cổ phiếu lãi, ôm quá lâu cổ phiếu lỗ."
   },
   {
    "q": "Strategic asset allocation differs from tactical asset allocation in that strategic allocation:",
    "opts": [
     "Chases short-term market views",
     "Sets long-term target weights consistent with the IPS, while tactical makes temporary deviations to exploit short-term opportunities",
     "Changes daily"
    ],
    "ans": 1,
    "en": "SAA is the long-run policy mix from the IPS; TAA is deliberate, temporary deviation from it based on shorter-term market expectations.",
    "vi": "SAA là cơ cấu mục tiêu dài hạn theo IPS; TAA là việc lệch tạm thời, có chủ đích khỏi cơ cấu đó để khai thác cơ hội ngắn hạn."
   },
   {
    "q": "An investor holds inherited shares she admits she would never buy today at current prices, yet refuses to sell them. This most likely reflects:",
    "opts": [
     "Endowment bias",
     "Confirmation bias",
     "Illusion of control"
    ],
    "ans": 0,
    "en": "Valuing an asset more merely because it is owned (and inherited) is the endowment effect — an emotional bias, often paired with status quo inertia.",
    "vi": "Định giá tài sản cao hơn chỉ vì đang sở hữu (và được thừa kế) là endowment effect — thiên lệch cảm xúc, thường đi kèm sức ì status quo."
   },
   {
    "q": "A firm buys insurance against warehouse fire but uses forward contracts to manage currency exposure. The two methods are, respectively:",
    "opts": [
     "Risk transfer and risk shifting",
     "Risk avoidance and risk acceptance",
     "Both risk transfer"
    ],
    "ans": 0,
    "en": "Insurance transfers a discrete insurable risk; derivatives shift the shape of a financial-price risk distribution.",
    "vi": "Bảo hiểm chuyển giao rủi ro rời rạc bảo hiểm được; phái sinh dịch chuyển hình dạng phân phối rủi ro giá tài chính."
   }
  ]
 ]
};
