/* =====================================================================
   Topic 06 — Equity Investments
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
 "id": "equity",
 "num": "06",
 "name": "Equity Investments",
 "vi": "Đầu tư cổ phiếu",
 "w": [
  11,
  14
 ],
 "blurb": "Market organization, indices, market efficiency, industry & company analysis, and equity valuation: DDM, FCFE, and price multiples.",
 "intro": {
  "en": "Equity covers how markets and indices work, the efficient market hypothesis, security characteristics, industry analysis, and — the heart of it — valuation: dividend discount models, free-cash-flow models, and multiplier approaches. Gordon growth model questions are near-guaranteed on the exam.",
  "vi": "Equity gồm cách thị trường và chỉ số vận hành, giả thuyết thị trường hiệu quả, đặc điểm chứng khoán, phân tích ngành, và trọng tâm là định giá: mô hình chiết khấu cổ tức, mô hình dòng tiền tự do và phương pháp hệ số. Câu hỏi về Gordon growth model gần như chắc chắn xuất hiện."
 },
 "modules": [
  {
   "title": "Markets, Orders & Indices",
   "sections": [
    {
     "h": "Positions, margin, and orders",
     "en": "<ul><li><strong>Long</strong> profits when price rises; <strong>short</strong> sells borrowed shares hoping to repurchase cheaper — risk is theoretically unlimited.</li><li><strong>Margin buying:</strong> leverage ratio = 1/margin requirement (50% initial margin → 2× leverage; returns and losses are doubled before costs). A <strong>margin call</strong> occurs when equity falls below the maintenance margin: trigger price P = P<sub>0</sub> × (1 − initial margin)/(1 − maintenance margin).</li><li><strong>Orders:</strong> market orders demand immediacy (execution certainty, price uncertainty); limit orders control price but may never fill; stop orders become market orders once a trigger trades — stop-loss orders reinforce momentum.</li><li>Market structures: quote-driven (dealers), order-driven (auction/matching), brokered. Call vs continuous markets.</li></ul>",
     "vi": "<ul><li><strong>Long</strong> lãi khi giá tăng; <strong>short</strong> bán chứng khoán đi vay, kỳ vọng mua lại rẻ hơn — rủi ro về lý thuyết là vô hạn.</li><li><strong>Mua ký quỹ:</strong> hệ số đòn bẩy = 1/tỷ lệ ký quỹ (ký quỹ ban đầu 50% → đòn bẩy 2×; lãi và lỗ đều nhân đôi trước chi phí). <strong>Margin call</strong> khi vốn chủ giảm dưới ký quỹ duy trì: giá kích hoạt P = P<sub>0</sub> × (1 − ký quỹ ban đầu)/(1 − ký quỹ duy trì).</li><li><strong>Lệnh:</strong> lệnh thị trường ưu tiên tốc độ (chắc chắn khớp, không chắc giá); lệnh giới hạn kiểm soát giá nhưng có thể không khớp; lệnh dừng trở thành lệnh thị trường khi chạm giá kích hoạt — stop-loss khuếch đại đà giá.</li><li>Cấu trúc thị trường: dựa trên báo giá (dealer), dựa trên lệnh (đấu giá/khớp lệnh), qua môi giới. Thị trường phiên (call) vs liên tục.</li></ul>"
    },
    {
     "h": "Index weighting schemes",
     "en": "<table class=\"simple\"><tr><th>Weighting</th><th>Idea</th><th>Key property</th></tr><tr><td>Price-weighted</td><td>Sum of prices / divisor (e.g., Dow)</td><td>Biased toward high-priced stocks; splits change weights</td></tr><tr><td>Market-cap-weighted</td><td>Weight = float-adjusted market cap (e.g., S&amp;P 500)</td><td>Self-rebalancing; momentum tilt toward overvalued large caps</td></tr><tr><td>Equal-weighted</td><td>Same weight each stock</td><td>Small-cap tilt; requires frequent rebalancing</td></tr><tr><td>Fundamental-weighted</td><td>Weights by sales, earnings, book value…</td><td>Value tilt; contrarian rebalancing</td></tr></table>",
     "vi": "<p>Bốn cách tính chỉ số: <strong>theo giá</strong> (tổng giá / số chia, VD Dow — thiên vị cổ phiếu giá cao, chia tách làm đổi trọng số); <strong>theo vốn hóa</strong> (điều chỉnh free-float, VD S&amp;P 500 — tự cân bằng, nghiêng về cổ phiếu lớn có thể đang được định giá cao); <strong>tỷ trọng bằng nhau</strong> (nghiêng về vốn hóa nhỏ, phải tái cân bằng thường xuyên); <strong>theo yếu tố cơ bản</strong> (doanh thu, lợi nhuận, giá trị sổ sách — nghiêng về giá trị, tái cân bằng kiểu ngược dòng).</p>"
    }
   ]
  },
  {
   "title": "Market Efficiency",
   "sections": [
    {
     "h": "The three forms of the EMH",
     "en": "<ul><li><strong>Weak form:</strong> prices reflect all <em>past market data</em> (prices, volume). If it holds, <em>technical analysis</em> cannot consistently outperform.</li><li><strong>Semi-strong form:</strong> prices reflect all <em>public</em> information. If it holds, <em>fundamental analysis</em> of public data cannot consistently outperform. Tested via event studies.</li><li><strong>Strong form:</strong> prices reflect all information, <em>including private/insider</em> information. Even insiders could not beat the market — empirically rejected (insider trading is profitable, which is why it is illegal).</li></ul><p>Documented anomalies (January effect, momentum, value effects) often shrink after discovery or fail after costs. Behavioral finance (loss aversion, herding, overconfidence) offers explanations for persistent mispricing. Practical implication: in highly efficient markets, <strong>passive investing</strong> is hard to beat after fees.</p>",
     "vi": "<ul><li><strong>Dạng yếu:</strong> giá phản ánh mọi <em>dữ liệu thị trường quá khứ</em>. Nếu đúng, <em>phân tích kỹ thuật</em> không thể thắng thị trường bền vững.</li><li><strong>Dạng bán mạnh:</strong> giá phản ánh mọi thông tin <em>công khai</em>. Nếu đúng, <em>phân tích cơ bản</em> trên dữ liệu công khai không thắng được thị trường. Kiểm định bằng event study.</li><li><strong>Dạng mạnh:</strong> giá phản ánh mọi thông tin, <em>kể cả thông tin nội bộ</em>. Ngay cả insider cũng không thắng được — thực nghiệm bác bỏ (giao dịch nội gián sinh lời, đó là lý do nó bị cấm).</li></ul><p>Các anomaly (hiệu ứng tháng Giêng, momentum, hiệu ứng giá trị) thường yếu đi sau khi được công bố hoặc biến mất sau chi phí. Tài chính hành vi (sợ thua lỗ, tâm lý bầy đàn, quá tự tin) giải thích các sai lệch định giá dai dẳng. Hàm ý thực tiễn: ở thị trường hiệu quả cao, <strong>đầu tư thụ động</strong> rất khó bị đánh bại sau phí.</p>"
    }
   ]
  },
  {
   "title": "Equity Valuation",
   "sections": [
    {
     "h": "Dividend discount models",
     "en": "<p>Value = present value of expected future cash flows to the shareholder. For a dividend-paying firm with stable growth, the <strong>Gordon growth model</strong>:</p><p><strong>V₀ = D₁ / (r − g)</strong>, where D₁ = D₀(1 + g) is <em>next year’s</em> dividend, r = required return, g = sustainable growth. Requires r &gt; g and stable growth. Value is extremely sensitive to (r − g).</p><ul><li><strong>Sustainable growth:</strong> g = retention ratio × ROE = (1 − payout) × ROE.</li><li><strong>Multistage models</strong> handle high-growth phases before maturity: discount the short-term dividends plus the terminal value from Gordon growth at the point growth stabilizes.</li><li>For non-dividend payers, use <strong>FCFE</strong> models (value = PV of free cash flow to equity at r) or multiples.</li><li>Preferred stock = a perpetuity: V = D / r.</li></ul>",
     "vi": "<p>Giá trị = hiện giá dòng tiền kỳ vọng cho cổ đông. Với công ty trả cổ tức tăng trưởng ổn định, <strong>mô hình Gordon</strong>:</p><p><strong>V₀ = D₁ / (r − g)</strong>, trong đó D₁ = D₀(1 + g) là cổ tức <em>năm tới</em>, r = tỷ suất yêu cầu, g = tăng trưởng bền vững. Điều kiện r &gt; g và tăng trưởng ổn định. Giá trị cực kỳ nhạy với (r − g).</p><ul><li><strong>Tăng trưởng bền vững:</strong> g = tỷ lệ giữ lại × ROE = (1 − tỷ lệ chi trả) × ROE.</li><li><strong>Mô hình nhiều giai đoạn</strong> xử lý pha tăng trưởng cao trước khi bão hòa: chiết khấu cổ tức ngắn hạn + giá trị cuối kỳ tính bằng Gordon tại thời điểm tăng trưởng ổn định.</li><li>Công ty không trả cổ tức: dùng mô hình <strong>FCFE</strong> hoặc hệ số so sánh.</li><li>Cổ phiếu ưu đãi = perpetuity: V = D / r.</li></ul>"
    },
    {
     "h": "Price multiples and enterprise value",
     "en": "<ul><li><strong>P/E:</strong> justified forward P/E from Gordon growth = payout ratio / (r − g). Drawbacks: negative or manipulated earnings.</li><li><strong>P/B:</strong> useful for financial firms; distorted by intangibles and buybacks.</li><li><strong>P/S:</strong> works for unprofitable firms; ignores cost structure.</li><li><strong>P/CF:</strong> less manipulable than earnings.</li><li><strong>EV/EBITDA:</strong> Enterprise value = market cap + debt + preferred − cash. Capital-structure neutral; useful for comparing firms with different leverage.</li><li>Method of comparables: a stock trading at a lower multiple than peers is <em>relatively</em> undervalued — but the whole peer group may be mispriced (relative ≠ intrinsic).</li></ul>",
     "vi": "<ul><li><strong>P/E:</strong> P/E hợp lý từ Gordon = tỷ lệ chi trả / (r − g). Nhược: lợi nhuận âm hoặc bị \"xào nấu\".</li><li><strong>P/B:</strong> hữu ích với công ty tài chính; méo mó bởi tài sản vô hình và mua lại cổ phiếu.</li><li><strong>P/S:</strong> dùng được cho công ty chưa có lãi; bỏ qua cơ cấu chi phí.</li><li><strong>P/CF:</strong> khó thao túng hơn lợi nhuận.</li><li><strong>EV/EBITDA:</strong> EV = vốn hóa + nợ + CP ưu đãi − tiền mặt. Trung lập với cấu trúc vốn; tốt khi so sánh công ty có đòn bẩy khác nhau.</li><li>Phương pháp so sánh: cổ phiếu có hệ số thấp hơn nhóm tương đồng chỉ là rẻ <em>tương đối</em> — cả nhóm có thể đang bị định giá sai (tương đối ≠ nội tại).</li></ul>"
    }
   ],
   "formulas": [
    [
     "Gordon growth",
     "V0 = D1 / (r − g)",
     "D1 = D0(1+g); requires r > g"
    ],
    [
     "Sustainable growth",
     "g = b × ROE",
     "b = retention ratio = 1 − payout"
    ],
    [
     "Justified forward P/E",
     "P0/E1 = payout / (r − g)",
     ""
    ],
    [
     "Preferred stock value",
     "V = D / r",
     "Perpetuity"
    ],
    [
     "Enterprise value",
     "EV = Market cap + Debt + Preferred − Cash",
     ""
    ],
    [
     "Margin call price",
     "P = P0 (1 − IM) / (1 − MM)",
     "IM initial, MM maintenance margin"
    ]
   ]
  }
 ],
 "vocab": [
  [
   "free float",
   "Shares actually available for public trading.",
   "lượng cổ phiếu tự do chuyển nhượng"
  ],
  [
   "short covering",
   "Buying back shares to close a short position.",
   "mua bù vị thế bán khống"
  ],
  [
   "bid–ask spread",
   "Difference between best buy and sell quotes; a liquidity cost.",
   "chênh lệch giá mua–bán"
  ],
  [
   "IPO / secondary offering",
   "First-time vs subsequent public share sale.",
   "phát hành lần đầu / phát hành bổ sung"
  ],
  [
   "intrinsic value",
   "Value based on fundamentals, independent of market price.",
   "giá trị nội tại"
  ],
  [
   "required rate of return",
   "Minimum return an investor demands given risk.",
   "tỷ suất sinh lời yêu cầu"
  ],
  [
   "terminal value",
   "Value of all cash flows beyond the explicit forecast horizon.",
   "giá trị cuối kỳ dự phóng"
  ],
  [
   "payout ratio",
   "Dividends as a share of earnings.",
   "tỷ lệ chi trả cổ tức"
  ],
  [
   "cyclical / defensive",
   "Earnings highly / weakly sensitive to the business cycle.",
   "ngành chu kỳ / phòng thủ"
  ],
  [
   "GDR / ADR",
   "Depository receipts allowing foreign shares to trade locally.",
   "chứng chỉ lưu ký"
  ]
 ],
 "quiz": [
  {
   "q": "A stock will pay a dividend of $2.00 next year (D1). Dividends grow at 4% forever and the required return is 9%. The stock’s intrinsic value is closest to:",
   "opts": [
    "$40.00",
    "$41.60",
    "$50.00"
   ],
   "ans": 0,
   "en": "A is correct. V0 = D1/(r − g) = 2.00/(0.09 − 0.04) = 2.00/0.05 = $40.00. Careful: the $2.00 is already D1; multiplying by (1+g) again — giving $41.60 — is the classic trap.",
   "vi": "Đáp án A. V0 = D1/(r − g) = 2.00/0.05 = 40 USD. Cẩn thận: 2.00 đã là D1; nhân thêm (1+g) để ra 41.60 chính là bẫy kinh điển."
  },
  {
   "q": "If markets are semi-strong form efficient, which activity can still be expected to produce consistent abnormal returns?",
   "opts": [
    "Technical analysis of price patterns",
    "Fundamental analysis of published financial statements",
    "Trading on material nonpublic information"
   ],
   "ans": 2,
   "en": "C is correct (as a matter of theory — it is illegal and unethical). Semi-strong efficiency means all public information (past prices AND fundamentals) is already in prices; only private information confers an edge. Strong-form efficiency would eliminate even that edge.",
   "vi": "Đáp án C (về mặt lý thuyết — hành vi này phi pháp và phi đạo đức). Thị trường hiệu quả bán mạnh nghĩa là mọi thông tin công khai (gồm cả giá quá khứ VÀ dữ liệu cơ bản) đã nằm trong giá; chỉ thông tin riêng tư mới tạo lợi thế. Dạng mạnh sẽ triệt tiêu cả lợi thế đó."
  },
  {
   "q": "An investor buys shares at $50 on 50% initial margin with a 25% maintenance margin. Ignoring costs, the margin call price is closest to:",
   "opts": [
    "$25.00",
    "$33.33",
    "$37.50"
   ],
   "ans": 1,
   "en": "B is correct. Margin call price = P0 × (1 − IM)/(1 − MM) = 50 × (1 − 0.50)/(1 − 0.25) = 50 × 0.50/0.75 = $33.33.",
   "vi": "Đáp án B. Giá margin call = 50 × (1 − 0.50)/(1 − 0.25) = 50 × 0.6667 = 33.33 USD."
  },
  {
   "q": "Compared with a market-cap-weighted index of the same stocks, an equal-weighted index most likely has:",
   "opts": [
    "a tilt toward small-cap stocks and higher rebalancing needs.",
    "a tilt toward the largest stocks.",
    "identical performance if no stocks are added or removed."
   ],
   "ans": 0,
   "en": "A is correct. Equal weighting gives small companies the same weight as giants — a small-cap tilt — and prices drift away from equal weights daily, so the index requires regular rebalancing (with associated transaction costs).",
   "vi": "Đáp án A. Tỷ trọng bằng nhau cho công ty nhỏ trọng số ngang công ty khổng lồ — nghiêng về vốn hóa nhỏ — và giá biến động khiến trọng số lệch khỏi mức bằng nhau mỗi ngày, nên phải tái cân bằng thường xuyên (kèm chi phí giao dịch)."
  },
  {
   "q": "A firm retains 60% of earnings and earns an ROE of 15%. Its sustainable growth rate is closest to:",
   "opts": [
    "6.0%",
    "9.0%",
    "15.0%"
   ],
   "ans": 1,
   "en": "B is correct. g = retention ratio × ROE = 0.60 × 15% = 9.0%. This g feeds directly into the Gordon growth model.",
   "vi": "Đáp án B. g = tỷ lệ giữ lại × ROE = 0.60 × 15% = 9%. Giá trị g này được dùng trực tiếp trong mô hình Gordon."
  }
 ]
});
window.CFA.extra["equity"] = {
 "checks": [
  [
   {
    "q": "An investor buys stock at $40 on 50% initial margin with a 25% maintenance margin. The margin-call price is closest to:",
    "opts": [
     "$26.67",
     "$30.00",
     "$20.00"
    ],
    "ans": 0,
    "en": "Call price = P₀(1 − IM)/(1 − MM) = 40 × 0.5 / 0.75 ≈ $26.67.",
    "vi": "Giá margin call = 40 × (1 − 0,5)/(1 − 0,25) ≈ 26,67 USD. Dưới mức này phải nộp thêm ký quỹ."
   },
   {
    "q": "In a price-weighted index, the largest influence comes from the stock with the:",
    "opts": [
     "Largest market capitalization",
     "Highest price per share",
     "Largest free float"
    ],
    "ans": 1,
    "en": "Price weighting (e.g., DJIA) gives more weight to high-priced shares regardless of company size — and requires divisor adjustments for splits.",
    "vi": "Chỉ số theo giá (như DJIA) cho cổ phiếu thị giá cao ảnh hưởng lớn nhất, bất kể quy mô công ty; phải điều chỉnh divisor khi chia tách cổ phiếu."
   }
  ],
  [
   {
    "q": "If markets are semi-strong-form efficient, which activity should NOT consistently produce abnormal returns?",
    "opts": [
     "Trading on insider information",
     "Fundamental analysis of public financial statements",
     "Both technical and fundamental analysis on private information"
    ],
    "ans": 1,
    "en": "Semi-strong efficiency: prices already reflect all public information, so analysis of public data (fundamental or technical) cannot consistently beat the market; insider trading still could.",
    "vi": "Hiệu quả dạng vừa: giá đã phản ánh mọi thông tin công khai → phân tích cơ bản trên dữ liệu công khai không thể thắng thị trường bền vững; chỉ thông tin nội gián mới có thể."
   },
   {
    "q": "Persistent momentum and calendar anomalies, if genuinely exploitable, are evidence against which form of market efficiency?",
    "opts": [
     "Weak form",
     "Strong form only",
     "Neither — anomalies support efficiency"
    ],
    "ans": 0,
    "en": "Momentum and calendar effects rely on past price patterns — exploitable patterns in past prices contradict weak-form efficiency (and everything stronger).",
    "vi": "Hiệu ứng momentum/lịch dựa trên chuỗi giá quá khứ — nếu khai thác được thì mâu thuẫn với hiệu quả dạng yếu (và các dạng mạnh hơn)."
   }
  ],
  [
   {
    "q": "Using the Gordon growth model with D₁ = $3, r = 11%, g = 5%, intrinsic value is:",
    "opts": [
     "$50",
     "$60",
     "$27"
    ],
    "ans": 0,
    "en": "V₀ = D₁/(r − g) = 3/0.06 = $50.",
    "vi": "V₀ = D₁/(r − g) = 3/0,06 = 50 USD. Chỉ dùng khi g &lt; r và tăng trưởng ổn định."
   },
   {
    "q": "The justified leading P/E from the Gordon model equals:",
    "opts": [
     "(1 − b)/(r − g), the payout ratio over (r − g)",
     "b/(r + g)",
     "ROE/(r − g)"
    ],
    "ans": 0,
    "en": "P₀/E₁ = payout/(r − g). Higher payout raises P/E directly but may cut g = b × ROE — the offsetting effect examiners love.",
    "vi": "P/E hợp lý (leading) = tỷ lệ chi trả/(r − g). Trả cổ tức nhiều làm P/E tăng trực tiếp nhưng lại giảm g = b × ROE — hiệu ứng bù trừ hay được hỏi."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "A stock will pay a $2.00 dividend next year, growing 4% forever. If the required return is 10%, intrinsic value is closest to:",
    "opts": [
     "$33.33",
     "$50.00",
     "$20.00"
    ],
    "ans": 0,
    "en": "V₀ = 2/(0.10 − 0.04) = $33.33.",
    "vi": "V₀ = 2/(0,10 − 0,04) = 33,33 USD theo mô hình Gordon."
   },
   {
    "q": "ROE is 15% and the dividend payout ratio is 40%. The sustainable growth rate is:",
    "opts": [
     "6.0%",
     "9.0%",
     "15.0%"
    ],
    "ans": 1,
    "en": "g = retention × ROE = 0.6 × 15% = 9%.",
    "vi": "g = tỷ lệ giữ lại × ROE = 0,6 × 15% = 9%."
   },
   {
    "q": "An investor wants to buy a stock but only if the price falls to $45 or below. She should place a:",
    "opts": [
     "Market buy order",
     "Limit buy order at $45",
     "Stop buy order at $45"
    ],
    "ans": 1,
    "en": "A limit buy executes only at the limit price or better (lower). A stop buy would trigger a purchase when the price rises to $45.",
    "vi": "Lệnh limit mua chỉ khớp ở mức giá 45 hoặc thấp hơn. Lệnh stop mua thì ngược lại — kích hoạt khi giá tăng chạm 45."
   },
   {
    "q": "Index providers use free-float adjustment primarily to:",
    "opts": [
     "Increase index volatility",
     "Weight companies by shares actually available to public investors",
     "Exclude foreign shareholders"
    ],
    "ans": 1,
    "en": "Float adjustment removes strategic/insider holdings so weights reflect investable supply — improving index replicability.",
    "vi": "Điều chỉnh free-float loại bỏ cổ phần nắm giữ chiến lược/nội bộ để trọng số phản ánh lượng cổ phiếu công chúng thực sự mua được."
   },
   {
    "q": "Market cap $500m, total debt $200m, cash $50m. Enterprise value is:",
    "opts": [
     "$650m",
     "$750m",
     "$550m"
    ],
    "ans": 0,
    "en": "EV = equity + debt − cash = 500 + 200 − 50 = $650m — the takeover cost of the whole operating business.",
    "vi": "EV = vốn hóa + nợ − tiền mặt = 650 triệu USD — chi phí “mua đứt” toàn bộ hoạt động kinh doanh."
   },
   {
    "q": "A preferred stock pays a fixed $4 annual dividend forever. At a 8% required return its value is:",
    "opts": [
     "$50",
     "$32",
     "$40"
    ],
    "ans": 0,
    "en": "Perpetuity: V = 4/0.08 = $50.",
    "vi": "Cổ phiếu ưu đãi như perpetuity: V = 4/0,08 = 50 USD."
   }
  ],
  [
   {
    "q": "A short seller most likely profits when the stock price falls, but while the position is open she must:",
    "opts": [
     "Receive the stock’s dividends",
     "Pay any dividends to the share lender",
     "Vote the borrowed shares"
    ],
    "ans": 1,
    "en": "Short sellers owe borrowed-share dividends to the lender and post margin; profit = sell high now, repurchase lower later.",
    "vi": "Người bán khống phải hoàn trả cổ tức phát sinh cho người cho vay cổ phiếu và ký quỹ; lợi nhuận đến từ mua lại giá thấp hơn."
   },
   {
    "q": "If a market is weak-form efficient, which approach cannot consistently generate abnormal returns?",
    "opts": [
     "Technical analysis based on past prices and volume",
     "Fundamental analysis",
     "Insider trading"
    ],
    "ans": 0,
    "en": "Weak form: past market data is fully priced in — chart patterns cannot reliably beat the market. Fundamental analysis may still work under weak form.",
    "vi": "Hiệu quả dạng yếu: dữ liệu giá/khối lượng quá khứ đã nằm trong giá → phân tích kỹ thuật vô hiệu; phân tích cơ bản vẫn có thể hữu ích."
   },
   {
    "q": "A present-value model using free cash flow to equity (FCFE) is most appropriate when the company:",
    "opts": [
     "Pays a stable, predictable dividend",
     "Pays no or erratic dividends and the analyst takes a control (or total-return) perspective",
     "Has negative cash flow forever"
    ],
    "ans": 1,
    "en": "FCFE measures capacity to pay rather than actual dividends — suited to non-dividend payers and control perspectives.",
    "vi": "FCFE đo khả năng chi trả thay vì cổ tức thực trả — phù hợp với công ty không/ít trả cổ tức hoặc góc nhìn cổ đông kiểm soát."
   },
   {
    "q": "The P/B multiple is most useful relative to P/E when valuing:",
    "opts": [
     "Asset-heavy financial firms or firms with negative earnings",
     "High-growth software firms",
     "Firms with volatile book values"
    ],
    "ans": 0,
    "en": "Book value stays meaningful when earnings are negative or volatile, and marks banks’ assets reasonably well — hence P/B’s popularity for financials.",
    "vi": "P/B hữu ích khi lợi nhuận âm/biến động và với ngành tài chính (tài sản gần giá thị trường) — những chỗ P/E mất tác dụng."
   },
   {
    "q": "In a two-stage DDM, the terminal value at the end of the high-growth stage is computed by:",
    "opts": [
     "Multiplying final earnings by the current market P/E",
     "Applying the Gordon growth model to the first stable-growth dividend",
     "Summing undiscounted future dividends"
    ],
    "ans": 1,
    "en": "Terminal value = D(first stable year)/(r − g_stable), then discount it back with the stage-one dividends.",
    "vi": "Giá trị cuối kỳ = cổ tức năm ổn định đầu tiên/(r − g ổn định), sau đó chiết khấu về hiện tại cùng cổ tức giai đoạn 1."
   },
   {
    "q": "An investor buys on 50% margin. Ignoring costs, if the stock price rises 5%, the return on her equity is approximately:",
    "opts": [
     "+5%",
     "+10%",
     "+2.5%"
    ],
    "ans": 1,
    "en": "Leverage factor = 1/margin = 2×, so equity return ≈ 2 × 5% = 10% before interest and fees — losses amplify the same way.",
    "vi": "Hệ số đòn bẩy = 1/tỷ lệ ký quỹ = 2 lần → lợi nhuận trên vốn tự có ≈ 10% (chưa trừ lãi vay, phí). Lỗ cũng khuếch đại tương tự."
   }
  ]
 ]
};
