/* =====================================================================
   Topic 04 — Financial Statement Analysis
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
 "id": "fsa",
 "num": "04",
 "name": "Financial Statement Analysis",
 "vi": "Phân tích báo cáo tài chính",
 "w": [
  11,
  14
 ],
 "blurb": "The three statements, revenue and expense recognition, inventories, long-lived assets, cash flows, ratios and financial analysis techniques.",
 "intro": {
  "en": "Financial Statement Analysis is the exam's largest topic, spanning eleven learning modules: the reporting framework; income statements, balance sheets, and two modules on cash flow statements; then the analyst's core toolkit — inventories, long-term assets, liabilities and equity, income taxes, ratio analysis, and financial modeling. Every module below pairs the theory with diagrams and fully worked numeric examples — EPS with dilution, inventory conversions, bond schedules, deferred taxes, full DuPont — then drill the Quick checks and Practice Sets B–D.",
  "vi": "Financial Statement Analysis là topic lớn nhất kỳ thi, gồm mười một learning modules: khung báo cáo; income statement, balance sheet và hai module về cash flow; rồi bộ công cụ cốt lõi của nhà phân tích — tồn kho, tài sản dài hạn, nợ và vốn chủ, thuế thu nhập, phân tích ratio, và mô hình tài chính. Mỗi module bên dưới kết hợp lý thuyết với sơ đồ và ví dụ số giải trọn vẹn — EPS pha loãng, quy đổi tồn kho, lịch trái phiếu, deferred tax, DuPont đầy đủ — sau đó luyện Quick checks và Practice Sets B–D."
 },
 "modules": [
  {
   "title": "Introduction to Financial Statement Analysis",
   "sections": [
    {
     "h": "What financial statements do — and where analysts look beyond them",
     "en": "<ul><li><strong>Purpose:</strong> financial reporting provides information about a company’s performance (income statement), financial position (balance sheet), and cash generation (cash flow statement) that is useful to investors and lenders. The <strong>statement of changes in equity</strong> reconciles opening to closing equity; the <strong>notes (footnotes)</strong> disclose accounting policies, estimates, and detail — they are <em>integral</em> to the statements and covered by the audit.</li><li><strong>Beyond the statements:</strong> <strong>MD&amp;A</strong> (management discussion &amp; analysis — trends, liquidity, critical estimates; <em>not audited</em>), interim reports (reviewed, not audited), proxy statements (governance, compensation), earnings calls, and regulatory filings. Analysts also use industry data and comparables.</li><li><strong>The financial statement analysis framework</strong> — six steps to structure any engagement: (1) state the purpose and context, (2) collect data, (3) process data (adjustments, common-size, ratios), (4) analyze and interpret, (5) conclude and recommend, (6) follow up. The framework question on the exam usually tests the order or which step an activity belongs to.</li></ul>",
     "vi": "<ul><li><strong>Mục đích:</strong> báo cáo tài chính cung cấp thông tin về kết quả kinh doanh (báo cáo KQKD), tình hình tài chính (bảng CĐKT) và khả năng tạo tiền (báo cáo LCTT) hữu ích cho nhà đầu tư và chủ nợ. <strong>Báo cáo thay đổi VCSH</strong> đối chiếu vốn chủ đầu kỳ – cuối kỳ; <strong>thuyết minh</strong> công bố chính sách kế toán, ước tính và chi tiết — là bộ phận <em>không tách rời</em> của báo cáo và nằm trong phạm vi kiểm toán.</li><li><strong>Ngoài báo cáo:</strong> <strong>MD&amp;A</strong> (phân tích của ban điều hành — xu hướng, thanh khoản, ước tính trọng yếu; <em>không được kiểm toán</em>), báo cáo giữa niên độ (soát xét, không kiểm toán), proxy statement (quản trị, thù lao), earnings call, hồ sơ nộp cơ quan quản lý. Analyst còn dùng dữ liệu ngành và doanh nghiệp so sánh.</li><li><strong>Khung phân tích BCTC</strong> — 6 bước: (1) xác định mục đích và bối cảnh, (2) thu thập dữ liệu, (3) xử lý dữ liệu (điều chỉnh, common-size, chỉ số), (4) phân tích và diễn giải, (5) kết luận và khuyến nghị, (6) theo dõi cập nhật. Câu hỏi thi thường kiểm tra thứ tự hoặc một hoạt động thuộc bước nào.</li></ul>"
    },
    {
     "h": "How the statements connect",
     "en": "<ul><li><strong>Income statement:</strong> Revenue − Expenses = Net income, over a <em>period</em>. Built on <strong>accrual accounting</strong>: revenue is recognized when the performance obligation is satisfied (goods/services transferred), not when cash arrives — the 5-step model of IFRS 15 / ASC 606.</li><li><strong>Balance sheet:</strong> Assets = Liabilities + Equity, at a <em>point in time</em>. Ending equity = beginning equity + net income − dividends + other comprehensive income + net share issuance.</li><li><strong>Cash flow statement:</strong> reconciles beginning to ending cash across operating (CFO), investing (CFI), and financing (CFF) activities. Net income ≠ cash: accruals (receivables, payables, inventory) drive the gap.</li><li>Under <strong>IFRS</strong>, interest paid may be CFO or CFF and dividends received CFO or CFI; under <strong>US GAAP</strong>, interest paid/received and dividends received are CFO, dividends paid are CFF.</li></ul>",
     "vi": "<ul><li><strong>Báo cáo KQKD:</strong> Doanh thu − Chi phí = LN ròng, trong một <em>kỳ</em>. Dựa trên <strong>kế toán dồn tích</strong>: doanh thu ghi nhận khi nghĩa vụ thực hiện được hoàn thành (hàng hóa/dịch vụ được chuyển giao), không phải khi thu tiền — mô hình 5 bước của IFRS 15 / ASC 606.</li><li><strong>Bảng CĐKT:</strong> Tài sản = Nợ + VCSH, tại một <em>thời điểm</em>. VCSH cuối kỳ = đầu kỳ + LN ròng − cổ tức + thu nhập toàn diện khác + phát hành CP ròng.</li><li><strong>Báo cáo LCTT:</strong> đối chiếu tiền đầu kỳ và cuối kỳ qua ba hoạt động: kinh doanh (CFO), đầu tư (CFI), tài chính (CFF). LN ròng ≠ tiền: các khoản dồn tích (phải thu, phải trả, tồn kho) tạo ra chênh lệch.</li><li>Theo <strong>IFRS</strong>, lãi vay trả có thể vào CFO hoặc CFF, cổ tức nhận vào CFO hoặc CFI; theo <strong>US GAAP</strong>, lãi vay trả/nhận và cổ tức nhận vào CFO, cổ tức trả vào CFF.</li></ul>"
    },
    {
     "h": "The auditor’s report — opinions you must distinguish",
     "en": "<ul><li>An independent audit provides <strong>reasonable assurance</strong> (not a guarantee) that the statements are free of <em>material</em> misstatement and prepared in accordance with the applicable standards (IFRS/US GAAP). The audit does not certify that the company is a good investment.</li><li><strong>Opinion types:</strong> <strong>unqualified/unmodified (\"clean\")</strong> — statements presented fairly; <strong>qualified</strong> — fair <em>\"except for\"</em> a specific, limited issue; <strong>adverse</strong> — statements are materially misstated and unreliable; <strong>disclaimer of opinion</strong> — the auditor could not obtain sufficient evidence to form an opinion.</li><li><strong>Extra signals:</strong> a <strong>going-concern</strong> paragraph flags substantial doubt about survival over the next year. Key audit matters / critical audit matters highlight the areas involving the most judgment. For US-listed firms, the auditor also opines on <strong>internal control over financial reporting</strong> (Sarbanes-Oxley).</li></ul>",
     "vi": "<ul><li>Kiểm toán độc lập cung cấp <strong>sự bảo đảm hợp lý</strong> (không phải bảo đảm tuyệt đối) rằng báo cáo không còn sai sót <em>trọng yếu</em> và được lập theo chuẩn mực áp dụng (IFRS/US GAAP). Kiểm toán không chứng nhận công ty là khoản đầu tư tốt.</li><li><strong>Các loại ý kiến:</strong> <strong>chấp nhận toàn phần (unqualified/unmodified)</strong> — trình bày trung thực hợp lý; <strong>ngoại trừ (qualified)</strong> — trung thực <em>\"ngoại trừ\"</em> một vấn đề cụ thể, giới hạn; <strong>trái ngược (adverse)</strong> — báo cáo sai sót trọng yếu, không đáng tin; <strong>từ chối đưa ý kiến (disclaimer)</strong> — không thu thập đủ bằng chứng để kết luận.</li><li><strong>Tín hiệu bổ sung:</strong> đoạn <strong>going-concern</strong> cảnh báo nghi ngờ đáng kể về khả năng hoạt động liên tục trong 12 tháng tới. Key/critical audit matters chỉ ra các vùng nhiều xét đoán nhất. Với công ty niêm yết ở Mỹ, kiểm toán viên còn cho ý kiến về <strong>kiểm soát nội bộ đối với BCTC</strong> (Sarbanes-Oxley).</li></ul>"
    },
    {
     "h": "Follow one transaction through all three statements",
     "en": "<svg viewBox=\"0 0 720 350\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"How the three financial statements connect\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">How the three statements connect</text>\n<rect x=\"40\" y=\"60\" width=\"200\" height=\"110\" rx=\"10\" fill=\"#EEF0FE\" stroke=\"#5457E0\" stroke-width=\"1.5\"/>\n<text x=\"140\" y=\"84\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#4338CA\">Income statement</text>\n<text x=\"140\" y=\"106\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#1B2438\">Revenue − expenses</text>\n<text x=\"140\" y=\"124\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#1B2438\">= Net income</text>\n<text x=\"140\" y=\"150\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">(includes depreciation — non-cash)</text>\n<rect x=\"460\" y=\"60\" width=\"220\" height=\"110\" rx=\"10\" fill=\"#E7F6F0\" stroke=\"#0F9573\" stroke-width=\"1.5\"/>\n<text x=\"570\" y=\"84\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F9573\">Balance sheet</text>\n<text x=\"570\" y=\"106\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#1B2438\">Assets = Liabilities + Equity</text>\n<text x=\"570\" y=\"126\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">Retained earnings ← NI − dividends</text>\n<text x=\"570\" y=\"144\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">Cash ← ending cash from CF stmt</text>\n<rect x=\"230\" y=\"220\" width=\"260\" height=\"100\" rx=\"10\" fill=\"#FBF3E4\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n<text x=\"360\" y=\"244\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#B45309\">Cash flow statement</text>\n<text x=\"360\" y=\"266\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#1B2438\">Starts from NI (indirect CFO)</text>\n<text x=\"360\" y=\"284\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#1B2438\">CFO + CFI + CFF = Δcash</text>\n<text x=\"360\" y=\"302\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">uses ΔBS working-capital accounts</text>\n<path d=\"M 240 115 L 452 115\" stroke=\"#5457E0\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#a1)\"/>\n<text x=\"346\" y=\"105\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5457E0\" font-weight=\"600\">NI → retained earnings</text>\n<path d=\"M 140 172 C 150 210 190 240 226 250\" stroke=\"#B45309\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#a2)\"/>\n<text x=\"128\" y=\"212\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#B45309\" font-weight=\"600\">NI starts CFO</text>\n<path d=\"M 492 250 C 540 240 560 210 568 174\" stroke=\"#0F9573\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#a3)\"/>\n<text x=\"596\" y=\"212\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#0F9573\" font-weight=\"600\">Δcash → cash balance</text>\n<defs>\n<marker id=\"a1\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#5457E0\"/></marker>\n<marker id=\"a2\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B45309\"/></marker>\n<marker id=\"a3\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#0F9573\"/></marker>\n</defs>\n</svg>\n<p><strong>The fastest way to internalize the linkage is to push one item through the whole system.</strong> Take $100 of depreciation (tax ignored for clarity):</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Statement</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Effect</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Income statement</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Depreciation expense +100 → net income <strong>−100</strong></td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Balance sheet</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Accumulated depreciation +100 → net PP&E <strong>−100</strong>; retained earnings <strong>−100</strong> (via NI). A = L + E still balances.</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Cash flow statement</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Indirect CFO starts at NI (−100) then <strong>adds back +100</strong> (non-cash) → CFO unchanged. Cash untouched — as it should be.</td></tr></table>\n<p>Run the same drill with a $500 credit sale: revenue +500, NI +500; receivables +500 and retained earnings +500 on the balance sheet; CFO starts +500 but the <em>increase in receivables is subtracted</em> −500 → no cash yet. Working-capital adjustments in the indirect method exist precisely to undo accruals.</p>\n<p><strong>Where analysts look beyond the statements.</strong> The <strong>notes/footnotes</strong> (accounting policies, estimates, segment data — audited) and <strong>MD&A</strong> (management's view of results, trends, and risks — <em>unaudited</em>) often matter more than the face statements. Add the proxy statement (compensation, governance), earnings calls, and interim reports (reviewed, not audited). The financial statement analysis framework runs: define the purpose → collect data → process it → analyze/interpret → conclude/recommend → follow up. Exam questions usually test which phase an activity belongs to — computing ratios is <em>process</em>; explaining what they mean is <em>analyze</em>.</p>",
     "vi": "<p><strong>Cách nhanh nhất để \"thấm\" liên kết ba báo cáo là đẩy một khoản mục xuyên suốt cả hệ thống.</strong> Lấy $100 khấu hao (bỏ qua thuế cho gọn): Income statement — chi phí khấu hao +100 → NI <strong>−100</strong>. Balance sheet — khấu hao lũy kế +100 → PP&E ròng <strong>−100</strong>; lợi nhuận giữ lại <strong>−100</strong> (qua NI); A = L + E vẫn cân. Cash flow — CFO gián tiếp bắt đầu từ NI (−100) rồi <strong>cộng ngược +100</strong> (không phải tiền mặt) → CFO không đổi. Tiền mặt không suy suyển — đúng bản chất.</p>\n<p>Làm lại với khoản bán chịu $500: doanh thu +500, NI +500; phải thu +500 và lợi nhuận giữ lại +500 trên balance sheet; CFO bắt đầu +500 nhưng <em>mức tăng phải thu bị trừ đi</em> −500 → chưa có tiền thật. Các điều chỉnh vốn lưu động trong phương pháp gián tiếp tồn tại chính là để \"gỡ\" accruals.</p>\n<p><strong>Nhà phân tích nhìn xa hơn báo cáo ở đâu.</strong> <strong>Thuyết minh/footnotes</strong> (chính sách kế toán, ước tính, dữ liệu bộ phận — được kiểm toán) và <strong>MD&A</strong> (góc nhìn của ban điều hành về kết quả, xu hướng, rủi ro — <em>không được kiểm toán</em>) thường quan trọng hơn cả mặt báo cáo. Thêm proxy statement (thù lao, quản trị), earnings calls, và báo cáo giữa kỳ (chỉ soát xét, không kiểm toán). Khung phân tích BCTC: xác định mục đích → thu thập dữ liệu → xử lý → phân tích/diễn giải → kết luận/khuyến nghị → theo dõi. Đề thường hỏi hoạt động thuộc bước nào — tính ratio là <em>xử lý</em>; giải thích ý nghĩa là <em>phân tích</em>.</p>"
    }
   ],
   "formulas": [
    [
     "Accounting equation",
     "Assets = Liabilities + Equity",
     "Every transaction keeps it balanced — double entry."
    ],
    [
     "Retained earnings roll-forward",
     "ending RE = beginning RE + NI − dividends",
     "The bridge from income statement to balance sheet."
    ]
   ]
  },
  {
   "title": "Analyzing Income Statements",
   "sections": [
    {
     "h": "Revenue & expense recognition; non-recurring items",
     "en": "<ul><li><strong>Revenue — the five-step model</strong> (IFRS 15/ASC 606): (1) identify the contract; (2) identify the distinct <em>performance obligations</em>; (3) determine the transaction price; (4) allocate the price to the obligations; (5) recognize revenue <em>when (or as) each obligation is satisfied</em> — at a point in time or over time (e.g., long-term construction by progress toward completion). Principal (report gross revenue) vs agent (report only the net fee) is a recurring exam distinction.</li><li><strong>Expense recognition:</strong> match costs to the revenue they generate (COGS, warranties estimated at sale); period costs (admin) are expensed as incurred; capitalize-then-depreciate spreads long-lived asset costs. Aggressive capitalization or under-accrual of warranty/bad-debt expense inflates current earnings — classic quality red flags.</li><li><strong>Non-recurring items</strong> — crucial for forecasting: <strong>discontinued operations</strong> are reported separately, <em>net of tax, below</em> income from continuing operations (exclude them when projecting); <strong>unusual or infrequent items</strong> (restructuring, asset write-downs, gains on sales) stay <em>within</em> continuing operations, pre-tax, but deserve scrutiny; a <strong>change in accounting policy</strong> is applied retrospectively (restate prior periods), while a <strong>change in estimate</strong> (useful life, bad-debt rate) is applied prospectively, and a correction of a prior-period <strong>error</strong> is a restatement.</li></ul>",
     "vi": "<ul><li><strong>Doanh thu — mô hình 5 bước</strong> (IFRS 15/ASC 606): (1) xác định hợp đồng; (2) xác định các <em>nghĩa vụ thực hiện</em> tách biệt; (3) xác định giá giao dịch; (4) phân bổ giá cho từng nghĩa vụ; (5) ghi nhận doanh thu <em>khi (hoặc trong quá trình) nghĩa vụ được hoàn thành</em> — tại một thời điểm hoặc theo tiến độ (xây dựng dài hạn theo mức độ hoàn thành). Phân biệt principal (ghi doanh thu gộp) vs agent (chỉ ghi phí ròng) là điểm thi lặp lại.</li><li><strong>Ghi nhận chi phí:</strong> khớp chi phí với doanh thu nó tạo ra (COGS, bảo hành ước tính ngay khi bán); chi phí thời kỳ (quản lý) ghi khi phát sinh; vốn hóa rồi khấu hao dàn trải chi phí tài sản dài hạn. Vốn hóa quá tay hoặc trích lập thiếu chi phí bảo hành/nợ xấu sẽ thổi phồng lợi nhuận hiện tại — cờ đỏ kinh điển về chất lượng lợi nhuận.</li><li><strong>Khoản mục không thường xuyên</strong> — quan trọng khi dự phóng: <strong>hoạt động chấm dứt</strong> trình bày riêng, <em>sau thuế, bên dưới</em> lợi nhuận từ hoạt động tiếp tục (loại ra khi dự phóng); <strong>khoản bất thường/không thường xuyên</strong> (tái cấu trúc, ghi giảm tài sản, lãi thanh lý) nằm <em>trong</em> hoạt động tiếp tục, trước thuế, nhưng cần soi kỹ; <strong>thay đổi chính sách kế toán</strong> áp dụng hồi tố (điều chỉnh kỳ trước), <strong>thay đổi ước tính</strong> (thời gian sử dụng, tỷ lệ nợ xấu) áp dụng phi hồi tố, còn sửa <strong>sai sót</strong> kỳ trước là restatement.</li></ul>"
    },
    {
     "h": "EPS — basic and diluted (calculations)",
     "en": "<p><strong>Basic EPS = (Net income − preferred dividends) / weighted-average shares outstanding.</strong> Weight shares by the fraction of the year outstanding; stock splits and stock dividends are applied retroactively to all periods.</p><p><strong>Diluted EPS</strong> asks: what if every potentially dilutive security converted? Include a security only if it <em>lowers</em> EPS (antidilutive securities are excluded):</p><ul><li><strong>Convertible preferred (if-converted):</strong> add back preferred dividends to the numerator; add conversion shares to the denominator.</li><li><strong>Convertible debt (if-converted):</strong> add back after-tax interest saved: + interest × (1 − t); add conversion shares.</li><li><strong>Options/warrants (treasury stock method):</strong> assume exercise at the strike; assumed proceeds repurchase shares at the <em>average</em> market price. Incremental shares = N − (N × strike)/avg price. Options are dilutive only when the average market price exceeds the strike.</li></ul><p><em>Worked example:</em> NI $1,000; 100 shares all year; 20 options, strike $25, average price $50. Proceeds = 500 → buy back 10 shares → +10 incremental shares. Basic EPS = 10.00; diluted = 1,000/110 = $9.09.</p>",
     "vi": "<p><strong>EPS cơ bản = (LN ròng − cổ tức ưu đãi) / số cổ phiếu bình quân gia quyền.</strong> Cổ phiếu tính theo tỷ lệ thời gian lưu hành trong năm; chia tách và cổ tức bằng cổ phiếu áp hồi tố cho mọi kỳ.</p><p><strong>EPS pha loãng</strong> hỏi: nếu mọi chứng khoán có khả năng pha loãng đều chuyển đổi thì sao? Chỉ tính chứng khoán làm EPS <em>giảm</em> (antidilutive thì loại):</p><ul><li><strong>Cổ phiếu ưu đãi chuyển đổi (if-converted):</strong> cộng lại cổ tức ưu đãi vào tử số; cộng số cổ phiếu chuyển đổi vào mẫu số.</li><li><strong>Trái phiếu chuyển đổi (if-converted):</strong> cộng lại lãi vay tiết kiệm sau thuế: + lãi × (1 − t); cộng cổ phiếu chuyển đổi.</li><li><strong>Quyền chọn/chứng quyền (phương pháp cổ phiếu quỹ):</strong> giả định thực hiện tại giá strike; tiền thu được dùng mua lại cổ phiếu theo giá thị trường <em>bình quân</em>. Cổ phiếu tăng thêm = N − (N × strike)/giá bình quân. Quyền chọn chỉ pha loãng khi giá bình quân &gt; strike.</li></ul><p><em>Ví dụ:</em> LN ròng 1.000; 100 cổ phiếu cả năm; 20 quyền chọn strike 25, giá bình quân 50. Tiền thu = 500 → mua lại 10 cổ phiếu → +10 cổ phiếu tăng thêm. EPS cơ bản = 10,00; pha loãng = 1.000/110 = 9,09.</p>"
    },
    {
     "h": "EPS worked: weighted shares, treasury stock method & the antidilution gate",
     "en": "<p><strong>Basic EPS worked.</strong> NI = $1,150,000; preferred dividends = $150,000. Shares: 1,000,000 on Jan 1; 200,000 issued July 1 (outstanding 6/12 of the year). Weighted average = 1,000,000 + 200,000 × 6/12 = <strong>1,100,000</strong>. Basic EPS = (1,150,000 − 150,000)/1,100,000 = <strong>$0.909</strong>. Two traps: preferred dividends come out of the numerator even if unpaid (if cumulative), and stock splits/dividends are applied <em>retroactively</em> to all periods — a 2-for-1 split in November doubles every share figure for the whole year.</p>\n<svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Diluted EPS decision flowchart\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Diluted EPS: which method, and the antidilution gate</text>\n<rect x=\"270\" y=\"42\" width=\"180\" height=\"38\" rx=\"9\" fill=\"#5457E0\"/>\n<text x=\"360\" y=\"66\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#fff\">Potentially dilutive security?</text>\n<line x1=\"360\" y1=\"80\" x2=\"150\" y2=\"122\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"360\" y1=\"80\" x2=\"360\" y2=\"122\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"360\" y1=\"80\" x2=\"576\" y2=\"122\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<rect x=\"52\" y=\"124\" width=\"196\" height=\"66\" rx=\"9\" fill=\"#EEF0FE\" stroke=\"#5457E0\"/>\n<text x=\"150\" y=\"146\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#4338CA\">Options / warrants</text>\n<text x=\"150\" y=\"164\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">Treasury stock method:</text>\n<text x=\"150\" y=\"180\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">add shares × (1 − X/avg price)</text>\n<rect x=\"262\" y=\"124\" width=\"196\" height=\"66\" rx=\"9\" fill=\"#E7F6F0\" stroke=\"#0F9573\"/>\n<text x=\"360\" y=\"146\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F9573\">Convertible bonds</text>\n<text x=\"360\" y=\"164\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">If-converted: add shares AND</text>\n<text x=\"360\" y=\"180\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">add back interest × (1 − t)</text>\n<rect x=\"472\" y=\"124\" width=\"208\" height=\"66\" rx=\"9\" fill=\"#FBF3E4\" stroke=\"#B45309\"/>\n<text x=\"576\" y=\"146\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#B45309\">Convertible preferred</text>\n<text x=\"576\" y=\"164\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">If-converted: add shares AND</text>\n<text x=\"576\" y=\"180\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">stop subtracting pref. dividends</text>\n<line x1=\"150\" y1=\"190\" x2=\"348\" y2=\"232\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"360\" y1=\"190\" x2=\"360\" y2=\"232\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"576\" y1=\"190\" x2=\"372\" y2=\"232\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<rect x=\"235\" y=\"234\" width=\"250\" height=\"42\" rx=\"9\" fill=\"#DC4848\"/>\n<text x=\"360\" y=\"252\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\">Antidilution gate: recompute EPS —</text>\n<text x=\"360\" y=\"268\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#fff\">if EPS would RISE, exclude that security</text>\n<text x=\"360\" y=\"308\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#8B5CF6\" font-weight=\"600\">Diluted EPS can never exceed basic EPS — use this as your sanity check.</text>\n</svg>\n<p><strong>Treasury stock method worked (options).</strong> 100,000 options, exercise price $20, average market price $25. Assumed exercise brings in 100,000 × 20 = $2,000,000, which buys back 2,000,000/25 = 80,000 shares. Net new shares = 100,000 − 80,000 = <strong>20,000</strong> — equivalently 100,000 × (1 − 20/25). Diluted EPS = 1,000,000/(1,100,000 + 20,000) = <strong>$0.893</strong>. Options are dilutive only when average market price &gt; exercise price (otherwise no one would exercise).</p>\n<p><strong>If-converted method worked (convertible bond).</strong> $1,000,000 of 6% convertibles, convertible into 60,000 shares; tax rate 25%. Add back after-tax interest: 60,000 × (1 − 0.25) = $45,000 to the numerator; add 60,000 shares to the denominator. Test the increment: 45,000/60,000 = $0.75 per incremental share &lt; basic EPS $0.909 → <strong>dilutive, include it</strong>. Had the increment exceeded basic EPS, the security would be <em>antidilutive</em> and must be excluded — diluted EPS is never allowed to exceed basic.</p>\n<p><strong>Revenue recognition in one breath:</strong> identify the contract → identify performance obligations → determine the transaction price → allocate it to obligations → recognize revenue when (or as) each obligation is satisfied. Non-recurring items to strip when forecasting: discontinued operations (reported net of tax, below continuing operations), unusual/infrequent items (shown pre-tax within continuing operations), and changes in accounting estimates (prospective — no restatement) vs changes in policy (retrospective).</p>",
     "vi": "<p><strong>Basic EPS bằng ví dụ.</strong> NI = $1.150.000; cổ tức ưu đãi = $150.000. Cổ phiếu: 1.000.000 từ 1/1; phát hành thêm 200.000 ngày 1/7 (lưu hành 6/12 năm). Bình quân gia quyền = 1.000.000 + 200.000 × 6/12 = <strong>1.100.000</strong>. Basic EPS = (1.150.000 − 150.000)/1.100.000 = <strong>$0,909</strong>. Hai bẫy: cổ tức ưu đãi phải trừ khỏi tử số kể cả khi chưa trả (nếu là cộng dồn), và chia tách/cổ tức cổ phiếu áp dụng <em>hồi tố</em> cho mọi kỳ — chia 2:1 vào tháng 11 vẫn nhân đôi mọi con số cổ phiếu của cả năm.</p>\n<p><strong>Treasury stock method bằng ví dụ (options).</strong> 100.000 quyền chọn, giá thực hiện $20, giá thị trường bình quân $25. Giả định thực hiện thu về $2.000.000, mua lại được 2.000.000/25 = 80.000 cổ phiếu. Cổ phiếu ròng thêm = 100.000 − 80.000 = <strong>20.000</strong> — tương đương 100.000 × (1 − 20/25). Diluted EPS = 1.000.000/(1.100.000 + 20.000) = <strong>$0,893</strong>. Options chỉ pha loãng khi giá thị trường bình quân &gt; giá thực hiện (nếu không chẳng ai thực hiện).</p>\n<p><strong>If-converted bằng ví dụ (trái phiếu chuyển đổi).</strong> $1.000.000 trái phiếu 6% chuyển đổi thành 60.000 cổ phiếu; thuế suất 25%. Cộng ngược lãi sau thuế: 60.000 × (1 − 0,25) = $45.000 vào tử số; cộng 60.000 cổ phiếu vào mẫu số. Kiểm tra phần gia tăng: 45.000/60.000 = $0,75 mỗi cổ phiếu tăng thêm &lt; basic EPS $0,909 → <strong>pha loãng, đưa vào</strong>. Nếu phần gia tăng vượt basic EPS, chứng khoán đó <em>antidilutive</em> và phải loại — diluted EPS không bao giờ được phép vượt basic.</p>\n<p><strong>Ghi nhận doanh thu trong một hơi:</strong> xác định hợp đồng → xác định nghĩa vụ thực hiện → xác định giá giao dịch → phân bổ cho các nghĩa vụ → ghi nhận doanh thu khi (hoặc trong quá trình) hoàn thành từng nghĩa vụ. Khoản mục không thường xuyên cần loại khi dự phóng: hoạt động gián đoạn (báo cáo sau thuế, dưới dòng hoạt động tiếp tục), khoản bất thường/không thường xuyên (trước thuế, trong hoạt động tiếp tục), và thay đổi ước tính kế toán (áp dụng tiến, không hồi tố) vs thay đổi chính sách (hồi tố).</p>"
    }
   ],
   "formulas": [
    [
     "Basic EPS",
     "(NI − preferred dividends) / weighted avg shares",
     "Diluted EPS adds effect of options/convertibles if dilutive"
    ],
    [
     "Diluted EPS (options)",
     "Incremental shares = N − (N × strike)/avg price",
     "Treasury stock method; dilutive only if avg price > strike"
    ],
    [
     "Diluted EPS (convertibles)",
     "Add back pfd dividends or interest × (1 − t); add conversion shares",
     "Exclude if antidilutive"
    ],
    [
     "Weighted average shares",
     "Σ shares × months outstanding / 12",
     "Splits and stock dividends applied retroactively to all periods."
    ],
    [
     "Treasury stock method",
     "new shares = options × (1 − exercise / avg market price)",
     "Dilutive only when average market price > exercise price."
    ]
   ]
  },
  {
   "title": "Analyzing Balance Sheets",
   "sections": [
    {
     "h": "Balance sheet structure & measurement bases",
     "en": "<ul><li><strong>Structure:</strong> assets and liabilities are split current (≤ 1 year or one operating cycle) vs non-current; some industries (banks) present by liquidity instead. A <strong>classified</strong> balance sheet aids liquidity analysis; a <strong>common-size</strong> balance sheet states every line as a % of total assets, enabling comparison across size and time.</li><li><strong>Measurement is a mix, not one rule:</strong> historical cost (most PP&amp;E), amortized cost (held-to-collect debt), fair value (marketable securities, derivatives), lower-of-cost-or-NRV (inventory), and estimates everywhere (allowances, provisions). Knowing <em>which base applies to which line</em> tells you how much of the balance sheet is opinion.</li><li><strong>Financial instruments (holder side):</strong> measured at <em>amortized cost</em> (debt held to collect contractual cash flows), <em>fair value through OCI</em> (unrealized gains/losses bypass earnings into equity), or <em>fair value through profit or loss</em> (trading — gains and losses hit the income statement). The classification drives earnings volatility, so watch reclassifications.</li></ul>",
     "vi": "<ul><li><strong>Cấu trúc:</strong> tài sản và nợ chia ngắn hạn (≤ 1 năm hoặc một chu kỳ kinh doanh) và dài hạn; một số ngành (ngân hàng) trình bày theo tính thanh khoản. Bảng CĐKT <strong>phân loại</strong> hỗ trợ phân tích thanh khoản; bảng <strong>common-size</strong> biểu diễn mỗi khoản mục theo % tổng tài sản, giúp so sánh giữa quy mô và thời kỳ.</li><li><strong>Cơ sở đo lường là hỗn hợp, không phải một quy tắc:</strong> giá gốc (đa số PP&amp;E), giá phân bổ (nợ giữ để thu dòng tiền), giá trị hợp lý (chứng khoán kinh doanh, phái sinh), thấp hơn giữa giá gốc và NRV (tồn kho), và ước tính ở khắp nơi (dự phòng). Biết <em>khoản mục nào theo cơ sở nào</em> cho bạn biết bao nhiêu phần của bảng CĐKT là \"ý kiến chủ quan\".</li><li><strong>Công cụ tài chính (phía nắm giữ):</strong> đo theo <em>giá phân bổ</em> (nợ giữ để thu dòng tiền hợp đồng), <em>FV qua OCI</em> (lãi/lỗ chưa thực hiện đi thẳng vào vốn chủ, né KQKD), hoặc <em>FV qua lãi/lỗ</em> (kinh doanh — lãi/lỗ vào KQKD). Cách phân loại quyết định độ biến động lợi nhuận, nên cần chú ý các lần tái phân loại.</li></ul>"
    },
    {
     "h": "Intangibles, goodwill & the components of equity",
     "en": "<ul><li><strong>Intangibles:</strong> <em>purchased</em> intangibles are recognized at cost; identifiable ones with finite lives are amortized, indefinite-life ones are tested for impairment. <em>Internally generated</em> brands, mastheads, customer lists — and internally generated goodwill — are <strong>never recognized</strong> as assets. R&amp;D: under IFRS, <em>research</em> is expensed while <em>development</em> is capitalized once technical/commercial feasibility criteria are met; under US GAAP both are generally expensed (software has special rules). Expensing R&amp;D understates assets of innovative firms — an analyst adjustment point.</li><li><strong>Goodwill</strong> arises only in acquisitions: purchase price − fair value of identifiable net assets. It is <em>not amortized</em>; it is tested (at least annually) for impairment, and impairments are one-way — no reversals.</li><li><strong>Equity components:</strong> contributed capital, retained earnings, treasury shares (a <em>negative</em> equity item; buybacks reduce equity and shares outstanding), <strong>accumulated other comprehensive income</strong> (currency translation, certain investment and pension remeasurements, cash-flow hedges), and <strong>non-controlling interest</strong> — the share of consolidated subsidiaries not owned by the parent. Comprehensive income = net income + OCI; items in OCI bypass the income statement, so compare comprehensive income across firms when OCI is large.</li></ul>",
     "vi": "<ul><li><strong>Tài sản vô hình:</strong> vô hình <em>mua ngoài</em> ghi nhận theo giá gốc; loại xác định được với đời hữu hạn thì phân bổ dần, đời vô hạn thì kiểm tra suy giảm. Thương hiệu, danh sách khách hàng <em>tự tạo</em> — và goodwill tự tạo — <strong>không bao giờ được ghi nhận</strong> là tài sản. R&amp;D: theo IFRS, chi phí <em>nghiên cứu</em> ghi vào chi phí, chi phí <em>phát triển</em> được vốn hóa khi đạt tiêu chí khả thi kỹ thuật/thương mại; US GAAP nhìn chung ghi chi phí cả hai (phần mềm có quy định riêng). Ghi chi phí R&amp;D làm tài sản của công ty sáng tạo bị đánh giá thấp — điểm analyst cần điều chỉnh.</li><li><strong>Goodwill</strong> chỉ phát sinh khi mua doanh nghiệp: giá mua − giá trị hợp lý tài sản thuần xác định được. Goodwill <em>không phân bổ</em>; kiểm tra suy giảm (ít nhất hằng năm), và suy giảm là một chiều — không hoàn nhập.</li><li><strong>Cấu phần vốn chủ:</strong> vốn góp, lợi nhuận giữ lại, cổ phiếu quỹ (khoản <em>âm</em> trong vốn chủ; mua lại làm giảm vốn chủ và số cổ phiếu lưu hành), <strong>OCI lũy kế</strong> (chênh lệch tỷ giá hợp nhất, một số đánh giá lại đầu tư và lương hưu, phòng hộ dòng tiền), và <strong>lợi ích cổ đông không kiểm soát</strong> — phần công ty con hợp nhất không thuộc sở hữu công ty mẹ. Thu nhập toàn diện = LN ròng + OCI; các khoản trong OCI né báo cáo KQKD, nên khi OCI lớn hãy so sánh thu nhập toàn diện giữa các công ty.</li></ul>"
    },
    {
     "h": "Common-size the balance sheet & score liquidity/solvency from one company",
     "en": "<p><strong>Common-size = every line ÷ total assets.</strong> It strips out scale so you can compare across firms and across time. Work through this condensed balance sheet ($m):</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Item</th><th style=\"padding:7px;border:1px solid #D6DAFB\">$m</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Common-size</th><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Item</th><th style=\"padding:7px;border:1px solid #D6DAFB\">$m</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Common-size</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Cash & equivalents</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">80</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">8%</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Accounts payable</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">120</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">12%</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Receivables</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">150</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">15%</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Short-term debt</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">80</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">8%</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Inventory</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">170</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">17%</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Long-term debt</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">300</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">30%</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">PP&E (net)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">500</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">50%</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Equity</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">500</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">50%</td></tr>\n<tr style=\"background:#EEF0FE\"><td style=\"padding:7px;border:1px solid #E5E9F2\"><strong>Total assets</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>1,000</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">100%</td><td style=\"padding:7px;border:1px solid #E5E9F2\"><strong>Total L + E</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>1,000</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">100%</td></tr></table>\n<p><strong>Liquidity</strong> (can it pay bills this year?): current ratio = (80+150+170)/(120+80) = <strong>2.0</strong>; quick ratio = (80+150)/200 = <strong>1.15</strong> (inventory dropped — it may not convert fast); cash ratio = 80/200 = <strong>0.40</strong>. <strong>Solvency</strong> (can it survive its debt load?): debt-to-equity = (80+300)/500 = <strong>0.76</strong>; debt-to-assets = 380/1,000 = <strong>0.38</strong>; financial leverage = 1,000/500 = <strong>2.0</strong>. The three liquidity ratios always rank current ≥ quick ≥ cash because each removes less-liquid assets.</p>\n<p><strong>Measurement bases coexist on one statement</strong> — that is the balance sheet's core limitation. Inventory at lower of cost/NRV, PP&E at depreciated historical cost (or revalued under IFRS), most financial instruments at fair value, goodwill at cost less impairment. The total is therefore <em>not</em> the company's value. <strong>Intangibles logic:</strong> purchased intangibles → capitalize at cost; internally developed → mostly <em>expensed</em> (IFRS allows capitalizing development after technical/economic feasibility; research is always expensed; US GAAP expenses both with narrow exceptions like software); acquired in a business combination → recognized at fair value, with the unexplained remainder as goodwill. Goodwill is not amortized — it is tested for impairment at least annually.</p>",
     "vi": "<p><strong>Common-size = mỗi dòng ÷ tổng tài sản.</strong> Nó loại bỏ quy mô để so sánh giữa các công ty và qua thời gian. Với balance sheet rút gọn trong bảng ($m, tổng tài sản 1.000): tiền 8%, phải thu 15%, tồn kho 17%, PP&E ròng 50%; bên nguồn: phải trả 12%, nợ ngắn hạn 8%, nợ dài hạn 30%, vốn chủ 50%.</p>\n<p><strong>Thanh khoản</strong> (trả được hóa đơn năm nay không?): current ratio = (80+150+170)/(120+80) = <strong>2,0</strong>; quick ratio = (80+150)/200 = <strong>1,15</strong> (bỏ tồn kho — thứ có thể không chuyển thành tiền nhanh); cash ratio = 80/200 = <strong>0,40</strong>. <strong>Khả năng trả nợ dài hạn</strong>: debt-to-equity = (80+300)/500 = <strong>0,76</strong>; debt-to-assets = 380/1.000 = <strong>0,38</strong>; đòn bẩy tài chính = 1.000/500 = <strong>2,0</strong>. Ba tỷ số thanh khoản luôn xếp current ≥ quick ≥ cash vì mỗi bậc loại bớt tài sản kém thanh khoản hơn.</p>\n<p><strong>Nhiều cơ sở đo lường cùng tồn tại trên một báo cáo</strong> — đó là hạn chế cốt lõi của balance sheet. Tồn kho theo min(giá gốc, NRV), PP&E theo nguyên giá trừ khấu hao (hoặc đánh giá lại theo IFRS), phần lớn công cụ tài chính theo fair value, goodwill theo giá gốc trừ suy giảm. Vì thế tổng cộng <em>không phải</em> giá trị công ty. <strong>Logic tài sản vô hình:</strong> mua ngoài → vốn hóa theo giá mua; tự phát triển → phần lớn <em>tính vào chi phí</em> (IFRS cho vốn hóa giai đoạn development sau khi chứng minh tính khả thi kỹ thuật/kinh tế; research luôn là chi phí; US GAAP tính chi phí cả hai, trừ ngoại lệ hẹp như phần mềm); có được qua hợp nhất kinh doanh → ghi theo fair value, phần dôi không giải thích được là goodwill. Goodwill không khấu hao — kiểm tra suy giảm ít nhất hằng năm.</p>"
    }
   ],
   "formulas": [
    [
     "Ending equity",
     "Beginning equity + NI − dividends + OCI + net share issuance",
     ""
    ],
    [
     "Goodwill (acquisition)",
     "Purchase price − fair value of identifiable net assets",
     "Not amortized; impairment-tested"
    ],
    [
     "Common-size balance sheet",
     "each item / total assets",
     "Removes scale — enables cross-firm and time-series comparison."
    ],
    [
     "Liquidity ladder",
     "current ≥ quick ≥ cash ratio",
     "Each step strips out less-liquid current assets."
    ]
   ]
  },
  {
   "title": "Analyzing Statements of Cash Flows I",
   "sections": [
    {
     "h": "Classification, IFRS vs US GAAP & the direct method",
     "en": "<ul><li><strong>Three activities:</strong> CFO (day-to-day operations), CFI (buying/selling long-term assets and investments), CFF (debt and equity financing, dividends paid). <strong>Classification differences:</strong> under US GAAP, interest paid/received and dividends <em>received</em> are CFO; dividends <em>paid</em> are CFF. Under IFRS, interest paid may be CFO <em>or</em> CFF; interest and dividends received CFO <em>or</em> CFI; dividends paid CFO <em>or</em> CFF. Taxes are CFO unless tied to an investing/financing transaction (IFRS). <strong>Non-cash transactions</strong> (acquiring assets via a lease or by issuing shares) appear in no section — they are disclosed separately, but analysts must still account for them.</li><li><strong>Direct method</strong> shows gross operating receipts and payments; regulators encourage it, most firms use indirect. Key conversions: <em>cash received from customers = revenue − ΔAR</em>; <em>cash paid to suppliers = −(COGS + ΔInventory − ΔAP)</em>; cash wages = −(wage expense − Δwages payable). Both methods produce identical CFO; only presentation differs. CFI and CFF are computed the same way under both: reconstruct each balance-sheet account (e.g., PP&amp;E purchases = ending gross PP&amp;E − beginning + cost of assets sold).</li></ul>",
     "vi": "<ul><li><strong>Ba nhóm hoạt động:</strong> CFO (vận hành hằng ngày), CFI (mua/bán tài sản dài hạn và các khoản đầu tư), CFF (huy động nợ và vốn, trả cổ tức). <strong>Khác biệt phân loại:</strong> theo US GAAP, lãi vay trả/nhận và cổ tức <em>nhận</em> vào CFO; cổ tức <em>trả</em> vào CFF. Theo IFRS, lãi vay trả có thể CFO <em>hoặc</em> CFF; lãi và cổ tức nhận CFO <em>hoặc</em> CFI; cổ tức trả CFO <em>hoặc</em> CFF. Thuế vào CFO trừ khi gắn với giao dịch đầu tư/tài chính (IFRS). <strong>Giao dịch phi tiền tệ</strong> (mua tài sản qua thuê tài chính, phát hành cổ phiếu để mua tài sản) không nằm ở mục nào — chỉ thuyết minh riêng, nhưng analyst vẫn phải tính đến.</li><li><strong>Phương pháp trực tiếp</strong> trình bày các dòng thu – chi hoạt động theo giá trị gộp; cơ quan quản lý khuyến khích nhưng đa số doanh nghiệp dùng gián tiếp. Quy đổi then chốt: <em>tiền thu từ khách hàng = doanh thu − ΔPhải thu</em>; <em>tiền trả nhà cung cấp = −(COGS + ΔTồn kho − ΔPhải trả)</em>; tiền lương = −(chi phí lương − Δlương phải trả). Hai phương pháp cho CFO giống hệt nhau; chỉ khác cách trình bày. CFI và CFF tính như nhau ở cả hai: tái dựng từng tài khoản trên bảng CĐKT (ví dụ tiền mua PP&amp;E = nguyên giá cuối kỳ − đầu kỳ + nguyên giá tài sản đã bán).</li></ul>"
    },
    {
     "h": "CFO: indirect method adjustments",
     "en": "<p>The indirect method starts from net income and adjusts to cash from operations:</p><ul><li><strong>Add back</strong> non-cash expenses (depreciation, amortization) and losses on asset sales; <strong>subtract</strong> gains on asset sales (they belong in CFI).</li><li><strong>Working capital:</strong> an <em>increase</em> in a current operating <em>asset</em> (receivables, inventory) <em>uses</em> cash → subtract. An <em>increase</em> in a current operating <em>liability</em> (payables, accrued expenses) <em>provides</em> cash → add.</li></ul><p><strong>Free cash flow to the firm:</strong> FCFF = CFO + interest × (1 − tax rate) − fixed capital investment (under US GAAP). FCFE = CFO − FCInv + net borrowing.</p>",
     "vi": "<p>Phương pháp gián tiếp đi từ LN ròng và điều chỉnh về dòng tiền hoạt động:</p><ul><li><strong>Cộng lại</strong> chi phí không dùng tiền (khấu hao) và lỗ bán tài sản; <strong>trừ</strong> lãi bán tài sản (thuộc CFI).</li><li><strong>Vốn lưu động:</strong> <em>tăng</em> tài sản ngắn hạn hoạt động (phải thu, tồn kho) <em>tiêu tốn</em> tiền → trừ. <em>Tăng</em> nợ ngắn hạn hoạt động (phải trả) <em>tạo ra</em> tiền → cộng.</li></ul><p><strong>Dòng tiền tự do:</strong> FCFF = CFO + lãi vay × (1 − thuế suất) − đầu tư TSCĐ (theo US GAAP). FCFE = CFO − FCInv + vay ròng.</p>"
    },
    {
     "h": "Direct vs indirect CFO — built from the same numbers",
     "en": "<p><strong>One dataset, both methods.</strong> Revenue 500, COGS 300, other operating expenses 80, NI 100 (after 20 of depreciation inside expenses). Balance sheet changes: receivables +30, inventory +10, payables +15.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Direct method</th><th style=\"padding:7px;border:1px solid #D6DAFB\">$</th><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Indirect method</th><th style=\"padding:7px;border:1px solid #D6DAFB\">$</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Cash from customers = 500 − ΔAR 30</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">470</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Net income</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">100</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Cash to suppliers = −(300 + ΔInv 10 − ΔAP 15)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">−295</td><td style=\"padding:7px;border:1px solid #E5E9F2\">+ Depreciation (non-cash)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">+20</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Cash operating expenses = −(80 − dep 20)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">−60</td><td style=\"padding:7px;border:1px solid #E5E9F2\">− ΔReceivables</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">−30</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\"></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"></td><td style=\"padding:7px;border:1px solid #E5E9F2\">− ΔInventory</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">−10</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\"></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"></td><td style=\"padding:7px;border:1px solid #E5E9F2\">+ ΔPayables</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">+15</td></tr>\n<tr style=\"background:#EEF0FE\"><td style=\"padding:7px;border:1px solid #E5E9F2\"><strong>CFO</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>115</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2\"><strong>CFO</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>115</strong></td></tr></table>\n<p>Same answer, always. The sign logic for indirect adjustments: an <strong>increase in an operating asset uses cash (subtract)</strong>; an <strong>increase in an operating liability frees cash (add)</strong>. Gains on asset sales are subtracted from NI (the full proceeds belong in CFI); losses are added back.</p>\n<p><strong>Classification differences you must know cold:</strong></p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Item</th><th style=\"padding:7px;border:1px solid #D6DAFB\">US GAAP</th><th style=\"padding:7px;border:1px solid #D6DAFB\">IFRS</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Interest paid</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">CFO</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">CFO or CFF</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Interest & dividends received</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">CFO</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">CFO or CFI</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Dividends paid</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">CFF</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">CFO or CFF</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Income taxes</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">CFO</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">CFO unless tied to CFI/CFF item</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Bank overdrafts</td><td style=\"padding:7px;border:1px solid #E5E9F2\">CFF</td><td style=\"padding:7px;border:1px solid #E5E9F2\">can offset cash</td></tr></table>\n<p>Both frameworks accept either presentation method; almost all firms use indirect (cheaper to prepare), while analysts prefer direct (shows gross receipts and payments). US GAAP requires firms using direct to also disclose the indirect reconciliation.</p>",
     "vi": "<p><strong>Một bộ số liệu, cả hai phương pháp.</strong> Doanh thu 500, COGS 300, chi phí hoạt động khác 80, NI 100 (trong chi phí có 20 khấu hao). Biến động balance sheet: phải thu +30, tồn kho +10, phải trả +15.</p>\n<p>Phương pháp trực tiếp: tiền thu từ khách hàng = 500 − 30 = 470; tiền trả nhà cung cấp = −(300 + 10 − 15) = −295; chi phí hoạt động bằng tiền = −(80 − 20) = −60 → <strong>CFO = 115</strong>. Phương pháp gián tiếp: NI 100 + khấu hao 20 − Δphải thu 30 − Δtồn kho 10 + Δphải trả 15 = <strong>CFO = 115</strong>. Luôn cùng một đáp số. Logic dấu của điều chỉnh gián tiếp: <strong>tài sản hoạt động tăng là dùng tiền (trừ)</strong>; <strong>nợ hoạt động tăng là giải phóng tiền (cộng)</strong>. Lãi từ bán tài sản bị trừ khỏi NI (toàn bộ tiền thu thuộc CFI); lỗ được cộng ngược.</p>\n<p><strong>Khác biệt phân loại phải thuộc lòng:</strong> lãi vay đã trả — US GAAP: CFO, IFRS: CFO hoặc CFF; lãi và cổ tức nhận được — US GAAP: CFO, IFRS: CFO hoặc CFI; cổ tức đã trả — US GAAP: CFF, IFRS: CFO hoặc CFF; thuế thu nhập — US GAAP: CFO, IFRS: CFO trừ khi gắn với khoản CFI/CFF; thấu chi ngân hàng — US GAAP: CFF, IFRS: có thể bù trừ vào tiền.</p>\n<p>Cả hai khuôn khổ chấp nhận cả hai cách trình bày; hầu hết công ty dùng gián tiếp (rẻ hơn khi lập), còn nhà phân tích thích trực tiếp (thấy được dòng thu chi gộp). US GAAP yêu cầu công ty dùng trực tiếp phải công bố kèm bảng đối chiếu gián tiếp.</p>"
    }
   ],
   "formulas": [
    [
     "Cash from customers",
     "Revenue − ΔAccounts receivable",
     "Direct method"
    ],
    [
     "Cash paid to suppliers",
     "−(COGS + ΔInventory − ΔAccounts payable)",
     "Direct method"
    ],
    [
     "Indirect sign rule",
     "↑ operating asset → subtract · ↑ operating liability → add",
     "Working-capital adjustments undo accrual accounting."
    ],
    [
     "Cash operating expenses",
     "operating expenses − non-cash charges − Δaccruals",
     "Direct-method line for cash paid for opex."
    ]
   ]
  },
  {
   "title": "Analyzing Statements of Cash Flows II",
   "sections": [
    {
     "h": "Free cash flow & cash-flow ratios",
     "en": "<ul><li><strong>Evaluating the statement:</strong> start with the big picture — are operations the main cash source (mature, healthy) or is the firm living off financing (early-stage or distressed)? Is CFO consistently above net income (quality) and above capital expenditure (self-funding)? A <strong>common-size</strong> cash flow statement scales each line by revenue (or total inflows) to compare across time and firms.</li><li><strong>Free cash flow to the firm</strong> — cash available to <em>all</em> capital providers after necessary investment: <strong>FCFF = CFO + interest × (1 − tax rate) − fixed capital investment</strong> (add back after-tax interest when it was deducted in CFO, as under US GAAP; under IFRS with interest paid in CFF, no add-back is needed).</li><li><strong>Free cash flow to equity</strong> — cash available to shareholders: <strong>FCFE = CFO − fixed capital investment + net borrowing</strong>.</li><li><strong>Cash-flow ratios.</strong> Performance: cash-flow-to-revenue = CFO/revenue; cash return on assets = CFO/average assets; cash-per-share. Coverage: <strong>debt coverage = CFO/total debt</strong> (a key solvency signal); interest coverage = (CFO + interest paid + taxes paid)/interest paid; <strong>reinvestment = CFO/capital expenditure</strong>; dividend payment = CFO/dividends paid. These sidestep accrual manipulation, which is why lenders love them.</li></ul>",
     "vi": "<ul><li><strong>Đánh giá tổng thể báo cáo:</strong> bắt đầu từ bức tranh lớn — hoạt động kinh doanh có phải nguồn tiền chính không (doanh nghiệp trưởng thành, khỏe mạnh) hay công ty đang sống bằng huy động vốn (giai đoạn đầu hoặc khó khăn)? CFO có đều đặn cao hơn lợi nhuận ròng (chất lượng) và cao hơn capex (tự tài trợ) không? Báo cáo LCTT <strong>common-size</strong> chia mỗi dòng cho doanh thu để so sánh qua thời gian và giữa các công ty.</li><li><strong>FCFF</strong> — tiền cho <em>mọi</em> nhà cung cấp vốn sau đầu tư cần thiết: <strong>FCFF = CFO + lãi vay × (1 − thuế suất) − đầu tư tài sản cố định</strong> (cộng lại lãi vay sau thuế khi lãi đã trừ trong CFO như US GAAP; nếu IFRS xếp lãi trả vào CFF thì không cần cộng lại).</li><li><strong>FCFE</strong> — tiền cho cổ đông: <strong>FCFE = CFO − đầu tư tài sản cố định + vay ròng</strong>.</li><li><strong>Chỉ số dòng tiền.</strong> Hiệu quả: CFO/doanh thu; cash ROA = CFO/tài sản bình quân; dòng tiền mỗi cổ phiếu. Bao phủ: <strong>debt coverage = CFO/tổng nợ</strong> (tín hiệu khả năng trả nợ then chốt); interest coverage = (CFO + lãi trả + thuế trả)/lãi trả; <strong>reinvestment = CFO/capex</strong>; dividend payment = CFO/cổ tức trả. Các chỉ số này né được thao túng dồn tích — lý do chủ nợ rất chuộng.</li></ul>"
    },
    {
     "h": "FCFF & FCFE worked from a full mini statement",
     "en": "<p><strong>Data.</strong> NI = 200; depreciation = 60; interest expense = 40; tax rate = 25%; capital expenditure (FCInv) = 120; increase in working capital (WCInv) = 30; net borrowing (new debt − repayments) = 50. CFO (indirect) = 200 + 60 − 30 = <strong>230</strong>.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Route</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Computation</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Result</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">FCFF from NI</td><td style=\"padding:7px;border:1px solid #E5E9F2\">NI + NCC + Int(1−t) − FCInv − WCInv = 200 + 60 + 40(0.75) − 120 − 30</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>140</strong></td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">FCFF from CFO</td><td style=\"padding:7px;border:1px solid #E5E9F2\">CFO + Int(1−t) − FCInv = 230 + 30 − 120</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>140</strong></td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">FCFE from CFO</td><td style=\"padding:7px;border:1px solid #E5E9F2\">CFO − FCInv + net borrowing = 230 − 120 + 50</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>160</strong></td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">FCFE from FCFF</td><td style=\"padding:7px;border:1px solid #E5E9F2\">FCFF − Int(1−t) + net borrowing = 140 − 30 + 50</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>160</strong></td></tr></table>\n<p>Why add back after-tax interest for FCFF: FCFF is cash available to <em>all</em> capital providers, so financing charges must be stripped out — but only their after-tax cost, because interest deductibility is a real cash saving. FCFE is what remains for shareholders after the firm services and adjusts its debt, so borrowing <em>adds</em> to it. Under IFRS, remember to reclassify interest first if the firm chose to report it in CFF.</p>\n<p><strong>Cash-flow ratios mirror income ratios with CFO in the numerator</strong> — and are harder to manipulate: cash flow to revenue = CFO/revenue; cash return on assets = CFO/avg assets; debt coverage = CFO/total debt; interest coverage = (CFO + interest paid + taxes paid)/interest paid; reinvestment = CFO/capex. A firm with rising NI but persistently weak CFO/NI is the classic red flag: earnings are being manufactured by accruals (aggressive revenue recognition, under-reserving) rather than collected in cash.</p>",
     "vi": "<p><strong>Dữ liệu.</strong> NI = 200; khấu hao = 60; chi phí lãi vay = 40; thuế suất = 25%; đầu tư tài sản cố định (FCInv) = 120; tăng vốn lưu động (WCInv) = 30; vay ròng (vay mới − trả nợ) = 50. CFO (gián tiếp) = 200 + 60 − 30 = <strong>230</strong>.</p>\n<p>Bốn đường tính trong bảng: FCFF từ NI = 200 + 60 + 40×0,75 − 120 − 30 = <strong>140</strong>; FCFF từ CFO = 230 + 30 − 120 = <strong>140</strong>; FCFE từ CFO = 230 − 120 + 50 = <strong>160</strong>; FCFE từ FCFF = 140 − 30 + 50 = <strong>160</strong>.</p>\n<p>Vì sao cộng ngược lãi vay sau thuế cho FCFF: FCFF là tiền dành cho <em>mọi</em> nhà cung cấp vốn, nên phải gỡ chi phí tài trợ ra — nhưng chỉ phần sau thuế, vì khấu trừ thuế của lãi vay là khoản tiết kiệm tiền thật. FCFE là phần còn lại cho cổ đông sau khi công ty trả và điều chỉnh nợ, nên vay ròng <em>cộng thêm</em> vào. Theo IFRS, nhớ phân loại lại lãi vay trước nếu công ty chọn báo cáo trong CFF.</p>\n<p><strong>Các tỷ số dòng tiền \"soi gương\" tỷ số lợi nhuận với CFO ở tử số</strong> — và khó bị thao túng hơn: cash flow to revenue = CFO/doanh thu; cash return on assets = CFO/tài sản bình quân; debt coverage = CFO/tổng nợ; interest coverage = (CFO + lãi đã trả + thuế đã trả)/lãi đã trả; reinvestment = CFO/capex. Công ty có NI tăng nhưng CFO/NI yếu kéo dài là cờ đỏ kinh điển: lợi nhuận được \"sản xuất\" bằng accruals (ghi nhận doanh thu hung hăng, trích lập thiếu) chứ không thu được bằng tiền.</p>"
    }
   ],
   "formulas": [
    [
     "FCFF",
     "FCFF = CFO + Int(1 − t) − FCInv",
     "No interest add-back if interest paid is in CFF (IFRS option)"
    ],
    [
     "FCFE",
     "FCFE = CFO − FCInv + Net borrowing",
     ""
    ],
    [
     "Debt coverage",
     "CFO / Total debt",
     ""
    ],
    [
     "Reinvestment",
     "CFO / Capital expenditure",
     ""
    ],
    [
     "FCFF from CFO",
     "FCFF = CFO + Int(1−t) − FCInv",
     "Reclassify interest first under IFRS if reported in CFF."
    ],
    [
     "FCFE from FCFF",
     "FCFE = FCFF − Int(1−t) + net borrowing",
     "Equity holders gain from net new debt."
    ]
   ]
  },
  {
   "title": "Analysis of Inventories",
   "sections": [
    {
     "h": "FIFO vs LIFO vs weighted average",
     "en": "<p>When input prices are <strong>rising</strong> (and inventory levels stable):</p><table class=\"simple\"><tr><th></th><th>FIFO</th><th>LIFO (US GAAP only)</th></tr><tr><td>COGS</td><td>Lower (old cheap costs)</td><td>Higher (recent expensive costs)</td></tr><tr><td>Gross profit / net income</td><td>Higher</td><td>Lower</td></tr><tr><td>Ending inventory</td><td>Higher, closer to current cost</td><td>Lower, outdated</td></tr><tr><td>Taxes paid</td><td>Higher</td><td>Lower → higher CFO</td></tr></table><p>LIFO is <em>prohibited under IFRS</em>. The <strong>LIFO reserve</strong> (disclosed) converts LIFO figures to FIFO for comparison: FIFO inventory = LIFO inventory + LIFO reserve. Inventory is carried at the lower of cost and net realizable value (IFRS); write-down reversals are allowed under IFRS but prohibited under US GAAP.</p>",
     "vi": "<p>Khi giá đầu vào <strong>tăng</strong> (tồn kho ổn định): FIFO cho COGS thấp hơn (giá vốn cũ rẻ) → LN cao hơn, tồn kho cuối kỳ cao hơn và sát giá hiện hành, nhưng thuế nộp nhiều hơn. LIFO cho COGS cao hơn → LN thấp hơn, tồn kho lỗi thời, thuế thấp hơn → CFO cao hơn.</p><p>LIFO <em>bị cấm theo IFRS</em> (chỉ US GAAP cho phép). <strong>LIFO reserve</strong> (được thuyết minh) dùng để quy đổi LIFO về FIFO: tồn kho FIFO = tồn kho LIFO + LIFO reserve. Tồn kho ghi theo giá thấp hơn giữa giá gốc và giá trị thuần có thể thực hiện (IFRS); IFRS cho phép hoàn nhập giảm giá tồn kho, US GAAP thì không.</p>"
    },
    {
     "h": "LIFO liquidation, write-downs & what to watch in disclosures",
     "en": "<ul><li><strong>LIFO liquidation:</strong> when a LIFO firm sells more than it purchases, old low-cost layers flow into COGS. In a rising-price world this <em>temporarily inflates</em> gross margin and net income — growth that cannot recur once the cheap layers are gone. The disclosure signature: a <em>declining LIFO reserve</em> alongside falling inventory quantities. Analysts strip the liquidation benefit out of earnings.</li><li><strong>Write-downs:</strong> inventory is carried at the lower of cost and net realizable value (IFRS) — write down through COGS or a separate line; IFRS permits <em>reversal</em> up to the original write-down, US GAAP (for most methods) does not. Write-downs cut current profit, raise turnover ratios, and can flatter <em>future</em> margins — beware serial write-down firms.</li><li><strong>Ratio effects to internalize</strong> (rising prices): FIFO shows higher inventory → higher current ratio, lower turnover, higher margins; LIFO the reverse but more current COGS and lower taxes. For comparability, convert LIFO figures with the reserve: FIFO inventory = LIFO inventory + reserve; FIFO COGS = LIFO COGS − ΔLIFO reserve.</li><li><strong>Disclosures worth reading:</strong> cost method by segment, the LIFO reserve, write-down amounts and reversals, and inventory pledged as collateral.</li></ul>",
     "vi": "<ul><li><strong>LIFO liquidation:</strong> khi công ty dùng LIFO bán nhiều hơn mua, các lớp tồn kho giá cũ (rẻ) chảy vào COGS. Trong môi trường giá tăng, điều này <em>thổi phồng tạm thời</em> biên gộp và lợi nhuận — mức tăng không thể lặp lại khi các lớp giá rẻ đã cạn. Dấu vết trong thuyết minh: <em>LIFO reserve giảm</em> đi cùng lượng tồn kho giảm. Analyst phải bóc phần lợi ích liquidation khỏi lợi nhuận.</li><li><strong>Ghi giảm giá trị tồn kho:</strong> tồn kho ghi theo mức thấp hơn giữa giá gốc và NRV (IFRS) — ghi giảm qua COGS hoặc dòng riêng; IFRS cho phép <em>hoàn nhập</em> tối đa bằng mức đã ghi giảm, US GAAP (với đa số phương pháp) thì không. Ghi giảm làm giảm lợi nhuận hiện tại, tăng vòng quay, và có thể làm đẹp biên lợi nhuận <em>tương lai</em> — cảnh giác công ty ghi giảm liên tục.</li><li><strong>Tác động lên chỉ số cần thuộc</strong> (giá tăng): FIFO cho tồn kho cao hơn → current ratio cao hơn, vòng quay thấp hơn, biên cao hơn; LIFO ngược lại nhưng COGS sát giá hiện hành và thuế thấp hơn. Để so sánh: tồn kho FIFO = tồn kho LIFO + reserve; COGS FIFO = COGS LIFO − ΔLIFO reserve.</li><li><strong>Thuyết minh đáng đọc:</strong> phương pháp giá vốn theo mảng, LIFO reserve, giá trị ghi giảm và hoàn nhập, tồn kho đã thế chấp.</li></ul>"
    },
    {
     "h": "Inventory methods end-to-end: one ledger, three answers + the LIFO bridge",
     "en": "<p><strong>One purchase ledger, all three methods.</strong> Beginning inventory 100 units @ $10. Purchases: 100 @ $12, then 100 @ $14. Sales: 220 units. Units available = 300, cost available = 1,000 + 1,200 + 1,400 = $3,600. Ending inventory = 80 units.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Method</th><th style=\"padding:7px;border:1px solid #D6DAFB\">COGS (220 units)</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Ending inventory (80)</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Check: sums to $3,600?</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">FIFO — oldest out first</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">100×10 + 100×12 + 20×14 = <strong>2,480</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">80×14 = <strong>1,120</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">✓</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">LIFO — newest out first</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">100×14 + 100×12 + 20×10 = <strong>2,800</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">80×10 = <strong>800</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">✓</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Weighted average ($12/unit)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">220×12 = <strong>2,640</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">80×12 = <strong>960</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">✓</td></tr></table>\n<svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"FIFO vs LIFO with rising prices\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Rising prices: where the old cheap units and new costly units go</text>\n<text x=\"190\" y=\"56\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#5457E0\">FIFO</text>\n<rect x=\"90\" y=\"70\" width=\"90\" height=\"150\" rx=\"6\" fill=\"#EEF0FE\" stroke=\"#5457E0\"/>\n<rect x=\"90\" y=\"70\" width=\"90\" height=\"60\" rx=\"6\" fill=\"#5457E0\"/>\n<text x=\"135\" y=\"105\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#fff\">old cheap units</text>\n<text x=\"135\" y=\"185\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#4338CA\">new costly units</text>\n<text x=\"135\" y=\"242\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1B2438\">→ COGS = old (low)</text>\n<text x=\"135\" y=\"259\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1B2438\">→ EI = new (high)</text>\n<text x=\"248\" y=\"130\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5457E0\">↑ sold first</text>\n<text x=\"530\" y=\"56\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#B45309\">LIFO</text>\n<rect x=\"440\" y=\"70\" width=\"90\" height=\"150\" rx=\"6\" fill=\"#FBF3E4\" stroke=\"#B45309\"/>\n<rect x=\"440\" y=\"160\" width=\"90\" height=\"60\" rx=\"6\" fill=\"#B45309\"/>\n<text x=\"485\" y=\"195\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#fff\">new costly units</text>\n<text x=\"485\" y=\"105\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#92400E\">old cheap units</text>\n<text x=\"485\" y=\"242\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1B2438\">→ COGS = new (high)</text>\n<text x=\"485\" y=\"259\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1B2438\">→ EI = old (low, stale)</text>\n<text x=\"598\" y=\"195\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#B45309\">↑ sold first</text>\n<text x=\"360\" y=\"292\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#8B5CF6\" font-weight=\"600\">Rising prices: LIFO → higher COGS, lower NI, lower taxes, lower inventory · FIFO → the reverse.</text>\n<text x=\"360\" y=\"312\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">LIFO reserve = FIFO inventory − LIFO inventory — the bridge for every conversion.</text>\n</svg>\n<p><strong>The LIFO reserve is the conversion bridge.</strong> Here reserve = FIFO EI − LIFO EI = 1,120 − 800 = <strong>$320</strong>. To restate a LIFO firm to FIFO for comparison: FIFO inventory = LIFO inventory + reserve; FIFO COGS = LIFO COGS − <em>change</em> in reserve for the period; FIFO retained earnings ≈ LIFO retained earnings + reserve × (1 − tax rate). A <strong>declining LIFO reserve</strong> signals either falling prices or a <strong>LIFO liquidation</strong> — old cheap layers hitting COGS, inflating margins unsustainably; the exam treats an unexplained margin jump at a LIFO firm as a quality-of-earnings warning.</p>\n<p><strong>Write-downs.</strong> IFRS: inventory at lower of cost and <strong>NRV</strong> (selling price − completion & selling costs), with <em>reversals allowed</em> up to the original write-down. US GAAP: lower of cost and NRV for FIFO/weighted-average, but lower of cost or <strong>market</strong> (replacement cost, bounded by NRV and NRV − normal margin) for LIFO/retail method — and <em>no reversals ever</em>. Note LIFO itself is permitted only under US GAAP; IFRS bans it.</p>",
     "vi": "<p><strong>Một sổ mua hàng, ba đáp án.</strong> Tồn đầu 100 đơn vị @ $10. Mua: 100 @ $12, rồi 100 @ $14. Bán: 220 đơn vị. Tổng sẵn có = 300 đơn vị, $3.600. Tồn cuối = 80 đơn vị. FIFO — xuất hàng cũ trước: COGS = 100×10 + 100×12 + 20×14 = <strong>2.480</strong>, tồn cuối = 80×14 = <strong>1.120</strong>. LIFO — xuất hàng mới trước: COGS = 100×14 + 100×12 + 20×10 = <strong>2.800</strong>, tồn cuối = 80×10 = <strong>800</strong>. Bình quân gia quyền ($12/đơn vị): COGS = <strong>2.640</strong>, tồn cuối = <strong>960</strong>. Cả ba đều cộng đủ $3.600.</p>\n<p><strong>LIFO reserve là cây cầu quy đổi.</strong> Ở đây reserve = 1.120 − 800 = <strong>$320</strong>. Quy LIFO về FIFO để so sánh: tồn kho FIFO = tồn kho LIFO + reserve; COGS FIFO = COGS LIFO − <em>mức thay đổi</em> reserve trong kỳ; lợi nhuận giữ lại FIFO ≈ LIFO + reserve × (1 − thuế suất). <strong>Reserve giảm dần</strong> báo hiệu giá giảm hoặc <strong>LIFO liquidation</strong> — các lớp hàng cũ giá rẻ chảy vào COGS, thổi phồng biên lợi nhuận không bền; đề thi coi cú nhảy biên lợi nhuận không giải thích được ở công ty dùng LIFO là cảnh báo chất lượng lợi nhuận.</p>\n<p><strong>Ghi giảm giá trị.</strong> IFRS: tồn kho theo min(giá gốc, <strong>NRV</strong>) (giá bán − chi phí hoàn thiện & bán hàng), <em>được hoàn nhập</em> tối đa bằng mức đã ghi giảm. US GAAP: min(giá gốc, NRV) cho FIFO/bình quân, nhưng min(giá gốc, <strong>market</strong>) (chi phí thay thế, chặn trên NRV và chặn dưới NRV − biên lợi nhuận thường) cho LIFO/phương pháp bán lẻ — và <em>không bao giờ hoàn nhập</em>. Lưu ý bản thân LIFO chỉ được phép theo US GAAP; IFRS cấm.</p>"
    }
   ],
   "formulas": [
    [
     "FIFO inventory",
     "LIFO inventory + LIFO reserve",
     ""
    ],
    [
     "FIFO COGS",
     "LIFO COGS − Δ LIFO reserve",
     ""
    ],
    [
     "LIFO → FIFO inventory",
     "FIFO EI = LIFO EI + LIFO reserve",
     "The reserve is disclosed in the footnotes."
    ],
    [
     "LIFO → FIFO COGS",
     "FIFO COGS = LIFO COGS − Δ LIFO reserve",
     "Falling reserve → possible LIFO liquidation."
    ],
    [
     "Inventory turnover",
     "COGS / average inventory",
     "DOH = 365 / turnover."
    ]
   ]
  },
  {
   "title": "Analysis of Long-Term Assets",
   "sections": [
    {
     "h": "Capitalizing vs expensing; depreciation; impairment",
     "en": "<ul><li><strong>Capitalizing</strong> a cost (recording it as an asset, then depreciating) versus <strong>expensing</strong> it immediately: capitalizing raises current-period profit, assets, equity, and CFO (the outflow shows in CFI), and smooths earnings. Interest incurred during construction is capitalized.</li><li><strong>Depreciation:</strong> straight-line = (cost − salvage)/useful life; double-declining balance front-loads expense (2/life × beginning book value, salvage not in the formula but book value never falls below salvage). Accelerated methods lower early profits but not cash.</li><li><strong>Impairment:</strong> under IFRS, impaired when carrying amount &gt; recoverable amount (higher of fair value less costs to sell and value in use); reversals allowed. US GAAP uses a two-step test based on undiscounted cash flows; reversals prohibited. Revaluation upward of PP&amp;E is permitted only under IFRS.</li></ul>",
     "vi": "<ul><li><strong>Vốn hóa</strong> chi phí (ghi thành tài sản rồi khấu hao) so với <strong>ghi chi phí ngay</strong>: vốn hóa làm tăng lợi nhuận kỳ hiện tại, tài sản, VCSH và CFO (dòng tiền ra nằm ở CFI), và làm mượt lợi nhuận. Lãi vay trong quá trình xây dựng được vốn hóa.</li><li><strong>Khấu hao:</strong> đường thẳng = (nguyên giá − giá trị thu hồi)/thời gian sử dụng; số dư giảm dần kép dồn chi phí vào các năm đầu (2/thời gian × giá trị sổ sách đầu kỳ). Khấu hao nhanh làm giảm lợi nhuận đầu kỳ nhưng không ảnh hưởng dòng tiền.</li><li><strong>Suy giảm giá trị:</strong> IFRS — suy giảm khi giá trị ghi sổ &gt; giá trị có thể thu hồi (cao hơn giữa giá trị hợp lý trừ chi phí bán và giá trị sử dụng); được hoàn nhập. US GAAP — kiểm tra 2 bước theo dòng tiền chưa chiết khấu; cấm hoàn nhập. Đánh giá tăng PP&amp;E chỉ được phép theo IFRS.</li></ul>"
    },
    {
     "h": "Revaluation, derecognition & estimating asset age",
     "en": "<ul><li><strong>Revaluation model (IFRS only):</strong> PP&amp;E may be carried at fair value. Upward revaluations bypass earnings into OCI (<em>revaluation surplus</em>) — unless reversing a prior downward revaluation, which went through profit or loss. Downward revaluations hit earnings first. US GAAP allows historical cost only.</li><li><strong>Derecognition:</strong> on sale, gain/loss = proceeds − carrying amount, reported in the income statement (and <em>removed from CFO</em> in the indirect method — the cash belongs in CFI). Abandoned assets: carrying amount written off as a loss.</li><li><strong>Estimating from disclosures</strong> — three quick ratios using straight-line assumptions: <strong>average age ≈ accumulated depreciation / annual depreciation expense</strong>; <strong>average total useful life ≈ ending gross PP&amp;E / depreciation expense</strong>; <strong>remaining life ≈ ending net PP&amp;E / depreciation expense</strong>. Older fleets signal looming capex; comparing capex to depreciation shows whether the firm is growing (capex &gt; dep) or harvesting its asset base.</li><li><strong>Estimate sensitivity:</strong> longer useful lives and higher salvage values cut depreciation and inflate current profit — small assumption changes move earnings materially for asset-heavy firms, so compare assumptions across peers.</li></ul>",
     "vi": "<ul><li><strong>Mô hình đánh giá lại (chỉ IFRS):</strong> PP&amp;E có thể ghi theo giá trị hợp lý. Đánh giá tăng đi vòng qua KQKD vào OCI (<em>thặng dư đánh giá lại</em>) — trừ khi hoàn nhập một lần đánh giá giảm trước đó (lần đó đã qua lãi/lỗ). Đánh giá giảm đánh vào lợi nhuận trước. US GAAP chỉ cho phép giá gốc.</li><li><strong>Dừng ghi nhận:</strong> khi bán, lãi/lỗ = tiền thu − giá trị ghi sổ, báo cáo trong KQKD (và <em>loại khỏi CFO</em> theo phương pháp gián tiếp — dòng tiền thuộc CFI). Tài sản bỏ đi: xóa sổ giá trị ghi sổ thành khoản lỗ.</li><li><strong>Ước lượng từ thuyết minh</strong> — ba tỷ số nhanh với giả định khấu hao đường thẳng: <strong>tuổi bình quân ≈ khấu hao lũy kế / chi phí khấu hao năm</strong>; <strong>đời sử dụng bình quân ≈ nguyên giá PP&amp;E / chi phí khấu hao</strong>; <strong>đời còn lại ≈ giá trị ròng PP&amp;E / chi phí khấu hao</strong>. Đội tài sản già báo hiệu capex sắp tăng; so capex với khấu hao cho biết công ty đang mở rộng (capex &gt; khấu hao) hay đang \"gặt\" trên nền tài sản cũ.</li><li><strong>Độ nhạy của ước tính:</strong> kéo dài đời sử dụng, nâng giá trị thu hồi làm giảm khấu hao và thổi phồng lợi nhuận hiện tại — thay đổi giả định nhỏ dịch chuyển lợi nhuận đáng kể ở công ty nặng tài sản, nên phải so sánh giả định giữa các doanh nghiệp cùng ngành.</li></ul>"
    },
    {
     "h": "Capitalize vs expense with numbers + impairment under both frameworks",
     "en": "<p><strong>Worked comparison.</strong> A firm spends $90,000 on an item it could either capitalize (3-year straight-line, no salvage) or expense. Pre-spend operating income is $100,000 each year.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\"></th><th style=\"padding:7px;border:1px solid #D6DAFB\">Year 1</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Year 2</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Year 3</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Total</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">NI if expensed</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">10,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">100,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">100,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">210,000</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">NI if capitalized (−30k dep/yr)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">70,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">70,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">70,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">210,000</td></tr></table>\n<svg viewBox=\"0 0 720 320\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Capitalizing vs expensing effect on net income over time\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Same cash, different income path: capitalize vs expense</text>\n<line x1=\"70\" y1=\"260\" x2=\"680\" y2=\"260\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"260\" x2=\"70\" y2=\"55\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"675\" y=\"278\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Year</text>\n<text x=\"34\" y=\"66\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">NI</text>\n<line x1=\"70\" y1=\"160\" x2=\"680\" y2=\"160\" stroke=\"#E5E9F2\" stroke-width=\"1\"/>\n<polyline points=\"130,235 270,120 410,115 550,110 660,108\" fill=\"none\" stroke=\"#DC4848\" stroke-width=\"2.5\"/>\n<text x=\"132\" y=\"252\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#DC4848\" font-weight=\"700\">Expense: big hit year 1</text>\n<text x=\"480\" y=\"96\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#DC4848\">then higher NI (no ongoing charge)</text>\n<polyline points=\"130,140 270,145 410,150 550,155 660,158\" fill=\"none\" stroke=\"#5457E0\" stroke-width=\"2.5\"/>\n<text x=\"238\" y=\"172\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#5457E0\" font-weight=\"700\">Capitalize: smooth — depreciation each year</text>\n<text x=\"360\" y=\"300 \" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#8B5CF6\" font-weight=\"600\">Total NI over the asset's life is identical — only the timing differs. Capitalizing also boosts CFO (outflow → CFI).</text>\n</svg>\n<p>Totals are identical — only timing differs. But the <em>statement geography</em> differs permanently: capitalizing routes the outflow to <strong>CFI</strong> (raising CFO), shows higher assets and equity, and yields smoother income; expensing depresses year-1 profitability and ratios but makes later ROA/ROE look better (smaller asset base, no ongoing charge). Interest incurred during construction is capitalized into the asset's cost — analysts often add it back to interest expense when computing coverage ratios.</p>\n<p><strong>Depreciation drill.</strong> Cost 100,000, salvage 10,000, life 5 years, units capacity 45,000 (9,000 used in year 1). Straight-line = (100,000−10,000)/5 = <strong>18,000</strong>/yr. Double-declining balance year 1 = 2/5 × 100,000 = <strong>40,000</strong> (salvage ignored in the rate, but never depreciate below salvage). Units of production = 90,000 × 9,000/45,000 = <strong>18,000</strong>. Accelerated methods front-load expense: lower early NI, higher early tax deferral.</p>\n<p><strong>Impairment worked.</strong> Carrying amount 500. Fair value − costs to sell = 420; value in use (PV of expected cash flows) = 450; undiscounted expected cash flows = 510. <strong>IFRS:</strong> recoverable amount = max(420, 450) = 450 &lt; 500 → impair by <strong>50</strong>. <strong>US GAAP two-step:</strong> test — undiscounted cash flows 510 &gt; 500 → <em>no impairment at all</em>. Same facts, different answers: IFRS impairs sooner. IFRS also allows impairment <em>reversals</em> for long-lived assets (up to what carrying value would have been); US GAAP prohibits reversals for assets held for use. Under the IFRS revaluation model, upward revaluations bypass income and sit in equity (revaluation surplus) unless reversing a prior downward move.</p>\n<p><strong>Asset age estimates</strong> (from gross PP&E, accumulated depreciation, and annual depreciation expense): average age ≈ accumulated dep ÷ annual dep; average total life ≈ gross PP&E ÷ annual dep; remaining life ≈ net PP&E ÷ annual dep. An average age far above peers hints at an approaching capex wave.</p>",
     "vi": "<p><strong>So sánh bằng số.</strong> Công ty chi $90.000 cho một khoản có thể vốn hóa (khấu hao đường thẳng 3 năm, không giá trị thu hồi) hoặc tính vào chi phí. Lợi nhuận hoạt động trước khoản chi là $100.000/năm. Nếu tính chi phí: NI năm 1 = 10.000, năm 2-3 = 100.000, tổng 210.000. Nếu vốn hóa (−30k khấu hao/năm): NI mỗi năm = 70.000, tổng 210.000. Tổng bằng nhau — chỉ khác thời điểm. Nhưng <em>vị trí trên báo cáo</em> khác vĩnh viễn: vốn hóa đưa dòng chi vào <strong>CFI</strong> (đẩy CFO lên), tài sản và vốn chủ cao hơn, lợi nhuận mượt hơn; tính chi phí đè lợi nhuận và ratio năm 1 nhưng làm ROA/ROE các năm sau đẹp hơn (mẫu số tài sản nhỏ, không còn khấu hao). Lãi vay trong thời gian xây dựng được vốn hóa vào nguyên giá — nhà phân tích thường cộng ngược vào chi phí lãi khi tính hệ số bao phủ.</p>\n<p><strong>Drill khấu hao.</strong> Nguyên giá 100.000, thu hồi 10.000, đời 5 năm, công suất 45.000 đơn vị (năm 1 dùng 9.000). Đường thẳng = (100.000−10.000)/5 = <strong>18.000</strong>/năm. Số dư giảm dần kép năm 1 = 2/5 × 100.000 = <strong>40.000</strong> (bỏ giá trị thu hồi khỏi công thức, nhưng không bao giờ khấu hao xuống dưới mức thu hồi). Theo sản lượng = 90.000 × 9.000/45.000 = <strong>18.000</strong>. Khấu hao nhanh dồn chi phí về đầu: NI đầu kỳ thấp hơn, hoãn thuế sớm hơn.</p>\n<p><strong>Impairment bằng ví dụ.</strong> Giá trị ghi sổ 500. Fair value − chi phí bán = 420; value in use (PV dòng tiền kỳ vọng) = 450; dòng tiền kỳ vọng <em>chưa chiết khấu</em> = 510. <strong>IFRS:</strong> recoverable amount = max(420, 450) = 450 &lt; 500 → ghi giảm <strong>50</strong>. <strong>US GAAP hai bước:</strong> kiểm tra — dòng tiền chưa chiết khấu 510 &gt; 500 → <em>không ghi giảm gì cả</em>. Cùng dữ kiện, khác đáp án: IFRS ghi giảm sớm hơn. IFRS còn cho phép <em>hoàn nhập</em> impairment cho tài sản dài hạn (tối đa về mức ghi sổ lẽ ra có); US GAAP cấm hoàn nhập với tài sản đang sử dụng. Theo mô hình đánh giá lại của IFRS, phần tăng giá đi thẳng vào vốn chủ (revaluation surplus), không qua lợi nhuận, trừ khi đảo ngược lần giảm trước đó.</p>\n<p><strong>Ước tính tuổi tài sản</strong> (từ nguyên giá, khấu hao lũy kế, chi phí khấu hao năm): tuổi bình quân ≈ khấu hao lũy kế ÷ khấu hao năm; tổng đời bình quân ≈ nguyên giá ÷ khấu hao năm; đời còn lại ≈ PP&E ròng ÷ khấu hao năm. Tuổi bình quân cao hơn hẳn đối thủ ám chỉ một làn sóng capex sắp đến.</p>"
    }
   ],
   "formulas": [
    [
     "Straight-line depreciation",
     "(Cost − salvage) / useful life",
     ""
    ],
    [
     "DDB depreciation",
     "(2 / useful life) × beginning book value",
     "Book value never falls below salvage"
    ],
    [
     "Average asset age",
     "Accumulated depreciation / depreciation expense",
     ""
    ],
    [
     "Remaining useful life",
     "Ending net PP&E / depreciation expense",
     ""
    ],
    [
     "IFRS recoverable amount",
     "max(fair value − costs to sell, value in use)",
     "Impair when carrying > recoverable; reversals allowed under IFRS."
    ],
    [
     "Units-of-production dep.",
     "(cost − salvage) × units used / total capacity",
     "Ties expense to actual usage."
    ],
    [
     "US GAAP impairment test",
     "impair only if undiscounted CF < carrying amount",
     "Then write down to fair value — no reversals for held-for-use."
    ]
   ]
  },
  {
   "title": "Topics in Long-Term Liabilities and Equity",
   "sections": [
    {
     "h": "Bonds payable & the effective interest method",
     "en": "<ul><li><strong>At issuance</strong>, a bond is recorded at the proceeds received. Coupon = market rate → issued at par; coupon &lt; market → <strong>discount</strong>; coupon &gt; market → <strong>premium</strong>.</li><li><strong>Effective interest method:</strong> each period, <strong>interest expense = carrying amount × market rate at issuance</strong>; the cash coupon = face × coupon rate; the difference amortizes the discount/premium, moving the carrying amount toward par at maturity. For a <em>discount</em> bond, carrying value and interest expense <em>rise</em> over time; for a premium bond both fall. Coupon cash is CFO (US GAAP; CFO or CFF under IFRS), while issuance and repayment of principal are CFF.</li><li><strong>Derecognition before maturity:</strong> gain/loss on repurchase = carrying amount − repurchase price (redeeming below carrying value books a gain).</li><li><strong>Fair value option &amp; disclosures:</strong> firms may elect fair value reporting for financial liabilities (own-credit changes go to OCI). Footnotes disclose maturities, rates, and <strong>covenants</strong> — restrictions (leverage caps, minimum coverage) whose breach can trigger acceleration; analysts track covenant headroom.</li></ul>",
     "vi": "<ul><li><strong>Khi phát hành</strong>, trái phiếu ghi nhận theo số tiền thu được. Coupon = lãi suất thị trường → phát hành ngang mệnh giá; coupon &lt; thị trường → <strong>chiết khấu</strong>; coupon &gt; thị trường → <strong>phụ trội</strong>.</li><li><strong>Phương pháp lãi suất thực:</strong> mỗi kỳ, <strong>chi phí lãi vay = giá trị ghi sổ × lãi suất thị trường lúc phát hành</strong>; tiền coupon = mệnh giá × lãi coupon; phần chênh lệch phân bổ dần chiết khấu/phụ trội, kéo giá trị ghi sổ về mệnh giá lúc đáo hạn. Trái phiếu <em>chiết khấu</em>: giá trị ghi sổ và chi phí lãi <em>tăng dần</em>; phụ trội: cả hai giảm dần. Tiền coupon vào CFO (US GAAP; CFO hoặc CFF theo IFRS), còn phát hành và trả gốc vào CFF.</li><li><strong>Tất toán trước hạn:</strong> lãi/lỗ mua lại = giá trị ghi sổ − giá mua lại (mua lại dưới giá trị ghi sổ tạo khoản lãi).</li><li><strong>Tùy chọn giá trị hợp lý &amp; thuyết minh:</strong> doanh nghiệp có thể chọn ghi nợ tài chính theo giá trị hợp lý (thay đổi do tín nhiệm của chính mình vào OCI). Thuyết minh công bố kỳ hạn, lãi suất và <strong>covenant</strong> — các ràng buộc (trần đòn bẩy, sàn khả năng trả lãi) mà vi phạm có thể kích hoạt đòi nợ trước hạn; analyst theo dõi khoảng cách an toàn covenant.</li></ul>"
    },
    {
     "h": "Leases, pensions & share-based compensation",
     "en": "<ul><li><strong>Leases — lessee:</strong> under current standards, nearly all leases go on the balance sheet as a <strong>right-of-use (ROU) asset</strong> and a <strong>lease liability</strong> (PV of lease payments); exemptions exist for short-term (≤12 months) and low-value leases. <em>IFRS uses a single model</em>: every lease is treated like a financed purchase — depreciation on the ROU asset plus interest on the liability, so total expense is <strong>front-loaded</strong>. <em>US GAAP keeps two types for the income statement</em>: a <strong>finance lease</strong> mirrors IFRS (depreciation + interest), while an <strong>operating lease</strong> reports a single straight-line lease expense (fully in CFO). Classification therefore changes EBITDA, expense timing, and cash-flow geography — not the balance sheet, where both appear.</li><li><strong>Leases — lessor:</strong> a finance/sales-type lease derecognizes the asset and books a lease receivable (and possibly a selling profit); an operating lease keeps the asset and recognizes rental income.</li><li><strong>Pensions:</strong> a <strong>defined-contribution</strong> plan is simple — expense the contribution, no future obligation. A <strong>defined-benefit</strong> plan promises future payments: the balance sheet shows the <em>funded status</em> = fair value of plan assets − pension obligation (a net liability when underfunded). Remeasurement gains/losses go largely to OCI; service and interest costs affect earnings. DB plans embed big actuarial assumptions (discount rate, salary growth) — raising the discount rate shrinks the obligation.</li><li><strong>Share-based compensation:</strong> measure the <strong>fair value at the grant date</strong> and expense it over the vesting period — no subsequent remeasurement for equity-settled awards even if the share price moves. Options add potential dilution (treasury stock method in diluted EPS); RSUs dilute as they vest. Watch for firms touting \"adjusted\" earnings that exclude this genuine cost.</li></ul>",
     "vi": "<ul><li><strong>Thuê tài sản — bên đi thuê:</strong> theo chuẩn mực hiện hành, gần như mọi hợp đồng thuê đều lên bảng CĐKT dưới dạng <strong>tài sản quyền sử dụng (ROU)</strong> và <strong>nợ thuê</strong> (PV các khoản thanh toán); ngoại lệ cho thuê ngắn hạn (≤12 tháng) và tài sản giá trị thấp. <em>IFRS dùng một mô hình duy nhất</em>: mọi hợp đồng thuê như mua trả góp — khấu hao ROU + lãi trên nợ thuê, nên tổng chi phí <strong>dồn về các năm đầu</strong>. <em>US GAAP giữ hai loại trên KQKD</em>: <strong>finance lease</strong> giống IFRS (khấu hao + lãi), còn <strong>operating lease</strong> ghi một dòng chi phí thuê đều theo đường thẳng (toàn bộ trong CFO). Do đó cách phân loại thay đổi EBITDA, thời điểm ghi chi phí và vị trí dòng tiền — không thay đổi bảng CĐKT, nơi cả hai đều xuất hiện.</li><li><strong>Bên cho thuê:</strong> finance/sales-type lease dừng ghi nhận tài sản, ghi khoản phải thu (có thể kèm lợi nhuận bán hàng); operating lease giữ tài sản và ghi doanh thu cho thuê.</li><li><strong>Lương hưu:</strong> quỹ <strong>đóng góp xác định (DC)</strong> đơn giản — ghi chi phí phần đóng góp, không còn nghĩa vụ tương lai. Quỹ <strong>phúc lợi xác định (DB)</strong> hứa trả trong tương lai: bảng CĐKT trình bày <em>funded status</em> = giá trị hợp lý tài sản quỹ − nghĩa vụ lương hưu (nợ ròng khi thiếu hụt). Lãi/lỗ đánh giá lại phần lớn vào OCI; chi phí dịch vụ và lãi ảnh hưởng lợi nhuận. Quỹ DB chứa các giả định định phí lớn (lãi suất chiết khấu, tăng lương) — nâng lãi suất chiết khấu làm nghĩa vụ co lại.</li><li><strong>Thù lao bằng cổ phiếu:</strong> đo <strong>giá trị hợp lý tại ngày cấp</strong> và ghi chi phí dần theo thời gian vesting — không đánh giá lại với thưởng thanh toán bằng cổ phiếu dù giá cổ phiếu biến động. Quyền chọn tạo pha loãng tiềm năng (phương pháp cổ phiếu quỹ trong EPS pha loãng); RSU pha loãng khi vest. Cảnh giác doanh nghiệp khoe lợi nhuận \"điều chỉnh\" loại bỏ khoản chi phí rất thật này.</li></ul>"
    },
    {
     "h": "Bond amortization schedule + lease effects — fully worked",
     "en": "<p><strong>Discount bond schedule.</strong> Issue a 3-year bond, face $100,000, coupon 6% paid annually, market rate at issuance 8%. Issue price = PV of coupons and face at 8% = <strong>$94,846</strong>.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Year</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Opening CV</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Interest exp (8%)</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Coupon paid</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Amortization</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Closing CV</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">1</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">94,846</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">7,588</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">6,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">1,588</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">96,434</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">2</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">96,434</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">7,715</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">6,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">1,715</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">98,148</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">3</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">98,148</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">7,852</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">6,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">1,852</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">100,000</td></tr></table>\n<svg viewBox=\"0 0 720 320\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Bond carrying value converges to par\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Effective interest method: carrying value walks to par</text>\n<line x1=\"70\" y1=\"270\" x2=\"680\" y2=\"270\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"270\" x2=\"70\" y2=\"55\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"675\" y=\"288\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Time → maturity</text>\n<line x1=\"70\" y1=\"162\" x2=\"655\" y2=\"162\" stroke=\"#1B2438\" stroke-width=\"1.5\" stroke-dasharray=\"6 4\"/>\n<text x=\"662\" y=\"166\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1B2438\">Par</text>\n<path d=\"M 90 92 C 260 100 480 128 650 160\" fill=\"none\" stroke=\"#DC4848\" stroke-width=\"2.5\"/>\n<text x=\"120\" y=\"80\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#DC4848\">Premium bond (coupon &gt; market)</text>\n<text x=\"185\" y=\"126\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#DC4848\">interest expense &lt; coupon paid → CV falls</text>\n<path d=\"M 90 238 C 260 228 480 196 650 164\" fill=\"none\" stroke=\"#0F9573\" stroke-width=\"2.5\"/>\n<text x=\"120\" y=\"262\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F9573\">Discount bond (coupon &lt; market)</text>\n<text x=\"185\" y=\"212\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#0F9573\">interest expense &gt; coupon paid → CV rises</text>\n<text x=\"360\" y=\"306\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#8B5CF6\" font-weight=\"600\">Interest expense = market rate at issuance × beginning carrying value — the rate never changes afterward.</text>\n</svg>\n<p>Every row uses the <em>issuance</em> market rate — later market moves don't touch the schedule (unless the fair-value option is elected, where changes in value from <em>own credit risk</em> go to OCI). Cash-flow note: the coupon sits in CFO (US GAAP), but the amortization portion of true economic interest never shows as an operating outflow — so discount bonds slightly flatter CFO.</p>\n<p><strong>Leases from the lessee's chair.</strong> At commencement, recognize a right-of-use asset and a lease liability, both = PV of lease payments. IFRS has a single model: every lease (beyond 12-month/low-value exemptions) produces <strong>amortization + interest expense</strong> — front-loaded total cost. US GAAP keeps two: <em>finance leases</em> mirror IFRS, while <em>operating leases</em> report one straight-line lease expense (classified in CFO) even though a liability sits on the balance sheet.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Effect (early years)</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Finance / IFRS</th><th style=\"padding:7px;border:1px solid #D6DAFB\">US GAAP operating</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Expense pattern</td><td style=\"padding:7px;border:1px solid #E5E9F2\">higher early (interest + amortization)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">straight-line</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">EBITDA</td><td style=\"padding:7px;border:1px solid #E5E9F2\">higher (both charges below EBITDA)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">lower (lease expense is operating)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">CFO</td><td style=\"padding:7px;border:1px solid #E5E9F2\">higher (principal repayment → CFF)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">lower (full payment → CFO)</td></tr></table>\n<p><strong>Pensions in two lines.</strong> Funded status = plan assets − PBO; overfunded → net asset, underfunded → net liability on the balance sheet. Defined-<em>contribution</em> plans have no such liability — expense equals the contribution, full stop. <strong>Share-based comp:</strong> fair value at grant date, expensed over the vesting period; it is a real economic cost even though non-cash (watch firms that tout \"adjusted\" earnings excluding it).</p>",
     "vi": "<p><strong>Lịch trái phiếu chiết khấu.</strong> Phát hành trái phiếu 3 năm, mệnh giá $100.000, coupon 6% trả hằng năm, lãi suất thị trường lúc phát hành 8%. Giá phát hành = PV coupon và mệnh giá tại 8% = <strong>$94.846</strong>. Lịch trong bảng: mỗi năm, chi phí lãi = 8% × giá trị ghi sổ đầu kỳ; phần chênh với coupon $6.000 là khoản phân bổ làm giá trị ghi sổ leo dần về $100.000 khi đáo hạn (94.846 → 96.434 → 98.148 → 100.000).</p>\n<p>Mọi dòng đều dùng lãi suất thị trường <em>lúc phát hành</em> — biến động thị trường sau đó không chạm vào lịch (trừ khi chọn fair-value option, khi đó thay đổi giá trị do <em>rủi ro tín dụng của chính mình</em> đi vào OCI). Ghi chú dòng tiền: coupon nằm trong CFO (US GAAP), nhưng phần phân bổ của lãi kinh tế thực không bao giờ hiện thành dòng chi hoạt động — nên trái phiếu chiết khấu \"nịnh\" CFO một chút.</p>\n<p><strong>Thuê tài sản từ ghế bên thuê.</strong> Tại thời điểm bắt đầu, ghi nhận right-of-use asset và lease liability, cả hai = PV các khoản thanh toán thuê. IFRS một mô hình duy nhất: mọi hợp đồng thuê (ngoài miễn trừ 12 tháng/giá trị thấp) tạo ra <strong>khấu hao + chi phí lãi</strong> — tổng chi phí dồn về đầu. US GAAP giữ hai loại: <em>finance lease</em> giống IFRS, còn <em>operating lease</em> báo cáo một dòng chi phí thuê đường thẳng (phân loại CFO) dù nợ vẫn nằm trên balance sheet. Hệ quả những năm đầu: finance/IFRS — chi phí cao hơn, EBITDA cao hơn (cả hai khoản nằm dưới EBITDA), CFO cao hơn (trả gốc → CFF); operating US GAAP — chi phí đường thẳng, EBITDA thấp hơn, CFO thấp hơn (trả toàn bộ → CFO).</p>\n<p><strong>Hưu trí trong hai dòng.</strong> Funded status = tài sản quỹ − PBO; thặng dư → tài sản ròng, thiếu hụt → nợ ròng trên balance sheet. Quỹ đóng góp xác định (defined-contribution) không có khoản nợ đó — chi phí đúng bằng khoản đóng góp, chấm hết. <strong>Thù lao bằng cổ phiếu:</strong> fair value tại ngày cấp, phân bổ chi phí theo kỳ vesting; đây là chi phí kinh tế thật dù không phải tiền mặt (cảnh giác công ty khoe lợi nhuận \"điều chỉnh\" loại khoản này ra).</p>"
    }
   ],
   "formulas": [
    [
     "Interest expense (bond)",
     "Carrying amount × market rate at issuance",
     "Effective interest method"
    ],
    [
     "Funded status",
     "Fair value of plan assets − pension obligation",
     "Negative = net pension liability"
    ],
    [
     "Lease liability",
     "PV of lease payments",
     "ROU asset initially ≈ lease liability"
    ],
    [
     "Bond interest expense",
     "market rate at issuance × beginning carrying value",
     "Coupon = coupon rate × face; difference amortizes the premium/discount."
    ],
    [
     "ROU asset & lease liability",
     "both = PV of lease payments at commencement",
     "IFRS: one model (amortization + interest). US GAAP: dual model."
    ]
   ]
  },
  {
   "title": "Analysis of Income Taxes",
   "sections": [
    {
     "h": "Where deferred taxes come from: carrying amount vs tax base",
     "en": "<p>Financial reporting and tax reporting follow different rules, so <strong>accounting profit</strong> (pre-tax income on the income statement) differs from <strong>taxable income</strong> (on the tax return). For every asset and liability, compare its <strong>carrying amount</strong> (books) with its <strong>tax base</strong> (tax return). <em>Temporary</em> differences reverse over time and create deferred taxes:</p><ul><li><strong>Deferred tax liability (DTL)</strong> — taxes postponed to the future. Classic source: <em>accelerated depreciation for tax, straight-line for books</em> → the asset’s tax base falls below its carrying amount → less tax now, more later. Analysts ask: will this DTL actually reverse? If growth keeps replenishing it indefinitely, many treat it as closer to equity than debt.</li><li><strong>Deferred tax asset (DTA)</strong> — taxes prepaid or future deductions. Sources: warranty and restructuring accruals (expensed on the books now, deductible for tax only when paid) and <strong>tax-loss carryforwards</strong>.</li></ul><p>Income tax expense links the pieces: <strong>tax expense = taxes payable + ΔDTL − ΔDTA</strong>.</p><p><em>Permanent</em> differences (tax-exempt interest, non-deductible fines) never reverse: they create <strong>no</strong> deferred taxes but push the <strong>effective tax rate</strong> away from the statutory rate.</p>",
     "vi": "<p>Kế toán tài chính và kê khai thuế theo hai bộ quy tắc khác nhau, nên <strong>lợi nhuận kế toán</strong> (trên báo cáo KQKD) khác <strong>thu nhập chịu thuế</strong> (trên tờ khai). Với mỗi tài sản/nợ, so sánh <strong>giá trị ghi sổ</strong> (sổ kế toán) và <strong>cơ sở thuế</strong> (tờ khai). Chênh lệch <em>tạm thời</em> sẽ hoàn nhập theo thời gian và tạo ra thuế hoãn lại:</p><ul><li><strong>Thuế hoãn lại phải trả (DTL)</strong> — thuế được hoãn sang tương lai. Nguồn kinh điển: <em>khấu hao thuế nhanh, khấu hao sổ sách đường thẳng</em> → cơ sở thuế của tài sản thấp hơn giá trị ghi sổ → nộp ít thuế bây giờ, nhiều hơn về sau. Analyst hỏi: DTL này có thực sự hoàn nhập không? Nếu tăng trưởng liên tục \"đắp\" thêm vô thời hạn, nhiều người coi nó gần với vốn chủ hơn là nợ.</li><li><strong>Tài sản thuế hoãn lại (DTA)</strong> — thuế trả trước hoặc khoản khấu trừ tương lai. Nguồn: trích trước bảo hành, tái cấu trúc (ghi chi phí sổ sách ngay nhưng chỉ được khấu trừ thuế khi chi trả) và <strong>lỗ chuyển sang kỳ sau</strong>.</li></ul><p>Chi phí thuế nối các mảnh: <strong>chi phí thuế = thuế phải nộp + ΔDTL − ΔDTA</strong>.</p><p>Chênh lệch <em>vĩnh viễn</em> (lãi trái phiếu miễn thuế, tiền phạt không được khấu trừ) không bao giờ hoàn nhập: <strong>không</strong> tạo thuế hoãn lại nhưng kéo <strong>thuế suất hiệu dụng</strong> lệch khỏi thuế suất luật định.</p>"
    },
    {
     "h": "Rate changes, valuation allowance & reading the effective rate",
     "en": "<ul><li><strong>Measurement:</strong> DTAs and DTLs are measured at the tax rates <em>expected to apply when the differences reverse</em> (enacted or substantively enacted rates) — and they are <strong>not discounted</strong>. When the government changes the rate, existing balances are revalued immediately, with the adjustment flowing through income tax expense: a rate <em>cut</em> shrinks both DTLs (a gain for net-DTL firms) and DTAs (a loss for net-DTA firms).</li><li><strong>Recoverability:</strong> a DTA has value only if future taxable income will absorb it. Under US GAAP, a <strong>valuation allowance</strong> (contra-asset) reduces the DTA to the amount more likely than not to be realized — increasing the allowance raises tax expense and cuts income. Under IFRS, the DTA is recognized only to the extent recovery is probable (same economics, different mechanics). A sudden allowance increase is a management signal of weaker profit expectations; a release can flatter earnings.</li><li><strong>Effective-rate analysis:</strong> the footnote reconciliation from statutory to <strong>effective tax rate</strong> (tax expense ÷ pre-tax income) reveals permanent differences, foreign-rate mix, incentives, and one-offs. Persistent gaps and volatile effective rates deserve scrutiny; use a normalized rate when forecasting.</li></ul>",
     "vi": "<ul><li><strong>Đo lường:</strong> DTA/DTL đo theo thuế suất <em>dự kiến áp dụng khi chênh lệch hoàn nhập</em> (thuế suất đã ban hành) — và <strong>không chiết khấu</strong>. Khi nhà nước đổi thuế suất, số dư hiện có được đánh giá lại ngay, phần điều chỉnh chạy qua chi phí thuế: <em>giảm</em> thuế suất làm co cả DTL (khoản lợi cho công ty DTL ròng) lẫn DTA (khoản thiệt cho công ty DTA ròng).</li><li><strong>Khả năng thu hồi:</strong> DTA chỉ có giá trị nếu thu nhập chịu thuế tương lai đủ hấp thụ. Theo US GAAP, <strong>valuation allowance</strong> (tài khoản đối trừ) giảm DTA về mức nhiều khả năng thực hiện được — tăng allowance làm tăng chi phí thuế, giảm lợi nhuận. Theo IFRS, DTA chỉ ghi nhận tới mức có khả năng thu hồi (bản chất giống nhau, cơ chế khác). Allowance tăng đột ngột là tín hiệu ban lãnh đạo bi quan về lợi nhuận tương lai; hoàn nhập allowance có thể làm đẹp lợi nhuận.</li><li><strong>Phân tích thuế suất hiệu dụng:</strong> bảng đối chiếu trong thuyết minh từ thuế suất luật định về <strong>thuế suất hiệu dụng</strong> (chi phí thuế ÷ lợi nhuận trước thuế) bộc lộ chênh lệch vĩnh viễn, cơ cấu thuế nước ngoài, ưu đãi và khoản một lần. Khoảng cách dai dẳng và thuế suất hiệu dụng biến động cần soi kỹ; dùng thuế suất chuẩn hóa khi dự phóng.</li></ul>"
    },
    {
     "h": "Build the DTL from a depreciation difference — then break it",
     "en": "<p><strong>The single most-tested deferred-tax setup.</strong> Asset cost 12,000, two-year life. Books use straight-line (6,000/yr); tax allows accelerated (8,000 then 4,000). Tax rate 30%. EBITDA is 20,000 both years.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\"></th><th style=\"padding:7px;border:1px solid #D6DAFB\">Year 1</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Year 2</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Pretax (book) income</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">14,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">14,000</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Taxable income</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">12,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">16,000</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Taxes payable (30%)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">3,600</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">4,800</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Carrying amount vs tax base (end)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">6,000 vs 4,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">0 vs 0</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">DTL = difference × 30%</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>600</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>0</strong> (reversed)</td></tr>\n<tr style=\"background:#EEF0FE\"><td style=\"padding:7px;border:1px solid #E5E9F2\"><strong>Tax expense = payable + ΔDTL</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>4,200</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>4,200</strong></td></tr></table>\n<svg viewBox=\"0 0 720 320\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Deferred tax decision map\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Deferred taxes: compare carrying amount to tax base</text>\n<rect x=\"60\" y=\"60\" width=\"290\" height=\"100\" rx=\"10\" fill=\"#FDECEC\" stroke=\"#DC4848\" stroke-width=\"1.5\"/>\n<text x=\"205\" y=\"88\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#DC4848\">ASSET: carrying &gt; tax base → DTL</text>\n<text x=\"205\" y=\"110\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">book income &gt; taxable income today,</text>\n<text x=\"205\" y=\"126\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">extra tax comes later (e.g. accelerated</text>\n<text x=\"205\" y=\"142\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">tax depreciation)</text>\n<rect x=\"370\" y=\"60\" width=\"290\" height=\"100\" rx=\"10\" fill=\"#E7F6F0\" stroke=\"#0F9573\" stroke-width=\"1.5\"/>\n<text x=\"515\" y=\"88\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0F9573\">ASSET: carrying &lt; tax base → DTA</text>\n<text x=\"515\" y=\"110\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">tax paid now exceeds book expense —</text>\n<text x=\"515\" y=\"126\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">benefit later (e.g. impairment not yet</text>\n<text x=\"515\" y=\"142\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">deductible; also loss carryforwards)</text>\n<rect x=\"60\" y=\"176\" width=\"290\" height=\"80\" rx=\"10\" fill=\"#E7F6F0\" stroke=\"#0F9573\" stroke-width=\"1.5\"/>\n<text x=\"205\" y=\"204\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0F9573\">LIABILITY: carrying &gt; tax base → DTA</text>\n<text x=\"205\" y=\"226\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">e.g. warranty accrual expensed in books,</text>\n<text x=\"205\" y=\"242\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">deductible only when paid</text>\n<rect x=\"370\" y=\"176\" width=\"290\" height=\"80\" rx=\"10\" fill=\"#FDECEC\" stroke=\"#DC4848\" stroke-width=\"1.5\"/>\n<text x=\"515\" y=\"204\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#DC4848\">LIABILITY: carrying &lt; tax base → DTL</text>\n<text x=\"515\" y=\"226\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">rarer case — mirror the asset rule</text>\n<text x=\"360\" y=\"290\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#8B5CF6\" font-weight=\"600\">Memory hook: for assets, \"carrying ahead of tax base = tax bill deferred\" (DTL). Liabilities flip the sign.</text>\n</svg>\n<p>Year 1: books show more asset than tax does (6,000 &gt; 4,000) → a DTL of 600; income tax <em>expense</em> (4,200) = taxes <em>payable</em> (3,600) + increase in DTL (600). Year 2 the difference reverses and expense = 4,800 − 600 = 4,200 again. Smooth expense, lumpy cash taxes — that's the whole point of deferred taxes.</p>\n<p><strong>Rate change worked.</strong> If, at the end of year 1, the tax rate drops from 30% to 25%, the DTL is remeasured: 2,000 × 25% = 500, and the 100 release <em>reduces</em> tax expense immediately. Rule: rate cuts shrink both DTLs (good for income) and DTAs (bad); rate hikes do the opposite. <strong>Valuation allowance</strong> (US GAAP) reduces DTAs when realization is not more-likely-than-not — e.g. a firm with loss carryforwards but fading profit prospects; creating the allowance raises tax expense, and <em>releasing</em> it is a classic one-off earnings boost to scrutinize. <strong>Permanent differences</strong> (tax-exempt interest, non-deductible fines) never create deferred taxes — they change the <em>effective</em> tax rate away from the statutory rate; the effective-rate reconciliation footnote is where analysts hunt for sustainability of a low rate. If a DTL is never expected to reverse (perpetual capex growth), many analysts treat it as quasi-equity rather than debt.</p>",
     "vi": "<p><strong>Tình huống deferred tax được hỏi nhiều nhất.</strong> Tài sản nguyên giá 12.000, đời 2 năm. Sổ sách khấu hao đường thẳng (6.000/năm); thuế cho khấu hao nhanh (8.000 rồi 4.000). Thuế suất 30%. EBITDA 20.000 cả hai năm. Năm 1: lợi nhuận kế toán 14.000, thu nhập chịu thuế 12.000, thuế phải nộp 3.600; cuối năm giá trị ghi sổ 6.000 vs cơ sở thuế 4.000 → DTL = 2.000 × 30% = <strong>600</strong>; chi phí thuế = 3.600 + 600 = <strong>4.200</strong>. Năm 2: chênh lệch đảo ngược, thuế phải nộp 4.800, chi phí thuế = 4.800 − 600 = <strong>4.200</strong>. Chi phí mượt, tiền thuế gồ ghề — đó chính là bản chất của deferred tax.</p>\n<p><strong>Thay đổi thuế suất bằng ví dụ.</strong> Nếu cuối năm 1 thuế suất giảm từ 30% xuống 25%, DTL được đo lại: 2.000 × 25% = 500, và khoản hoàn 100 <em>giảm ngay</em> chi phí thuế. Quy tắc: giảm thuế suất làm co cả DTL (lợi cho lợi nhuận) lẫn DTA (bất lợi); tăng thuế suất thì ngược lại. <strong>Valuation allowance</strong> (US GAAP) giảm DTA khi khả năng hiện thực hóa không đạt \"nhiều khả năng hơn không\" — ví dụ công ty có lỗ chuyển tiếp nhưng triển vọng lợi nhuận mờ dần; lập allowance làm tăng chi phí thuế, còn <em>hoàn nhập</em> nó là cú hích lợi nhuận một lần kinh điển cần soi kỹ. <strong>Chênh lệch vĩnh viễn</strong> (lãi miễn thuế, tiền phạt không được khấu trừ) không bao giờ tạo deferred tax — chúng kéo <em>effective tax rate</em> lệch khỏi thuế suất luật định; thuyết minh đối chiếu effective rate là nơi nhà phân tích săn tính bền vững của mức thuế thấp. Nếu DTL được dự kiến không bao giờ đảo (capex tăng mãi), nhiều nhà phân tích coi nó như \"bán vốn chủ\" thay vì nợ.</p>"
    }
   ],
   "formulas": [
    [
     "Income tax expense",
     "Taxes payable + ΔDTL − ΔDTA",
     ""
    ],
    [
     "Effective tax rate",
     "Income tax expense / pre-tax income",
     "Reconciled to statutory rate in footnotes"
    ],
    [
     "DTL / DTA (assets)",
     "(carrying amount − tax base) × tax rate",
     "Positive → DTL; negative → DTA. Liabilities flip the sign."
    ],
    [
     "Deferred tax remeasurement",
     "new balance = temporary difference × new rate",
     "Rate cut shrinks DTLs (boosts NI) and DTAs (hurts NI)."
    ]
   ]
  },
  {
   "title": "Financial Analysis Techniques",
   "sections": [
    {
     "h": "The ratio families",
     "en": "<table class=\"simple\"><tr><th>Family</th><th>Key ratios</th></tr><tr><td><strong>Activity</strong></td><td>Inventory turnover = COGS/avg inventory; Receivables turnover = revenue/avg receivables; DOH = 365/inventory turnover; DSO = 365/receivables turnover; Cash conversion cycle = DOH + DSO − days payables</td></tr><tr><td><strong>Liquidity</strong></td><td>Current ratio = CA/CL; Quick ratio = (cash + ST investments + receivables)/CL; Cash ratio</td></tr><tr><td><strong>Solvency</strong></td><td>Debt-to-equity; Debt-to-assets; Financial leverage = avg assets/avg equity; Interest coverage = EBIT/interest</td></tr><tr><td><strong>Profitability</strong></td><td>Gross/operating/net margin; ROA = NI/avg assets; ROE = NI/avg equity</td></tr></table>",
     "vi": "<p>Bốn nhóm chỉ số: <strong>Hoạt động</strong> (vòng quay tồn kho = COGS/tồn kho bình quân; vòng quay phải thu; DOH; DSO; chu kỳ chuyển đổi tiền = DOH + DSO − số ngày phải trả); <strong>Thanh khoản</strong> (current ratio, quick ratio, cash ratio); <strong>Khả năng trả nợ dài hạn</strong> (nợ/VCSH, nợ/tài sản, đòn bẩy tài chính, khả năng trả lãi = EBIT/lãi vay); <strong>Sinh lời</strong> (biên gộp/hoạt động/ròng, ROA, ROE).</p>"
    },
    {
     "h": "DuPont decomposition of ROE",
     "en": "<p>The 3-factor DuPont: <strong>ROE = Net profit margin × Asset turnover × Financial leverage</strong> = (NI/Revenue) × (Revenue/Assets) × (Assets/Equity). The 5-factor version splits the margin into tax burden (NI/EBT), interest burden (EBT/EBIT), and EBIT margin. DuPont reveals <em>why</em> ROE changed: profitability, efficiency, or simply more debt. Rising ROE driven only by leverage is lower quality than ROE driven by margins or turnover.</p>",
     "vi": "<p>DuPont 3 nhân tố: <strong>ROE = Biên LN ròng × Vòng quay tài sản × Đòn bẩy tài chính</strong> = (NI/Doanh thu) × (Doanh thu/Tài sản) × (Tài sản/VCSH). Bản 5 nhân tố tách biên lợi nhuận thành gánh nặng thuế (NI/EBT), gánh nặng lãi vay (EBT/EBIT) và biên EBIT. DuPont cho biết <em>vì sao</em> ROE thay đổi: nhờ sinh lời, hiệu quả sử dụng tài sản, hay chỉ vì vay nợ nhiều hơn. ROE tăng chỉ nhờ đòn bẩy có chất lượng thấp hơn ROE tăng nhờ biên lợi nhuận hoặc vòng quay.</p>"
    },
    {
     "h": "Five-factor DuPont, comparisons & the limits of ratios",
     "en": "<ul><li><strong>Five-factor DuPont</strong> splits the profit margin into tax and interest effects: <strong>ROE = (NI/EBT) × (EBT/EBIT) × (EBIT/Revenue) × (Revenue/Assets) × (Assets/Equity)</strong> — tax burden × interest burden × EBIT margin × asset turnover × leverage. Note the traps: a <em>higher</em> tax burden ratio means <em>lower</em> taxes (NI/EBT closer to 1); more debt raises leverage but lowers the interest burden ratio — the two leverage effects partially offset.</li><li><strong>How to compare:</strong> <em>cross-sectional</em> (against peers, same period) and <em>trend/time-series</em> (against the firm’s own history); pair both with common-size statements. For diversified firms, use <strong>segment disclosures</strong> (revenue, profit, assets by segment) to find where returns are earned and how capex is allocated relative to segment profitability.</li><li><strong>Limits of ratio analysis:</strong> accounting choices (FIFO/LIFO, depreciation, leases) distort comparability; ratios have no single \"correct\" level — context and strategy matter; year-end balance-sheet values may be unrepresentative (use averages); conglomerates blur industry benchmarks; and ratios describe the past, so combine them with forward-looking judgment. Ratios raise questions; they rarely answer them alone.</li></ul>",
     "vi": "<ul><li><strong>DuPont 5 nhân tố</strong> tách biên lợi nhuận thành hiệu ứng thuế và lãi vay: <strong>ROE = (NI/EBT) × (EBT/EBIT) × (EBIT/Doanh thu) × (Doanh thu/Tài sản) × (Tài sản/VCSH)</strong> — gánh nặng thuế × gánh nặng lãi vay × biên EBIT × vòng quay tài sản × đòn bẩy. Bẫy cần nhớ: tỷ số gánh nặng thuế <em>cao hơn</em> nghĩa là thuế <em>thấp hơn</em> (NI/EBT gần 1); vay nhiều làm đòn bẩy tăng nhưng tỷ số gánh nặng lãi vay giảm — hai hiệu ứng đòn bẩy triệt tiêu nhau một phần.</li><li><strong>Cách so sánh:</strong> <em>cắt ngang</em> (với doanh nghiệp cùng ngành, cùng kỳ) và <em>chuỗi thời gian</em> (với lịch sử của chính công ty); kết hợp với báo cáo common-size. Với công ty đa ngành, dùng <strong>thuyết minh theo mảng</strong> (doanh thu, lợi nhuận, tài sản từng mảng) để biết lợi nhuận đến từ đâu và capex có được phân bổ tương xứng với hiệu quả từng mảng không.</li><li><strong>Giới hạn của phân tích chỉ số:</strong> lựa chọn kế toán (FIFO/LIFO, khấu hao, thuê tài sản) làm méo tính so sánh; không có mức \"đúng\" duy nhất — bối cảnh và chiến lược quyết định; số dư cuối năm có thể không đại diện (nên dùng bình quân); tập đoàn đa ngành làm nhòe chuẩn ngành; và chỉ số mô tả quá khứ nên phải kết hợp phán đoán hướng tương lai. Chỉ số đặt ra câu hỏi; hiếm khi tự nó trả lời.</li></ul>"
    },
    {
     "h": "Ratio lab: one company, full DuPont & the cash conversion cycle",
     "en": "<p><strong>Data ($m):</strong> Revenue 1,200; EBIT 180; interest 30; tax rate 25% → EBT 150, NI 112.5. Assets 1,000; equity 500. COGS 720; average inventory 120; average receivables 100; average payables 90.</p>\n<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"DuPont decomposition tree\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">DuPont: unpacking ROE into its drivers</text>\n<rect x=\"290\" y=\"42\" width=\"140\" height=\"38\" rx=\"9\" fill=\"#5457E0\"/>\n<text x=\"360\" y=\"66\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#fff\">ROE</text>\n<line x1=\"360\" y1=\"80\" x2=\"170\" y2=\"120\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"360\" y1=\"80\" x2=\"360\" y2=\"120\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"360\" y1=\"80\" x2=\"550\" y2=\"120\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<rect x=\"80\" y=\"122\" width=\"180\" height=\"52\" rx=\"9\" fill=\"#EEF0FE\" stroke=\"#5457E0\"/>\n<text x=\"170\" y=\"143\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#4338CA\">Net profit margin</text>\n<text x=\"170\" y=\"161\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">NI / Revenue — profitability</text>\n<rect x=\"270\" y=\"122\" width=\"180\" height=\"52\" rx=\"9\" fill=\"#E7F6F0\" stroke=\"#0F9573\"/>\n<text x=\"360\" y=\"143\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F9573\">Asset turnover</text>\n<text x=\"360\" y=\"161\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">Revenue / Assets — efficiency</text>\n<rect x=\"460\" y=\"122\" width=\"180\" height=\"52\" rx=\"9\" fill=\"#FBF3E4\" stroke=\"#B45309\"/>\n<text x=\"550\" y=\"143\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#B45309\">Financial leverage</text>\n<text x=\"550\" y=\"161\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">Assets / Equity — gearing</text>\n<line x1=\"170\" y1=\"174\" x2=\"115\" y2=\"212\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"170\" y1=\"174\" x2=\"240\" y2=\"212\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<rect x=\"40\" y=\"214\" width=\"150\" height=\"52\" rx=\"9\" fill=\"#F7F8FD\" stroke=\"#8B5CF6\"/>\n<text x=\"115\" y=\"235\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#8B5CF6\">Tax burden</text>\n<text x=\"115\" y=\"252\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">NI / EBT</text>\n<rect x=\"200\" y=\"214\" width=\"150\" height=\"52\" rx=\"9\" fill=\"#F7F8FD\" stroke=\"#8B5CF6\"/>\n<text x=\"275\" y=\"235\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#8B5CF6\">Interest burden</text>\n<text x=\"275\" y=\"252\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">EBT / EBIT</text>\n<rect x=\"360\" y=\"214\" width=\"160\" height=\"52\" rx=\"9\" fill=\"#F7F8FD\" stroke=\"#8B5CF6\"/>\n<text x=\"440\" y=\"235\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#8B5CF6\">EBIT margin</text>\n<text x=\"440\" y=\"252\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">EBIT / Revenue</text>\n<text x=\"360\" y=\"298\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">5-factor: ROE = (NI/EBT) × (EBT/EBIT) × (EBIT/Rev) × (Rev/Assets) × (Assets/Equity)</text>\n<text x=\"360\" y=\"318\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">Higher leverage raises ROE only while ROA exceeds the cost of the extra debt.</text>\n</svg>\n<p><strong>Three-factor DuPont:</strong> ROE = margin × turnover × leverage = (112.5/1,200) × (1,200/1,000) × (1,000/500) = 9.375% × 1.2 × 2.0 = <strong>22.5%</strong>. <strong>Five-factor:</strong> tax burden (NI/EBT) = 0.75 · interest burden (EBT/EBIT) = 0.833 · EBIT margin = 15% · turnover 1.2 · leverage 2.0 → 0.75 × 0.833 × 0.15 × 1.2 × 2.0 = <strong>22.5%</strong> ✓. The decomposition tells you <em>where</em> ROE comes from: a firm can post the same 22.5% from fat margins with low leverage or thin margins with heavy debt — very different risk. Leverage helps only while the return on borrowed assets beats the after-tax cost of debt; past that point the interest burden factor collapses faster than leverage rises.</p>\n<svg viewBox=\"0 0 720 300\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cash conversion cycle timeline\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Cash conversion cycle: days your cash is stuck in operations</text>\n<line x1=\"60\" y1=\"120\" x2=\"680\" y2=\"120\" stroke=\"#1B2438\" stroke-width=\"2\"/>\n<line x1=\"60\" y1=\"110\" x2=\"60\" y2=\"130\" stroke=\"#1B2438\" stroke-width=\"2\"/>\n<text x=\"60\" y=\"100\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">buy inventory</text>\n<line x1=\"380\" y1=\"110\" x2=\"380\" y2=\"130\" stroke=\"#1B2438\" stroke-width=\"2\"/>\n<text x=\"380\" y=\"100\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">sell (on credit)</text>\n<line x1=\"640\" y1=\"110\" x2=\"640\" y2=\"130\" stroke=\"#1B2438\" stroke-width=\"2\"/>\n<text x=\"640\" y=\"100\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">collect cash</text>\n<path d=\"M 60 140 L 380 140\" stroke=\"#5457E0\" stroke-width=\"7\"/>\n<text x=\"220\" y=\"164\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#5457E0\">DOH = 60 days (inventory)</text>\n<path d=\"M 380 140 L 640 140\" stroke=\"#0F9573\" stroke-width=\"7\"/>\n<text x=\"510\" y=\"164\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0F9573\">DSO = 40 days (receivables)</text>\n<path d=\"M 60 196 L 320 196\" stroke=\"#B45309\" stroke-width=\"7\"/>\n<text x=\"190\" y=\"220\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#B45309\">DPO = 45 days — supplier finances you</text>\n<line x1=\"320\" y1=\"186\" x2=\"320\" y2=\"206\" stroke=\"#B45309\" stroke-width=\"2\"/>\n<text x=\"322\" y=\"232\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">pay supplier here</text>\n<text x=\"360\" y=\"272\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#8B5CF6\">CCC = DOH + DSO − DPO = 60 + 40 − 45 = 55 days of financing needed</text>\n</svg>\n<p><strong>Activity ratios from the same data.</strong> Inventory turnover = 720/120 = 6 → DOH = 365/6 ≈ <strong>61 days</strong>. Receivables turnover = 1,200/100 = 12 → DSO ≈ <strong>30 days</strong>. Payables turnover = 720/90 = 8 → DPO ≈ <strong>46 days</strong>. Cash conversion cycle = 61 + 30 − 46 = <strong>45 days</strong>. Shorter is generally better; a <em>negative</em> CCC (suppliers finance the whole cycle, retail giants) is a structural advantage. Watch the decomposition when CCC \"improves\": stretching payables is fragile; faster inventory turns are real efficiency.</p>\n<p><strong>Reading rules for every ratio question:</strong> use averages for balance-sheet items when mixing with flow items; compare against the firm's history and true peers, not the whole market; and remember ratios inherit every accounting choice you just studied — a LIFO firm's turnover, margins, and current ratio are not directly comparable to a FIFO peer's until you convert with the LIFO reserve. Sustainable growth g = retention ratio × ROE: with a 40% payout, g = 0.6 × 22.5% = <strong>13.5%</strong> — growth beyond that needs new capital or more leverage.</p>",
     "vi": "<p><strong>Dữ liệu ($m):</strong> Doanh thu 1.200; EBIT 180; lãi vay 30; thuế suất 25% → EBT 150, NI 112,5. Tài sản 1.000; vốn chủ 500. COGS 720; tồn kho bình quân 120; phải thu bình quân 100; phải trả bình quân 90.</p>\n<p><strong>DuPont 3 nhân tố:</strong> ROE = biên lợi nhuận × vòng quay × đòn bẩy = (112,5/1.200) × (1.200/1.000) × (1.000/500) = 9,375% × 1,2 × 2,0 = <strong>22,5%</strong>. <strong>5 nhân tố:</strong> gánh nặng thuế (NI/EBT) = 0,75 · gánh nặng lãi (EBT/EBIT) = 0,833 · biên EBIT = 15% · vòng quay 1,2 · đòn bẩy 2,0 → tích = <strong>22,5%</strong> ✓. Phép phân rã cho biết ROE đến <em>từ đâu</em>: một công ty có thể đạt cùng 22,5% từ biên dày với đòn bẩy thấp, hoặc biên mỏng với nợ nặng — rủi ro rất khác nhau. Đòn bẩy chỉ giúp khi suất sinh lời trên tài sản đi vay vượt chi phí nợ sau thuế; quá điểm đó, nhân tố gánh nặng lãi sụp nhanh hơn đòn bẩy tăng.</p>\n<p><strong>Tỷ số hoạt động từ cùng bộ số.</strong> Vòng quay tồn kho = 720/120 = 6 → DOH = 365/6 ≈ <strong>61 ngày</strong>. Vòng quay phải thu = 1.200/100 = 12 → DSO ≈ <strong>30 ngày</strong>. Vòng quay phải trả = 720/90 = 8 → DPO ≈ <strong>46 ngày</strong>. Cash conversion cycle = 61 + 30 − 46 = <strong>45 ngày</strong>. Ngắn hơn nhìn chung tốt hơn; CCC <em>âm</em> (nhà cung cấp tài trợ trọn chu kỳ, các đại gia bán lẻ) là lợi thế cấu trúc. Soi kỹ khi CCC \"cải thiện\": kéo dài phải trả là mong manh; tồn kho quay nhanh hơn mới là hiệu quả thật.</p>\n<p><strong>Quy tắc đọc cho mọi câu hỏi ratio:</strong> dùng số bình quân cho khoản mục balance sheet khi ghép với khoản mục dòng chảy; so với lịch sử của chính công ty và đối thủ thực sự, không phải cả thị trường; và nhớ ratio thừa hưởng mọi lựa chọn kế toán vừa học — turnover, biên lợi nhuận, current ratio của công ty LIFO không so trực tiếp được với đối thủ FIFO cho đến khi quy đổi bằng LIFO reserve. Tăng trưởng bền vững g = tỷ lệ giữ lại × ROE: với payout 40%, g = 0,6 × 22,5% = <strong>13,5%</strong> — tăng trưởng vượt mức đó cần vốn mới hoặc thêm đòn bẩy.</p>"
    }
   ],
   "formulas": [
    [
     "ROE (3-factor DuPont)",
     "ROE = NPM × Asset turnover × Leverage",
     "(NI/Rev)(Rev/Assets)(Assets/Equity)"
    ],
    [
     "Cash conversion cycle",
     "CCC = DOH + DSO − Days payables",
     "Shorter = less cash tied up"
    ],
    [
     "Interest coverage",
     "EBIT / Interest expense",
     ""
    ],
    [
     "FCFF",
     "FCFF = CFO + Int(1 − t) − FCInv",
     "US GAAP classification"
    ],
    [
     "Basic EPS",
     "(NI − preferred dividends) / weighted avg shares",
     "Diluted EPS adds effect of options/convertibles if dilutive"
    ],
    [
     "Quick ratio",
     "(Cash + ST investments + Receivables) / CL",
     "Excludes inventory"
    ],
    [
     "ROE (5-factor DuPont)",
     "(NI/EBT)(EBT/EBIT)(EBIT/Rev)(Rev/Assets)(Assets/Equity)",
     "Tax burden × interest burden × EBIT margin × turnover × leverage"
    ],
    [
     "DOH / DSO / DPO",
     "365 / (inventory, receivables, payables turnover)",
     "CCC = DOH + DSO − DPO."
    ],
    [
     "Sustainable growth",
     "g = retention ratio × ROE",
     "b = 1 − payout. Faster growth needs capital or leverage."
    ]
   ]
  },
  {
   "title": "Introduction to Financial Statement Modeling",
   "sections": [
    {
     "h": "Building a forecast: from revenue drivers to three linked statements",
     "en": "<ul><li><strong>Revenue first.</strong> <em>Top-down</em>: start from market size/growth (growth relative to GDP, market share × market size); <em>bottom-up</em>: build from price × volume, capacity, stores, or customer counts; hybrid approaches reconcile the two. State assumptions explicitly so they can be flexed.</li><li><strong>Operating costs:</strong> split fixed vs variable — COGS usually tracks revenue (forecast via gross margin), SG&amp;A is stickier; check operating leverage. Model economies of scale where margins should expand with size.</li><li><strong>Working capital</strong> follows efficiency ratios: forecast receivables from <strong>DSO</strong> (AR = revenue × DSO/365), inventory from DOH, payables from DPO. <strong>Capex and depreciation</strong> link: maintenance capex ≈ depreciation, growth capex adds future depreciation on new PP&amp;E. Interest expense follows the debt schedule — which depends on the cash-flow forecast, making the three statements mutually consistent (income → retained earnings and cash; balance sheet → interest and depreciation; cash flow → debt and cash balances).</li><li><strong>Test the model:</strong> <em>sensitivity analysis</em> flexes one input at a time; <em>scenario analysis</em> shifts a coherent set of inputs (recession case, price war); simulation randomizes inputs. Longer horizons compound assumption errors — anchor long-run growth to sustainable rates.</li></ul>",
     "vi": "<ul><li><strong>Doanh thu trước tiên.</strong> <em>Top-down</em>: xuất phát từ quy mô/tăng trưởng thị trường (tăng trưởng so với GDP, thị phần × quy mô thị trường); <em>bottom-up</em>: xây từ giá × sản lượng, công suất, số cửa hàng, số khách hàng; cách lai đối chiếu cả hai. Nêu giả định tường minh để có thể điều chỉnh linh hoạt.</li><li><strong>Chi phí hoạt động:</strong> tách cố định và biến đổi — COGS thường bám doanh thu (dự phóng qua biên gộp), SG&amp;A \"lì\" hơn; chú ý đòn bẩy hoạt động. Mô hình hóa lợi thế quy mô ở nơi biên lợi nhuận nên nở ra theo quy mô.</li><li><strong>Vốn lưu động</strong> theo các tỷ số hiệu quả: dự phóng phải thu từ <strong>DSO</strong> (AR = doanh thu × DSO/365), tồn kho từ DOH, phải trả từ DPO. <strong>Capex và khấu hao</strong> liên kết nhau: capex duy trì ≈ khấu hao, capex tăng trưởng tạo thêm khấu hao tương lai trên PP&amp;E mới. Chi phí lãi vay theo lịch nợ — vốn phụ thuộc dự phóng dòng tiền, khiến ba báo cáo phải nhất quán lẫn nhau (KQKD → lợi nhuận giữ lại và tiền; CĐKT → lãi vay và khấu hao; LCTT → nợ và số dư tiền).</li><li><strong>Kiểm định mô hình:</strong> <em>phân tích độ nhạy</em> thay đổi từng biến; <em>phân tích kịch bản</em> thay đổi đồng bộ một cụm biến (suy thoái, chiến tranh giá); mô phỏng ngẫu nhiên hóa đầu vào. Kỳ dự phóng càng dài, sai số giả định càng tích lũy — neo tăng trưởng dài hạn vào mức bền vững.</li></ul>"
    },
    {
     "h": "Behavioral biases that wreck forecasts",
     "en": "<p>The modeling reading closes with the forecaster’s own psychology — five biases and their antidotes:</p><ul><li><strong>Overconfidence:</strong> confidence intervals set far too narrow. Antidote: record forecasts and outcomes; widen ranges; use scenario analysis.</li><li><strong>Illusion of control:</strong> believing more inputs and complexity = more accuracy; over-trading the model. Antidote: favor parsimony; focus on the few variables that matter.</li><li><strong>Conservatism (anchoring on priors):</strong> updating too slowly when new information arrives — clinging to the old forecast. Antidote: pre-commit to reviewing forecasts on new data; consider the opposite case.</li><li><strong>Representativeness:</strong> classifying by superficial similarity — extrapolating a short trend or the base rate of the wrong reference class. Antidote: take the outside view; check base rates.</li><li><strong>Confirmation bias:</strong> seeking only evidence that supports the existing thesis. Antidote: actively source disconfirming information and independent opinions.</li></ul>",
     "vi": "<p>Reading về mô hình hóa kết thúc bằng chính tâm lý của người dự phóng — năm thiên lệch và thuốc giải:</p><ul><li><strong>Quá tự tin:</strong> đặt khoảng tin cậy quá hẹp. Thuốc giải: ghi lại dự phóng và kết quả; nới rộng khoảng; dùng phân tích kịch bản.</li><li><strong>Ảo tưởng kiểm soát:</strong> tin rằng thêm biến và độ phức tạp = chính xác hơn; can thiệp mô hình quá nhiều. Thuốc giải: ưu tiên sự tinh gọn; tập trung vào vài biến thực sự quan trọng.</li><li><strong>Bảo thủ (neo vào dự phóng cũ):</strong> cập nhật quá chậm khi có thông tin mới. Thuốc giải: cam kết trước việc rà soát dự phóng khi có dữ liệu mới; cân nhắc kịch bản ngược lại.</li><li><strong>Đại diện hóa:</strong> phân loại theo sự giống nhau bề ngoài — ngoại suy xu hướng ngắn hoặc dùng sai nhóm tham chiếu. Thuốc giải: dùng góc nhìn bên ngoài; kiểm tra tỷ lệ cơ sở.</li><li><strong>Thiên lệch xác nhận:</strong> chỉ tìm bằng chứng ủng hộ luận điểm sẵn có. Thuốc giải: chủ động tìm thông tin phản bác và ý kiến độc lập.</li></ul>"
    },
    {
     "h": "Build a one-page forecast: drivers, linked statements & sanity checks",
     "en": "<p><strong>A minimal but complete model.</strong> Base year: revenue 1,000, operating margin 15%, tax 25%, DSO 30, DOH 60, DPO 45, capex = depreciation = 40. Forecast assumptions: revenue +8% (price +3%, volume +5%), margin stable, ratios stable.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Line</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Driver</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Forecast</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Revenue</td><td style=\"padding:7px;border:1px solid #E5E9F2\">1,000 × 1.08</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">1,080</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Operating profit</td><td style=\"padding:7px;border:1px solid #E5E9F2\">15% × revenue</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">162</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Receivables</td><td style=\"padding:7px;border:1px solid #E5E9F2\">DSO 30 → 30/365 × 1,080</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">88.8</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Inventory</td><td style=\"padding:7px;border:1px solid #E5E9F2\">DOH 60 → 60/365 × COGS</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">scaled with COGS</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Payables</td><td style=\"padding:7px;border:1px solid #E5E9F2\">DPO 45 → 45/365 × COGS</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">scaled with COGS</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Interest expense</td><td style=\"padding:7px;border:1px solid #E5E9F2\">rate × <em>average</em> debt</td><td style=\"padding:7px;border:1px solid #E5E9F2\">creates circularity — iterate or use opening debt</td></tr></table>\n<p>The working-capital lines are the same DSO/DOH/DPO ratios from module 9 <em>run in reverse</em>: instead of computing days from balances, you compute balances from assumed days. Growing revenue with unchanged days still <em>consumes cash</em> (receivables and inventory scale up) — the most common beginner surprise. Close the loop: NI flows to retained earnings; Δcash from the modeled cash-flow statement must equal the change in the cash balance, or the model is broken.</p>\n<p><strong>Judgment layers the exam asks about.</strong> Segment your forecast where economics differ (geographies, product lines). Separate price from volume — pricing power behaves differently in inflation than volume does. Consider operating leverage: if half of costs are fixed, an 8% revenue rise lifts operating profit by more than 8%. For inflation pass-through, firms in concentrated industries with inelastic demand pass costs through faster. Run <strong>scenarios</strong> (coherent alternative worlds) and <strong>sensitivities</strong> (one input at a time) — and state a forecast horizon long enough to reach a normalized, mid-cycle year if the firm is cyclical.</p>\n<p><strong>Behavioral traps checklist:</strong> overconfidence (intervals too narrow — widen them, do premortems), anchoring on the base year or first estimate, confirmation bias (seeking only supporting evidence — assign a devil's advocate), representativeness (base-rate neglect: most high-growth firms mean-revert), and availability (overweighting recent, vivid events). The antidote is the same everywhere: explicit base rates, documented assumptions, and forecast reviews against outcomes.</p>",
     "vi": "<p><strong>Một mô hình tối giản nhưng đủ.</strong> Năm gốc: doanh thu 1.000, biên hoạt động 15%, thuế 25%, DSO 30, DOH 60, DPO 45, capex = khấu hao = 40. Giả định dự phóng: doanh thu +8% (giá +3%, sản lượng +5%), biên ổn định, các ngày ổn định. Doanh thu = 1.080; lợi nhuận hoạt động = 162; phải thu = 30/365 × 1.080 = 88,8; tồn kho và phải trả co giãn theo COGS với DOH 60 và DPO 45; chi phí lãi = lãi suất × nợ <em>bình quân</em> — tạo vòng lặp (circularity), xử lý bằng lặp hoặc dùng nợ đầu kỳ.</p>\n<p>Các dòng vốn lưu động chính là các tỷ số DSO/DOH/DPO của module 9 <em>chạy ngược</em>: thay vì tính số ngày từ số dư, ta tính số dư từ số ngày giả định. Doanh thu tăng với số ngày không đổi vẫn <em>ngốn tiền</em> (phải thu và tồn kho phình theo) — bất ngờ phổ biến nhất với người mới. Khép vòng: NI chảy vào lợi nhuận giữ lại; Δtiền từ báo cáo dòng tiền mô hình phải khớp thay đổi số dư tiền, nếu không mô hình đã hỏng.</p>\n<p><strong>Các lớp phán đoán đề thi hay hỏi.</strong> Chia dự phóng theo phân khúc có kinh tế học khác nhau (địa lý, dòng sản phẩm). Tách giá khỏi sản lượng — sức mạnh định giá vận hành khác sản lượng trong lạm phát. Cân nhắc đòn bẩy hoạt động: nếu nửa chi phí là cố định, doanh thu tăng 8% đẩy lợi nhuận hoạt động tăng hơn 8%. Về truyền dẫn lạm phát, công ty trong ngành tập trung với cầu kém co giãn chuyển chi phí nhanh hơn. Chạy <strong>kịch bản</strong> (các thế giới thay thế nhất quán) và <strong>độ nhạy</strong> (một biến mỗi lần) — và chọn kỳ dự phóng đủ dài để chạm năm giữa chu kỳ bình thường hóa nếu công ty có tính chu kỳ.</p>\n<p><strong>Checklist bẫy hành vi:</strong> quá tự tin (khoảng dự báo quá hẹp — nới rộng, làm premortem), neo vào năm gốc hoặc ước tính đầu tiên, thiên lệch xác nhận (chỉ tìm bằng chứng ủng hộ — cắt cử người phản biện), tính đại diện (bỏ quên base rate: đa số công ty tăng trưởng cao sẽ hồi quy về trung bình), và tính sẵn có (đặt nặng sự kiện gần đây, sống động). Thuốc giải giống nhau ở mọi nơi: base rate tường minh, giả định được ghi chép, và rà soát dự báo so với kết quả thực.</p>"
    }
   ],
   "formulas": [
    [
     "Forecast receivables",
     "AR = Revenue × DSO / 365",
     "Same pattern: inventory via DOH, payables via DPO"
    ],
    [
     "Forecast working capital",
     "balance = assumed days / 365 × revenue (or COGS)",
     "Ratios run in reverse: days → balances. Growth consumes cash."
    ]
   ]
  }
 ],
 "vocab": [
  [
   "accrual accounting",
   "Recognizing revenue when earned and expenses when incurred, not when cash moves.",
   "kế toán dồn tích"
  ],
  [
   "performance obligation",
   "A promise to transfer a distinct good or service (IFRS 15).",
   "nghĩa vụ thực hiện"
  ],
  [
   "COGS",
   "Cost of goods sold.",
   "giá vốn hàng bán"
  ],
  [
   "LIFO reserve",
   "Difference between FIFO and LIFO inventory values, disclosed by LIFO firms.",
   "dự trữ LIFO"
  ],
  [
   "net realizable value",
   "Estimated selling price minus completion and selling costs.",
   "giá trị thuần có thể thực hiện"
  ],
  [
   "impairment",
   "Write-down when an asset’s carrying amount is not recoverable.",
   "suy giảm giá trị tài sản"
  ],
  [
   "goodwill",
   "Excess of purchase price over fair value of identifiable net assets acquired.",
   "lợi thế thương mại"
  ],
  [
   "deferred tax liability",
   "Taxes payable in future periods due to temporary differences.",
   "thuế thu nhập hoãn lại phải trả"
  ],
  [
   "diluted EPS",
   "EPS assuming all dilutive securities are converted.",
   "EPS pha loãng"
  ],
  [
   "working capital",
   "Current assets minus current liabilities.",
   "vốn lưu động"
  ],
  [
   "off-balance-sheet",
   "Obligations not recognized on the balance sheet (analyst adjustment target).",
   "ngoài bảng cân đối"
  ],
  [
   "comprehensive income",
   "Net income plus other comprehensive income (OCI).",
   "thu nhập toàn diện"
  ],
  [
   "unqualified (unmodified) opinion",
   "The \"clean\" audit opinion: statements presented fairly in all material respects",
   "Ý kiến chấp nhận toàn phần — báo cáo trung thực hợp lý trên các khía cạnh trọng yếu"
  ],
  [
   "going concern",
   "Auditor’s flag of substantial doubt about the firm’s ability to continue operating",
   "Nghi ngờ đáng kể về khả năng hoạt động liên tục"
  ],
  [
   "MD&A",
   "Management’s discussion of results, liquidity, and critical estimates — not audited",
   "Phân tích của ban điều hành — không được kiểm toán"
  ],
  [
   "discontinued operations",
   "Results of a disposed segment, shown net of tax below continuing operations",
   "Hoạt động chấm dứt — trình bày sau thuế, dưới lợi nhuận hoạt động tiếp tục"
  ],
  [
   "treasury stock method",
   "Diluted-EPS method for options: assumed proceeds repurchase shares at the average price",
   "Phương pháp cổ phiếu quỹ khi tính EPS pha loãng cho quyền chọn"
  ],
  [
   "antidilutive",
   "A security whose assumed conversion would increase EPS — excluded from diluted EPS",
   "Chứng khoán làm EPS tăng nếu chuyển đổi — bị loại khỏi EPS pha loãng"
  ],
  [
   "other comprehensive income (OCI)",
   "Gains/losses bypassing the income statement into equity (FX translation, hedges, remeasurements)",
   "Thu nhập toàn diện khác — vào thẳng vốn chủ, né báo cáo KQKD"
  ],
  [
   "non-controlling interest",
   "Equity of consolidated subsidiaries not owned by the parent",
   "Lợi ích cổ đông không kiểm soát"
  ],
  [
   "fair value through profit or loss",
   "Measurement where value changes hit earnings each period (trading instruments)",
   "Giá trị hợp lý qua lãi/lỗ — biến động vào KQKD từng kỳ"
  ],
  [
   "direct method",
   "Cash flow presentation showing gross receipts and payments (e.g., cash from customers)",
   "Phương pháp trực tiếp — trình bày dòng thu/chi gộp"
  ],
  [
   "FCFE",
   "CFO − fixed capital investment + net borrowing: cash available to shareholders",
   "Dòng tiền tự do cho cổ đông"
  ],
  [
   "LIFO liquidation",
   "Selling into old low-cost LIFO layers, temporarily inflating margins",
   "Bán vào các lớp tồn kho LIFO giá cũ, thổi phồng biên lợi nhuận tạm thời"
  ],
  [
   "effective interest method",
   "Interest expense = carrying amount × market rate at issuance; amortizes premium/discount",
   "Phương pháp lãi suất thực — phân bổ chiết khấu/phụ trội trái phiếu"
  ],
  [
   "covenant",
   "Contractual restriction protecting lenders (leverage caps, coverage floors)",
   "Điều khoản ràng buộc bảo vệ chủ nợ"
  ],
  [
   "right-of-use (ROU) asset",
   "Lessee’s balance-sheet asset representing the leased item",
   "Tài sản quyền sử dụng của bên đi thuê"
  ],
  [
   "finance vs operating lease",
   "US GAAP lessee split: depreciation + interest (front-loaded) vs single straight-line expense",
   "Hai cách ghi chi phí thuê của bên đi thuê theo US GAAP"
  ],
  [
   "defined benefit / defined contribution",
   "Employer promises future payments (DB) vs only contributions (DC)",
   "Quỹ phúc lợi xác định vs đóng góp xác định"
  ],
  [
   "funded status",
   "Plan assets − pension obligation; negative = net pension liability",
   "Chênh lệch tài sản quỹ và nghĩa vụ lương hưu"
  ],
  [
   "grant-date fair value",
   "Fixed measurement basis for equity-settled share-based compensation",
   "Giá trị hợp lý tại ngày cấp — cơ sở đo thù lao bằng cổ phiếu"
  ],
  [
   "average age of assets",
   "Accumulated depreciation / annual depreciation expense",
   "Tuổi bình quân tài sản = khấu hao lũy kế / khấu hao năm"
  ],
  [
   "tax base",
   "An asset or liability’s value for tax purposes; compared with carrying amount to find temporary differences",
   "Cơ sở thuế — giá trị của tài sản/nợ theo mục đích thuế"
  ],
  [
   "valuation allowance",
   "US GAAP contra-asset reducing a DTA to its realizable amount",
   "Tài khoản đối trừ giảm DTA về mức có thể thực hiện (US GAAP)"
  ],
  [
   "permanent difference",
   "A book–tax difference that never reverses; moves the effective rate, creates no deferred tax",
   "Chênh lệch vĩnh viễn — không hoàn nhập, không tạo thuế hoãn lại"
  ],
  [
   "effective tax rate",
   "Income tax expense ÷ pre-tax accounting income",
   "Thuế suất hiệu dụng = chi phí thuế ÷ lợi nhuận kế toán trước thuế"
  ],
  [
   "tax loss carryforward",
   "Past losses usable to offset future taxable income — a source of DTAs",
   "Lỗ chuyển kỳ sau — nguồn tạo DTA"
  ],
  [
   "segment disclosure",
   "Footnote data on revenue, profit, and assets by business/geographic segment",
   "Thuyết minh theo mảng kinh doanh/địa lý"
  ],
  [
   "sensitivity vs scenario analysis",
   "Flexing one input at a time vs shifting a coherent set of inputs",
   "Độ nhạy (một biến) vs kịch bản (một cụm biến đồng bộ)"
  ],
  [
   "top-down / bottom-up forecast",
   "From market size down vs from unit drivers (price × volume) up",
   "Dự phóng từ quy mô thị trường xuống vs từ driver đơn vị lên"
  ]
 ],
 "quiz": [
  {
   "q": "During a period of rising prices and stable inventory quantities, a company using LIFO (rather than FIFO) will most likely report:",
   "opts": [
    "higher net income and higher inventory.",
    "lower net income and lower inventory.",
    "lower net income and higher inventory."
   ],
   "ans": 1,
   "en": "B is correct. Under LIFO the most recent (most expensive) purchases flow to COGS, so COGS is higher and net income lower; ending inventory holds the oldest (cheapest) costs, so inventory is lower. The benefit is lower taxes and thus higher CFO.",
   "vi": "Đáp án B. Theo LIFO, hàng mua gần nhất (đắt nhất) đi vào COGS → COGS cao hơn, LN ròng thấp hơn; tồn kho cuối kỳ mang giá cũ (rẻ) → tồn kho thấp hơn. Lợi ích là nộp thuế ít hơn → CFO cao hơn."
  },
  {
   "q": "A firm capitalizes a cost that a competitor expenses immediately. Compared with the competitor, in the year of the expenditure the capitalizing firm most likely reports:",
   "opts": [
    "higher net income and higher CFO.",
    "lower net income and higher CFI outflows.",
    "higher net income and lower total assets."
   ],
   "ans": 0,
   "en": "A is correct. Capitalizing defers the expense (higher current net income) and classifies the cash outflow as investing rather than operating (higher CFO, larger CFI outflow). Assets are also higher, so C is wrong.",
   "vi": "Đáp án A. Vốn hóa làm hoãn chi phí (LN kỳ hiện tại cao hơn) và xếp dòng tiền ra vào hoạt động đầu tư thay vì kinh doanh (CFO cao hơn, CFI ra nhiều hơn). Tài sản cũng cao hơn nên C sai."
  },
  {
   "q": "Net income is 100. Depreciation is 20. Accounts receivable increased by 15 and accounts payable increased by 10. CFO under the indirect method is closest to:",
   "opts": [
    "105",
    "115",
    "145"
   ],
   "ans": 1,
   "en": "B is correct. CFO = 100 + 20 (non-cash) − 15 (increase in receivables uses cash) + 10 (increase in payables provides cash) = 115.",
   "vi": "Đáp án B. CFO = 100 + 20 (chi phí không dùng tiền) − 15 (phải thu tăng làm giảm tiền) + 10 (phải trả tăng làm tăng tiền) = 115."
  },
  {
   "q": "A company’s ROE increased while its net profit margin and asset turnover were unchanged. The most likely explanation is an increase in:",
   "opts": [
    "financial leverage.",
    "the tax burden ratio.",
    "operating efficiency."
   ],
   "ans": 0,
   "en": "A is correct. In the 3-factor DuPont model, ROE = margin × turnover × leverage. With margin and turnover flat, only higher leverage (assets/equity — i.e., more debt relative to equity) can lift ROE. This is lower-quality ROE growth.",
   "vi": "Đáp án A. Trong DuPont 3 nhân tố, ROE = biên LN × vòng quay × đòn bẩy. Biên và vòng quay không đổi thì chỉ đòn bẩy tài chính tăng (tài sản/VCSH — tức vay nợ nhiều hơn) mới đẩy ROE lên. Đây là tăng trưởng ROE chất lượng thấp."
  },
  {
   "q": "Under IFRS, a reversal of an inventory write-down:",
   "opts": [
    "is prohibited.",
    "is permitted, limited to the amount of the original write-down.",
    "is permitted without limit."
   ],
   "ans": 1,
   "en": "B is correct. IFRS permits reversing an inventory write-down when NRV recovers, but only up to the original write-down amount. US GAAP prohibits reversals entirely.",
   "vi": "Đáp án B. IFRS cho phép hoàn nhập giảm giá tồn kho khi NRV phục hồi, nhưng tối đa bằng số đã ghi giảm ban đầu. US GAAP cấm hoàn nhập hoàn toàn."
  }
 ]
});
window.CFA.extra["fsa"] = {
 "checks": [
  [
   {
    "q": "Which of the following is covered by the independent auditor’s opinion?",
    "opts": [
     "Management’s discussion & analysis (MD&A)",
     "The financial statements and the accompanying notes",
     "The company’s press releases"
    ],
    "ans": 1,
    "en": "The audit covers the statements and their integral notes. MD&A, press releases, and earnings guidance are outside the audit opinion — a reason to read them more skeptically.",
    "vi": "Kiểm toán bao trùm các báo cáo và thuyết minh đi kèm. MD&A, thông cáo báo chí, guidance nằm ngoài ý kiến kiểm toán — nên đọc chúng với sự hoài nghi cao hơn."
   },
   {
    "q": "An auditor concludes the statements are fairly presented \"except for\" the valuation of one asset class. The opinion issued is:",
    "opts": [
     "Adverse",
     "Qualified",
     "Disclaimer of opinion"
    ],
    "ans": 1,
    "en": "\"Except for\" language signals a qualified opinion — a limited, specific departure. Adverse means the statements as a whole are materially misstated; a disclaimer means no opinion could be formed.",
    "vi": "Cụm \"ngoại trừ\" báo hiệu ý kiến qualified — sai lệch cụ thể, giới hạn. Adverse nghĩa là báo cáo sai trọng yếu toàn cục; disclaimer là không đủ cơ sở đưa ý kiến."
   },
   {
    "q": "A $100 depreciation charge (ignore tax) affects CFO computed by the indirect method by:",
    "opts": [
     "−100",
     "0",
     "+100"
    ],
    "ans": 1,
    "en": "NI falls 100 but the non-cash charge is added back +100 → CFO unchanged. Depreciation never moves cash.",
    "vi": "NI giảm 100 nhưng khoản không phải tiền mặt được cộng ngược +100 → CFO không đổi. Khấu hao không bao giờ dịch chuyển tiền."
   },
   {
    "q": "Which document is NOT audited?",
    "opts": [
     "The footnotes",
     "MD&A",
     "The balance sheet"
    ],
    "ans": 1,
    "en": "MD&A is management's unaudited narrative. The statements and their notes fall under the audit opinion.",
    "vi": "MD&A là phần trình bày của ban điều hành, không được kiểm toán. Báo cáo và thuyết minh thuộc phạm vi ý kiến kiểm toán."
   }
  ],
  [
   {
    "q": "A company sells a major business segment during the year. In the income statement, the segment’s results and the gain on sale are reported:",
    "opts": [
     "Within operating income, pre-tax",
     "Separately as discontinued operations, net of tax, below income from continuing operations",
     "Directly in retained earnings"
    ],
    "ans": 1,
    "en": "Discontinued operations are segregated net of tax below continuing operations, so analysts can base forecasts on the continuing business.",
    "vi": "Hoạt động chấm dứt được tách riêng, sau thuế, bên dưới lợi nhuận từ hoạt động tiếp tục — để analyst dự phóng dựa trên phần kinh doanh còn tiếp diễn."
   },
   {
    "q": "NI = $1,000; 100 shares outstanding all year; 20 options with strike $25; average market price $50. Diluted EPS is closest to:",
    "opts": [
     "$10.00",
     "$9.09",
     "$8.33"
    ],
    "ans": 1,
    "en": "Treasury stock method: proceeds = 20 × 25 = 500 → repurchase 500/50 = 10 shares → incremental 10. Diluted EPS = 1,000/(100 + 10) = $9.09 (basic = $10.00).",
    "vi": "Phương pháp cổ phiếu quỹ: tiền thu = 20 × 25 = 500 → mua lại 500/50 = 10 cổ phiếu → tăng thêm 10. EPS pha loãng = 1.000/110 = 9,09 (cơ bản = 10,00)."
   },
   {
    "q": "NI $500k, no preferred. 100k shares all year; 3-for-1 split on Dec 1. Basic EPS is:",
    "opts": [
     "$5.00",
     "$1.67",
     "$4.58"
    ],
    "ans": 1,
    "en": "Splits apply retroactively: shares = 300k for the whole year → 500/300 = $1.67.",
    "vi": "Chia tách áp dụng hồi tố: 300k cổ phiếu cho cả năm → 500/300 = $1,67."
   },
   {
    "q": "Options with exercise price $30 when the average market price is $24 are:",
    "opts": [
     "Dilutive",
     "Antidilutive — excluded from diluted EPS",
     "Included at 20% weight"
    ],
    "ans": 1,
    "en": "Out-of-the-money options (X > market) would be antidilutive; assumed exercise is skipped entirely.",
    "vi": "Quyền chọn ngoài tiền (X > giá thị trường) sẽ antidilutive; bỏ hẳn giả định thực hiện."
   }
  ],
  [
   {
    "q": "A company spends heavily building its own brand through advertising. On its balance sheet, the internally generated brand is:",
    "opts": [
     "Capitalized as an intangible asset",
     "Not recognized — internally generated brands (and goodwill) may not be capitalized",
     "Recorded as goodwill"
    ],
    "ans": 1,
    "en": "Only purchased intangibles (or acquisition goodwill) appear on the balance sheet. Internally generated brands, customer lists, and goodwill are never recognized — advertising is expensed.",
    "vi": "Chỉ tài sản vô hình mua ngoài (hoặc goodwill từ M&A) mới lên bảng CĐKT. Thương hiệu, danh sách khách hàng, goodwill tự tạo không bao giờ được ghi nhận — chi phí quảng cáo ghi vào chi phí."
   },
   {
    "q": "A portfolio of debt securities is actively traded, with unrealized gains and losses reported in the income statement each period. The securities are measured at:",
    "opts": [
     "Amortized cost",
     "Fair value through profit or loss",
     "Fair value through OCI"
    ],
    "ans": 1,
    "en": "Trading instruments are carried at fair value with changes flowing through profit or loss. Held-to-collect debt uses amortized cost; FVOCI parks unrealized changes in equity.",
    "vi": "Chứng khoán kinh doanh ghi theo giá trị hợp lý, biến động vào lãi/lỗ. Nợ giữ để thu dòng tiền dùng giá phân bổ; FVOCI đưa biến động chưa thực hiện vào vốn chủ (OCI)."
   },
   {
    "q": "Internally generated research costs under IFRS are:",
    "opts": [
     "Capitalized",
     "Expensed as incurred",
     "Capitalized once feasibility is shown"
    ],
    "ans": 1,
    "en": "Research is always expensed under IFRS; only DEVELOPMENT costs after technical/economic feasibility may be capitalized.",
    "vi": "Research luôn tính vào chi phí theo IFRS; chỉ chi phí DEVELOPMENT sau khi chứng minh tính khả thi mới được vốn hóa."
   },
   {
    "q": "Current assets 400 (incl. inventory 150), current liabilities 200. The quick ratio is:",
    "opts": [
     "2.0",
     "1.25",
     "0.75"
    ],
    "ans": 1,
    "en": "Quick = (400 − 150)/200 = 1.25 — inventory is excluded from the numerator.",
    "vi": "Quick = (400 − 150)/200 = 1,25 — tồn kho bị loại khỏi tử số."
   }
  ],
  [
   {
    "q": "Under IFRS, interest paid may be classified in the statement of cash flows as:",
    "opts": [
     "CFO only",
     "Either CFO or CFF",
     "CFI only"
    ],
    "ans": 1,
    "en": "IFRS allows interest paid in CFO or CFF (interest received: CFO or CFI). US GAAP requires interest paid and received in CFO.",
    "vi": "IFRS cho phép lãi vay đã trả ghi vào CFO hoặc CFF (lãi nhận được: CFO hoặc CFI). US GAAP bắt buộc cả hai vào CFO — điểm khác biệt hay thi."
   },
   {
    "q": "Net income $500; depreciation $80; accounts receivable increased $60; accounts payable increased $30. CFO (indirect method) is:",
    "opts": [
     "$550",
     "$610",
     "$490"
    ],
    "ans": 0,
    "en": "CFO = 500 + 80 − 60 + 30 = $550. Add back non-cash depreciation; AR increase uses cash; AP increase frees cash.",
    "vi": "CFO = 500 + 80 − 60 + 30 = 550. Cộng lại khấu hao (không dùng tiền); AR tăng làm giảm tiền; AP tăng làm tăng tiền."
   },
   {
    "q": "Under IFRS, dividends PAID may be classified as:",
    "opts": [
     "CFO or CFF",
     "CFI only",
     "CFF only"
    ],
    "ans": 0,
    "en": "IFRS allows dividends paid in CFO or CFF; US GAAP forces CFF.",
    "vi": "IFRS cho phép cổ tức đã trả nằm ở CFO hoặc CFF; US GAAP bắt buộc CFF."
   },
   {
    "q": "Revenue 800; receivables rose 50. Cash collected from customers is:",
    "opts": [
     "850",
     "800",
     "750"
    ],
    "ans": 2,
    "en": "Cash from customers = revenue − ΔAR = 800 − 50 = 750. Rising receivables means sales not yet collected.",
    "vi": "Tiền thu từ khách = doanh thu − ΔAR = 800 − 50 = 750. Phải thu tăng nghĩa là doanh thu chưa thu được tiền."
   }
  ],
  [
   {
    "q": "CFO = $500; interest paid (classified in CFO) = $40; tax rate = 25%; fixed capital investment = $200. FCFF is closest to:",
    "opts": [
     "$330",
     "$340",
     "$260"
    ],
    "ans": 0,
    "en": "FCFF = CFO + interest × (1 − t) − FCInv = 500 + 40 × 0.75 − 200 = $330.",
    "vi": "FCFF = CFO + lãi vay × (1 − t) − capex = 500 + 30 − 200 = 330."
   },
   {
    "q": "CFO = $500; fixed capital investment = $200; net new borrowing = $50. FCFE is:",
    "opts": [
     "$250",
     "$350",
     "$550"
    ],
    "ans": 1,
    "en": "FCFE = CFO − FCInv + net borrowing = 500 − 200 + 50 = $350 — the cash available to equity holders.",
    "vi": "FCFE = CFO − capex + vay ròng = 500 − 200 + 50 = 350 — lượng tiền dành cho cổ đông."
   },
   {
    "q": "CFO 300, interest expense 40, tax rate 25%, capex 100. FCFF is closest to:",
    "opts": [
     "230",
     "240",
     "270"
    ],
    "ans": 0,
    "en": "FCFF = 300 + 40(0.75) − 100 = 230.",
    "vi": "FCFF = 300 + 40×0,75 − 100 = 230."
   },
   {
    "q": "A firm reports growing NI but CFO persistently far below NI. The most likely explanation:",
    "opts": [
     "Strong cash collection",
     "Earnings driven by accruals — a quality red flag",
     "Conservative revenue recognition"
    ],
    "ans": 1,
    "en": "A wide, persistent NI–CFO gap suggests aggressive accruals (early revenue recognition, under-reserving) — the classic earnings-quality warning.",
    "vi": "Khoảng cách NI–CFO rộng và dai dẳng gợi ý accruals hung hăng (ghi doanh thu sớm, trích lập thiếu) — cảnh báo chất lượng lợi nhuận kinh điển."
   }
  ],
  [
   {
    "q": "During a period of rising prices and stable inventory quantities, FIFO (versus LIFO) reports:",
    "opts": [
     "Higher COGS and lower net income",
     "Lower COGS, higher net income, and higher ending inventory",
     "Identical results"
    ],
    "ans": 1,
    "en": "FIFO expenses older, cheaper units → lower COGS, higher NI, and balance-sheet inventory closer to current cost.",
    "vi": "FIFO đưa hàng cũ (giá rẻ) vào COGS → COGS thấp hơn, lợi nhuận cao hơn, tồn kho trên bảng cân đối sát giá hiện hành hơn."
   },
   {
    "q": "In a rising-price environment, a LIFO firm lets inventory quantities fall sharply. Its reported gross margin most likely:",
    "opts": [
     "Falls, because COGS rises",
     "Rises temporarily as old, low-cost LIFO layers flow into COGS (LIFO liquidation)",
     "Is unaffected by inventory quantities"
    ],
    "ans": 1,
    "en": "LIFO liquidation releases cheap old cost layers into COGS, inflating margins unsustainably. The declining LIFO reserve in the footnotes is the tell.",
    "vi": "LIFO liquidation đẩy các lớp giá vốn cũ (rẻ) vào COGS, thổi phồng biên lợi nhuận một cách không bền vững. LIFO reserve giảm trong thuyết minh là dấu hiệu nhận biết."
   },
   {
    "q": "Prices are rising. Compared with FIFO, a LIFO firm reports:",
    "opts": [
     "Higher inventory and higher NI",
     "Lower COGS and higher taxes",
     "Higher COGS and lower NI"
    ],
    "ans": 2,
    "en": "LIFO sends the newest (costliest) units to COGS → higher COGS, lower NI, lower taxes, lower inventory.",
    "vi": "LIFO đưa hàng mới nhất (đắt nhất) vào COGS → COGS cao hơn, NI thấp hơn, thuế thấp hơn, tồn kho thấp hơn."
   },
   {
    "q": "A LIFO firm's LIFO reserve fell during a year of stable prices. This most likely signals:",
    "opts": [
     "A LIFO liquidation inflating margins",
     "An inventory write-down",
     "A change to weighted average"
    ],
    "ans": 0,
    "en": "With stable prices, a falling reserve means old cheap layers were sold — LIFO liquidation temporarily boosts margins.",
    "vi": "Giá ổn định mà reserve giảm nghĩa là các lớp hàng cũ giá rẻ đã bị bán — LIFO liquidation tạm thời thổi phồng biên lợi nhuận."
   }
  ],
  [
   {
    "q": "Compared with expensing a cost immediately, capitalizing it will initially report:",
    "opts": [
     "Lower net income and lower total assets",
     "Higher net income, higher assets, and higher CFO",
     "Higher net income but lower CFO"
    ],
    "ans": 1,
    "en": "Capitalizing defers the expense (higher early NI, higher assets) and reclassifies the outflow to CFI, so CFO is higher. Later years reverse via depreciation.",
    "vi": "Vốn hóa hoãn chi phí (NI và tài sản ban đầu cao hơn) và đẩy dòng tiền chi vào CFI nên CFO cao hơn. Các năm sau NI thấp hơn do khấu hao."
   },
   {
    "q": "Accumulated depreciation is $600m and annual depreciation expense is $100m. The estimated average age of the asset base is:",
    "opts": [
     "0.17 years",
     "6 years",
     "60 years"
    ],
    "ans": 1,
    "en": "Average age ≈ accumulated depreciation / annual depreciation expense = 600/100 = 6 years — a quick footnote-based estimate assuming straight-line depreciation.",
    "vi": "Tuổi bình quân ≈ khấu hao lũy kế / chi phí khấu hao năm = 600/100 = 6 năm — ước lượng nhanh từ thuyết minh, giả định khấu hao đường thẳng."
   },
   {
    "q": "Carrying 800. FV − costs to sell 700; value in use 760; undiscounted CF 820. Under IFRS the impairment is:",
    "opts": [
     "0",
     "40",
     "100"
    ],
    "ans": 1,
    "en": "Recoverable = max(700, 760) = 760 < 800 → impair 40. (US GAAP: 820 > 800 → no impairment.)",
    "vi": "Recoverable = max(700, 760) = 760 < 800 → ghi giảm 40. (US GAAP: 820 > 800 → không ghi giảm.)"
   },
   {
    "q": "Accumulated depreciation 240, annual depreciation expense 40. Average asset age is:",
    "opts": [
     "4 years",
     "6 years",
     "10 years"
    ],
    "ans": 1,
    "en": "Average age ≈ accumulated depreciation / annual expense = 240/40 = 6 years.",
    "vi": "Tuổi bình quân ≈ khấu hao lũy kế / chi phí khấu hao năm = 240/40 = 6 năm."
   }
  ],
  [
   {
    "q": "A bond is issued at a discount. Under the effective interest method, over the bond’s life its carrying amount and annual interest expense will:",
    "opts": [
     "Both decrease toward zero",
     "Both increase as the carrying amount accretes toward par",
     "Remain constant"
    ],
    "ans": 1,
    "en": "Interest expense = carrying amount × market rate at issuance. For a discount bond the carrying amount accretes toward par, so expense (rate × a growing base) rises each period. A premium bond shows the opposite.",
    "vi": "Chi phí lãi = giá trị ghi sổ × lãi suất thị trường lúc phát hành. Trái phiếu chiết khấu có giá trị ghi sổ tăng dần về mệnh giá nên chi phí lãi (lãi suất × cơ sở đang tăng) tăng theo từng kỳ. Trái phiếu phụ trội thì ngược lại."
   },
   {
    "q": "Under US GAAP, compared with classifying a lease as operating, a lessee classifying it as a finance lease will report, in the early years:",
    "opts": [
     "Lower total expense",
     "Higher total expense (depreciation + interest is front-loaded) and higher EBITDA",
     "Identical expenses"
    ],
    "ans": 1,
    "en": "Finance-lease expense = straight-line depreciation + interest on a large early liability → front-loaded total expense; but since depreciation and interest sit below EBITDA, EBITDA is higher than under an operating lease’s single lease expense.",
    "vi": "Chi phí finance lease = khấu hao đều + lãi trên dư nợ lớn ban đầu → tổng chi phí dồn về các năm đầu; nhưng vì khấu hao và lãi nằm dưới EBITDA nên EBITDA lại cao hơn so với một dòng chi phí thuê của operating lease."
   },
   {
    "q": "A bond issued at a discount. Over its life, interest expense each year:",
    "opts": [
     "Falls",
     "Stays equal to the coupon",
     "Rises"
    ],
    "ans": 2,
    "en": "Expense = constant market rate × a RISING carrying value → expense grows each year (exceeds the coupon throughout).",
    "vi": "Chi phí = lãi suất thị trường cố định × giá trị ghi sổ TĂNG dần → chi phí tăng mỗi năm (luôn vượt coupon)."
   },
   {
    "q": "In early years, versus a US GAAP operating lease, a finance lease reports:",
    "opts": [
     "Lower EBITDA and higher CFO",
     "Higher EBITDA and higher CFO",
     "Higher EBITDA and lower CFO"
    ],
    "ans": 1,
    "en": "Finance lease: amortization + interest sit below EBITDA (higher EBITDA), and principal repayment goes to CFF (higher CFO).",
    "vi": "Finance lease: khấu hao + lãi nằm dưới EBITDA (EBITDA cao hơn), và phần trả gốc vào CFF (CFO cao hơn)."
   }
  ],
  [
   {
    "q": "A firm uses accelerated depreciation on its tax return and straight-line on its books. In the asset’s early years, this most likely creates a:",
    "opts": [
     "Deferred tax asset",
     "Deferred tax liability",
     "Permanent difference"
    ],
    "ans": 1,
    "en": "Faster tax depreciation pushes the tax base below the carrying amount: less tax now, more later — a deferred tax liability that reverses as depreciation patterns converge.",
    "vi": "Khấu hao thuế nhanh hơn kéo cơ sở thuế xuống dưới giá trị ghi sổ: nộp ít thuế bây giờ, nhiều hơn về sau — một khoản DTL sẽ hoàn nhập khi hai lịch khấu hao hội tụ."
   },
   {
    "q": "Under US GAAP, a company increases the valuation allowance against its deferred tax assets. The immediate effect is to:",
    "opts": [
     "Increase net income",
     "Increase income tax expense and reduce net income",
     "Create a new DTL"
    ],
    "ans": 1,
    "en": "The allowance writes the DTA down to its realizable amount; the increase flows through tax expense, cutting income — and signals management doubts about future taxable profits.",
    "vi": "Valuation allowance ghi giảm DTA về mức có thể thực hiện; phần tăng chạy qua chi phí thuế làm giảm lợi nhuận — đồng thời là tín hiệu ban lãnh đạo nghi ngờ lợi nhuận chịu thuế tương lai."
   },
   {
    "q": "A warranty liability of 100 is expensed in the books but deductible only when paid. Tax rate 20%. This creates:",
    "opts": [
     "A DTL of 20",
     "A DTA of 20",
     "No deferred tax — permanent difference"
    ],
    "ans": 1,
    "en": "Liability carrying (100) > tax base (0) → DTA = 100 × 20% = 20; the deduction arrives later.",
    "vi": "Giá trị ghi sổ nợ (100) > cơ sở thuế (0) → DTA = 100 × 20% = 20; khoản khấu trừ đến sau."
   },
   {
    "q": "The tax rate falls. A firm with large net DTLs will report:",
    "opts": [
     "A one-off decrease in tax expense",
     "A one-off increase in tax expense",
     "No income statement effect"
    ],
    "ans": 0,
    "en": "DTLs are remeasured downward at the new rate; the release cuts tax expense — a one-time earnings boost.",
    "vi": "DTL được đo lại thấp hơn theo thuế suất mới; khoản hoàn làm giảm chi phí thuế — cú hích lợi nhuận một lần."
   }
  ],
  [
   {
    "q": "In three-factor DuPont analysis, ROE equals:",
    "opts": [
     "Net profit margin × asset turnover × financial leverage",
     "Gross margin × inventory turnover × current ratio",
     "Operating margin × equity turnover × tax rate"
    ],
    "ans": 0,
    "en": "ROE = (NI/Sales) × (Sales/Assets) × (Assets/Equity): profitability × efficiency × leverage.",
    "vi": "ROE = Biên lợi nhuận ròng × Vòng quay tài sản × Đòn bẩy tài chính — tách ROE thành 3 nguồn: sinh lời, hiệu quả, đòn bẩy."
   },
   {
    "q": "The quick ratio differs from the current ratio because it excludes:",
    "opts": [
     "Cash",
     "Inventory (and other less liquid current assets)",
     "Accounts payable"
    ],
    "ans": 1,
    "en": "Quick ratio = (cash + short-term investments + receivables) / current liabilities — stripping out inventory, the least liquid current asset.",
    "vi": "Quick ratio loại tồn kho (tài sản ngắn hạn kém thanh khoản nhất) khỏi tử số, đo khả năng thanh toán khắt khe hơn current ratio."
   },
   {
    "q": "Margin 5%, asset turnover 1.5, leverage 2.4. ROE is closest to:",
    "opts": [
     "12%",
     "18%",
     "7.5%"
    ],
    "ans": 1,
    "en": "ROE = 0.05 × 1.5 × 2.4 = 18%.",
    "vi": "ROE = 0,05 × 1,5 × 2,4 = 18%."
   },
   {
    "q": "DOH 70, DSO 35, DPO 50. The cash conversion cycle is:",
    "opts": [
     "155 days",
     "55 days",
     "−15 days"
    ],
    "ans": 1,
    "en": "CCC = 70 + 35 − 50 = 55 days.",
    "vi": "CCC = 70 + 35 − 50 = 55 ngày."
   }
  ],
  [
   {
    "q": "Forecast revenue is $1,200m and the analyst assumes DSO of 36.5 days. Forecast accounts receivable are closest to:",
    "opts": [
     "$120m",
     "$33m",
     "$438m"
    ],
    "ans": 0,
    "en": "AR = revenue × DSO/365 = 1,200 × 36.5/365 = $120m — the standard efficiency-ratio approach to forecasting working capital.",
    "vi": "AR = doanh thu × DSO/365 = 1.200 × 36,5/365 = 120 triệu — cách chuẩn dùng tỷ số hiệu quả để dự phóng vốn lưu động."
   },
   {
    "q": "An analyst consistently produces forecast ranges that are far too narrow, so outcomes frequently fall outside them. This reflects:",
    "opts": [
     "Conservatism bias",
     "Overconfidence bias",
     "Representativeness"
    ],
    "ans": 1,
    "en": "Too-narrow intervals are the signature of overconfidence. The antidotes: track forecast accuracy, widen ranges, and run scenarios.",
    "vi": "Khoảng dự phóng quá hẹp là dấu hiệu đặc trưng của quá tự tin. Thuốc giải: theo dõi độ chính xác dự phóng, nới khoảng, chạy kịch bản."
   },
   {
    "q": "Revenue grows 20% with DSO and DOH unchanged. Working capital will most likely:",
    "opts": [
     "Fall — efficiency improved",
     "Stay flat — the ratios are constant",
     "Rise — balances scale with sales, consuming cash"
    ],
    "ans": 2,
    "en": "Constant days on a bigger revenue/COGS base mean receivables and inventory grow proportionally — growth consumes cash.",
    "vi": "Số ngày không đổi trên nền doanh thu/COGS lớn hơn nghĩa là phải thu và tồn kho phình theo tỷ lệ — tăng trưởng ngốn tiền."
   },
   {
    "q": "An analyst widens forecast ranges and runs a premortem. These techniques mainly counter:",
    "opts": [
     "Overconfidence",
     "Availability bias",
     "Anchoring"
    ],
    "ans": 0,
    "en": "Too-narrow intervals are the signature of overconfidence; premortems force consideration of failure paths.",
    "vi": "Khoảng dự báo quá hẹp là dấu hiệu của quá tự tin; premortem buộc phải cân nhắc các con đường thất bại."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "A firm using LIFO reports inventory of $800 and a LIFO reserve of $150. FIFO-equivalent inventory is:",
    "opts": [
     "$650",
     "$950",
     "$800"
    ],
    "ans": 1,
    "en": "FIFO inventory = LIFO inventory + LIFO reserve = 800 + 150 = $950. Analysts add the reserve to compare LIFO firms with FIFO firms.",
    "vi": "Tồn kho FIFO = tồn kho LIFO + LIFO reserve = 950. Nhà phân tích cộng LIFO reserve để so sánh công bằng giữa công ty dùng LIFO và FIFO."
   },
   {
    "q": "Under IFRS, an impairment loss on plant assets may later be reversed:",
    "opts": [
     "Never",
     "Up to the amount that restores carrying value to what it would have been without impairment",
     "Without limit, to fair value"
    ],
    "ans": 1,
    "en": "IFRS permits reversal (through P&L for cost-model assets) capped at the depreciated historical carrying amount; US GAAP prohibits reversal for held-for-use assets.",
    "vi": "IFRS cho phép hoàn nhập lỗ suy giảm, nhưng không vượt quá giá trị ghi sổ lẽ ra có nếu chưa từng ghi giảm. US GAAP cấm hoàn nhập với tài sản đang sử dụng."
   },
   {
    "q": "Under the converged revenue standard, revenue is recognized when:",
    "opts": [
     "Cash is collected",
     "The entity satisfies a performance obligation by transferring control of the good or service",
     "The contract is signed"
    ],
    "ans": 1,
    "en": "The five-step model recognizes revenue as performance obligations are satisfied — when control transfers, at a point in time or over time.",
    "vi": "Mô hình 5 bước ghi nhận doanh thu khi nghĩa vụ thực hiện hoàn thành — tức khi quyền kiểm soát hàng hóa/dịch vụ được chuyển giao, tại một thời điểm hoặc theo tiến độ."
   },
   {
    "q": "Holding everything else constant, an increase in accounts payable during the period will:",
    "opts": [
     "Decrease CFO",
     "Increase CFO",
     "Not affect CFO"
    ],
    "ans": 1,
    "en": "Paying suppliers more slowly conserves cash: an AP increase is added back in indirect CFO.",
    "vi": "Trả chậm nhà cung cấp giúp giữ lại tiền: AP tăng được cộng vào CFO theo phương pháp gián tiếp."
   },
   {
    "q": "Revenue $2,000; COGS $1,200; operating expenses $500; tax expense $90. Gross margin and net margin are closest to:",
    "opts": [
     "40% and 10.5%",
     "60% and 15%",
     "40% and 15%"
    ],
    "ans": 0,
    "en": "Gross margin = 800/2,000 = 40%. Net income = 2,000 − 1,200 − 500 − 90 = 210 → 10.5%.",
    "vi": "Biên gộp = 800/2.000 = 40%. Lợi nhuận ròng = 210 → biên ròng 10,5%."
   },
   {
    "q": "COGS is $600 and average inventory is $120. Inventory turnover and days of inventory on hand (365-day year) are closest to:",
    "opts": [
     "5.0× and 73 days",
     "6.0× and 61 days",
     "4.8× and 76 days"
    ],
    "ans": 0,
    "en": "Turnover = 600/120 = 5.0×; DOH = 365/5 = 73 days.",
    "vi": "Vòng quay tồn kho = 600/120 = 5 lần; số ngày tồn kho = 365/5 = 73 ngày."
   },
   {
    "q": "Revenue is $1,000 and accounts receivable increased by $80 during the year. Under the direct method, cash received from customers is:",
    "opts": [
     "$1,080",
     "$920",
     "$1,000"
    ],
    "ans": 1,
    "en": "Cash from customers = revenue − ΔAR = 1,000 − 80 = 920: rising receivables mean some revenue has not yet been collected.",
    "vi": "Tiền thu từ khách hàng = doanh thu − ΔAR = 1.000 − 80 = 920: phải thu tăng nghĩa là một phần doanh thu chưa thu được tiền."
   },
   {
    "q": "A firm revises the estimated useful life of its machinery from 10 to 8 years. The correct treatment is:",
    "opts": [
     "Retrospective restatement of prior periods",
     "Prospective application — higher depreciation in current and future periods only",
     "Recognition of a prior-period error"
    ],
    "ans": 1,
    "en": "A change in accounting estimate is applied prospectively. Retrospective treatment is reserved for changes in accounting policy; restatement is for errors.",
    "vi": "Thay đổi ước tính kế toán áp dụng phi hồi tố (từ nay về sau). Hồi tố dành cho thay đổi chính sách kế toán; restatement dành cho sai sót."
   },
   {
    "q": "A defined-benefit pension plan reports a benefit obligation of $800m and plan assets with a fair value of $650m. The balance sheet reports:",
    "opts": [
     "A net pension asset of $150m",
     "A net pension liability of $150m",
     "Nothing — pensions are off-balance-sheet"
    ],
    "ans": 1,
    "en": "Funded status = plan assets − obligation = 650 − 800 = −150: an underfunded plan appears as a net pension liability of $150m.",
    "vi": "Funded status = tài sản quỹ − nghĩa vụ = 650 − 800 = −150: quỹ thiếu hụt được trình bày là nợ lương hưu ròng 150 triệu USD."
   },
   {
    "q": "At issuance, a bond’s coupon rate exceeds the market interest rate. The bond is issued at:",
    "opts": [
     "A discount, with carrying value rising over time",
     "A premium, with carrying value declining toward par",
     "Par"
    ],
    "ans": 1,
    "en": "Coupon above the market rate makes investors pay more than face: a premium, amortized downward to par over the bond’s life (interest expense < coupon cash each period).",
    "vi": "Coupon cao hơn lãi suất thị trường khiến nhà đầu tư trả trên mệnh giá: phát hành phụ trội, phân bổ giảm dần về mệnh giá (chi phí lãi < tiền coupon mỗi kỳ)."
   },
   {
    "q": "A firm’s only difference between accounting and taxable income is municipal bond interest that is permanently tax-exempt. Compared with the statutory rate, its effective tax rate is:",
    "opts": [
     "Higher",
     "Lower, with no deferred tax recognized",
     "Identical, with a DTA recognized"
    ],
    "ans": 1,
    "en": "Permanent differences never reverse: they create no deferred taxes but move the effective rate — tax-exempt income pulls it below the statutory rate.",
    "vi": "Chênh lệch vĩnh viễn không bao giờ hoàn nhập: không tạo thuế hoãn lại nhưng kéo thuế suất hiệu dụng — thu nhập miễn thuế đẩy nó xuống dưới thuế suất luật định."
   },
   {
    "q": "In the five-factor DuPont decomposition, the \"interest burden\" is measured as:",
    "opts": [
     "EBIT/Revenue",
     "EBT/EBIT",
     "NI/EBT"
    ],
    "ans": 1,
    "en": "Interest burden = EBT/EBIT: the share of operating profit surviving interest expense (closer to 1 = less debt drag). NI/EBT is the tax burden; EBIT/Revenue is the operating margin.",
    "vi": "Gánh nặng lãi vay = EBT/EBIT: phần lợi nhuận hoạt động còn lại sau lãi vay (càng gần 1 càng ít bị nợ bào mòn). NI/EBT là gánh nặng thuế; EBIT/Doanh thu là biên hoạt động."
   }
  ],
  [
   {
    "q": "A convertible bond is outstanding all year. It is included in diluted EPS only if:",
    "opts": [
     "The share price rose during the year",
     "Its assumed conversion reduces EPS (it is dilutive)",
     "Management intends to convert it"
    ],
    "ans": 1,
    "en": "Diluted EPS includes potentially dilutive securities only when they lower EPS; antidilutive securities are excluded by rule.",
    "vi": "EPS pha loãng chỉ tính các chứng khoán có khả năng pha loãng nếu chúng làm EPS giảm; nếu antidilutive thì loại ra theo quy định."
   },
   {
    "q": "A company depreciates an asset faster for tax than for book purposes. This most likely creates a:",
    "opts": [
     "Deferred tax asset",
     "Deferred tax liability",
     "Permanent difference"
    ],
    "ans": 1,
    "en": "Accelerated tax depreciation makes the asset’s tax base fall below its carrying amount → taxes deferred to later years → DTL.",
    "vi": "Khấu hao thuế nhanh hơn khiến cơ sở thuế của tài sản thấp hơn giá trị ghi sổ → thuế bị hoãn sang tương lai → phát sinh thuế thu nhập hoãn lại phải trả (DTL)."
   },
   {
    "q": "DOH = 40, DSO = 35, DPO = 30. The cash conversion cycle is:",
    "opts": [
     "105 days",
     "45 days",
     "25 days"
    ],
    "ans": 1,
    "en": "CCC = DOH + DSO − DPO = 40 + 35 − 30 = 45 days of financing need per operating cycle.",
    "vi": "Chu kỳ chuyển đổi tiền = 40 + 35 − 30 = 45 ngày — số ngày công ty phải tự tài trợ vốn lưu động."
   },
   {
    "q": "In a rising-price environment, a LIFO firm (versus FIFO) most likely reports:",
    "opts": [
     "Higher pre-tax income and higher taxes",
     "Lower taxable income and therefore higher after-tax cash flow",
     "Higher ending inventory"
    ],
    "ans": 1,
    "en": "LIFO’s higher COGS lowers taxable income and current taxes — the real economic benefit is higher cash flow despite lower reported earnings.",
    "vi": "LIFO có COGS cao hơn → thu nhập chịu thuế thấp hơn → nộp thuế ít hơn → dòng tiền sau thuế cao hơn, dù lợi nhuận báo cáo thấp hơn."
   },
   {
    "q": "Net profit margin 5%, asset turnover 1.2, financial leverage 2.0. ROE is:",
    "opts": [
     "8.4%",
     "12.0%",
     "10.0%"
    ],
    "ans": 1,
    "en": "ROE = 5% × 1.2 × 2.0 = 12%.",
    "vi": "ROE = 5% × 1,2 × 2,0 = 12% theo DuPont 3 nhân tố."
   },
   {
    "q": "Net income substantially and persistently exceeding CFO most likely signals:",
    "opts": [
     "High earnings quality",
     "Aggressive accrual-based earnings — lower earnings quality",
     "Strong cash management"
    ],
    "ans": 1,
    "en": "Earnings built on accruals rather than cash are less persistent and more manipulable — a classic red flag for earnings quality.",
    "vi": "Lợi nhuận cao hơn CFO kéo dài nghĩa là lợi nhuận dựa nhiều vào các khoản dồn tích — kém bền vững, dễ bị “xào nấu” → chất lượng lợi nhuận thấp."
   },
   {
    "q": "A company had 100,000 shares outstanding on 1 January and issued 20,000 new shares on 1 July. Weighted-average shares for basic EPS are:",
    "opts": [
     "120,000",
     "110,000",
     "100,000"
    ],
    "ans": 1,
    "en": "Weighted shares = 100,000 × 12/12 + 20,000 × 6/12 = 110,000. Shares are weighted by the fraction of the year outstanding.",
    "vi": "Cổ phiếu bình quân = 100.000 + 20.000 × 6/12 = 110.000 — cổ phiếu mới tính theo tỷ lệ thời gian lưu hành trong năm."
   },
   {
    "q": "Including a convertible bond in the diluted EPS calculation would raise EPS from $2.00 to $2.10. The correct treatment is to:",
    "opts": [
     "Include it — all convertibles enter diluted EPS",
     "Exclude it — the security is antidilutive",
     "Report diluted EPS of $2.10"
    ],
    "ans": 1,
    "en": "Diluted EPS reflects maximum potential dilution: securities whose assumed conversion would increase EPS are antidilutive and must be excluded. Diluted EPS can never exceed basic EPS.",
    "vi": "EPS pha loãng phản ánh mức pha loãng tối đa: chứng khoán nào khi giả định chuyển đổi làm EPS tăng là antidilutive và phải loại ra. EPS pha loãng không bao giờ vượt EPS cơ bản."
   },
   {
    "q": "Equity-settled employee stock options are measured for expense purposes at:",
    "opts": [
     "Intrinsic value on each reporting date",
     "Fair value at the grant date, expensed over the vesting period",
     "The exercise price"
    ],
    "ans": 1,
    "en": "Grant-date fair value is fixed and recognized over vesting; equity-settled awards are not remeasured for later share-price moves. The real cost appears in earnings and, potentially, in diluted EPS.",
    "vi": "Giá trị hợp lý tại ngày cấp được cố định và phân bổ dần theo thời gian vesting; thưởng thanh toán bằng cổ phiếu không đánh giá lại theo biến động giá sau đó. Chi phí thật nằm trong lợi nhuận và có thể cả trong EPS pha loãng."
   },
   {
    "q": "CFO is $300m and total debt is $1,200m. The cash-flow debt coverage ratio is:",
    "opts": [
     "25%",
     "400%",
     "4%"
    ],
    "ans": 0,
    "en": "Debt coverage = CFO/total debt = 300/1,200 = 25% — roughly, the firm could repay its debt from operating cash in about four years.",
    "vi": "Debt coverage = CFO/tổng nợ = 300/1.200 = 25% — đại ý công ty cần khoảng bốn năm dòng tiền hoạt động để trả hết nợ."
   },
   {
    "q": "Taxes payable are $100; the DTL increased by $15 and the DTA increased by $5 during the year. Income tax expense is:",
    "opts": [
     "$110",
     "$120",
     "$90"
    ],
    "ans": 0,
    "en": "Tax expense = taxes payable + ΔDTL − ΔDTA = 100 + 15 − 5 = $110.",
    "vi": "Chi phí thuế = thuế phải nộp + ΔDTL − ΔDTA = 100 + 15 − 5 = 110."
   },
   {
    "q": "A retailer’s analyst forecasts revenue as: number of stores × sales per store, benchmarked against industry growth. This approach is best described as:",
    "opts": [
     "Pure top-down",
     "Bottom-up (with a top-down cross-check) — a hybrid",
     "Pure time-series extrapolation"
    ],
    "ans": 1,
    "en": "Store count × productivity is a bottom-up driver model; reconciling it against market growth adds the top-down discipline — the hybrid approach the curriculum recommends.",
    "vi": "Số cửa hàng × doanh thu mỗi cửa hàng là mô hình driver bottom-up; đối chiếu với tăng trưởng ngành bổ sung kỷ luật top-down — cách lai mà curriculum khuyến nghị."
   }
  ],
  {
   "name": "Set D — Mixed exam-style review",
   "qs": [
    {
     "q": "NI $840k; preferred dividends $40k; 400k shares Jan 1; 100k repurchased Oct 1. Basic EPS is closest to:",
     "opts": [
      "$2.00",
      "$2.13",
      "$2.29"
     ],
     "ans": 1,
     "en": "Weighted shares = 400k − 100k × 3/12 = 375k. EPS = 800/375 = $2.13.",
     "vi": "Cổ phiếu bình quân = 400k − 100k × 3/12 = 375k. EPS = 800/375 = $2,13."
    },
    {
     "q": "6% convertible debt of $2m, convertible into 100k shares, tax 30%. The per-share increment for the diluted test is:",
     "opts": [
      "$0.84",
      "$1.20",
      "$0.72"
     ],
     "ans": 0,
     "en": "After-tax interest = 120k × 0.7 = 84k; increment = 84k/100k = $0.84. Include only if below basic EPS.",
     "vi": "Lãi sau thuế = 120k × 0,7 = 84k; phần gia tăng = 84k/100k = $0,84. Chỉ đưa vào nếu thấp hơn basic EPS."
    },
    {
     "q": "Goodwill from an acquisition equals:",
     "opts": [
      "Purchase price − book value of net assets",
      "Purchase price − fair value of identifiable net assets",
      "Fair value of intangibles acquired"
     ],
     "ans": 1,
     "en": "Goodwill is the residual over the FAIR value of identifiable net assets — book value is irrelevant.",
     "vi": "Goodwill là phần dôi so với FAIR value của tài sản thuần nhận diện được — giá trị sổ sách không liên quan."
    },
    {
     "q": "NI 150, depreciation 30, receivables +20, inventory −10, payables +5. CFO (indirect) is:",
     "opts": [
      "175",
      "195",
      "165"
     ],
     "ans": 0,
     "en": "150 + 30 − 20 + 10 + 5 = 175. Falling inventory RELEASES cash (add).",
     "vi": "150 + 30 − 20 + 10 + 5 = 175. Tồn kho giảm GIẢI PHÓNG tiền (cộng)."
    },
    {
     "q": "A gain of 25 on an equipment sale appears in NI. In indirect CFO it is:",
     "opts": [
      "Added back",
      "Subtracted",
      "Ignored — non-cash"
     ],
     "ans": 1,
     "en": "Subtract the gain from CFO; the entire sale proceeds belong in CFI. Leaving it would double count.",
     "vi": "Trừ khoản lãi khỏi CFO; toàn bộ tiền bán tài sản thuộc CFI. Để nguyên sẽ tính trùng."
    },
    {
     "q": "To compare a LIFO firm with FIFO peers, an analyst adjusts inventory by:",
     "opts": [
      "Subtracting the LIFO reserve",
      "Adding the LIFO reserve",
      "Multiplying by (1 − tax rate)"
     ],
     "ans": 1,
     "en": "FIFO inventory = LIFO inventory + LIFO reserve, disclosed in the footnotes.",
     "vi": "Tồn kho FIFO = tồn kho LIFO + LIFO reserve, công bố trong thuyết minh."
    },
    {
     "q": "Under IFRS revaluation, an upward revaluation (no prior write-down) is recognized in:",
     "opts": [
      "Profit or loss",
      "Other comprehensive income (revaluation surplus)",
      "Retained earnings directly"
     ],
     "ans": 1,
     "en": "First-time upward revaluations bypass P&L and credit the revaluation surplus in equity via OCI.",
     "vi": "Đánh giá tăng lần đầu không qua P&L mà ghi có revaluation surplus trong vốn chủ qua OCI."
    },
    {
     "q": "Capitalizing rather than expensing a cost in the current year produces:",
     "opts": [
      "Lower CFO and higher CFI outflow",
      "Higher CFO and a CFI outflow",
      "No cash-flow classification difference"
     ],
     "ans": 1,
     "en": "The payment is classified as investing, so CFO is higher; CFI shows the outflow. Total cash change is identical.",
     "vi": "Khoản chi được phân loại đầu tư nên CFO cao hơn; CFI ghi nhận dòng chi. Tổng thay đổi tiền giống hệt."
    },
    {
     "q": "Pension plan assets 900, PBO 1,050. The balance sheet reports:",
     "opts": [
      "A net pension asset of 150",
      "A net pension liability of 150",
      "Nothing — off-balance-sheet"
     ],
     "ans": 1,
     "en": "Funded status = 900 − 1,050 = −150 → net liability on the balance sheet.",
     "vi": "Funded status = 900 − 1.050 = −150 → nợ ròng trên balance sheet."
    },
    {
     "q": "Tax-exempt municipal bond interest received causes:",
     "opts": [
      "A DTA",
      "A DTL",
      "A permanent difference lowering the effective tax rate"
     ],
     "ans": 2,
     "en": "It never becomes taxable — a permanent difference; the effective rate falls below the statutory rate, with no deferred tax.",
     "vi": "Khoản này không bao giờ chịu thuế — chênh lệch vĩnh viễn; effective rate xuống dưới thuế suất luật định, không có deferred tax."
    },
    {
     "q": "Two firms have identical ROE of 18%. Firm X: margin 12%, leverage 1.2. Firm Y: margin 3%, leverage 4.0. The better risk profile likely belongs to:",
     "opts": [
      "Firm X — profitability-driven ROE",
      "Firm Y — efficient use of debt",
      "Cannot differ; ROE is equal"
     ],
     "ans": 0,
     "en": "Same ROE, different engines: X earns it through margins; Y through debt. Leverage-driven ROE is fragile when rates rise or income dips.",
     "vi": "Cùng ROE, khác động cơ: X kiếm bằng biên lợi nhuận; Y bằng nợ. ROE dựa đòn bẩy mong manh khi lãi suất tăng hoặc lợi nhuận sụt."
    },
    {
     "q": "In a revenue forecast, modeling interest expense on average debt creates:",
     "opts": [
      "A permanent difference",
      "A circular reference requiring iteration",
      "An antidilutive adjustment"
     ],
     "ans": 1,
     "en": "Interest depends on debt, debt on the cash shortfall, which depends on interest — circularity, solved by iteration or by using opening debt.",
     "vi": "Lãi phụ thuộc nợ, nợ phụ thuộc thiếu hụt tiền, thứ lại phụ thuộc lãi — vòng lặp, xử lý bằng phép lặp hoặc dùng nợ đầu kỳ."
    }
   ]
  }
 ]
};
