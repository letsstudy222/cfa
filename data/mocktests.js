/* =====================================================================
   MOCK TESTS · ĐỀ THI THỬ
   ---------------------------------------------------------------------
   Mỗi đề trong window.CFA.mocktests: { name: 'Tên đề', qs: [ ...câu hỏi ] }
   Mỗi câu hỏi: {
     q:    'Nội dung câu hỏi (English, như đề thật)',
     opts: ['Đáp án A', 'Đáp án B', 'Đáp án C'],   // đúng 3 đáp án
     ans:  0,                                        // chỉ số đáp án đúng: 0, 1 hoặc 2
     en:   'Giải thích tiếng Anh',
     vi:   'Giải thích tiếng Việt'
   }
   Để thêm đề mới: copy khối window.CFA.mocktests.push({...}) và thay nội dung.
   ===================================================================== */
window.CFA = window.CFA || { topics: [], extra: {}, mocktests: [] };
window.CFA.mocktests.push({
 name: "Mock Exam 1 — Session 1 (Ethics · Quant · Econ · FSA · Corporate Issuers)",
 qs: [
 {
  "q": "Jolene Campbell, CFA, is working on a report about XLK Autos, which is developing a fuel-efficient car about which no public information is available. Campbell uses financial data and information from automobile experts not connected to XLK about the project's commercial viability, then issues a \"buy\" recommendation exclusively to her firm's clients, expecting the report to impact the stock price. Has she violated the Standard on material nonpublic information?",
  "opts": [
   "No",
   "Yes, because she uses information that is not yet public",
   "Yes, because she fails to make her recommendation public"
  ],
  "ans": 0,
  "en": "This is the mosaic theory: combining public information with nonmaterial nonpublic insights from sources unconnected to the issuer is permitted, even when the conclusion would move the price. There is no duty to publish research publicly.",
  "vi": "Đây là mosaic theory: kết hợp thông tin công khai với các mẩu thông tin không trọng yếu từ nguồn không liên quan đến công ty là được phép, kể cả khi kết luận có thể làm giá biến động. Không có nghĩa vụ công bố nghiên cứu ra công chúng."
 },
 {
  "q": "Rex Leopold, CFA, plans to leave his employer to start a competing business. During non-business hours, and before giving notice, he prepares by procuring regulatory approvals, leasing office space, and hiring an office manager. Has Leopold violated the Standards?",
  "opts": [
   "No",
   "Yes, the Standard relating to loyalty",
   "Yes, the Standard relating to misconduct"
  ],
  "ans": 0,
  "en": "Mere PREPARATION to compete — approvals, premises, staff hired on his own time — is allowed under Loyalty IV(A), provided he does not actually compete with or harm his employer before resigning (no clients solicited, no confidential material taken).",
  "vi": "Việc CHUẨN BỊ để cạnh tranh — xin phép, thuê văn phòng, tuyển người ngoài giờ làm — được phép theo Standard Loyalty IV(A), miễn là chưa thực sự cạnh tranh hay gây hại cho chủ cũ trước khi nghỉ (chưa lôi kéo khách, không lấy tài liệu mật)."
 },
 {
  "q": "A member holds a supervisory position. Which Standard recommends that the member regularly engage in informal continuing education so professional responsibilities are fulfilled?",
  "opts": [
   "Suitability",
   "Competence",
   "Responsibilities of supervisors"
  ],
  "ans": 1,
  "en": "The Competence standard (Professionalism) calls for maintaining and improving professional abilities through continuing education — formal and informal — so responsibilities can be fulfilled.",
  "vi": "Standard Competence (nhóm Professionalism) yêu cầu duy trì và nâng cao năng lực nghề nghiệp qua học tập liên tục — chính thức lẫn không chính thức — để hoàn thành trách nhiệm."
 },
 {
  "q": "The Standard relating to conduct as participants in CFA Institute programs prohibits candidates from:",
  "opts": [
   "Discussing curriculum material with others",
   "Expressing disagreement with CFA Institute on its policies",
   "Disclosing broad topical areas and formulas not tested on the CFA Level I exam"
  ],
  "ans": 2,
  "en": "Standard VII(A) forbids revealing confidential exam content — including which topics or formulas were or were NOT tested. Discussing the public curriculum and criticizing CFA Institute policies are both allowed.",
  "vi": "Standard VII(A) cấm tiết lộ nội dung bảo mật của kỳ thi — kể cả chủ đề hay công thức nào có hoặc KHÔNG có trong đề. Thảo luận giáo trình công khai và phê bình chính sách của CFA Institute đều được phép."
 },
 {
  "q": "A 12-year-old investment firm adopts the GIPS standards. To claim compliance, the firm is initially required to present GIPS-compliant performance history:",
  "opts": [
   "For at least five years",
   "For at least ten years",
   "Since the firm's inception date"
  ],
  "ans": 0,
  "en": "Initial compliance requires a minimum five-year compliant record (or since inception if younger), then building to ten years by adding each subsequent year.",
  "vi": "Lần tuân thủ đầu tiên yêu cầu tối thiểu 5 năm lịch sử đạt chuẩn (hoặc từ khi thành lập nếu công ty trẻ hơn), sau đó bổ sung từng năm cho đến đủ 10 năm."
 },
 {
  "q": "Toshi Hoda, CFA, an analyst at a brokerage firm, holds shares in a company he begins to cover. Under the Standard on conflicts of interest, Hoda must disclose his holdings to:",
  "opts": [
   "His employer only",
   "His employer and his firm's clients only",
   "His employer, his firm's clients, and prospective clients"
  ],
  "ans": 2,
  "en": "Standard VI(A) requires full, fair, and prominent disclosure of conflicts to the employer, clients, AND prospective clients — ownership of a covered stock could impair objectivity.",
  "vi": "Standard VI(A) đòi hỏi công bố xung đột đầy đủ, rõ ràng cho chủ lao động, khách hàng VÀ khách hàng tiềm năng — nắm cổ phiếu mình phân tích có thể làm mất tính khách quan."
 },
 {
  "q": "A firm claiming compliance with the GIPS standards:",
  "opts": [
   "Can claim compliance on specific composites",
   "Is responsible for maintaining that compliance",
   "Must be verified by an independent third party"
  ],
  "ans": 1,
  "en": "Compliance is firm-wide and self-regulated: the FIRM bears responsibility for its claim. Verification is recommended but voluntary, and compliance can never be claimed for selected composites only.",
  "vi": "Tuân thủ GIPS áp dụng toàn công ty và tự giám sát: CÔNG TY chịu trách nhiệm về tuyên bố của mình. Verification được khuyến nghị nhưng tự nguyện, và không bao giờ được tuyên bố tuân thủ cho riêng vài composite."
 },
 {
  "q": "In the absence of regulatory guidance, CFA Institute recommends that members maintain investment research records for at least:",
  "opts": [
   "3 years",
   "5 years",
   "7 years"
  ],
  "ans": 2,
  "en": "Standard V(C): absent regulation to the contrary, retain records for at least seven years.",
  "vi": "Standard V(C): nếu luật không quy định khác, lưu hồ sơ tối thiểu bảy năm."
 },
 {
  "q": "Vijay Gupta, CFA, is hired to manage a church retirement plan whose staff members opt in voluntarily. The trustees prohibit stocks of alcohol, tobacco, gambling, or firearms companies. Gupta says he cannot execute his usual strategy with these restrictions and that his other accounts hold such stocks for their alpha. By agreeing to manage the account per the trustees' wishes, does Gupta violate the Standards?",
  "opts": [
   "No",
   "Yes, because he was hired based on his previous investment strategy",
   "Yes, because the restrictions are not in the best interest of the members"
  ],
  "ans": 0,
  "en": "The client is the plan, represented by its trustees; managing within the client's stated constraints — after candidly explaining the strategy impact — is exactly what the Standards require. Members join voluntarily, knowing the restrictions.",
  "vi": "Khách hàng là quỹ hưu, đại diện bởi các trustees; quản lý trong khuôn khổ ràng buộc mà khách đặt ra — sau khi đã nói thẳng tác động lên chiến lược — chính là điều Standards yêu cầu. Thành viên tham gia tự nguyện và biết rõ các hạn chế."
 },
 {
  "q": "Under the recommended procedures for the Standard on additional compensation arrangements, a member receiving additional compensation must disclose to his employer in writing:",
  "opts": [
   "The nature of the compensation only",
   "The approximate amount only",
   "Both the nature and the approximate amount of the compensation"
  ],
  "ans": 2,
  "en": "Standard IV(B): written consent from all parties requires disclosing the nature, approximate amount, and duration of the arrangement — the employer must see the full picture.",
  "vi": "Standard IV(B): sự đồng ý bằng văn bản của các bên đòi hỏi công bố bản chất, số tiền xấp xỉ và thời hạn của thỏa thuận — chủ lao động phải thấy bức tranh đầy đủ."
 },
 {
  "q": "Which of the following is a key concept of the GIPS standards? The GIPS standards:",
  "opts": [
   "Address every aspect of performance measurement",
   "Require firms to adhere to certain calculation methodologies to allow for comparability across firms",
   "Require the inclusion of all discretionary and non-discretionary segregated accounts in at least one composite"
  ],
  "ans": 1,
  "en": "Standardized calculation methodologies are the core of GIPS comparability. GIPS does NOT cover every aspect of measurement, and only actual, fee-paying, DISCRETIONARY portfolios must join a composite.",
  "vi": "Phương pháp tính toán chuẩn hóa là cốt lõi của tính so sánh được trong GIPS. GIPS KHÔNG bao phủ mọi khía cạnh đo lường, và chỉ danh mục thực, trả phí, TOÀN QUYỀN (discretionary) mới buộc phải vào composite."
 },
 {
  "q": "Joy Nash, CFA, resides in Country 1, where applicable law is less strict than the Standards. She does business in Country 2, where law is less strict than in Country 1. When doing business in Country 2, Nash must follow:",
  "opts": [
   "The Code and Standards",
   "Applicable law of Country 1",
   "Applicable law of Country 2"
  ],
  "ans": 0,
  "en": "The rule: follow the STRICTEST of applicable law and the Code and Standards. Both countries' laws are less strict → the Code and Standards govern.",
  "vi": "Quy tắc: tuân theo chuẩn NGHIÊM NHẤT giữa luật áp dụng và Code & Standards. Luật cả hai nước đều lỏng hơn → Code & Standards chi phối."
 },
 {
  "q": "Agnes Trimbach, CFA, recommends German government bonds to a client, telling him: \"The government guarantees that you will receive the promised principal and interest. In addition, interest rate fluctuations could add to your gains or cause losses.\" Has Trimbach violated the Standards?",
  "opts": [
   "No",
   "Yes, the Standard relating to misrepresentation",
   "Yes, the Standard relating to communication with clients"
  ],
  "ans": 0,
  "en": "Both statements are accurate: a sovereign issuer does promise (guarantee) its own principal and interest payments, and she explicitly disclosed the market (interest-rate) risk. Accurate, balanced communication — no violation.",
  "vi": "Cả hai câu đều chính xác: chính phủ phát hành thực sự cam kết (bảo đảm) trả gốc và lãi của trái phiếu mình, và cô đã công bố rõ rủi ro thị trường (lãi suất). Truyền đạt chính xác, cân bằng — không vi phạm."
 },
 {
  "q": "Sandra Chen, CFA, works at research firm Vega. Her group identifies a low-volatility product as a viable risk-reduction strategy and prepares a report she believes is thorough, with risks disclosed. Chen disagrees with the findings — she believes the product will be more volatile than the report suggests — but agrees to have her name on the report. Has she violated the Standards?",
  "opts": [
   "No",
   "Yes, because she failed to dissociate herself from the report",
   "Yes, because she failed to include her dissenting opinion in the report"
  ],
  "ans": 0,
  "en": "When a group conclusion has a reasonable and adequate basis, a member who personally disagrees need NOT dissociate — her name can remain. Documenting her difference of opinion is prudent but not required in the report itself.",
  "vi": "Khi kết luận của nhóm có cơ sở hợp lý và đầy đủ, thành viên bất đồng quan điểm cá nhân KHÔNG buộc phải rút tên — tên cô có thể giữ nguyên. Ghi lại ý kiến khác biệt là thận trọng nhưng không bắt buộc đưa vào báo cáo."
 },
 {
  "q": "Tomas Bo, CFA, receives an unsolicited stock order from a client. He discusses the order with his firm's analysts to determine its impact on the client's portfolio; they find the stock undervalued and suitable for many clients. Bo calls other clients to recommend the stock, then executes a single block trade for the original client and the others. Bo most likely violated the Standards:",
  "opts": [
   "Only by executing the single block trade",
   "Only by discussing unsolicited client orders with his analysts",
   "Both by executing the block trade and by discussing the orders with analysts"
  ],
  "ans": 0,
  "en": "The original client's order deserved prompt execution; delaying it to solicit other clients and bundle everyone into one block trade subordinates that client's interest. Discussing the order internally to assess portfolio impact serves the client and is permitted.",
  "vi": "Lệnh của khách ban đầu đáng lẽ phải được thực hiện ngay; trì hoãn để mời chào khách khác rồi gộp tất cả vào một block trade là đặt lợi ích của khách đó xuống dưới. Thảo luận nội bộ để đánh giá tác động danh mục là phục vụ khách hàng và được phép."
 },
 {
  "q": "Alan Quanta, CFA, provides credit analysis of high-yield bonds. His firm holds a large position in Veyron bonds, which have become hard to sell after rating downgrades. His supervisor asks him to convince the firm's institutional clients that Veyron bonds are still attractive, especially at lower prices. Quanta does not consider the bonds a buy at this level. The most appropriate action for Quanta is to:",
  "opts": [
   "Obey his supervisor's request",
   "Ignore his supervisor's request",
   "Promote the bonds with appropriate disclosures"
  ],
  "ans": 1,
  "en": "Recommending what he believes is not a buy — to offload the firm's own position — would violate independence and objectivity, loyalty to clients, and diligence. He must refuse; disclosures cannot cure a recommendation he does not believe.",
  "vi": "Khuyến nghị thứ mình không tin là đáng mua — để xả vị thế của chính công ty — vi phạm tính độc lập khách quan, lòng trung thành với khách hàng và sự cẩn trọng. Anh phải từ chối; công bố thông tin không cứu được một khuyến nghị mà chính mình không tin."
 },
 {
  "q": "To increase market interest and trading volume in a stock, an advisor buys the stock and immediately sells it without causing large price movements. The advisor then shares consensus analyst earnings estimates on social media. Has the advisor violated the Standard on market manipulation?",
  "opts": [
   "No",
   "Yes, by sharing analyst earnings estimates on social media",
   "Yes, by buying and selling the stock to increase market participants' interest and trading volume"
  ],
  "ans": 2,
  "en": "Transaction-based manipulation: trades executed to create an artificial appearance of activity distort the market even without price movement. Sharing publicly available consensus estimates is legitimate information-sharing.",
  "vi": "Thao túng bằng giao dịch: các lệnh mua bán nhằm tạo vẻ ngoài sôi động giả tạo làm méo mó thị trường dù giá không đổi. Chia sẻ ước tính đồng thuận công khai là truyền tin hợp pháp."
 },
 {
  "q": "Werner Merz, CFA, manages a short-term corporate bond fund at a subsidiary of Cygnet Bank. The bank president asks Merz to buy the bank's long-term government bonds at 100 — above market price — so the bank avoids realizing a loss, assuring him the fund can hold to maturity. Merz buys the bonds at 100. He has most likely violated the Standard(s) relating:",
  "opts": [
   "Only to suitability",
   "Only to loyalty, prudence, and care",
   "Both to suitability and to loyalty, prudence, and care"
  ],
  "ans": 2,
  "en": "Long-term government bonds don't fit a short-term corporate bond mandate (suitability), and overpaying to spare the parent bank a loss puts the bank's interest above fund investors' (loyalty, prudence, and care).",
  "vi": "Trái phiếu chính phủ dài hạn không hợp mandate quỹ trái phiếu doanh nghiệp ngắn hạn (suitability), và trả giá cao để ngân hàng mẹ né khoản lỗ là đặt lợi ích ngân hàng trên nhà đầu tư của quỹ (loyalty, prudence, care)."
 },
 {
  "q": "A member presents investment performance to potential clients. Under the Standard on performance presentation, the member is permitted to omit:",
  "opts": [
   "Only simulated results as a source of performance data",
   "Only supporting details of recommendations if the details are made available upon request",
   "Both simulated results and supporting details if made available upon request"
  ],
  "ans": 1,
  "en": "Detailed supporting information may be omitted from a presentation when it is maintained and offered on request. If simulated results ARE used, their simulated nature must be disclosed — that fact cannot be omitted.",
  "vi": "Chi tiết hỗ trợ có thể được lược khỏi bài trình bày nếu được lưu giữ và cung cấp khi yêu cầu. Nếu CÓ dùng kết quả mô phỏng thì phải công bố bản chất mô phỏng — điều đó không được lược bỏ."
 },
 {
  "q": "Maria Bendez, CFA, a well-known analyst, sends her recommendations to all firm clients but not to the public, though she believes they could affect prices. A client thanks her, saying the recommendations provide an advantage over other market participants. Has Bendez violated the Standards?",
  "opts": [
   "No",
   "Yes, the Standard relating to material nonpublic information",
   "Yes, the Standards relating to material nonpublic information and fair dealing"
  ],
  "ans": 0,
  "en": "Her own opinions and analysis are not \"inside information\" — an analyst's recommendation belongs to the firm and its clients. Distributing it to ALL clients simultaneously satisfies fair dealing; there is no duty to inform the public.",
  "vi": "Quan điểm và phân tích của chính cô không phải \"thông tin nội bộ\" — khuyến nghị của analyst thuộc về công ty và khách hàng của công ty. Gửi đồng thời cho MỌI khách hàng thỏa mãn fair dealing; không có nghĩa vụ thông báo cho công chúng."
 },
 {
  "q": "Hina Khan, CFA, works at ABC Bank and refers clients to other business units of the bank when they need such services. She does not disclose the referral fee arrangement she has with those units, as it is an arrangement within the bank. Has Khan violated the Standards?",
  "opts": [
   "No",
   "Yes, the Standard relating to fair dealing",
   "Yes, the Standard relating to referral fees"
  ],
  "ans": 2,
  "en": "Standard VI(C) requires disclosing any compensation for referrals — including intra-firm arrangements — so clients can assess the recommendation's objectivity and full cost.",
  "vi": "Standard VI(C) yêu cầu công bố mọi khoản thù lao cho việc giới thiệu — kể cả thỏa thuận nội bộ trong cùng ngân hàng — để khách hàng đánh giá được tính khách quan và chi phí đầy đủ."
 },
 {
  "q": "John Pedersen, CFA, writes in promotional material — Statement 1: \"I passed all three CFA Program examinations in three consecutive years.\" Statement 2: \"Being a CFA charterholder, I am among the elite of investment professionals.\" Has Pedersen violated the Standard(s)?",
  "opts": [
   "No",
   "Yes, by making Statement 1 only",
   "Yes, by making Statement 2 only"
  ],
  "ans": 2,
  "en": "Stating the fact of passing three exams in three years is permitted. Claiming charterholders are \"among the elite\" implies superior ability from the designation — an exaggerated, prohibited use of the CFA marks.",
  "vi": "Nêu sự thật đã đỗ ba kỳ thi trong ba năm liên tiếp là được phép. Tuyên bố charterholder \"thuộc giới tinh hoa\" hàm ý năng lực vượt trội nhờ danh hiệu — cách dùng chứng chỉ CFA phóng đại, bị cấm."
 },
 {
  "q": "Once a violation by an employee is discovered, a supervisor should:",
  "opts": [
   "Avoid increasing supervision of the wrongdoer until the investigation is concluded",
   "Place appropriate limitations on the wrongdoer pending the outcome of the investigation",
   "Rely on the employee's statement about the extent of the violation if given written assurance it will not reoccur"
  ],
  "ans": 1,
  "en": "Recommended procedure under IV(C): respond promptly, investigate, and RESTRICT the employee's activities while the investigation runs. Relying on promises or delaying supervision fails the duty.",
  "vi": "Quy trình khuyến nghị theo IV(C): phản ứng ngay, điều tra, và GIỚI HẠN hoạt động của nhân viên trong khi điều tra. Tin vào lời hứa hay trì hoãn giám sát là không tròn trách nhiệm."
 },
 {
  "q": "Megan Chandra, CFA, allocates an oversubscribed IPO suitable for all accounts she manages, but does not allocate it to her mother's standard fee-paying account or her husband's non-fee-paying account. Has she violated the Standards?",
  "opts": [
   "No",
   "Yes, by not allocating the IPO to her mother's account",
   "Yes, by not allocating the IPO to both her husband's and her mother's accounts"
  ],
  "ans": 1,
  "en": "Family accounts that pay standard fees are CLIENTS and must not be disadvantaged — her mother's account deserved its allocation. The husband's non-fee-paying account counts as a beneficial (personal) account, which may be excluded from a hot IPO.",
  "vi": "Tài khoản người thân trả phí như khách thường là KHÁCH HÀNG và không được thiệt thòi — tài khoản của mẹ cô xứng đáng được phân bổ. Tài khoản không thu phí của chồng được xem là tài khoản hưởng lợi (cá nhân), có thể loại khỏi IPO nóng."
 },
 {
  "q": "The Standard on communication with clients and prospective clients requires members to inform which of the following of significant risks and limitations of the investment decision-making process?",
  "opts": [
   "Clients only",
   "Prospective clients only",
   "Both clients and prospective clients"
  ],
  "ans": 2,
  "en": "Standard V(B) applies to clients AND prospects alike — the name of the standard says so, and risk disclosure is central to informed decisions for both.",
  "vi": "Standard V(B) áp dụng cho cả khách hàng LẪN khách hàng tiềm năng — ngay tên chuẩn mực đã nói vậy, và công bố rủi ro là cốt lõi để cả hai ra quyết định có hiểu biết."
 },
 {
  "q": "According to the CFA Institute Code of Ethics, members are responsible for:",
  "opts": [
   "Monitoring their firm's compliance with the Standards",
   "Ensuring the professional competence of employees in their firm",
   "Promoting the integrity of and upholding the rules governing capital markets"
  ],
  "ans": 2,
  "en": "Promoting market integrity and upholding capital-market rules is a component of the Code of Ethics itself. Firm-wide monitoring and others' competence are not personal Code obligations.",
  "vi": "Thúc đẩy tính chính trực và tôn trọng luật lệ thị trường vốn là một cấu phần của chính Code of Ethics. Giám sát toàn công ty hay năng lực của người khác không phải nghĩa vụ cá nhân trong Code."
 },
 {
  "q": "Which of the following is an objective of the GIPS standards?",
  "opts": [
   "Establish financial regulation on a global basis",
   "Promote investor interests and instill investor confidence",
   "Encourage the development of national standards for calculating investment performance"
  ],
  "ans": 1,
  "en": "GIPS aims to protect investors and build confidence through comparable, fair performance presentation. It is voluntary — not regulation — and it promotes ONE global standard, not national variants.",
  "vi": "GIPS nhằm bảo vệ nhà đầu tư và xây niềm tin qua trình bày hiệu quả công bằng, so sánh được. Nó tự nguyện — không phải luật — và thúc đẩy MỘT chuẩn toàn cầu, không phải các chuẩn quốc gia riêng."
 },
 {
  "q": "Which statement about fintech applications is most accurate? They:",
  "opts": [
   "Can perform tasks at levels surpassing human capabilities",
   "Eliminate the need for humans in providing investment advice to retail investors",
   "Use models that outperform traditional statistical models in revealing linear relationships"
  ],
  "ans": 0,
  "en": "Machine learning can exceed human capability on specific tasks (pattern detection in vast data). Humans remain in the advice chain, and ML's edge is NON-linear relationships — traditional statistics handle linear ones well.",
  "vi": "Machine learning có thể vượt năng lực con người ở các tác vụ cụ thể (nhận diện mẫu trong dữ liệu khổng lồ). Con người vẫn hiện diện trong chuỗi tư vấn, và lợi thế của ML là quan hệ PHI tuyến — thống kê truyền thống xử lý quan hệ tuyến tính đã tốt."
 },
 {
  "q": "Market 1: many sellers, no non-price competition. Market 2: few sellers, strong non-price competition. Market 3: many sellers, strong non-price competition. Which market is most likely monopolistically competitive?",
  "opts": [
   "Market 1",
   "Market 2",
   "Market 3"
  ],
  "ans": 2,
  "en": "Monopolistic competition = MANY sellers plus differentiation through advertising, branding, and features (non-price competition). Market 1 is perfect competition; Market 2 is an oligopoly.",
  "vi": "Cạnh tranh độc quyền = NHIỀU người bán cộng khác biệt hóa qua quảng cáo, thương hiệu, tính năng (cạnh tranh phi giá). Market 1 là cạnh tranh hoàn hảo; Market 2 là độc quyền nhóm."
 },
 {
  "q": "With respect to ESG analysis, which of the following is most likely categorized as a social issue?",
  "opts": [
   "Deforestation",
   "Labor standards",
   "Bribery and corruption"
  ],
  "ans": 1,
  "en": "Labor standards concern people — the S pillar. Deforestation is environmental; bribery and corruption belong to governance.",
  "vi": "Chuẩn mực lao động liên quan đến con người — trụ cột S. Phá rừng thuộc môi trường (E); hối lộ và tham nhũng thuộc quản trị (G)."
 },
 {
  "q": "Tiered pricing is best described as:",
  "opts": [
   "Charging different prices at different times",
   "Charging different prices to different buyers",
   "Combining a low price on equipment with high-margin pricing on repeat-purchase consumables"
  ],
  "ans": 1,
  "en": "Tiered pricing charges different buyers different prices, typically by volume tier. Option A describes dynamic pricing; option C is the razor-and-blades (captive product) model.",
  "vi": "Tiered pricing tính giá khác nhau cho người mua khác nhau, thường theo bậc khối lượng. Phương án A là định giá linh hoạt theo thời điểm; phương án C là mô hình dao cạo–lưỡi dao (sản phẩm ràng buộc)."
 },
 {
  "q": "Which best describes a function of the International Bank for Reconstruction and Development?",
  "opts": [
   "Provides low interest rate loans to developing countries",
   "Regulates cross-border trade relationships on a global scale",
   "Lends foreign currencies on a temporary basis to address balance of payment issues"
  ],
  "ans": 0,
  "en": "The IBRD (World Bank) finances development with low-cost loans and grants. Trade rules belong to the WTO; temporary balance-of-payments lending is the IMF.",
  "vi": "IBRD (World Bank) tài trợ phát triển bằng khoản vay lãi thấp và viện trợ. Luật thương mại thuộc WTO; cho vay tạm thời xử lý cán cân thanh toán là IMF."
 },
 {
  "q": "As a result of an inventory write-down, which financial ratio most likely decreases?",
  "opts": [
   "Quick ratio",
   "Current ratio",
   "Payables turnover ratio"
  ],
  "ans": 1,
  "en": "The write-down shrinks inventory, cutting current assets → current ratio falls. The quick ratio excludes inventory (unchanged), and payables turnover (purchases or COGS/payables) would rise, not fall, as COGS grows.",
  "vi": "Ghi giảm làm teo hàng tồn kho, kéo tài sản ngắn hạn xuống → current ratio giảm. Quick ratio loại trừ tồn kho (không đổi), còn vòng quay phải trả (COGS/phải trả) sẽ tăng chứ không giảm khi COGS tăng."
 },
 {
  "q": "Which of the following ranks geopolitical systems from the LOWEST to the HIGHEST level of globalization?",
  "opts": [
   "Autarky, bilateralism, hegemony",
   "Autarky, hegemony, bilateralism",
   "Bilateralism, hegemony, autarky"
  ],
  "ans": 0,
  "en": "Autarky = national self-reliance (least globalized); bilateralism = country-by-country engagement; hegemony = deep engagement with the world economy on the hegemon's terms (most globalized of the three).",
  "vi": "Autarky = tự cung tự cấp quốc gia (ít toàn cầu hóa nhất); bilateralism = hợp tác từng cặp nước; hegemony = tham gia sâu vào kinh tế thế giới theo luật của bá quyền (toàn cầu hóa nhất trong ba)."
 },
 {
  "q": "Cost of equity if no debt is issued 12%; cost of debt 6%; debt is 30% of the capital structure. With no taxes, the WACC under Modigliani–Miller Proposition II is closest to:",
  "opts": [
   "10.2%",
   "12.0%",
   "14.6%"
  ],
  "ans": 1,
  "en": "MM without taxes: capital structure is irrelevant — WACC stays pinned at the unlevered cost of capital, 12%. Cheaper debt is exactly offset by a higher levered cost of equity.",
  "vi": "MM không thuế: cấu trúc vốn không ảnh hưởng — WACC đứng yên tại chi phí vốn không đòn bẩy, 12%. Nợ rẻ hơn bị bù trừ chính xác bởi chi phí vốn chủ có đòn bẩy cao hơn."
 },
 {
  "q": "A positively skewed unimodal distribution of returns most likely has:",
  "opts": [
   "A long tail on the left side",
   "A mode that is less than its mean",
   "Frequent small gains and a few extreme losses"
  ],
  "ans": 1,
  "en": "Positive skew: mode < median < mean, with the long tail on the RIGHT — frequent small losses and a few extreme gains. Option C describes negative skew.",
  "vi": "Lệch dương: mode < median < mean, đuôi dài bên PHẢI — nhiều khoản lỗ nhỏ và vài khoản lãi cực lớn. Phương án C mô tả lệch âm."
 },
 {
  "q": "Statement 1: The IRR assumes reinvestment of cash flows at the required rate of return. Statement 2: IRR is strongly preferred when NPV and IRR rank two mutually exclusive projects differently. Statement 3: NPV is zero when IRR equals the hurdle rate. Which statement is most accurate?",
  "opts": [
   "Statement 1",
   "Statement 2",
   "Statement 3"
  ],
  "ans": 2,
  "en": "NPV discounts at the hurdle rate, and when that rate equals the IRR, NPV = 0 by definition. IRR assumes reinvestment at the IRR itself (S1 wrong), and NPV — not IRR — governs conflicting rankings (S2 wrong).",
  "vi": "NPV chiết khấu tại hurdle rate, và khi mức đó bằng IRR thì NPV = 0 theo định nghĩa. IRR giả định tái đầu tư tại chính IRR (S1 sai), và NPV — chứ không phải IRR — quyết định khi xếp hạng mâu thuẫn (S2 sai)."
 },
 {
  "q": "During the slowdown phase of the business cycle:",
  "opts": [
   "Inflation decelerates",
   "Business halts new orders",
   "Business slows its rate of hiring"
  ],
  "ans": 2,
  "en": "In the slowdown, growth decelerates: firms slow hiring and trim overtime. Inflation typically still ACCELERATES at this late stage; orders slow rather than halt.",
  "vi": "Trong pha slowdown, tăng trưởng chậm dần: doanh nghiệp giảm tốc tuyển dụng và cắt tăng ca. Lạm phát ở pha muộn này thường vẫn TĂNG TỐC; đơn hàng chậm lại chứ không dừng hẳn."
 },
 {
  "q": "Costs incurred during the research phase £10m; development costs incurred after reaching technical feasibility £15m. If all capitalization criteria are met (IFRS), the maximum amount eligible for capitalization is:",
  "opts": [
   "£10m",
   "£15m",
   "£25m"
  ],
  "ans": 1,
  "en": "IFRS: research costs are ALWAYS expensed; development costs may be capitalized once technical feasibility and the other criteria are demonstrated → £15m.",
  "vi": "IFRS: chi phí nghiên cứu LUÔN được ghi nhận vào chi phí; chi phí phát triển được vốn hóa khi chứng minh tính khả thi kỹ thuật và các tiêu chí khác → £15tr."
 },
 {
  "q": "Target capital structure is often expressed using book values of equity and debt because:",
  "opts": [
   "Capital structure policy is aligned to measures used by third parties",
   "Market values can fluctuate substantially and frequently impact the appropriate level of borrowing",
   "For management, the primary concern is capital invested in the company, not by the company"
  ],
  "ans": 1,
  "en": "Book values give management a stable yardstick: market values swing with sentiment, which would make the \"target\" chase the market rather than guide financing decisions.",
  "vi": "Giá trị sổ sách cho ban điều hành một thước đo ổn định: giá trị thị trường dao động theo tâm lý, khiến \"mục tiêu\" phải chạy theo thị trường thay vì dẫn dắt quyết định tài trợ."
 },
 {
  "q": "Which ratio is most appropriate when assessing a company's ability to meet its LONG-TERM debt obligations?",
  "opts": [
   "Current ratio",
   "Defensive interval ratio",
   "Financial leverage ratio"
  ],
  "ans": 2,
  "en": "Long-term debt capacity is a SOLVENCY question — leverage ratios answer it. The current and defensive interval ratios measure short-term liquidity.",
  "vi": "Khả năng trả nợ dài hạn là câu hỏi về SOLVENCY — các tỷ số đòn bẩy trả lời nó. Current ratio và defensive interval đo thanh khoản ngắn hạn."
 },
 {
  "q": "A bank account has a stated annual rate of 3.5% with quarterly compounding. If the current value is $100,000, the future value two years from now is closest to:",
  "opts": [
   "$107,123",
   "$107,207",
   "$107,218"
  ],
  "ans": 2,
  "en": "FV = 100,000 × (1 + 0.035/4)⁸ = 100,000 × 1.00875⁸ = $107,218 — eight quarterly periods at 0.875%.",
  "vi": "FV = 100.000 × (1 + 0,035/4)⁸ = 100.000 × 1,00875⁸ = $107.218 — tám kỳ quý với 0,875% mỗi kỳ."
 },
 {
  "q": "Total assets: Year 2 = 90, Year 1 = 100. Total liabilities: Year 2 = 36, Year 1 = 40. Using vertical common-size balance sheet analysis, total liabilities in Year 2 are closest to:",
  "opts": [
   "40%",
   "67%",
   "90%"
  ],
  "ans": 0,
  "en": "Vertical common-size scales every item by TOTAL ASSETS of the same year: 36/90 = 40%. (67% would be liabilities/equity — a different ratio.)",
  "vi": "Common-size dọc chia mọi khoản mục cho TỔNG TÀI SẢN cùng năm: 36/90 = 40%. (67% là nợ/vốn chủ — một tỷ số khác.)"
 },
 {
  "q": "Cash: Y1 = 20, Y2 = 20. Receivables: Y1 = 50, Y2 = 60. Highly marketable short-term securities: Y1 = 50, Y2 = 40. Inventories: Y1 = 70, Y2 = 80. Current liabilities: 100 both years. From Year 1 to Year 2, the cash ratio:",
  "opts": [
   "Decreased",
   "Remained the same",
   "Increased"
  ],
  "ans": 0,
  "en": "Cash ratio = (cash + marketable securities)/current liabilities: Y1 = (20 + 50)/100 = 0.70 → Y2 = (20 + 40)/100 = 0.60. Receivables and inventories never enter the cash ratio.",
  "vi": "Cash ratio = (tiền + chứng khoán thanh khoản)/nợ ngắn hạn: N1 = (20 + 50)/100 = 0,70 → N2 = (20 + 40)/100 = 0,60. Phải thu và tồn kho không bao giờ vào cash ratio."
 },
 {
  "q": "Under US GAAP, which of the following should be reported separately from continuing operations on the income statement?",
  "opts": [
   "Restructuring charges",
   "Gain or loss from sale of an asset",
   "Results of discontinued operations"
  ],
  "ans": 2,
  "en": "Discontinued operations are presented net of tax BELOW continuing operations. Restructuring charges and asset-sale gains/losses stay inside continuing operations (as unusual items).",
  "vi": "Hoạt động bị ngừng được trình bày sau thuế BÊN DƯỚI hoạt động liên tục. Chi phí tái cấu trúc và lãi/lỗ bán tài sản vẫn nằm trong hoạt động liên tục (khoản mục bất thường)."
 },
 {
  "q": "USD/EUR spot rate 1.1800; expected spot rate in one year 1.1650 (USD per 1 EUR). The expected change in the value of the dollar relative to the euro is closest to a(n):",
  "opts": [
   "Depreciation of 1.27%",
   "Appreciation of 1.27%",
   "Appreciation of 1.29%"
  ],
  "ans": 2,
  "en": "Fewer dollars per euro → the dollar strengthens. Measure the USD's change by inverting: EUR/USD goes from 1/1.1800 to 1/1.1650 → (1.1800/1.1650) − 1 = +1.29% appreciation.",
  "vi": "Ít đô hơn cho mỗi euro → đô mạnh lên. Đo mức thay đổi của USD bằng cách nghịch đảo: EUR/USD từ 1/1,1800 lên 1/1,1650 → (1,1800/1,1650) − 1 = +1,29% tăng giá."
 },
 {
  "q": "A central bank decides to lower interest rates. To carry out this policy, it will most likely:",
  "opts": [
   "Sell securities",
   "Buy securities",
   "Increase required reserve requirements"
  ],
  "ans": 1,
  "en": "Open-market PURCHASES inject reserves into banks, pushing short-term rates down toward the new target. Selling securities or raising reserve requirements would tighten instead.",
  "vi": "MUA chứng khoán trên thị trường mở bơm dự trữ vào ngân hàng, đẩy lãi suất ngắn hạn xuống mục tiêu mới. Bán chứng khoán hay nâng dự trữ bắt buộc là thắt chặt, ngược chiều."
 },
 {
  "q": "Cash €200m, short-term marketable investments €300m, receivables €1,000m, inventory €1,500m, current liabilities €5,000m. The quick ratio is:",
  "opts": [
   "0.10",
   "0.30",
   "0.50"
  ],
  "ans": 1,
  "en": "Quick ratio = (cash + marketable investments + receivables)/current liabilities = (200 + 300 + 1,000)/5,000 = 0.30. Inventory is excluded — that is the whole point of \"quick.\"",
  "vi": "Quick ratio = (tiền + đầu tư thanh khoản + phải thu)/nợ ngắn hạn = (200 + 300 + 1.000)/5.000 = 0,30. Tồn kho bị loại — đó chính là ý nghĩa của chữ \"quick.\""
 },
 {
  "q": "Proxy voting is best defined as a means for:",
  "opts": [
   "A would-be acquirer to gain control",
   "Activist shareholders to pressure management",
   "Shareholders voting without attending a meeting in person"
  ],
  "ans": 2,
  "en": "A proxy authorizes another party to cast your vote — participation without physical attendance. Acquirers use tender offers or proxy FIGHTS; the mechanism itself is simply remote voting.",
  "vi": "Proxy ủy quyền cho bên khác bỏ phiếu thay bạn — tham gia mà không cần có mặt. Bên thâu tóm dùng chào mua công khai hoặc proxy FIGHT; bản thân cơ chế chỉ là bỏ phiếu từ xa."
 },
 {
  "q": "The NZD/EUR spot rate is 1.5453. If the 3-month forward discount is 24 points, the 3-month forward rate is closest to:",
  "opts": [
   "1.54290",
   "1.54770",
   "1.54901"
  ],
  "ans": 0,
  "en": "Points scale by 10⁻⁴ for four-decimal quotes, and a DISCOUNT subtracts: F = 1.5453 − 0.0024 = 1.54290.",
  "vi": "Điểm kỳ hạn nhân 10⁻⁴ với báo giá bốn chữ số thập phân, và DISCOUNT thì trừ đi: F = 1,5453 − 0,0024 = 1,54290."
 },
 {
  "q": "Variance of X = 9; variance of Y = 15; covariance of Y and X = 12. The slope coefficient of the simple linear regression of Y on X is closest to:",
  "opts": [
   "0.80",
   "1.03",
   "1.33"
  ],
  "ans": 2,
  "en": "b₁ = Cov(X,Y)/Var(X) = 12/9 = 1.33. The variance of Y never enters the slope formula — it is the classic distractor.",
  "vi": "b₁ = Cov(X,Y)/Var(X) = 12/9 = 1,33. Phương sai của Y không bao giờ vào công thức hệ số góc — đó là mồi nhử kinh điển."
 },
 {
  "q": "The third quintile corresponds to the:",
  "opts": [
   "40th percentile",
   "50th percentile",
   "60th percentile"
  ],
  "ans": 2,
  "en": "Quintiles cut the data into fifths of 20% each: the third quintile boundary sits at 3 × 20 = the 60th percentile.",
  "vi": "Ngũ phân vị chia dữ liệu thành năm phần 20%: ranh giới ngũ phân vị thứ ba nằm tại 3 × 20 = phân vị 60."
 },
 {
  "q": "Goodness of fit measures derived from analysis of variance (ANOVA) data most likely include the:",
  "opts": [
   "Coefficient of variation",
   "Regression coefficients",
   "Standard error of the estimate"
  ],
  "ans": 2,
  "en": "From the ANOVA table come R² (= RSS/TSS) and the SEE (= √[SSE/(n−2)]) — both fit measures. Regression coefficients come from estimation, not ANOVA, and CV is a descriptive statistic.",
  "vi": "Từ bảng ANOVA rút ra R² (= RSS/TSS) và SEE (= √[SSE/(n−2)]) — cả hai đo độ khớp. Hệ số hồi quy đến từ bước ước lượng, không phải ANOVA, còn CV là thống kê mô tả."
 },
 {
  "q": "PP&E may be reported above its historical cost on the balance sheet under:",
  "opts": [
   "The cost model only",
   "The revaluation model only",
   "Both the cost model and the revaluation model"
  ],
  "ans": 1,
  "en": "Only the revaluation model (IFRS) can carry PP&E at fair value ABOVE historical cost. The cost model caps carrying value at cost less depreciation and impairment.",
  "vi": "Chỉ mô hình đánh giá lại (IFRS) mới cho phép ghi PP&E theo giá trị hợp lý CAO HƠN nguyên giá. Mô hình giá gốc chặn giá trị ghi sổ tại nguyên giá trừ khấu hao và suy giảm."
 },
 {
  "q": "Market value of equity $64m, cost of equity 14%; market value of debt $20m, before-tax cost of debt 5%; marginal tax rate 30%. The company's WACC is closest to:",
  "opts": [
   "11.02%",
   "11.50%",
   "11.86%"
  ],
  "ans": 1,
  "en": "Weights: E = 64/84 = 76.19%, D = 20/84 = 23.81%. WACC = 0.7619 × 14% + 0.2381 × 5% × (1 − 0.30) = 10.67% + 0.83% = 11.50%.",
  "vi": "Trọng số: E = 64/84 = 76,19%, D = 20/84 = 23,81%. WACC = 0,7619 × 14% + 0,2381 × 5% × (1 − 0,30) = 10,67% + 0,83% = 11,50%."
 },
 {
  "q": "Sales $1,200m growing 4%; cost of sales $300m growing 8%. The forecast gross profit margin change is closest to a(n):",
  "opts": [
   "Decrease of 4%",
   "Decrease of 1%",
   "Increase of 1%"
  ],
  "ans": 1,
  "en": "Current margin = (1,200 − 300)/1,200 = 75.0%. Forecast: sales 1,248, COGS 324 → (1,248 − 324)/1,248 = 74.04%. Costs outgrowing sales shave about 1 percentage point off the margin.",
  "vi": "Biên hiện tại = (1.200 − 300)/1.200 = 75,0%. Dự phóng: doanh thu 1.248, giá vốn 324 → (1.248 − 324)/1.248 = 74,04%. Chi phí tăng nhanh hơn doanh thu bào mất khoảng 1 điểm phần trăm biên."
 },
 {
  "q": "Five annual tuition payments of $25,000 begin exactly 20 years from today. At a stated annual rate of 4%, the required investment today is closest to:",
  "opts": [
   "$50,794",
   "$52,826",
   "$54,939"
  ],
  "ans": 1,
  "en": "Value the ordinary annuity one period before the first payment, at t = 19: 25,000 × [1 − 1.04⁻⁵]/0.04 = 111,296. Discount 19 years: 111,296/1.04¹⁹ = $52,826.",
  "vi": "Định giá niên kim thường lùi một kỳ trước khoản đầu tiên, tại t = 19: 25.000 × [1 − 1,04⁻⁵]/0,04 = 111.296. Chiết khấu 19 năm: 111.296/1,04¹⁹ = $52.826."
 },
 {
  "q": "Which company would most likely have the LOWEST financial reporting quality, other things equal?",
  "opts": [
   "A company reporting significant profits due to a favorable exchange rate movement",
   "A company reporting the results of two different segments as a combined entity",
   "A company providing high-quality, decision-useful GAAP information but delaying its reports"
  ],
  "ans": 1,
  "en": "Combining distinct segments hides the composition of performance — decision-useful information is obscured. FX gains are real (earnings quality, not reporting quality), and late-but-excellent reports still convey high-quality information.",
  "vi": "Gộp các mảng kinh doanh khác nhau che giấu cấu trúc kết quả — thông tin hữu ích cho quyết định bị mờ đi. Lãi tỷ giá là có thật (chất lượng lợi nhuận, không phải chất lượng báo cáo), còn báo cáo muộn nhưng xuất sắc vẫn truyền tải thông tin chất lượng cao."
 },
 {
  "q": "In which business structure do owners share ALL risk and business liability?",
  "opts": [
   "Corporations",
   "Limited partnerships",
   "General partnerships"
  ],
  "ans": 2,
  "en": "General partners bear unlimited joint liability for the business. Corporations shield shareholders; limited partnerships shield the LIMITED partners.",
  "vi": "Thành viên hợp danh chịu trách nhiệm vô hạn và liên đới cho doanh nghiệp. Công ty cổ phần che chắn cổ đông; hợp danh hữu hạn che chắn các thành viên GÓP VỐN."
 },
 {
  "q": "Cash / short-term instruments / receivables / inventory / current liabilities — Company 1: 2.5/4.0/2.0/1.0/5.0; Company 2: 2.0/1.0/2.0/1.0/2.5; Company 3: 1.5/1.0/1.0/3.0/2.0. Based on the quick ratio, which company exhibits the LOWEST liquidity risk?",
  "opts": [
   "Company 1",
   "Company 2",
   "Company 3"
  ],
  "ans": 1,
  "en": "Quick = (cash + instruments + receivables)/CL: C1 = 8.5/5.0 = 1.70; C2 = 5.0/2.5 = 2.00; C3 = 3.5/2.0 = 1.75. Highest quick ratio → Company 2 carries the least liquidity risk.",
  "vi": "Quick = (tiền + công cụ + phải thu)/nợ ngắn hạn: C1 = 8,5/5,0 = 1,70; C2 = 5,0/2,5 = 2,00; C3 = 3,5/2,0 = 1,75. Quick ratio cao nhất → Company 2 rủi ro thanh khoản thấp nhất."
 },
 {
  "q": "For a company paying preferred dividends, the components needed to compute basic EPS are net income:",
  "opts": [
   "And the weighted average number of common shares outstanding",
   "Preferred dividends, and the weighted average number of common shares outstanding",
   "Preferred dividends, additional shares if preferred is converted, and the weighted average number of common shares"
  ],
  "ans": 1,
  "en": "Basic EPS = (NI − preferred dividends)/weighted average common shares. Conversion effects belong to DILUTED EPS only.",
  "vi": "Basic EPS = (LNST − cổ tức ưu đãi)/bình quân gia quyền cổ phiếu phổ thông. Hiệu ứng chuyển đổi chỉ thuộc về DILUTED EPS."
 },
 {
  "q": "In monopolistically competitive markets, economic profits:",
  "opts": [
   "Cannot be earned",
   "Can be earned in the short run only",
   "Can be earned in the short run and in the long run"
  ],
  "ans": 1,
  "en": "Low barriers do the work: short-run profits attract entrants whose close substitutes flatten each firm's demand until economic profit reaches zero in the long run.",
  "vi": "Rào cản thấp làm hết mọi việc: lợi nhuận ngắn hạn hút người gia nhập, các sản phẩm thay thế gần của họ làm phẳng đường cầu từng công ty cho đến khi lợi nhuận kinh tế về 0 trong dài hạn."
 },
 {
  "q": "Year 2: total debt ¥2,300m, equity ¥17,000m, net income ¥375m, interest ¥200m, taxes ¥125m. Year 1 ratios: debt-to-capital 12.7%, interest coverage 2.9. Compared with Year 1, the company's solvency has:",
  "opts": [
   "Deteriorated because both ratios have weakened",
   "Remained the same",
   "Improved because both ratios have strengthened"
  ],
  "ans": 2,
  "en": "Y2 debt/capital = 2,300/(2,300 + 17,000) = 11.9% (down from 12.7% — better). Y2 coverage = EBIT/interest = (375 + 125 + 200)/200 = 3.5 (up from 2.9 — better). Both moved the right way.",
  "vi": "N2 nợ/vốn = 2.300/(2.300 + 17.000) = 11,9% (giảm từ 12,7% — tốt hơn). N2 bao phủ lãi vay = EBIT/lãi = (375 + 125 + 200)/200 = 3,5 (tăng từ 2,9 — tốt hơn). Cả hai đều chuyển đúng hướng."
 },
 {
  "q": "In hypothesis testing, the critical value is determined by the:",
  "opts": [
   "p-value",
   "Sample's mean",
   "Level of significance"
  ],
  "ans": 2,
  "en": "Choose α, and the critical value follows from the test statistic's distribution. The p-value is computed FROM the data and compared against α — it doesn't set the critical value.",
  "vi": "Chọn α, giá trị tới hạn suy ra từ phân phối của thống kê kiểm định. p-value được tính TỪ dữ liệu và đem so với α — nó không quyết định giá trị tới hạn."
 },
 {
  "q": "If the prices of tech stocks usually rise when interest rates fall, the correlation between the two variables is most likely:",
  "opts": [
   "Negative",
   "Zero",
   "Positive"
  ],
  "ans": 0,
  "en": "The variables move in opposite directions — one falls as the other rises — which is precisely a negative correlation.",
  "vi": "Hai biến chuyển động ngược chiều — cái này giảm khi cái kia tăng — chính xác là tương quan âm."
 },
 {
  "q": "Interest payable DECREASED during the fiscal year. Compared with cash interest payments made, interest expense is most likely:",
  "opts": [
   "Lower",
   "The same",
   "Higher"
  ],
  "ans": 0,
  "en": "A falling payable means the company paid down more than it accrued: cash paid = expense + decrease in payable → expense < cash paid.",
  "vi": "Khoản phải trả giảm nghĩa là công ty trả nhiều hơn phần trích trong kỳ: tiền trả = chi phí + mức giảm phải trả → chi phí < tiền trả."
 },
 {
  "q": "Year-end prices for a non-dividend stock bought at end of Year 1, sold at end of Year 3: €6, €10, €12. Which return is the largest?",
  "opts": [
   "The geometric mean annual return",
   "The arithmetic mean annual return",
   "The two-year holding period return"
  ],
  "ans": 2,
  "en": "HPR spans BOTH years uncompounded into an annual figure: 12/6 − 1 = 100%. Annualized measures are far smaller: arithmetic mean = (66.7% + 20%)/2 = 43.3%; geometric = √2 − 1 = 41.4%.",
  "vi": "HPR gộp CẢ hai năm chưa quy về năm: 12/6 − 1 = 100%. Các thước đo năm hóa nhỏ hơn nhiều: trung bình cộng = (66,7% + 20%)/2 = 43,3%; trung bình nhân = √2 − 1 = 41,4%."
 },
 {
  "q": "A company makes all sales on credit. Under converged revenue recognition standards, a CONTRACT ASSET is most likely recognized when:",
  "opts": [
   "Goods are delivered and payment is received",
   "Payment is received in advance of transferring the goods",
   "Revenue is recognized on some performance obligations but the right to bill awaits others"
  ],
  "ans": 2,
  "en": "A contract asset arises when revenue has been earned on satisfied obligations but invoicing is conditional on completing remaining obligations. Advance payment creates a contract LIABILITY; delivery-plus-payment leaves nothing on the balance sheet.",
  "vi": "Tài sản hợp đồng xuất hiện khi doanh thu đã ghi nhận trên nghĩa vụ hoàn thành nhưng quyền xuất hóa đơn còn chờ các nghĩa vụ còn lại. Nhận tiền trước tạo NỢ hợp đồng; giao hàng kèm thu tiền thì không để lại gì trên bảng cân đối."
 },
 {
  "q": "Which statement about the financial reporting of defined contribution pension plans is correct?",
  "opts": [
   "The only balance sheet impact from contributions is on an asset account",
   "Company contributions to the plan are treated as an operating cash flow",
   "DC plans require several assumptions to estimate pension obligations"
  ],
  "ans": 1,
  "en": "DC contributions are expensed and flow out as operating cash. The company's obligation ends with the contribution — no actuarial assumptions (that burden belongs to DB plans).",
  "vi": "Đóng góp DC ghi vào chi phí và chảy ra dưới dạng dòng tiền hoạt động. Nghĩa vụ của công ty kết thúc cùng khoản đóng — không cần giả định actuarial (gánh nặng đó thuộc về DB)."
 },
 {
  "q": "Line items can be expressed as a percentage of net revenue on which common-size financial statements?",
  "opts": [
   "The income statement only",
   "The statement of cash flows only",
   "Both the income statement and the statement of cash flows"
  ],
  "ans": 2,
  "en": "Revenue-scaling works for both: the income statement conventionally, and the cash flow statement in one of its common-size formats (the other scales by total inflows/outflows).",
  "vi": "Chia theo doanh thu áp dụng cho cả hai: báo cáo KQKD theo thông lệ, và báo cáo lưu chuyển tiền tệ trong một dạng common-size phổ biến (dạng còn lại chia theo tổng dòng vào/ra)."
 },
 {
  "q": "Annual returns on a stock: 5%, −2%, 3%, 8%. With an annual target return of 4%, the sample target semideviation is closest to:",
  "opts": [
   "3.0%",
   "3.5%",
   "4.2%"
  ],
  "ans": 1,
  "en": "Below-target years: −2 (shortfall 6) and 3 (shortfall 1). Sum of squares = 36 + 1 = 37; divide by n − 1 = 3 → 12.33; √12.33 = 3.5%.",
  "vi": "Các năm dưới mục tiêu: −2 (hụt 6) và 3 (hụt 1). Tổng bình phương = 36 + 1 = 37; chia n − 1 = 3 → 12,33; √12,33 = 3,5%."
 },
 {
  "q": "A manufacturing company invests in the maintenance of its IT hardware and software. This best describes a(n):",
  "opts": [
   "Expansion project",
   "Going concern project",
   "Innovation opportunity"
  ],
  "ans": 1,
  "en": "Maintenance capex sustains existing operations — the definition of a going concern project. Expansion grows capacity; innovation creates new products or processes.",
  "vi": "Capex bảo trì duy trì hoạt động hiện có — đúng định nghĩa dự án going concern. Mở rộng làm tăng công suất; đổi mới tạo sản phẩm hay quy trình mới."
 },
 {
  "q": "An IFRS retailer holds 100 chairs bought at $200 each. The supplier's price has dropped to $160. The retailer expects to sell at $180 with free shipping costing it $10 per chair. The total carrying amount of the chairs is closest to:",
  "opts": [
   "$16,000",
   "$17,000",
   "$18,000"
  ],
  "ans": 1,
  "en": "IFRS carries inventory at the lower of cost and NET REALIZABLE VALUE = selling price − costs to sell = 180 − 10 = 170 < 200 cost → 100 × 170 = $17,000. The supplier's replacement price matters under US GAAP's old market rule, not IFRS.",
  "vi": "IFRS ghi tồn kho theo mức thấp hơn giữa giá gốc và GIÁ TRỊ THUẦN CÓ THỂ THỰC HIỆN = giá bán − chi phí bán = 180 − 10 = 170 < giá gốc 200 → 100 × 170 = $17.000. Giá nhập thay thế của nhà cung cấp chỉ liên quan đến quy tắc cũ của US GAAP, không phải IFRS."
 },
 {
  "q": "Which statement is most accurate? The role of financial reporting is to:",
  "opts": [
   "Forecast future net income and cash flow",
   "Value a security for making investment decisions",
   "Provide information about a company's performance, financial position, and changes in financial position"
  ],
  "ans": 2,
  "en": "Reporting supplies the raw information; forecasting and valuation are the ANALYST'S job built on top of it.",
  "vi": "Báo cáo tài chính cung cấp thông tin thô; dự phóng và định giá là việc của NHÀ PHÂN TÍCH xây bên trên."
 },
 {
  "q": "Which inventory disclosure is required under BOTH IFRS and US GAAP?",
  "opts": [
   "Events leading to a reversal of a write-down",
   "The amount of any reversal of any write-down",
   "The amount of any write-down recognized as an expense"
  ],
  "ans": 2,
  "en": "Both frameworks disclose write-down expense. Reversals exist only under IFRS — US GAAP prohibits them, so reversal disclosures cannot be common ground.",
  "vi": "Cả hai khuôn khổ đều công bố chi phí ghi giảm. Hoàn nhập chỉ tồn tại theo IFRS — US GAAP cấm, nên các công bố về hoàn nhập không thể là điểm chung."
 },
 {
  "q": "The principal tool used to align the interests of management and shareholders is:",
  "opts": [
   "Regulation",
   "Proxy voting",
   "Compensation"
  ],
  "ans": 2,
  "en": "Remuneration design — equity awards, options, performance-linked pay — ties managers' wealth to shareholder outcomes. Regulation and voting are external checks, not the principal alignment tool.",
  "vi": "Thiết kế thù lao — thưởng cổ phiếu, quyền chọn, lương gắn hiệu quả — buộc tài sản của ban điều hành vào kết quả của cổ đông. Luật lệ và bỏ phiếu là kiểm soát bên ngoài, không phải công cụ đồng hướng chính."
 },
 {
  "q": "The redistribution of income and wealth is most directly associated with:",
  "opts": [
   "Fiscal policy only",
   "Monetary policy only",
   "Both fiscal policy and monetary policy"
  ],
  "ans": 0,
  "en": "Taxes and transfer payments — fiscal instruments — redistribute directly. Monetary policy affects distribution only indirectly through rates and asset prices.",
  "vi": "Thuế và chi chuyển giao — công cụ tài khóa — tái phân phối trực tiếp. Chính sách tiền tệ chỉ ảnh hưởng phân phối gián tiếp qua lãi suất và giá tài sản."
 },
 {
  "q": "Deductible temporary differences could arise when the:",
  "opts": [
   "Taxable income exceeds accounting profit",
   "Carrying amount of an asset exceeds its tax base",
   "Financial accounting income tax expense exceeds income taxes payable"
  ],
  "ans": 0,
  "en": "Paying tax on MORE income than the books show today creates a deferred tax ASSET — future deductions. Options B and C describe taxable differences and deferred tax liabilities.",
  "vi": "Nộp thuế trên thu nhập NHIỀU HƠN sổ sách hôm nay tạo TÀI SẢN thuế hoãn lại — khoản khấu trừ tương lai. Phương án B và C mô tả chênh lệch chịu thuế và nợ thuế hoãn lại."
 },
 {
  "q": "Sampling error is the difference between the observed value of a statistic and the:",
  "opts": [
   "Mean of the sample",
   "Quantity it is intended to estimate",
   "Observed value of the random variable"
  ],
  "ans": 1,
  "en": "Sampling error = sample statistic − population parameter it estimates (e.g., x̄ − μ). It exists because a sample is only part of the population.",
  "vi": "Sai số lấy mẫu = thống kê mẫu − tham số tổng thể mà nó ước lượng (ví dụ x̄ − μ). Nó tồn tại vì mẫu chỉ là một phần của tổng thể."
 },
 {
  "q": "Risk premiums for a long-term corporate bond: inflation 1.5%, default 2.0%, liquidity 1.0%, maturity 1.5%. If the short-term NOMINAL risk-free rate is 4.0%, the bond yield is closest to:",
  "opts": [
   "6.0%",
   "8.5%",
   "10.0%"
  ],
  "ans": 1,
  "en": "The nominal risk-free rate already CONTAINS the inflation premium. Yield = 4.0 + default 2.0 + liquidity 1.0 + maturity 1.5 = 8.5%. Adding inflation again would double-count.",
  "vi": "Lãi suất phi rủi ro danh nghĩa đã CHỨA phần bù lạm phát. Lợi suất = 4,0 + vỡ nợ 2,0 + thanh khoản 1,0 + kỳ hạn 1,5 = 8,5%. Cộng lạm phát lần nữa là tính trùng."
 },
 {
  "q": "An increase in which of the following will most likely allow governments to DIRECTLY change income distribution?",
  "opts": [
   "Transfer payments",
   "Flat income tax rates",
   "Infrastructure investments"
  ],
  "ans": 0,
  "en": "Transfers move money straight to target households. Flat taxes are distribution-neutral by design; infrastructure affects incomes only indirectly.",
  "vi": "Chi chuyển giao đưa tiền thẳng đến các hộ mục tiêu. Thuế suất phẳng trung tính về phân phối theo thiết kế; hạ tầng chỉ tác động thu nhập gián tiếp."
 },
 {
  "q": "Demand for a patented product has permanently fallen. Carrying value $36,000; undiscounted expected future cash flows $38,000; present value of cash flows $32,000; fair value if sold $34,000; costs to sell $4,000. The patent is impaired under:",
  "opts": [
   "IFRS only",
   "Both IFRS and US GAAP",
   "US GAAP only"
  ],
  "ans": 0,
  "en": "US GAAP step 1: carrying 36,000 vs UNDISCOUNTED cash flows 38,000 → recoverable, no impairment. IFRS: recoverable amount = higher of value in use (32,000) and fair value less costs to sell (34,000 − 4,000 = 30,000) = 32,000 < 36,000 → impaired under IFRS only.",
  "vi": "US GAAP bước 1: giá trị ghi sổ 36.000 so với dòng tiền KHÔNG chiết khấu 38.000 → thu hồi được, không suy giảm. IFRS: giá trị thu hồi = mức cao hơn giữa giá trị sử dụng (32.000) và giá trị hợp lý trừ chi phí bán (34.000 − 4.000 = 30.000) = 32.000 < 36.000 → chỉ suy giảm theo IFRS."
 },
 {
  "q": "A liquidity trap is most closely associated with:",
  "opts": [
   "Deflation",
   "An inelastic demand for money",
   "A positive nominal central bank policy rate"
  ],
  "ans": 0,
  "en": "Liquidity traps live at the zero lower bound in deflationary conditions: money demand becomes perfectly ELASTIC and rate cuts stop transmitting.",
  "vi": "Bẫy thanh khoản sống ở sàn lãi suất 0 trong môi trường giảm phát: cầu tiền trở nên co giãn HOÀN TOÀN và việc hạ lãi suất ngừng truyền dẫn."
 },
 {
  "q": "An exchange rate has decreased to 1.3500. If the base currency depreciated by 7% against the price currency, the initial exchange rate was closest to:",
  "opts": [
   "1.2617",
   "1.4445",
   "1.4516"
  ],
  "ans": 2,
  "en": "A 7% depreciation of the base means the quote fell to 93% of its starting level: X × 0.93 = 1.3500 → X = 1.4516.",
  "vi": "Đồng cơ sở mất giá 7% nghĩa là tỷ giá rơi về 93% mức ban đầu: X × 0,93 = 1,3500 → X = 1,4516."
 },
 {
  "q": "If interest is tax deductible, as the tax rate increases, the after-tax cost of debt:",
  "opts": [
   "Decreases",
   "Remains the same",
   "Increases"
  ],
  "ans": 0,
  "en": "After-tax cost = r_d × (1 − t): a bigger tax shield eats more of the coupon, so the effective cost falls.",
  "vi": "Chi phí sau thuế = r_d × (1 − t): lá chắn thuế lớn hơn ăn bớt nhiều coupon hơn, nên chi phí hiệu dụng giảm."
 },
 {
  "q": "Firms in monopolistic competition most likely have:",
  "opts": [
   "No pricing power",
   "Some pricing power",
   "Substantial pricing power"
  ],
  "ans": 1,
  "en": "Differentiation grants a downward-sloping demand curve — some pricing power — but close substitutes keep it modest.",
  "vi": "Khác biệt hóa mang lại đường cầu dốc xuống — có chút quyền định giá — nhưng hàng thay thế gần giữ nó ở mức khiêm tốn."
 },
 {
  "q": "Amounts recorded as deferred revenue most likely become included in income when they are:",
  "opts": [
   "Paid",
   "Earned",
   "Invoiced"
  ],
  "ans": 1,
  "en": "Cash arrived first and created a liability; it converts to revenue only when the performance obligation is SATISFIED — when earned.",
  "vi": "Tiền về trước và tạo ra khoản nợ; nó chuyển thành doanh thu chỉ khi nghĩa vụ thực hiện HOÀN THÀNH — tức khi đã earned."
 },
 {
  "q": "The role of lender of last resort in an economy is most likely fulfilled by the:",
  "opts": [
   "Government",
   "Central bank",
   "Banking system"
  ],
  "ans": 1,
  "en": "The central bank supplies emergency liquidity to solvent-but-illiquid banks — a defining central-bank function since Bagehot.",
  "vi": "Ngân hàng trung ương cấp thanh khoản khẩn cấp cho các ngân hàng còn khả năng trả nợ nhưng kẹt thanh khoản — chức năng định danh của NHTW từ thời Bagehot."
 },
 {
  "q": "Which attribute is most accurate for a typical company in its START-UP stage?",
  "opts": [
   "Cash flows are negative",
   "The company can raise equity in public markets",
   "Debt is a significant component of the capital structure"
  ],
  "ans": 0,
  "en": "Start-ups burn cash building the product before revenue scales. Public equity and meaningful debt capacity arrive at later stages — early funding is private equity/VC.",
  "vi": "Start-up đốt tiền xây sản phẩm trước khi doanh thu kịp lớn. Huy động vốn đại chúng và vay nợ đáng kể chỉ đến ở giai đoạn sau — vốn ban đầu là private equity/VC."
 },
 {
  "q": "Monte Carlo simulations:",
  "opts": [
   "Require analytical pricing formulas to value securities",
   "Can be used as a complement to analytical methods",
   "Provide better insight than analytical methods in cause-and-effect relationships"
  ],
  "ans": 1,
  "en": "Monte Carlo shines exactly where closed-form formulas fail, complementing analytical valuation. It is a statistical tool — it shows outcome distributions, not causal mechanisms.",
  "vi": "Monte Carlo tỏa sáng đúng nơi công thức đóng bó tay, bổ trợ cho định giá giải tích. Nó là công cụ thống kê — cho thấy phân phối kết quả, không phải cơ chế nhân quả."
 }
]
});
window.CFA.mocktests.push({
 name: "Mock Exam 1 — Session 2 (FI · Equity · Derivatives · Alternatives · PM)",
 qs: [
 {
  "q": "Valuation of a swap during its life will LEAST likely involve the:",
  "opts": [
   "Use of replication",
   "Investor's risk aversion",
   "Application of the principle of no arbitrage"
  ],
  "ans": 1,
  "en": "Derivatives are priced by replication and no-arbitrage — risk preferences never enter, which is why risk-neutral valuation works.",
  "vi": "Phái sinh được định giá bằng sao chép và không-arbitrage — khẩu vị rủi ro không bao giờ xuất hiện, đó là lý do định giá trung hòa rủi ro vận hành."
 },
 {
  "q": "A passive investment strategy most likely outperforms an active strategy when:",
  "opts": [
   "There are few market participants",
   "Asset prices reflect information quickly",
   "Intrinsic values are less than market values"
  ],
  "ans": 1,
  "en": "Rapid price adjustment = an efficient market: active research can't reliably find mispricing, so the low-cost passive approach wins after fees.",
  "vi": "Giá điều chỉnh nhanh = thị trường hiệu quả: nghiên cứu chủ động khó tìm được định giá sai một cách bền vững, nên cách tiếp cận thụ động chi phí thấp thắng sau phí."
 },
 {
  "q": "A bond that allows the issuer to pay interest in additional amounts of the existing bond issue rather than cash best describes a:",
  "opts": [
   "Step-up coupon bond",
   "Deferred coupon bond",
   "Payment-in-kind coupon bond"
  ],
  "ans": 2,
  "en": "PIK = coupons paid in more bonds instead of cash — typical of highly leveraged issuers preserving liquidity.",
  "vi": "PIK = trả coupon bằng thêm trái phiếu thay vì tiền mặt — điển hình của công ty đòn bẩy cao muốn giữ thanh khoản."
 },
 {
  "q": "The justified forward P/E based on the Gordon growth model is ALWAYS positively related to the:",
  "opts": [
   "Payout ratio",
   "Dividend growth rate",
   "Required rate of return"
  ],
  "ans": 1,
  "en": "P/E = payout/(r − g): higher g shrinks the denominator → unambiguously higher P/E. Payout cuts both ways (it also lowers g = ROE × retention), and higher r always lowers P/E.",
  "vi": "P/E = payout/(r − g): g cao hơn làm mẫu số co lại → P/E cao hơn một cách rõ ràng. Payout tác động hai chiều (nó cũng hạ g = ROE × tỷ lệ giữ lại), còn r cao hơn luôn hạ P/E."
 },
 {
  "q": "With respect to leveraged buyouts, the current management team will continue to manage the company in:",
  "opts": [
   "Management buy-ins only",
   "Management buyouts only",
   "Both management buy-ins and management buyouts"
  ],
  "ans": 1,
  "en": "MBO: existing management buys and stays. MBI: an OUTSIDE management team buys in and replaces them.",
  "vi": "MBO: ban điều hành hiện tại mua lại và ở lại. MBI: một đội quản lý BÊN NGOÀI mua vào và thay thế họ."
 },
 {
  "q": "Electronic trading in cryptocurrencies on centralized exchanges is most likely:",
  "opts": [
   "Hosted on public servers",
   "Direct without any intermediating broker or dealer",
   "Regulated to the same standard as exchanges for more traditional assets"
  ],
  "ans": 1,
  "en": "On crypto exchanges investors trade directly with the venue — no broker/dealer layer. The platforms run on private servers and remain far more lightly regulated than traditional exchanges.",
  "vi": "Trên sàn crypto, nhà đầu tư giao dịch trực tiếp với sàn — không có tầng môi giới/dealer. Nền tảng chạy trên máy chủ riêng và vẫn chịu quản lý lỏng hơn nhiều so với sàn truyền thống."
 },
 {
  "q": "Which IPS objective is best described as a RELATIVE risk objective? For the next year, the portfolio objective is to:",
  "opts": [
   "Have a 95% value at risk less than $100,000",
   "Outperform the local stock market index by 100 basis points",
   "Earn a return within plus or minus 2 percentage points of the local index return"
  ],
  "ans": 2,
  "en": "Bounding deviation from a benchmark (±2%) is risk measured RELATIVE to the index — a tracking-risk objective. VaR is an absolute risk objective; beating the index by 100 bps is a relative RETURN objective.",
  "vi": "Giới hạn độ lệch so với benchmark (±2%) là rủi ro đo TƯƠNG ĐỐI với chỉ số — mục tiêu tracking risk. VaR là mục tiêu rủi ro tuyệt đối; vượt chỉ số 100 bps là mục tiêu LỢI SUẤT tương đối."
 },
 {
  "q": "Which of the following is NOT a credit enhancement in asset-backed securities?",
  "opts": [
   "Credit tranching",
   "Overcollateralization",
   "Representations and warranties"
  ],
  "ans": 2,
  "en": "Tranching and overcollateralization absorb losses — true enhancements. Reps and warranties are legal promises about the assets' characteristics, not a loss-absorbing mechanism.",
  "vi": "Tranching và overcollateralization hấp thụ tổn thất — là tăng cường tín dụng thật. Cam đoan và bảo đảm chỉ là lời hứa pháp lý về đặc tính tài sản, không phải cơ chế hấp thụ lỗ."
 },
 {
  "q": "A bond has annual modified duration 5.359 and annual convexity 248.23, yielding 3.5%. If yield increases to 3.7%, the expected percentage price change is closest to:",
  "opts": [
   "−1.02%",
   "−0.97%",
   "1.12%"
  ],
  "ans": 0,
  "en": "Δy = +20 bps: %ΔP = −5.359(0.002) + ½(248.23)(0.002)² = −1.0718% + 0.0497% = −1.02%.",
  "vi": "Δy = +20 bps: %ΔP = −5,359(0,002) + ½(248,23)(0,002)² = −1,0718% + 0,0497% = −1,02%."
 },
 {
  "q": "In limited partnership agreements, which of the following benefits the GENERAL partner? A:",
  "opts": [
   "Catch-up clause",
   "Clawback provision",
   "High-water mark clause"
  ],
  "ans": 0,
  "en": "The catch-up lets the GP collect 100% of distributions after the hurdle until reaching its full carry share. Clawbacks and high-water marks both protect the LPs.",
  "vi": "Điều khoản catch-up cho GP nhận 100% phân phối sau hurdle cho đến khi đủ phần carry đầy đủ. Clawback và high-water mark đều bảo vệ LP."
 },
 {
  "q": "Which method of investing in alternative investments requires the LEAST investment expertise?",
  "opts": [
   "Co-investing",
   "Fund investing",
   "Direct investing"
  ],
  "ans": 1,
  "en": "Fund investing delegates sourcing, diligence, and management to the GP. Co-investing and direct investing progressively pull those burdens onto the investor.",
  "vi": "Đầu tư qua quỹ ủy thác việc tìm thương vụ, thẩm định và quản lý cho GP. Co-investing và đầu tư trực tiếp lần lượt kéo các gánh nặng đó về phía nhà đầu tư."
 },
 {
  "q": "The FIRST decision when constructing a security market index is:",
  "opts": [
   "Identifying the target market",
   "Identifying the investment universe",
   "Determining the constituent securities"
  ],
  "ans": 0,
  "en": "Define the target market first — it determines the universe from which constituents are then selected. The sequence runs target market → universe → constituents → weighting.",
  "vi": "Xác định thị trường mục tiêu trước — nó quyết định tập hợp mà từ đó chọn ra thành phần. Trình tự: thị trường mục tiêu → universe → thành phần → cách gán trọng số."
 },
 {
  "q": "The assets underlying an infrastructure investment are most likely:",
  "opts": [
   "Intended for private use",
   "Owned by a government entity",
   "Expected to have a short operational life"
  ],
  "ans": 1,
  "en": "Infrastructure assets are typically government-owned (or run under long concessions), intended for PUBLIC use, and extremely long-lived.",
  "vi": "Tài sản hạ tầng thường thuộc sở hữu nhà nước (hoặc vận hành theo nhượng quyền dài hạn), phục vụ CÔNG CỘNG, và có đời sống cực dài."
 },
 {
  "q": "During times of severe market turmoil, the risk reduction from portfolio diversification most likely:",
  "opts": [
   "Decreases",
   "Remains the same",
   "Increases"
  ],
  "ans": 0,
  "en": "Correlations spike toward one in crises — assets fall together, and diversification protects least exactly when it is needed most.",
  "vi": "Tương quan vọt về 1 trong khủng hoảng — các tài sản cùng rơi, và đa dạng hóa che chở ít nhất đúng lúc cần nó nhất."
 },
 {
  "q": "Free-cash-flow-to-equity is equal to cash flow from operations:",
  "opts": [
   "Less fixed capital investment less net borrowing",
   "Less fixed capital investment plus net borrowing",
   "Plus fixed capital investment less net borrowing"
  ],
  "ans": 1,
  "en": "FCFE = CFO − FCInv + net borrowing: equity holders' cash is what remains after reinvestment, boosted by new debt raised (net of repayments).",
  "vi": "FCFE = CFO − đầu tư tài sản cố định + vay ròng: tiền của cổ đông là phần còn lại sau tái đầu tư, cộng thêm nợ mới huy động (trừ phần trả nợ)."
 },
 {
  "q": "A 5% corporate bond pays annual coupons on 19 March. Priced for settlement on 25 March at a yield-to-maturity of 5%, its FLAT price is:",
  "opts": [
   "Below par",
   "Par",
   "Above par"
  ],
  "ans": 0,
  "en": "With YTM = coupon, the full price compounds up from par between coupon dates: 100(1.05)^(6/365) = 100.080, while linear accrued interest = (6/365) × 5 = 0.082. Flat = 100.080 − 0.082 = 99.998 — a hair below par, because compound growth lags the linear AI early in the period.",
  "vi": "Khi YTM = coupon, full price lũy kế từ par giữa hai kỳ: 100(1,05)^(6/365) = 100,080, trong khi lãi cộng dồn tuyến tính = (6/365) × 5 = 0,082. Flat = 100,080 − 0,082 = 99,998 — thấp hơn par một sợi tóc, vì tăng trưởng lũy kế chậm hơn AI tuyến tính ở đầu kỳ."
 },
 {
  "q": "A good risk management framework:",
  "opts": [
   "Is a top-down process and guidance directing risk management activities",
   "Seeks to prioritize avoidance of financial loss over defining policies and processes",
   "Is typically a process that addresses a common set of factors within different organizations"
  ],
  "ans": 0,
  "en": "Risk governance flows top-down from the board, directing all risk activities. Frameworks are about choosing which risks to bear (not avoiding all loss) and must be CUSTOM to each organization.",
  "vi": "Quản trị rủi ro chảy từ trên xuống, từ HĐQT, định hướng mọi hoạt động rủi ro. Khung quản trị là để chọn rủi ro nào nên gánh (không phải né mọi khoản lỗ) và phải ĐƯỢC MAY ĐO cho từng tổ chức."
 },
 {
  "q": "Indifference curves are plotted with returns on the vertical axis and risk on the horizontal axis. For a risk-averse investor, the slope of the indifference curve is most likely:",
  "opts": [
   "Negative",
   "Zero",
   "Positive"
  ],
  "ans": 2,
  "en": "Risk-averse investors demand MORE return for MORE risk to stay equally happy — the curve slopes upward (and steepens with greater risk aversion).",
  "vi": "Nhà đầu tư ghét rủi ro đòi THÊM lợi suất cho THÊM rủi ro để giữ nguyên độ thỏa mãn — đường bàng quan dốc lên (và dốc hơn khi mức ghét rủi ro lớn hơn)."
 },
 {
  "q": "In the binomial option model, when the volatility of the underlying increases, the value of a call option:",
  "opts": [
   "Decreases",
   "Remains unchanged",
   "Increases"
  ],
  "ans": 2,
  "en": "A wider u–d spread lifts the up-state payoff while the down-state stays floored at zero — the asymmetry makes volatility pure upside for option value.",
  "vi": "Khoảng u–d rộng hơn nâng payoff trạng thái tăng trong khi trạng thái giảm bị chặn sàn tại 0 — tính bất đối xứng khiến biến động là lợi ích thuần cho giá trị quyền chọn."
 },
 {
  "q": "A treasurer expecting rates to decline enters a 1-year agreement with a bank to RECEIVE quarterly fixed-rate payments and MAKE payments based on 3-month Libor. This agreement is best described as a:",
  "opts": [
   "Swap",
   "Futures contract",
   "Forward contract"
  ],
  "ans": 0,
  "en": "A series of periodic exchanges of fixed for floating over a year is an interest rate SWAP — economically a strip of forwards, but the multi-period structure defines the swap.",
  "vi": "Chuỗi trao đổi định kỳ cố định lấy thả nổi trong một năm là SWAP lãi suất — về bản chất là chuỗi forward, nhưng cấu trúc nhiều kỳ chính là định nghĩa của swap."
 },
 {
  "q": "A trader buys 500 shares on margin at $36 using an initial leverage ratio of 1.66. The maintenance margin is 30%. The margin call price is closest to:",
  "opts": [
   "$20.57",
   "$25.20",
   "$30.86"
  ],
  "ans": 0,
  "en": "Leverage 1.66 → equity = 1/1.66 = 60% → debt per share = 0.40 × 36 = $14.40. Call when equity% = 30%: (P − 14.40)/P = 0.30 → P = 14.40/0.70 = $20.57.",
  "vi": "Đòn bẩy 1,66 → vốn chủ = 1/1,66 = 60% → nợ mỗi cổ phiếu = 0,40 × 36 = $14,40. Margin call khi vốn chủ = 30%: (P − 14,40)/P = 0,30 → P = 14,40/0,70 = $20,57."
 },
 {
  "q": "The type of developed market bond that most likely has the GREATEST risk of default is a:",
  "opts": [
   "Revenue bond",
   "Sovereign bond",
   "General obligation bond"
  ],
  "ans": 0,
  "en": "Revenue bonds are backed only by the cash flows of a specific project — no taxing power behind them, unlike sovereigns and GO munis.",
  "vi": "Revenue bond chỉ được bảo đảm bằng dòng tiền của một dự án cụ thể — không có quyền đánh thuế chống lưng, khác với trái phiếu chính phủ và GO."
 },
 {
  "q": "An index provider launches an index of value stocks in a specific country. This index will most likely be a:",
  "opts": [
   "Style index",
   "Large-capitalization index",
   "Fundamentally weighted index"
  ],
  "ans": 0,
  "en": "Value vs growth is the STYLE dimension. Nothing says large-cap, and \"value stocks\" describes constituent selection, not the weighting method.",
  "vi": "Value vs growth là chiều STYLE. Không có gì nói large-cap, và \"cổ phiếu giá trị\" mô tả cách chọn thành phần, không phải phương pháp gán trọng số."
 },
 {
  "q": "If a market is semi-strong-form efficient, fundamental analysis most likely:",
  "opts": [
   "Enables investors to generate consistent abnormal returns",
   "Helps participants understand the value implications of information",
   "Attempts to profit by looking at patterns of prices and volumes"
  ],
  "ans": 1,
  "en": "In a semi-strong market public information is already priced — no consistent alpha — yet fundamental analysis is exactly what keeps prices efficient by interpreting information. Option C describes technical analysis.",
  "vi": "Trong thị trường semi-strong, thông tin công khai đã vào giá — không có alpha bền — nhưng phân tích cơ bản chính là thứ giữ giá hiệu quả nhờ diễn giải thông tin. Phương án C mô tả phân tích kỹ thuật."
 },
 {
  "q": "The yield-to-maturity of a 5-year, 8% annual-pay bond priced at 108.42 is closest to:",
  "opts": [
   "6.00%",
   "7.38%",
   "9.40%"
  ],
  "ans": 0,
  "en": "Check 6%: P = 8 × [1 − 1.06⁻⁵]/0.06 + 100/1.06⁵ = 33.70 + 74.73 = 108.42 ✓. A premium price demands a yield below the 8% coupon — only 6% qualifies among the options.",
  "vi": "Thử 6%: P = 8 × [1 − 1,06⁻⁵]/0,06 + 100/1,06⁵ = 33,70 + 74,73 = 108,42 ✓. Giá premium đòi hỏi lợi suất dưới coupon 8% — chỉ 6% thỏa trong các phương án."
 },
 {
  "q": "For an option-free bond, effective duration:",
  "opts": [
   "Will be equal to modified duration if the yield curve is absolutely flat",
   "Measures interest rate risk for both parallel and non-parallel benchmark curve shifts",
   "Is an estimate of the percentage price change given a change in the bond's yield to maturity"
  ],
  "ans": 0,
  "en": "With fixed cash flows and a flat curve, shifting the benchmark curve is identical to shifting the YTM — effective and modified duration coincide. Effective duration handles PARALLEL shifts only, and it shifts the CURVE, not the bond's own YTM.",
  "vi": "Với dòng tiền cố định và đường cong phẳng, dịch đường benchmark giống hệt dịch YTM — effective và modified duration trùng nhau. Effective duration chỉ xử lý dịch SONG SONG, và nó dịch ĐƯỜNG CONG chứ không phải YTM riêng của trái phiếu."
 },
 {
  "q": "Bonds issued in which market most likely have FEWER reporting, regulatory, and tax constraints?",
  "opts": [
   "Eurobond markets",
   "Foreign bond markets",
   "Domestic bond markets"
  ],
  "ans": 0,
  "en": "Eurobonds are issued outside any single country's jurisdiction — historically bearer instruments with light regulation. Foreign and domestic bonds answer to the local regulator.",
  "vi": "Eurobond phát hành ngoài thẩm quyền của bất kỳ quốc gia đơn lẻ nào — lịch sử là công cụ vô danh với quản lý nhẹ. Trái phiếu foreign và domestic chịu sự quản lý của nước sở tại."
 },
 {
  "q": "The correlation between the returns of a risk-free asset and a portfolio of risky assets is:",
  "opts": [
   "Negative",
   "Zero",
   "Positive"
  ],
  "ans": 1,
  "en": "The risk-free return never varies — zero variance means zero covariance with anything, hence zero correlation.",
  "vi": "Lợi suất phi rủi ro không bao giờ dao động — phương sai bằng 0 nghĩa là hiệp phương sai với mọi thứ bằng 0, nên tương quan bằng 0."
 },
 {
  "q": "A 6% 25-year bond with semiannual payments has a market price of $850.00. The yield to maturity is closest to:",
  "opts": [
   "5.72%",
   "7.32%",
   "7.91%"
  ],
  "ans": 1,
  "en": "Discount price → yield above the 6% coupon. Check 7.32% (3.66% semiannual, 50 periods): P = 30 × 22.79 + 1,000/6.03 ≈ 684 + 166 = $850 ✓.",
  "vi": "Giá chiết khấu → lợi suất trên coupon 6%. Thử 7,32% (3,66% bán niên, 50 kỳ): P = 30 × 22,79 + 1.000/6,03 ≈ 684 + 166 = $850 ✓."
 },
 {
  "q": "The motivation for investing in the MEZZANINE tranche of a CDO is most likely to:",
  "opts": [
   "Benefit from the credit protection provided by the senior tranche",
   "Earn a higher yield than that on a comparably rated corporate bond",
   "Receive a return in excess of what is paid to all other bond classes"
  ],
  "ans": 1,
  "en": "Mezzanine tranches historically offered yield pickup versus same-rated corporates — the buyer's draw. Seniors protect themselves, not the mezzanine; the residual excess belongs to equity.",
  "vi": "Tranche mezzanine trong lịch sử cho lợi suất nhỉnh hơn trái phiếu doanh nghiệp cùng hạng — sức hút với người mua. Senior tự bảo vệ mình chứ không che cho mezzanine; phần dư vượt trội thuộc về equity."
 },
 {
  "q": "A bond has yield to maturity 10% and modified duration 5.7. If the duration gap is zero, the investment horizon is closest to:",
  "opts": [
   "5.2 years",
   "5.7 years",
   "6.3 years"
  ],
  "ans": 2,
  "en": "Duration gap = MACAULAY duration − horizon. MacDur = ModDur × (1 + y) = 5.7 × 1.10 = 6.27 ≈ 6.3 years — the horizon that balances price and reinvestment risk.",
  "vi": "Duration gap = MACAULAY duration − kỳ đầu tư. MacDur = ModDur × (1 + y) = 5,7 × 1,10 = 6,27 ≈ 6,3 năm — kỳ đầu tư cân bằng rủi ro giá và rủi ro tái đầu tư."
 },
 {
  "q": "The CAPM states that two assets with the same expected return will have the same:",
  "opts": [
   "Standard deviation",
   "Correlation of returns with the market",
   "Covariance of returns with the market"
  ],
  "ans": 2,
  "en": "CAPM prices assets solely by beta = Cov(R, Rm)/Var(Rm): equal expected returns force equal betas, hence equal covariances. Standard deviations and correlations can differ as long as their product (the covariance) matches.",
  "vi": "CAPM định giá tài sản chỉ theo beta = Cov(R, Rm)/Var(Rm): lợi suất kỳ vọng bằng nhau buộc beta bằng nhau, tức hiệp phương sai bằng nhau. Độ lệch chuẩn và tương quan có thể khác miễn tích của chúng (hiệp phương sai) trùng nhau."
 },
 {
  "q": "The sensitivity of a 30-year bond to a 50 bps increase in the benchmark rate at the 25–30 year maturity SEGMENT is best measured by:",
  "opts": [
   "Key rate duration",
   "Effective duration",
   "Modified duration"
  ],
  "ans": 0,
  "en": "A shift in one segment is a NON-parallel move — key rate (partial) duration isolates sensitivity to that maturity point. Effective and modified duration assume parallel shifts.",
  "vi": "Cú dịch ở một đoạn kỳ hạn là chuyển động KHÔNG song song — key rate (partial) duration cô lập độ nhạy tại điểm kỳ hạn đó. Effective và modified duration giả định dịch song song."
 },
 {
  "q": "A put trades for $1.00 with exercise price $40.00. If the underlying is $35.00 at expiration, the profit for a put SELLER is:",
  "opts": [
   "−$5.00",
   "−$4.00",
   "$4.00"
  ],
  "ans": 1,
  "en": "The seller owes the exercise value 40 − 35 = 5 but keeps the premium: profit = −5 + 1 = −$4.00.",
  "vi": "Người bán phải trả giá trị thực hiện 40 − 35 = 5 nhưng giữ được phí: lợi nhuận = −5 + 1 = −$4,00."
 },
 {
  "q": "Investing in private debt most likely is:",
  "opts": [
   "Less risky than investing in traditional bonds",
   "Equally risky to investing in traditional bonds",
   "More risky than investing in traditional bonds"
  ],
  "ans": 2,
  "en": "Illiquidity, smaller and less transparent borrowers, and looser disclosure make private debt riskier than public bonds — the return premium exists to pay for exactly that.",
  "vi": "Tính kém thanh khoản, bên vay nhỏ và kém minh bạch hơn, cùng công bố thông tin lỏng hơn khiến nợ tư nhân rủi ro hơn trái phiếu đại chúng — phần bù lợi suất tồn tại để trả cho đúng điều đó."
 },
 {
  "q": "An investor buys a 5% coupon bond maturing in 15 years at par. Immediately after purchase, the required yield increases. The investor would most likely have to sell the bond at:",
  "opts": [
   "Par",
   "A discount",
   "A premium"
  ],
  "ans": 1,
  "en": "Price and yield move inversely: with the coupon now below the required yield, the bond must sell below par to compensate the buyer.",
  "vi": "Giá và lợi suất nghịch chiều: coupon giờ thấp hơn lợi suất yêu cầu, trái phiếu phải bán dưới par để bù đắp cho người mua."
 },
 {
  "q": "A semiannual-pay bond has a YTM of 4.3% quoted on a semiannual bond basis. The YTM based on QUARTERLY compounding is closest to:",
  "opts": [
   "4.23%",
   "4.28%",
   "4.32%"
  ],
  "ans": 1,
  "en": "Match effective returns: (1 + 0.043/2)² = (1 + r/4)⁴ → 1 + r/4 = 1.0215^0.5 = 1.010693 → r = 4.28%. More frequent compounding needs a lower stated rate.",
  "vi": "Cân bằng lợi suất hiệu dụng: (1 + 0,043/2)² = (1 + r/4)⁴ → 1 + r/4 = 1,0215^0,5 = 1,010693 → r = 4,28%. Ghép lãi dày hơn cần lãi suất danh nghĩa thấp hơn."
 },
 {
  "q": "The value of a European put is:",
  "opts": [
   "Inversely related to the exercise price",
   "Inversely related to the risk-free interest rate",
   "Directly related to the value of the underlying"
  ],
  "ans": 1,
  "en": "Higher rates shrink the present value of the strike you will receive → puts fall as rates rise. Puts rise with X (not inversely) and fall as the underlying rises (not directly).",
  "vi": "Lãi suất cao làm teo hiện giá của strike bạn sẽ nhận → giá put giảm khi lãi tăng. Put tăng theo X (không phải nghịch) và giảm khi tài sản cơ sở tăng (không phải thuận)."
 },
 {
  "q": "An asset-based valuation model would be MOST applicable:",
  "opts": [
   "For valuing a small and privately held firm",
   "When the economic environment is hyperinflationary",
   "For valuing a firm with significant property, plant, and equipment"
  ],
  "ans": 2,
  "en": "Asset-based valuation works when value resides in identifiable tangible assets — a PP&E-heavy firm. It struggles with intangibles-rich businesses and distorted hyperinflationary book values.",
  "vi": "Định giá theo tài sản hiệu quả khi giá trị nằm ở tài sản hữu hình nhận diện được — công ty nặng PP&E. Nó chật vật với doanh nghiệp giàu tài sản vô hình và giá trị sổ sách méo mó vì siêu lạm phát."
 },
 {
  "q": "A disadvantage of a fund of hedge funds compared with a large multi-strategy fund is:",
  "opts": [
   "Due diligence expertise",
   "Higher management fees",
   "Diversified exposure to various hedge fund strategies"
  ],
  "ans": 1,
  "en": "The fund of funds stacks its own fee layer on top of the underlying funds' fees — a structural cost drag. Diligence expertise and diversification are its ADVANTAGES.",
  "vi": "Fund of funds chồng lớp phí riêng lên trên phí của các quỹ bên dưới — lực cản chi phí mang tính cấu trúc. Chuyên môn thẩm định và đa dạng hóa là ƯU ĐIỂM của nó."
 },
 {
  "q": "For a put option, if the price of the underlying is GREATER than the exercise price, the put is:",
  "opts": [
   "In the money",
   "At the money",
   "Out of the money"
  ],
  "ans": 2,
  "en": "A put pays max(X − S, 0): with S > X, exercising would mean selling below market — worthless to exercise, hence out of the money.",
  "vi": "Put trả max(X − S, 0): khi S > X, thực hiện quyền nghĩa là bán dưới giá thị trường — vô giá trị khi thực hiện, nên out of the money."
 },
 {
  "q": "Compared with exchange-traded derivative markets, over-the-counter derivative markets are typically MORE:",
  "opts": [
   "Liquid",
   "Flexible",
   "Transparent"
  ],
  "ans": 1,
  "en": "OTC contracts are custom-negotiated — flexibility is their defining edge. Exchanges win on liquidity and transparency through standardization and public prices.",
  "vi": "Hợp đồng OTC được thương lượng may đo — linh hoạt là lợi thế định danh. Sàn thắng ở thanh khoản và minh bạch nhờ chuẩn hóa và giá công khai."
 },
 {
  "q": "With regard to commodities, it is most likely true that:",
  "opts": [
   "Exposure is most commonly achieved via commodity derivatives",
   "Their returns are based on an income stream such as interest or dividends",
   "They are physical products, so most investors prefer to trade the actual commodity"
  ],
  "ans": 0,
  "en": "Storage, transport, and insurance make physical holding impractical — futures and swaps are the standard access route. Commodities generate no income stream; returns come from price and roll.",
  "vi": "Lưu kho, vận chuyển, bảo hiểm khiến nắm giữ vật chất bất tiện — futures và swap là đường tiếp cận chuẩn. Hàng hóa không sinh dòng thu nhập; lợi suất đến từ giá và roll."
 },
 {
  "q": "An analyst forecasts bear, base, and bull cases for sales, EBITDA margin, and debt-to-capital next year. This forecast table is best described as a:",
  "opts": [
   "Scenario analysis",
   "Sensitivity analysis",
   "Point estimate forecast"
  ],
  "ans": 0,
  "en": "Multiple variables shifted TOGETHER into coherent alternative worlds = scenario analysis. Sensitivity moves one input at a time; a point estimate is a single number.",
  "vi": "Nhiều biến dịch chuyển CÙNG NHAU thành các thế giới thay thế nhất quán = phân tích kịch bản. Phân tích độ nhạy chỉnh từng biến một; ước tính điểm là một con số duy nhất."
 },
 {
  "q": "During its life, the value of a forward contract is most likely equal to the price of the underlying minus the price of the:",
  "opts": [
   "Forward",
   "Forward, discounted over the original term of the contract",
   "Forward, discounted over the remaining term of the contract"
  ],
  "ans": 2,
  "en": "V_long(t) = Sₜ − F₀/(1 + r)^(T−t): the locked-in forward price is discounted over the time REMAINING until delivery.",
  "vi": "V_long(t) = Sₜ − F₀/(1 + r)^(T−t): giá forward đã khóa được chiết khấu theo thời gian CÒN LẠI đến ngày giao."
 },
 {
  "q": "According to the CAPM, the difference in the expected returns of two securities is determined by the securities':",
  "opts": [
   "Total risk",
   "Systematic risk only",
   "Nonsystematic risk only"
  ],
  "ans": 1,
  "en": "CAPM compensates only systematic (beta) risk — diversifiable risk is free to remove, so the market pays nothing for it.",
  "vi": "CAPM chỉ trả công cho rủi ro hệ thống (beta) — rủi ro đa dạng hóa được có thể loại miễn phí, nên thị trường không trả gì cho nó."
 },
 {
  "q": "Which performance measure is MOST appropriate for an investor who holds a well-diversified portfolio?",
  "opts": [
   "M²",
   "Sharpe ratio",
   "Jensen's alpha"
  ],
  "ans": 2,
  "en": "With diversifiable risk eliminated, only systematic risk matters — so use a beta-based measure: Jensen's alpha (or Treynor). Sharpe and M² price total risk.",
  "vi": "Khi rủi ro đa dạng hóa được đã loại bỏ, chỉ rủi ro hệ thống còn ý nghĩa — dùng thước đo theo beta: Jensen's alpha (hoặc Treynor). Sharpe và M² tính theo tổng rủi ro."
 },
 {
  "q": "A function of the financial system is to:",
  "opts": [
   "Prevent traders from speculating on information",
   "Equate aggregate savings with aggregate borrowings",
   "Restrict companies from spending money they do not have"
  ],
  "ans": 1,
  "en": "The financial system discovers the rates of return that balance total savings with total borrowing — channeling funds from savers to users. It neither bans speculation nor polices spending.",
  "vi": "Hệ thống tài chính khám phá mức lợi suất cân bằng tổng tiết kiệm với tổng vay mượn — dẫn vốn từ người tiết kiệm sang người dùng vốn. Nó không cấm đầu cơ cũng không quản việc chi tiêu."
 },
 {
  "q": "A protective put strategy consists of a:",
  "opts": [
   "Long put option on an asset and a long position in a risk-free bond",
   "Long position in an underlying asset and a long put option on the asset",
   "Long call option on an asset and a short position in the underlying"
  ],
  "ans": 1,
  "en": "Protective put = own the asset + own the put: downside floored at X, upside kept. Option A (put + bond) is not the standard structure; option C is a synthetic put-ish combination.",
  "vi": "Protective put = nắm tài sản + nắm quyền bán: sàn lỗ tại X, giữ nguyên upside. Phương án A (put + trái phiếu) không phải cấu trúc chuẩn; phương án C là tổ hợp tổng hợp khác."
 },
 {
  "q": "A stock dividend:",
  "opts": [
   "Is relevant for valuation of a company",
   "Involves an increase in the number of shares outstanding",
   "Alters the shareholders' proportional ownership"
  ],
  "ans": 1,
  "en": "A stock dividend distributes additional shares pro rata: share count rises, each holder's percentage stake and total company value stay unchanged.",
  "vi": "Cổ tức bằng cổ phiếu phát thêm cổ phần theo tỷ lệ: số cổ phiếu tăng, tỷ lệ sở hữu của từng cổ đông và tổng giá trị công ty không đổi."
 },
 {
  "q": "Which best describes a reason for having a WRITTEN investment policy statement?",
  "opts": [
   "To communicate a plan for achieving investment success",
   "To keep track of the performance of a client's portfolio",
   "To serve as a fact-finding process for determining a client's risk tolerance"
  ],
  "ans": 0,
  "en": "The IPS is the written roadmap governing the portfolio toward the client's goals. Fact-finding happens BEFORE the IPS is written; performance tracking is a feedback-stage activity.",
  "vi": "IPS là lộ trình bằng văn bản dẫn dắt danh mục tới mục tiêu của khách hàng. Thu thập thông tin diễn ra TRƯỚC khi viết IPS; theo dõi thành tích thuộc giai đoạn phản hồi."
 },
 {
  "q": "Which bond is most likely to exhibit a REDUCTION in duration as time to maturity INCREASES? A bond priced at:",
  "opts": [
   "Par",
   "A discount",
   "A premium"
  ],
  "ans": 1,
  "en": "For long-maturity deep-DISCOUNT bonds, duration can peak and then decline as maturity extends — the exception to \"longer maturity, higher duration.\" Par and premium bonds rise monotonically toward a limit.",
  "vi": "Với trái phiếu CHIẾT KHẤU sâu kỳ hạn dài, duration có thể đạt đỉnh rồi giảm khi kỳ hạn kéo dài — ngoại lệ của quy tắc \"kỳ hạn dài hơn, duration cao hơn.\" Trái phiếu par và premium tăng đơn điệu về một giới hạn."
 },
 {
  "q": "In a pension fund's IPS, a COUNTRYWIDE limit on the proportion of high-risk assets in long-term pension portfolios is most likely a:",
  "opts": [
   "Liquidity constraint",
   "Time horizon constraint",
   "Legal and regulatory constraint"
  ],
  "ans": 2,
  "en": "A nationwide cap imposed on pension portfolios is external law binding the fund — the legal/regulatory bucket of LLTTU.",
  "vi": "Mức trần toàn quốc áp lên danh mục hưu trí là luật bên ngoài trói quỹ — thuộc ô legal/regulatory trong LLTTU."
 },
 {
  "q": "Relative to a non-recourse mortgage loan, in a RECOURSE mortgage loan the:",
  "opts": [
   "Lender can change the interest rate charged",
   "Borrower does not have a strategic default option",
   "Borrower is not liable for any shortfall between sale proceeds and the loan amount"
  ],
  "ans": 1,
  "en": "With recourse, the lender can pursue the borrower's other assets for any shortfall — walking away from an underwater property (strategic default) no longer pays.",
  "vi": "Với recourse, bên cho vay có thể truy đòi tài sản khác của người vay cho phần thiếu hụt — bỏ nhà khi giá trị âm (vỡ nợ chiến lược) không còn lợi."
 },
 {
  "q": "The multiple of invested capital (MOIC) measure takes into account:",
  "opts": [
   "The realized value of an investment only",
   "The residual asset value of an investment only",
   "Both the realized value and the residual asset value of an investment"
  ],
  "ans": 2,
  "en": "MOIC = (realized distributions + residual value)/invested capital — everything returned plus everything still held, ignoring only the timing of those flows.",
  "vi": "MOIC = (giá trị đã hiện thực + giá trị còn lại)/vốn đã bỏ — mọi thứ đã trả về cộng mọi thứ còn nắm giữ, chỉ bỏ qua yếu tố thời gian của dòng tiền."
 },
 {
  "q": "Investors in a CLOSED-END mutual fund can liquidate their positions by selling shares to:",
  "opts": [
   "The fund itself only",
   "Other investors only",
   "Both the fund itself and other investors"
  ],
  "ans": 1,
  "en": "Closed-end funds do not redeem: a fixed share count trades on the secondary market between investors — often at premiums or discounts to NAV.",
  "vi": "Quỹ đóng không mua lại chứng chỉ: số lượng cố định giao dịch trên thị trường thứ cấp giữa các nhà đầu tư — thường lệch premium/discount so với NAV."
 },
 {
  "q": "Effective duration measures a bond's sensitivity to a:",
  "opts": [
   "Flattening of the benchmark yield curve",
   "Steepening of the benchmark yield curve",
   "Parallel shift in the benchmark yield curve"
  ],
  "ans": 2,
  "en": "Effective duration shifts the WHOLE benchmark curve up and down in parallel. Flattening and steepening are shape changes measured by key rate durations.",
  "vi": "Effective duration dịch TOÀN BỘ đường benchmark lên xuống song song. Phẳng hóa và dốc hóa là thay đổi hình dạng, đo bằng key rate durations."
 },
 {
  "q": "An example of NONSYSTEMATIC risk is a(n):",
  "opts": [
   "Failure of a drug trial",
   "Increase in the overall rate of inflation",
   "Change in the central bank's interest rate policy"
  ],
  "ans": 0,
  "en": "A failed trial hits one company — diversifiable, firm-specific risk. Inflation and policy rates wash over the entire market: systematic.",
  "vi": "Một thử nghiệm thuốc thất bại chỉ đánh vào một công ty — rủi ro riêng, đa dạng hóa được. Lạm phát và lãi suất chính sách quét qua toàn thị trường: hệ thống."
 },
 {
  "q": "Which of the following is best categorized as NON-financial risk?",
  "opts": [
   "Credit risk",
   "Market risk",
   "Accounting risk"
  ],
  "ans": 2,
  "en": "Accounting risk (errors, restatements, reporting failures) sits in the non-financial family with operational, legal, and compliance risk. Credit and market risks are the core financial risks.",
  "vi": "Rủi ro kế toán (sai sót, điều chỉnh lại, hỏng báo cáo) thuộc họ phi tài chính cùng rủi ro vận hành, pháp lý, tuân thủ. Rủi ro tín dụng và thị trường là rủi ro tài chính cốt lõi."
 },
 {
  "q": "An investor buys a stock on margin, posting 60% of the initial $63.00 price as equity. If a margin call occurs at $33.60 per share, the maintenance margin on this trade is:",
  "opts": [
   "12.5%",
   "25.0%",
   "40.0%"
  ],
  "ans": 1,
  "en": "Debt per share = 0.40 × 63 = $25.20 (fixed). At $33.60, equity = 33.60 − 25.20 = 8.40 → 8.40/33.60 = 25% — the maintenance level that triggers the call.",
  "vi": "Nợ mỗi cổ phiếu = 0,40 × 63 = $25,20 (cố định). Tại $33,60, vốn chủ = 33,60 − 25,20 = 8,40 → 8,40/33,60 = 25% — mức maintenance kích hoạt margin call."
 },
 {
  "q": "Which version of the dividend discount model would most likely be appropriate for valuing a fairly YOUNG, publicly traded company?",
  "opts": [
   "A two-stage DDM",
   "A three-stage DDM",
   "The Gordon growth model"
  ],
  "ans": 1,
  "en": "A young company typically passes through growth → transition → maturity — three distinct phases → three-stage DDM. Gordon fits stable, mature dividend payers.",
  "vi": "Công ty trẻ thường đi qua tăng trưởng → chuyển tiếp → trưởng thành — ba pha rõ rệt → DDM ba giai đoạn. Gordon hợp công ty trưởng thành trả cổ tức ổn định."
 },
 {
  "q": "D₀ = $2.00; dividend payout ratio 55%; ROE 9%. If the required return is 8%, the intrinsic value per share using the Gordon growth model is closest to:",
  "opts": [
   "$50.63",
   "$52.68",
   "$68.82"
  ],
  "ans": 1,
  "en": "g = ROE × retention = 9% × 0.45 = 4.05%. D₁ = 2.00 × 1.0405 = 2.081. V = 2.081/(0.08 − 0.0405) = 2.081/0.0395 = $52.68.",
  "vi": "g = ROE × tỷ lệ giữ lại = 9% × 0,45 = 4,05%. D₁ = 2,00 × 1,0405 = 2,081. V = 2,081/(0,08 − 0,0405) = $52,68."
 },
 {
  "q": "Net income £1,500m; average total assets £11,500m; average shareholders' equity £7,500m. If the dividend payout ratio is 45%, the sustainable growth rate is closest to:",
  "opts": [
   "7%",
   "9%",
   "11%"
  ],
  "ans": 2,
  "en": "ROE = 1,500/7,500 = 20%; retention = 1 − 0.45 = 0.55. g = 20% × 0.55 = 11%. Total assets are the distractor — ROE uses equity.",
  "vi": "ROE = 1.500/7.500 = 20%; tỷ lệ giữ lại = 1 − 0,45 = 0,55. g = 20% × 0,55 = 11%. Tổng tài sản là mồi nhử — ROE dùng vốn chủ."
 },
 {
  "q": "Which most likely accounts for MOST of the long-term changes in a portfolio's value?",
  "opts": [
   "Beta",
   "Alpha",
   "Security selection"
  ],
  "ans": 0,
  "en": "Systematic market exposure — beta, set by the asset allocation — drives the bulk of long-run portfolio outcomes; alpha and selection are second-order.",
  "vi": "Phơi nhiễm thị trường hệ thống — beta, do phân bổ tài sản quyết định — dẫn dắt phần lớn kết quả dài hạn của danh mục; alpha và chọn chứng khoán là bậc hai."
 },
 {
  "q": "Hedge fund: beginning AUM $100m; end-of-year AUM before fees $120m; management fee 2% of year-end AUM; incentive fee 20% with an 8% hard hurdle, calculated net of the management fee. Total fees are closest to:",
  "opts": [
   "$4.3 million",
   "$4.8 million",
   "$5.9 million"
  ],
  "ans": 0,
  "en": "Management fee = 2% × 120 = 2.4. Gains net of mgmt fee = 120 − 100 − 2.4 = 17.6; hard hurdle = 8% × 100 = 8 → incentive base = 17.6 − 8 = 9.6 → incentive = 1.92. Total = 2.4 + 1.92 = $4.32m.",
  "vi": "Phí quản lý = 2% × 120 = 2,4. Lợi nhuận sau phí quản lý = 120 − 100 − 2,4 = 17,6; hurdle cứng = 8% × 100 = 8 → cơ sở tính thưởng = 17,6 − 8 = 9,6 → phí thành tích = 1,92. Tổng = 2,4 + 1,92 = $4,32tr."
 },
 {
  "q": "Annual modified duration 7.534; flat price 92.084; accrued interest 1.458 (per 100 par). The bond's money duration per 100 of par value is closest to:",
  "opts": [
   "683",
   "694",
   "705"
  ],
  "ans": 2,
  "en": "Money duration = ModDur × FULL price = 7.534 × (92.084 + 1.458) = 7.534 × 93.542 = 705. Using the flat price alone (694) is the trap.",
  "vi": "Money duration = ModDur × FULL price = 7,534 × (92,084 + 1,458) = 7,534 × 93,542 = 705. Dùng riêng flat price (694) là cái bẫy."
 },
 {
  "q": "Forward rates: 0y1y = 2.31%; 1y1y = 2.82%; 2y1y = 2.97%. The 2-year implied spot rate is closest to:",
  "opts": [
   "2.56%",
   "2.82%",
   "2.89%"
  ],
  "ans": 0,
  "en": "(1 + z₂)² = (1.0231)(1.0282) = 1.05195 → z₂ = 1.05195^0.5 − 1 = 2.56% — the geometric average of the first two forwards. The 2y1y rate is irrelevant to the 2-year spot.",
  "vi": "(1 + z₂)² = (1,0231)(1,0282) = 1,05195 → z₂ = 1,05195^0,5 − 1 = 2,56% — trung bình nhân của hai forward đầu. Lãi 2y1y không liên quan đến spot 2 năm."
 },
 {
  "q": "A US Treasury security originally issued with FIVE years to maturity is a Treasury:",
  "opts": [
   "Bill",
   "Note",
   "Bond"
  ],
  "ans": 1,
  "en": "Original maturities: bills ≤ 1 year; notes 2–10 years; bonds > 10 years. Five years → note.",
  "vi": "Kỳ hạn gốc: bills ≤ 1 năm; notes 2–10 năm; bonds > 10 năm. Năm năm → note."
 },
 {
  "q": "In behavioral finance, which statement best describes the bias of CONSERVATISM? Investors:",
  "opts": [
   "Assess new information based on similarity to the current state",
   "Focus on issues in isolation and respond based on how they are posed",
   "Tend to be slow to react to new information and maintain their prior views"
  ],
  "ans": 2,
  "en": "Conservatism = under-updating: clinging to prior forecasts when new evidence arrives. Option A describes representativeness; option B describes framing.",
  "vi": "Conservatism = cập nhật thiếu: bám dự báo cũ khi bằng chứng mới xuất hiện. Phương án A mô tả representativeness; phương án B là framing."
 },
 {
  "q": "Bond prices: 103.52 at YTM 3.7%; 103.84 at YTM 3.3%. The bond trades at 103.67 with YTM 3.5%. The approximate convexity is closest to:",
  "opts": [
   "0.048",
   "0.096",
   "48.230"
  ],
  "ans": 2,
  "en": "Convexity = (P₋ + P₊ − 2P₀)/(P₀ × Δy²) = (103.84 + 103.52 − 2 × 103.67)/(103.67 × 0.002²) = 0.02/0.000415 = 48.23.",
  "vi": "Convexity = (P₋ + P₊ − 2P₀)/(P₀ × Δy²) = (103,84 + 103,52 − 2 × 103,67)/(103,67 × 0,002²) = 0,02/0,000415 = 48,23."
 },
 {
  "q": "Which return measure is MOST appropriate when comparing the annual returns of an asset class over various long historical time periods?",
  "opts": [
   "The arithmetic mean of real returns",
   "The geometric mean of real returns",
   "The arithmetic mean of nominal returns"
  ],
  "ans": 1,
  "en": "Across long horizons, compounding matters (geometric) and different inflation regimes must be stripped out (real returns) — geometric real returns make eras comparable.",
  "vi": "Trên kỳ hạn dài, lũy kế quan trọng (trung bình nhân) và các chế độ lạm phát khác nhau phải được gỡ bỏ (lợi suất thực) — trung bình nhân của lợi suất thực khiến các thời kỳ so sánh được."
 },
 {
  "q": "If the forward price of a stock equals the current spot price, the price of an at-the-money PUT under put–call parity will be:",
  "opts": [
   "Lower than the price of the at-the-money call",
   "Equal to the price of the at-the-money call",
   "Higher than the price of the at-the-money call"
  ],
  "ans": 1,
  "en": "Parity: c − p = [F₀ − X]/(1 + r)^T. At the money with X = S and F₀ = S → c − p = 0: the options are worth the same.",
  "vi": "Parity: c − p = [F₀ − X]/(1 + r)^T. At the money với X = S và F₀ = S → c − p = 0: hai quyền chọn cùng giá."
 },
 {
  "q": "Regarding hedge fund fee calculations, a HIGH-WATER MARK:",
  "opts": [
   "Represents the return on gains not yet fully realized",
   "Protects the client from paying twice for the same performance",
   "Is the rate of return the GP must exceed to earn a performance fee"
  ],
  "ans": 1,
  "en": "Incentive fees are due only on gains ABOVE the highest prior NAV — losses must be recovered before fees resume, so no double-charging. Option C describes the hurdle rate.",
  "vi": "Phí thành tích chỉ tính trên phần lãi VƯỢT đỉnh NAV cũ — phải gỡ hết lỗ trước khi phí chạy lại, nên không bị tính hai lần. Phương án C mô tả hurdle rate."
 },
 {
  "q": "Equal-weighted index of three stocks, start value 100, NOT rebalanced. Prices move: Stock 1: €30 → €36; Stock 2: €50 → €45; Stock 3: €40 → €50. The end-of-year index value is closest to:",
  "opts": [
   "109.2",
   "111.7",
   "113.5"
  ],
  "ans": 1,
  "en": "Equal money in each at the start, then buy-and-hold: returns are +20%, −10%, +25% → average = 35/3 = 11.67% → index = 111.7. Shares outstanding never matter in an equal-weighted index.",
  "vi": "Vốn bằng nhau vào mỗi cổ phiếu lúc đầu, rồi giữ nguyên: lợi suất +20%, −10%, +25% → trung bình = 35/3 = 11,67% → chỉ số = 111,7. Số cổ phiếu lưu hành không bao giờ có vai trò trong chỉ số equal-weighted."
 },
 {
  "q": "The price of a futures contract will be HIGHER than the price of a forward contract when the correlation between futures prices and interest rates is:",
  "opts": [
   "Negative",
   "Zero",
   "Positive"
  ],
  "ans": 2,
  "en": "Daily settlement pays gains when rates are high (reinvest well) and losses when rates are low (borrow cheap) — a benefit worth paying for when futures prices and rates move together.",
  "vi": "Thanh toán hằng ngày trả lãi khi lãi suất cao (tái đầu tư tốt) và thu lỗ khi lãi suất thấp (vay rẻ) — lợi ích đáng trả thêm khi giá futures và lãi suất đồng pha."
 },
 {
  "q": "In the priority of claims, the class of corporate debt with the LOWEST priority in default is most likely:",
  "opts": [
   "Second lien debt",
   "Subordinated debt",
   "Junior subordinated debt"
  ],
  "ans": 2,
  "en": "The ladder descends: secured (first, second lien) → senior unsecured → subordinated → JUNIOR subordinated — the last debt claim before equity.",
  "vi": "Chiếc thang đi xuống: có đảm bảo (first, second lien) → senior unsecured → subordinated → JUNIOR subordinated — quyền đòi nợ cuối cùng trước vốn chủ."
 },
 {
  "q": "Asset 1 and Asset 2 are perfectly positively correlated with the SAME standard deviation. The covariance between their returns equals the:",
  "opts": [
   "Variance of Asset 1's returns",
   "Standard deviation of Asset 1's returns",
   "Variance of Asset 1's returns times the variance of Asset 2's returns"
  ],
  "ans": 0,
  "en": "Cov = ρ × σ₁ × σ₂ = 1 × σ × σ = σ² — precisely the variance of either asset.",
  "vi": "Cov = ρ × σ₁ × σ₂ = 1 × σ × σ = σ² — chính xác bằng phương sai của một trong hai tài sản."
 },
 {
  "q": "In contrast to life insurers, property and casualty insurers most likely:",
  "opts": [
   "Invest their general account assets in fixed-income securities",
   "Accept investments with lower returns in their general account",
   "Target a higher return in the surplus account than in the general account"
  ],
  "ans": 1,
  "en": "P&C claims are lumpy and unpredictable, forcing the general account into shorter, more liquid, lower-return assets than life insurers' — the distinguishing feature. Both invest in fixed income and both run surplus accounts for higher returns.",
  "vi": "Bồi thường P&C cục và khó đoán, ép tài khoản chung vào tài sản ngắn hơn, thanh khoản hơn, lợi suất thấp hơn so với bảo hiểm nhân thọ — nét phân biệt. Cả hai đều đầu tư thu nhập cố định và đều có surplus account nhắm lợi suất cao hơn."
 },
 {
  "q": "If the expected forward rate curve shifts DOWNWARD after the inception of a swap, the mark-to-market value for the FIXED-RATE PAYER will most likely:",
  "opts": [
   "Decrease",
   "Remain the same",
   "Increase"
  ],
  "ans": 0,
  "en": "The fixed payer expects to receive floating: lower expected forwards shrink those receipts while the fixed payments stand — the position loses value.",
  "vi": "Bên trả cố định kỳ vọng nhận thả nổi: forward kỳ vọng thấp hơn làm teo các khoản nhận trong khi khoản trả cố định đứng nguyên — vị thế mất giá trị."
 },
 {
  "q": "Short sellers most likely:",
  "opts": [
   "Pay a short rebate to security lenders",
   "Receive cash collateral from security lenders",
   "Make payments-in-lieu of dividends to security lenders"
  ],
  "ans": 2,
  "en": "The short seller owes the lender every dividend the stock pays during the loan — payments in lieu. Rebates flow FROM the lender to the borrower, and collateral flows TO the lender.",
  "vi": "Người bán khống nợ bên cho mượn mọi khoản cổ tức cổ phiếu trả trong thời gian vay — payment in lieu. Rebate chảy TỪ bên cho mượn sang người vay, còn tài sản đảm bảo chảy VỀ bên cho mượn."
 },
 {
  "q": "Hedge fund: initial investment $100m; profit Year 1 = $25m; loss Year 2 = $10m. With a 20% incentive fee and a clawback provision, the TOTAL incentive fee for Years 1 and 2 is:",
  "opts": [
   "$0",
   "$3 million",
   "$5 million"
  ],
  "ans": 1,
  "en": "Year 1 fee = 20% × 25 = 5. Year 2's loss cuts cumulative profit to 15 → fees should total 20% × 15 = 3 → the clawback returns 2. Net fees over both years = $3m.",
  "vi": "Phí năm 1 = 20% × 25 = 5. Khoản lỗ năm 2 hạ lợi nhuận lũy kế còn 15 → tổng phí đúng là 20% × 15 = 3 → clawback đòi lại 2. Phí ròng hai năm = $3tr."
 },
 {
  "q": "Statutory voting means that shareholders:",
  "opts": [
   "Vote by proxy",
   "Have one vote per share",
   "With a small number of shares are better positioned than under cumulative voting"
  ],
  "ans": 1,
  "en": "Statutory (straight) voting: one vote per share per board seat. Cumulative voting — pooling votes on one candidate — is what HELPS small shareholders.",
  "vi": "Bỏ phiếu theo luật định (thẳng): một phiếu mỗi cổ phần cho mỗi ghế HĐQT. Bỏ phiếu tích lũy — dồn phiếu cho một ứng viên — mới là thứ GIÚP cổ đông nhỏ."
 },
 {
  "q": "An investor buys a European put for $10 with strike $95. If the underlying is $80 at expiration, the VALUE of the option at expiration is:",
  "opts": [
   "$0",
   "$5",
   "$15"
  ],
  "ans": 2,
  "en": "Value at expiration = max(X − S, 0) = 95 − 80 = $15. The $10 premium affects PROFIT (+5), not the option's terminal value.",
  "vi": "Giá trị tại đáo hạn = max(X − S, 0) = 95 − 80 = $15. Phí $10 ảnh hưởng LỢI NHUẬN (+5), không phải giá trị cuối cùng của quyền chọn."
 },
 {
  "q": "Which statement about DIRECT ownership of real estate is most accurate?",
  "opts": [
   "Local real estate market expertise is important for success",
   "Investors have no control over the tenant selection process",
   "Investors cannot use non-cash depreciation to reduce taxable income"
  ],
  "ans": 0,
  "en": "Real estate is a local business — neighborhood knowledge drives returns. Direct owners DO control tenant selection and DO shelter income with depreciation; those are advantages of direct ownership.",
  "vi": "Bất động sản là ngành địa phương — am hiểu khu vực quyết định lợi suất. Chủ sở hữu trực tiếp CÓ quyền chọn khách thuê và CÓ dùng khấu hao che chắn thu nhập chịu thuế; đó là ưu điểm của sở hữu trực tiếp."
 },
 {
  "q": "For which industry are ECONOMIC influences most important?",
  "opts": [
   "Utilities",
   "Transportation",
   "Pharmaceuticals"
  ],
  "ans": 1,
  "en": "Transportation is deeply cyclical — freight and travel track economic activity. Utilities and pharmaceuticals are classic defensive, demand-stable sectors.",
  "vi": "Vận tải mang tính chu kỳ sâu sắc — hàng hóa và đi lại chạy theo hoạt động kinh tế. Tiện ích và dược phẩm là các ngành phòng thủ kinh điển, cầu ổn định."
 },
 {
  "q": "An investor wants to protect a SHORT position from adverse price movements while keeping the opportunity for future gains. The investor should most likely use a:",
  "opts": [
   "Stop order",
   "Limit order",
   "Market order"
  ],
  "ans": 0,
  "en": "A stop-buy above the market caps the short's loss if the price runs up, while leaving the position open to profit if the price falls — protection with upside intact.",
  "vi": "Lệnh stop-buy trên giá thị trường chặn khoản lỗ của vị thế short nếu giá vọt lên, đồng thời giữ nguyên cơ hội lời nếu giá giảm — bảo vệ mà vẫn còn upside."
 },
 {
  "q": "When making investment decisions, which best describes a way to correct a behavioral bias caused by a COGNITIVE error?",
  "opts": [
   "Obtain better investment information",
   "Rely on intuition when making investments",
   "Evaluate investments based on past gains and losses"
  ],
  "ans": 0,
  "en": "Cognitive errors stem from faulty reasoning — better information, education, and process correct them. Intuition and anchoring on past gains/losses are the biases themselves.",
  "vi": "Lỗi nhận thức xuất phát từ suy luận sai — thông tin tốt hơn, học tập và quy trình sẽ sửa được. Trực giác và neo vào lãi/lỗ quá khứ chính là các thiên lệch."
 },
 {
  "q": "At maturity, the buyer of an OTC financial instrument faces the counterparty credit risk of the seller in:",
  "opts": [
   "A profitable long forward position only",
   "An in-the-money long call option only",
   "Both a profitable long forward position and an in-the-money long call position"
  ],
  "ans": 2,
  "en": "Credit risk sits with whoever is OWED money at settlement: a profitable forward and an ITM call both leave the buyer awaiting the seller's payment.",
  "vi": "Rủi ro tín dụng nằm ở phía ĐƯỢC nhận tiền lúc thanh toán: forward có lãi và call đang ITM đều khiến người mua chờ khoản chi trả từ người bán."
 },
 {
  "q": "Order book bids: 2,000 @ 42.56; 4,000 @ 42.52; 7,100 @ 42.44; 5,000 @ 42.42. A trader receives an order to sell 9,000 shares with a limit of CHF 42.52. The average execution price is closest to:",
  "opts": [
   "42.50",
   "42.52",
   "42.53"
  ],
  "ans": 2,
  "en": "The limit permits hitting bids at or above 42.52: 2,000 @ 42.56 + 4,000 @ 42.52 = 6,000 shares filled (3,000 remain unexecuted). Average = (2,000 × 42.56 + 4,000 × 42.52)/6,000 = 42.533.",
  "vi": "Giới hạn cho phép khớp các bid từ 42,52 trở lên: 2.000 @ 42,56 + 4.000 @ 42,52 = 6.000 cổ phiếu khớp (3.000 chưa khớp). Giá bình quân = (2.000 × 42,56 + 4.000 × 42,52)/6.000 = 42,533."
 },
 {
  "q": "A US investor buys an ADR of a Japanese company. If the stock's total return in Japan is 3% and the yen appreciates 3% against the dollar, the investor's total return is closest to:",
  "opts": [
   "0%",
   "3%",
   "6%"
  ],
  "ans": 2,
  "en": "Returns compound across the two sources: (1.03)(1.03) − 1 = 6.09% ≈ 6% — the local return plus the currency gain.",
  "vi": "Lợi suất lũy kế qua hai nguồn: (1,03)(1,03) − 1 = 6,09% ≈ 6% — lợi suất nội địa cộng lãi tỷ giá."
 }
]
});
window.CFA.mocktests.push({
 name: "Mock Exam 2 — Session 1 (Ethics · Quant · Econ · FSA · Corporate Issuers)",
 qs: [
 {
  "q": "Which of the following is a VIOLATION of the Standard relating to preservation of confidentiality?",
  "opts": [
   "Members share details relating to former clients with third party service providers",
   "Members convey to clients that not all firm-sponsored resources may be appropriate for communicating confidential information",
   "When allowed under the law, members share confidential client information to defend themselves in a CFA Institute Professional Conduct Program investigation"
  ],
  "ans": 0,
  "en": "The duty of confidentiality extends to FORMER clients — sharing their details with outside providers breaches III(E). Advising clients on secure channels is good practice, and cooperating with a PCP investigation is explicitly permitted.",
  "vi": "Nghĩa vụ bảo mật kéo dài cả với khách hàng CŨ — chia sẻ thông tin của họ cho bên cung cấp dịch vụ ngoài là vi phạm III(E). Tư vấn khách về kênh liên lạc an toàn là thực hành tốt, còn hợp tác với điều tra PCP được cho phép rõ ràng."
 },
 {
  "q": "Which is most accurate under the Standard relating to knowledge of the law? Members are required to:",
  "opts": [
   "Dissociate from client activities they believe are unethical",
   "Have detailed knowledge of all the laws that could potentially govern their activities",
   "Report potential violations by fellow members to the CFA Institute Professional Conduct Program"
  ],
  "ans": 0,
  "en": "Standard I(A) requires dissociating from illegal or unethical activity. It demands only an UNDERSTANDING of applicable law — not encyclopedic knowledge — and reporting peers to the PCP is encouraged, not required.",
  "vi": "Standard I(A) yêu cầu tách mình khỏi hoạt động phi pháp hoặc phi đạo đức. Nó chỉ đòi HIỂU luật áp dụng — không phải thuộc lòng mọi luật — và báo cáo đồng nghiệp lên PCP là được khuyến khích, không bắt buộc."
 },
 {
  "q": "Robert Dowling, CFA, is part of a research team that recommended a \"buy\" rating, but Dowling disagrees. To comply with the Standard on diligence and reasonable basis, Dowling:",
  "opts": [
   "Must decline to be identified with the report",
   "Must ensure the report reflects his opinion",
   "May continue to be identified with the report as long as the recommendation has a reasonable basis"
  ],
  "ans": 2,
  "en": "Group research needs a reasonable and adequate basis — not unanimity. A dissenting member may stay on the report; dissociation is required only when the basis itself is lacking.",
  "vi": "Nghiên cứu nhóm cần cơ sở hợp lý, đầy đủ — không cần đồng thuận tuyệt đối. Thành viên bất đồng vẫn có thể đứng tên; chỉ buộc rút tên khi chính cơ sở phân tích có vấn đề."
 },
 {
  "q": "Daniel Morgan, a Level III candidate, signs into a CFA-candidate-only forum after the exam and posts his opinion that the CFA Program and examination policies are unfair. Has Morgan violated the Standards?",
  "opts": [
   "No",
   "Yes, by providing confidential program information",
   "Yes, by compromising the reputation of CFA Institute"
  ],
  "ans": 0,
  "en": "Expressing opinions — even critical ones — about CFA Institute's policies is expressly permitted. Only disclosing confidential EXAM CONTENT would breach VII(A).",
  "vi": "Bày tỏ quan điểm — kể cả chỉ trích — về chính sách của CFA Institute được cho phép rõ ràng. Chỉ tiết lộ NỘI DUNG ĐỀ THI bảo mật mới vi phạm VII(A)."
 },
 {
  "q": "Which is a recommended procedure under the Standard relating to performance presentation?",
  "opts": [
   "Use a single representative account for each mandate when presenting performance history",
   "Consider the knowledge and sophistication of the audience to whom the performance history is presented",
   "Exclude terminated accounts while presenting performance history, indicating when the accounts were terminated"
  ],
  "ans": 1,
  "en": "Tailoring the presentation to the audience's sophistication is a recommended III(D) procedure. Composites — not one cherry-picked account — should be used, and TERMINATED accounts must be INCLUDED through their final dates.",
  "vi": "Điều chỉnh cách trình bày theo mức am hiểu của người nghe là quy trình khuyến nghị của III(D). Phải dùng composite — không phải một tài khoản được chọn đẹp — và tài khoản ĐÃ ĐÓNG phải được GỘP VÀO đến ngày kết thúc."
 },
 {
  "q": "Under the Standard relating to loyalty, prudence, and care, members are most likely required to:",
  "opts": [
   "Vote all proxies on behalf of clients even if some offer no direct client benefit",
   "Avoid the use of soft dollars unless the services purchased have corresponding benefit for the client",
   "Consider each investment based solely on its characteristics, independently of other portfolio assets"
  ],
  "ans": 1,
  "en": "Client brokerage belongs to the client: soft dollars may only buy research that benefits the client. Proxy voting follows a cost–benefit analysis (not \"all\"), and investments are judged in the PORTFOLIO context.",
  "vi": "Hoa hồng môi giới thuộc về khách hàng: soft dollars chỉ được mua dịch vụ nghiên cứu có lợi cho khách. Bỏ phiếu proxy theo phân tích chi phí–lợi ích (không phải \"tất cả\"), và khoản đầu tư được đánh giá trong bối cảnh DANH MỤC."
 },
 {
  "q": "According to the GIPS standards, compliance may be claimed only:",
  "opts": [
   "After verification has been performed",
   "If the firm is compliant on a firm-wide basis",
   "With respect to specific composites and not to individual portfolios"
  ],
  "ans": 1,
  "en": "GIPS compliance is all-or-nothing at the FIRM level. Verification is voluntary, and compliance can never attach to selected composites alone.",
  "vi": "Tuân thủ GIPS là tất-cả-hoặc-không ở cấp CÔNG TY. Verification là tự nguyện, và không bao giờ được tuyên bố tuân thủ chỉ cho vài composite chọn lọc."
 },
 {
  "q": "Under the Standard on additional compensation arrangements, a member must obtain employer permission before accepting third-party benefits:",
  "opts": [
   "Only for services rendered to her employer",
   "Only for services that might create a conflict with her employer's interest",
   "Both for services rendered to the employer and for services that might create a conflict"
  ],
  "ans": 1,
  "en": "IV(B) targets compensation that competes with or might CONFLICT with the employer's interest — that is what requires written consent from all parties.",
  "vi": "IV(B) nhắm vào các khoản thù lao cạnh tranh hoặc có thể XUNG ĐỘT với lợi ích của chủ lao động — đó là thứ cần sự đồng ý bằng văn bản của các bên."
 },
 {
  "q": "Diana Fairbanks, CFA, learns from her auditor husband that a computer firm he audits will receive a qualified opinion. Later she notices a new client account holds substantial shares of that firm. An internet search reveals no news about the audit. To avoid violating the Standards, Fairbanks should most likely:",
  "opts": [
   "Take no investment action",
   "Complete a thorough and diligent analysis of the company and then sell the stock",
   "Sell the stock immediately as she has a reasonable basis for taking this investment action"
  ],
  "ans": 0,
  "en": "The upcoming qualified opinion is material nonpublic information. Standard II(A) bars trading or causing trades on it — selling in any form would act on MNPI, so she must not act (and should seek public dissemination through proper channels).",
  "vi": "Ý kiến kiểm toán ngoại trừ sắp công bố là thông tin trọng yếu chưa công khai. Standard II(A) cấm giao dịch hoặc khiến người khác giao dịch dựa trên nó — bán dưới bất kỳ hình thức nào đều là hành động trên MNPI, nên cô không được làm gì (và nên thúc đẩy công bố thông tin qua kênh phù hợp)."
 },
 {
  "q": "If a member self-discloses a matter questioning his professional conduct in his annual statement, an initial investigation is conducted by the:",
  "opts": [
   "Standard of Practice Council",
   "Disciplinary Review Committee",
   "Professional Conduct Program staff"
  ],
  "ans": 2,
  "en": "Professional Conduct staff (under the Designated Officer) conduct inquiries and investigations; the DRC hears appeals and serious cases afterward.",
  "vi": "Nhân sự Professional Conduct (dưới Designated Officer) thực hiện thẩm tra và điều tra ban đầu; DRC xử các vụ nghiêm trọng và phúc thẩm sau đó."
 },
 {
  "q": "A firm manages $500 million in large-cap equity: non-fee-paying portfolios are $50 million and fee-paying NON-discretionary portfolios are $75 million. Under GIPS, the firm must present its large-cap composite value as:",
  "opts": [
   "$375 million",
   "$425 million",
   "$450 million"
  ],
  "ans": 0,
  "en": "Composites contain only actual, FEE-PAYING, DISCRETIONARY portfolios: 500 − 50 (non-fee) − 75 (non-discretionary) = $375m.",
  "vi": "Composite chỉ gồm danh mục thực, TRẢ PHÍ, TOÀN QUYỀN: 500 − 50 (không phí) − 75 (không toàn quyền) = $375tr."
 },
 {
  "q": "Procedure 1: Disseminate to all employees a list of past violations together with disciplinary actions. Procedure 2: Check references of potential employees to ensure they are of good character. Which is among the recommended procedures for compliance with the Standard relating to misconduct?",
  "opts": [
   "Procedure 1 only",
   "Procedure 2 only",
   "Both Procedure 1 and Procedure 2"
  ],
  "ans": 2,
  "en": "I(D) recommended procedures include a code of ethics, publicizing the list of violations and sanctions to deter misconduct, and background/reference checks on prospective employees — both procedures qualify.",
  "vi": "Quy trình khuyến nghị của I(D) gồm bộ quy tắc đạo đức, công bố danh sách vi phạm cùng hình thức kỷ luật để răn đe, và kiểm tra lai lịch/người tham chiếu của ứng viên — cả hai quy trình đều đúng."
 },
 {
  "q": "A member develops allocation procedures for block trades and new issues. Under the recommended fair dealing procedures, the allocation procedures should involve:",
  "opts": [
   "Prohibiting consideration of advance interest when allocating trades for new issues",
   "Bundling orders on a first-in, first-out basis for efficiency as appropriate for the asset class",
   "Giving client accounts in a block trade execution prices corresponding to order arrival time"
  ],
  "ans": 1,
  "en": "Recommended trade-allocation practice: time-stamp and process orders first-in first-out, bundling where efficient for the asset class. Block-trade participants receive the SAME average price (not arrival-time prices), and new issues ARE allocated using advance indications of interest.",
  "vi": "Thực hành phân bổ khuyến nghị: đóng dấu thời gian và xử lý lệnh theo thứ tự đến trước làm trước, gộp lệnh khi hiệu quả cho loại tài sản. Các tài khoản trong block trade nhận CÙNG giá bình quân (không theo giờ lệnh đến), còn phát hành mới ĐƯỢC phân bổ dựa trên đăng ký quan tâm trước."
 },
 {
  "q": "Ming Mei Xu, CFA, shares her buy recommendation with the public two days after sending it to her clients; the price rises. Her client Trevor Thomas, CFA, buys a large position, then sells it a month later at a profit, causing a significant price decline. Has the Standard on market manipulation been violated?",
  "opts": [
   "No",
   "Yes, by Xu",
   "Yes, by Thomas"
  ],
  "ans": 0,
  "en": "Neither acted to deceive: Xu may serve clients before the public, and Thomas simply traded on a recommendation then took profits. Price impact alone — without intent to mislead — is not manipulation.",
  "vi": "Không ai có ý lừa dối thị trường: Xu được phép phục vụ khách hàng trước công chúng, còn Thomas chỉ mua theo khuyến nghị rồi chốt lời. Tác động lên giá đơn thuần — không có ý đồ đánh lừa — không phải thao túng."
 },
 {
  "q": "Michael Pak retired, stopped paying CFA Institute dues, and no longer files the annual Professional Conduct Statement. Applying to a charity's investment committee, he writes: \"I was a CFA Institute member for 20 years.\" Has Pak violated the Standards?",
  "opts": [
   "No",
   "Yes, the Standard on conduct as participants in CFA Institute programs",
   "Yes, the Standard on reference to CFA Institute, the CFA designation, and the CFA Program"
  ],
  "ans": 0,
  "en": "The statement is past-tense and factual — he WAS a member for 20 years. Claiming to be a CURRENT member or charterholder after lapsing would be the violation.",
  "vi": "Câu nói ở thì quá khứ và đúng sự thật — ông ĐÃ TỪNG là thành viên 20 năm. Chỉ khi tự nhận đang LÀ thành viên hay charterholder sau khi hết hiệu lực mới vi phạm."
 },
 {
  "q": "According to the Standard relating to loyalty, members must:",
  "opts": [
   "Subordinate any personal obligations to their work",
   "Place the interests of their employer below the interests of clients",
   "Refrain from entering into an independent business while still employed"
  ],
  "ans": 1,
  "en": "The Code's hierarchy: market integrity and clients come before the employer. Independent practice is allowed WITH employer consent, and personal obligations need not be surrendered wholesale.",
  "vi": "Thứ bậc trong Code: tính chính trực của thị trường và khách hàng đứng trên chủ lao động. Kinh doanh độc lập được phép NẾU chủ đồng ý, và nghĩa vụ cá nhân không phải hy sinh toàn bộ."
 },
 {
  "q": "Yun Hae, CFA, manages portfolios at Citadel Capital, where her brother keeps a fee-paying retirement account in which she has no beneficial ownership. For every suitable IPO, Hae allocates shares to other clients first, placing only remaining shares in her brother's account, to avoid potential conflicts. Hae's actions violate the Standard(s) relating:",
  "opts": [
   "Only to fair dealing",
   "Only to priority of transactions",
   "Both to fair dealing and to priority of transactions"
  ],
  "ans": 0,
  "en": "A fee-paying family account with NO beneficial ownership is an ordinary client — systematically shortchanging it breaches fair dealing III(B). Priority of transactions VI(B) governs accounts she beneficially owns, which this is not.",
  "vi": "Tài khoản người thân trả phí mà cô KHÔNG có quyền hưởng lợi là khách hàng bình thường — luôn xếp nó cuối là vi phạm fair dealing III(B). Priority of transactions VI(B) chỉ áp cho tài khoản cô hưởng lợi, mà đây không phải."
 },
 {
  "q": "To claim compliance with the GIPS standards, a firm that has existed for two years must:",
  "opts": [
   "Wait one year to present three years of GIPS-compliant performance",
   "Wait three years to present five years of GIPS-compliant performance",
   "Initially present GIPS-compliant performance since the firm's inception date"
  ],
  "ans": 2,
  "en": "Firms younger than five years present a compliant record since inception, then build toward the ten-year record year by year — no waiting required.",
  "vi": "Công ty dưới năm tuổi trình bày lịch sử đạt chuẩn kể từ ngày thành lập, rồi bồi đắp dần đến đủ mười năm — không phải chờ đợi."
 },
 {
  "q": "Statement 1: \"Investment professionals should provide to their clients notification of approved referral fee programs.\" Statement 2: \"Members should provide their employer at least annual updates on the amount and nature of compensation received.\" Which is consistent with the recommended procedures for the Standard on referral fees?",
  "opts": [
   "Statement 1 only",
   "Statement 2 only",
   "Both Statement 1 and Statement 2"
  ],
  "ans": 0,
  "en": "Firms with approved referral programs should have professionals notify clients of them — Statement 1 matches. The recommended update frequency to employers is at least QUARTERLY, so \"annual\" in Statement 2 falls short.",
  "vi": "Công ty có chương trình giới thiệu được phê duyệt nên yêu cầu nhân sự thông báo cho khách — Statement 1 đúng. Tần suất cập nhật cho chủ lao động được khuyến nghị tối thiểu HÀNG QUÝ, nên chữ \"hàng năm\" ở Statement 2 chưa đạt."
 },
 {
  "q": "A recommended procedure for compliance with the Standard on responsibilities of supervisors is that members should encourage their firms to:",
  "opts": [
   "Adopt a code of ethics that addresses general fiduciary concepts",
   "Provide the firm's clients with a copy of detailed compliance procedures",
   "Commingle the firm's code of ethics with its detailed compliance procedures"
  ],
  "ans": 0,
  "en": "Firms should adopt a code of ethics stating general fiduciary principles — and keep it SEPARATE from detailed compliance procedures so the ethical foundation stays visible. Clients need the code, not the procedural manual.",
  "vi": "Công ty nên ban hành bộ quy tắc đạo đức nêu các nguyên tắc tín thác tổng quát — và giữ nó TÁCH BIỆT khỏi quy trình tuân thủ chi tiết để nền tảng đạo đức luôn rõ ràng. Khách hàng cần bộ quy tắc, không phải cẩm nang quy trình."
 },
 {
  "q": "Which claim can an asset management firm most likely make regarding the GIPS standards?",
  "opts": [
   "Claim GIPS compliance using the GIPS Compliance Statement",
   "State that the firm will achieve GIPS compliance by a future date",
   "Claim partial GIPS compliance with details on areas of non-compliance"
  ],
  "ans": 0,
  "en": "Only the prescribed Compliance Statement may be used, and only when fully compliant. Future-dated promises and partial-compliance claims are both prohibited.",
  "vi": "Chỉ được dùng đúng Tuyên bố Tuân thủ theo mẫu, và chỉ khi tuân thủ trọn vẹn. Hứa hẹn ngày tương lai và tuyên bố tuân thủ một phần đều bị cấm."
 },
 {
  "q": "According to the Standard relating to suitability, a member should update a client's Investment Policy Statement at least:",
  "opts": [
   "Quarterly",
   "Semiannually",
   "Annually"
  ],
  "ans": 2,
  "en": "III(C) recommends reviewing and updating the IPS at least annually — and additionally whenever the client's circumstances materially change.",
  "vi": "III(C) khuyến nghị rà soát và cập nhật IPS tối thiểu hàng năm — và thêm nữa mỗi khi hoàn cảnh của khách thay đổi trọng yếu."
 },
 {
  "q": "Ann Collins, CFA, manages a fund for Kreet Investments (KI). KI's employee retirement plan offers ten mutual funds, including two managed by KI colleagues. Collins reallocates her personal retirement money into the two colleague-managed funds without disclosing the change to KI or her clients. Has Collins violated the Standard on conflicts of interest?",
  "opts": [
   "No",
   "Yes, by failing to disclose the allocation change to KI",
   "Yes, by failing to disclose the change to her clients"
  ],
  "ans": 0,
  "en": "Choosing among her own employer-sponsored plan options creates no conflict with clients or employer — it is a routine personal investment decision requiring no disclosure.",
  "vi": "Chọn giữa các quỹ trong chính chương trình hưu trí của công ty không tạo xung đột nào với khách hàng hay chủ lao động — đó là quyết định đầu tư cá nhân thường tình, không cần công bố."
 },
 {
  "q": "John Clark, CFA, starts a new job and re-creates a research report on a company he covered at his previous employer. He uses information gathered directly from the covered company and also his personal notes taken while at his previous employer. Has Clark violated the Standard on record retention?",
  "opts": [
   "No",
   "Yes, because he uses information gathered directly from the covered company",
   "Yes, because he uses his personal notes taken while working at his previous employer"
  ],
  "ans": 2,
  "en": "Records created on the job — including his own notes — belong to the EMPLOYER. He must rebuild research from newly gathered public and company sources, which the first action correctly does.",
  "vi": "Hồ sơ tạo ra trong công việc — kể cả ghi chú của chính anh — thuộc về CHỦ LAO ĐỘNG cũ. Anh phải dựng lại nghiên cứu từ nguồn công khai và từ công ty thu thập mới, điều mà hành động thứ nhất làm đúng."
 },
 {
  "q": "According to the Standard relating to misrepresentation, a member is most likely required to:",
  "opts": [
   "Disclose his intended use of an external manager",
   "Always provide a benchmark for investment strategies",
   "Provide attribution to a member who is no longer with the firm when issuing a report"
  ],
  "ans": 0,
  "en": "Presenting outsourced management as one's own service misrepresents capabilities — the use of external managers must be disclosed. Benchmarks aren't mandated for every strategy, and firm reports need not credit departed staff.",
  "vi": "Trình bày dịch vụ thuê ngoài như của chính mình là xuyên tạc năng lực — việc dùng nhà quản lý bên ngoài phải được công bố. Benchmark không bắt buộc cho mọi chiến lược, và báo cáo của công ty không cần ghi công nhân sự đã rời đi."
 },
 {
  "q": "With respect to issuer-paid research, members are NOT required to:",
  "opts": [
   "Strictly limit the type of compensation they accept from the covered company",
   "Fully disclose the nature of compensation received from the covered company",
   "Accept compensation related only to the investment performance of the covered company"
  ],
  "ans": 2,
  "en": "Performance-linked pay is exactly what issuer-paid research must AVOID — the standard calls for a flat fee agreed in advance, plus full disclosure. So option C is not required; it is prohibited.",
  "vi": "Thù lao gắn với diễn biến giá là thứ nghiên cứu do tổ chức phát hành trả tiền phải TRÁNH — chuẩn mực đòi hỏi phí cố định thỏa thuận trước, kèm công bố đầy đủ. Nên phương án C không phải yêu cầu; nó bị cấm."
 },
 {
  "q": "Joanne Rosewood, CFA, replaces one of the third-party advisers managing her clients' portfolios with an internal investment strategy. She does not notify clients because the investment style is unchanged. Rosewood most likely violated the Standard relating to:",
  "opts": [
   "Avoid or disclose conflicts",
   "Loyalty, prudence, and care",
   "Communication with clients and prospective clients"
  ],
  "ans": 2,
  "en": "Switching from an external adviser to internal management changes the investment PROCESS — V(B) requires promptly disclosing significant process changes even when the style label stays the same.",
  "vi": "Đổi từ cố vấn bên ngoài sang quản lý nội bộ là thay đổi QUY TRÌNH đầu tư — V(B) yêu cầu công bố kịp thời các thay đổi trọng yếu của quy trình dù nhãn phong cách không đổi."
 },
 {
  "q": "For a non-colluding oligopoly in a price war market, competitors are most likely to:",
  "opts": [
   "Match a rival's price reduction and ignore a rival's price increase",
   "Ignore a rival's price reduction and match a rival's price increase",
   "Match both a rival's price reduction and a rival's price increase"
  ],
  "ans": 0,
  "en": "The kinked demand curve logic: cuts are matched (to defend share), increases are ignored (to steal share) — which is what keeps oligopoly prices sticky.",
  "vi": "Logic đường cầu gãy khúc: giảm giá thì bị theo (để giữ thị phần), tăng giá thì bị mặc kệ (để cướp thị phần) — chính điều này khiến giá trong độc quyền nhóm cứng nhắc."
 },
 {
  "q": "Which sampling method involves selecting every kth member from a population until the desired sample size is obtained?",
  "opts": [
   "Cluster sampling",
   "Systematic sampling",
   "Convenience sampling"
  ],
  "ans": 1,
  "en": "Fixed-interval selection — every kth element — is the definition of systematic sampling.",
  "vi": "Chọn theo bước nhảy cố định — phần tử thứ k mỗi lượt — chính là định nghĩa của systematic sampling."
 },
 {
  "q": "In the year of a change in accounting policy, comparability of the presented financial statements is best with:",
  "opts": [
   "Prospective application",
   "Retrospective application",
   "Modified retrospective application"
  ],
  "ans": 1,
  "en": "Retrospective application restates all prior periods under the new policy, making every year shown directly comparable.",
  "vi": "Áp dụng hồi tố trình bày lại mọi kỳ trước theo chính sách mới, khiến mọi năm được trình bày so sánh trực tiếp được với nhau."
 },
 {
  "q": "A portfolio's target semideviation is calculated over twelve consecutive months, including seven months of below-target returns. The sum of squared deviations below the target is 42%². The target semideviation is closest to:",
  "opts": [
   "1.87%",
   "1.95%",
   "2.65%"
  ],
  "ans": 1,
  "en": "Divide by n − 1 using the FULL sample size: 42/(12 − 1) = 3.818 → √3.818 = 1.95%. Dividing by 7 − 1 (the below-target count) is the trap.",
  "vi": "Chia cho n − 1 với cỡ mẫu ĐẦY ĐỦ: 42/(12 − 1) = 3,818 → √3,818 = 1,95%. Chia cho 7 − 1 (số tháng dưới mục tiêu) là cái bẫy."
 },
 {
  "q": "Which mature company is most likely to use the greatest amount of leverage in its capital structure?",
  "opts": [
   "Mining company",
   "Software company",
   "Shipping company"
  ],
  "ans": 2,
  "en": "Shipping's long-lived, saleable vessels make superb collateral supporting heavy debt. Mining's revenue is too commodity-volatile, and software has few tangible assets to pledge.",
  "vi": "Đội tàu đời dài, dễ bán của ngành vận tải biển là tài sản thế chấp tuyệt vời cho vay nợ lớn. Doanh thu khai khoáng quá biến động theo hàng hóa, còn phần mềm có ít tài sản hữu hình để cầm cố."
 },
 {
  "q": "Which statement about company stakeholders is most accurate?",
  "opts": [
   "Debtholders tend to prefer that a company raise more equity",
   "Shareholder–debtholder conflict is greater for short-term creditors",
   "Shareholders are more likely than debtholders to impose contractual limits on leverage"
  ],
  "ans": 0,
  "en": "More equity thickens the cushion protecting creditors — debtholders love it. The conflict intensifies with LONGER maturities, and leverage covenants are imposed BY debtholders.",
  "vi": "Thêm vốn chủ làm dày tấm đệm bảo vệ chủ nợ — họ rất thích. Xung đột gay gắt hơn với kỳ hạn DÀI, còn giao ước hạn chế đòn bẩy do CHỦ NỢ áp đặt."
 },
 {
  "q": "Which market structure most likely has the greatest elasticity of demand?",
  "opts": [
   "Oligopoly",
   "Perfect competition",
   "Monopolistic competition"
  ],
  "ans": 1,
  "en": "The perfectly competitive firm faces a PERFECTLY elastic (horizontal) demand curve — identical substitutes make any price above market lose all sales.",
  "vi": "Công ty cạnh tranh hoàn hảo đối mặt đường cầu co giãn HOÀN TOÀN (nằm ngang) — hàng thay thế y hệt khiến giá cao hơn thị trường một chút là mất sạch doanh số."
 },
 {
  "q": "Which of the following is an assumption of Modigliani and Miller's propositions regarding capital structure?",
  "opts": [
   "Investors have homogeneous expectations",
   "Investors can borrow and lend at a zero interest rate",
   "Financing decisions depend on investment decisions"
  ],
  "ans": 0,
  "en": "MM assumes homogeneous expectations, perfect markets, borrowing at the RISK-FREE rate (not zero), and INDEPENDENCE of financing and investment decisions.",
  "vi": "MM giả định kỳ vọng đồng nhất, thị trường hoàn hảo, vay ở lãi suất PHI RỦI RO (không phải 0), và quyết định tài trợ ĐỘC LẬP với quyết định đầu tư."
 },
 {
  "q": "In geopolitics, cabotage is best described as a:",
  "opts": [
   "Financial tool",
   "Multi-tool approach",
   "National security tool"
  ],
  "ans": 2,
  "en": "Cabotage — restricting domestic transport routes to domestic carriers — is a national security tool in the geopolitical toolkit.",
  "vi": "Cabotage — giới hạn tuyến vận tải nội địa cho hãng trong nước — là công cụ an ninh quốc gia trong bộ công cụ địa chính trị."
 },
 {
  "q": "A policy rate that is neutral will become CONTRACTIONARY if trend growth:",
  "opts": [
   "Increases and expected inflation increases",
   "Decreases and expected inflation remains the same",
   "Decreases and expected inflation increases by the same amount"
  ],
  "ans": 1,
  "en": "Neutral rate = trend growth + expected inflation. If trend growth falls with inflation unchanged, the neutral rate drops BELOW the standing policy rate — the same rate now restrains.",
  "vi": "Lãi suất trung tính = tăng trưởng xu hướng + lạm phát kỳ vọng. Nếu tăng trưởng xu hướng giảm mà lạm phát giữ nguyên, mức trung tính rơi XUỐNG DƯỚI lãi suất chính sách hiện hành — cùng mức lãi đó giờ thành thắt chặt."
 },
 {
  "q": "A 3-year construction contract: price €108m, expected total costs €70m, Year 1 costs €28m, on-time completion bonus €6m. Costs measure progress; the company has limited experience with similar contracts and delays are possible. Assuming it is highly probable that recognized revenue will not reverse, Year 1 revenue is most likely:",
  "opts": [
   "€0",
   "€43.2",
   "€45.6"
  ],
  "ans": 1,
  "en": "Progress = 28/70 = 40%. The €6m bonus is variable consideration that fails the \"highly probable no reversal\" test (limited experience, delay risk) — exclude it: 40% × 108 = €43.2m.",
  "vi": "Tiến độ = 28/70 = 40%. Khoản thưởng €6tr là khoản thanh toán biến đổi không qua được phép thử \"rất khó đảo ngược\" (ít kinh nghiệm, rủi ro trễ hạn) — loại ra: 40% × 108 = €43,2tr."
 },
 {
  "q": "The amount of time from when a company invests in working capital until it collects cash is the:",
  "opts": [
   "Net operating cycle",
   "Defensive interval ratio",
   "Number of days of sales outstanding"
  ],
  "ans": 0,
  "en": "That span — pay for inputs, hold inventory, collect receivables, net of payables financing — is the net operating (cash conversion) cycle. DSO is only one slice of it.",
  "vi": "Khoảng đó — trả tiền đầu vào, giữ tồn kho, thu tiền phải thu, trừ phần được nhà cung cấp tài trợ — là chu kỳ hoạt động ròng (chu kỳ chuyển đổi tiền). DSO chỉ là một lát cắt."
 },
 {
  "q": "In the recovery phase of the business cycle, the economy is most likely:",
  "opts": [
   "Enjoying an upswing and a positive output gap opens",
   "Going through a trough and a positive output gap opens",
   "Going through a trough and a negative output gap starts to narrow"
  ],
  "ans": 2,
  "en": "Recovery = the economy turns at the trough while actual output still sits BELOW potential — the negative output gap begins narrowing, not yet positive.",
  "vi": "Recovery = nền kinh tế đảo chiều tại đáy trong khi sản lượng thực còn DƯỚI tiềm năng — khoảng cách sản lượng âm bắt đầu thu hẹp, chưa chuyển dương."
 },
 {
  "q": "In periods of rising prices and increasing inventory quantities, using LIFO instead of FIFO most likely increases:",
  "opts": [
   "Total assets",
   "Cost of goods sold",
   "Days of inventory on hand"
  ],
  "ans": 1,
  "en": "LIFO expenses the newest, most expensive units first → higher COGS, lower inventory (lower assets) and fewer days of inventory on hand.",
  "vi": "LIFO đưa các đơn vị mới nhất, đắt nhất vào giá vốn trước → COGS cao hơn, tồn kho thấp hơn (tài sản thấp hơn) và số ngày tồn kho ít hơn."
 },
 {
  "q": "Risks associated with supplier relationships are typically mitigated through:",
  "opts": [
   "Contracts",
   "Regulation",
   "Board representation"
  ],
  "ans": 0,
  "en": "Supplier relationships are contractual: terms, quality clauses, and penalties manage the risk. Regulation governs broader conduct, and board seats belong to shareholders.",
  "vi": "Quan hệ nhà cung cấp mang tính hợp đồng: điều khoản, cam kết chất lượng, chế tài quản trị rủi ro. Luật lệ điều chỉnh hành vi rộng hơn, còn ghế HĐQT thuộc về cổ đông."
 },
 {
  "q": "An increase in utility for a company's products as the products become more widely adopted best describes:",
  "opts": [
   "Network effects",
   "Operating leverage",
   "Product differentiation"
  ],
  "ans": 0,
  "en": "Each new user makes the product more valuable to every other user — the network effect (think payment platforms, marketplaces).",
  "vi": "Mỗi người dùng mới khiến sản phẩm giá trị hơn với mọi người dùng khác — hiệu ứng mạng lưới (nghĩ đến nền tảng thanh toán, sàn giao dịch)."
 },
 {
  "q": "If inventory written down in a previous period subsequently increases in value, the original write-down can be reversed under:",
  "opts": [
   "IFRS only",
   "US GAAP only",
   "Both IFRS and US GAAP"
  ],
  "ans": 0,
  "en": "IFRS permits reversal up to the original write-down; US GAAP treats the written-down value as the new cost basis — no reversal, ever.",
  "vi": "IFRS cho hoàn nhập tối đa bằng mức ghi giảm gốc; US GAAP coi giá trị sau ghi giảm là giá gốc mới — không bao giờ hoàn nhập."
 },
 {
  "q": "A cooperative country is most likely to have characteristics of both:",
  "opts": [
   "Technology exchange and retaliation",
   "Rules standardization and reciprocation",
   "Harmonization of tariffs and arbitrary rules"
  ],
  "ans": 1,
  "en": "Cooperation shows up as standardized rules plus reciprocal exchange (goods, information, technology). Retaliation and arbitrary rule-making are hallmarks of NON-cooperation.",
  "vi": "Hợp tác thể hiện qua chuẩn hóa luật chơi cộng trao đổi có đi có lại (hàng hóa, thông tin, công nghệ). Trả đũa và luật lệ tùy tiện là dấu hiệu của BẤT hợp tác."
 },
 {
  "q": "All else equal, if interest expense is NOT tax deductible, as a company's marginal tax rate increases, the company's WACC:",
  "opts": [
   "Decreases",
   "Remains the same",
   "Increases"
  ],
  "ans": 1,
  "en": "The (1 − t) shield exists only because interest is deductible. Remove deductibility and the tax rate drops out of the WACC formula entirely — nothing moves.",
  "vi": "Lá chắn (1 − t) tồn tại chỉ vì lãi vay được khấu trừ. Bỏ tính khấu trừ thì thuế suất biến mất khỏi công thức WACC — không gì thay đổi."
 },
 {
  "q": "Twenty items in ascending order: −41, −18, −17, −9, −8, −6, −5, 3, 3, 3, 5, 5, 7, 7, 11, 12, 20, 21, 21, 61. The median is closest to:",
  "opts": [
   "3",
   "4",
   "5"
  ],
  "ans": 1,
  "en": "Even count → average the 10th and 11th values: (3 + 5)/2 = 4.",
  "vi": "Số quan sát chẵn → trung bình giá trị thứ 10 và 11: (3 + 5)/2 = 4."
 },
 {
  "q": "A company forecasts 10% organic revenue growth with sales volume growing 6.4%. The forecast price/mix impact is closest to:",
  "opts": [
   "3.4%",
   "17.0%",
   "56.3%"
  ],
  "ans": 0,
  "en": "Growth components compound: (1.10)/(1.064) − 1 = 3.4%. Simple subtraction (3.6%) overstates it slightly.",
  "vi": "Các cấu phần tăng trưởng nhân lũy kế: (1,10)/(1,064) − 1 = 3,4%. Trừ đơn thuần (3,6%) hơi phóng đại."
 },
 {
  "q": "The term Big Data refers to:",
  "opts": [
   "Structured data only",
   "Unstructured data only",
   "Both structured and unstructured data"
  ],
  "ans": 2,
  "en": "Big Data spans traditional structured records AND unstructured text, images, and sensor feeds — volume, velocity, and variety.",
  "vi": "Big Data bao trùm dữ liệu có cấu trúc truyền thống VÀ văn bản, hình ảnh, cảm biến phi cấu trúc — khối lượng, tốc độ, và độ đa dạng."
 },
 {
  "q": "Which best describes the link between the cash flow statement and the balance sheet?",
  "opts": [
   "The cash flow statement reconciles changes in all balance sheet accounts",
   "The investing section reconciles the changes in current assets",
   "The cash flow statement reconciles the beginning and ending balances of cash on the balance sheet"
  ],
  "ans": 2,
  "en": "The statement's whole purpose: explain how the balance sheet's opening cash became its closing cash through operating, investing, and financing flows.",
  "vi": "Toàn bộ mục đích của báo cáo: giải thích tiền đầu kỳ trên bảng cân đối biến thành tiền cuối kỳ ra sao qua các dòng hoạt động, đầu tư, tài trợ."
 },
 {
  "q": "Assuming no retaliation, which condition must hold for a LARGE country to increase national welfare by imposing a tariff?",
  "opts": [
   "It must have a comparative advantage in producing the imported good",
   "The deadweight loss must be smaller than the benefit of its improving terms of trade",
   "It must auction the import licenses to offset the decline in consumer surplus"
  ],
  "ans": 1,
  "en": "A large importer can push world prices down — a terms-of-trade gain. Welfare rises only if that gain outweighs the tariff's deadweight losses.",
  "vi": "Nước nhập khẩu lớn có thể ép giá thế giới xuống — lợi ích điều kiện thương mại. Phúc lợi chỉ tăng nếu lợi ích đó lớn hơn tổn thất vô ích của thuế quan."
 },
 {
  "q": "An analyst estimates the probabilities of three economic scenarios and, within each, the probabilities of a stock having a positive or negative return. These are best represented by a:",
  "opts": [
   "Tree-map",
   "Tree diagram",
   "Probability density function"
  ],
  "ans": 1,
  "en": "Sequential conditional outcomes — scenario first, return outcome second — branch naturally into a tree diagram. A tree-MAP is a data-visualization rectangle chart, a different animal.",
  "vi": "Kết cục có điều kiện theo trình tự — kịch bản trước, kết quả lợi nhuận sau — phân nhánh tự nhiên thành tree diagram. Tree-MAP là biểu đồ ô chữ nhật trong trực quan hóa dữ liệu, một loài khác hẳn."
 },
 {
  "q": "An inflation-targeting central bank most likely has a medium-term inflation target sufficiently:",
  "opts": [
   "Below zero to avoid deflation risk but high enough to ensure price stability",
   "Above zero to avoid deflation risk but low enough to ensure price stability",
   "Above zero to avoid inflation risk and high enough to ensure price stability"
  ],
  "ans": 1,
  "en": "The target sits modestly ABOVE zero — a buffer against deflation — yet LOW enough (typically ~2%) to preserve price stability.",
  "vi": "Mục tiêu đặt hơi TRÊN mức 0 — vùng đệm chống giảm phát — nhưng đủ THẤP (thường ~2%) để giữ ổn định giá."
 },
 {
  "q": "Assuming wages and prices are stable, which policy combination most likely leads to an INCREASE in the private sector's share of GDP?",
  "opts": [
   "Easy fiscal and easy monetary policy",
   "Tight fiscal and easy monetary policy",
   "Easy fiscal and tight monetary policy"
  ],
  "ans": 1,
  "en": "Tight fiscal shrinks the government's slice; easy money fuels private borrowing and spending — the composition shifts toward the private sector.",
  "vi": "Tài khóa chặt thu nhỏ phần của chính phủ; tiền tệ lỏng tiếp sức vay mượn và chi tiêu tư nhân — cơ cấu dịch về phía khu vực tư."
 },
 {
  "q": "Account 1: 6.1% compounded daily. Account 2: 6.3% compounded annually. Account 3: 6.2% compounded quarterly. For a $1,000 deposit today, the future value in one year is greatest for:",
  "opts": [
   "Account 1",
   "Account 2",
   "Account 3"
  ],
  "ans": 2,
  "en": "Compare effective annual rates: A1 = (1 + 0.061/365)³⁶⁵ − 1 = 6.29%; A2 = 6.30%; A3 = (1 + 0.062/4)⁴ − 1 = 6.35%. Account 3 wins — frequency helps, but the stated rate matters too.",
  "vi": "So lãi suất hiệu dụng năm: A1 = (1 + 0,061/365)³⁶⁵ − 1 = 6,29%; A2 = 6,30%; A3 = (1 + 0,062/4)⁴ − 1 = 6,35%. Account 3 thắng — tần suất ghép giúp ích, nhưng lãi suất danh nghĩa cũng quan trọng."
 },
 {
  "q": "At year end, a company has non-convertible debt, ordinary shares, and employee stock options outstanding. The company's capital structure is considered to be:",
  "opts": [
   "Simple, if the options are antidilutive",
   "Complex, because the company has both debt and equity",
   "Complex, because the options are convertible into ordinary shares"
  ],
  "ans": 2,
  "en": "A complex structure is defined by POTENTIALLY dilutive securities — options that can convert into ordinary shares. Plain debt-plus-equity alone stays simple.",
  "vi": "Cấu trúc phức tạp được định nghĩa bằng chứng khoán CÓ KHẢ NĂNG pha loãng — quyền chọn có thể chuyển thành cổ phiếu phổ thông. Chỉ nợ cộng vốn chủ thông thường vẫn là cấu trúc đơn giản."
 },
 {
  "q": "Which is most likely to signal manipulation of financial reporting for a large, diversified company?",
  "opts": [
   "A history of large expense items classified as unusual",
   "Operating margins out of line with other diversified companies",
   "Changes in accounting policies to reflect new accounting standards"
  ],
  "ans": 1,
  "en": "Peer-defying margins with no economic story are a classic red flag. Repeated \"unusual\" items warrant scrutiny but standard-driven policy changes are legitimate; the peer-margin anomaly ranks first for a diversified firm.",
  "vi": "Biên lợi nhuận lệch hẳn khỏi các công ty cùng nhóm mà không có câu chuyện kinh tế là cờ đỏ kinh điển. Khoản mục \"bất thường\" lặp lại đáng soi nhưng đổi chính sách theo chuẩn mực mới là hợp lệ; bất thường biên so với peers đứng đầu với công ty đa ngành."
 },
 {
  "q": "According to capital allocation principles, managers should ignore:",
  "opts": [
   "Taxes",
   "The volatility of cash flows",
   "Expenses that were already incurred"
  ],
  "ans": 2,
  "en": "Sunk costs are unrecoverable and irrelevant to forward-looking decisions. Taxes and cash-flow risk very much belong in the analysis.",
  "vi": "Chi phí chìm không thể thu hồi và không liên quan đến quyết định hướng tương lai. Thuế và độ biến động dòng tiền thì rất cần trong phân tích."
 },
 {
  "q": "An individual invests $50,000 today and receives $56,000 in one year. If her required rate of return is 12.0%, the rate of return on the investment is:",
  "opts": [
   "Less than the required rate of return",
   "Equal to the required rate of return",
   "Greater than the required rate of return"
  ],
  "ans": 1,
  "en": "Return = 56,000/50,000 − 1 = 12.0% — exactly the required rate.",
  "vi": "Lợi suất = 56.000/50.000 − 1 = 12,0% — đúng bằng mức yêu cầu."
 },
 {
  "q": "The entire cost of an intangible asset is most likely expensed when incurred if the asset is:",
  "opts": [
   "Developed internally",
   "Acquired through business combinations",
   "Purchased in a transaction other than a business combination"
  ],
  "ans": 0,
  "en": "Internally developed intangibles are generally expensed (research always; development too under US GAAP, and under IFRS unless strict criteria are met). Purchased and acquired intangibles are capitalized at cost or fair value.",
  "vi": "Tài sản vô hình tự phát triển nhìn chung ghi vào chi phí (nghiên cứu luôn luôn; phát triển cũng vậy theo US GAAP, và theo IFRS trừ khi đạt tiêu chí nghiêm ngặt). Tài sản mua và tài sản nhận qua hợp nhất được vốn hóa theo giá gốc hoặc giá trị hợp lý."
 },
 {
  "q": "An argument FOR a country's high national debt relative to GDP being a concern is when the debt:",
  "opts": [
   "Is owed to domestic citizens",
   "Is used for capital investments",
   "Reduces private sector investing"
  ],
  "ans": 2,
  "en": "Crowding out — government borrowing displacing private investment — is the genuine worry. Internally held debt and debt funding productive capital are the counter-arguments.",
  "vi": "Chèn lấn — vay nợ chính phủ đẩy lùi đầu tư tư nhân — là mối lo thực sự. Nợ do dân trong nước nắm và nợ tài trợ đầu tư sản xuất là các lập luận phản bác."
 },
 {
  "q": "Days of inventory / days sales outstanding / days of payables — Company 1: 45/30/25; Company 2: 62/45/60; Company 3: 50/53/48. The company with the SHORTEST cash conversion cycle is:",
  "opts": [
   "Company 1",
   "Company 2",
   "Company 3"
  ],
  "ans": 1,
  "en": "CCC = DOH + DSO − DPO: C1 = 45 + 30 − 25 = 50; C2 = 62 + 45 − 60 = 47; C3 = 50 + 53 − 48 = 55. Company 2's generous payables financing wins it the shortest cycle.",
  "vi": "CCC = DOH + DSO − DPO: C1 = 45 + 30 − 25 = 50; C2 = 62 + 45 − 60 = 47; C3 = 50 + 53 − 48 = 55. Nguồn tài trợ dồi dào từ phải trả giúp Company 2 có chu kỳ ngắn nhất."
 },
 {
  "q": "Which factor is most likely to lead to economies of scale?",
  "opts": [
   "Supply constraints",
   "Duplication of product lines",
   "Specialization by workers"
  ],
  "ans": 2,
  "en": "Larger scale lets labor and management specialize, cutting cost per unit. Supply constraints and duplicated lines push costs the other way (diseconomies).",
  "vi": "Quy mô lớn hơn cho phép lao động và quản lý chuyên môn hóa, hạ chi phí mỗi đơn vị. Ràng buộc nguồn cung và trùng lặp dòng sản phẩm đẩy chi phí theo chiều ngược lại (bất lợi quy mô)."
 },
 {
  "q": "Current assets (€ thousands): cash 300, short-term marketable investments 400, receivables 100, inventory 200. If the current ratio is 1.0, the quick ratio is:",
  "opts": [
   "0.7",
   "0.8",
   "0.9"
  ],
  "ans": 1,
  "en": "Current ratio 1.0 → current liabilities = total current assets = 1,000. Quick = (300 + 400 + 100)/1,000 = 0.8 — inventory drops out.",
  "vi": "Current ratio 1,0 → nợ ngắn hạn = tổng tài sản ngắn hạn = 1.000. Quick = (300 + 400 + 100)/1.000 = 0,8 — tồn kho bị loại."
 },
 {
  "q": "The bootstrap resampling method:",
  "opts": [
   "Guarantees that all items will appear in the resamples",
   "Relies on an analytical formula to estimate the distribution of the estimators",
   "Mimics the random sampling process by treating the randomly drawn sample as if it were the population"
  ],
  "ans": 2,
  "en": "Bootstrap resamples WITH replacement from the observed sample, treating it as a stand-in population — no formula, and no guarantee every item appears.",
  "vi": "Bootstrap rút mẫu CÓ hoàn lại từ mẫu quan sát, coi nó như tổng thể thay thế — không cần công thức, và không bảo đảm mọi phần tử đều xuất hiện."
 },
 {
  "q": "Percentage increases: real USD/EUR exchange rate +5%; Eurozone price level +2%; US price level +1.5%. The predicted change in the nominal USD/EUR spot rate is closest to:",
  "opts": [
   "−0.5%",
   "4.5%",
   "5.5%"
  ],
  "ans": 1,
  "en": "Real = nominal × P_f/P_d → %Δnominal ≈ %Δreal + π_domestic − π_foreign = 5 + 1.5 − 2 = 4.5%.",
  "vi": "Real = nominal × P_f/P_d → %Δnominal ≈ %Δreal + π_trong nước − π_nước ngoài = 5 + 1,5 − 2 = 4,5%."
 },
 {
  "q": "A company is PROHIBITED from reversing an impairment loss on a long-lived asset classified as:",
  "opts": [
   "Held for use under IFRS",
   "Held for use under US GAAP",
   "Held for sale under US GAAP"
  ],
  "ans": 1,
  "en": "US GAAP bars reversals for held-for-USE assets. IFRS permits reversals generally, and even US GAAP allows recovery (up to the original loss) for held-for-SALE assets.",
  "vi": "US GAAP cấm hoàn nhập với tài sản giữ để SỬ DỤNG. IFRS cho hoàn nhập nói chung, và ngay cả US GAAP cũng cho phục hồi (tối đa bằng khoản lỗ gốc) với tài sản giữ để BÁN."
 },
 {
  "q": "Unaudited financial statements are most likely presented in a(n):",
  "opts": [
   "Annual report",
   "Quarterly report",
   "Proxy statement"
  ],
  "ans": 1,
  "en": "Interim (quarterly/semiannual) statements are typically unaudited; annual statements carry the auditor's opinion, and proxy statements are governance documents.",
  "vi": "Báo cáo giữa kỳ (quý/bán niên) thường không kiểm toán; báo cáo năm mang ý kiến kiểm toán viên, còn proxy statement là tài liệu quản trị."
 },
 {
  "q": "From a corporate issuer's perspective, a benefit of issuing debt rather than equity is that debt is most likely:",
  "opts": [
   "Cheaper",
   "Less risky",
   "More permanent"
  ],
  "ans": 0,
  "en": "Debt's contractual priority and tax-deductible interest make it the cheaper capital. For the ISSUER it is riskier (default risk) and temporary (it matures) — equity is the permanent capital.",
  "vi": "Thứ tự ưu tiên theo hợp đồng và lãi vay được khấu trừ thuế khiến nợ là nguồn vốn rẻ hơn. Với TỔ CHỨC PHÁT HÀNH nợ rủi ro hơn (rủi ro vỡ nợ) và tạm thời (có đáo hạn) — vốn chủ mới là vốn vĩnh viễn."
 },
 {
  "q": "Compared with its net income, a mature company's operating cash flow is most likely:",
  "opts": [
   "Lower",
   "The same",
   "Higher"
  ],
  "ans": 2,
  "en": "Adding back depreciation and other non-cash charges typically lifts CFO above net income for mature firms with stable working capital.",
  "vi": "Cộng ngược khấu hao và các khoản phi tiền mặt thường đưa CFO lên trên lợi nhuận ròng ở công ty trưởng thành có vốn lưu động ổn định."
 },
 {
  "q": "In hypothesis testing, which of the following is stated in terms of POPULATION parameters?",
  "opts": [
   "The null hypothesis only",
   "The alternative hypothesis only",
   "Both the null and the alternative hypothesis"
  ],
  "ans": 2,
  "en": "Both H₀ and Hₐ are claims about population parameters (μ, σ², ρ…); sample statistics only supply the evidence to choose between them.",
  "vi": "Cả H₀ và Hₐ đều là mệnh đề về tham số tổng thể (μ, σ², ρ…); thống kê mẫu chỉ cung cấp bằng chứng để lựa chọn giữa hai bên."
 },
 {
  "q": "Year-end data (£m): receivables 55 → 65; inventory 140 → 120; PP&E 1,400 → 1,400; accumulated depreciation 80 → 120; payables 40 → 25. Year 2 net income £860m, no PP&E purchases/sales, no write-downs. Cash flow from operating activities for Year 2 is:",
  "opts": [
   "£855",
   "£895",
   "£925"
  ],
  "ans": 1,
  "en": "CFO = 860 + depreciation 40 (120 − 80) − ΔAR 10 + ΔInv 20 − ΔAP 15 = £895m. Receivables up consumes cash; inventory down and depreciation give it back; payables down consumes it.",
  "vi": "CFO = 860 + khấu hao 40 (120 − 80) − ΔPhải thu 10 + ΔTồn kho 20 − ΔPhải trả 15 = £895tr. Phải thu tăng ngốn tiền; tồn kho giảm và khấu hao trả lại; phải trả giảm ngốn tiền."
 },
 {
  "q": "Costs incurred during the development phase related to internally generated, identifiable intangible assets:",
  "opts": [
   "Must be expensed",
   "Must be capitalized",
   "Can be capitalized if certain criteria are met"
  ],
  "ans": 2,
  "en": "Under IFRS, development costs are capitalized once technical feasibility, intent, ability to sell/use, and reliable measurement are demonstrated — conditional, not automatic.",
  "vi": "Theo IFRS, chi phí phát triển được vốn hóa khi chứng minh được tính khả thi kỹ thuật, ý định, khả năng bán/sử dụng và đo lường tin cậy — có điều kiện, không tự động."
 },
 {
  "q": "A simple linear regression uses 35 months of data. ANOVA: regression SS = 17.3009 (df 1); error SS = 20.2299 (df 33); mean square error = 0.6130. The standard error of the estimate is closest to:",
  "opts": [
   "0.68",
   "0.78",
   "1.05"
  ],
  "ans": 1,
  "en": "SEE = √MSE = √0.6130 = 0.78 — the square root of the error mean square, directly off the ANOVA table.",
  "vi": "SEE = √MSE = √0,6130 = 0,78 — căn bậc hai của trung bình bình phương sai số, lấy thẳng từ bảng ANOVA."
 },
 {
  "q": "If the cost of capital exceeds the return on invested capital, shareholder value will:",
  "opts": [
   "Decrease",
   "Remain the same",
   "Increase"
  ],
  "ans": 0,
  "en": "ROIC < cost of capital means every dollar invested earns less than it costs — growth under these conditions destroys value.",
  "vi": "ROIC < chi phí vốn nghĩa là mỗi đồng đầu tư sinh lời ít hơn chi phí của nó — tăng trưởng trong điều kiện này phá hủy giá trị."
 },
 {
  "q": "Electronics manufacturer (€ thousands) — cost of sales: Y1 = 800, Y2 = 1,000; ending inventory cost: Y1 = 120, Y2 = 150; NRV of inventory: Y1 = 160, Y2 = 125. Obsolescence allowances are already in cost of sales. Days of inventory on hand for Year 2 (average inventory, 365 days) is closest to:",
  "opts": [
   "45",
   "49",
   "52"
  ],
  "ans": 0,
  "en": "Carry each year at the lower of cost and NRV: Y1 = min(120, 160) = 120; Y2 = min(150, 125) = 125. Average = 122.5 → DOH = 122.5/1,000 × 365 = 44.7 ≈ 45.",
  "vi": "Ghi mỗi năm theo mức thấp hơn giữa giá gốc và NRV: N1 = min(120, 160) = 120; N2 = min(150, 125) = 125. Bình quân = 122,5 → DOH = 122,5/1.000 × 365 = 44,7 ≈ 45."
 },
 {
  "q": "The effectiveness of infrastructure spending as a NEAR-TERM fiscal stimulant would be LEAST constrained by the:",
  "opts": [
   "Action lag",
   "Impact lag",
   "Recognition lag"
  ],
  "ans": 2,
  "en": "Infrastructure's bottlenecks are the action lag (legislation, planning) and impact lag (construction takes years). The recognition lag — spotting the need for stimulus — afflicts all tools equally and binds infrastructure least.",
  "vi": "Nút thắt của đầu tư hạ tầng là độ trễ hành động (lập pháp, quy hoạch) và độ trễ tác động (xây dựng mất nhiều năm). Độ trễ nhận biết — phát hiện nhu cầu kích thích — ảnh hưởng mọi công cụ như nhau và trói hạ tầng ít nhất."
 },
 {
  "q": "Land under the revaluation model: original cost €12m; first revaluation €17m (end of Year 1); second revaluation €12m (end of Year 2). As a result of the second revaluation, the company recognizes in Year 2:",
  "opts": [
   "A €5 million loss on the income statement",
   "A €5 million loss in other comprehensive income",
   "Neither a loss on the income statement nor a loss in OCI"
  ],
  "ans": 1,
  "en": "The first revaluation parked a €5m surplus in OCI. The €5m decline exactly unwinds that surplus through OCI — the income statement is touched only if value falls BELOW original cost.",
  "vi": "Lần đánh giá lại đầu gửi €5tr thặng dư vào OCI. Cú giảm €5tr tháo đúng khoản thặng dư đó qua OCI — báo cáo lãi lỗ chỉ bị chạm khi giá trị rơi XUỐNG DƯỚI giá gốc."
 },
 {
  "q": "The goal of ordinary least squares regression is to minimize the sum of squared deviations between the observations of the dependent variable and the corresponding:",
  "opts": [
   "Estimated values of the dependent variable",
   "Observed values of the independent variable",
   "Values of the true underlying dependent variable"
  ],
  "ans": 0,
  "en": "OLS minimizes Σ(y − ŷ)² — observed Y against the FITTED (estimated) Y from the regression line.",
  "vi": "OLS cực tiểu hóa Σ(y − ŷ)² — Y quan sát so với Y ƯỚC LƯỢNG từ đường hồi quy."
 },
 {
  "q": "Which is most likely a motivation for LEASING a high-value asset long term rather than purchasing it?",
  "opts": [
   "Reduced exposure to obsolescence risk",
   "Not having to recognize an asset on the balance sheet",
   "Not having to recognize a liability on the balance sheet"
  ],
  "ans": 0,
  "en": "The lessor keeps the residual-value and obsolescence risk — a real economic motive. Under current standards, long-term leases put BOTH a right-of-use asset and a lease liability on the balance sheet, killing the old off-balance-sheet motives.",
  "vi": "Bên cho thuê gánh rủi ro giá trị còn lại và lỗi thời — một động cơ kinh tế thực. Theo chuẩn mực hiện hành, thuê dài hạn đưa CẢ tài sản quyền sử dụng lẫn nợ thuê lên bảng cân đối, xóa sổ động cơ ngoại bảng ngày xưa."
 },
 {
  "q": "The most appropriate statement about financial ratio analysis is that it has LIMITED use as an analytical tool for:",
  "opts": [
   "Evaluating management",
   "Comparing companies that use different accounting methods",
   "Providing insights into microeconomic relationships within a company that help analysts project earnings"
  ],
  "ans": 1,
  "en": "Different accounting choices (LIFO vs FIFO, revaluation vs cost…) distort cross-company ratios unless adjusted — the classic limitation. Evaluating management and projecting earnings are ratio analysis's strengths.",
  "vi": "Lựa chọn kế toán khác nhau (LIFO/FIFO, đánh giá lại/giá gốc…) làm méo tỷ số giữa các công ty nếu không điều chỉnh — hạn chế kinh điển. Đánh giá ban điều hành và dự phóng lợi nhuận là thế mạnh của phân tích tỷ số."
 },
 {
  "q": "Which could result in a PERMANENT difference between accounting profit and taxable income?",
  "opts": [
   "Used tax credits",
   "A tax loss carryforward",
   "Differences between carrying amount and tax base due to different depreciation methods"
  ],
  "ans": 0,
  "en": "Tax credits permanently change tax owed without ever reversing. Loss carryforwards create deferred tax assets, and depreciation differences are temporary — they reverse over the asset's life.",
  "vi": "Tín dụng thuế thay đổi vĩnh viễn số thuế phải nộp và không bao giờ hoàn nghịch. Lỗ chuyển sang tạo tài sản thuế hoãn lại, còn chênh lệch khấu hao là tạm thời — sẽ hoàn nghịch qua đời tài sản."
 },
 {
  "q": "EUR/USD spot 0.9876 (EUR per 1 USD); 180-day USD risk-free rate 1.00%; 180-day EUR risk-free rate 1.20%. The 180-day EUR/USD forward rate is closest to:",
  "opts": [
   "0.98662",
   "0.98858",
   "0.98956"
  ],
  "ans": 1,
  "en": "F = S × (1 + i_price × 180/360)/(1 + i_base × 180/360) = 0.9876 × 1.006/1.005 = 0.98858 — EUR is the price currency, USD the base.",
  "vi": "F = S × (1 + i_định giá × 180/360)/(1 + i_cơ sở × 180/360) = 0,9876 × 1,006/1,005 = 0,98858 — EUR là đồng định giá, USD là đồng cơ sở."
 },
 {
  "q": "The static trade-off theory of capital structure most likely considers:",
  "opts": [
   "Agency costs of equity",
   "Information asymmetry",
   "The tax shield provided by debt"
  ],
  "ans": 2,
  "en": "Static trade-off balances debt's tax shield against expected financial distress costs. Agency and information stories belong to other capital-structure theories (agency theory, pecking order).",
  "vi": "Lý thuyết đánh đổi tĩnh cân bằng lá chắn thuế của nợ với chi phí kiệt quệ tài chính kỳ vọng. Câu chuyện đại diện và bất cân xứng thông tin thuộc các lý thuyết khác (agency, pecking order)."
 },
 {
  "q": "Which can be calculated from BALANCE SHEET information only?",
  "opts": [
   "Quick ratio",
   "Debt coverage",
   "Receivables turnover ratio"
  ],
  "ans": 0,
  "en": "Quick ratio = (cash + marketable securities + receivables)/current liabilities — all balance sheet lines. Debt coverage needs CFO; receivables turnover needs revenue.",
  "vi": "Quick ratio = (tiền + chứng khoán + phải thu)/nợ ngắn hạn — toàn khoản mục bảng cân đối. Debt coverage cần CFO; vòng quay phải thu cần doanh thu."
 },
 {
  "q": "Investment 1: 20 annual payments of $50,000 starting in one year. Investment 2: 25 annual payments of $45,000 starting today. Investment 3: annual payments of $40,000 indefinitely, starting today. At a 10% discount rate, the highest present value belongs to:",
  "opts": [
   "Investment 1",
   "Investment 2",
   "Investment 3"
  ],
  "ans": 1,
  "en": "PV₁ = 50,000 × [1 − 1.1⁻²⁰]/0.1 = 425,678. PV₂ (annuity due) = 45,000 × [1 − 1.1⁻²⁵]/0.1 × 1.1 = 449,312. PV₃ (perpetuity due) = 40,000 + 40,000/0.1 = 440,000. Investment 2 wins.",
  "vi": "PV₁ = 50.000 × [1 − 1,1⁻²⁰]/0,1 = 425.678. PV₂ (niên kim đầu kỳ) = 45.000 × [1 − 1,1⁻²⁵]/0,1 × 1,1 = 449.312. PV₃ (vĩnh viễn đầu kỳ) = 40.000 + 40.000/0,1 = 440.000. Investment 2 thắng."
 },
 {
  "q": "Which most likely has the greatest access to capital?",
  "opts": [
   "Corporation",
   "Limited partnership",
   "General partnership"
  ],
  "ans": 0,
  "en": "Corporations tap public equity and debt markets with unlimited investor pools and transferable shares — partnerships rely on far narrower private funding.",
  "vi": "Công ty cổ phần huy động trên thị trường cổ phiếu và trái phiếu đại chúng với lượng nhà đầu tư không giới hạn và cổ phần chuyển nhượng được — công ty hợp danh chỉ dựa vào nguồn vốn tư nhân hẹp hơn nhiều."
 },
 {
  "q": "Target weight of debt 25%, equity 75%; before-tax cost of debt 4%; cost of equity 12%; marginal tax rate 20%, interest deductible. The WACC is:",
  "opts": [
   "9.80%",
   "10.00%",
   "10.25%"
  ],
  "ans": 0,
  "en": "WACC = 0.25 × 4% × (1 − 0.20) + 0.75 × 12% = 0.80% + 9.00% = 9.80%.",
  "vi": "WACC = 0,25 × 4% × (1 − 0,20) + 0,75 × 12% = 0,80% + 9,00% = 9,80%."
 },
 {
  "q": "Earnings distribution: $100m with p = 0.25; $300m with p = 0.70; $600m with p = 0.05. The standard deviation of earnings is closest to:",
  "opts": [
   "$115 million",
   "$134 million",
   "$375 million"
  ],
  "ans": 0,
  "en": "E = 0.25(100) + 0.70(300) + 0.05(600) = 265. Var = 0.25(−165)² + 0.70(35)² + 0.05(335)² = 6,806 + 858 + 5,611 = 13,275 → σ = $115m.",
  "vi": "E = 0,25(100) + 0,70(300) + 0,05(600) = 265. Var = 0,25(−165)² + 0,70(35)² + 0,05(335)² = 6.806 + 858 + 5.611 = 13.275 → σ = $115tr."
 },
 {
  "q": "A security bought for ¥500,000 declines 10% over the first 3 months, then rises 9% over the next 3 months. The 6-month holding period return is closest to:",
  "opts": [
   "−1.9%",
   "−1.0%",
   "−0.5%"
  ],
  "ans": 0,
  "en": "Chain the sub-periods: (0.90)(1.09) − 1 = −1.9%. The −10% loss needs more than +9% to heal — the asymmetry of percentage losses.",
  "vi": "Nối chuỗi các kỳ con: (0,90)(1,09) − 1 = −1,9%. Khoản lỗ −10% cần hơn +9% mới lành — tính bất đối xứng của phần trăm lỗ."
 }
]
});
window.CFA.mocktests.push({
 name: "Mock Exam 2 — Session 2 (FI · Equity · Derivatives · Alternatives · PM)",
 qs: [
 {
  "q": "The price of a European call option is:",
  "opts": [
   "Directly related to the price of the underlying and inversely related to volatility",
   "Directly related to volatility of the underlying and inversely related to the dividend yield",
   "Directly related to the dividend yield and inversely related to the price of the underlying"
  ],
  "ans": 1,
  "en": "Calls rise with volatility (asymmetric payoff) and fall with dividend yield (payouts drain the underlying's forward value). They also rise with the underlying price — which is why A's second half kills it.",
  "vi": "Giá call tăng theo biến động (payoff bất đối xứng) và giảm theo tỷ suất cổ tức (chi trả rút bớt giá trị kỳ hạn của tài sản). Nó cũng tăng theo giá tài sản cơ sở — nên vế sau của phương án A sai."
 },
 {
  "q": "Annual spot rates: 1-year 1.0%; 2-year 1.1%; 3-year 1.3%. The arbitrage-free price of a 3% annual-pay, three-year bond is closest to:",
  "opts": [
   "104.99",
   "105.48",
   "107.62"
  ],
  "ans": 0,
  "en": "Discount each cash flow at its own spot rate: 3/1.01 + 3/1.011² + 103/1.013³ = 2.970 + 2.935 + 99.085 = 104.99.",
  "vi": "Chiết khấu từng dòng tiền theo đúng spot rate của nó: 3/1,01 + 3/1,011² + 103/1,013³ = 2,970 + 2,935 + 99,085 = 104,99."
 },
 {
  "q": "Which best describes an ABSOLUTE risk objective for a client's portfolio?",
  "opts": [
   "An annual tracking risk of less than 2 percent",
   "A twelve-month 95% value at risk of less than €1,000,000",
   "Maintaining at least €10,000 in cash for planned monthly withdrawals"
  ],
  "ans": 1,
  "en": "VaR caps risk in standalone terms — absolute. Tracking risk is measured RELATIVE to a benchmark, and the cash floor is a liquidity constraint, not a risk objective.",
  "vi": "VaR giới hạn rủi ro theo giá trị độc lập — tuyệt đối. Tracking risk đo TƯƠNG ĐỐI so với benchmark, còn mức tiền mặt tối thiểu là ràng buộc thanh khoản, không phải mục tiêu rủi ro."
 },
 {
  "q": "A mortgage pass-through's average life fell from five years to two years over the last six months. Investors most likely experienced:",
  "opts": [
   "Balloon risk",
   "Extension risk",
   "Contraction risk"
  ],
  "ans": 2,
  "en": "A shrinking average life means prepayments accelerated (rates likely fell) — contraction risk: principal returns sooner than expected, to be reinvested at lower rates.",
  "vi": "Đời bình quân co lại nghĩa là trả trước tăng tốc (lãi suất có lẽ đã giảm) — contraction risk: gốc quay về sớm hơn dự kiến, phải tái đầu tư ở lãi suất thấp hơn."
 },
 {
  "q": "All else equal, which would LOWER a company's sustainable growth rate?",
  "opts": [
   "An increased retention rate",
   "A decreased return on total assets",
   "An increased financial leverage ratio"
  ],
  "ans": 1,
  "en": "g = retention × ROE, and ROE = ROA × leverage. Lower ROA drags ROE and g down; higher retention or higher leverage would push g UP.",
  "vi": "g = tỷ lệ giữ lại × ROE, và ROE = ROA × đòn bẩy. ROA giảm kéo ROE và g xuống; tăng giữ lại hay tăng đòn bẩy sẽ đẩy g LÊN."
 },
 {
  "q": "Which statement about real estate investments is most accurate?",
  "opts": [
   "Investors in real estate limited partnerships are exposed to unlimited liability",
   "Free and clear ownership means that the property is unencumbered by a mortgage",
   "REITs are required to retain most of their taxable income for future capital expenditures"
  ],
  "ans": 1,
  "en": "Free and clear = full title with no mortgage lien. Limited partners enjoy LIMITED liability, and REITs must DISTRIBUTE (not retain) most taxable income to keep their tax status.",
  "vi": "Free and clear = sở hữu trọn vẹn không vướng thế chấp. Thành viên góp vốn hưởng trách nhiệm HỮU HẠN, còn REIT phải PHÂN PHỐI (không giữ lại) phần lớn thu nhập chịu thuế để giữ quy chế thuế."
 },
 {
  "q": "In the binomial model, if the probability of a downward movement in the underlying increases, the value of a call option:",
  "opts": [
   "Decreases",
   "Remains unchanged",
   "Increases"
  ],
  "ans": 1,
  "en": "Option values use RISK-NEUTRAL probabilities derived from u, d, and the risk-free rate — the real-world probability of a down move never enters the formula.",
  "vi": "Giá quyền chọn dùng xác suất TRUNG HÒA RỦI RO suy từ u, d và lãi suất phi rủi ro — xác suất thực tế của cú giảm không bao giờ vào công thức."
 },
 {
  "q": "Which is best classified as FINANCIAL risk?",
  "opts": [
   "Market risk",
   "Longevity risk",
   "Accounting risk"
  ],
  "ans": 0,
  "en": "The financial-risk family: market, credit, and liquidity risk. Longevity and accounting risks are non-financial.",
  "vi": "Họ rủi ro tài chính: rủi ro thị trường, tín dụng và thanh khoản. Rủi ro tuổi thọ và kế toán thuộc phi tài chính."
 },
 {
  "q": "For portfolio managers of ACTIVE funds, market indexes are LEAST useful as:",
  "opts": [
   "Benchmarks",
   "Model portfolios",
   "Proxies to measure risk-adjusted performance"
  ],
  "ans": 1,
  "en": "Copying an index as a model portfolio is passive management's use. Active managers still need indexes as benchmarks and as market proxies for beta and alpha calculations.",
  "vi": "Sao chép chỉ số làm danh mục mẫu là cách dùng của quản lý thụ động. Nhà quản lý chủ động vẫn cần chỉ số làm benchmark và làm đại diện thị trường để tính beta, alpha."
 },
 {
  "q": "Which is most likely an element of INDUSTRY AND COMPETITIVE analysis?",
  "opts": [
   "Analyzing market share trends",
   "Determining forecast objects and approaches",
   "Analyzing uses of capital and sources of financing"
  ],
  "ans": 0,
  "en": "Market share trends reveal competitive position within the industry. Forecast design belongs to the forecasting stage; capital uses and financing belong to company financial analysis.",
  "vi": "Xu hướng thị phần hé lộ vị thế cạnh tranh trong ngành. Thiết kế dự phóng thuộc bước dự báo; sử dụng vốn và nguồn tài trợ thuộc phân tích tài chính công ty."
 },
 {
  "q": "Duration is MOST accurate as a measure of interest rate risk for a bond portfolio when the slope of the yield curve:",
  "opts": [
   "Decreases",
   "Stays the same",
   "Increases"
  ],
  "ans": 1,
  "en": "Portfolio duration assumes parallel shifts. When the slope is preserved — all yields moving together — the duration estimate holds; flattening or steepening breaks it.",
  "vi": "Duration danh mục giả định dịch chuyển song song. Khi độ dốc được giữ nguyên — mọi lợi suất cùng dịch — ước tính duration đứng vững; phẳng hóa hay dốc hóa phá vỡ nó."
 },
 {
  "q": "Which most likely exhibits NEGATIVE convexity?",
  "opts": [
   "A callable bond",
   "A putable bond",
   "An option-free bond"
  ],
  "ans": 0,
  "en": "As yields fall toward the call price, the issuer's call option caps the upside — the price curve bends the wrong way. Putable and option-free bonds keep positive convexity.",
  "vi": "Khi lợi suất giảm về gần giá call, quyền mua lại của tổ chức phát hành chặn trần đà tăng giá — đường giá cong sai chiều. Trái phiếu putable và option-free giữ độ lồi dương."
 },
 {
  "q": "A security plotted to the RIGHT of the market portfolio on the security market line has a:",
  "opts": [
   "Lower expected return and lower systematic risk than the market",
   "Higher expected return and higher systematic risk than the market",
   "Higher expected return and higher unsystematic risk than the market"
  ],
  "ans": 1,
  "en": "The SML's x-axis is beta: right of the market means beta > 1 — more SYSTEMATIC risk and, on the line, a proportionally higher expected return.",
  "vi": "Trục hoành của SML là beta: bên phải thị trường nghĩa là beta > 1 — nhiều rủi ro HỆ THỐNG hơn và, nằm trên đường, lợi suất kỳ vọng cao hơn tương ứng."
 },
 {
  "q": "Emotional biases:",
  "opts": [
   "Stem from impulses and intuition",
   "Result in the same decisions as assumed by traditional finance theory",
   "Are more easily corrected through better information than cognitive biases"
  ],
  "ans": 0,
  "en": "Emotional biases spring from feeling and impulse, which is why information and education fix them LESS easily than cognitive errors — and both bias families pull decisions away from rational-theory outcomes.",
  "vi": "Thiên lệch cảm xúc bắt nguồn từ cảm giác và xung động, vì thế thông tin và giáo dục sửa chúng KHÓ hơn lỗi nhận thức — và cả hai họ thiên lệch đều kéo quyết định rời xa kết quả lý thuyết duy lý."
 },
 {
  "q": "Assuming no clawback provision, which waterfall is most advantageous to the GENERAL partner of a private equity fund?",
  "opts": [
   "American waterfall",
   "European waterfall",
   "Whole-of-fund waterfall"
  ],
  "ans": 0,
  "en": "The American (deal-by-deal) waterfall pays carry on each profitable exit immediately — earlier and larger GP cash flows. European/whole-of-fund waterfalls make the GP wait until LPs recover all capital.",
  "vi": "Waterfall kiểu Mỹ (theo từng thương vụ) trả carry ngay trên mỗi thương vụ thoái vốn có lãi — GP nhận tiền sớm và nhiều hơn. Kiểu châu Âu/toàn quỹ bắt GP chờ đến khi LP thu hồi đủ vốn."
 },
 {
  "q": "An investor buys a stock for $108 on margin, posting 40% of the initial price as equity. With a 20% maintenance margin, a margin call first occurs when the price falls below:",
  "opts": [
   "$64.80",
   "$81.00",
   "$86.40"
  ],
  "ans": 1,
  "en": "Debt per share = 0.60 × 108 = $64.80. Call when (P − 64.80)/P = 0.20 → 0.8P = 64.80 → P = $81.00.",
  "vi": "Nợ mỗi cổ phiếu = 0,60 × 108 = $64,80. Margin call khi (P − 64,80)/P = 0,20 → 0,8P = 64,80 → P = $81,00."
 },
 {
  "q": "Which derivative contract most likely requires an UPFRONT payment by the buyer at initiation?",
  "opts": [
   "Options only",
   "Forwards only",
   "Both options and forwards"
  ],
  "ans": 0,
  "en": "An option's asymmetric right costs a premium at inception. Forwards are priced so that value at initiation is zero — no money changes hands.",
  "vi": "Quyền bất đối xứng của option phải trả phí ngay lúc mở. Forward được định giá sao cho giá trị lúc khởi tạo bằng 0 — không ai trả tiền cho ai."
 },
 {
  "q": "Making a minority equity investment in a mature company that plans to expand operations best describes:",
  "opts": [
   "Growth capital investing",
   "Leveraged buyout investing",
   "Development capital investing"
  ],
  "ans": 0,
  "en": "Growth capital (growth equity) = minority stakes in mature companies funding expansion. LBOs take CONTROL with debt; the curriculum's label for this strategy is growth capital.",
  "vi": "Growth capital (growth equity) = cổ phần thiểu số trong công ty trưởng thành để tài trợ mở rộng. LBO nắm QUYỀN KIỂM SOÁT bằng nợ vay; giáo trình gọi chiến lược này là growth capital."
 },
 {
  "q": "Arbitrage is best described as an opportunity to earn:",
  "opts": [
   "Risk-free returns with no investment capital",
   "Risk-free returns with large amounts of investment capital",
   "Abnormal returns applying an absolute valuation methodology"
  ],
  "ans": 0,
  "en": "True arbitrage is self-financing: simultaneous buy-cheap/sell-dear positions that net zero outlay and lock in a riskless profit.",
  "vi": "Arbitrage đích thực tự tài trợ: mua rẻ/bán đắt đồng thời, tổng vốn bỏ ra bằng 0 và khóa chặt khoản lời phi rủi ro."
 },
 {
  "q": "Which transaction is most likely to affect a company's financial leverage ratio?",
  "opts": [
   "Payment of a 9% stock dividend",
   "An increase in cash dividends paid",
   "Completion of a 1-for-20 reverse stock split"
  ],
  "ans": 1,
  "en": "Cash out the door shrinks assets and equity by the same amount, raising assets/equity. Stock dividends and splits merely reshuffle share counts — totals untouched.",
  "vi": "Tiền mặt chảy ra làm giảm tài sản và vốn chủ cùng một lượng, đẩy tỷ số tài sản/vốn chủ lên. Cổ tức bằng cổ phiếu và chia tách chỉ xáo lại số cổ phần — các tổng số không đổi."
 },
 {
  "q": "All else equal, NON-CUMULATIVE preference shares most likely:",
  "opts": [
   "Offer dividends that are less than common shares",
   "Have a claim on net assets upon liquidation of the company",
   "Receive past unpaid dividends before dividends are paid to common shareholders"
  ],
  "ans": 1,
  "en": "All preference shares rank ahead of common on liquidation. Catching up on skipped dividends is the CUMULATIVE feature — precisely what non-cumulative shares lack.",
  "vi": "Mọi cổ phiếu ưu đãi đứng trước cổ phiếu thường khi thanh lý. Truy lĩnh cổ tức bị bỏ lỡ là đặc tính TÍCH LŨY — đúng thứ cổ phiếu không tích lũy thiếu."
 },
 {
  "q": "As one moves to the right along an investor's efficient frontier, a set increase in risk most likely leads to:",
  "opts": [
   "Sequentially smaller increases in expected return",
   "Consistent increases in expected return",
   "Sequentially larger increases in expected return"
  ],
  "ans": 0,
  "en": "The frontier is concave: each extra unit of risk buys less and less additional expected return — diminishing marginal reward.",
  "vi": "Đường biên hiệu quả lõm: mỗi đơn vị rủi ro thêm mua được ngày càng ít lợi suất kỳ vọng bổ sung — phần thưởng biên giảm dần."
 },
 {
  "q": "Risk-averse investors make investment decisions that maximize:",
  "opts": [
   "Both return and risk",
   "Return irrespective of risk",
   "Return for the same amount of risk"
  ],
  "ans": 2,
  "en": "Risk aversion means: among equal-risk choices, take the highest return (and among equal-return choices, the lowest risk).",
  "vi": "Ghét rủi ro nghĩa là: giữa các lựa chọn cùng mức rủi ro, chọn lợi suất cao nhất (và giữa các lựa chọn cùng lợi suất, chọn rủi ro thấp nhất)."
 },
 {
  "q": "Which factor most likely results in DIFFERENT credit ratings for debt issued by a subsidiary versus debt issued by its parent?",
  "opts": [
   "Differences in duration",
   "Structural subordination",
   "Cross-default provisions"
  ],
  "ans": 1,
  "en": "Structural subordination: the subsidiary's cash flows service ITS creditors first, leaving parent-level bondholders behind operating-company debt — hence different ratings. Cross-default provisions would pull ratings TOGETHER.",
  "vi": "Cấp dưới về cấu trúc: dòng tiền của công ty con phục vụ chủ nợ CỦA NÓ trước, đẩy trái chủ cấp công ty mẹ xuống sau nợ của công ty vận hành — nên xếp hạng khác nhau. Điều khoản vỡ nợ chéo lại kéo xếp hạng VỀ CÙNG nhau."
 },
 {
  "q": "An index starts at 1,000. Year 1: price return 4%, dividend return 2%. Year 2: price return 6%, dividend return 3%. The total return index value at the end of Year 2 is closest to:",
  "opts": [
   "1,102",
   "1,150",
   "1,155"
  ],
  "ans": 2,
  "en": "Total return compounds price plus dividends: 1,000 × 1.06 × 1.09 = 1,155.4. The price-only version gives 1,102, and 1,150 is the no-compounding trap.",
  "vi": "Chỉ số tổng lợi suất lũy kế cả giá lẫn cổ tức: 1.000 × 1,06 × 1,09 = 1.155,4. Bản chỉ tính giá cho 1.102, còn 1.150 là bẫy cộng dồn không lũy kế."
 },
 {
  "q": "Bond 1: monthly payments, amortizing. Bond 2: quarterly payments, amortizing. Bond 3: monthly payments, non-amortizing. All else equal, the bond with the GREATEST reinvestment risk is:",
  "opts": [
   "Bond 1",
   "Bond 2",
   "Bond 3"
  ],
  "ans": 0,
  "en": "Reinvestment risk grows with the amount of cash returned early: monthly frequency AND amortizing principal make Bond 1 recycle the most cash soonest.",
  "vi": "Rủi ro tái đầu tư tăng theo lượng tiền quay về sớm: tần suất tháng CỘNG gốc trả dần khiến Bond 1 xoay vòng nhiều tiền nhất, sớm nhất."
 },
 {
  "q": "In an equally weighted portfolio of many assets, an increase in the correlation between the assets' returns most likely decreases the portfolio's:",
  "opts": [
   "Overall risk",
   "Expected return",
   "Diversification benefit"
  ],
  "ans": 2,
  "en": "Higher correlation means assets move together — diversification does less work (and portfolio risk actually RISES). Expected return is a weighted average, untouched by correlation.",
  "vi": "Tương quan cao hơn khiến các tài sản chuyển động cùng nhau — đa dạng hóa mất tác dụng (và rủi ro danh mục thực ra TĂNG). Lợi suất kỳ vọng là bình quân gia quyền, không dính gì tới tương quan."
 },
 {
  "q": "Which best describes an advantage of the EV/EBITDA multiple for valuing equity? An advantage is that:",
  "opts": [
   "The multiple must be positive",
   "EBITDA is a proxy for operating cash flow",
   "It does not require the market value of debt"
  ],
  "ans": 1,
  "en": "EBITDA approximates pre-capex operating cash flow, making the multiple usable across leverage and depreciation policies. EV construction DOES need debt's market value, and no multiple \"must\" be positive.",
  "vi": "EBITDA xấp xỉ dòng tiền hoạt động trước capex, giúp bội số dùng được qua các mức đòn bẩy và chính sách khấu hao khác nhau. Tính EV THỰC SỰ cần giá trị thị trường của nợ, và không bội số nào \"buộc phải\" dương."
 },
 {
  "q": "The value of a swap contract at initiation is most likely equal to:",
  "opts": [
   "Zero",
   "The price of the swap",
   "The present value of the fixed payments"
  ],
  "ans": 0,
  "en": "The fixed rate is set precisely so PV(fixed leg) = PV(expected floating leg) — value at inception is zero for both sides. The swap PRICE is that fixed rate, a different concept.",
  "vi": "Lãi suất cố định được chọn đúng sao cho PV(chân cố định) = PV(chân thả nổi kỳ vọng) — giá trị lúc khởi tạo bằng 0 cho cả hai bên. GIÁ của swap là mức lãi cố định đó, một khái niệm khác."
 },
 {
  "q": "All else being equal, a cash dividend most likely has the same effect on shareholders' wealth as a:",
  "opts": [
   "Stock split",
   "Stock dividend",
   "Share repurchase"
  ],
  "ans": 2,
  "en": "Both distribute cash: total shareholder wealth is unchanged (price drops by the dividend, or shares shrink at fair value). Splits and stock dividends move no cash at all — also wealth-neutral, but the CASH-distribution twin is the repurchase.",
  "vi": "Cả hai đều phân phối tiền mặt: tổng tài sản cổ đông không đổi (giá giảm đúng bằng cổ tức, hoặc số cổ phiếu giảm theo giá hợp lý). Chia tách và cổ tức cổ phiếu không dịch chuyển đồng tiền nào — cũng trung tính, nhưng người anh em phân phối TIỀN của cổ tức là mua lại cổ phiếu."
 },
 {
  "q": "An arbitrage opportunity most likely exists if the price of a put option is LESS than the combined cost of:",
  "opts": [
   "Buying the underlying, buying the call, and buying a risk-free bond at PV of the exercise price",
   "Shorting the underlying, buying the call, and buying a risk-free bond at PV of the exercise price",
   "Shorting the underlying, buying the call, and shorting a risk-free bond at PV of the exercise price"
  ],
  "ans": 1,
  "en": "Put–call parity: p = c − S + PV(X). The right side is built by buying the call (+c), shorting the underlying (−S), and buying the bond (+PV(X)). A put cheaper than this synthetic put is an arbitrage.",
  "vi": "Ngang giá put–call: p = c − S + PV(X). Vế phải được dựng bằng mua call (+c), bán khống tài sản (−S), và mua trái phiếu (+PV(X)). Put rẻ hơn put tổng hợp này là cơ hội arbitrage."
 },
 {
  "q": "An analysis of competitive positioning such as Porter's five forces is typically included in:",
  "opts": [
   "An initial company research report only",
   "A subsequent company research report only",
   "Both initial and subsequent company research reports"
  ],
  "ans": 0,
  "en": "The comprehensive industry and competitive framework anchors the INITIAL report; follow-up reports update estimates and developments rather than rebuild the framework.",
  "vi": "Khung phân tích ngành và cạnh tranh toàn diện neo ở báo cáo BAN ĐẦU; các báo cáo tiếp theo cập nhật ước tính và diễn biến chứ không dựng lại khung."
 },
 {
  "q": "With respect to private equity funds, quartile rankings:",
  "opts": [
   "Are rarely used for performance evaluation",
   "Include comparisons of different investment strategies",
   "Are based on funds launched in the same vintage year"
  ],
  "ans": 2,
  "en": "PE performance is compared within a VINTAGE YEAR — funds that invested through the same market environment — and within similar strategies, precisely because cross-vintage comparisons mislead.",
  "vi": "Hiệu quả PE được so sánh trong cùng NĂM VINTAGE — các quỹ đầu tư qua cùng môi trường thị trường — và cùng nhóm chiến lược, chính vì so sánh khác vintage sẽ gây lạc hướng."
 },
 {
  "q": "In a SEMI-STRONG-form efficient market, which of the following is reflected in prices?",
  "opts": [
   "Past market data only",
   "Private information only",
   "Both past market data and private information"
  ],
  "ans": 0,
  "en": "Semi-strong prices embed all PUBLIC information — which includes past market data — but not private information. Among the options, only \"past market data\" describes something actually reflected.",
  "vi": "Giá trong thị trường semi-strong chứa mọi thông tin CÔNG KHAI — bao gồm dữ liệu thị trường quá khứ — nhưng không chứa thông tin riêng tư. Trong các phương án, chỉ \"dữ liệu thị trường quá khứ\" là thứ thực sự được phản ánh."
 },
 {
  "q": "A quarterly-pay bond has an effective annual rate of 10%. The semiannual bond equivalent yield is closest to:",
  "opts": [
   "9.76%",
   "10.13%",
   "10.25%"
  ],
  "ans": 0,
  "en": "Semiannual rate = 1.10^0.5 − 1 = 4.881%; bond equivalent yield = 2 × 4.881% = 9.76%. Stating the same effective return with semiannual compounding requires a lower quoted rate.",
  "vi": "Lãi bán niên = 1,10^0,5 − 1 = 4,881%; bond equivalent yield = 2 × 4,881% = 9,76%. Cùng một lợi suất hiệu dụng, quy về ghép bán niên cho lãi suất niêm yết thấp hơn."
 },
 {
  "q": "Which position requires the investor to satisfy an OBLIGATION upon option exercise?",
  "opts": [
   "Short put position",
   "Long put position",
   "Long call position"
  ],
  "ans": 0,
  "en": "Option WRITERS carry obligations: the short put must buy the underlying at the strike when assigned. Long holders own rights, not duties.",
  "vi": "Người BÁN quyền chọn mang nghĩa vụ: bên short put phải mua tài sản tại giá thực hiện khi bị gán. Người nắm giữ quyền chọn có quyền, không có nghĩa vụ."
 },
 {
  "q": "Which statement concerning a security market index is most accurate?",
  "opts": [
   "Estimated market prices of constituent securities are not used to calculate the index value",
   "The divisor will be adjusted to prevent changes not related to prices of constituent securities",
   "At inception, the total return version of an index will be greater than the price version"
  ],
  "ans": 1,
  "en": "Divisor adjustments neutralize splits, constituent changes, and other non-price events. Illiquid constituents MAY use estimated prices, and at inception the two versions start EQUAL.",
  "vi": "Điều chỉnh divisor trung hòa chia tách, thay đổi thành phần và các sự kiện phi giá khác. Thành phần kém thanh khoản CÓ THỂ dùng giá ước tính, và tại thời điểm khởi tạo hai phiên bản BẰNG nhau."
 },
 {
  "q": "Which best characterizes an interest rate swap?",
  "opts": [
   "A contingent claim derivative using Libor rates as reference rates",
   "A contingent claim used to convert exposure from fixed-rate to floating-rate",
   "A firm commitment derivative used by investment managers to change portfolio duration without trading bonds"
  ],
  "ans": 2,
  "en": "Swaps are FORWARD COMMITMENTS — binding on both sides — and a classic duration-management tool. \"Contingent claim\" describes options, so A and B fail on classification.",
  "vi": "Swap là CAM KẾT KỲ HẠN — ràng buộc cả hai bên — và là công cụ kinh điển để điều chỉnh duration. \"Contingent claim\" mô tả quyền chọn, nên A và B sai ngay ở khâu phân loại."
 },
 {
  "q": "Which is best classified as a NONSYSTEMATIC risk?",
  "opts": [
   "Political uncertainty",
   "Widespread natural disasters",
   "Bankruptcy of a major automobile producer"
  ],
  "ans": 2,
  "en": "One company's bankruptcy is firm-specific and diversifiable. Political shocks and widespread disasters wash over the whole market — systematic.",
  "vi": "Phá sản của một công ty là rủi ro riêng, đa dạng hóa được. Cú sốc chính trị và thiên tai diện rộng quét qua toàn thị trường — hệ thống."
 },
 {
  "q": "Preferred shares: par $100; annual dividend $6.00; market price $85.71; maturity 10 years. If the required return is 7% (marginal tax rate 30%), the shares are most likely:",
  "opts": [
   "Undervalued",
   "Fairly valued",
   "Overvalued"
  ],
  "ans": 0,
  "en": "With a 10-year maturity, value = 6 × [1 − 1.07⁻¹⁰]/0.07 + 100/1.07¹⁰ = 42.14 + 50.83 = $92.98 > $85.71 → undervalued. Pricing it as a perpetuity (6/0.07 = 85.71) is the trap; the tax rate is noise.",
  "vi": "Với kỳ hạn 10 năm, giá trị = 6 × [1 − 1,07⁻¹⁰]/0,07 + 100/1,07¹⁰ = 42,14 + 50,83 = $92,98 > $85,71 → bị định giá thấp. Tính như vĩnh viễn (6/0,07 = 85,71) là cái bẫy; thuế suất là số gây nhiễu."
 },
 {
  "q": "Which transaction poses the risk of losing the GREATEST dollar amount?",
  "opts": [
   "Selling a put with a strike price of $15 for $0.90",
   "Buying a call with a strike price of $15 for $11.25",
   "Buying a put with a strike price of $37.50 for $12.75"
  ],
  "ans": 0,
  "en": "Max losses: short put = 15 − 0.90 = $14.10 (underlying to zero); long call = premium $11.25; long put = premium $12.75. The short put risks the most.",
  "vi": "Lỗ tối đa: bán put = 15 − 0,90 = $14,10 (tài sản về 0); mua call = phí $11,25; mua put = phí $12,75. Bán put rủi ro lớn nhất."
 },
 {
  "q": "When securitizing a corporation's loans, a special purpose entity most likely:",
  "opts": [
   "Services the corporation's loans",
   "Sells the collateral underlying the loans",
   "Purchases the corporation's loans to use as collateral"
  ],
  "ans": 2,
  "en": "The SPE buys the loan pool from the originator and issues securities backed by it — the purchase is what isolates the assets from the seller's bankruptcy. Servicing usually stays with the originator or a third party.",
  "vi": "SPE mua danh mục khoản vay từ bên khởi tạo và phát hành chứng khoán được đảm bảo bằng nó — chính giao dịch mua này cách ly tài sản khỏi rủi ro phá sản của bên bán. Việc thu hồi nợ thường vẫn do bên khởi tạo hoặc bên thứ ba đảm nhận."
 },
 {
  "q": "All else equal, which security is the MOST risky for an investor?",
  "opts": [
   "Putable preference shares",
   "Callable preference shares",
   "Non-callable preference shares"
  ],
  "ans": 1,
  "en": "The call option belongs to the ISSUER and works against the investor — shares get called away exactly when conditions favor holding them. The put option protects the investor, making putable shares the safest.",
  "vi": "Quyền mua lại thuộc về TỔ CHỨC PHÁT HÀNH và chống lại nhà đầu tư — cổ phiếu bị gọi lại đúng lúc đáng giữ nhất. Quyền bán lại bảo vệ nhà đầu tư, khiến cổ phiếu putable an toàn nhất."
 },
 {
  "q": "An investor discovers that stock prices in a country are very slow to reflect new information. The investor can best profit from this using a(n):",
  "opts": [
   "Active fund",
   "Passive fund",
   "Low cost approach"
  ],
  "ans": 0,
  "en": "Slow price adjustment = an inefficient market — exactly where active research and trading can capture mispricings before they close.",
  "vi": "Giá điều chỉnh chậm = thị trường kém hiệu quả — đúng nơi nghiên cứu và giao dịch chủ động có thể chớp các định giá sai trước khi chúng khép lại."
 },
 {
  "q": "A bond has modified duration 7.1 and convexity 49.2. The percentage price change for a 50 bps INCREASE in yield is closest to:",
  "opts": [
   "−3.61%",
   "−3.49%",
   "−1.65%"
  ],
  "ans": 1,
  "en": "%ΔP = −7.1 × 0.005 + ½ × 49.2 × 0.005² = −3.55% + 0.06% = −3.49%. Convexity softens the duration-only estimate.",
  "vi": "%ΔP = −7,1 × 0,005 + ½ × 49,2 × 0,005² = −3,55% + 0,06% = −3,49%. Độ lồi làm dịu ước tính chỉ dùng duration."
 },
 {
  "q": "Security A: standard deviation 16%, weight 60%. Security B: standard deviation 27%, weight 40%. If the portfolio's standard deviation is 20.4%, the correlation between the securities is closest to:",
  "opts": [
   "−1",
   "0",
   "1"
  ],
  "ans": 2,
  "en": "The weighted average of the standard deviations is 0.6 × 16 + 0.4 × 27 = 20.4% — exactly the portfolio's σ. That happens only with ρ = +1: zero diversification benefit.",
  "vi": "Bình quân gia quyền của hai độ lệch chuẩn là 0,6 × 16 + 0,4 × 27 = 20,4% — đúng bằng σ danh mục. Điều đó chỉ xảy ra khi ρ = +1: lợi ích đa dạng hóa bằng 0."
 },
 {
  "q": "The capital asset pricing model (CAPM) is based on the assumption that investors are risk:",
  "opts": [
   "Averse",
   "Neutral",
   "Seeking"
  ],
  "ans": 0,
  "en": "CAPM assumes rational, risk-AVERSE, mean–variance investors — that aversion is what makes them demand compensation for systematic risk.",
  "vi": "CAPM giả định nhà đầu tư duy lý, GHÉT rủi ro, tối ưu theo trung bình–phương sai — chính sự e ngại đó khiến họ đòi phần bù cho rủi ro hệ thống."
 },
 {
  "q": "A buy-and-hold investor purchases a fixed-rate bond at issuance and holds it until maturity. With respect to interest rate risk, this investor is exposed to:",
  "opts": [
   "Market price risk only",
   "Coupon reinvestment risk only",
   "Both market price risk and coupon reinvestment risk"
  ],
  "ans": 1,
  "en": "Held to maturity, the bond repays par regardless of rate moves — price risk never materializes. But every coupon must be reinvested at whatever rates prevail: reinvestment risk remains.",
  "vi": "Giữ đến đáo hạn, trái phiếu trả đủ mệnh giá bất kể lãi suất biến động — rủi ro giá không bao giờ thành hiện thực. Nhưng mỗi coupon phải tái đầu tư ở mức lãi hiện hành: rủi ro tái đầu tư vẫn còn."
 },
 {
  "q": "The value effect anomaly:",
  "opts": [
   "Contradicts semi-strong market efficiency",
   "Was identified using time series of data only",
   "States that growth stocks have consistently outperformed value stocks"
  ],
  "ans": 0,
  "en": "Value stocks beating growth on public information (P/E, P/B) contradicts semi-strong efficiency. The direction runs VALUE over growth, and it was found in cross-sectional data.",
  "vi": "Cổ phiếu giá trị thắng cổ phiếu tăng trưởng dựa trên thông tin công khai (P/E, P/B) mâu thuẫn với hiệu quả semi-strong. Chiều đúng là GIÁ TRỊ thắng tăng trưởng, và được phát hiện bằng dữ liệu chéo."
 },
 {
  "q": "A bond's price sensitivity to a NON-PARALLEL shift in the benchmark yield curve is best measured by:",
  "opts": [
   "Key rate duration",
   "Effective duration",
   "Modified duration"
  ],
  "ans": 0,
  "en": "Key rate (partial) durations isolate sensitivity at each maturity point — the tool for twists and butterflies. Effective and modified duration assume parallel moves.",
  "vi": "Key rate (partial) duration cô lập độ nhạy tại từng điểm kỳ hạn — công cụ cho các cú xoắn và butterfly. Effective và modified duration giả định dịch chuyển song song."
 },
 {
  "q": "Which instrument most likely offers investors some protection against INCREASES in the market interest rate?",
  "opts": [
   "Fixed-rate bonds",
   "Floating-rate notes",
   "Inverse floating-rate notes"
  ],
  "ans": 1,
  "en": "FRN coupons reset upward with reference rates, keeping price near par when rates climb. Fixed-rate bonds fall, and inverse floaters get hit twice — coupons shrink as discounting bites.",
  "vi": "Coupon của FRN tự điều chỉnh tăng theo lãi tham chiếu, giữ giá quanh mệnh giá khi lãi suất leo thang. Trái phiếu cố định giảm giá, còn inverse floater trúng đòn kép — coupon co lại trong khi chiết khấu cắn sâu."
 },
 {
  "q": "Average portfolio return 8.50%; standard deviation 16.00%; beta 1.10; risk-free rate 1.75%. The portfolio's Sharpe ratio is closest to:",
  "opts": [
   "0.06",
   "0.42",
   "0.53"
  ],
  "ans": 1,
  "en": "Sharpe = (8.50 − 1.75)/16.00 = 6.75/16 = 0.42. Beta belongs to the Treynor ratio — the distractor 0.53 comes from misusing it.",
  "vi": "Sharpe = (8,50 − 1,75)/16,00 = 6,75/16 = 0,42. Beta thuộc về Treynor — đáp án nhiễu 0,53 đến từ việc dùng nhầm nó."
 },
 {
  "q": "Which type of investor most likely has a LONG-TERM investment horizon AND HIGH liquidity needs?",
  "opts": [
   "Endowments",
   "Life insurance companies",
   "Defined benefit pension plans"
  ],
  "ans": 1,
  "en": "Life insurers pair decades-long policy liabilities with high liquidity needs for claims. Endowments and DB plans share the long horizon but carry LOW liquidity needs.",
  "vi": "Bảo hiểm nhân thọ ghép nghĩa vụ hợp đồng kéo dài hàng chục năm với nhu cầu thanh khoản cao để chi trả quyền lợi. Endowment và quỹ hưu DB cùng kỳ hạn dài nhưng nhu cầu thanh khoản THẤP."
 },
 {
  "q": "All else equal, which bond most likely has the LOWEST price?",
  "opts": [
   "Putable bond",
   "Callable bond",
   "Option-free bond"
  ],
  "ans": 1,
  "en": "Callable = straight bond MINUS the call option the investor granted the issuer → lowest price. Putable = straight bond PLUS the investor's put → highest.",
  "vi": "Callable = trái phiếu thường TRỪ quyền mua lại mà nhà đầu tư trao cho tổ chức phát hành → giá thấp nhất. Putable = trái phiếu thường CỘNG quyền bán lại của nhà đầu tư → cao nhất."
 },
 {
  "q": "Using the rating scale from Standard & Poor's or Fitch, the LOWEST rating for an investment-grade bond is:",
  "opts": [
   "BBB−",
   "BBB",
   "BBB+"
  ],
  "ans": 0,
  "en": "Investment grade runs down to BBB−; one notch below, BB+, begins high yield.",
  "vi": "Hạng đầu tư kéo xuống đến BBB−; thấp hơn một bậc, BB+, đã sang high yield."
 },
 {
  "q": "If a risk-free asset is added to a portfolio of risky assets, the highest achievable return for a given level of risk most likely:",
  "opts": [
   "Decreases",
   "Remains unchanged",
   "Increases"
  ],
  "ans": 2,
  "en": "The capital allocation line from the risk-free rate through the tangency portfolio dominates the risky-only efficient frontier — more return at every risk level except the tangency point itself.",
  "vi": "Đường phân bổ vốn từ lãi suất phi rủi ro qua danh mục tiếp tuyến vượt trội đường biên hiệu quả chỉ-tài-sản-rủi-ro — lợi suất cao hơn ở mọi mức rủi ro trừ chính điểm tiếp tuyến."
 },
 {
  "q": "Which statement best describes the relationship between the net costs of carry and the forward price?",
  "opts": [
   "If the costs of carry exceed the benefits, the forward price would be lower",
   "If the costs of carry exceed the benefits, the forward price would be higher",
   "If the benefits exceed the costs of carry, the forward price would be higher"
  ],
  "ans": 1,
  "en": "F₀ = [S₀ + PV(costs) − PV(benefits)] × (1 + r)ᵀ: storage and insurance push the forward UP; dividends and convenience yield pull it DOWN.",
  "vi": "F₀ = [S₀ + PV(chi phí) − PV(lợi ích)] × (1 + r)ᵀ: chi phí lưu kho, bảo hiểm đẩy giá forward LÊN; cổ tức và lợi ích nắm giữ kéo nó XUỐNG."
 },
 {
  "q": "A European call option is IN THE MONEY whenever the value of the underlying is:",
  "opts": [
   "Less than the exercise price",
   "Equal to the exercise price",
   "Greater than the exercise price"
  ],
  "ans": 2,
  "en": "A call pays max(S − X, 0): it has positive exercise value only when S > X.",
  "vi": "Call trả max(S − X, 0): chỉ có giá trị thực hiện dương khi S > X."
 },
 {
  "q": "Compared to trading an underlying directly, trading a derivative on the underlying most likely involves:",
  "opts": [
   "Lower transaction costs",
   "A lower degree of leverage",
   "A larger amount of required capital"
  ],
  "ans": 0,
  "en": "Derivatives deliver the exposure with lower transaction costs, LESS capital, and MORE leverage — the last two options state the exact opposites.",
  "vi": "Phái sinh mang lại cùng mức phơi nhiễm với chi phí giao dịch thấp hơn, vốn ÍT hơn và đòn bẩy CAO hơn — hai phương án sau nói ngược hoàn toàn."
 },
 {
  "q": "Which statement about alternative investments' compensation structures is most accurate?",
  "opts": [
   "A hurdle rate protects clients from paying twice for the same performance",
   "The management fee for a private equity fund is based on committed capital until fully drawn",
   "The management fee is earned only after the fund achieves a return known as a high-water mark"
  ],
  "ans": 1,
  "en": "PE management fees run on COMMITTED capital during the investment period, shifting to invested capital later. Double-payment protection is the high-water mark's job, and management fees accrue regardless of performance.",
  "vi": "Phí quản lý PE tính trên vốn CAM KẾT trong giai đoạn đầu tư, sau đó chuyển sang vốn đã giải ngân. Chống trả phí hai lần là việc của high-water mark, còn phí quản lý chạy bất kể thành tích."
 },
 {
  "q": "According to put–call FORWARD parity, a long put is equal to:",
  "opts": [
   "A long call, a long risk-free bond and a long forward",
   "A long call, a long risk-free bond and a short forward",
   "A short call, a long risk-free bond and a short forward"
  ],
  "ans": 1,
  "en": "p = c + PV(X − F₀): buy the call, buy the bond, and take the SHORT side of the forward — the short forward replaces shorting the underlying in standard parity.",
  "vi": "p = c + PV(X − F₀): mua call, mua trái phiếu, và đứng bên BÁN của hợp đồng forward — vị thế short forward thay cho việc bán khống tài sản trong parity chuẩn."
 },
 {
  "q": "Initial stock price $80; leverage ratio 2.5. If the first margin call occurs at a stock price below $60, the maintenance margin is closest to:",
  "opts": [
   "15.0%",
   "20.0%",
   "46.7%"
  ],
  "ans": 1,
  "en": "Leverage 2.5 → equity = 40% → debt = 0.60 × 80 = $48 per share. At $60: equity = 60 − 48 = 12 → 12/60 = 20%.",
  "vi": "Đòn bẩy 2,5 → vốn chủ = 40% → nợ = 0,60 × 80 = $48 mỗi cổ phiếu. Tại $60: vốn chủ = 60 − 48 = 12 → 12/60 = 20%."
 },
 {
  "q": "An option-free bond is valued at 92.733 at a yield of 11%. The value is 94.474 for a 60 bps decrease and 91.041 for a 60 bps increase. The approximate modified duration is closest to:",
  "opts": [
   "1.85",
   "3.09",
   "6.17"
  ],
  "ans": 1,
  "en": "ApproxModDur = (P₋ − P₊)/(2 × P₀ × Δy) = (94.474 − 91.041)/(2 × 92.733 × 0.006) = 3.433/1.1128 = 3.09.",
  "vi": "ApproxModDur = (P₋ − P₊)/(2 × P₀ × Δy) = (94,474 − 91,041)/(2 × 92,733 × 0,006) = 3,433/1,1128 = 3,09."
 },
 {
  "q": "A hedge fund that implements trades based on a top-down analysis of expected movements in economic variables most likely uses a(n):",
  "opts": [
   "Macro strategy",
   "Relative value strategy",
   "Event-driven strategy"
  ],
  "ans": 0,
  "en": "Betting on macroeconomic variables — rates, currencies, growth — from the top down is the definition of a macro strategy. Relative value trades pricing gaps; event-driven trades corporate events.",
  "vi": "Đặt cược vào biến số vĩ mô — lãi suất, tiền tệ, tăng trưởng — theo hướng từ trên xuống chính là định nghĩa chiến lược macro. Relative value chơi chênh lệch định giá; event-driven chơi sự kiện doanh nghiệp."
 },
 {
  "q": "Bond 1: rating B, issuer debt outstanding $1 billion. Bond 2: rating BB, $1 billion. Bond 3: rating BB, $30 billion. The bond with the GREATEST market liquidity risk is most likely:",
  "opts": [
   "Bond 1",
   "Bond 2",
   "Bond 3"
  ],
  "ans": 0,
  "en": "Liquidity thins with smaller issue size AND lower credit quality — Bond 1 combines the small $1b float with the lowest (B) rating.",
  "vi": "Thanh khoản mỏng đi khi quy mô phát hành nhỏ VÀ chất lượng tín dụng thấp — Bond 1 gộp cả lượng lưu hành nhỏ $1 tỷ lẫn xếp hạng thấp nhất (B)."
 },
 {
  "q": "Four years ago, a 5% coupon, annual-pay bond with a 10-year maturity was issued at par. If the current market discount rate is 7%, the price per 100 of par is closest to:",
  "opts": [
   "90.34",
   "90.47",
   "93.23"
  ],
  "ans": 1,
  "en": "Six years remain: P = 5 × [1 − 1.07⁻⁶]/0.07 + 100/1.07⁶ = 23.83 + 66.63 = 90.47. Using ten years (90.34-ish territory) is the trap.",
  "vi": "Còn sáu năm: P = 5 × [1 − 1,07⁻⁶]/0,07 + 100/1,07⁶ = 23,83 + 66,63 = 90,47. Dùng nhầm mười năm là cái bẫy."
 },
 {
  "q": "In an investment policy statement, which constraint most likely outlines a client's preference for environmentally sustainable investments?",
  "opts": [
   "Time horizon",
   "Unique circumstances",
   "Legal and regulatory factors"
  ],
  "ans": 1,
  "en": "ESG preferences, exclusions, and other personal considerations live in the \"unique circumstances\" bucket of the IPS constraints.",
  "vi": "Sở thích ESG, các loại trừ và cân nhắc cá nhân khác nằm trong ô \"unique circumstances\" của phần ràng buộc IPS."
 },
 {
  "q": "For an institutional investor, the investment committee's approach to appointing and reviewing investment managers is most likely set out during the:",
  "opts": [
   "Portfolio construction process",
   "Strategic asset allocation decision",
   "Preparation of the investment policy statement"
  ],
  "ans": 2,
  "en": "Governance arrangements — who selects, monitors, and replaces managers — belong in the IPS, the document that frames everything downstream.",
  "vi": "Các dàn xếp quản trị — ai chọn, giám sát, thay thế nhà quản lý — thuộc về IPS, văn kiện đặt khung cho mọi bước phía sau."
 },
 {
  "q": "All else equal, for option-free bonds, the percentage price change for a given yield change is most likely greater for a bond:",
  "opts": [
   "With a high coupon than for a bond with a low coupon",
   "With a short time-to-maturity than for a bond with a long time-to-maturity",
   "When the market discount rate goes down than when it goes up"
  ],
  "ans": 2,
  "en": "Convexity makes price gains from falling yields exceed price losses from equal rises. Low coupons and LONG maturities — not high and short — amplify sensitivity.",
  "vi": "Độ lồi khiến mức tăng giá khi lợi suất giảm lớn hơn mức giảm giá khi lợi suất tăng cùng biên độ. Coupon thấp và kỳ hạn DÀI — không phải cao và ngắn — mới khuếch đại độ nhạy."
 },
 {
  "q": "Which statement is most accurate? Smart beta strategies:",
  "opts": [
   "Invest in high market beta stocks to generate an abnormal return",
   "Use simple rules-based strategies as a basis for investment decisions",
   "Typically have lower portfolio turnover than passive market-cap weighted strategies"
  ],
  "ans": 1,
  "en": "Smart beta = transparent, rules-based tilts toward factors (value, size, quality). It is not about high-beta stocks, and rebalancing gives it HIGHER turnover than cap-weighted indexing.",
  "vi": "Smart beta = nghiêng theo nhân tố (giá trị, quy mô, chất lượng) bằng quy tắc minh bạch. Không phải chọn cổ phiếu beta cao, và việc tái cân bằng khiến vòng quay CAO hơn chỉ số theo vốn hóa."
 },
 {
  "q": "Hedge fund: beginning AUM £200m; management fee 2% of end-of-year AUM before fees; incentive fee 10%; SOFT hurdle rate 5%; annual return before fees 20%. If the incentive fee is calculated independently of the management fee, total fees are:",
  "opts": [
   "£7,800,000",
   "£8,320,000",
   "£8,800,000"
  ],
  "ans": 2,
  "en": "End AUM = 240 → management fee = 2% × 240 = £4.8m. Gain = £40m; the 20% return clears the 5% SOFT hurdle, so the incentive applies to the ENTIRE gain: 10% × 40 = £4.0m. Total = £8.8m.",
  "vi": "AUM cuối = 240 → phí quản lý = 2% × 240 = £4,8tr. Lãi = £40tr; lợi suất 20% vượt hurdle MỀM 5%, nên phí thành tích tính trên TOÀN BỘ khoản lãi: 10% × 40 = £4,0tr. Tổng = £8,8tr."
 },
 {
  "q": "Which is most likely one of the main functions of the financial system?",
  "opts": [
   "Determining an equilibrium interest rate",
   "Ensuring that markets are informationally efficient",
   "Ensuring that all investment projects receive sufficient funding"
  ],
  "ans": 0,
  "en": "The system discovers the rate that equates aggregate savings and borrowing — the equilibrium interest rate. Efficiency is a desirable byproduct, and only WORTHY projects should be funded.",
  "vi": "Hệ thống tài chính khám phá mức lãi suất cân bằng tổng tiết kiệm và tổng vay — lãi suất cân bằng. Tính hiệu quả là sản phẩm phụ đáng mong, và chỉ dự án XỨNG ĐÁNG mới nên được cấp vốn."
 },
 {
  "q": "Which is most likely a distinction between futures and forward contracts? Futures contracts are:",
  "opts": [
   "Easily customized",
   "Traded on an exchange",
   "More attractive than forwards for long positions when futures prices are negatively correlated to interest rates"
  ],
  "ans": 1,
  "en": "Exchange trading — with standardization, clearing, and daily settlement — is THE distinction. Customization belongs to forwards, and negative price–rate correlation actually favors forwards.",
  "vi": "Giao dịch trên sàn — kèm chuẩn hóa, thanh toán bù trừ, quyết toán hằng ngày — chính LÀ điểm phân biệt. May đo theo yêu cầu thuộc về forward, còn tương quan giá–lãi suất âm thực ra nghiêng lợi thế về forward."
 },
 {
  "q": "Which is most likely a LONG-TERM benefit of adding alternative investments to a portfolio of traditional investments?",
  "opts": [
   "Enhanced liquidity of the combined portfolio",
   "High correlation with traditional asset returns",
   "Improved risk-return profile of the combined portfolio"
  ],
  "ans": 2,
  "en": "The case for alternatives is diversification from LOW correlation, improving the risk-return profile. Liquidity typically worsens, and high correlation would defeat the purpose.",
  "vi": "Lý do đầu tư alternatives là đa dạng hóa nhờ tương quan THẤP, cải thiện hồ sơ rủi ro-lợi suất. Thanh khoản thường xấu đi, còn tương quan cao thì phá hỏng mục đích."
 },
 {
  "q": "In the event of a default, which mortgage structure exposes a LENDER to the greatest risk of loss?",
  "opts": [
   "Interest-only, recourse loan",
   "Fully amortizing, recourse loan",
   "Balloon payment, non-recourse loan"
  ],
  "ans": 2,
  "en": "A balloon structure leaves the most principal outstanding at default, and non-recourse bars the lender from pursuing the borrower's other assets — maximum exposure on both dimensions.",
  "vi": "Cấu trúc balloon để lại nhiều gốc chưa trả nhất khi vỡ nợ, và non-recourse chặn bên cho vay truy đòi tài sản khác của người vay — phơi nhiễm tối đa trên cả hai chiều."
 },
 {
  "q": "Which statement about infrastructure investing is most accurate? Infrastructure:",
  "opts": [
   "Assets are typically unlevered",
   "Assets are intended for public use",
   "Cash flows typically have a negative correlation with inflation"
  ],
  "ans": 1,
  "en": "Infrastructure assets serve the public — roads, utilities, airports. They are typically financed with SIGNIFICANT leverage, and regulated tariffs often link cash flows POSITIVELY to inflation.",
  "vi": "Tài sản hạ tầng phục vụ công cộng — đường sá, tiện ích, sân bay. Chúng thường được tài trợ bằng đòn bẩy LỚN, và biểu phí điều tiết thường gắn dòng tiền THUẬN chiều với lạm phát."
 },
 {
  "q": "EPS/DPS/ROE by year — Y1: 2.25/1.25/9%; Y2: 2.76/1.35/11%; Y3: 2.08/1.62/15%; Y4: 2.44/1.74/13%; Y5: 3.60/1.85/17%; Y6: 3.20/1.92/12%. Growth = average of (1) the compounded annual dividend growth rate over Y1–Y6 and (2) the sustainable growth rate for Year 6. With required return 15%, the intrinsic value is closest to:",
  "opts": [
   "$25.31",
   "$23.71",
   "$30.14"
  ],
  "ans": 0,
  "en": "Dividend CAGR = (1.92/1.25)^(1/5) − 1 = 8.97%. Y6 sustainable growth = ROE × (1 − payout) = 12% × (1 − 1.92/3.20) = 12% × 0.40 = 4.8%. g = (8.97 + 4.8)/2 = 6.89%. V = 1.92 × 1.0689/(0.15 − 0.0689) = 2.052/0.0811 = $25.31.",
  "vi": "CAGR cổ tức = (1,92/1,25)^(1/5) − 1 = 8,97%. SGR năm 6 = ROE × (1 − payout) = 12% × (1 − 1,92/3,20) = 12% × 0,40 = 4,8%. g = (8,97 + 4,8)/2 = 6,89%. V = 1,92 × 1,0689/(0,15 − 0,0689) = 2,052/0,0811 = $25,31."
 },
 {
  "q": "Which is LEAST likely a component of yield spread?",
  "opts": [
   "Taxation",
   "Credit risk",
   "Expected inflation rate"
  ],
  "ans": 2,
  "en": "Expected inflation lives inside the BENCHMARK yield. The spread over the benchmark compensates for credit risk, liquidity, and tax treatment.",
  "vi": "Lạm phát kỳ vọng nằm trong lợi suất BENCHMARK. Phần spread trên benchmark bù đắp rủi ro tín dụng, thanh khoản và thuế."
 },
 {
  "q": "The earnings multiplier (P/E) for a stock increases with a DECREASE in the:",
  "opts": [
   "Expected dividend growth rate",
   "Expected dividend payout ratio",
   "Estimated required rate of return on equity"
  ],
  "ans": 2,
  "en": "P/E = payout/(r − g): a smaller r shrinks the denominator (r − g), lifting the multiple. Lower g or lower payout would push P/E DOWN.",
  "vi": "P/E = payout/(r − g): r nhỏ hơn làm (r − g) co lại, nâng bội số lên. Giảm g hay giảm payout sẽ kéo P/E XUỐNG."
 },
 {
  "q": "The most appropriate measure of interest rate risk for a bond to a PARALLEL shift in the benchmark yield curve is:",
  "opts": [
   "Effective duration",
   "Modified duration",
   "Macaulay duration"
  ],
  "ans": 0,
  "en": "Effective duration shifts the whole BENCHMARK CURVE in parallel — exactly the scenario described. Modified duration responds to the bond's own YTM; Macaulay is a weighted-average time.",
  "vi": "Effective duration dịch song song toàn bộ ĐƯỜNG CONG BENCHMARK — đúng kịch bản đề nêu. Modified duration phản ứng với YTM riêng của trái phiếu; Macaulay là thời gian bình quân gia quyền."
 },
 {
  "q": "A successful portfolio risk budget will most likely:",
  "opts": [
   "Be based on multiple sources of risk",
   "Produce superior performance compared to passive investing",
   "Lead to investment in assets with the highest return per unit of risk"
  ],
  "ans": 2,
  "en": "Risk budgeting allocates the total risk appetite to where it earns the most — assets and strategies with the highest return per unit of risk. It can use one or many risk measures, and beating passive is never guaranteed.",
  "vi": "Ngân sách rủi ro phân bổ tổng khẩu vị rủi ro vào nơi sinh lợi nhiều nhất — các tài sản và chiến lược có lợi suất trên mỗi đơn vị rủi ro cao nhất. Nó có thể dùng một hay nhiều thước đo rủi ro, và không hề bảo đảm thắng đầu tư thụ động."
 },
 {
  "q": "In an order-driven market, if the trade price is determined by the LIMIT PRICE of a standing order, the market most likely operates under the:",
  "opts": [
   "Uniform pricing rule",
   "Derivative pricing rule",
   "Discriminatory pricing rule"
  ],
  "ans": 2,
  "en": "Continuous order-driven markets price each trade at the standing limit order it hits — different trades, different prices: discriminatory. Uniform pricing clears call auctions at one price; derivative pricing borrows prices from another market.",
  "vi": "Thị trường khớp lệnh liên tục định giá mỗi giao dịch theo lệnh giới hạn đang chờ bị khớp — mỗi giao dịch một giá: discriminatory. Uniform pricing khớp phiên định kỳ tại một giá duy nhất; derivative pricing mượn giá từ thị trường khác."
 },
 {
  "q": "An investor SELLS a European put: put price 50, exercise price 1,640. If the underlying is 1,670 at expiration, the profit for the seller is:",
  "opts": [
   "20",
   "30",
   "50"
  ],
  "ans": 2,
  "en": "S = 1,670 > X = 1,640 → the put expires worthless and the seller keeps the entire 50 premium.",
  "vi": "S = 1.670 > X = 1.640 → put hết hạn vô giá trị và người bán giữ trọn khoản phí 50."
 },
 {
  "q": "Validity instructions indicate:",
  "opts": [
   "How to fill an order",
   "When an order may be filled",
   "How to arrange final settlement of an order"
  ],
  "ans": 1,
  "en": "Validity instructions specify WHEN the order can execute (day order, good-till-cancelled, immediate-or-cancel). \"How to fill\" is an execution instruction; settlement arrangements are clearing instructions.",
  "vi": "Chỉ thị hiệu lực quy định KHI NÀO lệnh được khớp (lệnh trong ngày, hiệu lực đến khi hủy, khớp ngay hoặc hủy). \"Khớp thế nào\" là chỉ thị thực hiện; dàn xếp quyết toán là chỉ thị bù trừ."
 },
 {
  "q": "When the forward price of a commodity EXCEEDS the spot price, the commodity market is most likely in:",
  "opts": [
   "Carry",
   "Contango",
   "Backwardation"
  ],
  "ans": 1,
  "en": "Forward above spot = contango — an upward-sloping forward curve, typical when storage costs dominate convenience yield. Backwardation is the mirror image.",
  "vi": "Forward cao hơn spot = contango — đường cong kỳ hạn dốc lên, điển hình khi chi phí lưu kho lấn át lợi ích nắm giữ. Backwardation là hình ảnh gương."
 },
 {
  "q": "Which is private debt funding used by companies in the SEED stage of their life cycle?",
  "opts": [
   "Venture debt",
   "Direct lending",
   "Mezzanine financing"
  ],
  "ans": 0,
  "en": "Venture debt serves start-ups alongside VC equity — often with warrants to compensate the extreme risk. Direct lending and mezzanine target established, cash-flowing borrowers.",
  "vi": "Venture debt phục vụ start-up song song với vốn VC — thường kèm warrant để bù rủi ro cực cao. Direct lending và mezzanine nhắm vào bên vay đã trưởng thành, có dòng tiền."
 },
 {
  "q": "For a fixed-rate bond, Macaulay duration is:",
  "opts": [
   "Unrelated to the bond's yield-to-maturity",
   "Inversely related to the bond's yield-to-maturity",
   "Positively related to the bond's yield-to-maturity"
  ],
  "ans": 1,
  "en": "Higher yields discount distant cash flows more harshly, shifting weight toward earlier payments — the weighted-average time (Macaulay duration) shortens.",
  "vi": "Lợi suất cao chiết khấu dòng tiền xa nặng tay hơn, dồn trọng số về các khoản gần — thời gian bình quân gia quyền (Macaulay duration) ngắn lại."
 },
 {
  "q": "With respect to portfolio construction, combining long-term capital market expectations with the objectives and constraints from the investment policy statement determines a portfolio's:",
  "opts": [
   "Security selection",
   "Tactical asset allocation",
   "Strategic asset allocation"
  ],
  "ans": 2,
  "en": "Long-run expectations + IPS objectives and constraints = the strategic asset allocation. Tactical shifts are short-term deviations from it; security selection fills in the details.",
  "vi": "Kỳ vọng dài hạn + mục tiêu và ràng buộc trong IPS = phân bổ tài sản chiến lược. Điều chỉnh chiến thuật là các độ lệch ngắn hạn khỏi nó; chọn chứng khoán lấp phần chi tiết."
 },
 {
  "q": "The correlation of cryptocurrencies with traditional assets has been:",
  "opts": [
   "Decreasing",
   "Steady",
   "Increasing"
  ],
  "ans": 2,
  "en": "As institutional adoption grew, cryptocurrencies increasingly traded like risk assets — their correlation with equities has risen, eroding the early diversification story.",
  "vi": "Khi tổ chức tham gia nhiều hơn, tiền mã hóa ngày càng giao dịch như tài sản rủi ro — tương quan với cổ phiếu đã tăng lên, bào mòn câu chuyện đa dạng hóa thuở đầu."
 },
 {
  "q": "Initial investment $100 million; one-year return 12%; management fee 1% of AUM (end-of-period valuation); incentive fee 10% of return net of the management fee. The investor's net return is closest to:",
  "opts": [
   "9.68%",
   "9.79%",
   "10.88%"
  ],
  "ans": 1,
  "en": "End value = 112. Management fee = 1% × 112 = 1.12. Gain net of management fee = 12 − 1.12 = 10.88 → incentive = 1.088. Investor keeps 112 − 1.12 − 1.088 = 109.79 → net return 9.79%.",
  "vi": "Giá trị cuối = 112. Phí quản lý = 1% × 112 = 1,12. Lãi sau phí quản lý = 12 − 1,12 = 10,88 → phí thành tích = 1,088. Nhà đầu tư còn 112 − 1,12 − 1,088 = 109,79 → lợi suất ròng 9,79%."
 }
]
});
