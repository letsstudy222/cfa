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
  "en": "Corporate Issuers covers seven learning modules: organizational forms and ownership; investors and stakeholders; corporate governance; working capital and liquidity; capital investments and allocation; capital structure; and business models. It is the exam's most conceptual finance topic, but the calculations that do appear — trade credit cost, NPV vs IRR, WACC, leverage — are near-guaranteed points. Every module below pairs theory with diagrams and fully worked examples; then drill the Quick checks and Practice Sets B–D.",
  "vi": "Corporate Issuers gồm bảy learning modules: hình thức tổ chức và sở hữu; nhà đầu tư và stakeholders; quản trị công ty; vốn lưu động và thanh khoản; đầu tư và phân bổ vốn; cấu trúc vốn; và business models. Đây là topic tài chính thiên khái niệm nhất của kỳ thi, nhưng các phép tính xuất hiện — chi phí trade credit, NPV vs IRR, WACC, đòn bẩy — là điểm gần như chắc chắn. Mỗi module bên dưới kết hợp lý thuyết với sơ đồ và ví dụ giải trọn vẹn; sau đó luyện Quick checks và Practice Sets B–D."
 },
 "modules": [
  {
   "title": "Organizational Forms, Corporate Issuer Features, and Ownership",
   "sections": [
    {
     "h": "Organizational forms, liability & taxation",
     "en": "<ul><li><strong>Sole proprietorship:</strong> owner = the business; simple and cheap, full control — but <em>unlimited personal liability</em>, financing limited to the owner’s resources, and profits taxed as personal income.</li><li><strong>Partnerships:</strong> a <em>general partnership</em> spreads work and capital across partners who all bear unlimited liability (each can be liable for the others’ actions). A <em>limited partnership</em> splits roles: the <strong>general partner (GP)</strong> runs the business with unlimited liability; <strong>limited partners (LPs)</strong> contribute capital, share profits, and risk only their investment. Profits are <em>pass-through</em> — taxed once, at the partner level.</li><li><strong>Corporation (limited company):</strong> a separate legal entity that can own assets, contract, borrow, and sue; owners hold shares with <strong>limited liability</strong> (losses capped at the investment), ownership transfers easily, capital can be raised from a nearly unlimited investor base, and professional managers can run it — the features that let corporations reach massive scale. The costs: <em>separation of ownership and control</em> (the agency problems of the governance module) and, in many regimes, <strong>double taxation</strong> — profits taxed at the corporate level and again as dividends to shareholders (some jurisdictions relieve this with imputation/credits).</li><li><strong>Public vs private:</strong> public corporations have shares listed on an exchange, trade continuously, and face extensive disclosure requirements; private companies raise capital through private placements (investors typically must be accredited), and their shares change hands rarely and by negotiation. Paths from private to public: <strong>IPO</strong> (new shares underwritten and sold), <strong>direct listing</strong> (existing shares begin trading, no new capital), or merging with a listed shell/<strong>SPAC</strong>. Going the other way — a buyout taking a public firm private — relies heavily on debt (LBO).</li></ul>",
     "vi": "<ul><li><strong>Doanh nghiệp tư nhân một chủ:</strong> chủ = doanh nghiệp; đơn giản, rẻ, toàn quyền — nhưng <em>chịu trách nhiệm vô hạn bằng tài sản cá nhân</em>, vốn giới hạn ở nguồn lực của chủ, lợi nhuận chịu thuế thu nhập cá nhân.</li><li><strong>Hợp danh:</strong> <em>hợp danh thông thường</em> chia việc và vốn giữa các thành viên nhưng tất cả chịu trách nhiệm vô hạn (mỗi người có thể phải gánh cả hành vi của người khác). <em>Hợp danh hữu hạn</em> tách vai trò: <strong>thành viên hợp danh (GP)</strong> điều hành, chịu trách nhiệm vô hạn; <strong>thành viên góp vốn (LP)</strong> góp vốn, hưởng lợi nhuận, chỉ rủi ro phần vốn góp. Lợi nhuận <em>chuyển thẳng (pass-through)</em> — chỉ chịu thuế một lần ở cấp thành viên.</li><li><strong>Công ty cổ phần:</strong> pháp nhân độc lập có thể sở hữu tài sản, ký hợp đồng, vay nợ, kiện tụng; cổ đông nắm cổ phần với <strong>trách nhiệm hữu hạn</strong> (lỗ tối đa bằng vốn góp), chuyển nhượng dễ, huy động vốn từ lượng nhà đầu tư gần như không giới hạn, thuê quản lý chuyên nghiệp — các đặc điểm giúp đạt quy mô khổng lồ. Cái giá: <em>tách quyền sở hữu khỏi quyền điều hành</em> (vấn đề đại diện ở module quản trị) và ở nhiều nước là <strong>thuế hai lần</strong> — lợi nhuận chịu thuế doanh nghiệp rồi cổ tức lại chịu thuế ở cổ đông (một số nước giảm nhẹ bằng cơ chế khấu trừ).</li><li><strong>Đại chúng vs tư nhân:</strong> công ty đại chúng niêm yết trên sàn, giao dịch liên tục, nghĩa vụ công bố thông tin nặng; công ty tư nhân huy động qua phát hành riêng lẻ (nhà đầu tư thường phải đạt chuẩn), cổ phần ít khi đổi chủ và phải thương lượng. Đường lên đại chúng: <strong>IPO</strong> (phát hành cổ phần mới qua bảo lãnh), <strong>niêm yết trực tiếp</strong> (cổ phần hiện hữu lên sàn, không huy động mới), hoặc sáp nhập với công ty vỏ/<strong>SPAC</strong>. Chiều ngược lại — mua lại đưa công ty đại chúng về tư nhân — dựa nhiều vào nợ vay (LBO).</li></ul>"
    },
    {
     "h": "Forms compared side by side + the double-taxation arithmetic",
     "en": "<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Feature</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Sole proprietorship</th><th style=\"padding:7px;border:1px solid #D6DAFB\">General partnership</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Limited partnership</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Corporation</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Legal identity</td><td style=\"padding:7px;border:1px solid #E5E9F2\">none — extension of owner</td><td style=\"padding:7px;border:1px solid #E5E9F2\">none</td><td style=\"padding:7px;border:1px solid #E5E9F2\">partial</td><td style=\"padding:7px;border:1px solid #E5E9F2\">separate legal person</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Owner liability</td><td style=\"padding:7px;border:1px solid #E5E9F2\">unlimited</td><td style=\"padding:7px;border:1px solid #E5E9F2\">unlimited, joint</td><td style=\"padding:7px;border:1px solid #E5E9F2\">GP unlimited · LPs limited</td><td style=\"padding:7px;border:1px solid #E5E9F2\">limited to investment</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Taxation</td><td style=\"padding:7px;border:1px solid #E5E9F2\">pass-through</td><td style=\"padding:7px;border:1px solid #E5E9F2\">pass-through</td><td style=\"padding:7px;border:1px solid #E5E9F2\">pass-through</td><td style=\"padding:7px;border:1px solid #E5E9F2\">entity level (+ dividends may be taxed again)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Ownership transfer / capital access</td><td style=\"padding:7px;border:1px solid #E5E9F2\">hard · owner's capital only</td><td style=\"padding:7px;border:1px solid #E5E9F2\">hard</td><td style=\"padding:7px;border:1px solid #E5E9F2\">moderate</td><td style=\"padding:7px;border:1px solid #E5E9F2\">easy (shares) · deepest capital access</td></tr></table>\n<p><strong>Double taxation worked.</strong> A corporation earns $100 pre-tax. Corporate tax at 25% leaves $75. It pays the $75 as a dividend, taxed at 20% personally: the shareholder keeps 75 × 0.80 = <strong>$60</strong>. Effective total rate = 1 − (1 − 0.25)(1 − 0.20) = <strong>40%</strong> — higher than either rate alone. Pass-through forms (and in some regimes, imputation credits) avoid the second layer. This is the price paid for limited liability, perpetual life, and easy transferability — features that make the corporate form dominant for large-scale capital raising even though it is the most heavily taxed.</p>\n<p><strong>Public vs private is a spectrum of paths, not a wall.</strong> Private firms go public via a traditional <strong>IPO</strong> (underwritten, new capital raised), a <strong>direct listing</strong> (existing shares listed, no new capital, no underwriter), or a merger with a <strong>SPAC</strong> (a listed cash shell). Public firms go private via buyouts (often leveraged). Private capital has grown enormously — firms can now stay private far longer (venture, growth equity, private debt), so public markets see companies later in life. Exam nuance: a corporation's shares being privately held does not change its legal form — \"public\" refers to exchange listing and disclosure obligations, not to who owns it.</p>",
     "vi": "<p><strong>So sánh các hình thức (bảng):</strong> doanh nghiệp tư nhân — không có tư cách pháp nhân riêng, chủ chịu trách nhiệm vô hạn, thuế chuyển thẳng (pass-through), khó chuyển nhượng, vốn chỉ từ chủ; hợp danh — tương tự, trách nhiệm vô hạn và liên đới; hợp danh hữu hạn — GP chịu vô hạn, LP hữu hạn; công ty cổ phần — pháp nhân độc lập, trách nhiệm hữu hạn theo vốn góp, thuế hai tầng, cổ phần chuyển nhượng dễ và tiếp cận vốn sâu nhất.</p>\n<p><strong>Thuế hai tầng bằng ví dụ.</strong> Công ty lãi $100 trước thuế. Thuế doanh nghiệp 25% còn $75. Chia hết $75 làm cổ tức, chịu thuế cá nhân 20%: cổ đông giữ được 75 × 0,80 = <strong>$60</strong>. Thuế suất tổng hiệu dụng = 1 − (1 − 0,25)(1 − 0,20) = <strong>40%</strong> — cao hơn từng mức riêng lẻ. Các hình thức pass-through (và ở một số nước, cơ chế khấu trừ imputation) tránh được tầng thứ hai. Đây là cái giá của trách nhiệm hữu hạn, đời sống vĩnh viễn và khả năng chuyển nhượng dễ — những đặc tính khiến công ty cổ phần thống trị việc huy động vốn quy mô lớn dù bị đánh thuế nặng nhất.</p>\n<p><strong>Public vs private là phổ các con đường, không phải bức tường.</strong> Công ty tư nhân lên sàn qua <strong>IPO</strong> truyền thống (có bảo lãnh, huy động vốn mới), <strong>direct listing</strong> (niêm yết cổ phần hiện hữu, không vốn mới, không bảo lãnh), hoặc sáp nhập với <strong>SPAC</strong> (vỏ tiền mặt đã niêm yết). Công ty đại chúng rời sàn qua thương vụ mua lại (thường dùng đòn bẩy). Vốn tư nhân đã phình rất lớn — công ty có thể ở lại tư nhân lâu hơn nhiều (venture, growth equity, private debt), nên thị trường đại chúng đón công ty ở giai đoạn muộn hơn. Điểm tinh tế của đề: cổ phần được nắm giữ tư nhân không làm đổi hình thức pháp lý — \"public\" chỉ việc niêm yết và nghĩa vụ công bố, không chỉ ai đang sở hữu.</p>"
    }
   ],
   "formulas": [
    [
     "Effective double-tax rate",
     "1 − (1 − t_corp)(1 − t_personal)",
     "25% corporate + 20% dividend → 40% total."
    ]
   ]
  },
  {
   "title": "Investors and Other Stakeholders",
   "sections": [
    {
     "h": "Debt vs equity claims — and the web of stakeholders",
     "en": "<ul><li><strong>Two claims, two mindsets.</strong> <em>Equityholders</em> own the residual: unlimited upside, first in line for losses — so they favor growth and tolerate risk. <em>Debtholders</em> hold a contractual claim: fixed interest and principal, no share of upside — so they care only about downside and prefer stable, lower-risk operations. This asymmetry creates the classic <strong>shareholder–creditor conflict</strong>: shareholders of a leveraged firm can gain from risk-shifting into volatile projects, transferring risk to creditors; creditors respond with <em>covenants</em>, collateral, and pricing.</li><li><strong>Shareholder vs stakeholder theory:</strong> shareholder theory says the corporation’s objective is maximizing shareholder value; <strong>stakeholder theory</strong> broadens the objective to balance the interests of all groups with a stake in the firm.</li><li><strong>The stakeholder map</strong> and what each wants: shareholders (value growth, control rights); creditors/bondholders (cash-flow stability, covenant protection); the board (duty of care and loyalty to shareholders); managers (compensation, career security); employees (pay, safety, opportunity); customers (value, quality, safety); suppliers (payment, ongoing relationship); governments/regulators (taxes, compliance, employment). ESG analysis is largely the systematic study of these non-shareholder relationships and their financial consequences.</li><li><strong>Ownership structures matter:</strong> dispersed ownership (many small holders) creates weak owners and strong managers — the principal–agent problem; concentrated ownership (family, state) creates strong owners but a <em>controlling-vs-minority shareholder</em> conflict; <strong>dual-class shares</strong> entrench founders by separating voting power from economic ownership.</li></ul>",
     "vi": "<ul><li><strong>Hai loại quyền lợi, hai tư duy.</strong> <em>Cổ đông</em> nắm phần còn lại: hưởng toàn bộ tăng trưởng, đứng đầu chịu lỗ — nên ưa tăng trưởng, chịu được rủi ro. <em>Chủ nợ</em> nắm quyền theo hợp đồng: lãi và gốc cố định, không hưởng phần tăng thêm — nên chỉ quan tâm rủi ro giảm giá, thích hoạt động ổn định. Bất đối xứng này tạo <strong>xung đột cổ đông–chủ nợ</strong> kinh điển: cổ đông công ty vay nợ nhiều có thể lợi khi dồn vốn vào dự án rủi ro, đẩy rủi ro sang chủ nợ; chủ nợ đáp lại bằng <em>covenant</em>, tài sản bảo đảm và giá vốn vay.</li><li><strong>Thuyết cổ đông vs thuyết các bên liên quan:</strong> thuyết cổ đông coi mục tiêu công ty là tối đa hóa giá trị cổ đông; <strong>thuyết các bên liên quan</strong> mở rộng mục tiêu sang cân bằng lợi ích mọi nhóm có liên quan.</li><li><strong>Bản đồ các bên liên quan</strong> và điều họ muốn: cổ đông (tăng giá trị, quyền kiểm soát); chủ nợ/trái chủ (dòng tiền ổn định, bảo vệ bằng covenant); HĐQT (nghĩa vụ cẩn trọng, trung thành với cổ đông); ban điều hành (thù lao, an toàn sự nghiệp); người lao động (lương, an toàn, cơ hội); khách hàng (giá trị, chất lượng, an toàn); nhà cung cấp (được thanh toán, quan hệ lâu dài); nhà nước (thuế, tuân thủ, việc làm). Phân tích ESG phần lớn chính là nghiên cứu có hệ thống các quan hệ ngoài-cổ-đông này và hệ quả tài chính của chúng.</li><li><strong>Cấu trúc sở hữu quan trọng:</strong> sở hữu phân tán (nhiều cổ đông nhỏ) tạo chủ yếu quản lý mạnh — bài toán đại diện; sở hữu tập trung (gia đình, nhà nước) tạo chủ mạnh nhưng sinh xung đột <em>cổ đông kiểm soát vs thiểu số</em>; <strong>cổ phần hai hạng (dual-class)</strong> giúp nhà sáng lập giữ quyền bằng cách tách quyền biểu quyết khỏi sở hữu kinh tế.</li></ul>"
    },
    {
     "h": "Payoff math: why debt and equity see the same firm differently",
     "en": "<p><strong>Work the payoffs.</strong> A firm owes creditors $100 (face value, due now). Two scenarios for firm value: $80 or $150.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Scenario</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Firm value</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Debtholders get</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Shareholders get</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Bad</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">80</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">80 (all of it)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">0 — but never less (limited liability)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Good</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">150</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">100 (capped at face)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">50 — the entire residual upside</td></tr></table>\n<p>Debt's payoff is <strong>capped above and exposed below</strong>; equity holds an option-like claim: max(V − debt, 0). Consequences the exam tests: creditors care about <em>downside protection</em> (cash flow stability, collateral, covenants, seniority) while shareholders prefer <em>upside</em> (growth, even risky growth). This asymmetry is exactly why risk-shifting conflicts exist (module 2), why lenders write covenants, and why the cost of debt is lower than the cost of equity: a senior, capped, contractual claim is safer, and interest is usually tax-deductible on top.</p>\n<p><strong>The stakeholder web beyond investors:</strong> the board (monitors on shareholders' behalf), managers and employees (income, careers — prefer stability and growth), customers (product quality, continuity), suppliers (getting paid; ongoing relationship), governments (taxes, compliance, externalities), and communities. <strong>Shareholder theory</strong> says maximize shareholder value within the law; <strong>stakeholder theory</strong> says balance all these interests explicitly. Modern practice sits between them — partly because ignoring stakeholders eventually destroys shareholder value too (fines, boycotts, talent flight).</p>\n<p><strong>ESG in one paragraph.</strong> Environmental (emissions, resource use, climate transition and physical risk), Social (labor practices, product safety, data privacy, community), Governance (board structure, pay, shareholder rights — the G is the oldest and most quantifiable). Analysts focus on <em>financially material</em> ESG factors — those plausibly affecting cash flows or cost of capital for that specific industry: water use matters for a beverage firm, data privacy for a platform, safety for an airline. Approaches range from negative screening to integration (adjusting forecasts/discount rates) to thematic and engagement/active ownership.</p>",
     "vi": "<p><strong>Tính payoff.</strong> Công ty nợ chủ nợ $100 (mệnh giá, đến hạn). Hai kịch bản giá trị công ty: $80 hoặc $150. Kịch bản xấu: chủ nợ nhận 80 (toàn bộ), cổ đông nhận 0 — nhưng không bao giờ âm (trách nhiệm hữu hạn). Kịch bản tốt: chủ nợ nhận 100 (chặn trần ở mệnh giá), cổ đông nhận 50 — toàn bộ phần dôi.</p>\n<p>Payoff của nợ <strong>bị chặn trên và phơi nhiễm phía dưới</strong>; vốn chủ nắm quyền đòi giống quyền chọn: max(V − nợ, 0). Hệ quả đề thi hay hỏi: chủ nợ quan tâm <em>bảo vệ phía dưới</em> (dòng tiền ổn định, tài sản đảm bảo, covenants, thứ tự ưu tiên) còn cổ đông thích <em>phía trên</em> (tăng trưởng, kể cả tăng trưởng rủi ro). Chính bất đối xứng này sinh ra xung đột risk-shifting (module 2), lý do người cho vay viết covenants, và lý do chi phí nợ thấp hơn chi phí vốn chủ: quyền đòi ưu tiên, có trần, theo hợp đồng thì an toàn hơn, lại thêm lãi vay thường được khấu trừ thuế.</p>\n<p><strong>Mạng lưới stakeholder ngoài nhà đầu tư:</strong> HĐQT (giám sát thay cổ đông), quản lý và nhân viên (thu nhập, sự nghiệp — thích ổn định và tăng trưởng), khách hàng (chất lượng, tính liên tục), nhà cung cấp (được thanh toán; quan hệ dài hạn), chính phủ (thuế, tuân thủ, ngoại ứng), cộng đồng. <strong>Shareholder theory</strong>: tối đa hóa giá trị cổ đông trong khuôn khổ pháp luật; <strong>stakeholder theory</strong>: cân bằng minh bạch mọi lợi ích. Thực hành hiện đại nằm giữa — một phần vì phớt lờ stakeholder rốt cuộc cũng phá hủy giá trị cổ đông (phạt, tẩy chay, chảy máu nhân tài).</p>\n<p><strong>ESG trong một đoạn.</strong> Environmental (phát thải, tài nguyên, rủi ro chuyển đổi và vật lý của khí hậu), Social (lao động, an toàn sản phẩm, quyền riêng tư dữ liệu, cộng đồng), Governance (cấu trúc HĐQT, thù lao, quyền cổ đông — chữ G lâu đời và định lượng được nhất). Nhà phân tích tập trung vào yếu tố ESG <em>trọng yếu tài chính</em> — có khả năng ảnh hưởng dòng tiền hoặc chi phí vốn của đúng ngành đó: nước với hãng đồ uống, quyền riêng tư với nền tảng số, an toàn với hãng bay. Cách tiếp cận từ sàng lọc loại trừ đến tích hợp (điều chỉnh dự phóng/lãi suất chiết khấu), theo chủ đề, và engagement/sở hữu chủ động.</p>"
    }
   ],
   "formulas": [
    [
     "Equity payoff",
     "Equity = max(Firm value − Debt, 0)",
     "Option-like residual claim; debt is capped at face value."
    ]
   ]
  },
  {
   "title": "Corporate Governance: Conflicts, Mechanisms, and Risks",
   "sections": [
    {
     "h": "Principal–agent conflicts and governance mechanisms",
     "en": "<p>Corporate governance manages conflicts among stakeholders: shareholders vs managers (the classic <strong>principal–agent problem</strong>: entrenchment, empire building, excessive risk aversion), controlling vs minority shareholders, shareholders vs creditors (equity holders prefer risk; debt holders prefer safety). Mechanisms: the <strong>board of directors</strong> (independence, separation of CEO and chair, committees — audit, remuneration, nomination), say-on-pay, activist investors, the takeover market, and legal/regulatory constraints. ESG considerations enter through material environmental and social factors that affect long-term value and risk.</p>",
     "vi": "<p>Quản trị công ty xử lý xung đột giữa các bên liên quan: cổ đông vs ban điều hành (bài toán <strong>người ủy quyền – người đại diện</strong>: cố thủ ghế, xây \"đế chế\", né rủi ro quá mức), cổ đông chi phối vs cổ đông thiểu số, cổ đông vs chủ nợ (cổ đông thích rủi ro, chủ nợ thích an toàn). Cơ chế: <strong>HĐQT</strong> (tính độc lập, tách vai trò CEO và Chủ tịch, các ủy ban kiểm toán/lương thưởng/đề cử), biểu quyết về thù lao, nhà đầu tư chủ động, thị trường thâu tóm, và ràng buộc pháp lý. Yếu tố ESG được xét qua các nhân tố môi trường – xã hội trọng yếu ảnh hưởng giá trị và rủi ro dài hạn.</p>"
    },
    {
     "h": "Conflicts → mechanisms → risks, with the risk-shifting numbers",
     "en": "<svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Corporate governance conflict and mechanism map\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Governance: who watches whom</text>\n<rect x=\"270\" y=\"46\" width=\"180\" height=\"44\" rx=\"10\" fill=\"#5457E0\"/>\n<text x=\"360\" y=\"66\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#fff\">Shareholders</text>\n<text x=\"360\" y=\"82\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#E5E9F2\">owners — elect the board</text>\n<rect x=\"270\" y=\"132\" width=\"180\" height=\"44\" rx=\"10\" fill=\"#0F9573\"/>\n<text x=\"360\" y=\"152\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#fff\">Board of directors</text>\n<text x=\"360\" y=\"168\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#E7F6F0\">monitors on owners' behalf</text>\n<rect x=\"270\" y=\"218\" width=\"180\" height=\"44\" rx=\"10\" fill=\"#B45309\"/>\n<text x=\"360\" y=\"238\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#fff\">Management</text>\n<text x=\"360\" y=\"254\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#FBF3E4\">runs the firm day to day</text>\n<line x1=\"360\" y1=\"90\" x2=\"360\" y2=\"130\" stroke=\"#5B6577\" stroke-width=\"1.8\"/>\n<line x1=\"360\" y1=\"176\" x2=\"360\" y2=\"216\" stroke=\"#5B6577\" stroke-width=\"1.8\"/>\n<text x=\"368\" y=\"112\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">elects · proxy voting · say-on-pay</text>\n<text x=\"368\" y=\"200\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">hires, sets pay, can fire</text>\n<rect x=\"30\" y=\"118\" width=\"190\" height=\"120\" rx=\"10\" fill=\"#EEF0FE\" stroke=\"#5457E0\"/>\n<text x=\"125\" y=\"140\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#4338CA\">Internal mechanisms</text>\n<text x=\"125\" y=\"160\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#1B2438\">independent directors</text>\n<text x=\"125\" y=\"176\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#1B2438\">audit / comp / nomination cttes</text>\n<text x=\"125\" y=\"192\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#1B2438\">incentive alignment (equity pay)</text>\n<text x=\"125\" y=\"208\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#1B2438\">internal audit & controls</text>\n<text x=\"125\" y=\"224\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#1B2438\">codes of ethics</text>\n<rect x=\"500\" y=\"118\" width=\"190\" height=\"120\" rx=\"10\" fill=\"#FDECEC\" stroke=\"#DC4848\"/>\n<text x=\"595\" y=\"140\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#DC4848\">External mechanisms</text>\n<text x=\"595\" y=\"160\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#1B2438\">takeover threat (market for control)</text>\n<text x=\"595\" y=\"176\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#1B2438\">activist investors</text>\n<text x=\"595\" y=\"192\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#1B2438\">auditors & regulators</text>\n<text x=\"595\" y=\"208\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#1B2438\">creditors & covenants</text>\n<text x=\"595\" y=\"224\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#1B2438\">analysts & media</text>\n<text x=\"360\" y=\"300\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Exam frame: name the conflict (owner–manager, owner–creditor, majority–minority) → match the mechanism that curbs it.</text>\n</svg>\n<p><strong>Owner–manager conflict.</strong> Managers may consume perks, empire-build (acquisitions that grow their domain but destroy value), entrench themselves, or play too safe to protect their jobs. Countermeasures: equity-linked pay (aligns upside), independent boards and committees, transparent disclosure, and the external threat of takeover or activists.</p>\n<p><strong>Owner–creditor conflict: run the risk-shifting numbers.</strong> A firm with debt of 100 is worth 100 today. Managers (acting for shareholders) can swap into a risky project: 50% chance the firm is worth 160, 50% chance 40. Expected firm value = 0.5(160) + 0.5(40) = 100 — <em>unchanged</em>. But expected equity = 0.5 × max(160−100, 0) + 0.5 × 0 = <strong>30</strong> (up from 0), and expected debt = 0.5(100) + 0.5(40) = <strong>70</strong> (down from 100). Shareholders gained purely by <em>taking value from creditors through risk</em>. This is why loan agreements carry covenants (limits on leverage, dividends, asset sales), why creditors demand collateral and seniority, and why distressed firms are watched hardest — the incentive to gamble grows as equity approaches zero.</p>\n<p><strong>Controlling vs minority shareholders.</strong> With dual-class shares or pyramid structures, a controller can extract private benefits: related-party transactions at off-market prices, tunneling assets to affiliates, appointing loyal boards. Protections: cumulative voting for directors, minority approval requirements for related-party deals, listing rules, and (in some markets) mandatory tender offers on control changes. When analyzing a firm, check: one share one vote? Board independence real or nominal? Audit committee fully independent and financially literate? Say-on-pay outcomes?</p>\n<p><strong>Why it prices.</strong> Weak governance shows up as accounting scandals, value-destroying deals, and default surprises; strong governance lowers perceived risk and the cost of both debt and equity. The exam frames this as \"governance risks\": ineffective boards, entrenched management, poor audit quality, and weak shareholder rights — each maps to a mechanism above.</p>",
     "vi": "<p><strong>Xung đột chủ sở hữu–quản lý.</strong> Quản lý có thể hưởng bổng lộc, \"xây đế chế\" (thâu tóm mở rộng lãnh địa nhưng phá giá trị), cố thủ ghế, hoặc chơi quá an toàn để giữ việc. Đối trọng: thù lao gắn cổ phiếu (đồng hướng phía tăng), HĐQT và ủy ban độc lập, công bố minh bạch, cùng áp lực bên ngoài từ thâu tóm hoặc nhà đầu tư chủ động.</p>\n<p><strong>Xung đột chủ sở hữu–chủ nợ: chạy con số risk-shifting.</strong> Công ty nợ 100, hiện đáng giá 100. Quản lý (hành động vì cổ đông) đổi sang dự án rủi ro: 50% công ty đáng 160, 50% đáng 40. Giá trị kỳ vọng công ty = 0,5(160) + 0,5(40) = 100 — <em>không đổi</em>. Nhưng vốn chủ kỳ vọng = 0,5 × max(160−100, 0) + 0,5 × 0 = <strong>30</strong> (từ 0 lên), còn nợ kỳ vọng = 0,5(100) + 0,5(40) = <strong>70</strong> (từ 100 xuống). Cổ đông hưởng lợi thuần túy bằng cách <em>lấy giá trị của chủ nợ thông qua rủi ro</em>. Đây là lý do hợp đồng vay có covenants (giới hạn đòn bẩy, cổ tức, bán tài sản), chủ nợ đòi tài sản đảm bảo và thứ tự ưu tiên, và công ty kiệt quệ bị soi gắt nhất — động cơ \"đánh bạc\" lớn dần khi vốn chủ tiến về 0.</p>\n<p><strong>Cổ đông kiểm soát vs thiểu số.</strong> Với cổ phần hai hạng hoặc cấu trúc kim tự tháp, người kiểm soát có thể rút lợi ích riêng: giao dịch bên liên quan giá lệch thị trường, tuồn tài sản sang công ty liên kết, cài HĐQT thân tín. Bảo vệ: bầu dồn phiếu, yêu cầu thiểu số phê duyệt giao dịch bên liên quan, quy chế niêm yết, và (ở một số thị trường) chào mua công khai bắt buộc khi đổi quyền kiểm soát. Khi phân tích: một cổ phần một phiếu không? Độc lập HĐQT thực hay danh nghĩa? Ủy ban kiểm toán độc lập hoàn toàn và am hiểu tài chính? Kết quả say-on-pay?</p>\n<p><strong>Vì sao nó được định giá.</strong> Quản trị yếu hiện ra thành bê bối kế toán, thương vụ phá giá trị, vỡ nợ bất ngờ; quản trị mạnh hạ rủi ro cảm nhận và chi phí của cả nợ lẫn vốn chủ. Đề đóng khung thành \"rủi ro quản trị\": HĐQT kém hiệu lực, quản lý cố thủ, kiểm toán yếu, quyền cổ đông mỏng — mỗi thứ khớp với một cơ chế ở trên.</p>"
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
    },
    {
     "h": "Liquidity drills: the 2/10 net 30 calculation & choosing funding",
     "en": "<p><strong>Liquidity is about timing, not solvency.</strong> Primary sources: cash on hand and short-term securities, operating cash inflows, committed credit lines. Secondary (costly, signal distress): renegotiating debt, selling assets, filing for protection. <strong>Drags</strong> slow cash <em>in</em>: uncollected/aged receivables, obsolete inventory, tight credit from your own suppliers... <strong>Pulls</strong> push cash <em>out</em> early: suppliers demanding earlier payment, reduced credit limits, covenants requiring cash buffers.</p>\n<p><strong>The trade-credit question the exam loves.</strong> Terms \"2/10 net 30\": pay within 10 days and take a 2% discount, or pay the full amount by day 30. Skipping the discount means paying 2% more for 20 extra days of financing. Annualized cost = (1 + 2/98)^(365/20) − 1 = <strong>≈ 44.6%</strong>. Compare with the firm's short-term borrowing rate (say 8%): borrowing to take the discount saves a fortune. Rule of thumb: forgoing early-payment discounts is one of the most expensive funding sources a firm can use — if a company habitually pays on day 30, ask whether it <em>can't</em> borrow at reasonable rates (a red flag).</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Short-term funding source</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Who uses it</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Key features</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Uncommitted bank line</td><td style=\"padding:7px;border:1px solid #E5E9F2\">smaller firms</td><td style=\"padding:7px;border:1px solid #E5E9F2\">cheapest but bank may refuse to lend — unreliable</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Committed line / revolver</td><td style=\"padding:7px;border:1px solid #E5E9F2\">mid to large</td><td style=\"padding:7px;border:1px solid #E5E9F2\">reliable; commitment fee on unused portion; revolvers are multi-year</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Secured (asset-based) loans, factoring</td><td style=\"padding:7px;border:1px solid #E5E9F2\">weaker credits</td><td style=\"padding:7px;border:1px solid #E5E9F2\">collateral = receivables/inventory; factoring sells receivables at a discount, may transfer collection</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Commercial paper</td><td style=\"padding:7px;border:1px solid #E5E9F2\">large, high-grade issuers</td><td style=\"padding:7px;border:1px solid #E5E9F2\">cheapest market funding; needs backup lines to roll over</td></tr></table>\n<p><strong>Working-capital posture.</strong> A <em>conservative</em> approach (large cash and inventory buffers, long-term funding of current assets) minimizes disruption risk but drags returns; an <em>aggressive</em> approach (minimal buffers, short-term funding) boosts returns while raising rollover and stockout risk. Judge a firm's posture against its cash-flow volatility: stable utilities can run lean; cyclical builders cannot. Tie back to the CCC — every day cut from the cycle is permanent financing released.</p>",
     "vi": "<p><strong>Thanh khoản là chuyện thời điểm, không phải khả năng trả nợ dài hạn.</strong> Nguồn sơ cấp: tiền và chứng khoán ngắn hạn, dòng tiền hoạt động, hạn mức tín dụng cam kết. Nguồn thứ cấp (đắt đỏ, phát tín hiệu kiệt quệ): đàm phán lại nợ, bán tài sản, xin bảo hộ phá sản. <strong>Drags</strong> làm chậm tiền <em>vào</em>: phải thu tồn đọng/già cỗi, tồn kho lỗi thời, nhà cung cấp của chính mình siết tín dụng… <strong>Pulls</strong> đẩy tiền <em>ra</em> sớm: nhà cung cấp đòi trả sớm hơn, hạn mức bị cắt, covenants bắt giữ đệm tiền mặt.</p>\n<p><strong>Câu hỏi trade credit đề thi rất thích.</strong> Điều khoản \"2/10 net 30\": trả trong 10 ngày được chiết khấu 2%, hoặc trả đủ vào ngày 30. Bỏ chiết khấu nghĩa là trả thêm 2% cho 20 ngày tài trợ. Chi phí năm hóa = (1 + 2/98)^(365/20) − 1 = <strong>≈ 44,6%</strong>. So với lãi suất vay ngắn hạn của công ty (giả sử 8%): vay để lấy chiết khấu tiết kiệm cực lớn. Quy tắc: bỏ chiết khấu trả sớm là một trong những nguồn vốn đắt nhất — nếu công ty quen trả ngày 30, hãy hỏi phải chăng họ <em>không thể</em> vay với lãi hợp lý (một cờ đỏ).</p>\n<p><strong>Nguồn vốn ngắn hạn (bảng):</strong> hạn mức không cam kết — rẻ nhất nhưng ngân hàng có thể từ chối, không đáng tin; hạn mức cam kết/revolver — đáng tin, có phí cam kết trên phần chưa dùng, revolver nhiều năm; vay đảm bảo bằng tài sản, factoring — cho tín nhiệm yếu, thế chấp phải thu/tồn kho, factoring bán phải thu có chiết khấu và có thể chuyển việc thu hồi; thương phiếu (CP) — cho tổ chức lớn hạng cao, rẻ nhất trên thị trường nhưng cần hạn mức dự phòng để đảo nợ.</p>\n<p><strong>Tư thế vốn lưu động.</strong> Cách <em>bảo thủ</em> (đệm tiền và tồn kho dày, tài trợ tài sản ngắn hạn bằng vốn dài hạn) giảm rủi ro gián đoạn nhưng kéo tụt suất sinh lời; cách <em>hung hăng</em> (đệm mỏng, vốn ngắn hạn) tăng suất sinh lời nhưng tăng rủi ro đảo nợ và hết hàng. Đánh giá tư thế theo độ biến động dòng tiền: utility ổn định chạy mỏng được; nhà thầu chu kỳ thì không. Nối lại với CCC — mỗi ngày cắt khỏi chu kỳ là một khoản tài trợ vĩnh viễn được giải phóng.</p>"
    }
   ],
   "formulas": [
    [
     "Cash conversion cycle",
     "CCC = DOH + DSO − DPO",
     "Shorter is better; negative = suppliers finance operations"
    ],
    [
     "Cost of trade credit",
     "(1 + disc/(1−disc))^(365/days late) − 1",
     "2/10 net 30 → (1+2/98)^(365/20) − 1 ≈ 44.6%/yr."
    ],
    [
     "Net working capital",
     "current assets − current liabilities",
     "Postures: conservative (thick buffers) vs aggressive (thin, short-funded)."
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
    },
    {
     "h": "NPV vs IRR head-to-head: one dataset, conflicting answers",
     "en": "<p><strong>Two mutually exclusive projects, cost of capital 10%:</strong></p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\"></th><th style=\"padding:7px;border:1px solid #D6DAFB\">t=0</th><th style=\"padding:7px;border:1px solid #D6DAFB\">t=1</th><th style=\"padding:7px;border:1px solid #D6DAFB\">t=2</th><th style=\"padding:7px;border:1px solid #D6DAFB\">t=3</th><th style=\"padding:7px;border:1px solid #D6DAFB\">NPV @10%</th><th style=\"padding:7px;border:1px solid #D6DAFB\">IRR</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Project A</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">−1,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">100</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">300</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">1,100</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>165.3</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">16.0%</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Project B</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">−1,000</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">650</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">450</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">250</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>150.6</strong></td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">19.7%</td></tr></table>\n<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"NPV profiles and crossover rate\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">NPV profiles: where rankings flip and where IRR lives</text>\n<line x1=\"70\" y1=\"230\" x2=\"680\" y2=\"230\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"300\" x2=\"70\" y2=\"50\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"676\" y=\"248\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Discount rate</text>\n<text x=\"36\" y=\"62\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">NPV</text>\n<text x=\"52\" y=\"234\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">0</text>\n<path d=\"M 80 80 L 620 268\" fill=\"none\" stroke=\"#5457E0\" stroke-width=\"2.5\"/>\n<text x=\"96\" y=\"72\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#5457E0\">Project A (big, late cash flows)</text>\n<path d=\"M 80 140 L 645 235\" fill=\"none\" stroke=\"#0F9573\" stroke-width=\"2.5\"/>\n<text x=\"96\" y=\"132\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F9573\">Project B (smaller, earlier)</text>\n<circle cx=\"266\" cy=\"171\" r=\"5.5\" fill=\"#8B5CF6\"/>\n<line x1=\"266\" y1=\"171\" x2=\"266\" y2=\"230\" stroke=\"#8B5CF6\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n<text x=\"266\" y=\"256\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#8B5CF6\">crossover rate</text>\n<text x=\"266\" y=\"270\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">below it: A wins · above it: B wins</text>\n<circle cx=\"511\" cy=\"230\" r=\"5.5\" fill=\"#5457E0\"/>\n<text x=\"511\" y=\"290\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#5457E0\">IRR(A)</text>\n<circle cx=\"616\" cy=\"230\" r=\"5.5\" fill=\"#0F9573\"/>\n<text x=\"616\" y=\"290\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F9573\">IRR(B)</text>\n<text x=\"360\" y=\"322\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">IRR = the rate where a profile crosses zero. Rankings conflict when profiles cross — trust NPV, not IRR.</text>\n</svg>\n<p>NPV says A; IRR says B. They disagree because A's cash arrives <em>late</em> — its NPV profile is steep, so at low discount rates its distant $1,100 dominates, while at higher rates it dies fast. The crossover rate (≈13%) is the IRR of the <em>difference</em> in cash flows (A − B). <strong>Below the crossover choose A, above it choose B — and since the firm's actual cost of capital (10%) is below it, take A. When they conflict, NPV wins</strong>, because IRR implicitly assumes reinvestment of interim cash flows at the IRR itself (unrealistically high here), while NPV assumes reinvestment at the cost of capital. IRR also fails outright with unconventional cash flows (sign changes → multiple IRRs, or none) and misleads on scale: a 100% IRR on $10 beats nothing.</p>\n<p><strong>Capital allocation principles:</strong> decisions rest on incremental after-tax cash flows (not accounting income), include opportunity costs (the land you'd otherwise sell), exclude sunk costs (the study already paid for), include cannibalization/synergy externalities, and ignore financing costs in the cash flows — the discount rate carries them. <strong>Pitfalls the exam names:</strong> internal forecasting errors (over-optimistic revenue, cost creep), pet projects skipping analysis, EPS/ROE-driven choices (rejecting positive-NPV projects that dilute short-run EPS), failure to consider alternatives, and misallocated overhead.</p>\n<p><strong>Real options add value on top of NPV:</strong> timing (delay until uncertainty resolves), sizing (abandonment — cut losses; growth/expansion — scale a success), flexibility (price/production changes), and fundamental options (project value driven by an underlying price, e.g. a mine). A project with slightly negative static NPV can still be worthwhile if option value exceeds the gap: decide by NPV = static NPV + option value − option cost.</p>",
     "vi": "<p><strong>Hai dự án loại trừ nhau, chi phí vốn 10%:</strong> Dự án A: −1.000; 100; 300; 1.100 → NPV @10% = <strong>165,3</strong>; IRR = 16,0%. Dự án B: −1.000; 650; 450; 250 → NPV @10% = <strong>150,6</strong>; IRR = 19,7%.</p>\n<p>NPV chọn A; IRR chọn B. Mâu thuẫn vì tiền của A về <em>muộn</em> — NPV profile của A dốc, nên ở lãi suất chiết khấu thấp khoản $1.100 xa xôi thắng thế, còn ở lãi suất cao nó chết nhanh. Crossover rate (≈13%) là IRR của <em>phần chênh</em> dòng tiền (A − B). <strong>Dưới crossover chọn A, trên thì chọn B — và vì chi phí vốn thực của công ty (10%) nằm dưới nó, chọn A. Khi mâu thuẫn, NPV thắng</strong>, bởi IRR ngầm giả định tái đầu tư dòng tiền giữa kỳ tại đúng mức IRR (cao phi thực tế ở đây), còn NPV giả định tái đầu tư tại chi phí vốn. IRR còn hỏng hẳn với dòng tiền không quy ước (đổi dấu → nhiều IRR hoặc không có) và gây nhiễu về quy mô: IRR 100% trên $10 chẳng đáng gì.</p>\n<p><strong>Nguyên tắc phân bổ vốn:</strong> quyết định dựa trên dòng tiền tăng thêm sau thuế (không phải lợi nhuận kế toán), tính chi phí cơ hội (mảnh đất lẽ ra đem bán), loại chi phí chìm (khoản nghiên cứu đã trả), tính ngoại ứng cannibalization/synergy, và không đưa chi phí tài trợ vào dòng tiền — lãi suất chiết khấu đã gánh phần đó. <strong>Cạm bẫy đề nêu tên:</strong> lỗi dự báo nội bộ (doanh thu lạc quan, chi phí phình), dự án \"con cưng\" bỏ qua phân tích, quyết định chạy theo EPS/ROE (từ chối dự án NPV dương vì pha loãng EPS ngắn hạn), không cân nhắc phương án thay thế, và phân bổ overhead sai.</p>\n<p><strong>Real options cộng thêm giá trị trên NPV:</strong> timing (trì hoãn đến khi bớt bất định), sizing (abandonment — cắt lỗ; growth/expansion — nhân rộng thành công), flexibility (đổi giá/sản lượng), và fundamental options (giá trị dự án chạy theo một tài sản cơ sở, ví dụ mỏ khoáng sản). Dự án NPV tĩnh hơi âm vẫn có thể đáng làm nếu giá trị quyền chọn vượt khoảng thiếu: quyết định bằng NPV = NPV tĩnh + giá trị quyền chọn − chi phí quyền chọn.</p>"
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
    ],
    [
     "Crossover rate",
     "IRR of the difference in cash flows (A − B)",
     "Below it one project wins, above it the other — NPV decides."
    ],
    [
     "Expanded NPV",
     "NPV = static NPV + real option value − option cost",
     "Timing, sizing (abandon/expand), flexibility, fundamental options."
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
    },
    {
     "h": "WACC end-to-end + the leverage cascade with numbers",
     "en": "<p><strong>WACC worked.</strong> Market values: equity 600, debt 400 → weights 60/40. Cost of equity via CAPM: rf 3% + β 1.2 × ERP 5% = <strong>9%</strong>. Pre-tax cost of debt 6%, tax rate 25% → after-tax 4.5%. WACC = 0.6 × 9% + 0.4 × 4.5% = <strong>7.2%</strong>. Use <em>market</em> values and <em>target</em> weights; the tax shield applies only to debt.</p>\n<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Firm value versus leverage under MM and trade-off theory\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Firm value vs leverage: three stories</text>\n<line x1=\"70\" y1=\"290\" x2=\"680\" y2=\"290\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"290\" x2=\"70\" y2=\"50\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"676\" y=\"308\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Debt / Value →</text>\n<text x=\"30\" y=\"62\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">V firm</text>\n<line x1=\"80\" y1=\"210\" x2=\"650\" y2=\"210\" stroke=\"#5B6577\" stroke-width=\"2\" stroke-dasharray=\"7 4\"/>\n<text x=\"656\" y=\"206\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#5B6577\">MM no tax: flat (irrelevance)</text>\n<line x1=\"80\" y1=\"208\" x2=\"650\" y2=\"92\" stroke=\"#5457E0\" stroke-width=\"2.2\"/>\n<text x=\"470\" y=\"96\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#5457E0\">MM with tax: V = Vu + t×D</text>\n<path d=\"M 80 208 C 250 172 360 148 440 152 C 520 156 590 195 645 250\" fill=\"none\" stroke=\"#0F9573\" stroke-width=\"2.6\"/>\n<text x=\"248\" y=\"230\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0F9573\">Trade-off: tax shield vs distress costs</text>\n<circle cx=\"432\" cy=\"151\" r=\"6\" fill=\"#DC4848\"/>\n<line x1=\"432\" y1=\"151\" x2=\"432\" y2=\"290\" stroke=\"#DC4848\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n<text x=\"432\" y=\"136\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#DC4848\">optimal capital structure</text>\n<text x=\"360\" y=\"324\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Past the optimum, expected financial-distress costs grow faster than the tax shield — value falls.</text>\n</svg>\n<p><strong>The three stories in the chart.</strong> MM with no taxes: capital structure is irrelevant — slicing the pizza differently doesn't change its size; cheaper debt is exactly offset by equity getting riskier (MM II: r_e = r_0 + (r_0 − r_d)(D/E)). MM with taxes: interest deductibility makes V = V_u + t×D — the more debt the better, absurdly implying ~100% debt. Trade-off theory restores realism: expected <strong>financial distress costs</strong> (direct: legal/administrative; indirect: lost customers, talent, supplier terms, fire sales) grow with leverage and eventually outweigh the shield → an interior optimum, higher for firms with stable cash flows and tangible assets (utilities) than for volatile, intangible-heavy firms (software). <strong>Pecking order</strong> adds the information story: managers prefer internal funds, then debt, then equity last — issuing equity signals shares may be overpriced.</p>\n<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Operating breakeven chart\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Breakeven: where revenue finally covers all costs</text>\n<line x1=\"70\" y1=\"290\" x2=\"680\" y2=\"290\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"290\" x2=\"70\" y2=\"50\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"676\" y=\"308\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Units sold →</text>\n<text x=\"40\" y=\"62\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">$</text>\n<line x1=\"70\" y1=\"220\" x2=\"660 \" y2=\"220\" stroke=\"#B45309\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n<text x=\"80\" y=\"212\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#B45309\">Fixed costs</text>\n<line x1=\"70\" y1=\"220\" x2=\"660\" y2=\"105\" stroke=\"#DC4848\" stroke-width=\"2.2\"/>\n<text x=\"560\" y=\"96\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#DC4848\">Total costs = F + v×Q</text>\n<line x1=\"70\" y1=\"290\" x2=\"640\" y2=\"60\" stroke=\"#0F9573\" stroke-width=\"2.2\"/>\n<text x=\"558\" y=\"56\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0F9573\">Revenue = P×Q</text>\n<circle cx=\"392\" cy=\"164\" r=\"6\" fill=\"#5457E0\"/>\n<line x1=\"392\" y1=\"164\" x2=\"392\" y2=\"290\" stroke=\"#5457E0\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n<text x=\"392\" y=\"312\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#5457E0\">Q_BE = F / (P − v)</text>\n<text x=\"238\" y=\"252\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#DC4848\">loss zone</text>\n<text x=\"540\" y=\"140\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#0F9573\">profit zone</text>\n<text x=\"360\" y=\"42\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">Higher fixed costs push the lines apart → higher breakeven and higher operating leverage.</text>\n</svg>\n<p><strong>Leverage cascade worked.</strong> P = $50, v = $30, F = $100,000, Q = 10,000 units, interest = $40,000. Operating income = 10,000(50−30) − 100,000 = <strong>$100,000</strong>. DOL = Q(P−v)/[Q(P−v) − F] = 200,000/100,000 = <strong>2.0</strong> → a 10% volume rise lifts operating income 20%. DFL = EBIT/(EBIT − interest) = 100,000/60,000 = <strong>1.67</strong>. Total leverage DTL = 2.0 × 1.67 = <strong>3.33</strong> → sales +10% ⇒ net income +33%. Breakevens: operating Q_BE = 100,000/20 = <strong>5,000 units</strong>; total (covering interest too) = 140,000/20 = <strong>7,000 units</strong>. Both leverage measures are <em>local</em> — they shrink as Q moves further above breakeven, and they cut both ways on the downside.</p>",
     "vi": "<p><strong>WACC trọn vẹn.</strong> Giá trị thị trường: vốn chủ 600, nợ 400 → trọng số 60/40. Chi phí vốn chủ theo CAPM: rf 3% + β 1,2 × ERP 5% = <strong>9%</strong>. Chi phí nợ trước thuế 6%, thuế 25% → sau thuế 4,5%. WACC = 0,6 × 9% + 0,4 × 4,5% = <strong>7,2%</strong>. Dùng giá trị <em>thị trường</em> và trọng số <em>mục tiêu</em>; lá chắn thuế chỉ áp cho nợ.</p>\n<p><strong>Ba câu chuyện trong đồ thị.</strong> MM không thuế: cấu trúc vốn vô can — cắt chiếc bánh kiểu khác không làm bánh to hơn; nợ rẻ hơn bị bù đúng bằng việc vốn chủ rủi ro hơn (MM II: r_e = r_0 + (r_0 − r_d)(D/E)). MM có thuế: khấu trừ lãi vay cho V = V_u + t×D — càng nhiều nợ càng tốt, hàm ý phi lý ~100% nợ. Trade-off khôi phục thực tế: <strong>chi phí kiệt quệ tài chính</strong> kỳ vọng (trực tiếp: pháp lý/hành chính; gián tiếp: mất khách, mất nhân tài, nhà cung cấp siết, bán tháo tài sản) tăng theo đòn bẩy và rốt cuộc vượt lá chắn → điểm tối ưu bên trong, cao hơn với công ty dòng tiền ổn định và tài sản hữu hình (utility) so với công ty biến động, nặng vô hình (phần mềm). <strong>Pecking order</strong> thêm câu chuyện thông tin: quản lý thích vốn nội bộ, rồi nợ, cuối cùng mới phát hành cổ phần — phát hành cổ phần phát tín hiệu cổ phiếu có thể đang đắt.</p>\n<p><strong>Chuỗi đòn bẩy bằng số.</strong> P = $50, v = $30, F = $100.000, Q = 10.000 đơn vị, lãi vay = $40.000. Lợi nhuận hoạt động = 10.000(50−30) − 100.000 = <strong>$100.000</strong>. DOL = Q(P−v)/[Q(P−v) − F] = 200.000/100.000 = <strong>2,0</strong> → sản lượng +10% đẩy lợi nhuận hoạt động +20%. DFL = EBIT/(EBIT − lãi) = 100.000/60.000 = <strong>1,67</strong>. Đòn bẩy tổng DTL = 2,0 × 1,67 = <strong>3,33</strong> → doanh số +10% ⇒ NI +33%. Điểm hòa vốn: hoạt động Q_BE = 100.000/20 = <strong>5.000 đơn vị</strong>; tổng (gánh cả lãi) = 140.000/20 = <strong>7.000 đơn vị</strong>. Cả hai thước đo đòn bẩy đều <em>cục bộ</em> — co lại khi Q rời xa điểm hòa vốn, và cắt cả hai chiều khi đi xuống.</p>"
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
    ],
    [
     "After-tax cost of debt",
     "r_d × (1 − t)",
     "Only debt gets the tax shield in WACC."
    ],
    [
     "MM Proposition II (no tax)",
     "r_e = r_0 + (r_0 − r_d) × D/E",
     "Cheaper debt is offset by costlier equity — WACC flat."
    ],
    [
     "DTL (total leverage)",
     "DTL = DOL × DFL = %ΔNI / %Δsales",
     "Compounding of operating and financial leverage."
    ],
    [
     "Total breakeven quantity",
     "Q = (F + interest) / (P − v)",
     "Operating breakeven excludes interest; total includes it."
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
    },
    {
     "h": "Business model teardown: pricing catalogue → margins → capital intensity",
     "en": "<p><strong>A business model answers five questions:</strong> who are the customers (B2B/B2C, segments), what is the value proposition (why buy <em>this</em>), how is it delivered (channels: direct sales, intermediaries, omnichannel, drop-shipping), how does the firm get paid (the pricing model), and why is it defensible (moat). The exam mostly tests the pricing catalogue and the \"platform vs traditional\" distinction, so drill both.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Pricing model</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Mechanics</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Example logic</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Penetration → skimming</td><td style=\"padding:7px;border:1px solid #E5E9F2\">price low to seize share, or high to harvest early adopters</td><td style=\"padding:7px;border:1px solid #E5E9F2\">streaming launch vs new gadget</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Freemium</td><td style=\"padding:7px;border:1px solid #E5E9F2\">free base tier, paid upgrades</td><td style=\"padding:7px;border:1px solid #E5E9F2\">conversion rate is the whole game</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Subscription / licensing / franchising</td><td style=\"padding:7px;border:1px solid #E5E9F2\">recurring fees for access, IP, or brand + format</td><td style=\"padding:7px;border:1px solid #E5E9F2\">predictable revenue, high renewal stakes</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Razor–blade / tying</td><td style=\"padding:7px;border:1px solid #E5E9F2\">cheap durable, pricey consumables</td><td style=\"padding:7px;border:1px solid #E5E9F2\">printers & ink; margin lives in the refill</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Dynamic / auction / value-based</td><td style=\"padding:7px;border:1px solid #E5E9F2\">price varies with demand, bidding, or customer value delivered</td><td style=\"padding:7px;border:1px solid #E5E9F2\">ride-hailing surge; ad auctions; enterprise software</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Bundling / tiered</td><td style=\"padding:7px;border:1px solid #E5E9F2\">package goods or price by usage tier</td><td style=\"padding:7px;border:1px solid #E5E9F2\">works when marginal cost is low</td></tr></table>\n<p><strong>Value chain ≠ supply chain.</strong> The supply chain is the physical flow (including steps outside the firm); the value chain is <em>the firm's own</em> activities that add customer value — the basis for margin analysis: which steps justify the price premium, and which could be outsourced without losing the moat?</p>\n<p><strong>Platforms and network effects.</strong> A traditional firm sells what it makes; a <strong>platform</strong> orchestrates external producers and consumers, and its value grows with participation (network effects — each new user makes the network worth more to others). Related: <strong>aggregators</strong> intermediate demand under their own brand and monetize data/attention; <strong>crowdsourcing</strong> models harvest user contributions as the product. Network-effect businesses tend to winner-take-most dynamics, near-zero marginal cost, and heavy up-front spending to reach critical mass — losses early are a feature of the model, not automatically a flaw.</p>\n<p><strong>Close the loop to the financials.</strong> The model dictates the statements: subscription models show deferred revenue (a liability) and smooth cash collection; razor-blade shows low-margin hardware revenue and high-margin consumables mix; asset-light franchising shows high ROA and royalty streams; capital-intensive manufacturing shows high fixed costs → high operating leverage (module 5's DOL is a <em>business-model</em> variable). When an exam vignette describes a model, translate it immediately into expected margin structure, capital intensity, and revenue visibility.</p>",
     "vi": "<p><strong>Một business model trả lời năm câu hỏi:</strong> khách hàng là ai (B2B/B2C, phân khúc), giá trị đề xuất là gì (vì sao mua <em>của hãng này</em>), giao bằng cách nào (kênh: bán trực tiếp, trung gian, omnichannel, drop-shipping), thu tiền ra sao (mô hình giá), và vì sao phòng thủ được (con hào). Đề chủ yếu hỏi danh mục mô hình giá và phân biệt \"platform vs truyền thống\", nên luyện cả hai.</p>\n<p><strong>Danh mục mô hình giá (bảng):</strong> penetration → skimming (giá thấp chiếm thị phần, hoặc giá cao gặt early adopters); freemium (bậc miễn phí, trả tiền nâng cấp — tỷ lệ chuyển đổi là cả cuộc chơi); subscription/licensing/franchising (phí định kỳ cho quyền truy cập, IP, hoặc thương hiệu + công thức — doanh thu dễ đoán, rủi ro nằm ở gia hạn); razor–blade (thiết bị rẻ, vật tư tiêu hao đắt — biên lợi nhuận nằm ở ống mực); dynamic/auction/value-based (giá theo cầu, đấu giá, hoặc giá trị mang lại — surge gọi xe, đấu giá quảng cáo, phần mềm doanh nghiệp); bundling/tiered (gói sản phẩm hoặc giá theo bậc dùng — hợp khi chi phí biên thấp).</p>\n<p><strong>Value chain ≠ supply chain.</strong> Supply chain là dòng chảy vật lý (gồm cả các khâu ngoài công ty); value chain là hoạt động <em>của riêng công ty</em> tạo giá trị cho khách — nền của phân tích biên lợi nhuận: khâu nào biện minh cho giá premium, khâu nào thuê ngoài được mà không mất con hào?</p>\n<p><strong>Platforms và hiệu ứng mạng.</strong> Công ty truyền thống bán thứ mình làm; <strong>platform</strong> điều phối người sản xuất và người tiêu dùng bên ngoài, giá trị tăng theo mức tham gia (network effects — mỗi người dùng mới làm mạng lưới đáng giá hơn với người khác). Liên quan: <strong>aggregators</strong> trung gian hóa cầu dưới thương hiệu của mình và kiếm tiền từ dữ liệu/sự chú ý; mô hình <strong>crowdsourcing</strong> thu hoạch đóng góp của người dùng làm sản phẩm. Doanh nghiệp network-effect thiên về động lực winner-take-most, chi phí biên gần 0, và chi trước rất nặng để đạt khối lượng tới hạn — lỗ giai đoạn đầu là đặc tính của mô hình, không mặc nhiên là khuyết tật.</p>\n<p><strong>Khép vòng về báo cáo tài chính.</strong> Mô hình quyết định báo cáo: subscription cho deferred revenue (một khoản nợ) và dòng thu mượt; razor-blade cho doanh thu phần cứng biên thấp trộn vật tư biên cao; franchising nhẹ tài sản cho ROA cao và dòng royalty; sản xuất thâm dụng vốn cho chi phí cố định cao → đòn bẩy hoạt động cao (DOL của module 5 là biến số <em>thuộc business model</em>). Khi đề mô tả một mô hình, dịch ngay sang cấu trúc biên kỳ vọng, cường độ vốn, và độ nhìn thấy doanh thu.</p>"
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
   },
   {
    "q": "Corporate profit $200, corporate tax 30%, dividends taxed at 15%, all after-tax profit distributed. Shareholders keep:",
    "opts": [
     "$140",
     "$119",
     "$170"
    ],
    "ans": 1,
    "en": "200 × 0.70 = 140 distributed; 140 × 0.85 = $119. Effective rate = 1 − 0.7×0.85 = 40.5%.",
    "vi": "200 × 0,70 = 140 được chia; 140 × 0,85 = $119. Thuế hiệu dụng = 1 − 0,7×0,85 = 40,5%."
   },
   {
    "q": "In a limited partnership, unlimited liability falls on:",
    "opts": [
     "All partners",
     "The general partner(s) only",
     "No one — liability is limited"
    ],
    "ans": 1,
    "en": "GPs run the business and bear unlimited liability; limited partners risk only their investment and stay passive.",
    "vi": "GP điều hành và chịu trách nhiệm vô hạn; LP chỉ rủi ro phần vốn góp và giữ vai trò thụ động."
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
   },
   {
    "q": "Firm value turns out to be 70; debt face value is 100. Shareholders receive:",
    "opts": [
     "−30",
     "0",
     "70"
    ],
    "ans": 1,
    "en": "Limited liability: equity = max(70 − 100, 0) = 0. Creditors take the 70.",
    "vi": "Trách nhiệm hữu hạn: vốn chủ = max(70 − 100, 0) = 0. Chủ nợ nhận 70."
   },
   {
    "q": "Which stakeholder most prefers stable, low-risk cash flows over risky growth?",
    "opts": [
     "Shareholders",
     "Creditors",
     "Both equally"
    ],
    "ans": 1,
    "en": "Creditors' upside is capped at face value, so they value downside protection; shareholders own the residual upside.",
    "vi": "Phần hưởng của chủ nợ bị chặn ở mệnh giá nên họ quý sự bảo vệ phía dưới; cổ đông sở hữu phần dôi phía trên."
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
   },
   {
    "q": "A firm swaps into a riskier project with unchanged expected firm value. Expected equity value rises. This illustrates:",
    "opts": [
     "Empire building",
     "Risk shifting (asset substitution) at creditors' expense",
     "Tunneling"
    ],
    "ans": 1,
    "en": "Risk transfers value from capped-claim creditors to option-like equity — the classic owner–creditor conflict that covenants exist to block.",
    "vi": "Rủi ro chuyển giá trị từ chủ nợ (quyền đòi có trần) sang vốn chủ (giống quyền chọn) — xung đột chủ sở hữu–chủ nợ kinh điển mà covenants sinh ra để chặn."
   },
   {
    "q": "Related-party transactions at off-market prices that benefit a controlling shareholder harm mainly:",
    "opts": [
     "Creditors",
     "Minority shareholders",
     "Employees"
    ],
    "ans": 1,
    "en": "Tunneling extracts private benefits of control from minority owners; remedies include minority approval rules and independent boards.",
    "vi": "Tunneling rút lợi ích riêng của quyền kiểm soát từ cổ đông thiểu số; thuốc chữa gồm quy định thiểu số phê duyệt và HĐQT độc lập."
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
   },
   {
    "q": "Terms are 1/10 net 40. The annualized cost of forgoing the discount is closest to:",
    "opts": [
     "1%",
     "13%",
     "44%"
    ],
    "ans": 1,
    "en": "(1 + 1/99)^(365/30) − 1 ≈ 13.0%. Compare with the borrowing rate before skipping discounts.",
    "vi": "(1 + 1/99)^(365/30) − 1 ≈ 13,0%. So với lãi suất vay trước khi quyết định bỏ chiết khấu."
   },
   {
    "q": "Growing obsolete inventory is best classified as:",
    "opts": [
     "A pull on liquidity",
     "A drag on liquidity",
     "A secondary source of liquidity"
    ],
    "ans": 1,
    "en": "Drags slow cash coming IN (stuck receivables, dead stock); pulls accelerate cash going OUT.",
    "vi": "Drags làm chậm tiền VÀO (phải thu kẹt, hàng chết); pulls đẩy nhanh tiền RA."
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
   },
   {
    "q": "Two mutually exclusive projects: NPV ranks A first, IRR ranks B first. At the firm's cost of capital, choose:",
    "opts": [
     "B — higher IRR",
     "A — NPV rules",
     "The one with faster payback"
    ],
    "ans": 1,
    "en": "NPV measures value added in currency at the actual cost of capital; IRR's reinvestment assumption and scale-blindness make it unreliable for ranking.",
    "vi": "NPV đo giá trị tăng thêm bằng tiền tại đúng chi phí vốn; giả định tái đầu tư và mù quy mô làm IRR không đáng tin khi xếp hạng."
   },
   {
    "q": "Money already spent on a feasibility study is, for the project decision:",
    "opts": [
     "An incremental cost",
     "A sunk cost — exclude it",
     "An opportunity cost"
    ],
    "ans": 1,
    "en": "It is gone regardless of the decision; only future incremental cash flows count.",
    "vi": "Khoản đó mất rồi bất kể quyết định; chỉ dòng tiền tăng thêm trong tương lai được tính."
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
   },
   {
    "q": "E = 700, D = 300 (market values), r_e = 10%, r_d = 5%, tax 20%. WACC is closest to:",
    "opts": [
     "8.2%",
     "8.5%",
     "7.9%"
    ],
    "ans": 0,
    "en": "0.7×10 + 0.3×5×0.8 = 7.0 + 1.2 = 8.2%.",
    "vi": "0,7×10 + 0,3×5×0,8 = 7,0 + 1,2 = 8,2%."
   },
   {
    "q": "Per trade-off theory, the optimal debt level is where:",
    "opts": [
     "The tax shield is maximized",
     "Marginal tax benefit equals marginal expected distress cost",
     "WACC equals the cost of debt"
    ],
    "ans": 1,
    "en": "Value peaks where the incremental shield stops covering incremental expected distress costs — an interior optimum.",
    "vi": "Giá trị đạt đỉnh khi lá chắn tăng thêm không còn bù nổi chi phí kiệt quệ kỳ vọng tăng thêm — điểm tối ưu bên trong."
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
   },
   {
    "q": "Selling printers cheaply while earning high margins on ink cartridges is:",
    "opts": [
     "Freemium",
     "Razor–blade pricing",
     "Penetration pricing"
    ],
    "ans": 1,
    "en": "The durable is the hook; profit lives in recurring consumables — razor-blade (tying).",
    "vi": "Thiết bị bền là mồi câu; lợi nhuận nằm ở vật tư tiêu hao định kỳ — razor-blade (tying)."
   },
   {
    "q": "A marketplace whose value to each user rises as more users join exhibits:",
    "opts": [
     "Economies of scale",
     "Network effects",
     "Vertical integration"
    ],
    "ans": 1,
    "en": "Network effects are demand-side: participation itself raises the product's value — the signature of platform businesses.",
    "vi": "Network effects thuộc phía cầu: chính sự tham gia làm sản phẩm đáng giá hơn — dấu ấn của mô hình platform."
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
  ],
  {
   "name": "Set D — Mixed exam-style review",
   "qs": [
    {
     "q": "Which feature does NOT belong to the corporate form?",
     "opts": [
      "Perpetual existence",
      "Owners' unlimited liability",
      "Separation of ownership and control"
     ],
     "ans": 1,
     "en": "Corporations shield owners with limited liability; unlimited liability belongs to sole proprietors and general partners.",
     "vi": "Công ty cổ phần che chắn chủ sở hữu bằng trách nhiệm hữu hạn; trách nhiệm vô hạn thuộc về chủ DN tư nhân và thành viên hợp danh."
    },
    {
     "q": "A direct listing differs from an IPO mainly because a direct listing:",
     "opts": [
      "Raises more new capital",
      "Lists existing shares without raising new capital",
      "Requires a SPAC"
     ],
     "ans": 1,
     "en": "Direct listings float existing shares with no underwritten primary raise; IPOs sell new shares through underwriters.",
     "vi": "Direct listing niêm yết cổ phần hiện hữu, không huy động vốn mới qua bảo lãnh; IPO bán cổ phần mới qua nhà bảo lãnh."
    },
    {
     "q": "Equity-linked compensation for the CEO primarily addresses the conflict between:",
     "opts": [
      "Shareholders and creditors",
      "Shareholders and managers",
      "Majority and minority shareholders"
     ],
     "ans": 1,
     "en": "Tying pay to shares aligns managers' incentives with owners' — the principal–agent remedy.",
     "vi": "Gắn thù lao với cổ phiếu đồng hướng động cơ của quản lý với chủ sở hữu — thuốc chữa quan hệ principal–agent."
    },
    {
     "q": "Debt covenants restricting dividend payouts chiefly protect:",
     "opts": [
      "Managers",
      "Creditors",
      "Minority shareholders"
     ],
     "ans": 1,
     "en": "They stop shareholders from stripping cash out and leaving creditors with a hollow firm.",
     "vi": "Chúng chặn cổ đông rút tiền ra để lại cho chủ nợ một công ty rỗng."
    },
    {
     "q": "A firm holds large cash buffers and funds current assets with long-term capital. Its working-capital approach is:",
     "opts": [
      "Aggressive",
      "Conservative",
      "Matching"
     ],
     "ans": 1,
     "en": "Thick liquidity buffers + long-term funding = conservative: low disruption risk, lower returns.",
     "vi": "Đệm thanh khoản dày + vốn dài hạn = bảo thủ: rủi ro gián đoạn thấp, suất sinh lời thấp hơn."
    },
    {
     "q": "Commercial paper issuers maintain backup credit lines primarily to manage:",
     "opts": [
      "Interest rate risk",
      "Rollover risk",
      "Currency risk"
     ],
     "ans": 1,
     "en": "CP is short and must be refinanced constantly; if the market shuts, the backup line repays maturing paper.",
     "vi": "CP kỳ hạn ngắn phải đảo liên tục; nếu thị trường đóng băng, hạn mức dự phòng trả nợ giấy đáo hạn."
    },
    {
     "q": "A project's cash flows are −100, +250, −156. IRR analysis here is unreliable because:",
     "opts": [
      "The IRR exceeds WACC",
      "Two sign changes can produce multiple IRRs",
      "IRR ignores the time value of money"
     ],
     "ans": 1,
     "en": "Unconventional flows (two sign changes) can yield two IRRs or none — use NPV.",
     "vi": "Dòng tiền không quy ước (đổi dấu hai lần) có thể cho hai IRR hoặc không có — dùng NPV."
    },
    {
     "q": "Rejecting a positive-NPV project because it would dilute next year's EPS is an example of:",
     "opts": [
      "Sound capital discipline",
      "An EPS-driven decision pitfall",
      "Real-option thinking"
     ],
     "ans": 1,
     "en": "Accounting metrics are not value; the named pitfall is basing investment decisions on short-run EPS/ROE effects.",
     "vi": "Chỉ số kế toán không phải giá trị; cạm bẫy được nêu tên là quyết định đầu tư theo tác động EPS/ROE ngắn hạn."
    },
    {
     "q": "An option to abandon a failing project is which type of real option?",
     "opts": [
      "Timing",
      "Sizing",
      "Flexibility"
     ],
     "ans": 1,
     "en": "Abandonment (and growth/expansion) are sizing options — changing the scale of commitment.",
     "vi": "Abandonment (và growth/expansion) là quyền chọn sizing — thay đổi quy mô cam kết."
    },
    {
     "q": "Under MM without taxes, issuing cheaper debt to replace equity leaves WACC:",
     "opts": [
      "Lower",
      "Unchanged",
      "Higher"
     ],
     "ans": 1,
     "en": "MM I: with no taxes, r_e rises exactly enough (Prop II) to keep WACC and firm value constant.",
     "vi": "MM I: không thuế, r_e tăng vừa đủ (Prop II) giữ WACC và giá trị công ty không đổi."
    },
    {
     "q": "Sales rise 8%; DOL = 1.5 and DFL = 2.0. Net income rises approximately:",
     "opts": [
      "12%",
      "16%",
      "24%"
     ],
     "ans": 2,
     "en": "DTL = 1.5 × 2.0 = 3.0 → NI +24%.",
     "vi": "DTL = 1,5 × 2,0 = 3,0 → NI +24%."
    },
    {
     "q": "A software firm with mostly intangible assets and volatile cash flows should, per trade-off theory, carry:",
     "opts": [
      "More debt than a utility",
      "Less debt than a utility",
      "The same debt — structure is irrelevant"
     ],
     "ans": 1,
     "en": "Distress costs are high (intangibles fire-sale badly) and shield value uncertain → lower optimal leverage than stable, tangible-asset utilities.",
     "vi": "Chi phí kiệt quệ cao (tài sản vô hình bán tháo rất tệ) và lá chắn thuế bấp bênh → đòn bẩy tối ưu thấp hơn utility ổn định, nặng tài sản hữu hình."
    }
   ]
  }
 ]
};
