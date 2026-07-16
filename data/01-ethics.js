/* =====================================================================
   Topic 01 — Ethical & Professional Standards
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
 "id": "ethics",
 "num": "01",
 "name": "Ethical & Professional Standards",
 "vi": "Đạo đức & Chuẩn mực nghề nghiệp",
 "w": [
  15,
  20
 ],
 "blurb": "The Code of Ethics, the seven Standards of Professional Conduct, and GIPS. The highest-weighted topic and a tie-breaker at the margin.",
 "intro": {
  "en": "Ethics is the single most important topic at Level 1: it carries a 15–20% weight, and CFA Institute applies an \"ethics adjustment\" for borderline candidates — a strong ethics score can push a marginal result to a pass. Questions are scenario-based: you must identify which Standard is violated (or that no violation occurred). This topic now runs from the foundations — why the industry depends on trust, why good people slip, and how to reason through dilemmas — to the Code, all seven Standards in detail, the Professional Conduct Program, and GIPS. Read the guidance carefully: exam traps live in the details.",
  "vi": "Ethics là topic quan trọng nhất ở Level 1: tỷ trọng 15–20%, và CFA Institute áp dụng \"ethics adjustment\" — thí sinh sát ngưỡng đỗ/trượt có điểm ethics tốt có thể được đẩy lên đỗ. Câu hỏi dạng tình huống: bạn phải xác định Standard nào bị vi phạm (hoặc không có vi phạm). Topic được xây từ nền tảng — vì sao ngành đầu tư sống nhờ niềm tin, vì sao người tốt vẫn sa ngã, cách tư duy qua tình huống khó — đến Code, cả 7 Standards chi tiết, Professional Conduct Program và GIPS. Đọc kỹ phần guidance: bẫy đề thi nằm ở tiểu tiết."
 },
 "modules": [
  {
   "title": "Ethics and Trust in the Investment Profession",
   "sections": [
    {
     "h": "What ethics is — and why this industry runs on trust",
     "en": "<p><strong>Ethics</strong> is a set of shared beliefs about what behavior is right and wrong — moral principles that guide conduct, often demanding more than the law does. A <strong>profession</strong> (medicine, law, investment management) is an occupation built on specialized knowledge and service to others, governed by a code of conduct that puts the client first, and committed to maintaining and monitoring member competence.</p><p>Investment management depends on trust more than almost any industry, because clients face severe <strong>information asymmetry</strong>: the \"product\" is intangible advice, quality is hard to judge even after the fact (a good decision can produce a bad outcome and vice versa), and clients hand over control of their savings. When investors cannot verify quality directly, they rely on the integrity of the professional. Ethical behavior therefore is not decoration — it lowers the cost of doing business, broadens participation in markets, reduces the cost of capital, and sustains the whole industry. Ethical lapses do the reverse: scandals drive investors out of markets for years.</p>",
     "vi": "<p><strong>Đạo đức (ethics)</strong> là tập hợp các chuẩn mực chung về hành vi đúng–sai, thường đòi hỏi cao hơn cả luật pháp. Một <strong>nghề nghiệp chuyên môn (profession)</strong> — như y, luật, quản lý đầu tư — dựa trên tri thức chuyên sâu, phục vụ xã hội, có bộ quy tắc ứng xử đặt khách hàng lên trước, và cam kết duy trì, giám sát năng lực của thành viên.</p><p>Ngành đầu tư phụ thuộc vào niềm tin hơn hầu hết các ngành khác vì <strong>bất cân xứng thông tin</strong> rất lớn: \"sản phẩm\" là lời khuyên vô hình, chất lượng khó đánh giá kể cả sau khi có kết quả (quyết định đúng vẫn có thể cho kết quả xấu và ngược lại), và khách hàng giao quyền kiểm soát tiền tiết kiệm của mình. Khi không thể tự kiểm chứng chất lượng, nhà đầu tư buộc phải dựa vào sự chính trực của người hành nghề. Vì vậy hành xử đạo đức không phải trang trí — nó giảm chi phí giao dịch, mở rộng sự tham gia thị trường, hạ chi phí vốn và nuôi sống cả ngành. Bê bối đạo đức gây tác dụng ngược: khiến nhà đầu tư rời bỏ thị trường nhiều năm.</p>"
    },
    {
     "h": "Ethical vs legal — they are not the same",
     "en": "<p>Laws and ethics overlap but do not coincide. Key contrasts the exam loves:</p><ul><li><strong>Law is a minimum standard.</strong> Conduct can be perfectly legal yet unethical — e.g., trading on material nonpublic information in a jurisdiction where insider-trading laws are weak, or recommending a technically suitable product mainly because it pays you the highest fee.</li><li><strong>Conduct can be illegal yet arguably ethical</strong> — e.g., whistleblowing that violates a confidentiality law, or civil disobedience.</li><li><strong>Laws lag.</strong> Legislation reacts to yesterday’s scandal; new products and conflicts appear faster than rules. Ethical judgment must fill the gap.</li><li><strong>Laws vary by jurisdiction</strong>, while the Code and Standards apply to members everywhere — which is why Standard I(A) requires following the <em>stricter</em> of the two.</li></ul><p>Exam angle: an answer choice saying \"it was legal, therefore no violation\" is almost always wrong. Compliance with law is necessary but not sufficient under the Code.</p>",
     "vi": "<p>Luật pháp và đạo đức giao nhau nhưng không trùng nhau. Các điểm tương phản hay thi:</p><ul><li><strong>Luật là chuẩn tối thiểu.</strong> Hành vi có thể hoàn toàn hợp pháp nhưng phi đạo đức — ví dụ giao dịch bằng thông tin nội bộ ở nước có luật lỏng lẻo, hoặc tư vấn sản phẩm \"đủ phù hợp\" chỉ vì nó trả hoa hồng cao nhất.</li><li><strong>Hành vi có thể phạm luật nhưng vẫn có thể coi là có đạo đức</strong> — ví dụ tố giác sai phạm dù vi phạm điều khoản bảo mật.</li><li><strong>Luật luôn đi sau thực tế.</strong> Quy định phản ứng với bê bối của hôm qua; sản phẩm và xung đột mới xuất hiện nhanh hơn luật. Phán đoán đạo đức phải lấp khoảng trống đó.</li><li><strong>Luật khác nhau giữa các nước</strong>, còn Code and Standards áp dụng cho thành viên ở mọi nơi — vì thế Standard I(A) yêu cầu tuân theo quy định <em>nghiêm ngặt hơn</em>.</li></ul><p>Góc thi: đáp án kiểu \"việc đó hợp pháp nên không vi phạm\" hầu như luôn sai. Tuân thủ luật là điều kiện cần, không phải điều kiện đủ theo Code.</p>"
    },
    {
     "h": "Why good people behave badly — and the decision-making framework",
     "en": "<p>Research on ethical failures points to two humbling findings:</p><ul><li><strong>Overconfidence in our own ethics.</strong> Most people rate themselves more ethical than average, so they don’t stop to reflect — and unexamined decisions default to self-interest.</li><li><strong>Situational influences beat character.</strong> Bonuses, promotions, loyalty to colleagues, prestige, and \"everyone does it\" cultures focus attention on immediate personal rewards and crowd out long-term considerations like reputation, clients, and market integrity. Strong people in bad situations do bad things — which is why a firm’s culture matters as much as hiring \"good people\". Note: a strict <em>compliance</em> culture (\"is it allowed?\") is not the same as an <em>ethical</em> culture (\"is it right?\") — rule-following can even become a substitute for thinking.</li></ul><p>The curriculum’s antidote is a deliberate <strong>ethical decision-making framework</strong>:</p><ol><li><strong>Identify</strong> — the relevant facts, stakeholders and duties owed, ethical principles at stake, and your conflicts of interest.</li><li><strong>Consider</strong> — situational influences acting on you, alternative actions, and seek guidance (compliance, a trusted colleague, the Code) to counter your blind spots.</li><li><strong>Decide and act.</strong></li><li><strong>Reflect</strong> — did the outcome match expectations? What would you do differently? Reflection builds judgment for the next dilemma.</li></ol><p>The framework’s purpose is to <em>slow thinking down</em> precisely when pressure pushes for a fast, self-serving choice.</p>",
     "vi": "<p>Nghiên cứu về các sai phạm đạo đức chỉ ra hai phát hiện đáng suy ngẫm:</p><ul><li><strong>Ảo tưởng về đạo đức của chính mình.</strong> Đa số tự đánh giá mình đạo đức hơn trung bình, nên không dừng lại tự vấn — và quyết định thiếu suy xét sẽ mặc định nghiêng về tư lợi.</li><li><strong>Áp lực hoàn cảnh mạnh hơn tính cách.</strong> Tiền thưởng, thăng chức, lòng trung thành với đồng nghiệp, danh tiếng, và văn hóa \"ai cũng làm vậy\" khiến sự chú ý dồn vào phần thưởng trước mắt, lấn át các cân nhắc dài hạn như uy tín, khách hàng, sự liêm chính của thị trường. Người tốt trong môi trường xấu vẫn làm điều xấu — nên văn hóa công ty quan trọng không kém việc tuyển \"người tốt\". Lưu ý: văn hóa <em>tuân thủ</em> chặt (\"có được phép không?\") không đồng nghĩa văn hóa <em>đạo đức</em> (\"có đúng không?\") — máy móc theo quy định thậm chí có thể thay thế việc tư duy.</li></ul><p>Liều thuốc của curriculum là <strong>khung ra quyết định đạo đức</strong> có chủ đích:</p><ol><li><strong>Identify (Nhận diện)</strong> — sự kiện liên quan, các bên hữu quan và nghĩa vụ, nguyên tắc đạo đức bị ảnh hưởng, xung đột lợi ích của chính bạn.</li><li><strong>Consider (Cân nhắc)</strong> — áp lực hoàn cảnh đang tác động lên bạn, các phương án thay thế, và tìm tư vấn (compliance, đồng nghiệp tin cậy, Code) để bù điểm mù của bản thân.</li><li><strong>Decide and act (Quyết định và hành động).</strong></li><li><strong>Reflect (Nhìn lại)</strong> — kết quả có như kỳ vọng? Lần sau sẽ làm gì khác? Nhìn lại giúp tích lũy khả năng phán đoán.</li></ol><p>Mục đích của khung là <em>làm chậm tư duy lại</em> đúng lúc áp lực thúc ép một lựa chọn nhanh và tư lợi.</p>"
    }
   ]
  },
  {
   "title": "Code of Ethics and Standards of Professional Conduct",
   "sections": [
    {
     "h": "The six components of the Code of Ethics",
     "en": "<p>Members and candidates must:</p><ol><li><strong>Act with integrity, competence, diligence, and respect</strong>, and in an ethical manner with the public, clients, prospective clients, employers, employees, colleagues, and other market participants.</li><li><strong>Place the integrity of the profession and the interests of clients above their own</strong> personal interests.</li><li><strong>Use reasonable care and exercise independent professional judgment</strong> in investment analysis, recommendations, and actions.</li><li><strong>Practice and encourage others to practice</strong> in a professional and ethical manner that reflects credit on the profession.</li><li><strong>Promote the integrity and viability of global capital markets</strong> for the ultimate benefit of society.</li><li><strong>Maintain and improve professional competence</strong> and strive to maintain and improve the competence of other investment professionals.</li></ol>",
     "vi": "<p>Thành viên và ứng viên phải:</p><ol><li><strong>Hành động chính trực, có năng lực, cần mẫn và tôn trọng</strong>, cư xử có đạo đức với công chúng, khách hàng, khách hàng tiềm năng, chủ lao động, nhân viên, đồng nghiệp và các thành viên khác của thị trường.</li><li><strong>Đặt tính chính trực của nghề nghiệp và lợi ích khách hàng lên trên</strong> lợi ích cá nhân.</li><li><strong>Cẩn trọng hợp lý và giữ phán đoán chuyên môn độc lập</strong> khi phân tích, khuyến nghị và ra quyết định đầu tư.</li><li><strong>Hành nghề và khuyến khích người khác hành nghề</strong> một cách chuyên nghiệp, có đạo đức, làm rạng danh nghề nghiệp.</li><li><strong>Thúc đẩy tính chính trực và sự bền vững của thị trường vốn toàn cầu</strong> vì lợi ích tối hậu của xã hội.</li><li><strong>Duy trì và nâng cao năng lực chuyên môn</strong> của bản thân và của các chuyên gia đầu tư khác.</li></ol>"
    },
    {
     "h": "The seven Standards at a glance",
     "en": "<p>The Standards of Professional Conduct organize member duties into seven areas — learn the map before the details:</p><ol><li><strong>I. Professionalism</strong> — knowledge of the law, independence &amp; objectivity, misrepresentation, misconduct, competence.</li><li><strong>II. Integrity of Capital Markets</strong> — material nonpublic information, market manipulation.</li><li><strong>III. Duties to Clients</strong> — loyalty/prudence/care, fair dealing, suitability, performance presentation, confidentiality.</li><li><strong>IV. Duties to Employers</strong> — loyalty, additional compensation, supervisors’ responsibilities.</li><li><strong>V. Investment Analysis, Recommendations, and Actions</strong> — diligence &amp; reasonable basis, communication with clients, record retention.</li><li><strong>VI. Conflicts of Interest</strong> — disclosure, priority of transactions, referral fees.</li><li><strong>VII. Responsibilities as a CFA Institute Member or Candidate</strong> — conduct in the CFA Program, reference to CFA Institute and the designation.</li></ol><p>A useful hierarchy to internalize: <strong>market integrity and client interests outrank the employer, and the employer outranks you.</strong> Most exam scenarios test whether you can apply that ordering under pressure.</p>",
     "vi": "<p>Bảy Standards chia nghĩa vụ của thành viên thành 7 nhóm — nắm bản đồ trước khi học chi tiết:</p><ol><li><strong>I. Tính chuyên nghiệp</strong> — hiểu biết pháp luật, độc lập &amp; khách quan, không trình bày sai lệch, không hành vi sai trái, năng lực chuyên môn.</li><li><strong>II. Sự liêm chính của thị trường vốn</strong> — thông tin trọng yếu chưa công bố, thao túng thị trường.</li><li><strong>III. Nghĩa vụ với khách hàng</strong> — trung thành/cẩn trọng/tận tâm, đối xử công bằng, tính phù hợp, trình bày hiệu quả đầu tư, bảo mật.</li><li><strong>IV. Nghĩa vụ với công ty</strong> — trung thành, thù lao ngoài, trách nhiệm người giám sát.</li><li><strong>V. Phân tích, khuyến nghị và hành động đầu tư</strong> — cơ sở hợp lý, truyền đạt với khách hàng, lưu trữ hồ sơ.</li><li><strong>VI. Xung đột lợi ích</strong> — công bố xung đột, thứ tự ưu tiên giao dịch, phí giới thiệu.</li><li><strong>VII. Trách nhiệm với tư cách thành viên/thí sinh CFA</strong> — hành vi trong kỳ thi, cách sử dụng danh hiệu.</li></ol><p>Thứ bậc cần khắc cốt: <strong>liêm chính thị trường và lợi ích khách hàng đứng trên công ty, công ty đứng trên bản thân bạn.</strong> Phần lớn tình huống thi kiểm tra việc áp dụng đúng thứ tự này dưới áp lực.</p>"
    },
    {
     "h": "The Professional Conduct Program (PCP) — how the Code is enforced",
     "en": "<p>CFA Institute enforces the Code and Standards through the <strong>Professional Conduct Program</strong>, covering all members and candidates. Know the mechanics:</p><ul><li><strong>How inquiries start:</strong> self-disclosure on the annual Professional Conduct Statement (members must disclose complaints, litigation, or regulatory investigations); written complaints from others; public information such as media or regulatory actions; exam proctor reports; and analysis of exam materials and online/social-media content.</li><li><strong>Investigation:</strong> the Designated Officer may request a written explanation, interview the member, complainant, or third parties, and collect documents. Members and candidates are required to <em>cooperate</em>; refusing to cooperate is itself a basis for discipline.</li><li><strong>Outcomes:</strong> dismiss the inquiry, issue a cautionary letter, or propose a disciplinary sanction. If the member <em>rejects</em> a proposed sanction, the matter goes to a hearing panel of CFA Institute members.</li><li><strong>Sanctions:</strong> public censure, suspension of membership and use of the designation, or <strong>revocation of the charter</strong>. Candidates may be suspended or prohibited from further participation in the CFA Program. CFA Institute is a private association: it <em>cannot fine or imprison anyone</em> — legal penalties belong to regulators and courts.</li></ul>",
     "vi": "<p>CFA Institute thực thi Code and Standards thông qua <strong>Professional Conduct Program (PCP)</strong>, áp dụng cho mọi thành viên và thí sinh. Cần nắm cơ chế:</p><ul><li><strong>Nguồn mở cuộc điều tra:</strong> tự khai trên Professional Conduct Statement hằng năm (phải khai các khiếu nại, kiện tụng, điều tra pháp lý liên quan đến mình); đơn khiếu nại bằng văn bản; thông tin công khai như báo chí, quyết định của cơ quan quản lý; báo cáo của giám thị phòng thi; và việc phân tích bài thi, nội dung mạng xã hội.</li><li><strong>Quy trình điều tra:</strong> Designated Officer có thể yêu cầu giải trình bằng văn bản, phỏng vấn đương sự, người khiếu nại, bên thứ ba và thu thập tài liệu. Thành viên/thí sinh <em>bắt buộc hợp tác</em>; từ chối hợp tác tự nó đã là căn cứ kỷ luật.</li><li><strong>Kết quả:</strong> đình chỉ điều tra, thư nhắc nhở (cautionary letter), hoặc đề xuất hình thức kỷ luật. Nếu đương sự <em>không chấp nhận</em> mức kỷ luật đề xuất, vụ việc được chuyển lên hội đồng xét xử (hearing panel) gồm các thành viên CFA Institute.</li><li><strong>Các mức kỷ luật:</strong> khiển trách công khai, đình chỉ tư cách thành viên và quyền sử dụng danh hiệu, hoặc <strong>thu hồi charter</strong>. Thí sinh có thể bị đình chỉ hoặc cấm thi vĩnh viễn. CFA Institute là hiệp hội tư nhân: <em>không có quyền phạt tiền hay bỏ tù</em> — chế tài pháp lý thuộc về cơ quan quản lý và tòa án.</li></ul>"
    }
   ]
  },
  {
   "title": "Guidance for Standards I–VII",
   "sections": [
    {
     "h": "I(A) Knowledge of the Law & I(B) Independence and Objectivity",
     "en": "<ul><li><strong>I(A) Knowledge of the Law:</strong> understand and comply with all applicable laws, rules, and regulations — and when law and the Code conflict, follow the <em>stricter</em> requirement. If there is no local securities law, the Code still applies in full. Do not <em>knowingly</em> participate in or assist violations. If you discover illegal or unethical activity: first report it to your supervisor or compliance; if the conduct continues, you must <strong>dissociate</strong> — stop the activity, remove your name from documents, and if necessary resign. Reporting violations to governmental authorities is <em>encouraged but not required</em> by the Code (unless local law requires it).</li><li><strong>I(B) Independence and Objectivity:</strong> use reasonable care to maintain independence and do not offer, solicit, or accept any gift, benefit, or compensation that could reasonably be expected to compromise it. Crucial distinctions: a <em>modest gift from a client</em> (a token of appreciation for past service) may be accepted with disclosure to the employer; a gift or lavish entertainment from a party seeking to influence future conduct — an issuer courting research coverage, a broker chasing order flow — must be refused. Best practices the exam rewards: pay for your own travel to company visits when practical (or use commercial transport rather than the issuer’s jet); issuer-paid research only for a <em>flat fee disclosed in the report</em>, never contingent on the conclusion; protect analysts from pressure by investment-banking colleagues or by covered companies threatening to cut access; do not accept allocations of oversubscribed IPOs for personal accounts.</li></ul>",
     "vi": "<ul><li><strong>I(A) Hiểu biết pháp luật:</strong> nắm và tuân thủ mọi luật lệ áp dụng — khi luật và Code mâu thuẫn, theo quy định <em>nghiêm ngặt hơn</em>. Nơi không có luật chứng khoán, Code vẫn áp dụng đầy đủ. Không <em>cố ý</em> tham gia hay tiếp tay cho vi phạm. Khi phát hiện hành vi phạm pháp/phi đạo đức: báo cáo cấp trên hoặc compliance trước; nếu hành vi tiếp diễn, phải <strong>tách mình khỏi (dissociate)</strong> — ngừng tham gia, rút tên khỏi tài liệu, cần thiết thì từ chức. Việc tố giác với cơ quan nhà nước được <em>khuyến khích nhưng Code không bắt buộc</em> (trừ khi luật địa phương yêu cầu).</li><li><strong>I(B) Độc lập và khách quan:</strong> không đề nghị, gạ gẫm hay nhận quà tặng, lợi ích, thù lao có thể làm tổn hại tính độc lập. Phân biệt quan trọng: <em>quà nhỏ từ khách hàng</em> (tri ân kết quả trong quá khứ) có thể nhận kèm khai báo với công ty; quà/chiêu đãi xa hoa từ bên muốn tác động hành vi tương lai — công ty phát hành muốn được viết báo cáo đẹp, broker săn lệnh — phải từ chối. Thực hành tốt hay được hỏi: tự trả chi phí đi thăm doanh nghiệp khi khả thi (dùng phương tiện thương mại thay vì máy bay riêng của công ty được phân tích); nghiên cứu do công ty phát hành trả tiền chỉ nhận <em>phí cố định, công bố trong báo cáo</em>, không phụ thuộc kết luận; bảo vệ analyst khỏi áp lực từ bộ phận investment banking hoặc doanh nghiệp dọa cắt quyền tiếp cận; không nhận suất IPO \"hot\" cho tài khoản cá nhân.</li></ul>"
    },
    {
     "h": "I(C) Misrepresentation, I(D) Misconduct & I(E) Competence",
     "en": "<ul><li><strong>I(C) Misrepresentation:</strong> no knowingly false statements or misleading omissions concerning analysis, recommendations, qualifications, services, or performance. Classic violations: <em>guaranteeing</em> returns on risky products (\"this fund will return at least 8%\") — permissible only for products with genuinely guaranteed structures (e.g., insured deposits); overstating credentials; and <strong>plagiarism</strong> — presenting others’ work as your own. You may use data from <em>recognized financial and statistical reporting services</em> (e.g., index providers) without attribution; everything else — research reports, models, charts, even ideas summarized from another analyst — needs a citation. Applies to all media, including social media. Keep copies of source materials.</li><li><strong>I(D) Misconduct:</strong> no dishonesty, fraud, or deceit — and no conduct reflecting adversely on professional reputation, integrity, or competence. The dividing line: dishonesty is the trigger. Personal bankruptcy without fraud, or an isolated lapse in private life, is generally not a violation; fraud of any kind, or a pattern of behavior (e.g., repeated intoxication at work) that calls professional competence into question, is.</li><li><strong>I(E) Competence:</strong> the newest professionalism requirement — act only within your professional competence, and maintain and improve it. Practical meaning: decline (or get help and supervision on) work you are not qualified to perform, keep skills current through continuing education, and be candid about the limits of your expertise. An analyst who accepts a complex derivatives-valuation mandate she does not understand, without assistance, breaches this standard even with good intentions.</li></ul>",
     "vi": "<ul><li><strong>I(C) Không trình bày sai lệch:</strong> không đưa thông tin sai hoặc bỏ sót gây hiểu lầm về phân tích, khuyến nghị, bằng cấp, dịch vụ, hiệu quả đầu tư. Vi phạm kinh điển: <em>cam kết</em> lợi nhuận cho sản phẩm có rủi ro (\"quỹ này chắc chắn lãi tối thiểu 8%\") — chỉ được phép với sản phẩm có cấu trúc bảo đảm thật (như tiền gửi được bảo hiểm); thổi phồng bằng cấp; và <strong>đạo văn</strong> — trình bày công trình của người khác như của mình. Được dùng dữ liệu từ <em>các dịch vụ thống kê tài chính được công nhận</em> (nhà cung cấp chỉ số...) mà không cần trích nguồn; mọi thứ khác — báo cáo, mô hình, biểu đồ, kể cả ý tưởng tóm tắt từ analyst khác — đều phải dẫn nguồn. Áp dụng cho mọi kênh, gồm mạng xã hội. Lưu bản sao tài liệu nguồn.</li><li><strong>I(D) Không hành vi sai trái:</strong> không gian dối, lừa đảo — không hành vi làm tổn hại uy tín, sự chính trực, năng lực nghề nghiệp. Ranh giới: yếu tố gian dối là điểm kích hoạt. Phá sản cá nhân không có gian lận, hay một sai sót đơn lẻ trong đời tư, thường không vi phạm; còn gian lận dưới mọi hình thức, hoặc hành vi lặp lại (say xỉn nhiều lần khi làm việc) khiến năng lực nghề nghiệp bị nghi ngờ, là vi phạm.</li><li><strong>I(E) Năng lực chuyên môn:</strong> yêu cầu mới nhất của nhóm Professionalism — chỉ hành nghề trong phạm vi năng lực của mình, đồng thời duy trì và nâng cao năng lực đó. Nghĩa thực tế: từ chối (hoặc tìm hỗ trợ, giám sát khi nhận) công việc vượt khả năng, cập nhật kiến thức qua đào tạo liên tục, thẳng thắn về giới hạn chuyên môn. Analyst nhận định giá phái sinh phức tạp mình không hiểu, không nhờ hỗ trợ, là vi phạm dù thiện chí.</li></ul>"
    },
    {
     "h": "Standard II — Integrity of Capital Markets",
     "en": "<ul><li><strong>II(A) Material Nonpublic Information (MNPI):</strong> members who possess information that is both <em>material</em> (would affect price / a reasonable investor’s decision) and <em>nonpublic</em> must not act or cause others to act on it. The <strong>mosaic theory</strong> is the key exception: conclusions built from public information plus <em>nonmaterial</em> nonpublic information are legitimate — even if the conclusion itself would be material.</li><li><strong>II(B) Market Manipulation:</strong> no transaction-based manipulation (e.g., trades to create artificial volume or price — \"painting the tape\") and no information-based manipulation (spreading false rumors, pump-and-dump). Intent matters: legitimate trading strategies that exploit inefficiencies are not manipulation.</li></ul>",
     "vi": "<ul><li><strong>II(A) Thông tin trọng yếu chưa công bố (MNPI):</strong> ai nắm thông tin vừa <em>trọng yếu</em> (ảnh hưởng giá / quyết định của nhà đầu tư hợp lý) vừa <em>chưa công khai</em> thì không được giao dịch hoặc xúi giục người khác giao dịch dựa trên đó. <strong>Mosaic theory</strong> là ngoại lệ quan trọng: kết luận được ghép từ thông tin công khai + thông tin chưa công khai nhưng <em>không trọng yếu</em> là hợp pháp — kể cả khi bản thân kết luận đó mang tính trọng yếu.</li><li><strong>II(B) Thao túng thị trường:</strong> cấm thao túng bằng giao dịch (tạo khối lượng/giá ảo — \"painting the tape\") và thao túng bằng thông tin (tung tin đồn thất thiệt, pump-and-dump). Ý định là mấu chốt: chiến lược giao dịch hợp pháp khai thác sự kém hiệu quả của thị trường không phải thao túng.</li></ul>"
    },
    {
     "h": "Standard III — Duties to Clients",
     "en": "<ul><li><strong>III(A) Loyalty, Prudence, and Care:</strong> client interests come first — before the employer’s and your own. Soft dollars (brokerage paid with client commissions) must benefit the <em>client</em>. Proxies should be voted in clients’ interests.</li><li><strong>III(B) Fair Dealing:</strong> deal fairly and objectively with all clients when making recommendations or taking investment action. \"Fairly\" does not mean \"equally\" — premium service tiers are fine if disclosed and available to all who pay; but all clients must receive material recommendation changes before (or at the same time as) any trades.</li><li><strong>III(C) Suitability:</strong> in an advisory relationship, make a reasonable inquiry into the client’s investment experience, risk/return objectives, and constraints — documented in an <strong>Investment Policy Statement (IPS)</strong>, reviewed at least annually. Judge suitability in a total-portfolio context, not security by security.</li><li><strong>III(D) Performance Presentation:</strong> fair, accurate, and complete; no cherry-picking accounts or periods. GIPS compliance is recommended, not required.</li><li><strong>III(E) Preservation of Confidentiality:</strong> keep client information confidential unless the information concerns illegal activity, disclosure is required by law, or the client permits it. Cooperation with CFA Institute Professional Conduct investigations is allowed.</li></ul>",
     "vi": "<ul><li><strong>III(A) Trung thành, Thận trọng, Cẩn trọng:</strong> lợi ích khách hàng đứng trước lợi ích công ty và bản thân. Soft dollars (dịch vụ môi giới trả bằng hoa hồng của khách hàng) phải phục vụ lợi ích <em>khách hàng</em>. Quyền biểu quyết (proxy) phải bỏ phiếu vì lợi ích khách hàng.</li><li><strong>III(B) Đối xử công bằng:</strong> công bằng và khách quan với mọi khách hàng khi khuyến nghị hoặc giao dịch. \"Công bằng\" không có nghĩa \"bằng nhau\" — gói dịch vụ cao cấp được phép nếu công bố và ai trả phí đều mua được; nhưng mọi khách hàng phải nhận thay đổi khuyến nghị trọng yếu trước (hoặc cùng lúc) với việc thực hiện giao dịch.</li><li><strong>III(C) Tính phù hợp:</strong> trong quan hệ tư vấn, phải tìm hiểu kinh nghiệm đầu tư, mục tiêu rủi ro/lợi nhuận và các ràng buộc của khách — ghi trong <strong>IPS</strong>, rà soát tối thiểu hằng năm. Đánh giá suitability theo tổng thể danh mục, không theo từng chứng khoán riêng lẻ.</li><li><strong>III(D) Trình bày kết quả đầu tư:</strong> công bằng, chính xác, đầy đủ; không \"cherry-pick\" tài khoản hay giai đoạn đẹp. Tuân thủ GIPS là khuyến nghị, không bắt buộc.</li><li><strong>III(E) Bảo mật:</strong> giữ bí mật thông tin khách hàng trừ khi liên quan hoạt động phạm pháp, luật yêu cầu công bố, hoặc khách hàng cho phép. Được phép hợp tác với điều tra của CFA Institute Professional Conduct.</li></ul>"
    },
    {
     "h": "Standard IV — Duties to Employers",
     "en": "<ul><li><strong>IV(A) Loyalty:</strong> do not harm the employer. While employed, you may <em>prepare</em> to leave (arrange to go independent) but may not take client lists, models, or solicit clients before resigning. Skills and experience in your head are yours to keep.</li><li><strong>IV(B) Additional Compensation Arrangements:</strong> no outside compensation that competes with the employer’s interest unless <em>written consent from all parties</em> (employer and the outside party) is obtained.</li><li><strong>IV(C) Responsibilities of Supervisors:</strong> supervisors must take steps to prevent and detect violations. If compliance systems are inadequate, decline supervisory responsibility (in writing) until they are fixed.</li></ul>",
     "vi": "<ul><li><strong>IV(A) Trung thành với chủ lao động:</strong> không gây hại cho công ty. Khi còn làm việc, bạn được <em>chuẩn bị</em> nghỉ (sắp xếp ra làm riêng) nhưng không được mang danh sách khách hàng, mô hình, hay lôi kéo khách trước khi nộp đơn nghỉ. Kỹ năng và kinh nghiệm trong đầu là của bạn.</li><li><strong>IV(B) Thu nhập bổ sung:</strong> không nhận thù lao bên ngoài cạnh tranh với lợi ích công ty trừ khi có <em>chấp thuận bằng văn bản của tất cả các bên</em>.</li><li><strong>IV(C) Trách nhiệm người giám sát:</strong> phải có biện pháp ngăn ngừa và phát hiện vi phạm. Nếu hệ thống compliance yếu, phải từ chối nhận trách nhiệm giám sát (bằng văn bản) cho tới khi được khắc phục.</li></ul>"
    },
    {
     "h": "Standards V, VI, VII — highlights",
     "en": "<ul><li><strong>V(A) Diligence and Reasonable Basis:</strong> every recommendation needs a reasonable and adequate basis supported by research. Using third-party research is fine if you assess its rigor. Group research: you need not agree with the conclusion, but if the process was sound you may keep your name on the report.</li><li><strong>V(B) Communication with Clients:</strong> distinguish <em>fact</em> from <em>opinion</em>; disclose the basic format of the investment process and material changes to it; disclose significant limitations and risks.</li><li><strong>V(C) Record Retention:</strong> maintain records supporting analysis (CFA Institute recommends ≥7 years if no regulatory rule). Records belong to the <em>firm</em>, not the analyst.</li><li><strong>VI(A) Disclosure of Conflicts:</strong> disclose all matters that could impair independence — prominently and in plain language (e.g., board seats, stock ownership, referral relationships).</li><li><strong>VI(B) Priority of Transactions:</strong> client and employer transactions come before personal trades. Family accounts that are regular fee-paying client accounts must be treated like any other client — not disadvantaged.</li><li><strong>VI(C) Referral Fees:</strong> disclose to employer and clients any compensation received for referrals <em>before</em> entering the agreement.</li><li><strong>VII(A) Conduct in CFA Program:</strong> no cheating, no sharing exam content (even the general topic areas tested), no using the exam for personal gain.</li><li><strong>VII(B) Reference to CFA Institute/Designation:</strong> the CFA designation is used as an adjective, never a noun (\"She is a CFA charterholder\", not \"She is a CFA\"). No claims of superior performance from holding the charter. Candidates may state they are \"a Level II candidate in the CFA Program\" only if registered for the next exam.</li></ul>",
     "vi": "<ul><li><strong>V(A) Cần mẫn &amp; Cơ sở hợp lý:</strong> mọi khuyến nghị cần cơ sở nghiên cứu hợp lý, đầy đủ. Dùng nghiên cứu bên thứ ba được, nếu đã đánh giá độ tin cậy. Nghiên cứu nhóm: không cần đồng ý với kết luận, nhưng nếu quy trình chặt chẽ thì vẫn có thể để tên trên báo cáo.</li><li><strong>V(B) Trao đổi với khách hàng:</strong> phân biệt <em>sự kiện</em> và <em>quan điểm</em>; công bố quy trình đầu tư cơ bản và các thay đổi trọng yếu; nêu rõ hạn chế và rủi ro đáng kể.</li><li><strong>V(C) Lưu trữ hồ sơ:</strong> lưu tài liệu chứng minh phân tích (CFA Institute khuyến nghị ≥7 năm nếu không có quy định khác). Hồ sơ thuộc về <em>công ty</em>, không thuộc về analyst.</li><li><strong>VI(A) Công bố xung đột lợi ích:</strong> công bố rõ ràng, dễ hiểu mọi vấn đề có thể ảnh hưởng tính độc lập (ghế HĐQT, sở hữu cổ phiếu, quan hệ giới thiệu…).</li><li><strong>VI(B) Ưu tiên giao dịch:</strong> giao dịch cho khách hàng và công ty trước giao dịch cá nhân. Tài khoản người thân nếu là tài khoản khách hàng trả phí bình thường thì phải đối xử như mọi khách hàng khác — không được thiệt thòi.</li><li><strong>VI(C) Phí giới thiệu:</strong> công bố cho công ty và khách hàng mọi khoản thù lao giới thiệu <em>trước khi</em> ký thỏa thuận.</li><li><strong>VII(A) Ứng xử trong kỳ thi CFA:</strong> không gian lận, không chia sẻ nội dung đề (kể cả chủ đề chung được hỏi), không lợi dụng kỳ thi cho lợi ích cá nhân.</li><li><strong>VII(B) Sử dụng danh xưng CFA:</strong> CFA dùng như tính từ, không phải danh từ (\"She is a CFA charterholder\", không nói \"She is a CFA\"). Không tuyên bố charter đem lại kết quả đầu tư vượt trội. Ứng viên chỉ được nói \"Level II candidate in the CFA Program\" nếu đã đăng ký kỳ thi kế tiếp.</li></ul>"
    }
   ]
  },
  {
   "title": "Introduction to the Global Investment Performance Standards (GIPS)",
   "sections": [
    {
     "h": "GIPS — Global Investment Performance Standards (overview)",
     "en": "<p>GIPS are voluntary, ethical standards for calculating and presenting investment performance so that results are comparable across firms globally. Key ideas:</p><ul><li>Compliance is claimed <strong>firm-wide</strong> — a firm cannot claim GIPS compliance for only some products, and there is no partial compliance.</li><li>All actual, fee-paying, discretionary portfolios must be assigned to at least one <strong>composite</strong> (a group of portfolios with a similar strategy) — this prevents cherry-picking the best accounts.</li><li>Verification by an independent third party is <em>recommended</em>, not required, and applies to the whole firm.</li></ul>",
     "vi": "<p>GIPS là bộ chuẩn mực đạo đức tự nguyện về cách tính và trình bày kết quả đầu tư, giúp so sánh kết quả giữa các công ty trên toàn cầu. Ý chính:</p><ul><li>Tuyên bố tuân thủ ở cấp <strong>toàn công ty</strong> — không được tuyên bố tuân thủ cho một vài sản phẩm, không có \"tuân thủ một phần\".</li><li>Mọi danh mục thực, trả phí, có toàn quyền quản lý (discretionary) phải được xếp vào ít nhất một <strong>composite</strong> (nhóm danh mục cùng chiến lược) — ngăn việc chỉ khoe các tài khoản đẹp nhất.</li><li>Kiểm chứng độc lập (verification) là <em>khuyến nghị</em>, không bắt buộc, và áp dụng cho toàn công ty.</li></ul>"
    },
    {
     "h": "GIPS fundamentals you must know for the exam",
     "en": "<ul><li><strong>Who can claim compliance:</strong> only an investment management <em>firm</em> that actually manages assets — never an individual, a consultant, or a software vendor. There is no such thing as partial, \"in progress\", or product-level compliance, and the compliance statement wording is prescribed.</li><li><strong>Why GIPS exists:</strong> without a standard, firms could market their best account, their best time period, or model results as \"performance\". GIPS makes numbers comparable across firms and countries and ensures <em>fair representation and full disclosure</em>.</li><li><strong>Composites:</strong> every actual, fee-paying, discretionary portfolio must belong to at least one composite defined by investment strategy or mandate, with criteria set <em>ex ante</em> (before results are known). Non-fee-paying or non-discretionary portfolios may be excluded.</li><li><strong>Track record:</strong> a firm must initially present at least <strong>5 years</strong> of GIPS-compliant performance (or since inception if younger), then build to a minimum of <strong>10 years</strong> by adding a year at a time.</li><li><strong>Verification:</strong> performed by an independent third party on a <em>firm-wide</em> basis — it tests the firm’s composite construction and processes, not the accuracy of any specific presentation. Verification is recommended, voluntary, and must not be claimed for a single composite.</li></ul>",
     "vi": "<ul><li><strong>Ai được tuyên bố tuân thủ:</strong> chỉ <em>công ty</em> quản lý đầu tư thực sự quản lý tài sản — không bao giờ là cá nhân, nhà tư vấn hay nhà cung cấp phần mềm. Không tồn tại tuân thủ \"một phần\", \"đang hoàn thiện\" hay theo từng sản phẩm; câu tuyên bố tuân thủ có mẫu chuẩn bắt buộc.</li><li><strong>Vì sao cần GIPS:</strong> không có chuẩn chung, công ty có thể quảng bá tài khoản đẹp nhất, giai đoạn đẹp nhất, hoặc kết quả mô phỏng như \"thành tích thật\". GIPS làm cho con số so sánh được giữa các công ty, các quốc gia, bảo đảm <em>trình bày trung thực và công bố đầy đủ</em>.</li><li><strong>Composite:</strong> mọi danh mục thật, có trả phí, được ủy quyền đầu tư phải thuộc ít nhất một composite định nghĩa theo chiến lược, với tiêu chí đặt <em>trước</em> khi biết kết quả. Danh mục không trả phí hoặc không được ủy quyền có thể loại ra.</li><li><strong>Chuỗi thành tích:</strong> ban đầu công ty phải trình bày tối thiểu <strong>5 năm</strong> hiệu quả tuân thủ GIPS (hoặc từ khi thành lập nếu chưa đủ 5 năm), sau đó bổ sung từng năm cho đến tối thiểu <strong>10 năm</strong>.</li><li><strong>Verification:</strong> do bên thứ ba độc lập thực hiện trên phạm vi <em>toàn công ty</em> — kiểm tra quy trình xây composite, không bảo chứng độ chính xác của từng bản trình bày cụ thể. Verification được khuyến nghị, tự nguyện, và không được tuyên bố cho riêng một composite.</li></ul>"
    }
   ]
  },
  {
   "title": "Ethics Application",
   "sections": [
    {
     "h": "How to attack an ethics vignette",
     "en": "<p>Ethics Application is a <em>skills</em> reading: it tests whether you can apply the Standards to integrated, realistic scenarios. A reliable routine:</p><ol><li><strong>Read the question stem first.</strong> \"Most likely violated\" and \"least likely violated\" flip the task — underline which one you are answering.</li><li><strong>Identify the actors and relationships.</strong> Member or candidate? Supervisor? Advisory relationship (suitability applies) or brokerage/execution-only (it may not)? Who is the client — the fund, or the investors in it?</li><li><strong>Isolate each action and match it to a Standard.</strong> Vignettes usually bundle one violation with two defensible actions — judge each action separately.</li><li><strong>Distinguish \"required\" from \"recommended\".</strong> Only requirements are violations; skipping best practice (e.g., declining all gifts outright) is not.</li><li><strong>Check the timeline.</strong> Before or after resignation? Before or after the information became public? Before or after written consent?</li></ol><p><strong>Recurring traps:</strong> \"it was legal\" never settles the ethical question; disclosure cures <em>conflicts of interest</em> (VI) but does not cure a compromised independence (I(B)) or unfair dealing (III(B)); information \"everyone in the industry knows\" is not necessarily public; a modest gift from a <em>client for past performance</em> (disclose, may accept) differs from a gift from an <em>issuer courting coverage</em> (refuse); <em>preparing</em> to leave an employer is fine — <em>soliciting</em> clients or taking records before resignation is not; and family accounts that are ordinary fee-paying clients must not be disadvantaged.</p>",
     "vi": "<p>Ethics Application là reading về <em>kỹ năng</em>: kiểm tra khả năng áp dụng Standards vào tình huống tổng hợp, sát thực tế. Quy trình đáng tin cậy:</p><ol><li><strong>Đọc câu hỏi trước khi đọc tình huống.</strong> \"Most likely violated\" và \"least likely violated\" đảo ngược nhiệm vụ — gạch chân xem đang được hỏi chiều nào.</li><li><strong>Xác định nhân vật và quan hệ.</strong> Member hay candidate? Có vai trò giám sát không? Quan hệ tư vấn (suitability áp dụng) hay chỉ thực hiện lệnh (có thể không)? Khách hàng là ai — quỹ, hay nhà đầu tư trong quỹ?</li><li><strong>Tách từng hành động và khớp với từng Standard.</strong> Đề thường trộn một vi phạm với hai hành động hợp lệ — đánh giá riêng từng hành động.</li><li><strong>Phân biệt \"bắt buộc\" và \"khuyến nghị\".</strong> Chỉ vi phạm điều bắt buộc mới là violation; không làm theo best practice không phải vi phạm.</li><li><strong>Soi mốc thời gian.</strong> Trước hay sau khi nghỉ việc? Trước hay sau khi thông tin công khai? Trước hay sau khi có văn bản chấp thuận?</li></ol><p><strong>Các bẫy lặp lại:</strong> \"hợp pháp\" không bao giờ kết thúc câu hỏi đạo đức; công bố (disclosure) chữa được <em>xung đột lợi ích</em> (VI) nhưng không chữa được sự mất độc lập (I(B)) hay đối xử bất công (III(B)); thông tin \"cả ngành đều biết\" chưa chắc là công khai; quà nhỏ từ <em>khách hàng tri ân quá khứ</em> (khai báo, có thể nhận) khác quà từ <em>issuer muốn được viết bài đẹp</em> (phải từ chối); <em>chuẩn bị</em> nghỉ việc thì được — <em>lôi kéo</em> khách hoặc mang hồ sơ trước khi nộp đơn thì không; tài khoản người thân là khách trả phí bình thường thì không được đối xử thiệt thòi.</p>"
    },
    {
     "h": "A worked mini-case",
     "en": "<p><em>Scenario:</em> Lan, a CFA charterholder at an asset manager, covers TechCo. TechCo’s CFO invites her to a product launch, paying her business-class flights and a resort stay. At the event, a supplier mentions (casually, and non-materially) that component orders \"look busy this quarter.\" Combining this with public shipment data, Lan concludes revenue will beat consensus, upgrades her rating, emails the new rating to her 20 largest clients, and posts it to all clients the next morning. She also buys the stock for her own account that afternoon.</em></p><p><strong>Work each action:</strong></p><ul><li>Accepting issuer-paid luxury travel → <strong>violates I(B)</strong> Independence and Objectivity (should pay her own way or take commercial transport; disclosure does not cure it).</li><li>Supplier detail + public data → conclusion is legitimate <strong>mosaic theory</strong>; no II(A) violation.</li><li>Emailing the upgrade to the largest clients first, others next day → <strong>violates III(B) Fair Dealing</strong>: material recommendation changes must reach clients fairly, not tiered by size.</li><li>Buying for her own account the same afternoon — before all clients have had the chance to act → <strong>violates VI(B) Priority of Transactions</strong>.</li></ul><p>One scenario, three violations, one defensible judgment call — that density is typical of exam vignettes. Now use the three Practice Sets below the vocabulary table as your Ethics Application drill.</p>",
     "vi": "<p><em>Tình huống:</em> Lan, CFA charterholder tại một công ty quản lý quỹ, phụ trách phân tích TechCo. CFO của TechCo mời cô dự lễ ra mắt sản phẩm, đài thọ vé thương gia và nghỉ resort. Tại sự kiện, một nhà cung cấp buột miệng (không trọng yếu) rằng đơn hàng linh kiện \"quý này có vẻ bận rộn\". Ghép với dữ liệu vận chuyển công khai, Lan kết luận doanh thu sẽ vượt dự báo, nâng khuyến nghị, email khuyến nghị mới cho 20 khách hàng lớn nhất, sáng hôm sau mới đăng cho toàn bộ khách. Chiều cùng ngày cô mua cổ phiếu cho tài khoản cá nhân.</em></p><p><strong>Phân tích từng hành động:</strong></p><ul><li>Nhận chuyến đi xa xỉ do issuer trả → <strong>vi phạm I(B)</strong> (phải tự trả chi phí; công bố không chữa được vi phạm này).</li><li>Chi tiết từ nhà cung cấp + dữ liệu công khai → kết luận hợp lệ theo <strong>mosaic theory</strong>; không vi phạm II(A).</li><li>Email khuyến nghị cho nhóm khách lớn trước, khách khác hôm sau → <strong>vi phạm III(B) Fair Dealing</strong>: thay đổi khuyến nghị trọng yếu phải đến với khách hàng một cách công bằng, không phân tầng theo quy mô.</li><li>Mua cho tài khoản cá nhân ngay chiều đó — trước khi mọi khách hàng có cơ hội hành động → <strong>vi phạm VI(B) Priority of Transactions</strong>.</li></ul><p>Một tình huống, ba vi phạm, một phán đoán hợp lệ — mật độ này rất giống đề thi thật. Hãy dùng 3 bộ Practice Sets bên dưới bảng từ vựng làm bài luyện cho Ethics Application.</p>"
    }
   ]
  }
 ],
 "vocab": [
  [
   "fiduciary duty",
   "A legal/ethical obligation to act in the best interest of another party (the client).",
   "nghĩa vụ ủy thác — hành động vì lợi ích tốt nhất của khách hàng"
  ],
  [
   "material nonpublic information (MNPI)",
   "Information not yet public that would affect a security’s price or an investor’s decision.",
   "thông tin trọng yếu chưa công bố"
  ],
  [
   "mosaic theory",
   "Combining public + nonmaterial nonpublic info to reach an investment conclusion — permitted.",
   "thuyết khảm — ghép thông tin hợp pháp để ra kết luận"
  ],
  [
   "front running",
   "Trading for oneself ahead of client orders to profit from the price impact.",
   "giao dịch chạy trước lệnh khách hàng"
  ],
  [
   "soft dollars",
   "Client brokerage commissions used to buy research/services — must benefit the client.",
   "hoa hồng mềm — hoa hồng của khách dùng mua dịch vụ nghiên cứu"
  ],
  [
   "plagiarism",
   "Using another’s work or ideas without attribution.",
   "đạo văn"
  ],
  [
   "composite",
   "A grouping of portfolios managed under a similar strategy (GIPS).",
   "nhóm danh mục cùng chiến lược (GIPS)"
  ],
  [
   "whistleblowing",
   "Reporting employer wrongdoing; allowed when protecting market integrity or clients.",
   "tố giác sai phạm nội bộ"
  ],
  [
   "pump and dump",
   "Spreading false positive information to inflate a price, then selling.",
   "bơm giá rồi xả hàng"
  ],
  [
   "dissociate",
   "To separate oneself from illegal or unethical activity (required by I(A)).",
   "tách mình khỏi hành vi vi phạm"
  ],
  [
   "situational influences",
   "External pressures — bonuses, loyalty, prestige, firm culture — that shape behavior more strongly than personal character",
   "Áp lực hoàn cảnh (thưởng, lòng trung thành, danh tiếng, văn hóa công ty) chi phối hành vi mạnh hơn cả tính cách cá nhân"
  ],
  [
   "ethical decision-making framework",
   "Identify → Consider → Decide &amp; Act → Reflect: a structure to slow thinking under pressure",
   "Khung ra quyết định đạo đức: Nhận diện → Cân nhắc → Quyết định &amp; hành động → Nhìn lại"
  ],
  [
   "Professional Conduct Program (PCP)",
   "CFA Institute’s process for investigating and disciplining violations of the Code and Standards",
   "Cơ chế của CFA Institute để điều tra và kỷ luật vi phạm Code and Standards"
  ],
  [
   "public censure",
   "A published reprimand — one of the PCP sanctions, along with suspension and revocation of the charter",
   "Khiển trách công khai — một mức kỷ luật của PCP, cùng với đình chỉ và thu hồi charter"
  ],
  [
   "Investment Policy Statement (IPS)",
   "Written statement of a client’s objectives and constraints; the benchmark for suitability",
   "Văn bản ghi mục tiêu và ràng buộc đầu tư của khách hàng; căn cứ đánh giá tính phù hợp"
  ],
  [
   "discretionary portfolio",
   "An account the manager trades on the client’s behalf without pre-approval of each transaction",
   "Danh mục nhà quản lý được toàn quyền giao dịch thay khách hàng, không cần duyệt từng lệnh"
  ],
  [
   "verification (GIPS)",
   "Voluntary firm-wide review of GIPS processes by an independent third party",
   "Rà soát tự nguyện, phạm vi toàn công ty, do bên thứ ba độc lập thực hiện đối với quy trình GIPS"
  ],
  [
   "ex ante",
   "Set in advance, before outcomes are known — how composite criteria must be defined",
   "Định trước khi biết kết quả — cách bắt buộc khi đặt tiêu chí composite"
  ]
 ],
 "quiz": [
  {
   "q": "An analyst combines public filings, industry data, and nonmaterial details gathered from conversations with a company’s suppliers to conclude the company will beat earnings estimates. She buys the stock. According to the Standards, she has:",
   "opts": [
    "violated Standard II(A) because her conclusion is material and nonpublic.",
    "not violated Standard II(A) because of the mosaic theory.",
    "violated Standard II(A) unless she first publishes her research."
   ],
   "ans": 1,
   "en": "B is correct. Under the mosaic theory, conclusions reached by combining public information with nonmaterial nonpublic information do not violate Standard II(A) — even if the conclusion itself would be material. There is no requirement to publish before trading on a mosaic-based conclusion.",
   "vi": "Đáp án B. Theo mosaic theory, kết luận được rút ra từ thông tin công khai + thông tin chưa công khai nhưng không trọng yếu thì không vi phạm Standard II(A) — kể cả khi bản thân kết luận là trọng yếu. Không có yêu cầu phải công bố nghiên cứu trước khi giao dịch."
  },
  {
   "q": "A portfolio manager resigns on Friday. The following Monday she contacts, from memory, several former clients whose contact details are publicly available, to solicit business for her new firm. She signed no non-compete agreement. She has most likely:",
   "opts": [
    "violated Standard IV(A) Loyalty by soliciting former clients.",
    "not violated the Standards.",
    "violated Standard III(E) Confidentiality."
   ],
   "ans": 1,
   "en": "B is correct. After employment ends (and absent a non-compete agreement), contacting former clients using public information or memory does not violate IV(A). A violation would occur if she solicited clients before resigning or took the employer’s client list/records.",
   "vi": "Đáp án B. Sau khi nghỉ việc (và không có thỏa thuận không cạnh tranh), việc liên hệ khách hàng cũ bằng thông tin công khai hoặc trí nhớ không vi phạm IV(A). Vi phạm chỉ xảy ra nếu cô ấy lôi kéo khách trước khi nghỉ hoặc mang theo danh sách/hồ sơ khách hàng của công ty."
  },
  {
   "q": "Which statement about the CFA designation is acceptable under Standard VII(B)?",
   "opts": [
    "\"As a CFA, I achieve better returns than non-charterholders.\"",
    "\"John Smith, CFA, passed all three exams on his first attempts.\"",
    "\"John Smith is a CFA.\""
   ],
   "ans": 1,
   "en": "B is correct. Stating a factual accomplishment (passing all three levels on first attempts) is allowed. A implies superior performance from the charter — prohibited. C uses \"CFA\" as a noun; the marks must be used as an adjective.",
   "vi": "Đáp án B. Nêu sự kiện có thật (đỗ cả 3 level ngay lần đầu) là được phép. Đáp án A ngụ ý charter đem lại kết quả vượt trội — bị cấm. Đáp án C dùng \"CFA\" như danh từ; danh xưng phải dùng như tính từ."
  },
  {
   "q": "A firm claims GIPS compliance. Which of the following is required?",
   "opts": [
    "Independent third-party verification of the performance record.",
    "Inclusion of all actual, fee-paying, discretionary portfolios in at least one composite.",
    "Compliance for its flagship equity product only."
   ],
   "ans": 1,
   "en": "B is correct. GIPS requires every actual, fee-paying, discretionary portfolio to be included in at least one composite so firms cannot cherry-pick. Verification is recommended but not required (A), and compliance must be firm-wide, never product-by-product (C).",
   "vi": "Đáp án B. GIPS yêu cầu mọi danh mục thực, trả phí, có toàn quyền quản lý phải nằm trong ít nhất một composite để tránh cherry-pick. Verification chỉ là khuyến nghị (A sai), và tuân thủ phải ở cấp toàn công ty, không theo từng sản phẩm (C sai)."
  },
  {
   "q": "The laws of Country X (where an analyst works) are stricter than the Code and Standards. The laws of her home Country Y are less strict. Under Standard I(A) she must follow:",
   "opts": [
    "the Code and Standards.",
    "the law of Country X.",
    "the law of Country Y."
   ],
   "ans": 1,
   "en": "B is correct. Standard I(A) requires compliance with the strictest applicable rule. Since the local law of Country X (where she works) is stricter than the Code and Standards, she must follow Country X law.",
   "vi": "Đáp án B. Standard I(A) yêu cầu tuân theo quy định nghiêm ngặt nhất áp dụng cho mình. Luật nước X (nơi làm việc) nghiêm hơn Code &amp; Standards nên phải theo luật nước X."
  }
 ]
});
window.CFA.extra["ethics"] = {
 "checks": [
  [
   {
    "q": "An adviser’s product recommendation is fully legal in his jurisdiction but driven mainly by the commission he receives. His conduct is best described as:",
    "opts": [
     "Ethical, because it is legal",
     "Possibly legal but unethical — law is only a minimum standard",
     "Ethical, because clients can refuse the product"
    ],
    "ans": 1,
    "en": "Legal compliance is a floor, not a ceiling. Conduct driven by self-interest at the client’s expense can violate ethical principles (and the Code) even where no law is broken.",
    "vi": "Hợp pháp chỉ là chuẩn tối thiểu. Hành vi vì tư lợi gây thiệt cho khách hàng vẫn phi đạo đức (và vi phạm Code) dù không phạm luật nào."
   },
   {
    "q": "A junior analyst inflates a forecast after her manager hints her bonus depends on \"supporting the deal team.\" The main driver of this ethical failure is:",
    "opts": [
     "Her weak personal character",
     "Situational influences — short-term rewards crowding out long-term considerations",
     "Lack of technical knowledge"
    ],
    "ans": 1,
    "en": "Bonuses, loyalty, and deal pressure are classic situational influences; research shows they routinely overpower personal character. The framework (Identify–Consider–Decide–Reflect) exists to counter exactly this.",
    "vi": "Tiền thưởng, lòng trung thành, áp lực thương vụ là các áp lực hoàn cảnh kinh điển — nghiên cứu cho thấy chúng thường thắng cả tính cách. Khung Identify–Consider–Decide–Reflect sinh ra để chống lại chính điều này."
   }
  ],
  [
   {
    "q": "The most severe sanction CFA Institute can impose on a member through the Professional Conduct Program is:",
    "opts": [
     "A monetary fine",
     "Revocation of the CFA charter",
     "A prison sentence"
    ],
    "ans": 1,
    "en": "CFA Institute is a private association: it can censure, suspend, or revoke the charter (and bar candidates from the program), but it cannot fine or imprison — those are powers of regulators and courts.",
    "vi": "CFA Institute là hiệp hội tư nhân: chỉ có thể khiển trách, đình chỉ, thu hồi charter (và cấm thí sinh dự thi), không thể phạt tiền hay bỏ tù — đó là quyền của cơ quan quản lý và tòa án."
   },
   {
    "q": "A member who rejects a sanction proposed by the Designated Officer will have the matter:",
    "opts": [
     "Automatically dropped",
     "Referred to a hearing panel of CFA Institute members",
     "Sent directly to securities regulators"
    ],
    "ans": 1,
    "en": "If a proposed sanction is rejected, a hearing panel of CFA Institute members reviews the case and decides. Cooperation with the PCP is mandatory throughout.",
    "vi": "Nếu đương sự không chấp nhận mức kỷ luật đề xuất, vụ việc chuyển lên hội đồng xét xử gồm các thành viên CFA Institute. Nghĩa vụ hợp tác với PCP là bắt buộc trong suốt quá trình."
   }
  ],
  [
   {
    "q": "A member works in a country whose securities law is stricter than the CFA Institute Code and Standards. Which rule set must she follow?",
    "opts": [
     "The Code and Standards, because CFA Institute rules always take priority",
     "The stricter of the two — here, the local law",
     "Whichever the employer’s compliance manual designates"
    ],
    "ans": 1,
    "en": "Standard I(A): members must comply with the strictest applicable rule — the more strict of local law or the Code and Standards.",
    "vi": "Chuẩn mực I(A): luôn tuân theo quy định nghiêm ngặt hơn giữa luật địa phương và Code and Standards. Ở đây luật địa phương chặt hơn nên phải theo luật địa phương."
   },
   {
    "q": "An analyst covering an airline is offered a free week-long resort stay by the airline’s CEO “to see our service quality first-hand.” Accepting is most likely a violation of:",
    "opts": [
     "Standard I(B) Independence and Objectivity",
     "Standard I(C) Misrepresentation",
     "No standard, if the analyst still writes an honest report"
    ],
    "ans": 0,
    "en": "Lavish gifts or travel from covered companies can compromise independence and objectivity — Standard I(B). Modest hospitality is acceptable; a free resort week is not. Best practice: pay your own travel.",
    "vi": "Quà tặng/chuyến đi xa xỉ từ công ty đang phân tích đe dọa tính độc lập và khách quan — vi phạm I(B). Quà nhỏ mang tính xã giao thì chấp nhận được, còn kỳ nghỉ miễn phí thì không."
   },
   {
    "q": "An analyst combines public earnings data with non-material details gathered from suppliers and concludes a company will beat guidance. Trading on this conclusion is:",
    "opts": [
     "A violation — the conclusion is material and nonpublic",
     "Permitted under the mosaic theory",
     "Permitted only after the company confirms the conclusion"
    ],
    "ans": 1,
    "en": "Mosaic theory: conclusions built from public information plus non-material nonpublic information may be acted on, even if the conclusion itself would be material.",
    "vi": "Thuyết khảm (mosaic theory): được phép hành động dựa trên kết luận rút ra từ thông tin công khai + thông tin không trọng yếu chưa công bố, dù kết luận cuối cùng mang tính trọng yếu."
   },
   {
    "q": "Under Standard III(B) Fair Dealing, when a firm changes a stock recommendation it must:",
    "opts": [
     "Notify all clients at exactly the same second",
     "Disseminate the change fairly so no client group is systematically advantaged",
     "Notify the largest fee-paying clients first"
    ],
    "ans": 1,
    "en": "Fair dealing requires fair (not necessarily simultaneous) dissemination. Premium service tiers are fine if disclosed and non-premium clients are not disadvantaged.",
    "vi": "III(B) yêu cầu công bố công bằng — không nhất thiết đồng thời tuyệt đối, nhưng không nhóm khách nào được ưu tiên một cách hệ thống. Gói dịch vụ cao cấp hợp lệ nếu được công bố rõ."
   },
   {
    "q": "A departing portfolio manager, without permission, emails herself the client contact list she built at her current employer. This most likely violates:",
    "opts": [
     "Standard IV(A) Loyalty to employer",
     "Nothing — she created the list herself",
     "Standard V(A) Diligence and Reasonable Basis"
    ],
    "ans": 0,
    "en": "Client lists and records belong to the employer. She may take general skills and knowledge, but not employer property — Standard IV(A).",
    "vi": "Danh sách khách hàng là tài sản của công ty. Nhân viên chỉ được mang theo kỹ năng và kiến thức chung, không được lấy tài sản của công ty — vi phạm IV(A)."
   },
   {
    "q": "Absent stricter regulation, CFA Institute recommends retaining records that support investment analysis for at least:",
    "opts": [
     "3 years",
     "7 years",
     "20 years"
    ],
    "ans": 1,
    "en": "Standard V(C): a seven-year minimum is recommended when no regulatory requirement applies — and the records belong to the firm, not the analyst.",
    "vi": "Standard V(C): khuyến nghị lưu trữ tối thiểu 7 năm nếu không có quy định pháp lý chặt hơn — và hồ sơ thuộc về công ty, không phải cá nhân analyst."
   }
  ],
  [
   {
    "q": "To claim GIPS compliance, a firm must:",
    "opts": [
     "Apply GIPS to selected flagship composites only",
     "Apply GIPS on a firm-wide basis",
     "Obtain CFA Institute certification first"
    ],
    "ans": 1,
    "en": "GIPS compliance is all-or-nothing at the firm level: it cannot be claimed for selected composites or products only. Verification is voluntary, not a certification requirement.",
    "vi": "GIPS phải áp dụng cho toàn bộ firm — không thể chỉ tuân thủ với vài composite chọn lọc. Việc verification là tự nguyện."
   },
   {
    "q": "GIPS verification is best described as:",
    "opts": [
     "Mandatory for all compliant firms",
     "A voluntary, firm-wide review by an independent third party",
     "A guarantee that every composite presentation is accurate"
    ],
    "ans": 1,
    "en": "Verification is recommended but voluntary, covers the entire firm, and tests processes — it does not certify the accuracy of any specific composite presentation.",
    "vi": "Verification chỉ là khuyến nghị (tự nguyện), thực hiện trên toàn công ty, kiểm tra quy trình — không bảo chứng độ chính xác của từng bản trình bày composite cụ thể."
   }
  ],
  [
   {
    "q": "A client, delighted with last year’s performance, sends her portfolio manager two tickets to a concert. The manager discloses the gift to his employer and accepts. He has:",
    "opts": [
     "Violated Standard I(B) — all gifts must be refused",
     "Not violated the Standards — a modest client gift for past service may be accepted with disclosure",
     "Violated Standard IV(B) — written consent from all parties was required"
    ],
    "ans": 1,
    "en": "Gifts from clients rewarding past performance are distinguished from gifts meant to influence future conduct: disclose to the employer and acceptance is permitted. IV(B) written consent applies to ongoing compensation arrangements, not a one-off token gift.",
    "vi": "Quà từ khách hàng tri ân kết quả quá khứ khác với quà nhằm tác động hành vi tương lai: khai báo với công ty và được phép nhận. IV(B) (văn bản chấp thuận) áp dụng cho thỏa thuận thù lao liên tục, không phải món quà tri ân đơn lẻ."
   },
   {
    "q": "Which statement by a Level II candidate is LEAST likely a violation of Standard VII(B)?",
    "opts": [
     "\"As a CFA candidate, my forecasts will outperform the market.\"",
     "\"Completing Level I sharpened my financial analysis skills.\"",
     "\"I am a CFA Level II.\" (on a business card)"
    ],
    "ans": 1,
    "en": "Factual or opinion statements about the program’s benefits are fine. Claiming superior performance from candidacy violates VII(B); \"CFA Level II\" as a partial designation on a business card also violates it — the correct phrasing is \"Level II candidate in the CFA Program.\"",
    "vi": "Phát biểu mang tính sự thật/cảm nhận về lợi ích của chương trình là hợp lệ. Tuyên bố sẽ đạt kết quả vượt trội nhờ là candidate vi phạm VII(B); in \"CFA Level II\" như một danh hiệu trên danh thiếp cũng vi phạm — cách viết đúng là \"Level II candidate in the CFA Program\"."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "A manager directs client trades through a broker who provides research that benefits only the manager’s personal accounts. This most likely violates:",
    "opts": [
     "Standard III(A) Loyalty, Prudence, and Care",
     "Standard IV(C) Responsibilities of Supervisors",
     "Standard II(A) Material Nonpublic Information"
    ],
    "ans": 0,
    "en": "Soft-dollar (brokerage) benefits belong to the client. Using client brokerage for benefits that do not help those clients breaches the duty of loyalty, prudence and care.",
    "vi": "Hoa hồng môi giới là tài sản của khách hàng. Dùng giao dịch của khách để đổi lấy lợi ích không phục vụ chính khách hàng đó là vi phạm nghĩa vụ trung thành III(A)."
   },
   {
    "q": "Before entering an agreement to receive a fee for referring clients to an external tax adviser, a member must:",
    "opts": [
     "Disclose the arrangement to employers and affected clients before or when the referral is made",
     "Simply ensure the fee is reasonable",
     "Report the arrangement to CFA Institute"
    ],
    "ans": 0,
    "en": "Standard VI(C) Referral Fees: disclose the nature and value of referral compensation to employers and clients before entering the arrangement so they can assess any bias.",
    "vi": "VI(C): phải công bố bản chất và giá trị của phí giới thiệu cho công ty và khách hàng trước khi thỏa thuận, để họ đánh giá được mức độ thiên lệch tiềm ẩn."
   },
   {
    "q": "A marketing brochure states: “Our fund returned 18% annually over the past 3 years, so investors can expect similar returns going forward.” The statement most likely violates:",
    "opts": [
     "Standard III(D) Performance Presentation",
     "Standard I(C) Misrepresentation",
     "Both — misstating expected performance misrepresents and improperly presents performance"
    ],
    "ans": 2,
    "en": "Guaranteeing or implying that past performance will repeat both misrepresents (I(C)) and presents performance improperly (III(D)). Past results must not be projected as expectations.",
    "vi": "Cam kết hoặc ngụ ý lợi nhuận quá khứ sẽ lặp lại vừa là misrepresentation (I(C)) vừa trình bày hiệu quả sai lệch (III(D))."
   },
   {
    "q": "A client’s spouse dies, significantly changing the family’s liquidity needs. Under Standard III(C) Suitability, the adviser should first:",
    "opts": [
     "Rebalance immediately to a conservative allocation",
     "Update the client’s IPS and reassess suitability before changing the portfolio",
     "Wait for the annual review"
    ],
    "ans": 1,
    "en": "Material changes in circumstances require a prompt IPS update; suitability is judged against the updated IPS, not against a fixed calendar or a reflexive trade.",
    "vi": "Khi hoàn cảnh khách hàng thay đổi trọng yếu, phải cập nhật IPS ngay và đánh giá lại tính phù hợp trước khi điều chỉnh danh mục — không chờ kỳ review định kỳ."
   },
   {
    "q": "An analyst copies a well-known ratings agency’s recovery-rate table into his report, citing “industry data” without naming the source. He also uses S&P 500 return statistics without attribution. Which is a violation?",
    "opts": [
     "Both uses",
     "Only the ratings table — recognized statistical reporting services need no attribution",
     "Neither, because both are public"
    ],
    "ans": 1,
    "en": "Standard I(C): plagiarism rules exempt recognized financial and statistical reporting services (like index return data). The ratings agency’s proprietary table must be attributed.",
    "vi": "I(C): số liệu từ các dịch vụ thống kê được công nhận rộng rãi (như dữ liệu chỉ số) không cần trích nguồn, nhưng bảng phân tích riêng của tổ chức xếp hạng thì bắt buộc phải ghi nguồn."
   },
   {
    "q": "Under GIPS, a composite must include:",
    "opts": [
     "All fee-paying discretionary portfolios managed to a similar strategy",
     "Only portfolios above a minimum size the firm selects retroactively",
     "The firm’s best-performing representative accounts"
    ],
    "ans": 0,
    "en": "Composites must contain all actual fee-paying discretionary portfolios managed to the same strategy — preventing cherry-picking. Criteria must be set ex ante, not retroactively.",
    "vi": "Composite phải gồm tất cả danh mục trả phí, được ủy quyền, cùng chiến lược — để tránh chọn lọc kết quả đẹp. Tiêu chí phải định trước, không được đặt hồi tố."
   },
   {
    "q": "Facing pressure to approve a friend’s marginal loan application, a member applying the ethical decision-making framework should FIRST:",
    "opts": [
     "Decide quickly to avoid overthinking",
     "Identify the facts, the duties owed, and her own conflicts of interest",
     "Reflect on the outcome"
    ],
    "ans": 1,
    "en": "The framework runs Identify → Consider → Decide and Act → Reflect. Identification of facts, stakeholders, duties, and personal conflicts always comes first — skipping it is how situational pressure wins.",
    "vi": "Khung chạy theo trình tự Identify → Consider → Decide → Reflect. Bước đầu luôn là nhận diện sự kiện, các bên, nghĩa vụ và xung đột lợi ích của chính mình — bỏ qua bước này là lúc áp lực hoàn cảnh chiến thắng."
   },
   {
    "q": "A candidate fails to disclose on his Professional Conduct Statement that a regulator opened an investigation into his conduct. He has most likely violated:",
    "opts": [
     "Nothing until the investigation concludes",
     "His duty to self-disclose and cooperate with the Professional Conduct Program",
     "Standard III(E) Confidentiality"
    ],
    "ans": 1,
    "en": "Members and candidates must disclose complaints, litigation, and regulatory investigations on the annual Professional Conduct Statement and must cooperate with PCP inquiries — regardless of how the underlying matter ends.",
    "vi": "Thành viên/thí sinh phải khai các khiếu nại, kiện tụng, cuộc điều tra pháp lý trên Professional Conduct Statement hằng năm và phải hợp tác với PCP — bất kể vụ việc gốc kết thúc ra sao."
   }
  ],
  [
   {
    "q": "A trader posts anonymous online rumors that a small-cap company is under regulatory investigation, then profits when the price falls. This violates:",
    "opts": [
     "Standard II(B) Market Manipulation",
     "Standard II(A) Material Nonpublic Information",
     "Standard VI(B) Priority of Transactions"
    ],
    "ans": 0,
    "en": "Spreading false information to move prices is information-based market manipulation under Standard II(B).",
    "vi": "Tung tin đồn sai lệch để tác động giá là thao túng thị trường dựa trên thông tin — vi phạm II(B)."
   },
   {
    "q": "A portfolio manager is offered a performance bonus directly from one client, paid outside her employer’s compensation plan. To comply she must obtain:",
    "opts": [
     "Verbal approval from the client only",
     "Written consent from all parties involved, including her employer",
     "No consent — client bonuses are always permitted"
    ],
    "ans": 1,
    "en": "Standard IV(B) Additional Compensation Arrangements: written consent from all parties (especially the employer) is required before accepting outside compensation that could create conflicts.",
    "vi": "IV(B): phải có văn bản đồng ý của tất cả các bên — đặc biệt là công ty — trước khi nhận thù lao ngoài, vì nó có thể tạo xung đột lợi ích."
   },
   {
    "q": "A research note says: “The stock will rise 30% next year as margins recover.” The primary problem under Standard V(B) is:",
    "opts": [
     "Price targets are prohibited",
     "Opinion is stated as fact without distinguishing the two",
     "The note lacks a Vietnamese translation"
    ],
    "ans": 1,
    "en": "Standard V(B) requires communications to distinguish fact from opinion. Forecasts are opinions and must be framed as such, with key assumptions disclosed.",
    "vi": "V(B) yêu cầu tách bạch sự kiện và quan điểm. Dự báo là quan điểm, phải trình bày đúng bản chất kèm các giả định chính."
   },
   {
    "q": "After sitting for a CFA exam, a candidate posts on a forum which formulas “definitely appeared” on the test. This violates:",
    "opts": [
     "Standard VII(A) Conduct in the CFA Program",
     "Nothing after the exam window closes",
     "Standard I(D) Misconduct only"
    ],
    "ans": 0,
    "en": "Disclosing confidential exam content — including which topics or formulas appeared — violates Standard VII(A), regardless of timing.",
    "vi": "Tiết lộ nội dung đề thi (kể cả chủ đề/công thức nào xuất hiện) vi phạm VII(A), bất kể đăng lúc nào."
   },
   {
    "q": "An analyst issues a buy rating on a company in which he holds a large personal equity stake, with no mention of the holding. He violates:",
    "opts": [
     "Standard VI(A) Disclosure of Conflicts",
     "Standard III(B) Fair Dealing",
     "Standard V(A) Diligence and Reasonable Basis"
    ],
    "ans": 0,
    "en": "Material beneficial ownership in a covered security is a conflict that must be prominently disclosed so readers can judge potential bias — Standard VI(A).",
    "vi": "Sở hữu cá nhân đáng kể trong cổ phiếu đang khuyến nghị là xung đột lợi ích phải công bố rõ — VI(A)."
   },
   {
    "q": "A member is convicted of a fraud offense unrelated to her investment job. Under Standard I(D) Misconduct, this:",
    "opts": [
     "Is outside the Code because it is personal",
     "Reflects adversely on professional integrity and violates I(D)",
     "Only matters if clients lost money"
    ],
    "ans": 1,
    "en": "Standard I(D) covers dishonesty, fraud, or deceit that reflects adversely on professional reputation, integrity, or competence — even outside work. (Mere personal lapses without dishonesty, like a single traffic offense, generally are not violations.)",
    "vi": "I(D) bao trùm mọi hành vi gian dối, lừa đảo làm tổn hại uy tín nghề nghiệp — kể cả ngoài công việc. Vi phạm cá nhân không liên quan đến trung thực (như lỗi giao thông đơn lẻ) thường không tính."
   },
   {
    "q": "A business card reads: \"Linh Tran, CFA\". Her email signature reads: \"Linh is a CFA with 10 years of experience.\" Which usage violates Standard VII(B)?",
    "opts": [
     "The business card",
     "The email signature — the designation may not be used as a noun",
     "Both"
    ],
    "ans": 1,
    "en": "\"CFA\" is used only as an adjective after the charterholder’s name (\"Linh Tran, CFA\" or \"a CFA charterholder\"). \"Is a CFA\" treats it as a noun — a violation, however experienced she is.",
    "vi": "\"CFA\" chỉ được dùng như tính từ sau tên (\"Linh Tran, CFA\" hoặc \"CFA charterholder\"). Viết \"is a CFA\" là dùng như danh từ — vi phạm VII(B), dù kinh nghiệm bao nhiêu."
   },
   {
    "q": "An equity analyst accepts an assignment to value a portfolio of exotic interest-rate derivatives, a field she has never worked in, and completes it alone without additional training or review. She most likely violated:",
    "opts": [
     "Standard I(E) Competence",
     "Standard VI(B) Priority of Transactions",
     "No standard — effort is what matters"
    ],
    "ans": 0,
    "en": "Standard I(E): act only within your competence. Taking specialist work you are not qualified for — without training, assistance, or supervision — breaches the standard even if performed in good faith.",
    "vi": "Standard I(E): chỉ hành nghề trong phạm vi năng lực. Nhận việc chuyên sâu ngoài khả năng mà không đào tạo thêm, không nhờ hỗ trợ hay giám sát là vi phạm, dù làm với thiện chí."
   }
  ]
 ]
};
