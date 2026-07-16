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
  "en": "FSA is one of the heaviest and most calculation-rich topics, organized into eleven learning modules: introduction and the audit report, the income statement (including EPS), the balance sheet, two modules on cash flows (including FCFF/FCFE), inventories, long-term assets, long-term liabilities and equity (bonds, leases, pensions), income taxes, financial analysis techniques, and financial statement modeling. Expect many \"which effect on which statement\" questions — and know your IFRS vs US GAAP differences cold.",
  "vi": "FSA là một trong những topic nặng và nhiều tính toán nhất, gồm mười một learning modules: nhập môn và báo cáo kiểm toán, báo cáo KQKD (gồm EPS), bảng CĐKT, hai module về dòng tiền (gồm FCFF/FCFE), tồn kho, tài sản dài hạn, nợ dài hạn và vốn chủ (trái phiếu, thuê tài sản, lương hưu), thuế thu nhập, kỹ thuật phân tích tài chính, và mô hình hóa báo cáo tài chính. Đề thi có rất nhiều câu dạng \"ảnh hưởng gì lên báo cáo nào\" — và phải thuộc nằm lòng khác biệt IFRS vs US GAAP."
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
    }
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
    }
   ],
   "formulas": [
    [
     "Forecast receivables",
     "AR = Revenue × DSO / 365",
     "Same pattern: inventory via DOH, payables via DPO"
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
  ]
 ]
};
