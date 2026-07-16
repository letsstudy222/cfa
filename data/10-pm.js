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
  "en": "Portfolio Management ties the curriculum together: measuring risk and return, the mathematics of diversification, modern portfolio theory (efficient frontier, CML), the CAPM and the SML, building an Investment Policy Statement, and behavioral finance. The CML-vs-SML distinction and CAPM expected-return calculations are exam staples.",
  "vi": "Portfolio Management kết nối toàn bộ chương trình: đo lường rủi ro – lợi nhuận, toán học của đa dạng hóa, lý thuyết danh mục hiện đại (đường biên hiệu quả, CML), mô hình CAPM và đường SML, xây dựng IPS, và tài chính hành vi. Phân biệt CML vs SML và tính lợi suất kỳ vọng theo CAPM là dạng bài \"ruột\" của đề thi."
 },
 "modules": [
  {
   "title": "Risk, Return & Diversification",
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
   ]
  },
  {
   "title": "CAPM, Performance Measures & the IPS",
   "sections": [
    {
     "h": "CAPM and the SML",
     "en": "<p><strong>E(R<sub>i</sub>) = R<sub>f</sub> + β<sub>i</sub>[E(R<sub>m</sub>) − R<sub>f</sub>]</strong>. Beta = Cov(R<sub>i</sub>,R<sub>m</sub>)/σ<sub>m</sub>² measures sensitivity to market moves. Interpretation: if a security’s <em>forecast</em> return lies <strong>above the SML</strong>, it offers more than required for its beta → <strong>undervalued</strong> (buy); below the SML → overvalued. CAPM assumptions (frictionless markets, homogeneous expectations, all investors mean-variance optimizers) are unrealistic but produce a powerful, testable benchmark.</p><p><strong>Performance ratios:</strong></p><ul><li><strong>Sharpe</strong> = (R<sub>p</sub> − R<sub>f</sub>)/σ<sub>p</sub> — total risk; use when the portfolio is the investor’s whole wealth.</li><li><strong>Treynor</strong> = (R<sub>p</sub> − R<sub>f</sub>)/β<sub>p</sub> — systematic risk; for well-diversified portfolios.</li><li><strong>Jensen’s alpha</strong> = R<sub>p</sub> − [R<sub>f</sub> + β(R<sub>m</sub> − R<sub>f</sub>)] — return above the CAPM requirement.</li><li><strong>M²</strong> — Sharpe re-expressed in percentage terms versus the market.</li></ul>",
     "vi": "<p><strong>E(R<sub>i</sub>) = R<sub>f</sub> + β<sub>i</sub>[E(R<sub>m</sub>) − R<sub>f</sub>]</strong>. Beta = Cov(R<sub>i</sub>,R<sub>m</sub>)/σ<sub>m</sub>² đo độ nhạy với biến động thị trường. Diễn giải: nếu lợi suất <em>dự báo</em> của chứng khoán nằm <strong>trên SML</strong> → được kỳ vọng cao hơn mức yêu cầu theo beta → <strong>đang bị định giá thấp</strong> (nên mua); dưới SML → định giá cao. Các giả định CAPM (thị trường không ma sát, kỳ vọng đồng nhất…) phi thực tế nhưng tạo ra chuẩn so sánh mạnh và kiểm định được.</p><p><strong>Chỉ số hiệu quả:</strong> Sharpe = (R<sub>p</sub> − R<sub>f</sub>)/σ<sub>p</sub> (tổng rủi ro — dùng khi danh mục là toàn bộ tài sản); Treynor = (R<sub>p</sub> − R<sub>f</sub>)/β<sub>p</sub> (rủi ro hệ thống — cho danh mục đã đa dạng hóa tốt); Jensen’s alpha = phần lợi suất vượt yêu cầu CAPM; M² = Sharpe quy về đơn vị %.</p>"
    },
    {
     "h": "The Investment Policy Statement and behavioral biases",
     "en": "<p>The <strong>IPS</strong> is the governing document of the client relationship. Objectives: <strong>risk</strong> (ability vs willingness to take risk — use the <em>lower</em> of the two) and <strong>return</strong>. Constraints — remember <strong>LLTTU</strong>: Liquidity, Legal/regulatory, Time horizon, Taxes, Unique circumstances. Strategic asset allocation implements the IPS; rebalancing keeps weights within corridors.</p><p><strong>Behavioral biases:</strong> cognitive <em>belief-perseverance</em> errors (conservatism, confirmation, representativeness, illusion of control, hindsight), <em>processing</em> errors (anchoring, mental accounting, framing, availability), and <strong>emotional biases</strong> (loss aversion, overconfidence, self-control, status quo, endowment, regret aversion). Cognitive errors are best corrected with information and education; emotional biases are usually <em>accommodated</em> rather than corrected. Market-wide effects: herding, bubbles, momentum.</p>",
     "vi": "<p><strong>IPS</strong> là văn bản \"hiến pháp\" của quan hệ khách hàng. Mục tiêu: <strong>rủi ro</strong> (khả năng vs mức sẵn lòng chấp nhận rủi ro — lấy mức <em>thấp hơn</em>) và <strong>lợi nhuận</strong>. Ràng buộc — nhớ <strong>LLTTU</strong>: Thanh khoản, Pháp lý, Thời gian đầu tư, Thuế, Hoàn cảnh đặc thù. Phân bổ tài sản chiến lược hiện thực hóa IPS; tái cân bằng giữ tỷ trọng trong biên độ.</p><p><strong>Thiên lệch hành vi:</strong> lỗi nhận thức dạng <em>bám giữ niềm tin</em> (bảo thủ, thiên kiến xác nhận, đại diện, ảo tưởng kiểm soát, hồi tưởng), lỗi <em>xử lý thông tin</em> (neo, kế toán tâm lý, đóng khung, sẵn có), và <strong>thiên lệch cảm xúc</strong> (sợ thua lỗ, quá tự tin, thiếu tự chủ, giữ nguyên hiện trạng, sở hữu, sợ hối tiếc). Lỗi nhận thức sửa được bằng thông tin và giáo dục; thiên lệch cảm xúc thường phải <em>thích nghi</em> thay vì sửa. Hiệu ứng toàn thị trường: bầy đàn, bong bóng, momentum.</p>"
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
     "2-asset portfolio risk",
     "σp² = w1²σ1² + w2²σ2² + 2w1w2ρσ1σ2",
     ""
    ],
    [
     "Sharpe",
     "(Rp − Rf)/σp",
     "Total risk"
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
    ],
    [
     "Utility",
     "U = E(R) − 0.5·A·σ²",
     "A = risk aversion coefficient"
    ]
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
    "q": "When a client’s ability to take risk is high but willingness is low, the adviser should generally:",
    "opts": [
     "Use the higher of the two",
     "Base the portfolio on the lower (more conservative) of the two and educate the client",
     "Ignore willingness"
    ],
    "ans": 1,
    "en": "The more constraining factor governs; resolving the mismatch through education is appropriate, but overriding stated willingness is not.",
    "vi": "Yếu tố hạn chế hơn quyết định mức rủi ro của IPS; nên tư vấn/giáo dục để thu hẹp khoảng cách, nhưng không được tự ý vượt qua mức sẵn lòng chịu rủi ro của khách."
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
   }
  ]
 ]
};
