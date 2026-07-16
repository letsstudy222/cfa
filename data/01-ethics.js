/* =====================================================================
   Topic 01 — Ethical & Professional Standards
   (aligned with the uploaded Ethics slide deck, v2025)
   ---------------------------------------------------------------------
   topic.modules[] : learning modules; sections {h, en, vi}; formulas[]
   topic.vocab[]   : [term, EN definition, VI meaning]
   topic.quiz[]    : Practice Set A — {q, opts[3], ans(0-2), en, vi}
   extra.checks[]  : per-module Quick check questions
   extra.sets[]    : Practice Sets B, C…
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
     "en": "<p><strong>Ethics</strong> is a set of shared beliefs about what behavior is right and wrong — moral principles that guide conduct, often demanding more than the law does. A <strong>profession</strong> (medicine, law, investment management) is an occupation built on specialized knowledge and service to others, governed by a code of conduct that puts the client first, and committed to maintaining and monitoring member competence.</p><p>Investment management depends on trust more than almost any industry, because clients face severe <strong>information asymmetry</strong>: the \"product\" is intangible advice, quality is hard to judge even after the fact (a good decision can produce a bad outcome and vice versa), and clients hand over control of their savings. When investors cannot verify quality directly, they rely on the integrity of the professional. Ethical behavior therefore is not decoration — it lowers the cost of doing business, broadens participation in markets, reduces the cost of capital, and sustains the whole industry. Ethical lapses do the reverse: scandals drive investors out of markets for years.</p><p><strong>What makes a profession</strong> (vs a mere vocation): it is (1) based on <em>specialized knowledge and skills</em>, (2) based on <em>service to others</em>, and (3) practiced by members who share and agree to adhere to a <em>common code of ethics</em>. Professionals owe a <strong>fiduciary duty</strong> — an obligation to act in the client’s best interest with a high standard of care, skill, and diligence. The investment profession and investment firms are interdependent in maintaining trust. Practical rule the exam likes: when an <strong>ethical dilemma</strong> occurs, first raise the issue with a <em>senior individual in the firm</em> (supervisor or compliance).</p>",
     "vi": "<p><strong>Đạo đức (ethics)</strong> là tập hợp các chuẩn mực chung về hành vi đúng–sai, thường đòi hỏi cao hơn cả luật pháp. Một <strong>nghề nghiệp chuyên môn (profession)</strong> — như y, luật, quản lý đầu tư — dựa trên tri thức chuyên sâu, phục vụ xã hội, có bộ quy tắc ứng xử đặt khách hàng lên trước, và cam kết duy trì, giám sát năng lực của thành viên.</p><p>Ngành đầu tư phụ thuộc vào niềm tin hơn hầu hết các ngành khác vì <strong>bất cân xứng thông tin</strong> rất lớn: \"sản phẩm\" là lời khuyên vô hình, chất lượng khó đánh giá kể cả sau khi có kết quả (quyết định đúng vẫn có thể cho kết quả xấu và ngược lại), và khách hàng giao quyền kiểm soát tiền tiết kiệm của mình. Khi không thể tự kiểm chứng chất lượng, nhà đầu tư buộc phải dựa vào sự chính trực của người hành nghề. Vì vậy hành xử đạo đức không phải trang trí — nó giảm chi phí giao dịch, mở rộng sự tham gia thị trường, hạ chi phí vốn và nuôi sống cả ngành. Bê bối đạo đức gây tác dụng ngược: khiến nhà đầu tư rời bỏ thị trường nhiều năm.</p><p><strong>Điều làm nên một nghề chuyên môn</strong> (khác một công việc thông thường): (1) dựa trên <em>kiến thức và kỹ năng chuyên sâu</em>, (2) dựa trên <em>sự phục vụ người khác</em>, và (3) được hành nghề bởi các thành viên cùng cam kết tuân theo <em>một bộ quy tắc đạo đức chung</em>. Người hành nghề mang <strong>nghĩa vụ ủy thác (fiduciary duty)</strong> — hành động vì lợi ích tốt nhất của khách hàng với chuẩn mực cẩn trọng, kỹ năng, tận tâm cao. Nghề đầu tư và các công ty đầu tư phụ thuộc lẫn nhau trong việc duy trì niềm tin. Quy tắc thực hành hay thi: khi gặp <strong>tình huống khó xử đạo đức</strong>, trước hết hãy nêu vấn đề với <em>một người cấp cao trong công ty</em> (cấp trên hoặc compliance).</p>"
    },
    {
     "h": "Ethical vs legal — and codes vs standards of conduct",
     "en": "<p><strong>Ethics</strong> encompasses (1) <em>moral principles</em> — beliefs about what is good, acceptable, or obligatory behavior — and (2) <em>rules of conduct</em> that guide behavior. Ethical conduct follows those principles and balances self-interest against both the direct and indirect consequences for others.</p><p><strong>Legal and ethical behavior often coincide but not always</strong> (picture the Venn diagram): some <em>ethical</em> behavior may be <em>illegal</em> — civil disobedience, or whistleblowing that breaches a confidentiality rule; and much <em>legal</em> behavior can be unethical — trading on inside information where local law does not prohibit it, or making only the legally required disclosures while omitting what clients truly need. Standards based on ethical principles often represent a <strong>higher standard of behavior than the law requires</strong> — law is the floor, not the ceiling. An answer choice reading \"it was legal, therefore no violation\" is almost always wrong.</p><p><strong>Code of ethics vs standards of conduct:</strong> a <em>code of ethics</em> is a <strong>general guide</strong> for how members of a community should act (principles, values); <em>standards of conduct</em> serve as <strong>benchmarks for the minimally acceptable behavior</strong> of members — they operationalize and help clarify the code. Exam phrasing: \"which best outlines minimally acceptable behaviors?\" → standards of conduct, not the code.</p>",
     "vi": "<p><strong>Đạo đức</strong> bao gồm (1) <em>các nguyên tắc luân lý</em> — niềm tin về hành vi tốt, chấp nhận được hay bắt buộc — và (2) <em>các quy tắc ứng xử</em> định hướng hành vi. Hành xử có đạo đức là tuân theo các nguyên tắc đó và cân bằng lợi ích cá nhân với hệ quả trực tiếp lẫn gián tiếp lên người khác.</p><p><strong>Hợp pháp và có đạo đức thường trùng nhau nhưng không phải luôn luôn</strong> (hình dung biểu đồ Venn): có hành vi <em>đạo đức</em> nhưng <em>phạm luật</em> — bất tuân dân sự, tố giác sai phạm dù vi phạm điều khoản bảo mật; và nhiều hành vi <em>hợp pháp</em> nhưng phi đạo đức — giao dịch nội gián ở nơi luật không cấm, hay chỉ công bố đúng mức luật buộc trong khi giấu điều khách hàng thật sự cần biết. Chuẩn mực dựa trên nguyên tắc đạo đức thường <strong>cao hơn yêu cầu của luật</strong> — luật là sàn, không phải trần. Đáp án kiểu \"hợp pháp nên không vi phạm\" hầu như luôn sai.</p><p><strong>Code of ethics vs standards of conduct:</strong> <em>code of ethics</em> là <strong>kim chỉ nam tổng quát</strong> về cách thành viên nên hành xử (nguyên tắc, giá trị); <em>standards of conduct</em> là <strong>chuẩn đối chiếu cho hành vi tối thiểu chấp nhận được</strong> — cụ thể hóa và làm rõ code. Câu thi quen thuộc: \"cái nào mô tả hành vi tối thiểu chấp nhận được?\" → standards of conduct, không phải code.</p>"
    },
    {
     "h": "Challenges to ethical conduct; compliance policies vs the decision-making framework",
     "en": "<p><strong>Two challenges to ethical conduct:</strong></p><ul><li><strong>Overconfidence:</strong> people believe they are ethical and that their standards are above average — so they fail to reflect, and unexamined decisions default to self-interest.</li><li><strong>Situational influences:</strong> external factors — <em>bonuses, promotions, prestige, and loyalty to employer and colleagues</em> — shape thinking and behavior far more than we recognize; decision makers routinely underestimate their pull.</li></ul><p><strong>Compliance policies:</strong> a strong compliance policy is a good <em>first step</em> toward an ethical culture — but a focus on rules adherence <em>may not be sufficient</em>: it can discourage consideration of the larger picture, oversimplify decision making, and, taken to the extreme, a strong compliance culture becomes <em>another situational influence</em> that blinds employees to other important considerations (\"is it allowed?\" replaces \"is it right?\").</p><p><strong>The ethical decision-making framework</strong> helps a decision maker evaluate a decision from <em>multiple perspectives</em>, see the <em>best course of action</em> among alternatives, see the <em>broader picture from a long-term point of view</em>, surface issues otherwise missed, and build judgment. Steps: <strong>Identify</strong> (relevant facts; stakeholders and duties owed; ethical principles; conflicts of interest) → <strong>Consider</strong> (situational influences; additional guidance; alternative actions) → <strong>Decide and act</strong> → <strong>Reflect</strong> (was the outcome as anticipated? why or why not?).</p><p><strong>Two notes the exam quotes verbatim:</strong> the development, maintenance, and demonstration of a <em>strong culture of integrity by the firm’s senior management</em> may be the <strong>single most important factor</strong> in promoting ethical behavior among employees; and <em>adopting a code of ethics</em> that lays out the firm’s ethical principles is a <strong>critical first step — but, while necessary, is insufficient</strong> by itself.</p>",
     "vi": "<p><strong>Hai thách thức với hành xử đạo đức:</strong></p><ul><li><strong>Quá tự tin:</strong> con người tin mình là người có đạo đức, chuẩn mực của mình cao hơn trung bình — nên không dừng lại tự vấn, và quyết định thiếu suy xét mặc định nghiêng về tư lợi.</li><li><strong>Áp lực hoàn cảnh:</strong> các yếu tố bên ngoài — <em>tiền thưởng, thăng chức, danh tiếng, lòng trung thành với công ty và đồng nghiệp</em> — chi phối tư duy và hành vi mạnh hơn ta tưởng; người ra quyết định thường xuyên đánh giá thấp sức kéo của chúng.</li></ul><p><strong>Chính sách tuân thủ:</strong> một chính sách compliance mạnh là <em>bước đầu tốt</em> để xây văn hóa đạo đức — nhưng chỉ chăm chăm tuân thủ quy định <em>có thể chưa đủ</em>: nó khiến người ta không nhìn bức tranh lớn, đơn giản hóa quá mức việc ra quyết định, và khi đẩy tới cực đoan, văn hóa compliance mạnh trở thành <em>một áp lực hoàn cảnh khác</em> che mắt nhân viên trước những cân nhắc quan trọng (\"có được phép không?\" thay chỗ \"có đúng không?\").</p><p><strong>Khung ra quyết định đạo đức</strong> giúp người ra quyết định đánh giá vấn đề từ <em>nhiều góc nhìn</em>, thấy <em>phương án tốt nhất</em> giữa các lựa chọn, thấy <em>bức tranh rộng theo tầm nhìn dài hạn</em>, phát hiện vấn đề dễ bị bỏ sót và rèn khả năng phán đoán. Các bước: <strong>Identify</strong> (sự kiện; các bên và nghĩa vụ; nguyên tắc đạo đức; xung đột lợi ích) → <strong>Consider</strong> (áp lực hoàn cảnh; tư vấn thêm; phương án thay thế) → <strong>Decide and act</strong> → <strong>Reflect</strong> (kết quả có như dự liệu? vì sao?).</p><p><strong>Hai ghi chú đề thi trích nguyên văn:</strong> việc xây dựng, duy trì và thể hiện <em>văn hóa chính trực mạnh mẽ bởi ban lãnh đạo cấp cao</em> có thể là <strong>yếu tố quan trọng nhất</strong> thúc đẩy hành xử đạo đức của nhân viên; và <em>ban hành một code of ethics</em> nêu rõ nguyên tắc đạo đức của công ty là <strong>bước đầu thiết yếu — nhưng cần mà chưa đủ</strong>.</p>"
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
     "h": "The Professional Conduct Program — the six-stage enforcement process",
     "en": "<p>The Code and Standards are enforced through a structured process. <em>Professional Conduct Staff</em> handle the first three stages; <em>panels composed of DRC (Disciplinary Review Committee) members</em> handle the last three:</p><ol><li><strong>Inquiry</strong> — triggered by: the member’s/candidate’s annual <em>Professional Conduct Statement</em> (self-disclosure of complaints, litigation, investigations); written complaints; media, regulatory notices, or other public sources; proctors’ reports on exam-day conduct; and analysis of scores and exam materials plus monitoring of online and social media.</li><li><strong>Investigation</strong> — the staff may request a written explanation, interview the member/candidate, complaining parties, and third parties, and collect relevant documents and records. Cooperation is mandatory.</li><li><strong>\"First-instance\" decision</strong> — conclude with no disciplinary sanction, issue a <em>cautionary letter</em>, or continue proceedings.</li><li><strong>Review or Hearing</strong> — if the member <em>accepts</em> the charges and proposed sanction, a <em>Review Panel</em> reviews the materials and conclusions; if the member does <em>not accept</em>, a <em>Hearing Panel</em> determines findings of fact, concludes on violations, and may impose sanctions.</li><li><strong>Appeal</strong> — the sanctioned member may appeal to the <em>Appeal Panel</em>, which at its discretion may impose no sanction, the same sanction, a lesser one, or a <em>greater</em> one. Its decision is final.</li><li><strong>Final decision — sanctions:</strong> for members: <strong>public censure</strong>, <strong>suspension of membership and use of the CFA designation</strong>, or <strong>revocation of the charter</strong>; for candidates: <strong>suspension or prohibition from further participation in the CFA Program</strong>. CFA Institute is a private association: it cannot impose fines, imprisonment, or banishment from the industry.</li></ol>",
     "vi": "<p>Code and Standards được thực thi qua một quy trình sáu giai đoạn. <em>Professional Conduct Staff</em> phụ trách ba giai đoạn đầu; <em>các hội đồng gồm thành viên DRC (Disciplinary Review Committee)</em> phụ trách ba giai đoạn sau:</p><ol><li><strong>Inquiry (Mở điều tra)</strong> — khởi phát từ: <em>Professional Conduct Statement</em> khai hằng năm (tự khai khiếu nại, kiện tụng, điều tra); đơn khiếu nại bằng văn bản; báo chí, thông báo của cơ quan quản lý hoặc nguồn công khai khác; báo cáo của giám thị ngày thi; phân tích điểm và bài thi cùng việc giám sát nội dung trực tuyến, mạng xã hội.</li><li><strong>Investigation (Điều tra)</strong> — yêu cầu giải trình bằng văn bản, phỏng vấn đương sự, bên khiếu nại, bên thứ ba, thu thập tài liệu liên quan. Hợp tác là bắt buộc.</li><li><strong>Quyết định \"sơ thẩm\"</strong> — kết thúc không kỷ luật, gửi <em>thư nhắc nhở (cautionary letter)</em>, hoặc tiếp tục thủ tục kỷ luật.</li><li><strong>Review hoặc Hearing</strong> — nếu đương sự <em>chấp nhận</em> cáo buộc và mức kỷ luật đề xuất → <em>Review Panel</em> rà soát hồ sơ và kết luận; nếu <em>không chấp nhận</em> → <em>Hearing Panel</em> xác định sự kiện, kết luận vi phạm và có thể áp đặt kỷ luật.</li><li><strong>Appeal (Kháng nghị)</strong> — người bị kỷ luật có thể kháng nghị lên <em>Appeal Panel</em>; hội đồng này có toàn quyền: không kỷ luật, giữ nguyên, giảm nhẹ, hoặc <em>tăng nặng</em>. Quyết định là chung thẩm.</li><li><strong>Quyết định cuối — các mức kỷ luật:</strong> với thành viên: <strong>khiển trách công khai</strong>, <strong>đình chỉ tư cách thành viên và quyền dùng danh hiệu CFA</strong>, hoặc <strong>thu hồi charter</strong>; với thí sinh: <strong>đình chỉ hoặc cấm tiếp tục tham gia CFA Program</strong>. CFA Institute là hiệp hội tư nhân: không thể phạt tiền, bỏ tù hay cấm hành nghề trong ngành.</li></ol>"
    }
   ]
  },
  {
   "title": "Guidance for Standards I–VII",
   "sections": [
    {
     "h": "I(A) Knowledge of the Law & I(B) Independence and Objectivity",
     "en": "<ul><li><strong>I(A) Knowledge of the Law:</strong> understand and comply with all applicable laws, rules, and regulations — and when law and the Code conflict, follow the <em>stricter</em> requirement. If there is no local securities law, the Code still applies in full. Do not <em>knowingly</em> participate in or assist violations. If you discover illegal or unethical activity: first report it to your supervisor or compliance; if the conduct continues, you must <strong>dissociate</strong> — stop the activity, remove your name from documents, and if necessary resign. Reporting violations to governmental authorities is <em>encouraged but not required</em> by the Code (unless local law requires it).</li><li><strong>I(B) Independence and Objectivity:</strong> use reasonable care to maintain independence and do not offer, solicit, or accept any gift, benefit, or compensation that could reasonably be expected to compromise it. Crucial distinctions: a <em>modest gift from a client</em> (a token of appreciation for past service) may be accepted with disclosure to the employer; a gift or lavish entertainment from a party seeking to influence future conduct — an issuer courting research coverage, a broker chasing order flow — must be refused. Best practices the exam rewards: pay for your own travel to company visits when practical (or use commercial transport rather than the issuer’s jet); issuer-paid research only for a <em>flat fee disclosed in the report</em>, never contingent on the conclusion; protect analysts from pressure by investment-banking colleagues or by covered companies threatening to cut access; do not accept allocations of oversubscribed IPOs for personal accounts.</li></ul><p><strong>Slide-deck specifics for I(A):</strong> members need not be legal <em>experts</em> — the duty is to understand applicable law and comply. The residence/business matrix: whichever combination of home-country and business-country law applies, the member adheres to the <strong>stricter of the applicable law and the Code &amp; Standards</strong> (if the applicable law is less strict than the Code — or there is none — follow the Code; if stricter, follow that law). Also understand the laws of the <em>regions where investment products are distributed</em>. When in doubt, seek advice of <em>compliance personnel or legal counsel</em>. When dissociating, <strong>document the violation</strong> and urge the firm to persuade the perpetrator to stop.</p><p><strong>Slide-deck specifics for I(B):</strong> gifts from <em>clients</em> reward past service (a form of supplementary compensation) and may be accepted with disclosure to the employer — <em>before</em> accepting if possible, otherwise promptly after; gifts from parties seeking to influence <em>future</em> conduct must be refused. Special-cost rules: at issuer headquarters visits, pay for <em>commercial transportation and hotel charges</em>; no issuer should reimburse air transportation. Firms should set a <strong>strict gift value limit based on local or regional customs</strong> (and define whether it is per gift or aggregate annual). Personal-investing controls: <strong>prior approval for IPO participation with prompt disclosure</strong>, and <strong>strict limits on private placements</strong>. Firms should adopt a formal written independence policy for research and appoint a <em>senior compliance officer</em> with oversight authority.</p>",
     "vi": "<ul><li><strong>I(A) Hiểu biết pháp luật:</strong> nắm và tuân thủ mọi luật lệ áp dụng — khi luật và Code mâu thuẫn, theo quy định <em>nghiêm ngặt hơn</em>. Nơi không có luật chứng khoán, Code vẫn áp dụng đầy đủ. Không <em>cố ý</em> tham gia hay tiếp tay cho vi phạm. Khi phát hiện hành vi phạm pháp/phi đạo đức: báo cáo cấp trên hoặc compliance trước; nếu hành vi tiếp diễn, phải <strong>tách mình khỏi (dissociate)</strong> — ngừng tham gia, rút tên khỏi tài liệu, cần thiết thì từ chức. Việc tố giác với cơ quan nhà nước được <em>khuyến khích nhưng Code không bắt buộc</em> (trừ khi luật địa phương yêu cầu).</li><li><strong>I(B) Độc lập và khách quan:</strong> không đề nghị, gạ gẫm hay nhận quà tặng, lợi ích, thù lao có thể làm tổn hại tính độc lập. Phân biệt quan trọng: <em>quà nhỏ từ khách hàng</em> (tri ân kết quả trong quá khứ) có thể nhận kèm khai báo với công ty; quà/chiêu đãi xa hoa từ bên muốn tác động hành vi tương lai — công ty phát hành muốn được viết báo cáo đẹp, broker săn lệnh — phải từ chối. Thực hành tốt hay được hỏi: tự trả chi phí đi thăm doanh nghiệp khi khả thi (dùng phương tiện thương mại thay vì máy bay riêng của công ty được phân tích); nghiên cứu do công ty phát hành trả tiền chỉ nhận <em>phí cố định, công bố trong báo cáo</em>, không phụ thuộc kết luận; bảo vệ analyst khỏi áp lực từ bộ phận investment banking hoặc doanh nghiệp dọa cắt quyền tiếp cận; không nhận suất IPO \"hot\" cho tài khoản cá nhân.</li></ul><p><strong>Chi tiết theo slide cho I(A):</strong> thành viên không cần là <em>chuyên gia</em> pháp lý — nghĩa vụ là hiểu và tuân thủ luật áp dụng. Ma trận nơi cư trú/nơi kinh doanh: dù tổ hợp nào, luôn theo <strong>quy định nghiêm hơn giữa luật áp dụng và Code &amp; Standards</strong> (luật lỏng hơn Code hoặc không có luật → theo Code; luật chặt hơn → theo luật). Còn phải hiểu luật của <em>khu vực nơi sản phẩm được phân phối</em>. Khi phân vân, hỏi <em>compliance hoặc luật sư</em>. Khi dissociate, phải <strong>ghi lại bằng chứng vi phạm</strong> và thúc giục công ty yêu cầu người vi phạm dừng lại.</p><p><strong>Chi tiết theo slide cho I(B):</strong> quà từ <em>khách hàng</em> tri ân kết quả quá khứ (một dạng thù lao bổ sung) — được nhận kèm khai báo với công ty, <em>trước</em> khi nhận nếu có thể, không thì ngay sau đó; quà từ bên muốn tác động hành vi <em>tương lai</em> phải từ chối. Quy tắc chi phí đặc biệt: khi thăm trụ sở issuer, tự trả <em>phương tiện thương mại và tiền khách sạn</em>; không nhận issuer hoàn tiền vé máy bay. Công ty nên đặt <strong>hạn mức giá trị quà nghiêm ngặt theo tập quán địa phương</strong> (nêu rõ tính theo từng món hay tổng theo năm). Kiểm soát đầu tư cá nhân: <strong>phê duyệt trước khi tham gia IPO kèm công bố kịp thời</strong>, và <strong>giới hạn chặt với private placements</strong>. Công ty nên có chính sách độc lập nghiên cứu bằng văn bản và bổ nhiệm <em>cán bộ compliance cấp cao</em> có thẩm quyền giám sát.</p>"
    },
    {
     "h": "I(C) Misrepresentation, I(D) Misconduct & I(E) Competence",
     "en": "<ul><li><strong>I(C) Misrepresentation:</strong> no knowingly false statements or misleading omissions concerning analysis, recommendations, qualifications, services, or performance. Classic violations: <em>guaranteeing</em> returns on risky products (\"this fund will return at least 8%\") — permissible only for products with genuinely guaranteed structures (e.g., insured deposits); overstating credentials; and <strong>plagiarism</strong> — presenting others’ work as your own. You may use data from <em>recognized financial and statistical reporting services</em> (e.g., index providers) without attribution; everything else — research reports, models, charts, even ideas summarized from another analyst — needs a citation. Applies to all media, including social media. Keep copies of source materials.</li><li><strong>I(D) Misconduct:</strong> no dishonesty, fraud, or deceit — and no conduct reflecting adversely on professional reputation, integrity, or competence. The dividing line: dishonesty is the trigger. Personal bankruptcy without fraud, or an isolated lapse in private life, is generally not a violation; fraud of any kind, or a pattern of behavior (e.g., repeated intoxication at work) that calls professional competence into question, is.</li><li><strong>I(E) Competence:</strong> the newest professionalism requirement — act only within your professional competence, and maintain and improve it. Practical meaning: decline (or get help and supervision on) work you are not qualified to perform, keep skills current through continuing education, and be candid about the limits of your expertise. An analyst who accepts a complex derivatives-valuation mandate she does not understand, without assistance, breaches this standard even with good intentions.</li></ul><p><strong>Slide-deck specifics:</strong> I(C) — never guarantee clients a <em>specific return on volatile investments</em>; the prohibition does <em>not</em> apply to products with guarantees built into their structure (e.g., a government bond’s fixed coupon, insured products, or where an institution has agreed to cover losses). <em>Recognized financial and statistical reporting services</em> — central banks, the World Bank, S&amp;P, Moody’s, Fitch and the like — may be used without attribution; everything else must be attributed, including <em>paraphrases and summaries</em>. Plagiarism policy: <strong>maintain copies</strong> of source materials, <strong>attribute quotations</strong>, <strong>attribute summaries</strong>. I(D) — the Code aims primarily at conduct related to <em>professional life</em>: abusing alcohol during business hours, fighting at work in front of clients, bankruptcy involving fraud, and <em>abusing the PCP itself to settle personal disputes</em> are violations; a personal protest arrest or a fraud-free personal bankruptcy generally is not. I(E) — competence = sufficient <em>knowledge, skills, and abilities</em> for the role; the duty is to <em>achieve and continuously maintain/improve</em> it, but I(E) does <strong>not</strong> mandate any particular continuing-education program — members may maintain competence in a variety of ways (certifications, conferences, employer training, self-study, expert groups).</p>",
     "vi": "<ul><li><strong>I(C) Không trình bày sai lệch:</strong> không đưa thông tin sai hoặc bỏ sót gây hiểu lầm về phân tích, khuyến nghị, bằng cấp, dịch vụ, hiệu quả đầu tư. Vi phạm kinh điển: <em>cam kết</em> lợi nhuận cho sản phẩm có rủi ro (\"quỹ này chắc chắn lãi tối thiểu 8%\") — chỉ được phép với sản phẩm có cấu trúc bảo đảm thật (như tiền gửi được bảo hiểm); thổi phồng bằng cấp; và <strong>đạo văn</strong> — trình bày công trình của người khác như của mình. Được dùng dữ liệu từ <em>các dịch vụ thống kê tài chính được công nhận</em> (nhà cung cấp chỉ số...) mà không cần trích nguồn; mọi thứ khác — báo cáo, mô hình, biểu đồ, kể cả ý tưởng tóm tắt từ analyst khác — đều phải dẫn nguồn. Áp dụng cho mọi kênh, gồm mạng xã hội. Lưu bản sao tài liệu nguồn.</li><li><strong>I(D) Không hành vi sai trái:</strong> không gian dối, lừa đảo — không hành vi làm tổn hại uy tín, sự chính trực, năng lực nghề nghiệp. Ranh giới: yếu tố gian dối là điểm kích hoạt. Phá sản cá nhân không có gian lận, hay một sai sót đơn lẻ trong đời tư, thường không vi phạm; còn gian lận dưới mọi hình thức, hoặc hành vi lặp lại (say xỉn nhiều lần khi làm việc) khiến năng lực nghề nghiệp bị nghi ngờ, là vi phạm.</li><li><strong>I(E) Năng lực chuyên môn:</strong> yêu cầu mới nhất của nhóm Professionalism — chỉ hành nghề trong phạm vi năng lực của mình, đồng thời duy trì và nâng cao năng lực đó. Nghĩa thực tế: từ chối (hoặc tìm hỗ trợ, giám sát khi nhận) công việc vượt khả năng, cập nhật kiến thức qua đào tạo liên tục, thẳng thắn về giới hạn chuyên môn. Analyst nhận định giá phái sinh phức tạp mình không hiểu, không nhờ hỗ trợ, là vi phạm dù thiện chí.</li></ul><p><strong>Chi tiết theo slide:</strong> I(C) — không bao giờ cam kết <em>mức lợi nhuận cụ thể trên khoản đầu tư biến động</em>; lệnh cấm <em>không</em> áp dụng với sản phẩm có bảo đảm nằm trong cấu trúc (coupon cố định của trái phiếu chính phủ, sản phẩm được bảo hiểm, hoặc có định chế cam kết bù lỗ). <em>Các dịch vụ báo cáo tài chính – thống kê được công nhận</em> — ngân hàng trung ương, World Bank, S&amp;P, Moody’s, Fitch… — được dùng không cần dẫn nguồn; mọi nguồn khác phải dẫn, kể cả <em>đoạn diễn giải và tóm tắt</em>. Chính sách chống đạo văn: <strong>lưu bản sao</strong> tài liệu nguồn, <strong>dẫn nguồn trích dẫn</strong>, <strong>dẫn nguồn tóm tắt</strong>. I(D) — Code nhắm chủ yếu vào <em>đời sống nghề nghiệp</em>: uống rượu trong giờ làm, ẩu đả tại nơi làm việc trước mặt khách, phá sản có yếu tố gian lận, và <em>lạm dụng chính PCP để giải quyết tư thù</em> đều là vi phạm; bị bắt khi biểu tình ôn hòa hay phá sản cá nhân không gian lận thường không vi phạm. I(E) — năng lực = đủ <em>kiến thức, kỹ năng, khả năng</em> cho vai trò đảm nhận; nghĩa vụ là <em>đạt được và liên tục duy trì/nâng cao</em>, nhưng I(E) <strong>không</strong> bắt buộc theo một chương trình đào tạo liên tục cụ thể nào — có nhiều cách duy trì năng lực (chứng chỉ, hội thảo, đào tạo nội bộ, tự học, nhóm chuyên gia).</p>"
    },
    {
     "h": "Standard II — Integrity of Capital Markets",
     "en": "<ul><li><strong>II(A) Material Nonpublic Information (MNPI):</strong> members who possess information that is both <em>material</em> (would affect price / a reasonable investor’s decision) and <em>nonpublic</em> must not act or cause others to act on it. The <strong>mosaic theory</strong> is the key exception: conclusions built from public information plus <em>nonmaterial</em> nonpublic information are legitimate — even if the conclusion itself would be material.</li><li><strong>II(B) Market Manipulation:</strong> no transaction-based manipulation (e.g., trades to create artificial volume or price — \"painting the tape\") and no information-based manipulation (spreading false rumors, pump-and-dump). Intent matters: legitimate trading strategies that exploit inefficiencies are not manipulation.</li></ul><p><strong>Firm procedures the slides emphasize:</strong> build <em>information barriers (\"firewalls\")</em> between departments that receive MNPI (investment banking) and public-side desks — physical and informational separation, with monitored, documented cross-wall communication; maintain <strong>watch lists and restricted lists</strong>; a firm <em>market making</em> while in possession of MNPI should instruct market makers to remain <strong>passive</strong> — taking only the <em>contra side of unsolicited customer trades</em>; the most prudent course for <em>risk-arbitrage</em> trading is to <strong>suspend</strong> it when a security goes on the watch list; and circulate written compliance policies <em>to all employees</em> with training to recognize MNPI. Material information examples: earnings; mergers, acquisitions, tender offers, joint ventures; the <em>source’s reliability</em> matters to materiality.</p>",
     "vi": "<ul><li><strong>II(A) Thông tin trọng yếu chưa công bố (MNPI):</strong> ai nắm thông tin vừa <em>trọng yếu</em> (ảnh hưởng giá / quyết định của nhà đầu tư hợp lý) vừa <em>chưa công khai</em> thì không được giao dịch hoặc xúi giục người khác giao dịch dựa trên đó. <strong>Mosaic theory</strong> là ngoại lệ quan trọng: kết luận được ghép từ thông tin công khai + thông tin chưa công khai nhưng <em>không trọng yếu</em> là hợp pháp — kể cả khi bản thân kết luận đó mang tính trọng yếu.</li><li><strong>II(B) Thao túng thị trường:</strong> cấm thao túng bằng giao dịch (tạo khối lượng/giá ảo — \"painting the tape\") và thao túng bằng thông tin (tung tin đồn thất thiệt, pump-and-dump). Ý định là mấu chốt: chiến lược giao dịch hợp pháp khai thác sự kém hiệu quả của thị trường không phải thao túng.</li></ul><p><strong>Quy trình cấp công ty mà slide nhấn mạnh:</strong> dựng <em>tường lửa thông tin (firewall)</em> giữa bộ phận nắm MNPI (investment banking) và các bàn giao dịch công khai — tách biệt vật lý lẫn thông tin, trao đổi xuyên tường phải được giám sát, ghi lại; duy trì <strong>watch list và restricted list</strong>; công ty đang <em>tạo lập thị trường</em> khi nắm MNPI phải yêu cầu market maker giữ thế <strong>bị động</strong> — chỉ đứng ở <em>chiều đối ứng của lệnh khách hàng tự phát</em>; với giao dịch <em>risk-arbitrage</em>, cách thận trọng nhất là <strong>tạm dừng</strong> khi chứng khoán vào watch list; và phổ biến chính sách compliance bằng văn bản <em>tới toàn bộ nhân viên</em> kèm đào tạo nhận diện MNPI. Ví dụ thông tin trọng yếu: lợi nhuận; M&amp;A, chào mua công khai, liên doanh; <em>độ tin cậy của nguồn tin</em> ảnh hưởng đến tính trọng yếu.</p>"
    },
    {
     "h": "Standard III — Duties to Clients",
     "en": "<ul><li><strong>III(A) Loyalty, Prudence, and Care:</strong> client interests come first — before the employer’s and your own. Soft dollars (brokerage paid with client commissions) must benefit the <em>client</em>. Proxies should be voted in clients’ interests.</li><li><strong>III(B) Fair Dealing:</strong> deal fairly and objectively with all clients when making recommendations or taking investment action. \"Fairly\" does not mean \"equally\" — premium service tiers are fine if disclosed and available to all who pay; but all clients must receive material recommendation changes before (or at the same time as) any trades.</li><li><strong>III(C) Suitability:</strong> in an advisory relationship, make a reasonable inquiry into the client’s investment experience, risk/return objectives, and constraints — documented in an <strong>Investment Policy Statement (IPS)</strong>, reviewed at least annually. Judge suitability in a total-portfolio context, not security by security.</li><li><strong>III(D) Performance Presentation:</strong> fair, accurate, and complete; no cherry-picking accounts or periods. GIPS compliance is recommended, not required.</li><li><strong>III(E) Preservation of Confidentiality:</strong> keep client information confidential unless the information concerns illegal activity, disclosure is required by law, or the client permits it. Cooperation with CFA Institute Professional Conduct investigations is allowed.</li></ul><p><strong>Slide-deck specifics:</strong> III(A) — first <em>identify the actual investment client</em>: managing personal assets → the individual (invest per the <strong>IPS</strong>); managing a pension or trust → the <strong>beneficiaries</strong>, not whoever hired you (invest per the governing documents); managing a mutual/index fund → invest per the fund’s <strong>mandate/strategy</strong>. Judge decisions in the context of the <em>total portfolio</em>. Brokerage is a <em>client asset</em>: under <strong>directed brokerage</strong> the client may direct its use, but the manager still owes <em>best price and best execution</em> and should disclose when directed brokerage may compromise it; <strong>soft dollars</strong> should buy only research that <em>directly assists the investment decision process</em> — never management expenses or the manager’s own education. Proxy voting: vote in an informed, responsible manner; a <em>cost–benefit analysis</em> may justify not voting routine/immaterial proxies, but unusual proposals need extra review; disclose proxy policies to clients. Recommended: send each client an <em>itemized statement at least quarterly</em>; keep client assets separate from the firm’s and your own.</p><p>III(B) Fair dealing mechanics: for <em>block trades</em>, give all participating accounts the <strong>same execution price</strong> and charge the <strong>same commission</strong>; when an order is only partially filled, allocate <strong>pro rata on the basis of order size</strong> (respecting minimum lots); allocate new issues <strong>by client, not by portfolio manager</strong>, after obtaining advance indications of interest. Disclose trade-allocation procedures to clients and prospects, establish systematic account review, and disclose the firm’s <em>levels of service</em> — different levels are acceptable if disclosed and <em>not offered selectively</em>.</p><p>III(C) Suitability: members <em>not</em> in an advisory relationship (execution-only, sell-side analysts, index-fund managers) have <strong>no duty to judge suitability</strong> for the ultimate client. In advisory relationships: gather the IPS profile — <strong>RR-TT-LL-U</strong> (Risk &amp; Return objectives; Time horizon &amp; Tax; Liquidity &amp; Legal; Unique circumstances) — <em>before</em> acting, and update it <strong>at least annually</strong> or before material changes. <em>Unsolicited, unsuitable trade requests:</em> if the impact on the portfolio is <strong>minimal → educate</strong> the client on the deviation (and follow firm approval policy); if <strong>material → update the IPS</strong> (if the client refuses: execute in a separate <em>unmanaged account</em> if the firm allows, or reconsider the relationship).</p><p>III(D): may not state or <em>imply</em> that clients will benefit from past returns; presenting the <em>weighted composite</em> of similar portfolios (not one flagship account), including <em>terminated accounts</em> in history, labeling <em>simulated</em> results, and disclosing gross vs net of fees all satisfy the standard without formal GIPS compliance. III(E): confidentiality covers <em>former, current, and prospective</em> clients; if applicable law requires maintaining confidentiality even about a client’s illegal activity, <strong>follow the law</strong> — and cooperation with a PCP investigation is never a violation.</p>",
     "vi": "<ul><li><strong>III(A) Trung thành, Thận trọng, Cẩn trọng:</strong> lợi ích khách hàng đứng trước lợi ích công ty và bản thân. Soft dollars (dịch vụ môi giới trả bằng hoa hồng của khách hàng) phải phục vụ lợi ích <em>khách hàng</em>. Quyền biểu quyết (proxy) phải bỏ phiếu vì lợi ích khách hàng.</li><li><strong>III(B) Đối xử công bằng:</strong> công bằng và khách quan với mọi khách hàng khi khuyến nghị hoặc giao dịch. \"Công bằng\" không có nghĩa \"bằng nhau\" — gói dịch vụ cao cấp được phép nếu công bố và ai trả phí đều mua được; nhưng mọi khách hàng phải nhận thay đổi khuyến nghị trọng yếu trước (hoặc cùng lúc) với việc thực hiện giao dịch.</li><li><strong>III(C) Tính phù hợp:</strong> trong quan hệ tư vấn, phải tìm hiểu kinh nghiệm đầu tư, mục tiêu rủi ro/lợi nhuận và các ràng buộc của khách — ghi trong <strong>IPS</strong>, rà soát tối thiểu hằng năm. Đánh giá suitability theo tổng thể danh mục, không theo từng chứng khoán riêng lẻ.</li><li><strong>III(D) Trình bày kết quả đầu tư:</strong> công bằng, chính xác, đầy đủ; không \"cherry-pick\" tài khoản hay giai đoạn đẹp. Tuân thủ GIPS là khuyến nghị, không bắt buộc.</li><li><strong>III(E) Bảo mật:</strong> giữ bí mật thông tin khách hàng trừ khi liên quan hoạt động phạm pháp, luật yêu cầu công bố, hoặc khách hàng cho phép. Được phép hợp tác với điều tra của CFA Institute Professional Conduct.</li></ul><p><strong>Chi tiết theo slide:</strong> III(A) — trước hết <em>xác định đúng khách hàng thực</em>: quản lý tài sản cá nhân → chính cá nhân đó (đầu tư theo <strong>IPS</strong>); quản lý quỹ hưu trí/quỹ tín thác → <strong>người thụ hưởng</strong>, không phải người thuê bạn (đầu tư theo văn kiện quản trị); quản lý quỹ mở/quỹ chỉ số → theo <strong>mandate/chiến lược</strong> của quỹ. Đánh giá quyết định trong bối cảnh <em>tổng danh mục</em>. Hoa hồng môi giới là <em>tài sản của khách</em>: với <strong>directed brokerage</strong>, khách được chỉ định cách dùng, nhưng manager vẫn phải bảo đảm <em>best price, best execution</em> và nên cảnh báo khi việc chỉ định có thể làm giảm chất lượng khớp lệnh; <strong>soft dollars</strong> chỉ được mua nghiên cứu <em>trực tiếp phục vụ quá trình ra quyết định đầu tư</em> — không dùng cho chi phí quản lý hay việc học của chính manager. Bỏ phiếu proxy: có hiểu biết và trách nhiệm; <em>phân tích chi phí–lợi ích</em> có thể biện minh việc bỏ qua các nghị quyết thường lệ/không trọng yếu, nhưng đề xuất bất thường cần soi kỹ; công bố chính sách proxy cho khách. Khuyến nghị: gửi khách <em>sao kê chi tiết ít nhất hằng quý</em>; tách bạch tài sản của khách với tài sản công ty và cá nhân.</p><p>Cơ chế III(B): với <em>lệnh gộp (block trade)</em>, mọi tài khoản tham gia nhận <strong>cùng giá khớp</strong> và <strong>cùng mức phí</strong>; lệnh khớp một phần thì phân bổ <strong>pro rata theo quy mô lệnh đặt</strong> (tôn trọng lô tối thiểu); phân bổ chứng khoán phát hành mới <strong>theo khách hàng, không theo portfolio manager</strong>, sau khi lấy đăng ký quan tâm trước. Công bố quy trình phân bổ cho khách và khách tiềm năng, rà soát tài khoản định kỳ, công bố <em>các hạng dịch vụ</em> — hạng khác nhau hợp lệ nếu được công bố và <em>không chào mời chọn lọc</em>.</p><p>III(C): thành viên <em>không</em> trong quan hệ tư vấn (chỉ thực hiện lệnh, analyst bên bán, quản lý quỹ chỉ số) <strong>không có nghĩa vụ đánh giá suitability</strong> cho khách hàng cuối. Trong quan hệ tư vấn: thu thập hồ sơ IPS — <strong>RR-TT-LL-U</strong> (mục tiêu Rủi ro &amp; Lợi nhuận; Kỳ hạn &amp; Thuế; Thanh khoản &amp; Pháp lý; Hoàn cảnh riêng) — <em>trước</em> khi hành động, cập nhật <strong>ít nhất hằng năm</strong> hoặc trước thay đổi trọng yếu. <em>Lệnh khách tự đề xuất nhưng không phù hợp:</em> tác động lên danh mục <strong>nhỏ → giáo dục</strong> khách về độ lệch so với IPS (theo chính sách phê duyệt của công ty); tác động <strong>trọng yếu → cập nhật IPS</strong> (khách từ chối: thực hiện ở <em>tài khoản tự quản lý riêng</em> nếu công ty cho phép, hoặc cân nhắc lại quan hệ tư vấn).</p><p>III(D): không được tuyên bố hay <em>ngụ ý</em> khách sẽ hưởng mức lợi nhuận quá khứ; trình bày <em>composite theo tỷ trọng</em> của các danh mục tương đồng (không dùng một tài khoản đẹp nhất), đưa <em>tài khoản đã đóng</em> vào lịch sử, ghi rõ kết quả <em>mô phỏng</em>, công bố gross/net phí — đều đáp ứng chuẩn mực dù không theo GIPS. III(E): bảo mật áp dụng cho khách <em>cũ, hiện tại và tiềm năng</em>; nếu luật áp dụng buộc giữ bí mật kể cả về hành vi phạm pháp của khách, <strong>tuân theo luật</strong> — và hợp tác với điều tra PCP không bao giờ là vi phạm.</p>"
    },
    {
     "h": "Standard IV — Duties to Employers (loyalty, additional compensation, supervisors)",
     "en": "<ul><li><strong>IV(A) Loyalty — independent practice:</strong> before undertaking independent competitive activity, notify the employer of the <em>type of services, expected duration, and compensation</em> — and do not begin <strong>until consent is received</strong>.</li><li><strong>Leaving an employer:</strong> while still employed, act in the employer’s best interest. Violations include: misappropriation of trade secrets; misuse of confidential information; <em>solicitation of the employer’s clients prior to leaving</em>; self-dealing; misappropriating client lists; and <em>taking records or files without written permission</em>. You are <strong>free to prepare</strong> to leave (interviews after hours, registering a business, renting an office) as long as preparations don’t breach loyalty. <em>After departure:</em> skills, knowledge, and experience are yours; simple knowledge of former clients’ names is not confidential; you may contact former clients using <strong>public information or memory</strong>, provided nothing comes from the old firm’s records and no non-compete is violated; firm records stored on a <em>home computer must be erased or returned</em>. Best practice for social media: keep separate personal and professional accounts. <strong>Exceptions:</strong> whistleblowing against the employer is permitted only to protect clients or market integrity — never for personal gain; an employee-led buyout is consistent with IV(A) because it rests on the employer’s permission.</li><li><strong>IV(B) Additional compensation:</strong> obtain <strong>written consent from the employer BEFORE</strong> accepting compensation or benefits from third parties for services rendered to the employer or that could create a conflict. \"Written\" includes any documentable form (e-mail). Contrast with I(B): an unconditional gift from a client for <em>past</em> results needs only disclosure; compensation tied to <em>future</em> performance needs prior written consent. Report the <em>nature, approximate amount, and duration</em> to supervisor/compliance, and have the offering party confirm the terms.</li><li><strong>IV(C) Responsibilities of supervisors:</strong> anyone with employees under their control exercises supervisory responsibility — regardless of whether those employees are members. Prevent and detect violations through <em>adequate compliance procedures</em> (clearly written, tailored, a compliance officer with authority, checks and balances, reporting/sanction procedures). If the system is inadequate, <strong>decline supervisory responsibility in writing</strong> until it is fixed. Once a violation is discovered: respond promptly, conduct a <em>thorough investigation</em>, <strong>increase supervision or restrict the wrongdoer pending the outcome</strong> (getting a verbal promise \"it won’t happen again\" is the classic wrong answer), and review procedures to prevent recurrence. Tie incentives to <em>client interests and how outcomes are achieved</em>, not just production.</li></ul>",
     "vi": "<ul><li><strong>IV(A) Trung thành — hành nghề độc lập:</strong> trước khi làm dịch vụ cạnh tranh bên ngoài, phải thông báo cho công ty về <em>loại dịch vụ, thời gian dự kiến và thù lao</em> — và không được bắt đầu <strong>cho tới khi nhận được chấp thuận</strong>.</li><li><strong>Khi rời công ty:</strong> lúc còn làm việc, phải hành động vì lợi ích công ty. Vi phạm gồm: chiếm dụng bí mật kinh doanh; lạm dụng thông tin mật; <em>lôi kéo khách hàng trước khi nghỉ</em>; tư lợi cơ hội của công ty; chiếm dụng danh sách khách hàng; và <em>mang hồ sơ, tài liệu đi mà không có văn bản cho phép</em>. Bạn <strong>được tự do chuẩn bị</strong> (phỏng vấn ngoài giờ, đăng ký doanh nghiệp, thuê mặt bằng) miễn không vi phạm nghĩa vụ trung thành. <em>Sau khi nghỉ:</em> kỹ năng, kiến thức, kinh nghiệm là của bạn; việc chỉ nhớ tên khách hàng cũ không phải thông tin mật; được liên hệ khách cũ bằng <strong>thông tin công khai hoặc trí nhớ</strong>, miễn không lấy gì từ hồ sơ công ty cũ và không vi phạm thỏa thuận không cạnh tranh; hồ sơ công ty lưu trên <em>máy tính cá nhân phải xóa hoặc trả lại</em>. Mạng xã hội: nên tách tài khoản cá nhân và công việc. <strong>Ngoại lệ:</strong> tố giác công ty chỉ được phép khi nhằm bảo vệ khách hàng hoặc sự liêm chính của thị trường — không vì tư lợi; thương vụ nhân viên mua lại mảng kinh doanh phù hợp IV(A) vì dựa trên sự cho phép của công ty.</li><li><strong>IV(B) Thù lao bổ sung:</strong> phải có <strong>văn bản chấp thuận của công ty TRƯỚC</strong> khi nhận thù lao/lợi ích từ bên thứ ba cho công việc phục vụ công ty hoặc có thể gây xung đột. \"Văn bản\" gồm mọi hình thức lưu vết được (email). Đối chiếu với I(B): quà vô điều kiện từ khách cho kết quả <em>quá khứ</em> chỉ cần khai báo; thù lao gắn với hiệu quả <em>tương lai</em> cần chấp thuận bằng văn bản trước. Báo cáo <em>bản chất, giá trị ước tính, thời hạn</em> cho cấp trên/compliance, và đề nghị bên chi trả xác nhận điều khoản.</li><li><strong>IV(C) Trách nhiệm người giám sát:</strong> ai có nhân viên dưới quyền đều mang trách nhiệm giám sát — bất kể nhân viên đó có phải member hay không. Ngăn ngừa và phát hiện vi phạm bằng <em>quy trình compliance đầy đủ</em> (văn bản rõ ràng, may đo theo hoạt động, compliance officer có thực quyền, cơ chế kiểm soát chéo, quy trình báo cáo/kỷ luật). Nếu hệ thống yếu, <strong>từ chối nhận trách nhiệm giám sát bằng văn bản</strong> cho tới khi khắc phục. Khi phát hiện vi phạm: phản ứng ngay, <em>điều tra kỹ lưỡng</em>, <strong>tăng giám sát hoặc hạn chế người vi phạm trong khi chờ kết luận</strong> (chỉ lấy lời hứa miệng \"sẽ không tái phạm\" là đáp án sai kinh điển), và rà soát quy trình để ngừa tái diễn. Gắn cơ chế thưởng với <em>lợi ích khách hàng và cách đạt kết quả</em>, không chỉ doanh số.</li></ul>"
    },
    {
     "h": "Standards V, VI, VII — highlights",
     "en": "<ul><li><strong>V(A) Diligence and Reasonable Basis:</strong> every recommendation needs a reasonable and adequate basis supported by research. Using third-party research is fine if you assess its rigor. Group research: you need not agree with the conclusion, but if the process was sound you may keep your name on the report.</li><li><strong>V(B) Communication with Clients:</strong> distinguish <em>fact</em> from <em>opinion</em>; disclose the basic format of the investment process and material changes to it; disclose significant limitations and risks.</li><li><strong>V(C) Record Retention:</strong> maintain records supporting analysis (CFA Institute recommends ≥7 years if no regulatory rule). Records belong to the <em>firm</em>, not the analyst.</li><li><strong>VI(A) Disclosure of Conflicts:</strong> disclose all matters that could impair independence — prominently and in plain language (e.g., board seats, stock ownership, referral relationships).</li><li><strong>VI(B) Priority of Transactions:</strong> client and employer transactions come before personal trades. Family accounts that are regular fee-paying client accounts must be treated like any other client — not disadvantaged.</li><li><strong>VI(C) Referral Fees:</strong> disclose to employer and clients any compensation received for referrals <em>before</em> entering the agreement.</li><li><strong>VII(A) Conduct in CFA Program:</strong> no cheating, no sharing exam content (even the general topic areas tested), no using the exam for personal gain.</li><li><strong>VII(B) Reference to CFA Institute/Designation:</strong> the CFA designation is used as an adjective, never a noun (\"She is a CFA charterholder\", not \"She is a CFA\"). No claims of superior performance from holding the charter. Candidates may state they are \"a Level II candidate in the CFA Program\" only if registered for the next exam.</li></ul><p><strong>Slide-deck specifics:</strong> V(A) — judge secondary/third-party research on: the <em>assumptions used, rigor of analysis, timeliness, objectivity/independence, and source/accuracy of data</em>; you may rely in good faith on colleagues who vetted it, absent reason to doubt. Group research: if the process was sound, you may keep your name on the report <em>even if you disagree</em> — no action required. Firms should set <em>minimum levels of scenario testing</em> for computer-based models and measurable criteria for outside providers and external advisers. V(B) — disclose the <em>nature of services and all associated costs</em> (best practice: in writing, at the outset; specific dollar amounts not required; the duty falls on <em>client-facing</em> members), the basic format of the investment process and <em>material changes</em> to it, and significant <em>risks and limitations</em> — including <strong>liquidity</strong> (ability to exit timely at reasonable cost) and <strong>capacity</strong> (the size beyond which returns suffer). Risk-disclosure adequacy is judged on an <strong>ex ante</strong> basis — not knowing a risk that later causes losses is not automatically a breach. Distinguish <em>fact</em> (what happened or will contractually happen) from <em>opinion</em> (\"expect\", \"forecast\", \"likely\"), and separate fact from <em>statistical conjecture</em> in quant work. V(C) — records are the <strong>property of the firm</strong>: you cannot reuse historical recommendations or reports at a new employer because the supporting documentation stays behind; <em>re-create</em> the records from public sources or the covered company — <strong>not from memory</strong>. Absent regulation, retain records <strong>at least 7 years</strong>.</p><p>VI(B) — personal investing is fine when (1) clients are not disadvantaged, (2) the member takes no personal benefit from client trades, and (3) regulations are followed; a member may even trade <em>counter</em> to firm recommendations for liquidity needs (tuition, a margin call). Recommended reporting machinery: <em>disclosure of personal holdings</em> at hire and at least annually; <strong>duplicate confirmations</strong> of personal transactions sent by brokers to the firm; <strong>pre-clearance</strong> of personal trades; and disclosure of the firm’s personal-investing policies to clients (no boilerplate). Fee-paying family accounts must be treated like any other client — but where the member has <em>beneficial ownership</em>, recommended procedures treat them like the member’s <em>personal</em> accounts. VI(C) — disclose referral compensation to the <em>employer, clients, and prospective clients</em> — <strong>before</strong> entry into any formal agreement — covering the <em>nature</em> (flat/percentage, one-time/continuing, performance-based, cash or in kind) and the <em>estimated dollar value</em>; update the employer at least quarterly.</p>",
     "vi": "<ul><li><strong>V(A) Cần mẫn &amp; Cơ sở hợp lý:</strong> mọi khuyến nghị cần cơ sở nghiên cứu hợp lý, đầy đủ. Dùng nghiên cứu bên thứ ba được, nếu đã đánh giá độ tin cậy. Nghiên cứu nhóm: không cần đồng ý với kết luận, nhưng nếu quy trình chặt chẽ thì vẫn có thể để tên trên báo cáo.</li><li><strong>V(B) Trao đổi với khách hàng:</strong> phân biệt <em>sự kiện</em> và <em>quan điểm</em>; công bố quy trình đầu tư cơ bản và các thay đổi trọng yếu; nêu rõ hạn chế và rủi ro đáng kể.</li><li><strong>V(C) Lưu trữ hồ sơ:</strong> lưu tài liệu chứng minh phân tích (CFA Institute khuyến nghị ≥7 năm nếu không có quy định khác). Hồ sơ thuộc về <em>công ty</em>, không thuộc về analyst.</li><li><strong>VI(A) Công bố xung đột lợi ích:</strong> công bố rõ ràng, dễ hiểu mọi vấn đề có thể ảnh hưởng tính độc lập (ghế HĐQT, sở hữu cổ phiếu, quan hệ giới thiệu…).</li><li><strong>VI(B) Ưu tiên giao dịch:</strong> giao dịch cho khách hàng và công ty trước giao dịch cá nhân. Tài khoản người thân nếu là tài khoản khách hàng trả phí bình thường thì phải đối xử như mọi khách hàng khác — không được thiệt thòi.</li><li><strong>VI(C) Phí giới thiệu:</strong> công bố cho công ty và khách hàng mọi khoản thù lao giới thiệu <em>trước khi</em> ký thỏa thuận.</li><li><strong>VII(A) Ứng xử trong kỳ thi CFA:</strong> không gian lận, không chia sẻ nội dung đề (kể cả chủ đề chung được hỏi), không lợi dụng kỳ thi cho lợi ích cá nhân.</li><li><strong>VII(B) Sử dụng danh xưng CFA:</strong> CFA dùng như tính từ, không phải danh từ (\"She is a CFA charterholder\", không nói \"She is a CFA\"). Không tuyên bố charter đem lại kết quả đầu tư vượt trội. Ứng viên chỉ được nói \"Level II candidate in the CFA Program\" nếu đã đăng ký kỳ thi kế tiếp.</li></ul><p><strong>Chi tiết theo slide:</strong> V(A) — đánh giá nghiên cứu thứ cấp/bên thứ ba theo: <em>giả định sử dụng, độ chặt chẽ của phân tích, tính kịp thời, tính khách quan/độc lập, nguồn và độ chính xác của dữ liệu</em>; được tin cậy một cách thiện chí vào đồng nghiệp đã thẩm định, trừ khi có lý do nghi ngờ. Nghiên cứu nhóm: nếu quy trình chặt chẽ, được giữ tên trên báo cáo <em>dù không đồng ý với kết luận</em> — không cần hành động gì. Công ty nên đặt <em>mức kiểm thử kịch bản tối thiểu</em> cho mô hình máy tính và tiêu chí đo lường được cho nhà cung cấp/cố vấn bên ngoài. V(B) — công bố <em>bản chất dịch vụ và mọi chi phí liên quan</em> (thực hành tốt: bằng văn bản, ngay đầu quan hệ; không bắt buộc nêu số tiền cụ thể; nghĩa vụ thuộc về member <em>tiếp xúc khách hàng</em>), khuôn khổ cơ bản của quy trình đầu tư và <em>các thay đổi trọng yếu</em>, cùng <em>rủi ro và giới hạn</em> đáng kể — gồm <strong>thanh khoản</strong> (khả năng thoát vị thế kịp thời với chi phí hợp lý) và <strong>sức chứa (capacity)</strong> (quy mô mà vượt qua thì lợi nhuận giảm). Mức độ đầy đủ của công bố rủi ro được xét trên cơ sở <strong>ex ante</strong> — không biết trước một rủi ro sau này gây lỗ không mặc nhiên là vi phạm. Tách <em>sự kiện</em> (đã xảy ra hoặc chắc chắn theo hợp đồng) khỏi <em>quan điểm</em> (\"expect\", \"forecast\", \"likely\"), và tách sự kiện khỏi <em>suy đoán thống kê</em> trong phân tích định lượng. V(C) — hồ sơ là <strong>tài sản của công ty</strong>: không được tái sử dụng khuyến nghị/báo cáo cũ ở công ty mới vì tài liệu chứng minh ở lại công ty cũ; phải <em>tái lập</em> hồ sơ từ nguồn công khai hoặc từ chính doanh nghiệp được phân tích — <strong>không từ trí nhớ</strong>. Không có quy định pháp lý thì lưu <strong>tối thiểu 7 năm</strong>.</p><p>VI(B) — đầu tư cá nhân hợp lệ khi (1) khách không bị thiệt, (2) member không trục lợi từ giao dịch của khách, (3) tuân thủ quy định; thậm chí được giao dịch <em>ngược</em> khuyến nghị của công ty vì nhu cầu thanh khoản (đóng học phí, margin call). Cơ chế báo cáo khuyến nghị: <em>khai báo danh mục cá nhân</em> khi vào làm và ít nhất hằng năm; broker gửi <strong>bản sao xác nhận giao dịch</strong> cá nhân về công ty; <strong>phê duyệt trước (pre-clearance)</strong> các giao dịch cá nhân; công bố chính sách đầu tư cá nhân của công ty cho khách hàng (không dùng câu chữ chung chung). Tài khoản người thân trả phí phải được đối xử như mọi khách hàng — nhưng khi member có <em>quyền lợi thụ hưởng</em> trong đó, quy trình khuyến nghị coi chúng như tài khoản <em>cá nhân</em> của member. VI(C) — công bố thù lao giới thiệu cho <em>công ty, khách hàng và khách hàng tiềm năng</em> — <strong>trước khi</strong> ký bất kỳ thỏa thuận chính thức nào — nêu rõ <em>bản chất</em> (phí cố định/phần trăm, một lần/liên tục, theo hiệu quả, tiền mặt hay hiện vật) và <em>giá trị ước tính</em>; cập nhật cho công ty ít nhất hằng quý.</p>"
    },
    {
     "h": "Standard VII in detail — the CFA Program and the designation",
     "en": "<ul><li><strong>VII(A) Conduct in the Program</strong> prohibits any conduct undermining the integrity of the charter: cheating on exams; violating testing policies; providing confidential program/exam information; circumventing security measures; <em>improperly using an association with CFA Institute for personal or professional gain</em>; and misrepresenting information on the Professional Conduct Statement. <strong>What candidates may not disclose:</strong> specific exam questions; <em>broad topical areas and formulas tested — or NOT tested</em>; all exam aspects remain confidential until CFA Institute releases them. Members involved in developing or grading exams may not disclose questions under consideration, deliberations, or scoring information. VII(A) does <strong>not</strong> prohibit expressing opinions — members and candidates are free to disagree publicly with CFA Institute’s policies and procedures.</li><li><strong>VII(B) Reference to the Institute, the designation, and the Program.</strong> A <em>candidate</em> is someone whose registration has been accepted and who is enrolled for a specified exam, or who has sat for it and awaits results — someone registered who declines to sit is not an active candidate. Candidates must not claim a <em>partial designation</em> (\"CFA Level II\" on a business card) nor cite an <em>expected completion date</em> (\"CFA expected 2026\"). Factual statements are fine: \"passed all three levels on first attempts\", \"Level III candidate in the CFA Program\", \"completing the Program improved my skills\", \"eligible for the charter upon completing the work-experience requirement\". <em>Active membership</em> requires filing the annual Professional Conduct Statement and paying dues; a lapsed member may reference membership only in the past tense. The marks are <strong>adjectives, never nouns</strong>: \"Jane Doe, CFA\" or \"a CFA charterholder\" — never \"she is a CFA\"; no claims of superior performance from holding the charter; the certification mark may not be altered or embedded in a company name or logo.</li></ul>",
     "vi": "<ul><li><strong>VII(A) Ứng xử trong Chương trình</strong> cấm mọi hành vi làm tổn hại uy tín của charter: gian lận thi cử; vi phạm chính sách khảo thí; tiết lộ thông tin mật của chương trình/đề thi; lách các biện pháp an ninh; <em>lợi dụng mối liên hệ với CFA Institute cho lợi ích cá nhân, nghề nghiệp</em>; khai sai trên Professional Conduct Statement. <strong>Thí sinh không được tiết lộ:</strong> câu hỏi cụ thể trong đề; <em>các mảng chủ đề rộng và công thức được hỏi — hoặc KHÔNG được hỏi</em>; mọi khía cạnh của đề thi là bảo mật cho tới khi CFA Institute công bố. Thành viên tham gia ra đề/chấm thi không được tiết lộ câu hỏi đang cân nhắc, các cuộc thảo luận, thông tin chấm điểm. VII(A) <strong>không</strong> cấm bày tỏ quan điểm — member và candidate được tự do công khai bất đồng với chính sách, quy trình của CFA Institute.</li><li><strong>VII(B) Dẫn chiếu Institute, danh hiệu và Chương trình.</strong> <em>Candidate</em> là người có đơn đăng ký được chấp nhận và đã ghi danh một kỳ thi cụ thể, hoặc đã thi và đang chờ kết quả — người đăng ký nhưng bỏ thi không phải candidate đang hoạt động. Candidate không được nhận <em>danh hiệu một phần</em> (\"CFA Level II\" trên danh thiếp) và không được nêu <em>ngày hoàn thành dự kiến</em> (\"CFA expected 2026\"). Phát biểu sự kiện là hợp lệ: \"đỗ cả ba level ngay lần đầu\", \"Level III candidate in the CFA Program\", \"hoàn thành Chương trình giúp tôi nâng cao kỹ năng\", \"đủ điều kiện nhận charter sau khi hoàn tất yêu cầu kinh nghiệm\". <em>Tư cách thành viên hoạt động</em> đòi hỏi nộp Professional Conduct Statement hằng năm và đóng phí; thành viên hết hiệu lực chỉ được nhắc tư cách trong quá khứ. Danh xưng là <strong>tính từ, không bao giờ là danh từ</strong>: \"Jane Doe, CFA\" hoặc \"a CFA charterholder\" — không nói \"she is a CFA\"; không tuyên bố hiệu quả đầu tư vượt trội nhờ charter; certification mark không được chỉnh sửa hay gắn vào tên/logo công ty.</li></ul>"
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
    },
    {
     "h": "Composites vs total firm assets, TWR/MWR, portability & verification in detail",
     "en": "<ul><li><strong>Who can claim:</strong> any <em>firm that manages actual assets</em>; <strong>asset owners</strong> may also comply — under the Standards for Firms if they compete for business, or the Standards for Asset Owners if they report to an oversight body. The 2020 edition has three chapters: Firms, Asset Owners, Verifiers. A firm has <em>only two options</em>: fully comply with <strong>all</strong> requirements (including Guidance Statements and Q&amp;As) and claim compliance with the prescribed statement — or make <em>no reference to GIPS at all</em>. Recommendations are best practice (\"should\"). If GIPS conflicts with local regulation: <strong>follow local law, then fully disclose the conflict in the GIPS Report</strong>.</li><li><strong>Composite vs total firm assets:</strong> a composite aggregates portfolios managed to a <em>similar mandate, objective, or strategy</em>, with membership criteria set <em>ex ante</em>. <strong>Fee-paying discretionary</strong> portfolios MUST be in at least one composite; <strong>non-fee-paying discretionary</strong> portfolios MAY be included (with disclosure of their percentage each period); <strong>non-discretionary</strong> portfolios MUST NOT be included. Documented client-imposed restrictions that prevent implementing the strategy (very large cash floors, no-cut-loss rules, index-tracking mandates) can make a portfolio non-discretionary. <strong>Total firm assets</strong> = aggregate fair value of <em>all</em> assets managed (discretionary and non-discretionary, fee-paying and not), <em>including</em> assets run by sub-advisors the firm selects, but <em>excluding</em> advisory-only assets and uncalled committed capital.</li><li><strong>Performance record:</strong> initially at least <strong>5 years</strong> of GIPS-compliant performance (or since inception if younger), then add a year at a time to a minimum of <strong>10 years</strong>. Returns are <strong>time-weighted</strong>, unless the firm controls external cash flows <em>and</em> the vehicle is closed-end, fixed-life, fixed-commitment, or holds significant illiquid investments — then <strong>money-weighted</strong> returns may be presented (chosen consistently).</li><li><strong>Portability:</strong> past performance may be linked to the new/acquiring firm only if (a) substantially all decision makers moved, (b) the decision process remains substantially intact and independent, (c) records support the performance, and (d) there is no break in the track record (with a break, present the periods separately without linking). Acquired non-compliant assets get <strong>one year</strong> to be brought into compliance. Firms must notify CFA Institute of their claim via the <em>GIPS Compliance Notification Form</em>, updated annually by <strong>30 June</strong>.</li><li><strong>Verification:</strong> voluntary, performed by an <em>independent third party</em> (never the firm itself) on a <em>firm-wide</em> basis. It provides assurance that policies for composite maintenance and for calculating/presenting performance are designed in compliance and implemented firm-wide — it does <strong>NOT</strong> assure the accuracy of any specific composite or pooled fund presentation. Benefits: more credible claim, stronger internal processes.</li></ul>",
     "vi": "<ul><li><strong>Ai được tuyên bố tuân thủ:</strong> mọi <em>công ty đang quản lý tài sản thực</em>; <strong>asset owners</strong> (chủ tài sản như quỹ hưu trí) cũng có thể tuân thủ — theo chuẩn cho Firms nếu cạnh tranh giành khách, hoặc chuẩn cho Asset Owners nếu báo cáo cho cơ quan giám sát. Phiên bản 2020 có ba chương: Firms, Asset Owners, Verifiers. Công ty chỉ có <em>hai lựa chọn</em>: tuân thủ <strong>toàn bộ</strong> yêu cầu (gồm cả Guidance Statements, Q&amp;A) và tuyên bố theo mẫu quy định — hoặc <em>không nhắc gì đến GIPS</em>. Các khuyến nghị là thực hành tốt (\"should\"). Nếu GIPS xung đột với quy định địa phương: <strong>theo luật địa phương, đồng thời công bố đầy đủ xung đột trong GIPS Report</strong>.</li><li><strong>Composite vs tổng tài sản công ty:</strong> composite gộp các danh mục cùng <em>mandate/mục tiêu/chiến lược</em>, tiêu chí đặt <em>trước (ex ante)</em>. Danh mục <strong>trả phí, được ủy quyền</strong> BẮT BUỘC nằm trong ít nhất một composite; danh mục <strong>không trả phí nhưng được ủy quyền</strong> CÓ THỂ đưa vào (kèm công bố tỷ trọng từng kỳ); danh mục <strong>không được ủy quyền</strong> KHÔNG ĐƯỢC đưa vào. Ràng buộc do khách hàng áp đặt cản trở chiến lược (buộc giữ tiền mặt rất lớn, cấm cắt lỗ, buộc bám chỉ số) có thể khiến danh mục thành non-discretionary. <strong>Tổng tài sản công ty</strong> = giá trị hợp lý của <em>tất cả</em> tài sản đang quản lý (ủy quyền lẫn không, trả phí lẫn không), <em>bao gồm</em> tài sản giao cho sub-advisor do công ty chọn, nhưng <em>loại trừ</em> tài sản chỉ tư vấn và vốn cam kết chưa giải ngân.</li><li><strong>Chuỗi thành tích:</strong> ban đầu tối thiểu <strong>5 năm</strong> tuân thủ GIPS (hoặc từ khi thành lập), bổ sung từng năm tới tối thiểu <strong>10 năm</strong>. Lợi suất dùng <strong>time-weighted</strong>, trừ khi công ty kiểm soát dòng tiền vào/ra <em>và</em> quỹ thuộc dạng đóng, đời hạn cố định, vốn cam kết cố định, hoặc nắm nhiều tài sản kém thanh khoản — khi đó được trình bày <strong>money-weighted</strong> (chọn nhất quán).</li><li><strong>Portability (chuyển tiếp thành tích):</strong> thành tích quá khứ chỉ được nối vào công ty mới/công ty mua lại nếu (a) gần như toàn bộ người ra quyết định chuyển sang, (b) quy trình đầu tư giữ nguyên bản chất và độc lập, (c) có hồ sơ chứng minh, và (d) không đứt quãng chuỗi thành tích (nếu đứt: trình bày tách biệt, không được nối). Tài sản mua lại chưa tuân thủ có <strong>một năm</strong> để đưa về tuân thủ. Công ty phải thông báo với CFA Institute qua <em>GIPS Compliance Notification Form</em>, cập nhật hằng năm trước <strong>30/06</strong>.</li><li><strong>Verification:</strong> tự nguyện, do <em>bên thứ ba độc lập</em> thực hiện (công ty không được tự verify), phạm vi <em>toàn công ty</em>. Verification bảo đảm rằng chính sách duy trì composite và tính/trình bày kết quả được thiết kế đúng chuẩn và triển khai toàn công ty — <strong>KHÔNG</strong> bảo đảm độ chính xác của bất kỳ bản trình bày composite/quỹ cụ thể nào. Lợi ích: tuyên bố đáng tin hơn, quy trình nội bộ chặt hơn.</li></ul>"
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
  ],
  [
   "standards of conduct",
   "Benchmarks for the minimally acceptable behavior of members; they clarify the code of ethics",
   "Chuẩn đối chiếu cho hành vi tối thiểu chấp nhận được; làm rõ code of ethics"
  ],
  [
   "watch list / restricted list",
   "Firm lists controlling trading and research in securities where the firm holds MNPI",
   "Danh sách theo dõi / hạn chế giao dịch khi công ty nắm MNPI"
  ],
  [
   "information barrier (firewall)",
   "Physical and informational separation between departments holding MNPI and public-side desks",
   "Tường lửa thông tin giữa bộ phận nắm MNPI và các bàn giao dịch công khai"
  ],
  [
   "directed brokerage",
   "Client directs the use of its own brokerage; manager still owes best execution",
   "Khách chỉ định cách dùng hoa hồng môi giới; manager vẫn phải bảo đảm best execution"
  ],
  [
   "pre-clearance & duplicate confirmations",
   "Approving personal trades in advance; brokers copy the firm on all personal transactions",
   "Phê duyệt trước giao dịch cá nhân; broker gửi bản sao xác nhận về công ty"
  ],
  [
   "RR-TT-LL-U",
   "IPS profile: Risk & Return; Time horizon & Tax; Liquidity & Legal; Unique circumstances",
   "Khung hồ sơ IPS: rủi ro–lợi nhuận, kỳ hạn–thuế, thanh khoản–pháp lý, hoàn cảnh riêng"
  ],
  [
   "total firm assets (GIPS)",
   "Fair value of all managed assets incl. sub-advised; excludes advisory-only and uncalled capital",
   "Tổng tài sản công ty theo GIPS — gồm cả sub-advisor, loại tài sản chỉ tư vấn và vốn chưa gọi"
  ],
  [
   "portability (GIPS)",
   "Conditions for linking a track record to a new or acquiring firm",
   "Điều kiện nối chuỗi thành tích sang công ty mới/công ty mua lại"
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
  ],
  {
   "name": "Set D — Slide deck Q1–12: Foundations, PCP & the Code",
   "qs": [
    {
     "q": "Which of the following least likely forms the basic structure for enforcement of the CFA Institute Professional Conduct Program?",
     "opts": [
      "Bylaws",
      "Rules of Procedure",
      "Board of Governors"
     ],
     "ans": 2,
     "en": "The basic enforcement structure rests on the CFA Institute Bylaws and the Rules of Procedure for Proceedings Related to Professional Conduct. The Board of Governors oversees the organization but is not the enforcement structure itself.",
     "vi": "Cấu trúc thực thi dựa trên Bylaws và Rules of Procedure. Board of Governors chỉ giám sát tổ chức, không phải cấu trúc thực thi."
    },
    {
     "q": "Holly Baker, CFA, explains disciplinary sanctions CFA Institute may impose. Sanctions include:",
     "opts": [
      "Fines for violations",
      "Revocation of membership",
      "Banishment from the industry"
     ],
     "ans": 1,
     "en": "CFA Institute can censure, suspend, or revoke membership/the charter — it is a private association and cannot fine anyone or ban them from the industry.",
     "vi": "CFA Institute chỉ có thể khiển trách, đình chỉ, thu hồi tư cách/charter — không thể phạt tiền hay cấm hành nghề trong ngành."
    },
    {
     "q": "Which is an example of an activity that may be legal but that CFA Institute considers unethical?",
     "opts": [
      "Making legally required disclosures in marketing materials",
      "Trading while in possession of material nonpublic information where local law does not prohibit it",
      "Disclosure by an employee of his own company’s dishonest activity"
     ],
     "ans": 1,
     "en": "Legality is a floor: insider trading violates Standard II(A) even in jurisdictions where it is legal. Whistleblowing (C) may be illegal in some places yet ethical.",
     "vi": "Luật chỉ là sàn: giao dịch nội gián vi phạm II(A) kể cả nơi luật không cấm. Tố giác sai phạm (C) có thể phạm luật nhưng vẫn có đạo đức."
    },
    {
     "q": "Which of the following best outlines the minimally acceptable behaviors expected of a member belonging to a societal group?",
     "opts": [
      "Standards of conduct",
      "Code of ethics",
      "A firm’s employee handbook"
     ],
     "ans": 0,
     "en": "Standards of conduct serve as benchmarks for minimally acceptable behavior and help clarify the code; a code of ethics is only a general guide.",
     "vi": "Standards of conduct là chuẩn cho hành vi tối thiểu chấp nhận được và làm rõ code; code of ethics chỉ là kim chỉ nam tổng quát."
    },
    {
     "q": "An investment fund manager has a finance degree and 20+ years at a top asset manager. Based only on this information, could he most likely claim to be part of a profession?",
     "opts": [
      "Yes — the industry requires specialized knowledge and skills",
      "No",
      "Yes — as part of the industry, he provides a service to others"
     ],
     "ans": 1,
     "en": "A profession requires all three traits: specialized knowledge, service to others, AND adherence to a common code of ethics. Nothing in the facts shows commitment to a shared code, so the claim cannot be made on this information alone.",
     "vi": "Một nghề chuyên môn cần đủ ba yếu tố: kiến thức chuyên sâu, phục vụ người khác, VÀ cam kết theo bộ quy tắc đạo đức chung. Dữ kiện không cho thấy yếu tố thứ ba nên chưa thể khẳng định."
    },
    {
     "q": "The belief that one’s ethical standards are above average most likely reflects which behavioral bias?",
     "opts": [
      "Overconfidence",
      "Short-term focus",
      "Situational influence"
     ],
     "ans": 0,
     "en": "Overconfidence in one’s own ethics prevents reflection — the first challenge to ethical conduct in the curriculum.",
     "vi": "Quá tự tin vào đạo đức bản thân khiến người ta không tự vấn — thách thức thứ nhất với hành xử đạo đức."
    },
    {
     "q": "When an otherwise honest person allows the promise of a bonus to negatively influence her behavior, it is most likely an example of:",
     "opts": [
      "Overconfidence bias",
      "Situational influence",
      "Compliance oversimplification"
     ],
     "ans": 1,
     "en": "Bonuses, promotions, prestige, and loyalty are the textbook situational influences — external factors that shape behavior more than character does.",
     "vi": "Tiền thưởng, thăng chức, danh tiếng, lòng trung thành là các áp lực hoàn cảnh kinh điển — yếu tố bên ngoài chi phối hành vi mạnh hơn tính cách."
    },
    {
     "q": "Beneficial features of an ethical decision-making framework least likely include analyzing:",
     "opts": [
      "The best course of action when alternatives are available",
      "The decision maker’s own perspective of contemplated actions",
      "A broader picture from a long-term point of view"
     ],
     "ans": 1,
     "en": "The framework’s value is looking beyond the decision maker’s own perspective — evaluating from multiple perspectives, seeing the best alternative, and taking the long-term view.",
     "vi": "Giá trị của khung là vượt ra ngoài góc nhìn của chính người ra quyết định — đánh giá đa góc nhìn, tìm phương án tốt nhất, nhìn dài hạn."
    },
    {
     "q": "What is most likely a critical aspect of the Consider phase of an ethical decision-making framework?",
     "opts": [
      "Distinguishing duties to stakeholders",
      "Contemplating your final decision",
      "Seeking additional guidance"
     ],
     "ans": 2,
     "en": "The Consider phase covers situational influences, additional guidance, and alternative actions. Duties to stakeholders belong to Identify; the decision itself belongs to Decide and act.",
     "vi": "Giai đoạn Consider gồm: áp lực hoàn cảnh, tìm tư vấn thêm, phương án thay thế. Nghĩa vụ với các bên thuộc bước Identify; ra quyết định thuộc bước Decide."
    },
    {
     "q": "The most important factor in promoting ethical decision making among an investment firm’s employees is:",
     "opts": [
      "A strong culture of integrity by the firm’s senior management",
      "Adoption of a code of ethics that clearly defines the firm’s ethical principles",
      "The investment professional’s natural desire to do the right thing"
     ],
     "ans": 0,
     "en": "The curriculum states that development, maintenance, and demonstration of a strong culture of integrity by senior management may be the single most important factor; a code is a critical first step but insufficient.",
     "vi": "Curriculum nêu rõ: văn hóa chính trực mạnh mẽ từ ban lãnh đạo cấp cao có thể là yếu tố quan trọng nhất; code chỉ là bước đầu cần nhưng chưa đủ."
    },
    {
     "q": "According to the Code of Ethics, members and candidates must:",
     "opts": [
      "Maintain their professional competence to exercise independent professional judgment",
      "Place the integrity of the investment profession and the interests of clients above their own personal interests",
      "Practice in a professional and ethical manner with the public, clients, and others in the global capital markets"
     ],
     "ans": 1,
     "en": "B states one of the six components verbatim. A and C blend or distort the wording of separate components.",
     "vi": "Đáp án B là nguyên văn một trong sáu thành phần của Code. A và C trộn lẫn/bóp méo câu chữ của các thành phần khác nhau."
    },
    {
     "q": "Which statement is most likely consistent with the CFA Institute Code of Ethics? Members and candidates must:",
     "opts": [
      "Promote the integrity and viability of the global capital markets for the ultimate benefit of society",
      "Practice the highest level of integrity and always act in the best interest of their employers",
      "Maintain their competence and require professionals under their supervision to adopt the Code"
     ],
     "ans": 0,
     "en": "A is verbatim from the Code. The Code puts clients (not employers) first, and members must \"strive to maintain and improve\" others’ competence — not require Code adoption.",
     "vi": "A đúng nguyên văn. Code đặt khách hàng (không phải công ty) lên trước, và thành viên chỉ \"nỗ lực duy trì, nâng cao\" năng lực người khác — không bắt buộc họ theo Code."
    }
   ]
  },
  {
   "name": "Set E — Slide deck Q13–31: Standard I Professionalism",
   "qs": [
    {
     "q": "Linda Chin, CFA, works where local securities laws are minimal and insider trading is not prohibited. She follows her country’s mandatory legal requirements. Which action is most consistent with the Standards?",
     "opts": [
      "Follow the CFA Code and Standards",
      "Continue her current investment strategy",
      "Disclose her political advocacy to clients"
     ],
     "ans": 0,
     "en": "When applicable law is less strict than the Code and Standards (or absent), the member must follow the Code — the stricter rule always governs.",
     "vi": "Khi luật áp dụng lỏng hơn Code (hoặc không có), phải theo Code — quy định nghiêm hơn luôn thắng."
    },
    {
     "q": "James Woods, CFA, reasonably believes colleague Sandra Clarke is engaged in unethical trading possibly violating securities law. He is not her supervisor and his portfolios are unaffected. The recommended course is to:",
     "opts": [
      "Take no action because he is not directly involved",
      "Report Clarke to ABC’s trading supervisor or compliance department",
      "Report Clarke to the governmental or regulatory organization"
     ],
     "ans": 1,
     "en": "Report suspected violations internally to a supervisor or compliance. Reporting to authorities is encouraged in some cases but is not required by the Code.",
     "vi": "Báo cáo nghi vấn vi phạm trong nội bộ cho cấp trên hoặc compliance. Tố giác với cơ quan nhà nước được khuyến khích trong một số trường hợp nhưng Code không bắt buộc."
    },
    {
     "q": "Litman’s client Mike trades before material information becomes public. Mike’s country requires reporting suspicious behavior to regulators immediately; Litman’s country requires confidentiality. The contract states the client’s home-country law governs. Litman should:",
     "opts": [
      "Report the suspicious behavior to the authorities",
      "Report the suspicious behavior to his supervisors only",
      "Keep the client’s information confidential"
     ],
     "ans": 0,
     "en": "Standard I(A): comply with the applicable law. The governing law (the client’s country) requires immediate reporting to regulators — so Litman must report.",
     "vi": "I(A): tuân theo luật áp dụng. Luật điều chỉnh hợp đồng (nước của khách) buộc báo cáo ngay với cơ quan quản lý — nên Litman phải báo cáo."
    },
    {
     "q": "A recommended procedure for compliance with Knowledge of the Law is to encourage firms to:",
     "opts": [
      "Distribute summaries of securities laws to clients at least annually",
      "Provide written protocols for reporting suspected legal or regulatory violations",
      "Seek the advice of a regulatory agency when in doubt about potential violations"
     ],
     "ans": 1,
     "en": "Firms should establish written protocols for reporting violations. Legal information goes to employees (not clients), and doubt calls for compliance personnel or legal counsel — not the regulator.",
     "vi": "Công ty nên có quy trình bằng văn bản để báo cáo vi phạm. Thông tin pháp luật phổ biến cho nhân viên (không phải khách), và khi phân vân thì hỏi compliance/luật sư — không phải cơ quan quản lý."
    },
    {
     "q": "Robert Miguel, CFA, and his wife attended a major-league playoff game in a client’s luxury suite on Saturday. He told his supervisor on Monday. Miguel has:",
     "opts": [
      "Not violated the Standards",
      "Violated the Standards because disclosure must be in writing",
      "Violated the Standards because he must disclose the gift prior to accepting"
     ],
     "ans": 0,
     "en": "A gift from a client rewards the existing relationship: acceptance with disclosure to the employer is permitted, and prior disclosure is required only \"if possible\" — prompt after-the-fact disclosure complies.",
     "vi": "Quà từ khách hàng gắn với quan hệ sẵn có: được nhận kèm khai báo với công ty; khai trước chỉ khi \"có thể\" — khai ngay sau đó vẫn hợp lệ."
    },
    {
     "q": "An investment banking department often receives MNPI valuable to the firm’s brokerage clients. The best policy is to:",
     "opts": [
      "Permanently prohibit both buy and sell recommendations of investment-banking clients’ stocks",
      "Establish physical and informational barriers to prevent information exchange between investment banking and brokerage",
      "Monitor the exchange of information between investment banking and brokerage"
     ],
     "ans": 1,
     "en": "Information barriers (\"firewalls\") are the standard control: separate the private side from the public side rather than banning research or merely watching information flow.",
     "vi": "Tường lửa thông tin là biện pháp chuẩn: tách bên nắm thông tin mật khỏi bên giao dịch công khai, thay vì cấm nghiên cứu hay chỉ giám sát trao đổi."
    },
    {
     "q": "Ward will visit Evans Industries’ headquarters for his research report. Evans plans to pay for meals, hotel, and air transportation. The best course under the Standards is to:",
     "opts": [
      "Accept the expense-paid trip and write an objective report",
      "Pay for all travel expenses, including meals and incidental items",
      "Accept the trip but disclose the value of the services in the report"
     ],
     "ans": 1,
     "en": "Best practice under I(B): pay your own way to guard independence. Disclosure does not cure the threat, and confidence in one’s own objectivity is exactly the overconfidence trap.",
     "vi": "Thực hành tốt theo I(B): tự trả chi phí để bảo vệ tính độc lập. Công bố không chữa được nguy cơ, còn tự tin vào sự khách quan của mình chính là bẫy quá tự tin."
    },
    {
     "q": "A recommended procedure for Independence and Objectivity is to encourage firms to:",
     "opts": [
      "Prohibit any employee participation in equity IPOs",
      "Put a corporate client on a restricted list if the firm is unwilling to disseminate adverse opinions about it",
      "Provide every client with procedures for reporting unethical behavior"
     ],
     "ans": 1,
     "en": "Rather than issue biased coverage, move the company to a restricted list and give only factual information. IPO participation requires prior approval, not prohibition.",
     "vi": "Thay vì phát hành báo cáo thiên lệch, đưa công ty vào restricted list và chỉ cung cấp thông tin thuần sự kiện. Tham gia IPO cần phê duyệt trước, không phải cấm hẳn."
    },
    {
     "q": "Which are recommended procedures for Independence and Objectivity? P1: Impose limits on personnel acquiring securities in private placements. P2: Prohibit reimbursement from corporate issuers for air transportation. P3: Remove a company from the restricted list if the firm is unwilling to permit dissemination of adverse opinions.",
     "opts": [
      "Procedures 1 and 2",
      "Procedures 1 and 3",
      "Procedures 2 and 3"
     ],
     "ans": 0,
     "en": "Strict limits on private placements and paying one’s own air transportation are both recommended. P3 reverses the correct action — such companies go ON the restricted list.",
     "vi": "Giới hạn private placements và tự trả vé máy bay đều là khuyến nghị. P3 nói ngược — các công ty đó phải được ĐƯA VÀO restricted list."
    },
    {
     "q": "Belen Zapata, CFA, owner of Kawah Investments, promised investors returns of up to 12% per year from non-investment-grade bonds. Yields fell, no investments were ever made, and clients were repaid in full. Zapata most likely violated the Standards because of the:",
     "opts": [
      "Return of capital",
      "Promised returns",
      "Investment mandate"
     ],
     "ans": 1,
     "en": "Promising a specific return on volatile investments is misrepresentation under I(C) — the violation stands even though clients lost nothing.",
     "vi": "Cam kết mức lợi nhuận cụ thể trên khoản đầu tư biến động là misrepresentation theo I(C) — vẫn vi phạm dù khách không mất tiền."
    },
    {
     "q": "Ellen Miamoto’s report uses: a paragraph from Benson Smith’s research, a modified graph originally by Gordon Thompson, and a chart she built from U.S. Bureau of Labor Statistics data. She must acknowledge:",
     "opts": [
      "Benson Smith, Gordon Thompson, and the Bureau of Labor Statistics",
      "Benson Smith and Gordon Thompson",
      "Benson Smith only"
     ],
     "ans": 1,
     "en": "Quotations and adapted work must be attributed; data from recognized government/statistical reporting services (BLS) needs no attribution.",
     "vi": "Trích dẫn và tác phẩm chỉnh sửa phải dẫn nguồn; dữ liệu từ dịch vụ thống kê được công nhận (BLS) thì không cần."
    },
    {
     "q": "A recommended procedure to help prevent misrepresentation is for firms to:",
     "opts": [
      "Specifically designate which employees are authorized to speak on behalf of the firm",
      "Perform quarterly competence reviews of employees who present to clients",
      "Ensure each employee develops his own procedures for verifying third-party information"
     ],
     "ans": 0,
     "en": "Designating authorized spokespeople (with a written list of the firm’s services and qualifications) is the recommended control; verification procedures are developed by the firm, not each employee.",
     "vi": "Chỉ định người được phát ngôn (kèm danh mục dịch vụ, năng lực của công ty bằng văn bản) là khuyến nghị chuẩn; quy trình xác minh do công ty xây, không phải từng nhân viên tự làm."
    },
    {
     "q": "Nicholas Bennett, CFA, a trader, was verbally harassed on the exchange floor and responded by pushing the other trader to the ground. The exchange cleared Bennett of wrongdoing. Bennett:",
     "opts": [
      "Did not violate any Code or Standard",
      "Violated the Misconduct Standard",
      "Violated both Misconduct and Integrity of Capital Markets"
     ],
     "ans": 1,
     "en": "A physical altercation at work reflects adversely on professional reputation — a violation of I(D) regardless of the exchange’s ruling. No market-integrity issue is involved.",
     "vi": "Ẩu đả tại nơi làm việc làm tổn hại uy tín nghề nghiệp — vi phạm I(D) bất kể phán quyết của sàn. Không liên quan đến liêm chính thị trường."
    },
    {
     "q": "Doug Watson, CFA, in a sales role, frequently drinks excessively at client outings and was cited for misdemeanor public intoxication after dropping off a client. Regarding I(A) Knowledge of the Law and I(D) Misconduct, Watson violated:",
     "opts": [
      "Both Standards",
      "Neither Standard",
      "Only one of these Standards"
     ],
     "ans": 2,
     "en": "Repeated excessive drinking in a professional setting reflects poorly on professional conduct — an I(D) violation. A misdemeanor citation of this kind does not implicate I(A), which concerns laws governing professional activities.",
     "vi": "Say xỉn lặp lại trong bối cảnh công việc làm xấu hình ảnh nghề nghiệp — vi phạm I(D). Lỗi vi cảnh loại này không chạm tới I(A), vốn nói về luật điều chỉnh hoạt động nghề nghiệp."
    },
    {
     "q": "According to recommended procedures for Misconduct, members should encourage their firms to:",
     "opts": [
      "Conduct background checks of all employees at least annually",
      "Develop and adopt a code of ethics to which every employee must subscribe",
      "Check references of potential clients to ensure they are of good character"
     ],
     "ans": 1,
     "en": "The recommendations: a code of ethics every employee subscribes to, a disseminated list of violations and sanctions, and checking references of potential EMPLOYEES — not clients, and not annual background checks.",
     "vi": "Khuyến nghị gồm: code of ethics mọi nhân viên cam kết, phổ biến danh mục vi phạm và chế tài, kiểm tra lai lịch NHÂN VIÊN tiềm năng — không phải khách hàng, không phải kiểm tra hằng năm."
    },
    {
     "q": "Members should encourage their firms to disseminate a list of potential violations and associated disciplinary sanctions to:",
     "opts": [
      "All clients only",
      "All employees only",
      "Both all clients and all employees"
     ],
     "ans": 1,
     "en": "The list of violations and sanctions is an internal deterrent — disseminated to all employees.",
     "vi": "Danh mục vi phạm và chế tài là công cụ răn đe nội bộ — phổ biến cho toàn thể nhân viên."
    },
    {
     "q": "Glusker, a hedge-fund attorney, moved into a sales role requiring a licensing exam covering client-fairness rules. Unfamiliar with those rules, he did not study and passed on general industry knowledge alone. Under I(E) Competence, Glusker most likely:",
     "opts": [
      "Did not violate — he passed the required examination",
      "Violated — he assumed the role without acquiring and maintaining the knowledge it requires",
      "Did not violate — licensing is solely the regulator’s concern"
     ],
     "ans": 1,
     "en": "Competence means having sufficient knowledge, skills, and abilities for the role. Passing an exam without learning the client-protection rules leaves him unable to serve competently — an I(E) violation.",
     "vi": "Năng lực nghĩa là đủ kiến thức, kỹ năng, khả năng cho vai trò đảm nhận. Đỗ kỳ thi mà không nắm các quy tắc bảo vệ khách hàng khiến anh ta không thể hành nghề đạt chuẩn — vi phạm I(E)."
    },
    {
     "q": "Mifune, a financial planner, recommended Vouchsafe life-insurance products after researching its high credit rating, strong financials, and long record. Vouchsafe later collapsed due to previously unknown fraud by its CFO. Under I(E), Mifune most likely:",
     "opts": [
      "Violated — his clients’ policies became worthless",
      "Did not violate — he exercised reasonable diligence; unknowable fraud does not create a violation",
      "Violated — planners must guarantee the products they recommend"
     ],
     "ans": 1,
     "en": "Competence and diligence are judged ex ante. His research was reasonable and the fraud was unknown — a bad outcome from a sound process is not a violation.",
     "vi": "Năng lực và sự cẩn trọng được xét tại thời điểm hành động (ex ante). Nghiên cứu hợp lý, gian lận không thể biết trước — kết quả xấu từ quy trình đúng không phải vi phạm."
    },
    {
     "q": "Halsey, a portfolio manager, is only generally aware of cryptocurrency but, pressed by clients and afraid of missing the trend, buys a heavily promoted crypto product for several client portfolios without further research. Under I(E), Halsey most likely:",
     "opts": [
      "Violated — he acted outside his competence without gaining knowledge or assistance",
      "Did not violate — clients requested the investment",
      "Did not violate — he had read several newspaper articles"
     ],
     "ans": 0,
     "en": "Acting in an unfamiliar asset class without study, assistance, or supervision breaches Competence (and undermines diligence) — client pressure does not excuse it.",
     "vi": "Hành động trong lớp tài sản mình không hiểu, không nghiên cứu thêm, không nhờ hỗ trợ là vi phạm I(E) — áp lực từ khách hàng không phải lý do miễn trừ."
    }
   ]
  },
  {
   "name": "Set F — Slide deck Q32–56: Standards II–III",
   "qs": [
    {
     "q": "During a job interview, candidate Wright mentions a live merger his investment bank is advising on — no public releases exist. Which action by interviewer Andrews is LEAST likely a violation?",
     "opts": [
      "Waiting until the next day before trading, to allow time for the information to become public",
      "Notifying all investment managers in his firm so no client is disadvantaged",
      "Placing the securities mentioned on the firm’s restricted trading list"
     ],
     "ans": 2,
     "en": "The information is MNPI: trading after a self-imposed delay or spreading it internally both violate II(A). Placing the names on a restricted list is the appropriate control.",
     "vi": "Đây là MNPI: chờ một ngày rồi giao dịch hay phổ biến nội bộ đều vi phạm II(A). Đưa mã vào restricted list mới là hành động đúng."
    },
    {
     "q": "The theory by which analysts may combine material public information and nonmaterial nonpublic information as a basis for recommendations — even if the conclusion would have been material had the company communicated it directly — is:",
     "opts": [
      "Mosaic theory",
      "Economic theory",
      "Probability theory"
     ],
     "ans": 0,
     "en": "Mosaic theory: conclusions assembled from public plus nonmaterial nonpublic pieces are legitimate under II(A).",
     "vi": "Mosaic theory: kết luận ghép từ thông tin công khai + thông tin không trọng yếu chưa công bố là hợp lệ theo II(A)."
    },
    {
     "q": "According to recommended procedures for the MNPI standard, firms should:",
     "opts": [
      "Review employee trading through the maintenance of watch lists",
      "Prohibit all types of proprietary activity when the firm possesses MNPI",
      "Permit regular interdepartmental communication of nonpublic information between corporate finance and equity research"
     ],
     "ans": 0,
     "en": "Watch/restricted lists with employee-trade review are recommended. Proprietary activity need not stop entirely — market makers may stay passively on the contra side; interdepartmental MNPI flow is what firewalls prevent.",
     "vi": "Watch/restricted list kèm rà soát giao dịch nhân viên là khuyến nghị. Không cần dừng mọi hoạt động tự doanh — market maker được duy trì thế bị động; còn để MNPI chảy giữa các phòng ban chính là điều firewall phải chặn."
    },
    {
     "q": "Matt Jacobs, CFA, recommended thinly traded Timeco, which fell sharply after insider block sales. Still believing in the stock, he buys shares personally in order to raise the price and convince his client to hold. Jacobs has:",
     "opts": [
      "Not violated — the trade benefits his client",
      "Violated — he intended to manipulate the market price of Timeco",
      "Not violated — he is providing liquidity to offset insider sales"
     ],
     "ans": 1,
     "en": "Intent is the test under II(B): trading to create artificial price support is transaction-based manipulation regardless of the motive to help a client.",
     "vi": "II(B) xét theo ý định: giao dịch nhằm tạo lực đỡ giá giả tạo là thao túng bằng giao dịch, dù động cơ là \"giúp\" khách hàng."
    },
    {
     "q": "Paul Drake advises participants in his employer’s pension plan and believes company stock is too risky for them. The company Treasurer threatens to fire him if he keeps advising them to sell. Drake should:",
     "opts": [
      "Make sell recommendations but note the Treasurer’s differing, valid view",
      "Continue to advise employees to sell their stock",
      "Tell employees he cannot advise on company stock due to a conflict"
     ],
     "ans": 1,
     "en": "The duty of loyalty runs to plan participants and beneficiaries — not to the sponsoring company. Drake must keep giving the advice their interests require.",
     "vi": "Nghĩa vụ trung thành thuộc về người tham gia và người thụ hưởng quỹ — không phải công ty tài trợ. Drake phải tiếp tục khuyến nghị đúng với lợi ích của họ."
    },
    {
     "q": "Tony Calaveccio, CFA, manages the TrustCo Small Cap Venture Fund. He uses soft dollars from the fund’s brokerage for research on mid-cap stocks and on the municipal bond market (bonds he holds personally). These actions are:",
     "opts": [
      "A violation regarding the municipal bond research, but not the mid-cap research",
      "Not in violation of the Code and Standards",
      "A violation regarding both the mid-cap and the municipal bond research"
     ],
     "ans": 0,
     "en": "Soft dollars are the client’s asset and must directly assist decisions for that client. Mid-cap research can plausibly aid the fund; municipal-bond research serves his personal portfolio — a III(A) violation.",
     "vi": "Soft dollars là tài sản của khách và phải trực tiếp phục vụ quyết định cho khách đó. Nghiên cứu mid-cap còn có thể hỗ trợ quỹ; nghiên cứu trái phiếu đô thị phục vụ danh mục cá nhân — vi phạm III(A)."
    },
    {
     "q": "Concerning a manager’s responsibility to vote proxies, which statement is correct?",
     "opts": [
      "The manager must vote all proxies unless there are bona fide reasons, consistent with participants’ and beneficiaries’ interests, for not doing so",
      "The manager is only required to vote proxies against management",
      "The manager must vote all proxies without exception"
     ],
     "ans": 0,
     "en": "Proxies must be voted in an informed, responsible manner, but a cost–benefit analysis may justify skipping routine or immaterial votes — hence \"unless bona fide reasons.\"",
     "vi": "Phải bỏ phiếu proxy có hiểu biết và trách nhiệm, nhưng phân tích chi phí–lợi ích có thể biện minh việc bỏ qua các nghị quyết thường lệ/không trọng yếu — vì vậy có ngoại lệ \"lý do chính đáng\"."
    },
    {
     "q": "A portfolio manager is hired by the executive manager of a trust. The duty of loyalty is owed to the:",
     "opts": [
      "Trustee",
      "Executive manager",
      "Beneficiaries of the trust"
     ],
     "ans": 2,
     "en": "When managing a plan or trust, the client is not the hiring party but the ultimate beneficiaries.",
     "vi": "Khi quản lý quỹ/tín thác, khách hàng thực không phải người thuê bạn mà là những người thụ hưởng cuối cùng."
    },
    {
     "q": "Noor Mawar, CFA, manages a trust for an orphaned student, mandated to provide stable low-risk income until she turns 30. The student asks Mawar to invest in a risky new venture from a blog tip. Mawar ignores the request and keeps conservative investments. Did Mawar violate the Standards?",
     "opts": [
      "Yes",
      "No — the client’s objectives, per the governing documents, were met",
      "No — the investment time frame matches the horizon"
     ],
     "ans": 1,
     "en": "The duty runs to the beneficiary under the trust’s governing documents, which dictate stable low-risk income. Rejecting an unsuitable request honors III(A)/III(C).",
     "vi": "Nghĩa vụ thuộc về người thụ hưởng theo văn kiện quản trị quỹ — quy định thu nhập ổn định rủi ro thấp. Từ chối yêu cầu không phù hợp là đúng III(A)/III(C)."
    },
    {
     "q": "A recommended procedure for Loyalty, Prudence, and Care is that members should:",
     "opts": [
      "Eliminate all actual and potential conflicts of interest",
      "Make clients aware of all forms of manager compensation",
      "Submit to each client, at least annually, an itemized statement of funds and securities in custody"
     ],
     "ans": 1,
     "en": "Disclose all forms of compensation. Conflicts are disclosed, not always eliminable, and itemized statements should go out at least QUARTERLY.",
     "vi": "Công bố mọi hình thức thù lao. Xung đột phải công bố chứ không phải lúc nào cũng loại bỏ được, và sao kê chi tiết phải gửi ít nhất HẰNG QUÝ."
    },
    {
     "q": "Which action helps ensure fair treatment of brokerage clients when a new recommendation is made?",
     "opts": [
      "Informing all people in the firm in advance that a recommendation will be disseminated",
      "Distributing recommendations to institutional clients before individual accounts",
      "Minimizing the time between the decision and the dissemination of the recommendation"
     ],
     "ans": 2,
     "en": "Shortening the decision-to-dissemination window reduces the chance any group learns first — the core of fair dealing.",
     "vi": "Rút ngắn khoảng thời gian từ quyết định đến công bố giảm khả năng nhóm nào đó biết trước — cốt lõi của fair dealing."
    },
    {
     "q": "Smith mails a buy→sell recommendation change to all clients on Wednesday. Thursday, a client calls with a buy order for that stock. Smith should:",
     "opts": [
      "Accept the order",
      "Advise the customer of the change in recommendation before accepting the order",
      "Refuse the order as contrary to the firm’s recommendation"
     ],
     "ans": 1,
     "en": "Fair dealing requires clients to receive material recommendation changes before the firm acts on their orders — inform first, then execute if the client insists.",
     "vi": "Fair dealing yêu cầu khách được biết thay đổi khuyến nghị trọng yếu trước khi công ty thực hiện lệnh — thông báo trước, khách vẫn muốn thì thực hiện."
    },
    {
     "q": "Ross Nelson, CFA, manages his family’s account (no beneficial ownership) at normal fees, but allocates block-trade shares to it only after other clients are filled. His best course is to:",
     "opts": [
      "Treat the account like other client accounts",
      "Treat the account like other employee accounts",
      "Transfer the account to another professional"
     ],
     "ans": 0,
     "en": "A fee-paying family account with no beneficial ownership is a regular client and must not be disadvantaged — systematic last-place allocation violates fair dealing.",
     "vi": "Tài khoản người thân trả phí, không có quyền lợi thụ hưởng, là khách hàng bình thường và không được chịu thiệt — luôn phân bổ sau cùng là vi phạm fair dealing."
    },
    {
     "q": "A firm notifies clients of new recommendations in order of estimated transaction size, largest first. All clients signed a consent form acknowledging this procedure. Under III(B), this is:",
     "opts": [
      "Not a violation because clients signed the consent form",
      "A violation of the standard",
      "Not a violation because clients are aware of the policy"
     ],
     "ans": 1,
     "en": "Fair dealing cannot be waived: a procedure that systematically advantages the largest clients violates III(B) regardless of disclosure or consent.",
     "vi": "Fair dealing không thể được \"miễn trừ\" bằng chữ ký: quy trình ưu tiên hệ thống cho khách lớn vi phạm III(B) dù đã công bố và được đồng ý."
    },
    {
     "q": "All of John Chapman’s clients are standard fee-paying clients. He offers premium service (for higher fees) only to the half he believes would benefit, and later distributes a recommendation only to clients for whom he deems it suitable. Has Chapman violated fair dealing?",
     "opts": [
      "No",
      "Yes — by offering the premium service only to clients he believes would benefit",
      "Yes — by distributing the recommendation only to clients for whom he deems it suitable"
     ],
     "ans": 1,
     "en": "Service levels must be disclosed and offered to ALL clients willing to pay — selective offering violates III(B). Suitability-based distribution of recommendations is proper.",
     "vi": "Các hạng dịch vụ phải được công bố và chào cho MỌI khách sẵn sàng trả phí — chào chọn lọc vi phạm III(B). Phân phối khuyến nghị theo tính phù hợp thì đúng chuẩn."
    },
    {
     "q": "A recommended fair-dealing procedure for a member at a large firm is to:",
     "opts": [
      "Offer different levels of service selectively based on clients’ investment needs",
      "Disclose to clients and prospective clients how she selects accounts to participate in an order",
      "Inform all firm staff of upcoming recommendations"
     ],
     "ans": 1,
     "en": "Disclose trade-allocation procedures to clients and prospects. Service tiers must not be selective, and pre-announcing recommendations internally invites front running.",
     "vi": "Công bố quy trình phân bổ giao dịch cho khách và khách tiềm năng. Hạng dịch vụ không được chào chọn lọc, còn báo trước khuyến nghị trong nội bộ dễ dẫn tới front running."
    },
    {
     "q": "Graham Carson, CFA, advises Ron Grayson (moderate risk, 15-year horizon). Grayson complains one stock paid no dividend with beta 1.4, and another (beta 0.9, 3% dividend) had earnings later found misstated by regulators. Carson has most likely:",
     "opts": [
      "Not violated the Standards",
      "Violated only the suitability Standard",
      "Violated both suitability and diligence/reasonable basis"
     ],
     "ans": 0,
     "en": "Suitability is judged at the total-portfolio level, not stock by stock; and relying on audited financials later found misstated does not breach diligence.",
     "vi": "Suitability đánh giá ở cấp tổng danh mục, không theo từng mã; và việc dựa vào BCTC đã kiểm toán sau này bị phát hiện sai không vi phạm nghĩa vụ cẩn trọng."
    },
    {
     "q": "Emily Wells, CFA, receives an unsolicited trade request she believes is unsuitable under the client’s IPS. The focus of her discussion with the client should most appropriately:",
     "opts": [
      "Be on updating the IPS to reflect changed objectives",
      "Depend on whether the requested trade has a material impact on the portfolio",
      "Be on educating the client about how the trade deviates from the IPS"
     ],
     "ans": 1,
     "en": "The response is impact-driven: minimal impact → educate the client; material impact → update the IPS (or move to an unmanaged account / reassess the relationship).",
     "vi": "Cách xử lý phụ thuộc mức tác động: nhỏ → giáo dục khách; trọng yếu → cập nhật IPS (hoặc chuyển sang tài khoản tự quản lý / cân nhắc lại quan hệ)."
    },
    {
     "q": "Recommended suitability procedures: P1 — review the investor’s objectives and constraints annually unless reasons dictate more frequent review. P2 — take performance-measurement benchmarks into consideration when formulating an IPS.",
     "opts": [
      "Procedure 1 only",
      "Procedure 2 only",
      "Both Procedure 1 and Procedure 2"
     ],
     "ans": 2,
     "en": "Annual review (or more often as circumstances require) and specifying performance benchmarks are both parts of the recommended IPS process.",
     "vi": "Rà soát hằng năm (hoặc thường xuyên hơn khi cần) và xác định benchmark đo hiệu quả đều thuộc quy trình IPS khuyến nghị."
    },
    {
     "q": "Alvin Mell, CFA, with client Jack Allen’s permission, tells a prospect: \"I was able to earn a 15% return for Jack Allen last year.\" Mell has LEAST likely violated the Standard concerning:",
     "opts": [
      "Misrepresentation I(C)",
      "Performance presentation III(D)",
      "Preservation of confidentiality III(E)"
     ],
     "ans": 2,
     "en": "Allen authorized the disclosure, so confidentiality is intact. Citing one flattering account, however, is not a fair and complete performance presentation and can mislead.",
     "vi": "Allen đã cho phép nên không vi phạm bảo mật. Nhưng viện dẫn một tài khoản đẹp không phải cách trình bày kết quả công bằng, đầy đủ và có thể gây hiểu lầm."
    },
    {
     "q": "A recommended procedure for performance presentation is that members should:",
     "opts": [
      "Exclude terminated accounts from performance history",
      "Use a single representative account for each mandate",
      "Disclose that results are simulated when model results are used"
     ],
     "ans": 2,
     "en": "Simulated/model results must be labeled. Terminated accounts are INCLUDED (with end dates), and weighted composites replace single representative accounts.",
     "vi": "Kết quả mô phỏng phải ghi rõ. Tài khoản đã đóng phải ĐƯA VÀO lịch sử (kèm thời điểm đóng), và composite theo tỷ trọng thay cho một tài khoản đại diện."
    },
    {
     "q": "Bronson advises a university endowment’s board of trustees. A prominent alumnus, Murdock, urgently requests the fund’s comprehensive financial information to close a deal with a potential contributor, saying he cannot reach the trustees. Bronson should:",
     "opts": [
      "Send the information because disclosure would benefit the client",
      "Not send the information, to preserve confidentiality",
      "Send the information and promptly notify the trustees"
     ],
     "ans": 1,
     "en": "The client is the endowment (via its trustees). Murdock is a third party with no authorization — releasing the information breaches III(E).",
     "vi": "Khách hàng là quỹ endowment (thông qua hội đồng ủy thác). Murdock là bên thứ ba không được ủy quyền — cung cấp thông tin vi phạm III(E)."
    },
    {
     "q": "CFA Institute asks a member to support a Professional Conduct investigation, and he discloses the requested client information. Applicable law requires maintaining client confidentiality. Has he violated the Standards?",
     "opts": [
      "No",
      "Yes — the Standard on Fair Dealing",
      "Yes — the Standard on Knowledge of the Law"
     ],
     "ans": 2,
     "en": "III(E) permits PCP cooperation only when permissible under applicable law. Here the law forbids disclosure, so complying with the stricter law was required — disclosing breached I(A).",
     "vi": "III(E) chỉ cho phép hợp tác với PCP khi luật áp dụng cho phép. Ở đây luật cấm tiết lộ, phải theo luật nghiêm hơn — việc tiết lộ vi phạm I(A)."
    },
    {
     "q": "Which is a recommended procedure for preservation of confidentiality?",
     "opts": [
      "Convey to clients that not all firm-sponsored communication methods may be suitable for transmitting confidential information",
      "Encourage firms to provide periodic confidentiality training to all clients",
      "Members should become experts in information-technology security"
     ],
     "ans": 0,
     "en": "Members should discuss appropriate communication channels with clients. Training targets employees, and members need to follow firm procedures — not become IT security experts.",
     "vi": "Nên trao đổi với khách về kênh liên lạc phù hợp. Đào tạo là dành cho nhân viên, và member chỉ cần tuân thủ quy trình của công ty — không phải trở thành chuyên gia bảo mật."
    },
    {
     "q": "Recommended confidentiality procedures: P1 — disclose to authorized fellow employees only information that will improve service to the client. P2 — adopt the standard confidentiality procedures used by leading firms in the industry.",
     "opts": [
      "Procedure 1 only",
      "Procedure 2 only",
      "Both Procedures 1 and 2"
     ],
     "ans": 0,
     "en": "Information sharing is limited to authorized colleagues working for that client. Procedures should reflect the firm’s own size and operations — not be copied from other firms.",
     "vi": "Chỉ chia sẻ với đồng nghiệp được ủy quyền đang phục vụ chính khách đó. Quy trình phải phù hợp quy mô, hoạt động của chính công ty — không sao chép từ công ty khác."
    }
   ]
  },
  {
   "name": "Set G — Slide deck Q57–81: Standards IV–VI",
   "qs": [
    {
     "q": "Marc Davidson, CFA, a trust specialist at Integrity Financial, starts a part-time paid consulting business without informing Integrity and has his assistant compile a list of Integrity’s clients. After joining a competitor, his new manager arranges meetings with prospects — many of them Integrity clients — and several transfer their business. Did Davidson violate the Code and Standards?",
     "opts": [
      "No",
      "Yes — the undisclosed part-time consulting business violates the Standards",
      "Yes — both the consulting business and the meetings with Integrity clients violate the Standards"
     ],
     "ans": 1,
     "en": "For-fee independent practice requires notifying the employer and receiving consent BEFORE starting — the consulting business (and the client-list compilation supporting it) violates IV(A). Post-departure meetings arranged by the new employer are not themselves a violation.",
     "vi": "Hành nghề độc lập có thu phí phải thông báo và được công ty chấp thuận TRƯỚC — việc tư vấn ngoài (và việc sai trợ lý lập danh sách khách) vi phạm IV(A). Các cuộc gặp sau khi nghỉ do sếp mới sắp xếp tự nó không phải vi phạm."
    },
    {
     "q": "Jefferson Piedmont, CFA, developed a quantitative stock-selection model on his own time before joining Branch Investing, which then used it. On leaving a year later, he found the original copy at his home and gave it to his new employer. Did Piedmont most likely violate the Standards?",
     "opts": [
      "No",
      "Yes — he misappropriated property belonging to Branch",
      "Yes — he failed to tell his new employer the model was used at Branch"
     ],
     "ans": 0,
     "en": "The model was created on personal time before the employment began and the copy was his own original — it never became Branch’s property, so sharing it violates nothing.",
     "vi": "Mô hình được xây trên thời gian cá nhân trước khi vào công ty và bản anh giữ là bản gốc của chính mình — chưa từng là tài sản của Branch, nên không vi phạm."
    },
    {
     "q": "A client tells portfolio manager Jurgen he will compensate her beyond her firm’s pay based on the annual capital appreciation of his portfolio. Jurgen should:",
     "opts": [
      "Turn it down — it conflicts with other clients’ interests",
      "Turn it down — it creates pressure for short-term performance",
      "Obtain permission from her employer prior to accepting the arrangement"
     ],
     "ans": 2,
     "en": "A performance-based side arrangement is additional compensation under IV(B): written consent from all parties — especially the employer — is required before accepting; it need not be refused.",
     "vi": "Thỏa thuận thưởng theo hiệu quả tương lai thuộc IV(B): cần văn bản chấp thuận của các bên — nhất là công ty — trước khi nhận; không bắt buộc phải từ chối."
    },
    {
     "q": "Amy Brooks, a Level III candidate with supervisory responsibilities, finds the firm’s compliance system inadequate and informs her unsupportive supervisor. Under the Standards, Brooks:",
     "opts": [
      "Has satisfied her obligation by informing her manager",
      "Must dissociate herself from the firm",
      "Should decline in writing to accept supervisory responsibility until an adequate compliance system is adopted"
     ],
     "ans": 2,
     "en": "A supervisor who cannot supervise effectively because compliance procedures are inadequate should decline the responsibility in writing until the system is fixed.",
     "vi": "Người giám sát không thể giám sát hiệu quả vì quy trình compliance yếu phải từ chối trách nhiệm bằng văn bản cho tới khi hệ thống được khắc phục."
    },
    {
     "q": "Russell Finley, CFA, supervises trading and sales and learns a sales assistant made personal trades in a restricted security. The LEAST appropriate action is to:",
     "opts": [
      "Begin an investigation to determine the extent of the wrongdoing",
      "Restrict and increase monitoring of the employee’s activities",
      "Speak directly to the employee and obtain assurance the violation will not recur"
     ],
     "ans": 2,
     "en": "Relying on a promise not to repeat the violation is inadequate supervision. The correct response: investigate promptly and limit/monitor the wrongdoer pending the outcome.",
     "vi": "Chỉ lấy lời cam đoan \"sẽ không tái phạm\" là giám sát yếu kém. Cách đúng: điều tra ngay và hạn chế/giám sát người vi phạm trong khi chờ kết luận."
    },
    {
     "q": "According to recommended procedures for Responsibilities of Supervisors, a firm’s code of ethics should:",
     "opts": [
      "Be written in plain language",
      "Be integrated into the firm’s compliance procedures",
      "Both be written in plain language and be integrated into compliance procedures"
     ],
     "ans": 0,
     "en": "The code should be clear and in plain language — and kept SEPARATE from detailed compliance procedures so its principles stand apart from rule mechanics.",
     "vi": "Code cần rõ ràng, ngôn ngữ dễ hiểu — và TÁCH RIÊNG khỏi quy trình compliance chi tiết để nguyên tắc không lẫn với kỹ thuật tuân thủ."
    },
    {
     "q": "Recommended procedures for Responsibilities of Supervisors include:",
     "opts": [
      "Encouraging employers to provide a copy of the firm’s code of ethics to clients",
      "Requiring firms to adopt the CFA Institute Code and Standards verbatim",
      "Consolidating the code of ethics and compliance procedures into one document"
     ],
     "ans": 0,
     "en": "Sharing the code with clients demonstrates the firm’s commitment. Firms need not adopt the CFA Code verbatim, and code and compliance procedures should not be consolidated.",
     "vi": "Cung cấp code cho khách hàng thể hiện cam kết của công ty. Không bắt buộc dùng nguyên văn Code của CFA, và không nên gộp code với quy trình compliance."
    },
    {
     "q": "Willier’s documented research supports a weak \"hold\" on Company X. At lunch he overhears a respected analyst from another firm voice a conflicting bullish view, then issues a strong \"buy\". Willier:",
     "opts": [
      "Violated the Standards by failing to distinguish fact from opinion",
      "Violated the Standards — he lacked a reasonable and adequate basis for the recommendation",
      "Was in full compliance with the Standards"
     ],
     "ans": 1,
     "en": "An overheard opinion is not a reasonable basis. His own diligent research pointed the other way — issuing the buy violates V(A).",
     "vi": "Một ý kiến nghe lỏm không phải cơ sở hợp lý. Nghiên cứu bài bản của chính anh chỉ chiều ngược lại — phát hành khuyến nghị mua vi phạm V(A)."
    },
    {
     "q": "Moe Girard, CFA, works in a group issuing consensus recommendations. He disagrees with one consensus view but is confident in the group’s analytical ability. To comply, Girard:",
     "opts": [
      "Does not need to take any action",
      "Must request his name be removed from the report",
      "Should attach his independent opinion as an appendix"
     ],
     "ans": 0,
     "en": "If the process is sound and the basis reasonable and adequate, a member need not agree with the conclusion and may remain on the report — no action required.",
     "vi": "Nếu quy trình chặt chẽ và cơ sở hợp lý, member không cần đồng ý với kết luận và vẫn có thể đứng tên báo cáo — không cần hành động gì."
    },
    {
     "q": "Recommended procedures for Diligence and Reasonable Basis include encouraging firms to:",
     "opts": [
      "Customize evaluation criteria for each external advisor",
      "Establish maximum levels of scenario testing for computer-based models",
      "Appoint a supervisory analyst to confirm a reasonable and adequate basis before external circulation"
     ],
     "ans": 2,
     "en": "A supervisory analyst or review committee should approve reports pre-release. External-adviser criteria should be standardized, and scenario testing needs MINIMUM (not maximum) levels.",
     "vi": "Cần một supervisory analyst hoặc hội đồng duyệt báo cáo trước khi phát hành. Tiêu chí đánh giá cố vấn ngoài phải chuẩn hóa, và kiểm thử kịch bản cần mức TỐI THIỂU (không phải tối đa)."
    },
    {
     "q": "Colin Gifford’s newsletter states: \"Based on next six months’ earnings of $1.50 per share and a 10% dividend increase, the price of Capricorn will be $22 by year-end.\" The LEAST appropriate action to avoid violating the Standards is to:",
     "opts": [
      "Separate fact from opinion",
      "Include earnings estimates",
      "Identify limitations of the analysis"
     ],
     "ans": 1,
     "en": "The problem is presenting forecasts as certainty (\"will be $22\"). Separating fact from opinion and disclosing limitations fix it; adding more estimates does not.",
     "vi": "Vấn đề là trình bày dự báo như điều chắc chắn (\"sẽ là 22 USD\"). Tách sự kiện khỏi quan điểm và nêu giới hạn phân tích mới là cách sửa; thêm ước tính không giúp gì."
    },
    {
     "q": "ABC Capital charges portfolio companies structuring fees and remits them to its PE fund only when the underlying investment falls in value, keeping them otherwise. The private placement memorandum does not disclose this. Under V(B), ABC Capital most likely:",
     "opts": [
      "Did not violate — the practice is common in the industry",
      "Violated — the fee arrangement is part of the costs and investment process that must be disclosed to fund investors",
      "Did not violate — investors ultimately benefited"
     ],
     "ans": 1,
     "en": "V(B) requires disclosing the nature of services, associated costs, and the investment process. An undisclosed asymmetric fee policy withholds material information — \"industry practice\" is no defense.",
     "vi": "V(B) buộc công bố bản chất dịch vụ, chi phí liên quan và quy trình đầu tư. Chính sách phí bất đối xứng không công bố là giấu thông tin trọng yếu — \"thông lệ ngành\" không phải lá chắn."
    },
    {
     "q": "An analyst built an IPS and portfolio for Susan Stevens with written process guidelines. Six months later, questioned about holdings, he cannot remember his reasoning and cannot find supporting documents. He most likely violated:",
     "opts": [
      "Standard V(B) Communications with Clients",
      "Standard V(C) Record Retention",
      "Standard III(C) Suitability"
     ],
     "ans": 1,
     "en": "Records substantiating the analysis and the reasons for actions must be developed and maintained — losing them breaches V(C).",
     "vi": "Hồ sơ chứng minh phân tích và lý do hành động phải được lập và lưu giữ — mất chúng là vi phạm V(C)."
    },
    {
     "q": "Gregor Pavlov, CFA, includes his prior-firm performance history in new fund marketing, having received his former employer’s permission to take his historical recommendations and the supporting research reports. Did Pavlov most likely violate the Standards?",
     "opts": [
      "No",
      "Yes — regarding Loyalty",
      "Yes — regarding Record Retention"
     ],
     "ans": 0,
     "en": "With the former employer’s permission to take both the recommendations and the supporting records, using them at the new firm violates neither IV(A) nor V(C).",
     "vi": "Đã được công ty cũ cho phép mang theo cả khuyến nghị lẫn hồ sơ chứng minh, nên dùng ở công ty mới không vi phạm IV(A) hay V(C)."
    },
    {
     "q": "Jamison, a junior analyst at Howard & Howard, is asked to write research on Britland Company. H&H’s M&A department has represented Britland for 20 years and two senior H&H officers are directors of Britland subsidiaries. Her best course is to:",
     "opts": [
      "Write the report but express no opinions due to the special relationships",
      "Decline to write the report",
      "Write the report and disclose the special relationships in it"
     ],
     "ans": 2,
     "en": "Conflicts do not prohibit coverage — VI(A) requires prominent disclosure of the banking relationship and the directorships so readers can weigh the bias.",
     "vi": "Xung đột không cấm viết báo cáo — VI(A) yêu cầu công bố rõ quan hệ ngân hàng đầu tư và các ghế director để người đọc tự cân nhắc."
    },
    {
     "q": "Following the Britland assignment, Jamison learns the director relationships between Howard & Howard’s senior officers and Britland’s subsidiaries remain active while she drafts her report. Under Standard VI(A), Jamison:",
     "opts": [
      "Must transfer the assignment to a senior analyst",
      "May issue the report only after the officers resign their directorships",
      "May issue the report provided the directorships and the banking relationship are prominently disclosed"
     ],
     "ans": 2,
     "en": "VI(A) is a disclosure standard, not a prohibition: full, prominent, plain-language disclosure of the conflicts lets clients judge the objectivity of the report.",
     "vi": "VI(A) là chuẩn mực về công bố, không phải lệnh cấm: công bố đầy đủ, nổi bật, dễ hiểu các xung đột để khách hàng tự đánh giá tính khách quan của báo cáo."
    },
    {
     "q": "Smith, an analyst at XYZ Brokerage, prepares a purchase recommendation on JNI Corporation. Which situation most likely represents a conflict of interest that must be disclosed?",
     "opts": [
      "Smith frequently purchases products made by JNI",
      "XYZ holds a substantial common-stock position in JNI for its own account",
      "Smith’s brother-in-law is a supplier to JNI"
     ],
     "ans": 1,
     "en": "The firm’s material beneficial ownership in the covered security is a disclosable conflict under VI(A); ordinary consumption and remote family business ties are not.",
     "vi": "Việc công ty nắm vị thế cổ phiếu đáng kể trong mã được khuyến nghị là xung đột phải công bố theo VI(A); tiêu dùng thông thường hay quan hệ họ hàng xa với nhà cung cấp thì không."
    },
    {
     "q": "Rose, a portfolio manager, plans to sell part of his personal portfolio to pay his child’s tuition. His firm recently upgraded the stock to \"strong buy.\" Under the Standards, Rose:",
     "opts": [
      "Cannot sell while the firm has a buy recommendation",
      "Is free to sell his personal holdings once his firm is properly informed of his intention",
      "Can sell only when a client places a buy order for the shares"
     ],
     "ans": 1,
     "en": "Members may trade counter to firm recommendations for legitimate liquidity needs, provided clients are not disadvantaged and the firm is informed per its procedures.",
     "vi": "Member được giao dịch ngược khuyến nghị của công ty vì nhu cầu thanh khoản chính đáng, miễn khách hàng không bị thiệt và công ty được thông báo theo quy trình."
    },
    {
     "q": "Teresa Avila’s hedge fund requires her to hold the securities she recommends. Because her account is small, she combines her personal trades with the fund’s block transactions to get the same execution. Has Avila most likely violated the Standards?",
     "opts": [
      "No",
      "Yes — related to Misconduct",
      "Yes — related to Priority of Transactions"
     ],
     "ans": 0,
     "en": "The firm mandates alignment, and bundling gives her the same price as clients — no client is disadvantaged and she gains no personal advantage, so VI(B) is satisfied.",
     "vi": "Công ty yêu cầu đồng vị thế, và việc gộp lệnh cho cô cùng mức giá với khách — không khách nào bị thiệt, cô không hưởng lợi thế riêng, nên không vi phạm VI(B)."
    },
    {
     "q": "A recommended procedure for Priority of Transactions is that investment personnel should:",
     "opts": [
      "Discourage clients from trading during blackout periods",
      "Supply copies of their personal securities transactions to clients upon request",
      "Preclear their participation in IPOs even when no conflict with client interests is apparent"
     ],
     "ans": 2,
     "en": "Prior approval of IPO participation is recommended regardless of apparent conflict. Blackout periods restrict EMPLOYEES, and duplicate confirmations go to the FIRM.",
     "vi": "Phê duyệt trước việc tham gia IPO là khuyến nghị bất kể có thấy xung đột hay không. Blackout áp cho NHÂN VIÊN, và bản sao xác nhận giao dịch gửi về CÔNG TY."
    },
    {
     "q": "Which is a recommended procedure for Priority of Transactions? Investment personnel should:",
     "opts": [
      "Examine personal trades for conflicts immediately after execution",
      "Direct their brokers to supply the firm with duplicate confirmations of all personal securities transactions",
      "Make a one-time disclosure of beneficial holdings when employment begins"
     ],
     "ans": 1,
     "en": "Duplicate confirmations and periodic statements go to the firm. Conflicts are examined BEFORE trading (pre-clearance), and holdings are disclosed at hire AND at least annually.",
     "vi": "Bản sao xác nhận và sao kê định kỳ gửi về công ty. Xung đột phải soát TRƯỚC khi giao dịch (pre-clearance), và danh mục khai khi vào làm VÀ ít nhất hằng năm."
    },
    {
     "q": "Which is a recommended procedure for Priority of Transactions? P1 — disclose personal transactions in research-universe shares to clients upon request. P2 — establish blackout periods prior to trades for clients. P3 — treat fee-paying family accounts in which the member has beneficial ownership the same as personal accounts.",
     "opts": [
      "Procedure 1",
      "Procedure 2 only",
      "Procedures 2 and 3"
     ],
     "ans": 2,
     "en": "Blackout periods before client trades and treating beneficial-ownership family accounts like personal accounts are both recommended; personal-transaction copies go to the firm, with firm policies (not transaction lists) disclosed to clients.",
     "vi": "Blackout trước lệnh của khách và coi tài khoản người thân có quyền lợi thụ hưởng như tài khoản cá nhân đều là khuyến nghị; bản sao giao dịch gửi về công ty, còn công bố cho khách là chính sách của công ty (không phải danh sách giao dịch)."
    },
    {
     "q": "Courtney Johnson, CFA, manages equity accounts and refers clients asking about fixed income to Reliable Management; Reliable, in turn, provides Johnson with equity research. Her equity clients are not informed of the arrangement. Johnson has violated:",
     "opts": [
      "None of the Standards",
      "The Standard concerning client referral fees",
      "The Standard concerning soft-dollar arrangements"
     ],
     "ans": 1,
     "en": "Referral compensation includes non-cash benefits like research. VI(C) requires disclosure of the arrangement’s nature and value to clients before formal agreements.",
     "vi": "Thù lao giới thiệu bao gồm cả lợi ích phi tiền mặt như nghiên cứu. VI(C) buộc công bố bản chất và giá trị của thỏa thuận cho khách trước khi ký kết."
    },
    {
     "q": "Jacobs and Amari receive fees for client referrals. Before service agreements are signed, Jacobs discloses the arrangement but omits its estimated dollar value; Amari discloses all details including the value. Have the Standards been violated?",
     "opts": [
      "No",
      "Yes — by Jacobs only",
      "Yes — by Jacobs and Amari"
     ],
     "ans": 1,
     "en": "VI(C) disclosure must include the nature AND estimated value of the referral compensation, made before the agreement — Jacobs’s omission is a violation; Amari complied.",
     "vi": "Công bố theo VI(C) phải gồm bản chất VÀ giá trị ước tính của thù lao giới thiệu, trước khi ký — Jacobs thiếu giá trị nên vi phạm; Amari tuân thủ."
    },
    {
     "q": "Same facts, except Amari discloses all details of the arrangement to her clients only AFTER the service agreements are signed. Have the Standards been violated?",
     "opts": [
      "No",
      "Yes — by Jacobs only",
      "Yes — by both Jacobs and Amari"
     ],
     "ans": 2,
     "en": "Disclosure must come BEFORE entry into any formal agreement so clients can evaluate the bias and true cost — Amari’s after-the-fact disclosure also violates VI(C).",
     "vi": "Phải công bố TRƯỚC khi ký thỏa thuận chính thức để khách đánh giá được thiên lệch và chi phí thật — Amari công bố sau nên cũng vi phạm VI(C)."
    }
   ]
  },
  {
   "name": "Set H — Slide deck Q82–98: Standard VII & GIPS",
   "qs": [
    {
     "q": "At \"pencils down\" ending the Level I exam, Krishna Chowdary sees others still writing and randomly fills in one remaining oval before putting his pencil down. Did his actions most likely violate the Code and Standards?",
     "opts": [
      "Yes",
      "No — other candidates continued writing",
      "No — he answered only one question, at random"
     ],
     "ans": 0,
     "en": "Writing after time is called violates the testing policies — VII(A) — regardless of what others do or how trivial the answer.",
     "vi": "Tô đáp án sau hiệu lệnh hết giờ là vi phạm quy chế thi — VII(A) — bất kể người khác làm gì hay câu trả lời nhỏ nhặt đến đâu."
    },
    {
     "q": "After failing Level II twice, Ron Vasquez posts online: \"I believe CFA Institute is intentionally limiting the number of charterholders to increase its cash flow by continuing to fail candidates.\" Vasquez is:",
     "opts": [
      "Not in violation of Standard I(D) or Standard VII(A)",
      "In violation of VII(A) but not I(D)",
      "In violation of both I(D) and VII(A)"
     ],
     "ans": 0,
     "en": "VII(A) does not prohibit expressing opinions or disagreement with CFA Institute’s policies and procedures — candidates are free to criticize the organization.",
     "vi": "VII(A) không cấm bày tỏ quan điểm hay bất đồng với chính sách của CFA Institute — thí sinh được tự do phê phán tổ chức."
    },
    {
     "q": "Albert’s business card reads \"Judy Albert, CFA Level II.\" Tye’s promotional material factually describes the CFA requirements and states that he participates in the Program and has completed Levels I and II. According to the Standards:",
     "opts": [
      "Albert has violated the Standards, but Tye has not",
      "Tye has violated the Standards, but Albert has not",
      "Both Albert and Tye have violated the Standards"
     ],
     "ans": 0,
     "en": "\"CFA Level II\" on a card claims a partial designation — a VII(B) violation. Factually stating program participation and levels completed is permitted.",
     "vi": "\"CFA Level II\" trên danh thiếp là nhận danh hiệu một phần — vi phạm VII(B). Nêu sự kiện về việc tham gia chương trình và các level đã hoàn thành thì được phép."
    },
    {
     "q": "Quinn sat for the Level III exam last weekend (results pending) and updates his resume: \"In finishing the CFA Program, I improved my investment research skills. I will be eligible for the CFA charter upon completion of the required work experience.\" Quinn:",
     "opts": [
      "Violated the Standards by claiming the Program improved his skills",
      "Violated the Standards by incorrectly stating he is eligible for the charter",
      "Did not violate the Standards"
     ],
     "ans": 1,
     "en": "With results not yet received, he has not finished the Program, so eligibility \"upon work experience alone\" is inaccurate. Describing skill benefits factually is fine.",
     "vi": "Kết quả chưa có nghĩa là chưa hoàn thành Chương trình, nên tuyên bố chỉ còn thiếu kinh nghiệm làm việc là sai. Còn mô tả lợi ích kỹ năng theo sự kiện thì hợp lệ."
    },
    {
     "q": "Which of the following is NOT a commonly perceived benefit of the GIPS standards?",
     "opts": [
      "Comparability of results across managers that claim compliance",
      "Adherence to regulatory requirements",
      "Increased confidence of investors and beneficiaries"
     ],
     "ans": 1,
     "en": "GIPS is a voluntary, practitioner-driven ethical standard — it is not a regulatory requirement, so \"regulatory adherence\" is not one of its benefits.",
     "vi": "GIPS là chuẩn đạo đức tự nguyện do giới hành nghề xây dựng — không phải quy định pháp lý, nên \"tuân thủ quy định\" không phải lợi ích của nó."
    },
    {
     "q": "Which statement about why the GIPS standards were created is LEAST likely correct? GIPS standards were created to:",
     "opts": [
      "Provide clients certainty in what is presented and allow reasonable comparisons",
      "Identify a set of ethical principles for firms in calculating and presenting historical results",
      "Establish a standardized, industry-wide approach for investment firms to follow"
     ],
     "ans": 0,
     "en": "GIPS ensures fair representation, full disclosure, and comparability — it cannot provide \"certainty\" about presented results.",
     "vi": "GIPS bảo đảm trình bày trung thực, công bố đầy đủ và khả năng so sánh — không thể mang lại \"sự chắc chắn\" về kết quả được trình bày."
    },
    {
     "q": "Where country-specific regulations conflict with the GIPS standards, firms must follow:",
     "opts": [
      "GIPS standards only",
      "Local laws only",
      "Local laws — and make full disclosure of the conflict in the GIPS Report"
     ],
     "ans": 2,
     "en": "Follow local law first, then fully disclose the conflict in the GIPS Report.",
     "vi": "Theo luật địa phương trước, sau đó công bố đầy đủ xung đột trong GIPS Report."
    },
    {
     "q": "Each composite of a GIPS-compliant firm must consist of:",
     "opts": [
      "Multiple portfolios",
      "Portfolios selected on an ex post basis",
      "Portfolios managed according to a similar investment strategy"
     ],
     "ans": 2,
     "en": "A composite aggregates portfolios with a similar mandate/objective/strategy, defined ex ante — a composite can even contain a single portfolio.",
     "vi": "Composite gộp các danh mục cùng mandate/mục tiêu/chiến lược, tiêu chí định trước — thậm chí có thể chỉ gồm một danh mục."
    },
    {
     "q": "According to GIPS, the aggregate fair value of total firm assets most likely includes all:",
     "opts": [
      "Fee-paying discretionary accounts",
      "Fee- and non-fee-paying discretionary accounts",
      "Fee- and non-fee-paying discretionary AND non-discretionary accounts"
     ],
     "ans": 2,
     "en": "Total firm assets cover everything the firm manages — discretionary or not, fee-paying or not (including sub-advised assets the firm selects).",
     "vi": "Tổng tài sản công ty bao trùm mọi thứ công ty quản lý — ủy quyền hay không, trả phí hay không (gồm cả tài sản giao sub-advisor do công ty chọn)."
    },
    {
     "q": "A key feature of the GIPS standards is that:",
     "opts": [
      "They strive to cover the unique characteristics of each asset class",
      "Firms must adhere to all requirements of the standards to claim compliance",
      "Actual, discretionary, fee-paying portfolios may be excluded from composites under limited conditions"
     ],
     "ans": 1,
     "en": "Compliance is all-or-nothing: every requirement (including Guidance Statements and Q&As) must be met firm-wide; fee-paying discretionary portfolios can never be left out of composites.",
     "vi": "Tuân thủ là tất-cả-hoặc-không: phải đáp ứng mọi yêu cầu (kể cả Guidance Statements, Q&A) trên toàn công ty; danh mục trả phí được ủy quyền không bao giờ được loại khỏi composite."
    },
    {
     "q": "On January 1, 2005, a 15-year-old firm with no GIPS-compliant history wants to claim compliance. The appropriate initial action is to:",
     "opts": [
      "Comply for the year beginning January 1, 2004, plus four earlier years, disclosing why they are not compliant",
      "Comply for the year beginning January 1, 2004, plus nine earlier years, disclosing why they are not compliant",
      "Present GIPS-compliant performance for the 5-year period January 1, 2000 through December 31, 2004"
     ],
     "ans": 2,
     "en": "Initial compliance requires at least five years of GIPS-compliant performance (or since inception if younger) — here, 2000–2004 — then one more year each year up to ten.",
     "vi": "Tuân thủ ban đầu cần tối thiểu 5 năm kết quả theo GIPS (hoặc từ khi thành lập) — ở đây là 2000–2004 — rồi mỗi năm bổ sung một năm cho tới 10 năm."
    },
    {
     "q": "Lunar Wealth, a subsidiary of Galaxy Financial, has GIPS-compliant data, but Galaxy’s president is uninterested in firm-wide compliance. Lunar may:",
     "opts": [
      "Claim partial compliance for its own presentations",
      "Not claim compliance, because compliance must be company-wide across Galaxy",
      "Claim compliance as long as Lunar is held out to the public as a distinct business entity"
     ],
     "ans": 2,
     "en": "The GIPS \"firm\" is the entity held out to clients as a distinct business unit — a subsidiary marketed as distinct can claim compliance on its own; partial compliance never exists.",
     "vi": "\"Firm\" theo GIPS là thực thể được giới thiệu ra thị trường như một đơn vị kinh doanh riêng biệt — công ty con định vị riêng biệt được tự tuyên bố tuân thủ; không tồn tại tuân thủ một phần."
    },
    {
     "q": "When defining the firm, the GIPS standards recommend adopting:",
     "opts": [
      "The narrowest, most relevant definition of the firm",
      "The broadest, most meaningful definition of the firm",
      "A definition excluding offices operating under different brand names"
     ],
     "ans": 1,
     "en": "The firm definition should be the broadest, most meaningful one — all offices operating under the same brand, regardless of legal entity names.",
     "vi": "Định nghĩa firm nên rộng nhất và có ý nghĩa nhất — mọi văn phòng hoạt động dưới cùng thương hiệu, bất kể tên pháp nhân."
    },
    {
     "q": "Firms claiming GIPS compliance must make every reasonable effort to provide a compliant presentation to:",
     "opts": [
      "Existing clients",
      "Prospective clients",
      "Both existing and prospective clients"
     ],
     "ans": 1,
     "en": "The delivery requirement runs to prospective clients (and certain pooled-fund prospective investors) — GIPS Reports exist to inform those evaluating the firm.",
     "vi": "Nghĩa vụ cung cấp hướng đến khách hàng tiềm năng (và nhà đầu tư tiềm năng của pooled fund) — GIPS Report sinh ra để phục vụ người đang thẩm định công ty."
    },
    {
     "q": "According to the Fundamentals of Compliance requirements, a firm must:",
     "opts": [
      "Include in total firm assets those assigned to a sub-advisor selected by the firm",
      "Alter historical composite performance after a significant organizational change",
      "Represent that its calculation methodology is \"in accordance with the Global Investment Performance Standards\""
     ],
     "ans": 0,
     "en": "Sub-advised assets the firm has authority to select belong in total firm assets. Historical performance is never restated for organizational change, and only the prescribed compliance statement may be used.",
     "vi": "Tài sản giao sub-advisor mà công ty có quyền lựa chọn phải tính vào tổng tài sản. Kết quả lịch sử không được sửa vì thay đổi tổ chức, và chỉ được dùng câu tuyên bố tuân thủ theo mẫu."
    },
    {
     "q": "Firms that claim compliance with the GIPS standards are required to receive a verification:",
     "opts": [
      "Before the firm can initially claim compliance",
      "After the firm has claimed compliance for 12 months",
      "Never — verification is not required"
     ],
     "ans": 2,
     "en": "Verification is voluntary and recommended — never required for claiming compliance.",
     "vi": "Verification là tự nguyện và được khuyến nghị — không bao giờ bắt buộc để tuyên bố tuân thủ."
    },
    {
     "q": "It is most accurate to say that GIPS verification:",
     "opts": [
      "Makes the claim of compliance more credible",
      "Certifies that the firm has adequate internal controls",
      "Ensures the accuracy of specific composite presentations"
     ],
     "ans": 0,
     "en": "Verification — independent, firm-wide — increases confidence in the compliance claim; it tests policy design and implementation, not the accuracy of any specific presentation.",
     "vi": "Verification — độc lập, toàn công ty — làm tuyên bố tuân thủ đáng tin hơn; nó kiểm tra thiết kế và triển khai chính sách, không bảo chứng độ chính xác của từng bản trình bày."
    }
   ]
  },
  {
   "name": "Set I — EOC Module 1: Ethics & Trust",
   "qs": [
    {
     "q": "A profession is most likely described as a group of people that:",
     "opts": [
      "Has a common level of basic knowledge about a particular subject",
      "Monitors its members based on an agreed-on code of ethics",
      "Puts the interests of its members first"
     ],
     "ans": 1,
     "en": "A profession is defined by a shared code of ethics that members agree to and are monitored against — not mere common knowledge, and clients (not members) come first.",
     "vi": "Nghề chuyên môn được định nghĩa bởi bộ quy tắc đạo đức chung mà thành viên cam kết và bị giám sát theo đó — không phải chỉ kiến thức chung, và khách hàng (không phải thành viên) được đặt trước."
    },
    {
     "q": "Most societies would least likely consider ethical principles to include:",
     "opts": [
      "Justice",
      "Duplicity",
      "Diligence"
     ],
     "ans": 1,
     "en": "Duplicity means deceit — the opposite of an ethical principle. Justice (fairness) and diligence are core ethical principles.",
     "vi": "Duplicity nghĩa là dối trá — trái ngược với nguyên tắc đạo đức. Công bằng và tận tâm là các nguyên tắc cốt lõi."
    }
   ]
  },
  {
   "name": "Set J — EOC Module 2: Code of Ethics & Standards",
   "qs": [
    {
     "q": "Oversight of the Professional Conduct Program is the responsibility of the:",
     "opts": [
      "Professional Conduct staff",
      "Disciplinary Review Committee",
      "CFA Institute Board of Governors"
     ],
     "ans": 2,
     "en": "The Board of Governors maintains overall oversight and responsibility for the PCP; the staff conducts inquiries and the DRC enforces through its panels.",
     "vi": "Board of Governors giữ vai trò giám sát tổng thể PCP; staff tiến hành điều tra còn DRC thực thi qua các hội đồng."
    },
    {
     "q": "Which of the following is one of the seven CFA Institute Standards of Professional Conduct?",
     "opts": [
      "Duties to Employers",
      "Performance Integrity",
      "Disclosure of Transactions"
     ],
     "ans": 0,
     "en": "The seven Standards: Professionalism; Integrity of Capital Markets; Duties to Clients; Duties to Employers; Investment Analysis, Recommendations & Actions; Conflicts of Interest; Responsibilities as Member/Candidate.",
     "vi": "Bảy Standards gồm: Professionalism; Integrity of Capital Markets; Duties to Clients; Duties to Employers; Investment Analysis; Conflicts of Interest; Responsibilities as M&C — chỉ A đúng danh mục."
    },
    {
     "q": "The Code and Standards require members to:",
     "opts": [
      "Encourage others to practice in a professional and ethical manner only",
      "Promote the integrity and viability of the global capital markets only",
      "Both encourage others to practice professionally and ethically AND promote the integrity and viability of the global capital markets"
     ],
     "ans": 2,
     "en": "Both actions are separate components of the Code of Ethics — members must do both, not one or the other.",
     "vi": "Cả hai đều là thành phần riêng của Code — thành viên phải làm cả hai, không phải chọn một."
    }
   ]
  },
  {
   "name": "Set K — EOC Guidance I–VII (Q1–40)",
   "qs": [
    {
     "q": "Herring, a rating analyst, doubts his own published analysis after a competitor downgrades, reissues a matching downgrade claiming \"new information\" (there is none), posts it on the agency website and emails all original recipients. He LEAST likely violated:",
     "opts": [
      "Fair dealing",
      "Diligence and reasonable basis",
      "Communication with clients and prospective clients"
     ],
     "ans": 0,
     "en": "He disseminated the revision to everyone simultaneously — fair dealing is intact. But he lacked a reasonable basis for the change and misrepresented its justification.",
     "vi": "Bản sửa được gửi đồng thời cho mọi người — fair dealing không bị vi phạm. Nhưng anh ta thiếu cơ sở hợp lý cho thay đổi và trình bày sai lý do."
    },
    {
     "q": "Huang receives cash referral fees from a brokerage and discloses the arrangement to clients before agreements, but omits the estimated dollar value. Has he violated the Standards?",
     "opts": [
      "No",
      "Yes — by accepting a cash fee for referrals",
      "Yes — by not disclosing the estimated dollar value of the fee"
     ],
     "ans": 2,
     "en": "Referral fees are permitted, but VI(C) disclosure must include the nature AND estimated value of the compensation.",
     "vi": "Phí giới thiệu được phép, nhưng công bố theo VI(C) phải gồm bản chất VÀ giá trị ước tính."
    },
    {
     "q": "Lynn registers for Level I, declines to sit due to work, then posts she is \"a CFA candidate.\" Petrov, CFA, posts investment views anonymously tagged \"#CFAcharter.\" Who violated the Standards?",
     "opts": [
      "Lynn only",
      "Petrov only",
      "Both Lynn and Petrov"
     ],
     "ans": 2,
     "en": "Declining to sit ends active candidacy, so Lynn misrepresents her status; anonymous posts leveraging the charter improperly reference the designation — both breach VII(B).",
     "vi": "Bỏ thi làm mất tư cách candidate nên Lynn khai sai; đăng ẩn danh gắn #CFAcharter là dẫn chiếu danh hiệu không đúng cách — cả hai vi phạm VII(B)."
    },
    {
     "q": "Loots quits, having a non-solicitation agreement. He got permission to take his performance history, but also took a copy of the firm’s trading software and announced his new firm on social media visible to former clients. He LEAST likely violated the Standard concerning his:",
     "opts": [
      "Trading software",
      "Non-solicitation agreement",
      "Investment performance history"
     ],
     "ans": 2,
     "en": "He had explicit permission for the performance history. Taking the software misappropriates firm property, and messaging former clients breaches the non-solicitation agreement (I(A)/IV(A)).",
     "vi": "Anh ta được phép mang theo lịch sử thành tích. Lấy phần mềm là chiếm dụng tài sản công ty, còn nhắn tới khách cũ vi phạm thỏa thuận không lôi kéo."
    },
    {
     "q": "Hajak reissues a report she copied to her personal computer without her old bank’s consent, rebrands it, cites the Wall Street Journal instead of the original Realtors Association study, and sends it to a former client who ASKED for the update. She LEAST likely violated the Standards because she:",
     "opts": [
      "Solicited the bank’s client",
      "Did not obtain consent to use the bank’s report",
      "Did not cite the actual source of the study"
     ],
     "ans": 0,
     "en": "The client approached her — responding is not improper solicitation. Using the bank’s records without permission and citing a secondary rather than the original source are violations.",
     "vi": "Khách tự tìm đến — đáp lại không phải lôi kéo sai trái. Dùng hồ sơ của ngân hàng không xin phép và dẫn nguồn thứ cấp thay vì nguồn gốc mới là vi phạm."
    },
    {
     "q": "Covington pre-clears purchases of Stock A and B; approvals are valid only for that trading day. Two days later, after Stock B’s price falls, she buys 250 shares of B only. Did she violate the Standards?",
     "opts": [
      "No",
      "Yes — relating to diligence and reasonable basis",
      "Yes — relating to her employer’s compliance procedures"
     ],
     "ans": 2,
     "en": "Pre-clearance expired: trading two days later (and a different quantity) without new approval breaches the firm’s compliance procedures, which members must follow.",
     "vi": "Phê duyệt trước đã hết hiệu lực: giao dịch sau hai ngày (và khác khối lượng) mà không xin lại vi phạm quy trình compliance của công ty mà thành viên buộc phải tuân theo."
    },
    {
     "q": "Dazong, a sole proprietor, trades the same securities as clients and rotates allocations so every account — including his own — has an equal chance of a fill. This allocation procedure:",
     "opts": [
      "Complies with the Standards",
      "Requires revision to ensure client trades take precedence",
      "Should be disclosed and approved in writing by clients"
     ],
     "ans": 1,
     "en": "VI(B): client transactions must take priority over the member’s own — giving his account equal footing with clients violates priority of transactions.",
     "vi": "VI(B): giao dịch của khách phải được ưu tiên trước giao dịch của chính member — cho tài khoản của mình \"bình đẳng\" với khách là vi phạm."
    },
    {
     "q": "Which action most likely violates the Standard on market manipulation?",
     "opts": [
      "Selling one security and buying another to minimize tax liability",
      "Writing misleading social media posts about the development of a new product",
      "Dividing a large block order into smaller orders for better execution"
     ],
     "ans": 1,
     "en": "Spreading false or misleading information to move a price is information-based manipulation. Tax-loss trades and order-splitting are legitimate practices.",
     "vi": "Lan truyền thông tin sai lệch để tác động giá là thao túng bằng thông tin. Bán vì thuế và chia nhỏ lệnh là thực hành hợp pháp."
    },
    {
     "q": "Barr receives an unsolicited client order, has her analysts assess it (they find the stock undervalued and suitable for many clients), calls suitable clients to recommend it, then executes one block trade combining the original order with the new ones. She most likely violated the Standards:",
     "opts": [
      "Only by executing the single block trade",
      "Only by discussing unsolicited client orders with her analysts",
      "Both by the block trade and by the discussion"
     ],
     "ans": 0,
     "en": "Analyzing an order’s portfolio impact is proper diligence, but the client’s order should have been executed promptly — holding it while the firm generated and bundled additional trades subordinated the client’s transaction.",
     "vi": "Phân tích tác động của lệnh là sự cẩn trọng đúng đắn, nhưng lệnh của khách phải được thực hiện kịp thời — giữ lệnh để công ty tạo thêm giao dịch rồi gộp chung đã đặt giao dịch của khách xuống hàng sau."
    },
    {
     "q": "A recommended procedure for compliance with Knowledge of the Law is to encourage firms to:",
     "opts": [
      "Distribute summaries of securities laws to clients at least annually",
      "Provide written protocols for reporting suspected legal or regulatory violations",
      "Seek the advice of a regulatory agency when in doubt"
     ],
     "ans": 1,
     "en": "Written violation-reporting protocols are recommended; legal updates go to employees, and doubt calls for compliance/legal counsel — not the regulator.",
     "vi": "Quy trình báo cáo vi phạm bằng văn bản là khuyến nghị; thông tin luật dành cho nhân viên, và khi phân vân thì hỏi compliance/luật sư."
    },
    {
     "q": "Applying standardized criteria for the selection of external managers is a requirement of the Standard relating to:",
     "opts": [
      "Suitability",
      "Independence and objectivity",
      "Diligence and reasonable basis"
     ],
     "ans": 2,
     "en": "V(A) requires a standardized set of criteria for evaluating external advisers/managers — part of maintaining a reasonable basis.",
     "vi": "V(A) yêu cầu bộ tiêu chí chuẩn hóa để đánh giá cố vấn/quản lý bên ngoài — một phần của việc duy trì cơ sở hợp lý."
    },
    {
     "q": "A member most likely violates Knowledge of the Law if she fails to:",
     "opts": [
      "Dissociate from unethical conduct",
      "Report illegal activity to the appropriate regulatory organization",
      "Have detailed knowledge of all laws potentially governing her activities"
     ],
     "ans": 0,
     "en": "Dissociation from known violations is required; reporting to regulators is encouraged but not required, and expertise in every law is not expected.",
     "vi": "Tách mình khỏi vi phạm đã biết là bắt buộc; tố giác với cơ quan quản lý chỉ được khuyến khích, và không ai đòi hỏi tinh thông mọi đạo luật."
    },
    {
     "q": "Which action most likely violates the MNPI Standard? Action 1: buying calls after the CEO reveals earnings will beat expectations. Action 2: buying an oil stock after an unaffiliated industry expert predicts oil prices will rise.",
     "opts": [
      "Action 1 only",
      "Action 2 only",
      "Both actions"
     ],
     "ans": 0,
     "en": "Earnings guidance from the CEO is material nonpublic information; an independent expert’s opinion is neither inside information nor company-sourced — mosaic-type input.",
     "vi": "Thông tin lợi nhuận từ CEO là MNPI; quan điểm của chuyên gia độc lập không phải thông tin nội bộ — thuộc dạng mosaic."
    },
    {
     "q": "Hadid shares details of her investment-banking valuation of SML with her friend Jackson at another firm for feedback; Jackson buys SML call options. Who violated the Standards?",
     "opts": [
      "Hadid only",
      "Jackson only",
      "Both Hadid and Jackson"
     ],
     "ans": 2,
     "en": "Hadid improperly disclosed material nonpublic deal information; Jackson traded on it — both breach II(A).",
     "vi": "Hadid tiết lộ trái phép thông tin trọng yếu chưa công bố; Jackson giao dịch trên đó — cả hai vi phạm II(A)."
    },
    {
     "q": "Joy presents prospective clients a brief performance summary, with detailed supporting information available upon request. Has she violated the Standards?",
     "opts": [
      "No",
      "Yes — fair dealing",
      "Yes — performance presentation"
     ],
     "ans": 0,
     "en": "Brief presentations are acceptable when the member makes full supporting detail available on request — best practice is to reference the limited nature of the summary.",
     "vi": "Trình bày tóm tắt là hợp lệ khi thông tin chi tiết sẵn sàng cung cấp theo yêu cầu — thực hành tốt là ghi chú tính giới hạn của bản tóm tắt."
    },
    {
     "q": "Yong issues a \"buy\" after thorough research; the investment committee disagrees with her assumptions and changes it to \"neutral.\" She leaves her name on the final report. Has she violated the Standards?",
     "opts": [
      "No",
      "Yes — loyalty, prudence, and care",
      "Yes — diligence and reasonable basis"
     ],
     "ans": 0,
     "en": "When the group process is sound and the basis reasonable, a member may remain on a report despite disagreeing with its conclusion.",
     "vi": "Khi quy trình nhóm chặt chẽ và cơ sở hợp lý, member được giữ tên trên báo cáo dù không đồng ý với kết luận."
    },
    {
     "q": "Melmo works weekends as a paid charity employee without telling her firm. Negotiating a truck purchase for the charity, she lets the dealer overcharge the charity $500 and receives $500 of vouchers for private use. She most likely violated the Standards:",
     "opts": [
      "Only by failing to disclose the charity employment",
      "Only by the purchase arrangement that overcharges the charity in exchange for personal vouchers",
      "Both"
     ],
     "ans": 1,
     "en": "The kickback — personal benefit at the charity’s expense — is dishonest conduct violating I(D) and her duty to the charity. Non-competitive outside work does not require employer consent.",
     "vi": "Khoản \"lại quả\" — tư lợi trên thiệt hại của tổ chức từ thiện — là hành vi bất chính vi phạm I(D) và nghĩa vụ với tổ chức. Việc làm ngoài không cạnh tranh không cần công ty chấp thuận."
    },
    {
     "q": "A member believes a colleague is engaged in unethical activities at work but does not disassociate from them. He most likely violated:",
     "opts": [
      "Only the Standard relating to knowledge of the law",
      "Only the Standard relating to avoid or disclose conflicts",
      "Both Standards"
     ],
     "ans": 0,
     "en": "I(A) requires dissociation from known violations. Conflicts of interest (VI(A)) are not at issue.",
     "vi": "I(A) yêu cầu tách mình khỏi vi phạm đã biết. Xung đột lợi ích (VI-A) không liên quan ở đây."
    },
    {
     "q": "Regarding Independence and Objectivity: S1 — encourage the firm to REMOVE a covered company from the restricted list if unwilling to disseminate adverse opinions. S2 — a member may not accept allocations of oversubscribed IPOs from corporate issuers. Which is accurate?",
     "opts": [
      "Statement 1 only",
      "Statement 2 only",
      "Both statements"
     ],
     "ans": 1,
     "en": "Companies go ONTO the restricted list in that situation (S1 reverses it). Accepting personal allocations of hot IPOs from issuers is a prohibited benefit — S2 is correct.",
     "vi": "Công ty phải được ĐƯA VÀO restricted list trong tình huống đó (S1 nói ngược). Nhận suất IPO \"nóng\" từ issuer cho cá nhân là lợi ích bị cấm — S2 đúng."
    },
    {
     "q": "After the Level II exam, Delgado posts that she found it very difficult and that, in her opinion, the CFA Program and Institute are losing credibility. Has she most likely violated the Standards?",
     "opts": [
      "No",
      "Yes — by posting information about the exam",
      "Yes — by compromising the reputation of CFA Institute"
     ],
     "ans": 0,
     "en": "General impressions of difficulty and opinions — even critical ones — about CFA Institute are permitted; only confidential exam content is off-limits.",
     "vi": "Cảm nhận chung về độ khó và quan điểm — kể cả phê phán — về CFA Institute đều được phép; chỉ nội dung đề thi mới là bảo mật."
    },
    {
     "q": "According to the Standard relating to independence and objectivity:",
     "opts": [
      "A gift from a client could be considered supplementary compensation",
      "Compensation should link analyst pay to investment banking assignments",
      "Managers may report sell-side analysts to covered companies over adverse rating changes"
     ],
     "ans": 0,
     "en": "Client gifts reward an existing relationship and may be treated as supplementary compensation (disclose to employer). B and C are textbook threats to independence.",
     "vi": "Quà từ khách hàng gắn với quan hệ sẵn có, có thể coi là thù lao bổ sung (khai báo với công ty). B và C là các mối đe dọa kinh điển với tính độc lập."
    },
    {
     "q": "A recommended I&O procedure is to encourage firms to:",
     "opts": [
      "Prohibit any employee participation in equity IPOs",
      "Put a corporate client on a restricted list if the firm is unwilling to disseminate adverse opinions",
      "Provide every client with procedures for reporting unethical behavior"
     ],
     "ans": 1,
     "en": "Restricted-list treatment (factual information only) replaces biased coverage; IPO participation needs prior approval, not prohibition.",
     "vi": "Đưa vào restricted list (chỉ cung cấp thông tin thuần sự kiện) thay cho báo cáo thiên lệch; IPO cần phê duyệt trước, không phải cấm."
    },
    {
     "q": "If applicable law requires members to maintain confidentiality of client information, confidentiality must be maintained unless:",
     "opts": [
      "The client has died",
      "The information involves illegal activities",
      "The client permits the disclosure"
     ],
     "ans": 2,
     "en": "Client authorization is the exception. Where law mandates confidentiality, even illegal-activity information should not be disclosed.",
     "vi": "Sự cho phép của khách hàng là ngoại lệ. Khi luật buộc bảo mật, kể cả thông tin về hành vi phạm pháp cũng không được tiết lộ."
    },
    {
     "q": "Which most likely violates the confidentiality Standard?",
     "opts": [
      "Recommending a former client as a potential donor to a charity",
      "Disclosing client details to the CFA Institute PCP",
      "Providing prospective-client information with the prospect’s permission"
     ],
     "ans": 0,
     "en": "Confidentiality covers former clients: volunteering their information without consent violates III(E). PCP cooperation and permitted disclosures are exceptions.",
     "vi": "Bảo mật bao trùm khách hàng cũ: tự ý cung cấp thông tin của họ vi phạm III(E). Hợp tác PCP và tiết lộ được cho phép là ngoại lệ."
    },
    {
     "q": "A recommended procedure for priority of transactions is that investment personnel should:",
     "opts": [
      "Examine personal trades for conflicts immediately after execution",
      "Direct their brokers to supply the firm with duplicate confirmations of all personal transactions",
      "Make a one-time disclosure of beneficial holdings at hire"
     ],
     "ans": 1,
     "en": "Duplicate confirmations to the firm enable monitoring. Conflicts are examined BEFORE trading (pre-clearance) and holdings are disclosed at hire AND at least annually.",
     "vi": "Bản sao xác nhận gửi về công ty phục vụ giám sát. Xung đột phải soát TRƯỚC khi giao dịch, và danh mục khai khi vào làm VÀ ít nhất hằng năm."
    },
    {
     "q": "Who can refer to themselves as a candidate? Individual 1: passed Level II, expects to register for Level III soon. Individual 2: failed Level I, expects to retake it. Individual 3: awaiting Level III results.",
     "opts": [
      "Individual 1",
      "Individual 2",
      "Individual 3"
     ],
     "ans": 2,
     "en": "A candidate is enrolled for a specified exam or awaiting its results. Intending to register (1 and 2) is not active candidacy.",
     "vi": "Candidate là người đã ghi danh kỳ thi cụ thể hoặc đang chờ kết quả. Mới dự định đăng ký (1 và 2) không phải candidate đang hoạt động."
    },
    {
     "q": "Which is a recommended priority-of-transactions procedure? P1: disclose personal research-universe transactions to clients on request. P2: establish blackout periods prior to client trades. P3: treat fee-paying family accounts with beneficial ownership the same as personal accounts.",
     "opts": [
      "Procedure 1",
      "Procedure 2",
      "Procedure 3"
     ],
     "ans": 2,
     "en": "Beneficial-ownership family accounts fall under the member’s personal-account procedures (pre-clearance, reporting). Personal transaction copies go to the FIRM, not clients.",
     "vi": "Tài khoản người thân có quyền lợi thụ hưởng phải theo quy trình tài khoản cá nhân của member (phê duyệt trước, báo cáo). Bản sao giao dịch gửi về CÔNG TY, không phải khách hàng."
    },
    {
     "q": "According to Independence and Objectivity, a member must:",
     "opts": [
      "Refuse all business-related gifts",
      "Adhere to strict standards governing how issuer-paid research is conducted",
      "Pay for transportation, hotel and meal expenses at issuer headquarters meetings"
     ],
     "ans": 1,
     "en": "Issuer-paid research is permitted only under strict conduct standards (flat fee, full disclosure). Paying one’s own way is best practice, and modest hospitality (meals) may be accepted.",
     "vi": "Nghiên cứu do issuer trả tiền chỉ được phép theo chuẩn mực nghiêm ngặt (phí cố định, công bố đầy đủ). Tự trả chi phí là thực hành tốt, còn tiếp đãi khiêm tốn (bữa ăn) có thể nhận."
    },
    {
     "q": "Which statement on market manipulation is consistent with the Standards? Members must refrain from:",
     "opts": [
      "Inducing trading by disseminating verifiable information",
      "Exploiting perceived market inefficiencies",
      "Securing a dominant position in a financial instrument to exploit the price of the underlying"
     ],
     "ans": 2,
     "en": "Cornering an instrument to distort the underlying’s price is transaction-based manipulation. Truthful information and trading on perceived inefficiencies are legitimate.",
     "vi": "Thâu tóm vị thế chi phối để bóp méo giá tài sản cơ sở là thao túng bằng giao dịch. Thông tin xác thực và khai thác kém hiệu quả thị trường là hợp pháp."
    },
    {
     "q": "According to the communication Standard, members must:",
     "opts": [
      "Distinguish between fact and opinion in the presentation of investment analyses",
      "Promptly disclose material and nonmaterial changes in their investment processes",
      "Do both of the above"
     ],
     "ans": 0,
     "en": "Fact–opinion separation is required; only MATERIAL process changes must be disclosed — \"nonmaterial\" makes the other options wrong.",
     "vi": "Bắt buộc tách sự kiện khỏi quan điểm; chỉ thay đổi TRỌNG YẾU của quy trình mới phải công bố — chữ \"nonmaterial\" khiến các lựa chọn kia sai."
    },
    {
     "q": "A recommended priority-of-transactions procedure is that members should:",
     "opts": [
      "Discourage clients from trading during blackout periods",
      "Supply copies of personal transactions to clients upon request",
      "Preclear IPO participation even when no conflict with clients is apparent"
     ],
     "ans": 2,
     "en": "IPO participation requires prior approval regardless of apparent conflict. Blackouts restrict employees, and duplicate confirmations go to the firm.",
     "vi": "Tham gia IPO phải phê duyệt trước bất kể có thấy xung đột hay không. Blackout áp cho nhân viên, bản sao giao dịch gửi về công ty."
    },
    {
     "q": "Chan issues a \"buy\" on a company in which her brother holds shares. She has no beneficial ownership in his account and makes no disclosure. Has she violated the Standards?",
     "opts": [
      "No",
      "Yes — avoid or disclose conflicts",
      "Yes — communication with clients"
     ],
     "ans": 0,
     "en": "Without beneficial ownership or another financial interest, there is no conflict requiring disclosure.",
     "vi": "Không có quyền lợi thụ hưởng hay lợi ích tài chính nào khác thì không tồn tại xung đột phải công bố."
    },
    {
     "q": "Mak researches AOT thoroughly, buys it for all suitable clients, THEN buys for his brother’s fee-paying account in which Mak has beneficial ownership. The stock later falls sharply. Are his actions consistent with the Standards?",
     "opts": [
      "Yes",
      "No — priority of transactions",
      "No — diligence and reasonable basis"
     ],
     "ans": 0,
     "en": "A beneficial-ownership account is treated as personal and must trade AFTER clients — which he did. Losses do not create a violation when diligence was exercised.",
     "vi": "Tài khoản có quyền lợi thụ hưởng được coi như cá nhân và phải giao dịch SAU khách hàng — anh đã làm đúng vậy. Thua lỗ không tạo vi phạm khi đã cẩn trọng."
    },
    {
     "q": "Lee’s profile reads: \"Passed all three CFA exams in three consecutive years. As a CFA charterholder, Lee achieves better investment performance results.\" Has he violated the Standards?",
     "opts": [
      "No",
      "Yes — by the consecutive-years statement",
      "Yes — by claiming superior performance as a charterholder"
     ],
     "ans": 2,
     "en": "The factual passing record is fine; attributing superior performance to the charter violates VII(B).",
     "vi": "Thông tin đỗ liên tiếp là sự kiện, hợp lệ; gán hiệu quả đầu tư vượt trội cho danh hiệu vi phạm VII(B)."
    },
    {
     "q": "A member manages two fee-paying family accounts: she can vote the shares in Account 1 and has discretion to sell shares in Account 2. Is she a beneficial owner of the shares?",
     "opts": [
      "No",
      "Yes — for Account 1 only",
      "Yes — for both accounts"
     ],
     "ans": 0,
     "en": "Beneficial ownership requires a direct or indirect financial interest. Voting power or trading discretion as a manager, without financial benefit, does not create it.",
     "vi": "Quyền lợi thụ hưởng đòi hỏi lợi ích tài chính trực tiếp hoặc gián tiếp. Quyền biểu quyết hay quyền bán với tư cách người quản lý, không kèm lợi ích tài chính, không tạo ra nó."
    },
    {
     "q": "According to Diligence and Reasonable Basis, a member is required to:",
     "opts": [
      "Exercise diligence, independence, and thoroughness in analyzing investments",
      "Become an expert in every technical aspect of the models used",
      "Dissociate and remove her name from a group report that does not reflect her opinion"
     ],
     "ans": 0,
     "en": "A restates V(A) verbatim. Understanding model assumptions suffices, and a member may stay on a sound group report despite disagreement.",
     "vi": "A là nguyên văn V(A). Chỉ cần hiểu giả định của mô hình là đủ, và member được giữ tên trên báo cáo nhóm có quy trình chặt dù bất đồng."
    },
    {
     "q": "According to Avoid or Disclose Conflicts, a member should:",
     "opts": [
      "Reject a board position at a company her firm plans to cover",
      "Ensure the firm discloses to clients any rebates received from mutual fund service fees",
      "Place a company on a restricted list whenever the firm holds options on its shares"
     ],
     "ans": 1,
     "en": "Fee rebates flowing to the firm are a conflict that must be disclosed so clients can evaluate the advice. Board seats and holdings call for disclosure, not automatic prohibition.",
     "vi": "Khoản hoàn phí chảy về công ty là xung đột phải công bố để khách hàng đánh giá lời khuyên. Ghế HĐQT và vị thế nắm giữ cần công bố, không phải tự động cấm."
    },
    {
     "q": "A member asked to produce an issuer-paid research report is required to:",
     "opts": [
      "Avoid cash compensation",
      "Disclose the nature of their compensation in the report",
      "Decline if the firm provides investment banking services to the issuer"
     ],
     "ans": 1,
     "en": "Issuer-paid research demands disclosure of the compensation’s nature (best practice: a flat fee); cash itself is not prohibited.",
     "vi": "Nghiên cứu do issuer trả tiền buộc công bố bản chất của thù lao (thực hành tốt: phí cố định); bản thân tiền mặt không bị cấm."
    },
    {
     "q": "Regali interviews independent experts (unaffiliated with BioHeal or its trials) who expect the drug to succeed, and after thorough analysis issues a \"buy\" distributed to her clients only. Has she violated the MNPI Standard?",
     "opts": [
      "No",
      "Yes — by distributing to clients and not the public",
      "Yes — by relying on the experts’ insights"
     ],
     "ans": 0,
     "en": "Independent expert opinions are not inside information (mosaic theory), and analysts owe their research to clients — there is no duty to release it publicly.",
     "vi": "Ý kiến chuyên gia độc lập không phải thông tin nội bộ (mosaic), và analyst phục vụ khách hàng của mình — không có nghĩa vụ công bố ra công chúng."
    },
    {
     "q": "Doka’s fund suffers a loss from an event unforeseen by all market participants (undisclosed in advance). A month later she outsources 5% of assets to an external manager with a similar process, telling no one. Are her actions consistent with the communication Standard?",
     "opts": [
      "Yes",
      "No — she failed to disclose the risk that caused the loss",
      "No — she failed to inform clients about outsourcing fund assets"
     ],
     "ans": 2,
     "en": "Risk disclosure is judged ex ante — unknowable risks are excused. But using an external manager changes the investment process and must be disclosed.",
     "vi": "Công bố rủi ro xét trên cơ sở ex ante — rủi ro không thể biết được miễn trách. Nhưng dùng quản lý bên ngoài là thay đổi quy trình đầu tư, bắt buộc phải thông báo."
    }
   ]
  },
  {
   "name": "Set L — EOC Guidance I–VII (Q41–81)",
   "qs": [
    {
     "q": "A member carries out research at a client’s request. The records of that research are the property of the:",
     "opts": [
      "Client",
      "Member",
      "Investment firm"
     ],
     "ans": 2,
     "en": "Records created in the course of employment belong to the firm — the basis of Standard V(C).",
     "vi": "Hồ sơ tạo ra trong quá trình làm việc thuộc về công ty — nền tảng của V(C)."
    },
    {
     "q": "Recommended confidentiality procedures: P1 — disclose to authorized fellow employees only information that improves service to the client. P2 — adopt the standard confidentiality procedures used by leading firms.",
     "opts": [
      "Procedure 1 only",
      "Procedure 2 only",
      "Both procedures"
     ],
     "ans": 0,
     "en": "Sharing is limited to authorized colleagues serving that client; procedures should fit the firm’s own size and operations, not be copied from others.",
     "vi": "Chỉ chia sẻ với đồng nghiệp được ủy quyền đang phục vụ chính khách đó; quy trình phải hợp với quy mô của chính công ty, không sao chép nơi khác."
    },
    {
     "q": "Hostettler refers clients needing legal advice to a lawyer, who refers clients back to her. No fees change hands, so she discloses nothing. Has she most likely violated the Standards?",
     "opts": [
      "No",
      "Yes — only by not disclosing to existing clients",
      "Yes — by not disclosing to existing and prospective clients"
     ],
     "ans": 2,
     "en": "Mutual referrals are non-cash consideration under VI(C): the arrangement must be disclosed to clients AND prospective clients before agreements.",
     "vi": "Giới thiệu qua lại là lợi ích phi tiền mặt theo VI(C): phải công bố cho khách hàng VÀ khách hàng tiềm năng trước khi ký kết."
    },
    {
     "q": "To use a quantitative model developed by others in her research, a member is required to:",
     "opts": [
      "Have developed or co-developed the model",
      "Become an expert in every technical aspect of the model",
      "Understand the assumptions and limitations inherent in the model"
     ],
     "ans": 2,
     "en": "V(A) requires understanding a model’s assumptions and limitations — not authorship or complete technical mastery.",
     "vi": "V(A) yêu cầu hiểu giả định và giới hạn của mô hình — không đòi hỏi tự xây hay tinh thông mọi chi tiết kỹ thuật."
    },
    {
     "q": "Berkstein relies on senior colleagues’ due diligence of third-party data. Brooks disagrees with his group’s positive industry conclusion but leaves his name on the well-researched report. Has Diligence and Reasonable Basis been violated?",
     "opts": [
      "No",
      "Yes — by Brooks only",
      "Yes — by Berkstein only"
     ],
     "ans": 0,
     "en": "Good-faith reliance on colleagues who vetted the data is permitted, and a member may stay on a sound group report despite disagreeing.",
     "vi": "Tin cậy thiện chí vào đồng nghiệp đã thẩm định dữ liệu là được phép, và member được giữ tên trên báo cáo nhóm có quy trình chặt dù bất đồng."
    },
    {
     "q": "S1: Employees must place employer interests ahead of personal interests in ALL matters. S2: Senior management should create compensation structures that do not drive unethical behavior. Which is accurate?",
     "opts": [
      "Statement 1 only",
      "Statement 2 only",
      "Both statements"
     ],
     "ans": 1,
     "en": "Loyalty does not require subordinating all personal interests in every matter (and client duties come first); the incentive-structure point is textbook guidance.",
     "vi": "Nghĩa vụ trung thành không buộc hy sinh mọi lợi ích cá nhân trong mọi việc (và nghĩa vụ với khách hàng đứng trước); ý về cơ chế thưởng là hướng dẫn chuẩn."
    },
    {
     "q": "Which is most likely material nonpublic information?",
     "opts": [
      "The recent execution of a large buy order from a hedge fund",
      "Significant legal challenges revealed at an internal management meeting",
      "Board remuneration increases discussed at the annual general meeting"
     ],
     "ans": 1,
     "en": "Undisclosed legal threats are material and nonpublic. AGM matters are public, and one fund’s order is rarely material by itself.",
     "vi": "Nguy cơ pháp lý chưa công bố là trọng yếu và chưa công khai. Nội dung ĐHĐCĐ là công khai, còn một lệnh mua đơn lẻ hiếm khi tự nó trọng yếu."
    },
    {
     "q": "Garcia emails a new recommendation to her firm’s largest client in the morning, emails all other clients after lunch, then calls the largest client to discuss it in detail. She violated fair dealing:",
     "opts": [
      "Only by the detailed follow-up call",
      "Only by emailing the largest client before all others",
      "By both actions"
     ],
     "ans": 1,
     "en": "Early access to the recommendation is the violation. Deeper discussion after general dissemination is a permissible service level.",
     "vi": "Cho tiếp cận sớm khuyến nghị là vi phạm. Trao đổi sâu hơn sau khi đã công bố chung là hạng dịch vụ được phép."
    },
    {
     "q": "According to the loyalty Standard, members must:",
     "opts": [
      "Place employer interests above personal interests in all matters",
      "Notify their employer before engaging in an independent practice while still employed",
      "Never act against their employer’s interests"
     ],
     "ans": 1,
     "en": "Independent practice requires advance notification (and consent before starting). Whistleblowing to protect clients or market integrity may lawfully go against the employer.",
     "vi": "Hành nghề độc lập phải thông báo trước (và có chấp thuận trước khi bắt đầu). Tố giác để bảo vệ khách hàng hoặc thị trường có thể đi ngược lợi ích công ty một cách hợp lệ."
    },
    {
     "q": "Absent a noncompete agreement and without employer consent, a departing member is permitted to:",
     "opts": [
      "Email himself a list of his clients before leaving",
      "Enter an independent competitive business while still employed",
      "Contact clients of his previous employer using public information after leaving"
     ],
     "ans": 2,
     "en": "Post-departure contact via public information (or memory) is allowed; taking client lists and competing while employed without consent are not.",
     "vi": "Sau khi nghỉ, liên hệ khách cũ bằng thông tin công khai (hoặc trí nhớ) là được phép; mang danh sách khách đi và cạnh tranh khi còn làm việc mà không được phép thì không."
    },
    {
     "q": "Milton recommends suitable investments; his firm pays a bonus for selling proprietary products, which he uses when all else is equal — without telling clients about the bonus. Has he most likely violated the Standards?",
     "opts": [
      "No",
      "Yes — suitability",
      "Yes — avoid or disclose conflicts"
     ],
     "ans": 2,
     "en": "The bonus is a conflict of interest that could reasonably affect his recommendations — it must be disclosed even if suitability is maintained.",
     "vi": "Khoản thưởng là xung đột lợi ích có thể ảnh hưởng tới khuyến nghị — phải công bố dù tính phù hợp vẫn được bảo đảm."
    },
    {
     "q": "A recommended fair-dealing procedure for a member at a large firm is to:",
     "opts": [
      "Offer service levels selectively based on client needs",
      "Disclose to clients and prospects how she selects accounts to participate in an order",
      "Inform all firm staff of upcoming recommendations"
     ],
     "ans": 1,
     "en": "Trade-allocation disclosure is the recommended control; selective service offerings and internal pre-announcements both undermine fairness.",
     "vi": "Công bố quy trình phân bổ giao dịch là biện pháp khuyến nghị; chào dịch vụ chọn lọc và báo trước nội bộ đều phá vỡ sự công bằng."
    },
    {
     "q": "A recommended diligence procedure is to encourage firms to:",
     "opts": [
      "Customize evaluation criteria for each external advisor",
      "Establish maximum levels of scenario testing for computer-based models",
      "Appoint a supervisory analyst to confirm a reasonable basis before external circulation"
     ],
     "ans": 2,
     "en": "Pre-release review by a supervisory analyst or committee is recommended; adviser criteria are standardized and scenario testing has MINIMUM levels.",
     "vi": "Duyệt trước khi phát hành bởi supervisory analyst/hội đồng là khuyến nghị; tiêu chí đánh giá cố vấn phải chuẩn hóa và kiểm thử kịch bản có mức TỐI THIỂU."
    },
    {
     "q": "Frost instructs Kim to put 1% of her portfolio in biotech, which Kim considers inconsistent with her IPS. The firm has no unsolicited-trade policy. Kim discusses his concerns; Frost insists; he executes without amending the IPS. Has Kim violated the Standards?",
     "opts": [
      "No",
      "Yes — by executing an unsuitable trade",
      "Yes — by not amending the IPS first"
     ],
     "ans": 0,
     "en": "A 1% position has minimal portfolio impact: the required response is education/discussion, which he provided. An IPS update is required only for material deviations.",
     "vi": "Vị thế 1% tác động không đáng kể: cách xử lý đúng là trao đổi/giáo dục khách — anh đã làm. Chỉ lệch trọng yếu mới buộc cập nhật IPS."
    },
    {
     "q": "Dixon gives clients a brief performance summary noting details are available on request, and tells them they \"can expect a return of 5% in the next three years\" based on his track record. Has he most likely violated the Standards?",
     "opts": [
      "No",
      "Yes — by making details available only on request",
      "Yes — by projecting a 5% return from past performance"
     ],
     "ans": 2,
     "en": "Implying that past results guarantee future returns is a misrepresentation/performance-presentation violation; the brief-summary practice is fine.",
     "vi": "Ngụ ý kết quả quá khứ bảo đảm lợi nhuận tương lai là vi phạm misrepresentation/trình bày kết quả; cách tóm tắt kèm chi tiết theo yêu cầu thì hợp lệ."
    },
    {
     "q": "Recommended I&O procedures: P1 — limits on private placements. P2 — prohibit reimbursement from issuers for air transportation. P3 — remove a company from the restricted list if the firm won’t permit adverse opinions.",
     "opts": [
      "Procedures 1 and 2",
      "Procedures 1 and 3",
      "Procedures 2 and 3"
     ],
     "ans": 0,
     "en": "P1 and P2 are recommended; P3 reverses the correct treatment — such companies belong ON the restricted list.",
     "vi": "P1 và P2 là khuyến nghị; P3 nói ngược — công ty đó phải được ĐƯA VÀO restricted list."
    },
    {
     "q": "O’Rourke grades Level III exams and tells non-candidate colleagues: \"The Level III exam is very tough\" and \"I was surprised how few candidates could remember the Black–Scholes equation.\" Has she violated the Standards?",
     "opts": [
      "No",
      "Yes — only by the Black–Scholes remark",
      "Yes — by both remarks"
     ],
     "ans": 1,
     "en": "Graders may not reveal exam content or grading observations — naming a tested formula crosses the line; a general toughness remark does not.",
     "vi": "Người chấm thi không được tiết lộ nội dung đề hay quan sát khi chấm — nêu một công thức được hỏi là vượt ranh giới; nhận xét chung về độ khó thì không."
    },
    {
     "q": "S1: Exam questions cannot be disclosed by candidates even after results are released to them. S2: Broad topic areas and formulas NOT tested cannot be publicly discussed after the exam. Which is consistent with VII(A)?",
     "opts": [
      "Statement 1 only",
      "Statement 2 only",
      "Both statements"
     ],
     "ans": 2,
     "en": "All exam content — questions, topic emphasis, and formulas tested or not tested — remains confidential until CFA Institute releases it.",
     "vi": "Mọi nội dung đề — câu hỏi, trọng tâm chủ đề, công thức được hỏi hay không — đều bảo mật cho tới khi CFA Institute công bố."
    },
    {
     "q": "Cohen is offered a gift by a premium-fee client. He obtains prior written consent from his supervisor and the client, but does not tell his regular-fee clients. Has he violated the Standards?",
     "opts": [
      "No",
      "Yes — independence and objectivity",
      "Yes — additional compensation arrangements"
     ],
     "ans": 0,
     "en": "Employer disclosure/consent satisfies the Standards; there is no duty to inform other clients of a gift.",
     "vi": "Khai báo và được công ty chấp thuận là đủ; không có nghĩa vụ thông báo cho các khách hàng khác về món quà."
    },
    {
     "q": "A member resides in Adovia (laws less strict than the Code) and does business in Batavia (less strict than Adovia). She must most likely adhere to:",
     "opts": [
      "The Code and Standards",
      "The laws of Adovia",
      "The laws of Batavia"
     ],
     "ans": 0,
     "en": "Follow the strictest applicable rule — here both countries’ laws are weaker than the Code, so the Code governs.",
     "vi": "Theo quy định nghiêm nhất — cả hai nước đều lỏng hơn Code, nên Code điều chỉnh."
    },
    {
     "q": "On a candidate forum, Boucault writes: \"I am a Level II candidate. A friend who took the exam says it’s very difficult. Let’s focus on fixed income and derivatives, which I think are the hardest.\" Has she most likely violated the Standards?",
     "opts": [
      "No",
      "Yes — by improperly referencing the CFA Program",
      "Yes — by revealing confidential exam information"
     ],
     "ans": 0,
     "en": "Stating candidacy accurately, relaying a general difficulty impression, and sharing her own study opinion reveal no confidential exam content.",
     "vi": "Nêu đúng tư cách candidate, kể cảm nhận chung về độ khó và chia sẻ quan điểm ôn tập cá nhân không tiết lộ nội dung bảo mật nào của đề."
    },
    {
     "q": "Kendall plans to teach a paid university economics course, and to advise a community-center endowment for free gym access instead of pay. He must obtain written consent from his employer:",
     "opts": [
      "Only for the teaching",
      "Only for advising the endowment",
      "For both activities"
     ],
     "ans": 1,
     "en": "Advising the endowment is compensated investment work competing with his employer’s services — consent required. Teaching economics is neither competitive nor investment services.",
     "vi": "Tư vấn cho quỹ endowment là công việc đầu tư có thù lao (quyền lợi phi tiền mặt), cạnh tranh với dịch vụ của công ty — cần chấp thuận. Dạy kinh tế không cạnh tranh, không phải dịch vụ đầu tư."
    },
    {
     "q": "Monroe, an equity analyst, does accounting work for his sports club in exchange for waived membership fees and paid event expenses, without telling his employer. Has he most likely violated the Standards?",
     "opts": [
      "No",
      "Yes — loyalty",
      "Yes — additional compensation arrangements"
     ],
     "ans": 0,
     "en": "The work neither competes with his employer nor conflicts with its interests, and the compensation is unrelated to services for the employer — no consent required.",
     "vi": "Công việc không cạnh tranh với công ty, không xung đột lợi ích, và thù lao không liên quan tới dịch vụ cho công ty — không cần xin phép."
    },
    {
     "q": "With respect to suitability, members who manage a mutual fund are required to:",
     "opts": [
      "Consider each investor’s circumstances before investing",
      "Manage the fund in a manner consistent with its mandate",
      "Gather information on investors’ tax situations"
     ],
     "ans": 1,
     "en": "Fund managers owe suitability to the mandate/strategy, not to each end investor’s profile.",
     "vi": "Người quản lý quỹ chịu trách nhiệm với mandate/chiến lược của quỹ, không phải hồ sơ từng nhà đầu tư cuối."
    },
    {
     "q": "Clark and Matt refer clients to each other. Both disclose the arrangement to existing clients, but only Clark discloses it to prospective clients. Have the Standards been violated?",
     "opts": [
      "No",
      "Yes — by Matt",
      "Yes — by Clark"
     ],
     "ans": 1,
     "en": "VI(C) requires disclosure to clients AND prospective clients before agreements — Matt’s omission is the violation.",
     "vi": "VI(C) buộc công bố cho khách hàng VÀ khách hàng tiềm năng trước khi ký — thiếu sót của Matt là vi phạm."
    },
    {
     "q": "Schulz gets free personal tax preparation from a tax advisor in exchange for referring her clients to him. She must disclose the arrangement to:",
     "opts": [
      "Her clients only",
      "Her employer only",
      "Both her clients and her employer"
     ],
     "ans": 2,
     "en": "Referral benefits — including in-kind ones — must be disclosed to the employer, clients, and prospects so they can assess the cost and bias.",
     "vi": "Lợi ích giới thiệu — kể cả hiện vật — phải công bố cho công ty, khách hàng và khách tiềm năng để họ đánh giá chi phí và thiên lệch."
    },
    {
     "q": "Shah refers his client Tan to his bank’s investment banking division; the bank pays employees interdepartmental referral fees. Shah is:",
     "opts": [
      "Required to decline the fee because Tan is an existing client",
      "Not required to disclose because the fee is an internal incentive payment",
      "Required to disclose the arrangement to Tan at the time of referral"
     ],
     "ans": 2,
     "en": "Even interdepartmental referral compensation must be disclosed so the client can evaluate the full cost and any bias in the referral.",
     "vi": "Ngay cả phí giới thiệu nội bộ giữa các phòng ban cũng phải công bố để khách hàng đánh giá đủ chi phí và độ thiên lệch của lời giới thiệu."
    },
    {
     "q": "According to the suitability Standard, a member is required to:",
     "opts": [
      "Judge suitability in the context of the client’s total portfolio",
      "Update the IPS immediately after every recommendation change",
      "Judge portfolio suitability and inquire into client experience only after acting"
     ],
     "ans": 0,
     "en": "Suitability is assessed at the total-portfolio level, and client inquiry must come BEFORE investment action, not after.",
     "vi": "Suitability đánh giá ở cấp tổng danh mục, và việc tìm hiểu khách hàng phải diễn ra TRƯỚC khi hành động, không phải sau."
    },
    {
     "q": "Taylor gains a new client with an existing portfolio and, before their first meeting or gathering any information, reallocates it to the firm’s recommended list (bought via block trades for all clients). He most likely violated the Standard(s) relating:",
     "opts": [
      "Only to suitability",
      "Only to fair dealing",
      "To both suitability and fair dealing"
     ],
     "ans": 0,
     "en": "Trading without an IPS or client inquiry violates suitability; block execution at uniform prices keeps fair dealing intact.",
     "vi": "Giao dịch khi chưa có IPS hay tìm hiểu khách vi phạm suitability; khớp lệnh gộp cùng giá giữ nguyên fair dealing."
    },
    {
     "q": "Ray, an ESG portfolio manager and environmental activist, is arrested during a government-authorized nonviolent protest. Has she most likely violated the Standards?",
     "opts": [
      "No",
      "Yes — misconduct",
      "Yes — loyalty, prudence, and care"
     ],
     "ans": 0,
     "en": "Civil disobedience in a personal cause does not reflect adversely on professional integrity, reputation, or competence.",
     "vi": "Bất tuân dân sự vì lý tưởng cá nhân không làm tổn hại uy tín, sự chính trực hay năng lực nghề nghiệp."
    },
    {
     "q": "When presenting performance results, members should encourage their firms to:",
     "opts": [
      "Disclose whether results are before or after tax",
      "Exclude terminated accounts from history",
      "Present results using the most representative single account"
     ],
     "ans": 0,
     "en": "Gross/net and tax basis must be disclosed; terminated accounts are INCLUDED, and weighted composites replace single accounts.",
     "vi": "Phải công bố trước/sau thuế và phí; tài khoản đã đóng phải ĐƯA VÀO lịch sử, và composite theo tỷ trọng thay cho một tài khoản đại diện."
    },
    {
     "q": "A member violates the market manipulation Standard if he:",
     "opts": [
      "Frequently trades two stocks to exploit market inefficiencies",
      "Secures a controlling position in a stock to exploit a potential acquisition",
      "Issues a report exaggerating a company’s negatives with the intent to drive its price down"
     ],
     "ans": 2,
     "en": "Intentionally spreading distorted information to move a price is information-based manipulation; exploiting inefficiencies and genuine control acquisitions are legitimate.",
     "vi": "Cố ý phát tán thông tin bóp méo để ép giá là thao túng bằng thông tin; khai thác kém hiệu quả và mua quyền kiểm soát thực sự là hợp pháp."
    },
    {
     "q": "Unable to sell an illiquid small-cap position from her own account, a member trades the stock between two client accounts to create the appearance of liquidity before selling her own shares. She engaged in:",
     "opts": [
      "Transaction-based manipulation only",
      "Information-based manipulation only",
      "Both types of manipulation"
     ],
     "ans": 0,
     "en": "Wash-style trades that manufacture artificial volume are transaction-based manipulation; no false information was disseminated.",
     "vi": "Giao dịch qua lại tạo thanh khoản giả là thao túng bằng giao dịch; không có thông tin sai lệch nào được phát tán."
    },
    {
     "q": "If a member is offered a paid position alongside his current job that may conflict with his employer’s interests, he is most likely required to:",
     "opts": [
      "Decline the position",
      "Notify his employer in writing before accepting",
      "Obtain written consent from all parties involved before accepting"
     ],
     "ans": 2,
     "en": "IV(B): written consent from all parties — especially the employer — must precede acceptance; notification alone is insufficient.",
     "vi": "IV(B): phải có văn bản chấp thuận của các bên — nhất là công ty — trước khi nhận; chỉ thông báo là chưa đủ."
    },
    {
     "q": "A member receives a third-party compensation offer that might conflict with her employer’s interests. Under IV(B) she is most likely required to:",
     "opts": [
      "Refuse the offer",
      "Only disclose the offer to the employer",
      "Obtain written consent from all parties involved prior to accepting"
     ],
     "ans": 2,
     "en": "Additional compensation that could create a conflict requires prior written consent from all parties involved.",
     "vi": "Thù lao bổ sung có thể gây xung đột đòi hỏi văn bản chấp thuận trước của tất cả các bên liên quan."
    },
    {
     "q": "Oak recommends a fund whose prospectus says \"high-growth and high-risk,\" telling clients of all risk tolerances that its recently low price volatility makes it a low-risk, high-return holding, and invests a large share of every portfolio in it. He most likely violated the Standard(s) relating:",
     "opts": [
      "Only to suitability",
      "Only to misrepresentation",
      "To both suitability and misrepresentation"
     ],
     "ans": 2,
     "en": "Large allocations regardless of risk tolerance violate suitability, and describing a high-risk vehicle as low-risk misrepresents it.",
     "vi": "Phân bổ lớn bất kể khẩu vị rủi ro vi phạm suitability, và mô tả quỹ rủi ro cao thành rủi ro thấp là misrepresentation."
    },
    {
     "q": "Exchange CEO Jaafar signs confidential agreements with the ten largest members committing them to minimum trading volumes in a new derivative’s first six months; liquidity improves and he lets the agreement lapse. Has he violated the Standards?",
     "opts": [
      "No",
      "Yes — fair dealing",
      "Yes — market manipulation"
     ],
     "ans": 2,
     "en": "Secret volume commitments manufacture an artificial appearance of liquidity to attract other participants — transaction-based manipulation, the curriculum’s own example.",
     "vi": "Cam kết khối lượng bí mật tạo vẻ thanh khoản giả để hút người tham gia khác — thao túng bằng giao dịch, đúng ví dụ trong curriculum."
    },
    {
     "q": "A recommended performance-presentation procedure is to encourage firms to:",
     "opts": [
      "State, when applicable, that performance results are simulated",
      "Use a representative account to present composite performance",
      "Use identical presentation reports for all client types"
     ],
     "ans": 0,
     "en": "Simulated or model results must be labeled as such; single representative accounts are discouraged and presentations should suit audience sophistication.",
     "vi": "Kết quả mô phỏng phải được ghi rõ; tránh dùng một tài khoản đại diện, và bản trình bày nên phù hợp trình độ người nhận."
    },
    {
     "q": "Johnson submits a colleague’s slightly higher-value taxi receipt after losing his own, and separately declares personal bankruptcy due to family medical bills. Has he violated the misconduct Standard?",
     "opts": [
      "No",
      "Yes — by submitting the expense claim",
      "Yes — by declaring personal bankruptcy"
     ],
     "ans": 1,
     "en": "Falsifying an expense claim is dishonest conduct under I(D); personal bankruptcy without fraud is not a violation.",
     "vi": "Khai gian chứng từ chi phí là hành vi bất chính theo I(D); phá sản cá nhân không gian lận không phải vi phạm."
    },
    {
     "q": "Butcher joins a new firm, re-creates supporting records from public sources, and routinely deletes records of client-position reviews that result in no change. He most likely violated the Standards:",
     "opts": [
      "Only by deleting the no-change review records",
      "Only by re-creating supporting records",
      "By both actions"
     ],
     "ans": 0,
     "en": "Re-creating records from public sources is exactly what V(C) requires after changing firms; reviews must be documented even when nothing changes.",
     "vi": "Tái lập hồ sơ từ nguồn công khai chính là điều V(C) yêu cầu khi đổi công ty; các lần rà soát phải được lưu lại kể cả khi không thay đổi gì."
    },
    {
     "q": "Xu plans to leave and start a competing advisory practice. Without notifying his employer, he makes preparations during non-working hours. Has he most likely violated the Standards?",
     "opts": [
      "No",
      "Yes — loyalty",
      "Yes — disclosure of conflicts"
     ],
     "ans": 0,
     "en": "Mere preparation to compete — done on personal time and short of actual competitive activity or solicitation — does not breach loyalty.",
     "vi": "Chỉ chuẩn bị để cạnh tranh — ngoài giờ làm việc, chưa thực sự kinh doanh hay lôi kéo — không vi phạm nghĩa vụ trung thành."
    }
   ]
  },
  {
   "name": "Set M — EOC Guidance I–VII (Q82–121)",
   "qs": [
    {
     "q": "According to the Standards, members who are supervisors are most likely required to:",
     "opts": [
      "Have in-depth knowledge of the Code and Standards",
      "Personally evaluate the conduct of all employees on a continuing basis",
      "Report employees’ violations to CFA Institute"
     ],
     "ans": 0,
     "en": "Supervisors must understand the Standards well enough to prevent and detect violations; they may delegate monitoring, and reporting to CFA Institute is not required.",
     "vi": "Người giám sát phải hiểu sâu Standards để ngăn ngừa và phát hiện vi phạm; được phép ủy quyền giám sát, và không bắt buộc báo cáo lên CFA Institute."
    },
    {
     "q": "Yeung’s firm has no record-retention policy and no law applies. She keeps work records electronically but deletes anything older than three years. Are her actions consistent with the recommendations for record retention?",
     "opts": [
      "Yes",
      "No — records should not be kept only electronically",
      "No — she deletes records older than three years"
     ],
     "ans": 2,
     "en": "Electronic storage is fine; absent regulation or firm policy, the recommendation is to retain records for at least SEVEN years.",
     "vi": "Lưu điện tử là hợp lệ; khi không có quy định hay chính sách công ty, khuyến nghị là lưu tối thiểu BẢY năm."
    },
    {
     "q": "Naxos’s president asks analyst Tam for customized industry reports in exchange for free travel and accommodation to the Naxos shareholder meeting. To comply, Tam is most likely required to:",
     "opts": [
      "Only disclose the arrangement to all the firm’s clients",
      "Only obtain written permission from his employer before accepting",
      "Both disclose to all clients and obtain employer permission"
     ],
     "ans": 1,
     "en": "Compensation (including travel benefits) from a third party for services requires prior written consent from the employer under IV(B); blanket client disclosure is not the requirement.",
     "vi": "Thù lao (kể cả chuyến đi) từ bên thứ ba cho dịch vụ đòi hỏi văn bản chấp thuận trước của công ty theo IV(B); không yêu cầu công bố đại trà cho khách hàng."
    },
    {
     "q": "Which must be retained under the record-retention Standard? Item 1: a recommendation change posted on social media. Item 2: reviews of materials that do NOT lead to a recommendation change.",
     "opts": [
      "Item 1 only",
      "Item 2 only",
      "Both items"
     ],
     "ans": 2,
     "en": "Records include communications in any medium — social media included — and reviews must be documented even when nothing changes.",
     "vi": "Hồ sơ bao gồm mọi kênh truyền thông — kể cả mạng xã hội — và các lần rà soát phải lưu lại dù không dẫn tới thay đổi."
    },
    {
     "q": "A recommended procedure for Responsibilities of Supervisors is to encourage firms to:",
     "opts": [
      "Continually educate personnel regarding the firm’s compliance procedures",
      "Separate professional-conduct evaluations from performance reviews",
      "Integrate compliance procedures into the code of ethics as one document"
     ],
     "ans": 0,
     "en": "Ongoing compliance education is recommended; conduct evaluation should be PART of performance reviews, and the code should stay separate from procedural detail.",
     "vi": "Đào tạo compliance liên tục là khuyến nghị; đánh giá đạo đức nghề nghiệp nên NẰM TRONG đánh giá hiệu quả, và code phải tách khỏi quy trình chi tiết."
    },
    {
     "q": "In the absence of regulation or firm policy, the Standards recommend retaining investment-related records for a minimum of:",
     "opts": [
      "Five years",
      "Seven years",
      "Ten years"
     ],
     "ans": 1,
     "en": "Seven years is the recommended default retention period.",
     "vi": "Bảy năm là kỳ hạn lưu trữ khuyến nghị mặc định."
    },
    {
     "q": "An unpaid intern (a Level II candidate) copies the supporting documents behind a model he built, intending to recreate the model at the firm he expects to join. Has he violated the Standards?",
     "opts": [
      "No",
      "Yes — record retention only",
      "Yes — record retention and loyalty"
     ],
     "ans": 2,
     "en": "Work product and its records belong to the firm — even for unpaid interns; copying them for a future employer breaches both V(C) and IV(A).",
     "vi": "Sản phẩm công việc và hồ sơ thuộc về công ty — kể cả với thực tập sinh không lương; sao chép mang đi vi phạm cả V(C) lẫn IV(A)."
    },
    {
     "q": "Disclosures about the use of leverage, sector or industry risk, and security-specific risk belong to the Standard relating to:",
     "opts": [
      "Independence and objectivity",
      "Responsibilities of supervisors",
      "Communication with clients and prospective clients"
     ],
     "ans": 2,
     "en": "V(B) requires disclosing the significant risks and limitations of the investment process.",
     "vi": "V(B) yêu cầu công bố các rủi ro và giới hạn đáng kể của quy trình đầu tư."
    },
    {
     "q": "Dupy finds several suitable proprietary funds for a client, then picks the one on the firm’s highest-fee bonus list without contacting the client. She most likely violated the Standard(s) relating:",
     "opts": [
      "Only to fair dealing",
      "Only to avoid or disclose conflicts",
      "To both"
     ],
     "ans": 1,
     "en": "The undisclosed bonus incentive that steered her choice is a conflict of interest; fair dealing (dissemination fairness) is not implicated.",
     "vi": "Khoản thưởng không công bố chi phối lựa chọn là xung đột lợi ích; fair dealing (công bằng khi phổ biến khuyến nghị) không liên quan ở đây."
    },
    {
     "q": "Which supervisor most likely violates the Standards? One who:",
     "opts": [
      "Delegates supervisory duties to subordinates",
      "Relies on an employee’s promise that wrongdoing will not recur and takes no additional steps",
      "Fails to detect every violation despite reasonable compliance efforts"
     ],
     "ans": 1,
     "en": "Accepting assurances without investigating or restricting the wrongdoer is inadequate supervision; delegation is allowed and perfection is not required.",
     "vi": "Chấp nhận lời hứa mà không điều tra hay hạn chế người vi phạm là giám sát yếu kém; ủy quyền được phép và không ai đòi hỏi hoàn hảo tuyệt đối."
    },
    {
     "q": "A candidate posts questions from the most recent CFA exam in an online forum. This violates the Standard(s) relating:",
     "opts": [
      "To preservation of confidentiality only",
      "To conduct as participants in CFA Institute programs only",
      "To both"
     ],
     "ans": 1,
     "en": "Exam confidentiality falls under VII(A); Standard III(E) protects CLIENT information, not exam content.",
     "vi": "Bảo mật đề thi thuộc VII(A); còn III(E) bảo vệ thông tin KHÁCH HÀNG, không phải nội dung đề."
    },
    {
     "q": "A member who cannot discharge supervisory responsibilities because of an inadequate compliance system should:",
     "opts": [
      "Decline in writing to accept supervisory responsibility only",
      "Report the inadequate system to CFA Institute only",
      "Both decline in writing and report to CFA Institute"
     ],
     "ans": 0,
     "en": "The required response is a written declination until the system is fixed; reporting to CFA Institute is not part of the Standard.",
     "vi": "Cách xử lý đúng là từ chối bằng văn bản cho tới khi hệ thống được khắc phục; báo cáo lên CFA Institute không nằm trong yêu cầu."
    },
    {
     "q": "Which Standard states that members must not commit any act that reflects adversely on their professional reputation, integrity, or competence?",
     "opts": [
      "Fair dealing",
      "Misconduct",
      "Loyalty, prudence, and care"
     ],
     "ans": 1,
     "en": "That is the text of Standard I(D) Misconduct.",
     "vi": "Đó là nguyên văn Standard I(D) Misconduct."
    },
    {
     "q": "Manager Zhang tells new hire Schulz only that \"the Code and Standards pretty much cover the firm’s compliance rules.\" Schulz holds a large personal position in a stock she recommends and reports it to no one. The Standards were most likely violated:",
     "opts": [
      "Only by Zhang",
      "Only by Schulz",
      "By both Zhang and Schulz"
     ],
     "ans": 2,
     "en": "Zhang failed to establish adequate compliance procedures (IV(C)); Schulz failed to disclose a clear conflict of interest (VI(A)).",
     "vi": "Zhang không xây dựng quy trình compliance đầy đủ (IV-C); Schulz không công bố xung đột lợi ích rõ ràng (VI-A)."
    },
    {
     "q": "Tengku presents his fund’s average historical performance as \"the minimum investors can expect next year.\" After finding an error in a report, he emails the corrected version to all clients, then calls only premium-fee clients to discuss it. He most likely violated the Standard(s) relating:",
     "opts": [
      "Only to fair dealing",
      "Only to performance presentation",
      "To both"
     ],
     "ans": 1,
     "en": "Projecting past averages as a guaranteed minimum misrepresents performance; the correction reached everyone simultaneously and premium discussion of public information is a permissible service level.",
     "vi": "Biến trung bình quá khứ thành mức tối thiểu tương lai là trình bày sai kết quả; bản đính chính đến mọi người cùng lúc và trao đổi sâu cho khách premium là hạng dịch vụ hợp lệ."
    },
    {
     "q": "Torro’s brochure: \"As a CFA charterholder, Emilio Torro will deliver better investment performance than the competition. Over the past 6 years Torro has beaten the market every year and will continue to do so.\" He most likely violated the Standard(s) relating:",
     "opts": [
      "To performance presentation only",
      "To reference to CFA Institute and the designation only",
      "To both"
     ],
     "ans": 2,
     "en": "Guaranteeing continued outperformance misrepresents performance, and attributing superior results to the charter violates VII(B).",
     "vi": "Cam kết tiếp tục thắng thị trường là trình bày sai kết quả, và gán thành tích vượt trội cho danh hiệu vi phạm VII(B)."
    },
    {
     "q": "Standish upgrades IC from \"hold\" to \"strong buy,\" writing \"Just as it has in the past two years, IC will double its earnings and dividend,\" sends the report to clients, and releases it to the press three days later. He most likely violated:",
     "opts": [
      "Only the MNPI Standard",
      "Only the communication Standard",
      "Both Standards"
     ],
     "ans": 1,
     "en": "Stating a forecast as certain fact violates V(B)’s fact–opinion distinction; serving clients before the public is proper, and no inside information is involved.",
     "vi": "Khẳng định dự báo như sự thật chắc chắn vi phạm phân định fact–opinion của V(B); phục vụ khách hàng trước công chúng là đúng, và không có thông tin nội bộ nào ở đây."
    },
    {
     "q": "Member violations of the misconduct Standard must involve a(n):",
     "opts": [
      "Illegal act",
      "Violation of one of the other Standards",
      "Act that reflects adversely on the member’s professional reputation"
     ],
     "ans": 2,
     "en": "Misconduct hinges on adverse reflection on professional reputation, integrity, or competence — legality is neither necessary nor sufficient.",
     "vi": "Misconduct xoay quanh việc làm tổn hại uy tín, sự chính trực, năng lực nghề nghiệp — tính hợp pháp không phải điều kiện cần hay đủ."
    },
    {
     "q": "Sampath refuses to give a charity his client list, shares the charity’s contact details with his clients, but also gives the charity contact details of his FORMER clients. Has he violated the Standards?",
     "opts": [
      "No",
      "Yes — preservation of confidentiality",
      "Yes — communication with clients"
     ],
     "ans": 1,
     "en": "Confidentiality survives the relationship: former clients’ information may not be shared without consent.",
     "vi": "Nghĩa vụ bảo mật tồn tại sau khi quan hệ kết thúc: không được chia sẻ thông tin khách hàng cũ khi chưa được phép."
    },
    {
     "q": "CFA Institute encourages members to report other members’ violations of the Code and Standards in writing to the:",
     "opts": [
      "Board of Governors",
      "Professional Conduct Program",
      "Disciplinary Review Committee"
     ],
     "ans": 1,
     "en": "Written reports of suspected violations go to the Professional Conduct Program.",
     "vi": "Báo cáo vi phạm bằng văn bản được gửi tới Professional Conduct Program."
    },
    {
     "q": "Recommended confidentiality procedures: P1 — convey to clients that not all firm-sponsored resources suit confidential communications. P2 — ensure firm-supported communications prevent accidental distribution of confidential information.",
     "opts": [
      "Only Procedure 1",
      "Only Procedure 2",
      "Both procedures"
     ],
     "ans": 2,
     "en": "Both are recommended safeguards for handling confidential client information.",
     "vi": "Cả hai đều là biện pháp khuyến nghị để bảo vệ thông tin mật của khách hàng."
    },
    {
     "q": "A client pays higher fees for premium services. The Standards most likely allow the member to provide that client with:",
     "opts": [
      "Larger allocations of oversubscribed IPOs",
      "Earlier access to recommendations and rating changes",
      "Direct access to research analysts to discuss published ratings in greater detail"
     ],
     "ans": 2,
     "en": "Premium tiers may add depth of service on already-disseminated information — never earlier access or preferential allocations.",
     "vi": "Hạng dịch vụ cao được thêm chiều sâu trên thông tin đã công bố — không bao giờ được tiếp cận sớm hay phân bổ ưu tiên."
    },
    {
     "q": "Byun, a broker with no legal fiduciary duty, finds two similar appropriate funds and recommends the one with the higher fee-sharing arrangement for himself. Has he most likely violated the Standards?",
     "opts": [
      "No",
      "Yes — suitability",
      "Yes — loyalty, prudence, and care"
     ],
     "ans": 2,
     "en": "III(A) applies regardless of legal fiduciary status: choosing the fund that pays him more, all else equal, puts his interest ahead of the client’s.",
     "vi": "III(A) áp dụng bất kể luật có gán nghĩa vụ ủy thác hay không: chọn quỹ trả mình nhiều hơn khi mọi thứ khác như nhau là đặt lợi ích bản thân trên khách hàng."
    },
    {
     "q": "Estefan advertises her 5-year team track record from her previous firm as her own performance at her new firm, with no reference to the old firm or her team role. She most likely violates the Standards:",
     "opts": [
      "Only by omitting the reference to the prior firm",
      "Only by omitting her team role",
      "By both omissions"
     ],
     "ans": 2,
     "en": "Performance must be presented fairly and completely: both where it was earned and that it was a team result are required context.",
     "vi": "Kết quả phải trình bày trung thực, đầy đủ: nơi tạo ra thành tích và vai trò trong nhóm đều là bối cảnh bắt buộc."
    },
    {
     "q": "Ho manages endowment portfolios with a shared conservative-growth goal, recommends a thinly traded stock after thorough research, and executes purchases prioritizing his largest clients first. He most likely violated the Standard relating to:",
     "opts": [
      "Suitability",
      "Fair dealing",
      "Priority of transactions"
     ],
     "ans": 1,
     "en": "Systematically favoring the largest clients in order execution breaches fair dealing.",
     "vi": "Ưu tiên có hệ thống cho khách hàng lớn nhất khi thực hiện lệnh vi phạm fair dealing."
    },
    {
     "q": "Garcia’s firm publicly posts a Buy→Sell change on Ajax Data. A client then orders Garcia to BUY AD for a non-discretionary account. Under fair dealing, Garcia should:",
     "opts": [
      "Refuse to execute the order",
      "Advise the client of the recommendation change before accepting the order",
      "Execute immediately because the account is non-discretionary"
     ],
     "ans": 1,
     "en": "Clients must be made aware of a material recommendation change before the firm acts on their orders — then the informed client may proceed.",
     "vi": "Khách phải được biết thay đổi khuyến nghị trọng yếu trước khi công ty thực hiện lệnh — sau đó khách đã hiểu rõ vẫn có quyền tiếp tục."
    },
    {
     "q": "Preston allocates an oversubscribed IPO suitable for all clients but excludes herself AND her brother, a fee-paying client, to avoid the appearance of conflict. Has she most likely violated the Standards?",
     "opts": [
      "No",
      "Yes — fair dealing",
      "Yes — diligence and reasonable basis"
     ],
     "ans": 1,
     "en": "A fee-paying family account must be treated like any other client — excluding her brother disadvantages him and violates fair dealing.",
     "vi": "Tài khoản người thân trả phí phải được đối xử như mọi khách hàng — loại anh trai ra khiến anh chịu thiệt, vi phạm fair dealing."
    },
    {
     "q": "Naden builds a recommendation from published data plus NONMATERIAL nonpublic information from experts and competitors, emails it only to the firm’s clients, who trade before the public release days later. Has she most likely violated the Standards?",
     "opts": [
      "No",
      "Yes — by using the expert and competitor information",
      "Yes — by not releasing to clients and the public simultaneously"
     ],
     "ans": 0,
     "en": "Combining public data with nonmaterial nonpublic inputs is the mosaic theory, and research belongs to the firm’s clients — no simultaneous public release is required.",
     "vi": "Ghép dữ liệu công khai với thông tin không trọng yếu chưa công bố là mosaic theory, và nghiên cứu thuộc về khách hàng của công ty — không bắt buộc công bố đồng thời ra công chúng."
    },
    {
     "q": "Which is NOT a recommended procedure for compliance with the MNPI Standard?",
     "opts": [
      "Physical separation of departments",
      "Adopting disclosure procedures for material information",
      "Avoiding public dissemination of material nonpublic information received"
     ],
     "ans": 2,
     "en": "The proper response to receiving MNPI is to encourage PUBLIC dissemination by the company — suppressing it is the opposite of the guidance.",
     "vi": "Cách xử lý đúng khi nhận MNPI là thúc đẩy công ty CÔNG BỐ rộng rãi — giữ kín thông tin là ngược với hướng dẫn."
    },
    {
     "q": "A member implements policies ensuring soft dollars are used to benefit clients. These policies most likely comply with the Standard relating to:",
     "opts": [
      "Referral fees",
      "Loyalty, prudence, and care",
      "Additional compensation arrangements"
     ],
     "ans": 1,
     "en": "Brokerage is a client asset: soft-dollar controls flow from the duty of loyalty, prudence, and care.",
     "vi": "Hoa hồng môi giới là tài sản của khách: kiểm soát soft dollars xuất phát từ nghĩa vụ trung thành, thận trọng, tận tâm."
    },
    {
     "q": "Under Loyalty, Prudence, and Care, a member with control of client assets should:",
     "opts": [
      "Vote proxies in the best interests of her firm",
      "Submit quarterly itemized account statements to her clients",
      "Combine client assets with other parties’ assets to cut administrative costs"
     ],
     "ans": 1,
     "en": "At least quarterly itemized statements are recommended; proxies are voted for clients/beneficiaries and assets must be kept separate.",
     "vi": "Sao kê chi tiết ít nhất hằng quý là khuyến nghị; proxy bỏ phiếu vì khách hàng/người thụ hưởng và tài sản phải tách bạch."
    },
    {
     "q": "Joy manages Bank Ltd.’s pension fund and thinks BL stock is overvalued. BL’s CEO asks him to buy BL stock for the pension fund to block a hostile takeover; he complies and the price later rises. Has Joy most likely violated Loyalty, Prudence, and Care?",
     "opts": [
      "No",
      "Yes — because BL stock subsequently increased",
      "Yes — because Joy complied with the CEO’s request"
     ],
     "ans": 2,
     "en": "The duty runs to plan beneficiaries, not the sponsor’s management: buying overvalued stock to entrench the company breaches loyalty regardless of the lucky outcome.",
     "vi": "Nghĩa vụ thuộc về người thụ hưởng quỹ, không phải ban lãnh đạo công ty tài trợ: mua cổ phiếu bị định giá cao để giữ ghế cho công ty là vi phạm, bất kể kết quả may mắn."
    },
    {
     "q": "Under Loyalty, Prudence, and Care, a member hired to manage an equity mutual fund:",
     "opts": [
      "Is required to vote proxies in all instances",
      "Owes the duty to the firm that hired her",
      "Owes the duty to invest in a manner consistent with the stated mandate"
     ],
     "ans": 2,
     "en": "For pooled vehicles, the duty of loyalty is fulfilled by adhering to the fund’s stated mandate; proxy voting follows cost–benefit analysis.",
     "vi": "Với quỹ đại chúng, nghĩa vụ trung thành thể hiện qua việc bám sát mandate đã công bố; bỏ phiếu proxy theo phân tích chi phí–lợi ích."
    },
    {
     "q": "Chen expands from technology coverage into the oil sector, attends training first, does comprehensive research, and buys FOC for suitable clients. FOC falls 20% two months later. Has she violated the Standards?",
     "opts": [
      "No",
      "Yes — competence",
      "Yes — diligence and reasonable basis"
     ],
     "ans": 0,
     "en": "She acquired the needed competence and had a reasonable basis; adverse outcomes do not retroactively create violations.",
     "vi": "Cô đã trang bị năng lực cần thiết và có cơ sở hợp lý; kết quả xấu không hồi tố thành vi phạm."
    },
    {
     "q": "Recommended misrepresentation procedures: P1 — each member prepares a list of services she is capable of performing. P2 — cite quotations as attributable to \"investment experts\" when source confidentiality must be preserved.",
     "opts": [
      "Procedure 1 only",
      "Procedure 2 only",
      "Both procedures"
     ],
     "ans": 0,
     "en": "A qualification/service summary is recommended; quotations must be attributed to their ACTUAL sources — vague \"experts\" credits are themselves misrepresentation.",
     "vi": "Bản tóm tắt năng lực/dịch vụ là khuyến nghị; trích dẫn phải ghi đúng nguồn THẬT — ghi mơ hồ \"các chuyên gia\" tự nó là misrepresentation."
    },
    {
     "q": "A recommended misrepresentation procedure is that a member should:",
     "opts": [
      "Refrain from using third-party information",
      "Update her qualification summary at least quarterly",
      "Keep copies of the materials she relied on in preparing each research report"
     ],
     "ans": 2,
     "en": "Maintaining copies of source materials is the core anti-plagiarism safeguard.",
     "vi": "Lưu bản sao tài liệu nguồn là biện pháp chống đạo văn cốt lõi."
    },
    {
     "q": "A member most likely violates the misrepresentation Standard if he:",
     "opts": [
      "Distributes a clearly identified third-party research report to clients",
      "Attributes a quotation to \"a leading analyst\" without naming the analyst",
      "Uses research done by an analyst who left the firm without attribution"
     ],
     "ans": 1,
     "en": "Quotations must credit the actual source. A former employee’s firm research is firm property usable without attribution, and identified third-party reports are fine.",
     "vi": "Trích dẫn phải ghi đúng nguồn. Nghiên cứu của nhân viên đã nghỉ là tài sản công ty, dùng không cần ghi tên; báo cáo bên thứ ba có ghi rõ nguồn cũng hợp lệ."
    },
    {
     "q": "Jones markets a commodities-stocks-bonds fund using a small-cap equity index as benchmark, and switches valuation firms for better service and lower cost (marginally raising illiquid asset values). He most likely violated the misrepresentation Standard:",
     "opts": [
      "Only by switching valuation firms",
      "Only by using the small-cap equity index as a benchmark",
      "By both actions"
     ],
     "ans": 1,
     "en": "A benchmark that does not match the strategy misleads investors; switching to a cheaper, better vendor for legitimate reasons is not a violation.",
     "vi": "Benchmark không khớp chiến lược gây hiểu lầm cho nhà đầu tư; đổi nhà cung cấp rẻ và tốt hơn vì lý do chính đáng không phải vi phạm."
    },
    {
     "q": "Berkam tells hedge fund clients: S1 — \"Seven consecutive years of gains, so investors are assured of avoiding losses next year.\" S2 — \"The strategy fits no standard benchmark, so no benchmark is provided.\" He most likely violated the Standards with:",
     "opts": [
      "Statement 1 only",
      "Statement 2 only",
      "Both statements"
     ],
     "ans": 0,
     "en": "Assuring future gains from past results is a misrepresentation; explaining why no appropriate benchmark exists is acceptable disclosure.",
     "vi": "Bảo đảm tương lai từ kết quả quá khứ là misrepresentation; giải thích vì sao không có benchmark phù hợp là công bố chấp nhận được."
    },
    {
     "q": "Alsagoff manages Acacia Papermill’s pension plan and reports annually to the plan trustees. Her duty of loyalty, prudence, and care is primarily owed to:",
     "opts": [
      "Acacia Papermill",
      "The pension plan trustees",
      "The beneficiaries of the pension plan"
     ],
     "ans": 2,
     "en": "For pension assets, the ultimate beneficiaries are the client — not the sponsor or the trustees she reports to.",
     "vi": "Với tài sản hưu trí, người thụ hưởng cuối cùng mới là khách hàng — không phải công ty tài trợ hay hội đồng ủy thác nhận báo cáo."
    }
   ]
  },
  {
   "name": "Set N — EOC Module 4: GIPS",
   "qs": [
    {
     "q": "Which statement regarding the GIPS standards is accurate?",
     "opts": [
      "All fee-paying client portfolios must be included in at least one composite",
      "All portfolios with the same investment mandate are aggregated into a composite",
      "Portfolios are aggregated into composites based on their actual performance each year"
     ],
     "ans": 1,
     "en": "Composites group portfolios managed to the same mandate/strategy (fee-paying discretionary ones being mandatory members). Non-discretionary portfolios are excluded, and selection by realized performance is prohibited.",
     "vi": "Composite gộp danh mục cùng mandate/chiến lược (loại trả phí được ủy quyền là bắt buộc). Danh mục không ủy quyền bị loại, và cấm chọn theo kết quả thực tế."
    },
    {
     "q": "Which comment concerning GIPS composites is correct?",
     "opts": [
      "A compliance claim requires all fee-paying accounts to be in at least one composite",
      "The composite requirement is designed to prevent firms from using best-performing accounts to represent a strategy",
      "A composite must include all fee-paying discretionary AND non-discretionary portfolios of the same mandate"
     ],
     "ans": 1,
     "en": "Composites exist to stop cherry-picking flagship accounts. Only DISCRETIONARY fee-paying portfolios are required members; non-discretionary ones are excluded.",
     "vi": "Composite sinh ra để chặn việc \"chọn hoa hậu\" tài khoản đẹp nhất. Chỉ danh mục trả phí ĐƯỢC ỦY QUYỀN bắt buộc tham gia; loại không ủy quyền bị loại."
    },
    {
     "q": "Which statement describes a key concept of the GIPS standards? S1: they are ethical standards ensuring full disclosure of investment performance. S2: composites are required for all strategies including nondiscretionary accounts. S3: they address all aspects of performance measurement.",
     "opts": [
      "Statement 1",
      "Statement 2",
      "Statement 3"
     ],
     "ans": 0,
     "en": "GIPS is an ethical standard for fair representation and full disclosure; non-discretionary accounts stay out of composites, and GIPS does not cover every aspect of measurement.",
     "vi": "GIPS là chuẩn đạo đức về trình bày trung thực, công bố đầy đủ; tài khoản không ủy quyền không vào composite, và GIPS không bao trùm mọi khía cạnh đo lường."
    },
    {
     "q": "A firm claiming compliance with the GIPS standards is required to:",
     "opts": [
      "Perform verification of its claim",
      "Maintain its compliance even after being verified by an independent third party",
      "Set composite selection criteria at the end of the reporting period"
     ],
     "ans": 1,
     "en": "Compliance is the firm’s ongoing responsibility — verification neither creates nor replaces it. Membership criteria must be set ex ante.",
     "vi": "Tuân thủ là trách nhiệm liên tục của công ty — verification không thay thế được. Tiêu chí composite phải đặt trước (ex ante)."
    },
    {
     "q": "Which statement about verification is most accurate? Verification:",
     "opts": [
      "Is mandatory if the firm claims GIPS compliance",
      "Is performed by the firm when self-certifying its claim",
      "Tests whether the firm’s processes are designed to present performance in compliance with GIPS"
     ],
     "ans": 2,
     "en": "Verification is voluntary, must be independent, and provides assurance on process design — not on individual results.",
     "vi": "Verification là tự nguyện, phải độc lập, và bảo đảm về thiết kế quy trình — không phải về từng kết quả cụ thể."
    },
    {
     "q": "According to the GIPS standards, verification is:",
     "opts": [
      "Performed with respect to an entire firm",
      "Performed by a firm’s compliance department",
      "Mandatory for firms claiming compliance"
     ],
     "ans": 0,
     "en": "Verification is firm-wide, by an independent third party, and voluntary.",
     "vi": "Verification thực hiện trên toàn công ty, bởi bên thứ ba độc lập, và tự nguyện."
    },
    {
     "q": "The objectives of the GIPS standards include:",
     "opts": [
      "Promoting financial regulators’ interests",
      "Promoting industry self-regulation on a global basis",
      "Obtaining acceptance of multiple local standards"
     ],
     "ans": 1,
     "en": "GIPS aims at global self-regulation and ONE worldwide standard — replacing the patchwork of local versions.",
     "vi": "GIPS hướng tới tự quản toàn cầu và MỘT chuẩn duy nhất — thay cho chắp vá các phiên bản địa phương."
    },
    {
     "q": "According to the GIPS standards, verification must be performed:",
     "opts": [
      "With respect to an entire firm",
      "On specific composites of a firm",
      "By a firm’s compliance department"
     ],
     "ans": 0,
     "en": "Verification cannot be done composite-by-composite or in-house — it is firm-wide and independent.",
     "vi": "Không thể verify theo từng composite hay tự làm nội bộ — phải toàn công ty và độc lập."
    },
    {
     "q": "As part of adherence to the GIPS standards, asset managers are most likely required to:",
     "opts": [
      "Adhere to certain calculation methodologies",
      "Only follow the minimum requirements at composite creation",
      "Include all non-discretionary funds in at least one composite"
     ],
     "ans": 0,
     "en": "GIPS mandates specific input-data and calculation methodologies for comparability; non-discretionary funds are excluded from composites.",
     "vi": "GIPS quy định phương pháp dữ liệu đầu vào và tính toán để bảo đảm so sánh được; quỹ không ủy quyền bị loại khỏi composite."
    },
    {
     "q": "Which statement is most accurate? Compliance with the GIPS standards:",
     "opts": [
      "Eliminates the need for in-depth due diligence by investors",
      "Enables firms to participate in competitive bids against other GIPS-compliant firms",
      "Is mandatory in countries lacking performance-presentation regulations"
     ],
     "ans": 1,
     "en": "Compliance opens the door to global competitive bids; it never replaces due diligence and is always voluntary.",
     "vi": "Tuân thủ mở cửa tham gia đấu thầu toàn cầu; không thay thế thẩm định và luôn là tự nguyện."
    },
    {
     "q": "Which is NOT a key concept of the GIPS standards for firms? They:",
     "opts": [
      "Require the use of composites",
      "Rely on the integrity of input data",
      "Address every aspect of performance measurement"
     ],
     "ans": 2,
     "en": "GIPS explicitly does not address every aspect of performance measurement and continues to evolve.",
     "vi": "GIPS tuyên bố rõ là không bao trùm mọi khía cạnh đo lường kết quả và sẽ tiếp tục phát triển."
    },
    {
     "q": "Verification provides assurance that which of the following have been designed in compliance with GIPS?",
     "opts": [
      "Only the calculation and presentation of performance",
      "Only composite and pooled fund maintenance policies",
      "Both the calculation/presentation policies and the composite/pooled-fund maintenance policies"
     ],
     "ans": 2,
     "en": "Verification covers both pillars: composite/pooled-fund maintenance and performance calculation/presentation — designed and implemented firm-wide.",
     "vi": "Verification bao phủ cả hai trụ cột: duy trì composite/quỹ gộp và tính toán/trình bày kết quả — được thiết kế và triển khai toàn công ty."
    },
    {
     "q": "According to the GIPS standards, verification:",
     "opts": [
      "Is performed on a firm-wide basis",
      "Must be performed by the firm’s compliance department",
      "Ensures the accuracy of specific composite presentations"
     ],
     "ans": 0,
     "en": "Firm-wide and independent — and it does NOT assure the accuracy of any specific presentation.",
     "vi": "Toàn công ty và độc lập — và KHÔNG bảo chứng độ chính xác của bất kỳ bản trình bày cụ thể nào."
    },
    {
     "q": "A firm claiming compliance with the GIPS standards must:",
     "opts": [
      "State that its calculation methodology is \"in accordance with the GIPS standards\"",
      "Disclose the firm assets for which only partial compliance is achieved",
      "Document the policies and procedures used in establishing compliance"
     ],
     "ans": 2,
     "en": "Documented policies and procedures are required. Only the prescribed compliance statement may be used, and partial compliance does not exist.",
     "vi": "Bắt buộc văn bản hóa chính sách, quy trình. Chỉ được dùng câu tuyên bố tuân thủ theo mẫu, và không tồn tại tuân thủ một phần."
    },
    {
     "q": "S1: When local regulations conflict with GIPS on composite construction, firms must comply with GIPS. S2: When local regulations conflict with GIPS on performance presentation, firms must comply with local regulation. Which is correct?",
     "opts": [
      "Statement 1 only",
      "Statement 2 only",
      "Both statements"
     ],
     "ans": 1,
     "en": "Local law always prevails in a conflict — the firm follows it and discloses the conflict in the GIPS Report.",
     "vi": "Luật địa phương luôn thắng khi xung đột — công ty tuân theo và công bố xung đột trong GIPS Report."
    },
    {
     "q": "A firm has existed for seven years. To comply with GIPS, the minimum number of years of compliant performance it must initially present is:",
     "opts": [
      "Three years",
      "Five years",
      "Seven years"
     ],
     "ans": 1,
     "en": "Initial compliance requires at least five years (or since inception if younger than five).",
     "vi": "Tuân thủ ban đầu cần tối thiểu năm năm (hoặc từ khi thành lập nếu chưa đủ năm năm)."
    },
    {
     "q": "The GIPS standards most likely:",
     "opts": [
      "Assure prospective clients of the accuracy of reported performance",
      "Help prospective clients consider all relevant information to evaluate past performance",
      "Require firms to disclose their own methodologies in a standardized form"
     ],
     "ans": 1,
     "en": "GIPS delivers fair representation and full disclosure so prospects can evaluate the record — not a guarantee of accuracy.",
     "vi": "GIPS mang lại trình bày trung thực, công bố đầy đủ để khách tiềm năng đánh giá thành tích — không phải bảo chứng độ chính xác."
    },
    {
     "q": "Which of the following can claim compliance with the GIPS standards?",
     "opts": [
      "Asset owners",
      "Software vendors that assist firms with compliance",
      "Both asset owners and software vendors"
     ],
     "ans": 0,
     "en": "Firms and asset owners managing actual assets can claim compliance; vendors, consultants, and software providers cannot.",
     "vi": "Công ty và asset owner quản lý tài sản thực được tuyên bố tuân thủ; nhà cung cấp phần mềm, tư vấn thì không."
    },
    {
     "q": "S1: GIPS compliance eliminates the need for investor due diligence. S2: External managers’ GIPS compliance helps an asset owner understand the risk and return sources of funds it supervises. Which is accurate?",
     "opts": [
      "Statement 1 only",
      "Statement 2 only",
      "Both statements"
     ],
     "ans": 1,
     "en": "Compliance aids evaluation but never replaces due diligence; the benefit to asset owners overseeing external managers is real.",
     "vi": "Tuân thủ hỗ trợ đánh giá nhưng không thay thế thẩm định; lợi ích cho asset owner giám sát quản lý bên ngoài là có thật."
    },
    {
     "q": "A 3-year-old firm presents three years of compliant performance (since inception). GIPS requires adding a year of performance each year until reaching a minimum of:",
     "opts": [
      "Five years",
      "Seven years",
      "Ten years"
     ],
     "ans": 2,
     "en": "The record builds year by year to a minimum of ten years of GIPS-compliant performance.",
     "vi": "Chuỗi thành tích bổ sung từng năm cho tới tối thiểu mười năm tuân thủ GIPS."
    },
    {
     "q": "A firm manages a $200m small-cap growth composite and sells $50m of those managed assets to a competitor. To remain GIPS-compliant, the firm must:",
     "opts": [
      "Exclude the $50m from its historical performance",
      "Continue to include the $50m in historical performance until the assets were sold",
      "Show the $50m’s history separately from the remaining $150m"
     ],
     "ans": 1,
     "en": "History is not rewritten: the sold assets remain part of the composite’s past record through the date of sale.",
     "vi": "Lịch sử không được viết lại: tài sản đã bán vẫn nằm trong thành tích quá khứ của composite cho tới ngày bán."
    }
   ]
  },
  {
   "name": "Set O — EOC Module 5: Ethics Application",
   "qs": [
    {
     "q": "Candidate Paralova tells a prospect: \"Getting the CFA Charter will show I am serious about protecting my clients’ interests… Once I get the Charter, I hope to make more money by getting promoted!\" Klemmer, CFA, replies: \"Study all subjects — you never know what will be included. The three exams will be the most difficult you will ever take. Any promotion will reflect your enhanced skills.\" Who violated the Standards?",
     "opts": [
      "Neither",
      "Only Paralova",
      "Only Klemmer"
     ],
     "ans": 1,
     "en": "\"Once I get the Charter\" presumes she will obtain it — an improper implied claim about future success in the Program. Klemmer’s remarks are factual opinion about the Program’s rigor and benefits.",
     "vi": "\"Khi tôi có Charter\" mặc định chắc chắn sẽ đạt — hàm ý sai lệch về kết quả tương lai trong Chương trình. Lời của Klemmer là nhận định thực tế về độ khó và lợi ích của Chương trình."
    },
    {
     "q": "Kite finalizes a \"buy\" recommendation. According to recommended procedures, he should communicate the recommendation:",
     "opts": [
      "Within the firm first and then to customers",
      "To customers first and then within the firm",
      "Simultaneously within the firm and to customers"
     ],
     "ans": 2,
     "en": "Simultaneous internal and client dissemination prevents anyone in the firm from acting ahead of clients.",
     "vi": "Phổ biến đồng thời trong nội bộ và cho khách hàng ngăn bất kỳ ai trong công ty hành động trước khách."
    },
    {
     "q": "Howley \"pumps up\" a security’s price by spreading misleading information, then \"dumps\" it at the artificially high level. He most likely violated the Standard relating to:",
     "opts": [
      "Market manipulation",
      "Independence and objectivity",
      "Material nonpublic information"
     ],
     "ans": 0,
     "en": "Pump-and-dump is the textbook information-based market manipulation under II(B).",
     "vi": "Pump-and-dump là ví dụ kinh điển của thao túng thị trường bằng thông tin theo II(B)."
    }
   ]
  }
 ]
};
