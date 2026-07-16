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
  "en": "Corporate Issuers spans seven learning modules: organizational forms and ownership, investors and stakeholders, corporate governance, working capital and liquidity, capital investments and allocation, capital structure, and business models. It is the most \"verbal\" of the quantitative topics — master the vocabulary and the handful of computations (CCC, NPV/IRR, WACC, MM, leverage) and the questions become fast points.",
  "vi": "Corporate Issuers gồm bảy learning modules: hình thức tổ chức và sở hữu, nhà đầu tư và các bên liên quan, quản trị công ty, vốn lưu động và thanh khoản, đầu tư và phân bổ vốn, cấu trúc vốn, và business models. Đây là topic \"chữ nghĩa\" nhất trong nhóm định lượng — nắm chắc từ vựng và vài phép tính (CCC, NPV/IRR, WACC, MM, đòn bẩy) là các câu hỏi trở thành điểm nhanh."
 },
 "modules": [
  {
   "title": "Organizational Forms, Corporate Issuer Features, and Ownership",
   "sections": [
    {
     "h": "Organizational forms, liability & taxation",
     "en": "<ul><li><strong>Sole proprietorship:</strong> owner = the business; simple and cheap, full control — but <em>unlimited personal liability</em>, financing limited to the owner’s resources, and profits taxed as personal income.</li><li><strong>Partnerships:</strong> a <em>general partnership</em> spreads work and capital across partners who all bear unlimited liability (each can be liable for the others’ actions). A <em>limited partnership</em> splits roles: the <strong>general partner (GP)</strong> runs the business with unlimited liability; <strong>limited partners (LPs)</strong> contribute capital, share profits, and risk only their investment. Profits are <em>pass-through</em> — taxed once, at the partner level.</li><li><strong>Corporation (limited company):</strong> a separate legal entity that can own assets, contract, borrow, and sue; owners hold shares with <strong>limited liability</strong> (losses capped at the investment), ownership transfers easily, capital can be raised from a nearly unlimited investor base, and professional managers can run it — the features that let corporations reach massive scale. The costs: <em>separation of ownership and control</em> (the agency problems of the governance module) and, in many regimes, <strong>double taxation</strong> — profits taxed at the corporate level and again as dividends to shareholders (some jurisdictions relieve this with imputation/credits).</li><li><strong>Public vs private:</strong> public corporations have shares listed on an exchange, trade continuously, and face extensive disclosure requirements; private companies raise capital through private placements (investors typically must be accredited), and their shares change hands rarely and by negotiation. Paths from private to public: <strong>IPO</strong> (new shares underwritten and sold), <strong>direct listing</strong> (existing shares begin trading, no new capital), or merging with a listed shell/<strong>SPAC</strong>. Going the other way — a buyout taking a public firm private — relies heavily on debt (LBO).</li></ul>",
     "vi": "<ul><li><strong>Doanh nghiệp tư nhân một chủ:</strong> chủ = doanh nghiệp; đơn giản, rẻ, toàn quyền — nhưng <em>chịu trách nhiệm vô hạn bằng tài sản cá nhân</em>, vốn giới hạn ở nguồn lực của chủ, lợi nhuận chịu thuế thu nhập cá nhân.</li><li><strong>Hợp danh:</strong> <em>hợp danh thông thường</em> chia việc và vốn giữa các thành viên nhưng tất cả chịu trách nhiệm vô hạn (mỗi người có thể phải gánh cả hành vi của người khác). <em>Hợp danh hữu hạn</em> tách vai trò: <strong>thành viên hợp danh (GP)</strong> điều hành, chịu trách nhiệm vô hạn; <strong>thành viên góp vốn (LP)</strong> góp vốn, hưởng lợi nhuận, chỉ rủi ro phần vốn góp. Lợi nhuận <em>chuyển thẳng (pass-through)</em> — chỉ chịu thuế một lần ở cấp thành viên.</li><li><strong>Công ty cổ phần:</strong> pháp nhân độc lập có thể sở hữu tài sản, ký hợp đồng, vay nợ, kiện tụng; cổ đông nắm cổ phần với <strong>trách nhiệm hữu hạn</strong> (lỗ tối đa bằng vốn góp), chuyển nhượng dễ, huy động vốn từ lượng nhà đầu tư gần như không giới hạn, thuê quản lý chuyên nghiệp — các đặc điểm giúp đạt quy mô khổng lồ. Cái giá: <em>tách quyền sở hữu khỏi quyền điều hành</em> (vấn đề đại diện ở module quản trị) và ở nhiều nước là <strong>thuế hai lần</strong> — lợi nhuận chịu thuế doanh nghiệp rồi cổ tức lại chịu thuế ở cổ đông (một số nước giảm nhẹ bằng cơ chế khấu trừ).</li><li><strong>Đại chúng vs tư nhân:</strong> công ty đại chúng niêm yết trên sàn, giao dịch liên tục, nghĩa vụ công bố thông tin nặng; công ty tư nhân huy động qua phát hành riêng lẻ (nhà đầu tư thường phải đạt chuẩn), cổ phần ít khi đổi chủ và phải thương lượng. Đường lên đại chúng: <strong>IPO</strong> (phát hành cổ phần mới qua bảo lãnh), <strong>niêm yết trực tiếp</strong> (cổ phần hiện hữu lên sàn, không huy động mới), hoặc sáp nhập với công ty vỏ/<strong>SPAC</strong>. Chiều ngược lại — mua lại đưa công ty đại chúng về tư nhân — dựa nhiều vào nợ vay (LBO).</li></ul>"
    }
   ]
  },
  {
   "title": "Investors and Other Stakeholders",
   "sections": [
    {
     "h": "Debt vs equity claims — and the web of stakeholders",
     "en": "<ul><li><strong>Two claims, two mindsets.</strong> <em>Equityholders</em> own the residual: unlimited upside, first in line for losses — so they favor growth and tolerate risk. <em>Debtholders</em> hold a contractual claim: fixed interest and principal, no share of upside — so they care only about downside and prefer stable, lower-risk operations. This asymmetry creates the classic <strong>shareholder–creditor conflict</strong>: shareholders of a leveraged firm can gain from risk-shifting into volatile projects, transferring risk to creditors; creditors respond with <em>covenants</em>, collateral, and pricing.</li><li><strong>Shareholder vs stakeholder theory:</strong> shareholder theory says the corporation’s objective is maximizing shareholder value; <strong>stakeholder theory</strong> broadens the objective to balance the interests of all groups with a stake in the firm.</li><li><strong>The stakeholder map</strong> and what each wants: shareholders (value growth, control rights); creditors/bondholders (cash-flow stability, covenant protection); the board (duty of care and loyalty to shareholders); managers (compensation, career security); employees (pay, safety, opportunity); customers (value, quality, safety); suppliers (payment, ongoing relationship); governments/regulators (taxes, compliance, employment). ESG analysis is largely the systematic study of these non-shareholder relationships and their financial consequences.</li><li><strong>Ownership structures matter:</strong> dispersed ownership (many small holders) creates weak owners and strong managers — the principal–agent problem; concentrated ownership (family, state) creates strong owners but a <em>controlling-vs-minority shareholder</em> conflict; <strong>dual-class shares</strong> entrench founders by separating voting power from economic ownership.</li></ul>",
     "vi": "<ul><li><strong>Hai loại quyền lợi, hai tư duy.</strong> <em>Cổ đông</em> nắm phần còn lại: hưởng toàn bộ tăng trưởng, đứng đầu chịu lỗ — nên ưa tăng trưởng, chịu được rủi ro. <em>Chủ nợ</em> nắm quyền theo hợp đồng: lãi và gốc cố định, không hưởng phần tăng thêm — nên chỉ quan tâm rủi ro giảm giá, thích hoạt động ổn định. Bất đối xứng này tạo <strong>xung đột cổ đông–chủ nợ</strong> kinh điển: cổ đông công ty vay nợ nhiều có thể lợi khi dồn vốn vào dự án rủi ro, đẩy rủi ro sang chủ nợ; chủ nợ đáp lại bằng <em>covenant</em>, tài sản bảo đảm và giá vốn vay.</li><li><strong>Thuyết cổ đông vs thuyết các bên liên quan:</strong> thuyết cổ đông coi mục tiêu công ty là tối đa hóa giá trị cổ đông; <strong>thuyết các bên liên quan</strong> mở rộng mục tiêu sang cân bằng lợi ích mọi nhóm có liên quan.</li><li><strong>Bản đồ các bên liên quan</strong> và điều họ muốn: cổ đông (tăng giá trị, quyền kiểm soát); chủ nợ/trái chủ (dòng tiền ổn định, bảo vệ bằng covenant); HĐQT (nghĩa vụ cẩn trọng, trung thành với cổ đông); ban điều hành (thù lao, an toàn sự nghiệp); người lao động (lương, an toàn, cơ hội); khách hàng (giá trị, chất lượng, an toàn); nhà cung cấp (được thanh toán, quan hệ lâu dài); nhà nước (thuế, tuân thủ, việc làm). Phân tích ESG phần lớn chính là nghiên cứu có hệ thống các quan hệ ngoài-cổ-đông này và hệ quả tài chính của chúng.</li><li><strong>Cấu trúc sở hữu quan trọng:</strong> sở hữu phân tán (nhiều cổ đông nhỏ) tạo chủ yếu quản lý mạnh — bài toán đại diện; sở hữu tập trung (gia đình, nhà nước) tạo chủ mạnh nhưng sinh xung đột <em>cổ đông kiểm soát vs thiểu số</em>; <strong>cổ phần hai hạng (dual-class)</strong> giúp nhà sáng lập giữ quyền bằng cách tách quyền biểu quyết khỏi sở hữu kinh tế.</li></ul>"
    }
   ]
  },
  {
   "title": "Corporate Governance: Conflicts, Mechanisms, and Risks",
   "sections": [
    {
     "h": "Principal–agent conflicts and governance mechanisms",
     "en": "<p>Corporate governance manages conflicts among stakeholders: shareholders vs managers (the classic <strong>principal–agent problem</strong>: entrenchment, empire building, excessive risk aversion), controlling vs minority shareholders, shareholders vs creditors (equity holders prefer risk; debt holders prefer safety). Mechanisms: the <strong>board of directors</strong> (independence, separation of CEO and chair, committees — audit, remuneration, nomination), say-on-pay, activist investors, the takeover market, and legal/regulatory constraints. ESG considerations enter through material environmental and social factors that affect long-term value and risk.</p>",
     "vi": "<p>Quản trị công ty xử lý xung đột giữa các bên liên quan: cổ đông vs ban điều hành (bài toán <strong>người ủy quyền – người đại diện</strong>: cố thủ ghế, xây \"đế chế\", né rủi ro quá mức), cổ đông chi phối vs cổ đông thiểu số, cổ đông vs chủ nợ (cổ đông thích rủi ro, chủ nợ thích an toàn). Cơ chế: <strong>HĐQT</strong> (tính độc lập, tách vai trò CEO và Chủ tịch, các ủy ban kiểm toán/lương thưởng/đề cử), biểu quyết về thù lao, nhà đầu tư chủ động, thị trường thâu tóm, và ràng buộc pháp lý. Yếu tố ESG được xét qua các nhân tố môi trường – xã hội trọng yếu ảnh hưởng giá trị và rủi ro dài hạn.</p>"
    }
   ]
  },
  {
   "title": "Working Capital and Liquidity",
   "sections": [
    {
     "h": "Liquidity: sources, drags & pulls, and the cash conversion cycle",
     "en": "<ul><li><strong>Primary sources of liquidity</strong> — available in the normal course: cash and near-cash balances, operating cash flow, and short-term borrowing capacity (bank lines, trade credit). <strong>Secondary sources</strong> — using them signals or causes damage: negotiating/renegotiating debt, <em>selling assets</em>, bankruptcy reorganization. A healthy firm manages liquidity from primary sources.</li><li><strong>Drags and pulls:</strong> a <em>drag</em> delays cash coming <strong>in</strong> — uncollected/aging receivables, obsolete inventory, tight credit; a <em>pull</em> accelerates cash going <strong>out</strong> — suppliers demanding earlier payment, reduced credit limits, covenant-triggered paydowns.</li><li><strong>Measuring:</strong> current, quick, and cash ratios for stocks of liquidity; activity ratios for flows. The <strong>cash conversion cycle = DOH + DSO − DPO</strong> — days from paying for inputs to collecting from customers; shorter is better, and a <em>negative</em> CCC (collect before paying, like some retailers) means suppliers finance operations.</li><li><strong>Working capital approaches:</strong> a <em>conservative</em> approach holds more cash/inventory and funds with long-term capital — safe but costly; an <em>aggressive</em> approach minimizes working capital and relies on short-term funding — cheaper but fragile; <em>moderate</em> matches maturity: permanent current assets funded long-term, seasonal swings funded short-term.</li></ul>",
     "vi": "<ul><li><strong>Nguồn thanh khoản sơ cấp</strong> — sẵn có trong hoạt động bình thường: tiền và tương đương tiền, dòng tiền hoạt động, hạn mức vay ngắn hạn (hạn mức ngân hàng, tín dụng thương mại). <strong>Nguồn thứ cấp</strong> — dùng đến là tín hiệu hoặc nguyên nhân của tổn thất: đàm phán lại nợ, <em>bán tài sản</em>, tái cấu trúc phá sản. Doanh nghiệp khỏe quản trị thanh khoản bằng nguồn sơ cấp.</li><li><strong>Drag và pull:</strong> <em>drag</em> làm chậm dòng tiền <strong>vào</strong> — phải thu quá hạn, tồn kho lỗi thời, tín dụng bị siết; <em>pull</em> đẩy nhanh dòng tiền <strong>ra</strong> — nhà cung cấp đòi trả sớm, hạn mức bị cắt, covenant buộc trả nợ trước.</li><li><strong>Đo lường:</strong> current/quick/cash ratio đo trạng thái; các tỷ số hoạt động đo dòng chảy. <strong>Chu kỳ chuyển đổi tiền = DOH + DSO − DPO</strong> — số ngày từ lúc trả tiền đầu vào đến lúc thu tiền khách; càng ngắn càng tốt, CCC <em>âm</em> (thu trước trả sau, như một số nhà bán lẻ) nghĩa là nhà cung cấp tài trợ cho hoạt động của mình.</li><li><strong>Chiến lược vốn lưu động:</strong> <em>thận trọng</em> — giữ nhiều tiền/tồn kho, tài trợ bằng vốn dài hạn: an toàn nhưng đắt; <em>quyết liệt</em> — tối thiểu vốn lưu động, dựa vào vốn ngắn hạn: rẻ nhưng mong manh; <em>trung dung</em> — khớp kỳ hạn: tài sản ngắn hạn thường trực tài trợ dài hạn, biến động mùa vụ tài trợ ngắn hạn.</li></ul>"
    },
    {
     "h": "Short-term funding choices",
     "en": "<ul><li><strong>Internal first:</strong> stretching payables (to the limit of terms, not beyond), tightening receivables and inventory — free but finite.</li><li><strong>Bank sources:</strong> <em>uncommitted lines</em> (cheapest, can vanish when needed most), <em>committed lines</em> (fee-paid, reliable), <em>revolving credit</em> (largest, multi-year — the strongest signal of bank support); secured (\"asset-based\") loans against receivables or inventory for weaker credits.</li><li><strong>Market sources:</strong> large, high-quality issuers roll <strong>commercial paper</strong> — short-term unsecured notes priced below bank loans (backed by unused bank lines as insurance).</li><li><strong>Selling receivables:</strong> <em>factoring</em> converts receivables to cash immediately at a discount, shifting collection (and often credit risk) to the factor — expensive, common for smaller firms.</li><li>The treasurer’s framework: match funding to needs by <em>size, seasonality, and risk tolerance</em>; diversify sources; and preserve unused capacity for stress.</li></ul>",
     "vi": "<ul><li><strong>Nội bộ trước:</strong> kéo dài phải trả (trong giới hạn điều khoản, không lạm dụng), siết phải thu và tồn kho — miễn phí nhưng hữu hạn.</li><li><strong>Nguồn ngân hàng:</strong> <em>hạn mức không cam kết</em> (rẻ nhất, dễ biến mất đúng lúc cần), <em>hạn mức cam kết</em> (trả phí, tin cậy), <em>tín dụng quay vòng</em> (lớn nhất, nhiều năm — tín hiệu hậu thuẫn mạnh nhất); vay có bảo đảm bằng phải thu/tồn kho cho doanh nghiệp tín nhiệm thấp.</li><li><strong>Nguồn thị trường:</strong> doanh nghiệp lớn, tín nhiệm cao phát hành quay vòng <strong>thương phiếu (commercial paper)</strong> — nợ ngắn hạn không bảo đảm, rẻ hơn vay ngân hàng (kèm hạn mức ngân hàng dự phòng làm \"bảo hiểm\").</li><li><strong>Bán phải thu:</strong> <em>factoring</em> đổi phải thu lấy tiền ngay với mức chiết khấu, chuyển việc thu hồi (và thường cả rủi ro tín dụng) cho bên mua — đắt, phổ biến ở doanh nghiệp nhỏ.</li><li>Khung của thủ quỹ: chọn nguồn theo <em>quy mô, tính mùa vụ, khẩu vị rủi ro</em>; đa dạng hóa nguồn; giữ hạn mức chưa dùng cho lúc căng thẳng.</li></ul>"
    }
   ],
   "formulas": [
    [
     "Cash conversion cycle",
     "CCC = DOH + DSO − DPO",
     "Shorter is better; negative = suppliers finance operations"
    ]
   ]
  },
  {
   "title": "Capital Investments and Capital Allocation",
   "sections": [
    {
     "h": "Decision rules",
     "en": "<ul><li><strong>NPV</strong> = present value of all incremental after-tax cash flows minus the initial outlay, discounted at the project’s required return. Accept if NPV &gt; 0 — this directly measures the expected addition to shareholder wealth.</li><li><strong>IRR</strong> = the discount rate that makes NPV = 0. Accept if IRR &gt; required return. Problems: assumes reinvestment at the IRR (often unrealistic), can produce <strong>multiple IRRs</strong> with unconventional cash flows (sign changes), and can <strong>rank mutually exclusive projects incorrectly</strong> when size or timing differs. <em>When NPV and IRR conflict, choose the higher NPV.</em></li><li>Other tools: payback period (ignores time value and cash flows after payback), discounted payback, profitability index (PI = PV of inflows / initial outlay; PI &gt; 1 means NPV &gt; 0 — useful under capital rationing).</li><li>Use only <strong>incremental</strong> cash flows: include opportunity costs and cannibalization/externalities; exclude <strong>sunk costs</strong>; interest costs are excluded from cash flows because they are captured in the discount rate.</li></ul>",
     "vi": "<ul><li><strong>NPV</strong> = giá trị hiện tại của toàn bộ dòng tiền tăng thêm sau thuế trừ vốn đầu tư ban đầu, chiết khấu tại tỷ suất yêu cầu. Chấp nhận nếu NPV &gt; 0 — đo trực tiếp phần giá trị tăng thêm cho cổ đông.</li><li><strong>IRR</strong> = tỷ suất chiết khấu làm NPV = 0. Chấp nhận nếu IRR &gt; tỷ suất yêu cầu. Nhược điểm: giả định tái đầu tư tại IRR (thường phi thực tế), có thể có <strong>nhiều IRR</strong> khi dòng tiền đổi dấu nhiều lần, và có thể <strong>xếp hạng sai các dự án loại trừ lẫn nhau</strong> khi khác quy mô hoặc thời điểm. <em>Khi NPV và IRR mâu thuẫn, chọn theo NPV cao hơn.</em></li><li>Công cụ khác: thời gian hoàn vốn (bỏ qua giá trị thời gian và dòng tiền sau hoàn vốn), hoàn vốn có chiết khấu, chỉ số sinh lời PI.</li><li>Chỉ dùng dòng tiền <strong>tăng thêm</strong>: tính chi phí cơ hội và hiệu ứng \"ăn thịt\" sản phẩm cũ; loại <strong>chi phí chìm</strong>; loại lãi vay khỏi dòng tiền vì đã nằm trong tỷ suất chiết khấu.</li></ul>"
    },
    {
     "h": "The capital allocation process, pitfalls & real options",
     "en": "<ul><li><strong>Project types:</strong> business maintenance (replacement, going concern), business growth (expansion, new products/markets), and regulatory/safety/environmental projects (mandated — evaluated on least-cost compliance); plus other/pet projects that deserve the most skepticism.</li><li><strong>The process:</strong> idea generation → analysis (forecast <em>incremental after-tax cash flows</em>, not accounting income) → capital-budget planning (fit strategy and timing) → <em>post-audit</em> monitoring, which closes the loop by comparing outcomes to forecasts and disciplining future estimates.</li><li><strong>Principles:</strong> evaluate cash flows, after tax, on an incremental basis: include <em>opportunity costs</em> and side effects (cannibalization), exclude <strong>sunk costs</strong> and financing costs (they live in the discount rate). The economic test: value is created only when returns exceed the <strong>cost of capital</strong> — track <em>ROIC vs WACC</em>, not earnings growth alone.</li><li><strong>Common pitfalls:</strong> counting sunk costs, ignoring opportunity costs and cannibalization, inflation inconsistency, over-optimistic templates (\"hockey-stick\" forecasts), pushing pet projects, and basing decisions on EPS impact rather than NPV.</li><li><strong>Real options</strong> add value beyond static NPV: <em>timing</em> (delay), <em>sizing</em> (abandonment or expansion), <em>flexibility</em> (price-setting, production switching), and <em>fundamental</em> options (the project is itself an option, like drilling rights). A negative-NPV project can be worth accepting if the embedded option value exceeds the shortfall.</li></ul>",
     "vi": "<ul><li><strong>Loại dự án:</strong> duy trì hoạt động (thay thế, vận hành liên tục), tăng trưởng (mở rộng, sản phẩm/thị trường mới), và dự án theo quy định/an toàn/môi trường (bắt buộc — đánh giá theo chi phí tuân thủ thấp nhất); cùng các dự án \"con cưng\" cần hoài nghi nhất.</li><li><strong>Quy trình:</strong> tạo ý tưởng → phân tích (dự phóng <em>dòng tiền tăng thêm sau thuế</em>, không phải lợi nhuận kế toán) → lập kế hoạch ngân sách vốn (khớp chiến lược, thời điểm) → <em>hậu kiểm (post-audit)</em> so kết quả với dự phóng để kỷ luật hóa các ước tính tương lai.</li><li><strong>Nguyên tắc:</strong> đánh giá dòng tiền, sau thuế, trên cơ sở tăng thêm: tính <em>chi phí cơ hội</em> và tác động phụ (ăn thịt sản phẩm cũ), loại <strong>chi phí chìm</strong> và chi phí tài trợ (đã nằm trong suất chiết khấu). Phép thử kinh tế: giá trị chỉ được tạo ra khi lợi suất vượt <strong>chi phí vốn</strong> — theo dõi <em>ROIC vs WACC</em>, đừng chỉ nhìn tăng trưởng lợi nhuận.</li><li><strong>Bẫy thường gặp:</strong> tính chi phí chìm, bỏ quên chi phí cơ hội và cannibalization, bất nhất về lạm phát, dự phóng \"gậy khúc côn cầu\" quá lạc quan, đẩy dự án con cưng, và quyết định theo tác động EPS thay vì NPV.</li><li><strong>Quyền chọn thực</strong> tạo giá trị vượt NPV tĩnh: <em>thời điểm</em> (trì hoãn), <em>quy mô</em> (từ bỏ hoặc mở rộng), <em>linh hoạt</em> (đặt giá, chuyển đổi sản xuất), và quyền chọn <em>nền tảng</em> (dự án tự nó là một quyền chọn, như quyền khoan dầu). Dự án NPV âm vẫn có thể đáng nhận nếu giá trị quyền chọn kèm theo lớn hơn phần thiếu hụt.</li></ul>"
    }
   ],
   "formulas": [
    [
     "NPV",
     "Σ CF_t/(1+r)^t − Initial outlay",
     "Accept independent projects with NPV > 0"
    ],
    [
     "IRR",
     "Rate where NPV = 0",
     "Conflicts with NPV → follow NPV"
    ]
   ]
  },
  {
   "title": "Capital Structure",
   "sections": [
    {
     "h": "WACC and component costs",
     "en": "<p><strong>WACC = w<sub>d</sub>·r<sub>d</sub>(1 − t) + w<sub>p</sub>·r<sub>p</sub> + w<sub>e</sub>·r<sub>e</sub></strong>, with weights at <em>target</em> capital structure based on <em>market values</em>. Only debt gets the tax shield (interest is deductible; dividends are not).</p><ul><li><strong>Cost of debt:</strong> YTM on existing debt or the rate on new borrowing, after tax.</li><li><strong>Cost of preferred:</strong> r<sub>p</sub> = D<sub>p</sub> / P<sub>p</sub>.</li><li><strong>Cost of equity:</strong> CAPM (r<sub>e</sub> = R<sub>f</sub> + β(R<sub>m</sub> − R<sub>f</sub>)), the dividend discount approach (r<sub>e</sub> = D<sub>1</sub>/P<sub>0</sub> + g), or bond yield plus risk premium.</li></ul>",
     "vi": "<p><strong>WACC = w<sub>d</sub>·r<sub>d</sub>(1 − t) + w<sub>p</sub>·r<sub>p</sub> + w<sub>e</sub>·r<sub>e</sub></strong>, với trọng số theo cấu trúc vốn <em>mục tiêu</em> tính trên <em>giá trị thị trường</em>. Chỉ nợ vay có lá chắn thuế (lãi vay được khấu trừ thuế; cổ tức thì không).</p><ul><li><strong>Chi phí nợ:</strong> YTM của nợ hiện hữu hoặc lãi suất vay mới, sau thuế.</li><li><strong>Chi phí CP ưu đãi:</strong> r<sub>p</sub> = D<sub>p</sub> / P<sub>p</sub>.</li><li><strong>Chi phí VCSH:</strong> CAPM (r<sub>e</sub> = R<sub>f</sub> + β(R<sub>m</sub> − R<sub>f</sub>)), mô hình chiết khấu cổ tức (r<sub>e</sub> = D<sub>1</sub>/P<sub>0</sub> + g), hoặc lợi suất trái phiếu + phần bù rủi ro.</li></ul>"
    },
    {
     "h": "Capital structure theory: Modigliani–Miller, trade-off & pecking order",
     "en": "<ul><li><strong>MM without taxes (1958):</strong> with perfect markets, capital structure is <em>irrelevant</em> — firm value depends on assets, not the debt/equity mix (Prop I); cheaper debt is exactly offset because the cost of equity rises linearly with leverage (Prop II). The point is not realism but isolating <em>why</em> structure matters: taxes and frictions.</li><li><strong>MM with corporate taxes:</strong> interest is deductible, so debt adds a tax shield: <strong>V<sub>L</sub> = V<sub>U</sub> + t × D</strong> — taken literally, firms should be almost all debt.</li><li><strong>Trade-off theory</strong> restores balance: value = unlevered value + tax shield − expected <em>costs of financial distress</em> (which rise with leverage and are worst for firms with intangible assets and volatile cash flows). The <strong>optimal capital structure</strong> minimizes WACC at the point where the marginal tax benefit equals the marginal distress cost.</li><li><strong>Pecking order & signaling:</strong> because of information asymmetry, managers prefer <em>internal funds, then debt, then equity last</em>; issuing equity signals managers may think shares are overvalued, so announcements often knock the price.</li><li><strong>Practical determinants:</strong> stable, asset-heavy, high-margin businesses (utilities) carry more debt; growth firms with intangible assets carry less. Lenders watch collateral and cash-flow volatility; management weighs flexibility and control.</li></ul>",
     "vi": "<ul><li><strong>MM không thuế (1958):</strong> với thị trường hoàn hảo, cấu trúc vốn <em>không quan trọng</em> — giá trị doanh nghiệp phụ thuộc tài sản, không phụ thuộc tỷ lệ nợ/vốn (Mệnh đề I); nợ rẻ hơn bị bù trừ đúng bằng việc chi phí vốn chủ tăng tuyến tính theo đòn bẩy (Mệnh đề II). Ý nghĩa không nằm ở tính thực tế mà ở việc cô lập <em>lý do</em> cấu trúc vốn quan trọng: thuế và ma sát.</li><li><strong>MM có thuế doanh nghiệp:</strong> lãi vay được khấu trừ nên nợ tạo lá chắn thuế: <strong>V<sub>L</sub> = V<sub>U</sub> + t × D</strong> — hiểu máy móc thì doanh nghiệp nên vay gần như 100%.</li><li><strong>Thuyết đánh đổi</strong> lập lại cân bằng: giá trị = giá trị không đòn bẩy + lá chắn thuế − chi phí <em>kiệt quệ tài chính</em> kỳ vọng (tăng theo đòn bẩy, nặng nhất với doanh nghiệp tài sản vô hình, dòng tiền biến động). <strong>Cấu trúc vốn tối ưu</strong> tối thiểu hóa WACC tại điểm lợi ích thuế biên = chi phí kiệt quệ biên.</li><li><strong>Thứ tự ưu tiên &amp; tín hiệu:</strong> do bất cân xứng thông tin, ban điều hành ưu tiên <em>vốn nội bộ, rồi nợ, cuối cùng mới phát hành cổ phần</em>; phát hành cổ phần phát tín hiệu ban điều hành có thể cho rằng giá đang cao, nên tin công bố thường làm giá giảm.</li><li><strong>Yếu tố thực tiễn:</strong> doanh nghiệp ổn định, nặng tài sản hữu hình, biên cao (tiện ích) vay nhiều hơn; doanh nghiệp tăng trưởng, tài sản vô hình vay ít. Chủ nợ nhìn tài sản bảo đảm và độ biến động dòng tiền; ban điều hành cân nhắc sự linh hoạt và quyền kiểm soát.</li></ul>"
    },
    {
     "h": "Operating and financial leverage",
     "en": "<ul><li><strong>DOL</strong> (degree of operating leverage) = %Δ operating income / %Δ sales = contribution margin / operating income. Driven by fixed <em>operating</em> costs.</li><li><strong>DFL</strong> (degree of financial leverage) = %Δ net income / %Δ operating income = EBIT / (EBIT − interest). Driven by fixed <em>financing</em> costs.</li><li><strong>DTL = DOL × DFL</strong> — total sensitivity of net income to sales.</li><li>Business risk (sales + operating risk) plus financial risk determine total leverage. Higher leverage raises the breakeven point and magnifies both gains and losses. Modigliani–Miller: without taxes, capital structure is irrelevant; with taxes, debt adds value via the tax shield until financial distress and agency costs offset it (the static trade-off theory → an optimal capital structure).</li></ul>",
     "vi": "<ul><li><strong>DOL</strong> = %Δ lợi nhuận hoạt động / %Δ doanh thu = số dư đảm phí / lợi nhuận hoạt động. Do chi phí <em>hoạt động</em> cố định tạo ra.</li><li><strong>DFL</strong> = %Δ LN ròng / %Δ lợi nhuận hoạt động = EBIT / (EBIT − lãi vay). Do chi phí <em>tài chính</em> cố định tạo ra.</li><li><strong>DTL = DOL × DFL</strong> — độ nhạy tổng hợp của LN ròng theo doanh thu.</li><li>Rủi ro kinh doanh + rủi ro tài chính quyết định tổng đòn bẩy. Đòn bẩy cao nâng điểm hòa vốn và khuếch đại cả lãi lẫn lỗ. Modigliani–Miller: không thuế → cấu trúc vốn không quan trọng; có thuế → nợ tạo giá trị nhờ lá chắn thuế cho tới khi chi phí kiệt quệ tài chính và chi phí đại diện triệt tiêu (lý thuyết đánh đổi tĩnh → tồn tại cấu trúc vốn tối ưu).</li></ul>"
    }
   ],
   "formulas": [
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
    ],
    [
     "MM with taxes",
     "V_L = V_U + t × D",
     "Debt tax shield, before distress costs"
    ]
   ]
  },
  {
   "title": "Business Models",
   "sections": [
    {
     "h": "Business models: how a firm creates and captures value",
     "en": "<ul><li><strong>A business model answers five questions:</strong> who are the customers (B2B vs B2C, segments)? what does the firm offer (the <em>value proposition</em> — features, price, service)? how does it reach them (direct, intermediaries, omnichannel)? how does it price? and how does the value chain fit together — <em>what the firm does itself</em> versus buys, and why its execution is hard to copy.</li><li><strong>Pricing approaches:</strong> value-based (price to the customer’s perceived benefit) vs cost-based; price discrimination (tiered pricing, off-peak, volume); <em>penetration</em> pricing (low price to build share/scale, e.g., streaming launches) vs <em>skimming</em> (high launch price for early adopters). Revenue-model variants: <strong>subscription</strong> (recurring), <strong>freemium</strong> (free base, paid upgrades), razor-and-blades (cheap device, profitable consumables), licensing/franchising (royalties on others’ capital), auction, and bundling.</li><li><strong>Network effects:</strong> the value of the service rises with the number of users (payments, marketplaces, social platforms) — the engine of <em>platform businesses</em>, which monetize interactions between user groups rather than making products; often winner-take-most.</li><li><strong>Why analysts care:</strong> the business model drives revenue visibility (subscriptions smooth it), margin structure (asset-light licensing vs asset-heavy manufacturing), capital intensity, and operating leverage — read it before forecasting anything.</li></ul>",
     "vi": "<ul><li><strong>Một business model trả lời năm câu hỏi:</strong> khách hàng là ai (B2B hay B2C, phân khúc nào)? công ty chào bán gì (<em>tuyên bố giá trị</em> — tính năng, giá, dịch vụ)? tiếp cận bằng cách nào (trực tiếp, trung gian, đa kênh)? định giá ra sao? và chuỗi giá trị ghép lại thế nào — <em>tự làm gì</em>, mua ngoài gì, và vì sao cách thực thi khó sao chép.</li><li><strong>Cách định giá:</strong> theo giá trị (định giá theo lợi ích khách hàng cảm nhận) vs theo chi phí; phân biệt giá (bậc giá, thấp điểm, số lượng); <em>giá thâm nhập</em> (giá thấp để chiếm thị phần/quy mô) vs <em>giá hớt váng</em> (giá cao ban đầu cho nhóm khách tiên phong). Biến thể mô hình doanh thu: <strong>thuê bao</strong> (định kỳ), <strong>freemium</strong> (bản miễn phí, trả tiền để nâng cấp), dao cạo–lưỡi dao (thiết bị rẻ, vật tư sinh lời), cấp phép/nhượng quyền (thu royalty trên vốn người khác), đấu giá, bán theo gói.</li><li><strong>Hiệu ứng mạng lưới:</strong> giá trị dịch vụ tăng theo số người dùng (thanh toán, chợ điện tử, mạng xã hội) — động cơ của <em>doanh nghiệp nền tảng</em>, kiếm tiền từ tương tác giữa các nhóm người dùng thay vì tự sản xuất; thường \"kẻ thắng lấy gần hết\".</li><li><strong>Vì sao analyst quan tâm:</strong> business model quyết định độ chắc chắn của doanh thu (thuê bao làm mượt), cấu trúc biên (cấp phép nhẹ tài sản vs sản xuất nặng tài sản), cường độ vốn và đòn bẩy hoạt động — hãy đọc nó trước khi dự phóng bất cứ điều gì.</li></ul>"
    }
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
  ],
  [
   "general vs limited partner",
   "GP manages with unlimited liability; LPs risk only contributed capital",
   "GP điều hành, trách nhiệm vô hạn; LP chỉ rủi ro vốn góp"
  ],
  [
   "pass-through taxation",
   "Profits taxed once at the owner level (partnerships), avoiding double taxation",
   "Lợi nhuận chỉ chịu thuế một lần ở cấp chủ sở hữu"
  ],
  [
   "dual-class shares",
   "Share classes separating voting power from economic ownership",
   "Cổ phần hai hạng — tách quyền biểu quyết khỏi sở hữu kinh tế"
  ],
  [
   "primary vs secondary liquidity",
   "Cash, CFO, credit lines vs asset sales, renegotiation, reorganization",
   "Nguồn thanh khoản sơ cấp vs thứ cấp"
  ],
  [
   "drag / pull on liquidity",
   "Delayed cash inflows vs accelerated cash outflows",
   "Dòng tiền vào bị chậm vs dòng tiền ra bị đẩy nhanh"
  ],
  [
   "factoring",
   "Selling receivables at a discount for immediate cash",
   "Bán phải thu chiết khấu để lấy tiền ngay"
  ],
  [
   "commercial paper",
   "Short-term unsecured notes of large, high-quality issuers",
   "Thương phiếu — nợ ngắn hạn không bảo đảm của doanh nghiệp lớn"
  ],
  [
   "trade-off theory",
   "Optimal leverage balances the debt tax shield against expected distress costs",
   "Đòn bẩy tối ưu cân bằng lá chắn thuế với chi phí kiệt quệ kỳ vọng"
  ],
  [
   "pecking order",
   "Financing preference: internal funds → debt → equity",
   "Thứ tự ưu tiên tài trợ: nội bộ → nợ → cổ phần"
  ],
  [
   "network effects",
   "Service value rises with the number of users; foundation of platform models",
   "Giá trị dịch vụ tăng theo số người dùng; nền tảng của mô hình platform"
  ],
  [
   "real option",
   "Managerial right to delay, expand, abandon, or switch — value beyond static NPV",
   "Quyền chọn thực: trì hoãn, mở rộng, từ bỏ, chuyển đổi — giá trị vượt NPV tĩnh"
  ],
  [
   "post-audit",
   "Comparing project outcomes with forecasts to discipline future estimates",
   "Hậu kiểm dự án — so kết quả với dự phóng để kỷ luật hóa ước tính"
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
    "q": "In a limited partnership, unlimited personal liability for the business’s obligations is borne by:",
    "opts": [
     "All partners equally",
     "The general partner(s) only",
     "The limited partners only"
    ],
    "ans": 1,
    "en": "GPs run the business and bear unlimited liability; LPs risk only their contributed capital — the defining split of the form.",
    "vi": "GP điều hành và chịu trách nhiệm vô hạn; LP chỉ rủi ro phần vốn góp — đặc trưng cốt lõi của hình thức này."
   },
   {
    "q": "Compared with a partnership, a key disadvantage of the corporate form in many tax regimes is:",
    "opts": [
     "Unlimited liability for shareholders",
     "Double taxation of distributed profits",
     "Inability to raise outside capital"
    ],
    "ans": 1,
    "en": "Corporate profits are taxed at the entity level and again as dividends to shareholders; partnerships are pass-through, taxed once.",
    "vi": "Lợi nhuận công ty chịu thuế ở cấp doanh nghiệp rồi cổ tức lại chịu thuế ở cổ đông; hợp danh là pass-through, chỉ chịu thuế một lần."
   }
  ],
  [
   {
    "q": "Shareholders of a highly leveraged firm push management into much riskier projects. Debtholders most likely object because they:",
    "opts": [
     "Share proportionally in the upside of risky projects",
     "Bear more downside risk while their upside remains capped at fixed interest and principal",
     "Prefer projects with higher NPV"
    ],
    "ans": 1,
    "en": "Debt has a fixed claim: extra risk raises default probability without raising the creditors’ payoff — the classic shareholder–creditor conflict that covenants exist to police.",
    "vi": "Chủ nợ nắm quyền lợi cố định: rủi ro tăng làm xác suất vỡ nợ tăng mà phần nhận được không đổi — xung đột cổ đông–chủ nợ kinh điển mà covenant sinh ra để kiểm soát."
   },
   {
    "q": "A founder retains 55% of votes while holding only 12% of the economic interest. This is most likely achieved through:",
    "opts": [
     "A poison pill",
     "Dual-class share structures",
     "A staggered board"
    ],
    "ans": 1,
    "en": "Dual-class structures give founders high-vote shares, separating control from economic ownership — a governance risk for minority holders.",
    "vi": "Cấu trúc cổ phần hai hạng cấp cho nhà sáng lập cổ phiếu nhiều quyền biểu quyết, tách quyền kiểm soát khỏi sở hữu kinh tế — rủi ro quản trị cho cổ đông thiểu số."
   }
  ],
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
    "q": "Selling long-term assets to meet a payroll shortfall is best described as using:",
    "opts": [
     "A primary source of liquidity",
     "A secondary source of liquidity",
     "A pull on liquidity"
    ],
    "ans": 1,
    "en": "Asset sales, debt renegotiation, and bankruptcy reorganization are secondary sources — resorting to them signals liquidity stress.",
    "vi": "Bán tài sản, đàm phán lại nợ, tái cấu trúc phá sản là nguồn thứ cấp — phải dùng đến chúng là dấu hiệu căng thẳng thanh khoản."
   },
   {
    "q": "DOH = 60 days, DSO = 40 days, DPO = 50 days. The cash conversion cycle is:",
    "opts": [
     "50 days",
     "150 days",
     "30 days"
    ],
    "ans": 0,
    "en": "CCC = DOH + DSO − DPO = 60 + 40 − 50 = 50 days from paying suppliers to collecting from customers.",
    "vi": "CCC = 60 + 40 − 50 = 50 ngày từ lúc trả nhà cung cấp đến lúc thu tiền khách hàng."
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
  ],
  [
   {
    "q": "A software firm offers its basic product free and charges for advanced features. This revenue model is:",
    "opts": [
     "Razor-and-blades",
     "Freemium",
     "Skimming"
    ],
    "ans": 1,
    "en": "Freemium: a free tier builds the user base; monetization comes from upgrades. Razor-and-blades sells a cheap device plus profitable consumables.",
    "vi": "Freemium: bản miễn phí xây tập người dùng, doanh thu đến từ nâng cấp. Dao cạo–lưỡi dao là bán thiết bị rẻ kèm vật tư sinh lời."
   },
   {
    "q": "A payments platform becomes more valuable to each user as more consumers and merchants join. This is an example of:",
    "opts": [
     "Economies of scope",
     "Network effects",
     "Price discrimination"
    ],
    "ans": 1,
    "en": "Network effects: value per user rises with total users — the core economics of platform businesses and a source of winner-take-most outcomes.",
    "vi": "Hiệu ứng mạng lưới: giá trị mỗi người dùng tăng theo tổng số người dùng — kinh tế học cốt lõi của nền tảng, nguồn gốc của cục diện \"kẻ thắng lấy gần hết\"."
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
   },
   {
    "q": "An unlevered firm is worth $100m. Under MM with corporate taxes (t = 25%), issuing $40m of perpetual debt to repurchase shares changes firm value to:",
    "opts": [
     "$110m",
     "$100m",
     "$130m"
    ],
    "ans": 0,
    "en": "V_L = V_U + tD = 100 + 0.25 × 40 = $110m — the value of the debt tax shield, before considering distress costs.",
    "vi": "V_L = V_U + tD = 100 + 0,25 × 40 = 110 triệu — giá trị lá chắn thuế của nợ, trước khi tính chi phí kiệt quệ."
   },
   {
    "q": "A firm’s pilot project has negative NPV of −$2m, but proceeding creates the right (not the obligation) to launch a full-scale rollout later worth an estimated +$7m in option value. The firm should:",
    "opts": [
     "Reject — NPV is negative",
     "Accept — total value including the real option is positive",
     "Wait for the NPV to turn positive"
    ],
    "ans": 1,
    "en": "Project value = static NPV + real-option value = −2 + 7 > 0. Expansion/timing options can justify negative-NPV pilots.",
    "vi": "Giá trị dự án = NPV tĩnh + giá trị quyền chọn thực = −2 + 7 > 0. Quyền chọn mở rộng/thời điểm có thể biện minh cho dự án thí điểm NPV âm."
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
   },
   {
    "q": "Under the pecking-order theory, managers needing capital prefer, in order:",
    "opts": [
     "Equity, debt, internal funds",
     "Internal funds, debt, equity",
     "Debt, equity, internal funds"
    ],
    "ans": 1,
    "en": "Information asymmetry makes external equity the most expensive signal-laden choice — internal financing first, debt next, equity last.",
    "vi": "Bất cân xứng thông tin khiến phát hành cổ phần là lựa chọn đắt nhất và nhiều hàm ý tín hiệu nhất — vốn nội bộ trước, rồi nợ, cuối cùng mới cổ phần."
   },
   {
    "q": "A retailer collects cash from customers at sale but pays suppliers on 60-day terms, producing a negative cash conversion cycle. This most likely means:",
    "opts": [
     "The firm is illiquid",
     "Suppliers effectively finance the firm’s operations",
     "Inventory turnover is too slow"
    ],
    "ans": 1,
    "en": "Negative CCC = cash arrives before it is paid out: supplier credit funds working capital — a structural advantage, not distress.",
    "vi": "CCC âm = tiền về trước khi phải chi ra: tín dụng nhà cung cấp tài trợ vốn lưu động — lợi thế cấu trúc, không phải khó khăn."
   }
  ]
 ]
};
