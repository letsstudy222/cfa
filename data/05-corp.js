/* =====================================================================
   Topic 05 — Corporate Issuers
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
 "id": "corp",
 "num": "05",
 "name": "Corporate Issuers",
 "vi": "Tổ chức phát hành doanh nghiệp",
 "w": [
  6,
  9
 ],
 "blurb": "Corporate structures and governance, capital investment decisions (NPV/IRR), cost of capital, capital structure and leverage, working capital.",
 "intro": {
  "en": "Corporate Issuers looks at companies from the inside: how they are governed, how they choose investments (capital budgeting), how they fund themselves (cost of capital, capital structure), and how operating and financial leverage magnify risk. NPV/IRR and WACC calculations here reappear in Equity and Portfolio Management.",
  "vi": "Corporate Issuers nhìn doanh nghiệp từ bên trong: cách quản trị, cách lựa chọn dự án đầu tư (capital budgeting), cách huy động vốn (chi phí vốn, cấu trúc vốn), và cách đòn bẩy hoạt động/tài chính khuếch đại rủi ro. Các phép tính NPV/IRR và WACC ở đây sẽ xuất hiện lại trong Equity và Portfolio Management."
 },
 "modules": [
  {
   "title": "Governance & Stakeholders",
   "sections": [
    {
     "h": "Principal–agent conflicts and governance mechanisms",
     "en": "<p>Corporate governance manages conflicts among stakeholders: shareholders vs managers (the classic <strong>principal–agent problem</strong>: entrenchment, empire building, excessive risk aversion), controlling vs minority shareholders, shareholders vs creditors (equity holders prefer risk; debt holders prefer safety). Mechanisms: the <strong>board of directors</strong> (independence, separation of CEO and chair, committees — audit, remuneration, nomination), say-on-pay, activist investors, the takeover market, and legal/regulatory constraints. ESG considerations enter through material environmental and social factors that affect long-term value and risk.</p>",
     "vi": "<p>Quản trị công ty xử lý xung đột giữa các bên liên quan: cổ đông vs ban điều hành (bài toán <strong>người ủy quyền – người đại diện</strong>: cố thủ ghế, xây \"đế chế\", né rủi ro quá mức), cổ đông chi phối vs cổ đông thiểu số, cổ đông vs chủ nợ (cổ đông thích rủi ro, chủ nợ thích an toàn). Cơ chế: <strong>HĐQT</strong> (tính độc lập, tách vai trò CEO và Chủ tịch, các ủy ban kiểm toán/lương thưởng/đề cử), biểu quyết về thù lao, nhà đầu tư chủ động, thị trường thâu tóm, và ràng buộc pháp lý. Yếu tố ESG được xét qua các nhân tố môi trường – xã hội trọng yếu ảnh hưởng giá trị và rủi ro dài hạn.</p>"
    }
   ]
  },
  {
   "title": "Capital Investments: NPV & IRR",
   "sections": [
    {
     "h": "Decision rules",
     "en": "<ul><li><strong>NPV</strong> = present value of all incremental after-tax cash flows minus the initial outlay, discounted at the project’s required return. Accept if NPV &gt; 0 — this directly measures the expected addition to shareholder wealth.</li><li><strong>IRR</strong> = the discount rate that makes NPV = 0. Accept if IRR &gt; required return. Problems: assumes reinvestment at the IRR (often unrealistic), can produce <strong>multiple IRRs</strong> with unconventional cash flows (sign changes), and can <strong>rank mutually exclusive projects incorrectly</strong> when size or timing differs. <em>When NPV and IRR conflict, choose the higher NPV.</em></li><li>Other tools: payback period (ignores time value and cash flows after payback), discounted payback, profitability index (PI = PV of inflows / initial outlay; PI &gt; 1 means NPV &gt; 0 — useful under capital rationing).</li><li>Use only <strong>incremental</strong> cash flows: include opportunity costs and cannibalization/externalities; exclude <strong>sunk costs</strong>; interest costs are excluded from cash flows because they are captured in the discount rate.</li></ul>",
     "vi": "<ul><li><strong>NPV</strong> = giá trị hiện tại của toàn bộ dòng tiền tăng thêm sau thuế trừ vốn đầu tư ban đầu, chiết khấu tại tỷ suất yêu cầu. Chấp nhận nếu NPV &gt; 0 — đo trực tiếp phần giá trị tăng thêm cho cổ đông.</li><li><strong>IRR</strong> = tỷ suất chiết khấu làm NPV = 0. Chấp nhận nếu IRR &gt; tỷ suất yêu cầu. Nhược điểm: giả định tái đầu tư tại IRR (thường phi thực tế), có thể có <strong>nhiều IRR</strong> khi dòng tiền đổi dấu nhiều lần, và có thể <strong>xếp hạng sai các dự án loại trừ lẫn nhau</strong> khi khác quy mô hoặc thời điểm. <em>Khi NPV và IRR mâu thuẫn, chọn theo NPV cao hơn.</em></li><li>Công cụ khác: thời gian hoàn vốn (bỏ qua giá trị thời gian và dòng tiền sau hoàn vốn), hoàn vốn có chiết khấu, chỉ số sinh lời PI.</li><li>Chỉ dùng dòng tiền <strong>tăng thêm</strong>: tính chi phí cơ hội và hiệu ứng \"ăn thịt\" sản phẩm cũ; loại <strong>chi phí chìm</strong>; loại lãi vay khỏi dòng tiền vì đã nằm trong tỷ suất chiết khấu.</li></ul>"
    }
   ]
  },
  {
   "title": "Cost of Capital & Leverage",
   "sections": [
    {
     "h": "WACC and component costs",
     "en": "<p><strong>WACC = w<sub>d</sub>·r<sub>d</sub>(1 − t) + w<sub>p</sub>·r<sub>p</sub> + w<sub>e</sub>·r<sub>e</sub></strong>, with weights at <em>target</em> capital structure based on <em>market values</em>. Only debt gets the tax shield (interest is deductible; dividends are not).</p><ul><li><strong>Cost of debt:</strong> YTM on existing debt or the rate on new borrowing, after tax.</li><li><strong>Cost of preferred:</strong> r<sub>p</sub> = D<sub>p</sub> / P<sub>p</sub>.</li><li><strong>Cost of equity:</strong> CAPM (r<sub>e</sub> = R<sub>f</sub> + β(R<sub>m</sub> − R<sub>f</sub>)), the dividend discount approach (r<sub>e</sub> = D<sub>1</sub>/P<sub>0</sub> + g), or bond yield plus risk premium.</li></ul>",
     "vi": "<p><strong>WACC = w<sub>d</sub>·r<sub>d</sub>(1 − t) + w<sub>p</sub>·r<sub>p</sub> + w<sub>e</sub>·r<sub>e</sub></strong>, với trọng số theo cấu trúc vốn <em>mục tiêu</em> tính trên <em>giá trị thị trường</em>. Chỉ nợ vay có lá chắn thuế (lãi vay được khấu trừ thuế; cổ tức thì không).</p><ul><li><strong>Chi phí nợ:</strong> YTM của nợ hiện hữu hoặc lãi suất vay mới, sau thuế.</li><li><strong>Chi phí CP ưu đãi:</strong> r<sub>p</sub> = D<sub>p</sub> / P<sub>p</sub>.</li><li><strong>Chi phí VCSH:</strong> CAPM (r<sub>e</sub> = R<sub>f</sub> + β(R<sub>m</sub> − R<sub>f</sub>)), mô hình chiết khấu cổ tức (r<sub>e</sub> = D<sub>1</sub>/P<sub>0</sub> + g), hoặc lợi suất trái phiếu + phần bù rủi ro.</li></ul>"
    },
    {
     "h": "Operating and financial leverage",
     "en": "<ul><li><strong>DOL</strong> (degree of operating leverage) = %Δ operating income / %Δ sales = contribution margin / operating income. Driven by fixed <em>operating</em> costs.</li><li><strong>DFL</strong> (degree of financial leverage) = %Δ net income / %Δ operating income = EBIT / (EBIT − interest). Driven by fixed <em>financing</em> costs.</li><li><strong>DTL = DOL × DFL</strong> — total sensitivity of net income to sales.</li><li>Business risk (sales + operating risk) plus financial risk determine total leverage. Higher leverage raises the breakeven point and magnifies both gains and losses. Modigliani–Miller: without taxes, capital structure is irrelevant; with taxes, debt adds value via the tax shield until financial distress and agency costs offset it (the static trade-off theory → an optimal capital structure).</li></ul>",
     "vi": "<ul><li><strong>DOL</strong> = %Δ lợi nhuận hoạt động / %Δ doanh thu = số dư đảm phí / lợi nhuận hoạt động. Do chi phí <em>hoạt động</em> cố định tạo ra.</li><li><strong>DFL</strong> = %Δ LN ròng / %Δ lợi nhuận hoạt động = EBIT / (EBIT − lãi vay). Do chi phí <em>tài chính</em> cố định tạo ra.</li><li><strong>DTL = DOL × DFL</strong> — độ nhạy tổng hợp của LN ròng theo doanh thu.</li><li>Rủi ro kinh doanh + rủi ro tài chính quyết định tổng đòn bẩy. Đòn bẩy cao nâng điểm hòa vốn và khuếch đại cả lãi lẫn lỗ. Modigliani–Miller: không thuế → cấu trúc vốn không quan trọng; có thuế → nợ tạo giá trị nhờ lá chắn thuế cho tới khi chi phí kiệt quệ tài chính và chi phí đại diện triệt tiêu (lý thuyết đánh đổi tĩnh → tồn tại cấu trúc vốn tối ưu).</li></ul>"
    }
   ],
   "formulas": [
    [
     "NPV",
     "NPV = Σ CFt/(1+r)^t − Initial outlay",
     "Accept if NPV > 0"
    ],
    [
     "WACC",
     "wd·rd(1−t) + wp·rp + we·re",
     "Market-value target weights"
    ],
    [
     "CAPM",
     "re = Rf + β(Rm − Rf)",
     ""
    ],
    [
     "Cost of preferred",
     "rp = Dp / Pp",
     ""
    ],
    [
     "DOL",
     "Q(P−V) / [Q(P−V) − F]",
     "= CM / operating income"
    ],
    [
     "DFL",
     "EBIT / (EBIT − Interest)",
     ""
    ],
    [
     "Breakeven quantity",
     "Q = (F + Interest) / (P − V)",
     "Operating breakeven excludes interest"
    ]
   ]
  }
 ],
 "vocab": [
  [
   "agency cost",
   "Cost arising from conflicts between managers (agents) and owners (principals).",
   "chi phí đại diện"
  ],
  [
   "staggered board",
   "Board whose members are elected in different years (anti-takeover feature).",
   "HĐQT bầu so le"
  ],
  [
   "sunk cost",
   "A past cost that cannot be recovered — irrelevant to decisions.",
   "chi phí chìm"
  ],
  [
   "cannibalization",
   "New project reducing sales of the firm’s existing products.",
   "hiệu ứng ăn mòn doanh thu nội bộ"
  ],
  [
   "capital rationing",
   "A fixed capital budget forcing project selection to maximize total NPV.",
   "hạn mức vốn đầu tư"
  ],
  [
   "tax shield",
   "Tax savings from deductible interest expense.",
   "lá chắn thuế"
  ],
  [
   "contribution margin",
   "Price minus variable cost per unit.",
   "số dư đảm phí"
  ],
  [
   "financial distress",
   "Costs and risks of difficulty meeting debt obligations.",
   "kiệt quệ tài chính"
  ],
  [
   "pecking order theory",
   "Firms prefer internal funds, then debt, then equity (information asymmetry).",
   "lý thuyết trật tự phân hạng"
  ],
  [
   "share repurchase",
   "Company buying back its own shares — an alternative to dividends.",
   "mua lại cổ phiếu"
  ]
 ],
 "quiz": [
  {
   "q": "Two mutually exclusive projects have conflicting NPV and IRR rankings. A firm that wants to maximize shareholder wealth should choose the project with the:",
   "opts": [
    "higher IRR.",
    "higher NPV.",
    "shorter payback period."
   ],
   "ans": 1,
   "en": "B is correct. NPV measures the direct addition to shareholder wealth in currency terms and assumes reinvestment at the (more realistic) required rate of return. IRR can mis-rank projects of different scale or cash-flow timing.",
   "vi": "Đáp án B. NPV đo trực tiếp phần giá trị tăng thêm cho cổ đông bằng tiền và giả định tái đầu tư tại tỷ suất yêu cầu (thực tế hơn). IRR có thể xếp hạng sai khi các dự án khác quy mô hoặc thời điểm dòng tiền."
  },
  {
   "q": "A company has a target structure of 40% debt and 60% equity. Pre-tax cost of debt is 6%, cost of equity is 12%, and the tax rate is 25%. WACC is closest to:",
   "opts": [
    "9.0%",
    "9.6%",
    "7.8%"
   ],
   "ans": 0,
   "en": "A is correct. WACC = 0.40 × 6% × (1 − 0.25) + 0.60 × 12% = 0.40 × 4.5% + 7.2% = 1.8% + 7.2% = 9.0%. Remember: only the debt component is tax-adjusted.",
   "vi": "Đáp án A. WACC = 0.40 × 6% × (1 − 0.25) + 0.60 × 12% = 1.8% + 7.2% = 9.0%. Nhớ: chỉ chi phí nợ được điều chỉnh thuế."
  },
  {
   "q": "A firm with high fixed operating costs relative to variable costs will most likely have:",
   "opts": [
    "a high degree of operating leverage and more volatile operating income.",
    "a low breakeven point.",
    "a high degree of financial leverage."
   ],
   "ans": 0,
   "en": "A is correct. High fixed operating costs mean each unit of sales beyond breakeven adds more to operating income — DOL is high and operating income is more sensitive to sales changes. The breakeven point is higher, not lower, and DFL relates to interest costs, not operating costs.",
   "vi": "Đáp án A. Chi phí hoạt động cố định cao nghĩa là mỗi đơn vị doanh thu vượt điểm hòa vốn đóng góp nhiều hơn vào lợi nhuận — DOL cao, lợi nhuận hoạt động biến động mạnh theo doanh thu. Điểm hòa vốn cao hơn chứ không thấp hơn, còn DFL liên quan lãi vay, không phải chi phí hoạt động."
  },
  {
   "q": "When evaluating a capital project, which of the following should be excluded from the incremental cash flows?",
   "opts": [
    "An opportunity cost of using land the firm already owns",
    "Expected cannibalization of an existing product line",
    "Consulting fees already paid for a feasibility study"
   ],
   "ans": 2,
   "en": "C is correct. Fees already paid are sunk costs — unrecoverable regardless of the decision — and must be excluded. Opportunity costs and cannibalization are genuine incremental effects and must be included.",
   "vi": "Đáp án C. Phí đã trả là chi phí chìm — không thu hồi được dù quyết định thế nào — nên phải loại. Chi phí cơ hội và cannibalization là tác động tăng thêm thật sự nên phải tính vào."
  }
 ]
});
window.CFA.extra["corp"] = {
 "checks": [
  [
   {
    "q": "The classic principal–agent conflict in a public company is between:",
    "opts": [
     "Customers and suppliers",
     "Shareholders (principals) and managers (agents)",
     "Bondholders and regulators"
    ],
    "ans": 1,
    "en": "Managers control decisions but shareholders bear the wealth effects — misaligned incentives create agency costs that governance mechanisms try to reduce.",
    "vi": "Cổ đông (principal) chịu kết quả nhưng nhà quản lý (agent) ra quyết định — lệch pha lợi ích tạo chi phí đại diện, và cơ chế quản trị công ty sinh ra để giảm nó."
   },
   {
    "q": "Which board feature best strengthens oversight of financial reporting?",
    "opts": [
     "The CEO chairing the audit committee",
     "An audit committee composed of independent directors with financial expertise",
     "Staggered board elections"
    ],
    "ans": 1,
    "en": "Independence plus financial expertise on the audit committee is a core governance safeguard for reporting integrity.",
    "vi": "Ủy ban kiểm toán gồm thành viên độc lập, am hiểu tài chính là chốt chặn quản trị quan trọng nhất cho chất lượng báo cáo tài chính."
   }
  ],
  [
   {
    "q": "When NPV and IRR rank two mutually exclusive projects differently, the firm should choose the project with the:",
    "opts": [
     "Higher IRR",
     "Higher NPV",
     "Shorter payback"
    ],
    "ans": 1,
    "en": "NPV measures value added in currency terms and uses a consistent reinvestment assumption — it wins every conflict with IRR.",
    "vi": "NPV đo giá trị tăng thêm bằng tiền và có giả định tái đầu tư hợp lý hơn — khi mâu thuẫn với IRR, luôn chọn theo NPV."
   },
   {
    "q": "A project’s cash flows change sign more than once over its life. A likely analytical problem is:",
    "opts": [
     "NPV cannot be computed",
     "Multiple IRRs (or no IRR) may exist",
     "The payback period becomes negative"
    ],
    "ans": 1,
    "en": "Non-conventional cash flows can produce multiple or no IRRs — another reason NPV is the primary criterion.",
    "vi": "Dòng tiền đổi dấu nhiều lần có thể tạo ra nhiều IRR hoặc không có IRR — thêm một lý do để ưu tiên NPV."
   }
  ],
  [
   {
    "q": "In the WACC formula, the tax adjustment (1 − t) applies to:",
    "opts": [
     "The cost of equity",
     "The cost of debt only",
     "All capital components"
    ],
    "ans": 1,
    "en": "Interest is tax-deductible, so debt’s after-tax cost is rd(1 − t). Dividends are not deductible — equity costs are not adjusted.",
    "vi": "Chỉ chi phí nợ được điều chỉnh thuế vì lãi vay được khấu trừ thuế: rd(1 − t). Cổ tức không được khấu trừ nên chi phí vốn cổ phần giữ nguyên."
   },
   {
    "q": "A firm with a high degree of operating leverage (DOL) most likely has:",
    "opts": [
     "High variable costs relative to fixed costs",
     "High fixed costs, so operating income is very sensitive to sales changes",
     "Low breakeven output"
    ],
    "ans": 1,
    "en": "High fixed costs amplify the effect of sales changes on operating income — profits swing harder in both directions.",
    "vi": "DOL cao = chi phí cố định lớn → lợi nhuận hoạt động biến động mạnh theo doanh thu, cả chiều tăng lẫn chiều giảm."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "A project costs $100 today and returns $60 at the end of each of years 1 and 2. At a 10% required return, its NPV is closest to:",
    "opts": [
     "+$4.13",
     "+$20.00",
     "−$4.13"
    ],
    "ans": 0,
    "en": "NPV = −100 + 60/1.10 + 60/1.10² = −100 + 54.55 + 49.59 ≈ +$4.13 → accept.",
    "vi": "NPV = −100 + 54,55 + 49,59 ≈ +4,13 USD &gt; 0 → chấp nhận dự án."
   },
   {
    "q": "Risk-free rate 3%, beta 1.2, equity risk premium 5%. The CAPM cost of equity is:",
    "opts": [
     "8.0%",
     "9.0%",
     "6.6%"
    ],
    "ans": 1,
    "en": "re = 3% + 1.2 × 5% = 9%.",
    "vi": "re = 3% + 1,2 × 5% = 9% theo CAPM."
   },
   {
    "q": "Preferred stock pays a $5 fixed dividend and trades at $62.50. The cost of preferred equity is:",
    "opts": [
     "8.0%",
     "12.5%",
     "5.0%"
    ],
    "ans": 0,
    "en": "rp = Dp / Pp = 5 / 62.50 = 8%.",
    "vi": "Chi phí vốn cổ phần ưu đãi = cổ tức / giá = 5 / 62,5 = 8%."
   },
   {
    "q": "DOL is 2.0 and DFL is 1.5. A 10% increase in sales changes net income by approximately:",
    "opts": [
     "+15%",
     "+30%",
     "+20%"
    ],
    "ans": 1,
    "en": "DTL = DOL × DFL = 3.0 → ΔNI ≈ 3.0 × 10% = +30%.",
    "vi": "DTL = 2,0 × 1,5 = 3,0 → lợi nhuận ròng tăng xấp xỉ 30% khi doanh thu tăng 10%."
   },
   {
    "q": "The most serious flaws of the payback-period rule are that it ignores:",
    "opts": [
     "Project size and taxes",
     "The time value of money and all cash flows after payback",
     "Depreciation and working capital"
    ],
    "ans": 1,
    "en": "Payback measures liquidity, not value: it discounts nothing and drops post-payback cash flows entirely.",
    "vi": "Payback chỉ đo tính thanh khoản: không chiết khấu dòng tiền và bỏ qua toàn bộ dòng tiền sau điểm hoàn vốn."
   },
   {
    "q": "In capital allocation, the cash flows that matter are:",
    "opts": [
     "Total accounting profits including sunk costs",
     "Incremental after-tax cash flows, including opportunity costs but excluding sunk costs",
     "Pre-tax operating income"
    ],
    "ans": 1,
    "en": "Decisions rest on incremental after-tax cash flow: count opportunity costs and side effects, ignore sunk costs and (in the base analysis) financing charges.",
    "vi": "Thẩm định dự án dựa trên dòng tiền tăng thêm sau thuế: tính chi phí cơ hội và tác động chéo, bỏ qua chi phí chìm và chi phí tài trợ (đã nằm trong suất chiết khấu)."
   }
  ],
  [
   {
    "q": "A firm spent $2 million on research before evaluating whether to launch the resulting product. In the launch decision, the $2 million is:",
    "opts": [
     "An opportunity cost to include",
     "A sunk cost to exclude",
     "An externality to include"
    ],
    "ans": 1,
    "en": "Money already spent is unrecoverable regardless of the decision — sunk costs never belong in NPV analysis.",
    "vi": "Khoản đã chi không thể thu hồi dù quyết định thế nào — chi phí chìm không được đưa vào NPV."
   },
   {
    "q": "Capital structure: 60% equity costing 10%; 40% debt costing 5% pre-tax; tax rate 25%. WACC is:",
    "opts": [
     "7.5%",
     "8.0%",
     "6.9%"
    ],
    "ans": 0,
    "en": "WACC = 0.6 × 10% + 0.4 × 5% × (1 − 0.25) = 6% + 1.5% = 7.5%.",
    "vi": "WACC = 0,6 × 10% + 0,4 × 5% × 0,75 = 7,5%."
   },
   {
    "q": "Business risk differs from financial risk in that business risk reflects:",
    "opts": [
     "The use of debt financing",
     "Operating earnings variability from the firm’s industry, demand, and cost structure",
     "Only currency exposure"
    ],
    "ans": 1,
    "en": "Business risk = variability of operating income (sales risk + operating leverage). Financial risk is the extra equity-holder risk added by debt.",
    "vi": "Rủi ro kinh doanh = biến động của lợi nhuận hoạt động (rủi ro doanh thu + đòn bẩy hoạt động). Rủi ro tài chính là phần rủi ro thêm cho cổ đông do dùng nợ."
   },
   {
    "q": "Holding price and variable cost per unit constant, an increase in fixed costs will:",
    "opts": [
     "Lower the breakeven quantity",
     "Raise the breakeven quantity",
     "Not affect breakeven"
    ],
    "ans": 1,
    "en": "QBE = F / (P − V): higher fixed costs require more units to cover them.",
    "vi": "Q hòa vốn = F / (P − V): chi phí cố định tăng thì cần bán nhiều đơn vị hơn mới hòa vốn."
   },
   {
    "q": "Shareholders of a highly leveraged firm may prefer riskier projects than bondholders would like because shareholders:",
    "opts": [
     "Bear all downside",
     "Capture the upside while bondholders bear much of the added downside risk",
     "Receive fixed payments"
    ],
    "ans": 1,
    "en": "With debt outstanding, equity resembles a call option on firm value — risk-shifting benefits shareholders at creditors’ expense, a classic stakeholder conflict.",
    "vi": "Khi công ty vay nợ nhiều, cổ đông hưởng phần lợi nhuận tăng thêm còn trái chủ gánh phần lớn rủi ro giảm giá trị — xung đột cổ đông–trái chủ kinh điển."
   },
   {
    "q": "“Say on pay” provisions primarily give shareholders:",
    "opts": [
     "The right to set executive salaries directly",
     "An advisory or binding vote on executive compensation",
     "Board seats"
    ],
    "ans": 1,
    "en": "Say-on-pay votes let shareholders express approval of compensation policy — a governance tool aligning pay with performance.",
    "vi": "“Say on pay” cho cổ đông quyền biểu quyết (tư vấn hoặc ràng buộc) về chính sách thù lao lãnh đạo — công cụ gắn lương thưởng với hiệu quả."
   }
  ]
 ]
};
